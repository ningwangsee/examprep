/**
 * Static exam guide content keyed by category nameEn.
 * All content strings are trilingual: { en, zh, es }.
 */

import type { Lang } from "./lang";

type I18n = Record<Lang, string>;

export type HandbookChapter = {
  title: I18n;
  url: string;
  emoji: string;
};

export type OfficialLink = {
  label: I18n;
  url: string;
  description: I18n;
  emoji: string;
};

export type ExamGuide = {
  stats: { label: I18n; value: string }[];
  whatToBring: { item: I18n; note?: I18n }[];
  howToSchedule: { step: I18n; detail: I18n }[];
  tips: I18n[];
  handbookChapters: HandbookChapter[];
  officialLinks: OfficialLink[];
};

// ─── California DMV ────────────────────────────────────────────────────────────

const californiaDMV: ExamGuide = {
  stats: [
    {
      label: { en: "Questions", zh: "题目数", es: "Preguntas" },
      value: "46",
    },
    {
      label: { en: "To Pass", zh: "通过标准", es: "Para Aprobar" },
      value: "38 / 46 (83%)",
    },
    {
      label: { en: "Time Limit", zh: "时间限制", es: "Límite de Tiempo" },
      value: "None / 无 / Sin límite",
    },
    {
      label: { en: "Languages", zh: "考试语言", es: "Idiomas" },
      value: "33",
    },
    {
      label: { en: "Retakes", zh: "重考次数", es: "Intentos" },
      value: "3× / visit",
    },
    {
      label: { en: "Fee", zh: "费用", es: "Tarifa" },
      value: "$41 (included)",
    },
  ],

  whatToBring: [
    {
      item: {
        en: "Proof of identity",
        zh: "身份证明",
        es: "Prueba de identidad",
      },
      note: {
        en: "U.S. passport, birth certificate, or permanent resident card",
        zh: "美国护照、出生证明或永久居留卡",
        es: "Pasaporte de EE.UU., certificado de nacimiento o tarjeta de residente permanente",
      },
    },
    {
      item: {
        en: "Social Security Number",
        zh: "社会安全号码",
        es: "Número de Seguro Social",
      },
      note: {
        en: "Just know the number — you do not need to bring the card",
        zh: "只需记住号码，不需要带实体卡",
        es: "Solo necesita saber el número, no es necesario traer la tarjeta",
      },
    },
    {
      item: {
        en: "California residency proof",
        zh: "加州居住证明",
        es: "Prueba de residencia en California",
      },
      note: {
        en: "Utility bill, bank statement, or lease showing your CA address",
        zh: "水电账单、银行对账单或租赁合同（需显示加州地址）",
        es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección de CA",
      },
    },
    {
      item: {
        en: "Application form DL 44",
        zh: "申请表格 DL 44",
        es: "Formulario de solicitud DL 44",
      },
      note: {
        en: "Available at any DMV office, or fill it out online in advance",
        zh: "可在任何 DMV 办公室领取，或提前在线填写",
        es: "Disponible en cualquier oficina del DMV, o complételo en línea con anticipación",
      },
    },
    {
      item: {
        en: "$41 application fee",
        zh: "$41 申请费",
        es: "Tarifa de solicitud de $41",
      },
      note: {
        en: "Cash, check, or card accepted",
        zh: "接受现金、支票或刷卡",
        es: "Se acepta efectivo, cheque o tarjeta",
      },
    },
  ],

  howToSchedule: [
    {
      step: {
        en: "Schedule online (fastest)",
        zh: "在线预约（最快）",
        es: "Programar en línea (más rápido)",
      },
      detail: {
        en: "Visit dmv.ca.gov and book a same-day or future appointment — usually the fastest option.",
        zh: "访问 dmv.ca.gov 预约当天或未来的考试——通常是最快的方式。",
        es: "Visite dmv.ca.gov y reserve una cita para el mismo día o en el futuro — generalmente la opción más rápida.",
      },
    },
    {
      step: {
        en: "Call by phone",
        zh: "电话预约",
        es: "Llamar por teléfono",
      },
      detail: {
        en: "1-800-777-0133 (Mon–Fri 8am–5pm). Have your ZIP code ready to find the nearest office.",
        zh: "1-800-777-0133（周一至周五 8am–5pm），准备好邮政编码以找到最近的办公室。",
        es: "1-800-777-0133 (Lun–Vie 8am–5pm). Tenga su código postal listo para encontrar la oficina más cercana.",
      },
    },
    {
      step: {
        en: "Walk in",
        zh: "现场排队",
        es: "Presentarse sin cita",
      },
      detail: {
        en: "Arrive early morning. Wait times vary — check current wait times at dmv.ca.gov before going.",
        zh: "请早晨到达，等待时间因办公室而异——出发前先在 dmv.ca.gov 查看当前等待时长。",
        es: "Llegue temprano por la mañana. Los tiempos de espera varían — verifique los tiempos actuales en dmv.ca.gov antes de ir.",
      },
    },
  ],

  tips: [
    {
      en: "Read the full California Driver Handbook at least once before taking the test.",
      zh: "考试前至少完整阅读一遍《加州驾驶员手册》。",
      es: "Lea el Manual del Conductor de California completo al menos una vez antes de tomar el examen.",
    },
    {
      en: "The test is on a touchscreen computer — no paper or pencil needed.",
      zh: "考试在触摸屏电脑上进行，不需要纸和笔。",
      es: "El examen se realiza en una computadora con pantalla táctil — no necesita papel ni lápiz.",
    },
    {
      en: "You can take the test in your preferred language (33 languages available).",
      zh: "您可以选择自己的母语参加考试（提供33种语言）。",
      es: "Puede tomar el examen en su idioma preferido (disponible en 33 idiomas).",
    },
    {
      en: "If you fail, you can retake up to 3 times per visit. After 3 failures you must reapply.",
      zh: "如果失败，每次就诊最多可重考3次，3次全部失败后需重新申请。",
      es: "Si reprueba, puede volver a tomar hasta 3 veces por visita. Después de 3 fallas debe volver a solicitar.",
    },
    {
      en: "There is no time limit — read each question carefully before answering.",
      zh: "考试没有时间限制，请仔细阅读每道题再作答。",
      es: "No hay límite de tiempo — lea cada pregunta con cuidado antes de responder.",
    },
    {
      en: "Questions come from a large pool, so each attempt may show different questions.",
      zh: "题目来自大型题库，每次考试可能出现不同题目。",
      es: "Las preguntas vienen de un banco grande, por lo que cada intento puede mostrar preguntas diferentes.",
    },
  ],

  handbookChapters: [
    {
      title: { en: "Getting Your License", zh: "获取驾照", es: "Obtener su Licencia" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-your-license/",
      emoji: "🪪",
    },
    {
      title: { en: "Traffic Controls", zh: "交通控制", es: "Controles de Tráfico" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/traffic-controls/",
      emoji: "🚦",
    },
    {
      title: { en: "Safe Driving", zh: "安全驾驶", es: "Conducción Segura" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/",
      emoji: "🛡️",
    },
    {
      title: { en: "Sharing the Road", zh: "共享道路", es: "Compartir la Vía" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/sharing-the-road/",
      emoji: "🚲",
    },
    {
      title: { en: "Alcohol and Drugs", zh: "酒精与毒品", es: "Alcohol y Drogas" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/",
      emoji: "🚫",
    },
    {
      title: { en: "Emergencies", zh: "紧急情况", es: "Emergencias" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/emergencies/",
      emoji: "🆘",
    },
    {
      title: { en: "Vehicle Safety", zh: "车辆安全", es: "Seguridad del Vehículo" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/vehicle-safety/",
      emoji: "🔧",
    },
    {
      title: { en: "Financial Responsibility", zh: "财务责任", es: "Responsabilidad Financiera" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility/",
      emoji: "📋",
    },
  ],

  officialLinks: [
    {
      label: { en: "CA DMV Official Site", zh: "加州 DMV 官网", es: "Sitio Oficial del DMV de CA" },
      url: "https://www.dmv.ca.gov",
      description: {
        en: "Home of the California Department of Motor Vehicles",
        zh: "加州机动车辆管理局官方网站",
        es: "Sitio web del Departamento de Vehículos Motorizados de California",
      },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver Handbook (Online)", zh: "驾驶员手册（在线版）", es: "Manual del Conductor (En línea)" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/",
      description: {
        en: "Full California Driver Handbook — read chapter by chapter",
        zh: "完整的加州驾驶员手册——按章节在线阅读",
        es: "Manual completo del Conductor de California — léalo capítulo por capítulo",
      },
      emoji: "📖",
    },
    {
      label: { en: "Handbook PDF Download", zh: "手册 PDF 下载", es: "Descargar Manual PDF" },
      url: "https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/",
      description: {
        en: "Download the handbook as a PDF to study offline",
        zh: "下载手册 PDF，随时离线学习",
        es: "Descargue el manual como PDF para estudiar sin conexión",
      },
      emoji: "⬇️",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约考试", es: "Programar Cita" },
      url: "https://www.dmv.ca.gov/portal/make-an-appointment/",
      description: {
        en: "Book your knowledge test appointment online",
        zh: "在线预约驾照知识考试",
        es: "Reserve su cita para el examen de conocimientos en línea",
      },
      emoji: "📅",
    },
    {
      label: { en: "Find a DMV Office", zh: "查找 DMV 办公室", es: "Encontrar una Oficina DMV" },
      url: "https://www.dmv.ca.gov/portal/locations/",
      description: {
        en: "Find the DMV office nearest to you",
        zh: "查找离您最近的 DMV 办公室",
        es: "Encuentre la oficina DMV más cercana a usted",
      },
      emoji: "📍",
    },
    {
      label: { en: "Check Wait Times", zh: "查看等待时间", es: "Ver Tiempos de Espera" },
      url: "https://www.dmv.ca.gov/portal/locations/",
      description: {
        en: "See current wait times before you go",
        zh: "出发前查看各办公室当前等待时长",
        es: "Consulte los tiempos de espera actuales antes de ir",
      },
      emoji: "⏱️",
    },
  ],
};

// ─── Registry ─────────────────────────────────────────────────────────────────

/** Look up exam guide by category.nameEn — returns undefined if not found. */
export const examGuides: Record<string, ExamGuide> = {
  "California Driver's License": californiaDMV,
};
