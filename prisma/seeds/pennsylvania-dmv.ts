/**
 * Pennsylvania PennDOT Driver's License Practice Questions
 * Source: Pennsylvania Driver's Manual (official) — pa.gov
 * 65 questions across 6 topics — English, Chinese (Simplified), Spanish
 * Auto-translated via Claude API
 */

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
    // ─── TRAFFIC SIGNALS, SIGNS & MARKINGS ─────────────────────────────────────────
    {
      name: "Traffic Signals, Signs & Markings",
      nameEn: "Traffic Signals, Signs & Markings",
      description: "Traffic signals, road sign shapes and colors, and pavement markings",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/chapter-2-signals-signs-and-pavement-markings",
      translations: [
        { language: "zh", name: "交通信号、标志与路面标线", description: "交通信号、道路标志形状与颜色及路面标线" },
        { language: "es", name: "Señales de Tráfico, Señales Viales y Marcas", description: "Semáforos, formas y colores de señales viales y marcas en el pavimento" },
      ],
      questions: [
        {
          content: "What is the only octagon-shaped (8-sided) sign you will see on the road?",
          explanation: "The STOP sign is the only octagon-shaped sign. Its unique shape allows drivers to recognize it even when it is covered by snow or obscured by vegetation.",
          handbookSection: "Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在道路上唯一的八边形标志是什么？", explanation: "「停车」标志是唯一的八边形标志。其独特的形状使驾驶员即使在标志被积雪覆盖或被植被遮挡时也能识别它。" },
            { language: "es", content: "¿Cuál es la única señal con forma de octágono (8 lados) que verá en la carretera?", explanation: "La señal de ALTO es la única señal con forma de octágono. Su forma única permite a los conductores reconocerla incluso cuando está cubierta de nieve u oculta por la vegetación." },
          ],
          options: [
            {
              content: "Stop sign",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车标志" },
                { language: "es", content: "Señal de alto" },
              ],
            },
            {
              content: "Yield sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行标志" },
                { language: "es", content: "Señal de ceda el paso" },
              ],
            },
            {
              content: "No entry sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "禁止驶入标志" },
                { language: "es", content: "Señal de no entrar" },
              ],
            },
            {
              content: "Speed limit sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "限速标志" },
                { language: "es", content: "Señal de límite de velocidad" },
              ],
            },
          ],
        },
        {
          content: "What is the only pennant-shaped (horizontal triangle) warning sign?",
          explanation: "The NO PASSING ZONE sign is the only pennant-shaped (like a pennant flag, horizontal triangle) sign. It marks the beginning of a no-passing zone and is placed on the left side of the road.",
          handbookSection: "Signs — Sign Shapes",
          difficulty: 2,
          translations: [
            { language: "zh", content: "唯一的三角旗形（水平三角形）警告标志是什么？", explanation: "「禁止超车区」标志是唯一的三角旗形（类似三角旗，水平三角形）标志。它标示禁止超车区的起点，并设置在道路左侧。" },
            { language: "es", content: "¿Cuál es la única señal de advertencia con forma de banderín (triángulo horizontal)?", explanation: "La señal de ZONA DE NO REBASAR es la única señal con forma de banderín (como una bandera de banderín, triángulo horizontal). Marca el comienzo de una zona de no rebasar y se coloca en el lado izquierdo de la carretera." },
          ],
          options: [
            {
              content: "No passing zone sign",
              isCorrect: true,
              translations: [
                { language: "zh", content: "禁止超车区标志" },
                { language: "es", content: "Señal de zona de no rebasar" },
              ],
            },
            {
              content: "Yield sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行标志" },
                { language: "es", content: "Señal de ceda el paso" },
              ],
            },
            {
              content: "School crossing sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "学校过路区标志" },
                { language: "es", content: "Señal de cruce escolar" },
              ],
            },
            {
              content: "Curve warning sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "弯道警告标志" },
                { language: "es", content: "Señal de advertencia de curva" },
              ],
            },
          ],
        },
        {
          content: "What shape and color are warning signs in Pennsylvania?",
          explanation: "Warning signs are diamond-shaped with a yellow background and black symbols or text. They warn drivers of potentially hazardous conditions or situations ahead.",
          handbookSection: "Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州的警告标志是什么形状和颜色？", explanation: "警告标志为菱形，黄色背景配黑色符号或文字。它们警告驾驶员前方可能存在危险状况或情况。" },
            { language: "es", content: "¿Qué forma y color tienen las señales de advertencia en Pensilvania?", explanation: "Las señales de advertencia tienen forma de diamante con fondo amarillo y símbolos o texto en negro. Advierten a los conductores sobre condiciones o situaciones potencialmente peligrosas más adelante." },
          ],
          options: [
            {
              content: "Diamond-shaped, yellow with black symbols",
              isCorrect: true,
              translations: [
                { language: "zh", content: "菱形，黄色配黑色符号" },
                { language: "es", content: "Forma de diamante, amarillo con símbolos negros" },
              ],
            },
            {
              content: "Rectangle, white with black text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "矩形，白色配黑色文字" },
                { language: "es", content: "Rectángulo, blanco con texto negro" },
              ],
            },
            {
              content: "Diamond-shaped, orange with black symbols",
              isCorrect: false,
              translations: [
                { language: "zh", content: "菱形，橙色配黑色符号" },
                { language: "es", content: "Forma de diamante, naranja con símbolos negros" },
              ],
            },
            {
              content: "Pentagon, fluorescent yellow-green",
              isCorrect: false,
              translations: [
                { language: "zh", content: "五边形，荧光黄绿色" },
                { language: "es", content: "Pentágono, amarillo-verde fluorescente" },
              ],
            },
          ],
        },
        {
          content: "What shape and color are work zone signs in Pennsylvania?",
          explanation: "Work zone signs are diamond-shaped with an orange background and black symbols. Orange specifically indicates construction and maintenance work zones.",
          handbookSection: "Signs — Work Zones",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州的施工区标志是什么形状和颜色？", explanation: "施工区标志为菱形，橙色背景配黑色符号。橙色专门表示施工和维护作业区。" },
            { language: "es", content: "¿Qué forma y color tienen las señales de zona de trabajo en Pensilvania?", explanation: "Las señales de zona de trabajo tienen forma de diamante con fondo naranja y símbolos negros. El naranja indica específicamente zonas de construcción y mantenimiento." },
          ],
          options: [
            {
              content: "Diamond-shaped, orange with black symbols",
              isCorrect: true,
              translations: [
                { language: "zh", content: "菱形，橙色配黑色符号" },
                { language: "es", content: "Forma de diamante, naranja con símbolos negros" },
              ],
            },
            {
              content: "Diamond-shaped, yellow with black symbols",
              isCorrect: false,
              translations: [
                { language: "zh", content: "菱形，黄色配黑色符号" },
                { language: "es", content: "Forma de diamante, amarillo con símbolos negros" },
              ],
            },
            {
              content: "Rectangle, orange with black text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "矩形，橙色配黑色文字" },
                { language: "es", content: "Rectángulo, naranja con texto negro" },
              ],
            },
            {
              content: "Rectangle, red with white text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "矩形，红色配白色文字" },
                { language: "es", content: "Rectángulo, rojo con texto blanco" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing yellow traffic signal mean in Pennsylvania?",
          explanation: "A flashing yellow signal means CAUTION. You should slow down, look carefully in all directions, and proceed with care. You are not required to stop.",
          handbookSection: "Signals — Flashing Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，闪烁的黄色交通信号灯表示什么？", explanation: "闪烁的黄色信号灯表示「注意」。您应减速，仔细观察各个方向，然后小心通过。您不需要停车。" },
            { language: "es", content: "¿Qué significa una señal de tráfico amarilla intermitente en Pensilvania?", explanation: "Una señal amarilla intermitente significa PRECAUCIÓN. Debe reducir la velocidad, mirar cuidadosamente en todas las direcciones y proceder con cuidado. No está obligado a detenerse." },
          ],
          options: [
            {
              content: "Caution — slow down, look, and proceed with care",
              isCorrect: true,
              translations: [
                { language: "zh", content: "注意——减速、观察并小心通过" },
                { language: "es", content: "Precaución — reduzca la velocidad, mire y proceda con cuidado" },
              ],
            },
            {
              content: "Stop completely before proceeding",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车后再通过" },
                { language: "es", content: "Deténgase completamente antes de continuar" },
              ],
            },
            {
              content: "The signal is about to turn red — stop if possible",
              isCorrect: false,
              translations: [
                { language: "zh", content: "信号灯即将变红——如果可能请停车" },
                { language: "es", content: "La señal está a punto de cambiar a rojo — deténgase si es posible" },
              ],
            },
            {
              content: "Yield to cross traffic only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行横向交通" },
                { language: "es", content: "Ceda el paso solo al tráfico transversal" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing red traffic signal mean?",
          explanation: "A flashing red signal must be treated the same as a stop sign. You must come to a complete stop, yield to all cross traffic and pedestrians, and proceed when safe.",
          handbookSection: "Signals — Flashing Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "闪烁的红色交通信号灯表示什么？", explanation: "闪烁的红色信号灯必须视同停车标志处理。您必须完全停车，让行所有横向交通和行人，安全时方可通过。" },
            { language: "es", content: "¿Qué significa una señal de tráfico roja intermitente?", explanation: "Una señal roja intermitente debe tratarse igual que una señal de alto. Debe detenerse completamente, ceder el paso a todo el tráfico transversal y peatones, y continuar cuando sea seguro." },
          ],
          options: [
            {
              content: "Treat it as a stop sign — stop, yield, and proceed when safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "视同停车标志——停车、让行，安全时通过" },
                { language: "es", content: "Trátela como una señal de alto — deténgase, ceda el paso y continúe cuando sea seguro" },
              ],
            },
            {
              content: "Slow down and proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速并小心通过" },
                { language: "es", content: "Reduzca la velocidad y proceda con precaución" },
              ],
            },
            {
              content: "Yield to traffic from the left only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行来自左侧的交通" },
                { language: "es", content: "Ceda el paso al tráfico de la izquierda únicamente" },
              ],
            },
            {
              content: "Stop only if other traffic is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有其他车辆时才停车" },
                { language: "es", content: "Deténgase solo si hay otro tráfico presente" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing yellow arrow signal mean?",
          explanation: "A flashing yellow arrow means you may turn in the arrow's direction but you must first yield to oncoming traffic and pedestrians. It is a permissive turn signal, not protected.",
          handbookSection: "Signals — Arrow Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "闪烁的黄色箭头信号灯表示什么？", explanation: "闪烁的黄色箭头表示您可以按箭头方向转弯，但必须先让行对向来车和行人。这是允许转弯信号，而非受保护转弯。" },
            { language: "es", content: "¿Qué significa una señal de flecha amarilla intermitente?", explanation: "Una flecha amarilla intermitente significa que puede girar en la dirección de la flecha, pero primero debe ceder el paso al tráfico en sentido contrario y a los peatones. Es una señal de giro permitido, no protegido." },
          ],
          options: [
            {
              content: "You may turn but must yield to oncoming traffic and pedestrians",
              isCorrect: true,
              translations: [
                { language: "zh", content: "您可以转弯，但必须让行对向来车和行人" },
                { language: "es", content: "Puede girar pero debe ceder el paso al tráfico en sentido contrario y a los peatones" },
              ],
            },
            {
              content: "A protected turn — oncoming traffic is stopped",
              isCorrect: false,
              translations: [
                { language: "zh", content: "受保护转弯——对向来车已停止" },
                { language: "es", content: "Un giro protegido — el tráfico en sentido contrario está detenido" },
              ],
            },
            {
              content: "Do not turn in the arrow's direction",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不得按箭头方向转弯" },
                { language: "es", content: "No gire en la dirección de la flecha" },
              ],
            },
            {
              content: "Turn only after coming to a complete stop",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车后才能转弯" },
                { language: "es", content: "Gire solo después de detenerse completamente" },
              ],
            },
          ],
        },
        {
          content: "If a traffic signal is not functioning, how should you treat the intersection?",
          explanation: "When a traffic signal is not functioning, treat the intersection as a four-way stop. All drivers must stop and yield the right-of-way based on stop sign rules.",
          handbookSection: "Signals — Non-Functioning Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "如果交通信号灯不工作，您应该如何处理该路口？", explanation: "当交通信号灯不工作时，应将该路口视为四向停车。所有驾驶员必须停车，并根据停车标志规则让行。" },
            { language: "es", content: "Si un semáforo no funciona, ¿cómo debe tratar la intersección?", explanation: "Cuando un semáforo no funciona, trate la intersección como un alto de cuatro vías. Todos los conductores deben detenerse y ceder el derecho de paso según las reglas de la señal de alto." },
          ],
          options: [
            {
              content: "Treat it as a four-way stop",
              isCorrect: true,
              translations: [
                { language: "zh", content: "视为四向停车" },
                { language: "es", content: "Trátela como un alto de cuatro vías" },
              ],
            },
            {
              content: "Proceed through without stopping",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不停车直接通过" },
                { language: "es", content: "Continúe sin detenerse" },
              ],
            },
            {
              content: "Yield to traffic from the right only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行来自右侧的交通" },
                { language: "es", content: "Ceda el paso al tráfico de la derecha únicamente" },
              ],
            },
            {
              content: "Only stop if another vehicle is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有其他车辆时才停车" },
                { language: "es", content: "Deténgase solo si hay otro vehículo presente" },
              ],
            },
          ],
        },
        {
          content: "What does a solid yellow center line on your side of the road mean?",
          explanation: "A solid yellow center line on your side of the road means you may not cross the line to pass vehicles. The line on your side dictates whether you may pass.",
          handbookSection: "Pavement Markings — Center Lines",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您这侧道路上的实线黄色中心线表示什么？", explanation: "您这侧道路上的实线黄色中心线表示您不得越线超车。您这侧的线决定了您是否可以超车。" },
            { language: "es", content: "¿Qué significa una línea central amarilla continua en su lado de la carretera?", explanation: "Una línea central amarilla continua en su lado de la carretera significa que no puede cruzar la línea para rebasar vehículos. La línea de su lado determina si puede rebasar." },
          ],
          options: [
            {
              content: "You may not cross the line to pass",
              isCorrect: true,
              translations: [
                { language: "zh", content: "您不得越线超车" },
                { language: "es", content: "No puede cruzar la línea para rebasar" },
              ],
            },
            {
              content: "You may pass if the way is clearly visible",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果前方视野清晰可以超车" },
                { language: "es", content: "Puede rebasar si el camino está claramente visible" },
              ],
            },
            {
              content: "The lane is for turning only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "该车道仅供转弯使用" },
                { language: "es", content: "El carril es solo para girar" },
              ],
            },
            {
              content: "Bicycle lane boundary — do not enter",
              isCorrect: false,
              translations: [
                { language: "zh", content: "自行车道边界——禁止驶入" },
                { language: "es", content: "Límite del carril para bicicletas — no entrar" },
              ],
            },
          ],
        },
        {
          content: "In Pennsylvania, what color lines separate traffic moving in opposite directions?",
          explanation: "Yellow lines separate traffic moving in opposite directions. White lines separate lanes of traffic moving in the same direction.",
          handbookSection: "Pavement Markings — Lane Lines",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，什么颜色的线分隔相向行驶的车流？", explanation: "黄色线分隔相向行驶的车流。白色线分隔同向行驶的车道。" },
            { language: "es", content: "En Pensilvania, ¿de qué color son las líneas que separan el tráfico que se mueve en direcciones opuestas?", explanation: "Las líneas amarillas separan el tráfico que se mueve en direcciones opuestas. Las líneas blancas separan los carriles de tráfico que se mueven en la misma dirección." },
          ],
          options: [
            {
              content: "Yellow lines",
              isCorrect: true,
              translations: [
                { language: "zh", content: "黄色线" },
                { language: "es", content: "Líneas amarillas" },
              ],
            },
            {
              content: "White lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "白色线" },
                { language: "es", content: "Líneas blancas" },
              ],
            },
            {
              content: "Red lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "红色线" },
                { language: "es", content: "Líneas rojas" },
              ],
            },
            {
              content: "Orange lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "橙色线" },
                { language: "es", content: "Líneas naranjas" },
              ],
            },
          ],
        },
        {
          content: "What does the pentagon (five-sided) shaped sign indicate?",
          explanation: "The pentagon-shaped sign is the only five-sided sign used on roadways. It indicates a school zone or school crossing, alerting drivers to watch for children.",
          handbookSection: "Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "五边形标志表示什么？", explanation: "五边形标志是道路上唯一使用的五边形标志。它表示学校区域或学校过路区，提醒驾驶员注意儿童。" },
            { language: "es", content: "¿Qué indica la señal con forma de pentágono (cinco lados)?", explanation: "La señal con forma de pentágono es la única señal de cinco lados utilizada en las carreteras. Indica una zona escolar o cruce escolar, alertando a los conductores para que estén atentos a los niños." },
          ],
          options: [
            {
              content: "School zone or school crossing",
              isCorrect: true,
              translations: [
                { language: "zh", content: "学校区域或学校过路区" },
                { language: "es", content: "Zona escolar o cruce escolar" },
              ],
            },
            {
              content: "Construction work zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "施工作业区" },
                { language: "es", content: "Zona de trabajo de construcción" },
              ],
            },
            {
              content: "State park or recreational area",
              isCorrect: false,
              translations: [
                { language: "zh", content: "州立公园或休闲区" },
                { language: "es", content: "Parque estatal o área recreativa" },
              ],
            },
            {
              content: "Bicycle route",
              isCorrect: false,
              translations: [
                { language: "zh", content: "自行车道" },
                { language: "es", content: "Ruta para bicicletas" },
              ],
            },
          ],
        },
        {
          content: "What do green signs with white lettering indicate?",
          explanation: "Green guide signs with white text provide direction and distance information. They show routes to destinations, exits, distances, and highway route markers.",
          handbookSection: "Signs — Guide Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "带有白色字母的绿色标志表示什么？", explanation: "带有白色文字的绿色指路标志提供方向和距离信息。它们显示通往目的地的路线、出口、距离和公路路线标记。" },
            { language: "es", content: "¿Qué indican las señales verdes con letras blancas?", explanation: "Las señales de guía verdes con texto blanco proporcionan información de dirección y distancia. Muestran rutas hacia destinos, salidas, distancias y marcadores de ruta de carreteras." },
          ],
          options: [
            {
              content: "Direction and distance to destinations",
              isCorrect: true,
              translations: [
                { language: "zh", content: "通往目的地的方向和距离" },
                { language: "es", content: "Dirección y distancia a los destinos" },
              ],
            },
            {
              content: "Service areas such as gas, food, lodging",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加油站、餐饮、住宿等服务区" },
                { language: "es", content: "Áreas de servicio como gasolina, comida, alojamiento" },
              ],
            },
            {
              content: "Regulatory requirements and speed limits",
              isCorrect: false,
              translations: [
                { language: "zh", content: "法规要求和限速" },
                { language: "es", content: "Requisitos reglamentarios y límites de velocidad" },
              ],
            },
            {
              content: "Construction work zones and delays",
              isCorrect: false,
              translations: [
                { language: "zh", content: "施工作业区和延误" },
                { language: "es", content: "Zonas de trabajo de construcción y retrasos" },
              ],
            },
          ],
        },
        {
          content: "What must you do when a pedestrian signal shows a steady DON'T WALK (or hand) indicator?",
          explanation: "A steady DON'T WALK signal or hand means you should not begin crossing the street. If you are already in the street when it changes to flashing, you should finish crossing.",
          handbookSection: "Signals — Pedestrian Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当行人信号灯显示稳定的「禁止通行」（或手形）指示时，您必须怎么做？", explanation: "稳定的「禁止通行」信号或手形图案表示您不应开始过马路。如果您已经在街上且信号变为闪烁，您应完成过马路。" },
            { language: "es", content: "¿Qué debe hacer cuando una señal peatonal muestra un indicador fijo de NO CRUCE (o mano)?", explanation: "Una señal fija de NO CRUCE o mano significa que no debe comenzar a cruzar la calle. Si ya está en la calle cuando cambia a intermitente, debe terminar de cruzar." },
          ],
          options: [
            {
              content: "Do not begin crossing — wait for the WALK signal",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不要开始过马路——等待「通行」信号" },
                { language: "es", content: "No comience a cruzar — espere la señal de CRUCE" },
              ],
            },
            {
              content: "Cross quickly before the signal changes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在信号变化前快速通过" },
                { language: "es", content: "Cruce rápidamente antes de que cambie la señal" },
              ],
            },
            {
              content: "Cross only from the right side of the street",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅从街道右侧过马路" },
                { language: "es", content: "Cruce solo desde el lado derecho de la calle" },
              ],
            },
            {
              content: "Cross if no vehicles are present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果没有车辆就可以过马路" },
                { language: "es", content: "Cruce si no hay vehículos presentes" },
              ],
            },
          ],
        },
        {
          content: "On Interstate highways in Pennsylvania, what do even-numbered routes generally indicate?",
          explanation: "Even-numbered Interstate routes run east-west. Odd-numbered routes run north-south. This system helps drivers navigate directionally across the country.",
          handbookSection: "Signs — Interstate Routes",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州的州际公路上，偶数编号的路线通常表示什么？", explanation: "偶数编号的州际公路为东西走向。奇数编号的路线为南北走向。这一系统帮助驾驶员在全国范围内进行方向导航。" },
            { language: "es", content: "En las autopistas interestatales de Pensilvania, ¿qué indican generalmente las rutas con números pares?", explanation: "Las rutas interestatales con números pares van de este a oeste. Las rutas con números impares van de norte a sur. Este sistema ayuda a los conductores a navegar direccionalmente a través del país." },
          ],
          options: [
            {
              content: "East-west routes",
              isCorrect: true,
              translations: [
                { language: "zh", content: "东西走向路线" },
                { language: "es", content: "Rutas de este a oeste" },
              ],
            },
            {
              content: "North-south routes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "南北走向路线" },
                { language: "es", content: "Rutas de norte a sur" },
              ],
            },
            {
              content: "Toll routes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "收费路线" },
                { language: "es", content: "Rutas de peaje" },
              ],
            },
            {
              content: "Routes through urban areas",
              isCorrect: false,
              translations: [
                { language: "zh", content: "穿越城市地区的路线" },
                { language: "es", content: "Rutas a través de áreas urbanas" },
              ],
            },
          ],
        },
        {
          content: "When driving in a posted work zone in Pennsylvania, what additional requirement applies to headlights?",
          explanation: "In Pennsylvania, headlights are required to be on in all posted work zones, even during daylight. Failure to use headlights in a work zone results in an additional $25 fine.",
          handbookSection: "Signs — Work Zones",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州的指定施工区内驾驶时，关于车头灯有什么额外要求？", explanation: "在宾夕法尼亚州，在所有指定施工区内必须始终开启车头灯，即使在白天也是如此。在施工区内未使用车头灯将被额外罚款25美元。" },
            { language: "es", content: "Al conducir en una zona de trabajo señalizada en Pensilvania, ¿qué requisito adicional se aplica a los faros?", explanation: "En Pensilvania, los faros deben estar encendidos en todas las zonas de trabajo señalizadas, incluso durante el día. No usar los faros en una zona de trabajo resulta en una multa adicional de $25." },
          ],
          options: [
            {
              content: "Headlights must be on at all times in posted work zones",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在指定施工区内必须始终开启车头灯" },
                { language: "es", content: "Los faros deben estar encendidos en todo momento en las zonas de trabajo señalizadas" },
              ],
            },
            {
              content: "High beams must be used in work zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在施工区内必须使用远光灯" },
                { language: "es", content: "Las luces altas deben usarse en las zonas de trabajo" },
              ],
            },
            {
              content: "Hazard lights must be activated in work zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在施工区内必须开启危险警示灯" },
                { language: "es", content: "Las luces de emergencia deben activarse en las zonas de trabajo" },
              ],
            },
            {
              content: "No additional headlight requirement in work zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "施工区内没有额外的车头灯要求" },
                { language: "es", content: "No hay requisito adicional de faros en las zonas de trabajo" },
              ],
            },
          ],
        },
      ],
    },
    // ─── RIGHT-OF-WAY, TURNS & INTERSECTIONS ─────────────────────────────────────────
    {
      name: "Right-of-Way, Turns & Intersections",
      nameEn: "Right-of-Way, Turns & Intersections",
      description: "Right-of-way rules, turning procedures, signaling, and emergency vehicles",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/everyday-driving-skills",
      translations: [
        { language: "zh", name: "优先通行权、转弯与路口", description: "优先权规则、转弯程序、信号及紧急车辆" },
        { language: "es", name: "Derecho de Paso, Giros e Intersecciones", description: "Reglas de prioridad, procedimientos de giro, señalización y vehículos de emergencia" },
      ],
      questions: [
        {
          content: "At an uncontrolled intersection where two vehicles arrive at the same time, who must yield?",
          explanation: "At an uncontrolled intersection where vehicles arrive simultaneously, the driver on the left must yield to the driver on the right. The vehicle on the right has the right-of-way.",
          handbookSection: "Driving Skills — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在无控制交叉路口，两辆车同时到达时，谁必须让行？", explanation: "在无控制交叉路口，当车辆同时到达时，左侧的驾驶员必须让行给右侧的驾驶员。右侧车辆拥有优先通行权。" },
            { language: "es", content: "En una intersección sin control donde dos vehículos llegan al mismo tiempo, ¿quién debe ceder el paso?", explanation: "En una intersección sin control donde los vehículos llegan simultáneamente, el conductor de la izquierda debe ceder el paso al conductor de la derecha. El vehículo de la derecha tiene el derecho de paso." },
          ],
          options: [
            {
              content: "The vehicle on the left yields to the vehicle on the right",
              isCorrect: true,
              translations: [
                { language: "zh", content: "左侧车辆让行给右侧车辆" },
                { language: "es", content: "El vehículo de la izquierda cede el paso al vehículo de la derecha" },
              ],
            },
            {
              content: "The vehicle on the right yields to the vehicle on the left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "右侧车辆让行给左侧车辆" },
                { language: "es", content: "El vehículo de la derecha cede el paso al vehículo de la izquierda" },
              ],
            },
            {
              content: "The driver going straight always has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直行车辆始终拥有优先通行权" },
                { language: "es", content: "El conductor que va recto siempre tiene el derecho de paso" },
              ],
            },
            {
              content: "The larger vehicle has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "较大的车辆拥有优先通行权" },
                { language: "es", content: "El vehículo más grande tiene el derecho de paso" },
              ],
            },
          ],
        },
        {
          content: "When turning left at an intersection, you must yield to:",
          explanation: "When making a left turn, you must yield to all oncoming traffic (vehicles going straight or turning right) and to pedestrians in the crosswalk you are crossing.",
          handbookSection: "Driving Skills — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在交叉路口左转时，您必须让行给：", explanation: "左转时，您必须让行给所有对向车辆（直行或右转的车辆）以及您即将穿越的人行横道上的行人。" },
            { language: "es", content: "Al girar a la izquierda en una intersección, debe ceder el paso a:", explanation: "Al hacer un giro a la izquierda, debe ceder el paso a todo el tráfico que viene de frente (vehículos que van recto o giran a la derecha) y a los peatones en el cruce peatonal que está cruzando." },
          ],
          options: [
            {
              content: "All oncoming traffic and pedestrians in the crosswalk",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有对向车辆和人行横道上的行人" },
                { language: "es", content: "Todo el tráfico que viene de frente y los peatones en el cruce peatonal" },
              ],
            },
            {
              content: "Only to traffic coming from your right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给从您右侧驶来的车辆" },
                { language: "es", content: "Solo al tráfico que viene de su derecha" },
              ],
            },
            {
              content: "No one — left-turning vehicles have the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无需让行——左转车辆拥有优先通行权" },
                { language: "es", content: "A nadie — los vehículos que giran a la izquierda tienen el derecho de paso" },
              ],
            },
            {
              content: "Only emergency vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给紧急车辆" },
                { language: "es", content: "Solo a los vehículos de emergencia" },
              ],
            },
          ],
        },
        {
          content: "In Pennsylvania, how far in advance must you signal before turning or changing lanes?",
          explanation: "Pennsylvania law requires signaling at least 100 feet before turning or changing lanes in urban areas. On rural highways and higher-speed roads, more warning distance is required.",
          handbookSection: "Driving Skills — Signaling",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，转弯或变道前必须提前多远打转向灯？", explanation: "宾夕法尼亚州法律要求在城市地区转弯或变道前至少提前100英尺打转向灯。在乡村公路和高速道路上，需要更长的提前警示距离。" },
            { language: "es", content: "En Pensilvania, ¿con cuánta anticipación debe señalizar antes de girar o cambiar de carril?", explanation: "La ley de Pensilvania requiere señalizar al menos 100 pies antes de girar o cambiar de carril en áreas urbanas. En carreteras rurales y vías de alta velocidad, se requiere más distancia de advertencia." },
          ],
          options: [
            {
              content: "At least 100 feet before the turn",
              isCorrect: true,
              translations: [
                { language: "zh", content: "转弯前至少100英尺" },
                { language: "es", content: "Al menos 100 pies antes del giro" },
              ],
            },
            {
              content: "At least 50 feet before the turn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "转弯前至少50英尺" },
                { language: "es", content: "Al menos 50 pies antes del giro" },
              ],
            },
            {
              content: "At least 200 feet before the turn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "转弯前至少200英尺" },
                { language: "es", content: "Al menos 200 pies antes del giro" },
              ],
            },
            {
              content: "Immediately before the turn is sufficient",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在转弯前立即打灯即可" },
                { language: "es", content: "Inmediatamente antes del giro es suficiente" },
              ],
            },
          ],
        },
        {
          content: "You must yield to pedestrians at crosswalks. Which of the following is true about pedestrian right-of-way?",
          explanation: "Drivers must yield to pedestrians in marked and unmarked crosswalks. You must also yield to blind pedestrians carrying white canes or using guide dogs at any location.",
          handbookSection: "Driving Skills — Pedestrian Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您必须在人行横道处让行给行人。以下关于行人优先通行权的说法，哪项是正确的？", explanation: "驾驶员必须在有标志和无标志的人行横道处让行给行人。您还必须在任何地点让行给携带白色手杖或使用导盲犬的盲人行人。" },
            { language: "es", content: "Debe ceder el paso a los peatones en los cruces peatonales. ¿Cuál de las siguientes afirmaciones sobre el derecho de paso de los peatones es correcta?", explanation: "Los conductores deben ceder el paso a los peatones en cruces peatonales marcados y no marcados. También debe ceder el paso a los peatones ciegos que llevan bastones blancos o usan perros guía en cualquier lugar." },
          ],
          options: [
            {
              content: "Yield at marked and unmarked crosswalks; always yield to blind pedestrians",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在有标志和无标志的人行横道处让行；始终让行给盲人行人" },
                { language: "es", content: "Ceder el paso en cruces marcados y no marcados; siempre ceder el paso a peatones ciegos" },
              ],
            },
            {
              content: "Yield only at marked crosswalks",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有标志的人行横道处让行" },
                { language: "es", content: "Ceder el paso solo en cruces peatonales marcados" },
              ],
            },
            {
              content: "Yield only when the pedestrian has the WALK signal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在行人有「步行」信号时让行" },
                { language: "es", content: "Ceder el paso solo cuando el peatón tiene la señal de CAMINAR" },
              ],
            },
            {
              content: "Pedestrians must yield to motor vehicles at all intersections",
              isCorrect: false,
              translations: [
                { language: "zh", content: "行人必须在所有交叉路口让行给机动车辆" },
                { language: "es", content: "Los peatones deben ceder el paso a los vehículos motorizados en todas las intersecciones" },
              ],
            },
          ],
        },
        {
          content: "When must you pull over and stop for an emergency vehicle in Pennsylvania?",
          explanation: "When an emergency vehicle uses sirens or flashing red or red-blue lights, you must pull to the right curb or edge and stop. You must remain stopped until the vehicle passes and you must maintain 500 feet following distance after it passes.",
          handbookSection: "Driving Skills — Emergency Vehicles",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，您何时必须靠边停车为紧急车辆让路？", explanation: "当紧急车辆使用警笛或红色或红蓝闪烁灯光时，您必须靠右边路缘或路边停车。您必须保持停止状态直到该车辆通过，并且在其通过后必须保持500英尺的跟车距离。" },
            { language: "es", content: "¿Cuándo debe detenerse y hacerse a un lado para un vehículo de emergencia en Pensilvania?", explanation: "Cuando un vehículo de emergencia usa sirenas o luces rojas o rojo-azules intermitentes, debe hacerse a un lado hacia el bordillo derecho o el borde y detenerse. Debe permanecer detenido hasta que el vehículo pase y debe mantener una distancia de 500 pies después de que pase." },
          ],
          options: [
            {
              content: "Pull to the right and stop; stay 500 feet back after it passes",
              isCorrect: true,
              translations: [
                { language: "zh", content: "靠右停车；在其通过后保持500英尺距离" },
                { language: "es", content: "Hacerse a la derecha y detenerse; mantenerse a 500 pies después de que pase" },
              ],
            },
            {
              content: "Slow down to 25 mph and continue driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速至25英里/小时并继续行驶" },
                { language: "es", content: "Reducir la velocidad a 25 mph y continuar conduciendo" },
              ],
            },
            {
              content: "Only stop if the emergency vehicle is behind you",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当紧急车辆在您后方时才停车" },
                { language: "es", content: "Solo detenerse si el vehículo de emergencia está detrás de usted" },
              ],
            },
            {
              content: "Pull to the left edge and stop",
              isCorrect: false,
              translations: [
                { language: "zh", content: "靠左边路缘停车" },
                { language: "es", content: "Hacerse al borde izquierdo y detenerse" },
              ],
            },
          ],
        },
        {
          content: "What does Pennsylvania's Steer Clear (Move Over) law require?",
          explanation: "Pennsylvania's Steer Clear law requires drivers to move to a non-adjacent lane when passing emergency responders or highway workers. If changing lanes is not possible, you must reduce speed. Fines start at $250 for a first offense.",
          handbookSection: "Driving Skills — Move Over Law",
          difficulty: 2,
          translations: [
            { language: "zh", content: "宾夕法尼亚州的「让道法」（Steer Clear/Move Over法）要求什么？", explanation: "宾夕法尼亚州的「让道法」要求驾驶员在经过紧急救援人员或公路工作人员时移至非相邻车道。如果无法变道，您必须减速。初犯罚款起价为250美元。" },
            { language: "es", content: "¿Qué requiere la ley Steer Clear (Move Over) de Pensilvania?", explanation: "La ley Steer Clear de Pensilvania requiere que los conductores se muevan a un carril no adyacente cuando pasen junto a personal de emergencia o trabajadores de carreteras. Si no es posible cambiar de carril, debe reducir la velocidad. Las multas comienzan en $250 por la primera infracción." },
          ],
          options: [
            {
              content: "Move to a non-adjacent lane, or slow down if changing lanes is not possible",
              isCorrect: true,
              translations: [
                { language: "zh", content: "移至非相邻车道，如果无法变道则减速" },
                { language: "es", content: "Moverse a un carril no adyacente, o reducir la velocidad si no es posible cambiar de carril" },
              ],
            },
            {
              content: "Stop completely when passing emergency vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "经过紧急车辆时完全停车" },
                { language: "es", content: "Detenerse completamente al pasar vehículos de emergencia" },
              ],
            },
            {
              content: "Honk to warn workers and pass at normal speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "鸣笛警告工作人员并以正常速度通过" },
                { language: "es", content: "Tocar la bocina para advertir a los trabajadores y pasar a velocidad normal" },
              ],
            },
            {
              content: "Only applies on highways — not on local roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅适用于高速公路——不适用于地方道路" },
                { language: "es", content: "Solo aplica en autopistas — no en caminos locales" },
              ],
            },
          ],
        },
        {
          content: "What is the proper lane position when turning right?",
          explanation: "When making a right turn, approach in the right lane, move as close to the right curb as possible, and turn into the right lane of the destination road.",
          handbookSection: "Driving Skills — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "右转时正确的车道位置是什么？", explanation: "右转时，应在右侧车道接近，尽可能靠近右侧路缘，然后转入目标道路的右侧车道。" },
            { language: "es", content: "¿Cuál es la posición correcta del carril al girar a la derecha?", explanation: "Al hacer un giro a la derecha, acérquese en el carril derecho, muévase lo más cerca posible del bordillo derecho y gire hacia el carril derecho de la calle de destino." },
          ],
          options: [
            {
              content: "Approach in the right lane and turn into the nearest right lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在右侧车道接近并转入最近的右侧车道" },
                { language: "es", content: "Acercarse en el carril derecho y girar hacia el carril derecho más cercano" },
              ],
            },
            {
              content: "Approach from the center lane for visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从中间车道接近以获得更好的视野" },
                { language: "es", content: "Acercarse desde el carril central para tener visibilidad" },
              ],
            },
            {
              content: "Make a wide turn to avoid the curb",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大幅度转弯以避开路缘" },
                { language: "es", content: "Hacer un giro amplio para evitar el bordillo" },
              ],
            },
            {
              content: "Turn from any lane as long as you signal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要打转向灯，可以从任何车道转弯" },
                { language: "es", content: "Girar desde cualquier carril siempre que señalice" },
              ],
            },
          ],
        },
        {
          content: "When must you yield to a vehicle on a through road when entering from an alley or driveway?",
          explanation: "When entering a highway from an alley, driveway, or private road, you must stop and yield to ALL traffic on the highway and to pedestrians on the sidewalk before entering.",
          handbookSection: "Driving Skills — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "从小巷或车道进入主干道时，您何时必须让行给主干道上的车辆？", explanation: "从小巷、车道或私人道路进入公路时，您必须停车并让行给公路上的所有车辆以及人行道上的行人，然后再进入。" },
            { language: "es", content: "¿Cuándo debe ceder el paso a un vehículo en una vía principal al entrar desde un callejón o entrada de vehículos?", explanation: "Al entrar a una carretera desde un callejón, entrada de vehículos o camino privado, debe detenerse y ceder el paso a TODO el tráfico en la carretera y a los peatones en la acera antes de entrar." },
          ],
          options: [
            {
              content: "Always — stop and yield to all highway traffic and pedestrians",
              isCorrect: true,
              translations: [
                { language: "zh", content: "始终——停车并让行给所有公路车辆和行人" },
                { language: "es", content: "Siempre — detenerse y ceder el paso a todo el tráfico de la carretera y peatones" },
              ],
            },
            {
              content: "Only if traffic is within 500 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当车辆在500英尺范围内时" },
                { language: "es", content: "Solo si el tráfico está a menos de 500 pies" },
              ],
            },
            {
              content: "Yield only to traffic from the left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给从左侧驶来的车辆" },
                { language: "es", content: "Ceder el paso solo al tráfico de la izquierda" },
              ],
            },
            {
              content: "Signal and enter when your speed matches traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "打转向灯并在您的速度与车流匹配时进入" },
                { language: "es", content: "Señalizar y entrar cuando su velocidad coincida con el tráfico" },
              ],
            },
          ],
        },
        {
          content: "In Pennsylvania, when are you allowed to pass another vehicle on the right?",
          explanation: "In Pennsylvania, you may pass on the right only when the vehicle ahead is turning left and there is a clear lane to the right, or on a one-way street with multiple lanes. Passing on the shoulder is illegal.",
          handbookSection: "Driving Skills — Passing",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，您何时可以从右侧超车？", explanation: "在宾夕法尼亚州，只有当前方车辆正在左转且右侧有畅通车道时，或在有多条车道的单行道上，您才可以从右侧超车。在路肩上超车是违法的。" },
            { language: "es", content: "En Pensilvania, ¿cuándo se le permite pasar a otro vehículo por la derecha?", explanation: "En Pensilvania, puede pasar por la derecha solo cuando el vehículo de adelante está girando a la izquierda y hay un carril libre a la derecha, o en una calle de un solo sentido con múltiples carriles. Pasar por el arcén es ilegal." },
          ],
          options: [
            {
              content: "When the vehicle ahead is turning left and there is a clear lane to the right",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当前方车辆正在左转且右侧有畅通车道时" },
                { language: "es", content: "Cuando el vehículo de adelante está girando a la izquierda y hay un carril libre a la derecha" },
              ],
            },
            {
              content: "Any time traffic to the left is moving slowly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何时候左侧车流移动缓慢时" },
                { language: "es", content: "En cualquier momento cuando el tráfico a la izquierda se mueve lentamente" },
              ],
            },
            {
              content: "On the shoulder when traffic is congested",
              isCorrect: false,
              translations: [
                { language: "zh", content: "交通拥堵时可在路肩上超车" },
                { language: "es", content: "Por el arcén cuando el tráfico está congestionado" },
              ],
            },
            {
              content: "You may never pass on the right in Pennsylvania",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在宾夕法尼亚州您永远不能从右侧超车" },
                { language: "es", content: "Nunca puede pasar por la derecha en Pensilvania" },
              ],
            },
          ],
        },
        {
          content: "What should you do when approaching a roundabout (traffic circle)?",
          explanation: "When approaching a roundabout, yield to traffic already circulating inside. Enter when there is a safe gap, travel counterclockwise, and exit at your desired street.",
          handbookSection: "Driving Skills — Roundabouts",
          difficulty: 1,
          translations: [
            { language: "zh", content: "接近环形交叉路口（交通环岛）时应该怎么做？", explanation: "接近环形交叉路口时，让行给已在环内行驶的车辆。在有安全间隙时进入，逆时针方向行驶，然后在您要去的街道出口驶出。" },
            { language: "es", content: "¿Qué debe hacer al acercarse a una rotonda (glorieta)?", explanation: "Al acercarse a una rotonda, ceda el paso al tráfico que ya está circulando dentro. Entre cuando haya un espacio seguro, viaje en sentido contrario a las agujas del reloj y salga en la calle deseada." },
          ],
          options: [
            {
              content: "Yield to traffic already in the circle, then enter when safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "让行给已在环内的车辆，然后在安全时进入" },
                { language: "es", content: "Ceder el paso al tráfico que ya está en la rotonda, luego entrar cuando sea seguro" },
              ],
            },
            {
              content: "Enter immediately — vehicles entering have the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即进入——进入的车辆拥有优先通行权" },
                { language: "es", content: "Entrar inmediatamente — los vehículos que entran tienen el derecho de paso" },
              ],
            },
            {
              content: "Stop completely before entering the circle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "进入环岛前完全停车" },
                { language: "es", content: "Detenerse completamente antes de entrar a la rotonda" },
              ],
            },
            {
              content: "Yield only to traffic coming from your right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给从您右侧驶来的车辆" },
                { language: "es", content: "Ceder el paso solo al tráfico que viene de su derecha" },
              ],
            },
          ],
        },
      ],
    },
    // ─── SPEED, SPACE & DEFENSIVE DRIVING ─────────────────────────────────────────
    {
      name: "Speed, Space & Defensive Driving",
      nameEn: "Speed, Space & Defensive Driving",
      description: "Speed limits, following distances, school buses, and defensive driving techniques",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/special-circumstances-and-emergencies",
      translations: [
        { language: "zh", name: "车速、空间管理与防御性驾驶", description: "限速、跟车距离、校车规则及防御性驾驶技术" },
        { language: "es", name: "Velocidad, Espacio y Manejo Defensivo", description: "Límites de velocidad, distancia de seguimiento, autobuses escolares y técnicas de manejo defensivo" },
      ],
      questions: [
        {
          content: "What is the default speed limit in a Pennsylvania urban district when no sign is posted?",
          explanation: "In Pennsylvania, the default speed limit in an urban district is 35 mph. In residential areas, the limit may be lower. You must always drive at a safe speed for conditions.",
          handbookSection: "Speed — Urban Speed Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州城市地区，未设置限速标志时，默认限速是多少？", explanation: "在宾夕法尼亚州，城市地区的默认限速为每小时35英里。在住宅区，限速可能更低。您必须始终以适合路况的安全速度驾驶。" },
            { language: "es", content: "¿Cuál es el límite de velocidad predeterminado en un distrito urbano de Pensilvania cuando no hay señal publicada?", explanation: "En Pensilvania, el límite de velocidad predeterminado en un distrito urbano es de 35 mph. En áreas residenciales, el límite puede ser menor. Siempre debe conducir a una velocidad segura según las condiciones." },
          ],
          options: [
            {
              content: "35 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时35英里" },
                { language: "es", content: "35 mph" },
              ],
            },
            {
              content: "25 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时25英里" },
                { language: "es", content: "25 mph" },
              ],
            },
            {
              content: "30 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时30英里" },
                { language: "es", content: "30 mph" },
              ],
            },
            {
              content: "40 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时40英里" },
                { language: "es", content: "40 mph" },
              ],
            },
          ],
        },
        {
          content: "How far back must you stop from a school bus with flashing red lights and stop arm extended?",
          explanation: "Pennsylvania law requires you to stop at least 10 feet from a school bus when its red lights flash and the stop arm is extended. You must stop whether you are behind or approaching from the front.",
          handbookSection: "Speed — School Buses",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当校车闪烁红灯并伸出停车臂时，您必须在距离校车多远处停车？", explanation: "宾夕法尼亚州法律要求，当校车红灯闪烁且停车臂伸出时，您必须在距离校车至少10英尺处停车。无论您是在校车后方还是从前方驶来，都必须停车。" },
            { language: "es", content: "¿A qué distancia debe detenerse de un autobús escolar con luces rojas intermitentes y el brazo de pare extendido?", explanation: "La ley de Pensilvania requiere que se detenga al menos a 10 pies de un autobús escolar cuando sus luces rojas parpadean y el brazo de pare está extendido. Debe detenerse ya sea que esté detrás o aproximándose de frente." },
          ],
          options: [
            {
              content: "At least 10 feet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少10英尺" },
                { language: "es", content: "Al menos 10 pies" },
              ],
            },
            {
              content: "At least 25 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少25英尺" },
                { language: "es", content: "Al menos 25 pies" },
              ],
            },
            {
              content: "At least 5 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少5英尺" },
                { language: "es", content: "Al menos 5 pies" },
              ],
            },
            {
              content: "At least 50 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少50英尺" },
                { language: "es", content: "Al menos 50 pies" },
              ],
            },
          ],
        },
        {
          content: "Illegally passing a stopped school bus in Pennsylvania results in:",
          explanation: "Passing a stopped school bus in Pennsylvania results in a 60-day license suspension, 5 points on your driving record, and significant fines. This offense is taken very seriously to protect children.",
          handbookSection: "Speed — School Buses",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州非法超越停止的校车将导致：", explanation: "在宾夕法尼亚州超越停止的校车将导致驾照暂停60天、驾驶记录扣5分以及高额罚款。此违规行为被视为非常严重，旨在保护儿童安全。" },
            { language: "es", content: "Pasar ilegalmente un autobús escolar detenido en Pensilvania resulta en:", explanation: "Pasar un autobús escolar detenido en Pensilvania resulta en una suspensión de licencia de 60 días, 5 puntos en su registro de conducir y multas significativas. Esta infracción se toma muy en serio para proteger a los niños." },
          ],
          options: [
            {
              content: "60-day license suspension and 5 points on your record",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾照暂停60天并扣5分" },
                { language: "es", content: "Suspensión de licencia de 60 días y 5 puntos en su registro" },
              ],
            },
            {
              content: "A warning for first offense only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "初次违规仅给予警告" },
                { language: "es", content: "Solo una advertencia para la primera infracción" },
              ],
            },
            {
              content: "30-day suspension and 3 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "暂停30天并扣3分" },
                { language: "es", content: "Suspensión de 30 días y 3 puntos" },
              ],
            },
            {
              content: "1-year suspension for any offense",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何违规均暂停1年" },
                { language: "es", content: "Suspensión de 1 año por cualquier infracción" },
              ],
            },
          ],
        },
        {
          content: "When following a large truck or bus, what is the recommended following distance?",
          explanation: "When following large trucks or buses, maintain at least a 4-second following distance. This keeps you out of their rear blind spot and gives you adequate stopping distance. Increase this in poor conditions.",
          handbookSection: "Speed — Following Distance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "跟随大型卡车或公共汽车行驶时，建议保持多少跟车距离？", explanation: "跟随大型卡车或公共汽车时，至少保持4秒的跟车距离。这样可以使您远离其后方盲区，并有足够的刹车距离。在恶劣条件下应增加此距离。" },
            { language: "es", content: "Al seguir un camión grande o autobús, ¿cuál es la distancia de seguimiento recomendada?", explanation: "Al seguir camiones grandes o autobuses, mantenga al menos 4 segundos de distancia de seguimiento. Esto lo mantiene fuera de su punto ciego trasero y le da una distancia de frenado adecuada. Aumente esta distancia en malas condiciones." },
          ],
          options: [
            {
              content: "At least 4 seconds",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少4秒" },
                { language: "es", content: "Al menos 4 segundos" },
              ],
            },
            {
              content: "At least 2 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少2秒" },
                { language: "es", content: "Al menos 2 segundos" },
              ],
            },
            {
              content: "At least 6 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少6秒" },
                { language: "es", content: "Al menos 6 segundos" },
              ],
            },
            {
              content: "At least 1 car length per 10 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每10英里时速至少1个车身长度" },
                { language: "es", content: "Al menos 1 largo de auto por cada 10 mph" },
              ],
            },
          ],
        },
        {
          content: "On a divided highway in Pennsylvania where the two roadways are physically separated, must you stop for an oncoming school bus with flashing lights?",
          explanation: "On a divided highway where the two roadways are separated by a physical barrier, you do NOT need to stop for a school bus traveling in the opposite direction. However, you must still stop if traveling in the same direction as the bus.",
          handbookSection: "Speed — School Buses",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州的分隔公路上，如果两条车道被物理隔离分开，您是否必须为闪烁灯光的对向校车停车？", explanation: "在两条车道被物理隔离带分开的分隔公路上，您不需要为对向行驶的校车停车。但是，如果您与校车同向行驶，仍必须停车。" },
            { language: "es", content: "En una autopista dividida en Pensilvania donde las dos calzadas están físicamente separadas, ¿debe detenerse por un autobús escolar que viene en dirección contraria con luces intermitentes?", explanation: "En una autopista dividida donde las dos calzadas están separadas por una barrera física, NO necesita detenerse por un autobús escolar que viaja en dirección opuesta. Sin embargo, aún debe detenerse si viaja en la misma dirección que el autobús." },
          ],
          options: [
            {
              content: "No — divided highways with physical barriers are an exception",
              isCorrect: true,
              translations: [
                { language: "zh", content: "否——有物理隔离带的分隔公路属于例外情况" },
                { language: "es", content: "No — las autopistas divididas con barreras físicas son una excepción" },
              ],
            },
            {
              content: "Yes — you must always stop for a school bus in all directions",
              isCorrect: false,
              translations: [
                { language: "zh", content: "是——您必须始终为各方向的校车停车" },
                { language: "es", content: "Sí — siempre debe detenerse por un autobús escolar en todas direcciones" },
              ],
            },
            {
              content: "Only stop if the bus is within 100 feet of you",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当校车距您100英尺以内时停车" },
                { language: "es", content: "Solo deténgase si el autobús está a menos de 100 pies de usted" },
              ],
            },
            {
              content: "Yes — unless you are on an interstate highway",
              isCorrect: false,
              translations: [
                { language: "zh", content: "是——除非您在州际公路上" },
                { language: "es", content: "Sí — a menos que esté en una autopista interestatal" },
              ],
            },
          ],
        },
        {
          content: "What must you do before passing another vehicle on a two-lane road?",
          explanation: "Before passing on a two-lane road, signal your intention, check that you can see far enough ahead to complete the pass safely, and check mirrors and blind spots. You need more distance than you might think — especially when passing trucks.",
          handbookSection: "Speed — Passing",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在双车道道路上超车前，您必须做什么？", explanation: "在双车道道路上超车前，发出信号表明您的意图，确认您能看到足够远的距离以安全完成超车，并检查后视镜和盲区。您需要的距离可能比您想象的更长——特别是在超越卡车时。" },
            { language: "es", content: "¿Qué debe hacer antes de pasar otro vehículo en una carretera de dos carriles?", explanation: "Antes de pasar en una carretera de dos carriles, señale su intención, verifique que puede ver lo suficientemente lejos para completar el paso de manera segura, y revise los espejos y puntos ciegos. Necesita más distancia de lo que podría pensar, especialmente al pasar camiones." },
          ],
          options: [
            {
              content: "Signal, verify clear sight distance, check mirrors and blind spots",
              isCorrect: true,
              translations: [
                { language: "zh", content: "发出信号、确认视距清晰、检查后视镜和盲区" },
                { language: "es", content: "Señalar, verificar distancia de visibilidad clara, revisar espejos y puntos ciegos" },
              ],
            },
            {
              content: "Sound your horn and pass quickly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "鸣喇叭并快速超车" },
                { language: "es", content: "Tocar la bocina y pasar rápidamente" },
              ],
            },
            {
              content: "Flash your high beams to alert oncoming traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "闪烁远光灯提醒对向车辆" },
                { language: "es", content: "Hacer parpadear las luces altas para alertar al tráfico en sentido contrario" },
              ],
            },
            {
              content: "Always wait for the other driver to wave you past",
              isCorrect: false,
              translations: [
                { language: "zh", content: "始终等待对方司机示意您通过" },
                { language: "es", content: "Siempre esperar a que el otro conductor le haga señas para pasar" },
              ],
            },
          ],
        },
        {
          content: "In adverse weather conditions (rain, snow, fog), how should you adjust your speed?",
          explanation: "In adverse conditions, you must reduce your speed below the posted limit to maintain control. The posted speed limit reflects ideal conditions. You must drive at a safe speed for the actual conditions.",
          handbookSection: "Speed — Adverse Conditions",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在恶劣天气条件下（雨、雪、雾），您应如何调整车速？", explanation: "在恶劣条件下，您必须将车速降至限速以下以保持车辆控制。限速标志反映的是理想条件。您必须根据实际条件以安全速度驾驶。" },
            { language: "es", content: "En condiciones climáticas adversas (lluvia, nieve, niebla), ¿cómo debe ajustar su velocidad?", explanation: "En condiciones adversas, debe reducir su velocidad por debajo del límite publicado para mantener el control. El límite de velocidad publicado refleja condiciones ideales. Debe conducir a una velocidad segura para las condiciones reales." },
          ],
          options: [
            {
              content: "Reduce speed below the posted limit based on road conditions",
              isCorrect: true,
              translations: [
                { language: "zh", content: "根据路况将车速降至限速以下" },
                { language: "es", content: "Reducir la velocidad por debajo del límite publicado según las condiciones del camino" },
              ],
            },
            {
              content: "Maintain the posted limit — that is always the maximum safe speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "保持限速——限速始终是最高安全速度" },
                { language: "es", content: "Mantener el límite publicado — esa es siempre la velocidad máxima segura" },
              ],
            },
            {
              content: "Only slow down if precipitation is actively falling",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在降水正在发生时减速" },
                { language: "es", content: "Solo disminuir la velocidad si está cayendo precipitación activamente" },
              ],
            },
            {
              content: "Reduce by exactly 10 mph in all adverse conditions",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在所有恶劣条件下一律减速10英里" },
                { language: "es", content: "Reducir exactamente 10 mph en todas las condiciones adversas" },
              ],
            },
          ],
        },
        {
          content: "When should you use your vehicle's horn in Pennsylvania?",
          explanation: "Use your horn only when necessary to warn other drivers or pedestrians of danger. Do not use it to express anger, frustration, or to greet other drivers. Unnecessary horn use is illegal.",
          handbookSection: "Speed — Vehicle Controls",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，您应该在什么时候使用车辆喇叭？", explanation: "仅在必要时使用喇叭警告其他驾驶员或行人注意危险。不要用它来表达愤怒、沮丧或向其他驾驶员打招呼。不必要地使用喇叭是违法的。" },
            { language: "es", content: "¿Cuándo debe usar la bocina de su vehículo en Pensilvania?", explanation: "Use la bocina solo cuando sea necesario para advertir a otros conductores o peatones de un peligro. No la use para expresar enojo, frustración o para saludar a otros conductores. El uso innecesario de la bocina es ilegal." },
          ],
          options: [
            {
              content: "Only when necessary to warn others of danger",
              isCorrect: true,
              translations: [
                { language: "zh", content: "仅在必要时警告他人注意危险" },
                { language: "es", content: "Solo cuando sea necesario para advertir a otros de un peligro" },
              ],
            },
            {
              content: "To alert other drivers when you want to pass",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在您想超车时提醒其他驾驶员" },
                { language: "es", content: "Para alertar a otros conductores cuando quiera pasar" },
              ],
            },
            {
              content: "Any time you feel it is helpful",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何您认为有帮助的时候" },
                { language: "es", content: "En cualquier momento que sienta que es útil" },
              ],
            },
            {
              content: "When someone cuts you off in traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "当有人在交通中超车抢道时" },
                { language: "es", content: "Cuando alguien le corta el paso en el tráfico" },
              ],
            },
          ],
        },
        {
          content: "How far after an emergency vehicle passes must you maintain at least 500 feet of following distance?",
          explanation: "After an emergency vehicle passes with lights and sirens, you must stay at least 500 feet behind it until it clears the roadway. This protects the emergency responders and others near the vehicle.",
          handbookSection: "Speed — Emergency Vehicles",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在紧急车辆通过后，您必须在多长距离内保持至少500英尺的跟车距离？", explanation: "当紧急车辆开着灯光和警笛通过后，您必须与其保持至少500英尺的距离，直到它驶离道路。这是为了保护紧急救援人员和车辆附近的其他人员。" },
            { language: "es", content: "¿Por cuánto tiempo después de que pasa un vehículo de emergencia debe mantener al menos 500 pies de distancia de seguimiento?", explanation: "Después de que pasa un vehículo de emergencia con luces y sirenas, debe permanecer al menos a 500 pies detrás de él hasta que despeje la carretera. Esto protege a los socorristas de emergencia y a otros cerca del vehículo." },
          ],
          options: [
            {
              content: "At all times until the emergency vehicle clears the roadway",
              isCorrect: true,
              translations: [
                { language: "zh", content: "始终保持直到紧急车辆驶离道路" },
                { language: "es", content: "En todo momento hasta que el vehículo de emergencia despeje la carretera" },
              ],
            },
            {
              content: "Only for 30 seconds after it passes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在其通过后30秒内" },
                { language: "es", content: "Solo por 30 segundos después de que pase" },
              ],
            },
            {
              content: "Only on highways — not on local roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在高速公路上——不适用于地方道路" },
                { language: "es", content: "Solo en autopistas — no en carreteras locales" },
              ],
            },
            {
              content: "Until the next intersection",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直到下一个交叉路口" },
                { language: "es", content: "Hasta la próxima intersección" },
              ],
            },
          ],
        },
        {
          content: "How much clearance must you give when passing a bicycle rider on a Pennsylvania road?",
          explanation: "Pennsylvania law requires motorists to give bicycle riders at least 4 feet of clearance when passing. You may cross the center line to do so if the way is clear.",
          handbookSection: "Speed — Sharing the Road",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州道路上超越骑自行车者时，您必须保持多少间距？", explanation: "宾夕法尼亚州法律要求驾驶员在超越骑自行车者时至少保持4英尺的间距。如果道路畅通，您可以越过中心线来保持此距离。" },
            { language: "es", content: "¿Cuánto espacio debe dar al pasar a un ciclista en una carretera de Pensilvania?", explanation: "La ley de Pensilvania requiere que los conductores den a los ciclistas al menos 4 pies de espacio al pasar. Puede cruzar la línea central para hacerlo si el camino está despejado." },
          ],
          options: [
            {
              content: "At least 4 feet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少4英尺" },
                { language: "es", content: "Al menos 4 pies" },
              ],
            },
            {
              content: "At least 3 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少3英尺" },
                { language: "es", content: "Al menos 3 pies" },
              ],
            },
            {
              content: "At least 2 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少2英尺" },
                { language: "es", content: "Al menos 2 pies" },
              ],
            },
            {
              content: "At least 6 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少6英尺" },
                { language: "es", content: "Al menos 6 pies" },
              ],
            },
          ],
        },
      ],
    },
    // ─── ALCOHOL, DRUGS & DUI ─────────────────────────────────────────
    {
      name: "Alcohol, Drugs & DUI",
      nameEn: "Alcohol, Drugs & DUI",
      description: "Pennsylvania DUI laws, BAC tiers, implied consent, and penalties",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/driver-factors",
      translations: [
        { language: "zh", name: "酒精、药物与醉驾", description: "宾州DUI法律、BAC分级、默示同意及处罚" },
        { language: "es", name: "Alcohol, Drogas y Conducción Bajo Influencia", description: "Leyes DUI de Pennsylvania, niveles de BAC, consentimiento implícito y penalidades" },
      ],
      questions: [
        {
          content: "What blood alcohol content (BAC) is the legal limit for adult (21+) drivers in Pennsylvania?",
          explanation: "In Pennsylvania, a BAC of 0.08 or higher is illegal for adult drivers age 21 and over. This is the General Impairment level, and higher BAC levels trigger enhanced penalties.",
          handbookSection: "Alcohol & Drugs — BAC Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，成年（21岁及以上）驾驶员的法定血液酒精浓度（BAC）限制是多少？", explanation: "在宾夕法尼亚州，21岁及以上成年驾驶员的血液酒精浓度达到0.08或更高即属违法。这属于「一般损害」级别，更高的BAC水平将触发加重处罚。" },
            { language: "es", content: "¿Cuál es el límite legal de contenido de alcohol en sangre (BAC) para conductores adultos (21+) en Pensilvania?", explanation: "En Pensilvania, un BAC de 0.08 o superior es ilegal para conductores adultos de 21 años o más. Este es el nivel de Deterioro General, y niveles más altos de BAC conllevan sanciones más severas." },
          ],
          options: [
            {
              content: "0.08 or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.08或更高" },
                { language: "es", content: "0.08 o superior" },
              ],
            },
            {
              content: "0.10 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.10或更高" },
                { language: "es", content: "0.10 o superior" },
              ],
            },
            {
              content: "0.05 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.05或更高" },
                { language: "es", content: "0.05 o superior" },
              ],
            },
            {
              content: "0.12 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.12或更高" },
                { language: "es", content: "0.12 o superior" },
              ],
            },
          ],
        },
        {
          content: "Pennsylvania has three tiers of DUI based on BAC. What BAC range is the \"High BAC\" tier?",
          explanation: "Pennsylvania's High BAC tier covers 0.10 to 0.159 BAC. General Impairment is 0.08–0.099, and Highest BAC is 0.16 or above. Higher tiers carry more severe penalties.",
          handbookSection: "Alcohol & Drugs — DUI Tiers",
          difficulty: 3,
          translations: [
            { language: "zh", content: "宾夕法尼亚州根据BAC将DUI分为三个等级。「高BAC」等级的BAC范围是多少？", explanation: "宾夕法尼亚州的「高BAC」等级涵盖0.10至0.159的BAC。「一般损害」等级为0.08-0.099，「最高BAC」等级为0.16或以上。等级越高，处罚越严重。" },
            { language: "es", content: "Pensilvania tiene tres niveles de DUI basados en el BAC. ¿Cuál es el rango de BAC del nivel \"BAC Alto\"?", explanation: "El nivel de BAC Alto de Pensilvania cubre de 0.10 a 0.159 de BAC. El Deterioro General es de 0.08 a 0.099, y el BAC Más Alto es de 0.16 o superior. Los niveles más altos conllevan sanciones más severas." },
          ],
          options: [
            {
              content: "0.10 to 0.159 BAC",
              isCorrect: true,
              translations: [
                { language: "zh", content: "BAC 0.10至0.159" },
                { language: "es", content: "BAC de 0.10 a 0.159" },
              ],
            },
            {
              content: "0.08 to 0.099 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC 0.08至0.099" },
                { language: "es", content: "BAC de 0.08 a 0.099" },
              ],
            },
            {
              content: "0.16 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.16或更高" },
                { language: "es", content: "0.16 o superior" },
              ],
            },
            {
              content: "0.05 to 0.079 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC 0.05至0.079" },
                { language: "es", content: "BAC de 0.05 a 0.079" },
              ],
            },
          ],
        },
        {
          content: "Under Pennsylvania's Zero Tolerance Law, what BAC is illegal for drivers under age 21?",
          explanation: "Pennsylvania's Zero Tolerance Law makes any measurable amount of alcohol illegal for drivers under 21. A BAC of 0.02 or higher triggers the underage DUI law.",
          handbookSection: "Alcohol & Drugs — Zero Tolerance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "根据宾夕法尼亚州的「零容忍法」，未满21岁的驾驶员血液酒精浓度达到多少即属违法？", explanation: "宾夕法尼亚州的「零容忍法」规定，未满21岁的驾驶员体内含有任何可测量的酒精量均属违法。BAC达到0.02或更高将触发未成年人DUI法律。" },
            { language: "es", content: "Según la Ley de Tolerancia Cero de Pensilvania, ¿qué BAC es ilegal para conductores menores de 21 años?", explanation: "La Ley de Tolerancia Cero de Pensilvania hace ilegal cualquier cantidad medible de alcohol para conductores menores de 21 años. Un BAC de 0.02 o superior activa la ley de DUI para menores de edad." },
          ],
          options: [
            {
              content: "0.02 or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.02或更高" },
                { language: "es", content: "0.02 o superior" },
              ],
            },
            {
              content: "0.05 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.05或更高" },
                { language: "es", content: "0.05 o superior" },
              ],
            },
            {
              content: "0.08 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.08或更高" },
                { language: "es", content: "0.08 o superior" },
              ],
            },
            {
              content: "Any measurable amount including 0.01",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何可测量的量，包括0.01" },
                { language: "es", content: "Cualquier cantidad medible incluyendo 0.01" },
              ],
            },
          ],
        },
        {
          content: "Even before your BAC reaches 0.08, alcohol affects your driving ability. At what level does research show crash risk roughly doubles?",
          explanation: "Research shows that even at 0.04 BAC (half the legal limit), a driver is between two and seven times more likely to be in a crash. Alcohol impairs judgment and reaction time well before the legal limit.",
          handbookSection: "Alcohol & Drugs — Effects of Alcohol",
          difficulty: 2,
          translations: [
            { language: "zh", content: "即使您的BAC尚未达到0.08，酒精也会影响您的驾驶能力。研究表明，在什么水平时事故风险大约会翻倍？", explanation: "研究表明，即使BAC仅为0.04（法定限制的一半），驾驶员发生事故的可能性也会增加两到七倍。酒精在远低于法定限制时就会损害判断力和反应时间。" },
            { language: "es", content: "Incluso antes de que su BAC alcance 0.08, el alcohol afecta su capacidad de conducción. ¿En qué nivel la investigación muestra que el riesgo de accidente aproximadamente se duplica?", explanation: "La investigación muestra que incluso con un BAC de 0.04 (la mitad del límite legal), un conductor tiene entre dos y siete veces más probabilidades de sufrir un accidente. El alcohol afecta el juicio y el tiempo de reacción mucho antes del límite legal." },
          ],
          options: [
            {
              content: "At 0.04 BAC — half the legal limit",
              isCorrect: true,
              translations: [
                { language: "zh", content: "BAC为0.04时——法定限制的一半" },
                { language: "es", content: "Con un BAC de 0.04 — la mitad del límite legal" },
              ],
            },
            {
              content: "Only at the legal limit of 0.08",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在达到0.08的法定限制时" },
                { language: "es", content: "Solo en el límite legal de 0.08" },
              ],
            },
            {
              content: "At 0.10 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC为0.10时" },
                { language: "es", content: "Con un BAC de 0.10" },
              ],
            },
            {
              content: "Crash risk only increases above 0.08",
              isCorrect: false,
              translations: [
                { language: "zh", content: "事故风险仅在超过0.08时才会增加" },
                { language: "es", content: "El riesgo de accidente solo aumenta por encima de 0.08" },
              ],
            },
          ],
        },
        {
          content: "What does Pennsylvania's Implied Consent Law require of drivers?",
          explanation: "By driving in Pennsylvania, you implicitly agree to submit to chemical testing (breath, blood, or urine) if a police officer has reasonable grounds to believe you are DUI. Refusal leads to automatic license suspension.",
          handbookSection: "Alcohol & Drugs — Implied Consent",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州的「默示同意法」要求驾驶员做什么？", explanation: "在宾夕法尼亚州驾驶即表示您默示同意在警察有合理理由认为您酒驾时接受化学检测（呼气、血液或尿液）。拒绝检测将导致自动吊销驾照。" },
            { language: "es", content: "¿Qué requiere la Ley de Consentimiento Implícito de Pensilvania de los conductores?", explanation: "Al conducir en Pensilvania, usted acepta implícitamente someterse a pruebas químicas (aliento, sangre u orina) si un oficial de policía tiene motivos razonables para creer que está conduciendo bajo la influencia. La negativa conlleva la suspensión automática de la licencia." },
          ],
          options: [
            {
              content: "Drivers consent to chemical testing when an officer has reasonable grounds",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当警察有合理理由时，驾驶员同意接受化学检测" },
                { language: "es", content: "Los conductores consienten a pruebas químicas cuando un oficial tiene motivos razonables" },
              ],
            },
            {
              content: "You may refuse testing without any penalty",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您可以拒绝检测而不受任何处罚" },
                { language: "es", content: "Puede rechazar las pruebas sin ninguna sanción" },
              ],
            },
            {
              content: "Police must have a warrant before testing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "警察必须在检测前获得搜查令" },
                { language: "es", content: "La policía debe tener una orden judicial antes de realizar pruebas" },
              ],
            },
            {
              content: "Only blood tests are covered by implied consent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "默示同意仅适用于血液检测" },
                { language: "es", content: "Solo las pruebas de sangre están cubiertas por el consentimiento implícito" },
              ],
            },
          ],
        },
        {
          content: "Approximately how much of Pennsylvania traffic deaths involve alcohol-impaired drivers?",
          explanation: "According to Pennsylvania's driver manual, approximately 40% of traffic deaths involve drinking drivers. This underscores why impaired driving is such a serious issue.",
          handbookSection: "Alcohol & Drugs — Statistics",
          difficulty: 2,
          translations: [
            { language: "zh", content: "宾夕法尼亚州大约有多少交通死亡事故涉及酒后驾驶？", explanation: "根据宾夕法尼亚州驾驶员手册，大约40%的交通死亡事故涉及饮酒驾驶者。这说明了为什么酒后驾驶是一个如此严重的问题。" },
            { language: "es", content: "¿Aproximadamente qué porcentaje de las muertes de tráfico en Pensilvania involucran a conductores bajo los efectos del alcohol?", explanation: "Según el manual del conductor de Pensilvania, aproximadamente el 40% de las muertes de tráfico involucran a conductores que han bebido. Esto subraya por qué la conducción bajo los efectos del alcohol es un problema tan grave." },
          ],
          options: [
            {
              content: "About 40%",
              isCorrect: true,
              translations: [
                { language: "zh", content: "大约40%" },
                { language: "es", content: "Aproximadamente 40%" },
              ],
            },
            {
              content: "About 10%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大约10%" },
                { language: "es", content: "Aproximadamente 10%" },
              ],
            },
            {
              content: "About 25%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大约25%" },
                { language: "es", content: "Aproximadamente 25%" },
              ],
            },
            {
              content: "About 60%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大约60%" },
                { language: "es", content: "Aproximadamente 60%" },
              ],
            },
          ],
        },
        {
          content: "Being awake for 18 consecutive hours impairs your driving to a level equivalent to a BAC of approximately:",
          explanation: "Research in Pennsylvania's manual shows that being awake for 18 hours is equivalent to a BAC of approximately 0.05, and being awake for 24 hours is equivalent to 0.10 BAC. Drowsy driving is dangerous.",
          handbookSection: "Alcohol & Drugs — Drowsy Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "连续清醒18小时会使您的驾驶能力受损，相当于大约多少的BAC水平？", explanation: "宾夕法尼亚州手册中的研究表明，清醒18小时相当于大约0.05的BAC，清醒24小时相当于0.10的BAC。疲劳驾驶是危险的。" },
            { language: "es", content: "Estar despierto durante 18 horas consecutivas deteriora su conducción a un nivel equivalente a un BAC de aproximadamente:", explanation: "La investigación en el manual de Pensilvania muestra que estar despierto durante 18 horas equivale a un BAC de aproximadamente 0.05, y estar despierto durante 24 horas equivale a un BAC de 0.10. Conducir con somnolencia es peligroso." },
          ],
          options: [
            {
              content: "0.05 BAC",
              isCorrect: true,
              translations: [
                { language: "zh", content: "BAC 0.05" },
                { language: "es", content: "BAC de 0.05" },
              ],
            },
            {
              content: "0.02 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC 0.02" },
                { language: "es", content: "BAC de 0.02" },
              ],
            },
            {
              content: "0.08 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC 0.08" },
                { language: "es", content: "BAC de 0.08" },
              ],
            },
            {
              content: "0.10 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC 0.10" },
                { language: "es", content: "BAC de 0.10" },
              ],
            },
          ],
        },
        {
          content: "Which of the following is a primary offense under Pennsylvania's anti-texting law?",
          explanation: "Texting while driving is a primary offense in Pennsylvania. Officers can stop you solely for texting while driving. The fine is $50. It applies to all interactive wireless communication devices.",
          handbookSection: "Alcohol & Drugs — Distracted Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "以下哪项是宾夕法尼亚州反发短信法律规定的主要违法行为？", explanation: "在宾夕法尼亚州，驾驶时发短信是主要违法行为。警察可以仅因驾驶时发短信而拦停您。罚款为50美元。该法律适用于所有交互式无线通信设备。" },
            { language: "es", content: "¿Cuál de las siguientes es una infracción primaria según la ley anti-mensajes de texto de Pensilvania?", explanation: "Enviar mensajes de texto mientras conduce es una infracción primaria en Pensilvania. Los oficiales pueden detenerlo únicamente por enviar mensajes de texto mientras conduce. La multa es de $50. Se aplica a todos los dispositivos de comunicación inalámbrica interactivos." },
          ],
          options: [
            {
              content: "Texting while driving — $50 fine, primary offense",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾驶时发短信——罚款50美元，主要违法行为" },
                { language: "es", content: "Enviar mensajes de texto mientras conduce — multa de $50, infracción primaria" },
              ],
            },
            {
              content: "Adjusting the radio while driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶时调节收音机" },
                { language: "es", content: "Ajustar la radio mientras conduce" },
              ],
            },
            {
              content: "Eating while driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶时吃东西" },
                { language: "es", content: "Comer mientras conduce" },
              ],
            },
            {
              content: "Hands-free phone conversations",
              isCorrect: false,
              translations: [
                { language: "zh", content: "免提电话通话" },
                { language: "es", content: "Conversaciones telefónicas con manos libres" },
              ],
            },
          ],
        },
        {
          content: "A safe drinking guideline (for of-age drivers who plan to drive) is:",
          explanation: "Pennsylvania's manual states: do not drink more than one drink per hour if you plan to drive. The body processes approximately one drink per hour. However, the safest choice is not to drink before driving at all.",
          handbookSection: "Alcohol & Drugs — Effects of Alcohol",
          difficulty: 2,
          translations: [
            { language: "zh", content: "对于计划驾驶的成年驾驶员，安全饮酒指南是：", explanation: "宾夕法尼亚州手册规定：如果您计划驾驶，每小时饮酒不要超过一杯。人体大约每小时代谢一杯酒。然而，最安全的选择是驾驶前完全不饮酒。" },
            { language: "es", content: "Una guía de consumo seguro de alcohol (para conductores en edad legal que planean conducir) es:", explanation: "El manual de Pensilvania establece: no beba más de una bebida por hora si planea conducir. El cuerpo procesa aproximadamente una bebida por hora. Sin embargo, la opción más segura es no beber nada antes de conducir." },
          ],
          options: [
            {
              content: "No more than one drink per hour if you plan to drive",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果您计划驾驶，每小时不超过一杯" },
                { language: "es", content: "No más de una bebida por hora si planea conducir" },
              ],
            },
            {
              content: "Two drinks per hour is acceptable for most adults",
              isCorrect: false,
              translations: [
                { language: "zh", content: "对于大多数成年人，每小时两杯是可以接受的" },
                { language: "es", content: "Dos bebidas por hora es aceptable para la mayoría de los adultos" },
              ],
            },
            {
              content: "Only beer and wine are safe to drink before driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶前只有啤酒和葡萄酒是安全的" },
                { language: "es", content: "Solo la cerveza y el vino son seguros para beber antes de conducir" },
              ],
            },
            {
              content: "As long as you feel fine, there is no safe drinking limit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要您感觉良好，就没有安全饮酒限制" },
                { language: "es", content: "Mientras se sienta bien, no hay límite seguro de consumo" },
              ],
            },
          ],
        },
        {
          content: "Can you be charged with DUI in Pennsylvania for driving while impaired by a legally prescribed medication?",
          explanation: "Yes. Pennsylvania's DUI law applies to any substance that impairs your ability to drive — including legally prescribed drugs, over-the-counter medications, or any controlled substance. Being prescribed the drug is not a defense to DUI.",
          handbookSection: "Alcohol & Drugs — Drug Impairment",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，因服用合法处方药物而导致驾驶能力受损，您是否会被指控DUI？", explanation: "是的。宾夕法尼亚州的DUI法律适用于任何损害您驾驶能力的物质——包括合法处方药物、非处方药物或任何受管制物质。药物是处方开具的这一事实不能作为DUI的辩护理由。" },
            { language: "es", content: "¿Puede ser acusado de DUI en Pensilvania por conducir bajo los efectos de un medicamento legalmente recetado?", explanation: "Sí. La ley de DUI de Pensilvania se aplica a cualquier sustancia que afecte su capacidad de conducir, incluyendo medicamentos recetados legalmente, medicamentos de venta libre o cualquier sustancia controlada. Tener una receta para el medicamento no es una defensa contra el DUI." },
          ],
          options: [
            {
              content: "Yes — impairment by any substance, including prescriptions, can result in DUI",
              isCorrect: true,
              translations: [
                { language: "zh", content: "是的——任何物质（包括处方药）导致的损害都可能导致DUI" },
                { language: "es", content: "Sí — el deterioro por cualquier sustancia, incluyendo recetas, puede resultar en DUI" },
              ],
            },
            {
              content: "No — legally prescribed medications are exempt from DUI law",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不会——合法处方药物不受DUI法律约束" },
                { language: "es", content: "No — los medicamentos legalmente recetados están exentos de la ley de DUI" },
              ],
            },
            {
              content: "Only if the medication is a controlled substance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当该药物是受管制物质时" },
                { language: "es", content: "Solo si el medicamento es una sustancia controlada" },
              ],
            },
            {
              content: "Only if the medication caused you to exceed 0.08 BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当该药物导致您的BAC超过0.08时" },
                { language: "es", content: "Solo si el medicamento le hizo exceder el BAC de 0.08" },
              ],
            },
          ],
        },
      ],
    },
    // ─── DRIVER LICENSE & PA LAWS ─────────────────────────────────────────
    {
      name: "Driver License & PA Laws",
      nameEn: "Driver License & PA Laws",
      description: "License requirements, GDL rules, points system, and Pennsylvania-specific laws",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/applying-for-a-learners-permit",
      translations: [
        { language: "zh", name: "驾驶执照与宾州法规", description: "驾照要求、GDL规则、积分制度及宾州特定法规" },
        { language: "es", name: "Licencia de Conducir y Leyes de Pennsylvania", description: "Requisitos de licencia, reglas GDL, sistema de puntos y leyes específicas de Pennsylvania" },
      ],
      questions: [
        {
          content: "How many questions are on the Pennsylvania knowledge test, and what is the passing score?",
          explanation: "The Pennsylvania knowledge test consists of 18 multiple-choice questions. You must correctly answer at least 15 questions (83%) to pass the test.",
          handbookSection: "Driver License — Knowledge Test",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州笔试有多少道题目，及格分数是多少？", explanation: "宾夕法尼亚州笔试包含18道选择题。您必须至少答对15题（83%）才能通过考试。" },
            { language: "es", content: "¿Cuántas preguntas tiene el examen de conocimientos de Pennsylvania y cuál es la puntuación para aprobar?", explanation: "El examen de conocimientos de Pennsylvania consta de 18 preguntas de opción múltiple. Debe responder correctamente al menos 15 preguntas (83%) para aprobar el examen." },
          ],
          options: [
            {
              content: "18 questions; must answer at least 15 correct (83%)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "18道题；至少答对15题（83%）" },
                { language: "es", content: "18 preguntas; debe responder al menos 15 correctamente (83%)" },
              ],
            },
            {
              content: "20 questions; must answer at least 16 correct (80%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20道题；至少答对16题（80%）" },
                { language: "es", content: "20 preguntas; debe responder al menos 16 correctamente (80%)" },
              ],
            },
            {
              content: "50 questions; must answer at least 40 correct (80%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "50道题；至少答对40题（80%）" },
                { language: "es", content: "50 preguntas; debe responder al menos 40 correctamente (80%)" },
              ],
            },
            {
              content: "25 questions; must answer at least 20 correct (80%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "25道题；至少答对20题（80%）" },
                { language: "es", content: "25 preguntas; debe responder al menos 20 correctamente (80%)" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum age to apply for a learner's permit in Pennsylvania?",
          explanation: "In Pennsylvania, you must be at least 16 years old to apply for a learner's permit. You will need to pass a vision screening and a knowledge test.",
          handbookSection: "Driver License — Learner's Permit",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州申请学习驾驶许可证的最低年龄是多少？", explanation: "在宾夕法尼亚州，您必须年满16岁才能申请学习驾驶许可证。您需要通过视力检查和笔试。" },
            { language: "es", content: "¿Cuál es la edad mínima para solicitar un permiso de aprendizaje en Pennsylvania?", explanation: "En Pennsylvania, debe tener al menos 16 años para solicitar un permiso de aprendizaje. Deberá aprobar un examen de visión y un examen de conocimientos." },
          ],
          options: [
            {
              content: "16 years old",
              isCorrect: true,
              translations: [
                { language: "zh", content: "16岁" },
                { language: "es", content: "16 años" },
              ],
            },
            {
              content: "15 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "15岁" },
                { language: "es", content: "15 años" },
              ],
            },
            {
              content: "17 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "17岁" },
                { language: "es", content: "17 años" },
              ],
            },
            {
              content: "14 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "14岁" },
                { language: "es", content: "14 años" },
              ],
            },
          ],
        },
        {
          content: "How many hours of supervised driving must Pennsylvania teen drivers complete before a road test?",
          explanation: "Pennsylvania teens must complete at least 65 hours of supervised driving, including at least 10 hours at night and 5 hours in inclement weather, before taking the road test.",
          handbookSection: "Driver License — GDL Requirements",
          difficulty: 2,
          translations: [
            { language: "zh", content: "宾夕法尼亚州青少年驾驶员在路考前必须完成多少小时的监督驾驶？", explanation: "宾夕法尼亚州青少年在参加路考前必须完成至少65小时的监督驾驶，其中包括至少10小时夜间驾驶和5小时恶劣天气驾驶。" },
            { language: "es", content: "¿Cuántas horas de conducción supervisada deben completar los conductores adolescentes de Pennsylvania antes del examen de conducir?", explanation: "Los adolescentes de Pennsylvania deben completar al menos 65 horas de conducción supervisada, incluyendo al menos 10 horas de noche y 5 horas en condiciones climáticas adversas, antes de tomar el examen de conducir." },
          ],
          options: [
            {
              content: "65 hours (including 10 at night and 5 in bad weather)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "65小时（包括10小时夜间驾驶和5小时恶劣天气驾驶）" },
                { language: "es", content: "65 horas (incluyendo 10 de noche y 5 en mal tiempo)" },
              ],
            },
            {
              content: "50 hours (including 10 at night)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "50小时（包括10小时夜间驾驶）" },
                { language: "es", content: "50 horas (incluyendo 10 de noche)" },
              ],
            },
            {
              content: "40 hours (no nighttime requirement)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "40小时（无夜间驾驶要求）" },
                { language: "es", content: "40 horas (sin requisito nocturno)" },
              ],
            },
            {
              content: "30 hours (including 5 at night)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "30小时（包括5小时夜间驾驶）" },
                { language: "es", content: "30 horas (incluyendo 5 de noche)" },
              ],
            },
          ],
        },
        {
          content: "Under Pennsylvania's GDL, what are the nighttime driving restrictions for junior drivers?",
          explanation: "Junior license holders in Pennsylvania may not drive between 11 p.m. and 5 a.m. Exceptions include traveling to/from employment, school activities, or volunteer emergency services.",
          handbookSection: "Driver License — GDL Rules",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据宾夕法尼亚州的「分级驾照制度」，初级驾照持有人有哪些夜间驾驶限制？", explanation: "宾夕法尼亚州初级驾照持有人不得在晚上11点至凌晨5点之间驾车。例外情况包括往返工作、学校活动或志愿紧急服务。" },
            { language: "es", content: "Según el sistema GDL de Pennsylvania, ¿cuáles son las restricciones de conducción nocturna para conductores con licencia junior?", explanation: "Los titulares de licencia junior en Pennsylvania no pueden conducir entre las 11 p.m. y las 5 a.m. Las excepciones incluyen viajes hacia/desde el empleo, actividades escolares o servicios de emergencia voluntarios." },
          ],
          options: [
            {
              content: "No driving between 11 p.m. and 5 a.m. (with limited exceptions)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "晚上11点至凌晨5点之间禁止驾车（有限例外情况除外）" },
                { language: "es", content: "No conducir entre las 11 p.m. y las 5 a.m. (con excepciones limitadas)" },
              ],
            },
            {
              content: "No driving between midnight and 6 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "午夜至早上6点之间禁止驾车" },
                { language: "es", content: "No conducir entre la medianoche y las 6 a.m." },
              ],
            },
            {
              content: "No nighttime restriction if accompanied by a licensed adult",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如有持照成年人陪同则无夜间限制" },
                { language: "es", content: "Sin restricción nocturna si está acompañado por un adulto con licencia" },
              ],
            },
            {
              content: "No driving between 10 p.m. and 6 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "晚上10点至早上6点之间禁止驾车" },
                { language: "es", content: "No conducir entre las 10 p.m. y las 6 a.m." },
              ],
            },
          ],
        },
        {
          content: "What happens to a Pennsylvania driver's license when they accumulate 11 or more points?",
          explanation: "When a Pennsylvania driver accumulates 11 or more points on their record, their license is automatically suspended. The length of suspension depends on the number of points and prior suspensions.",
          handbookSection: "Driver License — Points System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当宾夕法尼亚州驾驶员累积11分或以上时，驾照会怎样？", explanation: "当宾夕法尼亚州驾驶员记录累积11分或以上时，驾照将被自动吊销。吊销时长取决于分数和之前的吊销记录。" },
            { language: "es", content: "¿Qué sucede con la licencia de conducir de Pennsylvania cuando un conductor acumula 11 o más puntos?", explanation: "Cuando un conductor de Pennsylvania acumula 11 o más puntos en su registro, su licencia se suspende automáticamente. La duración de la suspensión depende del número de puntos y suspensiones previas." },
          ],
          options: [
            {
              content: "License is automatically suspended",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾照自动吊销" },
                { language: "es", content: "La licencia se suspende automáticamente" },
              ],
            },
            {
              content: "Driver receives a warning letter only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶员仅收到警告信" },
                { language: "es", content: "El conductor solo recibe una carta de advertencia" },
              ],
            },
            {
              content: "Driver must take a defensive driving course",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶员必须参加防御性驾驶课程" },
                { language: "es", content: "El conductor debe tomar un curso de manejo defensivo" },
              ],
            },
            {
              content: "License is revoked permanently",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾照被永久吊销" },
                { language: "es", content: "La licencia se revoca permanentemente" },
              ],
            },
          ],
        },
        {
          content: "How many points are removed from a Pennsylvania driving record for every 12 consecutive months without a violation or suspension?",
          explanation: "In Pennsylvania, 3 points are removed from a driver's record for every 12 consecutive months in which no violations or suspensions occur. This rewards safe driving behavior.",
          handbookSection: "Driver License — Points System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，连续12个月没有违规或吊销记录可以从驾驶记录中扣除多少分？", explanation: "在宾夕法尼亚州，每连续12个月没有违规或吊销记录，可从驾驶员记录中扣除3分。这是对安全驾驶行为的奖励。" },
            { language: "es", content: "¿Cuántos puntos se eliminan del registro de conducir de Pennsylvania por cada 12 meses consecutivos sin una infracción o suspensión?", explanation: "En Pennsylvania, se eliminan 3 puntos del registro de un conductor por cada 12 meses consecutivos en los que no ocurran infracciones o suspensiones. Esto recompensa el comportamiento de conducción segura." },
          ],
          options: [
            {
              content: "3 points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "3分" },
                { language: "es", content: "3 puntos" },
              ],
            },
            {
              content: "6 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "6分" },
                { language: "es", content: "6 puntos" },
              ],
            },
            {
              content: "2 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "2分" },
                { language: "es", content: "2 puntos" },
              ],
            },
            {
              content: "5 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "5分" },
                { language: "es", content: "5 puntos" },
              ],
            },
          ],
        },
        {
          content: "Pennsylvania requires all drivers and front-seat passengers to wear seat belts. What about rear-seat passengers?",
          explanation: "In Pennsylvania, all passengers ages 8 through 17 must wear a seat belt regardless of seating position. Adults 18 and older are only required to wear seat belts in the front seat.",
          handbookSection: "Driver License — Seat Belt Laws",
          difficulty: 2,
          translations: [
            { language: "zh", content: "宾夕法尼亚州要求所有驾驶员和前排乘客系安全带。后排乘客有何规定？", explanation: "在宾夕法尼亚州，所有8至17岁的乘客无论坐在哪个位置都必须系安全带。18岁及以上的成年人仅在前排座位时需要系安全带。" },
            { language: "es", content: "Pennsylvania requiere que todos los conductores y pasajeros del asiento delantero usen cinturones de seguridad. ¿Qué pasa con los pasajeros del asiento trasero?", explanation: "En Pennsylvania, todos los pasajeros de 8 a 17 años deben usar cinturón de seguridad independientemente de la posición del asiento. Los adultos de 18 años o más solo están obligados a usar cinturones de seguridad en el asiento delantero." },
          ],
          options: [
            {
              content: "All passengers ages 8-17 must wear seat belts in any seat",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有8至17岁乘客在任何座位都必须系安全带" },
                { language: "es", content: "Todos los pasajeros de 8 a 17 años deben usar cinturones en cualquier asiento" },
              ],
            },
            {
              content: "All passengers in all seats must wear seat belts",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有座位的所有乘客都必须系安全带" },
                { language: "es", content: "Todos los pasajeros en todos los asientos deben usar cinturones" },
              ],
            },
            {
              content: "No rear-seat requirement for anyone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "后排乘客无任何要求" },
                { language: "es", content: "Sin requisito para el asiento trasero para nadie" },
              ],
            },
            {
              content: "Only children under 8 require restraints in the rear",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅8岁以下儿童在后排需要使用约束装置" },
                { language: "es", content: "Solo los niños menores de 8 años requieren sistemas de retención en la parte trasera" },
              ],
            },
          ],
        },
        {
          content: "What child restraint is required for children under age 4 in Pennsylvania?",
          explanation: "Children under age 4 in Pennsylvania must be in a federally approved child safety seat. Children under age 2 must be in a rear-facing seat, and rear-facing seats must never be placed in front seats with active airbags.",
          handbookSection: "Driver License — Child Restraints",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州对4岁以下儿童有什么儿童约束装置要求？", explanation: "在宾夕法尼亚州，4岁以下儿童必须使用联邦批准的儿童安全座椅。2岁以下儿童必须使用后向式座椅，且后向式座椅绝不能放置在配有主动安全气囊的前排座位上。" },
            { language: "es", content: "¿Qué sistema de retención infantil se requiere para niños menores de 4 años en Pennsylvania?", explanation: "Los niños menores de 4 años en Pennsylvania deben estar en un asiento de seguridad infantil aprobado federalmente. Los niños menores de 2 años deben estar en un asiento orientado hacia atrás, y los asientos orientados hacia atrás nunca deben colocarse en asientos delanteros con bolsas de aire activas." },
          ],
          options: [
            {
              content: "A federally approved child safety seat (rear-facing for under age 2)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "联邦批准的儿童安全座椅（2岁以下须使用后向式）" },
                { language: "es", content: "Un asiento de seguridad infantil aprobado federalmente (orientado hacia atrás para menores de 2 años)" },
              ],
            },
            {
              content: "A seat belt alone is sufficient",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅使用安全带即可" },
                { language: "es", content: "Un cinturón de seguridad solo es suficiente" },
              ],
            },
            {
              content: "Any child restraint the parent chooses",
              isCorrect: false,
              translations: [
                { language: "zh", content: "家长选择的任何儿童约束装置" },
                { language: "es", content: "Cualquier sistema de retención infantil que elija el padre" },
              ],
            },
            {
              content: "Car seats are only required for infants under 1 year",
              isCorrect: false,
              translations: [
                { language: "zh", content: "儿童安全座椅仅适用于1岁以下婴儿" },
                { language: "es", content: "Los asientos de auto solo se requieren para bebés menores de 1 año" },
              ],
            },
          ],
        },
        {
          content: "Within how many days must you notify PennDOT of an address or name change?",
          explanation: "Pennsylvania law requires you to notify PennDOT within 15 days of any change of address or name. This applies even if you are moving out of state.",
          handbookSection: "Driver License — Record Maintenance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "您必须在多少天内通知宾夕法尼亚州交通部（PennDOT）地址或姓名变更？", explanation: "宾夕法尼亚州法律要求您在地址或姓名变更后15天内通知宾夕法尼亚州交通部。即使您搬迁出州也适用此规定。" },
            { language: "es", content: "¿Dentro de cuántos días debe notificar a PennDOT sobre un cambio de dirección o nombre?", explanation: "La ley de Pennsylvania requiere que notifique a PennDOT dentro de los 15 días de cualquier cambio de dirección o nombre. Esto aplica incluso si se muda fuera del estado." },
          ],
          options: [
            {
              content: "Within 15 days",
              isCorrect: true,
              translations: [
                { language: "zh", content: "15天内" },
                { language: "es", content: "Dentro de 15 días" },
              ],
            },
            {
              content: "Within 30 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "30天内" },
                { language: "es", content: "Dentro de 30 días" },
              ],
            },
            {
              content: "Within 60 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "60天内" },
                { language: "es", content: "Dentro de 60 días" },
              ],
            },
            {
              content: "Within 10 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "10天内" },
                { language: "es", content: "Dentro de 10 días" },
              ],
            },
          ],
        },
        {
          content: "What additional driving restriction applies to a teen with a junior license if they accumulate 6 or more points?",
          explanation: "For Pennsylvania teen drivers with a junior license, accumulating 6 or more points — or speeding more than 26 mph over the limit — results in a 90-day license suspension for the first offense, 120 days for each subsequent offense.",
          handbookSection: "Driver License — Junior License Rules",
          difficulty: 3,
          translations: [
            { language: "zh", content: "持有初级驾照的青少年如果累积6分或以上，将面临什么额外的驾驶限制？", explanation: "对于持有初级驾照的宾夕法尼亚州青少年驾驶员，累积6分或以上，或超速超过限速26英里/小时以上，首次违规将被吊销驾照90天，此后每次违规吊销120天。" },
            { language: "es", content: "¿Qué restricción de conducción adicional se aplica a un adolescente con licencia junior si acumula 6 o más puntos?", explanation: "Para los conductores adolescentes de Pennsylvania con licencia junior, acumular 6 o más puntos — o exceder el límite de velocidad por más de 26 mph — resulta en una suspensión de licencia de 90 días para la primera infracción, 120 días para cada infracción subsiguiente." },
          ],
          options: [
            {
              content: "90-day suspension for first offense; 120 days for each subsequent offense",
              isCorrect: true,
              translations: [
                { language: "zh", content: "首次违规吊销90天；此后每次违规吊销120天" },
                { language: "es", content: "Suspensión de 90 días para la primera infracción; 120 días para cada infracción subsiguiente" },
              ],
            },
            {
              content: "30-day suspension only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅吊销30天" },
                { language: "es", content: "Suspensión de 30 días solamente" },
              ],
            },
            {
              content: "Mandatory defensive driving school — no suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "强制参加防御性驾驶学校——不吊销" },
                { language: "es", content: "Escuela de manejo defensivo obligatoria — sin suspensión" },
              ],
            },
            {
              content: "Permanent revocation of junior license",
              isCorrect: false,
              translations: [
                { language: "zh", content: "永久吊销初级驾照" },
                { language: "es", content: "Revocación permanente de la licencia junior" },
              ],
            },
          ],
        },
      ],
    },
    // ─── SAFE DRIVING & SHARING THE ROAD ─────────────────────────────────────────
    {
      name: "Safe Driving & Sharing the Road",
      nameEn: "Safe Driving & Sharing the Road",
      description: "Defensive driving, vehicle safety, sharing the road, and crash procedures",
      handbookUrl: "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/choosing-safety-first",
      translations: [
        { language: "zh", name: "安全驾驶与共用道路", description: "防御性驾驶、车辆安全、共用道路及事故处理" },
        { language: "es", name: "Manejo Seguro y Compartir la Vía", description: "Manejo defensivo, seguridad vehicular, compartir la vía y procedimientos en accidentes" },
      ],
      questions: [
        {
          content: "What information must you exchange after a traffic crash in Pennsylvania?",
          explanation: "After a crash, you must exchange your name, address, vehicle registration, and driver's license number with the other driver. You must also show your insurance information. Render aid to injured persons.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州发生交通事故后，您必须交换哪些信息？", explanation: "发生事故后，您必须与对方驾驶员交换您的姓名、地址、车辆登记信息和驾照号码。您还必须出示保险信息。同时要对伤者进行救助。" },
            { language: "es", content: "¿Qué información debe intercambiar después de un accidente de tránsito en Pensilvania?", explanation: "Después de un accidente, debe intercambiar su nombre, dirección, registro del vehículo y número de licencia de conducir con el otro conductor. También debe mostrar su información de seguro. Preste ayuda a las personas heridas." },
          ],
          options: [
            {
              content: "Name, address, registration, license number, and insurance information",
              isCorrect: true,
              translations: [
                { language: "zh", content: "姓名、地址、车辆登记信息、驾照号码和保险信息" },
                { language: "es", content: "Nombre, dirección, registro, número de licencia e información del seguro" },
              ],
            },
            {
              content: "Only your insurance card is needed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只需要出示保险卡" },
                { language: "es", content: "Solo se necesita su tarjeta de seguro" },
              ],
            },
            {
              content: "Phone number and verbal description of the crash",
              isCorrect: false,
              translations: [
                { language: "zh", content: "电话号码和对事故的口头描述" },
                { language: "es", content: "Número de teléfono y descripción verbal del accidente" },
              ],
            },
            {
              content: "Only your name — the police handle the rest",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只需要提供姓名——其余由警察处理" },
                { language: "es", content: "Solo su nombre — la policía se encarga del resto" },
              ],
            },
          ],
        },
        {
          content: "When are you required to use your headlights in Pennsylvania?",
          explanation: "Pennsylvania requires headlights from sunset to sunrise, and any time conditions such as rain, snow, or fog reduce visibility. Headlights must also be on in all posted work zones.",
          handbookSection: "Safe Driving — Headlight Laws",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在宾夕法尼亚州，何时必须使用车头灯？", explanation: "宾夕法尼亚州要求从日落到日出期间必须开启车头灯，以及在雨、雪或雾等降低能见度的条件下也必须开灯。在所有标示的施工区域内也必须开启车头灯。" },
            { language: "es", content: "¿Cuándo debe usar sus faros en Pensilvania?", explanation: "Pensilvania requiere faros desde el atardecer hasta el amanecer, y en cualquier momento cuando condiciones como lluvia, nieve o niebla reduzcan la visibilidad. Los faros también deben estar encendidos en todas las zonas de trabajo señalizadas." },
          ],
          options: [
            {
              content: "Sunset to sunrise, during precipitation, and in all posted work zones",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从日落到日出、降水期间以及所有标示的施工区域内" },
                { language: "es", content: "Desde el atardecer hasta el amanecer, durante precipitaciones y en todas las zonas de trabajo señalizadas" },
              ],
            },
            {
              content: "Only from sunset to sunrise",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅从日落到日出" },
                { language: "es", content: "Solo desde el atardecer hasta el amanecer" },
              ],
            },
            {
              content: "Only when visibility drops below 500 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当能见度低于500英尺时" },
                { language: "es", content: "Solo cuando la visibilidad baja a menos de 500 pies" },
              ],
            },
            {
              content: "Headlights are optional during daylight hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "白天开启车头灯是可选的" },
                { language: "es", content: "Los faros son opcionales durante las horas del día" },
              ],
            },
          ],
        },
        {
          content: "What must you do when a vehicle approaching from behind is attempting to pass you?",
          explanation: "When a vehicle signals to pass you, you should keep your speed steady or slow down slightly to help them complete the pass safely. Do not speed up while being passed.",
          handbookSection: "Safe Driving — Being Passed",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当后方车辆试图超越您时，您应该怎么做？", explanation: "当车辆示意要超越您时，您应保持稳定车速或稍微减速，以帮助他们安全完成超车。在被超车时不要加速。" },
            { language: "es", content: "¿Qué debe hacer cuando un vehículo que viene detrás intenta rebasarlo?", explanation: "Cuando un vehículo señala que va a rebasarlo, debe mantener su velocidad constante o reducirla ligeramente para ayudarlos a completar el rebase de manera segura. No acelere mientras lo están rebasando." },
          ],
          options: [
            {
              content: "Keep a steady speed or slow down slightly to help them pass safely",
              isCorrect: true,
              translations: [
                { language: "zh", content: "保持稳定车速或稍微减速以帮助他们安全超车" },
                { language: "es", content: "Mantener una velocidad constante o reducirla ligeramente para ayudarlos a rebasar de forma segura" },
              ],
            },
            {
              content: "Speed up to maintain your position on the road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速以保持您在道路上的位置" },
                { language: "es", content: "Acelerar para mantener su posición en la carretera" },
              ],
            },
            {
              content: "Move to the center of the lane to block the pass",
              isCorrect: false,
              translations: [
                { language: "zh", content: "移到车道中央阻止超车" },
                { language: "es", content: "Moverse al centro del carril para bloquear el rebase" },
              ],
            },
            {
              content: "Flash your hazard lights to signal you are not being passed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "闪烁危险警示灯示意您不会被超车" },
                { language: "es", content: "Encender las luces de emergencia para señalar que no será rebasado" },
              ],
            },
          ],
        },
        {
          content: "When should you use your high-beam headlights?",
          explanation: "Use high beams on rural roads or wherever you need maximum visibility and there is no oncoming traffic. Dim to low beams within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle.",
          handbookSection: "Safe Driving — Headlight Usage",
          difficulty: 2,
          translations: [
            { language: "zh", content: "何时应该使用远光灯？", explanation: "在乡村道路上或任何需要最大能见度且没有对向来车的地方使用远光灯。在距离对向来车500英尺以内和跟随前车300英尺以内时，应切换为近光灯。" },
            { language: "es", content: "¿Cuándo debe usar las luces altas?", explanation: "Use las luces altas en carreteras rurales o donde necesite máxima visibilidad y no haya tráfico en sentido contrario. Cambie a luces bajas a menos de 500 pies de un vehículo que viene en sentido contrario y a menos de 300 pies cuando siga a otro vehículo." },
          ],
          options: [
            {
              content: "When no oncoming traffic; dim within 500 feet of oncoming vehicles",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在没有对向来车时使用；在距对向来车500英尺以内时切换近光灯" },
                { language: "es", content: "Cuando no hay tráfico en sentido contrario; cambiar a bajas a menos de 500 pies de vehículos que vienen" },
              ],
            },
            {
              content: "At all times in rural areas",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在乡村地区始终使用" },
                { language: "es", content: "En todo momento en áreas rurales" },
              ],
            },
            {
              content: "Only when driving faster than 45 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在车速超过45英里/小时时使用" },
                { language: "es", content: "Solo cuando conduce a más de 45 mph" },
              ],
            },
            {
              content: "During rain and fog for better visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在雨天和雾天使用以获得更好的能见度" },
                { language: "es", content: "Durante lluvia y niebla para mejor visibilidad" },
              ],
            },
          ],
        },
        {
          content: "What is the proper technique for dealing with a skid on a slippery surface?",
          explanation: "If your vehicle skids, ease off the gas pedal and do not hit the brakes hard. Steer in the direction you want the vehicle to go. This technique is sometimes called steering into the skid.",
          handbookSection: "Safe Driving — Skid Recovery",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在湿滑路面上处理车辆打滑的正确技巧是什么？", explanation: "如果车辆打滑，松开油门踏板，不要猛踩刹车。将方向盘转向您希望车辆行驶的方向。这种技术有时被称为「顺着打滑方向转向」。" },
            { language: "es", content: "¿Cuál es la técnica adecuada para manejar un derrape en una superficie resbaladiza?", explanation: "Si su vehículo derrapa, suelte el acelerador y no frene bruscamente. Gire el volante en la dirección en la que desea que vaya el vehículo. Esta técnica a veces se llama girar en la dirección del derrape." },
          ],
          options: [
            {
              content: "Ease off the gas and steer in the direction you want to go",
              isCorrect: true,
              translations: [
                { language: "zh", content: "松开油门并将方向盘转向您希望行驶的方向" },
                { language: "es", content: "Soltar el acelerador y girar en la dirección en la que desea ir" },
              ],
            },
            {
              content: "Apply the brakes firmly to stop the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "用力踩刹车以停止打滑" },
                { language: "es", content: "Aplicar los frenos firmemente para detener el derrape" },
              ],
            },
            {
              content: "Press the accelerator to power out of the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "踩油门加速驶出打滑状态" },
                { language: "es", content: "Presionar el acelerador para salir del derrape con potencia" },
              ],
            },
            {
              content: "Turn the wheel sharply in the opposite direction of the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "将方向盘急转向打滑的反方向" },
                { language: "es", content: "Girar el volante bruscamente en la dirección opuesta al derrape" },
              ],
            },
          ],
        },
        {
          content: "When following a large truck or bus, why should you stay back farther than you would for a passenger car?",
          explanation: "Large trucks have extensive blind spots. If you cannot see the truck driver's mirrors, they cannot see you. Larger vehicles also require more stopping distance, and debris or tire blowouts are more common.",
          handbookSection: "Safe Driving — Sharing the Road with Trucks",
          difficulty: 1,
          translations: [
            { language: "zh", content: "跟随大型卡车或公共汽车时，为什么应该比跟随普通轿车时保持更远的距离？", explanation: "大型卡车有很大的盲区。如果您看不到卡车司机的后视镜，他们也看不到您。大型车辆还需要更长的制动距离，而且更容易出现碎片飞溅或轮胎爆裂的情况。" },
            { language: "es", content: "Al seguir un camión grande o autobús, ¿por qué debe mantener más distancia que con un automóvil de pasajeros?", explanation: "Los camiones grandes tienen puntos ciegos extensos. Si no puede ver los espejos del conductor del camión, ellos no pueden verlo a usted. Los vehículos más grandes también requieren mayor distancia de frenado, y los escombros o reventones de llantas son más comunes." },
          ],
          options: [
            {
              content: "Large trucks have extensive blind spots and require longer stopping distances",
              isCorrect: true,
              translations: [
                { language: "zh", content: "大型卡车有很大的盲区且需要更长的制动距离" },
                { language: "es", content: "Los camiones grandes tienen puntos ciegos extensos y requieren mayores distancias de frenado" },
              ],
            },
            {
              content: "Trucks have better brakes so you need more space behind them",
              isCorrect: false,
              translations: [
                { language: "zh", content: "卡车的刹车更好，所以您需要在它们后面保持更多空间" },
                { language: "es", content: "Los camiones tienen mejores frenos, por lo que necesita más espacio detrás de ellos" },
              ],
            },
            {
              content: "You only need extra space when it is raining",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只有在下雨时才需要额外的空间" },
                { language: "es", content: "Solo necesita espacio extra cuando está lloviendo" },
              ],
            },
            {
              content: "Pennsylvania law requires 10 car lengths behind any truck",
              isCorrect: false,
              translations: [
                { language: "zh", content: "宾夕法尼亚州法律要求在任何卡车后面保持10个车身的距离" },
                { language: "es", content: "La ley de Pensilvania requiere 10 largos de auto detrás de cualquier camión" },
              ],
            },
          ],
        },
        {
          content: "What is the \"Dutch Reach\" method for opening a car door?",
          explanation: "The Dutch Reach is a method of opening your car door by reaching across with the far hand. This causes you to naturally turn your body and look back, checking for approaching cyclists or traffic before opening the door.",
          handbookSection: "Safe Driving — Bicycle Safety",
          difficulty: 2,
          translations: [
            { language: "zh", content: "什么是「荷兰式开门法」？", explanation: "「荷兰式开门法」是一种用远侧的手开车门的方法。这会使您自然地转动身体向后看，在开门前检查是否有靠近的骑行者或车辆。" },
            { language: "es", content: "¿Qué es el método \"Dutch Reach\" para abrir la puerta de un automóvil?", explanation: "El Dutch Reach es un método para abrir la puerta del automóvil usando la mano más alejada. Esto hace que naturalmente gire su cuerpo y mire hacia atrás, verificando si hay ciclistas o tráfico que se aproxima antes de abrir la puerta." },
          ],
          options: [
            {
              content: "Opening the door with the far hand, turning to check for cyclists behind",
              isCorrect: true,
              translations: [
                { language: "zh", content: "用远侧的手开门，转身检查后方是否有骑行者" },
                { language: "es", content: "Abrir la puerta con la mano más alejada, girando para verificar si hay ciclistas detrás" },
              ],
            },
            {
              content: "A technique for making U-turns safely at intersections",
              isCorrect: false,
              translations: [
                { language: "zh", content: "一种在十字路口安全掉头的技术" },
                { language: "es", content: "Una técnica para hacer giros en U de forma segura en intersecciones" },
              ],
            },
            {
              content: "A parking method used in narrow streets",
              isCorrect: false,
              translations: [
                { language: "zh", content: "一种在狭窄街道上使用的停车方法" },
                { language: "es", content: "Un método de estacionamiento usado en calles estrechas" },
              ],
            },
            {
              content: "A way to signal to pedestrians when turning",
              isCorrect: false,
              translations: [
                { language: "zh", content: "一种转弯时向行人发出信号的方式" },
                { language: "es", content: "Una forma de señalar a los peatones al girar" },
              ],
            },
          ],
        },
        {
          content: "When parking on an uphill grade with a curb, how should you position your front wheels?",
          explanation: "When parking uphill with a curb, turn your front wheels away from the curb (toward the road). If the brakes fail, the curb will stop the vehicle from rolling into traffic.",
          handbookSection: "Safe Driving — Parking on Grades",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在有路缘的上坡路段停车时，前轮应该如何摆放？", explanation: "在有路缘的上坡停车时，将前轮转向远离路缘的方向（朝向道路）。如果刹车失灵，路缘会阻止车辆滑入车流。" },
            { language: "es", content: "Al estacionarse en una pendiente ascendente con bordillo, ¿cómo debe posicionar las ruedas delanteras?", explanation: "Al estacionarse cuesta arriba con bordillo, gire las ruedas delanteras alejándolas del bordillo (hacia la carretera). Si los frenos fallan, el bordillo detendrá el vehículo para que no ruede hacia el tráfico." },
          ],
          options: [
            {
              content: "Turn wheels away from the curb (toward the road) when parking uphill",
              isCorrect: true,
              translations: [
                { language: "zh", content: "上坡停车时将车轮转向远离路缘的方向（朝向道路）" },
                { language: "es", content: "Girar las ruedas alejándolas del bordillo (hacia la carretera) al estacionarse cuesta arriba" },
              ],
            },
            {
              content: "Turn wheels toward the curb when parking uphill",
              isCorrect: false,
              translations: [
                { language: "zh", content: "上坡停车时将车轮转向路缘" },
                { language: "es", content: "Girar las ruedas hacia el bordillo al estacionarse cuesta arriba" },
              ],
            },
            {
              content: "Keep wheels straight on any grade",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在任何坡度上都保持车轮笔直" },
                { language: "es", content: "Mantener las ruedas rectas en cualquier pendiente" },
              ],
            },
            {
              content: "Only adjust wheels on grades steeper than 5%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在坡度超过5%时调整车轮" },
                { language: "es", content: "Solo ajustar las ruedas en pendientes mayores al 5%" },
              ],
            },
          ],
        },
        {
          content: "What does Pennsylvania require for motorcycle riders regarding helmets?",
          explanation: "In Pennsylvania, all motorcycle riders and passengers under age 21 must wear a helmet. Riders age 21 and older are exempt from the helmet requirement if they have at least 2 years of experience or have completed a safety course.",
          handbookSection: "Safe Driving — Motorcycles",
          difficulty: 2,
          translations: [
            { language: "zh", content: "宾夕法尼亚州对摩托车骑行者的头盔有什么要求？", explanation: "在宾夕法尼亚州，所有21岁以下的摩托车骑行者和乘客必须佩戴头盔。21岁及以上的骑行者如果拥有至少2年的骑行经验或已完成安全课程，可以免除头盔要求。" },
            { language: "es", content: "¿Qué requiere Pensilvania para los motociclistas con respecto a los cascos?", explanation: "En Pensilvania, todos los motociclistas y pasajeros menores de 21 años deben usar casco. Los conductores de 21 años o más están exentos del requisito de casco si tienen al menos 2 años de experiencia o han completado un curso de seguridad." },
          ],
          options: [
            {
              content: "All riders under 21 must wear helmets; those 21+ may be exempt with experience",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有21岁以下的骑行者必须佩戴头盔；21岁及以上者如有经验可豁免" },
                { language: "es", content: "Todos los conductores menores de 21 años deben usar casco; los de 21+ pueden estar exentos con experiencia" },
              ],
            },
            {
              content: "All motorcycle riders must wear helmets at all times",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有摩托车骑行者必须始终佩戴头盔" },
                { language: "es", content: "Todos los motociclistas deben usar casco en todo momento" },
              ],
            },
            {
              content: "Helmets are optional for all riders in Pennsylvania",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在宾夕法尼亚州，所有骑行者佩戴头盔是可选的" },
                { language: "es", content: "Los cascos son opcionales para todos los conductores en Pensilvania" },
              ],
            },
            {
              content: "Only passengers must wear helmets; operators are exempt",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只有乘客必须佩戴头盔；驾驶员可豁免" },
                { language: "es", content: "Solo los pasajeros deben usar casco; los operadores están exentos" },
              ],
            },
          ],
        },
        {
          content: "Pennsylvania requires annual vehicle inspections. What does this inspection cover?",
          explanation: "Pennsylvania's annual vehicle safety inspection covers brakes, tires, lights, steering, windshield, and other safety systems. Emissions testing is also required in many counties. Vehicles must pass to remain legally on the road.",
          handbookSection: "Safe Driving — Vehicle Maintenance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "宾夕法尼亚州要求进行年度车辆检查。这项检查包括哪些内容？", explanation: "宾夕法尼亚州的年度车辆安全检查涵盖刹车、轮胎、车灯、转向系统、挡风玻璃和其他安全系统。在许多县还要求进行排放检测。车辆必须通过检查才能合法上路。" },
            { language: "es", content: "Pensilvania requiere inspecciones anuales de vehículos. ¿Qué cubre esta inspección?", explanation: "La inspección anual de seguridad vehicular de Pensilvania cubre frenos, llantas, luces, dirección, parabrisas y otros sistemas de seguridad. También se requiere prueba de emisiones en muchos condados. Los vehículos deben pasar para permanecer legalmente en la carretera." },
          ],
          options: [
            {
              content: "Safety systems including brakes, lights, tires, and steering",
              isCorrect: true,
              translations: [
                { language: "zh", content: "包括刹车、车灯、轮胎和转向系统在内的安全系统" },
                { language: "es", content: "Sistemas de seguridad incluyendo frenos, luces, llantas y dirección" },
              ],
            },
            {
              content: "Only emissions testing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅排放检测" },
                { language: "es", content: "Solo pruebas de emisiones" },
              ],
            },
            {
              content: "Only the vehicle's registration and title documents",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅车辆的登记和产权文件" },
                { language: "es", content: "Solo los documentos de registro y título del vehículo" },
              ],
            },
            {
              content: "Only the driver's insurance coverage",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅驾驶员的保险覆盖范围" },
                { language: "es", content: "Solo la cobertura de seguro del conductor" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
