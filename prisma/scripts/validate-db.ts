/**
 * validate-db.ts
 *
 * Validates database integrity after import or shuffle:
 *   - Every question has exactly 4 options
 *   - Every question has exactly 1 correct option
 *   - Correct answer is NOT fixed to a single position (distribution check)
 *
 * Run after import or shuffle:  npx tsx prisma/scripts/validate-db.ts
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const categories = await prisma.examCategory.findMany({
    include: {
      topics: {
        include: {
          questions: {
            include: { options: { orderBy: { id: "asc" } } },
          },
        },
      },
    },
  });

  let totalErrors = 0;
  let totalQuestions = 0;

  for (const cat of categories) {
    const catErrors: string[] = [];
    const posCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

    for (const topic of cat.topics) {
      for (const q of topic.questions) {
        totalQuestions++;
        const opts = q.options;

        // Check option count
        if (opts.length !== 4) {
          catErrors.push(`  Q${q.id}: has ${opts.length} options (expected 4)`);
        }

        // Check correct count
        const correctCount = opts.filter((o) => o.isCorrect).length;
        if (correctCount !== 1) {
          catErrors.push(`  Q${q.id}: has ${correctCount} correct options (expected 1)`);
        }

        // Track position
        const idx = opts.findIndex((o) => o.isCorrect);
        if (idx >= 0 && idx < 4) posCounts[idx + 1]++;
      }
    }

    // Check distribution: if any single position has >60% of answers, flag it
    const catTotal = Object.values(posCounts).reduce((a, b) => a + b, 0);
    const maxPct = catTotal > 0 ? Math.max(...Object.values(posCounts)) / catTotal : 0;

    const dist = [1, 2, 3, 4].map((p) => `P${p}:${posCounts[p]}`).join(" ");
    const distOk = maxPct <= 0.60;
    const distIcon = distOk ? "✅" : "⚠️ ";

    if (catErrors.length > 0) {
      console.log(`❌ ${cat.name} (${catTotal} questions)`);
      catErrors.forEach((e) => console.log(e));
      totalErrors += catErrors.length;
    } else {
      console.log(`${distIcon} ${cat.name.padEnd(40)} ${dist}  ${distOk ? "" : "<-- answer bias detected!"}`);
      if (!distOk) totalErrors++;
    }
  }

  console.log(`\n─────────────────────────────────────────`);
  console.log(`Total questions: ${totalQuestions}`);

  if (totalErrors === 0) {
    console.log(`✅ All checks passed.\n`);
  } else {
    console.log(`❌ ${totalErrors} issue(s) found. Run shuffle-options.ts if answer bias is detected.\n`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
