import "dotenv/config";
import { PrismaClient } from "../../app/generated/prisma/client";
import { californiaDMV } from "./california-dmv";
import { texasDMV } from "./texas-dmv";
import { newYorkDMV } from "./new-york-dmv";
import { floridaDMV } from "./florida-dmv";
import { pennsylvaniaDMV } from "./pennsylvania-dmv";

function createPrismaClient(): PrismaClient {
  if (process.env.TURSO_DATABASE_URL) {
    const { PrismaLibSql } = require("@prisma/adapter-libsql");
    const adapter = new PrismaLibSql({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
    return new PrismaClient({ adapter });
  }
  const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
  return new PrismaClient({
    adapter: new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" }),
  });
}

const prisma = createPrismaClient();

async function importCategory(data: typeof californiaDMV) {
  // Check if already exists
  const existing = await prisma.examCategory.findFirst({
    where: { nameEn: data.category.nameEn },
  });
  if (existing) {
    console.log(`⚠️  Category "${data.category.name}" already exists, skipping.`);
    console.log(`   To re-import, delete the category first.`);
    return;
  }

  let totalQuestions = 0;

  // Destructure translations out of category so we can handle them separately
  const { translations: categoryTranslations, ...categoryData } = data.category;

  const category = await prisma.examCategory.create({
    data: {
      ...categoryData,
      translations: {
        create: categoryTranslations,
      },
      topics: {
        create: data.topics.map((topic) => {
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

  console.log(`✅ Imported: ${category.name}`);
  console.log(`   Topics: ${data.topics.length}`);
  console.log(`   Total questions: ${totalQuestions}`);
  data.topics.forEach((t) => {
    console.log(`   - ${t.name}: ${t.questions.length} questions`);
  });
}

async function main() {
  console.log("🚀 Starting question bank import...\n");
  await importCategory(californiaDMV);
  await importCategory(texasDMV);
  await importCategory(newYorkDMV);
  await importCategory(floridaDMV);
  await importCategory(pennsylvaniaDMV);
  console.log("\n🎉 Import complete!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
