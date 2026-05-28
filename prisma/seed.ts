/**
 * Main seed entry point.
 * Clears all data and re-imports the California DMV question bank.
 * Run: npm run db:seed
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../app/generated/prisma/client";
import { californiaDMV } from "./seeds/california-dmv";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🗑️  Clearing existing data...");

  // Delete in dependency order (children before parents)
  await prisma.optionTranslation.deleteMany();
  await prisma.option.deleteMany();
  await prisma.questionTranslation.deleteMany();
  await prisma.question.deleteMany();
  await prisma.topicTranslation.deleteMany();
  await prisma.examTopic.deleteMany();
  await prisma.categoryTranslation.deleteMany();
  await prisma.examCategory.deleteMany();

  console.log("✅ Cleared.\n");

  console.log("🚀 Seeding California DMV...");

  const { translations: categoryTranslations, ...categoryData } = californiaDMV.category;

  let totalQuestions = 0;

  await prisma.examCategory.create({
    data: {
      ...categoryData,
      translations: {
        create: categoryTranslations,
      },
      topics: {
        create: californiaDMV.topics.map((topic) => {
          const { translations: topicTranslations, questions, ...topicData } = topic;
          return {
            ...topicData,
            translations: {
              create: topicTranslations,
            },
            questions: {
              create: questions.map((q) => {
                totalQuestions++;
                const { options, translations: qTranslations, ...questionData } = q;
                return {
                  ...questionData,
                  ...(qTranslations?.length ? { translations: { create: qTranslations } } : {}),
                  options: {
                    create: options.map((o) => {
                      const { translations: oTranslations, ...optionData } = o as typeof o & { translations?: { language: string; content: string }[] };
                      return {
                        ...optionData,
                        ...(oTranslations?.length ? { translations: { create: oTranslations } } : {}),
                      };
                    }),
                  },
                };
              }),
            },
          };
        }),
      },
    },
  });

  console.log(`✅ Seeded: ${californiaDMV.category.name}`);
  console.log(`   Topics: ${californiaDMV.topics.length}`);
  console.log(`   Total questions: ${totalQuestions}`);
  californiaDMV.topics.forEach((t) => {
    console.log(`   - ${t.name}: ${t.questions.length} questions`);
  });

  console.log("\n🎉 Seed complete!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
