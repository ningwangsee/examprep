import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "When entering a roundabout, you must yield to:",
    explanation: "Always yield to traffic already circulating inside the roundabout before you enter. Once inside, you have the right-of-way over vehicles waiting to enter.",
    handbookSection: "Laws and Rules — Roundabouts",
    difficulty: 1,
    translations: [
      { language: "zh", content: "进入环形交叉路口时，您必须让行于：", explanation: "进入环形路口前，必须始终让已在路口内环行的车辆先行。一旦进入路口，您对等待驶入的车辆享有优先通行权。" },
      { language: "es", content: "Al entrar a una glorieta, debe ceder el paso a:", explanation: "Siempre ceda el paso al tráfico que ya está circulando dentro de la glorieta antes de entrar. Una vez adentro, usted tiene preferencia sobre los vehículos que esperan para ingresar." },
    ],
    options: [
      { content: "Vehicles entering from your right", isCorrect: false, zh: "从您右侧驶入的车辆", es: "Los vehículos que entran por su derecha" },
      { content: "Traffic already inside the roundabout", isCorrect: true, zh: "已在环形路口内行驶的车辆", es: "El tráfico que ya circula dentro de la glorieta" },
      { content: "The largest vehicle in the roundabout", isCorrect: false, zh: "环形路口内最大的车辆", es: "El vehículo más grande dentro de la glorieta" },
      { content: "No one — roundabouts are first-come, first-served", isCorrect: false, zh: "无需让行——环形路口先到先行", es: "Nadie — en las glorietas se aplica el orden de llegada" },
    ],
  },
  {
    content: "In a roundabout, traffic flows in which direction?",
    explanation: "In the United States, traffic in a roundabout always flows counterclockwise (to the right as you enter). You must turn right to enter and travel around the central island.",
    handbookSection: "Laws and Rules — Roundabouts",
    difficulty: 1,
    translations: [
      { language: "zh", content: "在环形交叉路口，车辆沿哪个方向行驶？", explanation: "在美国，环形交叉路口内的车辆始终沿逆时针方向行驶（进入时向右转）。驾驶人须右转进入，并绕中央岛行驶。" },
      { language: "es", content: "En una glorieta, el tráfico fluye en qué dirección:", explanation: "En los Estados Unidos, el tráfico dentro de una glorieta siempre fluye en sentido contrario a las manecillas del reloj (hacia la derecha al entrar). Debe girar a la derecha para entrar y circular alrededor de la isla central." },
    ],
    options: [
      { content: "Clockwise", isCorrect: false, zh: "顺时针方向", es: "En sentido de las manecillas del reloj" },
      { content: "Either direction, depending on the lane", isCorrect: false, zh: "根据车道不同，两个方向均可", es: "En cualquier dirección, según el carril" },
      { content: "Counterclockwise", isCorrect: true, zh: "逆时针方向", es: "En sentido contrario a las manecillas del reloj" },
      { content: "Straight through only", isCorrect: false, zh: "仅直行通过", es: "Solo en línea recta" },
    ],
  },
  {
    content: "When should you NOT enter a roundabout?",
    explanation: "If an emergency vehicle with lights and sirens is approaching, do not enter the roundabout. If you are already in the roundabout, exit at the nearest opportunity and pull to the right to allow the emergency vehicle to pass.",
    handbookSection: "Laws and Rules — Roundabouts",
    difficulty: 2,
    translations: [
      { language: "zh", content: "在什么情况下不应进入环形交叉路口？", explanation: "若有开启警灯和警报器的紧急车辆正在驶近，不得进入环形路口。若您已在路口内，应在最近的出口驶出，并靠右停车，为紧急车辆让路。" },
      { language: "es", content: "¿Cuándo NO debe entrar a una glorieta?", explanation: "Si se aproxima un vehículo de emergencia con luces y sirenas encendidas, no entre a la glorieta. Si ya está dentro, salga en la primera salida disponible y orille a la derecha para dejar pasar al vehículo de emergencia." },
    ],
    options: [
      { content: "When emergency vehicles are approaching", isCorrect: true, zh: "有紧急车辆正在驶近时", es: "Cuando se aproxima un vehículo de emergencia" },
      { content: "When there are two lanes in the roundabout", isCorrect: false, zh: "环形路口有两条车道时", es: "Cuando la glorieta tiene dos carriles" },
      { content: "When traffic is light", isCorrect: false, zh: "路口交通流量较少时", es: "Cuando el tráfico es ligero" },
      { content: "After 10 PM", isCorrect: false, zh: "晚上 10 点以后", es: "Después de las 10 PM" },
    ],
  },
];

async function main() {
  const topic = await prisma.examTopic.findFirst({ where: { nameEn: "Right-of-Way Rules" } });
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
