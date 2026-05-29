/**
 * fix-pa-handbook-sections.ts
 *
 * Updates question.handbookSection prefixes for PA to match the actual
 * PA Driver's Manual chapter titles, so users can find the section.
 *
 * PA Online Manual chapters:
 *   Chapter 1: Applying for a Learner's Permit
 *   Chapter 2: Signals, Signs & Pavement Markings
 *   Chapter 3: Everyday Driving Skills     (right-of-way, turning, speed, lane use)
 *   Chapter 4: Special Circumstances & Emergencies
 *   Chapter 5: Driver Factors              (alcohol, drugs, fatigue, emotions)
 *   Chapter 6: Choosing Safety First       (safety gear, sharing the road, maintenance)
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

// Map: generated prefix  ->  real PA handbook chapter prefix
// Key = exact prefix used in seed (before " — "), Value = correct chapter name
const PREFIX_MAP: Record<string, string> = {
  // Chapter 2
  "Pavement Markings":  "Signals, Signs & Markings",
  "Signals":            "Signals, Signs & Markings",
  "Signs":              "Signals, Signs & Markings",
  // Chapter 3
  "Driving Skills":     "Everyday Driving Skills",
  "Speed":              "Everyday Driving Skills",
  // Chapter 5
  "Alcohol & Drugs":    "Driver Factors",
  // Chapter 6
  "Safe Driving":       "Choosing Safety First",
  // Chapter 1 — "Driver License" prefix is clear enough, leave it
};

async function main() {
  const paCat = await prisma.examCategory.findFirst({
    where: { nameEn: "Pennsylvania Driver's License" },
    include: {
      topics: {
        include: { questions: { select: { id: true, handbookSection: true } } },
      },
    },
  });

  if (!paCat) { console.error("❌ PA category not found"); process.exit(1); }

  let updated = 0;
  let unchanged = 0;

  for (const topic of paCat.topics) {
    for (const q of topic.questions) {
      if (!q.handbookSection) continue;

      const sep = q.handbookSection.indexOf(" — ");
      if (sep === -1) continue;

      const oldPrefix = q.handbookSection.slice(0, sep);
      const suffix = q.handbookSection.slice(sep); // includes " — "

      const newPrefix = PREFIX_MAP[oldPrefix];
      if (!newPrefix || newPrefix === oldPrefix) { unchanged++; continue; }

      const newSection = newPrefix + suffix;
      await prisma.question.update({
        where: { id: q.id },
        data: { handbookSection: newSection },
      });
      updated++;
    }
  }

  console.log(`✅ Updated: ${updated} questions`);
  console.log(`   Unchanged: ${unchanged} questions`);
  console.log(`\nNew PA handbookSection prefixes:`);
  for (const [old, nw] of Object.entries(PREFIX_MAP)) {
    console.log(`  "${old} — ..." → "${nw} — ..."`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
