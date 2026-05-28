import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "You are driving on a two-lane road and a school bus ahead stops with flashing red lights. What must you do?",
    explanation: "On a two-lane road, ALL traffic in BOTH directions must stop when a school bus displays flashing red lights. You must remain stopped until the red lights stop flashing and the stop sign arm is retracted.",
    handbookSection: "Traffic Controls — School Buses",
    difficulty: 1,
    translations: [
      { language: "zh", content: "您正在一条双车道道路上行驶，前方一辆校车停下并亮起红色闪光灯。您应该怎么做？", explanation: "在双车道道路上，当校车亮起红色闪光灯时，两个方向的所有车辆均须停车。必须保持停止状态，直到红色闪光灯停止闪烁且停车标志臂收回为止。" },
      { language: "es", content: "Usted va en una carretera de dos carriles y un autobús escolar se detiene adelante con las luces rojas intermitentes encendidas. ¿Qué debe hacer?", explanation: "En una carretera de dos carriles, todo el tráfico en ambas direcciones debe detenerse cuando un autobús escolar muestra luces rojas intermitentes. Debe permanecer detenido hasta que las luces dejen de parpadear y el brazo de la señal de alto sea retraído." },
    ],
    options: [
      { content: "Slow to 15 mph and pass carefully", isCorrect: false, zh: "减速至 15 英里/小时并小心通过", es: "Reducir la velocidad a 15 mph y pasar con cuidado" },
      { content: "Stop and remain stopped until the red lights stop flashing", isCorrect: true, zh: "停车，并保持停止状态，直到红色闪光灯停止闪烁", es: "Detenerse y permanecer detenido hasta que las luces rojas dejen de parpadear" },
      { content: "Stop only if children are visible outside the bus", isCorrect: false, zh: "只有当车外有儿童时才停车", es: "Detenerse solo si hay niños visibles fuera del autobús" },
      { content: "Pass quickly before children exit", isCorrect: false, zh: "在儿童下车前迅速通过", es: "Pasar rápidamente antes de que los niños bajen" },
    ],
  },
  {
    content: "You are on a divided highway with a raised median. A school bus on the OTHER side of the median stops with flashing red lights. You must:",
    explanation: "On a divided highway with a physical barrier (raised median or divider), only traffic behind the bus and traffic approaching from the front must stop. Traffic on the opposite side of a physical barrier may continue.",
    handbookSection: "Traffic Controls — School Buses",
    difficulty: 3,
    translations: [
      { language: "zh", content: "您正在一条有中央隔离带的分隔式公路上行驶。对向车道的一辆校车停下并亮起红色闪光灯。您应该：", explanation: "在设有实体隔离带（隆起的中央隔离带或隔离墩）的分隔式公路上，只有校车后方及正面来车方向的车辆须停车。实体隔离带另一侧的车辆可继续行驶。" },
      { language: "es", content: "Usted va por una autopista dividida con camellón elevado. Un autobús escolar en el OTRO lado del camellón se detiene con las luces rojas intermitentes. Usted debe:", explanation: "En una autopista dividida con una barrera física (camellón elevado o divisor), solo los vehículos detrás del autobús y los que se aproximan de frente deben detenerse. El tráfico al otro lado de una barrera física puede continuar." },
    ],
    options: [
      { content: "Stop immediately", isCorrect: false, zh: "立即停车", es: "Detenerse de inmediato" },
      { content: "Slow to 25 mph", isCorrect: false, zh: "减速至 25 英里/小时", es: "Reducir la velocidad a 25 mph" },
      { content: "Continue driving — the median separates traffic", isCorrect: true, zh: "继续行驶——隔离带已将两方向交通分隔", es: "Continuar conduciendo — el camellón separa el tráfico" },
      { content: "Yield but do not stop", isCorrect: false, zh: "礼让但不必停车", es: "Ceder el paso pero no detenerse" },
    ],
  },
  {
    content: "How far must you stop from a school bus that has its red lights flashing?",
    explanation: "You must stop at least 20 feet from a school bus with flashing red lights. This distance gives children a safe space to cross in front of or behind the bus without being in your blind spot.",
    handbookSection: "Traffic Controls — School Buses",
    difficulty: 2,
    translations: [
      { language: "zh", content: "当校车亮起红色闪光灯时，您必须停在距校车多远处？", explanation: "当校车亮起红色闪光灯时，您必须停在距校车至少 20 英尺处。这段距离为儿童在校车前方或后方穿越道路提供了安全空间，避免其进入驾驶人的盲区。" },
      { language: "es", content: "¿A qué distancia mínima debe detenerse de un autobús escolar con las luces rojas intermitentes encendidas?", explanation: "Debe detenerse a no menos de 20 pies del autobús escolar cuando tenga las luces rojas intermitentes encendidas. Esta distancia le da a los niños un espacio seguro para cruzar por delante o por detrás del autobús sin quedar en su punto ciego." },
    ],
    options: [
      { content: "5 feet", isCorrect: false, zh: "5 英尺", es: "5 pies" },
      { content: "10 feet", isCorrect: false, zh: "10 英尺", es: "10 pies" },
      { content: "At least 20 feet", isCorrect: true, zh: "至少 20 英尺", es: "Al menos 20 pies" },
      { content: "50 feet", isCorrect: false, zh: "50 英尺", es: "50 pies" },
    ],
  },
];

async function main() {
  const topic = await prisma.examTopic.findFirst({ where: { nameEn: "Traffic Signs & Signals" } });
  if (!topic) throw new Error("Topic not found");
  console.log(`✅ Found topic: ${topic.name} (id=${topic.id})`);

  let added = 0;
  for (const q of newQuestions) {
    const exists = await prisma.question.findFirst({ where: { content: q.content, topicId: topic.id } });
    if (exists) { console.log(`⚠️  Skipping: "${q.content.slice(0, 50)}"`); continue; }

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
