/**
 * Add 15 Texas Topic 4 questions: Alcohol & Drugs
 * Covers: legal BAC limits (adult/commercial/minor), zero tolerance,
 * implied consent, ALR suspension, DWI definition & penalties,
 * child-passenger felony, ignition interlock, effects of alcohol,
 * open container law, prescription/OTC drugs, drug combinations
 * Sources: Texas Driver Handbook DL-7 (Jan 2026), Texas Transportation Code
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  // Q1 ── Legal BAC limit (adult) ───────────────────────────────────────────
  {
    content: "In Texas, the legal blood alcohol concentration (BAC) limit for a non-commercial driver age 21 or older is:",
    explanation: "Texas law sets the legal BAC limit at 0.08% for non-commercial drivers 21 and older. At or above this level, a driver is legally intoxicated regardless of how they feel.",
    handbookSection: "Alcohol & Drugs — Legal Limits",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，21 岁及以上非商业驾驶人的法定血液酒精含量（BAC）上限是：",
        explanation: "德克萨斯州法律规定，21 岁及以上非商业驾驶人的法定 BAC 上限为 0.08%。达到或超过此水平，无论驾驶人自我感觉如何，均依法构成醉驾。",
      },
      {
        language: "es",
        content: "En Texas, el límite legal de concentración de alcohol en sangre (BAC) para un conductor no comercial de 21 años o más es:",
        explanation: "La ley de Texas establece el límite legal de BAC en 0.08% para conductores no comerciales de 21 años o más. En este nivel o por encima de él, un conductor está legalmente intoxicado, independientemente de cómo se sienta.",
      },
    ],
    options: [
      { content: "0.05%", isCorrect: false, zh: "0.05%", es: "0.05%" },
      { content: "0.08%", isCorrect: true,  zh: "0.08%", es: "0.08%" },
      { content: "0.10%", isCorrect: false, zh: "0.10%", es: "0.10%" },
      { content: "0.15%", isCorrect: false, zh: "0.15%", es: "0.15%" },
    ],
  },

  // Q2 ── Commercial driver BAC limit ───────────────────────────────────────
  {
    content: "What is the legal BAC limit for a driver operating a commercial motor vehicle in Texas?",
    explanation: "Commercial drivers are held to a stricter standard: a BAC of 0.04% or higher constitutes intoxication while operating a commercial motor vehicle in Texas.",
    handbookSection: "Alcohol & Drugs — Legal Limits",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，驾驶商用机动车辆的驾驶人，法定 BAC 上限是多少？",
        explanation: "商业驾驶人须遵守更严格的标准：在德克萨斯州驾驶商用机动车辆时，BAC 达到 0.04% 或以上即构成醉驾。",
      },
      {
        language: "es",
        content: "¿Cuál es el límite legal de BAC para un conductor que opera un vehículo de motor comercial en Texas?",
        explanation: "Los conductores comerciales están sujetos a un estándar más estricto: un BAC de 0.04% o más constituye intoxicación al operar un vehículo de motor comercial en Texas.",
      },
    ],
    options: [
      { content: "0.02%", isCorrect: false, zh: "0.02%", es: "0.02%" },
      { content: "0.04%", isCorrect: true,  zh: "0.04%", es: "0.04%" },
      { content: "0.06%", isCorrect: false, zh: "0.06%", es: "0.06%" },
      { content: "0.08%", isCorrect: false, zh: "0.08%", es: "0.08%" },
    ],
  },

  // Q3 ── Zero tolerance (under 21) ─────────────────────────────────────────
  {
    content: "Under Texas's Zero Tolerance law, a driver under 21 years old can be charged with Driving Under the Influence (DUI) with a BAC as low as:",
    explanation: "Texas has a zero-tolerance policy for drivers under 21. Any detectable amount of alcohol in their system — even below 0.08% — is a violation of the law.",
    handbookSection: "Alcohol & Drugs — Zero Tolerance",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州「零容忍」法律，21 岁以下驾驶人，BAC 低至多少即可被指控酒后驾车（DUI）？",
        explanation: "德克萨斯州对 21 岁以下驾驶人实行零容忍政策。体内只要有任何可检测到的酒精含量——即使低于 0.08%——均属违法。",
      },
      {
        language: "es",
        content: "Bajo la ley de Tolerancia Cero de Texas, un conductor menor de 21 años puede ser acusado de Conducir Bajo la Influencia (DUI) con un BAC tan bajo como:",
        explanation: "Texas tiene una política de tolerancia cero para conductores menores de 21 años. Cualquier cantidad detectable de alcohol en su sistema — incluso por debajo de 0.08% — es una violación de la ley.",
      },
    ],
    options: [
      { content: "Any detectable amount", isCorrect: true,  zh: "任何可检测到的酒精含量", es: "Cualquier cantidad detectable" },
      { content: "0.02%",                isCorrect: false, zh: "0.02%",                  es: "0.02%" },
      { content: "0.04%",                isCorrect: false, zh: "0.04%",                  es: "0.04%" },
      { content: "0.08%",                isCorrect: false, zh: "0.08%",                  es: "0.08%" },
    ],
  },

  // Q4 ── Implied consent ────────────────────────────────────────────────────
  {
    content: "Texas's \"implied consent\" law means that by driving on Texas roads, you have:",
    explanation: "By operating a vehicle on Texas public roads, drivers automatically consent to chemical testing (breath, blood, or urine) if arrested for suspected DWI. Refusing the test carries its own penalties.",
    handbookSection: "Alcohol & Drugs — Implied Consent",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州的「默示同意」法律意味着，驾车行驶在德克萨斯州道路上，您已：",
        explanation: "在德克萨斯州公共道路上驾车，驾驶人即自动同意在因涉嫌 DWI 被逮捕时接受化学检测（呼气、血液或尿液检测）。拒绝检测将承担额外处罚。",
      },
      {
        language: "es",
        content: "La ley de \"consentimiento implícito\" de Texas significa que al conducir en las carreteras de Texas, usted ha:",
        explanation: "Al operar un vehículo en las vías públicas de Texas, los conductores consienten automáticamente las pruebas químicas (aliento, sangre u orina) si son arrestados por sospecha de DWI. Negarse a la prueba conlleva sus propias sanciones.",
      },
    ],
    options: [
      { content: "Agreed to obey all posted speed limits",                          isCorrect: false, zh: "同意遵守所有限速标志规定",                   es: "Acordado obedecer todos los límites de velocidad publicados" },
      { content: "Agreed to submit to a chemical test if lawfully arrested for DWI", isCorrect: true,  zh: "同意在依法因 DWI 被逮捕时接受化学检测",        es: "Acordado someterse a una prueba química si es arrestado legalmente por DWI" },
      { content: "Agreed to carry proof of insurance at all times",                  isCorrect: false, zh: "同意随时携带保险证明",                        es: "Acordado llevar prueba de seguro en todo momento" },
      { content: "Agreed not to drive after any amount of alcohol consumption",      isCorrect: false, zh: "同意饮酒后不得驾车",                          es: "Acordado no conducir después de cualquier consumo de alcohol" },
    ],
  },

  // Q5 ── ALR refusal suspension ─────────────────────────────────────────────
  {
    content: "If you refuse to submit to a chemical sobriety test after a lawful DWI arrest in Texas, your driver's license will be automatically suspended for:",
    explanation: "Under Texas's Administrative License Revocation (ALR) program, a first-time refusal to take a chemical test results in an automatic 180-day license suspension, independent of any criminal DWI proceedings.",
    handbookSection: "Alcohol & Drugs — Administrative License Revocation",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，若在依法因 DWI 被逮捕后拒绝接受化学检测，驾照将被自动吊销多长时间？",
        explanation: "根据德克萨斯州行政吊销驾照（ALR）计划，首次拒绝化学检测将导致驾照被自动吊销 180 天，此处罚独立于任何 DWI 刑事诉讼程序之外。",
      },
      {
        language: "es",
        content: "Si se niega a someterse a una prueba química de sobriedad después de un arresto legal por DWI en Texas, su licencia de conducir será suspendida automáticamente por:",
        explanation: "Bajo el programa de Revocación Administrativa de Licencia (ALR) de Texas, una primera negativa a tomar una prueba química resulta en una suspensión automática de la licencia de 180 días, independientemente de cualquier proceso penal por DWI.",
      },
    ],
    options: [
      { content: "90 days",  isCorrect: false, zh: "90 天",  es: "90 días" },
      { content: "120 days", isCorrect: false, zh: "120 天", es: "120 días" },
      { content: "180 days", isCorrect: true,  zh: "180 天", es: "180 días" },
      { content: "365 days", isCorrect: false, zh: "365 天", es: "365 días" },
    ],
  },

  // Q6 ── ALR failed-test suspension ────────────────────────────────────────
  {
    content: "If you fail a chemical sobriety test (BAC at or above the legal limit) and it is your first offense, your Texas driver's license will be suspended for:",
    explanation: "A first-time failed chemical test triggers a 90-day Administrative License Revocation. Subsequent failures result in longer suspensions.",
    handbookSection: "Alcohol & Drugs — Administrative License Revocation",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，若首次化学检测不合格（BAC 达到或超过法定上限），驾照将被吊销多长时间？",
        explanation: "首次化学检测不合格将触发 90 天的行政吊销驾照处罚。后续再次不合格将面临更长的吊销期。",
      },
      {
        language: "es",
        content: "Si reprueba una prueba química de sobriedad (BAC en o por encima del límite legal) y es su primera infracción, su licencia de conducir de Texas será suspendida por:",
        explanation: "Una primera prueba química reprobada desencadena una Revocación Administrativa de Licencia de 90 días. Las fallas posteriores resultan en suspensiones más largas.",
      },
    ],
    options: [
      { content: "30 days",  isCorrect: false, zh: "30 天",  es: "30 días" },
      { content: "60 days",  isCorrect: false, zh: "60 天",  es: "60 días" },
      { content: "90 days",  isCorrect: true,  zh: "90 天",  es: "90 días" },
      { content: "180 days", isCorrect: false, zh: "180 天", es: "180 días" },
    ],
  },

  // Q7 ── DWI definition ─────────────────────────────────────────────────────
  {
    content: "Which of the following best describes \"intoxication\" under Texas law?",
    explanation: "Texas law defines intoxication as either (1) loss of the normal use of mental or physical faculties by reason of alcohol, a drug, or any combination, OR (2) having a BAC of 0.08% or more. Both standards can be used in prosecution.",
    handbookSection: "Alcohol & Drugs — DWI Definition",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "以下哪项最准确地描述了德克萨斯州法律对「醉酒」的定义？",
        explanation: "德克萨斯州法律将「醉酒」定义为：（1）因酒精、毒品或两者共同作用，导致丧失正常精神或身体功能；或（2）BAC 达到 0.08% 或以上。两种标准均可用于起诉。",
      },
      {
        language: "es",
        content: "¿Cuál de las siguientes opciones describe mejor la \"intoxicación\" según la ley de Texas?",
        explanation: "La ley de Texas define la intoxicación como (1) la pérdida del uso normal de las facultades mentales o físicas por razón del alcohol, una droga o cualquier combinación, O (2) tener un BAC de 0.08% o más. Ambos estándares pueden usarse en la acusación.",
      },
    ],
    options: [
      { content: "Having a BAC of 0.08% or higher only",                                                                                               isCorrect: false, zh: "仅指 BAC 达到 0.08% 或以上",                              es: "Tener un BAC de 0.08% o más solamente" },
      { content: "Feeling noticeably impaired regardless of BAC",                                                                                       isCorrect: false, zh: "无论 BAC 如何，明显感到行动能力受损",                      es: "Sentirse notablemente deteriorado independientemente del BAC" },
      { content: "Not having normal use of mental or physical faculties due to alcohol or drugs, OR having a BAC of 0.08% or higher",                   isCorrect: true,  zh: "因酒精或毒品导致丧失正常精神或身体功能，或 BAC 达到 0.08% 或以上", es: "No tener el uso normal de las facultades mentales o físicas debido al alcohol o las drogas, O tener un BAC de 0.08% o más" },
      { content: "Consuming any alcohol within two hours of driving",                                                                                   isCorrect: false, zh: "驾车前两小时内饮用任何酒精",                               es: "Consumir cualquier alcohol dentro de dos horas antes de conducir" },
    ],
  },

  // Q8 ── First DWI fine ─────────────────────────────────────────────────────
  {
    content: "A first-offense DWI conviction in Texas can result in a fine of up to:",
    explanation: "A first DWI offense in Texas carries a maximum fine of $2,000, plus up to 180 days in jail (with a minimum of 72 hours) and loss of driver's license for up to one year.",
    handbookSection: "Alcohol & Drugs — DWI Penalties",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，首次 DWI 定罪最高可处多少罚款？",
        explanation: "德克萨斯州首次 DWI 违规最高罚款为 2,000 美元，此外还可处最长 180 天监禁（最短 72 小时）及最长一年驾照吊销。",
      },
      {
        language: "es",
        content: "Una primera condena por DWI en Texas puede resultar en una multa de hasta:",
        explanation: "Una primera infracción de DWI en Texas conlleva una multa máxima de $2,000, más hasta 180 días de cárcel (con un mínimo de 72 horas) y pérdida de la licencia de conducir por hasta un año.",
      },
    ],
    options: [
      { content: "$1,000",  isCorrect: false, zh: "1,000 美元",  es: "$1,000" },
      { content: "$2,000",  isCorrect: true,  zh: "2,000 美元",  es: "$2,000" },
      { content: "$4,000",  isCorrect: false, zh: "4,000 美元",  es: "$4,000" },
      { content: "$10,000", isCorrect: false, zh: "10,000 美元", es: "$10,000" },
    ],
  },

  // Q9 ── DWI with child passenger ──────────────────────────────────────────
  {
    content: "If a driver is convicted of DWI with a child passenger under 15 years old in the vehicle, they face:",
    explanation: "DWI with a child passenger under 15 is a state jail felony in Texas, carrying up to 2 years in state jail and a fine of up to $10,000 — far more serious than a standard DWI.",
    handbookSection: "Alcohol & Drugs — DWI Penalties",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "若驾驶人在车内载有 15 岁以下儿童乘客的情况下被定罪 DWI，将面临：",
        explanation: "在德克萨斯州，载有 15 岁以下儿童乘客的 DWI 属于州监狱重罪，最高可判处 2 年州监狱刑期及最高 10,000 美元罚款，远重于标准 DWI 处罚。",
      },
      {
        language: "es",
        content: "Si un conductor es condenado por DWI con un pasajero menor de 15 años en el vehículo, se enfrenta a:",
        explanation: "DWI con un pasajero menor de 15 años es un delito grave de cárcel estatal en Texas, con hasta 2 años en la cárcel estatal y una multa de hasta $10,000 — mucho más grave que un DWI estándar.",
      },
    ],
    options: [
      { content: "The same penalties as a standard first-offense DWI", isCorrect: false, zh: "与标准首次 DWI 相同的处罚",  es: "Las mismas sanciones que un DWI estándar de primera infracción" },
      { content: "A state jail felony charge",                          isCorrect: true,  zh: "州监狱重罪指控",             es: "Un cargo de delito grave de cárcel estatal" },
      { content: "Only a fine, no jail time",                           isCorrect: false, zh: "仅处罚款，无监禁",            es: "Solo una multa, sin tiempo en prisión" },
      { content: "An automatic lifetime license revocation",            isCorrect: false, zh: "终身自动吊销驾照",             es: "Revocación automática de por vida de la licencia" },
    ],
  },

  // Q10 ── Ignition interlock device ────────────────────────────────────────
  {
    content: "After a DWI conviction in Texas, you may be required to install an ignition interlock device (IID) on your vehicle. What does an IID do?",
    explanation: "An ignition interlock device requires the driver to provide a breath sample before the engine will start. If alcohol above a preset level is detected, the vehicle will not start.",
    handbookSection: "Alcohol & Drugs — DWI Consequences",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，DWI 定罪后可能被要求在车辆上安装点火锁定装置（IID）。该装置的作用是：",
        explanation: "点火锁定装置要求驾驶人在发动机启动前提供呼气样本。若检测到超过预设水平的酒精含量，车辆将无法启动。",
      },
      {
        language: "es",
        content: "Después de una condena por DWI en Texas, puede ser obligado a instalar un dispositivo de bloqueo de encendido (IID) en su vehículo. ¿Qué hace un IID?",
        explanation: "Un dispositivo de bloqueo de encendido requiere que el conductor proporcione una muestra de aliento antes de que el motor arranque. Si se detecta alcohol por encima de un nivel preestablecido, el vehículo no arrancará.",
      },
    ],
    options: [
      { content: "Limits your vehicle's top speed to 45 mph",                              isCorrect: false, zh: "将车辆最高时速限制在 45 英里/小时",       es: "Limita la velocidad máxima de su vehículo a 45 mph" },
      { content: "Prevents the engine from starting if alcohol is detected on your breath", isCorrect: true,  zh: "若检测到驾驶人呼气中含有酒精，则阻止发动机启动", es: "Impide que el motor arranque si se detecta alcohol en su aliento" },
      { content: "Automatically calls 911 if you swerve out of your lane",                 isCorrect: false, zh: "若车辆偏出行驶车道则自动拨打 911",         es: "Llama automáticamente al 911 si se sale de su carril" },
      { content: "Records your GPS location and reports it to the court",                  isCorrect: false, zh: "记录 GPS 位置并向法院报告",                es: "Registra su ubicación GPS y la reporta al tribunal" },
    ],
  },

  // Q11 ── Only time lowers BAC ──────────────────────────────────────────────
  {
    content: "Which of the following statements about alcohol and driving is TRUE?",
    explanation: "There is no method that speeds up alcohol metabolism. The liver processes approximately one standard drink per hour. Coffee, food, cold showers, and exercise do not lower BAC — only time does.",
    handbookSection: "Alcohol & Drugs — Effects of Alcohol",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "以下关于酒精与驾驶的说法，哪项是正确的？",
        explanation: "没有任何方法可以加速酒精代谢。肝脏每小时大约代谢一标准饮酒量。咖啡、食物、冷水淋浴和运动均无法降低 BAC——只有时间才能做到。",
      },
      {
        language: "es",
        content: "¿Cuál de las siguientes afirmaciones sobre el alcohol y la conducción es VERDADERA?",
        explanation: "No existe ningún método que acelere el metabolismo del alcohol. El hígado procesa aproximadamente una bebida estándar por hora. El café, la comida, las duchas frías y el ejercicio no reducen el BAC — solo el tiempo lo hace.",
      },
    ],
    options: [
      { content: "Coffee and food will quickly lower your BAC",                                              isCorrect: false, zh: "喝咖啡和进食可以迅速降低 BAC",                      es: "El café y la comida reducirán rápidamente su BAC" },
      { content: "Cold air and exercise can sober you up faster",                                            isCorrect: false, zh: "冷空气和运动可以加快清醒速度",                      es: "El aire frío y el ejercicio pueden ayudarlo a sobriarse más rápido" },
      { content: "Only time reduces BAC — the liver processes about one standard drink per hour",            isCorrect: true,  zh: "只有时间能降低 BAC——肝脏每小时代谢约一标准饮酒量", es: "Solo el tiempo reduce el BAC — el hígado procesa aproximadamente una bebida estándar por hora" },
      { content: "Switching between beer and liquor slows alcohol absorption",                               isCorrect: false, zh: "交替饮用啤酒和烈酒会减缓酒精吸收",                  es: "Alternar entre cerveza y licor ralentiza la absorción de alcohol" },
    ],
  },

  // Q12 ── Impairment begins at 0.05% ───────────────────────────────────────
  {
    content: "At which BAC level do most people begin to experience impaired judgment and reduced coordination?",
    explanation: "Impairment begins well before the legal limit. At around 0.05% BAC, most people show reduced coordination, altered judgment, and lowered inhibition. This is why even \"just a couple of drinks\" can affect driving ability.",
    handbookSection: "Alcohol & Drugs — Effects of Alcohol",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "大多数人在 BAC 达到多少时开始出现判断力受损和协调能力下降？",
        explanation: "酒精带来的损害远在法定上限之前便已出现。BAC 约达 0.05% 时，大多数人已表现出协调能力下降、判断力改变和抑制力减弱。这也是为什么「只喝了几杯」同样会影响驾驶能力。",
      },
      {
        language: "es",
        content: "¿A qué nivel de BAC la mayoría de las personas comienza a experimentar deterioro del juicio y reducción de la coordinación?",
        explanation: "El deterioro comienza mucho antes del límite legal. Con un BAC de aproximadamente 0.05%, la mayoría de las personas muestra coordinación reducida, juicio alterado e inhibición disminuida. Por eso incluso \"un par de bebidas\" puede afectar la capacidad de conducir.",
      },
    ],
    options: [
      { content: "0.02%", isCorrect: false, zh: "0.02%", es: "0.02%" },
      { content: "0.05%", isCorrect: true,  zh: "0.05%", es: "0.05%" },
      { content: "0.08%", isCorrect: false, zh: "0.08%", es: "0.08%" },
      { content: "0.10%", isCorrect: false, zh: "0.10%", es: "0.10%" },
    ],
  },

  // Q13 ── Open container law ────────────────────────────────────────────────
  {
    content: "Under Texas law, it is illegal to have an open alcoholic beverage container in the passenger area of a motor vehicle on a public highway. This law applies to:",
    explanation: "Texas's open container law prohibits any person — driver or passenger — from possessing an open alcoholic beverage container in the passenger area of a motor vehicle on a public road.",
    handbookSection: "Alcohol & Drugs — Open Container Law",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州法律，在公共公路上，机动车乘客区内持有未密封酒精饮料容器属于违法行为。此法律适用于：",
        explanation: "德克萨斯州开放容器法禁止任何人——无论驾驶人还是乘客——在公共道路上行驶的机动车乘客区内持有未密封的酒精饮料容器。",
      },
      {
        language: "es",
        content: "Según la ley de Texas, está prohibido tener un recipiente abierto de bebida alcohólica en el área de pasajeros de un vehículo de motor en una vía pública. Esta ley aplica a:",
        explanation: "La ley de contenedor abierto de Texas prohíbe que cualquier persona — conductor o pasajero — posea un recipiente abierto de bebida alcohólica en el área de pasajeros de un vehículo de motor en una vía pública.",
      },
    ],
    options: [
      { content: "Drivers only, not passengers",               isCorrect: false, zh: "仅驾驶人，不包括乘客",     es: "Solo al conductor, no a los pasajeros" },
      { content: "Both drivers and passengers",                isCorrect: true,  zh: "驾驶人和乘客均适用",       es: "Tanto al conductor como a los pasajeros" },
      { content: "Only vehicles without a commercial license", isCorrect: false, zh: "仅无商业驾照的车辆",       es: "Solo a vehículos sin licencia comercial" },
      { content: "Only drivers under 21 years old",            isCorrect: false, zh: "仅 21 岁以下驾驶人",      es: "Solo a conductores menores de 21 años" },
    ],
  },

  // Q14 ── Prescription / OTC drugs ─────────────────────────────────────────
  {
    content: "Which of the following drugs can impair your ability to drive legally, even if prescribed by a doctor?",
    explanation: "Any substance — prescription, over-the-counter, or illegal — that impairs your mental or physical faculties can constitute DWI in Texas. Always check medication labels and consult your doctor before driving while taking any drug.",
    handbookSection: "Alcohol & Drugs — Drugs & Driving",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "以下哪种药物可能导致驾驶能力受损，即使是由医生开具的处方药？",
        explanation: "任何物质——无论是处方药、非处方药还是违禁药物——只要损害精神或身体功能，均可在德克萨斯州构成 DWI。服用任何药物前，请务必查阅药物标签并咨询医生，再决定是否驾车。",
      },
      {
        language: "es",
        content: "¿Cuál de los siguientes medicamentos puede deteriorar su capacidad para conducir legalmente, incluso si fue recetado por un médico?",
        explanation: "Cualquier sustancia — recetada, de venta libre o ilegal — que deteriore sus facultades mentales o físicas puede constituir DWI en Texas. Siempre revise las etiquetas de los medicamentos y consulte a su médico antes de conducir mientras toma cualquier medicamento.",
      },
    ],
    options: [
      { content: "Only illegal controlled substances",                                     isCorrect: false, zh: "仅非法管制物质",                              es: "Solo sustancias controladas ilegales" },
      { content: "Only drugs that cause drowsiness",                                        isCorrect: false, zh: "仅导致嗜睡的药物",                            es: "Solo medicamentos que causan somnolencia" },
      { content: "Any prescription or over-the-counter drug that affects your driving ability", isCorrect: true, zh: "任何影响驾驶能力的处方药或非处方药",        es: "Cualquier medicamento recetado o de venta libre que afecte su capacidad de conducir" },
      { content: "Prescription drugs are always legal to use while driving",                isCorrect: false, zh: "处方药在驾车时始终合法使用",                  es: "Los medicamentos recetados siempre son legales para usar mientras se conduce" },
    ],
  },

  // Q15 ── Alcohol + drug combination ───────────────────────────────────────
  {
    content: "Mixing alcohol with other drugs such as sedatives or antihistamines will:",
    explanation: "Combining alcohol with other depressants (sedatives, antihistamines, some pain medications) produces a multiplied effect — far greater impairment than either substance alone. This combination is especially dangerous for driving.",
    handbookSection: "Alcohol & Drugs — Drugs & Driving",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "酒精与其他药物（如镇静剂或抗组胺药）混合使用将：",
        explanation: "酒精与其他抑制剂（镇静剂、抗组胺药、部分止痛药）混合使用会产生叠加效应——其损害程度远大于任何单一物质。这种组合对驾驶尤为危险。",
      },
      {
        language: "es",
        content: "Mezclar alcohol con otras drogas como sedantes o antihistamínicos:",
        explanation: "Combinar alcohol con otros depresores (sedantes, antihistamínicos, algunos analgésicos) produce un efecto multiplicado — un deterioro mucho mayor que cualquiera de las sustancias por sí sola. Esta combinación es especialmente peligrosa para conducir.",
      },
    ],
    options: [
      { content: "Cancel out the effects of both substances",                                         isCorrect: false, zh: "抵消两种物质的效果",                        es: "Cancela los efectos de ambas sustancias" },
      { content: "Only affect you if you exceed the legal BAC limit",                                 isCorrect: false, zh: "仅在超过法定 BAC 上限时才产生影响",          es: "Solo lo afecta si excede el límite legal de BAC" },
      { content: "Increase impairment, often unpredictably",                                          isCorrect: true,  zh: "加重损害程度，且往往难以预测",               es: "Aumenta el deterioro, a menudo de manera impredecible" },
      { content: "Have no additional effect if the drug is taken hours before driving",               isCorrect: false, zh: "若药物在驾车前数小时服用则不会产生额外影响", es: "No tiene efecto adicional si el medicamento se tomó horas antes de conducir" },
    ],
  },
];

async function main() {
  const category = await prisma.examCategory.findFirst({
    where: { nameEn: "Texas Driver's License" },
  });
  if (!category) throw new Error("Category 'Texas Driver's License' not found");

  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Alcohol & Drugs", categoryId: category.id },
  });
  if (!topic) throw new Error("Topic 'Alcohol & Drugs' not found");
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
  console.log(`\n🎉 Done! Added ${added} questions to TX Topic 4.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
