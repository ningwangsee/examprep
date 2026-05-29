/**
 * Add 15 Texas Topic 6 questions: Safety — Pedestrians, Bicycles & Crashes
 * Covers: crash procedures, hit-and-run felony, info exchange, child safety seats
 * (8 yr / 4'9"), driver responsibility for minors, seat belts (all occupants),
 * bicycle direction & 3-foot rule, large-truck blind spots, railroad crossings,
 * stalled on tracks, drowsy driving, ABS braking, rear-wheel skid recovery
 * Sources: Texas Driver Handbook DL-7 (Jan 2026), Texas Transportation Code
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  // Q1 ── First action after a crash ────────────────────────────────────────
  {
    content: "After a crash in Texas, the law requires you to immediately stop at or near the scene. What is the FIRST action you should take after stopping?",
    explanation: "Your first obligation after a crash is to check for injuries. If anyone is injured, call 911 immediately. Failure to stop and render aid when required is a serious criminal offense in Texas.",
    handbookSection: "Safety — Crash Procedures",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州发生事故后，法律要求您立即停车。停车后应采取的第一步是：",
        explanation: "事故发生后的首要义务是检查是否有人受伤。若有伤亡，须立即拨打 911。在德克萨斯州，在应当施救时不停车施救是严重刑事犯罪。",
      },
      {
        language: "es",
        content: "Después de un accidente en Texas, la ley exige que se detenga de inmediato en la escena o cerca de ella. ¿Cuál es la PRIMERA acción que debe tomar después de detenerse?",
        explanation: "Su primera obligación después de un accidente es verificar si hay heridos. Si alguien está lesionado, llame al 911 de inmediato. No detenerse y prestar ayuda cuando es requerido es un delito penal grave en Texas.",
      },
    ],
    options: [
      { content: "Take photos for insurance purposes",                      isCorrect: false, zh: "拍照留存保险理赔证据",             es: "Tomar fotos para propósitos del seguro" },
      { content: "Move all vehicles out of the roadway",                    isCorrect: false, zh: "将所有车辆移出行车道",             es: "Mover todos los vehículos fuera de la vía" },
      { content: "Check for injuries and call 911 if anyone is hurt",       isCorrect: true,  zh: "检查是否有人受伤，如有伤亡立即拨打 911", es: "Verificar si hay heridos y llamar al 911 si alguien está lastimado" },
      { content: "Exchange insurance information with the other driver",    isCorrect: false, zh: "与对方驾驶人交换保险信息",         es: "Intercambiar información del seguro con el otro conductor" },
    ],
  },

  // Q2 ── Required info to exchange ─────────────────────────────────────────
  {
    content: "When involved in a crash in Texas, which of the following pieces of information are you legally required to exchange with the other driver?",
    explanation: "Texas law requires drivers involved in a crash to exchange: name, address, vehicle registration number, and proof of liability insurance. This information must be provided to the other driver and, upon request, to any law enforcement officer at the scene.",
    handbookSection: "Safety — Crash Procedures",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州发生事故后，法律要求您与对方驾驶人交换哪些信息？",
        explanation: "德克萨斯州法律要求事故涉事驾驶人相互交换：姓名、地址、车辆登记号及责任险证明。上述信息须提供给对方驾驶人，并应执法人员要求出示。",
      },
      {
        language: "es",
        content: "Al estar involucrado en un accidente en Texas, ¿qué información está legalmente obligado a intercambiar con el otro conductor?",
        explanation: "La ley de Texas exige que los conductores involucrados en un accidente intercambien: nombre, dirección, número de registro del vehículo y prueba de seguro de responsabilidad. Esta información debe proporcionarse al otro conductor y, a solicitud, a cualquier oficial de la ley en la escena.",
      },
    ],
    options: [
      { content: "Name, address, vehicle registration, and proof of insurance", isCorrect: true,  zh: "姓名、地址、车辆登记号及责任险证明",   es: "Nombre, dirección, registro del vehículo y prueba de seguro" },
      { content: "Name and phone number only",                                  isCorrect: false, zh: "仅提供姓名和电话号码",               es: "Solo nombre y número de teléfono" },
      { content: "Driver's license number and employer information",            isCorrect: false, zh: "驾照号码和工作单位信息",             es: "Número de licencia de conducir e información del empleador" },
      { content: "Insurance policy number only",                               isCorrect: false, zh: "仅提供保险单号码",                   es: "Solo el número de póliza de seguro" },
    ],
  },

  // Q3 ── Hit-and-run felony ─────────────────────────────────────────────────
  {
    content: "In Texas, leaving the scene of a crash that involved injury or death without stopping and rendering aid is:",
    explanation: "Leaving the scene of a crash involving injury or death (\"hit and run\") is a second-degree felony in Texas, punishable by 2–20 years in prison and fines up to $10,000. Even a crash involving property damage only is a criminal misdemeanor if you flee.",
    handbookSection: "Safety — Crash Procedures",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，在涉及人员伤亡的事故发生后逃离现场、未停车施救，属于：",
        explanation: "在涉及人员伤亡的事故后逃逸（「肇事逃逸」）在德克萨斯州属于二级重罪，可处 2 至 20 年监禁及最高 10,000 美元罚款。即使仅造成财产损失后逃离，也构成刑事轻罪。",
      },
      {
        language: "es",
        content: "En Texas, abandonar la escena de un accidente que involucró lesiones o muerte sin detenerse y prestar ayuda es:",
        explanation: "Abandonar la escena de un accidente con lesiones o muerte (\"golpe y fuga\") es un delito grave de segundo grado en Texas, sancionable con 2 a 20 años de prisión y multas de hasta $10,000. Incluso huir de un accidente que solo involucra daños a la propiedad es un delito menor penal.",
      },
    ],
    options: [
      { content: "A Class C misdemeanor",                                isCorrect: false, zh: "C 类轻罪",             es: "Un delito menor Clase C" },
      { content: "A Class B misdemeanor",                                isCorrect: false, zh: "B 类轻罪",             es: "Un delito menor Clase B" },
      { content: "A second-degree felony",                               isCorrect: true,  zh: "二级重罪",             es: "Un delito grave de segundo grado" },
      { content: "Only a civil violation subject to a fine",             isCorrect: false, zh: "仅属于民事违规，处以罚款", es: "Solo una infracción civil sujeta a una multa" },
    ],
  },

  // Q4 ── Child safety seat (8 yr / 4'9") ───────────────────────────────────
  {
    content: "In Texas, children under what age (or below what height) must be secured in a child safety seat rather than just a seat belt?",
    explanation: "Texas law requires children to ride in a child safety seat (car seat or booster seat) until they are 8 years old OR at least 4 feet 9 inches tall. After meeting either requirement, they must wear a seat belt.",
    handbookSection: "Safety — Child Passenger Safety",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，几岁以下（或身高不足多少）的儿童必须使用儿童安全座椅而非普通安全带？",
        explanation: "德克萨斯州法律要求儿童乘坐儿童安全座椅（婴儿座椅或增高垫），直至年满 8 岁或身高达到 4 英尺 9 英寸。满足其中任一条件后，须系普通安全带。",
      },
      {
        language: "es",
        content: "En Texas, los niños menores de qué edad (o por debajo de qué estatura) deben ir asegurados en una silla de seguridad infantil en lugar de solo un cinturón de seguridad:",
        explanation: "La ley de Texas exige que los niños viajen en una silla de seguridad infantil (silla de coche o asiento elevador) hasta que tengan 8 años O midan al menos 4 pies 9 pulgadas. Después de cumplir cualquiera de los dos requisitos, deben usar cinturón de seguridad.",
      },
    ],
    options: [
      { content: "Under 5 years old or under 4 feet 6 inches tall",  isCorrect: false, zh: "5 岁以下或身高不足 4 英尺 6 英寸",  es: "Menores de 5 años o menos de 4 pies 6 pulgadas de estatura" },
      { content: "Under 8 years old or under 4 feet 9 inches tall",  isCorrect: true,  zh: "8 岁以下或身高不足 4 英尺 9 英寸",  es: "Menores de 8 años o menos de 4 pies 9 pulgadas de estatura" },
      { content: "Under 10 years old or under 5 feet tall",          isCorrect: false, zh: "10 岁以下或身高不足 5 英尺",        es: "Menores de 10 años o menos de 5 pies de estatura" },
      { content: "Under 12 years old or under 5 feet 4 inches tall", isCorrect: false, zh: "12 岁以下或身高不足 5 英尺 4 英寸", es: "Menores de 12 años o menos de 5 pies 4 pulgadas de estatura" },
    ],
  },

  // Q5 ── Driver responsible for minor passengers ────────────────────────────
  {
    content: "Under Texas law, who is responsible for ensuring that passengers under 17 years of age are properly restrained in a vehicle?",
    explanation: "In Texas, the driver is legally responsible for ensuring that all passengers under 17 are properly secured — either in a child safety seat or seat belt. A driver can be fined for each unrestrained minor passenger.",
    handbookSection: "Safety — Seat Belts",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "根据德克萨斯州法律，谁负责确保车内 17 岁以下乘客得到妥善约束？",
        explanation: "在德克萨斯州，驾驶人在法律上负责确保所有 17 岁以下乘客正确使用安全座椅或安全带。每有一名未受约束的未成年乘客，驾驶人均可被处以罚款。",
      },
      {
        language: "es",
        content: "Según la ley de Texas, ¿quién es responsable de garantizar que los pasajeros menores de 17 años estén debidamente sujetos en un vehículo?",
        explanation: "En Texas, el conductor es legalmente responsable de garantizar que todos los pasajeros menores de 17 años estén correctamente asegurados, ya sea en una silla de seguridad o con cinturón. Un conductor puede ser multado por cada pasajero menor sin sujeción.",
      },
    ],
    options: [
      { content: "The passenger themselves, regardless of age",               isCorrect: false, zh: "乘客本人，无论年龄大小",       es: "El propio pasajero, independientemente de la edad" },
      { content: "The parent or guardian of the passenger",                   isCorrect: false, zh: "乘客的父母或监护人",           es: "El padre o tutor del pasajero" },
      { content: "The driver of the vehicle",                                 isCorrect: true,  zh: "车辆驾驶人",                  es: "El conductor del vehículo" },
      { content: "Both the driver and the front-seat passenger equally",      isCorrect: false, zh: "驾驶人与前排乘客共同承担",     es: "Tanto el conductor como el pasajero del asiento delantero por igual" },
    ],
  },

  // Q6 ── Seat belts — all occupants ────────────────────────────────────────
  {
    content: "Texas's seat belt law requires which occupants of a passenger vehicle to be buckled?",
    explanation: "All occupants in all seating positions are required to wear a seat belt in Texas. Seat belts are one of the most effective ways to prevent death and injury in a crash.",
    handbookSection: "Safety — Seat Belts",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州安全带法律要求乘用车内哪些人必须系安全带？",
        explanation: "在德克萨斯州，所有座位上的所有乘员均须系安全带。安全带是预防事故死亡和伤害最有效的措施之一。",
      },
      {
        language: "es",
        content: "La ley de cinturones de seguridad de Texas exige que qué ocupantes de un vehículo de pasajeros usen cinturón:",
        explanation: "Todos los ocupantes en todas las posiciones de asiento están obligados a usar cinturón de seguridad en Texas. Los cinturones de seguridad son una de las formas más efectivas de prevenir muertes y lesiones en un accidente.",
      },
    ],
    options: [
      { content: "Only the driver and front-seat passengers",               isCorrect: false, zh: "仅驾驶人和前排乘客",           es: "Solo el conductor y los pasajeros del asiento delantero" },
      { content: "Only passengers under 18 years old",                      isCorrect: false, zh: "仅 18 岁以下乘客",             es: "Solo los pasajeros menores de 18 años" },
      { content: "All occupants in every seating position",                 isCorrect: true,  zh: "所有座位上的所有乘员",         es: "Todos los ocupantes en todas las posiciones de asiento" },
      { content: "Only occupants in vehicles newer than 2000",              isCorrect: false, zh: "仅 2000 年以后出厂车辆的乘员", es: "Solo los ocupantes de vehículos fabricados después del año 2000" },
    ],
  },

  // Q7 ── Bicycle direction of travel ───────────────────────────────────────
  {
    content: "In Texas, a bicyclist riding on a public roadway must:",
    explanation: "Texas law requires bicyclists to ride in the same direction as traffic and as far to the right as safely practicable — unless turning left, avoiding hazards, or the lane is too narrow to share safely. Riding against traffic is illegal and dangerous.",
    handbookSection: "Safety — Bicycle Laws",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，骑自行车在公共道路上行驶时，骑车人必须：",
        explanation: "德克萨斯州法律要求骑车人与车流同向行驶，并尽量靠右侧安全通行——左转、避让障碍物或车道过窄无法共用时除外。逆向骑行属违法且危险。",
      },
      {
        language: "es",
        content: "En Texas, un ciclista que circula en una vía pública debe:",
        explanation: "La ley de Texas exige que los ciclistas circulen en el mismo sentido que el tráfico y lo más a la derecha que sea seguro — excepto al girar a la izquierda, evitar peligros o cuando el carril es demasiado estrecho para compartirlo de forma segura. Circular en sentido contrario es ilegal y peligroso.",
      },
    ],
    options: [
      { content: "Ride against traffic so they can see oncoming vehicles",                         isCorrect: false, zh: "逆向行驶以便观察来车",                 es: "Circular en sentido contrario al tráfico para ver los vehículos que se aproximan" },
      { content: "Ride on the sidewalk whenever one is available",                                  isCorrect: false, zh: "只要有人行道就在人行道上骑行",         es: "Circular en la acera siempre que haya una disponible" },
      { content: "Ride in the same direction as traffic, as far right as safely practicable",       isCorrect: true,  zh: "与车流同向行驶，尽量靠右侧安全通行",   es: "Circular en el mismo sentido que el tráfico, lo más a la derecha que sea seguro" },
      { content: "Ride in the center of the lane at all times",                                    isCorrect: false, zh: "始终在车道中央行驶",                   es: "Circular siempre en el centro del carril" },
    ],
  },

  // Q8 ── 3-foot bicycle passing rule ──────────────────────────────────────
  {
    content: "When passing a bicyclist on a Texas roadway, drivers must give the bicyclist at least how much clearance?",
    explanation: "Texas's 3-foot rule requires drivers to leave at least 3 feet of clearance when passing a bicyclist. If the lane is too narrow, the driver must move into the adjacent lane to pass safely when it is clear to do so.",
    handbookSection: "Safety — Bicycle Laws",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州道路上超越自行车时，驾驶人须与骑车人保持至少多大的侧向距离？",
        explanation: "德克萨斯州「3 英尺规则」要求驾驶人在超越骑车人时至少保持 3 英尺的侧向间距。若车道过窄，驾驶人须在确认相邻车道畅通时移至相邻车道安全超越。",
      },
      {
        language: "es",
        content: "Al rebasar a un ciclista en una vía de Texas, los conductores deben dejar al ciclista al menos cuánta distancia lateral:",
        explanation: "La regla de los 3 pies de Texas exige que los conductores dejen al menos 3 pies de espacio lateral al rebasar a un ciclista. Si el carril es demasiado estrecho, el conductor debe moverse al carril adyacente para rebasar con seguridad cuando esté despejado.",
      },
    ],
    options: [
      { content: "1 foot", isCorrect: false, zh: "1 英尺", es: "1 pie" },
      { content: "2 feet", isCorrect: false, zh: "2 英尺", es: "2 pies" },
      { content: "3 feet", isCorrect: true,  zh: "3 英尺", es: "3 pies" },
      { content: "5 feet", isCorrect: false, zh: "5 英尺", es: "5 pies" },
    ],
  },

  // Q9 ── Large truck blind spots ────────────────────────────────────────────
  {
    content: "Large trucks have significant blind spots where the driver cannot see other vehicles. If you are driving near a large truck and cannot see the truck driver's face in their side mirror, it means:",
    explanation: "If you can't see the truck driver's face in their side mirror, they can't see you either. Large trucks have four major blind spots (\"no-zones\"): directly in front, directly behind, and along both sides. Avoid lingering in these areas.",
    handbookSection: "Safety — Sharing the Road",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "大型卡车存在大面积盲区。如果您在大型卡车附近行驶，却无法在卡车侧视镜中看到卡车驾驶人的面孔，这意味着：",
        explanation: "若您在侧视镜中看不到卡车驾驶人的面孔，卡车驾驶人同样看不到您。大型卡车有四个主要盲区（「危险区域」）：正前方、正后方及两侧。应避免长时间停留在这些区域。",
      },
      {
        language: "es",
        content: "Los camiones grandes tienen importantes puntos ciegos donde el conductor no puede ver otros vehículos. Si conduce cerca de un camión grande y no puede ver la cara del conductor del camión en su espejo lateral, significa que:",
        explanation: "Si no puede ver la cara del conductor del camión en su espejo lateral, él tampoco puede verlo. Los camiones grandes tienen cuatro puntos ciegos principales (\"zonas de peligro\"): directamente al frente, directamente atrás y a ambos lados. Evite permanecer en estas áreas.",
      },
    ],
    options: [
      { content: "The truck driver can see you in a different mirror",  isCorrect: false, zh: "卡车驾驶人可通过其他后视镜看到您", es: "El conductor del camión puede verlo en un espejo diferente" },
      { content: "The truck driver cannot see you either",              isCorrect: true,  zh: "卡车驾驶人也无法看到您",         es: "El conductor del camión tampoco puede verlo" },
      { content: "You are in a safe following position",                isCorrect: false, zh: "您处于安全的跟车位置",           es: "Usted está en una posición de seguimiento segura" },
      { content: "You are traveling at a safe speed",                   isCorrect: false, zh: "您正以安全速度行驶",             es: "Usted viaja a una velocidad segura" },
    ],
  },

  // Q10 ── Railroad crossing — flashing lights / gates ──────────────────────
  {
    content: "At a railroad crossing with flashing red lights and/or lowered crossing gates, you must:",
    explanation: "Flashing red lights and lowered gates at a railroad crossing are a legal command to stop. You must remain stopped until the lights stop flashing, the gates rise fully, and it is safe to proceed. Never attempt to beat a train.",
    handbookSection: "Safety — Railroad Crossings",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在有红色闪光灯和/或已降下道口护栏的铁路道口，您必须：",
        explanation: "铁路道口的红色闪光灯和已降下的护栏是法律规定的停车信号。必须保持停止状态，直到闪光灯停止闪烁、护栏完全升起且确认安全后方可通过。切勿试图抢在火车前通过。",
      },
      {
        language: "es",
        content: "En un cruce ferroviario con luces rojas intermitentes y/o barreras de cruce bajadas, usted debe:",
        explanation: "Las luces rojas intermitentes y las barreras bajadas en un cruce ferroviario son una orden legal de detenerse. Debe permanecer detenido hasta que las luces dejen de parpadear, las barreras suban completamente y sea seguro proceder. Nunca intente adelantarse a un tren.",
      },
    ],
    options: [
      { content: "Slow to 15 mph and proceed with caution",                                           isCorrect: false, zh: "减速至 15 英里/小时并谨慎通过",          es: "Reducir la velocidad a 15 mph y proceder con precaución" },
      { content: "Stop, then proceed if no train is visible within 500 feet",                         isCorrect: false, zh: "停车，若 500 英尺内无火车则可通过",       es: "Detenerse y proceder si no hay tren visible dentro de 500 pies" },
      { content: "Stop and remain stopped until the lights stop flashing and gates fully rise",       isCorrect: true,  zh: "停车并保持停止，直到闪光灯停止闪烁且护栏完全升起", es: "Detenerse y permanecer detenido hasta que las luces dejen de parpadear y las barreras suban completamente" },
      { content: "Yield only if you hear a train whistle",                                            isCorrect: false, zh: "仅在听到火车鸣笛时才让行",               es: "Ceder el paso solo si escucha el silbato del tren" },
    ],
  },

  // Q11 ── Stalled on railroad tracks ───────────────────────────────────────
  {
    content: "While crossing railroad tracks, your vehicle stalls on the tracks. What should you do?",
    explanation: "If your vehicle stalls on railroad tracks, immediately get everyone out and move away from the tracks — in the direction the train would push the vehicle, so debris won't hit you. A train cannot stop quickly and the collision will be catastrophic.",
    handbookSection: "Safety — Railroad Crossings",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "行驶中车辆在铁路道口上熄火，应该怎么做？",
        explanation: "若车辆在铁路道口上熄火，应立即让所有人离车，向火车推进方向的一侧远离铁轨——这样碰撞产生的碎片不会击中您。火车无法迅速停下，碰撞将造成灾难性后果。",
      },
      {
        language: "es",
        content: "Mientras cruza las vías del tren, su vehículo se detiene sobre las vías. ¿Qué debe hacer?",
        explanation: "Si su vehículo se detiene sobre las vías del tren, haga que todos salgan de inmediato y aléjense de las vías en la dirección en que el tren empujaría el vehículo, para que los escombros no los golpeen. Un tren no puede detenerse rápidamente y la colisión será catastrófica.",
      },
    ],
    options: [
      { content: "Stay in the vehicle and try to restart the engine",                                             isCorrect: false, zh: "留在车内并尝试重新启动发动机",               es: "Permanecer en el vehículo e intentar reiniciar el motor" },
      { content: "Get everyone out immediately and move well away from the tracks in the direction the train would push the vehicle", isCorrect: true, zh: "立即让所有人离车，向火车推进方向的侧面远离铁轨", es: "Hacer que todos salgan de inmediato y alejarse de las vías en la dirección en que el tren empujaría el vehículo" },
      { content: "Push the vehicle off the tracks yourself",                                                      isCorrect: false, zh: "自行将车推离铁轨",                         es: "Empujar usted mismo el vehículo fuera de las vías" },
      { content: "Turn on your hazard lights and wait for help",                                                  isCorrect: false, zh: "打开危险警示灯并等待救援",                 es: "Encender las luces de emergencia y esperar ayuda" },
    ],
  },

  // Q12 ── Drowsy driving severity ──────────────────────────────────────────
  {
    content: "Which of the following best describes why drowsy driving is dangerous?",
    explanation: "Studies show that going without sleep for 18–20 hours impairs driving ability as much as a BAC of 0.05–0.08%. Drowsy drivers have slower reaction times, impaired judgment, and risk microsleep — brief sleep episodes of up to 30 seconds while still in motion.",
    handbookSection: "Safety — Drowsy Driving",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "以下哪项最准确地描述了疲劳驾驶的危险性？",
        explanation: "研究表明，持续 18 至 20 小时不睡眠对驾驶能力的损害，相当于 BAC 为 0.05% 至 0.08%。疲劳驾驶人反应时间变慢、判断力受损，并有发生「微睡眠」的风险——即在行驶中出现持续最长 30 秒的短暂睡眠状态。",
      },
      {
        language: "es",
        content: "¿Cuál de las siguientes opciones describe mejor por qué conducir con sueño es peligroso?",
        explanation: "Los estudios muestran que no dormir durante 18 a 20 horas deteriora la capacidad de conducción tanto como un BAC de 0.05 a 0.08%. Los conductores somnolientos tienen tiempos de reacción más lentos, juicio deteriorado y riesgo de microsueño — breves episodios de sueño de hasta 30 segundos mientras siguen en movimiento.",
      },
    ],
    options: [
      { content: "It only affects reaction time, not decision-making",             isCorrect: false, zh: "仅影响反应时间，不影响决策能力",             es: "Solo afecta el tiempo de reacción, no la toma de decisiones" },
      { content: "It is only dangerous at highway speeds",                         isCorrect: false, zh: "仅在高速公路速度下才危险",                   es: "Solo es peligroso a velocidades de autopista" },
      { content: "It can impair driving as severely as being legally drunk",       isCorrect: true,  zh: "其对驾驶能力的损害可与法定醉驾同样严重",     es: "Puede deteriorar la conducción tan gravemente como conducir legalmente ebrio" },
      { content: "It primarily affects vision, not coordination",                  isCorrect: false, zh: "主要影响视力，而非协调能力",                 es: "Afecta principalmente la visión, no la coordinación" },
    ],
  },

  // Q13 ── Drowsy driving — safest action ───────────────────────────────────
  {
    content: "If you begin to feel drowsy while driving, the safest action is to:",
    explanation: "Opening windows and turning up the radio are temporary measures that do not eliminate drowsiness. Only pulling off the road and sleeping (even a short 15–20 minute nap) restores alertness. Caffeine takes 20–30 minutes to take effect and is not a substitute for sleep.",
    handbookSection: "Safety — Drowsy Driving",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "驾车途中开始感到困倦时，最安全的做法是：",
        explanation: "打开车窗和调高收音机音量只是临时措施，无法消除困意。只有驶离道路并休息（即使是短短 15 至 20 分钟的小睡）才能恢复警觉。咖啡因需要 20 至 30 分钟才能发挥作用，且无法替代睡眠。",
      },
      {
        language: "es",
        content: "Si comienza a sentirse somnoliento mientras conduce, la acción más segura es:",
        explanation: "Abrir las ventanas y subir el volumen de la radio son medidas temporales que no eliminan el sueño. Solo salir de la carretera y dormir (incluso una siesta corta de 15 a 20 minutos) restaura el estado de alerta. La cafeína tarda 20 a 30 minutos en hacer efecto y no sustituye al sueño.",
      },
    ],
    options: [
      { content: "Open the windows and turn on loud music to stay alert",        isCorrect: false, zh: "打开车窗并调高音乐音量以保持清醒",           es: "Abrir las ventanas y subir la música para mantenerse alerta" },
      { content: "Drink a caffeinated beverage and continue driving",            isCorrect: false, zh: "饮用含咖啡因饮料后继续行驶",                 es: "Tomar una bebida con cafeína y continuar conduciendo" },
      { content: "Pull off the road safely and rest or sleep",                  isCorrect: true,  zh: "安全驶离道路后休息或睡觉",                   es: "Salir de la carretera con seguridad y descansar o dormir" },
      { content: "Switch to the right lane and reduce speed by 10 mph",         isCorrect: false, zh: "切换至右侧车道并将车速降低 10 英里/小时",     es: "Cambiarse al carril derecho y reducir la velocidad en 10 mph" },
    ],
  },

  // Q14 ── ABS braking technique ────────────────────────────────────────────
  {
    content: "Your vehicle is equipped with Anti-lock Brakes (ABS). During an emergency stop, you should:",
    explanation: "With ABS, you should apply firm, continuous pressure — do NOT pump the brakes. The ABS system automatically prevents wheel lockup, allowing you to steer while braking hard. You may feel a pulsing sensation in the pedal; this is normal.",
    handbookSection: "Safety — Vehicle Control",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "您的车辆装有防抱死制动系统（ABS）。紧急制动时，应该：",
        explanation: "装有 ABS 的车辆，应持续稳定地踩压制动踏板——切勿反复点踩。ABS 系统会自动防止车轮抱死，使您在紧急制动时仍能转向控制方向。制动踏板出现脉冲感属正常现象。",
      },
      {
        language: "es",
        content: "Su vehículo está equipado con frenos antibloqueo (ABS). Durante una frenada de emergencia, debe:",
        explanation: "Con ABS, debe aplicar presión firme y continua — NO bombee los frenos. El sistema ABS evita automáticamente el bloqueo de las ruedas, permitiéndole dirigir mientras frena con fuerza. Puede sentir una sensación pulsante en el pedal; esto es normal.",
      },
    ],
    options: [
      { content: "Pump the brakes rapidly to prevent locking",                       isCorrect: false, zh: "快速反复踩踏制动踏板以防止车轮抱死",     es: "Bombear los frenos rápidamente para evitar que se bloqueen" },
      { content: "Apply firm, steady pressure to the brake pedal and steer around the obstacle", isCorrect: true, zh: "持续稳定地踩压制动踏板，同时转向绕过障碍物", es: "Aplicar presión firme y constante al pedal del freno y dirigirse alrededor del obstáculo" },
      { content: "Apply light pressure to avoid activating the ABS system",         isCorrect: false, zh: "轻踩制动踏板以避免触发 ABS 系统",         es: "Aplicar presión ligera para evitar activar el sistema ABS" },
      { content: "Downshift first, then apply the brakes",                           isCorrect: false, zh: "先降档，再踩制动踏板",                     es: "Cambiar a una marcha inferior primero, luego aplicar los frenos" },
    ],
  },

  // Q15 ── Rear-wheel skid recovery ─────────────────────────────────────────
  {
    content: "Your vehicle begins to skid (rear end slides out). To regain control, you should:",
    explanation: "In a rear-wheel skid, ease off the gas and steer in the direction the rear is sliding — this is called \"steering into the skid.\" Over-correcting or braking hard will worsen the skid. Once the rear comes back in line, gradually straighten the wheel.",
    handbookSection: "Safety — Vehicle Control",
    difficulty: 3,
    translations: [
      {
        language: "zh",
        content: "车辆开始侧滑（车尾向一侧滑出）。要重新获得控制，应该：",
        explanation: "发生后轮侧滑时，应松开油门并朝车尾滑动的方向转向——这称为「顺滑转向」。过度修正或猛踩刹车会加剧侧滑。待车尾回正后，逐渐将方向盘调回直行位置。",
      },
      {
        language: "es",
        content: "Su vehículo comienza a derrapar (la parte trasera se desliza hacia un lado). Para recuperar el control, debe:",
        explanation: "En un derrape de rueda trasera, suelte el gas y gire en la dirección en que se desliza la parte trasera — esto se llama \"girar hacia el derrape\". Corregir en exceso o frenar con fuerza empeorará el derrape. Una vez que la parte trasera se alinee, enderece gradualmente el volante.",
      },
    ],
    options: [
      { content: "Brake firmly and steer in the opposite direction of the skid",        isCorrect: false, zh: "用力踩刹车并向侧滑反方向转向",           es: "Frenar con fuerza y girar en dirección opuesta al derrape" },
      { content: "Accelerate slightly and steer straight ahead",                        isCorrect: false, zh: "轻踩油门并保持直行",                     es: "Acelerar ligeramente y mantener el volante recto" },
      { content: "Ease off the accelerator and steer in the direction the rear is sliding", isCorrect: true, zh: "松开油门并朝车尾滑动的方向转向",        es: "Soltar el acelerador y girar en la dirección en que se desliza la parte trasera" },
      { content: "Brake firmly and steer straight ahead",                               isCorrect: false, zh: "用力踩刹车并保持直行",                   es: "Frenar con fuerza y mantener el volante recto" },
    ],
  },
];

async function main() {
  const category = await prisma.examCategory.findFirst({
    where: { nameEn: "Texas Driver's License" },
  });
  if (!category) throw new Error("Category 'Texas Driver's License' not found");

  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Safety: Pedestrians, Bicycles & Crashes", categoryId: category.id },
  });
  if (!topic) throw new Error("Topic 'Safety: Pedestrians, Bicycles & Crashes' not found");
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
  console.log(`\n🎉 Done! Added ${added} questions to TX Topic 6.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
