/**
 * fix-tx-handbook-urls.ts
 *
 * Updates handbookUrl for each Texas topic to link directly to the
 * relevant page in the DL-7 PDF, rather than the PDF root.
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const BASE = "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf";

// Map topic English name -> correct PDF page anchor
const TOPIC_URLS: Record<string, string> = {
  "Road Signs & Markers":                     `${BASE}#page=31`,   // Ch.5
  "Traffic Laws & Right-of-Way":              `${BASE}#page=26`,   // Ch.4
  "Speed Limits & Special Situations":        `${BASE}#page=51`,   // Ch.8-9
  "Alcohol & Drugs":                          `${BASE}#page=61`,   // Ch.10
  "Licensing & Responsibilities":             `${BASE}#page=7`,    // Ch.1
  "Safety: Pedestrians, Bicycles & Crashes":  `${BASE}#page=65`,   // Ch.11-13
};

async function main() {
  // Get the Texas category
  const texasCat = await prisma.examCategory.findFirst({
    where: { nameEn: "Texas Driver's License" },
    include: { topics: true },
  });

  if (!texasCat) {
    console.error("❌ Texas Driver's License category not found.");
    process.exit(1);
  }

  console.log(`Found ${texasCat.topics.length} Texas topics.\n`);

  let updated = 0;
  let skipped = 0;

  for (const topic of texasCat.topics) {
    const newUrl = TOPIC_URLS[topic.name];
    if (!newUrl) {
      console.warn(`  ⚠️  No mapping for topic: "${topic.name}" — skipping`);
      skipped++;
      continue;
    }

    if (topic.handbookUrl === newUrl) {
      console.log(`  ✅ Already correct: "${topic.name}"`);
      continue;
    }

    await prisma.examTopic.update({
      where: { id: topic.id },
      data: { handbookUrl: newUrl },
    });

    console.log(`  ✅ Updated: "${topic.name}"`);
    console.log(`     ${topic.handbookUrl ?? "(none)"}`);
    console.log(`     → ${newUrl}`);
    updated++;
  }

  console.log(`\n─────────────────────────────────────────`);
  console.log(`Updated: ${updated}  Skipped: ${skipped}`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
