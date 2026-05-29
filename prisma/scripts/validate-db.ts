/**
 * validate-db.ts
 *
 * Validates database integrity after import or shuffle:
 *   - Every question has exactly 4 options
 *   - Every question has exactly 1 correct option
 *   - Correct answer is NOT fixed to a single position (distribution check)
 *   - Every topic.handbookUrl returns a non-4xx/5xx HTTP status
 *
 * Run after import or shuffle:  npx tsx prisma/scripts/validate-db.ts
 */
import "dotenv/config";
import https from "https";
import http from "http";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

function checkUrl(url: string, depth = 0): Promise<{ status: number | string; ok: boolean }> {
  if (depth > 5) return Promise.resolve({ status: "TOO_MANY_REDIRECTS", ok: false });
  return new Promise((resolve) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
      timeout: 12000,
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        req.destroy();
        const loc = res.headers.location;
        const next = loc.startsWith("http") ? loc : new URL(loc, url).href;
        checkUrl(next, depth + 1).then(resolve);
        return;
      }
      res.destroy();
      resolve({ status: res.statusCode ?? "?", ok: !!res.statusCode && res.statusCode < 400 });
    });
    req.on("error", () => resolve({ status: "ERR", ok: false }));
    req.on("timeout", () => { req.destroy(); resolve({ status: "TIMEOUT", ok: false }); });
  });
}

async function main() {
  const categories = await prisma.examCategory.findMany({
    include: {
      topics: {
        include: {
          questions: { include: { options: { orderBy: { id: "asc" } } } },
        },
      },
    },
  });

  let totalErrors = 0;
  let totalQuestions = 0;

  // ── 1. Question integrity + answer distribution ───────────────────────────
  console.log("📋 Checking question integrity & answer distribution...\n");
  for (const cat of categories) {
    const catErrors: string[] = [];
    const posCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

    for (const topic of cat.topics) {
      for (const q of topic.questions) {
        totalQuestions++;
        const opts = q.options;
        if (opts.length !== 4) catErrors.push(`  Q${q.id}: has ${opts.length} options (expected 4)`);
        const correctCount = opts.filter((o) => o.isCorrect).length;
        if (correctCount !== 1) catErrors.push(`  Q${q.id}: has ${correctCount} correct options (expected 1)`);
        const idx = opts.findIndex((o) => o.isCorrect);
        if (idx >= 0 && idx < 4) posCounts[idx + 1]++;
      }
    }

    const catTotal = Object.values(posCounts).reduce((a, b) => a + b, 0);
    const maxPct = catTotal > 0 ? Math.max(...Object.values(posCounts)) / catTotal : 0;
    const dist = [1, 2, 3, 4].map((p) => `P${p}:${posCounts[p]}`).join(" ");
    const distOk = maxPct <= 0.60;

    if (catErrors.length > 0) {
      console.log(`❌ ${cat.name} (${catTotal} questions)`);
      catErrors.forEach((e) => console.log(e));
      totalErrors += catErrors.length;
    } else {
      console.log(`${distOk ? "✅" : "⚠️ "} ${cat.name.padEnd(40)} ${dist}  ${distOk ? "" : "<-- answer bias!"}`);
      if (!distOk) totalErrors++;
    }
  }

  console.log(`\nTotal questions: ${totalQuestions}`);

  // ── 2. topic.handbookUrl HTTP check ──────────────────────────────────────
  console.log("\n🔗 Checking topic.handbookUrl links...\n");

  const urlChecks: { state: string; topic: string; url: string }[] = [];
  for (const cat of categories) {
    for (const topic of cat.topics) {
      if (topic.handbookUrl) {
        urlChecks.push({
          state: cat.nameEn.replace(" Driver's License", ""),
          topic: topic.name,
          url: topic.handbookUrl,
        });
      }
    }
  }

  // Run checks in parallel batches of 6
  const batchSize = 6;
  const urlErrors: string[] = [];
  for (let i = 0; i < urlChecks.length; i += batchSize) {
    const batch = urlChecks.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (item) => ({ ...item, ...(await checkUrl(item.url)) }))
    );
    for (const r of results) {
      const icon = r.ok ? "✅" : "❌";
      console.log(`  ${icon} [${r.status}] ${r.state} / ${r.topic}`);
      if (!r.ok) {
        console.log(`       URL: ${r.url}`);
        urlErrors.push(`${r.state} / ${r.topic}: ${r.url} → ${r.status}`);
        totalErrors++;
      }
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`\n─────────────────────────────────────────`);
  if (totalErrors === 0) {
    console.log(`✅ All checks passed.\n`);
  } else {
    if (urlErrors.length > 0) {
      console.log(`\n❌ Failed topic URLs:`);
      urlErrors.forEach((e) => console.log(`   ${e}`));
    }
    console.log(`\n❌ ${totalErrors} issue(s) found.\n`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
