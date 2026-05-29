/**
 * Florida DHSMV Driver's License Practice Questions
 * Source: Official Florida Driver License Handbook — flhsmv.gov
 * 73 questions across 6 topics — English, Chinese (Simplified), Spanish
 * Auto-translated via Claude API
 */

export const floridaDMV = {
  category: {
    name: "Florida Driver's License",
    nameEn: "Florida Driver's License",
    description: "Florida DHSMV Knowledge Test — 50 questions, 80% to pass (40/50 correct)",
    icon: "🌴",
    color: "#F97316",
    hasAiTutor: false,
    translations: [
      {
        language: "zh",
        name: "佛罗里达州驾照笔试",
        description: "佛罗里达 DHSMV 驾照知识考试 — 共 50 题，答对 40 题（80%）即通过",
      },
      {
        language: "es",
        name: "Licencia de Conducir de Florida",
        description: "Examen de conocimientos del DHSMV de Florida — 50 preguntas, 80% para aprobar",
      },
    ],
  },
  topics: [
    // ─── ROAD SIGNS & TRAFFIC CONTROLS ─────────────────────────────────────────
    {
      name: "Road Signs & Traffic Controls",
      nameEn: "Road Signs & Traffic Controls",
      description: "Sign shapes, colors, traffic signals, and pavement markings",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "道路标志与交通控制", description: "标志形状与颜色、信号灯及路面标线" },
        { language: "es", name: "Señales Viales y Controles de Tráfico", description: "Formas y colores de señales, semáforos y marcas en el pavimento" },
      ],
      questions: [
        {
          content: "What shape is an octagon (8-sided) sign, and what does it mean?",
          explanation: "An octagon shape is used exclusively for STOP signs. When you see this sign, you must come to a complete stop before the stop line or crosswalk.",
          handbookSection: "Road Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "八边形（8边）标志是什么形状，它代表什么意思？", explanation: "八边形专门用于「停车」标志。当您看到此标志时，必须在停止线或人行横道前完全停车。" },
            { language: "es", content: "¿Qué forma tiene una señal octagonal (8 lados) y qué significa?", explanation: "La forma octagonal se usa exclusivamente para las señales de ALTO. Cuando vea esta señal, debe detenerse completamente antes de la línea de alto o el cruce peatonal." },
          ],
          options: [
            {
              content: "Stop sign — you must come to a complete stop",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车标志——您必须完全停车" },
                { language: "es", content: "Señal de alto — debe detenerse completamente" },
              ],
            },
            {
              content: "Yield sign — slow down and yield to traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行标志——减速并让行" },
                { language: "es", content: "Señal de ceda el paso — reduzca la velocidad y ceda el paso" },
              ],
            },
            {
              content: "Warning sign — hazard ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "警告标志——前方有危险" },
                { language: "es", content: "Señal de advertencia — peligro adelante" },
              ],
            },
            {
              content: "Railroad crossing sign — train may be approaching",
              isCorrect: false,
              translations: [
                { language: "zh", content: "铁路道口标志——可能有火车驶来" },
                { language: "es", content: "Señal de cruce de ferrocarril — puede acercarse un tren" },
              ],
            },
          ],
        },
        {
          content: "A downward-pointing triangle sign (pointing down) means:",
          explanation: "A downward-pointing equilateral triangle indicates a YIELD sign. You must slow down and yield the right-of-way to pedestrians and vehicles in the intersection or roadway you are entering.",
          handbookSection: "Road Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "向下指的三角形标志（尖端朝下）表示：", explanation: "向下指的等边三角形表示「让行」标志。您必须减速，并在进入的交叉路口或道路上让行给行人和车辆。" },
            { language: "es", content: "Una señal triangular con la punta hacia abajo significa:", explanation: "Un triángulo equilátero con la punta hacia abajo indica una señal de CEDA EL PASO. Debe reducir la velocidad y ceder el derecho de paso a los peatones y vehículos en la intersección o carretera a la que está entrando." },
          ],
          options: [
            {
              content: "Yield — slow down and give the right-of-way",
              isCorrect: true,
              translations: [
                { language: "zh", content: "让行——减速并让出通行权" },
                { language: "es", content: "Ceda el paso — reduzca la velocidad y ceda el derecho de paso" },
              ],
            },
            {
              content: "Stop completely before proceeding",
              isCorrect: false,
              translations: [
                { language: "zh", content: "继续前行前完全停车" },
                { language: "es", content: "Deténgase completamente antes de continuar" },
              ],
            },
            {
              content: "No passing zone ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前方禁止超车区域" },
                { language: "es", content: "Zona de no rebasar adelante" },
              ],
            },
            {
              content: "Curve or hill ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前方有弯道或山坡" },
                { language: "es", content: "Curva o colina adelante" },
              ],
            },
          ],
        },
        {
          content: "What does a diamond-shaped sign indicate?",
          explanation: "Diamond-shaped signs are warning signs. They alert drivers to conditions that require extra caution, such as curves, intersections, hills, or other potential hazards ahead.",
          handbookSection: "Road Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "菱形标志表示什么？", explanation: "菱形标志是警告标志。它们提醒驾驶员注意需要格外小心的情况，如弯道、交叉路口、山坡或其他前方潜在危险。" },
            { language: "es", content: "¿Qué indica una señal en forma de diamante?", explanation: "Las señales en forma de diamante son señales de advertencia. Alertan a los conductores sobre condiciones que requieren precaución adicional, como curvas, intersecciones, colinas u otros peligros potenciales adelante." },
          ],
          options: [
            {
              content: "A warning of hazardous conditions or special rules ahead",
              isCorrect: true,
              translations: [
                { language: "zh", content: "警告前方有危险状况或特殊规定" },
                { language: "es", content: "Una advertencia de condiciones peligrosas o reglas especiales adelante" },
              ],
            },
            {
              content: "A speed limit or regulatory requirement",
              isCorrect: false,
              translations: [
                { language: "zh", content: "速度限制或法规要求" },
                { language: "es", content: "Un límite de velocidad o requisito reglamentario" },
              ],
            },
            {
              content: "Direction to a destination or service area",
              isCorrect: false,
              translations: [
                { language: "zh", content: "通往目的地或服务区的方向" },
                { language: "es", content: "Dirección a un destino o área de servicios" },
              ],
            },
            {
              content: "A school zone or pedestrian crossing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "学校区域或人行横道" },
                { language: "es", content: "Una zona escolar o cruce peatonal" },
              ],
            },
          ],
        },
        {
          content: "What color are construction and maintenance work zone signs?",
          explanation: "Work zone signs have an orange background with black text or symbols. Orange specifically indicates construction and maintenance areas, warning drivers to slow down and watch for workers.",
          handbookSection: "Road Signs — Sign Colors",
          difficulty: 1,
          translations: [
            { language: "zh", content: "施工和道路维护区域的标志是什么颜色？", explanation: "施工区域标志为橙色背景配黑色文字或符号。橙色专门表示施工和维护区域，警告驾驶员减速并注意工人。" },
            { language: "es", content: "¿De qué color son las señales de zonas de construcción y mantenimiento?", explanation: "Las señales de zonas de trabajo tienen fondo naranja con texto o símbolos negros. El naranja indica específicamente áreas de construcción y mantenimiento, advirtiendo a los conductores que reduzcan la velocidad y estén atentos a los trabajadores." },
          ],
          options: [
            {
              content: "Orange with black text or symbols",
              isCorrect: true,
              translations: [
                { language: "zh", content: "橙色背景配黑色文字或符号" },
                { language: "es", content: "Naranja con texto o símbolos negros" },
              ],
            },
            {
              content: "Yellow with black text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "黄色背景配黑色文字" },
                { language: "es", content: "Amarillo con texto negro" },
              ],
            },
            {
              content: "Red with white text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "红色背景配白色文字" },
                { language: "es", content: "Rojo con texto blanco" },
              ],
            },
            {
              content: "White with black text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "白色背景配黑色文字" },
                { language: "es", content: "Blanco con texto negro" },
              ],
            },
          ],
        },
        {
          content: "What color background is used for motorist service signs (gas, food, lodging)?",
          explanation: "Blue signs with white symbols identify motorist services such as gas stations, food, lodging, medical facilities, and rest areas. They guide drivers to nearby amenities.",
          handbookSection: "Road Signs — Sign Colors",
          difficulty: 1,
          translations: [
            { language: "zh", content: "驾驶员服务标志（加油站、餐饮、住宿）使用什么颜色的背景？", explanation: "蓝色标志配白色符号用于标识驾驶员服务设施，如加油站、餐饮、住宿、医疗设施和休息区。它们引导驾驶员前往附近的便利设施。" },
            { language: "es", content: "¿Qué color de fondo se usa para las señales de servicios para automovilistas (gasolina, comida, alojamiento)?", explanation: "Las señales azules con símbolos blancos identifican servicios para automovilistas como gasolineras, comida, alojamiento, instalaciones médicas y áreas de descanso. Guían a los conductores hacia los servicios cercanos." },
          ],
          options: [
            {
              content: "Blue with white symbols",
              isCorrect: true,
              translations: [
                { language: "zh", content: "蓝色背景配白色符号" },
                { language: "es", content: "Azul con símbolos blancos" },
              ],
            },
            {
              content: "Green with white text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "绿色背景配白色文字" },
                { language: "es", content: "Verde con texto blanco" },
              ],
            },
            {
              content: "Brown with white text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "棕色背景配白色文字" },
                { language: "es", content: "Marrón con texto blanco" },
              ],
            },
            {
              content: "Yellow with black text",
              isCorrect: false,
              translations: [
                { language: "zh", content: "黄色背景配黑色文字" },
                { language: "es", content: "Amarillo con texto negro" },
              ],
            },
          ],
        },
        {
          content: "What must you do at a steady red traffic signal?",
          explanation: "At a steady red light, you must come to a complete stop before the stop line or crosswalk. You may turn right on red after stopping and yielding to pedestrians and oncoming traffic, unless a NO TURN ON RED sign is posted.",
          handbookSection: "Traffic Controls — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "遇到持续亮起的红色交通信号灯时，您必须怎么做？", explanation: "遇到持续亮起的红灯时，您必须在停止线或人行横道前完全停车。停车并让行给行人和对向车辆后，除非有「禁止红灯转弯」标志，否则可以右转。" },
            { language: "es", content: "¿Qué debe hacer ante una luz roja fija del semáforo?", explanation: "Ante una luz roja fija, debe detenerse completamente antes de la línea de alto o el cruce peatonal. Puede girar a la derecha después de detenerse y ceder el paso a peatones y tráfico en sentido contrario, a menos que haya una señal de NO GIRAR EN ROJO." },
          ],
          options: [
            {
              content: "Stop completely; may turn right after stopping and yielding unless prohibited",
              isCorrect: true,
              translations: [
                { language: "zh", content: "完全停车；除非禁止，停车让行后可右转" },
                { language: "es", content: "Detenerse completamente; puede girar a la derecha después de detenerse y ceder el paso, a menos que esté prohibido" },
              ],
            },
            {
              content: "Slow down and proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速并谨慎通过" },
                { language: "es", content: "Reducir la velocidad y proceder con precaución" },
              ],
            },
            {
              content: "Stop only if other traffic is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有其他车辆时停车" },
                { language: "es", content: "Detenerse solo si hay otro tráfico presente" },
              ],
            },
            {
              content: "Come to a complete stop; no turns permitted in any direction",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车；禁止任何方向转弯" },
                { language: "es", content: "Detenerse completamente; no se permiten giros en ninguna dirección" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing yellow traffic light mean?",
          explanation: "A flashing yellow light is a warning signal. You should slow down and proceed with caution through the intersection. You are not required to stop.",
          handbookSection: "Traffic Controls — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "闪烁的黄色交通信号灯表示什么？", explanation: "闪烁的黄灯是警告信号。您应该减速并谨慎通过交叉路口。您不需要停车。" },
            { language: "es", content: "¿Qué significa una luz amarilla intermitente del semáforo?", explanation: "Una luz amarilla intermitente es una señal de advertencia. Debe reducir la velocidad y proceder con precaución a través de la intersección. No está obligado a detenerse." },
          ],
          options: [
            {
              content: "Slow down and proceed with caution",
              isCorrect: true,
              translations: [
                { language: "zh", content: "减速并谨慎通过" },
                { language: "es", content: "Reducir la velocidad y proceder con precaución" },
              ],
            },
            {
              content: "Stop completely and wait for a green light",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车并等待绿灯" },
                { language: "es", content: "Detenerse completamente y esperar una luz verde" },
              ],
            },
            {
              content: "The light is about to change to red",
              isCorrect: false,
              translations: [
                { language: "zh", content: "信号灯即将变为红色" },
                { language: "es", content: "La luz está a punto de cambiar a rojo" },
              ],
            },
            {
              content: "Same as a stop sign — stop, then proceed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "与停车标志相同——停车后再通过" },
                { language: "es", content: "Igual que una señal de alto — detenerse, luego proceder" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing red traffic light mean?",
          explanation: "A flashing red signal has the same meaning as a stop sign. You must stop completely, yield the right-of-way to other vehicles and pedestrians, and proceed when safe.",
          handbookSection: "Traffic Controls — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "闪烁的红色交通信号灯表示什么？", explanation: "闪烁的红色信号灯与停车标志含义相同。您必须完全停车，让行给其他车辆和行人，确认安全后再通过。" },
            { language: "es", content: "¿Qué significa una luz roja intermitente del semáforo?", explanation: "Una señal roja intermitente tiene el mismo significado que una señal de alto. Debe detenerse completamente, ceder el derecho de paso a otros vehículos y peatones, y proceder cuando sea seguro." },
          ],
          options: [
            {
              content: "Same as a stop sign — stop completely, yield, then proceed when safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "与停车标志相同——完全停车，让行，确认安全后通过" },
                { language: "es", content: "Igual que una señal de alto — detenerse completamente, ceder el paso, luego proceder cuando sea seguro" },
              ],
            },
            {
              content: "Slow down and proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速并谨慎通过" },
                { language: "es", content: "Reducir la velocidad y proceder con precaución" },
              ],
            },
            {
              content: "Prepare to stop — signal is changing to steady red",
              isCorrect: false,
              translations: [
                { language: "zh", content: "准备停车——信号灯即将变为持续红灯" },
                { language: "es", content: "Prepararse para detenerse — la señal está cambiando a rojo fijo" },
              ],
            },
            {
              content: "Stop only for cross traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行横向车流" },
                { language: "es", content: "Detenerse solo para el tráfico transversal" },
              ],
            },
          ],
        },
        {
          content: "What does a solid yellow line on the center of the road mean for drivers on that side?",
          explanation: "A solid yellow line on your side of the road means you cannot cross it to pass other vehicles. You must remain on your side of the road.",
          handbookSection: "Traffic Controls — Pavement Markings",
          difficulty: 1,
          translations: [
            { language: "zh", content: "道路中央的实黄线对该侧驾驶员意味着什么？", explanation: "您这一侧的实黄线表示您不能跨越它超车。您必须保持在道路的您这一侧行驶。" },
            { language: "es", content: "¿Qué significa una línea amarilla continua en el centro de la carretera para los conductores de ese lado?", explanation: "Una línea amarilla continua en su lado de la carretera significa que no puede cruzarla para rebasar otros vehículos. Debe permanecer en su lado de la carretera." },
          ],
          options: [
            {
              content: "You may not cross the line to pass",
              isCorrect: true,
              translations: [
                { language: "zh", content: "您不能跨线超车" },
                { language: "es", content: "No puede cruzar la línea para rebasar" },
              ],
            },
            {
              content: "You may pass if the way is clear",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果道路畅通可以超车" },
                { language: "es", content: "Puede rebasar si el camino está despejado" },
              ],
            },
            {
              content: "The lane ahead is reserved for turning only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前方车道仅限转弯" },
                { language: "es", content: "El carril adelante está reservado solo para girar" },
              ],
            },
            {
              content: "Pedestrian crossing area — proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "行人过街区域——谨慎通过" },
                { language: "es", content: "Área de cruce peatonal — proceda con precaución" },
              ],
            },
          ],
        },
        {
          content: "White lane markings on the road separate:",
          explanation: "White lane markings separate lanes of traffic traveling in the same direction. Yellow markings separate traffic moving in opposite directions.",
          handbookSection: "Traffic Controls — Pavement Markings",
          difficulty: 1,
          translations: [
            { language: "zh", content: "道路上的白色车道标线用于分隔：", explanation: "白色车道标线分隔同向行驶的车道。黄色标线分隔对向行驶的车流。" },
            { language: "es", content: "Las marcas blancas de carril en la carretera separan:", explanation: "Las marcas blancas de carril separan los carriles de tráfico que viajan en la misma dirección. Las marcas amarillas separan el tráfico que se mueve en direcciones opuestas." },
          ],
          options: [
            {
              content: "Traffic traveling in the same direction",
              isCorrect: true,
              translations: [
                { language: "zh", content: "同向行驶的车流" },
                { language: "es", content: "Tráfico que viaja en la misma dirección" },
              ],
            },
            {
              content: "Traffic traveling in opposite directions",
              isCorrect: false,
              translations: [
                { language: "zh", content: "对向行驶的车流" },
                { language: "es", content: "Tráfico que viaja en direcciones opuestas" },
              ],
            },
            {
              content: "Highway lanes from bicycle lanes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "高速公路车道与自行车道" },
                { language: "es", content: "Carriles de autopista de carriles para bicicletas" },
              ],
            },
            {
              content: "Merge areas from through traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "汇入区域与直行车流" },
                { language: "es", content: "Áreas de incorporación del tráfico directo" },
              ],
            },
          ],
        },
        {
          content: "What must you do when you see a railroad crossing sign (round, yellow with X)?",
          explanation: "A round yellow sign with an X and the letter R warns you that a railroad crossing is ahead. You must look, listen, slow down, and be prepared to stop for trains.",
          handbookSection: "Traffic Controls — Railroad Crossings",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当您看到铁路道口标志（圆形、黄色带X）时，您必须怎么做？", explanation: "圆形黄色标志上有X和字母R，警告您前方有铁路道口。您必须观察、倾听、减速，并准备好为火车停车。" },
            { language: "es", content: "¿Qué debe hacer cuando ve una señal de cruce de ferrocarril (redonda, amarilla con X)?", explanation: "Una señal amarilla redonda con una X y la letra R le advierte que hay un cruce de ferrocarril adelante. Debe mirar, escuchar, reducir la velocidad y estar preparado para detenerse ante los trenes." },
          ],
          options: [
            {
              content: "Look and listen for trains; slow down and prepare to stop",
              isCorrect: true,
              translations: [
                { language: "zh", content: "观察和倾听是否有火车；减速并准备停车" },
                { language: "es", content: "Mirar y escuchar si hay trenes; reducir la velocidad y prepararse para detenerse" },
              ],
            },
            {
              content: "Stop completely — a train is always approaching",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车——总是有火车驶来" },
                { language: "es", content: "Detenerse completamente — siempre se acerca un tren" },
              ],
            },
            {
              content: "This sign indicates a one-way road crossing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "此标志表示单行道交叉口" },
                { language: "es", content: "Esta señal indica un cruce de carretera de un solo sentido" },
              ],
            },
            {
              content: "Yield only to traffic from the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行右侧来车" },
                { language: "es", content: "Ceder el paso solo al tráfico de la derecha" },
              ],
            },
          ],
        },
        {
          content: "What does a pentagon (five-sided) sign indicate?",
          explanation: "A pentagon-shaped sign indicates a school zone or school crossing ahead. Drivers must reduce speed and watch for children crossing the road in these areas.",
          handbookSection: "Road Signs — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "五边形标志表示什么？", explanation: "五边形标志表示前方有学校区域或学校人行横道。驾驶员必须在这些区域减速并注意过马路的儿童。" },
            { language: "es", content: "¿Qué indica una señal pentagonal (cinco lados)?", explanation: "Una señal en forma de pentágono indica una zona escolar o cruce escolar adelante. Los conductores deben reducir la velocidad y estar atentos a los niños que cruzan la calle en estas áreas." },
          ],
          options: [
            {
              content: "School zone or school crossing",
              isCorrect: true,
              translations: [
                { language: "zh", content: "学校区域或学校人行横道" },
                { language: "es", content: "Zona escolar o cruce escolar" },
              ],
            },
            {
              content: "Construction work zone ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前方施工区域" },
                { language: "es", content: "Zona de trabajo de construcción adelante" },
              ],
            },
            {
              content: "State highway route marker",
              isCorrect: false,
              translations: [
                { language: "zh", content: "州级公路路线标志" },
                { language: "es", content: "Marcador de ruta de carretera estatal" },
              ],
            },
            {
              content: "No passing zone ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前方禁止超车区域" },
                { language: "es", content: "Zona de no rebasar adelante" },
              ],
            },
          ],
        },
        {
          content: "What do double solid yellow center lines on the road mean?",
          explanation: "Double solid yellow lines indicate that passing is not allowed from either direction. Vehicles may only cross them to make a left turn into a driveway or private road.",
          handbookSection: "Traffic Controls — Pavement Markings",
          difficulty: 2,
          translations: [
            { language: "zh", content: "道路上的双实黄色中心线表示什么？", explanation: "双实黄线表示双向都禁止超车。车辆只能跨越它们左转进入车道或私人道路。" },
            { language: "es", content: "¿Qué significan las líneas amarillas dobles continuas en el centro de la carretera?", explanation: "Las líneas amarillas dobles continuas indican que no se permite rebasar desde ninguna dirección. Los vehículos solo pueden cruzarlas para girar a la izquierda hacia una entrada o camino privado." },
          ],
          options: [
            {
              content: "No passing from either direction; may only cross for a left turn into a driveway",
              isCorrect: true,
              translations: [
                { language: "zh", content: "双向禁止超车；只能跨越进行左转进入车道" },
                { language: "es", content: "No se permite rebasar desde ninguna dirección; solo puede cruzar para girar a la izquierda hacia una entrada" },
              ],
            },
            {
              content: "Passing allowed only during daylight hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在白天允许超车" },
                { language: "es", content: "Se permite rebasar solo durante las horas del día" },
              ],
            },
            {
              content: "Passing allowed from both sides when clear",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双向道路畅通时都允许超车" },
                { language: "es", content: "Se permite rebasar desde ambos lados cuando está despejado" },
              ],
            },
            {
              content: "Only emergency vehicles may cross these lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只有紧急车辆可以跨越这些线" },
                { language: "es", content: "Solo los vehículos de emergencia pueden cruzar estas líneas" },
              ],
            },
          ],
        },
        {
          content: "When must you stop for a school bus?",
          explanation: "You must stop for a school bus when it is stopped with its red lights flashing and stop arm extended. You must stop in both directions on a two-lane road. On a four-lane divided highway, only traffic traveling in the same direction as the bus must stop.",
          handbookSection: "Traffic Controls — School Buses",
          difficulty: 2,
          translations: [
            { language: "zh", content: "您什么时候必须为校车停车？", explanation: "当校车停车并亮起红色闪烁灯和伸出停车臂时，您必须停车。在双车道道路上，双向车辆都必须停车。在四车道分隔公路上，只有与校车同向行驶的车辆必须停车。" },
            { language: "es", content: "¿Cuándo debe detenerse para un autobús escolar?", explanation: "Debe detenerse para un autobús escolar cuando está parado con sus luces rojas intermitentes y el brazo de alto extendido. Debe detenerse en ambas direcciones en una carretera de dos carriles. En una autopista dividida de cuatro carriles, solo el tráfico que viaja en la misma dirección que el autobús debe detenerse." },
          ],
          options: [
            {
              content: "Both directions on two-lane roads; same direction on divided four-lane highways",
              isCorrect: true,
              translations: [
                { language: "zh", content: "双车道道路上双向都要停；四车道分隔公路上同向车辆要停" },
                { language: "es", content: "Ambas direcciones en carreteras de dos carriles; misma dirección en autopistas divididas de cuatro carriles" },
              ],
            },
            {
              content: "Only if you are behind the bus",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当您在校车后方时" },
                { language: "es", content: "Solo si está detrás del autobús" },
              ],
            },
            {
              content: "All directions on all roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有道路上所有方向都要停" },
                { language: "es", content: "Todas las direcciones en todas las carreteras" },
              ],
            },
            {
              content: "Only in school zones; not on highways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域内；高速公路上不需要" },
                { language: "es", content: "Solo en zonas escolares; no en autopistas" },
              ],
            },
          ],
        },
        {
          content: "A steady green arrow signal at an intersection means:",
          explanation: "A steady green arrow means you may proceed in the direction the arrow points. Oncoming traffic is stopped by a red light, so you have a protected turn.",
          handbookSection: "Traffic Controls — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "交叉路口持续亮起的绿色箭头信号灯表示：", explanation: "持续亮起的绿色箭头表示您可以朝箭头指示的方向行驶。对向车流被红灯阻止，所以您有受保护的转弯权。" },
            { language: "es", content: "Una señal de flecha verde fija en una intersección significa:", explanation: "Una flecha verde fija significa que puede proceder en la dirección que señala la flecha. El tráfico en sentido contrario está detenido por una luz roja, por lo que tiene un giro protegido." },
          ],
          options: [
            {
              content: "A protected turn — proceed in the direction of the arrow",
              isCorrect: true,
              translations: [
                { language: "zh", content: "受保护的转弯——朝箭头方向行驶" },
                { language: "es", content: "Un giro protegido — proceda en la dirección de la flecha" },
              ],
            },
            {
              content: "Yield to oncoming traffic, then turn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行对向车流，然后转弯" },
                { language: "es", content: "Ceda el paso al tráfico en sentido contrario, luego gire" },
              ],
            },
            {
              content: "Turn only if no pedestrians are present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在没有行人时转弯" },
                { language: "es", content: "Gire solo si no hay peatones presentes" },
              ],
            },
            {
              content: "Stop before the intersection, then turn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在交叉路口前停车，然后转弯" },
                { language: "es", content: "Deténgase antes de la intersección, luego gire" },
              ],
            },
          ],
        },
      ],
    },
    // ─── RIGHT-OF-WAY & INTERSECTIONS ─────────────────────────────────────────
    {
      name: "Right-of-Way & Intersections",
      nameEn: "Right-of-Way & Intersections",
      description: "Right-of-way rules, turning, signaling, and intersection procedures",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "优先通行权与路口规则", description: "优先权规则、转弯、信号及路口程序" },
        { language: "es", name: "Derecho de Paso e Intersecciones", description: "Reglas de prioridad, giros, señalización y procedimientos en intersecciones" },
      ],
      questions: [
        {
          content: "At an uncontrolled intersection where two vehicles arrive at the same time, who has the right-of-way?",
          explanation: "When two vehicles reach an uncontrolled intersection at the same time, the driver on the LEFT must yield to the driver on the RIGHT. The vehicle on the right has the right-of-way.",
          handbookSection: "Right-of-Way — Uncontrolled Intersections",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在无交通管制的路口，两辆车同时到达时，谁拥有先行权？", explanation: "当两辆车同时到达无交通管制的路口时，左侧的驾驶员必须让行给右侧的驾驶员。右侧的车辆拥有先行权。" },
            { language: "es", content: "En una intersección sin control de tráfico donde dos vehículos llegan al mismo tiempo, ¿quién tiene el derecho de paso?", explanation: "Cuando dos vehículos llegan a una intersección sin control de tráfico al mismo tiempo, el conductor de la IZQUIERDA debe ceder el paso al conductor de la DERECHA. El vehículo de la derecha tiene el derecho de paso." },
          ],
          options: [
            {
              content: "The driver on the right has the right-of-way",
              isCorrect: true,
              translations: [
                { language: "zh", content: "右侧的驾驶员拥有先行权" },
                { language: "es", content: "El conductor de la derecha tiene el derecho de paso" },
              ],
            },
            {
              content: "The driver on the left has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "左侧的驾驶员拥有先行权" },
                { language: "es", content: "El conductor de la izquierda tiene el derecho de paso" },
              ],
            },
            {
              content: "The larger vehicle has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "较大的车辆拥有先行权" },
                { language: "es", content: "El vehículo más grande tiene el derecho de paso" },
              ],
            },
            {
              content: "The driver going straight has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直行的驾驶员拥有先行权" },
                { language: "es", content: "El conductor que va recto tiene el derecho de paso" },
              ],
            },
          ],
        },
        {
          content: "When turning left at an intersection, you must yield to:",
          explanation: "When making a left turn, you must yield to all oncoming traffic and to pedestrians in the crosswalk. Left turns are the most dangerous turns because you must cross oncoming traffic.",
          handbookSection: "Right-of-Way — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在路口左转时，您必须让行给：", explanation: "左转时，您必须让行给所有对向来车和人行横道上的行人。左转是最危险的转弯，因为您必须穿越对向车流。" },
            { language: "es", content: "Al girar a la izquierda en una intersección, debe ceder el paso a:", explanation: "Al hacer un giro a la izquierda, debe ceder el paso a todo el tráfico que viene en sentido contrario y a los peatones en el cruce peatonal. Los giros a la izquierda son los más peligrosos porque debe cruzar el tráfico en sentido contrario." },
          ],
          options: [
            {
              content: "All oncoming traffic and pedestrians in the crosswalk",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有对向来车和人行横道上的行人" },
                { language: "es", content: "Todo el tráfico en sentido contrario y los peatones en el cruce peatonal" },
              ],
            },
            {
              content: "Only traffic approaching from the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅从右侧驶来的车辆" },
                { language: "es", content: "Solo el tráfico que se aproxima desde la derecha" },
              ],
            },
            {
              content: "Only pedestrians — cars must yield to you",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅行人——车辆必须让行给您" },
                { language: "es", content: "Solo los peatones — los autos deben cederle el paso a usted" },
              ],
            },
            {
              content: "Vehicles already in the intersection only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅已在路口内的车辆" },
                { language: "es", content: "Solo los vehículos que ya están en la intersección" },
              ],
            },
          ],
        },
        {
          content: "How far in advance must you signal before making a turn in Florida?",
          explanation: "Florida law requires you to signal at least 100 feet before making a turn. On highways, you should signal for a greater distance to give faster traffic adequate warning.",
          handbookSection: "Right-of-Way — Signaling",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，您必须提前多远打转向灯？", explanation: "佛罗里达州法律要求您在转弯前至少100英尺处打转向灯。在高速公路上，您应该在更远的距离打信号灯，以便给快速行驶的车辆足够的警示。" },
            { language: "es", content: "¿Con cuánta anticipación debe señalizar antes de hacer un giro en Florida?", explanation: "La ley de Florida requiere que señalice al menos 100 pies antes de hacer un giro. En las autopistas, debe señalizar a mayor distancia para dar advertencia adecuada al tráfico más rápido." },
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
                { language: "zh", content: "转弯前立即打信号灯即可" },
                { language: "es", content: "Inmediatamente antes del giro es suficiente" },
              ],
            },
          ],
        },
        {
          content: "When must you yield to pedestrians?",
          explanation: "Drivers must yield to pedestrians at all crosswalks — both marked and unmarked. An unmarked crosswalk exists at every intersection where sidewalks meet the road, even without painted lines.",
          handbookSection: "Right-of-Way — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您什么时候必须让行给行人？", explanation: "驾驶员必须在所有人行横道让行给行人——包括有标记和无标记的人行横道。在人行道与道路相接的每个路口都存在无标记人行横道，即使没有画线。" },
            { language: "es", content: "¿Cuándo debe ceder el paso a los peatones?", explanation: "Los conductores deben ceder el paso a los peatones en todos los cruces peatonales — tanto marcados como no marcados. Un cruce peatonal no marcado existe en cada intersección donde las aceras se encuentran con la carretera, incluso sin líneas pintadas." },
          ],
          options: [
            {
              content: "At all crosswalks, both marked and unmarked",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在所有人行横道，包括有标记和无标记的" },
                { language: "es", content: "En todos los cruces peatonales, tanto marcados como no marcados" },
              ],
            },
            {
              content: "Only at marked crosswalks with painted lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有画线的标记人行横道" },
                { language: "es", content: "Solo en cruces peatonales marcados con líneas pintadas" },
              ],
            },
            {
              content: "Only when a crossing signal shows WALK",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当人行信号灯显示「步行」时" },
                { language: "es", content: "Solo cuando la señal de cruce muestra WALK (caminar)" },
              ],
            },
            {
              content: "Only in school zones and hospital areas",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域和医院区域" },
                { language: "es", content: "Solo en zonas escolares y áreas de hospitales" },
              ],
            },
          ],
        },
        {
          content: "When entering a road from a driveway or private road, you must:",
          explanation: "When entering a public roadway from a driveway, alley, or private road, you must stop and yield to all traffic and pedestrians on the road before entering.",
          handbookSection: "Right-of-Way — Entering Roadway",
          difficulty: 1,
          translations: [
            { language: "zh", content: "从车道或私人道路进入公路时，您必须：", explanation: "从车道、小巷或私人道路进入公共道路时，您必须停车并让行给道路上的所有车辆和行人，然后再进入。" },
            { language: "es", content: "Al entrar a una carretera desde una entrada de auto o camino privado, debe:", explanation: "Al entrar a una vía pública desde una entrada de auto, callejón o camino privado, debe detenerse y ceder el paso a todo el tráfico y peatones en la carretera antes de entrar." },
          ],
          options: [
            {
              content: "Stop and yield to all traffic and pedestrians on the roadway",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车并让行给道路上的所有车辆和行人" },
                { language: "es", content: "Detenerse y ceder el paso a todo el tráfico y peatones en la carretera" },
              ],
            },
            {
              content: "Proceed carefully if no traffic is within 100 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果100英尺内没有车辆，可以小心通过" },
                { language: "es", content: "Proceder con cuidado si no hay tráfico a 100 pies" },
              ],
            },
            {
              content: "Yield only to traffic coming from your left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给从您左侧驶来的车辆" },
                { language: "es", content: "Ceder el paso solo al tráfico que viene de su izquierda" },
              ],
            },
            {
              content: "Signal and merge without stopping if speed is slow",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果速度较慢，打信号灯并汇入而无需停车" },
                { language: "es", content: "Señalizar e incorporarse sin detenerse si la velocidad es baja" },
              ],
            },
          ],
        },
        {
          content: "What must you do when you hear a siren or see lights of an emergency vehicle?",
          explanation: "When an emergency vehicle with flashing lights or a siren approaches, you must pull to the right edge of the road and stop. Remain stopped until the emergency vehicle has passed.",
          handbookSection: "Right-of-Way — Emergency Vehicles",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当您听到警报声或看到紧急车辆的灯光时，您必须做什么？", explanation: "当闪烁灯光或警报声的紧急车辆接近时，您必须靠向道路右侧边缘并停车。保持停车状态直到紧急车辆通过。" },
            { language: "es", content: "¿Qué debe hacer cuando escucha una sirena o ve las luces de un vehículo de emergencia?", explanation: "Cuando se acerca un vehículo de emergencia con luces intermitentes o sirena, debe orillarse al borde derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo de emergencia haya pasado." },
          ],
          options: [
            {
              content: "Pull to the right edge of the road and stop",
              isCorrect: true,
              translations: [
                { language: "zh", content: "靠向道路右侧边缘并停车" },
                { language: "es", content: "Orillarse al borde derecho de la carretera y detenerse" },
              ],
            },
            {
              content: "Speed up to clear the intersection quickly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速以快速通过路口" },
                { language: "es", content: "Acelerar para despejar la intersección rápidamente" },
              ],
            },
            {
              content: "Slow down but continue at reduced speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速但继续以较低速度行驶" },
                { language: "es", content: "Reducir la velocidad pero continuar a velocidad reducida" },
              ],
            },
            {
              content: "Move to the left lane to allow more space",
              isCorrect: false,
              translations: [
                { language: "zh", content: "移至左车道以留出更多空间" },
                { language: "es", content: "Moverse al carril izquierdo para dar más espacio" },
              ],
            },
          ],
        },
        {
          content: "Florida's Move Over Law requires you to do what when approaching a stopped law enforcement, emergency, or utility vehicle with lights flashing?",
          explanation: "Florida's Move Over Law requires you to move over one lane away from the stopped vehicle if safely possible. If you cannot change lanes, you must slow to 20 mph below the posted speed limit (minimum 5 mph).",
          handbookSection: "Right-of-Way — Move Over Law",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当接近停在路边且闪烁警示灯的执法、紧急或公用事业车辆时，佛罗里达州的「让道法」要求您做什么？", explanation: "佛罗里达州的「让道法」要求您在安全的情况下向远离停靠车辆的一侧变换一个车道。如果无法变道，您必须将速度降低至限速以下20英里/小时（最低5英里/小时）。" },
            { language: "es", content: "¿Qué requiere la Ley Move Over de Florida cuando se aproxima a un vehículo detenido de policía, emergencia o servicios públicos con luces intermitentes?", explanation: "La Ley Move Over de Florida requiere que se cambie un carril alejándose del vehículo detenido si es seguro hacerlo. Si no puede cambiar de carril, debe reducir la velocidad a 20 mph por debajo del límite de velocidad publicado (mínimo 5 mph)." },
          ],
          options: [
            {
              content: "Move over one lane, or slow to 20 mph below the speed limit if unable to change lanes",
              isCorrect: true,
              translations: [
                { language: "zh", content: "变换一个车道，或者如果无法变道则减速至限速以下20英里/小时" },
                { language: "es", content: "Cambiarse un carril, o reducir a 20 mph por debajo del límite de velocidad si no puede cambiar de carril" },
              ],
            },
            {
              content: "Stop behind the vehicle and wait for it to move",
              isCorrect: false,
              translations: [
                { language: "zh", content: "停在该车辆后面等待其移动" },
                { language: "es", content: "Detenerse detrás del vehículo y esperar a que se mueva" },
              ],
            },
            {
              content: "Pass the vehicle quickly while maintaining speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "保持车速快速通过该车辆" },
                { language: "es", content: "Pasar el vehículo rápidamente manteniendo la velocidad" },
              ],
            },
            {
              content: "Move over only for law enforcement — not for utility vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅对执法车辆让道——不适用于公用事业车辆" },
                { language: "es", content: "Cambiarse solo para vehículos policiales — no para vehículos de servicios públicos" },
              ],
            },
          ],
        },
        {
          content: "When making a right turn, you should:",
          explanation: "For a right turn, approach in the right lane, move as close to the right curb as possible, and make a tight turn into the nearest right lane of the road you are entering.",
          handbookSection: "Right-of-Way — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "右转时，您应该：", explanation: "右转时，在右车道接近路口，尽可能靠近右侧路缘，然后紧贴转弯进入您要进入的道路的最近右车道。" },
            { language: "es", content: "Al girar a la derecha, debe:", explanation: "Para un giro a la derecha, acérquese en el carril derecho, muévase lo más cerca posible del bordillo derecho y haga un giro cerrado hacia el carril derecho más cercano de la carretera a la que está entrando." },
          ],
          options: [
            {
              content: "Approach in the right lane and turn into the nearest right lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在右车道接近并转入最近的右车道" },
                { language: "es", content: "Acercarse en el carril derecho y girar hacia el carril derecho más cercano" },
              ],
            },
            {
              content: "Turn from the center lane for better visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从中间车道转弯以获得更好的视野" },
                { language: "es", content: "Girar desde el carril central para mejor visibilidad" },
              ],
            },
            {
              content: "Make a wide sweeping turn to avoid the curb",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大幅度转弯以避开路缘" },
                { language: "es", content: "Hacer un giro amplio para evitar el bordillo" },
              ],
            },
            {
              content: "Turn into the far lane to avoid blocking traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "转入远端车道以避免阻塞交通" },
                { language: "es", content: "Girar hacia el carril lejano para evitar bloquear el tráfico" },
              ],
            },
          ],
        },
        {
          content: "You are driving straight through an intersection when the light turns yellow. You should:",
          explanation: "A yellow light means the signal is about to turn red. If you can safely stop before the intersection, you should stop. If you are too close to stop safely, you should proceed through the intersection with caution.",
          handbookSection: "Right-of-Way — Traffic Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "您正直行通过路口时，信号灯变成黄灯。您应该：", explanation: "黄灯表示信号灯即将变红。如果您能在路口前安全停车，您应该停车。如果您距离太近无法安全停车，您应该谨慎通过路口。" },
            { language: "es", content: "Está conduciendo recto a través de una intersección cuando la luz cambia a amarillo. Debe:", explanation: "Una luz amarilla significa que la señal está a punto de cambiar a rojo. Si puede detenerse de manera segura antes de la intersección, debe detenerse. Si está demasiado cerca para detenerse de manera segura, debe proceder a través de la intersección con precaución." },
          ],
          options: [
            {
              content: "Stop if you can do so safely; proceed through if stopping is not safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果能安全停车则停车；如果无法安全停车则通过" },
                { language: "es", content: "Detenerse si puede hacerlo de manera segura; pasar si detenerse no es seguro" },
              ],
            },
            {
              content: "Speed up to clear the intersection before it turns red",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速在变红之前通过路口" },
                { language: "es", content: "Acelerar para despejar la intersección antes de que cambie a rojo" },
              ],
            },
            {
              content: "Always stop immediately when you see yellow",
              isCorrect: false,
              translations: [
                { language: "zh", content: "看到黄灯时总是立即停车" },
                { language: "es", content: "Siempre detenerse inmediatamente cuando vea amarillo" },
              ],
            },
            {
              content: "Continue through — yellow means proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "继续通过——黄灯表示谨慎通行" },
                { language: "es", content: "Continuar — amarillo significa proceder con precaución" },
              ],
            },
          ],
        },
        {
          content: "At a four-way stop, which vehicle goes first?",
          explanation: "At a four-way stop, the vehicle that arrived first has the right-of-way. If vehicles arrive at the same time, the vehicle on the right goes first. If directly across from each other going straight, both may go. If across from each other with one turning left, the straight-going vehicle has priority.",
          handbookSection: "Right-of-Way — Four-Way Stop",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在四向停车路口，哪辆车先行？", explanation: "在四向停车路口，先到达的车辆拥有先行权。如果车辆同时到达，右侧的车辆先行。如果两车正对面且都直行，两车可同时通过。如果正对面但一方左转，直行车辆优先。" },
            { language: "es", content: "En una parada de cuatro vías, ¿qué vehículo pasa primero?", explanation: "En una parada de cuatro vías, el vehículo que llegó primero tiene el derecho de paso. Si los vehículos llegan al mismo tiempo, el vehículo de la derecha pasa primero. Si están directamente uno frente al otro yendo recto, ambos pueden pasar. Si están uno frente al otro con uno girando a la izquierda, el vehículo que va recto tiene prioridad." },
          ],
          options: [
            {
              content: "The vehicle that arrived first; if simultaneous, the vehicle on the right",
              isCorrect: true,
              translations: [
                { language: "zh", content: "先到达的车辆；如果同时到达，右侧的车辆先行" },
                { language: "es", content: "El vehículo que llegó primero; si es simultáneo, el vehículo de la derecha" },
              ],
            },
            {
              content: "The vehicle going straight always has priority",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直行的车辆总是优先" },
                { language: "es", content: "El vehículo que va recto siempre tiene prioridad" },
              ],
            },
            {
              content: "The vehicle with the most passengers",
              isCorrect: false,
              translations: [
                { language: "zh", content: "载客最多的车辆" },
                { language: "es", content: "El vehículo con más pasajeros" },
              ],
            },
            {
              content: "The largest vehicle proceeds first",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最大的车辆先行" },
                { language: "es", content: "El vehículo más grande pasa primero" },
              ],
            },
          ],
        },
        {
          content: "When can you legally make a U-turn in Florida?",
          explanation: "U-turns are legal in Florida when you can see clearly for at least 500 feet in both directions, unless a NO U-TURN sign is posted. They are prohibited at intersections with traffic signals unless signs permit it.",
          handbookSection: "Right-of-Way — U-Turns",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，您什么时候可以合法掉头？", explanation: "在佛罗里达州，当您能清楚看到两个方向至少500英尺的距离，且没有「禁止掉头」标志时，掉头是合法的。除非有标志允许，否则在有交通信号灯的路口禁止掉头。" },
            { language: "es", content: "¿Cuándo puede hacer legalmente un giro en U en Florida?", explanation: "Los giros en U son legales en Florida cuando puede ver claramente al menos 500 pies en ambas direcciones, a menos que haya una señal de PROHIBIDO GIRAR EN U. Están prohibidos en intersecciones con semáforos a menos que las señales lo permitan." },
          ],
          options: [
            {
              content: "When you can see at least 500 feet in both directions and no sign prohibits it",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当您能看到两个方向至少500英尺且没有禁止标志时" },
                { language: "es", content: "Cuando puede ver al menos 500 pies en ambas direcciones y ninguna señal lo prohíbe" },
              ],
            },
            {
              content: "Any time as long as you signal first",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要您先打信号灯，任何时候都可以" },
                { language: "es", content: "En cualquier momento siempre que señalice primero" },
              ],
            },
            {
              content: "Only at intersections with traffic signals",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有交通信号灯的路口" },
                { language: "es", content: "Solo en intersecciones con semáforos" },
              ],
            },
            {
              content: "U-turns are never legal in Florida",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在佛罗里达州掉头从来都是不合法的" },
                { language: "es", content: "Los giros en U nunca son legales en Florida" },
              ],
            },
          ],
        },
        {
          content: "Vehicles on a highway must yield to vehicles on an entrance ramp:",
          explanation: "This is incorrect — vehicles on the entrance ramp must yield to vehicles already on the highway. Freeway traffic has the right-of-way. Merging vehicles must find a safe gap in traffic before entering the highway.",
          handbookSection: "Right-of-Way — Merging",
          difficulty: 2,
          translations: [
            { language: "zh", content: "高速公路上的车辆必须让行给入口匝道上的车辆：", explanation: "这是错误的——入口匝道上的车辆必须让行给已经在高速公路上的车辆。高速公路上的车辆拥有先行权。汇入的车辆必须在进入高速公路前找到安全的车流间隙。" },
            { language: "es", content: "Los vehículos en una autopista deben ceder el paso a los vehículos en una rampa de entrada:", explanation: "Esto es incorrecto — los vehículos en la rampa de entrada deben ceder el paso a los vehículos que ya están en la autopista. El tráfico de la autopista tiene el derecho de paso. Los vehículos que se incorporan deben encontrar un espacio seguro en el tráfico antes de entrar a la autopista." },
          ],
          options: [
            {
              content: "False — vehicles on the entrance ramp must yield to highway traffic",
              isCorrect: true,
              translations: [
                { language: "zh", content: "错误——入口匝道上的车辆必须让行给高速公路上的车辆" },
                { language: "es", content: "Falso — los vehículos en la rampa de entrada deben ceder el paso al tráfico de la autopista" },
              ],
            },
            {
              content: "True — highway vehicles must slow down for merging traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "正确——高速公路上的车辆必须为汇入车辆减速" },
                { language: "es", content: "Verdadero — los vehículos de la autopista deben reducir la velocidad para el tráfico que se incorpora" },
              ],
            },
            {
              content: "True — merging vehicles always have the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "正确——汇入车辆总是拥有先行权" },
                { language: "es", content: "Verdadero — los vehículos que se incorporan siempre tienen el derecho de paso" },
              ],
            },
            {
              content: "Both must slow down and negotiate the merge equally",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双方都必须减速并平等协商汇入" },
                { language: "es", content: "Ambos deben reducir la velocidad y negociar la incorporación por igual" },
              ],
            },
          ],
        },
        {
          content: "When entering a roundabout in Florida, who has the right-of-way?",
          explanation: "In a roundabout, vehicles already inside the circle have the right-of-way. Entering vehicles must yield to all traffic already circulating. Slow down when approaching, yield, then enter when a safe gap exists.",
          handbookSection: "Right-of-Way — Uncontrolled Intersections",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州进入环形交叉路口时，谁有先行权？", explanation: "在环形交叉路口，已在圆圈内行驶的车辆享有先行权。进入的车辆必须让行给所有已在环内行驶的车辆。接近时要减速，让行，然后在有安全间隙时进入。" },
            { language: "es", content: "Al entrar a una rotonda en Florida, ¿quién tiene el derecho de paso?", explanation: "En una rotonda, los vehículos que ya están dentro del círculo tienen el derecho de paso. Los vehículos que ingresan deben ceder el paso a todo el tráfico que ya circula. Reduzca la velocidad al acercarse, ceda el paso y luego ingrese cuando exista un espacio seguro." },
          ],
          options: [
            {
              content: "Vehicles already inside the roundabout",
              isCorrect: true,
              translations: [
                { language: "zh", content: "已在环形交叉路口内的车辆" },
                { language: "es", content: "Los vehículos que ya están dentro de la rotonda" },
              ],
            },
            {
              content: "Vehicles entering the roundabout from the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从右侧进入环形路口的车辆" },
                { language: "es", content: "Los vehículos que ingresan a la rotonda desde la derecha" },
              ],
            },
            {
              content: "The largest vehicle in the roundabout",
              isCorrect: false,
              translations: [
                { language: "zh", content: "环形路口中最大的车辆" },
                { language: "es", content: "El vehículo más grande en la rotonda" },
              ],
            },
            {
              content: "Vehicles entering from the main road always have priority",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从主干道进入的车辆总是优先" },
                { language: "es", content: "Los vehículos que ingresan desde la vía principal siempre tienen prioridad" },
              ],
            },
          ],
        },
        {
          content: "At an uncontrolled T-intersection, who has the right-of-way?",
          explanation: "At a T-intersection with no signs or signals, the vehicle on the terminating road (the road that ends) must yield to vehicles on the through road. The through road traffic does not have to stop.",
          handbookSection: "Right-of-Way — Uncontrolled Intersections",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在无控制的T形交叉路口，谁有先行权？", explanation: "在没有标志或信号的T形交叉路口，终止道路（即道路终端）上的车辆必须让行给通行道路上的车辆。通行道路上的车辆无需停车。" },
            { language: "es", content: "En una intersección en T sin control, ¿quién tiene el derecho de paso?", explanation: "En una intersección en T sin señales, el vehículo en la vía que termina debe ceder el paso a los vehículos en la vía de paso. El tráfico en la vía de paso no tiene que detenerse." },
          ],
          options: [
            {
              content: "Vehicles on the through road",
              isCorrect: true,
              translations: [
                { language: "zh", content: "通行道路上的车辆" },
                { language: "es", content: "Los vehículos en la vía de paso" },
              ],
            },
            {
              content: "Vehicles on the terminating road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "终止道路上的车辆" },
                { language: "es", content: "Los vehículos en la vía que termina" },
              ],
            },
            {
              content: "Whichever vehicle arrives first",
              isCorrect: false,
              translations: [
                { language: "zh", content: "先到达的车辆" },
                { language: "es", content: "El vehículo que llega primero" },
              ],
            },
            {
              content: "Both vehicles must stop and take turns",
              isCorrect: false,
              translations: [
                { language: "zh", content: "两辆车都必须停车并轮流通行" },
                { language: "es", content: "Ambos vehículos deben detenerse y turnarse" },
              ],
            },
          ],
        },
        {
          content: "In Florida, when must a driver yield to a pedestrian in a crosswalk?",
          explanation: "Florida law requires drivers to stop and remain stopped for pedestrians in any crosswalk — both marked and unmarked. This applies even at intersections without a stop sign or traffic light. Pedestrians in a crosswalk always have the right-of-way.",
          handbookSection: "Right-of-Way — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，驾驶员何时必须让行给人行横道上的行人？", explanation: "佛罗里达州法律要求驾驶员在任何人行横道（包括标示和未标示的）中为行人停车并保持停止状态。这适用于没有停车标志或交通信号灯的路口。人行横道上的行人始终享有先行权。" },
            { language: "es", content: "En Florida, ¿cuándo debe un conductor ceder el paso a un peatón en un cruce peatonal?", explanation: "La ley de Florida requiere que los conductores se detengan y permanezcan detenidos para los peatones en cualquier cruce peatonal, tanto marcado como no marcado. Esto se aplica incluso en intersecciones sin señal de pare o semáforo. Los peatones en un cruce peatonal siempre tienen el derecho de paso." },
          ],
          options: [
            {
              content: "Always — whenever a pedestrian is in any crosswalk, marked or unmarked",
              isCorrect: true,
              translations: [
                { language: "zh", content: "始终——只要行人在任何人行横道（标示或未标示），无论如何" },
                { language: "es", content: "Siempre — cuando un peatón está en cualquier cruce peatonal, marcado o no marcado" },
              ],
            },
            {
              content: "Only when there is a marked crosswalk with painted lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当有漆线标示的人行横道时" },
                { language: "es", content: "Solo cuando hay un cruce peatonal marcado con líneas pintadas" },
              ],
            },
            {
              content: "Only when a pedestrian is already halfway across the road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当行人已经走到路中央时" },
                { language: "es", content: "Solo cuando un peatón ya está a mitad del camino" },
              ],
            },
            {
              content: "Only when a traffic signal specifically shows a walk signal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当交通信号灯特别显示行人通行信号时" },
                { language: "es", content: "Solo cuando una señal de tráfico muestra específicamente una señal de paso" },
              ],
            },
          ],
        },
        {
          content: "When making a left turn at an intersection, you must yield to:",
          explanation: "When turning left, you must yield to all oncoming traffic that is close enough to be a hazard, as well as to pedestrians crossing the road you are turning onto. Oncoming traffic does not need to slow down for your left turn.",
          handbookSection: "Right-of-Way — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在路口左转时，您必须让行给：", explanation: "左转时，您必须让行给所有足够近以构成危险的对向来车，以及穿越您转入道路的行人。对向来车无需为您的左转减速。" },
            { language: "es", content: "Al girar a la izquierda en una intersección, debe ceder el paso a:", explanation: "Al girar a la izquierda, debe ceder el paso a todo el tráfico en sentido contrario que esté lo suficientemente cerca como para ser un peligro, así como a los peatones que cruzan la vía hacia la que va a girar. El tráfico en sentido contrario no necesita reducir la velocidad para su giro a la izquierda." },
          ],
          options: [
            {
              content: "All oncoming traffic and pedestrians crossing the road you are turning onto",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有对向来车和穿越您转入道路的行人" },
                { language: "es", content: "Todo el tráfico en sentido contrario y los peatones que cruzan la vía hacia la que va a girar" },
              ],
            },
            {
              content: "Only vehicles directly in the intersection",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅限直接在路口的车辆" },
                { language: "es", content: "Solo los vehículos directamente en la intersección" },
              ],
            },
            {
              content: "Only pedestrians, not oncoming vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅限行人，不包括对向来车" },
                { language: "es", content: "Solo los peatones, no los vehículos en sentido contrario" },
              ],
            },
            {
              content: "No one — you have the right-of-way when turning left with a green light",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无需让行——绿灯左转时您有先行权" },
                { language: "es", content: "Nadie — usted tiene el derecho de paso al girar a la izquierda con luz verde" },
              ],
            },
          ],
        },
      ],
    },
    // ─── SPEED LIMITS & SPECIAL ZONES ─────────────────────────────────────────
    {
      name: "Speed Limits & Special Zones",
      nameEn: "Speed Limits & Special Zones",
      description: "Florida speed limits, school zones, work zones, and safe following distance",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "限速与特殊区域", description: "佛罗里达限速、学校区域、施工区域及安全跟车距离" },
        { language: "es", name: "Límites de Velocidad y Zonas Especiales", description: "Límites de velocidad en Florida, zonas escolares, obras y distancia de seguimiento" },
      ],
      questions: [
        {
          content: "What is the maximum speed limit on Florida's limited-access highways (interstates) unless otherwise posted?",
          explanation: "The maximum speed limit on Florida's limited-access highways and interstates is 70 mph. Some sections may have lower posted limits.",
          handbookSection: "Speed Limits — Maximum Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州限制通行高速公路（州际公路）的最高限速是多少（除非另有标示）？", explanation: "佛罗里达州限制通行高速公路和州际公路的最高限速为每小时70英里。某些路段可能有较低的标示限速。" },
            { language: "es", content: "¿Cuál es el límite máximo de velocidad en las autopistas de acceso limitado (interestatales) de Florida, a menos que se indique lo contrario?", explanation: "El límite máximo de velocidad en las autopistas de acceso limitado e interestatales de Florida es de 70 mph. Algunas secciones pueden tener límites más bajos señalizados." },
          ],
          options: [
            {
              content: "70 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时70英里" },
                { language: "es", content: "70 mph" },
              ],
            },
            {
              content: "65 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时65英里" },
                { language: "es", content: "65 mph" },
              ],
            },
            {
              content: "55 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时55英里" },
                { language: "es", content: "55 mph" },
              ],
            },
            {
              content: "75 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时75英里" },
                { language: "es", content: "75 mph" },
              ],
            },
          ],
        },
        {
          content: "What is the default speed limit in a business or residential district in Florida?",
          explanation: "The default speed limit in a business or residential district is 30 mph unless a different limit is posted. This lower speed protects pedestrians and cyclists in urban areas.",
          handbookSection: "Speed Limits — Default Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州商业区或住宅区的默认限速是多少？", explanation: "商业区或住宅区的默认限速为每小时30英里，除非另有标示。这一较低的限速是为了保护城市地区的行人和骑自行车者。" },
            { language: "es", content: "¿Cuál es el límite de velocidad predeterminado en un distrito comercial o residencial en Florida?", explanation: "El límite de velocidad predeterminado en un distrito comercial o residencial es de 30 mph, a menos que se indique un límite diferente. Esta velocidad más baja protege a los peatones y ciclistas en áreas urbanas." },
          ],
          options: [
            {
              content: "30 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时30英里" },
                { language: "es", content: "30 mph" },
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
              content: "35 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时35英里" },
                { language: "es", content: "35 mph" },
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
          content: "What is the speed limit in a school zone when children are present or flashing lights are active?",
          explanation: "In Florida, the speed limit in a school zone is 20 mph during school hours or when the flashing lights are activated. This protects children going to and from school.",
          handbookSection: "Speed Limits — School Zones",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当学校区域内有儿童或闪光灯启动时，限速是多少？", explanation: "在佛罗里达州，学校区域在上课时间或闪光灯启动时的限速为每小时20英里。这是为了保护上下学的儿童。" },
            { language: "es", content: "¿Cuál es el límite de velocidad en una zona escolar cuando hay niños presentes o las luces intermitentes están activas?", explanation: "En Florida, el límite de velocidad en una zona escolar es de 20 mph durante el horario escolar o cuando las luces intermitentes están activadas. Esto protege a los niños que van y vienen de la escuela." },
          ],
          options: [
            {
              content: "20 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时20英里" },
                { language: "es", content: "20 mph" },
              ],
            },
            {
              content: "15 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时15英里" },
                { language: "es", content: "15 mph" },
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
          ],
        },
        {
          content: "What is the maximum speed on a rural two-lane road in Florida when no limit is posted?",
          explanation: "The default speed limit on rural two-lane roads in Florida is 55 mph. This applies to roads outside of urban and residential areas where no speed limit sign is posted.",
          handbookSection: "Speed Limits — Default Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，当没有标示限速时，乡村双车道公路的最高限速是多少？", explanation: "佛罗里达州乡村双车道公路的默认限速为每小时55英里。这适用于城市和住宅区以外没有限速标志的道路。" },
            { language: "es", content: "¿Cuál es la velocidad máxima en una carretera rural de dos carriles en Florida cuando no hay límite señalizado?", explanation: "El límite de velocidad predeterminado en carreteras rurales de dos carriles en Florida es de 55 mph. Esto aplica a carreteras fuera de áreas urbanas y residenciales donde no hay señal de límite de velocidad." },
          ],
          options: [
            {
              content: "55 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时55英里" },
                { language: "es", content: "55 mph" },
              ],
            },
            {
              content: "45 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时45英里" },
                { language: "es", content: "45 mph" },
              ],
            },
            {
              content: "60 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时60英里" },
                { language: "es", content: "60 mph" },
              ],
            },
            {
              content: "65 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时65英里" },
                { language: "es", content: "65 mph" },
              ],
            },
          ],
        },
        {
          content: "When driving at night, you should:",
          explanation: "At night you should drive at a speed that allows you to stop within the distance your headlights illuminate. This is called driving within the range of your headlights.",
          handbookSection: "Speed Limits — Night Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "夜间驾驶时，您应该：", explanation: "夜间驾驶时，您应该以能在车头灯照明范围内停车的速度行驶。这被称为「在车头灯照射范围内驾驶」。" },
            { language: "es", content: "Al conducir de noche, usted debe:", explanation: "De noche debe conducir a una velocidad que le permita detenerse dentro de la distancia que iluminan sus faros. Esto se llama conducir dentro del alcance de sus faros." },
          ],
          options: [
            {
              content: "Drive at a speed at which you can stop within the range of your headlights",
              isCorrect: true,
              translations: [
                { language: "zh", content: "以能在车头灯照射范围内停车的速度行驶" },
                { language: "es", content: "Conducir a una velocidad que le permita detenerse dentro del alcance de sus faros" },
              ],
            },
            {
              content: "Drive 10 mph below the posted speed limit at all times",
              isCorrect: false,
              translations: [
                { language: "zh", content: "始终以低于限速每小时10英里的速度行驶" },
                { language: "es", content: "Conducir siempre 10 mph por debajo del límite de velocidad señalizado" },
              ],
            },
            {
              content: "Drive at the same speed as during daylight",
              isCorrect: false,
              translations: [
                { language: "zh", content: "以与白天相同的速度行驶" },
                { language: "es", content: "Conducir a la misma velocidad que durante el día" },
              ],
            },
            {
              content: "Use high beams at all times to see farther",
              isCorrect: false,
              translations: [
                { language: "zh", content: "始终使用远光灯以看得更远" },
                { language: "es", content: "Usar luces altas en todo momento para ver más lejos" },
              ],
            },
          ],
        },
        {
          content: "What is the recommended following distance under normal driving conditions in Florida?",
          explanation: "Florida recommends a minimum 3-second following distance. Pick a fixed point; when the vehicle ahead passes it, count to three. If you reach it before finishing, increase your following distance.",
          handbookSection: "Speed Limits — Following Distance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州正常驾驶条件下，建议的跟车距离是多少？", explanation: "佛罗里达州建议至少保持3秒的跟车距离。选择一个固定参照物；当前车经过该参照物时开始数3秒。如果您在数完之前就到达该参照物，请增加跟车距离。" },
            { language: "es", content: "¿Cuál es la distancia de seguimiento recomendada en condiciones normales de conducción en Florida?", explanation: "Florida recomienda una distancia de seguimiento mínima de 3 segundos. Elija un punto fijo; cuando el vehículo de adelante lo pase, cuente hasta tres. Si llega antes de terminar, aumente su distancia de seguimiento." },
          ],
          options: [
            {
              content: "At least 3 seconds",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少3秒" },
                { language: "es", content: "Al menos 3 segundos" },
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
              content: "At least 1 car length per 10 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每10英里时速至少保持1个车身长度" },
                { language: "es", content: "Al menos 1 longitud de auto por cada 10 mph" },
              ],
            },
            {
              content: "At least 4 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少4秒" },
                { language: "es", content: "Al menos 4 segundos" },
              ],
            },
          ],
        },
        {
          content: "In a construction or work zone, if workers are present, fines for traffic violations are:",
          explanation: "In Florida, when workers are present in a construction or maintenance zone, fines for moving violations are doubled. This increased penalty protects road workers.",
          handbookSection: "Speed Limits — Work Zones",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在施工区或作业区，如果有工人在场，交通违规罚款将：", explanation: "在佛罗里达州，当施工区或维护区域内有工人在场时，移动违规的罚款将加倍。这一加重处罚是为了保护道路工人。" },
            { language: "es", content: "En una zona de construcción o trabajo, si hay trabajadores presentes, las multas por infracciones de tránsito son:", explanation: "En Florida, cuando hay trabajadores presentes en una zona de construcción o mantenimiento, las multas por infracciones de movimiento se duplican. Esta penalidad aumentada protege a los trabajadores viales." },
          ],
          options: [
            {
              content: "Doubled when workers are present",
              isCorrect: true,
              translations: [
                { language: "zh", content: "有工人在场时加倍" },
                { language: "es", content: "Duplicadas cuando hay trabajadores presentes" },
              ],
            },
            {
              content: "Tripled when workers are present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "有工人在场时加三倍" },
                { language: "es", content: "Triplicadas cuando hay trabajadores presentes" },
              ],
            },
            {
              content: "The same as in regular driving zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "与普通驾驶区域相同" },
                { language: "es", content: "Iguales que en zonas de conducción regulares" },
              ],
            },
            {
              content: "Doubled only if the speed limit is exceeded by 10 mph or more",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在超速10英里或以上时加倍" },
                { language: "es", content: "Duplicadas solo si se excede el límite de velocidad por 10 mph o más" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum following distance you should maintain when towing a trailer or when driving in heavy traffic?",
          explanation: "When towing a trailer or driving in heavy traffic and adverse conditions, you should increase your following distance to at least 4 seconds to allow more stopping distance.",
          handbookSection: "Speed Limits — Following Distance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当拖曳挂车或在交通繁忙时驾驶，您应保持的最小跟车距离是多少？", explanation: "当拖曳挂车或在交通繁忙和不利条件下驾驶时，您应将跟车距离增加到至少4秒，以留出更多的制动距离。" },
            { language: "es", content: "¿Cuál es la distancia mínima de seguimiento que debe mantener cuando remolca un tráiler o cuando conduce en tráfico pesado?", explanation: "Cuando remolca un tráiler o conduce en tráfico pesado y condiciones adversas, debe aumentar su distancia de seguimiento a al menos 4 segundos para permitir más distancia de frenado." },
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
              content: "At least 3 seconds — same as normal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少3秒——与正常情况相同" },
                { language: "es", content: "Al menos 3 segundos — igual que lo normal" },
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
          ],
        },
        {
          content: "What is the maximum speed on a divided highway that is NOT a limited-access road in Florida?",
          explanation: "The speed limit on divided highways that are not limited-access roads is 65 mph in Florida. Limited-access interstates allow up to 70 mph.",
          handbookSection: "Speed Limits — Maximum Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，非限制通行的分隔式公路的最高限速是多少？", explanation: "在佛罗里达州，非限制通行的分隔式公路的限速为每小时65英里。限制通行的州际公路允许最高每小时70英里。" },
            { language: "es", content: "¿Cuál es la velocidad máxima en una carretera dividida que NO es de acceso limitado en Florida?", explanation: "El límite de velocidad en carreteras divididas que no son de acceso limitado es de 65 mph en Florida. Las interestatales de acceso limitado permiten hasta 70 mph." },
          ],
          options: [
            {
              content: "65 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时65英里" },
                { language: "es", content: "65 mph" },
              ],
            },
            {
              content: "70 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时70英里" },
                { language: "es", content: "70 mph" },
              ],
            },
            {
              content: "60 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时60英里" },
                { language: "es", content: "60 mph" },
              ],
            },
            {
              content: "55 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时55英里" },
                { language: "es", content: "55 mph" },
              ],
            },
          ],
        },
        {
          content: "You are about to drive into heavy rain or fog. What should you do with your speed?",
          explanation: "In poor visibility conditions such as rain, fog, or smoke, you must reduce your speed well below the posted limit. Florida law requires you to drive at a safe speed for the existing conditions, even if that means going much slower than the posted limit.",
          handbookSection: "Speed Limits — Adverse Conditions",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您即将驶入大雨或浓雾中。您应该如何调整车速？", explanation: "在能见度较差的条件下，如雨天、雾天或烟雾中，您必须将车速降至远低于限速标示。佛罗里达州法律要求您根据现有条件以安全速度驾驶，即使这意味着要比限速慢很多。" },
            { language: "es", content: "Está a punto de conducir hacia lluvia intensa o niebla. ¿Qué debe hacer con su velocidad?", explanation: "En condiciones de poca visibilidad como lluvia, niebla o humo, debe reducir su velocidad muy por debajo del límite señalizado. La ley de Florida requiere que conduzca a una velocidad segura para las condiciones existentes, aunque eso signifique ir mucho más lento que el límite señalizado." },
          ],
          options: [
            {
              content: "Reduce speed significantly below the posted limit for safety",
              isCorrect: true,
              translations: [
                { language: "zh", content: "为安全起见，将车速大幅降至低于限速标示" },
                { language: "es", content: "Reducir la velocidad significativamente por debajo del límite señalizado por seguridad" },
              ],
            },
            {
              content: "Maintain the posted speed limit and use your horn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "保持限速行驶并使用喇叭" },
                { language: "es", content: "Mantener el límite de velocidad señalizado y usar la bocina" },
              ],
            },
            {
              content: "Increase speed to minimize time spent in poor visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速以减少在能见度差的区域的时间" },
                { language: "es", content: "Aumentar la velocidad para minimizar el tiempo en poca visibilidad" },
              ],
            },
            {
              content: "Only slow down if visibility drops below 100 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在能见度降至100英尺以下时才减速" },
                { language: "es", content: "Solo reducir la velocidad si la visibilidad cae por debajo de 100 pies" },
              ],
            },
          ],
        },
        {
          content: "What is the default speed limit in Florida for residential areas and business districts unless otherwise posted?",
          explanation: "Unless otherwise posted, the default speed limit in Florida is 30 mph in residential areas and business districts. Always look for posted signs, as they may set a different limit.",
          handbookSection: "Speed Limits — Default Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，除非另有标示，住宅区和商业区的默认限速是多少？", explanation: "除非另有标示，佛罗里达州住宅区和商业区的默认限速为每小时30英里。请务必注意路牌，因为标示可能会设定不同的限速。" },
            { language: "es", content: "¿Cuál es el límite de velocidad predeterminado en Florida para áreas residenciales y distritos comerciales, a menos que se indique lo contrario?", explanation: "A menos que se indique lo contrario, el límite de velocidad predeterminado en Florida es de 30 mph en áreas residenciales y distritos comerciales. Siempre busque señales colocadas, ya que pueden establecer un límite diferente." },
          ],
          options: [
            {
              content: "30 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时30英里" },
                { language: "es", content: "30 mph" },
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
              content: "35 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时35英里" },
                { language: "es", content: "35 mph" },
              ],
            },
            {
              content: "45 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时45英里" },
                { language: "es", content: "45 mph" },
              ],
            },
          ],
        },
        {
          content: "In a Florida school zone, what is the speed limit when the flashing yellow light is active?",
          explanation: "When a school zone's flashing yellow beacon is active, drivers must reduce speed to 20 mph. This typically applies during school hours when children are present. Fines in school zones are doubled.",
          handbookSection: "Speed Limits — School Zones",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州学校区域，当闪烁的黄灯亮起时，限速是多少？", explanation: "当学校区域的闪烁黄色信号灯亮起时，驾驶员必须将车速降至每小时20英里。这通常适用于有儿童出现的上学时间。学校区域内的罚款加倍。" },
            { language: "es", content: "En una zona escolar de Florida, ¿cuál es el límite de velocidad cuando la luz amarilla intermitente está activa?", explanation: "Cuando la baliza amarilla intermitente de una zona escolar está activa, los conductores deben reducir la velocidad a 20 mph. Esto generalmente se aplica durante el horario escolar cuando hay niños presentes. Las multas en zonas escolares se duplican." },
          ],
          options: [
            {
              content: "20 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时20英里" },
                { language: "es", content: "20 mph" },
              ],
            },
            {
              content: "15 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时15英里" },
                { language: "es", content: "15 mph" },
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
          ],
        },
        {
          content: "What happens to traffic fines in Florida construction (work) zones?",
          explanation: "In Florida, fines for moving violations in active construction zones are doubled. This is to protect road workers. You must obey posted speed limits in work zones even if workers are not immediately visible.",
          handbookSection: "Speed Limits — Work Zones",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州的施工（工作）区域，交通罚款会怎样？", explanation: "在佛罗里达州，在活跃施工区域内违反交通规则的罚款加倍。这是为了保护道路工人。即使工人不在眼前，您也必须遵守施工区域内的限速标示。" },
            { language: "es", content: "¿Qué sucede con las multas de tráfico en las zonas de construcción (trabajo) de Florida?", explanation: "En Florida, las multas por infracciones de tránsito en zonas de construcción activas se duplican. Esto es para proteger a los trabajadores viales. Debe obedecer los límites de velocidad señalizados en las zonas de trabajo, incluso si los trabajadores no son visibles de inmediato." },
          ],
          options: [
            {
              content: "Fines are doubled for moving violations",
              isCorrect: true,
              translations: [
                { language: "zh", content: "行驶违规罚款加倍" },
                { language: "es", content: "Las multas se duplican por infracciones de tránsito" },
              ],
            },
            {
              content: "Fines are the same as on regular roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "罚款与普通道路相同" },
                { language: "es", content: "Las multas son las mismas que en las carreteras regulares" },
              ],
            },
            {
              content: "Fines are tripled for all violations",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有违规罚款三倍" },
                { language: "es", content: "Las multas se triplican por todas las infracciones" },
              ],
            },
            {
              content: "Fines only apply if workers are present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当工人在场时罚款才适用" },
                { language: "es", content: "Las multas solo se aplican si hay trabajadores presentes" },
              ],
            },
          ],
        },
        {
          content: "What is the recommended following distance rule for most driving conditions in Florida?",
          explanation: "The 3-second rule is the standard recommended following distance. Pick a fixed object ahead; when the vehicle in front passes it, count 3 seconds before you reach that same object. Increase to 4 or more seconds in bad weather or when following large trucks.",
          handbookSection: "Speed Limits — Following Distance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州大多数驾驶条件下，建议的跟车距离规则是什么？", explanation: "3秒规则是标准推荐的跟车距离。选择前方一个固定物体；当前车经过它时，数3秒后您才到达同一物体。在恶劣天气或跟随大型卡车时，将时间增加到4秒或更多。" },
            { language: "es", content: "¿Cuál es la regla de distancia de seguimiento recomendada para la mayoría de las condiciones de manejo en Florida?", explanation: "La regla de los 3 segundos es la distancia de seguimiento estándar recomendada. Elija un objeto fijo adelante; cuando el vehículo de adelante lo pase, cuente 3 segundos antes de llegar a ese mismo objeto. Aumente a 4 o más segundos en mal tiempo o al seguir camiones grandes." },
          ],
          options: [
            {
              content: "3-second following distance",
              isCorrect: true,
              translations: [
                { language: "zh", content: "3秒跟车距离" },
                { language: "es", content: "Distancia de seguimiento de 3 segundos" },
              ],
            },
            {
              content: "1-second following distance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1秒跟车距离" },
                { language: "es", content: "Distancia de seguimiento de 1 segundo" },
              ],
            },
            {
              content: "2-second following distance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "2秒跟车距离" },
                { language: "es", content: "Distancia de seguimiento de 2 segundos" },
              ],
            },
            {
              content: "5-car-length following distance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "5辆车身长度的跟车距离" },
                { language: "es", content: "Distancia de seguimiento de 5 longitudes de vehículo" },
              ],
            },
          ],
        },
        {
          content: "At what speed must you drive when passing within 100 feet of a bridge, tunnel, or railroad crossing in Florida?",
          explanation: "Florida law requires drivers to reduce speed to no more than 15 mph when passing within 100 feet of a railroad crossing. Bridges and tunnels may have their own posted limits. Always look for posted signs near these structures.",
          handbookSection: "Speed Limits — Default Limits",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在佛罗里达州，经过铁路道口100英尺范围内时，您必须以多快的速度行驶？", explanation: "佛罗里达州法律要求驾驶员在铁路道口100英尺范围内将车速降至不超过每小时15英里。桥梁和隧道可能有自己的标示限速。请务必注意这些设施附近的路牌。" },
            { language: "es", content: "¿A qué velocidad debe conducir cuando pasa dentro de 100 pies de un puente, túnel o cruce ferroviario en Florida?", explanation: "La ley de Florida requiere que los conductores reduzcan la velocidad a no más de 15 mph al pasar dentro de los 100 pies de un cruce ferroviario. Los puentes y túneles pueden tener sus propios límites señalizados. Siempre busque señales cerca de estas estructuras." },
          ],
          options: [
            {
              content: "No more than 15 mph near railroad crossings",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在铁路道口附近不超过每小时15英里" },
                { language: "es", content: "No más de 15 mph cerca de los cruces ferroviarios" },
              ],
            },
            {
              content: "No more than 25 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不超过每小时25英里" },
                { language: "es", content: "No más de 25 mph" },
              ],
            },
            {
              content: "No more than 30 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不超过每小时30英里" },
                { language: "es", content: "No más de 30 mph" },
              ],
            },
            {
              content: "There is no special speed requirement",
              isCorrect: false,
              translations: [
                { language: "zh", content: "没有特殊的速度要求" },
                { language: "es", content: "No hay requisito especial de velocidad" },
              ],
            },
          ],
        },
        {
          content: "You are driving at night on a road with no streetlights. What is the safest approach to speed?",
          explanation: "At night, your headlights illuminate only about 350 feet ahead with high beams. You should drive at a speed that allows you to stop within the distance illuminated — this is called 'driving within the range of your headlights.' Overdriving your headlights is dangerous.",
          handbookSection: "Speed Limits — Night Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "您在没有路灯的道路上夜间行驶。最安全的速度方法是什么？", explanation: "夜间，您的远光灯只能照亮约350英尺前方。您应该以能在照明范围内停车的速度行驶——这称为「在车灯照射范围内驾驶」。超出车灯照射范围行驶是危险的。" },
            { language: "es", content: "Está conduciendo de noche en una carretera sin alumbrado público. ¿Cuál es el enfoque más seguro de velocidad?", explanation: "De noche, sus faros iluminan solo unos 350 pies hacia adelante con luces altas. Debe conducir a una velocidad que le permita detenerse dentro de la distancia iluminada — esto se llama 'conducir dentro del alcance de sus faros'. Conducir más allá del alcance de sus faros es peligroso." },
          ],
          options: [
            {
              content: "Drive at a speed that allows stopping within the distance lit by headlights",
              isCorrect: true,
              translations: [
                { language: "zh", content: "以能在车灯照射范围内停车的速度行驶" },
                { language: "es", content: "Conduzca a una velocidad que permita detenerse dentro de la distancia iluminada por los faros" },
              ],
            },
            {
              content: "Always use the posted speed limit regardless of visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无论能见度如何，始终遵守限速标示" },
                { language: "es", content: "Siempre use el límite de velocidad señalizado independientemente de la visibilidad" },
              ],
            },
            {
              content: "Drive faster to spend less time on dark roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加快速度以减少在黑暗道路上的时间" },
                { language: "es", content: "Conduzca más rápido para pasar menos tiempo en carreteras oscuras" },
              ],
            },
            {
              content: "Reduce speed by exactly 10 mph from the posted limit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从限速标示减少恰好10英里的时速" },
                { language: "es", content: "Reduzca la velocidad exactamente 10 mph del límite señalizado" },
              ],
            },
          ],
        },
        {
          content: "What is the default speed limit on Florida state roads (non-interstate) in rural areas?",
          explanation: "The default speed limit on Florida state roads (not limited-access) in rural areas is 65 mph unless otherwise posted. On limited-access highways (interstates) it is 70 mph. Urban state roads typically have lower posted limits.",
          handbookSection: "Speed Limits — Maximum Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州农村地区的州道（非州际公路）上，默认限速是多少？", explanation: "除非另有标示，佛罗里达州农村地区州道（非限制通行）的默认限速为每小时65英里。限制通行高速公路（州际公路）为每小时70英里。城市州道通常有较低的标示限速。" },
            { language: "es", content: "¿Cuál es el límite de velocidad predeterminado en las carreteras estatales de Florida (no interestatales) en áreas rurales?", explanation: "El límite de velocidad predeterminado en las carreteras estatales de Florida (sin acceso limitado) en áreas rurales es de 65 mph a menos que se indique lo contrario. En autopistas de acceso limitado (interestatales) es de 70 mph. Las carreteras estatales urbanas generalmente tienen límites más bajos señalizados." },
          ],
          options: [
            {
              content: "65 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时65英里" },
                { language: "es", content: "65 mph" },
              ],
            },
            {
              content: "55 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时55英里" },
                { language: "es", content: "55 mph" },
              ],
            },
            {
              content: "70 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时70英里" },
                { language: "es", content: "70 mph" },
              ],
            },
            {
              content: "60 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时60英里" },
                { language: "es", content: "60 mph" },
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
      description: "Florida DUI laws, BAC limits, implied consent, and penalties",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "酒精、药物与醉驾", description: "佛罗里达DUI法律、血液酒精含量限制、默示同意及处罚" },
        { language: "es", name: "Alcohol, Drogas y Conducción Bajo Influencia", description: "Leyes DUI de Florida, límites de BAC, consentimiento implícito y penalidades" },
      ],
      questions: [
        {
          content: "What blood alcohol content (BAC) level constitutes DUI (Driving Under the Influence) for non-commercial adult drivers in Florida?",
          explanation: "In Florida, a driver with a BAC of 0.08 or higher is considered legally impaired and can be charged with DUI. This applies to drivers age 21 and over.",
          handbookSection: "Alcohol & Drugs — BAC Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，非商业成年驾驶员的血液酒精浓度（BAC）达到多少构成酒驾（DUI）？", explanation: "在佛罗里达州，驾驶员的血液酒精浓度达到0.08或更高即被视为法定醉酒状态，可被指控酒驾。此规定适用于21岁及以上的驾驶员。" },
            { language: "es", content: "¿Qué nivel de concentración de alcohol en sangre (BAC) constituye DUI (Conducir Bajo la Influencia) para conductores adultos no comerciales en Florida?", explanation: "En Florida, un conductor con un BAC de 0.08 o más se considera legalmente impedido y puede ser acusado de DUI. Esto aplica a conductores de 21 años o más." },
          ],
          options: [
            {
              content: "0.08 or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.08或更高" },
                { language: "es", content: "0.08 o más" },
              ],
            },
            {
              content: "0.10 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.10或更高" },
                { language: "es", content: "0.10 o más" },
              ],
            },
            {
              content: "0.05 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.05或更高" },
                { language: "es", content: "0.05 o más" },
              ],
            },
            {
              content: "0.12 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.12或更高" },
                { language: "es", content: "0.12 o más" },
              ],
            },
          ],
        },
        {
          content: "What is the BAC limit for commercial vehicle drivers in Florida?",
          explanation: "Commercial driver license (CDL) holders are held to a stricter standard. A commercial driver with a BAC of 0.04 or higher is considered legally impaired for DUI purposes.",
          handbookSection: "Alcohol & Drugs — BAC Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，商业车辆驾驶员的血液酒精浓度限制是多少？", explanation: "商业驾驶执照（CDL）持有人需遵守更严格的标准。商业驾驶员的血液酒精浓度达到0.04或更高即被视为法定醉酒状态，可构成酒驾。" },
            { language: "es", content: "¿Cuál es el límite de BAC para conductores de vehículos comerciales en Florida?", explanation: "Los titulares de licencia de conducir comercial (CDL) están sujetos a un estándar más estricto. Un conductor comercial con un BAC de 0.04 o más se considera legalmente impedido para propósitos de DUI." },
          ],
          options: [
            {
              content: "0.04 or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.04或更高" },
                { language: "es", content: "0.04 o más" },
              ],
            },
            {
              content: "0.08 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.08或更高" },
                { language: "es", content: "0.08 o más" },
              ],
            },
            {
              content: "0.06 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.06或更高" },
                { language: "es", content: "0.06 o más" },
              ],
            },
            {
              content: "0.02 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.02或更高" },
                { language: "es", content: "0.02 o más" },
              ],
            },
          ],
        },
        {
          content: "Under Florida's Zero Tolerance Law, what BAC is illegal for drivers under age 21?",
          explanation: "Florida's Zero Tolerance Law makes it illegal for drivers under age 21 to drive with a BAC of 0.02 or higher. This reflects a strict position that underage drivers should not drink and drive at any level.",
          handbookSection: "Alcohol & Drugs — Zero Tolerance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "根据佛罗里达州的「零容忍法」，21岁以下驾驶员的血液酒精浓度达到多少属于违法？", explanation: "佛罗里达州的「零容忍法」规定，21岁以下的驾驶员血液酒精浓度达到0.02或更高即属违法驾驶。这反映了对未成年驾驶员在任何程度上都不应酒后驾车的严格立场。" },
            { language: "es", content: "Bajo la Ley de Tolerancia Cero de Florida, ¿qué BAC es ilegal para conductores menores de 21 años?", explanation: "La Ley de Tolerancia Cero de Florida hace ilegal que conductores menores de 21 años conduzcan con un BAC de 0.02 o más. Esto refleja una posición estricta de que los conductores menores de edad no deben beber y conducir en ningún nivel." },
          ],
          options: [
            {
              content: "0.02 or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.02或更高" },
                { language: "es", content: "0.02 o más" },
              ],
            },
            {
              content: "0.05 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.05或更高" },
                { language: "es", content: "0.05 o más" },
              ],
            },
            {
              content: "0.08 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.08或更高" },
                { language: "es", content: "0.08 o más" },
              ],
            },
            {
              content: "Any measurable amount — 0.01 or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何可测量的含量——0.01或更高" },
                { language: "es", content: "Cualquier cantidad medible — 0.01 o más" },
              ],
            },
          ],
        },
        {
          content: "What does Florida's Implied Consent Law state?",
          explanation: "Florida's Implied Consent Law means that by driving on Florida's roads, you agree to submit to a chemical test (breath, blood, or urine) if a law enforcement officer has probable cause to believe you are impaired.",
          handbookSection: "Alcohol & Drugs — Implied Consent",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州的「默示同意法」规定了什么？", explanation: "佛罗里达州的「默示同意法」意味着，当您在佛罗里达州的道路上驾驶时，即表示您同意在执法人员有合理理由认为您处于醉酒状态时接受化学检测（呼气、血液或尿液检测）。" },
            { language: "es", content: "¿Qué establece la Ley de Consentimiento Implícito de Florida?", explanation: "La Ley de Consentimiento Implícito de Florida significa que al conducir en las carreteras de Florida, usted acepta someterse a una prueba química (aliento, sangre u orina) si un oficial de la ley tiene causa probable para creer que está impedido." },
          ],
          options: [
            {
              content: "By driving in Florida, you consent to chemical testing when lawfully requested",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在佛罗里达州驾驶即表示您同意在被合法要求时接受化学检测" },
                { language: "es", content: "Al conducir en Florida, usted consiente a pruebas químicas cuando se soliciten legalmente" },
              ],
            },
            {
              content: "You may refuse any chemical test without penalty",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您可以拒绝任何化学检测而不受处罚" },
                { language: "es", content: "Puede rechazar cualquier prueba química sin penalización" },
              ],
            },
            {
              content: "Police must obtain a court order before testing you",
              isCorrect: false,
              translations: [
                { language: "zh", content: "警方必须在检测前获得法院命令" },
                { language: "es", content: "La policía debe obtener una orden judicial antes de hacerle pruebas" },
              ],
            },
            {
              content: "Only a blood test is covered under implied consent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "默示同意仅涵盖血液检测" },
                { language: "es", content: "Solo la prueba de sangre está cubierta bajo el consentimiento implícito" },
              ],
            },
          ],
        },
        {
          content: "What are the consequences of refusing a chemical test under Florida's Implied Consent Law?",
          explanation: "Refusing a chemical test in Florida results in a 1-year license suspension for the first refusal and an 18-month suspension for a second refusal. A second refusal is also a first-degree misdemeanor.",
          handbookSection: "Alcohol & Drugs — Implied Consent",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据佛罗里达州的「默示同意法」，拒绝化学检测会有什么后果？", explanation: "在佛罗里达州拒绝化学检测，首次拒绝将被吊销驾照1年，第二次拒绝将被吊销18个月。第二次拒绝还构成一级轻罪。" },
            { language: "es", content: "¿Cuáles son las consecuencias de rechazar una prueba química bajo la Ley de Consentimiento Implícito de Florida?", explanation: "Rechazar una prueba química en Florida resulta en una suspensión de licencia de 1 año por el primer rechazo y una suspensión de 18 meses por el segundo rechazo. Un segundo rechazo también es un delito menor de primer grado." },
          ],
          options: [
            {
              content: "1-year license suspension for first refusal; 18 months for second refusal",
              isCorrect: true,
              translations: [
                { language: "zh", content: "首次拒绝吊销驾照1年；第二次拒绝吊销18个月" },
                { language: "es", content: "Suspensión de licencia de 1 año por primer rechazo; 18 meses por segundo rechazo" },
              ],
            },
            {
              content: "No penalty — refusal is your legal right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无处罚——拒绝是您的合法权利" },
                { language: "es", content: "Sin penalización — rechazar es su derecho legal" },
              ],
            },
            {
              content: "6-month suspension for any refusal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何拒绝均吊销驾照6个月" },
                { language: "es", content: "Suspensión de 6 meses por cualquier rechazo" },
              ],
            },
            {
              content: "Immediate arrest and jail time",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即逮捕并入狱" },
                { language: "es", content: "Arresto inmediato y tiempo en la cárcel" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum fine for a first DUI conviction in Florida?",
          explanation: "The minimum fine for a first DUI conviction in Florida is $500, with a maximum of $1,000. If the BAC was 0.15 or higher or a minor was in the vehicle, the minimum fine increases to $1,000.",
          handbookSection: "Alcohol & Drugs — DUI Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，首次酒驾定罪的最低罚款是多少？", explanation: "在佛罗里达州，首次酒驾定罪的最低罚款为500美元，最高可达1,000美元。如果血液酒精浓度达到0.15或更高，或车内有未成年人，最低罚款将增至1,000美元。" },
            { language: "es", content: "¿Cuál es la multa mínima por una primera condena de DUI en Florida?", explanation: "La multa mínima por una primera condena de DUI en Florida es $500, con un máximo de $1,000. Si el BAC fue 0.15 o más o había un menor en el vehículo, la multa mínima aumenta a $1,000." },
          ],
          options: [
            {
              content: "$500 (or $1,000 if BAC 0.15+ or minor in vehicle)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "500美元（如血液酒精浓度达0.15或更高或车内有未成年人则为1,000美元）" },
                { language: "es", content: "$500 (o $1,000 si BAC 0.15+ o menor en el vehículo)" },
              ],
            },
            {
              content: "$100",
              isCorrect: false,
              translations: [
                { language: "zh", content: "100美元" },
                { language: "es", content: "$100" },
              ],
            },
            {
              content: "$2,000",
              isCorrect: false,
              translations: [
                { language: "zh", content: "2,000美元" },
                { language: "es", content: "$2,000" },
              ],
            },
            {
              content: "$250",
              isCorrect: false,
              translations: [
                { language: "zh", content: "250美元" },
                { language: "es", content: "$250" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum license revocation period for a first DUI conviction in Florida?",
          explanation: "A first DUI conviction in Florida results in a minimum 180-day (6-month) license revocation. The revocation period can be up to one year.",
          handbookSection: "Alcohol & Drugs — DUI Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，首次酒驾定罪的最短吊销驾照期限是多久？", explanation: "在佛罗里达州，首次酒驾定罪将导致驾照被吊销至少180天（6个月）。吊销期限最长可达一年。" },
            { language: "es", content: "¿Cuál es el período mínimo de revocación de licencia por una primera condena de DUI en Florida?", explanation: "Una primera condena de DUI en Florida resulta en una revocación mínima de licencia de 180 días (6 meses). El período de revocación puede ser de hasta un año." },
          ],
          options: [
            {
              content: "Minimum 180 days (6 months)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "最少180天（6个月）" },
                { language: "es", content: "Mínimo 180 días (6 meses)" },
              ],
            },
            {
              content: "30 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "30天" },
                { language: "es", content: "30 días" },
              ],
            },
            {
              content: "1 year mandatory",
              isCorrect: false,
              translations: [
                { language: "zh", content: "强制1年" },
                { language: "es", content: "1 año obligatorio" },
              ],
            },
            {
              content: "90 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "90天" },
                { language: "es", content: "90 días" },
              ],
            },
          ],
        },
        {
          content: "A DUI conviction with a BAC of 0.15 or higher is called what in Florida?",
          explanation: "In Florida, a DUI with a BAC of 0.15 or higher is considered an enhanced or aggravated DUI. It carries higher fines (minimum $1,000 first offense) and may require ignition interlock device installation.",
          handbookSection: "Alcohol & Drugs — Enhanced DUI",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在佛罗里达州，血液酒精浓度达到0.15或更高的酒驾定罪被称为什么？", explanation: "在佛罗里达州，血液酒精浓度达到0.15或更高的酒驾被视为「加重酒驾」。这将面临更高的罚款（首次违规最低1,000美元），并可能需要安装点火互锁装置。" },
            { language: "es", content: "¿Cómo se llama una condena de DUI con un BAC de 0.15 o más en Florida?", explanation: "En Florida, un DUI con un BAC de 0.15 o más se considera un DUI agravado o con penalidades aumentadas. Conlleva multas más altas (mínimo $1,000 por primera ofensa) y puede requerir la instalación de un dispositivo de bloqueo de encendido." },
          ],
          options: [
            {
              content: "An enhanced DUI with higher fines and possible ignition interlock",
              isCorrect: true,
              translations: [
                { language: "zh", content: "加重酒驾，罚款更高并可能需安装点火互锁装置" },
                { language: "es", content: "Un DUI agravado con multas más altas y posible dispositivo de bloqueo de encendido" },
              ],
            },
            {
              content: "A standard DUI with the same penalties as 0.08",
              isCorrect: false,
              translations: [
                { language: "zh", content: "与0.08标准酒驾处罚相同的普通酒驾" },
                { language: "es", content: "Un DUI estándar con las mismas penalidades que 0.08" },
              ],
            },
            {
              content: "An automatic felony DUI",
              isCorrect: false,
              translations: [
                { language: "zh", content: "自动构成重罪酒驾" },
                { language: "es", content: "Un DUI de delito grave automático" },
              ],
            },
            {
              content: "This BAC level has no additional consequences",
              isCorrect: false,
              translations: [
                { language: "zh", content: "此血液酒精浓度水平无额外后果" },
                { language: "es", content: "Este nivel de BAC no tiene consecuencias adicionales" },
              ],
            },
          ],
        },
        {
          content: "Which of the following is legal while operating a motor vehicle in Florida?",
          explanation: "Hands-free use of a cell phone (such as through Bluetooth or a mounted device) is legal in Florida. Hand-held use of a cell phone while driving is prohibited, especially in school zones and work zones.",
          handbookSection: "Alcohol & Drugs — Distracted Driving",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州驾驶机动车时，以下哪项是合法的？", explanation: "在佛罗里达州，使用免提设备（如通过蓝牙或车载支架）打电话是合法的。驾驶时手持使用手机是被禁止的，尤其是在学区和施工区域。" },
            { language: "es", content: "¿Cuál de las siguientes acciones es legal mientras se opera un vehículo motorizado en Florida?", explanation: "El uso de un dispositivo manos libres para hacer llamadas (como a través de Bluetooth o un dispositivo montado) es legal en Florida. El uso del teléfono en la mano mientras se conduce está prohibido, especialmente en zonas escolares y zonas de trabajo." },
          ],
          options: [
            {
              content: "Using a hands-free device to make a call",
              isCorrect: true,
              translations: [
                { language: "zh", content: "使用免提设备打电话" },
                { language: "es", content: "Usar un dispositivo manos libres para hacer una llamada" },
              ],
            },
            {
              content: "Texting while the vehicle is moving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "车辆行驶时发短信" },
                { language: "es", content: "Enviar mensajes de texto mientras el vehículo está en movimiento" },
              ],
            },
            {
              content: "Holding the phone to your ear while driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶时手持手机贴耳通话" },
                { language: "es", content: "Sostener el teléfono en la oreja mientras conduce" },
              ],
            },
            {
              content: "Reading a text message at a red light",
              isCorrect: false,
              translations: [
                { language: "zh", content: "红灯时阅读短信" },
                { language: "es", content: "Leer un mensaje de texto en un semáforo en rojo" },
              ],
            },
          ],
        },
        {
          content: "When is it illegal to possess an open container of alcohol in a motor vehicle in Florida?",
          explanation: "In Florida, it is illegal for the driver or any passenger to have an open container of alcohol in the passenger area of a motor vehicle while the vehicle is on a public road.",
          handbookSection: "Alcohol & Drugs — Open Container",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，何时在机动车内持有开封的酒精容器属于违法？", explanation: "在佛罗里达州，当车辆行驶在公共道路上时，驾驶员或任何乘客在乘客区域内持有开封的酒精容器均属违法。" },
            { language: "es", content: "¿Cuándo es ilegal poseer un recipiente abierto de alcohol en un vehículo motorizado en Florida?", explanation: "En Florida, es ilegal que el conductor o cualquier pasajero tenga un recipiente abierto de alcohol en el área de pasajeros de un vehículo motorizado mientras el vehículo está en una vía pública." },
          ],
          options: [
            {
              content: "Any time an open container is in the passenger area on a public road",
              isCorrect: true,
              translations: [
                { language: "zh", content: "任何时候在公共道路上乘客区域内有开封的酒精容器" },
                { language: "es", content: "En cualquier momento que haya un recipiente abierto en el área de pasajeros en una vía pública" },
              ],
            },
            {
              content: "Only when the driver is drinking from the container",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当驾驶员正在饮用容器内的酒精时" },
                { language: "es", content: "Solo cuando el conductor está bebiendo del recipiente" },
              ],
            },
            {
              content: "Only when driving above the speed limit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当超速行驶时" },
                { language: "es", content: "Solo cuando se conduce por encima del límite de velocidad" },
              ],
            },
            {
              content: "Open containers are legal as long as the driver is not drinking",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要驾驶员不喝酒，开封容器是合法的" },
                { language: "es", content: "Los recipientes abiertos son legales siempre que el conductor no esté bebiendo" },
              ],
            },
          ],
        },
        {
          content: "A driver is impaired by prescription medication. Can they be charged with DUI in Florida?",
          explanation: "Yes. In Florida, DUI applies to any driver impaired by alcohol, controlled substances, or any chemical substance — including legally prescribed medications. If your ability to drive is impaired, you can be charged with DUI regardless of the substance.",
          handbookSection: "Alcohol & Drugs — Drug Impairment",
          difficulty: 2,
          translations: [
            { language: "zh", content: "驾驶员因处方药物而受损。在佛罗里达州他们会被指控酒驾吗？", explanation: "是的。在佛罗里达州，酒驾适用于任何因酒精、管制物质或任何化学物质（包括合法处方药物）而受损的驾驶员。如果您的驾驶能力受损，无论是什么物质，您都可能被指控酒驾。" },
            { language: "es", content: "Un conductor está impedido por medicamentos recetados. ¿Pueden ser acusados de DUI en Florida?", explanation: "Sí. En Florida, el DUI aplica a cualquier conductor impedido por alcohol, sustancias controladas o cualquier sustancia química, incluyendo medicamentos legalmente recetados. Si su capacidad para conducir está impedida, puede ser acusado de DUI independientemente de la sustancia." },
          ],
          options: [
            {
              content: "Yes — any impairment, including from legal prescriptions, can result in DUI",
              isCorrect: true,
              translations: [
                { language: "zh", content: "是的——任何损害，包括来自合法处方药物的损害，都可能导致酒驾指控" },
                { language: "es", content: "Sí — cualquier impedimento, incluyendo de recetas legales, puede resultar en DUI" },
              ],
            },
            {
              content: "No — prescription drugs are legal, so no DUI charge applies",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不会——处方药是合法的，因此不适用酒驾指控" },
                { language: "es", content: "No — los medicamentos recetados son legales, por lo que no aplica cargo de DUI" },
              ],
            },
            {
              content: "Only if the medication was taken in excess of the prescribed dose",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当药物服用超过处方剂量时" },
                { language: "es", content: "Solo si el medicamento fue tomado en exceso de la dosis recetada" },
              ],
            },
            {
              content: "No — only alcohol can result in DUI in Florida",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不会——在佛罗里达州只有酒精才能导致酒驾指控" },
                { language: "es", content: "No — solo el alcohol puede resultar en DUI en Florida" },
              ],
            },
          ],
        },
        {
          content: "How many points are added to your Florida driving record for a DUI conviction?",
          explanation: "A DUI conviction adds 4 points to your Florida driving record. However, the license may also be revoked due to the DUI, so points may be less relevant than the revocation itself.",
          handbookSection: "Alcohol & Drugs — Points System",
          difficulty: 3,
          translations: [
            { language: "zh", content: "酒驾定罪会在您的佛罗里达州驾驶记录上增加多少分？", explanation: "酒驾定罪会在您的佛罗里达州驾驶记录上增加4分。但是，由于酒驾也可能导致驾照被吊销，因此相比吊销本身，扣分可能显得不那么重要。" },
            { language: "es", content: "¿Cuántos puntos se agregan a su registro de conducir de Florida por una condena de DUI?", explanation: "Una condena de DUI agrega 4 puntos a su registro de conducir de Florida. Sin embargo, la licencia también puede ser revocada debido al DUI, por lo que los puntos pueden ser menos relevantes que la revocación en sí." },
          ],
          options: [
            {
              content: "4 points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "4分" },
                { language: "es", content: "4 puntos" },
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
              content: "3 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "3分" },
                { language: "es", content: "3 puntos" },
              ],
            },
            {
              content: "12 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "12分" },
                { language: "es", content: "12 puntos" },
              ],
            },
          ],
        },
        {
          content: "What is the legal BAC limit for commercial vehicle drivers in Florida?",
          explanation: "Commercial drivers are held to a stricter standard. The legal BAC limit for commercial vehicle (CDL) drivers in Florida is 0.04%, which is half the limit for regular adult drivers. A CDL driver found with a BAC of 0.04% or higher while operating a commercial vehicle will be disqualified.",
          handbookSection: "Alcohol & Drugs — BAC Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，商业车辆驾驶员的合法血液酒精含量限制是多少？", explanation: "商业驾驶员受到更严格的标准约束。佛罗里达州商业车辆（CDL）驾驶员的合法血液酒精含量限制为0.04%，是普通成年驾驶员限制的一半。驾驶商业车辆时血液酒精含量达到或超过0.04%的CDL驾驶员将被取消资格。" },
            { language: "es", content: "¿Cuál es el límite legal de BAC para los conductores de vehículos comerciales en Florida?", explanation: "Los conductores comerciales están sujetos a un estándar más estricto. El límite legal de BAC para los conductores de vehículos comerciales (CDL) en Florida es del 0.04%, que es la mitad del límite para los conductores adultos regulares. Un conductor CDL que tenga un BAC del 0.04% o más mientras opera un vehículo comercial será descalificado." },
          ],
          options: [
            {
              content: "0.04%",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.04%" },
                { language: "es", content: "0.04%" },
              ],
            },
            {
              content: "0.08%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.08%" },
                { language: "es", content: "0.08%" },
              ],
            },
            {
              content: "0.02%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.02%" },
                { language: "es", content: "0.02%" },
              ],
            },
            {
              content: "0.10%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.10%" },
                { language: "es", content: "0.10%" },
              ],
            },
          ],
        },
        {
          content: "What are the minimum penalties for a first DUI conviction in Florida?",
          explanation: "A first DUI conviction in Florida carries: a fine of $500–$1,000, up to 6 months in jail, 1 year of probation, 50 hours of community service, and license revocation for at least 180 days. With BAC of 0.15% or higher, penalties increase significantly.",
          handbookSection: "Alcohol & Drugs — DUI Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，首次DUI定罪的最低处罚是什么？", explanation: "佛罗里达州首次DUI定罪的处罚包括：罚款500至1000美元，最多6个月监禁，1年缓刑，50小时社区服务，以及至少180天的驾照吊销。血液酒精含量达0.15%或更高时，处罚会显著增加。" },
            { language: "es", content: "¿Cuáles son las penalidades mínimas por una primera condena de DUI en Florida?", explanation: "Una primera condena de DUI en Florida conlleva: una multa de $500–$1,000, hasta 6 meses de cárcel, 1 año de libertad condicional, 50 horas de servicio comunitario y revocación de licencia por al menos 180 días. Con un BAC del 0.15% o más, las penalidades aumentan significativamente." },
          ],
          options: [
            {
              content: "Fine of $500–$1,000, up to 6 months jail, and at least 180-day license revocation",
              isCorrect: true,
              translations: [
                { language: "zh", content: "罚款500至1000美元，最多6个月监禁，以及至少180天驾照吊销" },
                { language: "es", content: "Multa de $500–$1,000, hasta 6 meses de cárcel y revocación de licencia por al menos 180 días" },
              ],
            },
            {
              content: "Only a fine — no jail time for a first offense",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅罚款——首次违规不监禁" },
                { language: "es", content: "Solo una multa — sin tiempo en cárcel para una primera infracción" },
              ],
            },
            {
              content: "Automatic 5-year license suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "自动暂停驾照5年" },
                { language: "es", content: "Suspensión automática de licencia por 5 años" },
              ],
            },
            {
              content: "Mandatory ignition interlock for 1 year",
              isCorrect: false,
              translations: [
                { language: "zh", content: "强制安装点火互锁装置1年" },
                { language: "es", content: "Interruptor de encendido obligatorio por 1 año" },
              ],
            },
          ],
        },
        {
          content: "Under Florida's implied consent law, what happens if you refuse to submit to a lawful breath test?",
          explanation: "Under Florida's implied consent law, by driving on Florida roads you agree to chemical testing if lawfully requested. Refusing a breath test results in an automatic 1-year license suspension for a first refusal, and 18 months for a subsequent refusal. The refusal can also be used as evidence against you in court.",
          handbookSection: "Alcohol & Drugs — Implied Consent",
          difficulty: 3,
          translations: [
            { language: "zh", content: "根据佛罗里达州的默示同意法，如果您拒绝接受合法的呼气测试，会发生什么？", explanation: "根据佛罗里达州的默示同意法，在佛罗里达州道路上驾驶即表示您同意在合法要求时接受化学测试。拒绝呼气测试将导致首次拒绝时自动暂停驾照1年，后续拒绝则为18个月。拒绝行为也可作为法庭上的不利证据。" },
            { language: "es", content: "Bajo la ley de consentimiento implícito de Florida, ¿qué sucede si se niega a someterse a una prueba de aliento legal?", explanation: "Bajo la ley de consentimiento implícito de Florida, al conducir en las carreteras de Florida acepta las pruebas químicas si se le solicita legalmente. Negarse a una prueba de aliento resulta en una suspensión automática de licencia de 1 año por una primera negativa, y 18 meses por una negativa posterior. La negativa también puede usarse como evidencia en su contra en el tribunal." },
          ],
          options: [
            {
              content: "Automatic 1-year license suspension (18 months for a repeat refusal)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "自动暂停驾照1年（再次拒绝则为18个月）" },
                { language: "es", content: "Suspensión automática de licencia por 1 año (18 meses por una negativa repetida)" },
              ],
            },
            {
              content: "No penalty — you have the right to refuse any test",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无处罚——您有权拒绝任何测试" },
                { language: "es", content: "Sin penalidad — tiene derecho a negarse a cualquier prueba" },
              ],
            },
            {
              content: "A small fine but no license suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "小额罚款但不暂停驾照" },
                { language: "es", content: "Una pequeña multa pero sin suspensión de licencia" },
              ],
            },
            {
              content: "Immediate arrest for obstruction of justice",
              isCorrect: false,
              translations: [
                { language: "zh", content: "以妨碍司法罪立即逮捕" },
                { language: "es", content: "Arresto inmediato por obstrucción a la justicia" },
              ],
            },
          ],
        },
        {
          content: "When is an ignition interlock device required after a DUI conviction in Florida?",
          explanation: "In Florida, a court may order an ignition interlock device for a first DUI. For a second DUI conviction, an ignition interlock device is mandatory for at least 1 year. For a third or subsequent conviction, it is required for at least 2 years. The device prevents the vehicle from starting if alcohol is detected.",
          handbookSection: "Alcohol & Drugs — DUI Penalties",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在佛罗里达州，DUI定罪后何时需要安装点火互锁装置？", explanation: "在佛罗里达州，法院可能会在首次DUI时命令安装点火互锁装置。第二次DUI定罪时，必须强制安装点火互锁装置至少1年。第三次或后续定罪时，需要安装至少2年。该装置在检测到酒精时会阻止车辆启动。" },
            { language: "es", content: "¿Cuándo se requiere un dispositivo interruptor de encendido después de una condena por DUI en Florida?", explanation: "En Florida, un tribunal puede ordenar un dispositivo interruptor de encendido por un primer DUI. Para una segunda condena por DUI, un dispositivo interruptor de encendido es obligatorio por al menos 1 año. Para una tercera condena o posterior, se requiere por al menos 2 años. El dispositivo evita que el vehículo arranque si se detecta alcohol." },
          ],
          options: [
            {
              content: "Mandatory for at least 1 year on a second DUI conviction",
              isCorrect: true,
              translations: [
                { language: "zh", content: "第二次DUI定罪时强制安装至少1年" },
                { language: "es", content: "Obligatorio por al menos 1 año en una segunda condena por DUI" },
              ],
            },
            {
              content: "Only required if the driver's BAC was above 0.15%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当驾驶员的血液酒精含量超过0.15%时才需要" },
                { language: "es", content: "Solo se requiere si el BAC del conductor estaba por encima del 0.15%" },
              ],
            },
            {
              content: "Never required — it is always optional",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从不需要——始终是可选的" },
                { language: "es", content: "Nunca se requiere — siempre es opcional" },
              ],
            },
            {
              content: "Required for all drivers regardless of DUI history",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无论DUI历史如何，所有驾驶员都需要" },
                { language: "es", content: "Requerido para todos los conductores independientemente del historial de DUI" },
              ],
            },
          ],
        },
      ],
    },
    // ─── DRIVER LICENSE & FLORIDA LAWS ─────────────────────────────────────────
    {
      name: "Driver License & Florida Laws",
      nameEn: "Driver License & Florida Laws",
      description: "License classes, GDL rules, points system, insurance, and Florida-specific requirements",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "驾驶执照与佛罗里达法规", description: "驾照类别、GDL规则、积分制度、保险及佛罗里达特定要求" },
        { language: "es", name: "Licencia de Conducir y Leyes de Florida", description: "Tipos de licencia, reglas GDL, sistema de puntos, seguro y requisitos específicos de Florida" },
      ],
      questions: [
        {
          content: "How many questions are on the Florida Class E knowledge test, and how many must you answer correctly?",
          explanation: "The Florida Class E knowledge test has 50 questions. You must answer at least 40 correctly (80%) to pass. The test covers traffic laws, road signs, and safe driving practices.",
          handbookSection: "Driver License — Knowledge Test",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州E类驾照知识考试有多少道题，需要答对多少道？", explanation: "佛罗里达州E类驾照知识考试共有50道题。您必须至少答对40道（80%）才能通过。考试内容涵盖交通法规、道路标志和安全驾驶规范。" },
            { language: "es", content: "¿Cuántas preguntas tiene el examen de conocimientos de Clase E de Florida y cuántas debe responder correctamente?", explanation: "El examen de conocimientos de Clase E de Florida tiene 50 preguntas. Debe responder correctamente al menos 40 (80%) para aprobar. El examen cubre leyes de tránsito, señales de tráfico y prácticas de conducción segura." },
          ],
          options: [
            {
              content: "50 questions; must answer at least 40 correct (80%)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "50道题；必须至少答对40道（80%）" },
                { language: "es", content: "50 preguntas; debe responder correctamente al menos 40 (80%)" },
              ],
            },
            {
              content: "40 questions; must answer at least 32 correct (80%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "40道题；必须至少答对32道（80%）" },
                { language: "es", content: "40 preguntas; debe responder correctamente al menos 32 (80%)" },
              ],
            },
            {
              content: "50 questions; must answer at least 45 correct (90%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "50道题；必须至少答对45道（90%）" },
                { language: "es", content: "50 preguntas; debe responder correctamente al menos 45 (90%)" },
              ],
            },
            {
              content: "20 questions; must answer at least 14 correct (70%)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20道题；必须至少答对14道（70%）" },
                { language: "es", content: "20 preguntas; debe responder correctamente al menos 14 (70%)" },
              ],
            },
          ],
        },
        {
          content: "At what age can a Florida teen apply for a learner's license (permit)?",
          explanation: "In Florida, teens can apply for a learner's license at age 15. They must pass a vision and knowledge test, and must be accompanied by a licensed driver age 21 or older when driving.",
          handbookSection: "Driver License — GDL Program",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州青少年可以在几岁申请学习驾照（许可证）？", explanation: "在佛罗里达州，青少年可以在15岁时申请学习驾照。他们必须通过视力和知识测试，并且在驾驶时必须有21岁或以上的持照驾驶员陪同。" },
            { language: "es", content: "¿A qué edad puede un adolescente de Florida solicitar una licencia de aprendizaje (permiso)?", explanation: "En Florida, los adolescentes pueden solicitar una licencia de aprendizaje a los 15 años. Deben aprobar un examen de visión y conocimientos, y deben estar acompañados por un conductor con licencia de 21 años o más al conducir." },
          ],
          options: [
            {
              content: "Age 15",
              isCorrect: true,
              translations: [
                { language: "zh", content: "15岁" },
                { language: "es", content: "15 años" },
              ],
            },
            {
              content: "Age 14",
              isCorrect: false,
              translations: [
                { language: "zh", content: "14岁" },
                { language: "es", content: "14 años" },
              ],
            },
            {
              content: "Age 16",
              isCorrect: false,
              translations: [
                { language: "zh", content: "16岁" },
                { language: "es", content: "16 años" },
              ],
            },
            {
              content: "Age 17",
              isCorrect: false,
              translations: [
                { language: "zh", content: "17岁" },
                { language: "es", content: "17 años" },
              ],
            },
          ],
        },
        {
          content: "Under Florida's GDL program, how many hours of supervised driving must a teen complete before getting a restricted license?",
          explanation: "Before receiving a Class E restricted license at age 16, Florida teens must complete at least 50 hours of supervised driving, including at least 10 hours at night.",
          handbookSection: "Driver License — GDL Program",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据佛罗里达州的GDL计划，青少年在获得限制驾照之前必须完成多少小时的监督驾驶？", explanation: "在16岁获得E类限制驾照之前，佛罗里达州青少年必须完成至少50小时的监督驾驶，其中至少10小时为夜间驾驶。" },
            { language: "es", content: "Según el programa GDL de Florida, ¿cuántas horas de conducción supervisada debe completar un adolescente antes de obtener una licencia restringida?", explanation: "Antes de recibir una licencia restringida de Clase E a los 16 años, los adolescentes de Florida deben completar al menos 50 horas de conducción supervisada, incluyendo al menos 10 horas de noche." },
          ],
          options: [
            {
              content: "50 hours (including 10 hours at night)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "50小时（包括10小时夜间驾驶）" },
                { language: "es", content: "50 horas (incluyendo 10 horas de noche)" },
              ],
            },
            {
              content: "30 hours (including 5 hours at night)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "30小时（包括5小时夜间驾驶）" },
                { language: "es", content: "30 horas (incluyendo 5 horas de noche)" },
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
              content: "60 hours (including 20 hours at night)",
              isCorrect: false,
              translations: [
                { language: "zh", content: "60小时（包括20小时夜间驾驶）" },
                { language: "es", content: "60 horas (incluyendo 20 horas de noche)" },
              ],
            },
          ],
        },
        {
          content: "Under Florida's GDL, what are the nighttime driving restrictions for a 16-17 year-old with a restricted license?",
          explanation: "Teens with a restricted license in Florida may not drive between 11 p.m. and 6 a.m. Exceptions include driving for work, emergencies, or with a licensed driver age 21+ in the front seat.",
          handbookSection: "Driver License — GDL Program",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据佛罗里达州的GDL规定，持有限制驾照的16-17岁青少年有哪些夜间驾驶限制？", explanation: "在佛罗里达州，持有限制驾照的青少年不得在晚上11点至早上6点之间驾驶。例外情况包括因工作需要驾驶、紧急情况或有21岁以上持照驾驶员坐在前排座位陪同。" },
            { language: "es", content: "Según el GDL de Florida, ¿cuáles son las restricciones de conducción nocturna para un joven de 16-17 años con licencia restringida?", explanation: "Los adolescentes con licencia restringida en Florida no pueden conducir entre las 11 p.m. y las 6 a.m. Las excepciones incluyen conducir por trabajo, emergencias o con un conductor con licencia de 21 años o más en el asiento delantero." },
          ],
          options: [
            {
              content: "No driving between 11 p.m. and 6 a.m. (with limited exceptions)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不得在晚上11点至早上6点之间驾驶（有限例外情况）" },
                { language: "es", content: "No conducir entre las 11 p.m. y las 6 a.m. (con excepciones limitadas)" },
              ],
            },
            {
              content: "No driving between midnight and 5 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不得在午夜至早上5点之间驾驶" },
                { language: "es", content: "No conducir entre medianoche y las 5 a.m." },
              ],
            },
            {
              content: "No nighttime restriction if accompanied by a parent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如有父母陪同则无夜间限制" },
                { language: "es", content: "Sin restricción nocturna si está acompañado por un padre" },
              ],
            },
            {
              content: "No driving between 10 p.m. and 7 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不得在晚上10点至早上7点之间驾驶" },
                { language: "es", content: "No conducir entre las 10 p.m. y las 7 a.m." },
              ],
            },
          ],
        },
        {
          content: "How many points on your Florida driver's license will result in a 30-day suspension?",
          explanation: "In Florida, 12 points within 12 months results in a 30-day suspension. 18 points within 18 months causes a 3-month suspension. 24 points within 36 months causes a 1-year suspension.",
          handbookSection: "Driver License — Points System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州驾照累积多少分会导致30天吊销？", explanation: "在佛罗里达州，12个月内累积12分将导致驾照吊销30天。18个月内累积18分将导致吊销3个月。36个月内累积24分将导致吊销1年。" },
            { language: "es", content: "¿Cuántos puntos en su licencia de conducir de Florida resultarán en una suspensión de 30 días?", explanation: "En Florida, 12 puntos dentro de 12 meses resultan en una suspensión de 30 días. 18 puntos dentro de 18 meses causan una suspensión de 3 meses. 24 puntos dentro de 36 meses causan una suspensión de 1 año." },
          ],
          options: [
            {
              content: "12 points within 12 months",
              isCorrect: true,
              translations: [
                { language: "zh", content: "12个月内累积12分" },
                { language: "es", content: "12 puntos dentro de 12 meses" },
              ],
            },
            {
              content: "6 points within 12 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "12个月内累积6分" },
                { language: "es", content: "6 puntos dentro de 12 meses" },
              ],
            },
            {
              content: "18 points within 18 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "18个月内累积18分" },
                { language: "es", content: "18 puntos dentro de 18 meses" },
              ],
            },
            {
              content: "10 points within 12 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "12个月内累积10分" },
                { language: "es", content: "10 puntos dentro de 12 meses" },
              ],
            },
          ],
        },
        {
          content: "What happens to your Florida driver's license if you accumulate 18 points within 18 months?",
          explanation: "If you accumulate 18 points within 18 months, your Florida driver's license is suspended for 3 months. Point accumulation is a common way the state manages driving behavior.",
          handbookSection: "Driver License — Points System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "如果您在18个月内累积18分，您的佛罗里达州驾照会怎样？", explanation: "如果您在18个月内累积18分，您的佛罗里达州驾照将被吊销3个月。积分累积是该州管理驾驶行为的常见方式。" },
            { language: "es", content: "¿Qué sucede con su licencia de conducir de Florida si acumula 18 puntos dentro de 18 meses?", explanation: "Si acumula 18 puntos dentro de 18 meses, su licencia de conducir de Florida se suspende por 3 meses. La acumulación de puntos es una forma común en que el estado maneja el comportamiento de conducción." },
          ],
          options: [
            {
              content: "3-month suspension",
              isCorrect: true,
              translations: [
                { language: "zh", content: "吊销3个月" },
                { language: "es", content: "Suspensión de 3 meses" },
              ],
            },
            {
              content: "30-day suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "吊销30天" },
                { language: "es", content: "Suspensión de 30 días" },
              ],
            },
            {
              content: "1-year suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "吊销1年" },
                { language: "es", content: "Suspensión de 1 año" },
              ],
            },
            {
              content: "Permanent revocation",
              isCorrect: false,
              translations: [
                { language: "zh", content: "永久吊销" },
                { language: "es", content: "Revocación permanente" },
              ],
            },
          ],
        },
        {
          content: "What minimum insurance coverage is required for most Florida vehicle owners?",
          explanation: "Florida requires a minimum of $10,000 Personal Injury Protection (PIP) and $10,000 Property Damage Liability (PDL). Florida is a no-fault state, so PIP covers your own injuries regardless of fault.",
          handbookSection: "Driver License — Insurance Requirements",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州大多数车主需要的最低保险覆盖是多少？", explanation: "佛罗里达州要求最低10,000美元的人身伤害保护（PIP）和10,000美元的财产损害责任险（PDL）。佛罗里达州是无过错州，因此PIP无论过错如何都会覆盖您自己的伤害。" },
            { language: "es", content: "¿Cuál es la cobertura mínima de seguro requerida para la mayoría de los propietarios de vehículos en Florida?", explanation: "Florida requiere un mínimo de $10,000 de Protección contra Lesiones Personales (PIP) y $10,000 de Responsabilidad por Daños a la Propiedad (PDL). Florida es un estado sin culpa, por lo que el PIP cubre sus propias lesiones independientemente de la culpa." },
          ],
          options: [
            {
              content: "$10,000 PIP and $10,000 PDL",
              isCorrect: true,
              translations: [
                { language: "zh", content: "10,000美元PIP和10,000美元PDL" },
                { language: "es", content: "$10,000 PIP y $10,000 PDL" },
              ],
            },
            {
              content: "$25,000/$50,000 bodily injury and $10,000 PDL",
              isCorrect: false,
              translations: [
                { language: "zh", content: "25,000美元/50,000美元人身伤害险和10,000美元PDL" },
                { language: "es", content: "$25,000/$50,000 lesiones corporales y $10,000 PDL" },
              ],
            },
            {
              content: "$10,000 bodily injury only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅10,000美元人身伤害险" },
                { language: "es", content: "Solo $10,000 lesiones corporales" },
              ],
            },
            {
              content: "$20,000 comprehensive coverage",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20,000美元综合险" },
                { language: "es", content: "$20,000 cobertura integral" },
              ],
            },
          ],
        },
        {
          content: "Florida law requires all front-seat occupants to wear a seat belt. What about rear-seat passengers?",
          explanation: "In Florida, all passengers under age 18 must wear a seat belt regardless of seating position. Adults age 18 and older riding in the rear seat are not required by law to wear a seat belt (though it is always recommended).",
          handbookSection: "Driver License — Seat Belt Laws",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州法律要求所有前排乘客系安全带。后排乘客呢？", explanation: "在佛罗里达州，所有18岁以下的乘客无论座位位置都必须系安全带。18岁及以上的成年人坐在后排时法律不要求系安全带（但始终建议系上）。" },
            { language: "es", content: "La ley de Florida requiere que todos los ocupantes del asiento delantero usen cinturón de seguridad. ¿Qué pasa con los pasajeros del asiento trasero?", explanation: "En Florida, todos los pasajeros menores de 18 años deben usar cinturón de seguridad independientemente de la posición del asiento. Los adultos de 18 años o más que viajan en el asiento trasero no están obligados por ley a usar cinturón de seguridad (aunque siempre se recomienda)." },
          ],
          options: [
            {
              content: "Rear passengers under 18 must wear a seat belt; adults 18+ in rear are not required",
              isCorrect: true,
              translations: [
                { language: "zh", content: "18岁以下的后排乘客必须系安全带；18岁及以上的成年人坐后排不要求系" },
                { language: "es", content: "Los pasajeros traseros menores de 18 años deben usar cinturón; adultos de 18+ en la parte trasera no están obligados" },
              ],
            },
            {
              content: "All rear passengers must wear a seat belt",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有后排乘客都必须系安全带" },
                { language: "es", content: "Todos los pasajeros traseros deben usar cinturón de seguridad" },
              ],
            },
            {
              content: "No rear seat passengers are required to wear seat belts",
              isCorrect: false,
              translations: [
                { language: "zh", content: "后排乘客不要求系安全带" },
                { language: "es", content: "Ningún pasajero trasero está obligado a usar cinturón de seguridad" },
              ],
            },
            {
              content: "Rear passengers only need seat belts on highways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "后排乘客仅在高速公路上需要系安全带" },
                { language: "es", content: "Los pasajeros traseros solo necesitan cinturón en autopistas" },
              ],
            },
          ],
        },
        {
          content: "What child restraint is required for children under age 5 in Florida?",
          explanation: "Florida law requires children under age 5 to be secured in a federally approved child restraint device (car seat or booster). Children under 3 must be in a separate carrier or built-in child seat.",
          handbookSection: "Driver License — Child Restraints",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州对5岁以下儿童有什么儿童约束装置要求？", explanation: "佛罗里达州法律要求5岁以下儿童必须使用联邦批准的儿童约束装置（儿童安全座椅或增高座椅）固定。3岁以下儿童必须使用独立的婴儿提篮或内置儿童座椅。" },
            { language: "es", content: "¿Qué sistema de retención infantil se requiere para niños menores de 5 años en Florida?", explanation: "La ley de Florida requiere que los niños menores de 5 años estén asegurados en un dispositivo de retención infantil aprobado federalmente (asiento de seguridad o elevador). Los niños menores de 3 años deben estar en un portabebés separado o asiento infantil integrado." },
          ],
          options: [
            {
              content: "A federally approved child restraint device (car seat or booster)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "联邦批准的儿童约束装置（儿童安全座椅或增高座椅）" },
                { language: "es", content: "Un dispositivo de retención infantil aprobado federalmente (asiento de seguridad o elevador)" },
              ],
            },
            {
              content: "A seat belt alone is sufficient",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅使用安全带即可" },
                { language: "es", content: "Solo un cinturón de seguridad es suficiente" },
              ],
            },
            {
              content: "A child restraint is only required for infants under 1 year",
              isCorrect: false,
              translations: [
                { language: "zh", content: "儿童约束装置仅要求1岁以下婴儿使用" },
                { language: "es", content: "Solo se requiere retención infantil para bebés menores de 1 año" },
              ],
            },
            {
              content: "Any seat belt or restraint the parent chooses",
              isCorrect: false,
              translations: [
                { language: "zh", content: "家长选择的任何安全带或约束装置" },
                { language: "es", content: "Cualquier cinturón de seguridad o retención que elija el padre" },
              ],
            },
          ],
        },
        {
          content: "Within how many days must a new Florida resident obtain a Florida driver's license?",
          explanation: "New residents of Florida who are employed, enroll children in school, or register a vehicle must obtain a Florida driver's license within 30 days of establishing residency.",
          handbookSection: "Driver License — New Residents",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州新居民必须在多少天内获得佛罗里达州驾照？", explanation: "佛罗里达州新居民如果已就业、让子女入学或登记车辆，必须在确立居住权后30天内获得佛罗里达州驾照。" },
            { language: "es", content: "¿Dentro de cuántos días debe un nuevo residente de Florida obtener una licencia de conducir de Florida?", explanation: "Los nuevos residentes de Florida que están empleados, inscriben a sus hijos en la escuela o registran un vehículo deben obtener una licencia de conducir de Florida dentro de los 30 días de establecer residencia." },
          ],
          options: [
            {
              content: "30 days",
              isCorrect: true,
              translations: [
                { language: "zh", content: "30天" },
                { language: "es", content: "30 días" },
              ],
            },
            {
              content: "60 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "60天" },
                { language: "es", content: "60 días" },
              ],
            },
            {
              content: "90 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "90天" },
                { language: "es", content: "90 días" },
              ],
            },
            {
              content: "6 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "6个月" },
                { language: "es", content: "6 meses" },
              ],
            },
          ],
        },
        {
          content: "How many points are added to your Florida license for speeding 15 mph over the limit?",
          explanation: "In Florida, speeding 15 mph or more above the posted limit results in 4 points being added to your driving record. Speeding less than 15 mph over is a 3-point violation.",
          handbookSection: "Driver License — Points System",
          difficulty: 3,
          translations: [
            { language: "zh", content: "超速行驶超过限速15英里会在您的佛罗里达州驾照上增加多少分？", explanation: "在佛罗里达州，超速行驶超过限速15英里或以上将在您的驾驶记录上增加4分。超速不足15英里属于3分违规。" },
            { language: "es", content: "¿Cuántos puntos se agregan a su licencia de Florida por exceder el límite de velocidad en 15 mph?", explanation: "En Florida, exceder el límite de velocidad publicado en 15 mph o más resulta en 4 puntos agregados a su registro de conducción. Exceder el límite en menos de 15 mph es una infracción de 3 puntos." },
          ],
          options: [
            {
              content: "4 points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "4分" },
                { language: "es", content: "4 puntos" },
              ],
            },
            {
              content: "3 points",
              isCorrect: false,
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
          ],
        },
        {
          content: "What is the vision requirement to obtain a Florida driver's license?",
          explanation: "To obtain a Florida driver's license, you must have at least 20/70 vision in your better eye (with or without corrective lenses) and at least 20/200 in your worse eye.",
          handbookSection: "Driver License — Vision Requirements",
          difficulty: 2,
          translations: [
            { language: "zh", content: "获得佛罗里达州驾照的视力要求是什么？", explanation: "要获得佛罗里达州驾照，您较好的眼睛视力必须至少达到20/70（戴或不戴矫正镜片），较差的眼睛视力至少达到20/200。" },
            { language: "es", content: "¿Cuál es el requisito de visión para obtener una licencia de conducir de Florida?", explanation: "Para obtener una licencia de conducir de Florida, debe tener al menos 20/70 de visión en su mejor ojo (con o sin lentes correctivos) y al menos 20/200 en su peor ojo." },
          ],
          options: [
            {
              content: "At least 20/70 in the better eye; at least 20/200 in the worse eye",
              isCorrect: true,
              translations: [
                { language: "zh", content: "较好的眼睛至少20/70；较差的眼睛至少20/200" },
                { language: "es", content: "Al menos 20/70 en el mejor ojo; al menos 20/200 en el peor ojo" },
              ],
            },
            {
              content: "20/20 in both eyes required",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双眼都要求20/20" },
                { language: "es", content: "Se requiere 20/20 en ambos ojos" },
              ],
            },
            {
              content: "At least 20/40 in at least one eye",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少一只眼睛至少20/40" },
                { language: "es", content: "Al menos 20/40 en al menos un ojo" },
              ],
            },
            {
              content: "Any vision level is acceptable with corrective lenses",
              isCorrect: false,
              translations: [
                { language: "zh", content: "戴矫正镜片后任何视力水平都可接受" },
                { language: "es", content: "Cualquier nivel de visión es aceptable con lentes correctivos" },
              ],
            },
          ],
        },
        {
          content: "Under Florida's Graduated Driver License (GDL) program, what curfew applies to a 16-year-old with a learner's license?",
          explanation: "A 16-year-old with a learner's license (permit) in Florida must be accompanied by a licensed driver age 21 or older at all times. There is no independent nighttime driving — all driving must be supervised.",
          handbookSection: "Driver License — GDL Program",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据佛罗里达州的渐进式驾照（GDL）项目，持有学习驾照的16岁青少年有什么宵禁规定？", explanation: "佛罗里达州持有学习驾照（许可证）的16岁青少年必须始终有21岁或以上的持照驾驶员陪同。不允许独自夜间驾驶——所有驾驶都必须在监督下进行。" },
            { language: "es", content: "Bajo el programa de Licencia de Conductor Graduada (GDL) de Florida, ¿qué toque de queda se aplica a un joven de 16 años con licencia de aprendizaje?", explanation: "Un joven de 16 años con licencia de aprendizaje (permiso) en Florida debe ir acompañado por un conductor licenciado de 21 años o más en todo momento. No se permite conducir de forma independiente por la noche — toda conducción debe ser supervisada." },
          ],
          options: [
            {
              content: "All driving must be supervised by a licensed adult age 21 or older",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有驾驶必须由21岁或以上的持照成年人监督" },
                { language: "es", content: "Toda conducción debe ser supervisada por un adulto con licencia de 21 años o más" },
              ],
            },
            {
              content: "No driving allowed after 10 PM without a parent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "没有家长陪同不得在晚上10点后驾驶" },
                { language: "es", content: "No se permite conducir después de las 10 PM sin un padre" },
              ],
            },
            {
              content: "No restrictions — the permit allows full independent driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无限制——许可证允许完全独立驾驶" },
                { language: "es", content: "Sin restricciones — el permiso permite conducir de forma totalmente independiente" },
              ],
            },
            {
              content: "No driving after midnight unless accompanied by a parent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "除非有家长陪同，否则午夜后不得驾驶" },
                { language: "es", content: "No se permite conducir después de la medianoche a menos que vaya acompañado de un padre" },
              ],
            },
          ],
        },
        {
          content: "Florida's Move Over Law requires drivers to do what when approaching a stopped emergency vehicle with flashing lights on the roadside?",
          explanation: "Florida's Move Over Law requires drivers approaching a stationary emergency or law enforcement vehicle with flashing lights to move over one lane away from the vehicle (if safe) or slow to 20 mph below the posted speed limit (minimum 5 mph on roads posted at 20 mph or less). This applies to tow trucks and sanitation vehicles too.",
          handbookSection: "Driver License — Points System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州的「让路法」要求驾驶员在接近路边有闪烁灯光的停靠紧急车辆时应该怎么做？", explanation: "佛罗里达州的「让路法」要求驾驶员在接近有闪烁灯光的静止紧急或执法车辆时，向远离该车辆的一个车道移动（如果安全）或减速到低于限速20英里（在限速20英里或以下的道路上最低5英里）。这也适用于拖车和环卫车辆。" },
            { language: "es", content: "La ley Move Over de Florida requiere que los conductores hagan qué cuando se acercan a un vehículo de emergencia detenido con luces intermitentes en el borde de la carretera?", explanation: "La ley Move Over de Florida requiere que los conductores que se acercan a un vehículo de emergencia o de aplicación de la ley estacionario con luces intermitentes se cambien a un carril alejándose del vehículo (si es seguro) o disminuyan la velocidad a 20 mph por debajo del límite señalizado (mínimo 5 mph en carreteras con límite de 20 mph o menos). Esto también se aplica a grúas y vehículos de saneamiento." },
          ],
          options: [
            {
              content: "Move over one lane or slow to 20 mph below the posted speed limit",
              isCorrect: true,
              translations: [
                { language: "zh", content: "移动到一个车道外或减速到低于限速20英里" },
                { language: "es", content: "Cambiar a un carril o reducir la velocidad a 20 mph por debajo del límite señalizado" },
              ],
            },
            {
              content: "Simply honk to warn the emergency personnel",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只需鸣喇叭警告紧急人员" },
                { language: "es", content: "Simplemente tocar el claxon para advertir al personal de emergencia" },
              ],
            },
            {
              content: "Come to a complete stop behind the emergency vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在紧急车辆后面完全停车" },
                { language: "es", content: "Detenerse completamente detrás del vehículo de emergencia" },
              ],
            },
            {
              content: "Continue at normal speed since the vehicle is already stopped",
              isCorrect: false,
              translations: [
                { language: "zh", content: "以正常速度继续行驶，因为车辆已经停止" },
                { language: "es", content: "Continuar a velocidad normal ya que el vehículo ya está detenido" },
              ],
            },
          ],
        },
        {
          content: "Florida law prohibits texting while driving. What does this mean for drivers?",
          explanation: "Florida law makes texting while driving a primary offense — police can stop you just for texting. Using a handheld device to text in a school zone or active work zone is also a primary offense. Hands-free use is permitted.",
          handbookSection: "Driver License — Points System",
          difficulty: 1,
          translations: [
            { language: "zh", content: "佛罗里达州法律禁止驾驶时发短信。这对驾驶员意味着什么？", explanation: "佛罗里达州法律将驾驶时发短信定为主要违规——警察可以仅因发短信而拦截您。在学校区域或活跃施工区域使用手持设备发短信也是主要违规。免提使用是允许的。" },
            { language: "es", content: "La ley de Florida prohíbe enviar mensajes de texto mientras se conduce. ¿Qué significa esto para los conductores?", explanation: "La ley de Florida convierte el envío de mensajes de texto mientras se conduce en una infracción primaria: la policía puede detenerte solo por enviar mensajes de texto. Usar un dispositivo de mano para enviar mensajes de texto en una zona escolar o zona de trabajo activa también es una infracción primaria. El uso con manos libres está permitido." },
          ],
          options: [
            {
              content: "Texting while driving is a primary offense — police can stop you for it alone",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾驶时发短信是主要违规——警察可以单独因此拦截您" },
                { language: "es", content: "Enviar mensajes de texto mientras se conduce es una infracción primaria — la policía puede detenerte solo por eso" },
              ],
            },
            {
              content: "Texting is only illegal if you cause an accident",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只有造成事故时发短信才是违法的" },
                { language: "es", content: "Enviar mensajes de texto solo es ilegal si causa un accidente" },
              ],
            },
            {
              content: "Texting is a secondary offense — police can only cite you if stopped for another reason",
              isCorrect: false,
              translations: [
                { language: "zh", content: "发短信是次要违规——警察只能在因其他原因停车时才能对您开罚单" },
                { language: "es", content: "Enviar mensajes de texto es una infracción secundaria: la policía solo puede multarte si te detiene por otra razón" },
              ],
            },
            {
              content: "Texting is only prohibited for drivers under 18",
              isCorrect: false,
              translations: [
                { language: "zh", content: "发短信仅对18岁以下的驾驶员禁止" },
                { language: "es", content: "Enviar mensajes de texto solo está prohibido para conductores menores de 18 años" },
              ],
            },
          ],
        },
        {
          content: "What does Florida's Financial Responsibility Law require after a crash resulting in bodily injury or property damage over $500?",
          explanation: "After a crash in Florida that causes bodily injury, death, or property damage exceeding $500, you must be able to show proof of financial responsibility (insurance). Failure to carry the required PIP and PDL insurance can result in license suspension.",
          handbookSection: "Driver License — Insurance Requirements",
          difficulty: 3,
          translations: [
            { language: "zh", content: "佛罗里达州的财务责任法在导致人身伤害或500美元以上财产损失的事故后要求什么？", explanation: "在佛罗里达州发生导致人身伤害、死亡或超过500美元财产损失的事故后，您必须能够出示财务责任证明（保险）。未携带所需的PIP和PDL保险可能导致驾照被暂停。" },
            { language: "es", content: "¿Qué requiere la Ley de Responsabilidad Financiera de Florida después de un accidente que resulte en lesiones corporales o daños a la propiedad superiores a $500?", explanation: "Después de un accidente en Florida que cause lesiones corporales, muerte o daños a la propiedad superiores a $500, debe poder mostrar prueba de responsabilidad financiera (seguro). No llevar el seguro PIP y PDL requerido puede resultar en la suspensión de la licencia." },
          ],
          options: [
            {
              content: "You must show proof of insurance (financial responsibility)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "您必须出示保险证明（财务责任）" },
                { language: "es", content: "Debe mostrar prueba de seguro (responsabilidad financiera)" },
              ],
            },
            {
              content: "No insurance is required in Florida",
              isCorrect: false,
              translations: [
                { language: "zh", content: "佛罗里达州不要求保险" },
                { language: "es", content: "No se requiere seguro en Florida" },
              ],
            },
            {
              content: "Only liability insurance is required — not PIP",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只需要责任险——不需要PIP" },
                { language: "es", content: "Solo se requiere seguro de responsabilidad civil, no PIP" },
              ],
            },
            {
              content: "Insurance requirements only apply to commercial vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "保险要求仅适用于商业车辆" },
                { language: "es", content: "Los requisitos de seguro solo se aplican a los vehículos comerciales" },
              ],
            },
          ],
        },
      ],
    },
    // ─── SAFE DRIVING & CRASH PREVENTION ─────────────────────────────────────────
    {
      name: "Safe Driving & Crash Prevention",
      nameEn: "Safe Driving & Crash Prevention",
      description: "Defensive driving, sharing the road, crash procedures, and vehicle safety",
      handbookUrl: "https://www.flhsmv.gov/resources/handbooks-manuals/",
      translations: [
        { language: "zh", name: "安全驾驶与事故预防", description: "防御性驾驶、共用道路、事故处理及车辆安全" },
        { language: "es", name: "Manejo Seguro y Prevención de Accidentes", description: "Manejo defensivo, compartir la vía, procedimientos en accidentes y seguridad vehicular" },
      ],
      questions: [
        {
          content: "What should you do immediately after being involved in a crash in Florida?",
          explanation: "After any crash in Florida, you must stop at the scene, provide your name, address, vehicle registration, and insurance information to the other driver, and render reasonable aid to injured persons.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州发生交通事故后，您应该立即做什么？", explanation: "在佛罗里达州发生任何交通事故后，您必须在现场停车，向对方驾驶员提供您的姓名、地址、车辆登记信息和保险信息，并对受伤人员提供合理的救助。" },
            { language: "es", content: "¿Qué debe hacer inmediatamente después de verse involucrado en un accidente en Florida?", explanation: "Después de cualquier accidente en Florida, debe detenerse en el lugar, proporcionar su nombre, dirección, registro del vehículo e información del seguro al otro conductor, y prestar ayuda razonable a las personas heridas." },
          ],
          options: [
            {
              content: "Stop, exchange information, and render aid to injured persons",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车、交换信息并对受伤人员提供救助" },
                { language: "es", content: "Detenerse, intercambiar información y prestar ayuda a las personas heridas" },
              ],
            },
            {
              content: "Drive to the nearest police station to report the crash",
              isCorrect: false,
              translations: [
                { language: "zh", content: "开车到最近的警察局报告事故" },
                { language: "es", content: "Conducir a la estación de policía más cercana para reportar el accidente" },
              ],
            },
            {
              content: "Continue driving if injuries appear minor",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果伤势看起来较轻则继续驾驶" },
                { language: "es", content: "Continuar conduciendo si las lesiones parecen menores" },
              ],
            },
            {
              content: "Take photos and leave if the other driver is not injured",
              isCorrect: false,
              translations: [
                { language: "zh", content: "拍照后如果对方驾驶员没有受伤就离开" },
                { language: "es", content: "Tomar fotos e irse si el otro conductor no está herido" },
              ],
            },
          ],
        },
        {
          content: "When must you report a crash to law enforcement in Florida?",
          explanation: "In Florida, you must report a crash to law enforcement if it results in injury, death, or property damage exceeding $500. The report must be made immediately.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，什么情况下必须向执法部门报告交通事故？", explanation: "在佛罗里达州，如果事故导致人员受伤、死亡或财产损失超过500美元，您必须向执法部门报告。报告必须立即进行。" },
            { language: "es", content: "¿Cuándo debe reportar un accidente a las autoridades en Florida?", explanation: "En Florida, debe reportar un accidente a las autoridades si resulta en lesiones, muerte o daños a la propiedad que excedan $500. El reporte debe hacerse inmediatamente." },
          ],
          options: [
            {
              content: "When there is injury, death, or property damage exceeding $500",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当发生人员受伤、死亡或财产损失超过500美元时" },
                { language: "es", content: "Cuando hay lesiones, muerte o daños a la propiedad que excedan $500" },
              ],
            },
            {
              content: "Only if someone is killed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有人死亡时" },
                { language: "es", content: "Solo si alguien muere" },
              ],
            },
            {
              content: "Only if the other driver does not have insurance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在对方驾驶员没有保险时" },
                { language: "es", content: "Solo si el otro conductor no tiene seguro" },
              ],
            },
            {
              content: "For all crashes regardless of damage",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有事故都需报告，无论损失大小" },
                { language: "es", content: "Para todos los accidentes sin importar los daños" },
              ],
            },
          ],
        },
        {
          content: "When are you required to use your headlights in Florida?",
          explanation: "Florida law requires headlights from sunset to sunrise and any time you use your windshield wipers due to rain, fog, smoke, or other precipitation. This also improves your visibility to others.",
          handbookSection: "Safe Driving — Headlight Laws",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，什么时候必须使用车头灯？", explanation: "佛罗里达州法律要求从日落到日出期间以及因雨、雾、烟或其他降水而使用挡风玻璃雨刷时必须开启车头灯。这也能提高您对他人的可见度。" },
            { language: "es", content: "¿Cuándo está obligado a usar las luces delanteras en Florida?", explanation: "La ley de Florida requiere el uso de luces delanteras desde el atardecer hasta el amanecer y en cualquier momento que use los limpiaparabrisas debido a lluvia, niebla, humo u otra precipitación. Esto también mejora su visibilidad para otros." },
          ],
          options: [
            {
              content: "From sunset to sunrise and whenever windshield wipers are in use",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从日落到日出以及使用挡风玻璃雨刷时" },
                { language: "es", content: "Desde el atardecer hasta el amanecer y siempre que los limpiaparabrisas estén en uso" },
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
              content: "Only when visibility is less than 100 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当能见度低于100英尺时" },
                { language: "es", content: "Solo cuando la visibilidad sea menor a 100 pies" },
              ],
            },
            {
              content: "At all times — headlights should always be on",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何时候——车头灯应始终开启" },
                { language: "es", content: "En todo momento — las luces siempre deben estar encendidas" },
              ],
            },
          ],
        },
        {
          content: "When should you use your high-beam headlights?",
          explanation: "High-beam headlights should be used on open roads without oncoming traffic. You must switch to low beams when within 500 feet of an oncoming vehicle or within 300 feet of a vehicle you are following.",
          handbookSection: "Safe Driving — Headlight Laws",
          difficulty: 2,
          translations: [
            { language: "zh", content: "什么时候应该使用远光灯？", explanation: "远光灯应在没有对向来车的开阔道路上使用。当距离对向来车500英尺以内或距离前方车辆300英尺以内时，必须切换到近光灯。" },
            { language: "es", content: "¿Cuándo debe usar las luces altas?", explanation: "Las luces altas deben usarse en carreteras abiertas sin tráfico en sentido contrario. Debe cambiar a luces bajas cuando esté a menos de 500 pies de un vehículo que viene en sentido contrario o a menos de 300 pies de un vehículo que está siguiendo." },
          ],
          options: [
            {
              content: "On open roads; switch to low beams within 500 feet of oncoming traffic",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在开阔道路上使用；距对向来车500英尺以内时切换到近光灯" },
                { language: "es", content: "En carreteras abiertas; cambiar a luces bajas a menos de 500 pies del tráfico en sentido contrario" },
              ],
            },
            {
              content: "At all times on rural roads",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在乡村道路上始终使用" },
                { language: "es", content: "En todo momento en carreteras rurales" },
              ],
            },
            {
              content: "Only in complete darkness with no other vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在完全黑暗且没有其他车辆时使用" },
                { language: "es", content: "Solo en oscuridad total sin otros vehículos" },
              ],
            },
            {
              content: "Whenever driving above 55 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在车速超过55英里/小时时使用" },
                { language: "es", content: "Siempre que conduzca a más de 55 mph" },
              ],
            },
          ],
        },
        {
          content: "What is hydroplaning and how can you avoid it?",
          explanation: "Hydroplaning occurs when your tires ride on a layer of water rather than the road surface, causing loss of control. To avoid it: reduce speed in wet conditions, maintain proper tire tread and inflation, and avoid sudden steering or braking changes.",
          handbookSection: "Safe Driving — Wet Roads",
          difficulty: 2,
          translations: [
            { language: "zh", content: "什么是水滑现象，如何避免？", explanation: "水滑现象发生在轮胎在水层上行驶而不是在路面上行驶时，导致失控。避免方法：在潮湿条件下减速，保持适当的轮胎花纹和胎压，避免突然转向或刹车。" },
            { language: "es", content: "¿Qué es el hidroplaneo y cómo puede evitarlo?", explanation: "El hidroplaneo ocurre cuando sus neumáticos circulan sobre una capa de agua en lugar de la superficie de la carretera, causando pérdida de control. Para evitarlo: reduzca la velocidad en condiciones húmedas, mantenga el dibujo y la presión adecuados de los neumáticos, y evite cambios bruscos de dirección o frenado." },
          ],
          options: [
            {
              content: "Tires riding on water causing loss of control; reduce speed and maintain good tires",
              isCorrect: true,
              translations: [
                { language: "zh", content: "轮胎在水上行驶导致失控；减速并保持良好的轮胎状况" },
                { language: "es", content: "Los neumáticos circulan sobre el agua causando pérdida de control; reduzca la velocidad y mantenga buenos neumáticos" },
              ],
            },
            {
              content: "Brakes overheating on hills; avoid using brakes downhill",
              isCorrect: false,
              translations: [
                { language: "zh", content: "下坡时刹车过热；避免在下坡时使用刹车" },
                { language: "es", content: "Los frenos se sobrecalientan en pendientes; evite usar los frenos cuesta abajo" },
              ],
            },
            {
              content: "Engine flooding in deep water; avoid puddles over 6 inches",
              isCorrect: false,
              translations: [
                { language: "zh", content: "发动机在深水中熄火；避免超过6英寸的水坑" },
                { language: "es", content: "El motor se inunda en agua profunda; evite charcos de más de 6 pulgadas" },
              ],
            },
            {
              content: "Windshield fogging; use defrost and reduce speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "挡风玻璃起雾；使用除雾功能并减速" },
                { language: "es", content: "El parabrisas se empaña; use el desempañador y reduzca la velocidad" },
              ],
            },
          ],
        },
        {
          content: "When following a large truck, why is it important to stay out of its blind spots?",
          explanation: "Large trucks have extensive blind spots on all four sides. If you cannot see the truck driver's mirrors, the driver cannot see you. Staying out of blind spots gives the truck driver a chance to see you and react.",
          handbookSection: "Safe Driving — Large Trucks",
          difficulty: 1,
          translations: [
            { language: "zh", content: "跟随大型卡车行驶时，为什么要避开其盲区？", explanation: "大型卡车四面都有大面积的盲区。如果您看不到卡车驾驶员的后视镜，驾驶员也看不到您。避开盲区可以让卡车驾驶员有机会看到您并做出反应。" },
            { language: "es", content: "Al seguir a un camión grande, ¿por qué es importante mantenerse fuera de sus puntos ciegos?", explanation: "Los camiones grandes tienen extensos puntos ciegos en los cuatro lados. Si no puede ver los espejos del conductor del camión, el conductor no puede verlo a usted. Mantenerse fuera de los puntos ciegos le da al conductor del camión la oportunidad de verlo y reaccionar." },
          ],
          options: [
            {
              content: "If you cannot see the driver's mirrors, the driver cannot see you",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果您看不到驾驶员的后视镜，驾驶员也看不到您" },
                { language: "es", content: "Si no puede ver los espejos del conductor, el conductor no puede verlo a usted" },
              ],
            },
            {
              content: "Trucks have better brakes so they do not need as much space",
              isCorrect: false,
              translations: [
                { language: "zh", content: "卡车刹车更好，所以不需要那么多空间" },
                { language: "es", content: "Los camiones tienen mejores frenos, así que no necesitan tanto espacio" },
              ],
            },
            {
              content: "You only need to stay out of the left blind spot",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您只需要避开左侧盲区" },
                { language: "es", content: "Solo necesita mantenerse fuera del punto ciego izquierdo" },
              ],
            },
            {
              content: "Blind spots only exist behind large trucks, not in front",
              isCorrect: false,
              translations: [
                { language: "zh", content: "盲区只存在于大型卡车后方，前方没有" },
                { language: "es", content: "Los puntos ciegos solo existen detrás de los camiones grandes, no adelante" },
              ],
            },
          ],
        },
        {
          content: "What is the proper technique to recover from a rear-wheel skid?",
          explanation: "To recover from a rear-wheel skid, take your foot off the accelerator and steer in the direction you want the front of the vehicle to go. Do not apply the brakes. This technique is called counter-steering.",
          handbookSection: "Safe Driving — Skid Control",
          difficulty: 2,
          translations: [
            { language: "zh", content: "从后轮打滑中恢复的正确技术是什么？", explanation: "从后轮打滑中恢复时，松开油门并将方向盘转向您希望车头朝向的方向。不要踩刹车。这种技术称为「反向转向」。" },
            { language: "es", content: "¿Cuál es la técnica correcta para recuperarse de un derrape de las ruedas traseras?", explanation: "Para recuperarse de un derrape de las ruedas traseras, quite el pie del acelerador y gire el volante en la dirección en que desea que vaya el frente del vehículo. No aplique los frenos. Esta técnica se llama contravolante." },
          ],
          options: [
            {
              content: "Take your foot off the gas and steer in the direction you want to go",
              isCorrect: true,
              translations: [
                { language: "zh", content: "松开油门并将方向盘转向您想去的方向" },
                { language: "es", content: "Quite el pie del acelerador y gire en la dirección que desea ir" },
              ],
            },
            {
              content: "Apply the brakes firmly to stop the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "用力踩刹车来停止打滑" },
                { language: "es", content: "Aplique los frenos firmemente para detener el derrape" },
              ],
            },
            {
              content: "Accelerate out of the skid by pressing the gas",
              isCorrect: false,
              translations: [
                { language: "zh", content: "踩油门加速驶出打滑" },
                { language: "es", content: "Acelere para salir del derrape presionando el acelerador" },
              ],
            },
            {
              content: "Turn the wheel sharply in the opposite direction of the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "将方向盘猛打向与打滑相反的方向" },
                { language: "es", content: "Gire el volante bruscamente en la dirección opuesta al derrape" },
              ],
            },
          ],
        },
        {
          content: "You must give at least how many feet of clearance when passing a bicycle rider in Florida?",
          explanation: "Florida law requires motorists to give bicycle riders at least 3 feet of clearance when passing. This gives cyclists a safe buffer from the vehicle.",
          handbookSection: "Safe Driving — Sharing the Road",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州超越自行车骑行者时，必须至少保持多少英尺的间距？", explanation: "佛罗里达州法律要求驾驶员在超越自行车骑行者时至少保持3英尺的间距。这为骑行者提供了与车辆之间的安全缓冲区。" },
            { language: "es", content: "¿Cuántos pies de espacio mínimo debe dar al pasar a un ciclista en Florida?", explanation: "La ley de Florida requiere que los conductores den a los ciclistas al menos 3 pies de espacio al pasarlos. Esto proporciona a los ciclistas una zona de seguridad del vehículo." },
          ],
          options: [
            {
              content: "At least 3 feet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少3英尺" },
                { language: "es", content: "Al menos 3 pies" },
              ],
            },
            {
              content: "At least 1 foot",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少1英尺" },
                { language: "es", content: "Al menos 1 pie" },
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
              content: "At least 2 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少2英尺" },
                { language: "es", content: "Al menos 2 pies" },
              ],
            },
          ],
        },
        {
          content: "What is aggressive driving in Florida, and what can it result in?",
          explanation: "Aggressive driving in Florida includes committing two or more moving violations (like speeding, tailgating, or unsafe lane changes) that endanger others. It is a moving violation that can lead to fines, points, and in some cases criminal charges.",
          handbookSection: "Safe Driving — Aggressive Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，什么是攻击性驾驶，会导致什么后果？", explanation: "在佛罗里达州，攻击性驾驶包括实施两项或以上危及他人的动态违规行为（如超速、跟车过近或不安全变道）。这是一种动态违规，可能导致罚款、扣分，在某些情况下还可能面临刑事指控。" },
            { language: "es", content: "¿Qué es la conducción agresiva en Florida y qué consecuencias puede tener?", explanation: "La conducción agresiva en Florida incluye cometer dos o más infracciones de tránsito (como exceso de velocidad, seguir muy de cerca o cambios de carril inseguros) que pongan en peligro a otros. Es una infracción de tránsito que puede resultar en multas, puntos y, en algunos casos, cargos criminales." },
          ],
          options: [
            {
              content: "Two or more moving violations that endanger others; results in fines and points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "两项或以上危及他人的动态违规；导致罚款和扣分" },
                { language: "es", content: "Dos o más infracciones de tránsito que pongan en peligro a otros; resulta en multas y puntos" },
              ],
            },
            {
              content: "Driving above 90 mph on any road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在任何道路上车速超过90英里/小时" },
                { language: "es", content: "Conducir a más de 90 mph en cualquier carretera" },
              ],
            },
            {
              content: "Honking your horn more than twice",
              isCorrect: false,
              translations: [
                { language: "zh", content: "按喇叭超过两次" },
                { language: "es", content: "Tocar la bocina más de dos veces" },
              ],
            },
            {
              content: "Making eye contact with other drivers",
              isCorrect: false,
              translations: [
                { language: "zh", content: "与其他驾驶员进行眼神接触" },
                { language: "es", content: "Hacer contacto visual con otros conductores" },
              ],
            },
          ],
        },
        {
          content: "When should you turn your wheels to the curb when parking on a downhill grade?",
          explanation: "When parking on a downhill grade (whether with or without a curb), you should turn your front wheels toward the curb or edge of the road. This prevents the vehicle from rolling into traffic if the brakes fail.",
          handbookSection: "Safe Driving — Parking",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在下坡停车时，什么时候应该将车轮转向路缘？", explanation: "在下坡停车时（无论有无路缘），您应该将前轮转向路缘或路边。这可以防止刹车失灵时车辆滑入车道。" },
            { language: "es", content: "¿Cuándo debe girar las ruedas hacia el bordillo al estacionar en una pendiente descendente?", explanation: "Al estacionar en una pendiente descendente (con o sin bordillo), debe girar las ruedas delanteras hacia el bordillo o borde de la carretera. Esto evita que el vehículo ruede hacia el tráfico si los frenos fallan." },
          ],
          options: [
            {
              content: "Turn wheels toward the curb when parking downhill",
              isCorrect: true,
              translations: [
                { language: "zh", content: "下坡停车时将车轮转向路缘" },
                { language: "es", content: "Girar las ruedas hacia el bordillo al estacionar cuesta abajo" },
              ],
            },
            {
              content: "Turn wheels away from the curb when parking downhill",
              isCorrect: false,
              translations: [
                { language: "zh", content: "下坡停车时将车轮转离路缘" },
                { language: "es", content: "Girar las ruedas alejándolas del bordillo al estacionar cuesta abajo" },
              ],
            },
            {
              content: "Keep wheels straight when parking on any grade",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在任何坡度停车时保持车轮笔直" },
                { language: "es", content: "Mantener las ruedas rectas al estacionar en cualquier pendiente" },
              ],
            },
            {
              content: "Only on grades steeper than 10 degrees",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在坡度超过10度时" },
                { language: "es", content: "Solo en pendientes mayores a 10 grados" },
              ],
            },
          ],
        },
        {
          content: "Florida's \"Slow Down, Move Over\" law applies to which types of vehicles?",
          explanation: "Florida's Move Over law applies to stopped emergency vehicles (police, fire, EMS), sanitation workers, utility service vehicles, and tow trucks with flashing lights. You must move over one lane or reduce speed by 20 mph.",
          handbookSection: "Safe Driving — Move Over Law",
          difficulty: 2,
          translations: [
            { language: "zh", content: "佛罗里达州的「减速、让行」法律适用于哪些类型的车辆？", explanation: "佛罗里达州的让行法律适用于停靠的紧急车辆（警车、消防车、急救车）、环卫工人、公用事业服务车辆以及闪灯的拖车。您必须变换到另一车道或减速20英里/小时。" },
            { language: "es", content: "¿A qué tipos de vehículos se aplica la ley de Florida \"Reduzca la velocidad, muévase\"?", explanation: "La ley de Florida de moverse se aplica a vehículos de emergencia detenidos (policía, bomberos, servicios médicos de emergencia), trabajadores de saneamiento, vehículos de servicios públicos y grúas con luces intermitentes. Debe moverse a otro carril o reducir la velocidad en 20 mph." },
          ],
          options: [
            {
              content: "Emergency vehicles, sanitation, utility, and tow trucks with lights flashing",
              isCorrect: true,
              translations: [
                { language: "zh", content: "闪灯的紧急车辆、环卫车、公用事业车辆和拖车" },
                { language: "es", content: "Vehículos de emergencia, saneamiento, servicios públicos y grúas con luces intermitentes" },
              ],
            },
            {
              content: "Only law enforcement vehicles",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅执法车辆" },
                { language: "es", content: "Solo vehículos de las fuerzas del orden" },
              ],
            },
            {
              content: "Only fire trucks and ambulances",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅消防车和救护车" },
                { language: "es", content: "Solo camiones de bomberos y ambulancias" },
              ],
            },
            {
              content: "Any vehicle stopped on the shoulder",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何停在路肩的车辆" },
                { language: "es", content: "Cualquier vehículo detenido en el arcén" },
              ],
            },
          ],
        },
        {
          content: "What is the correct response when your vehicle begins to skid on a wet road?",
          explanation: "When skidding, ease off the gas pedal and do not hit the brakes hard. Steer gently in the direction you want the vehicle to go. Sudden braking during a skid will make it worse.",
          handbookSection: "Safe Driving — Skid Control",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当您的车辆在湿滑路面开始打滑时，正确的应对方法是什么？", explanation: "打滑时，松开油门，不要猛踩刹车。轻轻地将方向盘转向您希望车辆行驶的方向。打滑时突然刹车会使情况恶化。" },
            { language: "es", content: "¿Cuál es la respuesta correcta cuando su vehículo comienza a derrapar en una carretera mojada?", explanation: "Cuando derrape, suelte el acelerador y no frene bruscamente. Gire suavemente el volante en la dirección en que desea que vaya el vehículo. Frenar bruscamente durante un derrape lo empeorará." },
          ],
          options: [
            {
              content: "Ease off the gas and steer gently in the desired direction",
              isCorrect: true,
              translations: [
                { language: "zh", content: "松开油门并轻轻转向期望的方向" },
                { language: "es", content: "Suelte el acelerador y gire suavemente en la dirección deseada" },
              ],
            },
            {
              content: "Apply maximum braking force immediately",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即施加最大刹车力" },
                { language: "es", content: "Aplique la máxima fuerza de frenado inmediatamente" },
              ],
            },
            {
              content: "Turn the wheel sharply to regain control",
              isCorrect: false,
              translations: [
                { language: "zh", content: "猛打方向盘以恢复控制" },
                { language: "es", content: "Gire el volante bruscamente para recuperar el control" },
              ],
            },
            {
              content: "Accelerate to push out of the skid",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速驶出打滑" },
                { language: "es", content: "Acelere para salir del derrape" },
              ],
            },
          ],
        },
        {
          content: "When must you report a crash to the Florida Department of Highway Safety and Motor Vehicles (DHSMV)?",
          explanation: "In Florida, you must report a crash to DHSMV within 10 days if the crash resulted in injury, death, or property damage of $500 or more and a law enforcement officer did NOT investigate the crash. If police investigated the scene, they file the report.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 3,
          translations: [
            { language: "zh", content: "何时必须向佛罗里达州公路安全和机动车辆部（DHSMV）报告事故？", explanation: "在佛罗里达州，如果事故造成人身伤害、死亡或财产损失达500美元或以上，且执法人员没有调查该事故，您必须在10天内向DHSMV报告。如果警察在现场进行了调查，则由他们提交报告。" },
            { language: "es", content: "¿Cuándo debe reportar un accidente al Departamento de Seguridad Vial y Vehículos de Motor de Florida (DHSMV)?", explanation: "En Florida, debe reportar un accidente al DHSMV dentro de los 10 días si el accidente resultó en lesiones, muerte o daños a la propiedad de $500 o más y un oficial de la ley NO investigó el accidente. Si la policía investigó la escena, ellos presentan el informe." },
          ],
          options: [
            {
              content: "Within 10 days if the crash caused injury, death, or $500+ damage and police did not investigate",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果事故造成伤害、死亡或500美元以上损失且警察未调查，则在10天内报告" },
                { language: "es", content: "Dentro de los 10 días si el accidente causó lesiones, muerte o daños de $500+ y la policía no investigó" },
              ],
            },
            {
              content: "Only if someone was injured — property damage does not require a report",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当有人受伤时——财产损失不需要报告" },
                { language: "es", content: "Solo si alguien resultó herido — los daños a la propiedad no requieren un informe" },
              ],
            },
            {
              content: "Within 24 hours for all crashes regardless of severity",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有事故无论严重程度均在24小时内报告" },
                { language: "es", content: "Dentro de las 24 horas para todos los accidentes independientemente de la gravedad" },
              ],
            },
            {
              content: "You are never required to report a crash — that is the police's job",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您永远不需要报告事故——那是警察的工作" },
                { language: "es", content: "Nunca está obligado a reportar un accidente — ese es el trabajo de la policía" },
              ],
            },
          ],
        },
        {
          content: "Leaving the scene of a crash in Florida where someone was injured or killed is:",
          explanation: "Leaving the scene of a crash involving injury or death (hit and run) is a felony in Florida. Penalties include up to 15 years in prison for leaving after a fatal crash. You are legally required to stop, identify yourself, and render aid.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州，离开有人受伤或死亡的事故现场是：", explanation: "在佛罗里达州，离开涉及受伤或死亡的事故现场（肇事逃逸）是重罪。在致命事故后离开现场最高可判15年监禁。您在法律上有义务停车、表明身份并提供援助。" },
            { language: "es", content: "Abandonar la escena de un accidente en Florida donde alguien resultó herido o muerto es:", explanation: "Abandonar la escena de un accidente que involucra lesiones o muerte (fuga) es un delito grave en Florida. Las penalidades incluyen hasta 15 años de prisión por abandonar la escena después de un accidente fatal. Está legalmente obligado a detenerse, identificarse y prestar ayuda." },
          ],
          options: [
            {
              content: "A felony — punishable by up to 15 years in prison for a fatal crash",
              isCorrect: true,
              translations: [
                { language: "zh", content: "重罪——致命事故肇事逃逸最高可判15年监禁" },
                { language: "es", content: "Un delito grave — punible con hasta 15 años de prisión por un accidente fatal" },
              ],
            },
            {
              content: "A minor traffic infraction with a small fine",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只是小额罚款的轻微交通违规" },
                { language: "es", content: "Una infracción de tráfico menor con una pequeña multa" },
              ],
            },
            {
              content: "Only illegal if the damage exceeds $1,000",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当损失超过1000美元时才违法" },
                { language: "es", content: "Solo es ilegal si el daño supera $1,000" },
              ],
            },
            {
              content: "A misdemeanor regardless of injury severity",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无论伤害严重程度均为轻罪" },
                { language: "es", content: "Un delito menor independientemente de la gravedad de las lesiones" },
              ],
            },
          ],
        },
        {
          content: "What should a driver do when experiencing tire failure (blowout) on a Florida highway?",
          explanation: "If you have a tire blowout, do NOT brake suddenly. Instead, hold the steering wheel firmly, ease off the gas gradually to slow down, steer straight, and gently guide the vehicle to the shoulder before stopping. Sudden braking during a blowout can cause a loss of control.",
          handbookSection: "Safe Driving — Crash Procedures",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在佛罗里达州高速公路上发生轮胎爆胎时，驾驶员应该怎么做？", explanation: "如果您的轮胎爆胎，不要突然刹车。应该紧握方向盘，逐渐松开油门减速，保持直线行驶，然后轻轻将车辆引导到路肩后停车。爆胎时突然刹车可能导致失控。" },
            { language: "es", content: "¿Qué debe hacer un conductor cuando experimenta una falla de neumático (pinchazo) en una autopista de Florida?", explanation: "Si tiene un reventón de neumático, NO frene repentinamente. En su lugar, sostenga firmemente el volante, quite el pie del acelerador gradualmente para reducir la velocidad, mantenga el rumbo recto y guíe suavemente el vehículo hacia el arcén antes de detenerse. Frenar bruscamente durante un reventón puede causar pérdida de control." },
          ],
          options: [
            {
              content: "Hold the wheel firmly, ease off the gas, steer straight, and pull to the shoulder",
              isCorrect: true,
              translations: [
                { language: "zh", content: "紧握方向盘，逐渐松开油门，保持直线行驶，并驶向路肩" },
                { language: "es", content: "Sostenga el volante firmemente, quite el pie del acelerador, mantenga el rumbo y diríjase al arcén" },
              ],
            },
            {
              content: "Apply the brakes hard and stop immediately",
              isCorrect: false,
              translations: [
                { language: "zh", content: "猛踩刹车立即停车" },
                { language: "es", content: "Aplique los frenos con fuerza y detenga inmediatamente" },
              ],
            },
            {
              content: "Accelerate to maintain speed until you can pull over safely",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速保持车速直到可以安全靠边停车" },
                { language: "es", content: "Acelere para mantener la velocidad hasta que pueda detenerse de forma segura" },
              ],
            },
            {
              content: "Turn on hazard lights and continue driving to the next exit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "打开危险警示灯并继续行驶到下一个出口" },
                { language: "es", content: "Encienda las luces de emergencia y continúe conduciendo hasta la próxima salida" },
              ],
            },
          ],
        },
        {
          content: "In Florida, when must you use your headlights while driving?",
          explanation: "Florida law requires headlights from sunset to sunrise. You must also use headlights when visibility is less than 1,000 feet ahead, during rain (when wipers are in use), and in other conditions of insufficient light. Running lights alone do not satisfy this requirement.",
          handbookSection: "Safe Driving — Headlight Laws",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在佛罗里达州，驾驶时何时必须使用前大灯？", explanation: "佛罗里达州法律要求从日落到日出使用前大灯。当前方能见度不足1000英尺、雨中（使用雨刮器时）以及其他光线不足的情况下，也必须使用前大灯。仅使用行车灯不满足此要求。" },
            { language: "es", content: "En Florida, ¿cuándo debe usar los faros delanteros mientras conduce?", explanation: "La ley de Florida requiere faros delanteros desde el atardecer hasta el amanecer. También debe usar faros cuando la visibilidad sea inferior a 1,000 pies hacia adelante, durante la lluvia (cuando los limpiaparabrisas estén en uso) y en otras condiciones de luz insuficiente. Las luces de circulación diurna solas no cumplen con este requisito." },
          ],
          options: [
            {
              content: "From sunset to sunrise and whenever visibility is less than 1,000 feet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从日落到日出以及能见度不足1000英尺时" },
                { language: "es", content: "Desde el atardecer hasta el amanecer y cuando la visibilidad sea inferior a 1,000 pies" },
              ],
            },
            {
              content: "Only after midnight when it is completely dark",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在完全黑暗的午夜之后" },
                { language: "es", content: "Solo después de la medianoche cuando está completamente oscuro" },
              ],
            },
            {
              content: "Only during rain — headlights are optional at night",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在雨天——夜间前大灯是可选的" },
                { language: "es", content: "Solo durante la lluvia — los faros son opcionales de noche" },
              ],
            },
            {
              content: "Running lights (daytime running lights) are sufficient at night",
              isCorrect: false,
              translations: [
                { language: "zh", content: "夜间行车灯（日间行车灯）就足够了" },
                { language: "es", content: "Las luces de circulación diurna son suficientes de noche" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
