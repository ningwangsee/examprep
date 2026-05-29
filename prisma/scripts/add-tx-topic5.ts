/**
 * Add 15 Texas Topic 5 questions: Licensing & Responsibilities
 * Covers: age requirements, GDL (Learner/Provisional), passenger/night restrictions,
 * address change notification, minimum liability insurance (30/60/25),
 * crash reporting ($1,000 threshold), proof of insurance, points/surcharges,
 * lost license, renewal period (6 yr), driving w/o license, handheld devices,
 * Safety Responsibility Law suspension (2 yr)
 * Sources: Texas Driver Handbook DL-7 (Jan 2026), Texas Transportation Code
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  // Q1 ── Minimum age without driver ed ─────────────────────────────────────
  {
    content: "In Texas, what is the minimum age to apply for a Class C driver's license without completing a driver education course?",
    explanation: "Without a driver education course, the minimum age is 18. Applicants who complete an approved driver education course may apply at age 16.",
    handbookSection: "Licensing — Age Requirements",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，未完成驾驶教育课程的情况下，申请 C 类驾照的最低年龄是：",
        explanation: "未完成驾驶教育课程，申请最低年龄为 18 岁。完成经批准的驾驶教育课程的申请人可在 16 岁时申请。",
      },
      {
        language: "es",
        content: "En Texas, la edad mínima para solicitar una licencia de conducir Clase C sin completar un curso de educación para conductores es:",
        explanation: "Sin un curso de educación para conductores, la edad mínima es 18 años. Los solicitantes que completen un curso de educación para conductores aprobado pueden solicitar la licencia a los 16 años.",
      },
    ],
    options: [
      { content: "16", isCorrect: false, zh: "16 岁", es: "16 años" },
      { content: "17", isCorrect: false, zh: "17 岁", es: "17 años" },
      { content: "18", isCorrect: true,  zh: "18 岁", es: "18 años" },
      { content: "21", isCorrect: false, zh: "21 岁", es: "21 años" },
    ],
  },

  // Q2 ── Learner License supervising adult ─────────────────────────────────
  {
    content: "Under Texas's Graduated Driver License (GDL) program, a driver holding a Learner License must be accompanied by a licensed adult (21 or older) who is:",
    explanation: "The supervising adult must be a licensed driver aged 21 or older seated in the front passenger seat. They do not need to be a parent or instructor.",
    handbookSection: "Licensing — Graduated Driver License",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州分级驾照（GDL）计划，持有学习驾照的驾驶人必须由持照成年人（21 岁或以上）陪同，且该成年人须：",
        explanation: "监督成年人必须是 21 岁或以上的持照驾驶人，且须坐在前排副驾驶座。该人无需是父母或教练。",
      },
      {
        language: "es",
        content: "Bajo el programa de Licencia de Conducir Graduada (GDL) de Texas, un conductor que posee una Licencia de Aprendiz debe estar acompañado por un adulto con licencia (21 años o más) que esté:",
        explanation: "El adulto supervisor debe ser un conductor con licencia de 21 años o más sentado en el asiento del pasajero delantero. No necesita ser padre ni instructor.",
      },
    ],
    options: [
      { content: "Seated anywhere in the vehicle",            isCorrect: false, zh: "坐在车内任意位置",     es: "Sentado en cualquier lugar del vehículo" },
      { content: "Seated in the front passenger seat",        isCorrect: true,  zh: "坐在前排副驾驶座",     es: "Sentado en el asiento del pasajero delantero" },
      { content: "A certified driving instructor only",       isCorrect: false, zh: "仅限持证驾驶教练",     es: "Exclusivamente un instructor de manejo certificado" },
      { content: "A parent or legal guardian only",           isCorrect: false, zh: "仅限父母或法定监护人", es: "Exclusivamente un padre o tutor legal" },
    ],
  },

  // Q3 ── Required supervised hours ─────────────────────────────────────────
  {
    content: "A Texas Learner License holder must complete how many total hours of behind-the-wheel driving practice (including nighttime hours) before upgrading to a Provisional License?",
    explanation: "Texas GDL law requires 40 hours of supervised driving practice, including at least 10 hours at night, before a Learner License holder can upgrade to a Provisional License.",
    handbookSection: "Licensing — Graduated Driver License",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州学习驾照持有人在升级为临时驾照之前，须完成多少小时的实际驾驶练习（含夜间驾驶时数）？",
        explanation: "德克萨斯州 GDL 法律要求学习驾照持有人完成 40 小时有监督的驾驶练习，其中至少 10 小时为夜间驾驶，方可升级为临时驾照。",
      },
      {
        language: "es",
        content: "Un titular de una Licencia de Aprendiz de Texas debe completar cuántas horas totales de práctica de manejo (incluidas las horas nocturnas) antes de actualizar a una Licencia Provisional:",
        explanation: "La ley GDL de Texas exige 40 horas de práctica de manejo supervisada, incluyendo al menos 10 horas de noche, antes de que un titular de Licencia de Aprendiz pueda actualizarse a una Licencia Provisional.",
      },
    ],
    options: [
      { content: "20 hours (2 at night)",  isCorrect: false, zh: "20 小时（其中 2 小时夜间）",  es: "20 horas (2 de noche)" },
      { content: "30 hours (5 at night)",  isCorrect: false, zh: "30 小时（其中 5 小时夜间）",  es: "30 horas (5 de noche)" },
      { content: "40 hours (10 at night)", isCorrect: true,  zh: "40 小时（其中 10 小时夜间）", es: "40 horas (10 de noche)" },
      { content: "50 hours (15 at night)", isCorrect: false, zh: "50 小时（其中 15 小时夜间）", es: "50 horas (15 de noche)" },
    ],
  },

  // Q4 ── Provisional passenger restriction ─────────────────────────────────
  {
    content: "During the first 12 months after receiving a Texas Provisional License (or until age 18), what restriction applies to passengers?",
    explanation: "For the first year (or until age 18), a Provisional License holder may not have more than one passenger under 21 who is not a family member. This reduces distractions for new drivers.",
    handbookSection: "Licensing — Graduated Driver License",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "取得德克萨斯州临时驾照后的前 12 个月内（或至年满 18 岁前），关于乘客的限制规定是：",
        explanation: "在取得临时驾照后的第一年（或至年满 18 岁前），持照人不得搭载超过一名非家庭成员的 21 岁以下乘客。此规定旨在减少新手驾驶人的分心因素。",
      },
      {
        language: "es",
        content: "Durante los primeros 12 meses después de recibir una Licencia Provisional de Texas (o hasta los 18 años), ¿qué restricción aplica a los pasajeros?",
        explanation: "Durante el primer año (o hasta los 18 años), un titular de Licencia Provisional no puede llevar más de un pasajero menor de 21 años que no sea familiar. Esto reduce las distracciones para los conductores nuevos.",
      },
    ],
    options: [
      { content: "No passengers are allowed at any time",                                    isCorrect: false, zh: "任何时候均不得搭载乘客",                          es: "No se permiten pasajeros en ningún momento" },
      { content: "Only one passenger under 21 is permitted",                                 isCorrect: false, zh: "仅允许一名 21 岁以下乘客",                        es: "Solo se permite un pasajero menor de 21 años" },
      { content: "No more than one passenger under 21 who is not a family member",           isCorrect: true,  zh: "不得搭载超过一名非家庭成员的 21 岁以下乘客",       es: "No más de un pasajero menor de 21 años que no sea familiar" },
      { content: "Passengers are unrestricted",                                              isCorrect: false, zh: "乘客不受任何限制",                                es: "Los pasajeros no tienen restricciones" },
    ],
  },

  // Q5 ── Provisional night driving restriction ──────────────────────────────
  {
    content: "A Texas Provisional License holder may NOT drive between which hours (unless accompanied by a supervising adult, or traveling to/from work or school)?",
    explanation: "Texas law prohibits Provisional License holders from driving between midnight and 5 a.m. during the first year (or until age 18), unless accompanied by a licensed adult aged 21+, or driving directly to or from work or a school-related activity.",
    handbookSection: "Licensing — Graduated Driver License",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州临时驾照持有人，在哪些时间段内不得驾车（除非有监督成年人陪同，或正前往/返回工作单位或学校）？",
        explanation: "德克萨斯州法律禁止临时驾照持有人在取得驾照后第一年（或至年满 18 岁前）的午夜至凌晨 5 时期间驾车，除非有 21 岁以上持照成年人陪同，或直接前往/返回工作单位或与学校相关的活动。",
      },
      {
        language: "es",
        content: "Un titular de Licencia Provisional de Texas NO puede conducir entre qué horas (a menos que esté acompañado por un adulto supervisor, o viaje hacia/desde el trabajo o la escuela):",
        explanation: "La ley de Texas prohíbe a los titulares de Licencia Provisional conducir entre medianoche y las 5 a.m. durante el primer año (o hasta los 18 años), a menos que estén acompañados por un adulto con licencia de 21 años o más, o conduzcan directamente hacia o desde el trabajo o una actividad escolar.",
      },
    ],
    options: [
      { content: "9 p.m. – 5 a.m.",      isCorrect: false, zh: "晚上 9 时至凌晨 5 时", es: "9 p.m. – 5 a.m." },
      { content: "10 p.m. – 5 a.m.",     isCorrect: false, zh: "晚上 10 时至凌晨 5 时", es: "10 p.m. – 5 a.m." },
      { content: "Midnight – 5 a.m.",    isCorrect: true,  zh: "午夜至凌晨 5 时",       es: "Medianoche – 5 a.m." },
      { content: "Midnight – 6 a.m.",    isCorrect: false, zh: "午夜至凌晨 6 时",       es: "Medianoche – 6 a.m." },
    ],
  },

  // Q6 ── Address change notification (30 days) ─────────────────────────────
  {
    content: "Under Texas law, how soon must you notify the Department of Public Safety (DPS) when you change your address?",
    explanation: "Texas law requires drivers to notify the DPS of an address change within 30 days. You can update your address online through the DPS website.",
    handbookSection: "Licensing — Driver Responsibilities",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州法律，地址变更后须在多长时间内通知公共安全部（DPS）？",
        explanation: "德克萨斯州法律要求驾驶人在地址变更后 30 天内通知 DPS。可通过 DPS 官网在线更新地址。",
      },
      {
        language: "es",
        content: "Según la ley de Texas, ¿en cuánto tiempo debe notificar al Departamento de Seguridad Pública (DPS) cuando cambia su dirección?",
        explanation: "La ley de Texas exige que los conductores notifiquen al DPS un cambio de dirección dentro de 30 días. Puede actualizar su dirección en línea a través del sitio web del DPS.",
      },
    ],
    options: [
      { content: "Within 10 days",             isCorrect: false, zh: "10 天内",         es: "Dentro de 10 días" },
      { content: "Within 30 days",             isCorrect: true,  zh: "30 天内",         es: "Dentro de 30 días" },
      { content: "Within 60 days",             isCorrect: false, zh: "60 天内",         es: "Dentro de 60 días" },
      { content: "At your next license renewal", isCorrect: false, zh: "下次驾照更新时", es: "En su próxima renovación de licencia" },
    ],
  },

  // Q7 ── Minimum liability insurance 30/60/25 ──────────────────────────────
  {
    content: "Texas requires drivers to carry minimum liability insurance. What is the minimum coverage required (bodily injury per person / bodily injury per accident / property damage)?",
    explanation: "Texas requires minimum liability coverage of $30,000 per person for bodily injury, $60,000 per accident for bodily injury, and $25,000 for property damage — commonly written as 30/60/25.",
    handbookSection: "Licensing — Financial Responsibility",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州要求驾驶人持有最低责任险。最低保险额度要求（每人人身伤害 / 每次事故人身伤害 / 财产损失）为：",
        explanation: "德克萨斯州要求最低责任险额度为：每人人身伤害 30,000 美元、每次事故人身伤害 60,000 美元、财产损失 25,000 美元，通常简写为 30/60/25。",
      },
      {
        language: "es",
        content: "Texas exige que los conductores tengan un seguro de responsabilidad mínimo. ¿Cuál es la cobertura mínima requerida (lesiones corporales por persona / lesiones corporales por accidente / daños a la propiedad)?",
        explanation: "Texas exige una cobertura mínima de responsabilidad de $30,000 por persona por lesiones corporales, $60,000 por accidente por lesiones corporales y $25,000 por daños a la propiedad — comúnmente escrito como 30/60/25.",
      },
    ],
    options: [
      { content: "$15,000 / $30,000 / $5,000",     isCorrect: false, zh: "15,000 / 30,000 / 5,000 美元",     es: "$15,000 / $30,000 / $5,000" },
      { content: "$30,000 / $60,000 / $25,000",    isCorrect: true,  zh: "30,000 / 60,000 / 25,000 美元",    es: "$30,000 / $60,000 / $25,000" },
      { content: "$50,000 / $100,000 / $50,000",   isCorrect: false, zh: "50,000 / 100,000 / 50,000 美元",   es: "$50,000 / $100,000 / $50,000" },
      { content: "$100,000 / $300,000 / $100,000", isCorrect: false, zh: "100,000 / 300,000 / 100,000 美元", es: "$100,000 / $300,000 / $100,000" },
    ],
  },

  // Q8 ── Crash reporting threshold ($1,000) ────────────────────────────────
  {
    content: "If you are involved in a crash in Texas that results in injury, death, or property damage over a certain amount, you must report it to the Texas Department of Transportation. What is the property damage threshold that triggers this reporting requirement?",
    explanation: "In Texas, a crash must be reported to TxDOT if it results in injury, death, or property damage of $1,000 or more. The report must be filed within 10 days using the CR-2 form if no police report was made.",
    handbookSection: "Licensing — Accident Reporting",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，若发生涉及人员伤亡或达到一定财产损失金额的事故，须向德州交通局（TxDOT）报告。触发报告义务的财产损失金额门槛是：",
        explanation: "在德克萨斯州，若事故造成人员伤亡或财产损失达 1,000 美元或以上，须向 TxDOT 报告。若未出具警察报告，须在事故发生后 10 天内使用 CR-2 表格提交报告。",
      },
      {
        language: "es",
        content: "Si está involucrado en un accidente en Texas que resulta en lesiones, muerte o daños a la propiedad por encima de cierto monto, debe reportarlo al Departamento de Transporte de Texas. ¿Cuál es el umbral de daños a la propiedad que activa este requisito?",
        explanation: "En Texas, un accidente debe reportarse a TxDOT si resulta en lesiones, muerte o daños a la propiedad de $1,000 o más. El reporte debe presentarse dentro de 10 días usando el formulario CR-2 si no se realizó un reporte policial.",
      },
    ],
    options: [
      { content: "$500",   isCorrect: false, zh: "500 美元",   es: "$500" },
      { content: "$1,000", isCorrect: true,  zh: "1,000 美元", es: "$1,000" },
      { content: "$2,500", isCorrect: false, zh: "2,500 美元", es: "$2,500" },
      { content: "$5,000", isCorrect: false, zh: "5,000 美元", es: "$5,000" },
    ],
  },

  // Q9 ── Proof of financial responsibility ─────────────────────────────────
  {
    content: "What document must Texas drivers carry in their vehicle at all times as proof of financial responsibility?",
    explanation: "Texas law requires drivers to carry proof of financial responsibility (typically a liability insurance card) in their vehicle at all times and present it to a law enforcement officer upon request.",
    handbookSection: "Licensing — Financial Responsibility",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州驾驶人必须随时在车内携带哪种文件作为财务责任证明？",
        explanation: "德克萨斯州法律要求驾驶人随时在车内携带财务责任证明（通常为责任险保险卡），并在执法人员要求时出示。",
      },
      {
        language: "es",
        content: "¿Qué documento deben llevar los conductores de Texas en su vehículo en todo momento como prueba de responsabilidad financiera?",
        explanation: "La ley de Texas exige que los conductores lleven prueba de responsabilidad financiera (generalmente una tarjeta de seguro de responsabilidad) en su vehículo en todo momento y la presenten a un oficial de la ley cuando se lo soliciten.",
      },
    ],
    options: [
      { content: "Vehicle registration only",          isCorrect: false, zh: "仅车辆登记证",   es: "Solo el registro del vehículo" },
      { content: "Proof of liability insurance",       isCorrect: true,  zh: "责任险保险证明", es: "Prueba de seguro de responsabilidad" },
      { content: "A surety bond certificate",          isCorrect: false, zh: "担保债券证书",   es: "Un certificado de fianza" },
      { content: "A copy of their driver's license",   isCorrect: false, zh: "驾照副本",       es: "Una copia de su licencia de conducir" },
    ],
  },

  // Q10 ── Points surcharge threshold (6 pts / 12 mo) ───────────────────────
  {
    content: "In Texas, your driver's license may be subject to a surcharge if you accumulate how many traffic conviction points within any 12-month period?",
    explanation: "Under Texas's Driver Responsibility Program, accumulating 6 or more points within 12 months triggers an annual surcharge. Each standard moving violation adds 2 points; violations resulting in a crash add 3 points.",
    handbookSection: "Licensing — Points & Surcharges",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，在任意 12 个月内累计多少分将触发驾驶记录附加费？",
        explanation: "根据德克萨斯州驾驶人责任计划，在 12 个月内累计 6 分或以上将触发年度附加费。每项标准违规记 2 分；造成事故的违规记 3 分。",
      },
      {
        language: "es",
        content: "En Texas, su licencia de conducir puede estar sujeta a un recargo si acumula cuántos puntos por infracciones de tránsito dentro de cualquier período de 12 meses:",
        explanation: "Bajo el Programa de Responsabilidad del Conductor de Texas, acumular 6 o más puntos en 12 meses genera un recargo anual. Cada infracción de tránsito estándar agrega 2 puntos; las infracciones que resultan en un accidente agregan 3 puntos.",
      },
    ],
    options: [
      { content: "4 points",  isCorrect: false, zh: "4 分",  es: "4 puntos" },
      { content: "6 points",  isCorrect: true,  zh: "6 分",  es: "6 puntos" },
      { content: "8 points",  isCorrect: false, zh: "8 分",  es: "8 puntos" },
      { content: "10 points", isCorrect: false, zh: "10 分", es: "10 puntos" },
    ],
  },

  // Q11 ── Lost or stolen license ────────────────────────────────────────────
  {
    content: "If your Texas driver's license is lost or stolen, you should:",
    explanation: "A lost or stolen Texas license should be replaced promptly by applying at a DPS office or through the online portal. A small replacement fee applies.",
    handbookSection: "Licensing — Driver Responsibilities",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "若德克萨斯州驾照丢失或被盗，应该：",
        explanation: "德克萨斯州驾照丢失或被盗后，应尽快在 DPS 办公室或通过网上平台申请补办。补办需缴纳少量手续费。",
      },
      {
        language: "es",
        content: "Si su licencia de conducir de Texas se pierde o es robada, debe:",
        explanation: "Una licencia de Texas perdida o robada debe reemplazarse rápidamente solicitándola en una oficina del DPS o a través del portal en línea. Se aplica una pequeña tarifa de reemplazo.",
      },
    ],
    options: [
      { content: "Wait until renewal to get a replacement",                               isCorrect: false, zh: "等到更新时再补办",                       es: "Esperar hasta la renovación para obtener un reemplazo" },
      { content: "Apply for a replacement license at a DPS office or online",             isCorrect: true,  zh: "在 DPS 办公室或网上申请补办驾照",          es: "Solicitar una licencia de reemplazo en una oficina del DPS o en línea" },
      { content: "Use a photocopy of your license until a replacement arrives",           isCorrect: false, zh: "在补办驾照前使用驾照复印件",               es: "Usar una fotocopia de su licencia hasta que llegue el reemplazo" },
      { content: "File a police report only — no license action is needed",              isCorrect: false, zh: "仅报警备案，无需办理驾照手续",             es: "Solo presentar un reporte policial — no se necesita ninguna acción con la licencia" },
    ],
  },

  // Q12 ── License validity period (6 years) ────────────────────────────────
  {
    content: "Texas driver's licenses issued to adults aged 21 and older are valid for how long?",
    explanation: "Standard Texas driver's licenses for adults 21 and older are valid for 6 years. Licenses for drivers under 21 expire on their 21st birthday.",
    handbookSection: "Licensing — License Renewal",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州向 21 岁及以上成年人颁发的驾照有效期为多长？",
        explanation: "德克萨斯州 21 岁及以上成年人的标准驾照有效期为 6 年。21 岁以下驾驶人的驾照将于其 21 岁生日当天到期。",
      },
      {
        language: "es",
        content: "Las licencias de conducir de Texas emitidas para adultos de 21 años o más son válidas por cuánto tiempo:",
        explanation: "Las licencias de conducir estándar de Texas para adultos de 21 años o más son válidas por 6 años. Las licencias para conductores menores de 21 años vencen en su cumpleaños número 21.",
      },
    ],
    options: [
      { content: "4 years",  isCorrect: false, zh: "4 年", es: "4 años" },
      { content: "6 years",  isCorrect: true,  zh: "6 年", es: "6 años" },
      { content: "8 years",  isCorrect: false, zh: "8 年", es: "8 años" },
      { content: "10 years", isCorrect: false, zh: "10 年", es: "10 años" },
    ],
  },

  // Q13 ── Driving without valid license ────────────────────────────────────
  {
    content: "Which of the following is a consequence of driving without a valid Texas driver's license?",
    explanation: "Driving without a valid license in Texas is a Class C misdemeanor, punishable by a fine of up to $200. Driving while your license is suspended or revoked carries more severe penalties.",
    handbookSection: "Licensing — Driver Responsibilities",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "无有效驾照驾车在德克萨斯州会导致以下哪种后果？",
        explanation: "在德克萨斯州无有效驾照驾车属于 C 类轻罪，最高可处 200 美元罚款。在驾照被暂停或吊销期间驾车将面临更严重的处罚。",
      },
      {
        language: "es",
        content: "¿Cuál de las siguientes es una consecuencia de conducir sin una licencia de conducir válida de Texas?",
        explanation: "Conducir sin una licencia válida en Texas es un delito menor Clase C, sancionable con una multa de hasta $200. Conducir mientras su licencia está suspendida o revocada conlleva sanciones más graves.",
      },
    ],
    options: [
      { content: "A verbal warning on the first offense",          isCorrect: false, zh: "首次违规仅口头警告",         es: "Una advertencia verbal en la primera infracción" },
      { content: "A civil fine only, with no criminal record",     isCorrect: false, zh: "仅处民事罚款，不留刑事记录", es: "Solo una multa civil, sin antecedentes penales" },
      { content: "A Class C misdemeanor and a fine",               isCorrect: true,  zh: "C 类轻罪指控及罚款",         es: "Un delito menor Clase C y una multa" },
      { content: "Automatic 1-year license revocation",            isCorrect: false, zh: "自动吊销驾照一年",           es: "Revocación automática de la licencia por 1 año" },
    ],
  },

  // Q14 ── Handheld device / hands-free ─────────────────────────────────────
  {
    content: "When may a Texas driver legally use a handheld mobile device while driving?",
    explanation: "Texas prohibits reading, writing, or sending electronic messages while driving. Hands-free use is permitted. In school zones, all handheld device use is banned when children are present, regardless of hands-free status.",
    handbookSection: "Licensing — Driver Responsibilities",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州驾驶人在何种情况下可以在驾车时合法使用手持移动设备？",
        explanation: "德克萨斯州禁止驾车时阅读、书写或发送电子信息。允许使用免提设备。在学区内，当有儿童在场时，无论是否免提，均禁止使用任何手持设备。",
      },
      {
        language: "es",
        content: "¿Cuándo puede un conductor de Texas usar legalmente un dispositivo móvil de mano mientras conduce?",
        explanation: "Texas prohíbe leer, escribir o enviar mensajes electrónicos mientras conduce. Se permite el uso manos libres. En zonas escolares, está prohibido el uso de cualquier dispositivo de mano cuando hay niños presentes, independientemente del modo manos libres.",
      },
    ],
    options: [
      { content: "At any time, as long as they use only one hand", isCorrect: false, zh: "任何时候，只要只用一只手",     es: "En cualquier momento, siempre que use solo una mano" },
      { content: "Only when stopped at a red light",               isCorrect: false, zh: "仅在停红灯时",                 es: "Solo cuando está detenido en un semáforo en rojo" },
      { content: "Only when using a hands-free device",            isCorrect: true,  zh: "仅在使用免提设备时",           es: "Solo cuando usa un dispositivo manos libres" },
      { content: "Only on highways, not in urban areas",           isCorrect: false, zh: "仅在公路上，不适用于城市区域", es: "Solo en autopistas, no en áreas urbanas" },
    ],
  },

  // Q15 ── Safety Responsibility Law suspension (2 years) ───────────────────
  {
    content: "Under Texas's Safety Responsibility Law, a driver who cannot show proof of financial responsibility after a crash may have their license and vehicle registration suspended for up to:",
    explanation: "Under the Safety Responsibility Law, failure to provide proof of financial responsibility (insurance) following a crash can result in suspension of the driver's license and vehicle registration for up to 2 years, or until the driver files proof of financial responsibility with DPS.",
    handbookSection: "Licensing — Financial Responsibility",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州安全责任法，事故发生后无法出示财务责任证明的驾驶人，其驾照和车辆登记可被吊销最长：",
        explanation: "根据安全责任法，事故后未能提供财务责任证明（保险）可导致驾照和车辆登记被吊销最长 2 年，或直至驾驶人向 DPS 提交财务责任证明为止。",
      },
      {
        language: "es",
        content: "Bajo la Ley de Responsabilidad de Seguridad de Texas, un conductor que no puede mostrar prueba de responsabilidad financiera después de un accidente puede tener su licencia y registro de vehículo suspendidos por hasta:",
        explanation: "Bajo la Ley de Responsabilidad de Seguridad, no proporcionar prueba de responsabilidad financiera (seguro) después de un accidente puede resultar en la suspensión de la licencia de conducir y el registro del vehículo por hasta 2 años, o hasta que el conductor presente prueba de responsabilidad financiera ante el DPS.",
      },
    ],
    options: [
      { content: "6 months", isCorrect: false, zh: "6 个月", es: "6 meses" },
      { content: "1 year",   isCorrect: false, zh: "1 年",   es: "1 año" },
      { content: "2 years",  isCorrect: true,  zh: "2 年",   es: "2 años" },
      { content: "5 years",  isCorrect: false, zh: "5 年",   es: "5 años" },
    ],
  },
];

async function main() {
  const category = await prisma.examCategory.findFirst({
    where: { nameEn: "Texas Driver's License" },
  });
  if (!category) throw new Error("Category 'Texas Driver's License' not found");

  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Licensing & Responsibilities", categoryId: category.id },
  });
  if (!topic) throw new Error("Topic 'Licensing & Responsibilities' not found");
  console.log(`Found topic: ${topic.nameEn} (id=${topic.id})`);

  let added = 0;
  for (const q of newQuestions) {
    const exists = await prisma.question.findFirst({
      where: { content: q.content, topicId: topic.id },
    });
    if (exists) {
      console.log(`  ⏭  Skip (exists): ${q.content.slice(0, 60)}…`);
      continue;
    }
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
    added++;
    console.log(`  ✅ Added: ${q.content.slice(0, 60)}…`);
  }
  console.log(`\n🎉 Done! Added ${added} questions to TX Topic 5.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
