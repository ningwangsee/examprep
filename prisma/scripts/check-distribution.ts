import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const questions = await prisma.question.findMany({
    include: {
      options: { orderBy: { id: "asc" } },
      topic: { include: { category: true } },
    },
  });

  const total = questions.length;
  const posCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

  for (const q of questions) {
    const idx = q.options.findIndex((o) => o.isCorrect);
    if (idx >= 0) posCounts[idx + 1]++;
  }

  console.log(`\nCorrect answer distribution across all ${total} questions:`);
  for (const [pos, cnt] of Object.entries(posCounts)) {
    const pct = Math.round((cnt / total) * 100);
    const bar = "█".repeat(Math.round(pct / 2));
    console.log(`  Option ${pos}: ${String(cnt).padStart(3)} questions (${String(pct).padStart(2)}%)  ${bar}`);
  }

  // Per-category breakdown
  const catMap: Record<string, Record<number, number>> = {};
  for (const q of questions) {
    const cat = q.topic.category.nameEn;
    if (!catMap[cat]) catMap[cat] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const idx = q.options.findIndex((o) => o.isCorrect);
    if (idx >= 0) catMap[cat][idx + 1]++;
  }

  console.log("\nPer-state breakdown:");
  for (const [cat, counts] of Object.entries(catMap)) {
    const catTotal = Object.values(counts).reduce((a, b) => a + b, 0);
    const dist = [1, 2, 3, 4].map((p) => `P${p}:${counts[p]}`).join("  ");
    console.log(`  ${cat.padEnd(36)} total=${catTotal}  ${dist}`);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
