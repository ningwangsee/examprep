import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });
async function main() {
  const cats = await prisma.examCategory.findMany({
    include: { topics: { orderBy: { id: "asc" } } },
  });
  for (const cat of cats) {
    console.log(`\n=== ${cat.nameEn} ===`);
    for (const t of cat.topics) {
      console.log(`  ${t.name.padEnd(48)} ${t.handbookUrl ?? "(none)"}`);
    }
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
