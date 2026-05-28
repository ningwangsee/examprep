import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "In California, you must report a traffic accident to the DMV within 10 days if:",
    explanation: "You must report the accident to the DMV within 10 days if anyone was injured or killed, OR if property damage exceeds $1,000. This is a separate requirement from reporting to law enforcement. Failure to file can result in suspension of your driver's license.",
    handbookSection: "Safe Driving — Accidents",
    difficulty: 2,
    translations: [
      { language: "zh", content: "在加利福尼亚州，发生交通事故后，在哪种情况下必须在 10 天内向车辆管理局（DMV）报告？", explanation: "如事故造成人员受伤或死亡，或财产损失超过 1,000 美元，必须在 10 天内向 DMV 提交报告。此要求与向执法部门报案相互独立，缺一不可。未按时申报可能导致驾照被吊销。" },
      { language: "es", content: "En California, debe reportar un accidente de tráfico al DMV dentro de 10 días si:", explanation: "Debe reportar el accidente al DMV dentro de 10 días si hay personas heridas o fallecidas, o si los daños materiales superan los $1,000. Este requisito es independiente del reporte a las autoridades. No presentar el informe puede resultar en la suspensión de su licencia de conducir." },
    ],
    options: [
      { content: "The accident occurs on a freeway", isCorrect: false, zh: "事故发生在高速公路上", es: "El accidente ocurre en una autopista" },
      { content: "Anyone is injured or killed, or damage exceeds $1,000", isCorrect: true, zh: "有人员伤亡，或财产损失超过 1,000 美元", es: "Hay personas heridas o fallecidas, o los daños materiales superan los $1,000" },
      { content: "The other driver does not have insurance", isCorrect: false, zh: "对方驾驶人没有保险", es: "El otro conductor no tiene seguro" },
      { content: "Your vehicle requires towing", isCorrect: false, zh: "您的车辆需要拖车救援", es: "Su vehículo necesita ser remolcado" },
    ],
  },
  {
    content: "After a collision, you are required by law to:",
    explanation: "After any collision, you must stop immediately at the scene, provide your driver's license, registration, and insurance information to the other party, and render reasonable aid to anyone injured. Leaving the scene of an accident with injuries is a felony in California.",
    handbookSection: "Safe Driving — Accidents",
    difficulty: 1,
    translations: [
      { language: "zh", content: "发生碰撞事故后，法律要求您必须：", explanation: "发生任何碰撞事故后，您必须立即在现场停车，向对方提供驾照、行驶证和保险信息，并对受伤人员提供合理救助。在加州，在有人员受伤的事故中逃离现场属于重罪。" },
      { language: "es", content: "Después de una colisión, la ley le exige:", explanation: "Después de cualquier colisión, debe detenerse de inmediato en el lugar, proporcionar su licencia de conducir, registro del vehículo e información del seguro a la otra parte, y brindar ayuda razonable a cualquier persona herida. Abandonar la escena de un accidente con heridos es un delito grave en California." },
    ],
    options: [
      { content: "Leave the scene quickly to call police from a safe location", isCorrect: false, zh: "迅速离开现场，到安全地点后再报警", es: "Abandonar la escena rápidamente para llamar a la policía desde un lugar seguro" },
      { content: "Stop, exchange information, and render aid to injured persons", isCorrect: true, zh: "停车、交换信息，并对受伤人员施以援助", es: "Detenerse, intercambiar información y brindar ayuda a los heridos" },
      { content: "Stop only if your vehicle is damaged", isCorrect: false, zh: "只有在自己车辆受损时才需停车", es: "Detenerse solo si su vehículo tiene daños" },
      { content: "Report the accident only if the other driver asks you to", isCorrect: false, zh: "只有在对方驾驶人要求时才需报告事故", es: "Reportar el accidente solo si el otro conductor se lo pide" },
    ],
  },
  {
    content: "What information must you exchange with the other driver after a collision?",
    explanation: "After a collision, you must exchange: driver's license number, name and address, vehicle registration number, and insurance company and policy number. Refusing to provide this information is a violation of California law.",
    handbookSection: "Safe Driving — Accidents",
    difficulty: 1,
    translations: [
      { language: "zh", content: "碰撞事故发生后，您必须与对方驾驶人交换哪些信息？", explanation: "事故发生后，双方必须交换以下信息：驾照号码、姓名与地址、车辆登记号码，以及保险公司名称和保单号码。拒绝提供上述信息违反加州法律。" },
      { language: "es", content: "¿Qué información debe intercambiar con el otro conductor después de una colisión?", explanation: "Después de una colisión, debe intercambiar: número de licencia de conducir, nombre y dirección, número de registro del vehículo, y nombre de la compañía de seguros y número de póliza. Negarse a proporcionar esta información es una violación de la ley de California." },
    ],
    options: [
      { content: "Only your phone number", isCorrect: false, zh: "仅提供您的电话号码", es: "Solo su número de teléfono" },
      { content: "Driver's license, name, address, registration, and insurance information", isCorrect: true, zh: "驾照号码、姓名与地址、车辆登记号码，以及保险公司名称和保单号码", es: "Licencia de conducir, nombre y dirección, número de registro del vehículo, y nombre de la aseguradora y número de póliza" },
      { content: "Only your insurance card", isCorrect: false, zh: "仅提供您的保险卡", es: "Solo su tarjeta de seguro" },
      { content: "Your license plate number only", isCorrect: false, zh: "仅提供您的车牌号码", es: "Solo el número de su placa" },
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
