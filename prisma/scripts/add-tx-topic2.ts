/**
 * Add 18 Texas Topic 2 questions: Traffic Laws & Right-of-Way
 * Covers: right-of-way, 4-way stops, emergency vehicles, Move Over law,
 * turning, U-turns, lane changes, passing, signals, parking, pedestrians
 * Sources: Texas Driver Handbook DL-7 (Jan 2026), Chapters 4, 6, 7
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

const newQuestions = [
  // Q1 ── Right-of-way at uncontrolled intersection ─────────────────────────
  {
    content: "At an uncontrolled intersection (no signs or signals), who has the right-of-way?",
    explanation: "At an uncontrolled intersection, the driver who arrives first has the right-of-way. If two vehicles arrive at the same time, the driver on the LEFT must yield to the driver on the RIGHT.",
    handbookSection: "Traffic Laws — Right-of-Way at Intersections",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在无控制交叉路口（无标志或信号灯），谁享有优先通行权？",
        explanation: "在无控制交叉路口，先到达的驾驶人享有优先通行权。若两辆车同时到达，左侧车辆须让右侧车辆先行。",
      },
      {
        language: "es",
        content: "En una intersección no controlada (sin señales ni semáforos), ¿quién tiene la preferencia de paso?",
        explanation: "En una intersección no controlada, el conductor que llega primero tiene la preferencia de paso. Si dos vehículos llegan al mismo tiempo, el conductor de la izquierda debe ceder el paso al conductor de la derecha.",
      },
    ],
    options: [
      { content: "The driver traveling at higher speed", isCorrect: false, zh: "行驶速度较快的驾驶人", es: "El conductor que viaja a mayor velocidad" },
      { content: "The driver who arrives first; if simultaneous, yield to the driver on the right", isCorrect: true, zh: "先到达的驾驶人；若同时到达，左侧驾驶人须让右侧驾驶人先行", es: "El conductor que llega primero; si llegan al mismo tiempo, el de la izquierda cede al de la derecha" },
      { content: "The driver on the left always goes first", isCorrect: false, zh: "左侧驾驶人始终先行", es: "El conductor de la izquierda siempre pasa primero" },
      { content: "The driver on the busier road", isCorrect: false, zh: "行驶在较繁忙道路上的驾驶人", es: "El conductor en la vía más transitada" },
    ],
  },

  // Q2 ── Four-way stop, straight vs. left turn ─────────────────────────────
  {
    content: "At a four-way stop, two vehicles arrive at the same time from opposite directions. One wants to go straight, the other wants to turn left. Who goes first?",
    explanation: "When two vehicles face each other at a four-way stop, the vehicle going straight has the right-of-way over the vehicle turning left. The turning vehicle must yield to oncoming through traffic.",
    handbookSection: "Traffic Laws — Right-of-Way at Intersections",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在四向停车路口，两辆车同时从相对方向到达——一辆直行，另一辆左转。谁先通行？",
        explanation: "当两辆车在四向停车路口相对而立时，直行车辆对左转车辆享有优先通行权。转向车辆必须让对向直行车辆先行。",
      },
      {
        language: "es",
        content: "En un alto de cuatro vías, dos vehículos llegan al mismo tiempo desde direcciones opuestas. Uno va recto y el otro quiere girar a la izquierda. ¿Quién pasa primero?",
        explanation: "Cuando dos vehículos se enfrentan en un alto de cuatro vías, el vehículo que va recto tiene preferencia sobre el que gira a la izquierda. El vehículo que gira debe ceder el paso al tráfico de frente que va recto.",
      },
    ],
    options: [
      { content: "The vehicle turning left", isCorrect: false, zh: "左转车辆", es: "El vehículo que gira a la izquierda" },
      { content: "The vehicle going straight", isCorrect: true, zh: "直行车辆", es: "El vehículo que va recto" },
      { content: "Both may proceed simultaneously", isCorrect: false, zh: "两辆车可同时通行", es: "Ambos pueden avanzar simultáneamente" },
      { content: "The larger vehicle", isCorrect: false, zh: "较大的车辆", es: "El vehículo más grande" },
    ],
  },

  // Q3 ── Emergency vehicles ─────────────────────────────────────────────────
  {
    content: "When must you yield the right-of-way to an emergency vehicle with lights and sirens?",
    explanation: "In Texas, when an emergency vehicle approaches with lights and/or sirens activated, you must immediately pull to the right side of the road and stop. Remain stopped until the emergency vehicle passes. If you are in an intersection, clear the intersection first, then pull over.",
    handbookSection: "Traffic Laws — Emergency Vehicles",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "何时必须为开启警灯和警报器的紧急车辆让行？",
        explanation: "在德克萨斯州，当有开启警灯或警报器的紧急车辆驶近时，必须立即靠右停车。保持停止状态，直到紧急车辆通过。如果您正在路口，应先驶出路口，再靠边停车。",
      },
      {
        language: "es",
        content: "¿Cuándo debe ceder el paso a un vehículo de emergencia con luces y sirenas?",
        explanation: "En Texas, cuando se aproxima un vehículo de emergencia con luces o sirenas activadas, debe orillarse inmediatamente al lado derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo de emergencia haya pasado. Si está en una intersección, despéjela primero y luego orillese.",
      },
    ],
    options: [
      { content: "Only on two-lane roads", isCorrect: false, zh: "仅在双车道道路上", es: "Solo en carreteras de dos carriles" },
      { content: "Only if the emergency vehicle is directly behind you", isCorrect: false, zh: "仅当紧急车辆直接在您后方时", es: "Solo si el vehículo de emergencia está directamente detrás de usted" },
      { content: "Any time an emergency vehicle with lights or sirens approaches", isCorrect: true, zh: "任何时候，只要有开启警灯或警报器的紧急车辆驶近", es: "Siempre que se aproxime un vehículo de emergencia con luces o sirenas activadas" },
      { content: "Only at night", isCorrect: false, zh: "仅在夜间", es: "Solo de noche" },
    ],
  },

  // Q4 ── Move Over law (20 mph below) ──────────────────────────────────────
  {
    content: "Texas law requires you to 'Move Over' or slow down when passing a stationary emergency or law enforcement vehicle on a highway. What is the required speed reduction if you cannot move over?",
    explanation: "Under Texas Transportation Code §545.157, if you cannot safely change lanes, you must slow to a speed at least 20 mph below the posted speed limit when passing a stationary authorized vehicle with its lights activated. On roads with a speed limit of 25 mph or less, you must slow to 5 mph.",
    handbookSection: "Traffic Laws — Move Over Law",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "德克萨斯州法律要求在公路上超过停靠的紧急或执法车辆时须「让道」或减速。若无法变道，要求减速多少？",
        explanation: "根据德克萨斯州交通法典第 545.157 条，若无法安全变道，在超过开启警示灯的静止授权车辆时，必须将速度降至至少低于限速 20 英里/小时。在限速 25 英里/小时或以下的道路上，必须减速至 5 英里/小时。",
      },
      {
        language: "es",
        content: "La ley de Texas exige \"ceder el paso\" o reducir la velocidad al pasar un vehículo de emergencia o policial detenido en una autopista. ¿Cuánto debe reducir la velocidad si no puede cambiar de carril?",
        explanation: "Según el Código de Transporte de Texas §545.157, si no puede cambiar de carril con seguridad, debe reducir la velocidad al menos 20 mph por debajo del límite publicado al pasar un vehículo autorizado detenido con sus luces activadas. En vías con límite de 25 mph o menos, debe reducir la velocidad a 5 mph.",
      },
    ],
    options: [
      { content: "10 mph below the posted speed limit", isCorrect: false, zh: "低于限速 10 英里/小时", es: "10 mph por debajo del límite de velocidad publicado" },
      { content: "At least 20 mph below the posted speed limit", isCorrect: true, zh: "至少低于限速 20 英里/小时", es: "Al menos 20 mph por debajo del límite de velocidad publicado" },
      { content: "5 mph below the posted speed limit", isCorrect: false, zh: "低于限速 5 英里/小时", es: "5 mph por debajo del límite de velocidad publicado" },
      { content: "Half the posted speed limit", isCorrect: false, zh: "降至限速的一半", es: "La mitad del límite de velocidad publicado" },
    ],
  },

  // Q5 ── Right turn procedure ───────────────────────────────────────────────
  {
    content: "When turning right at an intersection, you should:",
    explanation: "When making a right turn, you should stay as close to the right curb or edge of the road as possible, both before and during the turn. Signal your intention at least 100 feet before the turn. Enter the nearest lane on the road you are turning onto.",
    handbookSection: "Traffic Laws — Turning",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在路口右转时，您应该：",
        explanation: "右转时，转弯前及转弯过程中均应尽量靠近右侧路缘石或道路边缘行驶。至少在转弯前 100 英尺处打转向灯。转入您所进入道路的最近车道。",
      },
      {
        language: "es",
        content: "Al girar a la derecha en una intersección, debe:",
        explanation: "Al girar a la derecha, debe mantenerse lo más cerca posible de la orilla derecha o del borde de la carretera, tanto antes como durante el giro. Señale su intención al menos 100 pies antes del giro. Ingrese al carril más cercano de la vía a la que está girando.",
      },
    ],
    options: [
      { content: "Swing wide into the left lane before turning", isCorrect: false, zh: "转弯前先大幅向左偏转进入左侧车道", es: "Desplazarse hacia el carril izquierdo antes de girar" },
      { content: "Stay close to the right curb and turn into the nearest right lane", isCorrect: true, zh: "靠近右侧路缘石行驶，并转入最近的右侧车道", es: "Mantenerse cerca de la orilla derecha y girar hacia el carril derecho más cercano" },
      { content: "Yield to all pedestrians but not to cyclists", isCorrect: false, zh: "让行人先行，但无需让自行车先行", es: "Ceder el paso a los peatones pero no a los ciclistas" },
      { content: "Turn from any lane if traffic is clear", isCorrect: false, zh: "只要无来车，可从任意车道转弯", es: "Girar desde cualquier carril si no hay tráfico" },
    ],
  },

  // Q6 ── Left turn: yield to oncoming + pedestrians ─────────────────────────
  {
    content: "When making a left turn at an intersection, you must yield to:",
    explanation: "When turning left, you must yield to all oncoming vehicles that are close enough to pose a hazard, and to pedestrians crossing the street you are turning into. Left turns are one of the most dangerous maneuvers — always wait for a clear, safe gap.",
    handbookSection: "Traffic Laws — Turning",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在路口左转时，必须让行于：",
        explanation: "左转时，必须让所有近至足以构成危险的对向来车先行，以及正在穿越您所转入街道的行人先行。左转是最危险的驾驶操作之一——务必等待足够安全的间隙。",
      },
      {
        language: "es",
        content: "Al girar a la izquierda en una intersección, debe ceder el paso a:",
        explanation: "Al girar a la izquierda, debe ceder el paso a todos los vehículos que se aproximan de frente y que estén lo suficientemente cerca como para representar un peligro, y a los peatones que cruzan la calle a la que va a girar. Los giros a la izquierda son una de las maniobras más peligrosas — espere siempre un espacio seguro y despejado.",
      },
    ],
    options: [
      { content: "Only pedestrians", isCorrect: false, zh: "仅行人", es: "Solo a los peatones" },
      { content: "Oncoming traffic and pedestrians crossing the intersection", isCorrect: true, zh: "对向来车及正在穿越您所转入街道的行人", es: "Al tráfico que viene de frente y a los peatones que cruzan la calle a la que está girando" },
      { content: "Only vehicles to your left", isCorrect: false, zh: "仅您左侧的车辆", es: "Solo a los vehículos a su izquierda" },
      { content: "No one, if the light is green", isCorrect: false, zh: "绿灯时无需让任何人先行", es: "A nadie si el semáforo está en verde" },
    ],
  },

  // Q7 ── U-turn prohibitions ────────────────────────────────────────────────
  {
    content: "In Texas, when is a U-turn generally NOT permitted?",
    explanation: "U-turns are not permitted where a sign prohibits them, in school zones, on curves or hills where you cannot be seen by other drivers at least 500 feet away, or where a U-turn would interfere with traffic. In most Texas cities, U-turns are permitted at intersections unless posted otherwise.",
    handbookSection: "Traffic Laws — Turning",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，通常在什么情况下不允许掉头？",
        explanation: "在标志禁止处、学区内、弯道或坡道上（无法被至少 500 英尺外的其他驾驶人看见）以及掉头会妨碍交通的地方，均不允许掉头。在德克萨斯州大多数城市，路口处允许掉头，除非有标志另行规定。",
      },
      {
        language: "es",
        content: "En Texas, ¿cuándo generalmente NO se permite el retorno en U?",
        explanation: "Los retornos en U no están permitidos donde una señal los prohíba, en zonas escolares, en curvas o colinas donde otros conductores no puedan verlo al menos a 500 pies de distancia, o donde el retorno interfiera con el tráfico. En la mayoría de las ciudades de Texas, los retornos en U están permitidos en las intersecciones a menos que haya señalización que indique lo contrario.",
      },
    ],
    options: [
      { content: "On any divided highway", isCorrect: false, zh: "在任何分隔式公路上", es: "En cualquier autopista dividida" },
      { content: "On a curve or hill where you cannot be seen 500 feet away, or where prohibited by a sign", isCorrect: true, zh: "在弯道或坡道上无法被 500 英尺外其他驾驶人看见时，或有标志禁止时", es: "En una curva o colina donde no pueda ser visto a 500 pies de distancia, o donde una señal lo prohíba" },
      { content: "Only in residential areas", isCorrect: false, zh: "仅在住宅区内", es: "Solo en áreas residenciales" },
      { content: "Whenever oncoming traffic is present", isCorrect: false, zh: "只要有对向来车时", es: "Siempre que haya tráfico que se aproxima" },
    ],
  },

  // Q8 ── Lane change procedure ──────────────────────────────────────────────
  {
    content: "Before changing lanes on a highway, you must:",
    explanation: "Before changing lanes, you must signal your intention, check your mirrors, and check your blind spots by looking over your shoulder. Make sure the lane is clear and that you can change safely without forcing other drivers to adjust their speed.",
    handbookSection: "Traffic Laws — Lane Changes",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在公路上变道前，您必须：",
        explanation: "变道前，必须打转向灯示意，检查后视镜，并通过转头查看盲区。确认车道畅通，且变道不会迫使其他驾驶人调整车速后，方可变道。",
      },
      {
        language: "es",
        content: "Antes de cambiar de carril en una autopista, debe:",
        explanation: "Antes de cambiar de carril, debe señalizar su intención, revisar los espejos y verificar los puntos ciegos mirando por encima del hombro. Asegúrese de que el carril esté despejado y de que pueda cambiar con seguridad sin obligar a otros conductores a ajustar su velocidad.",
      },
    ],
    options: [
      { content: "Only check your rearview mirror", isCorrect: false, zh: "仅查看后视镜", es: "Solo revisar el espejo retrovisor" },
      { content: "Signal, check mirrors, and check blind spots before moving", isCorrect: true, zh: "打转向灯，检查后视镜，并查看盲区后再变道", es: "Señalizar, revisar los espejos y verificar los puntos ciegos antes de moverse" },
      { content: "Honk to alert other drivers", isCorrect: false, zh: "鸣笛提醒其他驾驶人", es: "Tocar el claxon para avisar a otros conductores" },
      { content: "Change quickly to minimize time in the other lane", isCorrect: false, zh: "迅速变道以缩短占用其他车道的时间", es: "Cambiar rápidamente para minimizar el tiempo en el otro carril" },
    ],
  },

  // Q9 ── Passing on the right ───────────────────────────────────────────────
  {
    content: "In Texas, you may pass another vehicle on the right when:",
    explanation: "You may pass on the right only when the vehicle ahead is making or about to make a left turn, or when you are on a road with two or more lanes of traffic moving in the same direction. Never pass on the right by driving on the shoulder or unpaved portion of the road.",
    handbookSection: "Traffic Laws — Passing",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，以下哪种情况下可以从右侧超车？",
        explanation: "仅在前方车辆正在或即将左转时，或道路有两条及以上同向行驶车道时，方可从右侧超车。禁止通过驶上路肩或未铺装路面的方式从右侧超车。",
      },
      {
        language: "es",
        content: "En Texas, puede rebasar otro vehículo por la derecha cuando:",
        explanation: "Solo puede rebasar por la derecha cuando el vehículo de adelante está haciendo o está a punto de hacer un giro a la izquierda, o cuando está en una vía con dos o más carriles de tráfico en la misma dirección. Nunca rebase por la derecha conduciendo por el acotamiento o la parte no pavimentada de la carretera.",
      },
    ],
    options: [
      { content: "The driver ahead is traveling below the speed limit", isCorrect: false, zh: "前方车辆行驶速度低于限速时", es: "El conductor de adelante viaja por debajo del límite de velocidad" },
      { content: "The vehicle ahead is turning left, or when there are two or more lanes going the same direction", isCorrect: true, zh: "前方车辆正在左转或即将左转，或道路有两条及以上同向车道时", es: "El vehículo de adelante está girando a la izquierda, o cuando hay dos o más carriles en la misma dirección" },
      { content: "Any time you can do so safely", isCorrect: false, zh: "只要能安全完成超车的任何时候", es: "Cualquier momento en que pueda hacerlo con seguridad" },
      { content: "Only on one-way streets", isCorrect: false, zh: "仅在单行道上", es: "Solo en calles de sentido único" },
    ],
  },

  // Q10 ── Passing on a two-lane road ───────────────────────────────────────
  {
    content: "When is it legal to pass another vehicle on a two-lane road?",
    explanation: "On a two-lane road, passing is legal only when the center line is a single dashed yellow line, you have a clear view ahead, and you can complete the pass safely. You must not pass in a no-passing zone (solid yellow line on your side), on hills or curves, near intersections, or within 100 feet of a railroad crossing.",
    handbookSection: "Traffic Laws — Passing",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在双车道道路上，何时可以合法超车？",
        explanation: "在双车道道路上，仅当中心线为单条黄色虚线、前方视野开阔，且能安全完成超车时，超车方属合法。禁止在禁止超车区（您一侧为实黄线）、坡道或弯道、路口附近或距铁路道口 100 英尺以内处超车。",
      },
      {
        language: "es",
        content: "¿Cuándo es legal rebasar otro vehículo en una carretera de dos carriles?",
        explanation: "En una carretera de dos carriles, el rebase es legal solo cuando la línea central es una línea amarilla discontinua simple, tiene visibilidad despejada al frente y puede completar el rebase con seguridad. No debe rebasar en una zona de prohibición de adelantamiento (línea amarilla continua de su lado), en colinas o curvas, cerca de intersecciones, ni dentro de 100 pies de un cruce ferroviario.",
      },
    ],
    options: [
      { content: "Whenever the road ahead appears clear", isCorrect: false, zh: "只要前方道路看起来畅通时", es: "Siempre que la carretera por delante parezca despejada" },
      { content: "Only when the center line is a dashed yellow line and there is a clear view ahead", isCorrect: true, zh: "仅当中心线为黄色虚线且前方视野开阔时", es: "Solo cuando la línea central es una línea amarilla discontinua y hay visibilidad despejada al frente" },
      { content: "Any time traffic behind you is not visible", isCorrect: false, zh: "只要后方无来车时", es: "Cualquier momento en que el tráfico detrás no sea visible" },
      { content: "Only on roads with a speed limit above 55 mph", isCorrect: false, zh: "仅在限速高于 55 英里/小时的道路上", es: "Solo en carreteras con límite de velocidad superior a 55 mph" },
    ],
  },

  // Q11 ── Solid yellow line on your side ───────────────────────────────────
  {
    content: "You are driving on a road with a solid yellow line on your side of the center. This means:",
    explanation: "A solid yellow line on your side means you must not cross it to pass another vehicle. This line is placed where visibility is limited or where passing is dangerous. You must stay in your lane until the solid line ends.",
    handbookSection: "Traffic Laws — Passing",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "您正在行驶的道路，您一侧的中心线为实线黄线。这意味着：",
        explanation: "您一侧的实线黄线表示不得越线超越前方车辆。此线设置在能见度有限或超车危险的路段。必须保持在本车道内，直到实线结束。",
      },
      {
        language: "es",
        content: "Usted conduce por una vía con una línea amarilla continua en su lado del centro. Esto significa:",
        explanation: "Una línea amarilla continua en su lado significa que no debe cruzarla para rebasar otro vehículo. Esta línea se coloca donde la visibilidad es limitada o donde rebasar es peligroso. Debe permanecer en su carril hasta que la línea continua termine.",
      },
    ],
    options: [
      { content: "You may pass if the road ahead is clear", isCorrect: false, zh: "若前方道路畅通可以超车", es: "Puede rebasar si la carretera por delante está despejada" },
      { content: "Passing is prohibited from your side", isCorrect: true, zh: "您一侧禁止超车", es: "Está prohibido rebasar desde su lado" },
      { content: "The road is under construction", isCorrect: false, zh: "道路正在施工", es: "La carretera está en construcción" },
      { content: "You are approaching a school zone", isCorrect: false, zh: "您正在接近学区", es: "Se está aproximando a una zona escolar" },
    ],
  },

  // Q12 ── Turn signal distance (100 ft) ────────────────────────────────────
  {
    content: "How far from an intersection must you signal before turning in Texas?",
    explanation: "In Texas, you must signal your intention to turn at least 100 feet before the turn in a residential or city area. On a highway, the signal must be given well in advance to warn other drivers, typically at least 100 feet but more on higher-speed roads.",
    handbookSection: "Traffic Laws — Turning",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，转弯前需要在距路口多远处打转向灯？",
        explanation: "在德克萨斯州，在住宅区或城市道路上，必须在转弯前至少 100 英尺处打转向灯。在公路上，须提前足够远距离打灯以警示其他驾驶人，通常至少 100 英尺，在高速路段则需更远。",
      },
      {
        language: "es",
        content: "¿Con cuánta anticipación debe señalizar antes de girar en una intersección en Texas?",
        explanation: "En Texas, debe señalizar su intención de girar al menos 100 pies antes del giro en áreas residenciales o urbanas. En una autopista, la señal debe darse con suficiente anticipación para advertir a otros conductores, generalmente al menos 100 pies, pero más en vías de mayor velocidad.",
      },
    ],
    options: [
      { content: "25 feet", isCorrect: false, zh: "25 英尺", es: "25 pies" },
      { content: "50 feet", isCorrect: false, zh: "50 英尺", es: "50 pies" },
      { content: "At least 100 feet", isCorrect: true, zh: "至少 100 英尺", es: "Al menos 100 pies" },
      { content: "200 feet", isCorrect: false, zh: "200 英尺", es: "200 pies" },
    ],
  },

  // Q13 ── Parking prohibitions ──────────────────────────────────────────────
  {
    content: "Where are you NOT permitted to park in Texas?",
    explanation: "In Texas, parking is prohibited within 15 feet of a fire hydrant, in an intersection, on a crosswalk, within 20 feet of a crosswalk at an intersection, on a sidewalk, blocking a driveway, on a bridge or overpass, and in a space reserved for persons with disabilities unless you have a valid placard.",
    handbookSection: "Traffic Laws — Parking",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "在德克萨斯州，以下哪些地方禁止停车？",
        explanation: "在德克萨斯州，禁止在以下地点停车：消防栓 15 英尺以内、路口内、人行横道上、路口人行横道 20 英尺以内、人行道上、堵塞车道出入口处、桥梁或高架道路上，以及残障人士专用停车位（除非持有有效停车标牌）。",
      },
      {
        language: "es",
        content: "¿Dónde NO está permitido estacionarse en Texas?",
        explanation: "En Texas, está prohibido estacionarse dentro de 15 pies de un hidrante, en una intersección, sobre un cruce peatonal, dentro de 20 pies de un cruce peatonal en una intersección, sobre una banqueta, bloqueando una entrada, en un puente o paso elevado, y en un espacio reservado para personas con discapacidad a menos que tenga un permiso válido.",
      },
    ],
    options: [
      { content: "On a residential street after 10 PM", isCorrect: false, zh: "晚上 10 点后在住宅区街道上", es: "En una calle residencial después de las 10 PM" },
      { content: "Within 15 feet of a fire hydrant, in an intersection, on a crosswalk, or blocking a driveway", isCorrect: true, zh: "消防栓 15 英尺以内、路口内、人行横道上或堵塞车道出入口处", es: "Dentro de 15 pies de un hidrante, en una intersección, en un cruce peatonal o bloqueando una entrada" },
      { content: "On any street without a parking meter", isCorrect: false, zh: "没有停车计时器的任何街道", es: "En cualquier calle sin parquímetro" },
      { content: "More than 12 inches from the curb", isCorrect: false, zh: "距路缘石超过 12 英寸处", es: "A más de 12 pulgadas de la orilla" },
    ],
  },

  // Q14 ── Hill parking uphill with curb ─────────────────────────────────────
  {
    content: "When parking on a hill facing uphill with a curb, you should turn your front wheels:",
    explanation: "When parking facing uphill with a curb, turn your wheels AWAY from the curb (to the left). If the brakes fail, the front wheel will catch on the curb and prevent the vehicle from rolling into traffic.",
    handbookSection: "Traffic Laws — Parking",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在有路缘石的上坡方向停车时，前轮应转向：",
        explanation: "在有路缘石的上坡方向停车时，车轮应转向远离路缘石的方向（向左）。若刹车失灵，前轮将卡在路缘石上，防止车辆滑入行车道。",
      },
      {
        language: "es",
        content: "Al estacionar en una colina mirando hacia arriba con una orilla, debe girar las ruedas delanteras:",
        explanation: "Al estacionar mirando hacia una colina ascendente con orilla, gire las ruedas ALEJÁNDOSE de la orilla (a la izquierda). Si los frenos fallan, la rueda delantera se enganchará en la orilla e impedirá que el vehículo ruede hacia el tráfico.",
      },
    ],
    options: [
      { content: "Toward the curb (right)", isCorrect: false, zh: "朝向路缘石（向右）", es: "Hacia la orilla (a la derecha)" },
      { content: "Straight ahead", isCorrect: false, zh: "保持直行", es: "Hacia el frente (recto)" },
      { content: "Away from the curb (left)", isCorrect: true, zh: "远离路缘石（向左）", es: "Alejándose de la orilla (a la izquierda)" },
      { content: "It does not matter", isCorrect: false, zh: "无所谓", es: "No importa la dirección" },
    ],
  },

  // Q15 ── Hill parking downhill with curb ──────────────────────────────────
  {
    content: "When parking on a hill facing downhill with a curb, you should turn your front wheels:",
    explanation: "When parking facing downhill with a curb, turn your wheels TOWARD the curb (to the right). This way, if the brakes fail, the vehicle will roll into the curb rather than into traffic.",
    handbookSection: "Traffic Laws — Parking",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "在有路缘石的下坡方向停车时，前轮应转向：",
        explanation: "在有路缘石的下坡方向停车时，车轮应转向朝向路缘石的方向（向右）。这样，若刹车失灵，车辆将滚向路缘石，而非滑入行车道。",
      },
      {
        language: "es",
        content: "Al estacionar en una colina mirando hacia abajo con una orilla, debe girar las ruedas delanteras:",
        explanation: "Al estacionar mirando hacia una colina descendente con orilla, gire las ruedas HACIA la orilla (a la derecha). De esta manera, si los frenos fallan, el vehículo rodará hacia la orilla en lugar de hacia el tráfico.",
      },
    ],
    options: [
      { content: "Away from the curb (left)", isCorrect: false, zh: "远离路缘石（向左）", es: "Alejándose de la orilla (a la izquierda)" },
      { content: "Straight ahead", isCorrect: false, zh: "保持直行", es: "Hacia el frente (recto)" },
      { content: "Toward the curb (right)", isCorrect: true, zh: "朝向路缘石（向右）", es: "Hacia la orilla (a la derecha)" },
      { content: "Either direction is acceptable", isCorrect: false, zh: "任意方向均可", es: "Cualquier dirección es aceptable" },
    ],
  },

  // Q16 ── Pedestrian crosswalk (marked + unmarked) ─────────────────────────
  {
    content: "You must stop for a pedestrian in a crosswalk:",
    explanation: "In Texas, drivers must stop for pedestrians who are lawfully in a crosswalk — both marked and unmarked crosswalks at intersections. You must yield the right-of-way to pedestrians and must not pass a vehicle that has stopped for a pedestrian in a crosswalk.",
    handbookSection: "Traffic Laws — Right-of-Way — Pedestrians",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "您必须在人行横道处为行人停车让行的情况是：",
        explanation: "在德克萨斯州，驾驶人必须为合法穿越人行横道的行人停车让行——包括有标线和无标线的路口人行横道。必须让行人先行，且不得超越已为行人停车的车辆。",
      },
      {
        language: "es",
        content: "Debe detenerse para un peatón en un cruce peatonal:",
        explanation: "En Texas, los conductores deben detenerse ante los peatones que cruzan legalmente por un cruce peatonal, tanto marcados como no marcados en intersecciones. Debe ceder el paso a los peatones y no debe rebasar un vehículo que se haya detenido por un peatón en un cruce.",
      },
    ],
    options: [
      { content: "Only at marked crosswalks with painted lines", isCorrect: false, zh: "仅在有划线标识的人行横道处", es: "Solo en cruces peatonales marcados con líneas pintadas" },
      { content: "Only when the pedestrian has a walk signal", isCorrect: false, zh: "仅当行人有行人通行信号时", es: "Solo cuando el peatón tiene señal de caminar" },
      { content: "At both marked and unmarked crosswalks when pedestrians are lawfully crossing", isCorrect: true, zh: "在有划线或无划线的路口人行横道处，当行人合法穿越时", es: "En cruces peatonales marcados y no marcados cuando los peatones cruzan legalmente" },
      { content: "Only in school zones", isCorrect: false, zh: "仅在学区内", es: "Solo en zonas escolares" },
    ],
  },

  // Q17 ── Blind pedestrian with white cane ─────────────────────────────────
  {
    content: "What should you do when you see a blind pedestrian with a white cane or guide dog waiting at a curb?",
    explanation: "You must always yield the right-of-way to a blind person using a white cane or accompanied by a guide dog, even if they are not in a crosswalk. This is required by Texas law to protect visually impaired pedestrians.",
    handbookSection: "Traffic Laws — Right-of-Way — Pedestrians",
    difficulty: 2,
    translations: [
      {
        language: "zh",
        content: "当您看到一位持白手杖或携带导盲犬的盲人在路缘石旁等待时，应该怎么做？",
        explanation: "必须始终为使用白手杖或由导盲犬陪同的盲人让行，即使他们不在人行横道内。这是德克萨斯州法律的明确要求，旨在保护视力障碍行人的安全。",
      },
      {
        language: "es",
        content: "¿Qué debe hacer cuando ve a un peatón ciego con bastón blanco o perro guía esperando en la orilla?",
        explanation: "Siempre debe ceder el paso a una persona ciega que use bastón blanco o esté acompañada por un perro guía, incluso si no están en un cruce peatonal. Esto es un requisito de la ley de Texas para proteger a los peatones con discapacidad visual.",
      },
    ],
    options: [
      { content: "Honk to let them know you are there", isCorrect: false, zh: "鸣笛告知其您的存在", es: "Tocar el claxon para avisar que está ahí" },
      { content: "Proceed if they have not yet stepped off the curb", isCorrect: false, zh: "若其尚未踏上路面，可继续行驶", es: "Continuar si aún no ha bajado de la orilla" },
      { content: "Always yield — they have the right-of-way", isCorrect: true, zh: "始终让行——他们享有优先通行权", es: "Siempre ceder el paso — tienen derecho de preferencia" },
      { content: "Slow down but do not stop unless they enter the road", isCorrect: false, zh: "减速但无需停车，除非其进入行车道", es: "Reducir la velocidad pero no detenerse a menos que entren a la vía" },
    ],
  },

  // Q18 ── Yellow light ──────────────────────────────────────────────────────
  {
    content: "You are about to enter an intersection when the traffic light turns yellow. What should you do?",
    explanation: "A yellow light warns that the signal is about to turn red. You should stop before the intersection if you can do so safely. If you are too close to stop safely, you may proceed through the intersection with caution. Never speed up to 'beat' a yellow light.",
    handbookSection: "Traffic Laws — Traffic Signals",
    difficulty: 1,
    translations: [
      {
        language: "zh",
        content: "您即将进入路口时，交通信号灯变为黄灯。您应该怎么做？",
        explanation: "黄灯警示信号即将变为红灯。若能安全停车，应在路口前停下。若距离过近无法安全停车，可谨慎通过路口。切勿加速「抢黄灯」。",
      },
      {
        language: "es",
        content: "Está a punto de entrar a una intersección cuando el semáforo cambia a amarillo. ¿Qué debe hacer?",
        explanation: "La luz amarilla advierte que el semáforo está a punto de cambiar a rojo. Debe detenerse antes de la intersección si puede hacerlo con seguridad. Si está demasiado cerca para detenerse con seguridad, puede cruzar la intersección con precaución. Nunca acelere para \"ganarle\" a la luz amarilla.",
      },
    ],
    options: [
      { content: "Speed up to clear the intersection before it turns red", isCorrect: false, zh: "加速在变红灯前通过路口", es: "Acelerar para cruzar la intersección antes de que cambie a rojo" },
      { content: "Stop if you can do so safely; proceed with caution only if stopping is unsafe", isCorrect: true, zh: "若能安全停车则停车；仅在无法安全停车时方可谨慎通过", es: "Detenerse si puede hacerlo con seguridad; avanzar con precaución solo si detenerse es inseguro" },
      { content: "Always stop immediately", isCorrect: false, zh: "始终立即停车", es: "Siempre detenerse de inmediato" },
      { content: "Flash your hazard lights and continue", isCorrect: false, zh: "打开危险警示灯并继续行驶", es: "Encender las luces de emergencia y continuar" },
    ],
  },
];

async function main() {
  const topic = await prisma.examTopic.findFirst({
    where: { nameEn: "Traffic Laws & Right-of-Way", category: { nameEn: "Texas Driver's License" } },
  });
  if (!topic) throw new Error("TX Topic 2 'Traffic Laws & Right-of-Way' not found");
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
  console.log(`\n🎉 Done! Added ${added} questions to TX Topic 2.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
