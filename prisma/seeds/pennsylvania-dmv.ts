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

    // ─── TOPIC 1: SIGNALS, SIGNS AND PAVEMENT MARKINGS (Ch.2) ──────────────────
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

      ], // end Topic 7 questions
    }, // end Topic 7

  ], // end topics
}; // end pennsylvaniaDMV
