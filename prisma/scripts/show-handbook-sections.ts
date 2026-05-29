/**
 * show-handbook-sections.ts
 * Shows distinct handbookSection values per state vs actual topic handbookUrl chapter names.
 * Helps identify mismatches between question labels and handbook chapter titles.
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
          questions: { select: { handbookSection: true } },
        },
        orderBy: { id: "asc" },
      },
    },
  });

  for (const cat of categories) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`${cat.nameEn}`);
    console.log("=".repeat(60));

    for (const topic of cat.topics) {
      // Collect distinct handbookSection values for this topic
      const sections = [
        ...new Set(
          topic.questions
            .map((q) => q.handbookSection)
            .filter(Boolean) as string[]
        ),
      ].sort();

      const chapterSlug = topic.handbookUrl
        ? topic.handbookUrl.split("/").pop() ?? topic.handbookUrl
        : "(none)";

      console.log(`\n  Topic: "${topic.name}"`);
      console.log(`  Chapter URL slug: ${chapterSlug}`);
      console.log(`  handbookSection values used (${sections.length} distinct):`);
      for (const s of sections) {
        console.log(`    - ${s}`);
      }
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
