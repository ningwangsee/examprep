import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";
import { californiaDMV } from "./california-dmv";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function importCategory(data: typeof californiaDMV) {
  // 检查是否已存在
  const existing = await prisma.examCategory.findFirst({
    where: { nameEn: data.category.nameEn },
  });
  if (existing) {
    console.log(`⚠️  分类 "${data.category.name}" 已存在，跳过导入。`);
    console.log(`   如需重新导入，请先手动删除该分类。`);
    return;
  }

  let totalQuestions = 0;

  const category = await prisma.examCategory.create({
    data: {
      ...data.category,
      topics: {
        create: data.topics.map((topic) => ({
          name: topic.name,
          nameEn: topic.nameEn,
          description: topic.description,
          questions: {
            create: topic.questions.map((q) => {
              totalQuestions++;
              return {
                content: q.content,
                explanation: q.explanation,
                difficulty: q.difficulty,
                options: {
                  create: q.options,
                },
              };
            }),
          },
        })),
      },
    },
  });

  console.log(`✅ 导入成功：${category.name}`);
  console.log(`   专题数：${data.topics.length}`);
  console.log(`   题目总数：${totalQuestions}`);
  data.topics.forEach((t) => {
    console.log(`   - ${t.name}：${t.questions.length} 题`);
  });
}

async function main() {
  console.log("🚀 开始导入题库...\n");
  await importCategory(californiaDMV);
  console.log("\n🎉 导入完成！");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
