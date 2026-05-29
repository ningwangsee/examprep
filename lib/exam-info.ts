/**
 * Static exam guide content keyed by category nameEn.
 * All content strings are trilingual: { en, zh, es }.
 *
 * When adding a new state, add an entry here alongside the seed file.
 * Fields used by the quiz page (passThreshold, keepPracticing, handbookTitle, handbookDesc)
 * are required — forgetting them causes the wrong pass/fail display for every user.
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
  /** Pass percentage threshold, e.g. 83 for CA. Used in QuizClient results screen. */
  passThreshold: number;
  /** Shown below the score when user doesn't pass. State-specific pass rate. */
  keepPracticing: I18n;
  /** Shown in quiz right panel header. */
  handbookTitle: I18n;
  /** Shown in quiz right panel body. */
  handbookDesc: I18n;
  stats: { label: I18n; value: string }[];
  whatToBring: { item: I18n; note?: I18n }[];
  howToSchedule: { step: I18n; detail: I18n }[];
  tips: I18n[];
  handbookChapters: HandbookChapter[];
  officialLinks: OfficialLink[];
};

// ─── California DMV ────────────────────────────────────────────────────────────

const californiaDMV: ExamGuide = {
  passThreshold: 83,
  keepPracticing: {
    en: "CA DMV requires 83% to pass (38/46 correct). Keep practicing!",
    zh: "加州 DMV 要求正确率 83%（46题答对38题），继续加油！",
    es: "El DMV de CA requiere 83% para aprobar (38/46 correctas). ¡Sigue practicando!",
  },
  handbookTitle: {
    en: "CA Driver Handbook",
    zh: "加州驾照手册",
    es: "Manual del Conductor de CA",
  },
  handbookDesc: {
    en: "All questions are based on the official California Driver Handbook. Study the relevant section to reinforce your knowledge.",
    zh: "所有题目均基于加州官方驾照手册，答错时请查阅对应章节加强记忆。",
    es: "Todas las preguntas están basadas en el Manual oficial del Conductor de California.",
  },

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
      item: { en: "Proof of identity", zh: "身份证明", es: "Prueba de identidad" },
      note: {
        en: "U.S. passport, birth certificate, or permanent resident card",
        zh: "美国护照、出生证明或永久居留卡",
        es: "Pasaporte de EE.UU., certificado de nacimiento o tarjeta de residente permanente",
      },
    },
    {
      item: { en: "Social Security Number", zh: "社会安全号码", es: "Número de Seguro Social" },
      note: {
        en: "Just know the number — you do not need to bring the card",
        zh: "只需记住号码，不需要带实体卡",
        es: "Solo necesita saber el número, no es necesario traer la tarjeta",
      },
    },
    {
      item: { en: "California residency proof", zh: "加州居住证明", es: "Prueba de residencia en California" },
      note: {
        en: "Utility bill, bank statement, or lease showing your CA address",
        zh: "水电账单、银行对账单或租赁合同（需显示加州地址）",
        es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección de CA",
      },
    },
    {
      item: { en: "Application form DL 44", zh: "申请表格 DL 44", es: "Formulario de solicitud DL 44" },
      note: {
        en: "Available at any DMV office, or fill it out online in advance",
        zh: "可在任何 DMV 办公室领取，或提前在线填写",
        es: "Disponible en cualquier oficina del DMV, o complételo en línea con anticipación",
      },
    },
    {
      item: { en: "$41 application fee", zh: "$41 申请费", es: "Tarifa de solicitud de $41" },
      note: {
        en: "Cash, check, or card accepted",
        zh: "接受现金、支票或刷卡",
        es: "Se acepta efectivo, cheque o tarjeta",
      },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Schedule online (fastest)", zh: "在线预约（最快）", es: "Programar en línea (más rápido)" },
      detail: {
        en: "Visit dmv.ca.gov and book a same-day or future appointment — usually the fastest option.",
        zh: "访问 dmv.ca.gov 预约当天或未来的考试——通常是最快的方式。",
        es: "Visite dmv.ca.gov y reserve una cita para el mismo día o en el futuro — generalmente la opción más rápida.",
      },
    },
    {
      step: { en: "Call by phone", zh: "电话预约", es: "Llamar por teléfono" },
      detail: {
        en: "1-800-777-0133 (Mon–Fri 8am–5pm). Have your ZIP code ready to find the nearest office.",
        zh: "1-800-777-0133（周一至周五 8am–5pm），准备好邮政编码以找到最近的办公室。",
        es: "1-800-777-0133 (Lun–Vie 8am–5pm). Tenga su código postal listo para encontrar la oficina más cercana.",
      },
    },
    {
      step: { en: "Walk in", zh: "现场排队", es: "Presentarse sin cita" },
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
  passThreshold: 70,
  keepPracticing: {
    en: "TX DPS requires 70% to pass (11/15 per section). Keep practicing!",
    zh: "德州 DPS 要求每节正确率 70%（15题答对11题），继续加油！",
    es: "El DPS de TX requiere 70% para aprobar (11/15 por sección). ¡Sigue practicando!",
  },
  handbookTitle: {
    en: "TX Driver Handbook (DL-7)",
    zh: "德州驾驶员手册（DL-7）",
    es: "Manual del Conductor de TX (DL-7)",
  },
  handbookDesc: {
    en: "All questions are based on the official Texas Driver Handbook (DL-7). Study the relevant section to reinforce your knowledge.",
    zh: "所有题目均基于德州官方驾驶员手册（DL-7），答错时请查阅对应章节加强记忆。",
    es: "Todas las preguntas están basadas en el Manual oficial del Conductor de Texas (DL-7).",
  },

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
      item: { en: "Completed DL-14A form (if under 18)", zh: "填写完整的 DL-14A 表格（18岁以下）", es: "Formulario DL-14A completado (menores de 18)" },
      note: { en: "Must be signed by a parent or guardian", zh: "须由父母或监护人签署", es: "Debe estar firmado por un padre o tutor" },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Schedule online (recommended)", zh: "在线预约（推荐）", es: "Programar en línea (recomendado)" },
      detail: { en: "Visit txdps.state.tx.us and book a knowledge test appointment — often faster than walk-in.", zh: "访问 txdps.state.tx.us 预约笔试，通常比现场排队更快。", es: "Visite txdps.state.tx.us y reserve una cita para el examen de conocimientos — generalmente más rápido que ir sin cita." },
    },
    {
      step: { en: "Walk in at a DPS Driver License office", zh: "直接前往 DPS 驾照办理处", es: "Presentarse en una oficina DPS" },
      detail: { en: "Arrive early — offices open at 8:00 AM. Wait times vary by location and day of week.", zh: "建议早些到达——办公室早上8点开门，各地点及不同日期等待时间不同。", es: "Llegue temprano — las oficinas abren a las 8:00 AM. Los tiempos de espera varían." },
    },
    {
      step: { en: "Check wait times before going", zh: "出发前查看等待时间", es: "Consulte los tiempos de espera" },
      detail: { en: "Visit texas.gov/txapp or the DPS website to see current wait times at your nearest office.", zh: "访问 texas.gov/txapp 或 DPS 官网查看最近办公室的当前等待时间。", es: "Visite texas.gov/txapp o el sitio del DPS para ver los tiempos de espera actuales." },
    },
  ],

  tips: [
    { en: "The test is split into 2 sections: 15 road signs questions and 15 traffic laws questions.", zh: "考试分为两节：15道道路标志题和15道交通法规题，每节各自计分。", es: "El examen se divide en 2 secciones: 15 preguntas de señales viales y 15 de leyes de tránsito." },
    { en: "You must pass each section separately with at least 70% (11 out of 15).", zh: "每节须单独通过，正确率至少70%（15题中答对11题）。", es: "Debe aprobar cada sección por separado con al menos el 70% (11 de 15)." },
    { en: "You have 3 attempts before you must pay the fee again and reapply.", zh: "有3次机会，3次均未通过需重新缴费申请。", es: "Tiene 3 intentos antes de tener que volver a pagar y presentar nueva solicitud." },
    { en: "The test is available in English and Spanish.", zh: "考试提供英语和西班牙语两种语言。", es: "El examen está disponible en inglés y español." },
    { en: "Read the Texas Driver Handbook (DL-7) thoroughly — all questions come from it.", zh: "仔细阅读《德州驾驶员手册》（DL-7），所有考题均来源于此。", es: "Lea minuciosamente el Manual del Conductor de Texas (DL-7) — todas las preguntas provienen de él." },
    { en: "Pay special attention to Texas-specific rules: FM roads, 85 mph limit on SH-130, and the ALR 15-day window.", zh: "特别注意德州特有规定：FM农场路、130号州道85英里限速以及 ALR 15天申请窗口。", es: "Preste especial atención a las reglas específicas de Texas: caminos FM, límite de 85 mph en SH-130 y la ventana de 15 días del ALR." },
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
      description: { en: "Texas Department of Public Safety — Driver License Division", zh: "德克萨斯州公共安全局——驾照管理部门", es: "Departamento de Seguridad Pública de Texas — División de Licencias" },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver Handbook (Online)", zh: "驾驶员手册（PDF）", es: "Manual del Conductor (PDF)" },
      url: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      description: { en: "Texas Driver Handbook DL-7 (PDF) — official study guide for the knowledge test", zh: "德州驾驶员手册 DL-7（PDF）——知识考试官方学习指南", es: "Manual del Conductor de Texas DL-7 (PDF) — guía oficial de estudio" },
      emoji: "📖",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约考试", es: "Programar Cita" },
      url: "https://www.txdpsscheduler.com/",
      description: { en: "Book your knowledge test appointment online via the Texas DPS Scheduler", zh: "通过德州 DPS 在线预约系统预约笔试", es: "Reserve su cita para el examen de conocimientos en línea" },
      emoji: "📅",
    },
    {
      label: { en: "Find a DPS Office", zh: "查找 DPS 办公室", es: "Encontrar una Oficina DPS" },
      url: "https://www.dps.texas.gov/apps/DriverLicense/OfficeLocations",
      description: { en: "Find the DPS Driver License office nearest to you", zh: "查找离您最近的 DPS 驾照办理处", es: "Encuentre la oficina de Licencias del DPS más cercana" },
      emoji: "📍",
    },
    {
      label: { en: "Check Wait Times", zh: "查看等待时间", es: "Ver Tiempos de Espera" },
      url: "https://www.dps.texas.gov/apps/DriverLicense/OfficeLocations",
      description: { en: "Check current wait times at DPS offices before you go", zh: "出发前查看各 DPS 办公室的当前等待时间", es: "Consulte los tiempos de espera actuales en las oficinas del DPS" },
      emoji: "⏱️",
    },
    {
      label: { en: "Texas Driving Laws (TxDOT)", zh: "德州交通法规（TxDOT）", es: "Leyes de Tránsito de Texas" },
      url: "https://www.txdot.gov/safety/driving-laws.html",
      description: { en: "Official Texas traffic laws and road safety information from TxDOT", zh: "德州交通局官方交通法规与道路安全信息", es: "Leyes de tránsito oficiales de Texas e información de seguridad vial" },
      emoji: "⚖️",
    },
  ],
};

