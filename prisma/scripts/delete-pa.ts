import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const cat = await prisma.examCategory.findFirst({
    where: { nameEn: "Pennsylvania Driver's License" },
    include: { topics: true },
  });
  if (!cat) { console.log("PA not found"); return; }

  for (const t of cat.topics) {
    const qs = await prisma.question.findMany({ where: { topicId: t.id }, select: { id: true } });
    for (const q of qs) {
      await prisma.optionTranslation.deleteMany({ where: { option: { questionId: q.id } } });
      await prisma.option.deleteMany({ where: { questionId: q.id } });
      await prisma.questionTranslation.deleteMany({ where: { questionId: q.id } });
    }
    await prisma.question.deleteMany({ where: { topicId: t.id } });
    await prisma.topicTranslation.deleteMany({ where: { topicId: t.id } });
    await prisma.examTopic.delete({ where: { id: t.id } });
  }
  await prisma.categoryTranslation.deleteMany({ where: { categoryId: cat.id } });
  await prisma.examCategory.delete({ where: { id: cat.id } });
  console.log("✅ PA category and all related data deleted.");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
