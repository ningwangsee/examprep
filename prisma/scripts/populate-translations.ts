/**
 * Populate zh + es translations for all CA DMV questions.
 * Matches questions by English content, inserts into translation tables.
 * Run: npx tsx prisma/scripts/populate-translations.ts
 */
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

// ─── Translation data ──────────────────────────────────────────────────────
// Format per entry:
//   key: first ~40 chars of English question content (used to find the DB row)
//   zh/es: { q, exp, opts[] } — opts in same order as seed file

const translations: Array<{
  key: string;
  zh: { q: string; exp: string; opts: string[] };
  es: { q: string; exp: string; opts: string[] };
}> = [
  // ── Topic 1: Traffic Signs & Signals ──────────────────────────────────────
  {
    key: "A five-sided (pentagon) shaped sign indicates:",
    zh: {
      q: "五边形（五角形）标志表示：",
      exp: "五边形标志专门用于学区和学校人行横道。其独特形状有助于驾驶员在远处或能见度较低时识别学校区域。",
      opts: ["学区或学校人行横道", "施工区域", "禁止超车区", "铁路道口"],
    },
    es: {
      q: "Una señal en forma de pentágono (cinco lados) indica:",
      exp: "Las señales pentagonales se usan exclusivamente para zonas escolares y cruces escolares. Su forma única ayuda a los conductores a reconocer las áreas escolares incluso a distancia o con poca visibilidad.",
      opts: ["Una zona escolar o cruce escolar", "Una zona de construcción", "Una zona de no adelantamiento", "Un cruce de ferrocarril"],
    },
  },
  {
    key: "What does a blue curb indicate?",
    zh: {
      q: "蓝色路缘线表示什么？",
      exp: "蓝色路缘线标记残疾人专用停车位。只有持有有效残疾人停车证或特殊车牌的车辆才可在蓝色路缘处停车。",
      opts: ["任何时间均禁止停车", "仅供残疾人士停车", "限时停车", "商用车装卸区"],
    },
    es: {
      q: "¿Qué indica un bordillo azul?",
      exp: "Los bordillos azules marcan espacios de estacionamiento reservados para personas con discapacidades. Solo los vehículos con permiso o placa para discapacitados válido pueden estacionarse en un bordillo azul.",
      opts: ["Prohibido estacionarse en todo momento", "Estacionamiento solo para personas con discapacidad", "Estacionamiento por tiempo limitado", "Zona de carga para vehículos comerciales"],
    },
  },
  {
    key: "Double solid white lines on the road mean:",
    zh: {
      q: "道路上的双实白线表示：",
      exp: "双实白线表示禁止变道。这些线将同向行驶的车道分隔开，在这些位置变道可能很危险。",
      opts: ["可以越线超越慢速车辆", "禁止变道", "前方有可变车道", "前方有施工区域"],
    },
    es: {
      q: "Las líneas blancas dobles sólidas en la carretera significan:",
      exp: "Las líneas blancas dobles sólidas indican que no se permite cambiar de carril. Estas líneas separan carriles de tráfico en la misma dirección donde los cambios de carril serían peligrosos.",
      opts: ["Puede cruzarlas para adelantar vehículos lentos", "No se permite cambiar de carril", "Hay un carril reversible adelante", "Hay una zona de construcción adelante"],
    },
  },
  {
    key: "A flashing yellow traffic light means:",
    zh: {
      q: "黄色闪烁交通信号灯表示：",
      exp: "黄色闪烁灯是警告信号。您应减速并谨慎通行，但不需要停车。",
      opts: ["停车等待绿灯", "信号灯即将变红", "减速并谨慎通行", "完全停车"],
    },
    es: {
      q: "Una luz de tráfico amarilla intermitente significa:",
      exp: "Una luz amarilla intermitente es una señal de advertencia. Debe reducir la velocidad y proceder con precaución, pero no está obligado a detenerse.",
      opts: ["Deténgase y espere la luz verde", "La luz está a punto de ponerse en rojo", "Reduzca la velocidad y proceda con precaución", "Deténgase completamente"],
    },
  },
  {
    key: "What must you do when you see a solid red arrow at a traffic light?",
    zh: {
      q: "当您看到交通信号灯显示红色实线箭头时，您必须：",
      exp: "红色实线箭头表示必须完全停车，且不得向箭头指示方向转弯。与圆形红灯不同，出现红色箭头时，除非有标志特别许可，否则不得右转。",
      opts: ["让行来车后可转弯", "完全停车，不得向该方向转弯", "仅在人行横道无行人时可转弯", "视为停车标志，安全时通行"],
    },
    es: {
      q: "¿Qué debe hacer cuando ve una flecha roja sólida en un semáforo?",
      exp: "Una flecha roja sólida significa que debe detenerse completamente y no girar en la dirección que señala la flecha. A diferencia de una luz roja circular, NO puede girar en rojo con una flecha roja, a menos que un letrero lo permita.",
      opts: ["Puede girar después de ceder el paso al tráfico que viene", "Deténgase completamente y no gire en esa dirección", "Gire solo si no hay peatones en el cruce", "Trátela como señal de parada y proceda cuando sea seguro"],
    },
  },
  {
    key: "A green arrow pointing left while the regular traffic light is also green means:",
    zh: {
      q: "在普通绿灯亮起的同时，左转绿色箭头也亮起，这表示：",
      exp: "绿色箭头表示受保护的转弯——对向交通已被红灯拦停，您可以安全地向箭头方向转弯。但仍需礼让人行横道上的行人。",
      opts: ["转弯前必须礼让对向来车", "这是受保护转弯，对向交通已停", "仅在没有来车时才可左转", "等待普通绿灯后再转弯"],
    },
    es: {
      q: "Una flecha verde apuntando a la izquierda mientras el semáforo regular también está verde significa:",
      exp: "Una flecha verde indica un giro protegido: el tráfico que viene de frente está detenido por una luz roja, puede girar en la dirección de la flecha de forma segura. Aún debe ceder el paso a los peatones en el cruce.",
      opts: ["Debe ceder el paso al tráfico que viene antes de girar", "Tiene un giro protegido; el tráfico contrario está detenido", "Solo puede girar a la izquierda si no viene tráfico", "Espere la luz verde regular antes de girar"],
    },
  },
  {
    key: "You may turn right on a red light ONLY if:",
    zh: {
      q: "只有在以下情况下才可以在红灯右转：",
      exp: "红灯右转须在完全停车后，且没有「禁止红灯转弯」标志，并礼让行人和横向交通。必须先停车——滑行通过是违法的。",
      opts: ["减速且没有来车", "停车、礼让行人和来车，且无禁止标志", "人行横道上没有行人", "安全时可不停车直接通行"],
    },
    es: {
      q: "Puede girar a la derecha en luz roja SOLO si:",
      exp: "Girar a la derecha en rojo está permitido solo después de detenerse completamente, cuando no haya letrero de 'No gire en rojo', y cuando ceda el paso a los peatones y al tráfico cruzado. Debe detenerse primero.",
      opts: ["Reduce la velocidad y no vienen autos", "Se detiene, cede el paso a peatones y tráfico, y no hay letrero que lo prohíba", "No hay peatones en el cruce", "Es seguro proceder sin detenerse"],
    },
  },
  {
    key: "An octagon (8-sided) shaped sign always means:",
    zh: {
      q: "八边形（8边）标志始终表示：",
      exp: "八边形专门用于停车标志。这种独特形状让驾驶员即使看不清颜色或文字时也能识别停车标志。",
      opts: ["礼让对向来车", "完全停车", "减速，前方有学区", "前方有铁路道口"],
    },
    es: {
      q: "Una señal en forma de octágono (8 lados) siempre significa:",
      exp: "La forma octagonal se usa exclusivamente para señales de PARE. Esta forma única permite a los conductores reconocer una señal de pare incluso si el color o las letras están ocultos.",
      opts: ["Ceda el paso al tráfico que viene", "Deténgase completamente", "Reduzca la velocidad, zona escolar adelante", "Cruce de ferrocarril adelante"],
    },
  },
  {
    key: "A triangular (three-sided) shaped sign means:",
    zh: {
      q: "三角形（三边）标志表示：",
      exp: "三角形标志是让行标志。您必须减速并准备停车，让有优先通行权的车辆通过。与停车标志不同，除非必要，您不必完全停车。",
      opts: ["通行前完全停车", "让行——减速并将优先权让给其他交通", "前方有学区，减速", "警告：前方有危险"],
    },
    es: {
      q: "Una señal en forma de triángulo (tres lados) significa:",
      exp: "Las señales triangulares son señales de ceda el paso. Debe reducir la velocidad y estar preparado para detenerse para dejar pasar a los vehículos con derecho de paso. A diferencia de la señal de pare, no tiene que detenerse completamente a menos que sea necesario.",
      opts: ["Deténgase completamente antes de proceder", "Ceda el paso — reduzca la velocidad y dé prioridad al otro tráfico", "Zona escolar adelante, reduzca la velocidad", "Advertencia: peligro adelante"],
    },
  },
  {
    key: "What does a red curb indicate?",
    zh: {
      q: "红色路缘线表示什么？",
      exp: "红色路缘线意味着任何时间都不得停车、停靠或装卸货物。这些区域通常设置在消防栓、公交站或路口附近，在这些位置停车会造成危险。",
      opts: ["禁止停车，但可短暂停靠装卸货物", "任何时间均禁止停车、停靠或停留", "仅在营业时间内允许停车", "仅供紧急车辆使用"],
    },
    es: {
      q: "¿Qué indica un bordillo rojo?",
      exp: "Un bordillo rojo significa que no puede detenerse, estacionarse ni cargar/descargar en ningún momento. Estas áreas se designan cerca de hidrantes, paradas de autobús o intersecciones donde detenerse crearía un peligro.",
      opts: ["Prohibido estacionarse, pero puede detenerse brevemente para cargar/descargar", "Prohibido detenerse, estacionarse o pararse en todo momento", "Estacionamiento permitido solo en horario comercial", "Solo para vehículos de emergencia"],
    },
  },
  {
    key: "A yellow curb means:",
    zh: {
      q: "黄色路缘线表示：",
      exp: "黄色路缘线表示商用车辆装卸区。司机必须留在车辆旁边。",
      opts: ["仅供残疾人士停车", "任何时间均禁止停车", "商用车辆装卸区——司机须留在车内", "仅供乘客上下车"],
    },
    es: {
      q: "Un bordillo amarillo significa:",
      exp: "Un bordillo amarillo indica una zona de carga y descarga para vehículos comerciales. El conductor debe permanecer con el vehículo.",
      opts: ["Estacionamiento solo para personas con discapacidad", "Prohibido estacionarse en todo momento", "Carga/descarga comercial — el conductor debe permanecer en el vehículo", "Solo para recoger y dejar pasajeros"],
    },
  },
  {
    key: "A white curb means:",
    zh: {
      q: "白色路缘线表示：",
      exp: "白色路缘线仅用于乘客上下车。您可以短暂停靠接送乘客，但必须留在车内或车旁。",
      opts: ["任何车辆最多停车5分钟", "仅供乘客上下车", "上学时间禁止停车", "仅供公共汽车停靠"],
    },
    es: {
      q: "Un bordillo blanco significa:",
      exp: "Un bordillo blanco es solo para subir y bajar pasajeros. Puede detenerse brevemente para recoger o dejar pasajeros, pero debe permanecer dentro o cerca del vehículo.",
      opts: ["Estacionamiento para cualquier vehículo por hasta 5 minutos", "Solo para subir y bajar pasajeros", "Prohibido estacionarse durante el horario escolar", "Solo parada de autobús"],
    },
  },
  {
    key: "What does a pennant-shaped sign indicate?",
    zh: {
      q: "燕尾形标志表示什么？",
      exp: "燕尾形标志放置在道路左侧，警告驾驶员正在进入禁止超车区。该标志始终是黄色黑字。",
      opts: ["靠右行驶——仅允许从左侧超车", "禁止超车区从此开始", "礼让对向来车", "前方有学校穿越区"],
    },
    es: {
      q: "¿Qué indica una señal con forma de banderín?",
      exp: "La señal de banderín se coloca en el lado izquierdo de la carretera y advierte a los conductores que están entrando a una zona de no adelantamiento. Siempre es amarilla con texto negro.",
      opts: ["Manténgase a la derecha — adelantamiento permitido solo por la izquierda", "Comienza zona de no adelantamiento", "Ceda el paso al tráfico que viene", "Zona de cruce escolar adelante"],
    },
  },
  {
    key: "When approaching a railroad crossing, you must stop at least:",
    zh: {
      q: "接近铁路道口时，您必须至少停在距最近铁轨多远的地方？",
      exp: "加州法律要求当火车正在驶来或道口栏杆降下时，至少在距最近铁轨15英尺处停车。",
      opts: ["距铁轨5英尺", "距铁轨10英尺", "距最近铁轨15英尺", "距道口栏杆25英尺"],
    },
    es: {
      q: "Al acercarse a un cruce de ferrocarril, debe detenerse al menos a:",
      exp: "La ley de California exige detenerse al menos a 15 pies del riel más cercano cuando un tren se aproxima o las barreras del cruce están bajas.",
      opts: ["5 pies de las vías", "10 pies de las vías", "15 pies del riel más cercano", "25 pies de la barrera del cruce"],
    },
  },
  {
    key: "Orange-colored signs on the highway typically indicate:",
    zh: {
      q: "公路上橙色标志通常表示：",
      exp: "橙色标志用于施工和维护作业区。这些区域的违规罚款加倍。",
      opts: ["有儿童在场的学区", "施工或维护作业区", "危险品运输路线", "前方有绕行或替代路线"],
    },
    es: {
      q: "Las señales de color naranja en la autopista típicamente indican:",
      exp: "Las señales naranjas se usan en zonas de construcción y mantenimiento. Las multas se duplican en estas zonas.",
      opts: ["Zonas escolares con niños presentes", "Zonas de construcción o mantenimiento", "Rutas de transporte de materiales peligrosos", "Desvío o ruta alternativa adelante"],
    },
  },
  {
    key: "A steady yellow traffic light means:",
    zh: {
      q: "持续黄色交通信号灯表示：",
      exp: "持续黄灯警告信号灯即将变红。如果能安全停车，请停车。如果离停车线太近无法安全停下，可以谨慎地继续通过。",
      opts: ["加速在变红前通过", "如果能安全停车则停车", "您有优先通行权，以正常速度通行", "减速至15英里/小时后通行"],
    },
    es: {
      q: "Una luz de tráfico amarilla constante significa:",
      exp: "Una luz amarilla constante advierte que el semáforo está a punto de ponerse en rojo. Deténgase si puede hacerlo con seguridad. Si está demasiado cerca para detenerse con seguridad, puede continuar con precaución.",
      opts: ["Acelere para pasar antes de que se ponga en rojo", "Deténgase si puede hacerlo con seguridad", "Tiene derecho de paso para proceder a toda velocidad", "Reduzca a 15 mph y proceda"],
    },
  },
  {
    key: "Broken white lines between lanes of traffic mean:",
    zh: {
      q: "车道之间的虚白线表示：",
      exp: "虚白线将同向行驶的车道分隔开。在安全的情况下，您可以越过虚白线变道。",
      opts: ["双向交通——禁止超车", "同向行驶车道——安全时可以变道", "对向行驶的车道", "禁止变道"],
    },
    es: {
      q: "Las líneas blancas discontinuas entre carriles de tráfico significan:",
      exp: "Las líneas blancas discontinuas separan los carriles de tráfico que se mueven en la misma dirección. Puede cruzarlas para cambiar de carril cuando sea seguro.",
      opts: ["Tráfico en dos sentidos — adelantamiento prohibido", "Carriles en la misma dirección — cambios de carril permitidos cuando sea seguro", "Carriles en direcciones opuestas", "No se permite cambiar de carril"],
    },
  },
  {
    key: "A solid yellow line on your side of the center line means:",
    zh: {
      q: "中心线您一侧的实黄线表示：",
      exp: "您一侧的实黄线表示不允许从您这侧超车。只有虚黄线一侧才允许超车。",
      opts: ["对向交通畅通时可以超车", "您这侧不允许超车", "谨慎情况下允许超车", "这是双向左转车道"],
    },
    es: {
      q: "Una línea amarilla sólida en su lado de la línea central significa:",
      exp: "Una línea amarilla sólida en su lado significa que no se permite adelantar desde su lado. El adelantamiento solo está permitido desde el lado con línea amarilla discontinua.",
      opts: ["Puede adelantar cuando el tráfico contrario esté despejado", "No se permite adelantar desde su lado", "El adelantamiento está permitido con precaución", "Este es un carril de giro a la izquierda de dos vías"],
    },
  },
  {
    key: "When a school bus displays flashing red lights, you must:",
    zh: {
      q: "当校车显示红色闪烁灯时，您必须：",
      exp: "当校车显示红色闪烁灯时，双向所有交通必须停车（分隔式公路有实物隔离的除外）。保持停车直到灯停止闪烁且校车移动。",
      opts: ["减速至15英里/小时并谨慎通过", "双向停车——儿童可能正在过马路", "仅对向交通必须停车", "仅当儿童在路旁可见时才停车"],
    },
    es: {
      q: "Cuando un autobús escolar muestra luces rojas intermitentes, debe:",
      exp: "Todo el tráfico de ambas direcciones debe detenerse cuando un autobús escolar tiene luces rojas intermitentes (excepto en carreteras divididas con barrera física). Permanezca detenido hasta que las luces se apaguen y el autobús se mueva.",
      opts: ["Reducir a 15 mph y pasar con precaución", "Detenerse en ambas direcciones — los niños pueden estar cruzando", "Solo el tráfico que viene de frente debe detenerse", "Detenerse solo si hay un niño visible cerca de la carretera"],
    },
  },
  {
    key: "What does it mean when both a green light AND a green left-turn arrow are displayed?",
    zh: {
      q: "同时显示绿灯和绿色左转箭头时，意味着什么？",
      exp: "当两者同时显示时，左转车辆享有受保护的转弯（对向交通已被拦停）。箭头熄灭后，仍可在绿灯下左转，但必须礼让对向来车。",
      opts: ["转弯前必须等待对向交通清空", "左转车辆享有受保护的转弯，无冲突交通", "只能从最左侧车道左转", "行人对转弯车辆拥有优先权"],
    },
    es: {
      q: "¿Qué significa cuando se muestran tanto una luz verde COMO una flecha verde de giro a la izquierda?",
      exp: "Cuando ambas se muestran, los vehículos que giran a la izquierda tienen un giro protegido (el tráfico contrario está detenido). Después de que la flecha se apague, aún puede girar a la izquierda con la luz verde, pero debe ceder el paso al tráfico que viene.",
      opts: ["Debe esperar a que el tráfico contrario se despeje antes de girar", "Los vehículos que giran a la izquierda tienen un giro protegido sin tráfico en conflicto", "Solo puede girar a la izquierda desde el carril más a la izquierda", "Los peatones tienen prioridad sobre los vehículos que giran"],
    },
  },

  // ── Topic 2: Right-of-Way Rules ───────────────────────────────────────────
  {
    key: "At a four-way stop, two cars arrive at exactly the same time. Who has the right-of-way?",
    zh: {
      q: "在四向停车路口，两辆车同时到达，谁有优先通行权？",
      exp: "当两辆车同时到达四向停车路口时，右侧的车辆拥有优先通行权。这是到达时间相同时的标准规则。",
      opts: ["左侧车辆", "右侧车辆", "在较宽道路上行驶的车辆", "直行车辆"],
    },
    es: {
      q: "En un cruce de cuatro vías, dos autos llegan exactamente al mismo tiempo. ¿Quién tiene el derecho de paso?",
      exp: "Cuando dos vehículos llegan simultáneamente a un cruce de cuatro vías, el vehículo de la DERECHA tiene el derecho de paso. Esta es la regla estándar cuando los tiempos de llegada son iguales.",
      opts: ["El vehículo de la izquierda", "El vehículo de la derecha", "El vehículo que circula por la carretera más amplia", "El vehículo que va recto"],
    },
  },
  {
    key: "At an uncontrolled intersection, who has the right-of-way?",
    zh: {
      q: "在无控制路口，谁有优先通行权？",
      exp: "最先到达的车辆有优先通行权。如果两辆车同时到达，礼让右侧的车辆。",
      opts: ["在较宽道路上行驶的车辆", "最先到达的车辆；若同时到达，右侧车辆优先", "直行车辆始终优先", "较大车辆始终优先"],
    },
    es: {
      q: "En una intersección no controlada, ¿quién tiene el derecho de paso?",
      exp: "El vehículo que llega primero tiene el derecho de paso. Si dos vehículos llegan al mismo tiempo, ceda el paso al vehículo de su derecha.",
      opts: ["Los vehículos que circulan por la carretera más amplia", "El vehículo que llegó primero; si es simultáneo, el de la derecha", "Los vehículos que van recto siempre tienen prioridad", "El vehículo más grande siempre tiene prioridad"],
    },
  },
  {
    key: "When turning left at an intersection on a green light (no arrow), you must yield to:",
    zh: {
      q: "在绿灯亮起时（无箭头）在路口左转，您必须礼让：",
      exp: "绿灯无箭头时，您必须礼让对向来车和行人。绿灯允许您进入路口，但不意味着可以不安全地转弯。",
      opts: ["无需礼让任何人——绿灯给予您优先通行权", "对向来车和行人", "仅人行横道上的行人", "仅紧急车辆"],
    },
    es: {
      q: "Al girar a la izquierda en una intersección con luz verde (sin flecha), debe ceder el paso a:",
      exp: "Con luz verde sin flecha verde, debe ceder el paso a los vehículos que vienen de frente y a los peatones. La luz verde da permiso para entrar a la intersección, no para girar de manera insegura.",
      opts: ["Nadie — una luz verde le da el derecho de paso", "Los vehículos que vienen de frente y los peatones", "Solo los peatones en el cruce", "Solo los vehículos de emergencia"],
    },
  },
  {
    key: "A pedestrian using a white cane or guide dog is at a crosswalk. You must:",
    zh: {
      q: "持白色手杖或带导盲犬的行人在人行横道等候，您必须：",
      exp: "使用白色手杖或导盲犬的视障行人随时随地都有优先通行权。您必须等到他们完全穿越道路后再通行。",
      opts: ["减速，若他们不在您的车道上则通行", "停车等待他们完全穿越", "鸣喇叭告知他们您正在通行", "若交通信号灯显示通行则通行"],
    },
    es: {
      q: "Un peatón que usa un bastón blanco o perro guía está en un cruce. Debe:",
      exp: "Los peatones ciegos que usan bastón blanco o perro guía tienen derecho de paso en todo momento y en todos los lugares. Debe esperar hasta que hayan cruzado completamente la carretera.",
      opts: ["Reducir la velocidad y proceder si no están en su carril", "Detenerse y esperar hasta que hayan cruzado completamente", "Tocar el claxon para alertarlos de que está procediendo", "Proceder si la señal de tráfico dice avanzar"],
    },
  },
  {
    key: "At a T-intersection, which vehicles have the right-of-way?",
    zh: {
      q: "在T形路口，哪些车辆有优先通行权？",
      exp: "直行道路（T形顶部）上的车辆对终止道路（T形杆）上的车辆拥有优先通行权。",
      opts: ["最先到达的车辆", "直行（连续）道路上的车辆", "较大的车辆", "右转车辆"],
    },
    es: {
      q: "En una intersección en T, ¿qué vehículos tienen el derecho de paso?",
      exp: "Los vehículos en la carretera que continúa (la parte superior de la T) tienen prioridad sobre los vehículos en la carretera que termina (el tallo de la T).",
      opts: ["El vehículo que llega primero", "Los vehículos en la carretera que continúa", "El vehículo más grande", "El vehículo que gira a la derecha"],
    },
  },
  {
    key: "On a mountain road with only room for one car, who has the right-of-way?",
    zh: {
      q: "在只能通过一辆车的山路上，谁有优先通行权？",
      exp: "上坡行驶的车辆有优先通行权。下坡的车辆必须靠边停车或倒车。在上坡时倒车更困难且危险。",
      opts: ["下坡行驶的车辆", "上坡行驶的车辆", "较大的车辆", "最先鸣喇叭的车辆"],
    },
    es: {
      q: "En una carretera de montaña con espacio solo para un automóvil, ¿quién tiene el derecho de paso?",
      exp: "El vehículo que sube tiene el derecho de paso. El vehículo que baja debe hacerse a un lado o retroceder. Es más difícil y peligroso controlar un vehículo mientras se retrocede cuesta arriba.",
      opts: ["El vehículo que baja", "El vehículo que sube", "El vehículo más grande", "El vehículo que toca el claxon primero"],
    },
  },
  {
    key: "When an emergency vehicle with flashing lights approaches, you must:",
    zh: {
      q: "当闪着灯的紧急车辆驶来时，您必须：",
      exp: "您必须立即靠右行驶并停车。保持停车直到车辆通过。不要在紧急车辆相同的行驶路径上行驶。",
      opts: ["加速避让", "靠右停车等它通过", "减速并移至道路中央", "靠左侧路肩停车"],
    },
    es: {
      q: "Cuando se aproxima un vehículo de emergencia con luces intermitentes, debe:",
      exp: "Debe moverse inmediatamente al lado derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo pase. Nunca conduzca en la misma trayectoria que el vehículo de emergencia.",
      opts: ["Acelerar para quitarse del camino", "Moverse a la derecha y detenerse hasta que pase", "Reducir la velocidad y moverse al centro de la carretera", "Moverse al hombro izquierdo y detenerse"],
    },
  },
  {
    key: "You must NEVER do what when another vehicle has stopped at a crosswalk?",
    zh: {
      q: "当另一辆车在人行横道停车时，您绝对不能做什么？",
      exp: "您绝对不能超过停在人行横道等待行人的车辆。停着的车辆可能挡住了正在过马路的人。您也必须停车。",
      opts: ["在其后方停车", "超过它", "向行人闪灯", "鸣喇叭警告行人"],
    },
    es: {
      q: "¿Qué NUNCA debe hacer cuando otro vehículo se ha detenido en un cruce peatonal?",
      exp: "Nunca puede conducir más allá de un vehículo detenido en un cruce peatonal esperando a un peatón. El vehículo detenido puede estar bloqueando su vista de alguien que cruza. También debe detenerse.",
      opts: ["Detenerse detrás de él", "Conducir más allá de él", "Hacer señas con las luces a los peatones", "Tocar el claxon para advertir a los peatones"],
    },
  },
  {
    key: "Who has the right-of-way when you are merging onto a freeway?",
    zh: {
      q: "当您合并进入高速公路时，谁有优先通行权？",
      exp: "已在高速公路上行驶的车辆有优先通行权。合并时您必须礼让，并调整速度至高速公路交通流速。",
      opts: ["您有优先权，因为您正在进入高速公路", "已在高速公路上的车辆", "速度快的一方", "您与高速公路交通平等共享优先权"],
    },
    es: {
      q: "¿Quién tiene el derecho de paso cuando se está incorporando a una autopista?",
      exp: "Los vehículos que ya están en la autopista tienen el derecho de paso. Debe ceder el paso al incorporarse y igualar la velocidad del tráfico de la autopista.",
      opts: ["Usted, porque está entrando a la autopista", "Los vehículos que ya están en la autopista", "El que va más rápido", "Comparte igualmente el derecho de paso con el tráfico de la autopista"],
    },
  },
  {
    key: "Before turning right from a two-lane road, you should be in:",
    zh: {
      q: "从双车道道路右转前，您应该在：",
      exp: "右转前，移到最靠近右侧路缘的车道。在转弯前约100英尺处打转向灯。从其他车道转弯是违法的。",
      opts: ["任意车道——右转可以从任何车道进行", "最靠近右侧路缘的车道", "左侧车道，以避免碰到路缘", "中央转弯车道"],
    },
    es: {
      q: "Antes de girar a la derecha desde una carretera de dos carriles, debe estar en:",
      exp: "Antes de girar a la derecha, muévase al carril más cercano al bordillo derecho. Señalice aproximadamente 100 pies antes del giro. Girar desde otro carril es ilegal.",
      opts: ["Cualquier carril — los giros a la derecha se pueden hacer desde cualquier carril", "El carril más cercano al bordillo derecho", "El carril izquierdo, para evitar golpear el bordillo", "El carril central de giro"],
    },
  },
  {
    key: "When backing out of a driveway, you must yield to:",
    zh: {
      q: "从车道倒车出来时，您必须礼让：",
      exp: "从车道倒车出来时，礼让人行道上的所有行人和街道上的所有车辆。您正在进入行车道。",
      opts: ["仅从左侧驶来的车辆", "人行道上的行人和街道上的所有车辆", "无需礼让——道路上的驾驶员必须礼让驶出的车辆", "仅紧急车辆"],
    },
    es: {
      q: "Al salir de marcha atrás de una entrada, debe ceder el paso a:",
      exp: "Al salir de marcha atrás de una entrada, ceda el paso a todos los peatones en la acera y a todos los vehículos en la calle. Está entrando al flujo de tráfico.",
      opts: ["Solo los vehículos que vienen de la izquierda", "Los peatones en la acera y todos los vehículos en la calle", "Nadie — los conductores en la carretera deben ceder el paso a los vehículos que salen", "Solo los vehículos de emergencia"],
    },
  },
  {
    key: "A bicyclist is in front of you. California law requires you to give at least how much clearance when passing?",
    zh: {
      q: "前方有骑行者。加州法律要求超越时至少给多少净空距离？",
      exp: "加州《三英尺安全法》要求驾驶员超越骑行者时至少保持3英尺的净空距离。不要在骑行者后方立即鸣喇叭，这可能导致他们突然转向。",
      opts: ["1英尺", "2英尺", "3英尺", "5英尺"],
    },
    es: {
      q: "Hay un ciclista delante de usted. ¿Cuánto espacio mínimo exige la ley de California al adelantar?",
      exp: "La Ley de Tres Pies para la Seguridad de California exige que los conductores den al menos 3 pies de espacio a los ciclistas al adelantarlos. No toque el claxon inmediatamente detrás del ciclista, ya que puede hacer que se desvíe.",
      opts: ["1 pie", "2 pies", "3 pies", "5 pies"],
    },
  },
  {
    key: "You want to enter a green-light intersection to turn left, but it is blocked with traffic. You should:",
    zh: {
      q: "您想在绿灯路口左转，但路口被车辆堵塞，您应该：",
      exp: "如果无法在信号灯变红前完全通过路口，永远不要进入路口（即「堵住路口」）。在路口前等待，直到有空间完成转弯。",
      opts: ["进入路口，在中央等待", "在路口前等待，直到有空间完成转弯", "打开危险警示灯后进入路口", "鸣喇叭让交通清让"],
    },
    es: {
      q: "Quiere entrar a una intersección con luz verde para girar a la izquierda, pero está bloqueada con tráfico. Debe:",
      exp: "Nunca entre a una intersección si no puede cruzarla completamente antes de que cambie el semáforo. Espere antes de la intersección hasta que haya espacio para completar su giro.",
      opts: ["Entrar a la intersección y esperar en el centro", "Esperar antes de la intersección hasta que haya espacio para completar el giro", "Encender las luces de emergencia y entrar a la intersección", "Tocar el claxon al tráfico para despejar el camino"],
    },
  },
  {
    key: "When must you yield to a pedestrian in California?",
    zh: {
      q: "在加州，何时必须礼让行人？",
      exp: "在加州，驾驶员必须始终礼让路口有标志和无标志人行横道上的行人。行人在人行横道上始终拥有优先通行权。",
      opts: ["仅当他们在有标志的人行横道上", "始终，无论是有标志还是无标志的路口人行横道", "仅当行人信号灯显示'行走'时", "仅当交通信号灯为红灯时"],
    },
    es: {
      q: "¿Cuándo debe ceder el paso a un peatón en California?",
      exp: "En California, los conductores siempre deben ceder el paso a los peatones en los cruces peatonales, marcados o no marcados, en las intersecciones. Los peatones siempre tienen el derecho de paso en un cruce peatonal.",
      opts: ["Solo cuando están en un cruce peatonal marcado", "Siempre, tanto en cruces peatonales marcados como no marcados en intersecciones", "Solo cuando la señal peatonal muestra 'Caminar'", "Solo cuando el semáforo está en rojo"],
    },
  },
  {
    key: "You are waiting to turn left at an intersection. The light turns yellow. Should you turn?",
    zh: {
      q: "您在路口等待左转，信号灯变黄了，应该转弯吗？",
      exp: "只有在对向车辆确实正在停车且真的安全时才转弯。黄灯对对向交通意味着他们应该停车，但在通行前请确认他们正在停车。",
      opts: ["是，迅速转弯因为信号灯正在变换", "仅在对向车辆停车且安全时", "不，左转时始终等待绿色箭头", "不，始终等到路口完全清空"],
    },
    es: {
      q: "Está esperando para girar a la izquierda en una intersección. La luz se pone amarilla. ¿Debe girar?",
      exp: "Solo gire si los vehículos que vienen de frente realmente están deteniéndose y es genuinamente seguro. Una luz amarilla para el tráfico contrario significa que deben detenerse, pero confirme que se están deteniendo antes de proceder.",
      opts: ["Sí, gire rápidamente porque la luz está cambiando", "Solo si los vehículos que vienen están deteniéndose y es seguro", "No, siempre espere una flecha verde para girar a la izquierda", "No, siempre espere hasta que la intersección esté completamente despejada"],
    },
  },

  // ── Topic 3: Speed Limits ─────────────────────────────────────────────────
  {
    key: "What is the maximum speed on a two-lane undivided highway in California, unless otherwise posted?",
    zh: {
      q: "除非另有标志，加州双车道非分隔式公路的最高速度是多少？",
      exp: "双车道非分隔式公路的最高速度为55英里/小时，除非标志指示更高限速。",
      opts: ["45英里/小时", "55英里/小时", "65英里/小时", "70英里/小时"],
    },
    es: {
      q: "¿Cuál es la velocidad máxima en una carretera de dos carriles sin división en California, a menos que se indique lo contrario?",
      exp: "La velocidad máxima en una carretera de dos carriles sin división es 55 mph, a menos que los letreros indiquen un límite más alto.",
      opts: ["45 mph", "55 mph", "65 mph", "70 mph"],
    },
  },
  {
    key: "The maximum speed limit on most California freeways is:",
    zh: {
      q: "加州大多数高速公路的最高限速是：",
      exp: "加州大多数高速公路的最高速度为65英里/小时。部分高速公路在有标志的情况下允许70英里/小时。",
      opts: ["55英里/小时", "60英里/小时", "65英里/小时", "75英里/小时"],
    },
    es: {
      q: "El límite máximo de velocidad en la mayoría de las autopistas de California es:",
      exp: "La velocidad máxima en la mayoría de las autopistas de California es 65 mph. Algunas autopistas permiten 70 mph cuando está señalizado.",
      opts: ["55 mph", "60 mph", "65 mph", "75 mph"],
    },
  },
  {
    key: "What is the maximum speed in a school zone when children are present?",
    zh: {
      q: "有儿童在场时，学区内的最高速度是多少？",
      exp: "有儿童在场时，学区限速为25英里/小时。违规罚款加倍。",
      opts: ["15英里/小时", "20英里/小时", "25英里/小时", "35英里/小时"],
    },
    es: {
      q: "¿Cuál es la velocidad máxima en una zona escolar cuando hay niños presentes?",
      exp: "El límite de velocidad en una zona escolar cuando hay niños presentes es 25 mph. Las multas por infracciones se duplican.",
      opts: ["15 mph", "20 mph", "25 mph", "35 mph"],
    },
  },
  {
    key: "The maximum speed in a residential district, unless otherwise posted, is:",
    zh: {
      q: "住宅区的最高速度（除非另有标志）是：",
      exp: "住宅或商业区的最高速度为25英里/小时。此限速保护行人、骑行者和路旁儿童。",
      opts: ["15英里/小时", "20英里/小时", "25英里/小时", "30英里/小时"],
    },
    es: {
      q: "La velocidad máxima en un distrito residencial, a menos que se indique lo contrario, es:",
      exp: "La velocidad máxima en un área residencial o comercial es 25 mph. Este límite protege a los peatones, ciclistas y niños cerca de la carretera.",
      opts: ["15 mph", "20 mph", "25 mph", "30 mph"],
    },
  },
  {
    key: "What is California's 'Basic Speed Law'?",
    zh: {
      q: "加州的「基本速度法」是什么？",
      exp: "加州基本速度法规定，无论标志限速如何，您绝不得以比当前条件下安全的速度更快行驶。",
      opts: ["如果交通需要，可以超速10英里/小时", "绝不能以超过当前路况和天气条件安全速度行驶", "标志限速是最低安全速度", "限速仅在白天适用"],
    },
    es: {
      q: "¿Cuál es la 'Ley de Velocidad Básica' de California?",
      exp: "La Ley de Velocidad Básica de California establece que nunca debe conducir más rápido de lo que es seguro para las condiciones actuales, independientemente del límite de velocidad publicado.",
      opts: ["Puede conducir hasta 10 mph sobre el límite si el tráfico lo requiere", "Nunca conduzca más rápido de lo que es seguro para las condiciones actuales", "El límite de velocidad publicado es la velocidad mínima segura", "Los límites de velocidad solo aplican durante las horas de luz del día"],
    },
  },
  {
    key: "When visibility is less than 100 feet due to heavy rain or fog, you must not drive faster than:",
    zh: {
      q: "由于大雨或浓雾能见度不足100英尺时，您的速度不得超过：",
      exp: "当天气使能见度低于100英尺时，加州法律将您的速度限制在30英里/小时。",
      opts: ["15英里/小时", "25英里/小时", "30英里/小时", "45英里/小时"],
    },
    es: {
      q: "Cuando la visibilidad es inferior a 100 pies debido a lluvia intensa o niebla, no debe conducir más rápido que:",
      exp: "Cuando la visibilidad cae por debajo de 100 pies debido al clima, la ley de California limita su velocidad a 30 mph.",
      opts: ["15 mph", "25 mph", "30 mph", "45 mph"],
    },
  },
  {
    key: "On wet or rainy roads, you should reduce your speed by approximately:",
    zh: {
      q: "在潮湿或下雨的道路上，您应该将速度降低大约：",
      exp: "在潮湿或下雨的道路上，将速度降低5至10英里/小时。湿滑道路会降低附着力，并显著增加制动距离。",
      opts: ["2至3英里/小时", "5至10英里/小时", "15至20英里/小时", "标志限速的一半"],
    },
    es: {
      q: "En carreteras mojadas o lluviosas, debe reducir su velocidad aproximadamente:",
      exp: "En carreteras mojadas o lluviosas, reduzca la velocidad entre 5 y 10 mph. Las carreteras mojadas reducen la tracción y aumentan significativamente la distancia de frenado.",
      opts: ["2 a 3 mph", "5 a 10 mph", "15 a 20 mph", "La mitad del límite de velocidad publicado"],
    },
  },
  {
    key: "When driving on packed snow, you should reduce your speed to:",
    zh: {
      q: "在压实的积雪路面行驶时，您应该将速度降低到：",
      exp: "在压实积雪路面上，将速度降低到正常限速的一半。积雪会显著降低附着力和制动能力。",
      opts: ["低于标志限速10英里/小时", "标志限速的一半", "最高25英里/小时", "不超过30英里/小时"],
    },
    es: {
      q: "Al conducir en nieve compacta, debe reducir su velocidad a:",
      exp: "En nieve compacta, reduzca la velocidad a la mitad del límite normal. La nieve reduce significativamente la tracción y la capacidad de frenado.",
      opts: ["10 mph por debajo del límite publicado", "La mitad del límite de velocidad publicado", "Un máximo de 25 mph", "No más de 30 mph"],
    },
  },
  {
    key: "When driving on icy roads, you should drive no faster than:",
    zh: {
      q: "在结冰路面行驶时，您的速度不应超过：",
      exp: "在结冰路面上，行驶速度不应超过5英里/小时。冰面几乎没有附着力，即使在非常低的速度下，突然的动作也可能导致车辆滑动。",
      opts: ["15英里/小时", "10英里/小时", "5英里/小时", "限速的一半"],
    },
    es: {
      q: "Al conducir en carreteras heladas, no debe conducir más rápido que:",
      exp: "En carreteras heladas, no conduzca más rápido de 5 mph. El hielo proporciona casi ninguna tracción, e incluso a velocidades muy bajas los movimientos repentinos pueden hacer que el vehículo se deslice.",
      opts: ["15 mph", "10 mph", "5 mph", "La mitad del límite de velocidad"],
    },
  },
  {
    key: "The maximum speed in an alley is:",
    zh: {
      q: "小巷（胡同）内的最高速度是：",
      exp: "加州小巷内的最高速度为15英里/小时。小巷狭窄且能见度有限。",
      opts: ["10英里/小时", "15英里/小时", "25英里/小时", "无特定限制"],
    },
    es: {
      q: "La velocidad máxima en un callejón es:",
      exp: "La velocidad máxima en un callejón en California es 15 mph. Los callejones son estrechos con visibilidad limitada.",
      opts: ["10 mph", "15 mph", "25 mph", "Sin límite específico"],
    },
  },
  {
    key: "The maximum speed within 100 feet of a railroad crossing when you cannot see clearly is:",
    zh: {
      q: "在无法清楚看到铁路道口100英尺范围内，最高速度是：",
      exp: "当您无法在铁路道口两个方向至少400英尺内看清时，加州法律在道口100英尺范围内将您的速度限制为15英里/小时。",
      opts: ["10英里/小时", "15英里/小时", "25英里/小时", "35英里/小时"],
    },
    es: {
      q: "La velocidad máxima dentro de 100 pies de un cruce de ferrocarril cuando no puede ver claramente es:",
      exp: "Cuando no puede ver al menos 400 pies en ambas direcciones en un cruce de ferrocarril, la ley de California limita su velocidad a 15 mph dentro de los 100 pies del cruce.",
      opts: ["10 mph", "15 mph", "25 mph", "35 mph"],
    },
  },
  {
    key: "If you miss your exit on a freeway, you should:",
    zh: {
      q: "如果您错过了高速公路出口，您应该：",
      exp: "继续行驶至下一个出口。绝不要在高速公路上倒车——这极其危险且违法。",
      opts: ["在路肩停车并倒回出口", "继续行驶至下一个出口", "在中央分隔带最近的缺口处掉头", "穿越中央分隔带返回出口"],
    },
    es: {
      q: "Si se pierde su salida en una autopista, debe:",
      exp: "Continúe hasta la próxima salida. Nunca retroceda en una autopista — es extremadamente peligroso e ilegal.",
      opts: ["Detenerse en el hombro y retroceder hasta la salida", "Continuar hasta la próxima salida", "Hacer un giro en U en el espacio más cercano del separador central", "Cruzar el separador para volver a la salida"],
    },
  },
  {
    key: "The minimum following distance on a freeway at 65 mph is:",
    zh: {
      q: "在65英里/小时的高速公路上，最小跟车距离是：",
      exp: "加州建议3秒规则。以65英里/小时行驶，3秒约等于286英尺。在恶劣条件下增加至4-5秒。",
      opts: ["1秒", "2秒", "3秒", "5秒"],
    },
    es: {
      q: "La distancia de seguimiento mínima en una autopista a 65 mph es:",
      exp: "California recomienda la regla de los 3 segundos. A 65 mph, 3 segundos equivalen a unas 286 pies. Aumente a 4-5 segundos en condiciones adversas.",
      opts: ["1 segundo", "2 segundos", "3 segundos", "5 segundos"],
    },
  },
  {
    key: "You are driving 55 mph and another vehicle passes you. You should:",
    zh: {
      q: "您以55英里/小时行驶，另一辆车超过您，您应该：",
      exp: "保持速度并留在您的车道上。不要加速阻止他们超车——那是危险且违法的。",
      opts: ["加速使他们无法超车", "保持速度让他们安全超车", "移到左车道阻挡他们", "闪刹车灯警告他们"],
    },
    es: {
      q: "Está conduciendo a 55 mph y otro vehículo lo adelanta. Debe:",
      exp: "Mantenga su velocidad y permanezca en su carril. No acelere para impedirles adelantar — eso es peligroso e ilegal.",
      opts: ["Acelerar para que no puedan adelantarlo", "Mantener su velocidad y dejarlos adelantar de forma segura", "Moverse al carril izquierdo para bloquearlos", "Hacer destellos con las luces de freno para advertirlos"],
    },
  },
  {
    key: "When you see brake lights ahead on a freeway, you should:",
    zh: {
      q: "在高速公路上看到前方刹车灯时，您应该：",
      exp: "立即松开油门并逐渐减速。轻踩刹车会亮起您的刹车灯，提醒后方驾驶员。避免突然制动。",
      opts: ["保持速度直到接近，然后猛踩刹车", "松开油门并逐渐减速，提醒后方驾驶员", "立即变道避开减速", "打开危险警示灯并停车"],
    },
    es: {
      q: "Cuando ve luces de freno adelante en una autopista, debe:",
      exp: "Quite el pie del acelerador inmediatamente y desacelere gradualmente. Tocar brevemente los frenos enciende sus luces de freno para advertir a los conductores detrás. Evite frenar repentinamente.",
      opts: ["Mantener la velocidad hasta acercarse, luego frenar fuerte", "Soltar el acelerador y desacelerar gradualmente, advertir a los conductores de atrás", "Cambiar de carril inmediatamente para evitar la reducción de velocidad", "Encender las luces de emergencia y detenerse"],
    },
  },

  // ── Topic 4: DUI & Alcohol Laws ───────────────────────────────────────────
  {
    key: "What is the legal BAC limit for drivers 21 and older in California?",
    zh: {
      q: "加州21岁及以上驾驶员的法定血液酒精浓度（BAC）上限是多少？",
      exp: "21岁及以上驾驶员血液酒精浓度达到0.08%或以上即违法。",
      opts: ["0.04%", "0.06%", "0.08%", "0.10%"],
    },
    es: {
      q: "¿Cuál es el límite legal de BAC para conductores de 21 años o más en California?",
      exp: "Es ilegal para los conductores de 21 años o más conducir con un BAC de 0.08% o más.",
      opts: ["0.04%", "0.06%", "0.08%", "0.10%"],
    },
  },
  {
    key: "What is the legal BAC limit for drivers UNDER 21 in California?",
    zh: {
      q: "加州21岁以下驾驶员的法定BAC上限是多少？",
      exp: "加州零容忍法：21岁以下驾驶员BAC达到0.01%或以上即违法。",
      opts: ["0.08%", "0.05%", "0.02%", "0.01%"],
    },
    es: {
      q: "¿Cuál es el límite legal de BAC para conductores MENORES DE 21 años en California?",
      exp: "La ley de Tolerancia Cero de California: cualquier conductor menor de 21 años con un BAC de 0.01% o más está infringiendo la ley.",
      opts: ["0.08%", "0.05%", "0.02%", "0.01%"],
    },
  },
  {
    key: "What is the legal BAC limit for commercial driver's license (CDL) holders?",
    zh: {
      q: "商业驾驶执照（CDL）持有人的法定BAC上限是多少？",
      exp: "CDL持有人面临更严格的0.04%限制——是普通驾驶员限制的一半。",
      opts: ["0.08%", "0.06%", "0.04%", "0.02%"],
    },
    es: {
      q: "¿Cuál es el límite legal de BAC para los titulares de licencia de conducir comercial (CDL)?",
      exp: "Los titulares de CDL enfrentan un límite más estricto de 0.04%, la mitad del límite para conductores regulares.",
      opts: ["0.08%", "0.06%", "0.04%", "0.02%"],
    },
  },
  {
    key: "A DUI conviction in California stays on your driving record for:",
    zh: {
      q: "加州的酒驾（DUI）定罪将在您的驾驶记录上保留多长时间？",
      exp: "DUI定罪将在加州记录上保留10年，如果您再次酒驾，将作为前科计算。",
      opts: ["3年", "5年", "7年", "10年"],
    },
    es: {
      q: "Una condena por DUI en California permanece en su historial de conducción durante:",
      exp: "Una condena por DUI permanece en su historial de California durante 10 años y cuenta como delito previo si obtiene otro DUI.",
      opts: ["3 años", "5 años", "7 años", "10 años"],
    },
  },
  {
    key: "If arrested for DUI and you refuse a chemical test, you will:",
    zh: {
      q: "如果因酒驾被捕并拒绝化学测试，您将：",
      exp: "根据加州的默示同意法，拒绝化学测试将导致驾照自动被吊销——初犯通常为1年。",
      opts: ["被无罪释放", "面临驾照自动被吊销及其他处罚", "仅面临小额罚款", "酒驾指控被撤销"],
    },
    es: {
      q: "Si es arrestado por DUI y se niega a una prueba química, usted:",
      exp: "Bajo la ley de consentimiento implícito de California, negarse a una prueba química resulta en la suspensión automática de la licencia, generalmente 1 año para el primer delito.",
      opts: ["Ser liberado sin cargos", "Enfrentar suspensión automática de licencia y otras penalidades", "Solo enfrentar una pequeña multa", "Tener los cargos de DUI desestimados"],
    },
  },
  {
    key: "An open container of alcohol must be stored where in a vehicle?",
    zh: {
      q: "车内的酒精开口容器必须放在哪里？",
      exp: "开口容器必须放在后备箱或最后一排直立座椅后方——远离驾驶员和乘客。",
      opts: ["藏在座椅下看不见的地方", "放在手套箱里", "放在后备箱，远离乘客区", "装在后座的袋子里"],
    },
    es: {
      q: "¿Dónde debe almacenarse un recipiente abierto de alcohol en un vehículo?",
      exp: "Un recipiente abierto debe guardarse en el maletero o detrás del último asiento erguido, lejos del conductor y los pasajeros.",
      opts: ["Debajo del asiento fuera de la vista", "En la guantera", "En el maletero, alejado del área de pasajeros", "En una bolsa en el asiento trasero"],
    },
  },
  {
    key: "Which of the following can impair driving as much as alcohol?",
    zh: {
      q: "以下哪项对驾驶的损害程度可能与酒精相当？",
      exp: "处方药、非处方药、大麻和非法药物都可能影响驾驶。在任何损害驾驶能力的药物影响下驾驶均属违法。",
      opts: ["一杯咖啡", "处方药物", "能量饮料", "丰盛的一餐"],
    },
    es: {
      q: "¿Cuál de los siguientes puede deteriorar la conducción tanto como el alcohol?",
      exp: "Los medicamentos recetados, los de venta libre, la marihuana y las drogas ilegales pueden deteriorar la conducción. Es ilegal conducir bajo la influencia de CUALQUIER droga que cause deterioro.",
      opts: ["Una taza de café", "Medicamentos recetados", "Bebidas energéticas", "Una comida abundante"],
    },
  },
  {
    key: "The ONLY thing that sobers you up after drinking is:",
    zh: {
      q: "饮酒后唯一能使您清醒的是：",
      exp: "只有时间能使您清醒。您的肝脏每小时处理约一杯标准酒精饮料。喝咖啡、冷水澡或运动都无法加速这一过程。",
      opts: ["喝咖啡或能量饮料", "洗冷水澡", "吃丰盛的一餐", "时间——您的身体以固定速率代谢酒精"],
    },
    es: {
      q: "Lo ÚNICO que lo hace sobrio después de beber es:",
      exp: "Solo el tiempo lo hace sobrio. Su hígado procesa aproximadamente una bebida estándar por hora. El café, las duchas frías o el ejercicio NO aceleran este proceso.",
      opts: ["Beber café o bebidas energéticas", "Tomar una ducha fría", "Comer una comida abundante", "El tiempo — su cuerpo procesa el alcohol a una tasa fija"],
    },
  },
  {
    key: "It is illegal to drink alcohol or smoke cannabis while driving:",
    zh: {
      q: "在驾驶时饮酒或吸食大麻属于违法行为，适用范围是：",
      exp: "驾驶员和乘客在行驶中的车辆内饮酒或吸食大麻均属违法。",
      opts: ["仅针对驾驶员", "驾驶员和乘客均不得", "仅在高速公路上", "仅针对21岁以下驾驶员"],
    },
    es: {
      q: "Es ilegal beber alcohol o fumar cannabis mientras conduce:",
      exp: "Es ilegal tanto para el conductor COMO para los pasajeros beber alcohol o fumar cannabis en un vehículo en movimiento.",
      opts: ["Solo para el conductor", "Tanto para el conductor como para los pasajeros", "Solo en autopistas", "Solo para conductores menores de 21 años"],
    },
  },
  {
    key: "After a DUI arrest, you have how many days to request a hearing to contest your license suspension?",
    zh: {
      q: "酒驾被捕后，您有多少天时间申请听证会对驾照吊销提出异议？",
      exp: "从被捕日期起，您有10天时间申请DMV听证会。错过这个截止日期，您的驾照将自动被吊销。",
      opts: ["5天", "10天", "30天", "60天"],
    },
    es: {
      q: "Después de un arresto por DUI, ¿cuántos días tiene para solicitar una audiencia para impugnar la suspensión de su licencia?",
      exp: "Tiene 10 días desde la fecha del arresto para solicitar una audiencia del DMV. Si pierde este plazo, su licencia se suspende automáticamente.",
      opts: ["5 días", "10 días", "30 días", "60 días"],
    },
  },
  {
    key: "If under 21 and found in possession of alcohol in a vehicle, your vehicle may be impounded for:",
    zh: {
      q: "如果21岁以下在车内持有酒精饮料，您的车辆可能被扣押多长时间？",
      exp: "加州法律允许在21岁以下驾驶员被发现携带酒精时将其车辆扣押最多30天。",
      opts: ["24小时", "7天", "30天", "90天"],
    },
    es: {
      q: "Si es menor de 21 años y se le encuentra en posesión de alcohol en un vehículo, su vehículo puede ser retenido por:",
      exp: "La ley de California permite retener el vehículo hasta 30 días si a un conductor menor de 21 años se le encuentra con alcohol.",
      opts: ["24 horas", "7 días", "30 días", "90 días"],
    },
  },
  {
    key: "Driving under the influence of marijuana is:",
    zh: {
      q: "在大麻影响下驾驶：",
      exp: "尽管加州娱乐性大麻是合法的，但在其影响下驾驶是违法的。大麻会影响反应时间、协调性和判断力。",
      opts: ["合法的，因为大麻在加州是合法的", "违法的——它影响驾驶能力", "仅对21岁以下驾驶员违法", "只要BAC低于0.08%就是合法的"],
    },
    es: {
      q: "Conducir bajo la influencia de la marihuana es:",
      exp: "Aunque la marihuana recreativa es legal en California, conducir bajo su influencia es ilegal. El cannabis deteriora el tiempo de reacción, la coordinación y el juicio.",
      opts: ["Legal ya que la marihuana es legal en California", "Ilegal — deteriora la capacidad de conducción", "Solo ilegal para conductores menores de 21 años", "Legal siempre que el BAC esté por debajo de 0.08%"],
    },
  },

  // ── Topic 5: Lane Usage & Passing ─────────────────────────────────────────
  {
    key: "How far in advance must you signal before turning or changing lanes?",
    zh: {
      q: "转弯或变道前需要提前多远打转向灯？",
      exp: "加州法律要求在转弯或变道前至少100英尺处打转向灯。在高速公路上，在出口前约5秒（约400英尺）处打转向灯。",
      opts: ["25英尺", "50英尺", "100英尺", "200英尺"],
    },
    es: {
      q: "¿Con cuánta anticipación debe señalizar antes de girar o cambiar de carril?",
      exp: "La ley de California requiere señalizar al menos 100 pies antes de girar o cambiar de carril. En autopistas, señalice aproximadamente 5 segundos (unas 400 pies) antes de salir.",
      opts: ["25 pies", "50 pies", "100 pies", "200 pies"],
    },
  },
  {
    key: "You may NOT pass another vehicle within how many feet of an intersection?",
    zh: {
      q: "在距路口多少英尺范围内不得超越其他车辆？",
      exp: "在路口、铁路道口、桥梁或隧道100英尺范围内禁止超车。",
      opts: ["50英尺", "100英尺", "200英尺", "300英尺"],
    },
    es: {
      q: "¿A cuántos pies de una intersección NO puede adelantar otro vehículo?",
      exp: "Está prohibido adelantar dentro de 100 pies de una intersección, cruce de ferrocarril, puente o túnel.",
      opts: ["50 pies", "100 pies", "200 pies", "300 pies"],
    },
  },
  {
    key: "How long may you drive in a center two-way left-turn lane before turning?",
    zh: {
      q: "转弯前您可以在中央双向左转车道上行驶多远？",
      exp: "在中央双向左转车道准备转弯时，最多只能行驶200英尺。",
      opts: ["按需要行驶", "最多100英尺", "最多200英尺", "最多500英尺"],
    },
    es: {
      q: "¿Cuánto puede conducir en un carril central de giro a la izquierda de dos vías antes de girar?",
      exp: "Solo puede conducir en un carril central de giro a la izquierda de dos vías un máximo de 200 pies mientras se prepara para girar.",
      opts: ["El tiempo que sea necesario", "Hasta 100 pies", "Hasta 200 pies", "Hasta 500 pies"],
    },
  },
  {
    key: "When entering a bike lane to prepare for a right turn, you may enter no more than how far before the intersection?",
    zh: {
      q: "为右转准备进入自行车道时，距路口不超过多远可以进入？",
      exp: "在打算右转的路口前，最多可以进入自行车道200英尺。",
      opts: ["50英尺", "100英尺", "200英尺", "500英尺"],
    },
    es: {
      q: "Al entrar al carril de bicicletas para preparar un giro a la derecha, ¿a cuántos pies como máximo antes de la intersección puede entrar?",
      exp: "Puede fusionarse en el carril de bicicletas no más de 200 pies antes de la intersección donde intenta girar a la derecha.",
      opts: ["50 pies", "100 pies", "200 pies", "500 pies"],
    },
  },
  {
    key: "What is an HOV lane and who may use it?",
    zh: {
      q: "什么是HOV车道，谁可以使用它？",
      exp: "HOV（高乘载量车辆）车道专为有2名及以上乘客的车辆、摩托车、公共汽车和部分有特殊贴纸的清洁能源车辆保留。",
      opts: ["重型卡车和超大型车辆专用车道", "供2名及以上乘客车辆、摩托车和公共汽车使用的车道", "仅供紧急车辆使用的车道", "非高峰时段向所有车辆开放"],
    },
    es: {
      q: "¿Qué es un carril HOV y quién puede usarlo?",
      exp: "Los carriles HOV (Vehículos de Alta Ocupación) están reservados para vehículos con 2+ ocupantes, motocicletas, autobuses y algunos vehículos de energía limpia con calcomanías especiales.",
      opts: ["Un carril para camiones pesados y vehículos de gran tamaño", "Un carril para vehículos con 2+ ocupantes, motocicletas y autobuses", "Un carril solo para vehículos de emergencia", "Abierto a todos los vehículos durante las horas no pico"],
    },
  },
  {
    key: "The correct procedure for changing lanes is:",
    zh: {
      q: "变道的正确程序是：",
      exp: "打转向灯、查看后视镜、转头检查盲区，确认安全后再变道。不要仅依靠后视镜。",
      opts: ["查看后视镜后立即移道", "打转向灯、查看后视镜、检查盲区，然后在安全时变道", "转头看，若畅通则不打转向灯变道", "鸣喇叭警告其他驾驶员，然后变道"],
    },
    es: {
      q: "El procedimiento correcto para cambiar de carril es:",
      exp: "Señalice, verifique sus espejos, revise el punto ciego mirando por encima del hombro, luego cambie de carril cuando sea seguro. Nunca confíe solo en los espejos.",
      opts: ["Verificar espejos e inmediatamente cambiarse", "Señalizar, verificar espejos, revisar punto ciego, luego cambiar cuando sea seguro", "Mirar por encima del hombro y cambiar sin señalizar si está despejado", "Tocar el claxon para advertir a otros conductores, luego cambiar de carril"],
    },
  },
  {
    key: "You may pass on the right ONLY when:",
    zh: {
      q: "只有在以下情况下才可以从右侧超车：",
      exp: "从右侧超车只在以下情况允许：道路在您行驶方向有两条或更多车道、前方驾驶员正在左转，或在单行道上。",
      opts: ["您赶时间且左车道被阻", "公路在您行驶方向有2条或更多车道，或前方驾驶员正在左转", "限速超过55英里/小时", "前方驾驶员以低于限速10英里/小时行驶"],
    },
    es: {
      q: "Solo puede adelantar por la derecha CUANDO:",
      exp: "Adelantar por la derecha solo está permitido cuando la carretera tiene dos o más carriles en su dirección, el conductor de adelante está girando a la izquierda, o en una calle de sentido único.",
      opts: ["Tiene prisa y el carril izquierdo está bloqueado", "La autopista tiene 2+ carriles en su dirección o el conductor de adelante está girando a la izquierda", "El límite de velocidad supera 55 mph", "El conductor de adelante va 10 mph por debajo del límite"],
    },
  },
  {
    key: "When merging onto a freeway from an on-ramp, you should:",
    zh: {
      q: "从入口匝道合并进入高速公路时，您应该：",
      exp: "利用入口匝道加速至高速公路速度后再合并。寻找安全间隙，打转向灯，平稳合并。除非迫不得已，不要在入口匝道上停车。",
      opts: ["在匝道末端停车等待间隙", "加速至高速公路速度，并在安全间隙处合并", "缓慢进入，让高速公路驾驶员调整", "使用应急车道，直到达到高速公路速度"],
    },
    es: {
      q: "Al incorporarse a una autopista desde una rampa de acceso, debe:",
      exp: "Use la rampa de acceso para acelerar a la velocidad de la autopista antes de incorporarse. Encuentre un espacio seguro, señalice y fusiónese suavemente. Nunca se detenga en una rampa de acceso a menos que sea necesario.",
      opts: ["Detenerse al final de la rampa y esperar un espacio", "Acelerar a la velocidad de la autopista y fusionarse en un espacio seguro", "Entrar despacio y dejar que los conductores de la autopista se ajusten", "Usar el carril de emergencia hasta alcanzar la velocidad de la autopista"],
    },
  },
  {
    key: "After passing a vehicle, you should return to your lane when:",
    zh: {
      q: "超过一辆车后，何时应该返回您的车道？",
      exp: "只有当您能在后视镜中看到被超车辆的两个前灯时，才能返回原来的车道。过早切回可能很危险。",
      opts: ["您距被超车辆约10英尺时", "在后视镜中能看到被超车辆的两个前灯时", "超车道在您身后畅通时", "超过车辆前保险杠后立即"],
    },
    es: {
      q: "Después de adelantar un vehículo, debe regresar a su carril cuando:",
      exp: "Regrese a su carril original solo cuando pueda ver los dos faros del vehículo adelantado en su espejo retrovisor. Volver demasiado pronto es peligroso.",
      opts: ["Está aproximadamente 10 pies adelante del vehículo adelantado", "Puede ver los dos faros del vehículo adelantado en su espejo retrovisor", "El carril de adelantamiento está despejado detrás de usted", "Inmediatamente después de pasar el parachoques delantero del vehículo"],
    },
  },
  {
    key: "On a freeway, before your exit, you should signal approximately how far in advance?",
    zh: {
      q: "在高速公路上，出口前大约多远需要打转向灯？",
      exp: "在高速公路上，在出口前约5秒处打转向灯，大约相当于高速公路速度下的400英尺。",
      opts: ["出口前100英尺", "出口前200英尺", "出口前5秒（约400英尺）", "当您第一次看到出口标志时"],
    },
    es: {
      q: "En una autopista, antes de su salida, ¿con cuánta anticipación aproximada debe señalizar?",
      exp: "En una autopista, señalice aproximadamente 5 segundos antes de su salida, que es aproximadamente 400 pies a la velocidad de la autopista.",
      opts: ["100 pies antes de la salida", "200 pies antes de la salida", "5 segundos (aproximadamente 400 pies) antes de la salida", "Cuando ve por primera vez el letrero de salida"],
    },
  },
  {
    key: "Weaving between lanes in traffic is:",
    zh: {
      q: "在交通中穿梭变道是：",
      exp: "频繁穿梭变道很危险、违法且几乎节省不了时间。每次变道都让您面临碰撞风险。",
      opts: ["交通缓慢时可以接受", "危险、违法，且几乎不能节省时间", "在有3条或更多车道的高速公路上允许", "只要每次变道都打转向灯就可以"],
    },
    es: {
      q: "Zigzaguear entre carriles en el tráfico es:",
      exp: "Zigzaguear entre carriles es peligroso, ilegal y rara vez ahorra tiempo significativo. Cada cambio de carril lo pone en riesgo de una colisión.",
      opts: ["Aceptable cuando el tráfico es lento", "Peligroso, ilegal y rara vez ahorra tiempo", "Permitido en autopistas con 3 o más carriles", "Está bien siempre que señalice cada cambio de carril"],
    },
  },
  {
    key: "How far before a right turn should you position your vehicle in the right lane?",
    zh: {
      q: "右转前多远应该将车辆移到右车道？",
      exp: "在城市或住宅区，转弯前至少100英尺处打转向灯，并在转弯前移到右车道。",
      opts: ["50英尺", "100英尺", "200英尺", "在路口"],
    },
    es: {
      q: "¿A cuántos pies antes de un giro a la derecha debe posicionar su vehículo en el carril derecho?",
      exp: "Señalice al menos 100 pies antes de un giro a la derecha en una ciudad o área residencial, y muévase al carril derecho antes de girar.",
      opts: ["50 pies", "100 pies", "200 pies", "En la intersección"],
    },
  },

  // ── Topic 6: Safe Driving & Parking ───────────────────────────────────────
  {
    key: "The 3-second rule helps you:",
    zh: {
      q: "3秒规则帮助您：",
      exp: "3秒规则保持与前车的安全跟车距离。选择前方固定物体，当前车经过时开始数3秒。如果您在3秒前到达该物体，说明您跟得太近了。",
      opts: ["判断何时变道", "保持与前车的安全跟车距离", "计算从55英里/小时的停车距离", "判断是否有时间在黄灯前通过"],
    },
    es: {
      q: "La regla de los 3 segundos le ayuda a:",
      exp: "La regla de los 3 segundos mantiene una distancia de seguimiento segura. Elija un objeto fijo adelante, y cuando el auto de enfrente lo pase, cuente 3 segundos. Si llega al objeto antes de 3 segundos, está demasiado cerca.",
      opts: ["Determinar cuándo cambiar de carril", "Mantener una distancia de seguimiento segura detrás de otro vehículo", "Calcular la distancia de frenado desde 55 mph", "Juzgar si tiene tiempo para pasar con luz amarilla"],
    },
  },
  {
    key: "What is the leading cause of distracted driving?",
    zh: {
      q: "分心驾驶的主要原因是什么？",
      exp: "手机是分心驾驶的主要原因。加州法律禁止驾驶时手持手机——必须使用免提设备。",
      opts: ["边开车边吃东西", "手机", "公路广告牌", "嘈杂的音乐"],
    },
    es: {
      q: "¿Cuál es la principal causa de conducción distraída?",
      exp: "Los teléfonos celulares son la principal causa de conducción distraída. La ley de California prohíbe sostener un teléfono mientras conduce — debe usar un dispositivo manos libres.",
      opts: ["Comer mientras conduce", "Teléfonos celulares", "Vallas publicitarias de autopista", "Música fuerte"],
    },
  },
  {
    key: "How far ahead should you scan the road while driving?",
    zh: {
      q: "驾驶时应该向前扫视多远的道路？",
      exp: "至少向前扫视10到15秒（在高速公路上约四分之一英里）。这样有足够时间在紧急情况发生前识别并应对危险。",
      opts: ["一辆车的距离前方", "前方3至4秒", "至少前方10至15秒", "夜间大灯照射的范围"],
    },
    es: {
      q: "¿Con cuánta anticipación debe escanear la carretera mientras conduce?",
      exp: "Explore al menos 10 a 15 segundos hacia adelante (aproximadamente un cuarto de milla en la autopista). Esto da tiempo para identificar y responder a los peligros antes de que se conviertan en emergencias.",
      opts: ["Una longitud de automóvil adelante", "3 a 4 segundos adelante", "Al menos 10 a 15 segundos adelante", "Hasta donde iluminan los faros de noche"],
    },
  },
  {
    key: "You should switch from high beams to low beams when an oncoming vehicle is within:",
    zh: {
      q: "当对向车辆在多少英尺范围内时，应将远光灯切换为近光灯？",
      exp: "在对向车辆500英尺范围内切换到近光灯，跟随其他车辆时在300英尺内切换。",
      opts: ["1000英尺", "500英尺", "200英尺", "100英尺"],
    },
    es: {
      q: "¿A qué distancia de un vehículo que se aproxima debe cambiar de luces altas a bajas?",
      exp: "Cambie a luces bajas dentro de 500 pies de un vehículo que se aproxima, y dentro de 300 pies cuando siga otro vehículo.",
      opts: ["1,000 pies", "500 pies", "200 pies", "100 pies"],
    },
  },
  {
    key: "California law requires headlights to be on:",
    zh: {
      q: "加州法律要求在以下情况下开启大灯：",
      exp: "日落后30分钟至日出前30分钟，以及任何能见度低于1000英尺的情况下，必须开启大灯。",
      opts: ["仅在完全变暗后", "日落后30分钟至日出前30分钟", "仅在雨天或雾天", "仅在无路灯道路上"],
    },
    es: {
      q: "La ley de California requiere que los faros estén encendidos:",
      exp: "Los faros son obligatorios desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y siempre que la visibilidad sea inferior a 1,000 pies.",
      opts: ["Solo después de que oscurezca completamente", "30 minutos después del atardecer hasta 30 minutos antes del amanecer", "Solo durante lluvia o niebla", "Solo en carreteras sin alumbrado"],
    },
  },
  {
    key: "In fog, you should use:",
    zh: {
      q: "在雾中，您应该使用：",
      exp: "在雾中使用近光灯——不要使用远光灯。远光灯会反射雾中的颗粒，降低能见度。",
      opts: ["远光灯以获得最大能见度", "近光灯或雾灯", "同时使用危险警示灯和远光灯", "不开大灯——它们会反射雾气"],
    },
    es: {
      q: "En la niebla, debe usar:",
      exp: "Use luces bajas en la niebla, no luces altas. Las luces altas se reflejan en las partículas de niebla y reducen su visibilidad.",
      opts: ["Faros de luz alta para máxima visibilidad", "Faros de luz baja o luces de niebla", "Luces de emergencia y luces altas juntas", "Sin faros — se reflejan en la niebla"],
    },
  },
  {
    key: "You must not park within how many feet of a fire hydrant?",
    zh: {
      q: "您不得在距消防栓多少英尺范围内停车？",
      exp: "加州禁止在消防栓15英尺范围内停车，以确保消防车辆能快速接入。",
      opts: ["5英尺", "10英尺", "15英尺", "20英尺"],
    },
    es: {
      q: "¿A cuántos pies de un hidrante de incendios no puede estacionarse?",
      exp: "California prohíbe estacionarse a menos de 15 pies de un hidrante de incendios para garantizar que los camiones de bomberos puedan acceder rápidamente.",
      opts: ["5 pies", "10 pies", "15 pies", "20 pies"],
    },
  },
  {
    key: "When parking UPHILL with a curb, your front wheels should be turned:",
    zh: {
      q: "靠路缘上坡停车时，前轮应朝向：",
      exp: "靠路缘上坡停车：将车轮转向远离路缘（向左）。如果制动器失灵，车辆向后滚，路缘会阻止它。",
      opts: ["朝向路缘（向右）", "远离路缘（向左）", "朝前直行", "无所谓——只需拉手刹"],
    },
    es: {
      q: "Al estacionar CUESTA ARRIBA con bordillo, sus ruedas delanteras deben estar giradas:",
      exp: "Al estacionar cuesta arriba con bordillo: gire las ruedas ALEJÁNDOSE del bordillo (hacia la izquierda). Si los frenos fallan, el auto rueda hacia atrás y el bordillo lo detiene.",
      opts: ["Hacia el bordillo (derecha)", "Alejado del bordillo (izquierda)", "Hacia adelante", "No importa — solo aplique el freno de estacionamiento"],
    },
  },
  {
    key: "When parking DOWNHILL with a curb, your front wheels should be turned:",
    zh: {
      q: "靠路缘下坡停车时，前轮应朝向：",
      exp: "靠路缘下坡停车：将车轮转向路缘（向右）。如果制动器失灵，车辆向前滚，路缘会阻止它。",
      opts: ["远离路缘（向左）", "朝向路缘（向右）", "朝前直行", "无所谓——拉紧紧急刹车"],
    },
    es: {
      q: "Al estacionar CUESTA ABAJO con bordillo, sus ruedas delanteras deben estar giradas:",
      exp: "Al estacionar cuesta abajo con bordillo: gire las ruedas HACIA el bordillo (hacia la derecha). Si los frenos fallan, el auto rueda hacia adelante y el bordillo lo detiene.",
      opts: ["Alejado del bordillo (izquierda)", "Hacia el bordillo (derecha)", "Hacia adelante", "No importa — active el freno de emergencia"],
    },
  },
  {
    key: "You must not park within how many feet of a stop sign?",
    zh: {
      q: "您不得在距停车标志多少英尺范围内停车？",
      exp: "在停车标志30英尺范围内停车会阻挡驾驶员查看横向交通的视线。",
      opts: ["15英尺", "20英尺", "30英尺", "50英尺"],
    },
    es: {
      q: "¿A cuántos pies de una señal de alto no puede estacionarse?",
      exp: "Estacionarse a menos de 30 pies de una señal de alto bloquea la visibilidad de los conductores que revisan el tráfico cruzado.",
      opts: ["15 pies", "20 pies", "30 pies", "50 pies"],
    },
  },
  {
    key: "Driver fatigue is dangerous because it:",
    zh: {
      q: "驾驶员疲劳是危险的，因为它：",
      exp: "驾驶员疲劳会降低警觉性、减慢反应时间，并可能导致微睡眠——短暂的不自觉入睡。疲劳驾驶的危害与酒后驾车相似。",
      opts: ["让您开得比正常情况更快", "增加反应时间，可能导致您在方向盘前入睡", "实际上通过减少分心来提高注意力", "仅影响超过4小时的旅途"],
    },
    es: {
      q: "La fatiga del conductor es peligrosa porque:",
      exp: "La fatiga del conductor reduce la alerta, ralentiza los tiempos de reacción y puede causar microsueño, breves momentos de quedarse dormido sin darse cuenta. La fatiga deteriora la conducción de manera similar al alcohol.",
      opts: ["Lo hace conducir más rápido de lo normal", "Aumenta el tiempo de reacción y puede hacer que se duerma al volante", "En realidad mejora la concentración al reducir distracciones", "Solo lo afecta en viajes de más de 4 horas"],
    },
  },
  {
    key: "If your accelerator gets stuck while driving, you should:",
    zh: {
      q: "如果行驶中油门卡住，您应该：",
      exp: "挂入空挡以断开发动机，将车辆引导到路边，并踩刹车。不要在行驶中关闭点火——这会使动力转向和刹车失效。",
      opts: ["立即关闭点火", "挂入空挡，转向路边，踩刹车", "快速踩刹车同时保持直行", "立即拉紧驻车制动器停车"],
    },
    es: {
      q: "Si el acelerador se atasca mientras conduce, debe:",
      exp: "Cambiar a Neutro para desconectar el motor, dirigir el vehículo al costado de la carretera y aplicar los frenos. NO apague el encendido mientras se mueve, ya que desactiva la dirección asistida y los frenos.",
      opts: ["Apagar el encendido inmediatamente", "Cambiar a Neutro, dirigirse al costado y aplicar los frenos", "Bombear los frenos rápidamente mientras conduce recto", "Jalar el freno de estacionamiento inmediatamente para detenerse"],
    },
  },
  {
    key: "What should you do if you experience a tire blowout while driving?",
    zh: {
      q: "如果行驶中发生轮胎爆胎，您应该怎么做？",
      exp: "爆胎时：不要猛踩刹车。紧握方向盘，慢慢松开油门，保持直行，让车辆自然减速，然后轻轻引导车辆至路肩。",
      opts: ["立即猛踩刹车快速停车", "紧握方向盘，慢慢松油门，保持直行，逐渐减速", "迅速将方向盘转向爆胎的方向", "打开危险警示灯，在原地停车"],
    },
    es: {
      q: "¿Qué debe hacer si experimenta un reventón de neumático mientras conduce?",
      exp: "En un reventón: NO frene de golpe. Sujete el volante firmemente, suelte el acelerador suavemente, conduzca recto, deje que el auto se desacelere naturalmente, luego dirija suavemente hacia el hombro.",
      opts: ["Aplicar los frenos fuertemente de inmediato para detenerse rápidamente", "Sostener el volante firmemente, soltar el gas suavemente, conducir recto y desacelerar gradualmente", "Girar rápidamente el volante hacia el neumático reventado", "Encender las luces de emergencia y detenerse donde esté"],
    },
  },
  {
    key: "How far must you park from a railroad crossing?",
    zh: {
      q: "距铁路道口必须停车多远？",
      exp: "不得在铁路轨道7.5英尺范围内停车。这样可以保持轨道畅通，供火车和紧急车辆通行。",
      opts: ["5英尺", "7.5英尺", "15英尺", "25英尺"],
    },
    es: {
      q: "¿A qué distancia de un cruce de ferrocarril debe estacionarse?",
      exp: "No puede estacionarse a menos de 7.5 pies de una vía de tren. Esto mantiene la vía despejada para los trenes y los vehículos de emergencia.",
      opts: ["5 pies", "7.5 pies", "15 pies", "25 pies"],
    },
  },
  {
    key: "When stopped by police, you should acknowledge by:",
    zh: {
      q: "被警察拦停时，您应该通过以下方式表示确认：",
      exp: "当警察示意您停车时，打右转向灯表示您已注意到他们，然后安全地驶向道路右侧并停车。",
      opts: ["打左转向灯", "打右转向灯并安全靠右停车", "闪几次大灯", "在原地立即停车"],
    },
    es: {
      q: "Cuando es detenido por la policía, debe reconocerlo:",
      exp: "Cuando un oficial de policía le hace señas para que se detenga, encienda la señal de giro DERECHA para mostrar que lo ha visto, luego muévase al lado derecho de la carretera de forma segura y deténgase.",
      opts: ["Encender la señal de giro izquierda", "Encender la señal de giro derecha y detenerse de forma segura a la derecha", "Hacer destellos con los faros unas veces", "Detenerse inmediatamente donde esté"],
    },
  },
];

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔍 Loading questions from DB...");

  const questions = await prisma.question.findMany({
    include: {
      options: { orderBy: { id: "asc" } },
      translations: true,
    },
    orderBy: { id: "asc" },
  });

  console.log(`   Found ${questions.length} questions in DB.\n`);

  let matched = 0;
  let skipped = 0;
  let notFound = 0;

  for (const t of translations) {
    // Find question by content match
    const q = questions.find((q) => q.content.startsWith(t.key.slice(0, 50)));
    if (!q) {
      console.warn(`  ⚠️  Not found: "${t.key.slice(0, 60)}..."`);
      notFound++;
      continue;
    }

    // Skip if zh translation already exists
    if (q.translations.some((tr) => tr.language === "zh")) {
      skipped++;
      continue;
    }

    // Insert question translations
    await prisma.questionTranslation.createMany({
      data: [
        { questionId: q.id, language: "zh", content: t.zh.q, explanation: t.zh.exp },
        { questionId: q.id, language: "es", content: t.es.q, explanation: t.es.exp },
      ],
    });

    // Insert option translations (matched by position)
    for (let i = 0; i < q.options.length && i < t.zh.opts.length; i++) {
      await prisma.optionTranslation.createMany({
        data: [
          { optionId: q.options[i].id, language: "zh", content: t.zh.opts[i] },
          { optionId: q.options[i].id, language: "es", content: t.es.opts[i] },
        ],
      });
    }

    matched++;
  }

  console.log(`✅ Done!`);
  console.log(`   Translated: ${matched} questions`);
  console.log(`   Skipped (already done): ${skipped}`);
  if (notFound > 0) console.log(`   Not found: ${notFound}`);
  console.log(`\n   Restart the dev server to see Chinese/Spanish questions.`);
}

main()
  .catch((err) => { console.error(err); process.exit(1); })
  .finally(() => prisma.$disconnect());
