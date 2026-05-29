/**
 * Pennsylvania PennDOT Driver's License Practice Questions
 * Source: Pennsylvania Driver's Manual (official) — pa.gov/agencies/dmv
 * Rebuilt 2026 — topics follow actual handbook chapter structure
 *
 * 7 topics matching the PA online manual:
 *   Ch.2  — Signals, Signs and Pavement Markings
 *   Ch.3a — Choosing Safety First
 *   Ch.3b — Everyday Driving Skills
 *   Ch.3c — Special Circumstances and Emergencies
 *   Ch.3d — Driver Factors
 *   Ch.4  — Driving Record Information
 *   Ch.5  — Laws and Related Issues
 */

const BASE = "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual";

export const pennsylvaniaDMV = {
  category: {
    name: "Pennsylvania Driver's License",
    nameEn: "Pennsylvania Driver's License",
    description: "Pennsylvania Knowledge Test — 18 questions, 83% to pass (15/18 correct)",
    icon: "🏛️",
    color: "#3B82F6",
    hasAiTutor: false,
    translations: [
      {
        language: "zh",
        name: "宾夕法尼亚州驾照笔试",
        description: "宾州 PennDOT 驾照知识考试 — 共 18 题，答对 15 题（83%）即通过",
      },
      {
        language: "es",
        name: "Licencia de Conducir de Pennsylvania",
        description: "Examen de conocimientos de Pennsylvania — 18 preguntas, 83% para aprobar",
      },
    ],
  },
  topics: [

    // ─── TOPIC 1: DRIVER LICENSE (Ch.1) ────────────────────────────────────────
    {
      name: "Driver License",
      nameEn: "Driver License",
      description: "License classes, Graduated Driver License (GDL) system, permit requirements, and junior driver restrictions",
      handbookUrl: `${BASE}/applying-for-a-learners-permit`,
      translations: [
        { language: "zh", name: "驾照申请与分级驾照制度", description: "驾照类别、分级驾照（GDL）制度、学习许可证要求及青少年驾驶员限制" },
        { language: "es", name: "Licencia de Conducir", description: "Clases de licencia, sistema de Licencia de Conducir Graduada (GDL), requisitos del permiso y restricciones para conductores jóvenes" },
      ],
      questions: [

        {
          content: "What is the minimum age to apply for a Class C (standard passenger vehicle) learner's permit in Pennsylvania?",
          explanation: "In Pennsylvania, applicants must be at least 16 years old to apply for a Class C learner's permit. Class A and Class B licenses (for large commercial vehicles) require a minimum age of 18. Class M (motorcycle) also requires age 16.",
          handbookSection: "Driver License — License Classes",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，申请C类（标准乘用车）学习许可证的最低年龄是多少？",
              explanation: "在宾夕法尼亚州，申请C类学习许可证的最低年龄为16岁。A类和B类驾照（大型商业车辆）要求最低年龄18岁。M类（摩托车）也要求年满16岁。",
            },
            {
              language: "es",
              content: "¿Cuál es la edad mínima para solicitar un permiso de aprendizaje Clase C (vehículo de pasajeros estándar) en Pennsylvania?",
              explanation: "En Pennsylvania, los solicitantes deben tener al menos 16 años para solicitar un permiso de aprendizaje Clase C. Las licencias Clase A y Clase B (para vehículos comerciales grandes) requieren una edad mínima de 18 años.",
            },
          ],
          options: [
            { content: "16 years old", isCorrect: true, translations: [{ language: "zh", content: "16岁" }, { language: "es", content: "16 años" }] },
            { content: "15 years old", isCorrect: false, translations: [{ language: "zh", content: "15岁" }, { language: "es", content: "15 años" }] },
            { content: "17 years old", isCorrect: false, translations: [{ language: "zh", content: "17岁" }, { language: "es", content: "17 años" }] },
            { content: "18 years old", isCorrect: false, translations: [{ language: "zh", content: "18岁" }, { language: "es", content: "18 años" }] },
          ],
        },

        {
          content: "When driving with a Junior Learner's Permit in Pennsylvania, who must be seated in the front seat?",
          explanation: "When driving with a Junior Learner's Permit, a licensed driver who is at least 21 years old (or an authorized parent or guardian) must be seated in the front seat at all times. The number of passengers may not exceed the number of available seat belts.",
          handbookSection: "Driver License — Junior Learner's Permit",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州持青少年学习许可证驾驶时，谁必须坐在前排座位？",
              explanation: "持青少年学习许可证驾驶时，至少21岁的持照驾驶员（或授权的父母或监护人）必须始终坐在前排座位。乘客人数不得超过可用安全带数量。",
            },
            {
              language: "es",
              content: "Al conducir con un Permiso de Aprendizaje Junior en Pennsylvania, ¿quién debe estar sentado en el asiento delantero?",
              explanation: "Al conducir con un Permiso de Aprendizaje Junior, un conductor licenciado de al menos 21 años (o un padre o tutor autorizado) debe estar sentado en el asiento delantero en todo momento.",
            },
          ],
          options: [
            { content: "A licensed driver at least 21 years old (or authorized parent/guardian)", isCorrect: true, translations: [{ language: "zh", content: "至少21岁的持照驾驶员（或授权的父母/监护人）" }, { language: "es", content: "Un conductor licenciado de al menos 21 años (o padre/tutor autorizado)" }] },
            { content: "Any licensed driver, regardless of age", isCorrect: false, translations: [{ language: "zh", content: "任何持照驾驶员，不限年龄" }, { language: "es", content: "Cualquier conductor licenciado, independientemente de la edad" }] },
            { content: "A licensed driver at least 18 years old", isCorrect: false, translations: [{ language: "zh", content: "至少18岁的持照驾驶员" }, { language: "es", content: "Un conductor licenciado de al menos 18 años" }] },
            { content: "No supervisor is required", isCorrect: false, translations: [{ language: "zh", content: "不需要监督员" }, { language: "es", content: "No se requiere supervisor" }] },
          ],
        },

        {
          content: "How many total hours of supervised behind-the-wheel driving must a Junior Learner's Permit holder complete before taking the road test?",
          explanation: "Before taking the road test, a Junior Learner's Permit holder must complete at least 65 hours of supervised behind-the-wheel driving. Of those 65 hours, at least 10 must be nighttime driving and at least 5 must be in bad weather conditions. There is also a mandatory 6-month waiting period before the road test.",
          handbookSection: "Driver License — Junior Learner's Permit",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "青少年学习许可证持有人在参加路考前必须完成多少小时的监督驾驶？",
              explanation: "参加路考前，青少年学习许可证持有人必须完成至少65小时的监督驾驶。其中至少10小时为夜间驾驶，至少5小时为恶劣天气驾驶。此外还有强制性6个月等待期。",
            },
            {
              language: "es",
              content: "¿Cuántas horas totales de conducción supervisada debe completar un titular de Permiso de Aprendizaje Junior antes de tomar el examen de manejo?",
              explanation: "Antes de tomar el examen de manejo, un titular de Permiso de Aprendizaje Junior debe completar al menos 65 horas de conducción supervisada. De esas 65 horas, al menos 10 deben ser de conducción nocturna y al menos 5 en condiciones de mal tiempo. También hay un período de espera obligatorio de 6 meses.",
            },
          ],
          options: [
            { content: "65 hours", isCorrect: true, translations: [{ language: "zh", content: "65小时" }, { language: "es", content: "65 horas" }] },
            { content: "50 hours", isCorrect: false, translations: [{ language: "zh", content: "50小时" }, { language: "es", content: "50 horas" }] },
            { content: "40 hours", isCorrect: false, translations: [{ language: "zh", content: "40小时" }, { language: "es", content: "40 horas" }] },
            { content: "80 hours", isCorrect: false, translations: [{ language: "zh", content: "80小时" }, { language: "es", content: "80 horas" }] },
          ],
        },

        {
          content: "Of the required 65 supervised driving hours, how many must be completed at night?",
          explanation: "Of the 65 required supervised driving hours, at least 10 must be nighttime driving hours. Additionally, at least 5 of the 65 hours must be driven in bad weather conditions (rain, snow, fog, etc.). These requirements ensure new drivers gain experience in challenging conditions before driving independently.",
          handbookSection: "Driver License — Junior Learner's Permit",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在65小时的监督驾驶要求中，至少需要多少小时的夜间驾驶？",
              explanation: "在65小时的监督驾驶要求中，至少10小时必须是夜间驾驶。此外，至少5小时必须在恶劣天气条件下（雨、雪、雾等）驾驶。这些要求确保新驾驶员在独立驾驶前获得在困难条件下驾驶的经验。",
            },
            {
              language: "es",
              content: "De las 65 horas de conducción supervisada requeridas, ¿cuántas deben completarse de noche?",
              explanation: "De las 65 horas de conducción supervisada requeridas, al menos 10 deben ser horas de conducción nocturna. Además, al menos 5 de las 65 horas deben conducirse en condiciones de mal tiempo (lluvia, nieve, niebla, etc.).",
            },
          ],
          options: [
            { content: "At least 10 hours", isCorrect: true, translations: [{ language: "zh", content: "至少10小时" }, { language: "es", content: "Al menos 10 horas" }] },
            { content: "At least 5 hours", isCorrect: false, translations: [{ language: "zh", content: "至少5小时" }, { language: "es", content: "Al menos 5 horas" }] },
            { content: "At least 15 hours", isCorrect: false, translations: [{ language: "zh", content: "至少15小时" }, { language: "es", content: "Al menos 15 horas" }] },
            { content: "At least 20 hours", isCorrect: false, translations: [{ language: "zh", content: "至少20小时" }, { language: "es", content: "Al menos 20 horas" }] },
          ],
        },

        {
          content: "How long must a Junior Learner's Permit holder wait before being eligible to take the road test?",
          explanation: "There is a mandatory 6-month waiting period after receiving a Junior Learner's Permit before a young driver is eligible to take the road test. This waiting period, combined with the 65 supervised hours requirement, ensures new drivers have adequate experience before testing for independence.",
          handbookSection: "Driver License — Junior Learner's Permit",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "青少年学习许可证持有人必须等待多久才能参加路考？",
              explanation: "获得青少年学习许可证后，年轻驾驶员必须经过强制性6个月等待期才能参加路考。这个等待期加上65小时监督驾驶要求，确保新驾驶员在独立驾驶测试前有足够的经验。",
            },
            {
              language: "es",
              content: "¿Cuánto tiempo debe esperar un titular de Permiso de Aprendizaje Junior antes de poder tomar el examen de manejo?",
              explanation: "Hay un período de espera obligatorio de 6 meses después de recibir un Permiso de Aprendizaje Junior antes de que un conductor joven sea elegible para tomar el examen de manejo.",
            },
          ],
          options: [
            { content: "6 months", isCorrect: true, translations: [{ language: "zh", content: "6个月" }, { language: "es", content: "6 meses" }] },
            { content: "3 months", isCorrect: false, translations: [{ language: "zh", content: "3个月" }, { language: "es", content: "3 meses" }] },
            { content: "1 year", isCorrect: false, translations: [{ language: "zh", content: "1年" }, { language: "es", content: "1 año" }] },
            { content: "30 days", isCorrect: false, translations: [{ language: "zh", content: "30天" }, { language: "es", content: "30 días" }] },
          ],
        },

        {
          content: "Under the Pennsylvania Junior Driver's License, during what hours is nighttime driving prohibited?",
          explanation: "Holders of a Pennsylvania Junior Driver's License may not drive between 11 p.m. and 5 a.m. Exceptions exist for employment, volunteer service with an emergency agency, or religious activity — but only with a signed note from the employer, volunteer organization, or religious institution.",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州青少年驾照规定，哪些时段禁止夜间驾驶？",
              explanation: "宾夕法尼亚州青少年驾照持有人不得在晚上11点至凌晨5点期间驾驶。就业、紧急机构志愿服务或宗教活动例外——但需要有雇主、志愿组织或宗教机构签署的书面说明。",
            },
            {
              language: "es",
              content: "Bajo la Licencia de Conducir Junior de Pennsylvania, ¿durante qué horas está prohibida la conducción nocturna?",
              explanation: "Los titulares de una Licencia de Conducir Junior de Pennsylvania no pueden conducir entre las 11 p.m. y las 5 a.m. Existen excepciones para empleo, servicio voluntario con una agencia de emergencias o actividad religiosa.",
            },
          ],
          options: [
            { content: "11 p.m. to 5 a.m.", isCorrect: true, translations: [{ language: "zh", content: "晚上11点至凌晨5点" }, { language: "es", content: "11 p.m. a 5 a.m." }] },
            { content: "10 p.m. to 6 a.m.", isCorrect: false, translations: [{ language: "zh", content: "晚上10点至早上6点" }, { language: "es", content: "10 p.m. a 6 a.m." }] },
            { content: "Midnight to 6 a.m.", isCorrect: false, translations: [{ language: "zh", content: "午夜至早上6点" }, { language: "es", content: "Medianoche a 6 a.m." }] },
            { content: "9 p.m. to 5 a.m.", isCorrect: false, translations: [{ language: "zh", content: "晚上9点至凌晨5点" }, { language: "es", content: "9 p.m. a 5 a.m." }] },
          ],
        },

        {
          content: "During the first 6 months of holding a Junior Driver's License, how many non-family passengers under age 18 may ride in the vehicle?",
          explanation: "For the first 6 months of holding a Junior Driver's License, the driver may carry only ONE non-family passenger under age 18. After 6 months of violation-free driving, this limit increases to three non-family passengers under 18. The total number of passengers may never exceed the number of available seat belts.",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "持青少年驾照的前6个月内，车内最多可以载多少名18岁以下的非家庭成员乘客？",
              explanation: "持青少年驾照的前6个月内，驾驶员只能携带一名18岁以下的非家庭成员乘客。6个月无违规驾驶后，此限制增加至三名18岁以下的非家庭成员乘客。乘客总数不得超过可用安全带数量。",
            },
            {
              language: "es",
              content: "Durante los primeros 6 meses de tener una Licencia de Conducir Junior, ¿cuántos pasajeros menores de 18 años que no sean familia pueden viajar en el vehículo?",
              explanation: "Durante los primeros 6 meses de tener una Licencia de Conducir Junior, el conductor solo puede llevar UN pasajero menor de 18 años que no sea de la familia. Después de 6 meses de conducción sin infracciones, este límite aumenta a tres pasajeros menores de 18 que no sean familia.",
            },
          ],
          options: [
            { content: "One non-family passenger under 18", isCorrect: true, translations: [{ language: "zh", content: "一名18岁以下的非家庭成员乘客" }, { language: "es", content: "Un pasajero menor de 18 años que no sea de la familia" }] },
            { content: "No passengers under 18", isCorrect: false, translations: [{ language: "zh", content: "不能载任何18岁以下乘客" }, { language: "es", content: "Sin pasajeros menores de 18 años" }] },
            { content: "Three non-family passengers under 18", isCorrect: false, translations: [{ language: "zh", content: "三名18岁以下的非家庭成员乘客" }, { language: "es", content: "Tres pasajeros menores de 18 años que no sean de la familia" }] },
            { content: "Unlimited passengers as long as seat belts are available", isCorrect: false, translations: [{ language: "zh", content: "只要有安全带，乘客数量不限" }, { language: "es", content: "Pasajeros ilimitados siempre que haya cinturones de seguridad disponibles" }] },
          ],
        },

        {
          content: "What automatic penalty does a junior driver face for accumulating 6 or more points OR for driving 26 mph or more over the speed limit?",
          explanation: "A junior driver who accumulates 6 or more points, or is convicted of driving 26 mph or more over the speed limit, faces an automatic 90-day license suspension. This is in addition to any points assessed for individual violations. The 90-day suspension is mandatory and cannot be reduced.",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "青少年驾驶员因累积6分或以上，或超速26英里/小时或以上会面临什么自动处罚？",
              explanation: "累积6分或以上，或因超速26英里/小时或以上被定罪的青少年驾驶员，将面临自动90天驾照暂扣。这是在个人违规积分之外的额外处罚。90天暂扣是强制性的，不能减少。",
            },
            {
              language: "es",
              content: "¿Qué penalización automática enfrenta un conductor junior por acumular 6 o más puntos O por conducir a 26 mph o más sobre el límite de velocidad?",
              explanation: "Un conductor junior que acumula 6 o más puntos, o es condenado por conducir a 26 mph o más sobre el límite de velocidad, enfrenta una suspensión automática de licencia de 90 días. Esto es además de cualquier punto evaluado por infracciones individuales.",
            },
          ],
          options: [
            { content: "Automatic 90-day license suspension", isCorrect: true, translations: [{ language: "zh", content: "自动90天驾照暂扣" }, { language: "es", content: "Suspensión automática de licencia de 90 días" }] },
            { content: "A $300 fine and 3-point reduction", isCorrect: false, translations: [{ language: "zh", content: "300美元罚款和减少3分" }, { language: "es", content: "Una multa de $300 y reducción de 3 puntos" }] },
            { content: "30-day suspension", isCorrect: false, translations: [{ language: "zh", content: "30天暂扣" }, { language: "es", content: "Suspensión de 30 días" }] },
            { content: "Required to retake the knowledge test only", isCorrect: false, translations: [{ language: "zh", content: "仅需重新参加笔试" }, { language: "es", content: "Solo se requiere volver a tomar el examen de conocimientos" }] },
          ],
        },

        {
          content: "How does a Junior Driver's License automatically become a full unrestricted license in Pennsylvania?",
          explanation: "In Pennsylvania, a Junior Driver's License automatically becomes a full unrestricted (Class C) license when the driver turns 18 years old — no additional test or application is required. Alternatively, a junior driver may upgrade before age 18 by maintaining a clean driving record (no crashes or violations) for one year.",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，青少年驾照如何自动升级为完全无限制驾照？",
              explanation: "在宾夕法尼亚州，当驾驶员年满18岁时，青少年驾照自动升级为完全无限制（C类）驾照——不需要额外的考试或申请。或者，青少年驾驶员也可以在18岁前通过保持一年无违规记录来提前升级。",
            },
            {
              language: "es",
              content: "¿Cómo se convierte automáticamente una Licencia de Conducir Junior en una licencia completa sin restricciones en Pennsylvania?",
              explanation: "En Pennsylvania, una Licencia de Conducir Junior se convierte automáticamente en una licencia completa sin restricciones (Clase C) cuando el conductor cumple 18 años — no se requiere examen ni solicitud adicional. Alternativamente, un conductor junior puede actualizarla antes de los 18 años manteniendo un historial de conducción limpio por un año.",
            },
          ],
          options: [
            { content: "When the driver turns 18 years old", isCorrect: true, translations: [{ language: "zh", content: "当驾驶员年满18岁时" }, { language: "es", content: "Cuando el conductor cumple 18 años" }] },
            { content: "After completing a defensive driving course", isCorrect: false, translations: [{ language: "zh", content: "完成防御性驾驶课程后" }, { language: "es", content: "Después de completar un curso de manejo defensivo" }] },
            { content: "By passing a second road test at age 17", isCorrect: false, translations: [{ language: "zh", content: "在17岁时通过第二次路考" }, { language: "es", content: "Al aprobar un segundo examen de manejo a los 17 años" }] },
            { content: "After 2 years of holding the Junior Driver's License", isCorrect: false, translations: [{ language: "zh", content: "持有青少年驾照2年后" }, { language: "es", content: "Después de 2 años de tener la Licencia de Conducir Junior" }] },
          ],
        },

        {
          content: "How many attempts at the Pennsylvania knowledge test are allowed per day?",
          explanation: "Pennsylvania only allows ONE knowledge test attempt per day, regardless of which driver's license center you visit. If you fail, you must return on a different day to try again. There is no limit on the total number of attempts across different days.",
          handbookSection: "Driver License — Knowledge Test",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州每天允许参加几次驾照笔试？",
              explanation: "无论您去哪个驾照中心，宾夕法尼亚州每天只允许一次笔试机会。如果不及格，必须改天再来重试。跨不同日期的总尝试次数没有限制。",
            },
            {
              language: "es",
              content: "¿Cuántos intentos del examen de conocimientos de Pennsylvania se permiten por día?",
              explanation: "Pennsylvania solo permite UN intento del examen de conocimientos por día, independientemente del centro de licencias de conducir que visite. Si falla, debe regresar otro día para intentarlo nuevamente.",
            },
          ],
          options: [
            { content: "One attempt per day", isCorrect: true, translations: [{ language: "zh", content: "每天一次" }, { language: "es", content: "Un intento por día" }] },
            { content: "Two attempts per day", isCorrect: false, translations: [{ language: "zh", content: "每天两次" }, { language: "es", content: "Dos intentos por día" }] },
            { content: "Unlimited attempts on the same day", isCorrect: false, translations: [{ language: "zh", content: "同一天可以无限次尝试" }, { language: "es", content: "Intentos ilimitados el mismo día" }] },
            { content: "Three attempts before a waiting period", isCorrect: false, translations: [{ language: "zh", content: "需要等待期前可尝试三次" }, { language: "es", content: "Tres intentos antes de un período de espera" }] },
          ],
        },

        {
          content: "What form is required to apply for a Pennsylvania learner's permit?",
          explanation: "To apply for a Pennsylvania learner's permit, you must complete form DL-180. If you are under 18 years of age, a parent or guardian must also sign form DL-180TD (parental consent). These forms, along with proof of identity, Social Security card, and applicable fees, are submitted at a PennDOT Driver License Center.",
          handbookSection: "Driver License — Application Requirements",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "申请宾夕法尼亚州学习许可证需要填写什么表格？",
              explanation: "申请宾夕法尼亚州学习许可证必须填写DL-180表格。如果未满18岁，父母或监护人还必须签署DL-180TD表格（家长同意书）。这些表格连同身份证明、社会安全卡和相关费用一起提交至宾州交通部驾照中心。",
            },
            {
              language: "es",
              content: "¿Qué formulario se requiere para solicitar un permiso de aprendizaje de Pennsylvania?",
              explanation: "Para solicitar un permiso de aprendizaje de Pennsylvania, debe completar el formulario DL-180. Si tiene menos de 18 años, un padre o tutor también debe firmar el formulario DL-180TD (consentimiento parental). Estos formularios se presentan en un Centro de Licencias de Conducir de PennDOT.",
            },
          ],
          options: [
            { content: "DL-180 (plus DL-180TD parental consent if under 18)", isCorrect: true, translations: [{ language: "zh", content: "DL-180（18岁以下还需DL-180TD家长同意书）" }, { language: "es", content: "DL-180 (más DL-180TD consentimiento parental si es menor de 18)" }] },
            { content: "DL-80 application form", isCorrect: false, translations: [{ language: "zh", content: "DL-80申请表" }, { language: "es", content: "Formulario de solicitud DL-80" }] },
            { content: "No form needed — apply online only", isCorrect: false, translations: [{ language: "zh", content: "不需要表格——仅网上申请" }, { language: "es", content: "No se necesita formulario — solo se aplica en línea" }] },
            { content: "DL-500 new driver registration", isCorrect: false, translations: [{ language: "zh", content: "DL-500新驾驶员注册" }, { language: "es", content: "Registro de nuevo conductor DL-500" }] },
          ],
        },


        {
          content: "How far in advance of your 16th birthday may the required medical examination for a learner's permit be completed?",
          explanation: "The physical examination date may not be more than six months prior to your 16th birthday. This ensures the medical exam results are recent when you apply. The exam also cannot be completed before six months prior to turning 16.",
          handbookSection: "Driver License — Application Requirements",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "学习许可证所需的体检最早可以在16岁生日前多久完成？",
              explanation: "体检日期不得早于16岁生日前六个月。这确保申请时体检结果是最新的。体检也不能在16岁生日前六个月之前进行。",
            },
            {
              language: "es",
              content: "¿Con cuánta anticipación a su cumpleaños número 16 puede completarse el examen médico requerido para un permiso de aprendizaje?",
              explanation: "La fecha del examen físico no puede ser más de seis meses antes de su 16° cumpleaños. Esto asegura que los resultados del examen médico sean recientes al momento de la solicitud.",
            },
          ],
          options: [
            { content: "Up to 6 months before", isCorrect: true, translations: [{ language: "zh", content: "最多提前6个月" }, { language: "es", content: "Hasta 6 meses antes" }] },
            { content: "Up to 3 months before", isCorrect: false, translations: [{ language: "zh", content: "最多提前3个月" }, { language: "es", content: "Hasta 3 meses antes" }] },
            { content: "Up to 1 year before", isCorrect: false, translations: [{ language: "zh", content: "最多提前1年" }, { language: "es", content: "Hasta 1 año antes" }] },
            { content: "Any time before age 16", isCorrect: false, translations: [{ language: "zh", content: "16岁前任何时间" }, { language: "es", content: "En cualquier momento antes de los 16 años" }] },
          ],
        },

        {
          content: "If a Junior Learner's Permit expires or the road test is failed three times, which form must be submitted to continue?",
          explanation: "If a learner's permit expires or the applicant fails the road test three times, they must obtain Form DL-31 (Non-Commercial Learner's Permit Application to Add/Extend/Replace/Change/Correct) to continue the process. This differs from the original DL-180 used for first-time applications.",
          handbookSection: "Driver License — Junior Learner's Permit",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "如果青少年学习许可证过期或路考三次不合格，需要提交哪个表格？",
              explanation: "如果学习许可证过期或申请人路考三次失败，必须使用DL-31表格（非商业学习许可证申请更改/延期/补发/修改/纠正）继续申请流程。这与首次申请使用的DL-180不同。",
            },
            {
              language: "es",
              content: "Si un Permiso de Aprendizaje Junior vence o el examen de manejo se reprueba tres veces, ¿qué formulario debe presentarse?",
              explanation: "Si un permiso de aprendizaje vence o el solicitante reprueba el examen de manejo tres veces, debe obtener el Formulario DL-31 para continuar el proceso.",
            },
          ],
          options: [
            { content: "Form DL-31", isCorrect: true, translations: [{ language: "zh", content: "DL-31表格" }, { language: "es", content: "Formulario DL-31" }] },
            { content: "Form DL-180 (resubmit original)", isCorrect: false, translations: [{ language: "zh", content: "DL-180表格（重新提交原表）" }, { language: "es", content: "Formulario DL-180 (volver a presentar el original)" }] },
            { content: "Form DL-59", isCorrect: false, translations: [{ language: "zh", content: "DL-59表格" }, { language: "es", content: "Formulario DL-59" }] },
            { content: "Form DL-102", isCorrect: false, translations: [{ language: "zh", content: "DL-102表格" }, { language: "es", content: "Formulario DL-102" }] },
          ],
        },

        {
          content: "What form must a junior driver submit to upgrade to a regular license BEFORE turning 18?",
          explanation: "A junior driver who wants to upgrade before age 18 must have held the junior license for one year, completed an approved driver training course, maintained a clean record (no crashes or violations) for one year, and obtained parental consent. They submit Form DL-59 (Application for Change from a Junior Driver's License to a Regular Non-Commercial Driver's License).",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "青少年驾驶员在18岁前升级为正式驾照需要提交什么表格？",
              explanation: "想在18岁前升级的青少年驾驶员必须持有青少年驾照满一年、完成经批准的驾驶培训课程、保持一年无违规记录，并获得家长同意。他们需要提交DL-59表格（从青少年驾照更改为普通非商业驾照申请）。",
            },
            {
              language: "es",
              content: "¿Qué formulario debe presentar un conductor junior para actualizar a una licencia regular ANTES de cumplir 18 años?",
              explanation: "Un conductor junior que quiera actualizar antes de los 18 años debe haber tenido la licencia junior por un año, completado un curso de conducción aprobado, mantenido un historial limpio por un año y obtenido el consentimiento de los padres. Presentan el Formulario DL-59.",
            },
          ],
          options: [
            { content: "Form DL-59", isCorrect: true, translations: [{ language: "zh", content: "DL-59表格" }, { language: "es", content: "Formulario DL-59" }] },
            { content: "Form DL-180", isCorrect: false, translations: [{ language: "zh", content: "DL-180表格" }, { language: "es", content: "Formulario DL-180" }] },
            { content: "Form DL-31", isCorrect: false, translations: [{ language: "zh", content: "DL-31表格" }, { language: "es", content: "Formulario DL-31" }] },
            { content: "No form needed — upgrade is automatic at 1 year", isCorrect: false, translations: [{ language: "zh", content: "无需表格——1年后自动升级" }, { language: "es", content: "No se necesita formulario — la actualización es automática al año" }] },
          ],
        },

        {
          content: "After the first 6 months of holding a Junior Driver's License, the non-family passenger limit under 18 increases to three — UNLESS which of these conditions applies?",
          explanation: "The increased passenger limit (up to three non-family members under 18) does NOT apply to any junior driver who has ever been involved in a crash where they were partially or fully responsible, OR who has been convicted of any driving violation. In those cases, the one-passenger limit continues to apply.",
          handbookSection: "Driver License — Junior Driver's License",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "持青少年驾照满6个月后，18岁以下非家庭成员乘客上限提高到三人——除非哪种情况适用？",
              explanation: "在以下情况下，增加的乘客上限（最多三名18岁以下非家庭成员）不适用：青少年驾驶员曾因其部分或全部责任卷入事故，或曾被裁定任何驾驶违规。在这些情况下，一名乘客的限制继续适用。",
            },
            {
              language: "es",
              content: "Después de los primeros 6 meses con Licencia de Conducir Junior, el límite de pasajeros menores de 18 que no son familia aumenta a tres — EXCEPTO cuando se aplica cuál de estas condiciones?",
              explanation: "El límite aumentado NO se aplica a ningún conductor junior que haya estado involucrado en un accidente del que fue parcial o totalmente responsable, O que haya sido condenado por cualquier infracción de tránsito. En esos casos, el límite de un pasajero continúa aplicándose.",
            },
          ],
          options: [
            { content: "The junior driver was in a crash they caused OR was convicted of any driving violation", isCorrect: true, translations: [{ language: "zh", content: "青少年驾驶员曾负有责任的事故或被裁定任何驾驶违规" }, { language: "es", content: "El conductor junior estuvo en un accidente que causó O fue condenado por cualquier infracción de tránsito" }] },
            { content: "The junior driver is under age 17", isCorrect: false, translations: [{ language: "zh", content: "青少年驾驶员未满17岁" }, { language: "es", content: "El conductor junior tiene menos de 17 años" }] },
            { content: "The junior driver has not completed driver training", isCorrect: false, translations: [{ language: "zh", content: "青少年驾驶员未完成驾驶培训" }, { language: "es", content: "El conductor junior no ha completado el entrenamiento de conducción" }] },
            { content: "The vehicle has fewer than 4 seats", isCorrect: false, translations: [{ language: "zh", content: "车辆座位少于4个" }, { language: "es", content: "El vehículo tiene menos de 4 asientos" }] },
          ],
        },

        {
          content: "A person who moves to Pennsylvania from another state must obtain a Pennsylvania driver's license within how many days?",
          explanation: "New residents who relocate to Pennsylvania must obtain a Pennsylvania driver's license within 60 days of moving. They must also surrender their out-of-state driver's license when applying. Driving on an out-of-state license beyond 60 days as a Pennsylvania resident is a violation.",
          handbookSection: "Driver License — Application Requirements",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "从其他州搬到宾夕法尼亚州的人必须在多少天内获得宾州驾照？",
              explanation: "搬到宾夕法尼亚州的新居民必须在搬入后60天内获得宾州驾照，并在申请时交出外州驾照。作为宾州居民超过60天后仍使用外州驾照属于违规行为。",
            },
            {
              language: "es",
              content: "Una persona que se muda a Pennsylvania desde otro estado debe obtener una licencia de conducir de Pennsylvania dentro de cuántos días?",
              explanation: "Los nuevos residentes que se trasladan a Pennsylvania deben obtener una licencia de conducir de Pennsylvania dentro de los 60 días de mudarse. También deben entregar su licencia de otro estado al solicitar.",
            },
          ],
          options: [
            { content: "60 days", isCorrect: true, translations: [{ language: "zh", content: "60天" }, { language: "es", content: "60 días" }] },
            { content: "30 days", isCorrect: false, translations: [{ language: "zh", content: "30天" }, { language: "es", content: "30 días" }] },
            { content: "90 days", isCorrect: false, translations: [{ language: "zh", content: "90天" }, { language: "es", content: "90 días" }] },
            { content: "6 months", isCorrect: false, translations: [{ language: "zh", content: "6个月" }, { language: "es", content: "6 meses" }] },
          ],
        },

        {
          content: "What does a Class B driver's license allow you to operate in Pennsylvania?",
          explanation: "A Class B license authorizes operation of any single vehicle rated in excess of 26,000 pounds. The minimum age for a Class B license is 18. This is different from Class A (combination vehicles over 26,001 lbs with towed vehicle over 10,000 lbs) and Class C (standard passenger vehicles, minimum age 16).",
          handbookSection: "Driver License — License Classes",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州B类驾照允许您驾驶什么车辆？",
              explanation: "B类驾照授权驾驶任何额定总重量超过26,000磅的单一车辆。B类驾照的最低年龄要求为18岁。这与A类（总重量超过26,001磅的组合车辆，被拖车辆超过10,000磅）和C类（标准乘用车，最低年龄16岁）不同。",
            },
            {
              language: "es",
              content: "¿Qué le permite operar una licencia de conducir Clase B en Pennsylvania?",
              explanation: "Una licencia Clase B autoriza la operación de cualquier vehículo individual con calificación de más de 26,000 libras. La edad mínima para la Clase B es 18 años.",
            },
          ],
          options: [
            { content: "Any single vehicle rated over 26,000 lbs (minimum age 18)", isCorrect: true, translations: [{ language: "zh", content: "任何额定总重量超过26,000磅的单一车辆（最低年龄18岁）" }, { language: "es", content: "Cualquier vehículo individual con calificación de más de 26,000 libras (edad mínima 18)" }] },
            { content: "Combination vehicles over 26,001 lbs (minimum age 18)", isCorrect: false, translations: [{ language: "zh", content: "总重量超过26,001磅的组合车辆（最低年龄18岁）" }, { language: "es", content: "Vehículos combinados de más de 26,001 libras (edad mínima 18)" }] },
            { content: "Standard passenger vehicles (minimum age 16)", isCorrect: false, translations: [{ language: "zh", content: "标准乘用车（最低年龄16岁）" }, { language: "es", content: "Vehículos de pasajeros estándar (edad mínima 16)" }] },
            { content: "Motorcycles and motor-driven cycles (minimum age 16)", isCorrect: false, translations: [{ language: "zh", content: "摩托车和机动自行车（最低年龄16岁）" }, { language: "es", content: "Motocicletas y ciclos motorizados (edad mínima 16)" }] },
          ],
        },

      ], // end Topic 1 questions
    }, // end Topic 1

    // ─── TOPIC 2: SIGNALS, SIGNS AND PAVEMENT MARKINGS (Ch.2) ──────────────────
    {
      name: "Signals, Signs and Pavement Markings",
      nameEn: "Signals, Signs and Pavement Markings",
      description: "Traffic signals, road sign shapes and colors, lane markings, and pavement symbols",
      handbookUrl: `${BASE}/chapter-2-signals-signs-and-pavement-markings`,
      translations: [
        { language: "zh", name: "交通信号、标志与路面标线", description: "交通信号灯、道路标志形状与颜色、车道标线及路面符号" },
        { language: "es", name: "Señales de Tráfico, Señales Viales y Marcas en el Pavimento", description: "Semáforos, formas y colores de señales viales, marcas de carril y símbolos en el pavimento" },
      ],
      questions: [

        // ── Signals ───────────────────────────────────────────────────────────
        {
          content: "On a vertical traffic signal, where is the red light always located?",
          explanation: "On a vertical traffic signal, red is always on the top and green is always on the bottom. On a horizontal signal, red is on the left and green is on the right. This consistent arrangement helps drivers identify signals even from a distance.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在竖向排列的交通信号灯中，红灯始终在哪个位置？",
              explanation: "竖向信号灯中，红灯始终在最上方，绿灯始终在最下方。横向信号灯中，红灯在左边，绿灯在右边。这种统一的排列方式帮助驾驶员即使在远处也能识别信号灯。",
            },
            {
              language: "es",
              content: "En un semáforo vertical, ¿dónde está siempre la luz roja?",
              explanation: "En un semáforo vertical, la luz roja siempre está en la parte superior y la luz verde siempre está en la parte inferior. En un semáforo horizontal, la luz roja está a la izquierda y la verde a la derecha.",
            },
          ],
          options: [
            { content: "On top", isCorrect: true, translations: [{ language: "zh", content: "最上方" }, { language: "es", content: "En la parte superior" }] },
            { content: "In the middle", isCorrect: false, translations: [{ language: "zh", content: "中间" }, { language: "es", content: "En el medio" }] },
            { content: "On the bottom", isCorrect: false, translations: [{ language: "zh", content: "最下方" }, { language: "es", content: "En la parte inferior" }] },
            { content: "Position varies by intersection", isCorrect: false, translations: [{ language: "zh", content: "位置因路口而异" }, { language: "es", content: "La posición varía según la intersección" }] },
          ],
        },

        {
          content: "What does a flashing red traffic light mean?",
          explanation: "A flashing red light has the same meaning as a STOP sign. You must come to a complete stop, look both ways, and proceed only when the intersection is clear. This is different from a flashing yellow light, which means caution.",
          handbookSection: "Signals, Signs & Markings — Flashing Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "闪烁的红色信号灯意味着什么？",
              explanation: "闪烁红灯与停车标志含义相同，必须完全停车，左右查看，确认路口畅通后再继续行驶。这与闪烁黄灯（表示警告/减速）不同。",
            },
            {
              language: "es",
              content: "¿Qué significa una luz roja intermitente?",
              explanation: "Una luz roja intermitente tiene el mismo significado que una señal de ALTO. Debe detenerse por completo, mirar en ambas direcciones y avanzar solo cuando la intersección esté despejada.",
            },
          ],
          options: [
            { content: "Same as a stop sign — come to a complete stop", isCorrect: true, translations: [{ language: "zh", content: "与停车标志相同——完全停车" }, { language: "es", content: "Igual que una señal de alto — deténgase completamente" }] },
            { content: "Slow down and proceed with caution", isCorrect: false, translations: [{ language: "zh", content: "减速并谨慎通行" }, { language: "es", content: "Disminuya la velocidad y proceda con precaución" }] },
            { content: "The signal is broken — ignore it", isCorrect: false, translations: [{ language: "zh", content: "信号灯故障——忽略它" }, { language: "es", content: "El semáforo está descompuesto — ignórelo" }] },
            { content: "Yield to pedestrians only", isCorrect: false, translations: [{ language: "zh", content: "仅让行人通行" }, { language: "es", content: "Ceda el paso solo a los peatones" }] },
          ],
        },

        {
          content: "How should you treat a non-functioning traffic signal?",
          explanation: "A non-functioning traffic signal should be treated as though it were a four-way STOP sign. All drivers from every direction must stop, then proceed in order, yielding to any vehicle that arrived first.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "遇到不工作（断电）的交通信号灯应如何处理？",
              explanation: "不工作的信号灯应当作四向停车标志处理。所有方向的驾驶员都必须停车，然后依次通行，礼让先到的车辆。",
            },
            {
              language: "es",
              content: "¿Cómo debe tratar un semáforo que no funciona?",
              explanation: "Un semáforo que no funciona debe tratarse como una señal de ALTO de cuatro vías. Todos los conductores de cada dirección deben detenerse y luego proceder en orden.",
            },
          ],
          options: [
            { content: "As a four-way stop sign", isCorrect: true, translations: [{ language: "zh", content: "作为四向停车标志" }, { language: "es", content: "Como una señal de alto de cuatro vías" }] },
            { content: "As a yield sign — slow down and look", isCorrect: false, translations: [{ language: "zh", content: "作为让行标志——减速观察" }, { language: "es", content: "Como una señal de ceda el paso — disminuya y observe" }] },
            { content: "You may proceed at normal speed", isCorrect: false, translations: [{ language: "zh", content: "可以正常速度通行" }, { language: "es", content: "Puede avanzar a velocidad normal" }] },
            { content: "Wait until a police officer arrives", isCorrect: false, translations: [{ language: "zh", content: "等待警察到达" }, { language: "es", content: "Espere hasta que llegue un oficial de policía" }] },
          ],
        },

        {
          content: "Under Pennsylvania law, when may you turn left on a red light?",
          explanation: "In Pennsylvania, a left turn on red is permitted ONLY when turning from the left lane of a one-way street onto another one-way street, and only if no sign prohibits it. You must first stop completely and yield to all pedestrians and traffic.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州法律，何时可以在红灯时左转？",
              explanation: "在宾夕法尼亚州，仅当从单行道的左车道转入另一条单行道时，才允许红灯左转（且无禁止标志）。必须先完全停车，并礼让所有行人和车辆。",
            },
            {
              language: "es",
              content: "Según la ley de Pennsylvania, ¿cuándo puede girar a la izquierda con luz roja?",
              explanation: "En Pennsylvania, el giro a la izquierda con luz roja solo está permitido cuando se gira desde el carril izquierdo de una calle de sentido único hacia otra calle de sentido único, y solo si no hay señal que lo prohíba. Debe detenerse completamente y ceder el paso.",
            },
          ],
          options: [
            { content: "Only from a one-way street onto another one-way street", isCorrect: true, translations: [{ language: "zh", content: "仅从单行道转入另一条单行道" }, { language: "es", content: "Solo desde una calle de sentido único hacia otra calle de sentido único" }] },
            { content: "Anytime, as long as you stop first", isCorrect: false, translations: [{ language: "zh", content: "任何时候，只要先停车" }, { language: "es", content: "En cualquier momento, siempre que se detenga primero" }] },
            { content: "Never — left turns on red are always prohibited", isCorrect: false, translations: [{ language: "zh", content: "从不——红灯左转始终被禁止" }, { language: "es", content: "Nunca — los giros a la izquierda en rojo siempre están prohibidos" }] },
            { content: "Only at intersections with no pedestrians", isCorrect: false, translations: [{ language: "zh", content: "仅在没有行人的路口" }, { language: "es", content: "Solo en intersecciones sin peatones" }] },
          ],
        },

        {
          content: "What does a flashing yellow arrow signal mean for turning drivers?",
          explanation: "A flashing yellow arrow means you MAY turn in the direction of the arrow with caution, but you MUST yield to oncoming traffic and pedestrians. Your turn is NOT protected — oncoming traffic has a green light. This is different from a solid green arrow, which gives a protected turn.",
          handbookSection: "Signals, Signs & Markings — Flashing Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "对于正在转弯的驾驶员，闪烁的黄色箭头信号意味着什么？",
              explanation: "闪烁黄色箭头表示可以谨慎地朝箭头方向转弯，但必须礼让对向来车和行人。您的转弯不受保护——对向车辆有绿灯。这与实心绿色箭头（受保护转弯）不同。",
            },
            {
              language: "es",
              content: "¿Qué significa una señal de flecha amarilla intermitente para los conductores que giran?",
              explanation: "Una flecha amarilla intermitente significa que PUEDE girar en la dirección de la flecha con precaución, pero DEBE ceder el paso al tráfico que viene en sentido contrario y a los peatones. Su giro NO está protegido.",
            },
          ],
          options: [
            { content: "You may turn but must yield to oncoming traffic and pedestrians", isCorrect: true, translations: [{ language: "zh", content: "可以转弯，但必须礼让对向来车和行人" }, { language: "es", content: "Puede girar pero debe ceder el paso al tráfico en sentido contrario y a los peatones" }] },
            { content: "Your turn is protected — oncoming traffic is stopped", isCorrect: false, translations: [{ language: "zh", content: "您的转弯受到保护——对向来车已停止" }, { language: "es", content: "Su giro está protegido — el tráfico en sentido contrario está detenido" }] },
            { content: "You must stop and wait for a green light", isCorrect: false, translations: [{ language: "zh", content: "必须停车等待绿灯" }, { language: "es", content: "Debe detenerse y esperar una luz verde" }] },
            { content: "Turning is prohibited", isCorrect: false, translations: [{ language: "zh", content: "禁止转弯" }, { language: "es", content: "El giro está prohibido" }] },
          ],
        },

        {
          content: "At a ramp-metering signal on a single-lane entrance ramp, how many vehicles may enter the highway each time the light turns green?",
          explanation: "At a single-lane ramp-metering signal, only ONE vehicle may enter the highway each time the light turns green. These signals control traffic flow onto congested highways. Even when you receive a green light, you must still find a safe gap in highway traffic before entering.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在单车道入口匝道的匝道计量信号灯处，每次绿灯亮起允许几辆车进入高速公路？",
              explanation: "在单车道匝道计量信号灯处，每次绿灯亮起只允许一辆车进入高速公路。这些信号灯用于控制拥堵高速公路上的交通流量。即使收到绿灯信号，您仍需在高速公路交通中找到安全间隙后再进入。",
            },
            {
              language: "es",
              content: "En una señal de medición de rampa en una rampa de entrada de un solo carril, ¿cuántos vehículos pueden entrar a la autopista cada vez que la luz se pone verde?",
              explanation: "En una señal de medición de rampa de un solo carril, solo UN vehículo puede entrar a la autopista cada vez que la luz se pone verde. Estas señales controlan el flujo de tráfico hacia autopistas congestionadas.",
            },
          ],
          options: [
            { content: "One vehicle only", isCorrect: true, translations: [{ language: "zh", content: "仅一辆车" }, { language: "es", content: "Solo un vehículo" }] },
            { content: "Two vehicles", isCorrect: false, translations: [{ language: "zh", content: "两辆车" }, { language: "es", content: "Dos vehículos" }] },
            { content: "As many vehicles as can safely merge", isCorrect: false, translations: [{ language: "zh", content: "尽可能多的安全并线车辆" }, { language: "es", content: "Tantos vehículos como puedan fusionarse con seguridad" }] },
            { content: "Three vehicles", isCorrect: false, translations: [{ language: "zh", content: "三辆车" }, { language: "es", content: "Tres vehículos" }] },
          ],
        },

        {
          content: "What does a steady yellow 'X' displayed by a lane use control signal mean?",
          explanation: "A steady yellow X over a lane means you MUST change lanes because the direction of travel in that lane is about to be reversed. You must get out of the lane safely. A red X means the lane is closed. A green arrow means you may use the lane.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "车道控制信号显示稳定黄色「X」意味着什么？",
              explanation: "车道上方的稳定黄色X表示必须换道，因为该车道的行驶方向即将反转。必须安全离开该车道。红色X表示车道关闭；绿色箭头表示可以使用该车道。",
            },
            {
              language: "es",
              content: "¿Qué significa una 'X' amarilla fija mostrada por una señal de control de carril?",
              explanation: "Una X amarilla fija sobre un carril significa que DEBE cambiar de carril porque la dirección de viaje en ese carril está a punto de invertirse. Debe salir del carril de manera segura. Una X roja significa que el carril está cerrado.",
            },
          ],
          options: [
            { content: "You must change lanes — the lane direction is about to be reversed", isCorrect: true, translations: [{ language: "zh", content: "必须换道——该车道方向即将反转" }, { language: "es", content: "Debe cambiar de carril — la dirección del carril está a punto de invertirse" }] },
            { content: "You may use the lane", isCorrect: false, translations: [{ language: "zh", content: "可以使用该车道" }, { language: "es", content: "Puede usar el carril" }] },
            { content: "Slow down but remain in the lane", isCorrect: false, translations: [{ language: "zh", content: "减速但留在该车道" }, { language: "es", content: "Disminuya la velocidad pero permanezca en el carril" }] },
            { content: "The lane is reserved for buses only", isCorrect: false, translations: [{ language: "zh", content: "该车道仅供公共汽车使用" }, { language: "es", content: "El carril está reservado solo para autobuses" }] },
          ],
        },

        {
          content: "What should you do if you see a pedestrian using a white cane or walking with a guide dog?",
          explanation: "When driving near a blind pedestrian carrying a white cane or walking with a guide dog, you MUST slow down, always yield the right-of-way, proceed with caution, and be prepared to stop to prevent injury or danger.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "当您看到行人使用白色手杖或由导盲犬引导时，应该怎么做？",
              explanation: "在持有白色手杖或由导盲犬引导的盲人行人附近行驶时，必须减速，始终让行，谨慎通行，并准备好停车以防止伤害或危险。",
            },
            {
              language: "es",
              content: "¿Qué debe hacer si ve a un peatón usando un bastón blanco o caminando con un perro guía?",
              explanation: "Al conducir cerca de un peatón ciego con bastón blanco o perro guía, DEBE reducir la velocidad, siempre ceder el paso, proceder con precaución y estar preparado para detenerse para prevenir lesiones o peligro.",
            },
          ],
          options: [
            { content: "Slow down, yield, and be prepared to stop", isCorrect: true, translations: [{ language: "zh", content: "减速、让行并准备停车" }, { language: "es", content: "Reduzca la velocidad, ceda el paso y esté preparado para detenerse" }] },
            { content: "Honk to alert the pedestrian and proceed", isCorrect: false, translations: [{ language: "zh", content: "鸣喇叭提醒行人后继续行驶" }, { language: "es", content: "Toque el claxon para alertar al peatón y continúe" }] },
            { content: "Maintain your speed — they will hear you coming", isCorrect: false, translations: [{ language: "zh", content: "保持速度——他们会听到您过来" }, { language: "es", content: "Mantenga su velocidad — ellos escucharán que viene" }] },
            { content: "Stop only if the pedestrian steps into the road", isCorrect: false, translations: [{ language: "zh", content: "只有当行人走上路面时才停车" }, { language: "es", content: "Deténgase solo si el peatón entra a la calle" }] },
          ],
        },

        {
          content: "What is the maximum speed you must travel through a school zone when the flashing yellow signals are active?",
          explanation: "When the yellow signals on a school zone speed limit sign are flashing (or during the time periods posted on the sign), you must travel no faster than 15 mph. Exceeding this limit results in 3 points on your driving record plus a fine.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "当学校区域的闪烁黄色信号灯亮起时，您的最高行驶速度是多少？",
              explanation: "当学校区域限速标志上的黄色信号灯闪烁时（或在标志上注明的时间段内），行驶速度不得超过每小时15英里。超速将在驾驶记录上累计3分，并附加罚款。",
            },
            {
              language: "es",
              content: "¿Cuál es la velocidad máxima a la que debe viajar en una zona escolar cuando las señales amarillas intermitentes están activas?",
              explanation: "Cuando las señales amarillas en la señal de límite de velocidad de una zona escolar están intermitentes, debe viajar a no más de 15 mph. Exceder este límite resulta en 3 puntos en su registro de conducción más una multa.",
            },
          ],
          options: [
            { content: "15 mph", isCorrect: true, translations: [{ language: "zh", content: "每小时15英里" }, { language: "es", content: "15 mph" }] },
            { content: "20 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时20英里" }, { language: "es", content: "20 mph" }] },
            { content: "25 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时25英里" }, { language: "es", content: "25 mph" }] },
            { content: "10 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时10英里" }, { language: "es", content: "10 mph" }] },
          ],
        },

        // ── Signs ─────────────────────────────────────────────────────────────
        {
          content: "What shape is a STOP sign?",
          explanation: "A STOP sign is octagon-shaped (8 sides). Its unique shape allows drivers to recognize it from a distance or even when covered by snow, because no other sign uses this shape.",
          handbookSection: "Signals, Signs & Markings — Sign Shapes",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "停车标志是什么形状？",
              explanation: "停车标志是八边形（8条边）。其独特的形状使驾驶员即使在远处或标志被积雪覆盖时也能识别，因为没有其他标志使用这种形状。",
            },
            {
              language: "es",
              content: "¿Qué forma tiene una señal de ALTO?",
              explanation: "Una señal de ALTO tiene forma de octágono (8 lados). Su forma única permite a los conductores reconocerla desde lejos o incluso cuando está cubierta de nieve, ya que ninguna otra señal usa esta forma.",
            },
          ],
          options: [
            { content: "Octagon (8 sides)", isCorrect: true, translations: [{ language: "zh", content: "八边形（8条边）" }, { language: "es", content: "Octágono (8 lados)" }] },
            { content: "Pentagon (5 sides)", isCorrect: false, translations: [{ language: "zh", content: "五边形（5条边）" }, { language: "es", content: "Pentágono (5 lados)" }] },
            { content: "Diamond (4 sides, rotated square)", isCorrect: false, translations: [{ language: "zh", content: "菱形（4条边，旋转正方形）" }, { language: "es", content: "Rombo (4 lados, cuadrado girado)" }] },
            { content: "Triangle (inverted)", isCorrect: false, translations: [{ language: "zh", content: "倒三角形" }, { language: "es", content: "Triángulo (invertido)" }] },
          ],
        },

        {
          content: "What shape is used exclusively for the NO PASSING ZONE warning sign?",
          explanation: "The NO PASSING ZONE sign is the only pennant-shaped sign (horizontal triangle, like a pennant flag). It marks the beginning of a no-passing zone and is placed on the LEFT side of the road.",
          handbookSection: "Signals, Signs & Markings — Sign Shapes",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "哪种形状专门用于「禁止超车区」警告标志？",
              explanation: "「禁止超车区」标志是唯一的三角旗形标志（水平三角形，形似三角旗）。它标示禁止超车区的起点，设置在道路左侧。",
            },
            {
              language: "es",
              content: "¿Qué forma se usa exclusivamente para la señal de advertencia de ZONA DE NO REBASAR?",
              explanation: "La señal de ZONA DE NO REBASAR es la única señal con forma de banderín (triángulo horizontal). Marca el comienzo de una zona de no rebasar y se coloca en el lado IZQUIERDO de la carretera.",
            },
          ],
          options: [
            { content: "Pennant (horizontal triangle)", isCorrect: true, translations: [{ language: "zh", content: "三角旗形（水平三角形）" }, { language: "es", content: "Banderín (triángulo horizontal)" }] },
            { content: "Diamond", isCorrect: false, translations: [{ language: "zh", content: "菱形" }, { language: "es", content: "Rombo" }] },
            { content: "Circle", isCorrect: false, translations: [{ language: "zh", content: "圆形" }, { language: "es", content: "Círculo" }] },
            { content: "Rectangle", isCorrect: false, translations: [{ language: "zh", content: "矩形" }, { language: "es", content: "Rectángulo" }] },
          ],
        },

        {
          content: "What color and shape are most warning signs in Pennsylvania?",
          explanation: "Most warning signs are diamond-shaped with black symbols or words on a YELLOW background. They alert drivers to conditions or hazards ahead. Work zone warning signs are an exception — they use an ORANGE background instead of yellow.",
          handbookSection: "Signals, Signs & Markings — Sign Colors",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州大多数警告标志是什么颜色和形状？",
              explanation: "大多数警告标志是菱形，黄色背景上印有黑色符号或文字。它们提醒驾驶员注意前方状况或危险。施工区警告标志是个例外——它们使用橙色背景而非黄色。",
            },
            {
              language: "es",
              content: "¿De qué color y forma son la mayoría de las señales de advertencia en Pennsylvania?",
              explanation: "La mayoría de las señales de advertencia tienen forma de rombo con símbolos o palabras negras sobre fondo AMARILLO. Las señales de advertencia de zona de trabajo son una excepción — usan fondo NARANJA.",
            },
          ],
          options: [
            { content: "Yellow diamond with black symbols", isCorrect: true, translations: [{ language: "zh", content: "黄色菱形，黑色符号" }, { language: "es", content: "Rombo amarillo con símbolos negros" }] },
            { content: "Orange diamond with black symbols", isCorrect: false, translations: [{ language: "zh", content: "橙色菱形，黑色符号" }, { language: "es", content: "Rombo naranja con símbolos negros" }] },
            { content: "White rectangle with black text", isCorrect: false, translations: [{ language: "zh", content: "白色矩形，黑色文字" }, { language: "es", content: "Rectángulo blanco con texto negro" }] },
            { content: "Green rectangle with white text", isCorrect: false, translations: [{ language: "zh", content: "绿色矩形，白色文字" }, { language: "es", content: "Rectángulo verde con texto blanco" }] },
          ],
        },

        {
          content: "What color are work zone signs, and what additional rule applies to drivers passing through a work zone?",
          explanation: "Work zone signs are ORANGE with black lettering (diamond-shaped). Drivers must turn on their headlights when traveling through a work zone, no matter what time of day. If pulled over and not using headlights in a work zone, there is an additional $25 fine.",
          handbookSection: "Signals, Signs & Markings — Work Zones",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "施工区标志是什么颜色？通过施工区时有什么额外规定？",
              explanation: "施工区标志为橙色，黑色文字（菱形）。无论何时，驾驶员通过施工区时必须开启车灯。若在施工区被拦停时未开车灯，将额外罚款25美元。",
            },
            {
              language: "es",
              content: "¿De qué color son las señales de zona de trabajo y qué regla adicional se aplica al pasar por una zona de trabajo?",
              explanation: "Las señales de zona de trabajo son NARANJA con letras negras (en forma de rombo). Los conductores deben encender sus faros al viajar por una zona de trabajo, sin importar la hora del día. Hay una multa adicional de $25 si no usa los faros en una zona de trabajo.",
            },
          ],
          options: [
            { content: "Orange — headlights must be on at all times", isCorrect: true, translations: [{ language: "zh", content: "橙色——任何时候都必须开车灯" }, { language: "es", content: "Naranja — los faros deben estar encendidos en todo momento" }] },
            { content: "Orange — reduce speed by half", isCorrect: false, translations: [{ language: "zh", content: "橙色——速度减半" }, { language: "es", content: "Naranja — reduzca la velocidad a la mitad" }] },
            { content: "Yellow — headlights must be on at night only", isCorrect: false, translations: [{ language: "zh", content: "黄色——只需夜间开车灯" }, { language: "es", content: "Amarillo — los faros solo deben estar encendidos de noche" }] },
            { content: "Red — always come to a complete stop", isCorrect: false, translations: [{ language: "zh", content: "红色——始终完全停车" }, { language: "es", content: "Rojo — siempre deténgase completamente" }] },
          ],
        },

        {
          content: "On an interstate highway, what does an even first digit on a three-digit route number indicate?",
          explanation: "A three-digit interstate route with an EVEN first digit (e.g., I-276) is a loop or beltway that connects two points on the same parent interstate. A three-digit route with an ODD first digit (e.g., I-180) is a spur route that connects at only one end, often leading into a city center.",
          handbookSection: "Signals, Signs & Markings — Guide Signs",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "在州际公路上，三位数路线编号的第一位为偶数表示什么？",
              explanation: "第一位为偶数的三位数州际路线（如I-276）是连接同一主干州际公路两点的环形公路或绕城公路。第一位为奇数的三位数路线（如I-180）是支线，仅在一端连接，通常通向市中心。",
            },
            {
              language: "es",
              content: "En una autopista interestatal, ¿qué indica un primer dígito par en un número de ruta de tres dígitos?",
              explanation: "Una ruta interestatal de tres dígitos con un primer dígito PAR (por ejemplo, I-276) es un bucle o circunvalación que conecta dos puntos en la misma interestatal principal. Un primer dígito IMPAR (por ejemplo, I-180) indica una ruta de ramal que conecta en un solo extremo, a menudo hacia el centro de una ciudad.",
            },
          ],
          options: [
            { content: "A loop or beltway connecting major highways", isCorrect: true, translations: [{ language: "zh", content: "连接主要公路的环形公路或绕城公路" }, { language: "es", content: "Un bucle o circunvalación que conecta autopistas principales" }] },
            { content: "A spur route leading into a city center", isCorrect: false, translations: [{ language: "zh", content: "通向市中心的支线" }, { language: "es", content: "Una ruta de ramal que lleva al centro de la ciudad" }] },
            { content: "An east-west route", isCorrect: false, translations: [{ language: "zh", content: "东西方向路线" }, { language: "es", content: "Una ruta de este a oeste" }] },
            { content: "A toll road", isCorrect: false, translations: [{ language: "zh", content: "收费公路" }, { language: "es", content: "Una carretera de peaje" }] },
          ],
        },

        // ── Pavement Markings ─────────────────────────────────────────────────
        {
          content: "What do yellow center lines on a road indicate?",
          explanation: "Yellow lines divide traffic traveling in OPPOSITE directions. They are used to mark the center of two-lane roads and the left edge of divided highways, one-way streets, and ramps. White lines divide lanes of traffic going in the SAME direction.",
          handbookSection: "Signals, Signs & Markings — Pavement Markings",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "道路上的黄色中心线表示什么？",
              explanation: "黄色线划分行驶方向相反的交通流。用于标记双车道道路的中心线，以及分隔公路、单行道和匝道的左侧边缘。白色线划分行驶方向相同的车道。",
            },
            {
              language: "es",
              content: "¿Qué indican las líneas centrales amarillas en una carretera?",
              explanation: "Las líneas amarillas dividen el tráfico que viaja en DIRECCIONES OPUESTAS. Se usan para marcar el centro de las carreteras de dos carriles y el borde izquierdo de las autopistas divididas, calles de sentido único y rampas.",
            },
          ],
          options: [
            { content: "Traffic traveling in opposite directions", isCorrect: true, translations: [{ language: "zh", content: "行驶方向相反的交通流" }, { language: "es", content: "Tráfico que viaja en direcciones opuestas" }] },
            { content: "Traffic traveling in the same direction", isCorrect: false, translations: [{ language: "zh", content: "行驶方向相同的交通流" }, { language: "es", content: "Tráfico que viaja en la misma dirección" }] },
            { content: "The edge of the road", isCorrect: false, translations: [{ language: "zh", content: "道路边缘" }, { language: "es", content: "El borde de la carretera" }] },
            { content: "A bike lane boundary", isCorrect: false, translations: [{ language: "zh", content: "自行车道边界" }, { language: "es", content: "Un límite de carril para bicicletas" }] },
          ],
        },

        {
          content: "What does a double solid yellow center line mean?",
          explanation: "A double solid yellow center line means passing is NOT allowed from EITHER direction, even if conditions seem safe. This marking is used on roads where passing is considered too dangerous regardless of traffic conditions.",
          handbookSection: "Signals, Signs & Markings — Pavement Markings",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "双实黄色中心线意味着什么？",
              explanation: "双实黄色中心线意味着任何方向都不允许超车，即使条件看似安全。此标线用于超车被认为危险的道路，无论交通状况如何。",
            },
            {
              language: "es",
              content: "¿Qué significa una doble línea central amarilla sólida?",
              explanation: "Una doble línea central amarilla sólida significa que no se permite el adelantamiento en NINGUNA dirección, incluso si las condiciones parecen seguras. Esta marca se usa en carreteras donde adelantar se considera demasiado peligroso.",
            },
          ],
          options: [
            { content: "Passing is not allowed in either direction", isCorrect: true, translations: [{ language: "zh", content: "任何方向都不允许超车" }, { language: "es", content: "No se permite adelantar en ninguna dirección" }] },
            { content: "Passing is allowed if safe", isCorrect: false, translations: [{ language: "zh", content: "如果安全可以超车" }, { language: "es", content: "Se permite adelantar si es seguro" }] },
            { content: "Passing is allowed only from the left lane", isCorrect: false, translations: [{ language: "zh", content: "只允许从左车道超车" }, { language: "es", content: "Solo se permite adelantar desde el carril izquierdo" }] },
            { content: "The road ahead narrows", isCorrect: false, translations: [{ language: "zh", content: "前方道路变窄" }, { language: "es", content: "La carretera se estrecha adelante" }] },
          ],
        },

        {
          content: "When there is a combination of one solid yellow line and one broken yellow line in the center of the road, when may you pass?",
          explanation: "When the road has a combination of a solid yellow and broken yellow center line, you MAY pass only if the BROKEN line is on YOUR side of the road and safe conditions exist. If the SOLID yellow line is on your side, you may NOT pass. The broken line indicates which side has passing permission.",
          handbookSection: "Signals, Signs & Markings — Pavement Markings",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "当道路中央同时有一条实黄线和一条虚黄线时，何时可以超车？",
              explanation: "当道路有实黄线和虚黄线组合时，只有当虚线在您这一侧且条件安全时，才可以超车。如果实黄线在您这一侧，则不允许超车。虚线表明哪一侧有超车许可。",
            },
            {
              language: "es",
              content: "Cuando hay una combinación de una línea amarilla sólida y una línea amarilla discontinua en el centro de la carretera, ¿cuándo puede adelantar?",
              explanation: "Cuando la carretera tiene una combinación de línea central amarilla sólida y discontinua, PUEDE adelantar solo si la línea DISCONTINUA está en SU lado de la carretera y existen condiciones seguras. Si la línea SÓLIDA amarilla está en su lado, NO puede adelantar.",
            },
          ],
          options: [
            { content: "Only when the broken line is on your side of the road", isCorrect: true, translations: [{ language: "zh", content: "只有当虚线在您这一侧时" }, { language: "es", content: "Solo cuando la línea discontinua está en su lado de la carretera" }] },
            { content: "Only when the solid line is on your side of the road", isCorrect: false, translations: [{ language: "zh", content: "只有当实线在您这一侧时" }, { language: "es", content: "Solo cuando la línea sólida está en su lado de la carretera" }] },
            { content: "Passing is never allowed with this marking", isCorrect: false, translations: [{ language: "zh", content: "此标线永远不允许超车" }, { language: "es", content: "Nunca se permite adelantar con esta marca" }] },
            { content: "Passing is allowed from both sides if traffic is clear", isCorrect: false, translations: [{ language: "zh", content: "如果交通畅通，两侧都可以超车" }, { language: "es", content: "Se permite adelantar desde ambos lados si el tráfico está despejado" }] },
          ],
        },

        {
          content: "In Pennsylvania, you must NEVER stop your vehicle on a railroad track, even if no train appears to be coming. If traffic is backed up near a crossing, what must you do?",
          explanation: "You must never stop your vehicle on a railroad track for any reason. If traffic is backed up due to a traffic signal, stop sign, or any other reason, you must make sure your vehicle is entirely clear of the railroad tracks before stopping. Getting stuck on tracks can be fatal.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，即使没有列车驶来，也绝对不能将车停在铁路轨道上。如果铁路道口附近交通拥堵，应怎么做？",
              explanation: "任何情况下都不能将车停在铁路轨道上。如果因交通信号灯、停车标志或其他原因造成交通拥堵，必须确保车辆完全越过铁路轨道后再停车。被困在轨道上可能致命。",
            },
            {
              language: "es",
              content: "En Pennsylvania, nunca debe detener su vehículo en una vía de tren, incluso si no parece venir ningún tren. Si el tráfico está congestionado cerca de un cruce, ¿qué debe hacer?",
              explanation: "Nunca debe detener su vehículo en una vía de tren por ningún motivo. Si el tráfico está congestionado debido a un semáforo, señal de alto u otra razón, debe asegurarse de que su vehículo esté completamente fuera de las vías antes de detenerse.",
            },
          ],
          options: [
            { content: "Wait before the crossing until you can clear the tracks completely", isCorrect: true, translations: [{ language: "zh", content: "在道口前等候，直到能完全越过轨道再前进" }, { language: "es", content: "Espere antes del cruce hasta que pueda cruzar las vías completamente" }] },
            { content: "Drive onto the tracks quickly and wait on the other side", isCorrect: false, translations: [{ language: "zh", content: "快速驶上轨道并在另一侧等待" }, { language: "es", content: "Conduzca rápidamente sobre las vías y espere al otro lado" }] },
            { content: "Stop on the tracks briefly if no train is visible", isCorrect: false, translations: [{ language: "zh", content: "如果看不见列车，可以短暂停在轨道上" }, { language: "es", content: "Deténgase brevemente en las vías si no hay tren visible" }] },
            { content: "Cross the tracks at high speed to minimize time on them", isCorrect: false, translations: [{ language: "zh", content: "高速穿越轨道以减少在其上的时间" }, { language: "es", content: "Cruce las vías a alta velocidad para minimizar el tiempo en ellas" }] },
          ],
        },

        {
          content: "What is the general rule about crossing broken versus solid traffic lines?",
          explanation: "The general rule in Pennsylvania is: broken traffic lines CAN be crossed (when it is safe to do so), while solid lines CANNOT be crossed — except when making a turn. For example, a broken white line between lanes means you may change lanes, but a solid white line means you should stay in your lane.",
          handbookSection: "Signals, Signs & Markings — Pavement Markings",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "关于穿越虚线与实线的一般规则是什么？",
              explanation: "宾夕法尼亚州的一般规则是：虚线可以穿越（在安全的情况下），而实线不能穿越——转弯时除外。例如，车道间的白色虚线意味着可以换道，但白色实线意味着应保持在本车道。",
            },
            {
              language: "es",
              content: "¿Cuál es la regla general sobre cruzar líneas de tráfico discontinuas versus sólidas?",
              explanation: "La regla general en Pennsylvania es: las líneas discontinuas PUEDEN cruzarse (cuando es seguro hacerlo), mientras que las líneas sólidas NO pueden cruzarse, excepto al girar. Por ejemplo, una línea blanca discontinua entre carriles significa que puede cambiar de carril, pero una línea blanca sólida significa que debe permanecer en su carril.",
            },
          ],
          options: [
            { content: "Broken lines may be crossed; solid lines may not (except when turning)", isCorrect: true, translations: [{ language: "zh", content: "虚线可以穿越；实线不能穿越（转弯时除外）" }, { language: "es", content: "Las líneas discontinuas pueden cruzarse; las sólidas no (excepto al girar)" }] },
            { content: "Solid lines may be crossed; broken lines may not", isCorrect: false, translations: [{ language: "zh", content: "实线可以穿越；虚线不能穿越" }, { language: "es", content: "Las líneas sólidas pueden cruzarse; las discontinuas no" }] },
            { content: "Both solid and broken lines may be crossed if safe", isCorrect: false, translations: [{ language: "zh", content: "如果安全，实线和虚线都可以穿越" }, { language: "es", content: "Tanto las líneas sólidas como las discontinuas pueden cruzarse si es seguro" }] },
            { content: "Neither solid nor broken lines may ever be crossed", isCorrect: false, translations: [{ language: "zh", content: "实线和虚线都不能穿越" }, { language: "es", content: "Ni las líneas sólidas ni las discontinuas pueden cruzarse nunca" }] },
          ],
        },

        {
          content: "What does a steady green arrow signal mean?",
          explanation: "A steady green arrow means you may proceed in the direction of the arrow — it is a protected turn, meaning oncoming traffic is stopped by a red light. You still must yield to pedestrians and any vehicles already in the intersection. A green arrow provides more protection than a plain green light for turning movements.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "稳定绿色箭头信号意味着什么？",
              explanation: "稳定绿色箭头表示您可以按箭头方向通行——这是受保护转弯，即对向交通已被红灯停下。您仍然必须礼让行人及已在路口的车辆。绿色箭头比普通绿灯为转弯提供更多保护。",
            },
            {
              language: "es",
              content: "¿Qué significa una señal de flecha verde fija?",
              explanation: "Una flecha verde fija significa que puede proceder en la dirección de la flecha — es un giro protegido, lo que significa que el tráfico que se aproxima está detenido por un semáforo en rojo. Aún debe ceder el paso a los peatones y a los vehículos que ya están en la intersección.",
            },
          ],
          options: [
            { content: "You may turn in the direction of the arrow — oncoming traffic is stopped", isCorrect: true, translations: [{ language: "zh", content: "您可以按箭头方向转弯——对向交通已停下" }, { language: "es", content: "Puede girar en la dirección de la flecha — el tráfico de frente está detenido" }] },
            { content: "Yield to oncoming traffic before turning", isCorrect: false, translations: [{ language: "zh", content: "转弯前礼让对向车辆" }, { language: "es", content: "Ceda el paso al tráfico de frente antes de girar" }] },
            { content: "Stop and wait for a circular green before turning", isCorrect: false, translations: [{ language: "zh", content: "停车等待圆形绿灯再转弯" }, { language: "es", content: "Deténgase y espere una luz verde circular antes de girar" }] },
            { content: "A green arrow has the same meaning as a solid green light", isCorrect: false, translations: [{ language: "zh", content: "绿色箭头与实心绿灯含义相同" }, { language: "es", content: "Una flecha verde tiene el mismo significado que una luz verde sólida" }] },
          ],
        },

        {
          content: "What does a flashing yellow traffic signal mean?",
          explanation: "A flashing yellow light means CAUTION. Slow down and proceed with care through the intersection. You do not have to stop for a flashing yellow light, but you must check for cross traffic and be prepared to yield. Flashing yellow lights are often used at intersections with lower traffic volume or where extra caution is warranted.",
          handbookSection: "Signals, Signs & Markings — Traffic Signals",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "闪烁黄色交通信号意味着什么？",
              explanation: "闪烁黄灯意味着注意。减速，谨慎通过路口。闪烁黄灯不需要停车，但必须注意横向交通并准备好礼让。闪烁黄灯通常用于交通量较低或需要格外注意的路口。",
            },
            {
              language: "es",
              content: "¿Qué significa una señal de tráfico amarilla intermitente?",
              explanation: "Una luz amarilla intermitente significa PRECAUCIÓN. Reduzca la velocidad y proceda con cuidado a través de la intersección. No tiene que detenerse ante una luz amarilla intermitente, pero debe verificar el tráfico cruzado y estar preparado para ceder el paso.",
            },
          ],
          options: [
            { content: "Slow down and proceed with caution", isCorrect: true, translations: [{ language: "zh", content: "减速，谨慎通行" }, { language: "es", content: "Reduzca la velocidad y proceda con precaución" }] },
            { content: "Stop completely — treat it like a red light", isCorrect: false, translations: [{ language: "zh", content: "完全停车——视同红灯" }, { language: "es", content: "Deténgase completamente — trátelo como una luz roja" }] },
            { content: "Accelerate to clear the intersection quickly", isCorrect: false, translations: [{ language: "zh", content: "加速快速通过路口" }, { language: "es", content: "Acelere para cruzar la intersección rápidamente" }] },
            { content: "Yield only to vehicles approaching from the left", isCorrect: false, translations: [{ language: "zh", content: "只礼让从左侧来的车辆" }, { language: "es", content: "Ceda el paso solo a los vehículos que se aproximan por la izquierda" }] },
          ],
        },

        {
          content: "What type of information do BLUE highway signs typically provide?",
          explanation: "Blue signs on highways provide motorist services information — such as the location of gas stations, food, lodging, hospitals, and rest areas at upcoming exits. When you see a blue sign, it tells you what services are available nearby. This helps drivers plan stops without having to exit at every interchange.",
          handbookSection: "Signals, Signs & Markings — Sign Colors",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "蓝色高速公路标志通常提供什么类型的信息？",
              explanation: "高速公路上的蓝色标志提供驾驶人服务信息——例如前方出口附近的加油站、餐厅、住宿、医院和休息区位置。当您看到蓝色标志时，它告诉您附近有哪些服务可用。",
            },
            {
              language: "es",
              content: "¿Qué tipo de información proporcionan típicamente las señales de carretera AZULES?",
              explanation: "Las señales azules en las autopistas proporcionan información de servicios para automovilistas, como la ubicación de gasolineras, comida, alojamiento, hospitales y áreas de descanso en las próximas salidas. Cuando ve una señal azul, le indica qué servicios están disponibles cerca.",
            },
          ],
          options: [
            { content: "Motorist services such as gas, food, lodging, and hospitals", isCorrect: true, translations: [{ language: "zh", content: "驾驶人服务，如加油站、餐厅、住宿和医院" }, { language: "es", content: "Servicios para automovilistas como gasolina, comida, alojamiento y hospitales" }] },
            { content: "Regulatory rules such as speed limits and turn restrictions", isCorrect: false, translations: [{ language: "zh", content: "法规规则，如速度限制和转弯限制" }, { language: "es", content: "Reglas de tránsito como límites de velocidad y restricciones de giro" }] },
            { content: "Warning of hazards ahead such as curves and crossings", isCorrect: false, translations: [{ language: "zh", content: "前方危险警告，如弯道和道口" }, { language: "es", content: "Advertencia de peligros como curvas y cruces" }] },
            { content: "Points of interest and tourist attractions only", isCorrect: false, translations: [{ language: "zh", content: "仅景点和旅游景点" }, { language: "es", content: "Solo puntos de interés y atracciones turísticas" }] },
          ],
        },

        {
          content: "What shape is a YIELD sign, and what does it require you to do?",
          explanation: "A yield sign is a downward-pointing triangle (inverted triangle) with a red border and white interior. It requires you to slow down and give the right-of-way to traffic in the intersection or roadway you are entering. You must stop if necessary. Unlike a stop sign, you are not required to come to a full stop if the way is clear.",
          handbookSection: "Signals, Signs & Markings — Sign Shapes",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "让行标志是什么形状，它要求您做什么？",
              explanation: "让行标志是一个向下的三角形（倒三角形），有红色边框和白色内部。它要求您减速，并将优先通行权让给已在路口或您将进入的路段上的交通。必要时须停车。与停止标志不同，如果道路畅通，不需要完全停车。",
            },
            {
              language: "es",
              content: "¿Qué forma tiene una señal de CEDER EL PASO y qué le exige hacer?",
              explanation: "Una señal de ceder el paso es un triángulo invertido (que apunta hacia abajo) con borde rojo e interior blanco. Le exige reducir la velocidad y ceder el derecho de paso al tráfico en la intersección o vía que va a entrar. Debe detenerse si es necesario. A diferencia de una señal de stop, no está obligado a detenerse completamente si el camino está despejado.",
            },
          ],
          options: [
            { content: "Downward-pointing triangle — slow down and give right-of-way, stop if needed", isCorrect: true, translations: [{ language: "zh", content: "向下的三角形——减速并让行，必要时停车" }, { language: "es", content: "Triángulo invertido — reduzca la velocidad y ceda el paso, detenga si es necesario" }] },
            { content: "Octagon — come to a full stop before proceeding", isCorrect: false, translations: [{ language: "zh", content: "八边形——完全停车再通行" }, { language: "es", content: "Octágono — deténgase completamente antes de proceder" }] },
            { content: "Diamond shape — warning of intersection ahead", isCorrect: false, translations: [{ language: "zh", content: "菱形——前方路口警告" }, { language: "es", content: "Forma de diamante — advertencia de intersección adelante" }] },
            { content: "Circle — railroad crossing ahead", isCorrect: false, translations: [{ language: "zh", content: "圆形——前方铁路道口" }, { language: "es", content: "Círculo — cruce de ferrocarril adelante" }] },
          ],
        },

      ], // end Topic 1 questions
    }, // end Topic 1

    // ─── TOPIC 2: CHOOSING SAFETY FIRST (Ch.3a) ────────────────────────────────
    {
      name: "Choosing Safety First",
      nameEn: "Choosing Safety First",
      description: "Seat belts, child restraints, airbags, distracted driving prevention, and sharing the road safely",
      handbookUrl: `${BASE}/choosing-safety-first`,
      translations: [
        { language: "zh", name: "安全驾驶优先", description: "安全带、儿童约束装置、安全气囊、分心驾驶预防及安全共享道路" },
        { language: "es", name: "Elegir la Seguridad Primero", description: "Cinturones de seguridad, asientos para niños, airbags, prevención del manejo distraído y compartir la vía de forma segura" },
      ],
      questions: [

        {
          content: "Under Pennsylvania's seat belt law, who is required to wear a seat belt in the front seat?",
          explanation: "Pennsylvania law requires all front-seat occupants to wear seat belts. This includes the driver and all front-seat passengers. All passengers ages 8–17 must wear a seat belt regardless of seating position. Failure to comply results in a $10 fine.",
          handbookSection: "Choosing Safety First — Seat Belts",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州安全带法律，谁必须在前排座位系安全带？",
              explanation: "宾夕法尼亚州法律要求所有前排乘员系安全带，包括驾驶员和所有前排乘客。8至17岁的所有乘客无论坐在哪个位置都必须系安全带。不遵守将被罚款10美元。",
            },
            {
              language: "es",
              content: "Según la ley de cinturón de seguridad de Pennsylvania, ¿quién debe usar cinturón de seguridad en el asiento delantero?",
              explanation: "La ley de Pennsylvania requiere que todos los ocupantes del asiento delantero usen cinturón de seguridad, incluido el conductor y todos los pasajeros delanteros. Todos los pasajeros de 8 a 17 años deben usar cinturón sin importar su posición. El incumplimiento resulta en una multa de $10.",
            },
          ],
          options: [
            { content: "The driver and all front-seat passengers", isCorrect: true, translations: [{ language: "zh", content: "驾驶员和所有前排乘客" }, { language: "es", content: "El conductor y todos los pasajeros del asiento delantero" }] },
            { content: "The driver only", isCorrect: false, translations: [{ language: "zh", content: "仅驾驶员" }, { language: "es", content: "Solo el conductor" }] },
            { content: "All occupants in all seats", isCorrect: false, translations: [{ language: "zh", content: "所有座位上的所有乘员" }, { language: "es", content: "Todos los ocupantes en todos los asientos" }] },
            { content: "Adults only — children are exempt", isCorrect: false, translations: [{ language: "zh", content: "仅成人——儿童豁免" }, { language: "es", content: "Solo adultos — los niños están exentos" }] },
          ],
        },

        {
          content: "A child under age 4 must be secured in what type of restraint?",
          explanation: "Children under age 4 must be secured in a child safety seat appropriate for their size and weight. Infants and young toddlers should use a rear-facing car seat in the back seat. A child restraint must meet federal safety standards.",
          handbookSection: "Choosing Safety First — Child Restraints",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "4岁以下的儿童必须使用什么类型的约束装置？",
              explanation: "4岁以下儿童必须使用适合其身材和体重的儿童安全座椅。婴儿和幼儿应在后座使用后向式儿童安全座椅。儿童约束装置必须符合联邦安全标准。",
            },
            {
              language: "es",
              content: "¿En qué tipo de sistema de retención debe estar asegurado un niño menor de 4 años?",
              explanation: "Los niños menores de 4 años deben estar asegurados en un asiento de seguridad infantil apropiado para su talla y peso. Los bebés y niños pequeños deben usar un asiento orientado hacia atrás en el asiento trasero. El sistema de retención debe cumplir con los estándares federales de seguridad.",
            },
          ],
          options: [
            { content: "A child safety seat (rear-facing for infants)", isCorrect: true, translations: [{ language: "zh", content: "儿童安全座椅（婴儿使用后向式）" }, { language: "es", content: "Un asiento de seguridad infantil (orientado hacia atrás para bebés)" }] },
            { content: "A booster seat with seat belt", isCorrect: false, translations: [{ language: "zh", content: "配有安全带的增高座椅" }, { language: "es", content: "Un asiento elevador con cinturón de seguridad" }] },
            { content: "A regular seat belt is sufficient", isCorrect: false, translations: [{ language: "zh", content: "普通安全带即可" }, { language: "es", content: "Un cinturón de seguridad normal es suficiente" }] },
            { content: "No restraint is required under age 4", isCorrect: false, translations: [{ language: "zh", content: "4岁以下不需要约束装置" }, { language: "es", content: "No se requiere ningún sistema de retención para menores de 4 años" }] },
          ],
        },

        {
          content: "At what age range must a child use a booster seat in Pennsylvania?",
          explanation: "Children ages 4–7 must use a booster seat with a seat belt. A booster seat raises the child so the adult seat belt fits properly across the chest and lap. Once children outgrow the booster (typically around age 8 or when the seat belt fits properly), they may use just a seat belt.",
          handbookSection: "Choosing Safety First — Child Restraints",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，哪个年龄段的儿童必须使用增高座椅？",
              explanation: "4至7岁的儿童必须使用配有安全带的增高座椅。增高座椅将儿童抬高，使成人安全带能正确横跨胸部和大腿。一旦儿童不再需要增高座椅（通常约8岁或安全带合适时），可以只使用安全带。",
            },
            {
              language: "es",
              content: "¿En qué rango de edad debe un niño usar un asiento elevador en Pennsylvania?",
              explanation: "Los niños de 4 a 7 años deben usar un asiento elevador con cinturón de seguridad. Un asiento elevador levanta al niño para que el cinturón de seguridad para adultos quede correctamente sobre el pecho y el regazo.",
            },
          ],
          options: [
            { content: "Ages 4–7", isCorrect: true, translations: [{ language: "zh", content: "4至7岁" }, { language: "es", content: "De 4 a 7 años" }] },
            { content: "Ages 2–5", isCorrect: false, translations: [{ language: "zh", content: "2至5岁" }, { language: "es", content: "De 2 a 5 años" }] },
            { content: "Ages 5–10", isCorrect: false, translations: [{ language: "zh", content: "5至10岁" }, { language: "es", content: "De 5 a 10 años" }] },
            { content: "Ages 3–8", isCorrect: false, translations: [{ language: "zh", content: "3至8岁" }, { language: "es", content: "De 3 a 8 años" }] },
          ],
        },

        {
          content: "How much space should you keep between your body and a steering wheel airbag for maximum safety?",
          explanation: "You should keep at least 10 inches between the center of the steering wheel (where the airbag is) and your breastbone. Sitting too close increases the risk of injury from airbag deployment. You should also never place your hands at the 12 o'clock position on the wheel.",
          handbookSection: "Choosing Safety First — Airbags",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "为了最大程度保证安全，您的身体与方向盘安全气囊之间应保持多大距离？",
              explanation: "方向盘中央（安全气囊位置）与您的胸骨之间至少应保持10英寸的距离。坐得太近会增加安全气囊弹出时受伤的风险。也不应将手放在方向盘12点钟位置。",
            },
            {
              language: "es",
              content: "¿Cuánto espacio debe mantener entre su cuerpo y el airbag del volante para máxima seguridad?",
              explanation: "Debe mantener al menos 10 pulgadas entre el centro del volante (donde está el airbag) y su esternón. Sentarse demasiado cerca aumenta el riesgo de lesiones por el despliegue del airbag.",
            },
          ],
          options: [
            { content: "At least 10 inches", isCorrect: true, translations: [{ language: "zh", content: "至少10英寸" }, { language: "es", content: "Al menos 10 pulgadas" }] },
            { content: "At least 6 inches", isCorrect: false, translations: [{ language: "zh", content: "至少6英寸" }, { language: "es", content: "Al menos 6 pulgadas" }] },
            { content: "At least 15 inches", isCorrect: false, translations: [{ language: "zh", content: "至少15英寸" }, { language: "es", content: "Al menos 15 pulgadas" }] },
            { content: "At least 3 inches", isCorrect: false, translations: [{ language: "zh", content: "至少3英寸" }, { language: "es", content: "Al menos 3 pulgadas" }] },
          ],
        },

        {
          content: "Which of the following is considered a PRIMARY offense for distracted driving in Pennsylvania?",
          explanation: "Using a hand-held phone to send texts or emails while driving is a PRIMARY offense in Pennsylvania — police can pull you over solely for that violation. The fine is $50. Reading, writing, or sending any message while driving is prohibited.",
          handbookSection: "Choosing Safety First — Distracted Driving",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "以下哪项在宾夕法尼亚州被视为分心驾驶的主要违法行为？",
              explanation: "驾驶时使用手持电话发送短信或电子邮件是宾夕法尼亚州的主要违法行为——警察可以仅因此违规将您拦截。罚款为50美元。驾驶时阅读、书写或发送任何消息均被禁止。",
            },
            {
              language: "es",
              content: "¿Cuál de los siguientes se considera una infracción PRIMARIA por conducción distraída en Pennsylvania?",
              explanation: "Usar un teléfono de mano para enviar mensajes de texto o correos electrónicos mientras se conduce es una infracción PRIMARIA en Pennsylvania — la policía puede detenerle únicamente por esa violación. La multa es de $50.",
            },
          ],
          options: [
            { content: "Texting or sending messages while driving", isCorrect: true, translations: [{ language: "zh", content: "驾驶时发送短信或消息" }, { language: "es", content: "Enviar mensajes de texto o mensajes mientras se conduce" }] },
            { content: "Eating while driving", isCorrect: false, translations: [{ language: "zh", content: "边开车边进食" }, { language: "es", content: "Comer mientras se conduce" }] },
            { content: "Talking on a hands-free phone", isCorrect: false, translations: [{ language: "zh", content: "使用免提电话通话" }, { language: "es", content: "Hablar por teléfono manos libres" }] },
            { content: "Adjusting the radio", isCorrect: false, translations: [{ language: "zh", content: "调节收音机" }, { language: "es", content: "Ajustar la radio" }] },
          ],
        },

        {
          content: "When sharing the road with a large truck, where are the truck's BLIND SPOTS (No-Zones) located?",
          explanation: "Large trucks have four major blind spots called No-Zones: directly in front (about 20 feet), directly behind (about 30 feet), on the right side (extends diagonally two lanes back), and on the left side (extends one lane back at an angle). If you can't see the truck driver in their mirrors, they can't see you.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "与大型卡车共享道路时，卡车的盲区（No-Zone）在哪里？",
              explanation: "大型卡车有四个主要盲区称为「No-Zone」：正前方（约20英尺）、正后方（约30英尺）、右侧（斜向延伸两个车道）和左侧（斜向延伸一个车道）。如果您看不到卡车司机的镜子中有他们，他们也看不到您。",
            },
            {
              language: "es",
              content: "Al compartir la carretera con un camión grande, ¿dónde están los PUNTOS CIEGOS (No-Zones) del camión?",
              explanation: "Los camiones grandes tienen cuatro puntos ciegos principales llamados No-Zones: directamente enfrente (unas 20 pies), directamente atrás (unas 30 pies), en el lado derecho (se extiende diagonalmente dos carriles atrás) y en el lado izquierdo (se extiende un carril atrás en ángulo).",
            },
          ],
          options: [
            { content: "Directly in front, behind, and on both sides", isCorrect: true, translations: [{ language: "zh", content: "正前方、正后方和两侧" }, { language: "es", content: "Directamente al frente, atrás y a ambos lados" }] },
            { content: "Only directly behind the truck", isCorrect: false, translations: [{ language: "zh", content: "仅在卡车正后方" }, { language: "es", content: "Solo directamente detrás del camión" }] },
            { content: "Only on the right side", isCorrect: false, translations: [{ language: "zh", content: "仅在右侧" }, { language: "es", content: "Solo en el lado derecho" }] },
            { content: "Large trucks have no blind spots with modern mirrors", isCorrect: false, translations: [{ language: "zh", content: "现代镜子让大型卡车没有盲区" }, { language: "es", content: "Los camiones grandes no tienen puntos ciegos con espejos modernos" }] },
          ],
        },

        {
          content: "When passing a bicycle rider on the road, how much clearance must you give?",
          explanation: "Pennsylvania law requires drivers to give bicycle riders a minimum of 4 feet of clearance when passing. This means you must move over or wait until you can pass with at least 4 feet of space between your vehicle and the bicycle. This law protects cyclists from the wind blast and close proximity of passing vehicles.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在路上超越自行车骑手时，您必须保留多少空间？",
              explanation: "宾夕法尼亚州法律要求驾驶员超越自行车骑手时，至少留出4英尺的间距。这意味着您必须让路，或等到您的车辆与自行车之间至少有4英尺空间时再超越。此法律保护骑手免受过往车辆的风压和近距离威胁。",
            },
            {
              language: "es",
              content: "Al adelantar a un ciclista en la carretera, ¿cuánto espacio debe dejar?",
              explanation: "La ley de Pennsylvania requiere que los conductores dejen un mínimo de 4 pies de espacio al adelantar a ciclistas. Esto significa que debe moverse o esperar hasta poder adelantar con al menos 4 pies de espacio entre su vehículo y la bicicleta.",
            },
          ],
          options: [
            { content: "At least 4 feet", isCorrect: true, translations: [{ language: "zh", content: "至少4英尺" }, { language: "es", content: "Al menos 4 pies" }] },
            { content: "At least 2 feet", isCorrect: false, translations: [{ language: "zh", content: "至少2英尺" }, { language: "es", content: "Al menos 2 pies" }] },
            { content: "At least 3 feet", isCorrect: false, translations: [{ language: "zh", content: "至少3英尺" }, { language: "es", content: "Al menos 3 pies" }] },
            { content: "At least 6 feet", isCorrect: false, translations: [{ language: "zh", content: "至少6英尺" }, { language: "es", content: "Al menos 6 pies" }] },
          ],
        },

        {
          content: "What is the Steer Clear law and what is the minimum fine for a first offense?",
          explanation: "Pennsylvania's Steer Clear law requires drivers to move over or slow down when passing emergency vehicles, tow trucks, and PennDOT vehicles stopped on the side of the road with lights flashing. If possible, you must vacate the lane closest to them. If not possible, you must slow down. The minimum fine for a first offense is $250.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州的「Steer Clear」法律规定什么？首次违规的最低罚款是多少？",
              explanation: "宾夕法尼亚州的「Steer Clear」法律要求驾驶员在经过停在路边并开启闪光灯的紧急车辆、拖车和宾州交通部车辆时，移入另一车道或减速。如果可能，必须离开距其最近的车道；如果不可能，必须减速。首次违规最低罚款250美元。",
            },
            {
              language: "es",
              content: "¿Qué es la ley Steer Clear y cuál es la multa mínima por una primera infracción?",
              explanation: "La ley Steer Clear de Pennsylvania requiere que los conductores se cambien de carril o reduzcan la velocidad al pasar vehículos de emergencia, grúas y vehículos de PennDOT detenidos al costado de la carretera con luces intermitentes. La multa mínima por una primera infracción es de $250.",
            },
          ],
          options: [
            { content: "Move over or slow down when passing stopped emergency vehicles — $250 minimum fine", isCorrect: true, translations: [{ language: "zh", content: "经过停靠的紧急车辆时移道或减速——最低罚款250美元" }, { language: "es", content: "Cambiarse de carril o reducir la velocidad al pasar vehículos de emergencia detenidos — multa mínima de $250" }] },
            { content: "Always stop completely behind emergency vehicles — $100 minimum fine", isCorrect: false, translations: [{ language: "zh", content: "始终完全停在紧急车辆后方——最低罚款100美元" }, { language: "es", content: "Siempre detenerse completamente detrás de los vehículos de emergencia — multa mínima de $100" }] },
            { content: "Flash your lights when approaching emergency vehicles — $50 minimum fine", isCorrect: false, translations: [{ language: "zh", content: "接近紧急车辆时闪烁车灯——最低罚款50美元" }, { language: "es", content: "Destellar las luces al acercarse a vehículos de emergencia — multa mínima de $50" }] },
            { content: "Honk your horn and maintain speed past emergency vehicles — no fine", isCorrect: false, translations: [{ language: "zh", content: "鸣喇叭并保持速度经过紧急车辆——无罚款" }, { language: "es", content: "Tocar el claxon y mantener la velocidad al pasar vehículos de emergencia — sin multa" }] },
          ],
        },

        {
          content: "How far from a stopped school bus with flashing red lights must you stop your vehicle?",
          explanation: "You must stop at least 10 feet from a school bus when its red warning lights are flashing and the stop arm is extended. This applies on ALL roads, including multi-lane roads. Passing a stopped school bus results in 5 points on your record and a 60-day license suspension.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在闪烁红色灯光的停靠校车前，您必须在距离多远处停车？",
              explanation: "当校车的红色警示灯闪烁且停车臂伸出时，您必须在距离校车至少10英尺处停车。这适用于所有道路，包括多车道道路。超越停靠校车将在驾驶记录上累计5分并吊销驾照60天。",
            },
            {
              language: "es",
              content: "¿A qué distancia de un autobús escolar detenido con luces rojas intermitentes debe detener su vehículo?",
              explanation: "Debe detenerse al menos a 10 pies de un autobús escolar cuando sus luces de advertencia rojas están intermitentes y el brazo de stop está extendido. Esto se aplica en TODAS las carreteras. Pasar un autobús escolar detenido resulta en 5 puntos y una suspensión de licencia de 60 días.",
            },
          ],
          options: [
            { content: "At least 10 feet", isCorrect: true, translations: [{ language: "zh", content: "至少10英尺" }, { language: "es", content: "Al menos 10 pies" }] },
            { content: "At least 20 feet", isCorrect: false, translations: [{ language: "zh", content: "至少20英尺" }, { language: "es", content: "Al menos 20 pies" }] },
            { content: "At least 5 feet", isCorrect: false, translations: [{ language: "zh", content: "至少5英尺" }, { language: "es", content: "Al menos 5 pies" }] },
            { content: "At least 50 feet", isCorrect: false, translations: [{ language: "zh", content: "至少50英尺" }, { language: "es", content: "Al menos 50 pies" }] },
          ],
        },

        {
          content: "What is the penalty for passing a stopped school bus with flashing red lights?",
          explanation: "In Pennsylvania, illegally passing a stopped school bus results in 5 points added to your driving record and a 60-day license suspension. A second offense within 5 years results in 5 points and a one-year suspension. These severe penalties reflect the danger posed to children boarding or exiting the bus.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "超越闪烁红灯的停靠校车的处罚是什么？",
              explanation: "在宾夕法尼亚州，非法超越停靠的校车将在驾驶记录上累计5分，并吊销驾照60天。5年内再次违规将累计5分并吊销驾照一年。这些严厉处罚反映了对上下车儿童的危险。",
            },
            {
              language: "es",
              content: "¿Cuál es la penalización por pasar un autobús escolar detenido con luces rojas intermitentes?",
              explanation: "En Pennsylvania, pasar ilegalmente un autobús escolar detenido resulta en 5 puntos en su registro de conducción y una suspensión de licencia de 60 días. Una segunda infracción en 5 años resulta en 5 puntos y una suspensión de un año.",
            },
          ],
          options: [
            { content: "5 points and a 60-day license suspension", isCorrect: true, translations: [{ language: "zh", content: "5分及60天吊销驾照" }, { language: "es", content: "5 puntos y una suspensión de licencia de 60 días" }] },
            { content: "3 points and a $100 fine", isCorrect: false, translations: [{ language: "zh", content: "3分及100美元罚款" }, { language: "es", content: "3 puntos y una multa de $100" }] },
            { content: "A warning for the first offense", isCorrect: false, translations: [{ language: "zh", content: "首次违规给予警告" }, { language: "es", content: "Una advertencia por la primera infracción" }] },
            { content: "4 points and a 30-day suspension", isCorrect: false, translations: [{ language: "zh", content: "4分及30天暂扣驾照" }, { language: "es", content: "4 puntos y una suspensión de 30 días" }] },
          ],
        },

        {
          content: "How can you check if your tires have adequate tread depth using a penny?",
          explanation: "The penny test: insert a penny into a tire groove with Lincoln's head pointing down toward the tire. If you can see all of Lincoln's head, the tread is worn below the 2/32-inch minimum and the tire should be replaced. If Lincoln's head is partially covered by the tread, you have sufficient tread depth to drive safely.",
          handbookSection: "Choosing Safety First — Vehicle Maintenance",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "如何用一分钱硬币检查轮胎胎纹深度是否足够？",
              explanation: "一分钱测试：将一美分硬币插入轮胎沟槽，林肯头像朝向轮胎。如果可以看到林肯的整个头部，则胎纹已磨损至最低2/32英寸以下，应更换轮胎。如果胎纹部分遮住了林肯的头部，则胎纹深度足以安全驾驶。",
            },
            {
              language: "es",
              content: "¿Cómo puede verificar si sus neumáticos tienen suficiente profundidad de banda de rodadura usando un centavo?",
              explanation: "La prueba del centavo: inserte una moneda de un centavo en una ranura del neumático con la cabeza de Lincoln apuntando hacia el neumático. Si puede ver toda la cabeza de Lincoln, la banda de rodadura está desgastada por debajo del mínimo de 2/32 de pulgada y el neumático debe reemplazarse.",
            },
          ],
          options: [
            { content: "If Lincoln's entire head is visible, the tread is too worn — replace the tire", isCorrect: true, translations: [{ language: "zh", content: "如果林肯的整个头部可见，则胎纹过度磨损——需更换轮胎" }, { language: "es", content: "Si toda la cabeza de Lincoln es visible, la banda de rodadura está demasiado desgastada — reemplace el neumático" }] },
            { content: "If you can see Lincoln's shoulders, replace the tire", isCorrect: false, translations: [{ language: "zh", content: "如果可以看到林肯的肩膀，则更换轮胎" }, { language: "es", content: "Si puede ver los hombros de Lincoln, reemplace el neumático" }] },
            { content: "If the penny sinks completely into the tread, the tire is safe", isCorrect: false, translations: [{ language: "zh", content: "如果硬币完全沉入胎纹，则轮胎是安全的" }, { language: "es", content: "Si el centavo se hunde completamente en la banda de rodadura, el neumático es seguro" }] },
            { content: "Insert the penny with Lincoln's head facing up — if visible, tread is fine", isCorrect: false, translations: [{ language: "zh", content: "将硬币正面朝上插入——如果可见，胎纹状况良好" }, { language: "es", content: "Inserte el centavo con la cabeza de Lincoln hacia arriba — si es visible, la banda de rodadura está bien" }] },
          ],
        },

        {
          content: "When should you check your tire pressure for the most accurate reading?",
          explanation: "Tire pressure should be checked when tires are COLD — meaning the vehicle has been parked for at least 3 hours or driven less than 1 mile. Driving heats the air inside tires, causing pressure to increase temporarily by 4–6 psi. Checking when hot gives a falsely high reading. Always compare to the recommended pressure listed on the door jamb sticker, not the maximum on the tire sidewall.",
          handbookSection: "Choosing Safety First — Vehicle Maintenance",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "何时检查轮胎气压才能获得最准确的读数？",
              explanation: "应在轮胎冷时检查轮胎气压——即车辆已停放至少3小时或行驶不足1英里时。行驶会加热轮胎内的空气，使压力临时升高4至6 psi。热态检查会给出偏高的读数。始终与车门门框贴纸上的推荐气压比较，而不是轮胎侧壁上的最大值。",
            },
            {
              language: "es",
              content: "¿Cuándo debe verificar la presión de los neumáticos para obtener la lectura más precisa?",
              explanation: "La presión de los neumáticos debe verificarse cuando los neumáticos están FRÍOS — es decir, el vehículo ha estado estacionado durante al menos 3 horas o ha recorrido menos de 1 milla. Conducir calienta el aire dentro de los neumáticos, lo que hace que la presión aumente temporalmente en 4 a 6 psi.",
            },
          ],
          options: [
            { content: "When tires are cold — parked for at least 3 hours or driven less than 1 mile", isCorrect: true, translations: [{ language: "zh", content: "轮胎冷时——停放至少3小时或行驶不足1英里" }, { language: "es", content: "Cuando los neumáticos están fríos — estacionado al menos 3 horas o conducido menos de 1 milla" }] },
            { content: "After a highway drive while tires are warm", isCorrect: false, translations: [{ language: "zh", content: "高速行驶后轮胎热时" }, { language: "es", content: "Después de un viaje en autopista cuando los neumáticos están calientes" }] },
            { content: "Any time — temperature does not affect tire pressure readings", isCorrect: false, translations: [{ language: "zh", content: "任何时候——温度不影响轮胎气压读数" }, { language: "es", content: "En cualquier momento — la temperatura no afecta las lecturas de presión de los neumáticos" }] },
            { content: "Only when the tire pressure warning light is on", isCorrect: false, translations: [{ language: "zh", content: "只有当轮胎气压警告灯亮起时" }, { language: "es", content: "Solo cuando la luz de advertencia de presión de neumáticos está encendida" }] },
          ],
        },

        {
          content: "At what height should you adjust your head restraint for maximum safety?",
          explanation: "Head restraints (headrests) should be adjusted so the top of the restraint is at least as high as the top of your ears — approximately ear-level. This position provides the best protection against whiplash injury in a rear-end collision by limiting how far the head snaps backward. A restraint set too low can actually worsen neck injury.",
          handbookSection: "Choosing Safety First — Vehicle Safety Equipment",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "为了最大限度的安全，头枕应调整到什么高度？",
              explanation: "头枕应调整到顶部至少与耳朵顶部等高——大约在耳朵水平。这个位置在追尾碰撞中能最好地防止鞭打伤，因为它限制了头部向后弹的幅度。设置过低的头枕实际上可能加重颈部受伤。",
            },
            {
              language: "es",
              content: "¿A qué altura debe ajustar su apoyacabezas para máxima seguridad?",
              explanation: "Los apoyacabezas deben ajustarse para que la parte superior esté al menos a la altura de la parte superior de sus orejas — aproximadamente a nivel de las orejas. Esta posición proporciona la mejor protección contra lesiones por latigazo cervical en una colisión trasera al limitar cuánto se echa hacia atrás la cabeza.",
            },
          ],
          options: [
            { content: "Top of the restraint at ear level or higher", isCorrect: true, translations: [{ language: "zh", content: "头枕顶部与耳朵齐平或更高" }, { language: "es", content: "La parte superior del apoyacabezas a nivel de las orejas o más alto" }] },
            { content: "At neck level for maximum comfort", isCorrect: false, translations: [{ language: "zh", content: "在颈部水平以获得最大舒适度" }, { language: "es", content: "A nivel del cuello para máxima comodidad" }] },
            { content: "As low as possible to avoid obstructing the rear view", isCorrect: false, translations: [{ language: "zh", content: "尽可能低以避免阻碍后视" }, { language: "es", content: "Lo más bajo posible para evitar obstruir la visión trasera" }] },
            { content: "Head restraints do not need to be adjusted — factory settings are correct", isCorrect: false, translations: [{ language: "zh", content: "头枕不需要调整——出厂设置正确" }, { language: "es", content: "Los apoyacabezas no necesitan ajuste — la configuración de fábrica es correcta" }] },
          ],
        },

        {
          content: "By approximately what percentage do locked doors reduce the chance of being fatally ejected from a vehicle in a crash?",
          explanation: "Keeping vehicle doors locked while driving reduces the likelihood of being fatally ejected from the vehicle in a crash by about 75%. Ejection from a vehicle dramatically increases the chance of serious injury or death. Locked doors help keep occupants inside the safety cage of the vehicle even when the body is subjected to crash forces.",
          handbookSection: "Choosing Safety First — Vehicle Safety Equipment",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "锁定车门大约能降低碰撞中被甩出车外致死的概率多少百分比？",
              explanation: "在行驶时锁上车门，可以将碰撞中被致命甩出车外的可能性降低约75%。从车辆中被甩出会大大增加严重受伤或死亡的风险。锁定的车门有助于即使在撞击力作用下也能将乘员保持在车辆安全笼内。",
            },
            {
              language: "es",
              content: "¿En aproximadamente qué porcentaje reducen las puertas bloqueadas la posibilidad de ser expulsado fatalmente de un vehículo en un accidente?",
              explanation: "Mantener las puertas del vehículo cerradas mientras conduce reduce la probabilidad de ser expulsado fatalmente del vehículo en un accidente en aproximadamente un 75%. La expulsión de un vehículo aumenta dramáticamente las posibilidades de lesiones graves o muerte.",
            },
          ],
          options: [
            { content: "About 75%", isCorrect: true, translations: [{ language: "zh", content: "约75%" }, { language: "es", content: "Aproximadamente 75%" }] },
            { content: "About 25%", isCorrect: false, translations: [{ language: "zh", content: "约25%" }, { language: "es", content: "Aproximadamente 25%" }] },
            { content: "About 50%", isCorrect: false, translations: [{ language: "zh", content: "约50%" }, { language: "es", content: "Aproximadamente 50%" }] },
            { content: "About 90%", isCorrect: false, translations: [{ language: "zh", content: "约90%" }, { language: "es", content: "Aproximadamente 90%" }] },
          ],
        },

        {
          content: "Under Pennsylvania's Steer Clear law, what is the fine for a SECOND violation?",
          explanation: "Pennsylvania's Steer Clear (Move Over) law requires drivers to move over one lane or slow down when passing emergency or highway maintenance vehicles with flashing lights. The penalties escalate with each offense: 1st offense = $250 minimum; 2nd offense = $500 minimum; 3rd or subsequent = $1,000 minimum. If a worker is injured, the fine can reach up to $10,000 plus up to 1 year of imprisonment.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州「Steer Clear」法律，第二次违规的罚款是多少？",
              explanation: "宾夕法尼亚州的Steer Clear（让路）法律要求驾驶人在通过有闪光灯的紧急或公路维护车辆时，移入另一车道或减速。处罚随每次违规而递增：首次违规最低250美元；第二次违规最低500美元；第三次或以后最低1,000美元。如果工人受伤，罚款可高达10,000美元，并可处最高1年监禁。",
            },
            {
              language: "es",
              content: "Según la ley Steer Clear de Pennsylvania, ¿cuál es la multa por una SEGUNDA infracción?",
              explanation: "La ley Steer Clear (ceder el paso) de Pennsylvania requiere que los conductores se cambien de carril o reduzcan la velocidad al pasar vehículos de emergencia o mantenimiento de carreteras con luces intermitentes. Las penalizaciones aumentan con cada infracción: 1ª infracción = mínimo $250; 2ª infracción = mínimo $500; 3ª o posteriores = mínimo $1,000.",
            },
          ],
          options: [
            { content: "$500 minimum", isCorrect: true, translations: [{ language: "zh", content: "最低500美元" }, { language: "es", content: "Mínimo $500" }] },
            { content: "$250 minimum", isCorrect: false, translations: [{ language: "zh", content: "最低250美元" }, { language: "es", content: "Mínimo $250" }] },
            { content: "$1,000 minimum", isCorrect: false, translations: [{ language: "zh", content: "最低1,000美元" }, { language: "es", content: "Mínimo $1,000" }] },
            { content: "$150 minimum", isCorrect: false, translations: [{ language: "zh", content: "最低150美元" }, { language: "es", content: "Mínimo $150" }] },
          ],
        },

        {
          content: "What is the potential penalty if a highway worker is INJURED as a result of a Steer Clear law violation in Pennsylvania?",
          explanation: "Under Pennsylvania's Steer Clear law, if a highway maintenance worker, police officer, or other protected worker is injured because a driver failed to move over or slow down, the driver faces a fine of up to $10,000 plus up to 1 year of imprisonment in addition to other penalties. This severe consequence reflects the extreme danger workers face on roadsides.",
          handbookSection: "Choosing Safety First — Sharing the Road",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "如果由于违反宾夕法尼亚州「Steer Clear」法律导致公路工人受伤，可能面临什么处罚？",
              explanation: "根据宾夕法尼亚州的Steer Clear法律，如果公路养护工人、警察或其他受保护人员因驾驶人未能让路或减速而受伤，驾驶人除其他处罚外，还面临最高10,000美元的罚款和最高1年监禁。这一严厉后果反映了工人在路边面临的极端危险。",
            },
            {
              language: "es",
              content: "¿Cuál es la posible penalización si un trabajador de carreteras resulta HERIDO como resultado de una violación a la ley Steer Clear en Pennsylvania?",
              explanation: "Bajo la ley Steer Clear de Pennsylvania, si un trabajador de mantenimiento de carreteras, oficial de policía u otro trabajador protegido resulta herido porque un conductor no se cambió de carril ni redujo la velocidad, el conductor enfrenta una multa de hasta $10,000 más hasta 1 año de prisión además de otras penalizaciones.",
            },
          ],
          options: [
            { content: "Up to $10,000 fine plus up to 1 year imprisonment", isCorrect: true, translations: [{ language: "zh", content: "最高10,000美元罚款及最高1年监禁" }, { language: "es", content: "Multa de hasta $10,000 más hasta 1 año de prisión" }] },
            { content: "Up to $500 fine — same as the standard 2nd offense penalty", isCorrect: false, translations: [{ language: "zh", content: "最高500美元罚款——与标准第二次违规处罚相同" }, { language: "es", content: "Multa de hasta $500 — igual que la penalización estándar por 2ª infracción" }] },
            { content: "Automatic license revocation for life", isCorrect: false, translations: [{ language: "zh", content: "自动终身吊销驾照" }, { language: "es", content: "Revocación automática de licencia de por vida" }] },
            { content: "Up to $2,500 fine only — no imprisonment possible", isCorrect: false, translations: [{ language: "zh", content: "最高2,500美元罚款——不可能监禁" }, { language: "es", content: "Multa de hasta $2,500 solo — no es posible el encarcelamiento" }] },
          ],
        },

        {
          content: "Which items are PROHIBITED from hanging on or affixed to your rearview mirror or windshield while driving in Pennsylvania?",
          explanation: "Pennsylvania law prohibits hanging objects from the rearview mirror or placing items on the windshield that obstruct the driver's view. This includes items like fuzzy dice, air fresheners, GPS units mounted centrally, or large stickers. Any obstruction of the driver's line of sight creates a safety hazard and can result in a traffic citation. Only required items (like inspection/registration stickers in designated corners) are permitted.",
          handbookSection: "Choosing Safety First — Vehicle Safety Equipment",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州驾驶时，哪些物品禁止悬挂在后视镜上或粘贴在挡风玻璃上？",
              explanation: "宾夕法尼亚州法律禁止在后视镜上悬挂物品或在挡风玻璃上放置阻碍驾驶人视线的物品。这包括毛绒骰子、空气清新剂、中央安装的GPS设备或大型贴纸。任何阻碍驾驶人视线的物品都会造成安全隐患，可能导致交通罚单。只有规定物品（如规定角落的检验/登记贴纸）才被允许。",
            },
            {
              language: "es",
              content: "¿Qué artículos están PROHIBIDOS de colgar en el espejo retrovisor o pegados en el parabrisas mientras conduce en Pennsylvania?",
              explanation: "La ley de Pennsylvania prohíbe colgar objetos del espejo retrovisor o colocar artículos en el parabrisas que obstruyan la vista del conductor. Esto incluye artículos como dados de felpa, ambientadores, unidades de GPS montadas centralmente o pegatinas grandes. Cualquier obstrucción de la línea de visión del conductor crea un peligro para la seguridad.",
            },
          ],
          options: [
            { content: "Any objects that obstruct the driver's view through the windshield or mirrors", isCorrect: true, translations: [{ language: "zh", content: "任何阻碍驾驶人通过挡风玻璃或后视镜视线的物品" }, { language: "es", content: "Cualquier objeto que obstruya la vista del conductor a través del parabrisas o espejos" }] },
            { content: "Only items larger than 6 inches are prohibited", isCorrect: false, translations: [{ language: "zh", content: "只有大于6英寸的物品才被禁止" }, { language: "es", content: "Solo los artículos de más de 6 pulgadas están prohibidos" }] },
            { content: "Hanging items are fine as long as they are below eye level", isCorrect: false, translations: [{ language: "zh", content: "只要低于视线水平，悬挂物品是可以的" }, { language: "es", content: "Los artículos colgantes están bien siempre que estén por debajo del nivel de los ojos" }] },
            { content: "No restrictions exist — drivers may personalize their vehicles as they wish", isCorrect: false, translations: [{ language: "zh", content: "没有限制——驾驶人可以随意个性化车辆" }, { language: "es", content: "No existen restricciones — los conductores pueden personalizar sus vehículos como deseen" }] },
          ],
        },

      ], // end Topic 2 questions
    }, // end Topic 2

    // ─── TOPIC 3: EVERYDAY DRIVING SKILLS (Ch.3b) ──────────────────────────────
    {
      name: "Everyday Driving Skills",
      nameEn: "Everyday Driving Skills",
      description: "Following distance, speed limits, turning, passing, parking, and highway driving techniques",
      handbookUrl: `${BASE}/everyday-driving-skills`,
      translations: [
        { language: "zh", name: "日常驾驶技能", description: "跟车距离、限速、转弯、超车、停车及高速公路驾驶技巧" },
        { language: "es", name: "Habilidades de Conducción Cotidiana", description: "Distancia de seguimiento, límites de velocidad, giros, adelantamientos, estacionamiento y técnicas de conducción en autopista" },
      ],
      questions: [

        {
          content: "What is the recommended following distance rule for most driving conditions in Pennsylvania?",
          explanation: "Pennsylvania recommends using the 4-second following distance rule. Pick a fixed object ahead, and when the vehicle in front passes it, count 4 seconds before your vehicle reaches the same point. In adverse conditions (rain, fog, ice), increase to 8–10 seconds.",
          handbookSection: "Everyday Driving Skills — Following Distance",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，大多数驾驶条件下推荐的跟车距离规则是什么？",
              explanation: "宾夕法尼亚州建议使用4秒跟车距离规则。选择前方一个固定物体，当前车经过该物体时，数4秒后您的车辆才到达同一位置。在恶劣条件（雨、雾、冰）下，增加到8至10秒。",
            },
            {
              language: "es",
              content: "¿Cuál es la regla de distancia de seguimiento recomendada para la mayoría de las condiciones de conducción en Pennsylvania?",
              explanation: "Pennsylvania recomienda usar la regla de distancia de seguimiento de 4 segundos. Elija un objeto fijo adelante; cuando el vehículo de enfrente lo pase, cuente 4 segundos antes de que su vehículo llegue al mismo punto. En condiciones adversas, aumente a 8–10 segundos.",
            },
          ],
          options: [
            { content: "4-second following distance", isCorrect: true, translations: [{ language: "zh", content: "4秒跟车距离" }, { language: "es", content: "Distancia de seguimiento de 4 segundos" }] },
            { content: "2-second following distance", isCorrect: false, translations: [{ language: "zh", content: "2秒跟车距离" }, { language: "es", content: "Distancia de seguimiento de 2 segundos" }] },
            { content: "1-car-length for every 10 mph of speed", isCorrect: false, translations: [{ language: "zh", content: "每10英里时速保持一个车身长度" }, { language: "es", content: "Un largo de automóvil por cada 10 mph de velocidad" }] },
            { content: "3-second following distance", isCorrect: false, translations: [{ language: "zh", content: "3秒跟车距离" }, { language: "es", content: "Distancia de seguimiento de 3 segundos" }] },
          ],
        },

        {
          content: "What is the maximum speed limit on most Pennsylvania interstate highways?",
          explanation: "The maximum speed limit on most Pennsylvania interstate highways is 70 mph. However, speed limits vary by location and may be lower in urban areas, construction zones, or on certain roadways. Always obey posted speed limit signs.",
          handbookSection: "Everyday Driving Skills — Speed Limits",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州大多数州际公路的最高限速是多少？",
              explanation: "宾夕法尼亚州大多数州际公路的最高限速为每小时70英里。但各地限速不同，城市地区、施工区或某些路段可能更低。请始终遵守限速标志。",
            },
            {
              language: "es",
              content: "¿Cuál es el límite de velocidad máximo en la mayoría de las autopistas interestatales de Pennsylvania?",
              explanation: "El límite de velocidad máximo en la mayoría de las autopistas interestatales de Pennsylvania es de 70 mph. Sin embargo, los límites de velocidad varían según la ubicación y pueden ser más bajos en áreas urbanas, zonas de construcción o ciertas vías.",
            },
          ],
          options: [
            { content: "70 mph", isCorrect: true, translations: [{ language: "zh", content: "每小时70英里" }, { language: "es", content: "70 mph" }] },
            { content: "65 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时65英里" }, { language: "es", content: "65 mph" }] },
            { content: "55 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时55英里" }, { language: "es", content: "55 mph" }] },
            { content: "75 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时75英里" }, { language: "es", content: "75 mph" }] },
          ],
        },

        {
          content: "How far in advance must you signal before turning in a speed zone of 35 mph or more?",
          explanation: "In Pennsylvania, you must signal at least 300 feet before turning when the speed limit is 35 mph or more. At lower speeds (under 35 mph), you must signal at least 100 feet before turning. Always use your turn signal to let other drivers know your intentions.",
          handbookSection: "Everyday Driving Skills — Turning",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在时速35英里或以上的限速区，转弯前至少需要提前多远打转向灯？",
              explanation: "在宾夕法尼亚州，当限速为每小时35英里或以上时，转弯前至少300英尺开始打转向灯。低速时（35英里以下），转弯前至少100英尺打转向灯。始终使用转向灯告知其他驾驶员您的意图。",
            },
            {
              language: "es",
              content: "¿Con cuánta anticipación debe señalizar antes de girar en una zona de velocidad de 35 mph o más?",
              explanation: "En Pennsylvania, debe señalizar al menos 300 pies antes de girar cuando el límite de velocidad es de 35 mph o más. A velocidades más bajas (menos de 35 mph), debe señalizar al menos 100 pies antes de girar.",
            },
          ],
          options: [
            { content: "At least 300 feet", isCorrect: true, translations: [{ language: "zh", content: "至少300英尺" }, { language: "es", content: "Al menos 300 pies" }] },
            { content: "At least 100 feet", isCorrect: false, translations: [{ language: "zh", content: "至少100英尺" }, { language: "es", content: "Al menos 100 pies" }] },
            { content: "At least 500 feet", isCorrect: false, translations: [{ language: "zh", content: "至少500英尺" }, { language: "es", content: "Al menos 500 pies" }] },
            { content: "At least 200 feet", isCorrect: false, translations: [{ language: "zh", content: "至少200英尺" }, { language: "es", content: "Al menos 200 pies" }] },
          ],
        },

        {
          content: "When making a U-turn, what minimum sight distance must be clear ahead before proceeding?",
          explanation: "Before making a U-turn, you must be able to see at least 500 feet ahead in both directions to ensure no approaching traffic will be endangered. U-turns are also prohibited at intersections with traffic signals, where a sign prohibits them, and in other specific situations.",
          handbookSection: "Everyday Driving Skills — Turning",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "进行U形转弯时，前方必须至少能看到多远？",
              explanation: "进行U形转弯前，必须能看到前方两个方向至少500英尺的距离，以确保不会危及来车。U形转弯在有交通信号的路口、有禁止标志的地方以及其他特定情况下也被禁止。",
            },
            {
              language: "es",
              content: "Al hacer un giro en U, ¿qué distancia mínima de visibilidad debe estar despejada antes de proceder?",
              explanation: "Antes de hacer un giro en U, debe poder ver al menos 500 pies hacia adelante en ambas direcciones para asegurarse de que ningún tráfico que se aproxime sea puesto en peligro. Los giros en U también están prohibidos en intersecciones con semáforos.",
            },
          ],
          options: [
            { content: "At least 500 feet in both directions", isCorrect: true, translations: [{ language: "zh", content: "两个方向各至少500英尺" }, { language: "es", content: "Al menos 500 pies en ambas direcciones" }] },
            { content: "At least 200 feet ahead", isCorrect: false, translations: [{ language: "zh", content: "前方至少200英尺" }, { language: "es", content: "Al menos 200 pies hacia adelante" }] },
            { content: "At least 1,000 feet in both directions", isCorrect: false, translations: [{ language: "zh", content: "两个方向各至少1,000英尺" }, { language: "es", content: "Al menos 1,000 pies en ambas direcciones" }] },
            { content: "At least 300 feet ahead", isCorrect: false, translations: [{ language: "zh", content: "前方至少300英尺" }, { language: "es", content: "Al menos 300 pies hacia adelante" }] },
          ],
        },

        {
          content: "You want to pass a vehicle on a two-lane road. What is the first thing you must do before pulling into the oncoming lane?",
          explanation: "Before passing on a two-lane road, you must first check that passing is permitted (no solid yellow on your side, no no-passing zone sign). Then check your mirrors, look ahead for adequate clear distance, signal your intention, check the blind spot, and only then move into the oncoming lane to pass. Never pass within 100 feet of an intersection, bridge, or railroad crossing.",
          handbookSection: "Everyday Driving Skills — Passing",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "您想在双车道道路上超越一辆车。进入对向车道前，您必须首先做什么？",
              explanation: "在双车道道路上超车前，必须首先确认超车是否被允许（您这侧没有实黄线，没有禁止超车区标志）。然后检查后视镜，确认前方有足够的安全距离，打转向灯，检查盲区，再进入对向车道超车。在路口、桥梁或铁路道口100英尺范围内不得超车。",
            },
            {
              language: "es",
              content: "Quiere adelantar a un vehículo en una carretera de dos carriles. ¿Qué es lo primero que debe hacer antes de entrar al carril contrario?",
              explanation: "Antes de adelantar en una carretera de dos carriles, primero debe verificar que adelantar está permitido (sin línea amarilla sólida en su lado, sin señal de zona de no adelantar). Luego revise sus espejos, verifique que hay distancia libre adecuada adelante, señalice, revise el punto ciego y solo entonces pase al carril contrario.",
            },
          ],
          options: [
            { content: "Check that passing is permitted (no solid yellow line on your side)", isCorrect: true, translations: [{ language: "zh", content: "确认超车被允许（您这侧没有实黄线）" }, { language: "es", content: "Verificar que adelantar está permitido (sin línea amarilla sólida en su lado)" }] },
            { content: "Flash your headlights to warn oncoming traffic", isCorrect: false, translations: [{ language: "zh", content: "闪动前车灯警告对向来车" }, { language: "es", content: "Destellar los faros para advertir al tráfico en sentido contrario" }] },
            { content: "Sound your horn to alert the vehicle ahead", isCorrect: false, translations: [{ language: "zh", content: "鸣喇叭提醒前方车辆" }, { language: "es", content: "Tocar el claxon para alertar al vehículo de adelante" }] },
            { content: "Increase speed to at least 10 mph over the limit", isCorrect: false, translations: [{ language: "zh", content: "速度提高到至少超过限速10英里" }, { language: "es", content: "Aumentar la velocidad al menos 10 mph sobre el límite" }] },
          ],
        },

        {
          content: "How far from a fire hydrant must you park?",
          explanation: "Pennsylvania law prohibits parking within 15 feet of a fire hydrant. This ensures fire trucks can connect hoses quickly in an emergency. You must also not park within 20 feet of a crosswalk at an intersection, within 30 feet of a stop sign, or in front of a driveway.",
          handbookSection: "Everyday Driving Skills — Parking",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "您必须在距消防栓多远的地方停车？",
              explanation: "宾夕法尼亚州法律禁止在消防栓15英尺范围内停车。这确保消防车在紧急情况下可以快速连接水管。还不得在路口人行横道20英尺范围内、停车标志30英尺范围内或车道入口前停车。",
            },
            {
              language: "es",
              content: "¿A qué distancia de un hidrante de incendio debe estacionar?",
              explanation: "La ley de Pennsylvania prohíbe estacionar dentro de 15 pies de un hidrante de incendio. Esto asegura que los camiones de bomberos puedan conectar mangueras rápidamente en una emergencia. También debe evitar estacionar dentro de 20 pies de un cruce peatonal en una intersección o dentro de 30 pies de una señal de alto.",
            },
          ],
          options: [
            { content: "At least 15 feet", isCorrect: true, translations: [{ language: "zh", content: "至少15英尺" }, { language: "es", content: "Al menos 15 pies" }] },
            { content: "At least 10 feet", isCorrect: false, translations: [{ language: "zh", content: "至少10英尺" }, { language: "es", content: "Al menos 10 pies" }] },
            { content: "At least 20 feet", isCorrect: false, translations: [{ language: "zh", content: "至少20英尺" }, { language: "es", content: "Al menos 20 pies" }] },
            { content: "At least 25 feet", isCorrect: false, translations: [{ language: "zh", content: "至少25英尺" }, { language: "es", content: "Al menos 25 pies" }] },
          ],
        },

        {
          content: "When parking on a hill with a curb, facing downhill, which way should you turn your front wheels?",
          explanation: "When parking facing DOWNHILL with a curb, turn your front wheels TOWARD the curb (to the right). If your vehicle rolls, it will roll into the curb and stop. When facing uphill with a curb, turn wheels AWAY from the curb. With no curb, always turn wheels to the right (toward the shoulder) regardless of direction.",
          handbookSection: "Everyday Driving Skills — Parking",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在有路缘石的下坡路段停车时，前轮应转向哪个方向？",
              explanation: "面朝下坡有路缘石停车时，前轮应转向路缘石（向右）。如果车辆滑动，会滚向路缘石并停住。面朝上坡有路缘石时，轮子应转离路缘石。无路缘石时，无论方向如何，始终将轮子转向右侧（朝向路肩）。",
            },
            {
              language: "es",
              content: "Al estacionar en una colina con bordillo, mirando cuesta abajo, ¿hacia dónde debe girar las ruedas delanteras?",
              explanation: "Al estacionar mirando cuesta ABAJO con bordillo, gire las ruedas delanteras HACIA el bordillo (a la derecha). Si el vehículo rueda, rodará hacia el bordillo y se detendrá. Al mirar cuesta arriba con bordillo, gire las ruedas ALEJÁNDOLAS del bordillo.",
            },
          ],
          options: [
            { content: "Toward the curb (to the right)", isCorrect: true, translations: [{ language: "zh", content: "朝向路缘石（向右）" }, { language: "es", content: "Hacia el bordillo (a la derecha)" }] },
            { content: "Away from the curb (to the left)", isCorrect: false, translations: [{ language: "zh", content: "远离路缘石（向左）" }, { language: "es", content: "Alejando del bordillo (a la izquierda)" }] },
            { content: "Straight ahead", isCorrect: false, translations: [{ language: "zh", content: "直向前方" }, { language: "es", content: "Hacia adelante" }] },
            { content: "It does not matter which way the wheels are turned", isCorrect: false, translations: [{ language: "zh", content: "轮子朝哪个方向无关紧要" }, { language: "es", content: "No importa hacia dónde estén giradas las ruedas" }] },
          ],
        },

        {
          content: "When entering a highway on-ramp, what should you do to merge safely?",
          explanation: "When merging onto a highway, you should accelerate in the acceleration lane to reach highway speed, then signal and find a safe gap in traffic. Yield to vehicles already on the highway — they have the right-of-way. Never stop in the acceleration lane unless you have no other choice.",
          handbookSection: "Everyday Driving Skills — Highway Driving",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "进入高速公路入口匝道时，如何安全汇入主路？",
              explanation: "汇入高速公路时，应在加速车道提速至与高速公路相当的速度，然后打转向灯并在交通流中找到安全间隙。礼让已在高速公路上行驶的车辆——它们拥有优先通行权。除非别无选择，否则不要在加速车道停车。",
            },
            {
              language: "es",
              content: "Al entrar en una rampa de acceso a la autopista, ¿qué debe hacer para fusionarse de manera segura?",
              explanation: "Al incorporarse a una autopista, debe acelerar en el carril de aceleración para alcanzar la velocidad de la autopista, luego señalizar y encontrar un hueco seguro en el tráfico. Ceda el paso a los vehículos que ya están en la autopista — ellos tienen el derecho de paso.",
            },
          ],
          options: [
            { content: "Accelerate to highway speed and find a safe gap before merging", isCorrect: true, translations: [{ language: "zh", content: "加速至高速公路速度，找到安全间隙后再汇入" }, { language: "es", content: "Acelere a la velocidad de la autopista y encuentre un hueco seguro antes de fusionarse" }] },
            { content: "Stop at the end of the ramp and wait for a gap", isCorrect: false, translations: [{ language: "zh", content: "在匝道末端停车等待间隙" }, { language: "es", content: "Deténgase al final de la rampa y espere un hueco" }] },
            { content: "Merge at 30 mph — highway traffic must yield to you", isCorrect: false, translations: [{ language: "zh", content: "以每小时30英里并道——高速公路上的车辆必须让您" }, { language: "es", content: "Fusionarse a 30 mph — el tráfico de la autopista debe cederle el paso" }] },
            { content: "Use the emergency lane to gain speed before merging", isCorrect: false, translations: [{ language: "zh", content: "使用紧急停车带加速后再并道" }, { language: "es", content: "Use el carril de emergencia para ganar velocidad antes de fusionarse" }] },
          ],
        },

        {
          content: "At approximately what speed can hydroplaning begin to occur?",
          explanation: "Hydroplaning can occur at speeds as low as 35 mph when there is as little as 1/10 inch of water on the road. At this point, your tires may ride on a film of water rather than the road surface, causing a loss of steering control. Worn tires, high speeds, and more water increase the risk. If hydroplaning occurs: release the gas slowly, keep a firm grip, don't brake hard or turn sharply.",
          handbookSection: "Everyday Driving Skills — Managing Speed",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "水滑现象大约在什么速度下可能开始发生？",
              explanation: "当路面有1/10英寸的积水时，水滑现象可能在低至35英里/小时的速度下发生。此时您的轮胎可能在水膜上行驶而非路面，导致失去转向控制。磨损的轮胎、高速和更多的积水都会增加风险。如果发生水滑：缓慢松开油门，抓紧方向盘，不要猛踩刹车或急转弯。",
            },
            {
              language: "es",
              content: "¿A qué velocidad aproximada puede comenzar a ocurrir el aquaplaning?",
              explanation: "El aquaplaning puede ocurrir a velocidades tan bajas como 35 mph cuando hay tan solo 1/10 de pulgada de agua en la carretera. En este punto, sus neumáticos pueden deslizarse sobre una película de agua en lugar de la superficie de la carretera, causando pérdida de control de dirección. Si ocurre aquaplaning: suelte el gas lentamente, mantenga un agarre firme, no frene fuerte ni gire bruscamente.",
            },
          ],
          options: [
            { content: "As low as 35 mph with only 1/10 inch of water on the road", isCorrect: true, translations: [{ language: "zh", content: "路面仅有1/10英寸积水时，低至35英里/小时即可发生" }, { language: "es", content: "A partir de 35 mph con solo 1/10 de pulgada de agua en la carretera" }] },
            { content: "Only at speeds above 65 mph", isCorrect: false, translations: [{ language: "zh", content: "只有在超过65英里/小时的速度下才会发生" }, { language: "es", content: "Solo a velocidades superiores a 65 mph" }] },
            { content: "Only in heavy rain with standing water several inches deep", isCorrect: false, translations: [{ language: "zh", content: "只有在大雨且积水深达几英寸时才会发生" }, { language: "es", content: "Solo en lluvia intensa con agua estancada de varios centímetros de profundidad" }] },
            { content: "Hydroplaning is not possible on paved roads", isCorrect: false, translations: [{ language: "zh", content: "在铺装道路上不会发生水滑" }, { language: "es", content: "El aquaplaning no es posible en carreteras pavimentadas" }] },
          ],
        },

        {
          content: "At night on an unlighted rural road, why should you not exceed 45 mph even if the speed limit is higher?",
          explanation: "On dark, unlighted roads at night, low-beam headlights illuminate approximately 250 feet ahead. At 55 mph, your stopping distance exceeds 250 feet, meaning you could not stop in time if an obstacle appeared at the edge of your headlight range. Limiting your speed to 45 mph keeps your stopping distance within the visible range, a principle called 'driving within the range of your headlights.'",
          handbookSection: "Everyday Driving Skills — Managing Speed",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在没有路灯的乡村道路上夜间行驶，即使限速更高，为什么不应超过45英里/小时？",
              explanation: "在黑暗无照明的道路上夜间行驶，近光灯大约照亮前方250英尺。以55英里/小时行驶，刹车距离超过250英尺，这意味着如果在近光灯照射范围边缘出现障碍物，您将无法及时停车。将速度限制在45英里/小时使刹车距离保持在可见范围内，这一原则称为「在前灯照射范围内驾驶」。",
            },
            {
              language: "es",
              content: "De noche en una carretera rural sin iluminación, ¿por qué no debe superar las 45 mph incluso si el límite de velocidad es mayor?",
              explanation: "En carreteras oscuras sin iluminación por la noche, los faros de luz corta iluminan aproximadamente 250 pies hacia adelante. A 55 mph, su distancia de frenado supera los 250 pies, lo que significa que no podría detenerse a tiempo si apareciera un obstáculo en el límite del alcance de sus faros. Limitar su velocidad a 45 mph mantiene su distancia de frenado dentro del rango visible.",
            },
          ],
          options: [
            { content: "Low beams illuminate only ~250 feet — at 55 mph stopping distance exceeds that", isCorrect: true, translations: [{ language: "zh", content: "近光灯只照亮约250英尺——以55英里/小时行驶，刹车距离超过此范围" }, { language: "es", content: "Los faros de luz corta iluminan solo ~250 pies — a 55 mph la distancia de frenado supera eso" }] },
            { content: "45 mph is the legal maximum speed in Pennsylvania at night", isCorrect: false, translations: [{ language: "zh", content: "45英里/小时是宾夕法尼亚州夜间的法定最高速度" }, { language: "es", content: "45 mph es la velocidad máxima legal en Pennsylvania de noche" }] },
            { content: "Wildlife is more active at night and 45 mph allows time to react", isCorrect: false, translations: [{ language: "zh", content: "夜间野生动物更活跃，45英里/小时允许有时间反应" }, { language: "es", content: "La fauna silvestre es más activa de noche y 45 mph permite tiempo para reaccionar" }] },
            { content: "High beams are required above 45 mph — otherwise you are breaking the law", isCorrect: false, translations: [{ language: "zh", content: "超过45英里/小时需要使用远光灯——否则违法" }, { language: "es", content: "Se requieren luces largas por encima de 45 mph — de lo contrario está infringiendo la ley" }] },
          ],
        },

        {
          content: "When must you switch to LOW-BEAM headlights when following another vehicle?",
          explanation: "Pennsylvania law requires you to use low-beam headlights whenever you are following another vehicle within 300 feet. High beams directed at the rear of the vehicle ahead create glare in that driver's mirrors and can blind them. Within 300 feet following distance, low beams provide adequate light without endangering the driver ahead.",
          handbookSection: "Everyday Driving Skills — Headlight Use",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "跟随另一辆车时，何时必须切换到近光灯？",
              explanation: "宾夕法尼亚州法律要求，当您在300英尺内跟随另一辆车时，必须使用近光灯。对准前车后部的远光灯会在该驾驶人的后视镜中产生眩光，可能使其目眩。在300英尺的跟车距离内，近光灯提供足够的灯光，同时不危及前车驾驶人。",
            },
            {
              language: "es",
              content: "¿Cuándo debe cambiar a faros de LUZ CORTA cuando sigue a otro vehículo?",
              explanation: "La ley de Pennsylvania requiere que use faros de luz corta siempre que esté siguiendo a otro vehículo dentro de 300 pies. Los faros de luz larga dirigidos a la parte trasera del vehículo de adelante crean deslumbramiento en los espejos de ese conductor y pueden cegarlos. Dentro de 300 pies de distancia de seguimiento, los faros de luz corta proporcionan luz adecuada sin poner en peligro al conductor de adelante.",
            },
          ],
          options: [
            { content: "Within 300 feet of the vehicle ahead", isCorrect: true, translations: [{ language: "zh", content: "在前车300英尺以内" }, { language: "es", content: "Dentro de 300 pies del vehículo de adelante" }] },
            { content: "Within 500 feet of the vehicle ahead", isCorrect: false, translations: [{ language: "zh", content: "在前车500英尺以内" }, { language: "es", content: "Dentro de 500 pies del vehículo de adelante" }] },
            { content: "Within 100 feet of the vehicle ahead", isCorrect: false, translations: [{ language: "zh", content: "在前车100英尺以内" }, { language: "es", content: "Dentro de 100 pies del vehículo de adelante" }] },
            { content: "You never need to switch to low beams when following — only when meeting oncoming traffic", isCorrect: false, translations: [{ language: "zh", content: "跟车时无需切换到近光灯——只有在遭遇对向交通时才需要" }, { language: "es", content: "Nunca necesita cambiar a luces cortas cuando sigue a alguien — solo al encontrar tráfico en sentido contrario" }] },
          ],
        },

        {
          content: "What does the hand signal of an arm extended straight out to the left indicate?",
          explanation: "When a driver extends their left arm straight out the driver's window, it signals a LEFT TURN. Hand signals are required when the vehicle's turn signals are not working. The three standard hand signals are: left arm straight out = left turn; left arm bent upward at the elbow = right turn; left arm bent downward at the elbow = slowing/stopping.",
          handbookSection: "Everyday Driving Skills — Signals and Communication",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "手臂从左侧窗口伸出并向左平伸的手势表示什么？",
              explanation: "当驾驶人将左臂从驾驶侧窗口向左平伸时，表示左转。当车辆的转向灯不工作时，必须使用手势信号。三种标准手势信号为：左臂向左平伸=左转；左臂在肘部向上弯曲=右转；左臂在肘部向下弯曲=减速/停车。",
            },
            {
              language: "es",
              content: "¿Qué indica la señal de mano con el brazo extendido recto hacia la izquierda?",
              explanation: "Cuando un conductor extiende su brazo izquierdo recto por la ventana del conductor, indica un GIRO A LA IZQUIERDA. Las señales de mano se requieren cuando las señales de giro del vehículo no funcionan. Las tres señales de mano estándar son: brazo izquierdo recto hacia afuera = giro a la izquierda; brazo izquierdo doblado hacia arriba en el codo = giro a la derecha; brazo izquierdo doblado hacia abajo en el codo = desaceleración/parada.",
            },
          ],
          options: [
            { content: "Left turn", isCorrect: true, translations: [{ language: "zh", content: "左转" }, { language: "es", content: "Giro a la izquierda" }] },
            { content: "Right turn", isCorrect: false, translations: [{ language: "zh", content: "右转" }, { language: "es", content: "Giro a la derecha" }] },
            { content: "Slowing down or stopping", isCorrect: false, translations: [{ language: "zh", content: "减速或停车" }, { language: "es", content: "Desaceleración o parada" }] },
            { content: "Lane change to the left", isCorrect: false, translations: [{ language: "zh", content: "向左换道" }, { language: "es", content: "Cambio de carril a la izquierda" }] },
          ],
        },

        {
          content: "At a four-way stop where two vehicles arrive at exactly the same time, which one must yield?",
          explanation: "When two vehicles arrive at a four-way stop simultaneously, the driver on the LEFT must yield to the driver on the RIGHT. This right-of-way rule ('left yields to right') prevents deadlocks at four-way stops. When one vehicle arrives before the other, the first to arrive proceeds first — regardless of direction.",
          handbookSection: "Everyday Driving Skills — Right-of-Way",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在四向停车路口，两辆车同时到达时，哪辆车必须让行？",
              explanation: "当两辆车同时到达四向停车路口时，左侧的驾驶人必须礼让右侧的驾驶人。这一优先通行规则（「左让右」）防止四向停车路口僵局。当一辆车比另一辆先到达时，先到的先行——不管方向如何。",
            },
            {
              language: "es",
              content: "En una parada de cuatro vías donde dos vehículos llegan exactamente al mismo tiempo, ¿cuál debe ceder el paso?",
              explanation: "Cuando dos vehículos llegan a una parada de cuatro vías simultáneamente, el conductor a la IZQUIERDA debe ceder el paso al conductor a la DERECHA. Esta regla de prioridad ('izquierda cede a la derecha') previene puntos muertos en las paradas de cuatro vías.",
            },
          ],
          options: [
            { content: "The driver on the LEFT yields to the driver on the RIGHT", isCorrect: true, translations: [{ language: "zh", content: "左侧的驾驶人礼让右侧的驾驶人" }, { language: "es", content: "El conductor a la IZQUIERDA cede el paso al conductor a la DERECHA" }] },
            { content: "The driver on the RIGHT yields to the driver on the LEFT", isCorrect: false, translations: [{ language: "zh", content: "右侧的驾驶人礼让左侧的驾驶人" }, { language: "es", content: "El conductor a la DERECHA cede el paso al conductor a la IZQUIERDA" }] },
            { content: "The vehicle turning left must always yield", isCorrect: false, translations: [{ language: "zh", content: "左转的车辆必须始终让行" }, { language: "es", content: "El vehículo que gira a la izquierda siempre debe ceder el paso" }] },
            { content: "Either driver may go — there is no rule for simultaneous arrival", isCorrect: false, translations: [{ language: "zh", content: "任何一方均可通行——同时到达没有规定" }, { language: "es", content: "Cualquiera de los conductores puede avanzar — no hay regla para la llegada simultánea" }] },
          ],
        },

        {
          content: "When crossing a two-lane street at a 30 mph speed limit from a two-way stop, approximately how large a gap in traffic do you need?",
          explanation: "At a two-way stop crossing a 30 mph street, Pennsylvania's handbook recommends approximately a 6-second gap in traffic in both directions before crossing. For a right turn, you need about an 8-second gap from the left. For a left turn, you need about a 9-second gap from approaching right-side traffic. These gaps allow you to safely complete the maneuver without cutting off oncoming vehicles.",
          handbookSection: "Everyday Driving Skills — Right-of-Way",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "在限速30英里/小时的双向停车路口，穿越双向街道时，您需要多大的交通间隙？",
              explanation: "在穿越30英里/小时双向街道的双向停车路口，宾夕法尼亚州手册建议在两个方向的交通中找到约6秒的间隙才能穿越。右转需要约8秒的间隙（来自左侧）。左转需要约9秒的间隙（来自右侧驶来的交通）。这些间隙允许您安全完成操作而不截断对向车辆。",
            },
            {
              language: "es",
              content: "Al cruzar una calle de dos carriles con límite de 30 mph desde una parada de dos vías, ¿qué tan grande debe ser el hueco en el tráfico?",
              explanation: "En una parada de dos vías cruzando una calle de 30 mph, el manual de Pennsylvania recomienda aproximadamente un hueco de 6 segundos en el tráfico en ambas direcciones antes de cruzar. Para girar a la derecha, necesita un hueco de aproximadamente 8 segundos desde la izquierda. Para girar a la izquierda, necesita un hueco de aproximadamente 9 segundos.",
            },
          ],
          options: [
            { content: "About 6 seconds in both directions", isCorrect: true, translations: [{ language: "zh", content: "两个方向各约6秒" }, { language: "es", content: "Aproximadamente 6 segundos en ambas direcciones" }] },
            { content: "About 2 seconds — just enough to get through", isCorrect: false, translations: [{ language: "zh", content: "约2秒——刚够通过" }, { language: "es", content: "Aproximadamente 2 segundos — justo suficiente para cruzar" }] },
            { content: "About 4 seconds in the direction of approaching traffic only", isCorrect: false, translations: [{ language: "zh", content: "仅在来车方向约4秒" }, { language: "es", content: "Aproximadamente 4 segundos solo en la dirección del tráfico que se aproxima" }] },
            { content: "About 15 seconds — to be extra safe", isCorrect: false, translations: [{ language: "zh", content: "约15秒——以额外安全" }, { language: "es", content: "Aproximadamente 15 segundos — para mayor seguridad" }] },
          ],
        },

        {
          content: "How close to a fire hydrant may you legally park in Pennsylvania?",
          explanation: "In Pennsylvania, you may NOT park within 15 feet of a fire hydrant. Fire trucks need clear access to hydrants from all directions when responding to a fire. Parking too close to a hydrant can delay emergency response and endanger lives. Your vehicle can also be ticketed and towed. Other prohibited parking distances include: within 20 feet of a crosswalk, within 30 feet of a stop sign, and within 50 feet of railroad crossing rails.",
          handbookSection: "Everyday Driving Skills — Parking",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，停车距消防栓多近是合法的？",
              explanation: "在宾夕法尼亚州，不得在消防栓15英尺范围内停车。消防车在救火时需要从各个方向畅通无阻地接近消防栓。停车过近可能延误紧急响应，危及生命。您的车辆也可能被贴罚单和拖走。其他禁止停车的距离包括：人行横道20英尺以内、停止标志30英尺以内、铁路道口轨道50英尺以内。",
            },
            {
              language: "es",
              content: "¿A qué distancia de una boca de incendios puede estacionarse legalmente en Pennsylvania?",
              explanation: "En Pennsylvania, NO puede estacionarse dentro de 15 pies de una boca de incendios. Los camiones de bomberos necesitan acceso libre a las bocas de incendios desde todas las direcciones cuando responden a un incendio. Estacionarse demasiado cerca puede retrasar la respuesta de emergencia y poner en peligro vidas. Otras distancias de estacionamiento prohibidas: dentro de 20 pies de un paso de peatones, dentro de 30 pies de una señal de stop.",
            },
          ],
          options: [
            { content: "No closer than 15 feet", isCorrect: true, translations: [{ language: "zh", content: "不得近于15英尺" }, { language: "es", content: "No más cerca de 15 pies" }] },
            { content: "No closer than 10 feet", isCorrect: false, translations: [{ language: "zh", content: "不得近于10英尺" }, { language: "es", content: "No más cerca de 10 pies" }] },
            { content: "No closer than 25 feet", isCorrect: false, translations: [{ language: "zh", content: "不得近于25英尺" }, { language: "es", content: "No más cerca de 25 pies" }] },
            { content: "No closer than 30 feet", isCorrect: false, translations: [{ language: "zh", content: "不得近于30英尺" }, { language: "es", content: "No más cerca de 30 pies" }] },
          ],
        },

        {
          content: "By how much should you reduce your speed on wet roads, and how should you increase your following distance?",
          explanation: "On wet roads, the Pennsylvania handbook recommends reducing your speed by 5–10 mph below the posted limit and increasing your following distance to 5–6 seconds (compared to the normal 4 seconds on dry pavement). Wet roads reduce tire traction and increase stopping distance. In packed snow, reduce speed by half; on ice, slow to a crawl and leave about 10 times the normal following distance.",
          handbookSection: "Everyday Driving Skills — Managing Speed",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在潮湿路面上应降低多少车速，应如何增加跟车距离？",
              explanation: "在潮湿路面上，宾夕法尼亚州手册建议将速度降低至限速以下5至10英里/小时，并将跟车距离增加到5至6秒（与干燥路面正常4秒相比）。潮湿路面会降低轮胎抓地力并增加刹车距离。在压实积雪上，速度降低一半；在冰面上，减速至爬行速度，保持约10倍正常跟车距离。",
            },
            {
              language: "es",
              content: "¿Cuánto debe reducir su velocidad en carreteras mojadas y cómo debe aumentar su distancia de seguimiento?",
              explanation: "En carreteras mojadas, el manual de Pennsylvania recomienda reducir su velocidad de 5 a 10 mph por debajo del límite publicado y aumentar su distancia de seguimiento a 5-6 segundos (en comparación con los 4 segundos normales en pavimento seco). Las carreteras mojadas reducen la tracción de los neumáticos y aumentan la distancia de frenado.",
            },
          ],
          options: [
            { content: "Reduce speed by 5–10 mph; increase following distance to 5–6 seconds", isCorrect: true, translations: [{ language: "zh", content: "降低车速5至10英里/小时；将跟车距离增加到5至6秒" }, { language: "es", content: "Reduzca la velocidad en 5–10 mph; aumente la distancia de seguimiento a 5–6 segundos" }] },
            { content: "No adjustment needed — modern cars handle wet roads well", isCorrect: false, translations: [{ language: "zh", content: "无需调整——现代汽车在潮湿路面上表现良好" }, { language: "es", content: "No se necesita ajuste — los autos modernos manejan bien las carreteras mojadas" }] },
            { content: "Reduce speed by half and increase following distance to 10 seconds", isCorrect: false, translations: [{ language: "zh", content: "速度降低一半并将跟车距离增加到10秒" }, { language: "es", content: "Reduzca la velocidad a la mitad y aumente la distancia de seguimiento a 10 segundos" }] },
            { content: "Increase speed to minimize time on wet roads", isCorrect: false, translations: [{ language: "zh", content: "增加车速以减少在潮湿路面上的时间" }, { language: "es", content: "Aumente la velocidad para minimizar el tiempo en carreteras mojadas" }] },
          ],
        },

        {
          content: "When turning RIGHT on a red light in Pennsylvania, what must you do FIRST?",
          explanation: "Before making a right turn on red in Pennsylvania, you MUST come to a complete stop, then yield to all pedestrians in the crosswalk and all vehicles with the right-of-way before proceeding. Right-on-red is also permitted when turning LEFT from a one-way street onto another one-way street. Right on red is prohibited if a 'NO TURN ON RED' sign is posted.",
          handbookSection: "Everyday Driving Skills — Turning",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州红灯右转时，您必须首先做什么？",
              explanation: "在宾夕法尼亚州红灯右转前，必须完全停车，然后礼让人行横道上的所有行人及所有有优先通行权的车辆，再前进。从单行道左转进入另一条单行道时，也允许红灯左转。如果张贴了「禁止红灯转弯」标志，则禁止红灯转弯。",
            },
            {
              language: "es",
              content: "Al girar a la DERECHA en luz roja en Pennsylvania, ¿qué debe hacer PRIMERO?",
              explanation: "Antes de girar a la derecha en rojo en Pennsylvania, DEBE detenerse completamente, luego ceder el paso a todos los peatones en el cruce y a todos los vehículos con derecho de paso antes de proceder. Girar a la derecha en rojo también se permite al girar a la IZQUIERDA desde una calle de sentido único hacia otra calle de sentido único. Girar en rojo está prohibido si hay un letrero de 'NO GIRAR EN ROJO'.",
            },
          ],
          options: [
            { content: "Come to a complete stop, then yield to pedestrians and vehicles before proceeding", isCorrect: true, translations: [{ language: "zh", content: "完全停车，然后礼让行人和车辆再前进" }, { language: "es", content: "Detenerse completamente, luego ceder el paso a peatones y vehículos antes de proceder" }] },
            { content: "Slow down to 15 mph and check for pedestrians", isCorrect: false, translations: [{ language: "zh", content: "减速至15英里/小时并注意行人" }, { language: "es", content: "Reducir la velocidad a 15 mph y verificar si hay peatones" }] },
            { content: "Yield only to cross traffic — pedestrians must wait", isCorrect: false, translations: [{ language: "zh", content: "只礼让横向交通——行人必须等待" }, { language: "es", content: "Ceder el paso solo al tráfico cruzado — los peatones deben esperar" }] },
            { content: "Right on red requires no stop — just yield while moving", isCorrect: false, translations: [{ language: "zh", content: "红灯右转无需停车——只需边行进边礼让" }, { language: "es", content: "Girar a la derecha en rojo no requiere detenerse — solo ceder el paso mientras se mueve" }] },
          ],
        },

      ], // end Topic 3 questions
    }, // end Topic 3

    // ─── TOPIC 4: SPECIAL CIRCUMSTANCES AND EMERGENCIES (Ch.3c) ────────────────
    {
      name: "Special Circumstances and Emergencies",
      nameEn: "Special Circumstances and Emergencies",
      description: "Work zones, railroad crossings, emergency vehicles, adverse weather, and vehicle emergencies",
      handbookUrl: `${BASE}/special-circumstances-and-emergencies`,
      translations: [
        { language: "zh", name: "特殊情况与紧急事件", description: "施工区、铁路道口、紧急车辆、恶劣天气及车辆紧急情况" },
        { language: "es", name: "Circunstancias Especiales y Emergencias", description: "Zonas de trabajo, cruces de ferrocarril, vehículos de emergencia, condiciones climáticas adversas y emergencias vehiculares" },
      ],
      questions: [

        {
          content: "What happens to most traffic fines in a designated highway work zone in Pennsylvania?",
          explanation: "In Pennsylvania, most traffic fines are DOUBLED in designated highway work zones. This applies whether or not workers are actually present in the zone at the time of the violation. The doubled fines are intended to deter speeding and reckless driving where workers may be endangered.",
          handbookSection: "Special Circumstances and Emergencies — Work Zones",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州指定的公路施工区，大多数交通罚款会怎样变化？",
              explanation: "在宾夕法尼亚州，指定公路施工区内的大多数交通罚款会翻倍。无论违规时施工区内是否实际有工人在场，此规定均适用。加倍罚款旨在阻止可能危及工人的超速和鲁莽驾驶。",
            },
            {
              language: "es",
              content: "¿Qué sucede con la mayoría de las multas de tráfico en una zona de trabajo de carretera designada en Pennsylvania?",
              explanation: "En Pennsylvania, la mayoría de las multas de tráfico se DUPLICAN en las zonas de trabajo de carretera designadas. Esto se aplica independientemente de si hay trabajadores presentes en la zona en el momento de la infracción.",
            },
          ],
          options: [
            { content: "They are doubled", isCorrect: true, translations: [{ language: "zh", content: "翻倍" }, { language: "es", content: "Se duplican" }] },
            { content: "They remain the same", isCorrect: false, translations: [{ language: "zh", content: "保持不变" }, { language: "es", content: "Permanecen iguales" }] },
            { content: "They are tripled when workers are present", isCorrect: false, translations: [{ language: "zh", content: "有工人在场时变为三倍" }, { language: "es", content: "Se triplican cuando hay trabajadores presentes" }] },
            { content: "They are increased by $50", isCorrect: false, translations: [{ language: "zh", content: "增加50美元" }, { language: "es", content: "Se incrementan en $50" }] },
          ],
        },

        {
          content: "When you approach a railroad crossing without gates or signals, what must you do?",
          explanation: "When approaching an uncontrolled railroad crossing (no gates or working signals), you must slow down and look both ways for approaching trains. If a train is coming, you must stop at least 15 feet from the nearest rail. Never assume it is safe just because no train is visible — trains can approach quickly and quietly.",
          handbookSection: "Special Circumstances and Emergencies — Railroad Crossings",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "当您接近没有护栏或信号灯的铁路道口时，应该怎么做？",
              explanation: "接近无控制铁路道口（无护栏或有效信号）时，必须减速并两侧查看是否有火车驶来。如果有火车，必须在距最近铁轨至少15英尺处停车。不要因为看不见火车就认为安全——火车可以快速且悄然接近。",
            },
            {
              language: "es",
              content: "Cuando se acerca a un cruce de ferrocarril sin barreras ni señales, ¿qué debe hacer?",
              explanation: "Al acercarse a un cruce de ferrocarril no controlado (sin barreras ni señales en funcionamiento), debe reducir la velocidad y mirar en ambas direcciones en busca de trenes que se acercan. Si viene un tren, debe detenerse al menos a 15 pies del riel más cercano.",
            },
          ],
          options: [
            { content: "Slow down, look both ways, and stop at least 15 feet from the tracks if a train approaches", isCorrect: true, translations: [{ language: "zh", content: "减速，两侧查看，如有火车驶来则在距轨道至少15英尺处停车" }, { language: "es", content: "Reduce la velocidad, mire en ambas direcciones, y deténgase al menos a 15 pies de las vías si se acerca un tren" }] },
            { content: "Maintain speed and proceed if no train is visible", isCorrect: false, translations: [{ language: "zh", content: "如果看不见火车则保持速度通行" }, { language: "es", content: "Mantener la velocidad y proceder si no hay tren visible" }] },
            { content: "Stop completely regardless of whether a train is coming", isCorrect: false, translations: [{ language: "zh", content: "无论是否有火车驶来，均须完全停车" }, { language: "es", content: "Detenerse completamente independientemente de si viene un tren" }] },
            { content: "Flash your headlights and proceed quickly", isCorrect: false, translations: [{ language: "zh", content: "闪烁车灯后快速通过" }, { language: "es", content: "Destellar los faros y proceder rápidamente" }] },
          ],
        },

        {
          content: "What happens to a driver's license if they illegally pass a stopped school bus at a railroad crossing?",
          explanation: "A driver who passes a stopped school bus at a railroad crossing faces a mandatory 30-day license suspension in addition to other penalties. The combination of railroad crossing and school bus violations represents one of the most serious non-DUI traffic offenses under Pennsylvania law.",
          handbookSection: "Special Circumstances and Emergencies — Railroad Crossings",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "驾驶员在铁路道口非法超越停靠的校车会对驾照产生什么影响？",
              explanation: "在铁路道口超越停靠校车的驾驶员将面临强制性30天吊销驾照的处罚，以及其他处罚。在宾夕法尼亚州法律下，铁路道口与校车违规的结合是非DUI交通违规中最严重的之一。",
            },
            {
              language: "es",
              content: "¿Qué le sucede a la licencia de conducir de un conductor que pasa ilegalmente un autobús escolar detenido en un cruce de ferrocarril?",
              explanation: "Un conductor que pasa un autobús escolar detenido en un cruce de ferrocarril enfrenta una suspensión obligatoria de licencia de 30 días además de otras penalizaciones. La combinación de infracciones de cruce de ferrocarril y autobús escolar representa una de las infracciones de tráfico no DUI más graves.",
            },
          ],
          options: [
            { content: "Mandatory 30-day license suspension", isCorrect: true, translations: [{ language: "zh", content: "强制性30天吊销驾照" }, { language: "es", content: "Suspensión obligatoria de licencia de 30 días" }] },
            { content: "A written warning for the first offense", isCorrect: false, translations: [{ language: "zh", content: "首次违规书面警告" }, { language: "es", content: "Una advertencia escrita por la primera infracción" }] },
            { content: "A $500 fine only — no license action", isCorrect: false, translations: [{ language: "zh", content: "仅500美元罚款——无驾照处分" }, { language: "es", content: "Solo una multa de $500 — sin acción sobre la licencia" }] },
            { content: "60-day license suspension", isCorrect: false, translations: [{ language: "zh", content: "60天吊销驾照" }, { language: "es", content: "Suspensión de licencia de 60 días" }] },
          ],
        },

        {
          content: "When an emergency vehicle with flashing lights and siren approaches from any direction, what must you do?",
          explanation: "When an emergency vehicle approaches with flashing lights or siren, you must immediately pull to the right edge of the road and stop. Remain stopped until the emergency vehicle has passed. If you are in an intersection, clear the intersection first before pulling to the right.",
          handbookSection: "Special Circumstances and Emergencies — Emergency Vehicles",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "当闪灯鸣笛的紧急车辆从任何方向驶来时，您必须怎么做？",
              explanation: "当有闪光灯或警报器的紧急车辆驶来时，必须立即向右靠边停车。保持停车，直到紧急车辆通过。如果您在路口，先通过路口再靠右停车。",
            },
            {
              language: "es",
              content: "Cuando un vehículo de emergencia con luces intermitentes y sirena se aproxima desde cualquier dirección, ¿qué debe hacer?",
              explanation: "Cuando un vehículo de emergencia se aproxima con luces intermitentes o sirena, debe inmediatamente desviarse hacia el borde derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo de emergencia haya pasado.",
            },
          ],
          options: [
            { content: "Pull to the right edge and stop until the vehicle passes", isCorrect: true, translations: [{ language: "zh", content: "靠右边停车，直到紧急车辆通过" }, { language: "es", content: "Desviarse al borde derecho y detenerse hasta que el vehículo pase" }] },
            { content: "Maintain speed and move to the right lane only", isCorrect: false, translations: [{ language: "zh", content: "保持速度只移入右车道" }, { language: "es", content: "Mantener la velocidad y moverse solo al carril derecho" }] },
            { content: "Stop immediately wherever you are, even in an intersection", isCorrect: false, translations: [{ language: "zh", content: "立即在原地停车，即使在路口也一样" }, { language: "es", content: "Detenerse inmediatamente donde esté, incluso en una intersección" }] },
            { content: "Speed up to clear the road quickly", isCorrect: false, translations: [{ language: "zh", content: "加速快速清路" }, { language: "es", content: "Acelerar para despejar la carretera rápidamente" }] },
          ],
        },

        {
          content: "In Pennsylvania, what is the maximum speed allowed when transporting passengers in an open truck bed?",
          explanation: "In Pennsylvania, vehicles transporting passengers in an open truck bed may not exceed 35 mph. Additionally, no person under 18 years of age may be transported in the open bed of a truck, regardless of speed. This law protects passengers from being thrown from the vehicle in a sudden stop or crash.",
          handbookSection: "Special Circumstances and Emergencies — Special Vehicles",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，在敞篷货车车厢运送乘客时，最高限速是多少？",
              explanation: "在宾夕法尼亚州，在敞篷货车车厢运送乘客的车辆不得超过每小时35英里。此外，无论速度如何，18岁以下人员不得乘坐货车敞篷车厢。此法律保护乘客在急停或事故中不被甩出车辆。",
            },
            {
              language: "es",
              content: "En Pennsylvania, ¿cuál es la velocidad máxima permitida al transportar pasajeros en la cama abierta de un camión?",
              explanation: "En Pennsylvania, los vehículos que transportan pasajeros en la cama abierta de un camión no pueden exceder los 35 mph. Además, ninguna persona menor de 18 años puede ser transportada en la cama abierta de un camión, independientemente de la velocidad.",
            },
          ],
          options: [
            { content: "35 mph", isCorrect: true, translations: [{ language: "zh", content: "每小时35英里" }, { language: "es", content: "35 mph" }] },
            { content: "45 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时45英里" }, { language: "es", content: "45 mph" }] },
            { content: "25 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时25英里" }, { language: "es", content: "25 mph" }] },
            { content: "55 mph", isCorrect: false, translations: [{ language: "zh", content: "每小时55英里" }, { language: "es", content: "55 mph" }] },
          ],
        },

        {
          content: "If your accelerator sticks while driving, what should you do FIRST?",
          explanation: "If the accelerator sticks, first try to free it by pressing it to the floor and releasing it. If that fails, shift to neutral and apply steady brake pressure while steering to a safe stop. Do NOT turn off the ignition — this locks the steering wheel. After stopping safely, turn off the engine.",
          handbookSection: "Special Circumstances and Emergencies — Vehicle Emergencies",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "如果驾驶时油门卡住，您应该首先怎么做？",
              explanation: "如果油门卡住，首先尝试将其踩到底再放开来松开。如果失败，换入空挡，施加稳定的刹车压力，同时转向安全停车地点。不要关闭点火装置——这会锁定方向盘。安全停车后，再关闭发动机。",
            },
            {
              language: "es",
              content: "Si el acelerador se atasca mientras conduce, ¿qué debe hacer PRIMERO?",
              explanation: "Si el acelerador se atasca, primero intente liberarlo presionándolo hasta el fondo y soltándolo. Si eso falla, cambie a neutro y aplique presión constante en los frenos mientras dirige hacia una parada segura. NO apague la ignición — esto bloquea el volante.",
            },
          ],
          options: [
            { content: "Try pressing the accelerator to the floor and releasing it", isCorrect: true, translations: [{ language: "zh", content: "尝试将油门踩到底然后放开" }, { language: "es", content: "Intente presionar el acelerador hasta el fondo y soltarlo" }] },
            { content: "Immediately turn off the ignition", isCorrect: false, translations: [{ language: "zh", content: "立即关闭点火装置" }, { language: "es", content: "Apague inmediatamente la ignición" }] },
            { content: "Apply the emergency brake immediately", isCorrect: false, translations: [{ language: "zh", content: "立即拉紧急刹车" }, { language: "es", content: "Aplique el freno de emergencia inmediatamente" }] },
            { content: "Steer into oncoming traffic to slow down", isCorrect: false, translations: [{ language: "zh", content: "转向对向交通以减速" }, { language: "es", content: "Dirija hacia el tráfico en sentido contrario para reducir la velocidad" }] },
          ],
        },

        {
          content: "What should you do if your brakes fail while driving downhill?",
          explanation: "If your brakes fail while driving downhill, downshift to a lower gear to use engine braking and reduce speed. Look for an escape ramp (runaway truck ramp) or try to guide the vehicle to a grassy area or uphill slope to slow it. Pumping the brake pedal may also restore hydraulic brake pressure. Turn on hazard lights and sound your horn to warn others.",
          handbookSection: "Special Circumstances and Emergencies — Vehicle Emergencies",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "如果在下坡时刹车失效，您应该怎么做？",
              explanation: "下坡时刹车失效，应降低档位利用发动机制动减速。寻找逃生坡道（失控卡车坡道），或尝试将车辆引导到草地或上坡以减速。反复踩刹车踏板也可能恢复液压制动压力。打开危险警示灯，鸣笛警告他人。",
            },
            {
              language: "es",
              content: "¿Qué debe hacer si sus frenos fallan mientras conduce cuesta abajo?",
              explanation: "Si sus frenos fallan cuesta abajo, cambie a una marcha más baja para usar el freno del motor y reducir la velocidad. Busque una rampa de escape o intente guiar el vehículo hacia un área con hierba o una cuesta arriba para reducir la velocidad. Encienda las luces de emergencia y toque el claxon para advertir a otros.",
            },
          ],
          options: [
            { content: "Downshift to use engine braking and look for an escape ramp or uphill slope", isCorrect: true, translations: [{ language: "zh", content: "降档利用发动机制动，寻找逃生坡道或上坡" }, { language: "es", content: "Reduce de marcha para usar el freno del motor y busca una rampa de escape o cuesta arriba" }] },
            { content: "Turn off the engine to stop the vehicle immediately", isCorrect: false, translations: [{ language: "zh", content: "关闭发动机立即停车" }, { language: "es", content: "Apague el motor para detener el vehículo inmediatamente" }] },
            { content: "Steer into the guardrail to create friction", isCorrect: false, translations: [{ language: "zh", content: "将车辆撞向护栏以产生摩擦力" }, { language: "es", content: "Dirija hacia la barrera de contención para crear fricción" }] },
            { content: "Open the door and drag your foot", isCorrect: false, translations: [{ language: "zh", content: "打开车门用脚拖地" }, { language: "es", content: "Abra la puerta y arrastre el pie" }] },
          ],
        },

        {
          content: "If your vehicle has ABS (Anti-lock Braking System) and you need to make an emergency stop, how should you apply the brakes?",
          explanation: "With ABS, you should apply FIRM, CONTINUOUS pressure to the brake pedal and do NOT pump the brakes. ABS automatically prevents the wheels from locking up, so it pumps the brakes far faster than any driver can. You may feel a pulsing or vibrating sensation in the pedal — this is normal. Keep pressing firmly and steer to avoid the hazard. ABS allows you to steer while braking hard.",
          handbookSection: "Special Circumstances and Emergencies — Skids and Loss of Control",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "如果您的车辆有ABS（防抱死制动系统），需要紧急停车时，应如何使用刹车？",
              explanation: "使用ABS时，应施加稳定持续的刹车踏板压力，不要点刹。ABS会自动防止车轮抱死，其点刹速度远超任何驾驶人。您可能会感觉到踏板振动——这是正常的。持续用力踩踏，同时转向避开危险。ABS允许您在大力制动时仍能转向。",
            },
            {
              language: "es",
              content: "Si su vehículo tiene ABS (Sistema de frenos antibloqueo) y necesita hacer una parada de emergencia, ¿cómo debe aplicar los frenos?",
              explanation: "Con ABS, debe aplicar presión FIRME Y CONTINUA al pedal del freno y NO bombear los frenos. El ABS previene automáticamente el bloqueo de las ruedas, bombeando los frenos mucho más rápido que cualquier conductor. Puede sentir una sensación de pulsación en el pedal — esto es normal. Siga presionando firmemente y dirija para evitar el peligro.",
            },
          ],
          options: [
            { content: "Apply firm, continuous pressure — do NOT pump the brakes", isCorrect: true, translations: [{ language: "zh", content: "施加稳定持续的压力——不要点刹" }, { language: "es", content: "Aplique presión firme y continua — NO bombee los frenos" }] },
            { content: "Pump the brakes rapidly to prevent skidding", isCorrect: false, translations: [{ language: "zh", content: "快速点刹以防止打滑" }, { language: "es", content: "Bombee los frenos rápidamente para prevenir el deslizamiento" }] },
            { content: "Release the brake pedal completely to let ABS activate on its own", isCorrect: false, translations: [{ language: "zh", content: "完全松开刹车踏板让ABS自动启动" }, { language: "es", content: "Suelte el pedal del freno completamente para que el ABS se active por sí solo" }] },
            { content: "Slam the brakes once and hold them for 3 seconds, then release", isCorrect: false, translations: [{ language: "zh", content: "猛踩刹车一次保持3秒，然后松开" }, { language: "es", content: "Pise los frenos una vez y manténgalos durante 3 segundos, luego suelte" }] },
          ],
        },

        {
          content: "If your vehicle goes into a rear-wheel skid, what is the correct steering response?",
          explanation: "In a rear-wheel skid (where the back of the vehicle slides sideways), you should steer in the direction the rear of the vehicle is sliding — this is called 'steering into the skid.' For example, if the rear slides to the left, steer to the left. Do not apply the brakes during the skid, as this makes it worse. Gently ease off the gas and steer toward the skid to regain control.",
          handbookSection: "Special Circumstances and Emergencies — Skids and Loss of Control",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "如果您的车辆发生后轮打滑，正确的转向操作是什么？",
              explanation: "在后轮打滑（车辆后部横向滑动）时，应朝车辆后部滑动的方向转向——这称为「顺打滑方向转向」。例如，如果后部向左滑，则向左转向。打滑过程中不要踩刹车，这会使情况更糟。轻松松开油门，向打滑方向转向以恢复控制。",
            },
            {
              language: "es",
              content: "Si su vehículo entra en un derrape de rueda trasera, ¿cuál es la respuesta de dirección correcta?",
              explanation: "En un derrape de rueda trasera (donde la parte trasera del vehículo se desliza lateralmente), debe dirigir en la dirección en que se desliza la parte trasera del vehículo — esto se llama 'dirigir hacia el derrape'. Por ejemplo, si la parte trasera se desliza hacia la izquierda, dirija hacia la izquierda. No aplique los frenos durante el derrape, ya que esto lo empeora.",
            },
          ],
          options: [
            { content: "Steer in the direction the rear of the vehicle is sliding", isCorrect: true, translations: [{ language: "zh", content: "朝车辆后部滑动的方向转向" }, { language: "es", content: "Dirija en la dirección en que se desliza la parte trasera del vehículo" }] },
            { content: "Steer sharply in the opposite direction of the skid", isCorrect: false, translations: [{ language: "zh", content: "向打滑方向的反方向急转" }, { language: "es", content: "Dirija bruscamente en la dirección opuesta al derrape" }] },
            { content: "Apply full brakes to stop the vehicle immediately", isCorrect: false, translations: [{ language: "zh", content: "全力制动立即停车" }, { language: "es", content: "Aplique frenos completos para detener el vehículo inmediatamente" }] },
            { content: "Accelerate to regain traction", isCorrect: false, translations: [{ language: "zh", content: "加速以恢复牵引力" }, { language: "es", content: "Acelere para recuperar la tracción" }] },
          ],
        },

        {
          content: "At what water depth should you NEVER attempt to drive through a flooded road?",
          explanation: "You should never drive through floodwater that is more than 6 inches deep if you're walking, as 6 inches can knock an adult off their feet. For vehicles: 12 inches of water can stall smaller cars and float lightweight vehicles; 2 feet of moving water can sweep away most vehicles. The rule is: 'Turn Around, Don't Drown.' You cannot always gauge depth from the roadway surface, and currents can be much stronger than they appear.",
          handbookSection: "Special Circumstances and Emergencies — Driving in Adverse Conditions",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "积水深度达到多少时绝对不应尝试驾车通过淹水道路？",
              explanation: "如果步行，不应尝试通过超过6英寸深的洪水，因为6英寸的水可以将成人冲倒。对于车辆：12英寸的水可能使小型汽车熄火，并使轻型车辆漂浮；2英尺的流动水可以冲走大多数车辆。规则是：「转头，不要溺水」。您无法总是从路面判断深度，水流可能比看起来强劲得多。",
            },
            {
              language: "es",
              content: "¿A qué profundidad de agua NUNCA debe intentar conducir a través de una carretera inundada?",
              explanation: "Nunca debe conducir a través de agua de inundación de más de 6 pulgadas de profundidad si está caminando, ya que 6 pulgadas pueden derribar a un adulto. Para vehículos: 12 pulgadas de agua pueden parar autos pequeños y hacer flotar vehículos ligeros; 2 pies de agua en movimiento pueden arrastrar la mayoría de los vehículos. La regla es: 'Dé la vuelta, no se ahogue.'",
            },
          ],
          options: [
            { content: "2 feet of moving water — it can sweep away most vehicles", isCorrect: true, translations: [{ language: "zh", content: "2英尺的流动水——可以冲走大多数车辆" }, { language: "es", content: "2 pies de agua en movimiento — puede arrastrar la mayoría de los vehículos" }] },
            { content: "6 feet — only very deep water is dangerous to vehicles", isCorrect: false, translations: [{ language: "zh", content: "6英尺——只有非常深的水对车辆才有危险" }, { language: "es", content: "6 pies — solo el agua muy profunda es peligrosa para los vehículos" }] },
            { content: "4 feet — standard sedans can handle up to 3 feet safely", isCorrect: false, translations: [{ language: "zh", content: "4英尺——标准轿车可以安全通过3英尺水深" }, { language: "es", content: "4 pies — los sedanes estándar pueden manejar hasta 3 pies con seguridad" }] },
            { content: "Any depth of water is safe for SUVs and trucks", isCorrect: false, translations: [{ language: "zh", content: "任何深度的水对SUV和卡车都是安全的" }, { language: "es", content: "Cualquier profundidad de agua es segura para SUVs y camiones" }] },
          ],
        },

        {
          content: "If your vehicle becomes trapped on railroad tracks and a train is approaching, in which direction should you run after exiting?",
          explanation: "If your vehicle stalls on railroad tracks and you cannot move it, you must immediately get everyone out and run — but in the direction FROM WHICH THE TRAIN IS COMING. When a train hits a vehicle, debris is thrown forward in the direction the train is traveling. By running toward the approaching train (but off to the side of the tracks), you escape the debris field that would hit you if you ran the same direction as the train.",
          handbookSection: "Special Circumstances and Emergencies — Railroad Crossings",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "如果您的车辆被困在铁路轨道上且火车正在驶来，下车后应朝哪个方向跑？",
              explanation: "如果您的车辆在铁路轨道上熄火且无法移动，必须立即带所有人下车逃跑——但要朝火车驶来的方向跑（偏离轨道）。火车撞上车辆时，碎片会向火车行驶方向飞出。朝来车方向跑（但偏离轨道）可以让您逃离碎片飞散区域，否则如果您与火车同方向跑，碎片将打中您。",
            },
            {
              language: "es",
              content: "Si su vehículo queda atrapado en las vías del tren y se acerca un tren, ¿en qué dirección debe correr después de salir?",
              explanation: "Si su vehículo se atasca en las vías del tren y no puede moverlo, debe hacer salir a todos inmediatamente y correr — pero en la dirección DESDE LA QUE VIENE EL TREN. Cuando un tren golpea un vehículo, los escombros se lanzan hacia adelante en la dirección en que viaja el tren. Al correr hacia el tren que se aproxima (pero fuera de las vías), escapa del campo de escombros.",
            },
          ],
          options: [
            { content: "Toward the approaching train — but off to the side of the tracks", isCorrect: true, translations: [{ language: "zh", content: "朝来车方向——但偏离轨道侧面" }, { language: "es", content: "Hacia el tren que se aproxima — pero fuera de las vías" }] },
            { content: "In the same direction the train is traveling to stay ahead of it", isCorrect: false, translations: [{ language: "zh", content: "朝火车行驶方向跑以保持领先" }, { language: "es", content: "En la misma dirección que viaja el tren para mantenerse adelante" }] },
            { content: "Stay inside the vehicle — it is safer than being outside", isCorrect: false, translations: [{ language: "zh", content: "留在车内——这比在外面更安全" }, { language: "es", content: "Permanezca dentro del vehículo — es más seguro que estar afuera" }] },
            { content: "Run perpendicular to the tracks regardless of the train's direction", isCorrect: false, translations: [{ language: "zh", content: "无论火车方向如何，垂直于轨道方向跑" }, { language: "es", content: "Corra perpendicular a las vías independientemente de la dirección del tren" }] },
          ],
        },

        {
          content: "How should you approach a horse-drawn vehicle or a horse being ridden on the road?",
          explanation: "When approaching a horse-drawn vehicle or a horse being ridden, you should slow down gradually (not suddenly) and avoid using your horn. Sudden loud sounds can startle horses, causing them to bolt and potentially injure the rider or driver. Make your presence known calmly. If the horse appears frightened, stop and let the rider guide the horse past. Give horses plenty of room when passing.",
          handbookSection: "Special Circumstances and Emergencies — Sharing the Road",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "遇到马拉车辆或骑马者在路上时，应如何处理？",
              explanation: "接近马拉车辆或骑马者时，应逐渐减速（而非突然）并避免鸣喇叭。突然的巨响可能会惊吓马匹，使其受惊并可能伤害骑手或驾驶人。平静地让对方知道您的存在。如果马匹看起来受惊，停车让骑手引导马匹通过。超过马匹时给予充足的空间。",
            },
            {
              language: "es",
              content: "¿Cómo debe acercarse a un vehículo tirado por caballos o a un caballo que está siendo montado en la carretera?",
              explanation: "Al acercarse a un vehículo tirado por caballos o a un caballo siendo montado, debe reducir la velocidad gradualmente (no de repente) y evitar usar la bocina. Los sonidos fuertes repentinos pueden asustar a los caballos, causando que se desboquen y potencialmente lastimen al jinete o conductor. Dé a conocer su presencia con calma.",
            },
          ],
          options: [
            { content: "Slow down gradually and do not use your horn", isCorrect: true, translations: [{ language: "zh", content: "逐渐减速，不要鸣喇叭" }, { language: "es", content: "Reduzca la velocidad gradualmente y no use la bocina" }] },
            { content: "Use a short horn blast to alert the rider you are passing", isCorrect: false, translations: [{ language: "zh", content: "短促鸣笛提醒骑手您要超车" }, { language: "es", content: "Use un toque corto de bocina para alertar al jinete que va a pasar" }] },
            { content: "Pass quickly at full speed to minimize the time spent near the horse", isCorrect: false, translations: [{ language: "zh", content: "以全速快速通过，以减少靠近马匹的时间" }, { language: "es", content: "Pase rápidamente a velocidad máxima para minimizar el tiempo cerca del caballo" }] },
            { content: "Flash your headlights to signal your approach", isCorrect: false, translations: [{ language: "zh", content: "闪烁前灯示意接近" }, { language: "es", content: "Destelle los faros para señalar su aproximación" }] },
          ],
        },

        {
          content: "What happens to fines for traffic violations committed in a Pennsylvania work zone?",
          explanation: "In Pennsylvania, fines for most traffic violations committed in active work zones are DOUBLED. This applies to speeding and many other violations when workers are present. The doubled fines reflect the increased danger to highway workers and construction crews. Speed limits posted in work zones must be obeyed — even if no workers appear to be present at the moment you pass through.",
          handbookSection: "Special Circumstances and Emergencies — Work Zones",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州施工区内的交通违规罚款会怎样？",
              explanation: "在宾夕法尼亚州，在活跃施工区内的大多数交通违规罚款将加倍。当工人在场时，这适用于超速和许多其他违规。加倍的罚款反映了对公路工人和施工人员更大的危险。必须遵守施工区内张贴的速度限制——即使在您通过时似乎没有工人在场。",
            },
            {
              language: "es",
              content: "¿Qué sucede con las multas por infracciones de tráfico cometidas en una zona de obras de Pennsylvania?",
              explanation: "En Pennsylvania, las multas por la mayoría de las infracciones de tráfico cometidas en zonas de obras activas se DUPLICAN. Esto se aplica a los excesos de velocidad y muchas otras infracciones cuando hay trabajadores presentes. Las multas duplicadas reflejan el mayor peligro para los trabajadores de carreteras y las tripulaciones de construcción.",
            },
          ],
          options: [
            { content: "Fines are doubled", isCorrect: true, translations: [{ language: "zh", content: "罚款加倍" }, { language: "es", content: "Las multas se duplican" }] },
            { content: "Fines are tripled", isCorrect: false, translations: [{ language: "zh", content: "罚款三倍" }, { language: "es", content: "Las multas se triplican" }] },
            { content: "Fines are the same as on regular roads", isCorrect: false, translations: [{ language: "zh", content: "罚款与普通道路相同" }, { language: "es", content: "Las multas son las mismas que en carreteras normales" }] },
            { content: "Only speeding fines are increased — other violations are normal", isCorrect: false, translations: [{ language: "zh", content: "只有超速罚款增加——其他违规正常" }, { language: "es", content: "Solo las multas por exceso de velocidad aumentan — otras infracciones son normales" }] },
          ],
        },

        {
          content: "What is the approximate total stopping distance for a fully loaded large truck traveling at 65 mph?",
          explanation: "A fully loaded large truck traveling at 65 mph requires up to 600 feet (about the length of two football fields) to stop completely. This is far more than the stopping distance for a passenger car because of the truck's enormous weight. This is why following a large truck too closely is dangerous — if the truck stops suddenly, a car behind it has far less stopping distance relative to the truck's weight. Give trucks extra space.",
          handbookSection: "Special Circumstances and Emergencies — Sharing the Road",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "一辆满载的大型卡车在65英里/小时行驶时，总刹车距离大约是多少？",
              explanation: "一辆满载的大型卡车在65英里/小时行驶时，需要多达600英尺（约两个足球场的长度）才能完全停下。这远超乘用车的刹车距离，因为卡车的重量巨大。这就是为什么紧跟大型卡车后面很危险——如果卡车突然停车，后面的轿车相对于卡车的重量，刹车距离远远不够。给卡车额外的空间。",
            },
            {
              language: "es",
              content: "¿Cuál es la distancia total de frenado aproximada para un camión grande completamente cargado que viaja a 65 mph?",
              explanation: "Un camión grande completamente cargado que viaja a 65 mph requiere hasta 600 pies (aproximadamente la longitud de dos campos de fútbol americano) para detenerse completamente. Esto es mucho más que la distancia de frenado de un automóvil de pasajeros debido al enorme peso del camión. Es por eso que seguir demasiado de cerca a un camión grande es peligroso.",
            },
          ],
          options: [
            { content: "Up to 600 feet — about the length of two football fields", isCorrect: true, translations: [{ language: "zh", content: "多达600英尺——约两个足球场的长度" }, { language: "es", content: "Hasta 600 pies — aproximadamente la longitud de dos campos de fútbol americano" }] },
            { content: "About 100 feet — similar to a car", isCorrect: false, translations: [{ language: "zh", content: "约100英尺——与轿车相似" }, { language: "es", content: "Aproximadamente 100 pies — similar a un automóvil" }] },
            { content: "About 200 feet — only twice as long as a car", isCorrect: false, translations: [{ language: "zh", content: "约200英尺——只比轿车长两倍" }, { language: "es", content: "Aproximadamente 200 pies — solo el doble que un automóvil" }] },
            { content: "About 1,000 feet — one should never drive behind a truck", isCorrect: false, translations: [{ language: "zh", content: "约1,000英尺——不应在卡车后面驾驶" }, { language: "es", content: "Aproximadamente 1,000 pies — nunca se debe conducir detrás de un camión" }] },
          ],
        },

        {
          content: "What does 'black ice' look like from a driver's perspective, and where does it typically form?",
          explanation: "Black ice is a thin, nearly invisible layer of ice on the road surface. From a driver's perspective, the road looks dark and wet — like regular wet pavement. A telltale sign: vehicles ahead show no tire spray (water would normally kick up as a mist). Black ice typically forms on bridges, overpasses, shaded areas, and north-facing slopes where temperatures drop below freezing. It forms when temperatures fall suddenly or when light rain or fog freezes on the surface.",
          handbookSection: "Special Circumstances and Emergencies — Driving in Adverse Conditions",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "从驾驶人的角度来看，「黑冰」是什么样子，它通常在哪里形成？",
              explanation: "黑冰是路面上一层薄而几乎看不见的冰层。从驾驶人的角度看，路面看起来又黑又湿——就像普通的湿沥青。一个明显迹象：前方车辆没有轮胎飞溅（水通常会溅起雾状）。黑冰通常在桥梁、高架桥、阴暗区域和背阴坡面等温度降至冰点以下的地方形成。",
            },
            {
              language: "es",
              content: "¿Cómo se ve el 'hielo negro' desde la perspectiva de un conductor, y dónde se forma típicamente?",
              explanation: "El hielo negro es una capa delgada y casi invisible de hielo en la superficie de la carretera. Desde la perspectiva de un conductor, la carretera parece oscura y mojada — como pavimento mojado normal. Una señal reveladora: los vehículos de adelante no muestran salpicadura de neumáticos. El hielo negro generalmente se forma en puentes, pasos elevados, áreas sombreadas y pendientes orientadas al norte.",
            },
          ],
          options: [
            { content: "The road looks dark and wet, but vehicles ahead show no tire spray", isCorrect: true, translations: [{ language: "zh", content: "路面看起来又黑又湿，但前方车辆没有轮胎飞溅" }, { language: "es", content: "La carretera parece oscura y mojada, pero los vehículos de adelante no muestran salpicadura de neumáticos" }] },
            { content: "White patches visible on the road surface", isCorrect: false, translations: [{ language: "zh", content: "路面上可见白色斑块" }, { language: "es", content: "Parches blancos visibles en la superficie de la carretera" }] },
            { content: "A thick layer of ice clearly visible from the windshield", isCorrect: false, translations: [{ language: "zh", content: "从挡风玻璃可以清楚看到的厚冰层" }, { language: "es", content: "Una capa gruesa de hielo claramente visible desde el parabrisas" }] },
            { content: "Shiny blue tinge on the road surface in sunlight", isCorrect: false, translations: [{ language: "zh", content: "阳光下路面有蓝色光泽" }, { language: "es", content: "Tono azul brillante en la superficie de la carretera a la luz del sol" }] },
          ],
        },

        {
          content: "What light color identifies a vehicle in a licensed funeral procession in Pennsylvania?",
          explanation: "In Pennsylvania, vehicles in a licensed funeral procession may display a purple or violet flashing or rotating light. This distinguishes the procession from emergency vehicles (which use red and/or blue lights) and allows drivers to recognize the procession. Other drivers must yield to a funeral procession that has lawfully entered an intersection, even if the lead vehicle had a green light.",
          handbookSection: "Special Circumstances and Emergencies — Special Vehicles",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州持牌葬礼车队的车辆使用什么颜色的灯光？",
              explanation: "在宾夕法尼亚州，持牌葬礼车队的车辆可以显示紫色或紫罗兰色闪烁或旋转灯光。这将车队与紧急车辆（使用红色和/或蓝色灯光）区分开，并让驾驶人认出车队。其他驾驶人必须礼让已合法进入路口的葬礼车队，即使领头车辆亮的是绿灯。",
            },
            {
              language: "es",
              content: "¿Qué color de luz identifica a un vehículo en un cortejo fúnebre con licencia en Pennsylvania?",
              explanation: "En Pennsylvania, los vehículos en un cortejo fúnebre con licencia pueden mostrar una luz parpadeante o giratoria de color púrpura o violeta. Esto distingue el cortejo de los vehículos de emergencia (que usan luces rojas y/o azules) y permite a los conductores reconocer el cortejo. Otros conductores deben ceder el paso a un cortejo fúnebre que haya entrado legalmente en una intersección.",
            },
          ],
          options: [
            { content: "Purple or violet", isCorrect: true, translations: [{ language: "zh", content: "紫色或紫罗兰色" }, { language: "es", content: "Púrpura o violeta" }] },
            { content: "Amber or yellow", isCorrect: false, translations: [{ language: "zh", content: "琥珀色或黄色" }, { language: "es", content: "Ámbar o amarillo" }] },
            { content: "White only", isCorrect: false, translations: [{ language: "zh", content: "仅白色" }, { language: "es", content: "Solo blanco" }] },
            { content: "Blue — the same as police vehicles", isCorrect: false, translations: [{ language: "zh", content: "蓝色——与警车相同" }, { language: "es", content: "Azul — igual que los vehículos de policía" }] },
          ],
        },

      ], // end Topic 4 questions
    }, // end Topic 4

    // ─── TOPIC 5: DRIVER FACTORS (Ch.3d) ────────────────────────────────────────
    {
      name: "Driver Factors",
      nameEn: "Driver Factors",
      description: "Alcohol, drugs, fatigue, distracted driving, and impaired judgment behind the wheel",
      handbookUrl: `${BASE}/driver-factors`,
      translations: [
        { language: "zh", name: "驾驶员因素", description: "酒精、药物、疲劳、分心驾驶及驾驶时的判断力受损" },
        { language: "es", name: "Factores del Conductor", description: "Alcohol, drogas, fatiga, conducción distraída y juicio deteriorado al volante" },
      ],
      questions: [

        {
          content: "What is the legal Blood Alcohol Content (BAC) limit for drivers age 21 and older in Pennsylvania?",
          explanation: "In Pennsylvania, a driver age 21 or older is considered legally impaired at a BAC of 0.08% or higher. However, impairment can begin at lower BAC levels. Even a BAC under the legal limit can result in DUI charges if the officer observes impaired driving behavior.",
          handbookSection: "Driver Factors — Alcohol and DUI",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，21岁及以上驾驶员的合法血液酒精含量（BAC）上限是多少？",
              explanation: "在宾夕法尼亚州，21岁及以上驾驶员血液酒精含量达到0.08%或以上被视为法律意义上的醉驾。但是，酒精损害可能在更低的BAC水平开始。即使BAC低于法定上限，如果警察观察到驾驶行为受损，也可能被指控DUI。",
            },
            {
              language: "es",
              content: "¿Cuál es el límite legal de Concentración de Alcohol en Sangre (BAC) para conductores de 21 años o más en Pennsylvania?",
              explanation: "En Pennsylvania, un conductor de 21 años o más se considera legalmente deteriorado con un BAC de 0.08% o más. Sin embargo, el deterioro puede comenzar a niveles de BAC más bajos. Incluso un BAC por debajo del límite legal puede resultar en cargos de DUI si el oficial observa comportamiento de conducción deteriorado.",
            },
          ],
          options: [
            { content: "0.08%", isCorrect: true, translations: [{ language: "zh", content: "0.08%" }, { language: "es", content: "0.08%" }] },
            { content: "0.10%", isCorrect: false, translations: [{ language: "zh", content: "0.10%" }, { language: "es", content: "0.10%" }] },
            { content: "0.05%", isCorrect: false, translations: [{ language: "zh", content: "0.05%" }, { language: "es", content: "0.05%" }] },
            { content: "0.06%", isCorrect: false, translations: [{ language: "zh", content: "0.06%" }, { language: "es", content: "0.06%" }] },
          ],
        },

        {
          content: "What BAC level is used to charge drivers UNDER age 21 with DUI in Pennsylvania?",
          explanation: "Pennsylvania has a zero-tolerance policy for drivers under 21. Any measurable BAC (0.02% or higher) is sufficient to charge a driver under 21 with DUI. This is far stricter than the 0.08% standard for adults, reflecting the state's policy against underage drinking and driving.",
          handbookSection: "Driver Factors — Alcohol and DUI",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，对21岁以下驾驶员提出DUI指控的BAC标准是多少？",
              explanation: "宾夕法尼亚州对21岁以下驾驶员实行零容忍政策。任何可测量的BAC（0.02%或以上）都足以对21岁以下驾驶员提出DUI指控。这比成年人的0.08%标准严格得多，反映了该州反对未成年人酒驾的政策。",
            },
            {
              language: "es",
              content: "¿Qué nivel de BAC se usa para acusar a conductores MENORES de 21 años con DUI en Pennsylvania?",
              explanation: "Pennsylvania tiene una política de tolerancia cero para conductores menores de 21 años. Cualquier BAC medible (0.02% o más) es suficiente para acusar a un conductor menor de 21 años con DUI. Esto es mucho más estricto que el estándar del 0.08% para adultos.",
            },
          ],
          options: [
            { content: "0.02% or higher", isCorrect: true, translations: [{ language: "zh", content: "0.02%或以上" }, { language: "es", content: "0.02% o más" }] },
            { content: "0.08% — same as adults", isCorrect: false, translations: [{ language: "zh", content: "0.08%——与成人相同" }, { language: "es", content: "0.08% — igual que los adultos" }] },
            { content: "0.04%", isCorrect: false, translations: [{ language: "zh", content: "0.04%" }, { language: "es", content: "0.04%" }] },
            { content: "Any detectable alcohol — 0.00%", isCorrect: false, translations: [{ language: "zh", content: "任何可检测的酒精——0.00%" }, { language: "es", content: "Cualquier alcohol detectable — 0.00%" }] },
          ],
        },

        {
          content: "Approximately how many hours of being awake is equivalent to a BAC of 0.05%?",
          explanation: "Research shows that 18 hours of continuous wakefulness causes driving impairment equivalent to a BAC of about 0.05%. After 24 hours without sleep, impairment reaches the equivalent of a BAC of 0.10%. Drowsy driving kills thousands of people each year and is as dangerous as drunk driving.",
          handbookSection: "Driver Factors — Drowsy Driving",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "保持清醒大约多少小时相当于血液酒精含量0.05%的驾驶损害？",
              explanation: "研究表明，持续清醒18小时会导致相当于血液酒精含量约0.05%的驾驶损害。睡眠不足24小时后，损害程度达到相当于血液酒精含量0.10%。疲劳驾驶每年造成数千人死亡，与醉酒驾驶一样危险。",
            },
            {
              language: "es",
              content: "¿Aproximadamente cuántas horas de estar despierto equivalen a un BAC del 0.05%?",
              explanation: "Las investigaciones muestran que 18 horas de vigilia continua causa deterioro en la conducción equivalente a un BAC de aproximadamente 0.05%. Después de 24 horas sin dormir, el deterioro alcanza el equivalente a un BAC del 0.10%. La conducción somnolienta mata a miles de personas cada año.",
            },
          ],
          options: [
            { content: "18 hours", isCorrect: true, translations: [{ language: "zh", content: "18小时" }, { language: "es", content: "18 horas" }] },
            { content: "12 hours", isCorrect: false, translations: [{ language: "zh", content: "12小时" }, { language: "es", content: "12 horas" }] },
            { content: "24 hours", isCorrect: false, translations: [{ language: "zh", content: "24小时" }, { language: "es", content: "24 horas" }] },
            { content: "8 hours", isCorrect: false, translations: [{ language: "zh", content: "8小时" }, { language: "es", content: "8 horas" }] },
          ],
        },

        {
          content: "What is the BAC limit for commercial vehicle drivers (CDL holders) in Pennsylvania?",
          explanation: "Commercial driver's license (CDL) holders are held to a stricter standard. In Pennsylvania, a CDL driver is considered impaired at a BAC of 0.04% — half the limit for regular drivers. This applies while operating a commercial vehicle. A CDL driver with BAC of 0.04% or higher faces both DUI charges and loss of their CDL.",
          handbookSection: "Driver Factors — Alcohol and DUI",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州对商业车辆驾驶员（CDL持有者）的BAC限制是多少？",
              explanation: "商业驾驶执照（CDL）持有者须遵守更严格的标准。在宾夕法尼亚州，CDL驾驶员BAC达到0.04%即被视为损害状态——是普通驾驶员限制的一半。BAC达到0.04%或以上的CDL驾驶员将面临DUI指控和吊销CDL。",
            },
            {
              language: "es",
              content: "¿Cuál es el límite de BAC para los conductores de vehículos comerciales (titulares de CDL) en Pennsylvania?",
              explanation: "Los titulares de licencia de conducir comercial (CDL) están sujetos a un estándar más estricto. En Pennsylvania, un conductor CDL se considera deteriorado con un BAC de 0.04% — la mitad del límite para conductores regulares. Un conductor CDL con BAC de 0.04% o más enfrenta cargos de DUI y pérdida de su CDL.",
            },
          ],
          options: [
            { content: "0.04%", isCorrect: true, translations: [{ language: "zh", content: "0.04%" }, { language: "es", content: "0.04%" }] },
            { content: "0.08%", isCorrect: false, translations: [{ language: "zh", content: "0.08%" }, { language: "es", content: "0.08%" }] },
            { content: "0.02%", isCorrect: false, translations: [{ language: "zh", content: "0.02%" }, { language: "es", content: "0.02%" }] },
            { content: "0.06%", isCorrect: false, translations: [{ language: "zh", content: "0.06%" }, { language: "es", content: "0.06%" }] },
          ],
        },

        {
          content: "Which statement about over-the-counter medications and driving is TRUE?",
          explanation: "Many over-the-counter (OTC) medications — including antihistamines, cold medicines, and sleep aids — can cause drowsiness or impaired reaction time. It is just as illegal to drive while impaired by legal medication as it is to drive drunk. Always read warning labels and do not drive if a medication warns against it.",
          handbookSection: "Driver Factors — Drugs and Medication",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "关于非处方药与驾驶，哪个说法是正确的？",
              explanation: "许多非处方药（OTC）——包括抗组胺药、感冒药和助眠药——可能导致嗜睡或反应时间受损。在合法药物影响下驾驶与醉酒驾驶一样违法。始终阅读警告标签，如果药物有不建议驾驶的警告，请勿驾驶。",
            },
            {
              language: "es",
              content: "¿Cuál afirmación sobre los medicamentos de venta libre y la conducción es VERDADERA?",
              explanation: "Muchos medicamentos de venta libre (OTC) — incluidos antihistamínicos, medicamentos para el resfriado y ayudas para dormir — pueden causar somnolencia o tiempo de reacción deteriorado. Es igualmente ilegal conducir deteriorado por medicación legal que conducir borracho.",
            },
          ],
          options: [
            { content: "OTC medications can impair driving — read labels and do not drive if warned not to", isCorrect: true, translations: [{ language: "zh", content: "非处方药可能影响驾驶——阅读标签，如有警告请勿驾驶" }, { language: "es", content: "Los medicamentos OTC pueden deteriorar la conducción — lea las etiquetas y no conduzca si se advierte no hacerlo" }] },
            { content: "OTC medications are safe for driving since they do not require a prescription", isCorrect: false, translations: [{ language: "zh", content: "非处方药无需处方，对驾驶是安全的" }, { language: "es", content: "Los medicamentos OTC son seguros para conducir ya que no requieren receta" }] },
            { content: "Only illegal drugs impair driving — legal medication does not count", isCorrect: false, translations: [{ language: "zh", content: "只有非法药物会影响驾驶——合法药物不算" }, { language: "es", content: "Solo las drogas ilegales deterioran la conducción — la medicación legal no cuenta" }] },
            { content: "Drowsy-causing OTC medications are only dangerous at night", isCorrect: false, translations: [{ language: "zh", content: "会导致嗜睡的非处方药只在夜间才有危险" }, { language: "es", content: "Los medicamentos OTC que causan somnolencia solo son peligrosos de noche" }] },
          ],
        },

        {
          content: "What effect does marijuana have on driving ability?",
          explanation: "Marijuana impairs driving ability by affecting judgment, coordination, reaction time, and the ability to track moving targets. It slows reaction time and distorts distance and speed perception. Driving under the influence of marijuana is illegal in Pennsylvania and carries the same DUI penalties as alcohol. Marijuana stays in the system longer than alcohol, and impairment is difficult to measure at roadside.",
          handbookSection: "Driver Factors — Drugs and Medication",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "大麻对驾驶能力有什么影响？",
              explanation: "大麻通过影响判断力、协调性、反应时间及追踪移动目标的能力来损害驾驶能力。它减慢反应时间，扭曲对距离和速度的感知。在宾夕法尼亚州，在大麻影响下驾驶是违法的，与酒精DUI处罚相同。大麻在体内停留时间比酒精长，在路边难以测量损害程度。",
            },
            {
              language: "es",
              content: "¿Qué efecto tiene la marihuana en la capacidad de conducción?",
              explanation: "La marihuana deteriora la capacidad de conducción al afectar el juicio, la coordinación, el tiempo de reacción y la capacidad de rastrear objetivos en movimiento. Ralentiza el tiempo de reacción y distorsiona la percepción de distancia y velocidad. Conducir bajo la influencia de marihuana es ilegal en Pennsylvania con las mismas penalizaciones de DUI que el alcohol.",
            },
          ],
          options: [
            { content: "Impairs judgment, coordination, and reaction time — it is illegal to drive after using marijuana", isCorrect: true, translations: [{ language: "zh", content: "损害判断力、协调性和反应时间——使用大麻后驾驶是违法的" }, { language: "es", content: "Deteriora el juicio, la coordinación y el tiempo de reacción — es ilegal conducir después de consumir marihuana" }] },
            { content: "Makes drivers more focused and alert", isCorrect: false, translations: [{ language: "zh", content: "使驾驶员更专注和警觉" }, { language: "es", content: "Hace que los conductores estén más enfocados y alertos" }] },
            { content: "Only impairs driving at high doses", isCorrect: false, translations: [{ language: "zh", content: "只有在大剂量时才会影响驾驶" }, { language: "es", content: "Solo deteriora la conducción en dosis altas" }] },
            { content: "Legal medical marijuana does not impair driving", isCorrect: false, translations: [{ language: "zh", content: "合法的医用大麻不会影响驾驶" }, { language: "es", content: "La marihuana medicinal legal no deteriora la conducción" }] },
          ],
        },

        {
          content: "What percentage of important driving events does an undistracted driver typically miss?",
          explanation: "Research shows that even an undistracted, attentive driver misses approximately 3% of important driving events. A distracted adult dialing a cellphone misses 13% of important events — more than four times as many. A distracted teen dialing a cellphone misses a staggering 53% of important events. This explains why distracted driving is so dangerous — even tiny distractions dramatically reduce the events you perceive and can react to.",
          handbookSection: "Driver Factors — Inattention and Distractions",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "未分心的驾驶人通常错过多少百分比的重要驾驶事件？",
              explanation: "研究表明，即使是未分心、注意力集中的驾驶人也会错过约3%的重要驾驶事件。分心的成人在拨打手机时会错过13%的重要事件——超过四倍。分心的青少年在拨打手机时会错过惊人的53%的重要事件。这解释了为什么分心驾驶如此危险——即使微小的分心也会大幅减少您能感知和应对的事件。",
            },
            {
              language: "es",
              content: "¿Qué porcentaje de eventos de conducción importantes pierde típicamente un conductor sin distracciones?",
              explanation: "Las investigaciones muestran que incluso un conductor atento y sin distracciones pierde aproximadamente el 3% de los eventos de conducción importantes. Un adulto distraído marcando un celular pierde el 13% de los eventos importantes — más de cuatro veces más. Un adolescente distraído marcando un celular pierde un asombroso 53% de los eventos importantes.",
            },
          ],
          options: [
            { content: "About 3%", isCorrect: true, translations: [{ language: "zh", content: "约3%" }, { language: "es", content: "Aproximadamente 3%" }] },
            { content: "About 13%", isCorrect: false, translations: [{ language: "zh", content: "约13%" }, { language: "es", content: "Aproximadamente 13%" }] },
            { content: "About 0% — undistracted drivers miss nothing", isCorrect: false, translations: [{ language: "zh", content: "约0%——未分心的驾驶人不会错过任何事" }, { language: "es", content: "Aproximadamente 0% — los conductores sin distracciones no pierden nada" }] },
            { content: "About 25%", isCorrect: false, translations: [{ language: "zh", content: "约25%" }, { language: "es", content: "Aproximadamente 25%" }] },
          ],
        },

        {
          content: "What percentage of important driving events does a TEEN who is dialing a cellphone typically miss?",
          explanation: "Research cited in the Pennsylvania Driver's Manual shows a teen dialing a cellphone misses approximately 53% of important driving events. This compares to just 3% for an undistracted driver and 13% for a distracted adult. Teens are already less experienced at hazard recognition, so layering in cellphone distraction is especially dangerous. This is a major reason why Pennsylvania has strict cellphone and distracted driving laws.",
          handbookSection: "Driver Factors — Inattention and Distractions",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "正在拨打手机的青少年通常错过多少百分比的重要驾驶事件？",
              explanation: "宾夕法尼亚州驾驶员手册引用的研究表明，正在拨打手机的青少年会错过约53%的重要驾驶事件。相比之下，未分心的驾驶人仅为3%，分心的成人为13%。青少年在危险识别方面经验已经不足，再加上手机分心就尤为危险。这是宾夕法尼亚州实施严格手机和分心驾驶法律的主要原因。",
            },
            {
              language: "es",
              content: "¿Qué porcentaje de eventos de conducción importantes pierde típicamente un ADOLESCENTE que está marcando un celular?",
              explanation: "Las investigaciones citadas en el Manual del Conductor de Pennsylvania muestran que un adolescente marcando un celular pierde aproximadamente el 53% de los eventos de conducción importantes. Esto se compara con solo el 3% para un conductor sin distracciones y el 13% para un adulto distraído. Los adolescentes ya tienen menos experiencia en el reconocimiento de peligros, por lo que agregar la distracción del teléfono celular es especialmente peligroso.",
            },
          ],
          options: [
            { content: "About 53%", isCorrect: true, translations: [{ language: "zh", content: "约53%" }, { language: "es", content: "Aproximadamente 53%" }] },
            { content: "About 13% — same as an adult", isCorrect: false, translations: [{ language: "zh", content: "约13%——与成人相同" }, { language: "es", content: "Aproximadamente 13% — igual que un adulto" }] },
            { content: "About 30%", isCorrect: false, translations: [{ language: "zh", content: "约30%" }, { language: "es", content: "Aproximadamente 30%" }] },
            { content: "About 5% — teens are more skilled at multitasking", isCorrect: false, translations: [{ language: "zh", content: "约5%——青少年更擅长多任务处理" }, { language: "es", content: "Aproximadamente 5% — los adolescentes son más hábiles en la multitarea" }] },
          ],
        },

        {
          content: "In Pennsylvania, when using a headphone or earpiece while driving, in how many ears may you use it?",
          explanation: "Pennsylvania law allows a driver to use a headphone, earpiece, or earbud in only ONE ear while driving. Using headphones in both ears is prohibited because it blocks the driver's ability to hear surrounding traffic sounds, emergency vehicle sirens, and other auditory warnings. Hearing is important for safe driving — it helps detect vehicles in blind spots, emergency vehicles approaching, and train horns at railroad crossings.",
          handbookSection: "Driver Factors — Inattention and Distractions",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州驾驶时，使用耳机或耳塞最多可以戴在几只耳朵上？",
              explanation: "宾夕法尼亚州法律允许驾驶人在驾驶时只在一只耳朵上使用耳机、耳塞或入耳式耳机。禁止在两只耳朵都戴耳机，因为这会阻止驾驶人听到周围的交通声音、紧急车辆警报和其他听觉警告。听觉对安全驾驶很重要——它有助于发现盲区中的车辆、驶来的紧急车辆和铁路道口的火车汽笛。",
            },
            {
              language: "es",
              content: "En Pennsylvania, al usar auriculares o auricular mientras conduce, ¿en cuántos oídos puede usarlo?",
              explanation: "La ley de Pennsylvania permite al conductor usar auriculares, auriculares o tapones para los oídos en solo UN oído mientras conduce. Usar auriculares en ambos oídos está prohibido porque bloquea la capacidad del conductor para escuchar los sonidos del tráfico circundante, las sirenas de vehículos de emergencia y otras advertencias auditivas.",
            },
          ],
          options: [
            { content: "One ear only", isCorrect: true, translations: [{ language: "zh", content: "只能一只耳朵" }, { language: "es", content: "Solo un oído" }] },
            { content: "Both ears are allowed if using hands-free technology", isCorrect: false, translations: [{ language: "zh", content: "如果使用免手操纵技术，两只耳朵都可以" }, { language: "es", content: "Ambos oídos están permitidos si se usa tecnología manos libres" }] },
            { content: "Headphones are completely prohibited while driving", isCorrect: false, translations: [{ language: "zh", content: "驾驶时完全禁止使用耳机" }, { language: "es", content: "Los auriculares están completamente prohibidos mientras conduce" }] },
            { content: "Both ears if the volume is kept low enough", isCorrect: false, translations: [{ language: "zh", content: "只要音量足够低，两只耳朵都可以" }, { language: "es", content: "Ambos oídos si el volumen se mantiene lo suficientemente bajo" }] },
          ],
        },

        {
          content: "How many hours without sleep produces an impairment level roughly equivalent to a BAC of 0.05%?",
          explanation: "Being awake for 18 consecutive hours produces driving impairment roughly equivalent to a BAC of 0.05%. Being awake for 24 consecutive hours is roughly equivalent to a BAC of 0.10% — well above the legal limit for adults. Drowsy driving is a serious hazard: at least 100,000 crashes and 1,500 deaths annually are caused by drivers falling asleep at the wheel. Nearly half of drowsy driving crashes involve drivers aged 15–24.",
          handbookSection: "Driver Factors — Fatigue and Sleep",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "连续不睡觉多少小时会产生大约相当于血液酒精含量0.05%的损害程度？",
              explanation: "连续清醒18小时会产生大约相当于BAC 0.05%的驾驶损害。连续清醒24小时大约相当于BAC 0.10%——远超成人法定限制。疲劳驾驶是严重危险：每年至少10万起车祸和1,500起死亡是由于驾驶人在方向盘前睡着造成的。近一半的疲劳驾驶事故涉及15至24岁的驾驶人。",
            },
            {
              language: "es",
              content: "¿Cuántas horas sin dormir produce un nivel de deterioro aproximadamente equivalente a un BAC de 0.05%?",
              explanation: "Estar despierto durante 18 horas consecutivas produce un deterioro de conducción aproximadamente equivalente a un BAC de 0.05%. Estar despierto durante 24 horas consecutivas es aproximadamente equivalente a un BAC de 0.10% — muy por encima del límite legal para adultos. La conducción somnolienta es un peligro grave: al menos 100,000 accidentes y 1,500 muertes anuales son causados por conductores que se quedan dormidos al volante.",
            },
          ],
          options: [
            { content: "18 hours awake ≈ BAC of 0.05%", isCorrect: true, translations: [{ language: "zh", content: "清醒18小时≈血液酒精含量0.05%" }, { language: "es", content: "18 horas despierto ≈ BAC de 0.05%" }] },
            { content: "8 hours awake ≈ BAC of 0.05%", isCorrect: false, translations: [{ language: "zh", content: "清醒8小时≈血液酒精含量0.05%" }, { language: "es", content: "8 horas despierto ≈ BAC de 0.05%" }] },
            { content: "24 hours awake ≈ BAC of 0.05%", isCorrect: false, translations: [{ language: "zh", content: "清醒24小时≈血液酒精含量0.05%" }, { language: "es", content: "24 horas despierto ≈ BAC de 0.05%" }] },
            { content: "Lack of sleep does not cause impairment equivalent to alcohol", isCorrect: false, translations: [{ language: "zh", content: "缺乏睡眠不会导致与酒精相当的损害" }, { language: "es", content: "La falta de sueño no causa un deterioro equivalente al alcohol" }] },
          ],
        },

        {
          content: "Which of the following can reduce a driver's Blood Alcohol Content (BAC) level?",
          explanation: "Only TIME reduces BAC. The liver can only process approximately one standard drink per hour. Coffee, cold showers, exercise, food, and other methods do NOT lower BAC — they may make a person feel more alert, but the alcohol is still in the bloodstream. A standard drink in Pennsylvania = 1.5 oz of 80-proof liquor, 12 oz of regular beer, or 5 oz of wine. Each contains approximately the same amount of alcohol.",
          handbookSection: "Driver Factors — Alcohol and Driving",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "以下哪项可以降低驾驶人的血液酒精含量（BAC）水平？",
              explanation: "只有时间能降低BAC。肝脏每小时只能代谢约一杯标准饮料的酒精。咖啡、冷水淋浴、运动、食物和其他方法不会降低BAC——它们可能让人感觉更清醒，但酒精仍在血液中。宾夕法尼亚州的标准饮料=1.5盎司80度白酒、12盎司普通啤酒或5盎司葡萄酒。每种含有大约相同量的酒精。",
            },
            {
              language: "es",
              content: "¿Cuál de los siguientes puede reducir el nivel de Concentración de Alcohol en Sangre (BAC) de un conductor?",
              explanation: "Solo el TIEMPO reduce el BAC. El hígado solo puede procesar aproximadamente una bebida estándar por hora. El café, las duchas frías, el ejercicio, la comida y otros métodos NO reducen el BAC — pueden hacer que una persona se sienta más alerta, pero el alcohol todavía está en el torrente sanguíneo.",
            },
          ],
          options: [
            { content: "Only time — the liver processes roughly one drink per hour", isCorrect: true, translations: [{ language: "zh", content: "只有时间——肝脏每小时大约代谢一杯酒" }, { language: "es", content: "Solo el tiempo — el hígado procesa aproximadamente una bebida por hora" }] },
            { content: "Drinking strong coffee", isCorrect: false, translations: [{ language: "zh", content: "饮用浓咖啡" }, { language: "es", content: "Tomar café fuerte" }] },
            { content: "Taking a cold shower", isCorrect: false, translations: [{ language: "zh", content: "冷水淋浴" }, { language: "es", content: "Tomar una ducha fría" }] },
            { content: "Eating a large meal after drinking", isCorrect: false, translations: [{ language: "zh", content: "饮酒后吃一顿大餐" }, { language: "es", content: "Comer una comida abundante después de beber" }] },
          ],
        },

        {
          content: "What constitutes a 'standard drink' containing approximately the same amount of alcohol?",
          explanation: "A standard drink in the U.S. contains approximately 0.6 ounces of pure alcohol. This is equivalent to: 12 oz of regular beer (approximately 5% alcohol), 5 oz of wine (approximately 12% alcohol), or 1.5 oz of 80-proof liquor (40% alcohol). Each of these contains roughly the same amount of alcohol and has the same effect on BAC. The body processes about one standard drink per hour.",
          handbookSection: "Driver Factors — Alcohol and Driving",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "什么构成含有大约相同酒精量的「标准饮料」？",
              explanation: "美国的标准饮料含有约0.6盎司纯酒精。这相当于：12盎司普通啤酒（约5%酒精）、5盎司葡萄酒（约12%酒精）或1.5盎司80度白酒（40%酒精）。每种含有大致相同量的酒精，对BAC的影响相同。身体每小时代谢约一杯标准饮料。",
            },
            {
              language: "es",
              content: "¿Qué constituye una 'bebida estándar' que contiene aproximadamente la misma cantidad de alcohol?",
              explanation: "Una bebida estándar en los EE. UU. contiene aproximadamente 0.6 onzas de alcohol puro. Esto es equivalente a: 12 oz de cerveza regular (aproximadamente 5% de alcohol), 5 oz de vino (aproximadamente 12% de alcohol), o 1.5 oz de licor de 80 grados (40% de alcohol). Cada uno contiene aproximadamente la misma cantidad de alcohol.",
            },
          ],
          options: [
            { content: "12 oz regular beer = 5 oz wine = 1.5 oz 80-proof liquor", isCorrect: true, translations: [{ language: "zh", content: "12盎司普通啤酒 = 5盎司葡萄酒 = 1.5盎司80度白酒" }, { language: "es", content: "12 oz de cerveza regular = 5 oz de vino = 1.5 oz de licor de 80 grados" }] },
            { content: "24 oz regular beer = 12 oz wine = 3 oz 80-proof liquor", isCorrect: false, translations: [{ language: "zh", content: "24盎司普通啤酒 = 12盎司葡萄酒 = 3盎司80度白酒" }, { language: "es", content: "24 oz de cerveza regular = 12 oz de vino = 3 oz de licor de 80 grados" }] },
            { content: "8 oz regular beer = 4 oz wine = 1 oz 80-proof liquor", isCorrect: false, translations: [{ language: "zh", content: "8盎司普通啤酒 = 4盎司葡萄酒 = 1盎司80度白酒" }, { language: "es", content: "8 oz de cerveza regular = 4 oz de vino = 1 oz de licor de 80 grados" }] },
            { content: "Light beer contains no standard drink equivalent — it cannot cause DUI", isCorrect: false, translations: [{ language: "zh", content: "淡啤酒不含标准饮料当量——不会导致DUI" }, { language: "es", content: "La cerveza ligera no contiene equivalente de bebida estándar — no puede causar DUI" }] },
          ],
        },

        {
          content: "Compared to a sober driver, how much more likely is a driver with a BAC of 0.04% to be involved in a crash?",
          explanation: "A driver with a BAC of 0.04% — exactly at the commercial/CDL driver limit — is 2 to 7 times more likely to be involved in a crash than a sober driver. This demonstrates that impairment begins well before reaching the 0.08% limit that applies to regular adult drivers. Even at levels considered 'legal' for most drivers, alcohol significantly increases crash risk.",
          handbookSection: "Driver Factors — Alcohol and Driving",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "与清醒驾驶人相比，血液酒精含量为0.04%的驾驶人发生事故的可能性有多大？",
              explanation: "血液酒精含量为0.04%的驾驶人——恰好是商业/CDL驾驶人的限制值——发生事故的可能性是清醒驾驶人的2至7倍。这表明损害在达到普通成年驾驶人的0.08%限制之前就已经开始。即使在大多数驾驶人「合法」的水平下，酒精也会显著增加事故风险。",
            },
            {
              language: "es",
              content: "En comparación con un conductor sobrio, ¿cuánto más probable es que un conductor con BAC de 0.04% esté involucrado en un accidente?",
              explanation: "Un conductor con un BAC de 0.04% — exactamente en el límite del conductor comercial/CDL — tiene de 2 a 7 veces más probabilidades de estar involucrado en un accidente que un conductor sobrio. Esto demuestra que el deterioro comienza mucho antes de alcanzar el límite de 0.08% que se aplica a los conductores adultos regulares.",
            },
          ],
          options: [
            { content: "2 to 7 times more likely", isCorrect: true, translations: [{ language: "zh", content: "可能性高2至7倍" }, { language: "es", content: "De 2 a 7 veces más probable" }] },
            { content: "No more likely — 0.04% is below the legal limit for most drivers", isCorrect: false, translations: [{ language: "zh", content: "不会更高——0.04%低于大多数驾驶人的法定限制" }, { language: "es", content: "No más probable — 0.04% está por debajo del límite legal para la mayoría de los conductores" }] },
            { content: "Slightly more likely — about 10–20% higher risk", isCorrect: false, translations: [{ language: "zh", content: "稍微可能——风险高约10至20%" }, { language: "es", content: "Ligeramente más probable — aproximadamente 10–20% más de riesgo" }] },
            { content: "Exactly twice as likely", isCorrect: false, translations: [{ language: "zh", content: "恰好高两倍的可能性" }, { language: "es", content: "Exactamente el doble de probable" }] },
          ],
        },

        {
          content: "Are Pennsylvania physicians required to report patients with conditions that could impair their ability to drive safely?",
          explanation: "Yes — Pennsylvania physicians are required by law to report to PennDOT any individual diagnosed with a medical condition that could impair their ability to drive safely. The most dangerous medical conditions for drivers include seizure disorders (which can cause sudden loss of consciousness), diabetes, and heart conditions. PennDOT may then require a medical evaluation before the driver may continue driving or renew their license.",
          handbookSection: "Driver Factors — Health Factors",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州的医生是否需要向相关部门报告可能影响患者安全驾驶能力的疾病？",
              explanation: "是的——宾夕法尼亚州法律要求医生向宾州交通部（PennDOT）报告任何被诊断为可能影响安全驾驶能力的疾病患者。对驾驶人最危险的医疗状况包括癫痫发作障碍（可能导致突然意识丧失）、糖尿病和心脏病。PennDOT随后可能要求进行医学评估，然后驾驶人才能继续驾驶或更新驾照。",
            },
            {
              language: "es",
              content: "¿Están los médicos de Pennsylvania obligados a informar a los pacientes con condiciones que podrían deteriorar su capacidad para conducir de manera segura?",
              explanation: "Sí — los médicos de Pennsylvania están obligados por ley a informar a PennDOT sobre cualquier persona diagnosticada con una condición médica que pueda deteriorar su capacidad para conducir de manera segura. Las condiciones médicas más peligrosas para los conductores incluyen los trastornos convulsivos, la diabetes y las enfermedades cardíacas.",
            },
          ],
          options: [
            { content: "Yes — physicians must report impairing medical conditions to PennDOT", isCorrect: true, translations: [{ language: "zh", content: "是的——医生必须向PennDOT报告影响驾驶的医疗状况" }, { language: "es", content: "Sí — los médicos deben informar las condiciones médicas que deterioran la conducción a PennDOT" }] },
            { content: "No — medical information is private and cannot be reported", isCorrect: false, translations: [{ language: "zh", content: "不——医疗信息是私密的，不能报告" }, { language: "es", content: "No — la información médica es privada y no puede ser informada" }] },
            { content: "Only in cases involving alcohol or drug treatment", isCorrect: false, translations: [{ language: "zh", content: "只有在涉及酒精或药物治疗的情况下" }, { language: "es", content: "Solo en casos que involucren tratamiento de alcohol o drogas" }] },
            { content: "Only if the patient is under 18 years old", isCorrect: false, translations: [{ language: "zh", content: "只有当患者未满18岁时" }, { language: "es", content: "Solo si el paciente tiene menos de 18 años" }] },
          ],
        },

      ], // end Topic 5 questions
    }, // end Topic 5

    // ─── TOPIC 6: DRIVING RECORD INFORMATION (Ch.4) ─────────────────────────────
    {
      name: "Driving Record Information",
      nameEn: "Driving Record Information",
      description: "The point system, license suspension, DUI penalties, and chemical test refusal",
      handbookUrl: `${BASE}/chapter-4-driving-record-information`,
      translations: [
        { language: "zh", name: "驾驶记录信息", description: "积分制度、吊销驾照、DUI处罚及拒绝化学测试" },
        { language: "es", name: "Información del Historial de Conducción", description: "Sistema de puntos, suspensión de licencia, penalizaciones por DUI y negativa a prueba química" },
      ],
      questions: [

        {
          content: "How many points does Pennsylvania add to your driving record for speeding 6–10 mph over the posted limit?",
          explanation: "In Pennsylvania's point system, speeding 6–10 mph over the posted limit adds 2 points to your driving record. Points range from 2 to 5 depending on the severity of the violation. When you accumulate 6 or more points, PennDOT will require you to take a special examination.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，超过限速6至10英里时，驾驶记录会增加多少分？",
              explanation: "在宾夕法尼亚州的积分制度中，超速6至10英里将在驾驶记录上增加2分。根据违规的严重程度，分数从2分到5分不等。当您累积6分或以上时，宾州交通部将要求您参加特殊考试。",
            },
            {
              language: "es",
              content: "¿Cuántos puntos agrega Pennsylvania a su historial de conducción por exceder el límite de velocidad en 6 a 10 mph?",
              explanation: "En el sistema de puntos de Pennsylvania, exceder el límite de velocidad en 6–10 mph agrega 2 puntos a su historial de conducción. Los puntos varían de 2 a 5 según la gravedad de la infracción. Cuando acumula 6 o más puntos, PennDOT le requerirá tomar un examen especial.",
            },
          ],
          options: [
            { content: "2 points", isCorrect: true, translations: [{ language: "zh", content: "2分" }, { language: "es", content: "2 puntos" }] },
            { content: "3 points", isCorrect: false, translations: [{ language: "zh", content: "3分" }, { language: "es", content: "3 puntos" }] },
            { content: "1 point", isCorrect: false, translations: [{ language: "zh", content: "1分" }, { language: "es", content: "1 punto" }] },
            { content: "4 points", isCorrect: false, translations: [{ language: "zh", content: "4分" }, { language: "es", content: "4 puntos" }] },
          ],
        },

        {
          content: "In Pennsylvania's point system, what happens when a driver accumulates 11 or more points?",
          explanation: "When a driver accumulates 11 or more points, PennDOT will SUSPEND the driver's license. The length of the suspension depends on whether it is the first or subsequent offense. Points are reduced by 3 for every 12 consecutive months of violation-free driving, but only if there are fewer than 6 points at the time.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州的积分制度中，当驾驶员累积11分或以上时会发生什么？",
              explanation: "当驾驶员累积11分或以上时，宾州交通部将暂扣驾照。暂扣时间长短取决于是否是首次或再次违规。连续12个月无违规驾驶可减少3分，但仅在累积分数少于6分时有效。",
            },
            {
              language: "es",
              content: "En el sistema de puntos de Pennsylvania, ¿qué sucede cuando un conductor acumula 11 o más puntos?",
              explanation: "Cuando un conductor acumula 11 o más puntos, PennDOT SUSPENDERÁ la licencia del conductor. La duración de la suspensión depende de si es la primera o una infracción posterior. Los puntos se reducen en 3 por cada 12 meses consecutivos de conducción sin infracciones.",
            },
          ],
          options: [
            { content: "License suspension", isCorrect: true, translations: [{ language: "zh", content: "暂扣驾照" }, { language: "es", content: "Suspensión de licencia" }] },
            { content: "A written warning from PennDOT", isCorrect: false, translations: [{ language: "zh", content: "宾州交通部发出书面警告" }, { language: "es", content: "Una advertencia escrita de PennDOT" }] },
            { content: "Required to retake the driving test", isCorrect: false, translations: [{ language: "zh", content: "需要重新参加驾驶考试" }, { language: "es", content: "Obligado a volver a tomar el examen de manejo" }] },
            { content: "A $500 fine", isCorrect: false, translations: [{ language: "zh", content: "500美元罚款" }, { language: "es", content: "Una multa de $500" }] },
          ],
        },

        {
          content: "What are the penalties for a FIRST DUI offense at the 'General Impairment' level (BAC 0.08%–0.099%) in Pennsylvania?",
          explanation: "A first DUI offense at General Impairment level (BAC 0.08%–0.099%) in Pennsylvania results in: 6 months of probation (no jail time), a $300 fine, alcohol highway safety school, and treatment if ordered. No license suspension for a first general impairment DUI (if no refusal of chemical test). Second and subsequent offenses are far more severe.",
          handbookSection: "Driving Record Information — DUI Penalties",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，「一般损害」级别（BAC 0.08%–0.099%）的首次DUI违规处罚是什么？",
              explanation: "在宾夕法尼亚州，一般损害级别（BAC 0.08%–0.099%）的首次DUI违规处罚包括：6个月缓刑（无监禁）、300美元罚款、酒精公路安全学校，以及如果法院命令的治疗。首次一般损害DUI不暂扣驾照（如未拒绝化学测试）。再次及后续违规处罚更为严重。",
            },
            {
              language: "es",
              content: "¿Cuáles son las penalizaciones por una PRIMERA infracción de DUI en el nivel de 'Deterioro General' (BAC 0.08%–0.099%) en Pennsylvania?",
              explanation: "Una primera infracción de DUI en el nivel de Deterioro General (BAC 0.08%–0.099%) en Pennsylvania resulta en: 6 meses de libertad condicional (sin tiempo en prisión), una multa de $300, escuela de seguridad vial de alcohol y tratamiento si se ordena. Sin suspensión de licencia para el primer DUI de deterioro general.",
            },
          ],
          options: [
            { content: "6 months probation, $300 fine, no jail time", isCorrect: true, translations: [{ language: "zh", content: "6个月缓刑、300美元罚款、无监禁" }, { language: "es", content: "6 meses de libertad condicional, multa de $300, sin tiempo en prisión" }] },
            { content: "Immediate 12-month license suspension and $1,000 fine", isCorrect: false, translations: [{ language: "zh", content: "立即暂扣驾照12个月及1,000美元罚款" }, { language: "es", content: "Suspensión inmediata de licencia de 12 meses y multa de $1,000" }] },
            { content: "Minimum 30 days in jail and $500 fine", isCorrect: false, translations: [{ language: "zh", content: "最少30天监禁及500美元罚款" }, { language: "es", content: "Mínimo 30 días en prisión y multa de $500" }] },
            { content: "Community service only — no fine or license action", isCorrect: false, translations: [{ language: "zh", content: "仅社区服务——无罚款或驾照处分" }, { language: "es", content: "Solo servicio comunitario — sin multa ni acción sobre la licencia" }] },
          ],
        },

        {
          content: "What is the penalty for REFUSING a chemical test (blood, breath, or urine) when requested by police in Pennsylvania?",
          explanation: "Refusing a chemical test in Pennsylvania triggers an AUTOMATIC 12-month license suspension, even if you are not convicted of DUI. Under Pennsylvania's Implied Consent law, by driving on PA roads, you automatically consent to chemical testing. The refusal suspension is separate from and in addition to any DUI suspension.",
          handbookSection: "Driving Record Information — Chemical Test Refusal",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，拒绝警察要求的化学测试（血液、呼气或尿液）的处罚是什么？",
              explanation: "在宾夕法尼亚州，拒绝化学测试将自动触发12个月的驾照暂扣，即使您未被判DUI罪。根据宾夕法尼亚州的默示同意法，在宾州道路上驾驶即自动同意接受化学测试。拒绝暂扣与DUI暂扣分开，且叠加执行。",
            },
            {
              language: "es",
              content: "¿Cuál es la penalización por NEGARSE a una prueba química (sangre, aliento u orina) cuando la policía lo solicita en Pennsylvania?",
              explanation: "Negarse a una prueba química en Pennsylvania activa una suspensión AUTOMÁTICA de licencia de 12 meses, incluso si no es condenado por DUI. Bajo la ley de Consentimiento Implícito de Pennsylvania, al conducir en carreteras de PA, automáticamente consiente las pruebas químicas.",
            },
          ],
          options: [
            { content: "Automatic 12-month license suspension", isCorrect: true, translations: [{ language: "zh", content: "自动暂扣驾照12个月" }, { language: "es", content: "Suspensión automática de licencia de 12 meses" }] },
            { content: "A $200 fine — no license action", isCorrect: false, translations: [{ language: "zh", content: "200美元罚款——无驾照处分" }, { language: "es", content: "Una multa de $200 — sin acción sobre la licencia" }] },
            { content: "Immediate arrest only", isCorrect: false, translations: [{ language: "zh", content: "仅立即逮捕" }, { language: "es", content: "Solo arresto inmediato" }] },
            { content: "6-month license suspension", isCorrect: false, translations: [{ language: "zh", content: "6个月暂扣驾照" }, { language: "es", content: "Suspensión de licencia de 6 meses" }] },
          ],
        },

        {
          content: "Under Pennsylvania's DUI law, what is the minimum jail time for a FIRST offense at the 'Highest BAC' level (0.16% or higher)?",
          explanation: "For a first DUI offense at the Highest BAC level (0.16%+), Pennsylvania requires a minimum of 3 days in jail (up to 6 months), a fine of $1,000–$5,000, 12-month license suspension, alcohol safety school, and treatment. This is significantly harsher than the General Impairment (0.08%–0.099%) penalty of probation and $300.",
          handbookSection: "Driving Record Information — DUI Penalties",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州DUI法律，在「最高BAC」级别（0.16%或以上）首次违规的最低监禁时间是多少？",
              explanation: "在最高BAC级别（0.16%+）的首次DUI违规，宾夕法尼亚州规定最少3天监禁（最多6个月）、1,000至5,000美元罚款、12个月驾照暂扣、酒精安全学校及治疗。这比一般损害（0.08%–0.099%）的缓刑和300美元罚款严厉得多。",
            },
            {
              language: "es",
              content: "Según la ley de DUI de Pennsylvania, ¿cuál es el tiempo mínimo en prisión para una PRIMERA infracción en el nivel de 'BAC Más Alto' (0.16% o más)?",
              explanation: "Para una primera infracción de DUI en el nivel de BAC Más Alto (0.16%+), Pennsylvania requiere un mínimo de 3 días en prisión (hasta 6 meses), una multa de $1,000–$5,000, suspensión de licencia de 12 meses, escuela de seguridad de alcohol y tratamiento.",
            },
          ],
          options: [
            { content: "3 days in jail", isCorrect: true, translations: [{ language: "zh", content: "3天监禁" }, { language: "es", content: "3 días en prisión" }] },
            { content: "No jail time — probation only", isCorrect: false, translations: [{ language: "zh", content: "无监禁——仅缓刑" }, { language: "es", content: "Sin tiempo en prisión — solo libertad condicional" }] },
            { content: "30 days in jail minimum", isCorrect: false, translations: [{ language: "zh", content: "至少30天监禁" }, { language: "es", content: "Mínimo 30 días en prisión" }] },
            { content: "2 days in jail", isCorrect: false, translations: [{ language: "zh", content: "2天监禁" }, { language: "es", content: "2 días en prisión" }] },
          ],
        },

        {
          content: "When a driver's record first reaches 6 or more points in Pennsylvania, what options does the driver have?",
          explanation: "The FIRST time a driver accumulates 6 or more points, PennDOT gives a choice: either take a written Special Point Examination (if passed, 2 points are removed) OR attend a Driver Improvement School (4 points are removed upon completion). For a SECOND or subsequent 6-point accumulation, the driver must attend BOTH a Departmental Hearing AND a Driver Improvement School — there is no choice.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "当宾夕法尼亚州驾驶人记录首次达到6分或以上时，驾驶人有哪些选择？",
              explanation: "当驾驶人首次累积6分或以上时，PennDOT给予选择：参加书面特别积分考试（通过后减2分）或参加驾驶改善学校（完成后减4分）。对于第二次或以后的6分积累，驾驶人必须同时参加部门听证会和驾驶改善学校——没有选择。",
            },
            {
              language: "es",
              content: "Cuando el registro de un conductor llega por primera vez a 6 o más puntos en Pennsylvania, ¿qué opciones tiene el conductor?",
              explanation: "La PRIMERA vez que un conductor acumula 6 o más puntos, PennDOT da una opción: tomar un Examen Especial de Puntos escrito (si se aprueba, se eliminan 2 puntos) O asistir a una Escuela de Mejoramiento para Conductores (se eliminan 4 puntos al completarse). Para una SEGUNDA o subsiguiente acumulación de 6 puntos, el conductor debe asistir a AMBAS cosas.",
            },
          ],
          options: [
            { content: "Take a written Special Point Examination (−2 pts) OR attend Driver Improvement School (−4 pts)", isCorrect: true, translations: [{ language: "zh", content: "参加书面特别积分考试（减2分）或参加驾驶改善学校（减4分）" }, { language: "es", content: "Tomar un Examen Especial de Puntos escrito (−2 pts) O asistir a la Escuela de Mejoramiento para Conductores (−4 pts)" }] },
            { content: "License is automatically suspended — no options are given", isCorrect: false, translations: [{ language: "zh", content: "驾照自动暂扣——没有选择" }, { language: "es", content: "La licencia se suspende automáticamente — no se dan opciones" }] },
            { content: "Must attend a Departmental Hearing — no alternative exists", isCorrect: false, translations: [{ language: "zh", content: "必须参加部门听证会——没有替代方案" }, { language: "es", content: "Debe asistir a una Audiencia Departamental — no existe alternativa" }] },
            { content: "Must pay a fine of $500 and points are cleared automatically", isCorrect: false, translations: [{ language: "zh", content: "必须缴纳500美元罚款，积分自动清除" }, { language: "es", content: "Debe pagar una multa de $500 y los puntos se eliminan automáticamente" }] },
          ],
        },

        {
          content: "For a SECOND accumulation of 6 or more points in Pennsylvania, what is the required response AND the license suspension?",
          explanation: "For a second (or subsequent) accumulation of 6+ points, the driver must attend BOTH a Departmental Hearing AND a Driver Improvement School. After completing the school, 2 more points are removed. The second accumulation results in a 15-day license suspension. A third or subsequent accumulation results in a 30-day suspension. Failure to attend the hearing or comply with the school order results in an INDEFINITE suspension.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州第二次累积6分或以上时，要求的应对措施和驾照暂扣时间是什么？",
              explanation: "对于第二次（或以后）的6分以上积累，驾驶人必须同时参加部门听证会和驾驶改善学校。完成学校后，再减2分。第二次积累导致15天驾照暂扣。第三次或以后的积累导致30天暂扣。未能参加听证会或不遵守学校命令将导致无限期暂扣。",
            },
            {
              language: "es",
              content: "Para una SEGUNDA acumulación de 6 o más puntos en Pennsylvania, ¿cuál es la respuesta requerida Y la suspensión de licencia?",
              explanation: "Para una segunda (o subsiguiente) acumulación de 6+ puntos, el conductor debe asistir a AMBAS una Audiencia Departamental Y una Escuela de Mejoramiento para Conductores. Después de completar la escuela, se eliminan 2 puntos más. La segunda acumulación resulta en una suspensión de licencia de 15 días. Una tercera o subsiguiente acumulación resulta en una suspensión de 30 días.",
            },
          ],
          options: [
            { content: "Must attend BOTH hearing and Driver Improvement School — 15-day suspension", isCorrect: true, translations: [{ language: "zh", content: "必须同时参加听证会和驾驶改善学校——15天暂扣驾照" }, { language: "es", content: "Debe asistir a AMBAS la audiencia y la Escuela de Mejoramiento — suspensión de 15 días" }] },
            { content: "Same options as first time — written exam OR driving school", isCorrect: false, translations: [{ language: "zh", content: "与第一次相同的选择——书面考试或驾驶学校" }, { language: "es", content: "Las mismas opciones que la primera vez — examen escrito O escuela de conducción" }] },
            { content: "Must attend hearing only — no school required", isCorrect: false, translations: [{ language: "zh", content: "只需参加听证会——不需要学校" }, { language: "es", content: "Solo debe asistir a la audiencia — no se requiere escuela" }] },
            { content: "30-day suspension plus mandatory retesting for full license", isCorrect: false, translations: [{ language: "zh", content: "30天暂扣加上全照必须重新测试" }, { language: "es", content: "Suspensión de 30 días más prueba obligatoria para licencia completa" }] },
          ],
        },

        {
          content: "How can a Pennsylvania driver earn a reduction of 3 points from their driving record?",
          explanation: "A driver can have 3 points removed from their driving record by completing 12 consecutive months without any traffic violations, license suspensions, or revocations. This is a natural reward for safe driving. Once a record reaches 0 points and stays at 0 for 12 months, any future point accumulation is treated as a 'first accumulation' — resetting the escalating penalty schedule.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州驾驶人如何从驾驶记录中减少3分？",
              explanation: "驾驶人可以通过连续12个月没有任何交通违规、驾照暂扣或吊销来从驾驶记录中减少3分。这是对安全驾驶的自然奖励。一旦记录达到0分并保持0分12个月，任何未来的积分累积都被视为「首次累积」——重置递进处罚时间表。",
            },
            {
              language: "es",
              content: "¿Cómo puede un conductor de Pennsylvania obtener una reducción de 3 puntos de su registro de conducción?",
              explanation: "Un conductor puede tener 3 puntos eliminados de su registro de conducción al completar 12 meses consecutivos sin ninguna infracción de tráfico, suspensiones de licencia o revocaciones. Una vez que el registro llega a 0 puntos y permanece en 0 durante 12 meses, cualquier acumulación futura de puntos se trata como una 'primera acumulación'.",
            },
          ],
          options: [
            { content: "Completing 12 consecutive months without violations, suspensions, or revocations", isCorrect: true, translations: [{ language: "zh", content: "连续12个月没有违规、暂扣或吊销" }, { language: "es", content: "Completar 12 meses consecutivos sin infracciones, suspensiones ni revocaciones" }] },
            { content: "Paying a fee of $100 per point to PennDOT", isCorrect: false, translations: [{ language: "zh", content: "向PennDOT每分支付100美元费用" }, { language: "es", content: "Pagar una tarifa de $100 por punto a PennDOT" }] },
            { content: "Completing a defensive driving course at any time", isCorrect: false, translations: [{ language: "zh", content: "随时完成防御性驾驶课程" }, { language: "es", content: "Completar un curso de manejo defensivo en cualquier momento" }] },
            { content: "Points are never automatically removed — they remain forever", isCorrect: false, translations: [{ language: "zh", content: "积分永远不会自动减少——永久保留" }, { language: "es", content: "Los puntos nunca se eliminan automáticamente — permanecen para siempre" }] },
          ],
        },

        {
          content: "Under Pennsylvania's point system, what automatic suspension applies to Junior Drivers (under 18) who accumulate 6 or more points for the FIRST time?",
          explanation: "Junior Drivers (under 18) face stricter automatic suspensions than adult drivers. A Junior Driver who accumulates 6 or more points OR is convicted of driving 26 mph or more over the speed limit receives an automatic 90-day suspension for the first offense. For any additional occurrence, the suspension is 120 days. These stricter rules reflect the higher crash risk for inexperienced young drivers.",
          handbookSection: "Driving Record Information — Point System",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州的积分制度，首次累积6分或以上的初级驾驶人（18岁以下）会面临什么自动暂扣？",
              explanation: "初级驾驶人（18岁以下）比成年驾驶人面临更严格的自动暂扣。首次累积6分或以上或被判定超速26英里/小时以上的初级驾驶人将自动暂扣驾照90天。任何额外违规将暂扣驾照120天。这些更严格的规定反映了无经验年轻驾驶人更高的事故风险。",
            },
            {
              language: "es",
              content: "Bajo el sistema de puntos de Pennsylvania, ¿qué suspensión automática se aplica a los Conductores Jóvenes (menores de 18 años) que acumulan 6 o más puntos por PRIMERA vez?",
              explanation: "Los Conductores Jóvenes (menores de 18 años) enfrentan suspensiones automáticas más estrictas que los conductores adultos. Un Conductor Joven que acumula 6 o más puntos O es declarado culpable de conducir 26 mph o más por encima del límite de velocidad recibe una suspensión automática de 90 días por la primera infracción. Para cualquier ocurrencia adicional, la suspensión es de 120 días.",
            },
          ],
          options: [
            { content: "90-day automatic suspension", isCorrect: true, translations: [{ language: "zh", content: "自动暂扣驾照90天" }, { language: "es", content: "Suspensión automática de 90 días" }] },
            { content: "15-day suspension — same as adults", isCorrect: false, translations: [{ language: "zh", content: "15天暂扣——与成人相同" }, { language: "es", content: "Suspensión de 15 días — igual que los adultos" }] },
            { content: "60-day suspension", isCorrect: false, translations: [{ language: "zh", content: "60天暂扣" }, { language: "es", content: "Suspensión de 60 días" }] },
            { content: "Immediate revocation of the Junior Driver license", isCorrect: false, translations: [{ language: "zh", content: "立即吊销初级驾驶执照" }, { language: "es", content: "Revocación inmediata de la licencia de Conductor Joven" }] },
          ],
        },

        {
          content: "What is the restoration fee for a FIRST chemical test refusal in Pennsylvania?",
          explanation: "When a driver refuses a chemical test (breath or blood) in Pennsylvania, they face a 1-year automatic license suspension regardless of whether they are convicted of DUI. To restore the license after this suspension, there is a restoration fee. For a first refusal, the fee is $653. For a second refusal, the fee is $1,309. For a third or subsequent refusal, the fee is $2,616. These fees are in addition to any other fines and penalties.",
          handbookSection: "Driving Record Information — Implied Consent",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州首次拒绝化学测试的恢复费用是多少？",
              explanation: "当驾驶人在宾夕法尼亚州拒绝化学测试（呼气或血液）时，无论是否被判DUI，都会面临1年的自动驾照暂扣。在此暂扣后恢复驾照需要支付恢复费用。首次拒绝的费用为653美元。第二次拒绝的费用为1,309美元。第三次或以后拒绝的费用为2,616美元。这些费用还不包括其他罚款和处罚。",
            },
            {
              language: "es",
              content: "¿Cuál es la tarifa de restauración por una PRIMERA negativa a la prueba química en Pennsylvania?",
              explanation: "Cuando un conductor se niega a una prueba química (aliento o sangre) en Pennsylvania, enfrenta una suspensión automática de licencia de 1 año independientemente de si es condenado por DUI. Para restaurar la licencia después de esta suspensión, hay una tarifa de restauración. Por una primera negativa, la tarifa es de $653. Por una segunda, $1,309. Por una tercera o posterior, $2,616.",
            },
          ],
          options: [
            { content: "$653", isCorrect: true, translations: [{ language: "zh", content: "653美元" }, { language: "es", content: "$653" }] },
            { content: "$300", isCorrect: false, translations: [{ language: "zh", content: "300美元" }, { language: "es", content: "$300" }] },
            { content: "$1,309", isCorrect: false, translations: [{ language: "zh", content: "1,309美元" }, { language: "es", content: "$1,309" }] },
            { content: "$500", isCorrect: false, translations: [{ language: "zh", content: "500美元" }, { language: "es", content: "$500" }] },
          ],
        },

        {
          content: "If a driver refuses a chemical test AND is also convicted of DUI in Pennsylvania, what is the total license suspension?",
          explanation: "If a driver both refuses a chemical test AND is convicted of DUI in Pennsylvania, the suspensions combine for a total of 2.5 years (30 months). If the driver also had a prior DUI conviction or a prior chemical test refusal, the total suspension increases to 3 years (36 months). These lengthy suspensions are a major deterrent to refusing chemical tests.",
          handbookSection: "Driving Record Information — Implied Consent",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "如果驾驶人拒绝化学测试并且还被判定DUI，宾夕法尼亚州的总暂扣驾照时间是多少？",
              explanation: "如果驾驶人既拒绝化学测试又被判定DUI，宾夕法尼亚州的暂扣时间合并为总计2.5年（30个月）。如果驾驶人还有过往DUI定罪或过往化学测试拒绝记录，总暂扣时间增加到3年（36个月）。这些漫长的暂扣是拒绝化学测试的主要威慑。",
            },
            {
              language: "es",
              content: "Si un conductor se niega a una prueba química Y también es condenado por DUI en Pennsylvania, ¿cuál es la suspensión total de la licencia?",
              explanation: "Si un conductor tanto se niega a una prueba química como es condenado por DUI en Pennsylvania, las suspensiones se combinan para un total de 2.5 años (30 meses). Si el conductor también tenía una condena previa de DUI o una negativa previa a la prueba química, la suspensión total aumenta a 3 años (36 meses).",
            },
          ],
          options: [
            { content: "2.5 years total (30 months)", isCorrect: true, translations: [{ language: "zh", content: "总计2.5年（30个月）" }, { language: "es", content: "2.5 años en total (30 meses)" }] },
            { content: "1 year — same as refusal alone", isCorrect: false, translations: [{ language: "zh", content: "1年——与单独拒绝相同" }, { language: "es", content: "1 año — igual que la negativa sola" }] },
            { content: "5 years — they always run consecutively", isCorrect: false, translations: [{ language: "zh", content: "5年——始终连续执行" }, { language: "es", content: "5 años — siempre se ejecutan consecutivamente" }] },
            { content: "18 months", isCorrect: false, translations: [{ language: "zh", content: "18个月" }, { language: "es", content: "18 meses" }] },
          ],
        },

        {
          content: "Who is eligible for Accelerated Rehabilitative Disposition (ARD) for a DUI in Pennsylvania?",
          explanation: "ARD (Accelerated Rehabilitative Disposition) is a pre-trial diversion program available to FIRST-TIME DUI offenders at the High BAC (.10–.159%) or Highest BAC (.16%+) impairment levels — NOT for General Impairment. ARD involves up to 90 days license loss, 6 months court supervision, a $300–$5,000 fine, an alcohol/drug evaluation, treatment if necessary, and 12.5 hours of Alcohol Highway Safety School. Successful completion avoids a criminal conviction.",
          handbookSection: "Driving Record Information — DUI Penalties",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州DUI的加速康复处置（ARD）适用于哪些人？",
              explanation: "ARD（加速康复处置）是一个供高BAC（0.10%–0.159%）或最高BAC（0.16%+）损害级别的首次DUI违规者参与的审前转介计划——不适用于一般损害。ARD包括最多90天驾照吊销、6个月法院监督、300至5,000美元罚款、酒精/药物评估、必要时治疗，以及12.5小时的酒精公路安全学校。成功完成可避免刑事定罪。",
            },
            {
              language: "es",
              content: "¿Quién es elegible para la Disposición Rehabilitativa Acelerada (ARD) por DUI en Pennsylvania?",
              explanation: "ARD (Disposición Rehabilitativa Acelerada) es un programa de desvío previo al juicio disponible para infractores de PRIMERA VEZ por DUI en los niveles de BAC Alto (.10–.159%) o BAC Más Alto (.16%+) — NO para Deterioro General. ARD implica hasta 90 días de pérdida de licencia, 6 meses de supervisión judicial, una multa de $300–$5,000, una evaluación de alcohol/drogas, tratamiento si es necesario, y 12.5 horas de Escuela de Seguridad Vial de Alcohol.",
            },
          ],
          options: [
            { content: "First-time offenders at High (.10–.159%) or Highest (.16%+) BAC only", isCorrect: true, translations: [{ language: "zh", content: "仅限高BAC（0.10%–0.159%）或最高BAC（0.16%+）的首次违规者" }, { language: "es", content: "Solo infractores de primera vez con BAC Alto (.10–.159%) o Más Alto (.16%+)" }] },
            { content: "Any DUI offender, regardless of prior record", isCorrect: false, translations: [{ language: "zh", content: "任何DUI违规者，无论过往记录" }, { language: "es", content: "Cualquier infractor de DUI, independientemente del historial previo" }] },
            { content: "Only General Impairment (.08–.099%) first-time offenders", isCorrect: false, translations: [{ language: "zh", content: "只有一般损害（0.08%–0.099%）的首次违规者" }, { language: "es", content: "Solo infractores de primera vez con Deterioro General (.08–.099%)" }] },
            { content: "Second-time DUI offenders who have completed treatment", isCorrect: false, translations: [{ language: "zh", content: "已完成治疗的第二次DUI违规者" }, { language: "es", content: "Infractores de DUI por segunda vez que hayan completado el tratamiento" }] },
          ],
        },

        {
          content: "What penalties does a Pennsylvania driver face for operating a vehicle without insurance for 31 or more days?",
          explanation: "Pennsylvania requires continuous automobile liability insurance. If a vehicle is uninsured for 31 or more days, the consequences include: (1) vehicle registration suspended for 3 months AND (2) driving privilege suspended for 3 months. To restore both, the driver must provide proof of current insurance and pay applicable fees. Short gaps in coverage (such as between policies) can still trigger these penalties.",
          handbookSection: "Driving Record Information — Driving Without Insurance",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州驾驶人无保险驾驶车辆31天或以上会面临什么处罚？",
              explanation: "宾夕法尼亚州要求持续汽车责任保险。如果车辆无保险31天或以上，后果包括：（1）车辆登记暂停3个月，以及（2）驾驶特权暂停3个月。要恢复这两项，驾驶人必须提供当前保险证明并支付相关费用。保险短暂中断（如保单之间的间隔）仍可能触发这些处罚。",
            },
            {
              language: "es",
              content: "¿Qué penalizaciones enfrenta un conductor de Pennsylvania por operar un vehículo sin seguro durante 31 o más días?",
              explanation: "Pennsylvania requiere un seguro de responsabilidad civil de automóvil continuo. Si un vehículo no tiene seguro durante 31 o más días, las consecuencias incluyen: (1) registro del vehículo suspendido por 3 meses Y (2) privilegio de conducción suspendido por 3 meses. Para restaurar ambos, el conductor debe proporcionar prueba de seguro actual y pagar las tarifas aplicables.",
            },
          ],
          options: [
            { content: "Vehicle registration AND driving privilege both suspended for 3 months", isCorrect: true, translations: [{ language: "zh", content: "车辆登记和驾驶特权均暂停3个月" }, { language: "es", content: "Registro del vehículo Y privilegio de conducción suspendidos por 3 meses" }] },
            { content: "A $500 fine — no suspension if it is a first offense", isCorrect: false, translations: [{ language: "zh", content: "500美元罚款——首次违规无暂扣" }, { language: "es", content: "Una multa de $500 — sin suspensión si es la primera infracción" }] },
            { content: "Only the vehicle registration is suspended", isCorrect: false, translations: [{ language: "zh", content: "只有车辆登记被暂停" }, { language: "es", content: "Solo se suspende el registro del vehículo" }] },
            { content: "Only the driver's license is suspended for 6 months", isCorrect: false, translations: [{ language: "zh", content: "只有驾驶证暂扣6个月" }, { language: "es", content: "Solo se suspende la licencia del conductor por 6 meses" }] },
          ],
        },

        {
          content: "What fine and license penalty does a driver face upon conviction for fleeing or eluding police in Pennsylvania?",
          explanation: "A conviction for fleeing or eluding police in Pennsylvania results in a 1-year driving privilege suspension, a $500 fine, court costs, and the possibility of imprisonment. Pennsylvania experiences approximately 450 crashes annually resulting from drivers who flee or try to elude police. The consequences are severe because fleeing creates extreme danger for the public and law enforcement officers.",
          handbookSection: "Driving Record Information — Fleeing Police",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，逃避或躲避警察被定罪会面临什么罚款和驾照处罚？",
              explanation: "在宾夕法尼亚州，逃避或躲避警察被定罪将导致1年驾驶特权暂扣、500美元罚款、法庭费用，以及可能的监禁。宾夕法尼亚州每年约有450起事故是由试图逃跑或躲避警察的驾驶人造成的。后果如此严厉，因为逃跑对公众和执法人员造成极大危险。",
            },
            {
              language: "es",
              content: "¿Qué multa y penalización de licencia enfrenta un conductor al ser condenado por huir o eludir a la policía en Pennsylvania?",
              explanation: "Una condena por huir o eludir a la policía en Pennsylvania resulta en una suspensión de privilegio de conducción de 1 año, una multa de $500, costas judiciales y la posibilidad de encarcelamiento. Pennsylvania experimenta aproximadamente 450 accidentes anuales resultantes de conductores que huyen o intentan eludir a la policía.",
            },
          ],
          options: [
            { content: "$500 fine plus a 1-year driving privilege suspension", isCorrect: true, translations: [{ language: "zh", content: "500美元罚款加上1年驾驶特权暂扣" }, { language: "es", content: "Multa de $500 más una suspensión de privilegio de conducción de 1 año" }] },
            { content: "$1,000 fine and 6-month suspension", isCorrect: false, translations: [{ language: "zh", content: "1,000美元罚款和6个月暂扣" }, { language: "es", content: "Multa de $1,000 y suspensión de 6 meses" }] },
            { content: "Warning only for a first offense", isCorrect: false, translations: [{ language: "zh", content: "首次违规仅给予警告" }, { language: "es", content: "Solo advertencia por primera infracción" }] },
            { content: "$250 fine and 3-month suspension", isCorrect: false, translations: [{ language: "zh", content: "250美元罚款和3个月暂扣" }, { language: "es", content: "Multa de $250 y suspensión de 3 meses" }] },
          ],
        },

        {
          content: "What is the minimum fine for underage drinking (under 21) in Pennsylvania?",
          explanation: "In Pennsylvania, it is illegal for persons under 21 to buy, consume, possess, or transport alcohol. The minimum penalty for underage drinking is a $500 fine plus court costs. Courts may also require an alcohol evaluation and mandatory alcohol education. For drivers, a DUI while under 21 results in prosecution under the High BAC table (2 days–6 months, $500–$5,000 fine, 12-month suspension) — regardless of the actual BAC level.",
          handbookSection: "Driving Record Information — Underage Drinking",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州未成年饮酒（21岁以下）的最低罚款是多少？",
              explanation: "在宾夕法尼亚州，21岁以下人员购买、饮用、持有或运输酒精是违法的。未成年饮酒的最低处罚是500美元罚款加法庭费用。法院还可能要求进行酒精评估和强制性酒精教育。对于驾驶人，21岁以下DUI将按高BAC表格起诉（2天至6个月、500至5,000美元罚款、12个月暂扣驾照）——无论实际BAC水平如何。",
            },
            {
              language: "es",
              content: "¿Cuál es la multa mínima por consumo de alcohol siendo menor de edad (menores de 21 años) en Pennsylvania?",
              explanation: "En Pennsylvania, es ilegal que las personas menores de 21 años compren, consuman, posean o transporten alcohol. La penalización mínima por consumo de alcohol siendo menor de edad es una multa de $500 más costas judiciales. Los tribunales también pueden requerir una evaluación de alcohol y educación obligatoria sobre el alcohol.",
            },
          ],
          options: [
            { content: "$500 fine plus court costs", isCorrect: true, translations: [{ language: "zh", content: "500美元罚款加法庭费用" }, { language: "es", content: "Multa de $500 más costas judiciales" }] },
            { content: "$100 fine for a first offense", isCorrect: false, translations: [{ language: "zh", content: "首次违规100美元罚款" }, { language: "es", content: "Multa de $100 por primera infracción" }] },
            { content: "Warning only — no financial penalty", isCorrect: false, translations: [{ language: "zh", content: "仅警告——无经济处罚" }, { language: "es", content: "Solo advertencia — sin penalización económica" }] },
            { content: "$1,000 fine plus court costs", isCorrect: false, translations: [{ language: "zh", content: "1,000美元罚款加法庭费用" }, { language: "es", content: "Multa de $1,000 más costas judiciales" }] },
          ],
        },

        {
          content: "What is the minimum fine for an adult who provides alcohol to ONE minor at a social gathering in Pennsylvania?",
          explanation: "An adult who provides alcohol to minors in Pennsylvania faces severe penalties: the minimum fine for supplying alcohol to a first minor is $1,000. For each ADDITIONAL minor, the minimum fine is $2,500 each. Up to 1 year of jail time is also possible. Adults are also liable for guests who consume alcohol in their homes. Example: if an adult hosts a party where 17 minors drink, the total minimum fine would be $41,000 ($1,000 + 16 × $2,500).",
          handbookSection: "Driving Record Information — Underage Drinking",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州成人在社交聚会中向一名未成年人提供酒精的最低罚款是多少？",
              explanation: "向未成年人提供酒精的成年人在宾夕法尼亚州面临严厉处罚：向第一名未成年人提供酒精的最低罚款为1,000美元。每额外一名未成年人，最低罚款为2,500美元。还可能面临最多1年监禁。成年人也对在其家中饮酒的客人承担责任。例如：如果成人主持一个有17名未成年人饮酒的聚会，总最低罚款将为41,000美元（1,000美元+16×2,500美元）。",
            },
            {
              language: "es",
              content: "¿Cuál es la multa mínima para un adulto que proporciona alcohol a UN menor en una reunión social en Pennsylvania?",
              explanation: "Un adulto que proporciona alcohol a menores en Pennsylvania enfrenta penalizaciones severas: la multa mínima por suministrar alcohol a un primer menor es de $1,000. Por cada menor ADICIONAL, la multa mínima es de $2,500 cada uno. También es posible hasta 1 año de cárcel. Los adultos también son responsables de los invitados que consumen alcohol en sus hogares.",
            },
          ],
          options: [
            { content: "Minimum $1,000 fine for the first minor", isCorrect: true, translations: [{ language: "zh", content: "第一名未成年人最低1,000美元罚款" }, { language: "es", content: "Multa mínima de $1,000 por el primer menor" }] },
            { content: "Minimum $500 fine — same as the underage drinker", isCorrect: false, translations: [{ language: "zh", content: "最低500美元罚款——与未成年饮酒者相同" }, { language: "es", content: "Multa mínima de $500 — igual que el bebedor menor de edad" }] },
            { content: "Warning only if the adult was unaware of the minor's age", isCorrect: false, translations: [{ language: "zh", content: "如果成年人不知道未成年人的年龄，仅给予警告" }, { language: "es", content: "Solo advertencia si el adulto desconocía la edad del menor" }] },
            { content: "Minimum $5,000 fine per minor", isCorrect: false, translations: [{ language: "zh", content: "每名未成年人最低5,000美元罚款" }, { language: "es", content: "Multa mínima de $5,000 por menor" }] },
          ],
        },

      ], // end Topic 6 questions
    }, // end Topic 6

    // ─── TOPIC 7: LAWS AND RELATED ISSUES (Ch.5) ────────────────────────────────
    {
      name: "Laws and Related Issues",
      nameEn: "Laws and Related Issues",
      description: "Vehicle registration, inspection, insurance, address changes, and Pennsylvania traffic laws",
      handbookUrl: `${BASE}/chapter-5-laws-and-related-issues`,
      translations: [
        { language: "zh", name: "法律及相关事项", description: "车辆注册、检验、保险、地址变更及宾夕法尼亚州交通法规" },
        { language: "es", name: "Leyes y Asuntos Relacionados", description: "Registro de vehículos, inspección, seguro, cambios de domicilio y leyes de tránsito de Pennsylvania" },
      ],
      questions: [

        {
          content: "How often must a vehicle registered in Pennsylvania be inspected?",
          explanation: "All vehicles registered in Pennsylvania must pass a safety inspection every 12 months (once a year). Emission inspections are also required in certain counties. Operating a vehicle with an expired inspection sticker is a violation that can result in a fine and points on your record.",
          handbookSection: "Laws and Related Issues — Vehicle Inspection",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州注册的车辆多久需要接受一次检验？",
              explanation: "所有在宾夕法尼亚州注册的车辆必须每12个月（每年一次）通过安全检验。某些县还需要进行排放检验。驾驶检验贴纸过期的车辆是违规行为，可能导致罚款并在驾驶记录上增加分数。",
            },
            {
              language: "es",
              content: "¿Con qué frecuencia debe inspeccionarse un vehículo registrado en Pennsylvania?",
              explanation: "Todos los vehículos registrados en Pennsylvania deben pasar una inspección de seguridad cada 12 meses (una vez al año). Las inspecciones de emisiones también son requeridas en ciertos condados. Operar un vehículo con una calcomanía de inspección vencida es una infracción.",
            },
          ],
          options: [
            { content: "Every 12 months", isCorrect: true, translations: [{ language: "zh", content: "每12个月" }, { language: "es", content: "Cada 12 meses" }] },
            { content: "Every 6 months", isCorrect: false, translations: [{ language: "zh", content: "每6个月" }, { language: "es", content: "Cada 6 meses" }] },
            { content: "Every 24 months", isCorrect: false, translations: [{ language: "zh", content: "每24个月" }, { language: "es", content: "Cada 24 meses" }] },
            { content: "Only when ownership changes", isCorrect: false, translations: [{ language: "zh", content: "仅在所有权变更时" }, { language: "es", content: "Solo cuando cambia la propiedad" }] },
          ],
        },

        {
          content: "Within how many days must you notify PennDOT when you change your address?",
          explanation: "Pennsylvania law requires you to notify PennDOT within 15 days of changing your address. You must update both your driver's license address and your vehicle registration. Failure to do so can result in missing important notices from PennDOT, including suspension notices.",
          handbookSection: "Laws and Related Issues — Driver Responsibilities",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "更改地址后，您必须在多少天内通知宾州交通部（PennDOT）？",
              explanation: "宾夕法尼亚州法律要求在更改地址后15天内通知宾州交通部。您必须同时更新驾照地址和车辆注册信息。不这样做可能导致错过宾州交通部的重要通知，包括暂扣通知。",
            },
            {
              language: "es",
              content: "¿Dentro de cuántos días debe notificar a PennDOT cuando cambia su domicilio?",
              explanation: "La ley de Pennsylvania requiere que notifique a PennDOT dentro de 15 días de cambiar su domicilio. Debe actualizar tanto la dirección de su licencia de conducir como la de su registro vehicular. No hacerlo puede resultar en perder avisos importantes de PennDOT.",
            },
          ],
          options: [
            { content: "15 days", isCorrect: true, translations: [{ language: "zh", content: "15天" }, { language: "es", content: "15 días" }] },
            { content: "30 days", isCorrect: false, translations: [{ language: "zh", content: "30天" }, { language: "es", content: "30 días" }] },
            { content: "60 days", isCorrect: false, translations: [{ language: "zh", content: "60天" }, { language: "es", content: "60 días" }] },
            { content: "10 days", isCorrect: false, translations: [{ language: "zh", content: "10天" }, { language: "es", content: "10 días" }] },
          ],
        },

        {
          content: "Under Pennsylvania's Financial Responsibility Law, what is the MINIMUM required liability insurance coverage for bodily injury per person?",
          explanation: "Pennsylvania's Financial Responsibility Law requires minimum liability insurance of $15,000 per person / $30,000 per accident for bodily injury, and $5,000 for property damage. Driving without the required insurance can result in a 3-month license and registration suspension, plus a $300 restoration fee.",
          handbookSection: "Laws and Related Issues — Insurance Requirements",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州财务责任法，每人身体伤害责任险的最低要求保额是多少？",
              explanation: "宾夕法尼亚州财务责任法要求最低责任险为每人15,000美元/每次事故30,000美元的人身伤害险，以及5,000美元的财产损失险。无保险驾驶可能导致驾照和车辆注册暂扣3个月，以及300美元的恢复费用。",
            },
            {
              language: "es",
              content: "Según la Ley de Responsabilidad Financiera de Pennsylvania, ¿cuál es la cobertura mínima requerida de seguro de responsabilidad por lesiones corporales por persona?",
              explanation: "La Ley de Responsabilidad Financiera de Pennsylvania requiere un seguro de responsabilidad mínimo de $15,000 por persona / $30,000 por accidente para lesiones corporales, y $5,000 para daños a la propiedad. Conducir sin el seguro requerido puede resultar en una suspensión de licencia y registro de 3 meses.",
            },
          ],
          options: [
            { content: "$15,000 per person", isCorrect: true, translations: [{ language: "zh", content: "每人15,000美元" }, { language: "es", content: "$15,000 por persona" }] },
            { content: "$25,000 per person", isCorrect: false, translations: [{ language: "zh", content: "每人25,000美元" }, { language: "es", content: "$25,000 por persona" }] },
            { content: "$10,000 per person", isCorrect: false, translations: [{ language: "zh", content: "每人10,000美元" }, { language: "es", content: "$10,000 por persona" }] },
            { content: "$50,000 per person", isCorrect: false, translations: [{ language: "zh", content: "每人50,000美元" }, { language: "es", content: "$50,000 por persona" }] },
          ],
        },

        {
          content: "Pennsylvania's anti-texting law prohibits sending text messages while driving. What is the fine for a first offense?",
          explanation: "Pennsylvania's anti-texting law (Act 21 of 2012) makes it a primary offense to send, read, or write text messages while driving. The fine for a first offense is $50. Because it is a primary offense, police can pull you over solely for this violation without needing another reason.",
          handbookSection: "Laws and Related Issues — Distracted Driving Law",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州禁止驾驶时发短信的法律规定，首次违规的罚款是多少？",
              explanation: "宾夕法尼亚州禁止驾驶时发短信的法律（2012年第21号法案）将驾驶时发送、阅读或书写短信定为主要违规行为。首次违规罚款50美元。由于这是主要违规，警察可以仅因此违规将您拦截，无需其他理由。",
            },
            {
              language: "es",
              content: "La ley antitexteo de Pennsylvania prohíbe enviar mensajes de texto mientras se conduce. ¿Cuál es la multa por una primera infracción?",
              explanation: "La ley antitexteo de Pennsylvania (Ley 21 de 2012) hace que sea una infracción primaria enviar, leer o escribir mensajes de texto mientras se conduce. La multa por una primera infracción es de $50. Al ser una infracción primaria, la policía puede detenerle únicamente por esta violación.",
            },
          ],
          options: [
            { content: "$50", isCorrect: true, translations: [{ language: "zh", content: "50美元" }, { language: "es", content: "$50" }] },
            { content: "$100", isCorrect: false, translations: [{ language: "zh", content: "100美元" }, { language: "es", content: "$100" }] },
            { content: "$25", isCorrect: false, translations: [{ language: "zh", content: "25美元" }, { language: "es", content: "$25" }] },
            { content: "$200", isCorrect: false, translations: [{ language: "zh", content: "200美元" }, { language: "es", content: "$200" }] },
          ],
        },

        {
          content: "Under Pennsylvania law, who is required to wear a seat belt regardless of where they are seated in the vehicle?",
          explanation: "In Pennsylvania, all passengers ages 8–17 must wear a seat belt regardless of their seating position. Adults in the back seat are not required by PA law to wear a seat belt (though it is strongly recommended). Front seat occupants of all ages must wear a seat belt. Children under 8 must use an appropriate child restraint.",
          handbookSection: "Laws and Related Issues — Seat Belt Law",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州法律，谁无论坐在车内哪个位置都必须系安全带？",
              explanation: "在宾夕法尼亚州，8至17岁的所有乘客无论坐在哪个位置都必须系安全带。根据宾州法律，后排成年乘客不要求系安全带（但强烈建议）。所有年龄的前排乘员必须系安全带。8岁以下儿童必须使用适当的儿童约束装置。",
            },
            {
              language: "es",
              content: "Según la ley de Pennsylvania, ¿quién debe usar cinturón de seguridad independientemente de dónde esté sentado en el vehículo?",
              explanation: "En Pennsylvania, todos los pasajeros de 8 a 17 años deben usar cinturón de seguridad independientemente de su posición. Los adultos en el asiento trasero no están obligados por la ley de PA a usar cinturón (aunque se recomienda firmemente). Los ocupantes del asiento delantero de todas las edades deben usar cinturón.",
            },
          ],
          options: [
            { content: "All passengers ages 8–17", isCorrect: true, translations: [{ language: "zh", content: "8至17岁的所有乘客" }, { language: "es", content: "Todos los pasajeros de 8 a 17 años" }] },
            { content: "Only the driver", isCorrect: false, translations: [{ language: "zh", content: "仅驾驶员" }, { language: "es", content: "Solo el conductor" }] },
            { content: "All occupants in all seats at all ages", isCorrect: false, translations: [{ language: "zh", content: "所有年龄的所有座位乘员" }, { language: "es", content: "Todos los ocupantes en todos los asientos a todas las edades" }] },
            { content: "Front seat occupants only", isCorrect: false, translations: [{ language: "zh", content: "仅前排乘员" }, { language: "es", content: "Solo los ocupantes del asiento delantero" }] },
          ],
        },

        {
          content: "What is the minimum distance Pennsylvania law requires you to maintain from an emergency vehicle stopped on the side of the road with lights flashing?",
          explanation: "Under Pennsylvania's Steer Clear law, when an emergency vehicle (police, fire, ambulance), tow truck, or PennDOT vehicle is stopped on the side of the road with flashing lights, you must move over one lane if possible. If you cannot change lanes safely, you must slow down to a safe speed. The Steer Clear law applies on all roads, not just highways.",
          handbookSection: "Laws and Related Issues — Move Over Law",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州法律要求您与停在路边开启闪光灯的紧急车辆保持多大距离？",
              explanation: "根据宾夕法尼亚州的「Steer Clear」法律，当紧急车辆（警察、消防、救护车）、拖车或宾州交通部车辆停在路边开启闪光灯时，如果可能，必须移入另一车道。如果无法安全换道，必须减速至安全速度。Steer Clear法律适用于所有道路，不仅限于高速公路。",
            },
            {
              language: "es",
              content: "¿Cuál es la distancia mínima que la ley de Pennsylvania le exige mantener de un vehículo de emergencia detenido al costado de la carretera con luces intermitentes?",
              explanation: "Bajo la ley Steer Clear de Pennsylvania, cuando un vehículo de emergencia (policía, bomberos, ambulancia), grúa o vehículo de PennDOT está detenido al costado de la carretera con luces intermitentes, debe cambiarse de carril si es posible. Si no puede hacerlo con seguridad, debe reducir la velocidad.",
            },
          ],
          options: [
            { content: "One full lane away — or slow down if changing lanes is not safe", isCorrect: true, translations: [{ language: "zh", content: "移开一个完整车道——或者如果无法安全换道则减速" }, { language: "es", content: "Un carril completo de distancia — o reducir la velocidad si no es seguro cambiar de carril" }] },
            { content: "500 feet minimum distance at all times", isCorrect: false, translations: [{ language: "zh", content: "任何时候保持至少500英尺距离" }, { language: "es", content: "Distancia mínima de 500 pies en todo momento" }] },
            { content: "No minimum distance — just slow down", isCorrect: false, translations: [{ language: "zh", content: "没有最小距离——只需减速" }, { language: "es", content: "Sin distancia mínima — solo reducir la velocidad" }] },
            { content: "Three car lengths behind the vehicle", isCorrect: false, translations: [{ language: "zh", content: "在车辆后方保持三个车身距离" }, { language: "es", content: "Tres largos de automóvil detrás del vehículo" }] },
          ],
        },

        {
          content: "Within how many days must you notify PennDOT of a name or address change in Pennsylvania?",
          explanation: "Pennsylvania law requires drivers to notify PennDOT within 15 days of a name or address change. You can do this online or by calling 717-412-5300. A name change requires completing Form DL-80. Driver's license update cards are issued at no cost to non-commercial drivers. Failure to update your address means you may miss important correspondence from PennDOT, including suspension notices.",
          handbookSection: "Laws and Related Issues — License Requirements",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州的姓名或地址变更必须在几天内通知PennDOT？",
              explanation: "宾夕法尼亚州法律要求驾驶人在姓名或地址变更后15天内通知PennDOT。可以在线或致电717-412-5300办理。姓名变更需要填写DL-80表格。非商业驾驶人免费获得驾驶执照更新卡。不更新地址意味着您可能错过PennDOT的重要通信，包括暂扣通知。",
            },
            {
              language: "es",
              content: "¿Dentro de cuántos días debe notificar a PennDOT sobre un cambio de nombre o dirección en Pennsylvania?",
              explanation: "La ley de Pennsylvania requiere que los conductores notifiquen a PennDOT dentro de los 15 días de un cambio de nombre o dirección. Puede hacerlo en línea o llamando al 717-412-5300. Un cambio de nombre requiere completar el Formulario DL-80. Las tarjetas de actualización de licencia de conducir se emiten sin costo para los conductores no comerciales.",
            },
          ],
          options: [
            { content: "Within 15 days", isCorrect: true, translations: [{ language: "zh", content: "15天以内" }, { language: "es", content: "Dentro de 15 días" }] },
            { content: "Within 30 days", isCorrect: false, translations: [{ language: "zh", content: "30天以内" }, { language: "es", content: "Dentro de 30 días" }] },
            { content: "Within 60 days", isCorrect: false, translations: [{ language: "zh", content: "60天以内" }, { language: "es", content: "Dentro de 60 días" }] },
            { content: "At your next license renewal — no immediate action required", isCorrect: false, translations: [{ language: "zh", content: "在下次驾照更新时——无需立即行动" }, { language: "es", content: "En su próxima renovación de licencia — no se requiere acción inmediata" }] },
          ],
        },

        {
          content: "At approximately what outside temperature can a vehicle interior reach dangerous heat levels within just 10 minutes, even with windows partially open?",
          explanation: "When the outside temperature is in the low 80s°F (around 80–82°F), a vehicle's interior can reach dangerously high temperatures within just 10 minutes — even with windows cracked. Temperatures inside can exceed 120°F. Children and pets are especially vulnerable to heatstroke in these conditions. Pennsylvania law and common safety practice require that you NEVER leave children or pets unattended in vehicles.",
          handbookSection: "Laws and Related Issues — Vehicle Safety",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "当室外温度大约为多少时，车辆内部在仅仅10分钟内就能达到危险的高温，即使车窗部分开着？",
              explanation: "当室外温度在华氏80度低段（约80–82°F）时，即使车窗微开，车辆内部在短短10分钟内就能达到危险高温。车内温度可超过120°F。儿童和宠物在这种情况下特别容易遭受中暑。宾夕法尼亚州法律和常识安全规范要求绝不将儿童或宠物单独留在车内。",
            },
            {
              language: "es",
              content: "¿A aproximadamente qué temperatura exterior puede el interior de un vehículo alcanzar niveles de calor peligrosos en solo 10 minutos, incluso con las ventanas parcialmente abiertas?",
              explanation: "Cuando la temperatura exterior está en los 80°F bajos (alrededor de 80–82°F), el interior de un vehículo puede alcanzar temperaturas peligrosamente altas en solo 10 minutos, incluso con las ventanas entreabiertas. Las temperaturas interiores pueden superar los 120°F. Los niños y las mascotas son especialmente vulnerables al golpe de calor en estas condiciones.",
            },
          ],
          options: [
            { content: "In the low 80s°F — interior can reach dangerous levels in as little as 10 minutes", isCorrect: true, translations: [{ language: "zh", content: "华氏80度低段——车内温度可在短短10分钟内达到危险水平" }, { language: "es", content: "En los 80°F bajos — el interior puede alcanzar niveles peligrosos en tan solo 10 minutos" }] },
            { content: "Only above 100°F outside — low temperatures cannot cause heatstroke", isCorrect: false, translations: [{ language: "zh", content: "只有室外超过100°F时——低温不会导致中暑" }, { language: "es", content: "Solo por encima de 100°F afuera — las temperaturas bajas no pueden causar golpe de calor" }] },
            { content: "About 95°F outside — takes at least 30 minutes at that temperature", isCorrect: false, translations: [{ language: "zh", content: "室外约95°F——在该温度下至少需要30分钟" }, { language: "es", content: "Alrededor de 95°F afuera — tarda al menos 30 minutos a esa temperatura" }] },
            { content: "Only in direct sunlight — shaded parking is always safe", isCorrect: false, translations: [{ language: "zh", content: "只有在直射阳光下——阴凉停车位总是安全的" }, { language: "es", content: "Solo en luz solar directa — el estacionamiento sombreado siempre es seguro" }] },
          ],
        },

        {
          content: "How far in advance must a deaf or hearing-impaired person request a free interpreter when visiting a Pennsylvania Driver License Center?",
          explanation: "Pennsylvania provides free interpreter services for deaf or hearing-impaired customers at all Driver License Centers and Photo License Centers. To ensure an interpreter is available, you must request one at least 2 weeks (14 days) in advance. You can make this request by contacting PennDOT at 717-412-5300 or TDD: 711. All Driver License Center facilities are physically accessible to persons with disabilities.",
          handbookSection: "Laws and Related Issues — ADA Services",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "聋人或听力障碍者在前往宾夕法尼亚州驾照中心时，需要提前多久申请免费口译员？",
              explanation: "宾夕法尼亚州在所有驾照中心和照片驾照中心为聋人或听力障碍客户提供免费口译服务。为确保口译员到位，您必须提前至少2周（14天）提出申请。可以联系PennDOT 717-412-5300或TDD：711提出申请。所有驾照中心设施对残障人士均可无障碍使用。",
            },
            {
              language: "es",
              content: "¿Con cuánta anticipación debe una persona sorda o con problemas de audición solicitar un intérprete gratuito al visitar un Centro de Licencias de Conducir de Pennsylvania?",
              explanation: "Pennsylvania proporciona servicios de intérprete gratuitos para clientes sordos o con problemas de audición en todos los Centros de Licencias de Conducir y Centros de Licencias de Foto. Para garantizar que haya un intérprete disponible, debe solicitarlo con al menos 2 semanas (14 días) de anticipación. Puede hacer esta solicitud contactando a PennDOT al 717-412-5300 o TDD: 711.",
            },
          ],
          options: [
            { content: "At least 2 weeks in advance", isCorrect: true, translations: [{ language: "zh", content: "至少提前2周" }, { language: "es", content: "Al menos 2 semanas de anticipación" }] },
            { content: "At least 48 hours in advance", isCorrect: false, translations: [{ language: "zh", content: "至少提前48小时" }, { language: "es", content: "Al menos 48 horas de anticipación" }] },
            { content: "No advance notice needed — interpreters are always available on site", isCorrect: false, translations: [{ language: "zh", content: "无需提前通知——口译员始终在场" }, { language: "es", content: "No se necesita aviso previo — los intérpretes siempre están disponibles en el sitio" }] },
            { content: "At least 1 month in advance", isCorrect: false, translations: [{ language: "zh", content: "至少提前1个月" }, { language: "es", content: "Al menos 1 mes de anticipación" }] },
          ],
        },

        {
          content: "What is the fine for parking in a space reserved for persons with disabilities without a valid placard or plate in Pennsylvania?",
          explanation: "Parking in a space reserved for persons with disabilities without displaying a valid disabled person or disabled veteran registration plate or placard is a summary offense in Pennsylvania. The fine ranges from $50 to $200. Vehicles may also be towed at the owner's expense. To legally park in a disability space, the vehicle must display the placard AND be operated by or transporting the person with the disability.",
          handbookSection: "Laws and Related Issues — Parking for Persons With Disabilities",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州，没有有效牌照或挂牌停放在残障人士专用车位的罚款是多少？",
              explanation: "在宾夕法尼亚州，未展示有效残障人士或残障退伍军人登记牌照或挂牌而停放在残障专用车位是简易罪。罚款从50美元到200美元不等。车辆也可能被拖走，费用由车主承担。要合法停放在残障车位，车辆必须展示挂牌，且必须由残障人士驾驶或运送残障人士。",
            },
            {
              language: "es",
              content: "¿Cuál es la multa por estacionarse en un espacio reservado para personas con discapacidades sin un letrero o placa válidos en Pennsylvania?",
              explanation: "Estacionarse en un espacio reservado para personas con discapacidades sin mostrar una placa de registro o letrero válido para personas discapacitadas o veteranos discapacitados es una infracción sumaria en Pennsylvania. La multa va de $50 a $200. Los vehículos también pueden ser remolcados a expensas del propietario.",
            },
          ],
          options: [
            { content: "$50 to $200 fine and possible towing", isCorrect: true, translations: [{ language: "zh", content: "50至200美元罚款，可能被拖走" }, { language: "es", content: "Multa de $50 a $200 y posible remolque" }] },
            { content: "A warning for a first offense only", isCorrect: false, translations: [{ language: "zh", content: "仅首次违规给予警告" }, { language: "es", content: "Solo advertencia por primera infracción" }] },
            { content: "$500 minimum fine regardless of circumstances", isCorrect: false, translations: [{ language: "zh", content: "无论情况如何，最低500美元罚款" }, { language: "es", content: "Multa mínima de $500 independientemente de las circunstancias" }] },
            { content: "No fine — only the placard holder can report the violation", isCorrect: false, translations: [{ language: "zh", content: "无罚款——只有挂牌持有人才能举报违规" }, { language: "es", content: "Sin multa — solo el titular del letrero puede reportar la infracción" }] },
          ],
        },

        {
          content: "Under Pennsylvania's anti-littering law, what is the maximum fine for throwing waste from a vehicle?",
          explanation: "Pennsylvania's anti-littering law prohibits dropping, throwing, or depositing waste from a vehicle onto any highway or other property. Upon conviction, the fine can be up to $300. Importantly, drivers are responsible for violations committed by their passengers — you can receive the fine even if a passenger threw the litter. This law covers everything from cigarette butts to large garbage.",
          handbookSection: "Laws and Related Issues — Anti-Littering Law",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "根据宾夕法尼亚州防乱扔垃圾法，从车辆中扔垃圾的最高罚款是多少？",
              explanation: "宾夕法尼亚州的防乱扔垃圾法禁止从车辆上向任何高速公路或其他财产丢弃、扔掷或放置废物。被定罪后，罚款最高可达300美元。重要的是，驾驶人对其乘客违规负责——即使是乘客扔的垃圾，您也可能收到罚款。该法律涵盖从烟蒂到大型垃圾的一切。",
            },
            {
              language: "es",
              content: "Bajo la ley anti-basura de Pennsylvania, ¿cuál es la multa máxima por arrojar basura desde un vehículo?",
              explanation: "La ley anti-basura de Pennsylvania prohíbe dejar caer, arrojar o depositar residuos desde un vehículo en cualquier carretera u otra propiedad. Al ser condenado, la multa puede ser de hasta $300. Es importante destacar que los conductores son responsables de las infracciones cometidas por sus pasajeros — puede recibir la multa incluso si un pasajero arrojó la basura.",
            },
          ],
          options: [
            { content: "Up to $300", isCorrect: true, translations: [{ language: "zh", content: "最高300美元" }, { language: "es", content: "Hasta $300" }] },
            { content: "Up to $50", isCorrect: false, translations: [{ language: "zh", content: "最高50美元" }, { language: "es", content: "Hasta $50" }] },
            { content: "Up to $1,000", isCorrect: false, translations: [{ language: "zh", content: "最高1,000美元" }, { language: "es", content: "Hasta $1,000" }] },
            { content: "Drivers are not responsible for what passengers throw from the vehicle", isCorrect: false, translations: [{ language: "zh", content: "驾驶人对乘客从车辆中扔的东西不负责" }, { language: "es", content: "Los conductores no son responsables de lo que los pasajeros arrojen desde el vehículo" }] },
          ],
        },

        {
          content: "How often must a Pennsylvania-registered vehicle pass a safety inspection, and how far in advance may you get it done?",
          explanation: "Pennsylvania-registered vehicles must pass a safety inspection every 12 months (once per year). You may get the inspection done up to 90 days before the current inspection sticker expires. An emissions inspection is also required in many Pennsylvania counties for vehicles from model year 1975 and newer. The Emissions Customer Hotline is 1-800-265-0921.",
          handbookSection: "Laws and Related Issues — Vehicle Safety Inspection",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州注册的车辆多久需要通过一次安全检查，可以提前多久进行？",
              explanation: "宾夕法尼亚州注册的车辆必须每12个月（每年一次）通过安全检查。可以在当前检查贴纸到期前最多90天进行检查。在宾夕法尼亚州许多县，1975年及以后车型的车辆还需要进行排放检查。排放客户热线为1-800-265-0921。",
            },
            {
              language: "es",
              content: "¿Con qué frecuencia debe pasar una inspección de seguridad un vehículo registrado en Pennsylvania, y con cuánta anticipación puede realizarla?",
              explanation: "Los vehículos registrados en Pennsylvania deben pasar una inspección de seguridad cada 12 meses (una vez al año). Puede hacer la inspección hasta 90 días antes de que expire la pegatina de inspección actual. También se requiere una inspección de emisiones en muchos condados de Pennsylvania para vehículos del año modelo 1975 y más recientes.",
            },
          ],
          options: [
            { content: "Every 12 months — may be done up to 90 days before expiration", isCorrect: true, translations: [{ language: "zh", content: "每12个月一次——可在到期前90天内进行" }, { language: "es", content: "Cada 12 meses — puede realizarse hasta 90 días antes de la expiración" }] },
            { content: "Every 24 months for vehicles newer than 5 years", isCorrect: false, translations: [{ language: "zh", content: "5年以内的车辆每24个月一次" }, { language: "es", content: "Cada 24 meses para vehículos de menos de 5 años" }] },
            { content: "Every 6 months for all vehicles", isCorrect: false, translations: [{ language: "zh", content: "所有车辆每6个月一次" }, { language: "es", content: "Cada 6 meses para todos los vehículos" }] },
            { content: "Only when selling the vehicle — no periodic inspections required", isCorrect: false, translations: [{ language: "zh", content: "只在出售车辆时——不需要定期检查" }, { language: "es", content: "Solo al vender el vehículo — no se requieren inspecciones periódicas" }] },
          ],
        },

        {
          content: "What minimum lateral clearance must Pennsylvania drivers maintain when passing a bicyclist on the road?",
          explanation: "Pennsylvania law requires drivers to maintain a minimum of 4 feet of clearance when passing a bicyclist. To provide this clearance, drivers may even cross a yellow center line if it is safe to do so. Drivers cannot force a bicyclist off the road — doing so can result in criminal charges. Bicyclists are required to follow traffic laws but may legally travel below the minimum speed.",
          handbookSection: "Laws and Related Issues — Safe Passing and Bicycles",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "宾夕法尼亚州驾驶人在超越路上的自行车手时，必须保持多少横向间距？",
              explanation: "宾夕法尼亚州法律要求驾驶人超越自行车手时至少保持4英尺的间距。为了提供这个间距，驾驶人甚至可以在安全的情况下越过黄色中心线。驾驶人不得迫使自行车手离开道路——这样做可能面临刑事指控。自行车手被要求遵守交通法规，但可以合法地低于最低速度行驶。",
            },
            {
              language: "es",
              content: "¿Qué espacio lateral mínimo deben mantener los conductores de Pennsylvania al pasar a un ciclista en la carretera?",
              explanation: "La ley de Pennsylvania requiere que los conductores mantengan un espacio mínimo de 4 pies al pasar a un ciclista. Para proporcionar este espacio, los conductores incluso pueden cruzar una línea amarilla central si es seguro hacerlo. Los conductores no pueden forzar a un ciclista a salir de la carretera — hacerlo puede resultar en cargos criminales.",
            },
          ],
          options: [
            { content: "At least 4 feet — may cross center line if needed and safe", isCorrect: true, translations: [{ language: "zh", content: "至少4英尺——如果需要且安全，可以越过中心线" }, { language: "es", content: "Al menos 4 pies — puede cruzar la línea central si es necesario y seguro" }] },
            { content: "At least 3 feet — the standard rule for all vehicles", isCorrect: false, translations: [{ language: "zh", content: "至少3英尺——所有车辆的标准规则" }, { language: "es", content: "Al menos 3 pies — la regla estándar para todos los vehículos" }] },
            { content: "At least 6 feet — bicyclists need extra safety margin", isCorrect: false, translations: [{ language: "zh", content: "至少6英尺——自行车手需要额外的安全裕度" }, { language: "es", content: "Al menos 6 pies — los ciclistas necesitan margen de seguridad adicional" }] },
            { content: "No specific distance — just pass safely", isCorrect: false, translations: [{ language: "zh", content: "没有具体距离——只要安全超越" }, { language: "es", content: "Sin distancia específica — solo pase de forma segura" }] },
          ],
        },

        {
          content: "What is the 'Dutch Reach' method, and why is it recommended?",
          explanation: "The Dutch Reach is a technique for opening a car door: instead of using the hand closest to the door, you reach across with your far hand. This motion automatically rotates your body so you can see approaching cyclists or other traffic in your mirror and over your shoulder before fully opening the door. Using the near hand and opening the door directly without checking is a major cause of 'dooring' accidents where cyclists are struck by suddenly opening car doors.",
          handbookSection: "Laws and Related Issues — Safe Passing and Bicycles",
          difficulty: 2,
          translations: [
            {
              language: "zh",
              content: "什么是「Dutch Reach」方法，为什么推荐它？",
              explanation: "Dutch Reach是一种开车门的技巧：不是用最近门的那只手，而是用远手伸过来开门。这个动作会自动旋转您的身体，让您在完全打开车门前通过后视镜和回头查看来到的自行车手或其他交通。直接用近手不检查就开门是「开门事故」的主要原因，自行车手会被突然打开的车门撞上。",
            },
            {
              language: "es",
              content: "¿Qué es el método 'Dutch Reach' y por qué se recomienda?",
              explanation: "El Dutch Reach es una técnica para abrir la puerta del auto: en lugar de usar la mano más cercana a la puerta, se alcanza con la mano lejana. Este movimiento rota automáticamente su cuerpo para que pueda ver ciclistas que se aproximan u otro tráfico en su espejo y sobre su hombro antes de abrir completamente la puerta. Usar la mano cercana y abrir la puerta directamente sin verificar es una causa importante de accidentes de 'apertura de puerta'.",
            },
          ],
          options: [
            { content: "Opening the car door with the far hand to naturally rotate and check for cyclists", isCorrect: true, translations: [{ language: "zh", content: "用远手开车门，自然地旋转身体并检查自行车手" }, { language: "es", content: "Abrir la puerta del auto con la mano lejana para girar naturalmente y verificar si hay ciclistas" }] },
            { content: "Always opening the door quickly to minimize time it is partially open", isCorrect: false, translations: [{ language: "zh", content: "总是快速开门以最小化门半开的时间" }, { language: "es", content: "Abrir siempre la puerta rápidamente para minimizar el tiempo que está parcialmente abierta" }] },
            { content: "A method of parking near a bicycle lane on the right side", isCorrect: false, translations: [{ language: "zh", content: "在右侧自行车道旁停车的方法" }, { language: "es", content: "Un método para estacionarse cerca de un carril de bicicletas en el lado derecho" }] },
            { content: "A European-style U-turn technique for narrow streets", isCorrect: false, translations: [{ language: "zh", content: "欧式窄街U形转弯技巧" }, { language: "es", content: "Una técnica de giro en U al estilo europeo para calles estrechas" }] },
          ],
        },

        {
          content: "What is the fine for texting while driving in Pennsylvania, and is it a primary or secondary offense?",
          explanation: "Pennsylvania's anti-texting law (effective March 8, 2012) prohibits using wireless phones, PDAs, smartphones, or portable computers for texting, emailing, or internet browsing while driving. The fine is $50. It is a PRIMARY offense — meaning a police officer can stop and cite you SOLELY for texting, without needing any other reason to pull you over. Exceptions exist for GPS navigation devices and vehicle-integrated systems.",
          handbookSection: "Laws and Related Issues — Anti-Texting Law",
          difficulty: 1,
          translations: [
            {
              language: "zh",
              content: "在宾夕法尼亚州边开车边发短信的罚款是多少，这是主要违规还是次要违规？",
              explanation: "宾夕法尼亚州的反发短信法（2012年3月8日生效）禁止在驾驶时使用无线电话、PDA、智能手机或便携式电脑发短信、发邮件或浏览互联网。罚款为50美元。这是主要违规——意味着警察可以仅凭发短信就拦截并开罚单，不需要其他理由拦截您。GPS导航设备和车辆集成系统有例外。",
            },
            {
              language: "es",
              content: "¿Cuál es la multa por enviar mensajes de texto mientras conduce en Pennsylvania, y es una infracción primaria o secundaria?",
              explanation: "La ley anti-mensajes de texto de Pennsylvania (vigente desde el 8 de marzo de 2012) prohíbe usar teléfonos inalámbricos, PDA, teléfonos inteligentes o computadoras portátiles para enviar mensajes de texto, correos electrónicos o navegar por Internet mientras conduce. La multa es de $50. Es una infracción PRIMARIA — lo que significa que un oficial de policía puede detenerle y citarle ÚNICAMENTE por enviar mensajes de texto.",
            },
          ],
          options: [
            { content: "$50 fine — primary offense (can be stopped solely for texting)", isCorrect: true, translations: [{ language: "zh", content: "50美元罚款——主要违规（可以仅因发短信被拦截）" }, { language: "es", content: "Multa de $50 — infracción primaria (puede ser detenido únicamente por enviar mensajes de texto)" }] },
            { content: "$500 fine — secondary offense (must have another violation first)", isCorrect: false, translations: [{ language: "zh", content: "500美元罚款——次要违规（必须先有其他违规）" }, { language: "es", content: "Multa de $500 — infracción secundaria (debe tener otra infracción primero)" }] },
            { content: "$100 fine — secondary offense only", isCorrect: false, translations: [{ language: "zh", content: "100美元罚款——仅次要违规" }, { language: "es", content: "Multa de $100 — solo infracción secundaria" }] },
            { content: "No fine — only a verbal warning for first offense", isCorrect: false, translations: [{ language: "zh", content: "无罚款——首次违规仅口头警告" }, { language: "es", content: "Sin multa — solo advertencia verbal por primera infracción" }] },
          ],
        },

        {
          content: "What are the penalties for driving around or through a road closure sign that was posted due to hazardous conditions such as flooding?",
          explanation: "Under Pennsylvania law (effective September 6, 2012), it is illegal to drive around or through traffic-control devices closing roads due to hazardous conditions. Penalties include: 2 points added to your driving record and a fine of up to $250. If your action requires emergency responders to be called, the fine increases to up to $500 PLUS full liability for all emergency response costs. This law is commonly known as the 'Stupid Motorist Law' or the Turn Around Don't Drown enforcement.",
          handbookSection: "Laws and Related Issues — Road Closure Violations",
          difficulty: 3,
          translations: [
            {
              language: "zh",
              content: "因洪水等危险情况而驾车绕过或穿越道路封闭标志的处罚是什么？",
              explanation: "根据宾夕法尼亚州法律（2012年9月6日生效），绕过或穿越因危险情况而关闭道路的交通控制设施是违法的。处罚包括：驾驶记录增加2分，罚款最高250美元。如果您的行为需要紧急响应人员出动，罚款增加到最高500美元，加上所有紧急响应费用的全额责任。",
            },
            {
              language: "es",
              content: "¿Cuáles son las penalizaciones por conducir alrededor o a través de una señal de cierre de carretera publicada debido a condiciones peligrosas como inundaciones?",
              explanation: "Bajo la ley de Pennsylvania (vigente desde el 6 de septiembre de 2012), es ilegal conducir alrededor o a través de dispositivos de control de tráfico que cierran carreteras debido a condiciones peligrosas. Las penalizaciones incluyen: 2 puntos añadidos a su registro de conducción y una multa de hasta $250. Si su acción requiere que se llame a socorristas, la multa aumenta a hasta $500 MÁS plena responsabilidad por todos los costos de respuesta de emergencia.",
            },
          ],
          options: [
            { content: "2 points plus fine up to $250; if emergency responders called, up to $500 + full response costs", isCorrect: true, translations: [{ language: "zh", content: "2分加最高250美元罚款；若需紧急响应，最高500美元加全额响应费用" }, { language: "es", content: "2 puntos más multa de hasta $250; si se llama a socorristas, hasta $500 + costos totales de respuesta" }] },
            { content: "A verbal warning only for a first offense", isCorrect: false, translations: [{ language: "zh", content: "首次违规仅口头警告" }, { language: "es", content: "Solo advertencia verbal por primera infracción" }] },
            { content: "Automatic license suspension for 30 days", isCorrect: false, translations: [{ language: "zh", content: "自动暂扣驾照30天" }, { language: "es", content: "Suspensión automática de licencia por 30 días" }] },
            { content: "$1,000 fine minimum regardless of circumstances", isCorrect: false, translations: [{ language: "zh", content: "无论情况如何，最低1,000美元罚款" }, { language: "es", content: "Multa mínima de $1,000 independientemente de las circunstancias" }] },
          ],
        },

      ], // end Topic 7 questions
    }, // end Topic 7

  ], // end topics
}; // end pennsylvaniaDMV
