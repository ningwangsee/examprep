import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "In California, you must turn on your headlights:",
    explanation: "California law requires headlights to be on from 30 minutes after sunset to 30 minutes before sunrise, and whenever visibility is less than 1,000 feet — including during rain, fog, or smoke. Using headlights helps other drivers see you.",
    handbookSection: "Safe Driving — Headlights",
    difficulty: 1,
    translations: [
      { language: "zh", content: "在加利福尼亚州，您必须在何时开启车头灯？", explanation: "加州法律规定，驾驶人须在日落后 30 分钟至日出前 30 分钟开启车头灯；此外，当能见度低于 1,000 英尺时——包括雨天、雾天或烟雾天气——也须开灯。开启车头灯有助于其他驾驶人看见您的车辆。" },
      { language: "es", content: "En California, debe encender sus faros:", explanation: "La ley de California exige que los faros estén encendidos desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y siempre que la visibilidad sea menor a 1,000 pies, incluso durante lluvia, niebla o humo. Usar los faros ayuda a que otros conductores lo vean." },
    ],
    options: [
      { content: "Only after it is completely dark", isCorrect: false, zh: "只有在天完全黑暗后", es: "Solo cuando ya está completamente oscuro" },
      { content: "From 30 minutes after sunset to 30 minutes before sunrise", isCorrect: true, zh: "日落后 30 分钟至日出前 30 分钟", es: "Desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer" },
      { content: "Only on highways", isCorrect: false, zh: "仅在高速公路上行驶时", es: "Solo en autopistas" },
      { content: "Only when your wipers are on high speed", isCorrect: false, zh: "仅在雨刷开至高速档时", es: "Solo cuando los limpiaparabrisas están en velocidad alta" },
    ],
  },
  {
    content: "When must you dim your high-beam headlights?",
    explanation: "You must dim your high beams when you are within 500 feet of an oncoming vehicle, or within 300 feet when following another vehicle. High beams can blind other drivers and cause accidents.",
    handbookSection: "Safe Driving — Headlights",
    difficulty: 2,
    translations: [
      { language: "zh", content: "您必须在什么情况下将远光灯切换为近光灯？", explanation: "当您距对向来车 500 英尺以内，或跟随前车行驶时距前车 300 英尺以内，必须将远光灯切换为近光灯。远光灯可能使其他驾驶人目眩，进而引发交通事故。" },
      { language: "es", content: "¿Cuándo debe cambiar de luces altas a luces bajas?", explanation: "Debe bajar las luces altas cuando esté a 500 pies de un vehículo que viene de frente, o a 300 pies cuando va detrás de otro vehículo. Las luces altas pueden encandilar a otros conductores y provocar accidentes." },
    ],
    options: [
      { content: "Within 1,000 feet of any vehicle", isCorrect: false, zh: "距任何车辆 1,000 英尺以内时", es: "Cuando está a 1,000 pies de cualquier vehículo" },
      { content: "Within 500 feet of an oncoming vehicle, or 300 feet when following another vehicle", isCorrect: true, zh: "距对向来车 500 英尺以内，或跟车行驶时距前车 300 英尺以内", es: "Cuando está a 500 pies de un vehículo que viene de frente, o a 300 pies cuando sigue a otro vehículo" },
      { content: "Only when the other driver flashes their lights", isCorrect: false, zh: "只有在对方驾驶人闪灯提示时", es: "Solo cuando el otro conductor parpadee con sus luces" },
      { content: "Only in city limits", isCorrect: false, zh: "仅在城市限速区域内行驶时", es: "Solo dentro de los límites de la ciudad" },
    ],
  },
  {
    content: "California law requires you to use headlights whenever you use your windshield wipers due to:",
    explanation: "California law requires drivers to turn on headlights whenever windshield wipers are in use due to rain, snow, or other precipitation. This increases vehicle visibility to others in low-visibility conditions.",
    handbookSection: "Safe Driving — Headlights",
    difficulty: 2,
    translations: [
      { language: "zh", content: "根据加州法律，在使用雨刷的哪种情况下必须同时开启车头灯？", explanation: "自 2008 年起，加州法律规定，驾驶人在因雨、雪或其他降水而使用雨刷时，必须同时开启车头灯。此举可在低能见度条件下提高车辆对其他道路使用者的可见度。" },
      { language: "es", content: "La ley de California exige usar los faros siempre que use los limpiaparabrisas debido a:", explanation: "Desde 2008, la ley de California obliga a los conductores a encender los faros siempre que los limpiaparabrisas estén en uso por lluvia, nieve u otras precipitaciones. Esto aumenta la visibilidad del vehículo para los demás en condiciones de baja visibilidad." },
    ],
    options: [
      { content: "Extreme heat", isCorrect: false, zh: "极端高温天气", es: "Calor extremo" },
      { content: "Rain, snow, or other precipitation", isCorrect: true, zh: "雨天、雪天或其他降水天气", es: "Lluvia, nieve u otro tipo de precipitación" },
      { content: "Bright sunlight glare", isCorrect: false, zh: "强烈阳光眩光", es: "Deslumbramiento por luz solar intensa" },
      { content: "Dusty road conditions", isCorrect: false, zh: "尘土飞扬的路面条件", es: "Condiciones de camino con mucho polvo" },
    ],
  },
];

async function main() {
  const topic = await prisma.examTopic.findFirst({ where: { nameEn: "Safe Driving & Parking" } });
  if (!topic) throw new Error("Topic not found");
  console.log(`✅ Found topic: ${topic.name} (id=${topic.id})`);

  let added = 0;
  for (const q of newQuestions) {
    const exists = await prisma.question.findFirst({ where: { content: q.content, topicId: topic.id } });
    if (exists) { console.log(`⚠️  Skipping (exists): "${q.content.slice(0, 50)}"`); continue; }

    await prisma.question.create({
      data: {
        content: q.content,
        explanation: q.explanation,
        handbookSection: q.handbookSection,
        difficulty: q.difficulty,
        topicId: topic.id,
        translations: { create: q.translations },
        options: {
          create: q.options.map((o) => ({
            content: o.content,
            isCorrect: o.isCorrect,
            translations: { create: [{ language: "zh", content: o.zh }, { language: "es", content: o.es }] },
          })),
        },
      },
    });
    console.log(`✅ Added: "${q.content.slice(0, 60)}"`);
    added++;
  }
  console.log(`\n🎉 Done! Added ${added} questions.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
