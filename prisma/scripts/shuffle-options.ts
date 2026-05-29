/**
 * shuffle-options.ts
 *
 * Shuffles the content + isCorrect values across the 4 options of every question
 * so the correct answer is no longer always in the same slot.
 *
 * IDs and relations stay untouched – we only swap the payload fields in place.
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

/** Fisher-Yates shuffle (in-place) */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

async function main() {
  const questions = await prisma.question.findMany({
    include: {
      options: {
        include: { translations: true },
        orderBy: { id: "asc" },
      },
    },
  });

  console.log(`Found ${questions.length} questions. Shuffling options…`);

  let shuffled = 0;

  for (const q of questions) {
    const opts = q.options;
    if (opts.length !== 4) {
      console.warn(`  ⚠️  Question ${q.id} has ${opts.length} options – skipping`);
      continue;
    }

    // Build a payload array: for each slot keep content + isCorrect + translations
    type Payload = {
      content: string;
      isCorrect: boolean;
      translations: { language: string; content: string }[];
    };

    const payloads: Payload[] = opts.map((o) => ({
      content: o.content,
      isCorrect: o.isCorrect,
      translations: o.translations.map((t) => ({ language: t.language, content: t.content })),
    }));

    // Shuffle payloads (Fisher-Yates)
    shuffle(payloads);

    // Write shuffled payloads back, keeping the original option IDs
    for (let i = 0; i < opts.length; i++) {
      const opt = opts[i];
      const pay = payloads[i];

      await prisma.option.update({
        where: { id: opt.id },
        data: { content: pay.content, isCorrect: pay.isCorrect },
      });

      // Update each translation
      for (const trans of pay.translations) {
        await prisma.optionTranslation.updateMany({
          where: { optionId: opt.id, language: trans.language },
          data: { content: trans.content },
        });
      }
    }

    shuffled++;
  }

  console.log(`✅ Shuffled options for ${shuffled} questions.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
