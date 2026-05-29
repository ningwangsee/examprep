/**
 * fix-pa-handbook-urls.ts
 *
 * Corrects topic.handbookUrl for Pennsylvania topics.
 * The PA online manual chapters:
 *   applying-for-a-learners-permit       = Ch.1 licensing & permit requirements
 *   chapter-2-signals-signs-...          = Ch.2 signs, signals, pavement markings
 *   everyday-driving-skills              = Ch.3 right-of-way, turns, speed, lane use
 *   special-circumstances-and-emergencies= Ch.4 skids, blowouts, floods, emergencies
 *   driver-factors                       = Ch.5 alcohol, drugs, fatigue
 *   choosing-safety-first                = Ch.6 safety, sharing road, vehicle care
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const BASE = "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual";

const TOPIC_URLS: Record<string, string> = {
  "Traffic Signals, Signs & Markings":    `${BASE}/chapter-2-signals-signs-and-pavement-markings`,
  "Right-of-Way, Turns & Intersections":  `${BASE}/everyday-driving-skills`,
  "Speed, Space & Defensive Driving":     `${BASE}/everyday-driving-skills`,      // PA Ch.3 covers speed + driving skills
  "Alcohol, Drugs & DUI":                 `${BASE}/driver-factors`,               // PA Ch.5 = driver factors (alcohol/drugs)
  "Driver License & PA Laws":             `${BASE}/applying-for-a-learners-permit`,
  "Safe Driving & Sharing the Road":      `${BASE}/choosing-safety-first`,
};

async function main() {
  const paCat = await prisma.examCategory.findFirst({
    where: { nameEn: "Pennsylvania Driver's License" },
    include: { topics: true },
  });

  if (!paCat) { console.error("❌ PA category not found"); process.exit(1); }

  console.log(`Found ${paCat.topics.length} PA topics.\n`);
  let updated = 0;

  for (const topic of paCat.topics) {
    const newUrl = TOPIC_URLS[topic.nameEn];
    if (!newUrl) {
      console.warn(`  ⚠️  No mapping for "${topic.nameEn}" — skipping`);
      continue;
    }
    if (topic.handbookUrl === newUrl) {
      console.log(`  ✅ Already correct: "${topic.name}"`);
      continue;
    }
    await prisma.examTopic.update({ where: { id: topic.id }, data: { handbookUrl: newUrl } });
    console.log(`  ✅ Fixed: "${topic.name}"`);
    console.log(`     was: ${topic.handbookUrl}`);
    console.log(`     now: ${newUrl}`);
    updated++;
  }

  console.log(`\n─────────────────────────────────\nUpdated: ${updated}`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
