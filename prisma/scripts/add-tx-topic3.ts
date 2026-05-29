/**
 * Add 15 Texas Topic 3 questions: Speed Limits & Special Situations
 * Covers: basic speed rule, statutory limits (urban/highway day/night/alley),
 * school zones, work zone doubled fines, adverse weather, minimum speed,
 * fog, night driving, max speed (85 mph SH-130), stopping distance,
 * following distance (3-sec rule), hydroplaning
 * Sources: Texas Driver Handbook DL-7 (Jan 2026), Chapters 5, 6
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  // Q1 ── Basic speed rule ───────────────────────────────────────────────────
  {
    content: "In Texas, what is the basic speed law?",
    explanation: "Texas law requires you to drive at a speed that is reasonable and prudent under existing conditions — never faster than is safe, and never faster than the posted speed limit. This means you may need to drive below the posted limit in rain, fog, heavy traffic, or other hazardous conditions.",
    handbookSection: "Speed Limits — Basic Speed Rule",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，基本限速法则是什么？",
        explanation: "德克萨斯州法律要求驾驶人以适应当前路况的合理、谨慎速度行驶，绝不超过限速标志规定的速度。这意味着在雨天、雾天、繁忙交通或其他危险条件下，可能需要低于限速行驶。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuál es la ley básica de velocidad?",
        explanation: "La ley de Texas exige conducir a una velocidad razonable y prudente para las condiciones existentes, nunca más rápido de lo que sea seguro ni más rápido que el límite publicado. Esto significa que puede necesitar conducir por debajo del límite en lluvia, niebla, tráfico pesado u otras condiciones peligrosas.",
      },
    ],
    options: [
      { content: "Always drive at the posted speed limit", isCorrect: false, zh: "始终以限速标志所示速度行驶", es: "Siempre conduzca al límite de velocidad publicado" },
      { content: "Drive at a speed that is reasonable and prudent for existing conditions, never exceeding the posted limit", isCorrect: true, zh: "以适应当前路况的合理、谨慎速度行驶，且不超过限速标志规定的速度", es: "Conduzca a una velocidad razonable y prudente para las condiciones actuales, sin exceder el límite publicado" },
      { content: "You may exceed the posted limit by 5 mph if traffic allows", isCorrect: false, zh: "只要交通允许，可超过限速 5 英里/小时", es: "Puede exceder el límite publicado en 5 mph si el tráfico lo permite" },
      { content: "Match the speed of surrounding traffic at all times", isCorrect: false, zh: "任何时候都应与周围车流保持相同速度", es: "Iguale siempre la velocidad del tráfico que lo rodea" },
    ],
  },

  // Q2 ── Urban district default 30 mph ─────────────────────────────────────
  {
    content: "What is the default speed limit in a Texas business or residential district when no speed limit is posted?",
    explanation: "In Texas, the prima facie (default) speed limit in a business or residential district is 30 mph. You must observe this limit even when no sign is posted.",
    handbookSection: "Speed Limits — Statutory Limits",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州商业区或住宅区，若无限速标志，默认限速是多少？",
        explanation: "在德克萨斯州，商业区或住宅区的法定默认限速为 30 英里/小时。即使没有标志，也必须遵守此限速。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuál es el límite de velocidad predeterminado en un distrito comercial o residencial cuando no hay límite publicado?",
        explanation: "En Texas, el límite de velocidad prima facie (predeterminado) en un distrito comercial o residencial es de 30 mph. Debe respetar este límite incluso cuando no haya señal publicada.",
      },
    ],
    options: [
      { content: "25 mph", isCorrect: false, zh: "25 英里/小时", es: "25 mph" },
      { content: "30 mph", isCorrect: true, zh: "30 英里/小时", es: "30 mph" },
      { content: "35 mph", isCorrect: false, zh: "35 英里/小时", es: "35 mph" },
      { content: "45 mph", isCorrect: false, zh: "45 英里/小时", es: "45 mph" },
    ],
  },

  // Q3 ── Daytime highway 70 mph ─────────────────────────────────────────────
  {
    content: "What is the default daytime speed limit on a Texas highway outside an urban district when no speed limit is posted?",
    explanation: "The prima facie daytime speed limit on a highway outside an urban district is 70 mph. However, many Texas highways are posted higher than this by TxDOT based on engineering studies.",
    handbookSection: "Speed Limits — Statutory Limits",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，城市区域以外的公路上，若无限速标志，白天的默认限速是多少？",
        explanation: "城市区域以外公路的法定白天默认限速为 70 英里/小时。不过，德州交通局（TxDOT）根据工程研究，在许多德克萨斯州公路上设定了更高的限速。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuál es el límite de velocidad diurno predeterminado en una autopista fuera de un distrito urbano cuando no hay límite publicado?",
        explanation: "El límite de velocidad diurno prima facie en una autopista fuera de un distrito urbano es de 70 mph. Sin embargo, TxDOT ha establecido límites más altos en muchas autopistas de Texas basándose en estudios de ingeniería.",
      },
    ],
    options: [
      { content: "60 mph", isCorrect: false, zh: "60 英里/小时", es: "60 mph" },
      { content: "65 mph", isCorrect: false, zh: "65 英里/小时", es: "65 mph" },
      { content: "70 mph", isCorrect: true, zh: "70 英里/小时", es: "70 mph" },
      { content: "75 mph", isCorrect: false, zh: "75 英里/小时", es: "75 mph" },
    ],
  },

  // Q4 ── Nighttime highway 65 mph ──────────────────────────────────────────
  {
    content: "What is the default nighttime speed limit on a Texas highway outside an urban district when no speed limit is posted?",
    explanation: "The prima facie nighttime speed limit on a highway outside an urban district is 65 mph. Night driving is more dangerous because visibility is reduced, so the nighttime limit is 5 mph lower than the daytime limit.",
    handbookSection: "Speed Limits — Statutory Limits",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，城市区域以外的公路上，若无限速标志，夜间的默认限速是多少？",
        explanation: "城市区域以外公路的法定夜间默认限速为 65 英里/小时。夜间行车能见度降低，驾驶风险更高，因此夜间限速比白天低 5 英里/小时。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuál es el límite de velocidad nocturno predeterminado en una autopista fuera de un distrito urbano cuando no hay límite publicado?",
        explanation: "El límite de velocidad nocturno prima facie en una autopista fuera de un distrito urbano es de 65 mph. Manejar de noche es más peligroso porque la visibilidad es menor, por lo que el límite nocturno es 5 mph más bajo que el diurno.",
      },
    ],
    options: [
      { content: "55 mph", isCorrect: false, zh: "55 英里/小时", es: "55 mph" },
      { content: "60 mph", isCorrect: false, zh: "60 英里/小时", es: "60 mph" },
      { content: "65 mph", isCorrect: true, zh: "65 英里/小时", es: "65 mph" },
      { content: "70 mph", isCorrect: false, zh: "70 英里/小时", es: "70 mph" },
    ],
  },

  // Q5 ── Alley 15 mph ───────────────────────────────────────────────────────
  {
    content: "What is the maximum speed limit in an alley in Texas?",
    explanation: "The speed limit in an alley is 15 mph. Alleys are narrow, with limited visibility and pedestrians, so this low limit helps prevent accidents.",
    handbookSection: "Speed Limits — Statutory Limits",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，小巷内的最高限速是多少？",
        explanation: "小巷内的限速为 15 英里/小时。小巷道路狭窄、能见度有限且行人较多，较低的限速有助于防止事故发生。",
      },
      {
        language: "es",
        content: "¿Cuál es el límite máximo de velocidad en un callejón en Texas?",
        explanation: "El límite de velocidad en un callejón es de 15 mph. Los callejones son estrechos, con visibilidad limitada y presencia de peatones, por lo que este límite bajo ayuda a prevenir accidentes.",
      },
    ],
    options: [
      { content: "10 mph", isCorrect: false, zh: "10 英里/小时", es: "10 mph" },
      { content: "15 mph", isCorrect: true, zh: "15 英里/小时", es: "15 mph" },
      { content: "20 mph", isCorrect: false, zh: "20 英里/小时", es: "20 mph" },
      { content: "25 mph", isCorrect: false, zh: "25 英里/小时", es: "25 mph" },
    ],
  },

  // Q6 ── School zone ────────────────────────────────────────────────────────
  {
    content: "In Texas, when must you observe the reduced speed limit in a school zone?",
    explanation: "You must observe the school zone speed limit whenever children are present near the road, or whenever the school zone warning lights are flashing. This applies regardless of whether school is in session — if children are visible, you must slow down.",
    handbookSection: "Speed Limits — School Zones",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，何时必须遵守学区降低的限速规定？",
        explanation: "只要道路附近有儿童，或学区警示灯正在闪烁，就必须遵守学区限速规定。无论学校是否正在上课——只要看到儿童，就必须减速。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuándo debe respetar el límite de velocidad reducido en una zona escolar?",
        explanation: "Debe respetar el límite de velocidad de la zona escolar siempre que haya niños cerca de la vía, o cuando las luces de advertencia de la zona escolar estén parpadeando. Esto aplica independientemente de si hay clases — si hay niños visibles, debe reducir la velocidad.",
      },
    ],
    options: [
      { content: "Only during posted school hours on weekdays", isCorrect: false, zh: "仅在工作日的规定上学时间内", es: "Solo durante el horario escolar publicado en días de semana" },
      { content: "Only when a crossing guard is present", isCorrect: false, zh: "仅当有过街护卫员在场时", es: "Solo cuando hay un guardia de cruce presente" },
      { content: "Whenever children are present near the road or the school zone warning lights are flashing", isCorrect: true, zh: "只要道路附近有儿童，或学区警示灯闪烁时", es: "Siempre que haya niños cerca de la vía o cuando las luces de advertencia de la zona escolar estén parpadeando" },
      { content: "Only when a school bus is stopped in the zone", isCorrect: false, zh: "仅当学区内有校车停靠时", es: "Solo cuando un autobús escolar esté detenido en la zona" },
    ],
  },

  // Q7 ── Work zone doubled fines ────────────────────────────────────────────
  {
    content: "In Texas, fines for speeding in a construction or maintenance zone when workers are present are:",
    explanation: "Texas law doubles the fines for speeding in active construction or maintenance work zones when workers are present. These enhanced penalties are intended to deter speeding and protect road workers.",
    handbookSection: "Speed Limits — Work Zones",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，当施工或道路维护区有工人在场时，超速罚款为：",
        explanation: "德克萨斯州法律规定，在有工人在场的施工或道路维护区超速，罚款加倍。这些加重处罚旨在遏制超速行为，保护道路工人安全。",
      },
      {
        language: "es",
        content: "En Texas, las multas por exceso de velocidad en una zona de construcción o mantenimiento cuando hay trabajadores presentes son:",
        explanation: "La ley de Texas duplica las multas por exceso de velocidad en zonas de construcción o mantenimiento activas cuando hay trabajadores presentes. Estas sanciones reforzadas buscan disuadir el exceso de velocidad y proteger a los trabajadores viales.",
      },
    ],
    options: [
      { content: "The same as regular speeding fines", isCorrect: false, zh: "与普通超速罚款相同", es: "Iguales a las multas normales por exceso de velocidad" },
      { content: "Doubled when workers are present", isCorrect: true, zh: "有工人在场时加倍", es: "Duplicadas cuando hay trabajadores presentes" },
      { content: "Tripled when workers are present", isCorrect: false, zh: "有工人在场时增至三倍", es: "Triplicadas cuando hay trabajadores presentes" },
      { content: "Applied only if you cause an accident", isCorrect: false, zh: "仅在造成事故时适用", es: "Aplicadas solo si causa un accidente" },
    ],
  },

  // Q8 ── Adverse weather ────────────────────────────────────────────────────
  {
    content: "When driving in rain, fog, or other conditions that reduce visibility or road traction, you should:",
    explanation: "In adverse conditions, you must slow below the posted speed limit if necessary to drive safely, and increase your following distance. The basic speed rule requires you to adjust your speed to match current conditions — the posted limit is a maximum for ideal conditions, not a target.",
    handbookSection: "Speed Limits — Basic Speed Rule",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在雨天、雾天或其他降低能见度或路面抓地力的条件下驾驶时，应该：",
        explanation: "在不良天气条件下，若有必要，必须将车速降至限速以下以确保安全，并增加跟车距离。基本限速规则要求根据当前路况调整速度——限速是理想条件下的最高速度，而非目标速度。",
      },
      {
        language: "es",
        content: "Al conducir bajo lluvia, niebla u otras condiciones que reducen la visibilidad o la tracción, debe:",
        explanation: "En condiciones adversas, debe reducir la velocidad por debajo del límite publicado si es necesario para conducir con seguridad, y aumentar la distancia de seguimiento. La regla básica de velocidad exige ajustar la velocidad a las condiciones actuales — el límite publicado es un máximo para condiciones ideales, no un objetivo.",
      },
    ],
    options: [
      { content: "Maintain the posted speed limit since it is already set for safety", isCorrect: false, zh: "保持限速行驶，因为限速本身已考虑安全因素", es: "Mantener el límite de velocidad publicado, ya que fue establecido para la seguridad" },
      { content: "Slow down and increase your following distance as needed", isCorrect: true, zh: "根据需要减速并增加跟车距离", es: "Reducir la velocidad y aumentar la distancia de seguimiento según sea necesario" },
      { content: "Turn on hazard lights and continue at normal speed", isCorrect: false, zh: "开启危险警示灯并以正常速度继续行驶", es: "Encender las luces de emergencia y continuar a velocidad normal" },
      { content: "Follow the vehicle ahead closely so you can see the road better", isCorrect: false, zh: "紧跟前车，以便更好地看清道路", es: "Seguir de cerca al vehículo de adelante para ver mejor la carretera" },
    ],
  },

  // Q9 ── Minimum speed / impeding traffic ──────────────────────────────────
  {
    content: "It is illegal in Texas to drive so slowly that you:",
    explanation: "While there is no absolute minimum speed on most Texas roads, it is illegal to drive so slowly that you impede the normal and reasonable movement of traffic, unless reduced speed is necessary for safety. Driving too slowly can be just as dangerous as driving too fast.",
    handbookSection: "Speed Limits — Minimum Speed",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，以下哪种情况下驾车速度过低属于违法？",
        explanation: "虽然德克萨斯州大多数道路没有绝对最低限速，但若行驶速度过低，妨碍正常合理的交通流动，且并非出于安全需要，则属违法。行驶速度过低与过快同样危险。",
      },
      {
        language: "es",
        content: "En Texas, es ilegal conducir tan despacio que:",
        explanation: "Aunque no hay una velocidad mínima absoluta en la mayoría de las vías de Texas, es ilegal conducir tan despacio que obstaculice el movimiento normal y razonable del tráfico, a menos que la velocidad reducida sea necesaria por seguridad. Conducir demasiado lento puede ser tan peligroso como conducir demasiado rápido.",
      },
    ],
    options: [
      { content: "Drive below the speed limit", isCorrect: false, zh: "行驶速度低于限速时", es: "Conduzca por debajo del límite de velocidad" },
      { content: "Drive more slowly than the vehicle behind you", isCorrect: false, zh: "行驶速度低于后方车辆时", es: "Conduzca más lento que el vehículo detrás de usted" },
      { content: "Impede the normal and reasonable movement of traffic unless necessary for safety", isCorrect: true, zh: "在非出于安全需要的情况下，妨碍正常合理的交通流动时", es: "Obstaculice el movimiento normal y razonable del tráfico, a menos que sea necesario por seguridad" },
      { content: "Fail to match the average speed of surrounding vehicles", isCorrect: false, zh: "未能与周围车辆保持平均速度时", es: "No iguale la velocidad promedio de los vehículos que lo rodean" },
    ],
  },

  // Q10 ── Fog: low beams + slow down ────────────────────────────────────────
  {
    content: "When driving in dense fog, you should:",
    explanation: "In dense fog, use low-beam headlights — not high beams, which reflect off fog and reduce visibility further. Reduce your speed significantly, increase following distance, and pull completely off the road and turn off your lights if visibility becomes dangerously low.",
    handbookSection: "Speed Limits — Special Driving Conditions",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在浓雾中行驶时，应该：",
        explanation: "在浓雾中应使用近光灯——远光灯会被雾气反射，反而降低能见度。须显著减速，增加跟车距离。若能见度降至危险水平，应将车辆完全驶离道路并关闭车灯。",
      },
      {
        language: "es",
        content: "Al conducir con niebla densa, debe:",
        explanation: "En niebla densa, use las luces bajas — no las altas, ya que se reflejan en la niebla y reducen aún más la visibilidad. Reduzca considerablemente la velocidad, aumente la distancia de seguimiento y, si la visibilidad se vuelve peligrosamente baja, orillese completamente y apague las luces.",
      },
    ],
    options: [
      { content: "Use high-beam headlights to see farther ahead", isCorrect: false, zh: "使用远光灯以看得更远", es: "Usar las luces altas para ver más lejos" },
      { content: "Use low-beam headlights, slow down significantly, and increase following distance", isCorrect: true, zh: "使用近光灯，显著减速，并增加跟车距离", es: "Usar las luces bajas, reducir significativamente la velocidad y aumentar la distancia de seguimiento" },
      { content: "Keep your speed steady so other drivers can anticipate your position", isCorrect: false, zh: "保持匀速，以便其他驾驶人判断您的位置", es: "Mantener una velocidad constante para que otros conductores puedan anticipar su posición" },
      { content: "Use hazard lights only and maintain the speed limit", isCorrect: false, zh: "仅开启危险警示灯并保持限速行驶", es: "Usar solo las luces de emergencia y mantener el límite de velocidad" },
    ],
  },

  // Q11 ── Night driving: overdriving headlights ─────────────────────────────
  {
    content: "Why should you reduce your speed when driving at night compared to daytime?",
    explanation: "At night, your headlights typically illuminate only 350–500 feet ahead, but at highway speeds your vehicle needs much more distance to stop. Overdriving your headlights — going fast enough that you cannot stop within the distance your lights illuminate — is a leading cause of night crashes.",
    handbookSection: "Speed Limits — Night Driving",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "为什么夜间行车应比白天降低速度？",
        explanation: "夜间行车时，车头灯通常仅能照亮前方 350 至 500 英尺的范围，但在公路速度下，车辆需要更长的距离才能停下。「超越车灯范围驾驶」——车速过快，制动距离超过车灯照明范围——是夜间事故的主要原因之一。",
      },
      {
        language: "es",
        content: "¿Por qué debe reducir la velocidad al conducir de noche en comparación con el día?",
        explanation: "De noche, los faros generalmente iluminan solo entre 350 y 500 pies hacia adelante, pero a velocidades de autopista su vehículo necesita mucha más distancia para detenerse. Conducir más rápido de lo que los faros pueden iluminar — ir a una velocidad tal que no pueda detenerse dentro de la distancia que sus luces alumbran — es una de las principales causas de accidentes nocturnos.",
      },
    ],
    options: [
      { content: "Because the speed limit is lower at night", isCorrect: false, zh: "因为夜间限速更低", es: "Porque el límite de velocidad es más bajo de noche" },
      { content: "Because headlights only illuminate a limited distance ahead, and you may not be able to stop in time for unseen hazards", isCorrect: true, zh: "因为车头灯仅能照亮有限距离，可能无法及时停车避开未察觉的危险", es: "Porque los faros solo iluminan una distancia limitada y puede que no pueda detenerse a tiempo ante peligros no vistos" },
      { content: "Because road surfaces are always wet at night", isCorrect: false, zh: "因为夜间路面总是潮湿的", es: "Porque la superficie de la carretera siempre está mojada de noche" },
      { content: "To conserve fuel", isCorrect: false, zh: "为了节省燃油", es: "Para ahorrar combustible" },
    ],
  },

  // Q12 ── Texas max speed 85 mph SH-130 ─────────────────────────────────────
  {
    content: "What is the highest posted speed limit in Texas, and where does it apply?",
    explanation: "The highest posted speed limit in Texas is 85 mph, currently applied to a section of State Highway 130 (SH-130) toll road between Austin and Seguin. Texas also has 75 and 80 mph limits on many rural interstates and highways.",
    handbookSection: "Speed Limits — Maximum Speed",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州最高的公路限速是多少？适用于哪里？",
        explanation: "德克萨斯州最高的公路限速为 85 英里/小时，目前适用于奥斯汀至塞金之间的 130 号州道（SH-130）收费公路某段。德克萨斯州许多农村州际公路和公路上也设有 75 和 80 英里/小时的限速。",
      },
      {
        language: "es",
        content: "¿Cuál es el límite de velocidad publicado más alto en Texas y dónde aplica?",
        explanation: "El límite de velocidad publicado más alto en Texas es de 85 mph, aplicado actualmente a un tramo de la carretera de peaje State Highway 130 (SH-130) entre Austin y Seguin. Texas también tiene límites de 75 y 80 mph en muchas autopistas interestatales y carreteras rurales.",
      },
    ],
    options: [
      { content: "75 mph — on all rural interstates", isCorrect: false, zh: "75 英里/小时——所有农村州际公路", es: "75 mph — en todas las autopistas interestatales rurales" },
      { content: "80 mph — on certain rural highways", isCorrect: false, zh: "80 英里/小时——部分农村公路", es: "80 mph — en ciertas carreteras rurales" },
      { content: "85 mph — on a section of State Highway 130 (SH-130) toll road", isCorrect: true, zh: "85 英里/小时——130 号州道（SH-130）收费公路某路段", es: "85 mph — en un tramo de la carretera de peaje State Highway 130 (SH-130)" },
      { content: "90 mph — on designated test corridors", isCorrect: false, zh: "90 英里/小时——指定测试路段", es: "90 mph — en corredores de prueba designados" },
    ],
  },

  // Q13 ── Speed and stopping distance ──────────────────────────────────────
  {
    content: "As your vehicle's speed increases, your stopping distance:",
    explanation: "Stopping distance increases dramatically with speed. Doubling your speed more than doubles your stopping distance — it roughly quadruples it because kinetic energy increases as the square of velocity. This is why speed is such a critical factor in crash severity.",
    handbookSection: "Speed Limits — Speed and Stopping Distance",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "随着车速增加，制动距离会：",
        explanation: "制动距离随车速增加而急剧增大。车速翻倍，制动距离不止翻倍——由于动能与速度的平方成正比，制动距离大约增加至四倍。这正是车速对事故严重程度影响如此关键的原因。",
      },
      {
        language: "es",
        content: "A medida que aumenta la velocidad de su vehículo, la distancia de frenado:",
        explanation: "La distancia de frenado aumenta drásticamente con la velocidad. Duplicar la velocidad más que duplica la distancia de frenado — aproximadamente la cuadruplica, porque la energía cinética aumenta con el cuadrado de la velocidad. Por eso la velocidad es un factor tan crítico en la gravedad de los accidentes.",
      },
    ],
    options: [
      { content: "Remains roughly the same", isCorrect: false, zh: "大致保持不变", es: "Se mantiene aproximadamente igual" },
      { content: "Increases slightly", isCorrect: false, zh: "略有增加", es: "Aumenta ligeramente" },
      { content: "Increases significantly — faster speeds require much greater stopping distances", isCorrect: true, zh: "显著增加——车速越快，所需制动距离越长", es: "Aumenta significativamente — las velocidades más altas requieren distancias de frenado mucho mayores" },
      { content: "Decreases because of better momentum", isCorrect: false, zh: "因惯性更大而缩短", es: "Disminuye debido a un mejor impulso" },
    ],
  },

  // Q14 ── 3-second following distance ──────────────────────────────────────
  {
    content: "What is the recommended minimum following time gap between your vehicle and the one ahead in normal driving conditions?",
    explanation: "Texas recommends at least a 3-second following distance under normal conditions. To measure: when the vehicle ahead passes a fixed object, count 'one-thousand-one, one-thousand-two, one-thousand-three.' If you reach the object before finishing the count, you are following too closely. In adverse conditions, increase to 4–5 seconds or more.",
    handbookSection: "Speed Limits — Following Distance",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在正常驾驶条件下，建议与前车保持的最短跟车时间间隔是多少？",
        explanation: "德克萨斯州建议在正常条件下保持至少 3 秒的跟车距离。测量方法：当前车经过某固定参照物时，默数「一千零一、一千零二、一千零三」。若在数完之前您已到达该参照物，则跟车距离过近。在不良天气条件下，应增加至 4 至 5 秒或更长。",
      },
      {
        language: "es",
        content: "¿Cuál es el tiempo mínimo de seguimiento recomendado entre su vehículo y el de adelante en condiciones normales de manejo?",
        explanation: "Texas recomienda al menos 3 segundos de distancia de seguimiento en condiciones normales. Para medirlo: cuando el vehículo de adelante pase un objeto fijo, cuente \"mil uno, mil dos, mil tres\". Si llega al objeto antes de terminar la cuenta, está siguiendo demasiado de cerca. En condiciones adversas, aumente a 4 o 5 segundos o más.",
      },
    ],
    options: [
      { content: "1 second", isCorrect: false, zh: "1 秒", es: "1 segundo" },
      { content: "2 seconds", isCorrect: false, zh: "2 秒", es: "2 segundos" },
      { content: "At least 3 seconds", isCorrect: true, zh: "至少 3 秒", es: "Al menos 3 segundos" },
      { content: "5 seconds at all times", isCorrect: false, zh: "任何时候都保持 5 秒", es: "5 segundos en todo momento" },
    ],
  },

  // Q15 ── Hydroplaning ──────────────────────────────────────────────────────
  {
    content: "Hydroplaning on a wet road is most likely to occur when you:",
    explanation: "Hydroplaning occurs when a vehicle's tires lose contact with the road surface and ride on a film of water. It can begin at speeds as low as 35 mph and becomes increasingly likely at higher speeds, especially on tires with worn tread. To recover from a skid, ease off the accelerator and steer gently in the direction you want to go.",
    handbookSection: "Speed Limits — Special Driving Conditions",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在湿滑路面上，最可能发生水滑（失控漂浮）的情况是：",
        explanation: "水滑现象是指车辆轮胎失去与路面的接触，在水膜上漂浮滑行。在 35 英里/小时的速度下即可开始发生，车速越高风险越大，轮胎胎纹磨损时尤为明显。若发生打滑，应松开油门并轻柔地朝您希望行进的方向转向。",
      },
      {
        language: "es",
        content: "El aquaplaning (hidroplaneo) en una vía mojada es más probable que ocurra cuando:",
        explanation: "El aquaplaning ocurre cuando los neumáticos del vehículo pierden contacto con la superficie de la vía y se deslizan sobre una película de agua. Puede comenzar a velocidades tan bajas como 35 mph y se vuelve más probable a mayores velocidades, especialmente con neumáticos con la banda de rodadura desgastada. Para recuperar el control en un derrape, suelte el acelerador y gire suavemente en la dirección que desea tomar.",
      },
    ],
    options: [
      { content: "Drive slowly on a wet road", isCorrect: false, zh: "在湿滑路面上低速行驶时", es: "Conduce despacio en una vía mojada" },
      { content: "Drive at higher speeds (35 mph or above) on a wet road, especially with worn tires", isCorrect: true, zh: "在湿滑路面上以较高车速（35 英里/小时及以上）行驶时，尤其是轮胎磨损的情况下", es: "Conduce a velocidades más altas (35 mph o más) en una vía mojada, especialmente con neumáticos desgastados" },
      { content: "Brake hard on a wet road", isCorrect: false, zh: "在湿滑路面上急踩刹车时", es: "Frena bruscamente en una vía mojada" },
      { content: "Use cruise control on a dry road", isCorrect: false, zh: "在干燥路面上使用定速巡航时", es: "Usa el control de crucero en una vía seca" },
    ],
  },
];

async function main() {
  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Speed Limits & Special Situations", category: { nameEn: "Texas Driver's License" } },
  });
  if (!topic) throw new Error("TX Topic 3 'Speed Limits & Special Situations' not found");
  console.log(`✅ Found topic: ${topic.name} (id=${topic.id})`);

  let added = 0;
  for (const q of newQuestions) {
    const exists = await prisma.question.findFirst({ where: { content: q.content, topicId: topic.id } });
    if (exists) {
      console.log(`⚠️  Skipping (exists): "${q.content.slice(0, 55)}"`);
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
    console.log(`✅ Added: "${q.content.slice(0, 60)}"`);
    added++;
  }
  console.log(`\n🎉 Done! Added ${added} questions to TX Topic 3.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
