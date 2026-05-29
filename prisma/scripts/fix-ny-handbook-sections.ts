/**
 * fix-ny-handbook-sections.ts
 *
 * Updates question.handbookSection prefixes for NY to match the actual
 * NY Driver's Manual chapter titles:
 *
 *   chapter-5-intersections-and-turns    → "Intersections and Turns"
 *   chapter-9-alcohol-and-other-drugs    → "Alcohol and Other Drugs"
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const PREFIX_MAP: Record<string, string> = {
  "Intersections & Turns": "Intersections and Turns",
  "Alcohol & Drugs":       "Alcohol and Other Drugs",
};

async function main() {
  const nyCat = await prisma.examCategory.findFirst({
    where: { nameEn: "New York Driver's License" },
    include: {
      topics: {
        include: { questions: { select: { id: true, handbookSection: true } } },
      },
    },
  });

  if (!nyCat) { console.error("❌ NY category not found"); process.exit(1); }

  let updated = 0;
  let unchanged = 0;

  for (const topic of nyCat.topics) {
    for (const q of topic.questions) {
      if (!q.handbookSection) continue;

      const sep = q.handbookSection.indexOf(" — ");
      if (sep === -1) continue;

      const oldPrefix = q.handbookSection.slice(0, sep);
      const suffix    = q.handbookSection.slice(sep);
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
