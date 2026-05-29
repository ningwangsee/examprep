/**
 * validate-db.ts
 *
 * Validates database integrity after import or shuffle:
 *   1. Every question has exactly 4 options
 *   2. Every question has exactly 1 correct option
 *   3. Correct answer is NOT fixed to a single position (distribution check)
 *   4. Every topic.handbookUrl returns a non-4xx/5xx HTTP status
 *   5. Every question.handbookSection prefix matches the topic's expected chapter title
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

// ── Chapter title map ─────────────────────────────────────────────────────────
// Key:   "<category.nameEn>::<topic.nameEn>"
// Value: expected handbookSection prefix (the part before " — ")
//
// Only add topics that link to a real online chapter page (not PDFs).
// PDF-based states (TX, FL) have no strict chapter title to enforce.
// Leave a topic out of this map to skip the prefix check for it.
const CHAPTER_TITLES: Record<string, string> = {
  // ── California (online chapter pages) ────────────────────────────────────
  "California Driver's License::Traffic Signs & Signals":       "Introduction to Driving",
  "California Driver's License::Right-of-Way Rules":            "Laws and Rules of the Road",
  "California Driver's License::Speed Limits":                  "Safe Driving",
  "California Driver's License::DUI & Alcohol Laws":            "Alcohol and Drugs",
  "California Driver's License::Lane Usage & Passing":          "Navigating the Roads",
  "California Driver's License::Safe Driving & Parking":        "Safe Driving",

  // ── Pennsylvania (online chapter pages) ──────────────────────────────────
  "Pennsylvania Driver's License::Driver License":                           "Driver License",
  "Pennsylvania Driver's License::Signals, Signs and Pavement Markings":    "Signals, Signs & Markings",
  "Pennsylvania Driver's License::Choosing Safety First":                    "Choosing Safety First",
  "Pennsylvania Driver's License::Everyday Driving Skills":                  "Everyday Driving Skills",
  "Pennsylvania Driver's License::Special Circumstances and Emergencies":    "Special Circumstances and Emergencies",
  "Pennsylvania Driver's License::Driver Factors":                           "Driver Factors",
  "Pennsylvania Driver's License::Driving Record Information":               "Driving Record Information",
  "Pennsylvania Driver's License::Laws and Related Issues":                  "Laws and Related Issues",

  // ── New York (online chapter pages) ──────────────────────────────────────
  "New York Driver's License::Traffic Control & Road Signs":            "Traffic Control",
  "New York Driver's License::Right-of-Way, Intersections & Turns":    "Intersections and Turns",
  "New York Driver's License::Speed, Space & Defensive Driving":        "Defensive Driving",
  "New York Driver's License::Alcohol & Other Drugs":                   "Alcohol and Other Drugs",
  "New York Driver's License::Driver Licensing & Vehicle Laws":         "Driver Licenses",
  "New York Driver's License::Sharing the Road & Crash Procedures":     "Sharing the Road",
};

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

  // ── 3. handbookSection prefix check ──────────────────────────────────────
  console.log("\n📖 Checking handbookSection prefixes vs chapter titles...\n");

  let prefixErrors = 0;
  let prefixChecked = 0;

  for (const cat of categories) {
    for (const topic of cat.topics) {
      const key = `${cat.nameEn}::${topic.nameEn}`;
      const expected = CHAPTER_TITLES[key];
      if (!expected) continue; // PDF-based or not yet mapped — skip

      const badQuestions: string[] = [];
      for (const q of topic.questions) {
        if (!q.handbookSection) continue;
        prefixChecked++;
        const prefix = q.handbookSection.split(" — ")[0];
        if (prefix !== expected) {
          badQuestions.push(`    Q${q.id}: "${q.handbookSection}" (expected prefix "${expected}")`);
        }
      }

      const state = cat.nameEn.replace(" Driver's License", "");
      if (badQuestions.length > 0) {
        console.log(`  ❌ ${state} / ${topic.nameEn} — expected prefix: "${expected}"`);
        badQuestions.forEach((l) => console.log(l));
        prefixErrors += badQuestions.length;
      } else {
        console.log(`  ✅ ${state} / ${topic.nameEn}`);
      }
    }
  }

  if (prefixErrors > 0) totalErrors += prefixErrors;
  console.log(`\n  ${prefixChecked} questions checked, ${prefixErrors} prefix mismatch(es)`);

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
