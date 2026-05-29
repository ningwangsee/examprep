/**
 * fix-ca-handbook-sections.ts
 *
 * Updates question.handbookSection prefixes for CA to match the actual
 * CA DMV handbook section titles (based on handbookUrl slugs):
 *
 *   introduction-to-driving      ← Topic 1 (Traffic Signs & Signals)
 *   laws-and-rules-of-the-road   ← Topic 2 (Right-of-Way Rules)
 *   safe-driving                 ← Topics 3 & 6
 *   alcohol-and-drugs            ← Topic 4
 *   navigating-the-roads         ← Topic 5
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const PREFIX_MAP: Record<string, string> = {
  "Traffic Controls":  "Introduction to Driving",
  "Laws and Rules":    "Laws and Rules of the Road",
};

async function main() {
  const caCat = await prisma.examCategory.findFirst({
    where: { nameEn: "California Driver's License" },
    include: {
      topics: {
        include: { questions: { select: { id: true, handbookSection: true } } },
      },
    },
  });

  if (!caCat) { console.error("❌ CA category not found"); process.exit(1); }

  let updated = 0;
  let unchanged = 0;

  for (const topic of caCat.topics) {
    for (const q of topic.questions) {
      if (!q.handbookSection) continue;

      const sep = q.handbookSection.indexOf(" — ");
      if (sep === -1) continue;

      const oldPrefix = q.handbookSection.slice(0, sep);
      const suffix    = q.handbookSection.slice(sep); // includes " — "
      const newPrefix = PREFIX_MAP[oldPrefix];

      if (!newPrefix || newPrefix === oldPrefix) { unchanged++; continue; }

      await prisma.question.update({
        where: { id: q.id },
        data:  { handbookSection: newPrefix + suffix },
      });
      updated++;
    }
  }

  console.log(`✅ Updated:   ${updated} questions`);
  console.log(`   Unchanged: ${unchanged} questions`);
  console.log(`\nPrefix changes applied:`);
  for (const [old, nw] of Object.entries(PREFIX_MAP)) {
    console.log(`  "${old} — ..." → "${nw} — ..."`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
