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
      value: "38 / 46 (80%)",
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
      title: { en: "The CA Driver's License", zh: "加州驾照介绍", es: "La Licencia de CA" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/the-california-driver-license/",
      emoji: "🪪",
    },
    {
      title: { en: "Getting Your License", zh: "考取驾照流程", es: "Obtener su Licencia" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-an-instruction-permit-and-drivers-license/",
      emoji: "📝",
    },
    {
      title: { en: "Navigating the Roads", zh: "道路驾驶基础", es: "Navegando las Vías" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads/",
      emoji: "🗺️",
    },
    {
      title: { en: "Traffic Signs & Lanes", zh: "交通标志与车道", es: "Señales y Carriles" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/navigating-the-roads-cont1/",
      emoji: "🚦",
    },
    {
      title: { en: "Laws & Rules of the Road", zh: "交通法规", es: "Leyes de Tráfico" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road/",
      emoji: "⚖️",
    },
    {
      title: { en: "Right-of-Way & Speed", zh: "行车优先权与速限", es: "Prioridad y Velocidad" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/laws-and-rules-of-the-road-cont1/",
      emoji: "🛣️",
    },
    {
      title: { en: "Safe Driving", zh: "安全驾驶", es: "Conducción Segura" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/",
      emoji: "🛡️",
    },
    {
      title: { en: "Alcohol and Drugs", zh: "酒驾与毒驾", es: "Alcohol y Drogas" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/",
      emoji: "🚫",
    },
    {
      title: { en: "Driver Safety", zh: "驾驶员安全", es: "Seguridad del Conductor" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/driver-safety/",
      emoji: "🔧",
    },
    {
      title: { en: "Financial Responsibility", zh: "保险与财务责任", es: "Responsabilidad Financiera" },
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility-insurance-requirements-and-collisions/",
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

// ─── Texas DPS ────────────────────────────────────────────────────────────────

const texasDMV: ExamGuide = {
  stats: [
    {
      label: { en: "Questions", zh: "题目数", es: "Preguntas" },
      value: "30 (2 × 15)",
    },
    {
      label: { en: "To Pass", zh: "通过标准", es: "Para Aprobar" },
      value: "11 / 15 per section (70%)",
    },
    {
      label: { en: "Time Limit", zh: "时间限制", es: "Límite de Tiempo" },
      value: "30 min / section",
    },
    {
      label: { en: "Languages", zh: "考试语言", es: "Idiomas" },
      value: "EN / ES",
    },
    {
      label: { en: "Retakes", zh: "重考次数", es: "Intentos" },
      value: "3× before repay",
    },
    {
      label: { en: "Fee", zh: "费用", es: "Tarifa" },
      value: "$33 (included)",
    },
  ],

  whatToBring: [
    {
      item: { en: "Proof of U.S. citizenship or lawful presence", zh: "美国公民身份或合法居留证明", es: "Prueba de ciudadanía o presencia legal en EE.UU." },
      note: { en: "U.S. passport, birth certificate, or permanent resident card", zh: "美国护照、出生证明或永久居留卡", es: "Pasaporte de EE.UU., certificado de nacimiento o tarjeta de residente permanente" },
    },
    {
      item: { en: "Proof of Texas residency (2 documents)", zh: "德州居住证明（2份）", es: "Prueba de residencia en Texas (2 documentos)" },
      note: { en: "Utility bill, bank statement, or lease agreement showing your Texas address", zh: "水电账单、银行对账单或租赁合同，需显示德州地址", es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección en Texas" },
    },
    {
      item: { en: "Proof of Social Security Number", zh: "社会安全号码证明", es: "Prueba de Número de Seguro Social" },
      note: { en: "Social Security card, W-2 form, or SSA letter showing your full SSN", zh: "社安卡、W-2 表格或显示完整 SSN 的社安局函件", es: "Tarjeta del Seguro Social, formulario W-2 o carta de la SSA con su número completo" },
    },
    {
      item: { en: "$33 application fee", zh: "$33 申请费", es: "Tarifa de solicitud de $33" },
      note: { en: "Cash, check, money order, or major credit/debit card accepted", zh: "接受现金、支票、汇票或主要信用/借记卡", es: "Se acepta efectivo, cheque, giro postal o tarjeta de crédito/débito principal" },
    },
    {
      item: { en: "Completed DL-14A form (if applicable)", zh: "填写完整的 DL-14A 表格（如适用）", es: "Formulario DL-14A completado (si aplica)" },
      note: { en: "Required for applicants under 18 — must be signed by a parent or guardian", zh: "18岁以下申请人需提供，须由父母或监护人签署", es: "Requerido para menores de 18 años — debe estar firmado por un padre o tutor" },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Schedule online (recommended)", zh: "在线预约（推荐）", es: "Programar en línea (recomendado)" },
      detail: { en: "Visit txdps.state.tx.us and book a knowledge test appointment — often faster than walk-in.", zh: "访问 txdps.state.tx.us 预约笔试，通常比现场排队更快。", es: "Visite txdps.state.tx.us y reserve una cita para el examen de conocimientos — generalmente más rápido que ir sin cita." },
    },
    {
      step: { en: "Walk in at a DPS Driver License office", zh: "直接前往 DPS 驾照办理处", es: "Presentarse en una oficina de Licencias de Conducir del DPS" },
      detail: { en: "Arrive early — offices open at 8:00 AM. Wait times vary by location and day of week.", zh: "建议早些到达——办公室早上8点开门，各地点及不同日期等待时间不同。", es: "Llegue temprano — las oficinas abren a las 8:00 AM. Los tiempos de espera varían según la ubicación y el día." },
    },
    {
      step: { en: "Check wait times before going", zh: "出发前查看等待时间", es: "Consulte los tiempos de espera antes de ir" },
      detail: { en: "Visit texas.gov/txapp or check the DPS website to see current wait times at your nearest office.", zh: "访问 texas.gov/txapp 或 DPS 官网，查看最近办公室的当前等待时间。", es: "Visite texas.gov/txapp o el sitio web del DPS para ver los tiempos de espera actuales en la oficina más cercana." },
    },
  ],

  tips: [
    { en: "The test is split into 2 sections: 15 road signs questions and 15 traffic laws questions.", zh: "考试分为两节：15道道路标志题和15道交通法规题，每节各自计分。", es: "El examen se divide en 2 secciones: 15 preguntas de señales viales y 15 de leyes de tránsito." },
    { en: "You must pass each section separately with at least 70% (11 out of 15).", zh: "每节须单独通过，正确率至少70%（15题中答对11题）。", es: "Debe aprobar cada sección por separado con al menos el 70% (11 de 15 respuestas correctas)." },
    { en: "You have 3 attempts before you must pay the fee again and reapply.", zh: "有3次机会，3次均未通过需重新缴费申请。", es: "Tiene 3 intentos antes de tener que volver a pagar la tarifa y presentar una nueva solicitud." },
    { en: "The test is available in English and Spanish.", zh: "考试提供英语和西班牙语两种语言。", es: "El examen está disponible en inglés y español." },
    { en: "Read the Texas Driver Handbook (DL-7) thoroughly — all questions come from it.", zh: "仔细阅读《德州驾驶员手册》（DL-7），所有考题均来源于此。", es: "Lea minuciosamente el Manual del Conductor de Texas (DL-7) — todas las preguntas provienen de él." },
    { en: "Pay special attention to Texas-specific rules: FM roads, 85 mph speed limit on SH-130, and the ALR 15-day window.", zh: "特别注意德州特有规定：FM农场路、130号州道85英里限速以及 ALR 15天申请窗口。", es: "Preste especial atención a las reglas específicas de Texas: caminos FM, límite de 85 mph en SH-130 y la ventana de 15 días del ALR." },
  ],

  handbookChapters: [
    { title: { en: "Ch.1 Your License to Drive", zh: "第1章：驾驶执照", es: "Cap.1 Su Licencia para Conducir" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=7", emoji: "🪪" },
    { title: { en: "Ch.4 Right-of-Way", zh: "第4章：优先通行权", es: "Cap.4 Derecho de Paso" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=26", emoji: "🔄" },
    { title: { en: "Ch.5 Signals, Signs & Markers", zh: "第5章：信号、标志与标记", es: "Cap.5 Señales y Marcas Viales" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=31", emoji: "🚦" },
    { title: { en: "Ch.6 Turning, Passing & Lanes", zh: "第6章：转弯、超车与车道", es: "Cap.6 Giros, Adelantamiento y Carriles" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=44", emoji: "↪️" },
    { title: { en: "Ch.7 Parking & Stopping", zh: "第7章：停车规定", es: "Cap.7 Estacionamiento y Paradas" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=48", emoji: "🅿️" },
    { title: { en: "Ch.8 Speed & Speed Limits", zh: "第8章：速度与限速规定", es: "Cap.8 Velocidad y Límites" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=51", emoji: "🛣️" },
    { title: { en: "Ch.9 Special Driving Situations", zh: "第9章：特殊驾驶情况", es: "Cap.9 Situaciones Especiales" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=53", emoji: "⚠️" },
    { title: { en: "Ch.10 Alcohol & Drugs", zh: "第10章：酒精与药物", es: "Cap.10 Alcohol y Drogas" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=61", emoji: "🚫" },
    { title: { en: "Ch.11 Motor Vehicle Crashes", zh: "第11章：交通事故处理", es: "Cap.11 Accidentes de Tránsito" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=65", emoji: "🚗" },
    { title: { en: "Ch.12–13 Pedestrian & Bicycle Safety", zh: "第12-13章：行人与自行车安全", es: "Cap.12–13 Seguridad Peatonal y Ciclista" }, url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf#page=67", emoji: "🚶" },
  ],

  officialLinks: [
    {
      label: { en: "Texas DPS Official Site", zh: "德州 DPS 官网", es: "Sitio Oficial del DPS de Texas" },
      url: "https://www.dps.texas.gov/section/driver-license",
      description: { en: "Texas Department of Public Safety — Driver License Division", zh: "德克萨斯州公共安全局——驾照管理部门", es: "Departamento de Seguridad Pública de Texas — División de Licencias de Conducir" },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver Handbook (Online)", zh: "驾驶员手册（PDF）", es: "Manual del Conductor (PDF)" },
      url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      description: { en: "Texas Driver Handbook DL-7 (PDF) — official study guide for the knowledge test", zh: "德州驾驶员手册 DL-7（PDF）——知识考试官方学习指南", es: "Manual del Conductor de Texas DL-7 (PDF) — guía oficial de estudio para el examen de conocimientos" },
      emoji: "📖",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约考试", es: "Programar Cita" },
      url: "https://www.txdpsscheduler.com/",
      description: { en: "Book your knowledge test appointment online via the Texas DPS Scheduler", zh: "通过德州 DPS 在线预约系统预约笔试", es: "Reserve su cita para el examen de conocimientos en línea a través del Programador del DPS de Texas" },
      emoji: "📅",
    },
    {
      label: { en: "Find a DPS Office", zh: "查找 DPS 办公室", es: "Encontrar una Oficina DPS" },
      url: "https://www.dps.texas.gov/apps/DriverLicense/OfficeLocations",
      description: { en: "Find the DPS Driver License office nearest to you", zh: "查找离您最近的 DPS 驾照办理处", es: "Encuentre la oficina de Licencias de Conducir del DPS más cercana a usted" },
      emoji: "📍",
    },
    {
      label: { en: "Check Wait Times", zh: "查看等待时间", es: "Ver Tiempos de Espera" },
      url: "https://www.dps.texas.gov/apps/DriverLicense/OfficeLocations",
      description: { en: "Check current wait times at DPS offices before you go", zh: "出发前查看各 DPS 办公室的当前等待时间", es: "Consulte los tiempos de espera actuales en las oficinas del DPS antes de ir" },
      emoji: "⏱️",
    },
    {
      label: { en: "Texas Driving Laws (TxDOT)", zh: "德州交通法规（TxDOT）", es: "Leyes de Tránsito de Texas (TxDOT)" },
      url: "https://www.txdot.gov/safety/driving-laws.html",
      description: { en: "Official Texas traffic laws and road safety information from TxDOT", zh: "德州交通局（TxDOT）官方交通法规与道路安全信息", es: "Leyes de tránsito oficiales de Texas e información de seguridad vial del TxDOT" },
      emoji: "⚖️",
    },
  ],
};

// ─── Registry ─────────────────────────────────────────────────────────────────

/** Look up exam guide by category.nameEn — returns undefined if not found. */
export const examGuides: Record<string, ExamGuide> = {
  "California Driver's License": californiaDMV,
  "Texas Driver's License": texasDMV,
};
