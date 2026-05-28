/**
 * One-time script: translate all questions and options into zh + es
 * using Claude API, then write them to the DB translation tables.
 *
 * Run: npx tsx prisma/scripts/translate-questions.ts
 */
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Types ─────────────────────────────────────────────────────────────────

interface OptionTranslation {
  id: number;
  zh_content: string;
  es_content: string;
}

interface QuestionTranslation {
  id: number;
  zh_content: string;
  zh_explanation: string;
  es_content: string;
  es_explanation: string;
  options: OptionTranslation[];
}

interface TranslationResponse {
  questions: QuestionTranslation[];
}

// ─── Translate a batch of questions via Claude ──────────────────────────────

async function translateBatch(
  questions: { id: number; content: string; explanation: string; options: { id: number; content: string }[] }[]
): Promise<QuestionTranslation[]> {
  const input = JSON.stringify(questions, null, 2);

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: `You are a professional translator for California DMV driving test questions.
Translate all question content, explanations, and option content into BOTH Simplified Chinese (zh) and Spanish (es).

Rules:
- Keep all numbers, percentages, distances (feet/mph), and proper nouns accurate
- Use natural driving/traffic terminology for each language
- For Chinese: use Simplified Chinese (simplified characters)
- For Spanish: use neutral/standard Latin American Spanish
- Return ONLY valid JSON, no markdown, no extra text

Input questions (JSON array):
${input}

Return a JSON object with this exact structure:
{
  "questions": [
    {
      "id": <question id>,
      "zh_content": "<Chinese translation of content>",
      "zh_explanation": "<Chinese translation of explanation>",
      "es_content": "<Spanish translation of content>",
      "es_explanation": "<Spanish translation of explanation>",
      "options": [
        {
          "id": <option id>,
          "zh_content": "<Chinese translation>",
          "es_content": "<Spanish translation>"
        }
      ]
    }
  ]
}`,
      },
    ],
  });

  const text = message.content[0].type === "text" ? message.content[0].text : "";

  // Strip markdown code blocks if present
  const cleaned = text.replace(/^```json\n?/i, "").replace(/\n?```$/i, "").trim();

  const parsed = JSON.parse(cleaned) as TranslationResponse;
  return parsed.questions;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔍 Reading questions from DB...");

  const questions = await prisma.question.findMany({
    include: {
      translations: true,
      options: { orderBy: { id: "asc" } },
    },
    orderBy: { id: "asc" },
  });

  // Skip questions that already have zh translation
  const toTranslate = questions.filter(
    (q) => !q.translations.some((t) => t.language === "zh")
  );

  if (toTranslate.length === 0) {
    console.log("✅ All questions already have translations. Nothing to do.");
    return;
  }

  console.log(`📋 Found ${questions.length} questions, ${toTranslate.length} need translation.\n`);

  // Process in batches of 10 to stay within token limits
  const BATCH_SIZE = 10;
  let translated = 0;

  for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
    const batch = toTranslate.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(toTranslate.length / BATCH_SIZE);

    console.log(`🌐 Translating batch ${batchNum}/${totalBatches} (questions ${i + 1}–${Math.min(i + BATCH_SIZE, toTranslate.length)})...`);

    const input = batch.map((q) => ({
      id: q.id,
      content: q.content,
      explanation: q.explanation,
      options: q.options.map((o) => ({ id: o.id, content: o.content })),
    }));

    let result: QuestionTranslation[];
    try {
      result = await translateBatch(input);
    } catch (err) {
      console.error(`  ❌ Batch ${batchNum} failed:`, err);
      console.error("  Skipping batch and continuing...");
      continue;
    }

    // Write translations to DB
    for (const qt of result) {
      const q = batch.find((q) => q.id === qt.id);
      if (!q) continue;

      // Question translations
      await prisma.questionTranslation.createMany({
        data: [
          {
            questionId: qt.id,
            language: "zh",
            content: qt.zh_content,
            explanation: qt.zh_explanation,
          },
          {
            questionId: qt.id,
            language: "es",
            content: qt.es_content,
            explanation: qt.es_explanation,
          },
        ],
      });

      // Option translations
      for (const ot of qt.options) {
        const opt = q.options.find((o) => o.id === ot.id);
        if (!opt) continue;

        await prisma.optionTranslation.createMany({
          data: [
            { optionId: ot.id, language: "zh", content: ot.zh_content },
            { optionId: ot.id, language: "es", content: ot.es_content },
          ],
        });
      }

      translated++;
    }

    console.log(`  ✅ Batch ${batchNum} written to DB (${result.length} questions)`);

    // Small delay between batches to be nice to the API
    if (i + BATCH_SIZE < toTranslate.length) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\n🎉 Done! Translated ${translated}/${toTranslate.length} questions.`);
  console.log("   Restart the dev server to see Chinese/Spanish questions.");
}

main()
  .catch((err) => {
    console.error("Fatal error:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
