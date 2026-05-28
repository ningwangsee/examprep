/**
 * Add 5 new distracted driving questions to Topic 6 (Safe Driving & Parking)
 * Run: npx tsx prisma/scripts/add-distracted-driving.ts
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  {
    content: "In California, when can you legally use a handheld cell phone while driving?",
    explanation: "California law prohibits all handheld cell phone use while driving, including at red lights. You must use a hands-free device (speakerphone mounted on dash, Bluetooth, or earpiece) to legally make calls.",
    handbookSection: "Safe Driving — Distracted Driving",
    difficulty: 1,
    translations: [
      { language: "zh", content: "在加利福尼亚州，驾车时何时可以合法使用手持手机？", explanation: "加州法律禁止在驾车时以任何方式使用手持手机，包括等红灯时。如需通话，必须使用免提设备（固定在仪表台上的扬声器、蓝牙耳机等）。" },
      { language: "es", content: "En California, ¿cuándo puede usar legalmente un teléfono celular de mano mientras conduce?", explanation: "La ley de California prohíbe el uso de teléfonos de mano al conducir, incluso detenido en un semáforo. Debe usar un dispositivo manos libres (altavoz fijo en el tablero, Bluetooth o auricular) para realizar llamadas legalmente." },
    ],
    options: [
      { content: "When driving at speeds under 25 mph", isCorrect: false, zh: "行驶速度低于 25 英里/小时时", es: "Cuando conduce a menos de 25 mph" },
      { content: "When stopped at a red light", isCorrect: false, zh: "停在红灯前时", es: "Cuando está detenido en un semáforo en rojo" },
      { content: "Never — handheld use is always illegal while driving", isCorrect: true, zh: "任何时候都不允许——驾车时使用手持手机始终违法", es: "Nunca — el uso de teléfonos de mano siempre es ilegal al conducir" },
      { content: "Only to make a call, not to text", isCorrect: false, zh: "仅限打电话，不能发短信", es: "Solo para llamar, no para enviar mensajes de texto" },
    ],
  },
  {
    content: "You are driving and need to make a call. What is the legal way to do this in California?",
    explanation: "California requires hands-free operation for all phone use while driving. A Bluetooth headset, speakerphone mounted on the dashboard, or similar hands-free device is required. Texting is strictly prohibited.",
    handbookSection: "Safe Driving — Distracted Driving",
    difficulty: 1,
    translations: [
      { language: "zh", content: "您正在驾车，需要打一个电话。在加州，合法的做法是什么？", explanation: "加州要求驾车时所有手机使用均须免提操作。必须使用蓝牙耳机、固定在仪表台上的扬声器或类似免提设备。发短信则被明令禁止。" },
      { language: "es", content: "Está conduciendo y necesita hacer una llamada. ¿Cuál es la forma legal de hacerlo en California?", explanation: "California exige el uso manos libres para cualquier llamada mientras conduce. Se requiere un auricular Bluetooth, un altavoz fijo en el tablero u otro dispositivo manos libres similar. Los mensajes de texto están estrictamente prohibidos." },
    ],
    options: [
      { content: "Hold the phone to your ear and speak quickly", isCorrect: false, zh: "将手机贴耳，快速说完", es: "Sostenga el teléfono junto al oído y hable rápido" },
      { content: "Use a Bluetooth headset or a mounted hands-free device", isCorrect: true, zh: "使用蓝牙耳机或固定在车上的免提设备", es: "Use un auricular Bluetooth o un dispositivo manos libres fijo en el vehículo" },
      { content: "Pull over only if the call is longer than 2 minutes", isCorrect: false, zh: "通话超过 2 分钟才需要靠边停车", es: "Orille solo si la llamada dura más de 2 minutos" },
      { content: "Text instead of calling to save time", isCorrect: false, zh: "为节省时间，改发短信而非打电话", es: "Envíe un mensaje de texto en lugar de llamar para ahorrar tiempo" },
    ],
  },
  {
    content: "What is the penalty for a first-time offense of using a handheld cell phone while driving in California?",
    explanation: "The base fine for a first offense is $20, but California's penalty assessments add fees that bring the actual cost to approximately $150 or more. Repeat offenses have higher fines. Points are NOT added to your driving record for this violation.",
    handbookSection: "Safe Driving — Distracted Driving",
    difficulty: 2,
    translations: [
      { language: "zh", content: "在加州，首次违规使用手持手机驾车的处罚是什么？", explanation: "首次违规的基础罚款为 20 美元，但加州的附加处罚费用使实际金额达到约 150 美元或更多。多次违规罚款更高。此违规不计入驾驶记录扣分。" },
      { language: "es", content: "¿Cuál es la sanción por una primera infracción de uso de teléfono de mano al conducir en California?", explanation: "La multa base por la primera infracción es de $20, pero los cargos adicionales de California elevan el costo real a aproximadamente $150 o más. Las reincidencias tienen multas más altas. Esta infracción NO agrega puntos al historial de manejo." },
    ],
    options: [
      { content: "A warning only, no fine", isCorrect: false, zh: "仅口头警告，无罚款", es: "Solo una advertencia, sin multa" },
      { content: "License suspension for 30 days", isCorrect: false, zh: "吊销驾照 30 天", es: "Suspensión de licencia por 30 días" },
      { content: "A base fine of $20, plus penalty assessments making the total around $150", isCorrect: true, zh: "基础罚款 20 美元，加上附加费后实际总额约 150 美元", es: "Multa base de $20, más cargos adicionales que suman aproximadamente $150 en total" },
      { content: "Community service of 10 hours", isCorrect: false, zh: "社区服务 10 小时", es: "Servicio comunitario de 10 horas" },
    ],
  },
  {
    content: "Which of the following drivers may use a handheld cell phone while driving in California?",
    explanation: "There is one exception: any driver may use a handheld phone to call 911 or emergency services when no hands-free device is available and it is a genuine emergency. All other handheld use is illegal regardless of age, experience, or road type.",
    handbookSection: "Safe Driving — Distracted Driving",
    difficulty: 2,
    translations: [
      { language: "zh", content: "以下哪类驾驶人可以在加州驾车时使用手持手机？", explanation: "仅有一项例外：在无免提设备且确属紧急情况时，任何驾驶人均可手持手机拨打 911 或紧急服务电话。其他所有手持使用行为，无论年龄、驾龄或道路类型，均属违法。" },
      { language: "es", content: "¿Cuál de los siguientes conductores puede usar un teléfono de mano al conducir en California?", explanation: "Existe una sola excepción: cualquier conductor puede usar un teléfono de mano para llamar al 911 o servicios de emergencia cuando no haya un dispositivo manos libres disponible y sea una emergencia real. Todo otro uso de mano es ilegal, sin importar la edad, experiencia o tipo de vía." },
    ],
    options: [
      { content: "Drivers over age 18 in an emergency situation", isCorrect: true, zh: "18 岁以上驾驶人遭遇紧急情况时", es: "Conductores mayores de 18 años en una situación de emergencia" },
      { content: "Drivers who have had a license for more than 5 years", isCorrect: false, zh: "持照超过 5 年的驾驶人", es: "Conductores con licencia por más de 5 años" },
      { content: "Drivers operating on a private road", isCorrect: false, zh: "在私人道路上行驶的驾驶人", es: "Conductores en caminos privados" },
      { content: "Taxi and rideshare drivers while checking their app", isCorrect: false, zh: "出租车和网约车司机在查看接单应用时", es: "Taxistas y conductores de transporte por red al revisar su aplicación" },
    ],
  },
  {
    content: "Under California law, drivers under 18 years old with a provisional license:",
    explanation: "Drivers under 18 with a provisional license are prohibited from using ANY wireless communication device while driving — including hands-free devices. This stricter rule applies until they turn 18 and obtain a regular license.",
    handbookSection: "Safe Driving — Distracted Driving",
    difficulty: 2,
    translations: [
      { language: "zh", content: "根据加州法律，持有临时驾照的 18 岁以下驾驶人：", explanation: "持有临时驾照的 18 岁以下驾驶人，驾车时被禁止使用任何无线通讯设备，包括免提设备。这一更严格的规定在其年满 18 岁并取得正式驾照前持续有效。" },
      { language: "es", content: "Según la ley de California, los conductores menores de 18 años con licencia provisional:", explanation: "Los conductores menores de 18 años con licencia provisional tienen prohibido usar cualquier dispositivo de comunicación inalámbrico al conducir, incluidos los manos libres. Esta norma más estricta se aplica hasta que cumplan 18 años y obtengan una licencia regular." },
    ],
    options: [
      { content: "May use hands-free devices while driving", isCorrect: false, zh: "驾车时可使用免提设备", es: "Pueden usar dispositivos manos libres al conducir" },
      { content: "May not use any wireless device while driving, even hands-free", isCorrect: true, zh: "驾车时不得使用任何无线通讯设备，包括免提设备", es: "No pueden usar ningún dispositivo de comunicación inalámbrico al conducir, ni siquiera manos libres" },
      { content: "May use a cell phone only on the freeway", isCorrect: false, zh: "仅在高速公路上可使用手机", es: "Pueden usar el celular solo en la autopista" },
      { content: "May text at red lights if the phone is mounted", isCorrect: false, zh: "停红灯时可在固定状态下发短信", es: "Pueden enviar mensajes de texto en semáforos en rojo si el teléfono está fijo" },
    ],
  },
];

async function main() {
  // Find Topic 6: Safe Driving & Parking
  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Safe Driving & Parking" },
  });
  if (!topic) throw new Error("Topic 'Safe Driving & Parking' not found");
  console.log(`✅ Found topic: ${topic.name} (id=${topic.id})`);

  let added = 0;
  for (const q of newQuestions) {
    // Skip if already exists
    const exists = await prisma.question.findFirst({
      where: { content: q.content, topicId: topic.id },
    });
    if (exists) {
      console.log(`⚠️  Already exists, skipping: "${q.content.slice(0, 50)}..."`);
      continue;
    }

    const question = await prisma.question.create({
      data: {
        content: q.content,
        explanation: q.explanation,
        handbookSection: q.handbookSection,
        difficulty: q.difficulty,
        topicId: topic.id,
        translations: {
          create: q.translations.map((t) => ({
            language: t.language,
            content: t.content,
            explanation: t.explanation,
          })),
        },
        options: {
          create: q.options.map((o) => ({
            content: o.content,
            isCorrect: o.isCorrect,
            translations: {
              create: [
                { language: "zh", content: o.zh },
                { language: "es", content: o.es },
              ],
            },
          })),
        },
      },
    });

    console.log(`✅ Added: "${question.content.slice(0, 60)}..."`);
    added++;
  }

  console.log(`\n🎉 Done! Added ${added} new questions to "${topic.name}".`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