// ─── New York DMV ─────────────────────────────────────────────────────────────

const newYorkDMV: ExamGuide = {
  passThreshold: 70,
  keepPracticing: {
    en: "NY DMV requires 70% to pass (14/20 correct). Keep practicing!",
    zh: "纽约 DMV 要求正确率 70%（20题答对14题），继续加油！",
    es: "El DMV de NY requiere 70% para aprobar (14/20 correctas). ¡Sigue practicando!",
  },
  handbookTitle: {
    en: "NY Driver's Manual",
    zh: "纽约州驾驶员手册",
    es: "Manual del Conductor de NY",
  },
  handbookDesc: {
    en: "All questions are based on the official New York State Driver's Manual. Study the relevant section to reinforce your knowledge.",
    zh: "所有题目均基于纽约州官方驾驶员手册，答错时请查阅对应章节加强记忆。",
    es: "Todas las preguntas están basadas en el Manual oficial del Conductor del Estado de Nueva York.",
  },

  stats: [
    {
      label: { en: "Questions", zh: "题目数", es: "Preguntas" },
      value: "20",
    },
    {
      label: { en: "To Pass", zh: "通过标准", es: "Para Aprobar" },
      value: "14 / 20 (70%)",
    },
    {
      label: { en: "Time Limit", zh: "时间限制", es: "Límite de Tiempo" },
      value: "None / 无 / Sin límite",
    },
    {
      label: { en: "Languages", zh: "考试语言", es: "Idiomas" },
      value: "25+",
    },
    {
      label: { en: "Retakes", zh: "重考次数", es: "Intentos" },
      value: "Unlimited",
    },
    {
      label: { en: "Fee", zh: "费用", es: "Tarifa" },
      value: "$80 (license)",
    },
  ],

  whatToBring: [
    {
      item: { en: "6 points of identity documents", zh: "6分身份证明文件", es: "Documentos de identidad de 6 puntos" },
      note: {
        en: "U.S. passport (4 pts) + Social Security card (2 pts) is the most common combination",
        zh: "美国护照（4分）+ 社安卡（2分）是最常见组合",
        es: "Pasaporte de EE.UU. (4 pts) + tarjeta del Seguro Social (2 pts) es la combinación más común",
      },
    },
    {
      item: { en: "Proof of New York State residency (2 documents)", zh: "纽约州居住证明（2份）", es: "Prueba de residencia en Nueva York (2 documentos)" },
      note: {
        en: "Utility bill, bank statement, or lease agreement showing your NY address",
        zh: "水电账单、银行对账单或租赁合同（需显示纽约地址）",
        es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección de NY",
      },
    },
    {
      item: { en: "Social Security Number", zh: "社会安全号码", es: "Número de Seguro Social" },
      note: {
        en: "Required if you have one — bring your Social Security card",
        zh: "如有社安号须提供——需带社安卡",
        es: "Requerido si tiene uno — traiga su tarjeta del Seguro Social",
      },
    },
    {
      item: { en: "$80 application fee", zh: "$80 申请费", es: "Tarifa de solicitud de $80" },
      note: {
        en: "Covers permit, road test, and license. Cash, check, or money order.",
        zh: "包含学车证、路考和驾照费用。接受现金、支票或汇票。",
        es: "Cubre el permiso, el examen de manejo y la licencia. Efectivo, cheque o giro postal.",
      },
    },
    {
      item: { en: "MV-44 application form", zh: "MV-44 申请表", es: "Formulario de solicitud MV-44" },
      note: {
        en: "Available at any DMV office or download from dmv.ny.gov in advance",
        zh: "可在任何 DMV 办公室领取，或提前从 dmv.ny.gov 下载",
        es: "Disponible en cualquier oficina del DMV o descárguelo de dmv.ny.gov con anticipación",
      },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Make an appointment online (recommended)", zh: "在线预约（推荐）", es: "Hacer una cita en línea (recomendado)" },
      detail: {
        en: "Visit dmv.ny.gov/appointment to book a knowledge test appointment at your local DMV.",
        zh: "访问 dmv.ny.gov/appointment 在当地 DMV 预约笔试。",
        es: "Visite dmv.ny.gov/appointment para reservar una cita en su DMV local.",
      },
    },
    {
      step: { en: "Walk in at a DMV office", zh: "直接前往 DMV 办公室", es: "Presentarse en una oficina del DMV" },
      detail: {
        en: "Many NY DMV offices accept walk-ins for knowledge tests. Check office hours at dmv.ny.gov before going.",
        zh: "许多纽约 DMV 办公室接受笔试现场办理。出发前在 dmv.ny.gov 确认办公时间。",
        es: "Muchas oficinas del DMV de NY aceptan sin cita para los exámenes escritos. Verifique el horario en dmv.ny.gov.",
      },
    },
    {
      step: { en: "Check wait times and office locations", zh: "查看等待时间和办公室位置", es: "Consulte tiempos de espera y ubicaciones" },
      detail: {
        en: "Use the NY DMV office locator at dmv.ny.gov to find the nearest office and check current wait times.",
        zh: "使用 dmv.ny.gov 的办公室定位工具查找最近的办公室并查看当前等待时间。",
        es: "Use el localizador de oficinas del DMV de NY en dmv.ny.gov para encontrar la oficina más cercana.",
      },
    },
  ],

  tips: [
    {
      en: "NY uses a 6-point ID verification system — make sure your documents add up to at least 6 points before you go.",
      zh: "纽约使用6分身份验证制度——出发前确保您的证件合计至少6分。",
      es: "NY usa un sistema de verificación de ID de 6 puntos — asegúrese de que sus documentos sumen al menos 6 puntos.",
    },
    {
      en: "There is no time limit on the knowledge test — read each question carefully.",
      zh: "笔试没有时间限制，请仔细阅读每道题。",
      es: "No hay límite de tiempo en el examen de conocimientos — lea cada pregunta con cuidado.",
    },
    {
      en: "You must be at least 16 years old to apply for a learner permit in New York.",
      zh: "申请纽约学车证须年满16岁。",
      es: "Debe tener al menos 16 años para solicitar un permiso de aprendizaje en Nueva York.",
    },
    {
      en: "The test is available in over 25 languages — ask for your preferred language at the counter.",
      zh: "考试提供25种以上语言——在柜台告知工作人员您的首选语言。",
      es: "El examen está disponible en más de 25 idiomas — solicite su idioma preferido en el mostrador.",
    },
    {
      en: "After getting your permit, you must hold it for at least 6 months and log 50 hours of practice driving.",
      zh: "取得学车证后，须持有至少6个月，并记录50小时的练习驾驶。",
      es: "Después de obtener su permiso, debe mantenerlo por al menos 6 meses y registrar 50 horas de práctica de manejo.",
    },
    {
      en: "Study all chapters of the NY Driver's Manual — questions can come from any chapter.",
      zh: "学习纽约驾驶员手册的所有章节——考题可能来自任何章节。",
      es: "Estudie todos los capítulos del Manual del Conductor de NY — las preguntas pueden provenir de cualquier capítulo.",
    },
  ],

  handbookChapters: [
    {
      title: { en: "Ch.1 Driver Licenses", zh: "第1章：驾驶执照", es: "Cap.1 Licencias de Conducir" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-1-driver-licenses",
      emoji: "🪪",
    },
    {
      title: { en: "Ch.2 How to Keep Your License", zh: "第2章：如何保留驾照", es: "Cap.2 Cómo Mantener su Licencia" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-2-how-to-keep-your-license",
      emoji: "📝",
    },
    {
      title: { en: "Ch.4 Traffic Controls", zh: "第4章：交通控制", es: "Cap.4 Controles de Tráfico" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-4-traffic-control",
      emoji: "🚦",
    },
    {
      title: { en: "Ch.5 Intersections & Turns", zh: "第5章：路口与转弯", es: "Cap.5 Intersecciones y Giros" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-5-intersections-and-turns",
      emoji: "↪️",
    },
    {
      title: { en: "Ch.6 Passing", zh: "第6章：超车", es: "Cap.6 Adelantamiento" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-6-passing",
      emoji: "🛣️",
    },
    {
      title: { en: "Ch.8 Defensive Driving", zh: "第8章：防御性驾驶", es: "Cap.8 Manejo Defensivo" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-8-defensive-driving",
      emoji: "🛡️",
    },
    {
      title: { en: "Ch.9 Alcohol & Other Drugs", zh: "第9章：酒精与其他药物", es: "Cap.9 Alcohol y Otras Drogas" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-9-alcohol-and-other-drugs",
      emoji: "🚫",
    },
    {
      title: { en: "Ch.10 Special Driving Conditions", zh: "第10章：特殊驾驶条件", es: "Cap.10 Condiciones Especiales de Manejo" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-10-special-driving-conditions",
      emoji: "🔧",
    },
    {
      title: { en: "Ch.11 Sharing the Road", zh: "第11章：共享道路", es: "Cap.11 Compartir la Vía" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-11-sharing-the-road",
      emoji: "🚶",
    },
    {
      title: { en: "Ch.12 Traffic Crashes", zh: "第12章：交通事故", es: "Cap.12 Accidentes de Tránsito" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-12-if-you-are-traffic-crash",
      emoji: "⛈️",
    },
  ],

  officialLinks: [
    {
      label: { en: "NY DMV Official Site", zh: "纽约 DMV 官网", es: "Sitio Oficial del DMV de NY" },
      url: "https://dmv.ny.gov/",
      description: {
        en: "New York State Department of Motor Vehicles — official site",
        zh: "纽约州机动车辆管理局官方网站",
        es: "Sitio oficial del Departamento de Vehículos Motorizados del Estado de Nueva York",
      },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver's Manual (Online)", zh: "驾驶员手册（在线版）", es: "Manual del Conductor (En línea)" },
      url: "https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests",
      description: {
        en: "Full New York State Driver's Manual with practice tests — read chapter by chapter",
        zh: "完整的纽约州驾驶员手册（含练习题）——按章节在线阅读",
        es: "Manual completo del Conductor del Estado de Nueva York con exámenes de práctica",
      },
      emoji: "📖",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约考试", es: "Programar Cita" },
      url: "https://dmv.ny.gov/appointment",
      description: {
        en: "Book your knowledge test appointment at a local NY DMV office",
        zh: "在当地纽约 DMV 办公室预约笔试",
        es: "Reserve su cita para el examen de conocimientos en una oficina local del DMV de NY",
      },
      emoji: "📅",
    },
    {
      label: { en: "Find a DMV Office", zh: "查找 DMV 办公室", es: "Encontrar una Oficina DMV" },
      url: "https://dmv.ny.gov/office-locations",
      description: {
        en: "Find the NY DMV office nearest to you",
        zh: "查找离您最近的纽约 DMV 办公室",
        es: "Encuentre la oficina del DMV de NY más cercana a usted",
      },
      emoji: "📍",
    },
    {
      label: { en: "6-Point ID Guide", zh: "6分身份证明指南", es: "Guía de ID de 6 Puntos" },
      url: "https://dmv.ny.gov/driver-license/finding-enough-proof-of-id",
      description: {
        en: "Learn which documents qualify and how many points each is worth",
        zh: "了解哪些文件符合条件以及各文件的分值",
        es: "Conozca qué documentos califican y cuántos puntos vale cada uno",
      },
      emoji: "📋",
    },
    {
      label: { en: "Check Office Wait Times", zh: "查看办公室等待时间", es: "Ver Tiempos de Espera" },
      url: "https://dmv.ny.gov/office-locations",
      description: {
        en: "See current wait times at NY DMV offices before you go",
        zh: "出发前查看各纽约 DMV 办公室当前等待时长",
        es: "Consulte los tiempos de espera actuales en las oficinas del DMV de NY antes de ir",
      },
      emoji: "⏱️",
    },
  ],
};

// ─── Florida DHSMV ────────────────────────────────────────────────────────────

const floridaDMV: ExamGuide = {
  passThreshold: 80,
  keepPracticing: {
    en: "FL DHSMV requires 80% to pass (40/50 correct). Keep practicing!",
    zh: "佛州 DHSMV 要求正确率 80%（50题答对40题），继续加油！",
    es: "El DHSMV de FL requiere 80% para aprobar (40/50 correctas). ¡Sigue practicando!",
  },
  handbookTitle: {
    en: "FL Driver License Handbook",
    zh: "佛罗里达驾照手册",
    es: "Manual de Licencia de Conducir de FL",
  },
  handbookDesc: {
    en: "All questions are based on the official Florida Driver License Handbook. Study the relevant section to reinforce your knowledge.",
    zh: "所有题目均基于佛罗里达州官方驾照手册，答错时请查阅对应章节加强记忆。",
    es: "Todas las preguntas están basadas en el Manual oficial de Licencia de Conducir de Florida.",
  },

  stats: [
    {
      label: { en: "Questions", zh: "题目数", es: "Preguntas" },
      value: "50",
    },
    {
      label: { en: "To Pass", zh: "通过标准", es: "Para Aprobar" },
      value: "40 / 50 (80%)",
    },
    {
      label: { en: "Time Limit", zh: "时间限制", es: "Límite de Tiempo" },
      value: "None / 无 / Sin límite",
    },
    {
      label: { en: "Languages", zh: "考试语言", es: "Idiomas" },
      value: "EN / ES / Creole",
    },
    {
      label: { en: "Retakes", zh: "重考次数", es: "Intentos" },
      value: "3 free retakes",
    },
    {
      label: { en: "Fee", zh: "费用", es: "Tarifa" },
      value: "$48 (Class E)",
    },
  ],

  whatToBring: [
    {
      item: { en: "Proof of identity", zh: "身份证明", es: "Prueba de identidad" },
      note: {
        en: "U.S. passport, birth certificate, or permanent resident card (I-551)",
        zh: "美国护照、出生证明或永久居留卡（I-551）",
        es: "Pasaporte de EE.UU., certificado de nacimiento o tarjeta de residente permanente (I-551)",
      },
    },
    {
      item: { en: "Social Security Number", zh: "社会安全号码", es: "Número de Seguro Social" },
      note: {
        en: "Your Social Security card or a document showing your full SSN",
        zh: "社安卡或显示完整 SSN 的文件",
        es: "Su tarjeta del Seguro Social o un documento que muestre su SSN completo",
      },
    },
    {
      item: { en: "Proof of Florida residency (2 documents)", zh: "佛罗里达居住证明（2份）", es: "Prueba de residencia en Florida (2 documentos)" },
      note: {
        en: "Utility bill, bank statement, or lease agreement showing your FL address",
        zh: "水电账单、银行对账单或租赁合同（需显示佛州地址）",
        es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección de FL",
      },
    },
    {
      item: { en: "$48 application fee (Class E license)", zh: "$48 申请费（E类驾照）", es: "Tarifa de solicitud de $48 (Licencia Clase E)" },
      note: {
        en: "Cash, check, or credit/debit card accepted at DHSMV offices",
        zh: "接受现金、支票或信用/借记卡",
        es: "Se acepta efectivo, cheque o tarjeta de crédito/débito en las oficinas del DHSMV",
      },
    },
    {
      item: { en: "DHSMV application form (if first-time)", zh: "DHSMV 申请表（首次申请）", es: "Formulario de solicitud DHSMV (primera vez)" },
      note: {
        en: "Available at any DHSMV office or downloadable from flhsmv.gov",
        zh: "可在任何 DHSMV 办公室领取，或从 flhsmv.gov 下载",
        es: "Disponible en cualquier oficina del DHSMV o descargable desde flhsmv.gov",
      },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Visit a DHSMV service center", zh: "前往 DHSMV 服务中心", es: "Visitar un centro de servicio del DHSMV" },
      detail: {
        en: "Florida knowledge tests are walk-in at most DHSMV offices — no appointment needed for the written test.",
        zh: "佛州笔试在大多数 DHSMV 办公室无需预约，可直接现场办理。",
        es: "Los exámenes de conocimientos en Florida son sin cita en la mayoría de las oficinas del DHSMV.",
      },
    },
    {
      step: { en: "Use a third-party tax collector office", zh: "前往第三方税务征收处", es: "Usar una oficina recaudadora de impuestos" },
      detail: {
        en: "Many Florida county tax collector offices also process driver licenses — often with shorter waits than DHSMV.",
        zh: "佛州许多县税务征收处也处理驾照业务，等待时间通常比 DHSMV 更短。",
        es: "Muchas oficinas del recaudador de impuestos del condado también procesan licencias de conducir — a menudo con menos espera.",
      },
    },
    {
      step: { en: "Check wait times before going", zh: "出发前查看等待时间", es: "Consulte los tiempos de espera" },
      detail: {
        en: "Visit flhsmv.gov/offices to find the nearest office and estimated wait times.",
        zh: "访问 flhsmv.gov/offices 查找最近的办公室及预估等待时间。",
        es: "Visite flhsmv.gov/offices para encontrar la oficina más cercana y los tiempos de espera estimados.",
      },
    },
  ],

  tips: [
    {
      en: "Florida's knowledge test is 50 questions — one of the longest in the U.S. Allow extra study time.",
      zh: "佛州笔试共50题，是全美最长之一，请留出充足的学习时间。",
      es: "El examen de conocimientos de Florida tiene 50 preguntas — uno de los más largos de EE.UU. Reserve tiempo extra para estudiar.",
    },
    {
      en: "Know Florida-specific DUI laws: 0.08% BAC for adults, 0.04% for CDL drivers, 0.02% for under 21.",
      zh: "熟悉佛州特有的 DUI 法律：成人 BAC 0.08%，CDL 司机 0.04%，21岁以下 0.02%。",
      es: "Conozca las leyes de DUI específicas de Florida: 0.08% BAC para adultos, 0.04% para conductores CDL, 0.02% para menores de 21.",
    },
    {
      en: "Florida GDL: learner's permit at age 15; restricted license at 16 (no driving 11 PM–6 AM for first year).",
      zh: "佛州 GDL：15岁可申请学车证；16岁可获限制驾照（第一年晚11点至早6点禁止驾驶）。",
      es: "GDL de Florida: permiso de aprendizaje a los 15 años; licencia restringida a los 16 (sin conducir 11 PM–6 AM el primer año).",
    },
    {
      en: "Move Over Law: when passing emergency vehicles, move one lane over or reduce speed by 20 mph.",
      zh: "让行法：经过紧急车辆时，移到另一车道或降低20英里时速。",
      es: "Ley Move Over: al pasar vehículos de emergencia, cambie de carril o reduzca la velocidad en 20 mph.",
    },
    {
      en: "Florida requires minimum $10,000 PIP and $10,000 PDL insurance to register a vehicle.",
      zh: "在佛州注册车辆须购买最低 $10,000 人身伤害险（PIP）和 $10,000 财产损失险（PDL）。",
      es: "Florida requiere un mínimo de $10,000 PIP y $10,000 PDL de seguro para registrar un vehículo.",
    },
    {
      en: "If you fail, you may retake the test up to 3 times. After 3 failures, you must reapply and pay the fee again.",
      zh: "如未通过，最多可重考3次。3次失败后须重新申请并再次缴费。",
      es: "Si reprueba, puede retomar el examen hasta 3 veces. Después de 3 fallas, debe volver a solicitar y pagar la tarifa.",
    },
  ],

  handbookChapters: [
    {
      title: { en: "Road Signs & Traffic Controls", zh: "道路标志与交通控制", es: "Señales Viales y Controles de Tráfico" },
      url: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      emoji: "🚦",
    },
    {
      title: { en: "Rules of the Road", zh: "道路行驶规则", es: "Reglas de la Vía" },
      url: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      emoji: "⚖️",
    },
    {
      title: { en: "Speed Limits & Special Zones", zh: "限速与特殊路段", es: "Límites de Velocidad y Zonas Especiales" },
      url: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      emoji: "🛣️",
    },
    {
      title: { en: "Alcohol, Drugs & DUI", zh: "酒精、药物与醉驾", es: "Alcohol, Drogas y DUI" },
      url: "https://www.flhsmv.gov/driver-licenses-id-cards/dui/",
      emoji: "🚫",
    },
    {
      title: { en: "Driver Licensing & Penalties", zh: "驾照申领与违章处罚", es: "Licencias de Conducir y Sanciones" },
      url: "https://www.flhsmv.gov/driver-licenses-id-cards/",
      emoji: "🪪",
    },
    {
      title: { en: "Safe Driving & Crash Prevention", zh: "安全驾驶与事故预防", es: "Conducción Segura y Prevención de Accidentes" },
      url: "https://www.flhsmv.gov/safety-center/",
      emoji: "🛡️",
    },
    {
      title: { en: "Sharing the Road", zh: "共享道路", es: "Compartir la Vía" },
      url: "https://www.flhsmv.gov/safety-center/consumer-education/",
      emoji: "🚶",
    },
    {
      title: { en: "Vehicle Equipment & Maintenance", zh: "车辆设备与维护", es: "Equipamiento y Mantenimiento del Vehículo" },
      url: "https://www.flhsmv.gov/motor-vehicles-tags-titles/",
      emoji: "🔧",
    },
  ],

  officialLinks: [
    {
      label: { en: "FL DHSMV Official Site", zh: "佛州 DHSMV 官网", es: "Sitio Oficial del DHSMV de FL" },
      url: "https://www.flhsmv.gov/",
      description: {
        en: "Florida Department of Highway Safety and Motor Vehicles",
        zh: "佛罗里达州公路安全与机动车辆管理局",
        es: "Departamento de Seguridad Vial y Vehículos Motorizados de Florida",
      },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver License Handbook", zh: "驾照手册", es: "Manual de Licencia de Conducir" },
      url: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      description: {
        en: "Official Florida Driver License Handbook — PDF and online versions",
        zh: "佛罗里达州官方驾照手册——提供 PDF 和在线版本",
        es: "Manual oficial de Licencia de Conducir de Florida — versiones PDF y en línea",
      },
      emoji: "📖",
    },
    {
      label: { en: "Driver Licenses & ID Cards", zh: "驾照与身份证", es: "Licencias de Conducir y Tarjetas de ID" },
      url: "https://www.flhsmv.gov/driver-licenses-id-cards/",
      description: {
        en: "Information on obtaining, renewing, and replacing your FL driver license",
        zh: "申请、续签和补办佛州驾照的相关信息",
        es: "Información sobre obtener, renovar y reemplazar su licencia de conducir de FL",
      },
      emoji: "📅",
    },
    {
      label: { en: "Find a DHSMV Office", zh: "查找 DHSMV 办公室", es: "Encontrar una Oficina DHSMV" },
      url: "https://www.flhsmv.gov/locations/",
      description: {
        en: "Find the DHSMV service center nearest to you",
        zh: "查找离您最近的 DHSMV 服务中心",
        es: "Encuentre el centro de servicio del DHSMV más cercano a usted",
      },
      emoji: "📍",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约办理", es: "Programar Cita" },
      url: "https://www.flhsmv.gov/locations/",
      description: {
        en: "Most DHSMV knowledge tests are walk-in, but check for appointment options",
        zh: "大多数 DHSMV 笔试无需预约，但可查看是否有预约选项",
        es: "La mayoría de los exámenes de conocimientos del DHSMV son sin cita, pero verifique opciones",
      },
      emoji: "🗓️",
    },
    {
      label: { en: "FL Traffic Laws (Florida Statutes)", zh: "佛州交通法规", es: "Leyes de Tránsito de FL" },
      url: "https://www.flsenate.gov/Laws/Statutes/2024/Chapter316",
      description: {
        en: "Florida traffic safety programs and driving laws",
        zh: "佛罗里达州交通安全计划与驾驶法规",
        es: "Programas de seguridad vial y leyes de tránsito de Florida",
      },
      emoji: "⚖️",
    },
  ],
};

// ─── Pennsylvania PennDOT ─────────────────────────────────────────────────────

const pennsylvaniaDMV: ExamGuide = {
  passThreshold: 83,
  keepPracticing: {
    en: "PA PennDOT requires 83% to pass (15/18 correct). Keep practicing!",
    zh: "宾州 PennDOT 要求正确率 83%（18题答对15题），继续加油！",
    es: "El PennDOT de PA requiere 83% para aprobar (15/18 correctas). ¡Sigue practicando!",
  },
  handbookTitle: {
    en: "PA Driver's Manual",
    zh: "宾夕法尼亚驾驶员手册",
    es: "Manual del Conductor de PA",
  },
  handbookDesc: {
    en: "All questions are based on the official Pennsylvania Driver's Manual. Study the relevant section to reinforce your knowledge.",
    zh: "所有题目均基于宾夕法尼亚州官方驾驶员手册，答错时请查阅对应章节加强记忆。",
    es: "Todas las preguntas están basadas en el Manual oficial del Conductor de Pennsylvania.",
  },

  stats: [
    {
      label: { en: "Questions", zh: "题目数", es: "Preguntas" },
      value: "18",
    },
    {
      label: { en: "To Pass", zh: "通过标准", es: "Para Aprobar" },
      value: "15 / 18 (83%)",
    },
    {
      label: { en: "Time Limit", zh: "时间限制", es: "Límite de Tiempo" },
      value: "None / 无 / Sin límite",
    },
    {
      label: { en: "Languages", zh: "考试语言", es: "Idiomas" },
      value: "Multiple",
    },
    {
      label: { en: "Retakes", zh: "重考次数", es: "Intentos" },
      value: "Unlimited",
    },
    {
      label: { en: "Fee", zh: "费用", es: "Tarifa" },
      value: "$35.50",
    },
  ],

  whatToBring: [
    {
      item: { en: "Proof of identity", zh: "身份证明", es: "Prueba de identidad" },
      note: {
        en: "U.S. passport, birth certificate, or permanent resident card",
        zh: "美国护照、出生证明或永久居留卡",
        es: "Pasaporte de EE.UU., certificado de nacimiento o tarjeta de residente permanente",
      },
    },
    {
      item: { en: "Social Security Number", zh: "社会安全号码", es: "Número de Seguro Social" },
      note: {
        en: "Your Social Security card or official document showing your SSN",
        zh: "社安卡或显示 SSN 的官方文件",
        es: "Su tarjeta del Seguro Social o un documento oficial que muestre su SSN",
      },
    },
    {
      item: { en: "Proof of Pennsylvania residency (2 documents)", zh: "宾州居住证明（2份）", es: "Prueba de residencia en Pennsylvania (2 documentos)" },
      note: {
        en: "Utility bill, bank statement, or lease agreement showing your PA address",
        zh: "水电账单、银行对账单或租赁合同（需显示宾州地址）",
        es: "Factura de servicios, estado de cuenta bancario o contrato de arrendamiento con dirección de PA",
      },
    },
    {
      item: { en: "$35.50 application fee", zh: "$35.50 申请费", es: "Tarifa de solicitud de $35.50" },
      note: {
        en: "Cash, check, money order, or credit/debit card accepted",
        zh: "接受现金、支票、汇票或信用/借记卡",
        es: "Se acepta efectivo, cheque, giro postal o tarjeta de crédito/débito",
      },
    },
    {
      item: { en: "DL-180 application form", zh: "DL-180 申请表", es: "Formulario de solicitud DL-180" },
      note: {
        en: "Available at any PennDOT Driver License Center or download from pa.gov/agencies/dmv",
        zh: "可在任何 PennDOT 驾照中心领取，或从 pa.gov/agencies/dmv 下载",
        es: "Disponible en cualquier Centro de Licencias de Conducir del PennDOT o descárguelo desde pa.gov/agencies/dmv",
      },
    },
  ],

  howToSchedule: [
    {
      step: { en: "Schedule online at PennDOT", zh: "在 PennDOT 网站在线预约", es: "Programar en línea en PennDOT" },
      detail: {
        en: "Visit pa.gov/agencies/dmv to schedule a knowledge test at your nearest Driver License Center.",
        zh: "访问 pa.gov/agencies/dmv 在最近的驾照中心预约笔试。",
        es: "Visite pa.gov/agencies/dmv para programar un examen de conocimientos en el Centro de Licencias más cercano.",
      },
    },
    {
      step: { en: "Walk in at a Driver License Center", zh: "直接前往驾照中心", es: "Presentarse en un Centro de Licencias" },
      detail: {
        en: "PennDOT Driver License Centers accept walk-ins. Arrive early — centers typically open at 8:30 AM.",
        zh: "PennDOT 驾照中心接受现场办理。建议早些到达——通常早上8:30开门。",
        es: "Los Centros de Licencias del PennDOT aceptan sin cita. Llegue temprano — los centros suelen abrir a las 8:30 AM.",
      },
    },
    {
      step: { en: "Use an approved messenger service", zh: "使用授权快递服务", es: "Usar un servicio de mensajería aprobado" },
      detail: {
        en: "PA also allows approved messenger/agent services to process license applications on your behalf.",
        zh: "宾州也允许授权中介服务代办驾照申请。",
        es: "PA también permite que los servicios de mensajería/agentes aprobados procesen solicitudes de licencia en su nombre.",
      },
    },
  ],

  tips: [
    {
      en: "PA's knowledge test is only 18 questions — but you must answer 15 correctly (83%), so every question counts.",
      zh: "宾州笔试只有18道题——但须答对15题（83%），每道题都至关重要。",
      es: "El examen de conocimientos de PA es solo 18 preguntas — pero debe responder 15 correctamente (83%), así que cada pregunta cuenta.",
    },
    {
      en: "PA uses a point system: 11 points = license suspension. Accumulate 3+ points in 12 months and they reset to 0 if no violations.",
      zh: "宾州使用积分制：累计11分将被吊销驾照。12个月内违规积分满3分，若之后无违规可清零。",
      es: "PA usa un sistema de puntos: 11 puntos = suspensión de licencia. Acumule 3+ puntos en 12 meses y se restablecen a 0 si no hay infracciones.",
    },
    {
      en: "GDL: learner's permit at 16; must hold for 6 months with 65 hours of supervised driving (10 at night, 5 in bad weather).",
      zh: "GDL：16岁可申请学车证；须持有6个月，完成65小时监督驾驶（10小时夜间，5小时恶劣天气）。",
      es: "GDL: permiso de aprendizaje a los 16 años; debe tener durante 6 meses con 65 horas de conducción supervisada (10 de noche, 5 con mal tiempo).",
    },
    {
      en: "School bus: you must stop at least 10 feet from a school bus with flashing red lights — violation means 60-day suspension.",
      zh: "校车：闪红灯时须在距校车至少10英尺处停车——违规将被吊销驾照60天。",
      es: "Autobús escolar: debe detenerse al menos 10 pies de un autobús escolar con luces rojas intermitentes — violación significa suspensión de 60 días.",
    },
    {
      en: "You must notify PennDOT of an address change within 15 days of moving.",
      zh: "搬家后须在15天内通知 PennDOT 更新地址。",
      es: "Debe notificar al PennDOT un cambio de dirección dentro de los 15 días posteriores a su mudanza.",
    },
    {
      en: "In work zones, you must turn on headlights — this is a PA-specific requirement.",
      zh: "在施工区行驶时须开启车头灯——这是宾州特有的规定。",
      es: "En zonas de trabajo, debe encender los faros — este es un requisito específico de PA.",
    },
  ],

  handbookChapters: [
    {
      title: { en: "Applying for a Learner's Permit", zh: "申请学车证", es: "Solicitar un Permiso de Aprendizaje" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/applying-for-a-learners-permit",
      emoji: "🪪",
    },
    {
      title: { en: "Signals, Signs & Pavement Markings", zh: "信号、标志与路面标线", es: "Señales, Señales y Marcas en el Pavimento" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/chapter-2-signals-signs-and-pavement-markings",
      emoji: "🚦",
    },
    {
      title: { en: "Everyday Driving Skills", zh: "日常驾驶技能", es: "Habilidades de Manejo Cotidiano" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/everyday-driving-skills",
      emoji: "🗺️",
    },
    {
      title: { en: "Special Circumstances & Emergencies", zh: "特殊情况与紧急应对", es: "Circunstancias Especiales y Emergencias" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/special-circumstances-and-emergencies",
      emoji: "⚠️",
    },
    {
      title: { en: "Driver Factors (Alcohol & Drugs)", zh: "驾驶员因素（酒精与药物）", es: "Factores del Conductor (Alcohol y Drogas)" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/driver-factors",
      emoji: "🚫",
    },
    {
      title: { en: "Choosing Safety First", zh: "优先安全", es: "Elegir la Seguridad Primero" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/choosing-safety-first",
      emoji: "🛡️",
    },
    {
      title: { en: "Sharing the Road", zh: "共享道路", es: "Compartir la Vía" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/#sharing",
      emoji: "🚶",
    },
    {
      title: { en: "Vehicle Inspection & Insurance", zh: "车辆检验与保险", es: "Inspección del Vehículo y Seguro" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/#insurance",
      emoji: "📋",
    },
  ],

  officialLinks: [
    {
      label: { en: "PA PennDOT Official Site", zh: "宾州 PennDOT 官网", es: "Sitio Oficial del PennDOT de PA" },
      url: "https://www.pa.gov/agencies/dmv/",
      description: {
        en: "Pennsylvania Department of Transportation — Driver and Vehicle Services",
        zh: "宾夕法尼亚州交通部——驾驶员与车辆服务",
        es: "Departamento de Transportación de Pennsylvania — Servicios de Conductores y Vehículos",
      },
      emoji: "🏛️",
    },
    {
      label: { en: "Driver's Manual (Online)", zh: "驾驶员手册（在线版）", es: "Manual del Conductor (En línea)" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/",
      description: {
        en: "Full Pennsylvania Driver's Manual — read chapter by chapter online",
        zh: "完整的宾州驾驶员手册——按章节在线阅读",
        es: "Manual completo del Conductor de Pennsylvania — léalo capítulo por capítulo en línea",
      },
      emoji: "📖",
    },
    {
      label: { en: "Schedule Appointment", zh: "预约考试", es: "Programar Cita" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/",
      description: {
        en: "Schedule your knowledge test at a PennDOT Driver License Center",
        zh: "在 PennDOT 驾照中心预约笔试",
        es: "Programe su examen de conocimientos en un Centro de Licencias del PennDOT",
      },
      emoji: "📅",
    },
    {
      label: { en: "Find a Driver License Center", zh: "查找驾照中心", es: "Encontrar un Centro de Licencias" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/",
      description: {
        en: "Find the PennDOT Driver License Center nearest to you",
        zh: "查找离您最近的 PennDOT 驾照中心",
        es: "Encuentre el Centro de Licencias del PennDOT más cercano a usted",
      },
      emoji: "📍",
    },
    {
      label: { en: "PA Point System", zh: "宾州积分制度", es: "Sistema de Puntos de PA" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/driver-licensing/",
      description: {
        en: "Learn about PA's driver point system and how violations affect your license",
        zh: "了解宾州驾驶积分制度及违规对驾照的影响",
        es: "Conozca el sistema de puntos de conductores de PA y cómo las infracciones afectan su licencia",
      },
      emoji: "📊",
    },
    {
      label: { en: "PA Traffic Laws & Safety", zh: "宾州交通法规与安全", es: "Leyes de Tránsito y Seguridad de PA" },
      url: "https://www.pa.gov/agencies/dmv/driver-services/",
      description: {
        en: "Pennsylvania traffic laws, safety programs, and driver resources",
        zh: "宾夕法尼亚州交通法规、安全计划和驾驶员资源",
        es: "Leyes de tránsito de Pennsylvania, programas de seguridad y recursos para conductores",
      },
      emoji: "⚖️",
    },
  ],
};

// ─── Registry ─────────────────────────────────────────────────────────────────

/**
 * Look up exam guide by category.nameEn — returns undefined if not found.
 *
 * IMPORTANT: When adding a new state, add its entry here AND to the seed file.
 * Missing entries cause the category page to silently omit all guide sections,
 * and the quiz page to show wrong pass/fail thresholds and CA-hardcoded strings.
 */
export const examGuides: Record<string, ExamGuide> = {
  "California Driver's License": californiaDMV,
  "Texas Driver's License": texasDMV,
  "New York Driver's License": newYorkDMV,
  "Florida Driver's License": floridaDMV,
  "Pennsylvania Driver's License": pennsylvaniaDMV,
};
