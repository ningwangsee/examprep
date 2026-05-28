import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "In California, who is required to wear a seat belt?",
    explanation: "California law requires the driver and every passenger to wear a seat belt, regardless of seating position. Failure to buckle up can result in a fine for the driver.",
    handbookSection: "Safe Driving — Seat Belts",
    difficulty: 1,
    translations: [
      { language: "zh", content: "在加利福尼亚州，哪些人必须系安全带？", explanation: "加州法律要求驾驶人和每一位乘客均须系安全带，无论坐在哪个座位。若未系安全带，驾驶人可能面临罚款。" },
      { language: "es", content: "En California, ¿quién está obligado a usar cinturón de seguridad?", explanation: "La ley de California exige que el conductor y cada pasajero usen cinturón de seguridad, sin importar el asiento que ocupen. No abrocharse puede resultar en una multa para el conductor." },
    ],
    options: [
      { content: "Only the driver", isCorrect: false, zh: "仅驾驶人", es: "Solo el conductor" },
      { content: "The driver and all front-seat passengers", isCorrect: false, zh: "驾驶人和所有前排乘客", es: "El conductor y todos los pasajeros del asiento delantero" },
      { content: "The driver and ALL passengers in the vehicle", isCorrect: true, zh: "驾驶人和车内所有乘客", es: "El conductor y TODOS los pasajeros del vehículo" },
      { content: "Only passengers under age 16", isCorrect: false, zh: "仅 16 岁以下的乘客", es: "Solo los pasajeros menores de 16 años" },
    ],
  },
  {
    content: "A child must ride in a rear-facing car seat until they are:",
    explanation: "California law requires children to remain in a rear-facing car seat until age 2, or until they reach the maximum height or weight limit for that seat — whichever comes later. Rear-facing seats provide the best protection for infants.",
    handbookSection: "Safe Driving — Seat Belts",
    difficulty: 2,
    translations: [
      { language: "zh", content: "儿童必须使用后向式儿童安全座椅，直到：", explanation: "加州法律要求儿童须使用后向式儿童安全座椅，直至年满 2 岁，或达到该座椅规定的最大身高或体重限制——以较晚达到者为准。后向式座椅能为婴幼儿提供最佳保护。" },
      { language: "es", content: "Un niño debe viajar en una silla de seguridad orientada hacia atrás hasta que:", explanation: "La ley de California exige que los niños permanezcan en una silla orientada hacia atrás hasta los 2 años, o hasta que alcancen el límite máximo de talla o peso de esa silla, lo que ocurra después. Las sillas orientadas hacia atrás brindan la mejor protección para los bebés." },
    ],
    options: [
      { content: "At least 1 year old and weigh 20 lbs", isCorrect: false, zh: "至少满 1 岁且体重达到 20 磅", es: "Tenga al menos 1 año y pese 20 libras" },
      { content: "At least 2 years old, OR until they reach the maximum height/weight limit of the rear-facing seat", isCorrect: true, zh: "至少满 2 岁，或达到后向式座椅的最大身高/体重限制（以较晚者为准）", es: "Tenga al menos 2 años O alcance el límite máximo de talla/peso de la silla orientada hacia atrás" },
      { content: "6 months old", isCorrect: false, zh: "满 6 个月", es: "Tenga 6 meses" },
      { content: "Able to sit up on their own", isCorrect: false, zh: "能够独立坐稳", es: "Pueda sentarse solo" },
    ],
  },
  {
    content: "In California, a child under 8 years old must:",
    explanation: "Children under 8 must be secured in a car seat or booster seat in the rear seat of the vehicle. The only exception is if all rear seats are occupied by other children under 8.",
    handbookSection: "Safe Driving — Seat Belts",
    difficulty: 1,
    translations: [
      { language: "zh", content: "在加州，8 岁以下儿童必须：", explanation: "8 岁以下儿童必须在车辆后排使用儿童安全座椅或增高垫加以固定。唯一例外是：所有后排座位均已被其他 8 岁以下儿童占用。" },
      { language: "es", content: "En California, un niño menor de 8 años debe:", explanation: "Los niños menores de 8 años deben ir asegurados en una silla de seguridad o asiento elevador en el asiento trasero del vehículo. La única excepción es si todos los asientos traseros están ocupados por otros niños menores de 8 años." },
    ],
    options: [
      { content: "Sit in the front seat with a seat belt", isCorrect: false, zh: "坐在前排并系安全带", es: "Sentarse en el asiento delantero con cinturón de seguridad" },
      { content: "Be secured in a car seat or booster seat in the back seat", isCorrect: true, zh: "在后排使用儿童安全座椅或增高垫固定", es: "Ir asegurado en una silla de seguridad o asiento elevador en el asiento trasero" },
      { content: "Use only a lap belt in any seat", isCorrect: false, zh: "在任意座位仅使用腰部安全带", es: "Usar solo el cinturón de cadera en cualquier asiento" },
      { content: "Sit next to the driver for supervision", isCorrect: false, zh: "坐在驾驶人旁边以便监护", es: "Sentarse junto al conductor para supervisión" },
    ],
  },
  {
    content: "When can a child move from a booster seat to a regular seat belt in California?",
    explanation: "A child may use a regular seat belt when they are 8 years old OR 4 feet 9 inches tall. At this height, the seat belt fits correctly across the shoulder and chest — not the neck.",
    handbookSection: "Safe Driving — Seat Belts",
    difficulty: 2,
    translations: [
      { language: "zh", content: "在加州，儿童何时可以从增高垫换用普通安全带？", explanation: "儿童年满 8 岁或身高达到 4 英尺 9 英寸时，即可使用普通安全带。达到该身高后，安全带肩带可正确横跨肩部和胸部，而不会勒住颈部。" },
      { language: "es", content: "¿Cuándo puede un niño pasar de un asiento elevador al cinturón de seguridad regular en California?", explanation: "Un niño puede usar el cinturón regular cuando tenga 8 años O mida 4 pies 9 pulgadas. A esa estatura, el cinturón queda correctamente posicionado sobre el hombro y el pecho, no sobre el cuello." },
    ],
    options: [
      { content: "When they turn 8 years old", isCorrect: false, zh: "年满 8 岁时", es: "Cuando cumpla 8 años" },
      { content: "When they turn 8 OR reach 4 feet 9 inches tall, whichever comes first", isCorrect: true, zh: "年满 8 岁，或身高达到 4 英尺 9 英寸（约 145 厘米），以先达到者为准", es: "Cuando cumpla 8 años O mida 4 pies 9 pulgadas de estatura, lo que ocurra primero" },
      { content: "When they weigh more than 40 lbs", isCorrect: false, zh: "体重超过 40 磅时", es: "Cuando pese más de 40 libras" },
      { content: "At any age if they prefer the seat belt", isCorrect: false, zh: "只要本人愿意，任何年龄均可", es: "A cualquier edad si prefiere el cinturón" },
    ],
  },
  {
    content: "Who is responsible for ensuring a child passenger is properly restrained in California?",
    explanation: "The DRIVER is legally responsible for ensuring all passengers under 16 are properly buckled or secured. If a child is unrestrained, the driver receives the ticket and fine — not the parent.",
    handbookSection: "Safe Driving — Seat Belts",
    difficulty: 2,
    translations: [
      { language: "zh", content: "在加州，谁负责确保儿童乘客得到妥善约束？", explanation: "驾驶人在法律上负责确保所有 16 岁以下乘客正确系好安全带或使用安全座椅固定。若儿童未受约束，驾驶人将收到罚单并承担罚款——而非儿童的父母。" },
      { language: "es", content: "¿Quién es responsable de asegurarse de que un pasajero menor esté correctamente sujetado en California?", explanation: "El CONDUCTOR es legalmente responsable de asegurarse de que todos los pasajeros menores de 16 años estén correctamente abrochados o sujetados. Si un niño va sin sujeción, el conductor recibe la multa y la sanción, no el padre o la madre." },
    ],
    options: [
      { content: "The child's parent, regardless of who is driving", isCorrect: false, zh: "儿童的父母，无论谁在驾车", es: "El padre o madre del niño, independientemente de quién conduzca" },
      { content: "The driver of the vehicle", isCorrect: true, zh: "车辆的驾驶人", es: "El conductor del vehículo" },
      { content: "The oldest passenger in the car", isCorrect: false, zh: "车内年龄最大的乘客", es: "El pasajero de mayor edad en el auto" },
      { content: "Only the child's legal guardian", isCorrect: false, zh: "仅儿童的法定监护人", es: "Solo el tutor legal del niño" },
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
