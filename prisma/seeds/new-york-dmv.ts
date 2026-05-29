/**
 * New York State DMV Driver's License Practice Questions
 * Source: New York State Driver's Manual (official) — dmv.ny.gov
 * 100 questions across 6 topics — English, Chinese (Simplified), Spanish
 * Auto-translated via Claude API
 */

export const newYorkDMV = {
  category: {
    name: "New York Driver's License",
    nameEn: "New York Driver's License",
    description: "New York DMV Knowledge Test — 20 questions, 70% to pass (14/20 correct)",
    icon: "🗽",
    color: "#1D4ED8",
    hasAiTutor: false,
    translations: [
      {
        language: "zh",
        name: "纽约州驾照笔试",
        description: "纽约 DMV 驾照知识考试 — 共 20 题，答对 14 题（70%）即通过",
      },
      {
        language: "es",
        name: "Licencia de Conducir de Nueva York",
        description: "Examen de conocimientos del DMV de Nueva York — 20 preguntas, 70% para aprobar",
      },
    ],
  },
  topics: [
    // ─── TRAFFIC CONTROL & ROAD SIGNS ─────────────────────────────────────────
    {
      name: "Traffic Control & Road Signs",
      nameEn: "Traffic Control & Road Signs",
      description: "Traffic signs, signals, pavement markings, and lane controls",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-4-traffic-control",
      translations: [
        { language: "zh", name: "交通控制与道路标志", description: "交通标志、信号灯、路面标线及车道控制" },
        { language: "es", name: "Control de Tráfico y Señales Viales", description: "Señales de tráfico, semáforos, marcas en el pavimento y controles de carril" },
      ],
      questions: [
        {
          content: "What shape is used for warning signs in New York?",
          explanation: "Warning signs are diamond-shaped with yellow background and black letters/symbols. They warn drivers of potential hazards or special rules ahead.",
          handbookSection: "Traffic Control — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "纽约州的警告标志是什么形状？", explanation: "警告标志为菱形，黄色背景配黑色字母或符号。它们用于提醒驾驶员前方可能存在危险或特殊规则。" },
            { language: "es", content: "¿Qué forma tienen las señales de advertencia en Nueva York?", explanation: "Las señales de advertencia tienen forma de diamante con fondo amarillo y letras/símbolos negros. Advierten a los conductores sobre posibles peligros o reglas especiales adelante." },
          ],
          options: [
            {
              content: "Diamond",
              isCorrect: true,
              translations: [
                { language: "zh", content: "菱形" },
                { language: "es", content: "Diamante" },
              ],
            },
            {
              content: "Rectangle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "长方形" },
                { language: "es", content: "Rectángulo" },
              ],
            },
            {
              content: "Pentagon",
              isCorrect: false,
              translations: [
                { language: "zh", content: "五边形" },
                { language: "es", content: "Pentágono" },
              ],
            },
            {
              content: "Circle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "圆形" },
                { language: "es", content: "Círculo" },
              ],
            },
          ],
        },
        {
          content: "What color are service signs that mark rest areas, gas stations, and medical facilities?",
          explanation: "Service signs have a blue background with white letters or symbols. They mark locations of services such as rest areas, fuel, food, medical facilities, and lodging.",
          handbookSection: "Traffic Control — Sign Colors",
          difficulty: 1,
          translations: [
            { language: "zh", content: "标示休息区、加油站和医疗设施的服务标志是什么颜色？", explanation: "服务标志采用蓝色背景配白色字母或符号。它们标示休息区、加油站、餐饮、医疗设施和住宿等服务设施的位置。" },
            { language: "es", content: "¿De qué color son las señales de servicios que marcan áreas de descanso, gasolineras e instalaciones médicas?", explanation: "Las señales de servicios tienen fondo azul con letras o símbolos blancos. Marcan ubicaciones de servicios como áreas de descanso, combustible, comida, instalaciones médicas y alojamiento." },
          ],
          options: [
            {
              content: "Blue with white symbols",
              isCorrect: true,
              translations: [
                { language: "zh", content: "蓝底白色符号" },
                { language: "es", content: "Azul con símbolos blancos" },
              ],
            },
            {
              content: "Green with white letters",
              isCorrect: false,
              translations: [
                { language: "zh", content: "绿底白色字母" },
                { language: "es", content: "Verde con letras blancas" },
              ],
            },
            {
              content: "Brown with white letters",
              isCorrect: false,
              translations: [
                { language: "zh", content: "棕底白色字母" },
                { language: "es", content: "Marrón con letras blancas" },
              ],
            },
            {
              content: "Yellow with black symbols",
              isCorrect: false,
              translations: [
                { language: "zh", content: "黄底黑色符号" },
                { language: "es", content: "Amarillo con símbolos negros" },
              ],
            },
          ],
        },
        {
          content: "What color background is used on work zone signs?",
          explanation: "Work zone signs have an orange background with black letters or symbols. They indicate construction or maintenance areas where drivers must reduce speed and exercise extra caution.",
          handbookSection: "Traffic Control — Work Zone Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "施工区标志使用什么颜色的背景？", explanation: "施工区标志采用橙色背景配黑色字母或符号。它们表示施工或维护区域，驾驶员必须减速并格外小心。" },
            { language: "es", content: "¿Qué color de fondo se usa en las señales de zonas de trabajo?", explanation: "Las señales de zonas de trabajo tienen fondo naranja con letras o símbolos negros. Indican áreas de construcción o mantenimiento donde los conductores deben reducir la velocidad y tener precaución adicional." },
          ],
          options: [
            {
              content: "Orange with black",
              isCorrect: true,
              translations: [
                { language: "zh", content: "橙底黑字" },
                { language: "es", content: "Naranja con negro" },
              ],
            },
            {
              content: "Yellow with black",
              isCorrect: false,
              translations: [
                { language: "zh", content: "黄底黑字" },
                { language: "es", content: "Amarillo con negro" },
              ],
            },
            {
              content: "Red with white",
              isCorrect: false,
              translations: [
                { language: "zh", content: "红底白字" },
                { language: "es", content: "Rojo con blanco" },
              ],
            },
            {
              content: "White with black",
              isCorrect: false,
              translations: [
                { language: "zh", content: "白底黑字" },
                { language: "es", content: "Blanco con negro" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing red traffic light mean?",
          explanation: "A flashing red light has the same meaning as a stop sign. You must come to a complete stop, yield the right-of-way to cross traffic and pedestrians, then proceed when safe.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "闪烁的红色交通灯表示什么意思？", explanation: "闪烁的红灯与停车标志含义相同。您必须完全停车，让行给交叉路口的车辆和行人，然后在安全时继续行驶。" },
            { language: "es", content: "¿Qué significa una luz de tráfico roja intermitente?", explanation: "Una luz roja intermitente tiene el mismo significado que una señal de alto. Debe detenerse completamente, ceder el paso al tráfico cruzado y peatones, luego proceder cuando sea seguro." },
          ],
          options: [
            {
              content: "Same as a stop sign — stop, yield, then proceed when safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "与停车标志相同——停车、让行，安全时继续行驶" },
                { language: "es", content: "Igual que una señal de alto — deténgase, ceda el paso, luego proceda cuando sea seguro" },
              ],
            },
            {
              content: "Slow down and proceed with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速并谨慎通过" },
                { language: "es", content: "Reduzca la velocidad y proceda con precaución" },
              ],
            },
            {
              content: "Stop only if traffic is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有车辆时停车" },
                { language: "es", content: "Deténgase solo si hay tráfico presente" },
              ],
            },
            {
              content: "The light is about to turn red",
              isCorrect: false,
              translations: [
                { language: "zh", content: "信号灯即将变红" },
                { language: "es", content: "La luz está a punto de cambiar a rojo" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing yellow traffic light mean?",
          explanation: "A flashing yellow light means drive with caution. You do not need to stop, but you should slow down and be alert for potential hazards.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "闪烁的黄色交通灯表示什么意思？", explanation: "闪烁的黄灯表示谨慎驾驶。您不需要停车，但应该减速并注意潜在的危险。" },
            { language: "es", content: "¿Qué significa una luz de tráfico amarilla intermitente?", explanation: "Una luz amarilla intermitente significa conducir con precaución. No necesita detenerse, pero debe reducir la velocidad y estar alerta ante posibles peligros." },
          ],
          options: [
            {
              content: "Drive with caution",
              isCorrect: true,
              translations: [
                { language: "zh", content: "谨慎驾驶" },
                { language: "es", content: "Conduzca con precaución" },
              ],
            },
            {
              content: "Stop completely before proceeding",
              isCorrect: false,
              translations: [
                { language: "zh", content: "继续行驶前完全停车" },
                { language: "es", content: "Deténgase completamente antes de proceder" },
              ],
            },
            {
              content: "Prepare to stop — light is changing to red",
              isCorrect: false,
              translations: [
                { language: "zh", content: "准备停车——信号灯即将变红" },
                { language: "es", content: "Prepárese para detenerse — la luz está cambiando a rojo" },
              ],
            },
            {
              content: "Yield to oncoming traffic only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅让行给对向车辆" },
                { language: "es", content: "Ceda el paso solo al tráfico en sentido contrario" },
              ],
            },
          ],
        },
        {
          content: "What does a red arrow traffic signal mean?",
          explanation: "A red arrow means you cannot turn in the direction the arrow is pointing. You must wait for the arrow to change before making that turn.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "红色箭头交通信号灯表示什么意思？", explanation: "红色箭头表示您不能向箭头指示的方向转弯。您必须等待箭头变化后才能进行该转弯。" },
            { language: "es", content: "¿Qué significa una señal de flecha roja?", explanation: "Una flecha roja significa que no puede girar en la dirección que indica la flecha. Debe esperar a que la flecha cambie antes de hacer ese giro." },
          ],
          options: [
            {
              content: "No turns permitted in the arrow's direction",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不允许向箭头方向转弯" },
                { language: "es", content: "No se permiten giros en la dirección de la flecha" },
              ],
            },
            {
              content: "Turn after yielding to oncoming traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行给对向车辆后转弯" },
                { language: "es", content: "Gire después de ceder el paso al tráfico en sentido contrario" },
              ],
            },
            {
              content: "Right turn only is permitted",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅允许右转" },
                { language: "es", content: "Solo se permite girar a la derecha" },
              ],
            },
            {
              content: "Proceed after stopping completely",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车后继续行驶" },
                { language: "es", content: "Proceda después de detenerse completamente" },
              ],
            },
          ],
        },
        {
          content: "In New York City, when may a driver turn right on a red light?",
          explanation: "In New York City, right turns on red are prohibited unless a sign specifically permits the turn. This is different from other parts of New York State where right turns on red are generally permitted after stopping.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约市，驾驶员何时可以在红灯时右转？", explanation: "在纽约市，除非有标志明确允许转弯，否则禁止红灯右转。这与纽约州其他地区不同，在其他地区停车后通常允许红灯右转。" },
            { language: "es", content: "En la Ciudad de Nueva York, ¿cuándo puede un conductor girar a la derecha en luz roja?", explanation: "En la Ciudad de Nueva York, los giros a la derecha en rojo están prohibidos a menos que una señal permita específicamente el giro. Esto es diferente de otras partes del Estado de Nueva York donde los giros a la derecha en rojo generalmente están permitidos después de detenerse." },
          ],
          options: [
            {
              content: "Only when a sign specifically permits the turn",
              isCorrect: true,
              translations: [
                { language: "zh", content: "仅当有标志明确允许转弯时" },
                { language: "es", content: "Solo cuando una señal permite específicamente el giro" },
              ],
            },
            {
              content: "After stopping and yielding to traffic and pedestrians",
              isCorrect: false,
              translations: [
                { language: "zh", content: "停车并让行给车辆和行人后" },
                { language: "es", content: "Después de detenerse y ceder el paso al tráfico y peatones" },
              ],
            },
            {
              content: "Only between midnight and 6 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在午夜至早上6点之间" },
                { language: "es", content: "Solo entre la medianoche y las 6 a.m." },
              ],
            },
            {
              content: "Never, right on red is prohibited statewide",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从不，全州禁止红灯右转" },
                { language: "es", content: "Nunca, girar a la derecha en rojo está prohibido en todo el estado" },
              ],
            },
          ],
        },
        {
          content: "What must a school bus driver do at a red traffic signal?",
          explanation: "School bus drivers cannot turn right on any red light, regardless of location or whether signs permit it for other drivers. This applies statewide including outside New York City.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "校车驾驶员在红色交通信号灯前必须怎么做？", explanation: "校车驾驶员在任何红灯时都不能右转，无论地点或其他驾驶员是否有标志允许。这适用于全州，包括纽约市以外的地区。" },
            { language: "es", content: "¿Qué debe hacer un conductor de autobús escolar ante una señal de tráfico roja?", explanation: "Los conductores de autobuses escolares no pueden girar a la derecha en ninguna luz roja, independientemente de la ubicación o si las señales lo permiten para otros conductores. Esto aplica en todo el estado, incluyendo fuera de la Ciudad de Nueva York." },
          ],
          options: [
            {
              content: "Stop and wait — school buses cannot turn right on red anywhere",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车等待——校车在任何地方都不能红灯右转" },
                { language: "es", content: "Detenerse y esperar — los autobuses escolares no pueden girar a la derecha en rojo en ningún lugar" },
              ],
            },
            {
              content: "Turn right after stopping if the way is clear",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果道路畅通，停车后右转" },
                { language: "es", content: "Girar a la derecha después de detenerse si el camino está despejado" },
              ],
            },
            {
              content: "Follow the same rules as other drivers",
              isCorrect: false,
              translations: [
                { language: "zh", content: "遵守与其他驾驶员相同的规则" },
                { language: "es", content: "Seguir las mismas reglas que otros conductores" },
              ],
            },
            {
              content: "Turn right only when no children are on board",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在车上没有儿童时右转" },
                { language: "es", content: "Girar a la derecha solo cuando no haya niños a bordo" },
              ],
            },
          ],
        },
        {
          content: "What does a steady red X on a lane-use control signal mean?",
          explanation: "A steady red X means that the lane directly below the signal is closed. Drivers must not travel in that lane.",
          handbookSection: "Traffic Control — Lane Use Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "车道控制信号上稳定的红色X表示什么意思？", explanation: "稳定的红色X表示信号正下方的车道已关闭。驾驶员不得在该车道行驶。" },
            { language: "es", content: "¿Qué significa una X roja fija en una señal de control de carril?", explanation: "Una X roja fija significa que el carril directamente debajo de la señal está cerrado. Los conductores no deben circular por ese carril." },
          ],
          options: [
            {
              content: "Do not drive in this lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不要在此车道行驶" },
                { language: "es", content: "No conduzca en este carril" },
              ],
            },
            {
              content: "Move from this lane soon",
              isCorrect: false,
              translations: [
                { language: "zh", content: "尽快离开此车道" },
                { language: "es", content: "Salga de este carril pronto" },
              ],
            },
            {
              content: "Left turns only in this lane",
              isCorrect: false,
              translations: [
                { language: "zh", content: "此车道仅限左转" },
                { language: "es", content: "Solo giros a la izquierda en este carril" },
              ],
            },
            {
              content: "Lane is available for use",
              isCorrect: false,
              translations: [
                { language: "zh", content: "此车道可以使用" },
                { language: "es", content: "El carril está disponible para uso" },
              ],
            },
          ],
        },
        {
          content: "What does a flashing yellow X on a lane-use control signal mean?",
          explanation: "A flashing yellow X indicates that the lane may be used for left turns only. Drivers should prepare to turn left or change lanes.",
          handbookSection: "Traffic Control — Lane Use Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "车道控制信号上闪烁的黄色X表示什么意思？", explanation: "闪烁的黄色X表示该车道仅可用于左转。驾驶员应准备左转或变换车道。" },
            { language: "es", content: "¿Qué significa una X amarilla intermitente en una señal de control de carril?", explanation: "Una X amarilla intermitente indica que el carril solo puede usarse para giros a la izquierda. Los conductores deben prepararse para girar a la izquierda o cambiar de carril." },
          ],
          options: [
            {
              content: "Left turns only in this lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "此车道仅限左转" },
                { language: "es", content: "Solo giros a la izquierda en este carril" },
              ],
            },
            {
              content: "Do not drive in this lane",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不要在此车道行驶" },
                { language: "es", content: "No conduzca en este carril" },
              ],
            },
            {
              content: "Move from this lane immediately",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即离开此车道" },
                { language: "es", content: "Salga de este carril inmediatamente" },
              ],
            },
            {
              content: "Lane available for all uses",
              isCorrect: false,
              translations: [
                { language: "zh", content: "此车道可用于所有用途" },
                { language: "es", content: "Carril disponible para todos los usos" },
              ],
            },
          ],
        },
        {
          content: "What do double solid yellow lines in the center of the road mean?",
          explanation: "Double solid yellow lines mean you cannot pass or change lanes across them. You may cross them only to make a left turn into or from a driveway or for a legal U-turn.",
          handbookSection: "Traffic Control — Pavement Markings",
          difficulty: 2,
          translations: [
            { language: "zh", content: "道路中央的双黄实线表示什么意思？", explanation: "双黄实线表示您不能跨越它们超车或变道。您只能在进入或离开车道时左转或合法掉头时跨越它们。" },
            { language: "es", content: "¿Qué significan las líneas amarillas dobles continuas en el centro de la carretera?", explanation: "Las líneas amarillas dobles continuas significan que no puede pasar ni cambiar de carril cruzándolas. Solo puede cruzarlas para girar a la izquierda hacia o desde una entrada o para un giro en U legal." },
          ],
          options: [
            {
              content: "You cannot pass or change lanes except for a left turn or U-turn",
              isCorrect: true,
              translations: [
                { language: "zh", content: "除左转或掉头外，不能超车或变道" },
                { language: "es", content: "No puede pasar ni cambiar de carril excepto para un giro a la izquierda o giro en U" },
              ],
            },
            {
              content: "You may pass when it is safe to do so",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在安全时可以超车" },
                { language: "es", content: "Puede pasar cuando sea seguro hacerlo" },
              ],
            },
            {
              content: "These lanes are for emergency vehicles only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "这些车道仅供紧急车辆使用" },
                { language: "es", content: "Estos carriles son solo para vehículos de emergencia" },
              ],
            },
            {
              content: "Passing is only permitted during daylight hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在白天允许超车" },
                { language: "es", content: "Solo se permite pasar durante las horas del día" },
              ],
            },
          ],
        },
        {
          content: "What does a solid white line with a broken white line alongside it indicate?",
          explanation: "When a solid line and broken line run parallel, drivers on the solid-line side cannot pass, while drivers on the broken-line side may pass if it is safe. The solid line prohibits passing; the broken line permits it.",
          handbookSection: "Traffic Control — Pavement Markings",
          difficulty: 2,
          translations: [
            { language: "zh", content: "一条白色实线旁边有一条白色虚线表示什么意思？", explanation: "当实线和虚线平行时，实线一侧的驾驶员不能超车，而虚线一侧的驾驶员如果安全可以超车。实线禁止超车；虚线允许超车。" },
            { language: "es", content: "¿Qué indica una línea blanca continua con una línea blanca discontinua a su lado?", explanation: "Cuando una línea continua y una discontinua corren paralelas, los conductores del lado de la línea continua no pueden pasar, mientras que los conductores del lado de la línea discontinua pueden pasar si es seguro. La línea continua prohíbe pasar; la línea discontinua lo permite." },
          ],
          options: [
            {
              content: "Solid-side drivers cannot pass; broken-side drivers may pass if safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "实线一侧的驾驶员不能超车；虚线一侧的驾驶员如果安全可以超车" },
                { language: "es", content: "Los conductores del lado continuo no pueden pasar; los del lado discontinuo pueden pasar si es seguro" },
              ],
            },
            {
              content: "Both sides may pass when traffic is clear",
              isCorrect: false,
              translations: [
                { language: "zh", content: "两侧在交通畅通时都可以超车" },
                { language: "es", content: "Ambos lados pueden pasar cuando el tráfico está despejado" },
              ],
            },
            {
              content: "Broken-side drivers cannot pass; solid-side drivers may pass",
              isCorrect: false,
              translations: [
                { language: "zh", content: "虚线一侧的驾驶员不能超车；实线一侧的驾驶员可以超车" },
                { language: "es", content: "Los conductores del lado discontinuo no pueden pasar; los del lado continuo pueden pasar" },
              ],
            },
            {
              content: "Neither side may pass at any time",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何一侧在任何时候都不能超车" },
                { language: "es", content: "Ningún lado puede pasar en ningún momento" },
              ],
            },
          ],
        },
        {
          content: "What does a diamond symbol painted on the road surface indicate?",
          explanation: "A diamond marking identifies a reserved lane, typically for buses, carpools (HOV), or bicycles. Regular vehicles cannot enter the lane unless they meet the requirements for that lane.",
          handbookSection: "Traffic Control — Pavement Markings",
          difficulty: 2,
          translations: [
            { language: "zh", content: "路面上涂画的菱形符号表示什么意思？", explanation: "菱形标记表示专用车道，通常用于公交车、拼车（HOV）或自行车。普通车辆不能进入该车道，除非符合该车道的要求。" },
            { language: "es", content: "¿Qué indica un símbolo de diamante pintado en la superficie de la carretera?", explanation: "Una marca de diamante identifica un carril reservado, típicamente para autobuses, vehículos compartidos (HOV) o bicicletas. Los vehículos regulares no pueden entrar al carril a menos que cumplan con los requisitos para ese carril." },
          ],
          options: [
            {
              content: "A reserved lane for buses, HOV vehicles, or bicycles",
              isCorrect: true,
              translations: [
                { language: "zh", content: "公交车、HOV车辆或自行车的专用车道" },
                { language: "es", content: "Un carril reservado para autobuses, vehículos HOV o bicicletas" },
              ],
            },
            {
              content: "A no-passing zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "禁止超车区" },
                { language: "es", content: "Una zona de no pasar" },
              ],
            },
            {
              content: "A pedestrian crossing area",
              isCorrect: false,
              translations: [
                { language: "zh", content: "人行横道区域" },
                { language: "es", content: "Un área de cruce peatonal" },
              ],
            },
            {
              content: "A turning lane only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅限转弯车道" },
                { language: "es", content: "Un carril solo para giros" },
              ],
            },
          ],
        },
        {
          content: "When must drivers obey the directions of a traffic officer over other traffic controls?",
          explanation: "Directions given by traffic officers always take precedence over signs, signals, or pavement markings. When a police officer, fire police, highway flagger, or school crossing guard directs traffic, you must follow their instructions.",
          handbookSection: "Traffic Control — Traffic Officers",
          difficulty: 1,
          translations: [
            { language: "zh", content: "驾驶员何时必须服从交通警察的指挥而不是其他交通控制设施？", explanation: "交通警察的指挥始终优先于标志、信号或路面标记。当警察、消防警察、公路旗手或学校护送员指挥交通时，您必须遵循他们的指示。" },
            { language: "es", content: "¿Cuándo deben los conductores obedecer las direcciones de un oficial de tráfico sobre otros controles de tráfico?", explanation: "Las direcciones dadas por oficiales de tráfico siempre tienen precedencia sobre señales, semáforos o marcas en el pavimento. Cuando un oficial de policía, policía de bomberos, abanderado de carretera o guardia de cruce escolar dirige el tráfico, debe seguir sus instrucciones." },
          ],
          options: [
            {
              content: "Always — traffic officer directions take precedence over all signals and signs",
              isCorrect: true,
              translations: [
                { language: "zh", content: "始终——交通警察的指挥优先于所有信号和标志" },
                { language: "es", content: "Siempre — las direcciones del oficial de tráfico tienen precedencia sobre todas las señales y semáforos" },
              ],
            },
            {
              content: "Only at intersections without traffic signals",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在没有交通信号的路口" },
                { language: "es", content: "Solo en intersecciones sin semáforos" },
              ],
            },
            {
              content: "Only in school zones and work zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区和施工区" },
                { language: "es", content: "Solo en zonas escolares y zonas de trabajo" },
              ],
            },
            {
              content: "Only when the officer is in a marked vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当警察在标记车辆内时" },
                { language: "es", content: "Solo cuando el oficial está en un vehículo marcado" },
              ],
            },
          ],
        },
        {
          content: "What does an orange pentagon-shaped sign indicate?",
          explanation: "No — a pentagon (five-sided sign) is used for school zones and school crossings. The color is yellow-green fluorescent with black markings. Orange rectangles/diamonds are used for work zones.",
          handbookSection: "Traffic Control — Sign Shapes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "橙色五边形标志表示什么意思？", explanation: "不——五边形（五边形标志）用于学校区和学校交叉口。颜色为黄绿色荧光配黑色标记。橙色矩形/菱形用于施工区。" },
            { language: "es", content: "¿Qué indica una señal pentagonal naranja?", explanation: "No — un pentágono (señal de cinco lados) se usa para zonas escolares y cruces escolares. El color es amarillo-verde fluorescente con marcas negras. Los rectángulos/diamantes naranjas se usan para zonas de trabajo." },
          ],
          options: [
            {
              content: "A school zone or school crossing ahead",
              isCorrect: true,
              translations: [
                { language: "zh", content: "前方是学校区或学校交叉口" },
                { language: "es", content: "Una zona escolar o cruce escolar adelante" },
              ],
            },
            {
              content: "A construction work zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "施工区" },
                { language: "es", content: "Una zona de trabajo de construcción" },
              ],
            },
            {
              content: "A hazardous material route",
              isCorrect: false,
              translations: [
                { language: "zh", content: "危险物品运输路线" },
                { language: "es", content: "Una ruta de materiales peligrosos" },
              ],
            },
            {
              content: "A no-passing zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "禁止超车区" },
                { language: "es", content: "Una zona de no pasar" },
              ],
            },
          ],
        },
        {
          content: "What are edge lines on the roadway used for?",
          explanation: "Edge lines mark the outer boundary of the road. It is illegal to cross them except by authorized personnel. They help drivers stay within the roadway, especially at night or in poor weather.",
          handbookSection: "Traffic Control — Pavement Markings",
          difficulty: 1,
          translations: [
            { language: "zh", content: "道路上的边缘线有什么用途？", explanation: "边缘线标示道路的外边界。除授权人员外，跨越边缘线是违法的。它们帮助驾驶员保持在车道内，特别是在夜间或恶劣天气时。" },
            { language: "es", content: "¿Para qué se usan las líneas de borde en la carretera?", explanation: "Las líneas de borde marcan el límite exterior de la carretera. Es ilegal cruzarlas excepto por personal autorizado. Ayudan a los conductores a mantenerse dentro de la carretera, especialmente de noche o en mal tiempo." },
          ],
          options: [
            {
              content: "Mark the road edge; crossing is illegal except for authorized personnel",
              isCorrect: true,
              translations: [
                { language: "zh", content: "标示道路边缘；除授权人员外跨越是违法的" },
                { language: "es", content: "Marcan el borde de la carretera; cruzarlas es ilegal excepto para personal autorizado" },
              ],
            },
            {
              content: "Separate lanes of traffic moving in opposite directions",
              isCorrect: false,
              translations: [
                { language: "zh", content: "分隔相反方向行驶的车道" },
                { language: "es", content: "Separan carriles de tráfico que se mueven en direcciones opuestas" },
              ],
            },
            {
              content: "Indicate where cyclists must ride",
              isCorrect: false,
              translations: [
                { language: "zh", content: "指示自行车必须行驶的位置" },
                { language: "es", content: "Indican dónde deben circular los ciclistas" },
              ],
            },
            {
              content: "Show the boundary of a no-parking zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "显示禁止停车区的边界" },
                { language: "es", content: "Muestran el límite de una zona de no estacionar" },
              ],
            },
          ],
        },
        {
          content: "What do green background signs with white lettering indicate?",
          explanation: "Green destination signs provide direction and distance information to destinations such as cities, highways, and exit points. They help drivers navigate and plan their routes.",
          handbookSection: "Traffic Control — Sign Colors",
          difficulty: 1,
          translations: [
            { language: "zh", content: "绿色背景配白色字母的标志表示什么意思？", explanation: "绿色目的地标志提供前往城市、公路和出口等目的地的方向和距离信息。它们帮助驾驶员导航和规划路线。" },
            { language: "es", content: "¿Qué indican las señales de fondo verde con letras blancas?", explanation: "Las señales de destino verdes proporcionan información de dirección y distancia a destinos como ciudades, autopistas y puntos de salida. Ayudan a los conductores a navegar y planificar sus rutas." },
          ],
          options: [
            {
              content: "Direction and distance to destinations",
              isCorrect: true,
              translations: [
                { language: "zh", content: "前往目的地的方向和距离" },
                { language: "es", content: "Dirección y distancia a destinos" },
              ],
            },
            {
              content: "Service areas and facilities",
              isCorrect: false,
              translations: [
                { language: "zh", content: "服务区和设施" },
                { language: "es", content: "Áreas de servicio e instalaciones" },
              ],
            },
            {
              content: "Regulatory rules and speed limits",
              isCorrect: false,
              translations: [
                { language: "zh", content: "规章制度和限速" },
                { language: "es", content: "Reglas regulatorias y límites de velocidad" },
              ],
            },
            {
              content: "Work zone and construction warnings",
              isCorrect: false,
              translations: [
                { language: "zh", content: "施工区和施工警告" },
                { language: "es", content: "Advertencias de zona de trabajo y construcción" },
              ],
            },
          ],
        },
        {
          content: "A work zone sign warns that speed limit fines are doubled. Does this apply even when no workers are present?",
          explanation: "Yes. In New York, fines for speeding in a work zone are doubled whether or not workers are present. The doubled fine applies as long as the work zone signs are posted.",
          handbookSection: "Traffic Control — Work Zone Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "施工区标志警告超速罚款加倍。即使没有工人在场，这也适用吗？", explanation: "是的。在纽约州，无论是否有工人在场，施工区超速罚款都会加倍。只要施工区标志存在，加倍罚款就适用。" },
            { language: "es", content: "Una señal de zona de trabajo advierte que las multas por exceso de velocidad se duplican. ¿Esto aplica incluso cuando no hay trabajadores presentes?", explanation: "Sí. En Nueva York, las multas por exceso de velocidad en una zona de trabajo se duplican ya sea que haya trabajadores presentes o no. La multa duplicada aplica mientras las señales de zona de trabajo estén colocadas." },
          ],
          options: [
            {
              content: "Yes, the doubled fine applies even when no workers are present",
              isCorrect: true,
              translations: [
                { language: "zh", content: "是的，即使没有工人在场，加倍罚款也适用" },
                { language: "es", content: "Sí, la multa duplicada aplica incluso cuando no hay trabajadores presentes" },
              ],
            },
            {
              content: "No, the doubled fine only applies when workers are actively working",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不，加倍罚款仅在工人正在工作时适用" },
                { language: "es", content: "No, la multa duplicada solo aplica cuando los trabajadores están trabajando activamente" },
              ],
            },
            {
              content: "No, the doubled fine only applies during daylight hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不，加倍罚款仅在白天适用" },
                { language: "es", content: "No, la multa duplicada solo aplica durante las horas del día" },
              ],
            },
            {
              content: "Yes, but only on interstate highways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "是的，但仅在州际公路上适用" },
                { language: "es", content: "Sí, pero solo en autopistas interestatales" },
              ],
            },
          ],
        },
        {
          content: "What does a yellow arrow traffic signal mean?",
          explanation: "A yellow arrow means the green arrow protection is ending and you should prepare to stop. It warns that the signal is about to change for that turning movement.",
          handbookSection: "Traffic Control — Traffic Signals",
          difficulty: 2,
          translations: [
            { language: "zh", content: "黄色箭头交通信号灯表示什么意思？", explanation: "黄色箭头表示绿色箭头保护即将结束，您应准备停车。它警告该转弯动作的信号即将改变。" },
            { language: "es", content: "¿Qué significa una señal de flecha amarilla?", explanation: "Una flecha amarilla significa que la protección de la flecha verde está terminando y debe prepararse para detenerse. Advierte que la señal está a punto de cambiar para ese movimiento de giro." },
          ],
          options: [
            {
              content: "Green arrow protection is ending — prepare to stop",
              isCorrect: true,
              translations: [
                { language: "zh", content: "绿色箭头保护即将结束——准备停车" },
                { language: "es", content: "La protección de la flecha verde está terminando — prepárese para detenerse" },
              ],
            },
            {
              content: "You may turn with caution",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您可以谨慎转弯" },
                { language: "es", content: "Puede girar con precaución" },
              ],
            },
            {
              content: "Yield to pedestrians and turn",
              isCorrect: false,
              translations: [
                { language: "zh", content: "让行给行人后转弯" },
                { language: "es", content: "Ceda el paso a los peatones y gire" },
              ],
            },
            {
              content: "Stop immediately",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即停车" },
                { language: "es", content: "Deténgase inmediatamente" },
              ],
            },
          ],
        },
        {
          content: "At what location must you stop when there is a stop sign and a stop line painted on the road?",
          explanation: "When a stop line is present, you must stop before the front of your vehicle crosses the stop line. You must not creep past it before stopping.",
          handbookSection: "Traffic Control — Pavement Markings",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当有停车标志和路面上涂有停车线时，您必须在什么位置停车？", explanation: "当有停车线时，您必须在车辆前端越过停车线之前停车。您不能在停车前向前蠕动越过停车线。" },
            { language: "es", content: "¿En qué ubicación debe detenerse cuando hay una señal de alto y una línea de alto pintada en la carretera?", explanation: "Cuando hay una línea de alto presente, debe detenerse antes de que el frente de su vehículo cruce la línea de alto. No debe avanzar lentamente pasándola antes de detenerse." },
          ],
          options: [
            {
              content: "Before your vehicle crosses the stop line",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在您的车辆越过停车线之前" },
                { language: "es", content: "Antes de que su vehículo cruce la línea de alto" },
              ],
            },
            {
              content: "With your front wheels on the stop line",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前轮在停车线上" },
                { language: "es", content: "Con sus ruedas delanteras sobre la línea de alto" },
              ],
            },
            {
              content: "Just past the stop line for better visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "刚过停车线以获得更好的视野" },
                { language: "es", content: "Justo pasada la línea de alto para mejor visibilidad" },
              ],
            },
            {
              content: "At the edge of the crosswalk if no stop line is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果没有停车线，在人行横道边缘" },
                { language: "es", content: "En el borde del cruce peatonal si no hay línea de alto presente" },
              ],
            },
          ],
        },
      ],
    },
    // ─── RIGHT-OF-WAY, INTERSECTIONS & TURNS ─────────────────────────────────────────
    {
      name: "Right-of-Way, Intersections & Turns",
      nameEn: "Right-of-Way, Intersections & Turns",
      description: "Right-of-way rules, turning procedures, signals, and emergency vehicles",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-5-intersections-and-turns",
      translations: [
        { language: "zh", name: "优先通行权、路口与转弯", description: "优先权规则、转弯程序、信号及紧急车辆" },
        { language: "es", name: "Derecho de Paso, Intersecciones y Giros", description: "Reglas de prioridad, procedimientos de giro, señales y vehículos de emergencia" },
      ],
      questions: [
        {
          content: "At an uncontrolled intersection where two vehicles arrive at the same time, who has the right-of-way?",
          explanation: "At an uncontrolled intersection where vehicles arrive simultaneously, the driver on the left must yield to the driver on the right. This is the standard right-of-way rule at intersections without signals or signs.",
          handbookSection: "Intersections and Turns — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在无管制的交叉路口，两辆车同时到达时，谁拥有先行权？", explanation: "在无管制的交叉路口，当车辆同时到达时，左侧的驾驶员必须让行给右侧的驾驶员。这是在没有信号灯或标志的交叉路口的标准先行权规则。" },
            { language: "es", content: "En una intersección sin control donde dos vehículos llegan al mismo tiempo, ¿quién tiene el derecho de paso?", explanation: "En una intersección sin control donde los vehículos llegan simultáneamente, el conductor de la izquierda debe ceder el paso al conductor de la derecha. Esta es la regla estándar de derecho de paso en intersecciones sin señales ni letreros." },
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
              content: "The driver going straight has the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直行的驾驶员拥有先行权" },
                { language: "es", content: "El conductor que va recto tiene el derecho de paso" },
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
          ],
        },
        {
          content: "When two vehicles approach from opposite directions and one driver wants to turn left, who must yield?",
          explanation: "A driver turning left must yield to all oncoming traffic going straight or turning right. Left-turning drivers must wait until it is safe to complete the turn.",
          handbookSection: "Intersections and Turns — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当两辆车从相反方向接近，其中一名驾驶员想要左转时，谁必须让行？", explanation: "左转的驾驶员必须让行给所有直行或右转的对向车辆。左转驾驶员必须等到可以安全完成转弯时才能转弯。" },
            { language: "es", content: "Cuando dos vehículos se aproximan desde direcciones opuestas y un conductor quiere girar a la izquierda, ¿quién debe ceder el paso?", explanation: "Un conductor que gira a la izquierda debe ceder el paso a todo el tráfico que viene de frente que va recto o gira a la derecha. Los conductores que giran a la izquierda deben esperar hasta que sea seguro completar el giro." },
          ],
          options: [
            {
              content: "The driver turning left must yield to traffic going straight or turning right",
              isCorrect: true,
              translations: [
                { language: "zh", content: "左转的驾驶员必须让行给直行或右转的车辆" },
                { language: "es", content: "El conductor que gira a la izquierda debe ceder el paso al tráfico que va recto o gira a la derecha" },
              ],
            },
            {
              content: "The driver going straight must yield to the turning vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "直行的驾驶员必须让行给转弯的车辆" },
                { language: "es", content: "El conductor que va recto debe ceder el paso al vehículo que gira" },
              ],
            },
            {
              content: "Both drivers must stop and yield to each other",
              isCorrect: false,
              translations: [
                { language: "zh", content: "两位驾驶员都必须停车并互相让行" },
                { language: "es", content: "Ambos conductores deben detenerse y cederse el paso mutuamente" },
              ],
            },
            {
              content: "The driver arriving second must yield",
              isCorrect: false,
              translations: [
                { language: "zh", content: "后到达的驾驶员必须让行" },
                { language: "es", content: "El conductor que llega segundo debe ceder el paso" },
              ],
            },
          ],
        },
        {
          content: "How far in advance must you signal before turning or changing lanes?",
          explanation: "New York law requires drivers to signal at least 100 feet (30 meters) before turning or changing lanes. This gives other drivers and pedestrians adequate warning of your intended movement.",
          handbookSection: "Intersections and Turns — Signaling",
          difficulty: 1,
          translations: [
            { language: "zh", content: "转弯或变道前必须提前多远打转向灯？", explanation: "纽约州法律要求驾驶员在转弯或变道前至少提前100英尺（30米）打转向灯。这能让其他驾驶员和行人有足够的时间注意到您的行驶意图。" },
            { language: "es", content: "¿Con cuánta anticipación debe señalizar antes de girar o cambiar de carril?", explanation: "La ley de Nueva York requiere que los conductores señalicen al menos 100 pies (30 metros) antes de girar o cambiar de carril. Esto da a otros conductores y peatones una advertencia adecuada de su movimiento previsto." },
          ],
          options: [
            {
              content: "At least 100 feet (30 m) ahead",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少提前100英尺（30米）" },
                { language: "es", content: "Al menos 100 pies (30 m) de anticipación" },
              ],
            },
            {
              content: "At least 50 feet ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少提前50英尺" },
                { language: "es", content: "Al menos 50 pies de anticipación" },
              ],
            },
            {
              content: "At least 200 feet ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少提前200英尺" },
                { language: "es", content: "Al menos 200 pies de anticipación" },
              ],
            },
            {
              content: "At least 500 feet ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少提前500英尺" },
                { language: "es", content: "Al menos 500 pies de anticipación" },
              ],
            },
          ],
        },
        {
          content: "What is the correct hand signal for a left turn?",
          explanation: "The correct hand signal for a left turn is to extend your left arm straight out horizontally through the window. This is the universal signal for a left turn.",
          handbookSection: "Intersections and Turns — Hand Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "左转的正确手势信号是什么？", explanation: "左转的正确手势信号是将左臂从车窗伸出并水平伸直。这是左转的通用信号。" },
            { language: "es", content: "¿Cuál es la señal manual correcta para girar a la izquierda?", explanation: "La señal manual correcta para girar a la izquierda es extender el brazo izquierdo horizontalmente por la ventana. Esta es la señal universal para un giro a la izquierda." },
          ],
          options: [
            {
              content: "Left arm extended horizontally out the window",
              isCorrect: true,
              translations: [
                { language: "zh", content: "左臂从车窗水平伸出" },
                { language: "es", content: "Brazo izquierdo extendido horizontalmente por la ventana" },
              ],
            },
            {
              content: "Left arm bent upward at 90 degrees",
              isCorrect: false,
              translations: [
                { language: "zh", content: "左臂向上弯曲成90度" },
                { language: "es", content: "Brazo izquierdo doblado hacia arriba a 90 grados" },
              ],
            },
            {
              content: "Left arm extended downward at 90 degrees",
              isCorrect: false,
              translations: [
                { language: "zh", content: "左臂向下伸出成90度" },
                { language: "es", content: "Brazo izquierdo extendido hacia abajo a 90 grados" },
              ],
            },
            {
              content: "Right arm extended out the passenger window",
              isCorrect: false,
              translations: [
                { language: "zh", content: "右臂从副驾驶车窗伸出" },
                { language: "es", content: "Brazo derecho extendido por la ventana del pasajero" },
              ],
            },
          ],
        },
        {
          content: "What is the correct hand signal for a right turn?",
          explanation: "The correct hand signal for a right turn is to extend your left arm out the window and bend it upward at a 90-degree angle. This indicates a right turn to drivers behind you.",
          handbookSection: "Intersections and Turns — Hand Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "右转的正确手势信号是什么？", explanation: "右转的正确手势信号是将左臂从车窗伸出并向上弯曲成90度角。这向后方驾驶员表示您要右转。" },
            { language: "es", content: "¿Cuál es la señal manual correcta para girar a la derecha?", explanation: "La señal manual correcta para girar a la derecha es extender el brazo izquierdo por la ventana y doblarlo hacia arriba en un ángulo de 90 grados. Esto indica un giro a la derecha a los conductores detrás de usted." },
          ],
          options: [
            {
              content: "Left arm bent upward at 90 degrees",
              isCorrect: true,
              translations: [
                { language: "zh", content: "左臂向上弯曲成90度" },
                { language: "es", content: "Brazo izquierdo doblado hacia arriba a 90 grados" },
              ],
            },
            {
              content: "Left arm extended horizontally",
              isCorrect: false,
              translations: [
                { language: "zh", content: "左臂水平伸出" },
                { language: "es", content: "Brazo izquierdo extendido horizontalmente" },
              ],
            },
            {
              content: "Left arm extended downward at 90 degrees",
              isCorrect: false,
              translations: [
                { language: "zh", content: "左臂向下伸出成90度" },
                { language: "es", content: "Brazo izquierdo extendido hacia abajo a 90 grados" },
              ],
            },
            {
              content: "Both hands raised above the steering wheel",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双手举过方向盘上方" },
                { language: "es", content: "Ambas manos levantadas sobre el volante" },
              ],
            },
          ],
        },
        {
          content: "When making a right turn at an intersection, you should:",
          explanation: "When turning right, get as far to the right as possible before turning. Turn into the right lane of the destination road. Do not make wide, sweeping right turns that enter the left lane.",
          handbookSection: "Intersections and Turns — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在交叉路口右转时，您应该：", explanation: "右转时，转弯前尽量靠右行驶。转入目的地道路的右车道。不要大幅度转弯进入左车道。" },
            { language: "es", content: "Al girar a la derecha en una intersección, usted debe:", explanation: "Al girar a la derecha, colóquese lo más a la derecha posible antes de girar. Gire hacia el carril derecho de la calle de destino. No haga giros amplios que entren al carril izquierdo." },
          ],
          options: [
            {
              content: "Get as far right as possible and turn into the right lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "尽量靠右并转入右车道" },
                { language: "es", content: "Colocarse lo más a la derecha posible y girar hacia el carril derecho" },
              ],
            },
            {
              content: "Turn from the center lane to increase visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从中间车道转弯以增加能见度" },
                { language: "es", content: "Girar desde el carril central para aumentar la visibilidad" },
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
              content: "Turn into the nearest available lane regardless of direction",
              isCorrect: false,
              translations: [
                { language: "zh", content: "转入最近的任何可用车道" },
                { language: "es", content: "Girar hacia el carril disponible más cercano sin importar la dirección" },
              ],
            },
          ],
        },
        {
          content: "When must you yield to pedestrians in a crosswalk?",
          explanation: "Drivers must yield to pedestrians who are legally crossing at marked or unmarked crosswalks. You must slow down or stop if necessary to allow pedestrians to cross safely.",
          handbookSection: "Intersections and Turns — Pedestrian Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "什么时候必须让行给人行横道上的行人？", explanation: "驾驶员必须让行给在有标记或无标记人行横道上合法过马路的行人。如有必要，您必须减速或停车，让行人安全通过。" },
            { language: "es", content: "¿Cuándo debe ceder el paso a los peatones en un cruce peatonal?", explanation: "Los conductores deben ceder el paso a los peatones que cruzan legalmente en cruces peatonales marcados o no marcados. Debe reducir la velocidad o detenerse si es necesario para permitir que los peatones crucen de manera segura." },
          ],
          options: [
            {
              content: "Whenever pedestrians are legally crossing at marked or unmarked crosswalks",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当行人在有标记或无标记的人行横道上合法过马路时" },
                { language: "es", content: "Siempre que los peatones estén cruzando legalmente en cruces marcados o no marcados" },
              ],
            },
            {
              content: "Only at marked crosswalks with painted lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有划线标记的人行横道" },
                { language: "es", content: "Solo en cruces peatonales marcados con líneas pintadas" },
              ],
            },
            {
              content: "Only when a pedestrian signal says WALK",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当行人信号灯显示「通行」时" },
                { language: "es", content: "Solo cuando la señal peatonal diga CRUCE" },
              ],
            },
            {
              content: "Only in school zones and residential areas",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域和住宅区" },
                { language: "es", content: "Solo en zonas escolares y áreas residenciales" },
              ],
            },
          ],
        },
        {
          content: "Why should you keep your wheels pointing straight ahead while waiting to make a left turn?",
          explanation: "Keeping your wheels straight while waiting prevents your car from being pushed into oncoming traffic if you are struck from behind. If your wheels are turned left and you are rear-ended, you could be pushed into oncoming traffic.",
          handbookSection: "Intersections and Turns — Turning",
          difficulty: 2,
          translations: [
            { language: "zh", content: "等待左转时为什么应该保持车轮指向正前方？", explanation: "等待时保持车轮指向正前方可以防止您被追尾时被推入对向车流。如果您的车轮已经向左打，被追尾时您可能会被推入对向车流。" },
            { language: "es", content: "¿Por qué debe mantener las ruedas apuntando hacia adelante mientras espera para girar a la izquierda?", explanation: "Mantener las ruedas rectas mientras espera evita que su automóvil sea empujado hacia el tráfico en sentido contrario si es golpeado por detrás. Si sus ruedas están giradas a la izquierda y es golpeado por detrás, podría ser empujado hacia el tráfico en sentido contrario." },
          ],
          options: [
            {
              content: "If hit from behind, you will not be pushed into oncoming traffic",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果被追尾，您不会被推入对向车流" },
                { language: "es", content: "Si es golpeado por detrás, no será empujado hacia el tráfico en sentido contrario" },
              ],
            },
            {
              content: "It improves your view of oncoming traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "这能改善您观察对向车流的视野" },
                { language: "es", content: "Mejora su vista del tráfico en sentido contrario" },
              ],
            },
            {
              content: "It keeps the intersection clear for pedestrians",
              isCorrect: false,
              translations: [
                { language: "zh", content: "这能为行人保持交叉路口畅通" },
                { language: "es", content: "Mantiene la intersección despejada para los peatones" },
              ],
            },
            {
              content: "It allows other drivers to pass you on the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "这能让其他驾驶员从您右侧通过" },
                { language: "es", content: "Permite que otros conductores lo pasen por la derecha" },
              ],
            },
          ],
        },
        {
          content: "What must you do when you hear or see an emergency vehicle approaching with flashing lights and a siren?",
          explanation: "When an emergency vehicle approaches with lights and siren, you must safely pull over to the right edge of the road and stop. Remain stopped until the emergency vehicle has passed.",
          handbookSection: "Intersections and Turns — Emergency Vehicles",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当您听到或看到一辆闪烁着灯光并鸣响警笛的紧急车辆接近时，您必须怎么做？", explanation: "当紧急车辆闪灯鸣笛接近时，您必须安全地靠右停到路边。保持停车状态直到紧急车辆通过。" },
            { language: "es", content: "¿Qué debe hacer cuando escucha o ve un vehículo de emergencia que se aproxima con luces intermitentes y sirena?", explanation: "Cuando un vehículo de emergencia se aproxima con luces y sirena, debe orillarse de manera segura hacia el borde derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo de emergencia haya pasado." },
          ],
          options: [
            {
              content: "Pull over to the right edge and stop immediately",
              isCorrect: true,
              translations: [
                { language: "zh", content: "立即靠右停到路边" },
                { language: "es", content: "Orillarse hacia el borde derecho y detenerse inmediatamente" },
              ],
            },
            {
              content: "Speed up to clear the intersection quickly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速快速通过交叉路口" },
                { language: "es", content: "Acelerar para despejar la intersección rápidamente" },
              ],
            },
            {
              content: "Slow down but continue driving",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速但继续行驶" },
                { language: "es", content: "Reducir la velocidad pero continuar conduciendo" },
              ],
            },
            {
              content: "Pull to the left so the emergency vehicle can pass on the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "靠左停车让紧急车辆从右侧通过" },
                { language: "es", content: "Orillarse a la izquierda para que el vehículo de emergencia pueda pasar por la derecha" },
              ],
            },
          ],
        },
        {
          content: "What does New York's Move Over Law require on multi-lane highways?",
          explanation: "The Move Over Law requires drivers on multi-lane parkways and interstates to move from the lane immediately adjacent to a stopped emergency vehicle that has its lights activated, unless it is unsafe to do so.",
          handbookSection: "Intersections and Turns — Emergency Vehicles",
          difficulty: 2,
          translations: [
            { language: "zh", content: "纽约州的「让道法」对多车道公路有什么要求？", explanation: "「让道法」要求在多车道公园大道和州际公路上行驶的驾驶员，如果安全的话，必须驶离紧邻已开启警示灯的停靠紧急车辆的车道。" },
            { language: "es", content: "¿Qué requiere la Ley de Ceder el Paso de Nueva York en autopistas de múltiples carriles?", explanation: "La Ley de Ceder el Paso requiere que los conductores en autopistas y carreteras interestatales de múltiples carriles se muevan del carril inmediatamente adyacente a un vehículo de emergencia detenido que tiene sus luces activadas, a menos que no sea seguro hacerlo." },
          ],
          options: [
            {
              content: "Move from the lane adjacent to the stopped emergency vehicle if safe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "如果安全，驶离紧邻停靠紧急车辆的车道" },
                { language: "es", content: "Moverse del carril adyacente al vehículo de emergencia detenido si es seguro" },
              ],
            },
            {
              content: "Stop your vehicle behind the emergency vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "将车辆停在紧急车辆后面" },
                { language: "es", content: "Detener su vehículo detrás del vehículo de emergencia" },
              ],
            },
            {
              content: "Slow to 25 mph when passing any emergency vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "经过任何紧急车辆时减速至25英里/小时" },
                { language: "es", content: "Reducir a 25 mph al pasar cualquier vehículo de emergencia" },
              ],
            },
            {
              content: "Pull over to the right shoulder and stop",
              isCorrect: false,
              translations: [
                { language: "zh", content: "靠右停到路肩" },
                { language: "es", content: "Orillarse al arcén derecho y detenerse" },
              ],
            },
          ],
        },
        {
          content: "When must you yield to vehicles already in a traffic circle (roundabout)?",
          explanation: "Vehicles already circulating inside a roundabout have the right-of-way. Drivers entering the roundabout must yield to all traffic already in the circle before merging.",
          handbookSection: "Intersections and Turns — Roundabouts",
          difficulty: 1,
          translations: [
            { language: "zh", content: "什么时候必须让行给已经在环岛内的车辆？", explanation: "已经在环岛内行驶的车辆拥有先行权。进入环岛的驾驶员必须在汇入前让行给所有已在环岛内的车辆。" },
            { language: "es", content: "¿Cuándo debe ceder el paso a los vehículos que ya están en una rotonda?", explanation: "Los vehículos que ya están circulando dentro de una rotonda tienen el derecho de paso. Los conductores que entran a la rotonda deben ceder el paso a todo el tráfico que ya está en el círculo antes de incorporarse." },
          ],
          options: [
            {
              content: "Always — yield to all vehicles already circulating in the roundabout",
              isCorrect: true,
              translations: [
                { language: "zh", content: "始终——让行给所有已在环岛内行驶的车辆" },
                { language: "es", content: "Siempre — ceder el paso a todos los vehículos que ya circulan en la rotonda" },
              ],
            },
            {
              content: "Only when entering from the right side",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当从右侧进入时" },
                { language: "es", content: "Solo cuando entra desde el lado derecho" },
              ],
            },
            {
              content: "Only if the roundabout has a yield sign",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当环岛设有让行标志时" },
                { language: "es", content: "Solo si la rotonda tiene una señal de ceda el paso" },
              ],
            },
            {
              content: "Never — vehicles entering have the right-of-way",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从不——进入的车辆拥有先行权" },
                { language: "es", content: "Nunca — los vehículos que entran tienen el derecho de paso" },
              ],
            },
          ],
        },
        {
          content: "When exiting a driveway or alley, what must you do before entering the roadway?",
          explanation: "When exiting a driveway, alley, or private road, you must stop and yield the right-of-way to all traffic on the roadway and to pedestrians before proceeding.",
          handbookSection: "Intersections and Turns — Right-of-Way",
          difficulty: 1,
          translations: [
            { language: "zh", content: "从车道或小巷驶出时，在进入道路前您必须怎么做？", explanation: "从车道、小巷或私人道路驶出时，您必须停车并让行给道路上的所有车辆和行人，然后再继续行驶。" },
            { language: "es", content: "Al salir de una entrada de vehículos o callejón, ¿qué debe hacer antes de entrar a la carretera?", explanation: "Al salir de una entrada de vehículos, callejón o camino privado, debe detenerse y ceder el paso a todo el tráfico en la carretera y a los peatones antes de proceder." },
          ],
          options: [
            {
              content: "Stop and yield to all roadway traffic and pedestrians",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车并让行给所有道路车辆和行人" },
                { language: "es", content: "Detenerse y ceder el paso a todo el tráfico de la carretera y peatones" },
              ],
            },
            {
              content: "Yield only if traffic is coming from the left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当有车辆从左侧驶来时才让行" },
                { language: "es", content: "Ceder el paso solo si viene tráfico desde la izquierda" },
              ],
            },
            {
              content: "Proceed if no vehicles are visible within 300 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果300英尺内没有可见车辆则可继续行驶" },
                { language: "es", content: "Proceder si no hay vehículos visibles dentro de 300 pies" },
              ],
            },
            {
              content: "Signal and merge without stopping if speed is slow",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果速度较慢，打信号灯后可不停车汇入" },
                { language: "es", content: "Señalizar e incorporarse sin detenerse si la velocidad es baja" },
              ],
            },
          ],
        },
        {
          content: "Under what conditions is a U-turn prohibited in New York?",
          explanation: "U-turns are prohibited when drivers approaching cannot see you from 500 feet away (near hills or curves), in NYC business districts, where NO U-TURN signs are posted, on limited-access expressways, and in school zones.",
          handbookSection: "Intersections and Turns — U-Turns",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，什么情况下禁止掉头？", explanation: "在以下情况下禁止掉头：接近的驾驶员无法在500英尺外看到您（靠近山丘或弯道处）、纽约市商业区、张贴有「禁止掉头」标志的地方、限制通行的高速公路以及学校区域。" },
            { language: "es", content: "¿Bajo qué condiciones está prohibido hacer un giro en U en Nueva York?", explanation: "Los giros en U están prohibidos cuando los conductores que se aproximan no pueden verlo desde 500 pies de distancia (cerca de colinas o curvas), en distritos comerciales de NYC, donde hay señales de PROHIBIDO GIRAR EN U, en autopistas de acceso limitado y en zonas escolares." },
          ],
          options: [
            {
              content: "When drivers approaching cannot see you from 500 feet, in NYC business districts, or where prohibited by signs",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当接近的驾驶员无法在500英尺外看到您、在纽约市商业区或有标志禁止的地方" },
                { language: "es", content: "Cuando los conductores que se aproximan no pueden verlo desde 500 pies, en distritos comerciales de NYC, o donde esté prohibido por señales" },
              ],
            },
            {
              content: "Only in school zones and hospital zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域和医院区域" },
                { language: "es", content: "Solo en zonas escolares y zonas de hospitales" },
              ],
            },
            {
              content: "Only when posted signs specifically prohibit it",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当张贴有专门禁止掉头的标志时" },
                { language: "es", content: "Solo cuando las señales publicadas lo prohíben específicamente" },
              ],
            },
            {
              content: "When there is oncoming traffic within 100 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "当100英尺内有对向来车时" },
                { language: "es", content: "Cuando hay tráfico en sentido contrario dentro de 100 pies" },
              ],
            },
          ],
        },
        {
          content: "From which lane must a U-turn be made?",
          explanation: "A U-turn must be made from the leftmost portion of the lane nearest to the centerline of the roadway. You cannot make a U-turn from the right lane.",
          handbookSection: "Intersections and Turns — U-Turns",
          difficulty: 2,
          translations: [
            { language: "zh", content: "掉头必须从哪条车道进行？", explanation: "掉头必须从最靠近道路中心线的车道的最左侧部分进行。您不能从右车道掉头。" },
            { language: "es", content: "¿Desde qué carril se debe hacer un giro en U?", explanation: "Un giro en U debe hacerse desde la porción más a la izquierda del carril más cercano a la línea central de la carretera. No puede hacer un giro en U desde el carril derecho." },
          ],
          options: [
            {
              content: "From the left portion of the lane nearest to the center line",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从最靠近中心线的车道的左侧部分" },
                { language: "es", content: "Desde la porción izquierda del carril más cercano a la línea central" },
              ],
            },
            {
              content: "From either the left or right lane depending on traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "根据交通情况从左车道或右车道均可" },
                { language: "es", content: "Desde el carril izquierdo o derecho dependiendo del tráfico" },
              ],
            },
            {
              content: "From any lane as long as a signal is given",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要打了信号灯，从任何车道都可以" },
                { language: "es", content: "Desde cualquier carril siempre que se dé una señal" },
              ],
            },
            {
              content: "From the right lane after yielding to traffic",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在让行给车辆后从右车道进行" },
                { language: "es", content: "Desde el carril derecho después de ceder el paso al tráfico" },
              ],
            },
          ],
        },
        {
          content: "What does a blue flashing light on a non-emergency vehicle (such as a volunteer firefighter's personal car) mean?",
          explanation: "Volunteer firefighters may display blue lights on their personal vehicles. These are not authorized emergency vehicles; you are not required to yield but it is recommended if you can safely do so.",
          handbookSection: "Intersections and Turns — Emergency Vehicles",
          difficulty: 3,
          translations: [
            { language: "zh", content: "非紧急车辆（如志愿消防员的私人车辆）上的蓝色闪烁灯是什么意思？", explanation: "志愿消防员可以在其私人车辆上安装蓝色灯。这些不是授权的紧急车辆；您没有义务让行，但如果可以安全让行，建议您这样做。" },
            { language: "es", content: "¿Qué significa una luz azul intermitente en un vehículo que no es de emergencia (como el automóvil personal de un bombero voluntario)?", explanation: "Los bomberos voluntarios pueden mostrar luces azules en sus vehículos personales. Estos no son vehículos de emergencia autorizados; no está obligado a ceder el paso, pero se recomienda hacerlo si puede hacerlo de manera segura." },
          ],
          options: [
            {
              content: "Not an emergency vehicle; yield only if you can safely do so",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不是紧急车辆；仅在可以安全让行时才让行" },
                { language: "es", content: "No es un vehículo de emergencia; ceda el paso solo si puede hacerlo de manera segura" },
              ],
            },
            {
              content: "Treat it the same as a police vehicle — stop and yield",
              isCorrect: false,
              translations: [
                { language: "zh", content: "按照对待警车的方式处理——停车让行" },
                { language: "es", content: "Trátelo igual que un vehículo policial — deténgase y ceda el paso" },
              ],
            },
            {
              content: "Ignore it; only red lights require a response",
              isCorrect: false,
              translations: [
                { language: "zh", content: "忽略它；只有红灯才需要做出反应" },
                { language: "es", content: "Ignórelo; solo las luces rojas requieren una respuesta" },
              ],
            },
            {
              content: "Speed up to clear the way for the vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "加速为该车辆让路" },
                { language: "es", content: "Acelere para despejar el camino para el vehículo" },
              ],
            },
          ],
        },
        {
          content: "You cannot enter an intersection even when the light is green if:",
          explanation: "You cannot enter an intersection if traffic is backed up and you cannot completely clear the intersection. Blocking an intersection is illegal and creates gridlock.",
          handbookSection: "Intersections and Turns — Intersection Rules",
          difficulty: 2,
          translations: [
            { language: "zh", content: "即使是绿灯，在什么情况下您也不能进入交叉路口？", explanation: "如果车辆拥堵导致您无法完全通过交叉路口，您不能进入交叉路口。堵塞交叉路口是违法的，会造成交通堵塞。" },
            { language: "es", content: "No puede entrar a una intersección aunque la luz esté verde si:", explanation: "No puede entrar a una intersección si el tráfico está respaldado y no puede despejar completamente la intersección. Bloquear una intersección es ilegal y crea congestión." },
          ],
          options: [
            {
              content: "Traffic is backed up and you cannot completely clear the intersection",
              isCorrect: true,
              translations: [
                { language: "zh", content: "车辆拥堵导致您无法完全通过交叉路口" },
                { language: "es", content: "El tráfico está respaldado y no puede despejar completamente la intersección" },
              ],
            },
            {
              content: "There is a pedestrian in the crosswalk on the far side",
              isCorrect: false,
              translations: [
                { language: "zh", content: "对面远端人行横道上有行人" },
                { language: "es", content: "Hay un peatón en el cruce peatonal del lado lejano" },
              ],
            },
            {
              content: "A vehicle is waiting to turn left from the opposite direction",
              isCorrect: false,
              translations: [
                { language: "zh", content: "对面有车辆正在等待左转" },
                { language: "es", content: "Un vehículo está esperando para girar a la izquierda desde la dirección opuesta" },
              ],
            },
            {
              content: "It has been green for less than 3 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "绿灯亮起不到3秒" },
                { language: "es", content: "Ha estado en verde por menos de 3 segundos" },
              ],
            },
          ],
        },
        {
          content: "When turning left from a two-way street onto another two-way street, you should:",
          explanation: "When making a left turn from a two-way street, approach from the right half of the road closest to the center, and after turning, enter the destination road to the right of its center line as close to the center as possible.",
          handbookSection: "Intersections and Turns — Turning",
          difficulty: 2,
          translations: [
            { language: "zh", content: "从一条双向道路左转进入另一条双向道路时，您应该：", explanation: "从双向道路左转时，从最靠近中心线的道路右半部分接近，转弯后进入目的地道路中心线右侧，尽量靠近中心线。" },
            { language: "es", content: "Al girar a la izquierda desde una calle de doble sentido hacia otra calle de doble sentido, usted debe:", explanation: "Al hacer un giro a la izquierda desde una calle de doble sentido, acérquese desde la mitad derecha de la carretera más cercana al centro, y después de girar, entre a la carretera de destino a la derecha de su línea central lo más cerca posible del centro." },
          ],
          options: [
            {
              content: "Approach from near the center line and enter to the right of the center line of the new road",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从靠近中心线处接近，并进入新道路中心线的右侧" },
                { language: "es", content: "Acercarse cerca de la línea central y entrar a la derecha de la línea central de la nueva carretera" },
              ],
            },
            {
              content: "Approach from the right lane and swing wide to the left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "从右车道接近并大幅度向左转弯" },
                { language: "es", content: "Acercarse desde el carril derecho y girar ampliamente hacia la izquierda" },
              ],
            },
            {
              content: "Turn from any lane as long as you signal",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要打了信号灯，从任何车道都可以转弯" },
                { language: "es", content: "Girar desde cualquier carril siempre que señalice" },
              ],
            },
            {
              content: "Enter the new road in the lane farthest to the left",
              isCorrect: false,
              translations: [
                { language: "zh", content: "进入新道路最左侧的车道" },
                { language: "es", content: "Entrar a la nueva carretera en el carril más a la izquierda" },
              ],
            },
          ],
        },
        {
          content: "A vehicle is already in the intersection when the light turns red. What should the driver do?",
          explanation: "A driver who is already in the intersection when the light changes must clear the intersection safely. Traffic law requires you to clear the intersection you are already in.",
          handbookSection: "Intersections and Turns — Intersection Rules",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当红灯亮起时，一辆车已经在交叉路口内。驾驶员应该怎么做？", explanation: "当灯变红时已经在交叉路口内的驾驶员必须安全通过交叉路口。交通法规要求您必须通过已经进入的交叉路口。" },
            { language: "es", content: "Un vehículo ya está en la intersección cuando la luz cambia a rojo. ¿Qué debe hacer el conductor?", explanation: "Un conductor que ya está en la intersección cuando la luz cambia debe despejar la intersección de manera segura. La ley de tránsito requiere que despeje la intersección en la que ya se encuentra." },
          ],
          options: [
            {
              content: "Clear the intersection — the driver may continue through safely",
              isCorrect: true,
              translations: [
                { language: "zh", content: "通过交叉路口——驾驶员可以安全继续通过" },
                { language: "es", content: "Despejar la intersección — el conductor puede continuar de manera segura" },
              ],
            },
            {
              content: "Stop immediately in the intersection",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即在交叉路口内停车" },
                { language: "es", content: "Detenerse inmediatamente en la intersección" },
              ],
            },
            {
              content: "Back up out of the intersection",
              isCorrect: false,
              translations: [
                { language: "zh", content: "倒车退出交叉路口" },
                { language: "es", content: "Retroceder fuera de la intersección" },
              ],
            },
            {
              content: "Wait until the light turns green again",
              isCorrect: false,
              translations: [
                { language: "zh", content: "等待直到再次变绿灯" },
                { language: "es", content: "Esperar hasta que la luz cambie a verde nuevamente" },
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
      description: "Speed limits, following distances, seat belts, cell phone laws, and vehicle safety",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-8-defensive-driving",
      translations: [
        { language: "zh", name: "车速、车距与防御性驾驶", description: "限速、跟车距离、安全带、手机法规及车辆安全" },
        { language: "es", name: "Velocidad, Espacio y Manejo Defensivo", description: "Límites de velocidad, distancia de seguimiento, cinturones, leyes de celular y seguridad vehicular" },
      ],
      questions: [
        {
          content: "What is the maximum speed limit on an unmarked road in New York State?",
          explanation: "On roads where no speed limit is posted, the maximum speed in New York State is 55 mph (88 km/h). You may need to drive slower than this based on road conditions.",
          handbookSection: "Defensive Driving — Speed Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州没有标志的道路上，最高限速是多少？", explanation: "在没有张贴限速标志的道路上，纽约州的最高限速为55英里/小时（88公里/小时）。根据路况，您可能需要以更低的速度行驶。" },
            { language: "es", content: "¿Cuál es el límite de velocidad máximo en una carretera sin señalización en el Estado de Nueva York?", explanation: "En carreteras donde no hay un límite de velocidad publicado, la velocidad máxima en el Estado de Nueva York es 55 mph (88 km/h). Es posible que deba conducir más lento según las condiciones de la carretera." },
          ],
          options: [
            {
              content: "55 mph (88 km/h)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "55英里/小时（88公里/小时）" },
                { language: "es", content: "55 mph (88 km/h)" },
              ],
            },
            {
              content: "65 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "65英里/小时" },
                { language: "es", content: "65 mph" },
              ],
            },
            {
              content: "45 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "45英里/小时" },
                { language: "es", content: "45 mph" },
              ],
            },
            {
              content: "50 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "50英里/小时" },
                { language: "es", content: "50 mph" },
              ],
            },
          ],
        },
        {
          content: "What is the default speed limit in New York City unless otherwise posted?",
          explanation: "The default speed limit in New York City is 25 mph unless a different speed limit is posted. This lower limit reflects the dense pedestrian and vehicle traffic in urban areas.",
          handbookSection: "Defensive Driving — Speed Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "除非另有标志，纽约市的默认限速是多少？", explanation: "纽约市的默认限速为25英里/小时，除非张贴了不同的限速标志。这一较低的限速反映了城市地区密集的行人和车辆交通。" },
            { language: "es", content: "¿Cuál es el límite de velocidad predeterminado en la Ciudad de Nueva York a menos que se indique lo contrario?", explanation: "El límite de velocidad predeterminado en la Ciudad de Nueva York es 25 mph a menos que se publique un límite de velocidad diferente. Este límite más bajo refleja el denso tráfico peatonal y vehicular en áreas urbanas." },
          ],
          options: [
            {
              content: "25 mph",
              isCorrect: true,
              translations: [
                { language: "zh", content: "25英里/小时" },
                { language: "es", content: "25 mph" },
              ],
            },
            {
              content: "30 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "30英里/小时" },
                { language: "es", content: "30 mph" },
              ],
            },
            {
              content: "35 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "35英里/小时" },
                { language: "es", content: "35 mph" },
              ],
            },
            {
              content: "20 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20英里/小时" },
                { language: "es", content: "20 mph" },
              ],
            },
          ],
        },
        {
          content: "How do you correctly apply the two-second following distance rule?",
          explanation: "Pick a fixed object (such as a sign). When the vehicle ahead passes that object, count one-thousand-one, one-thousand-two. If you reach the object before finishing the count, you are following too closely.",
          handbookSection: "Defensive Driving — Following Distance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "如何正确应用「两秒跟车距离」规则？", explanation: "选择一个固定物体（如标志牌）。当前车经过该物体时，开始数「一千零一、一千零二」。如果您在数完之前就到达该物体，说明跟车太近了。" },
            { language: "es", content: "¿Cómo se aplica correctamente la regla de distancia de seguimiento de dos segundos?", explanation: "Elija un objeto fijo (como una señal). Cuando el vehículo de adelante pase ese objeto, cuente mil uno, mil dos. Si llega al objeto antes de terminar de contar, está siguiendo demasiado cerca." },
          ],
          options: [
            {
              content: "When the car ahead passes a landmark, count to two — if you pass it first, you are too close",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当前车经过一个标志物时，数到二——如果您先到达，说明跟得太近" },
                { language: "es", content: "Cuando el auto de adelante pasa un punto de referencia, cuente hasta dos — si usted pasa primero, está demasiado cerca" },
              ],
            },
            {
              content: "Stay at least two car lengths behind at all times",
              isCorrect: false,
              translations: [
                { language: "zh", content: "始终保持至少两个车身的距离" },
                { language: "es", content: "Manténgase al menos a dos longitudes de auto detrás en todo momento" },
              ],
            },
            {
              content: "Keep one second of space for every 10 mph of speed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每10英里/小时的速度保持一秒的间距" },
                { language: "es", content: "Mantenga un segundo de espacio por cada 10 mph de velocidad" },
              ],
            },
            {
              content: "Stay at least 20 feet behind the vehicle ahead",
              isCorrect: false,
              translations: [
                { language: "zh", content: "与前车保持至少20英尺的距离" },
                { language: "es", content: "Manténgase al menos a 20 pies detrás del vehículo de adelante" },
              ],
            },
          ],
        },
        {
          content: "In bad weather or when following large trucks, you should increase your following distance to:",
          explanation: "In adverse weather conditions or when following large trucks or buses, increase your following distance to at least 3 to 4 seconds. These conditions require more stopping distance.",
          handbookSection: "Defensive Driving — Following Distance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在恶劣天气或跟随大型卡车时，您应将跟车距离增加到：", explanation: "在恶劣天气条件下或跟随大型卡车或公共汽车时，应将跟车距离增加到至少3至4秒。这些情况需要更长的制动距离。" },
            { language: "es", content: "En mal tiempo o cuando sigue camiones grandes, debe aumentar su distancia de seguimiento a:", explanation: "En condiciones climáticas adversas o cuando sigue camiones grandes o autobuses, aumente su distancia de seguimiento a al menos 3 a 4 segundos. Estas condiciones requieren más distancia de frenado." },
          ],
          options: [
            {
              content: "At least 3 to 4 seconds",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少3至4秒" },
                { language: "es", content: "Al menos 3 a 4 segundos" },
              ],
            },
            {
              content: "At least 5 to 6 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少5至6秒" },
                { language: "es", content: "Al menos 5 a 6 segundos" },
              ],
            },
            {
              content: "At least 1 to 2 seconds",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少1至2秒" },
                { language: "es", content: "Al menos 1 a 2 segundos" },
              ],
            },
            {
              content: "At least 10 car lengths",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少10个车身长度" },
                { language: "es", content: "Al menos 10 longitudes de auto" },
              ],
            },
          ],
        },
        {
          content: "Children under what age require a rear-facing child safety seat in New York?",
          explanation: "Children under 4 years old must be secured in a federally approved child safety seat. They must remain rear-facing until at least age 2, or until they reach the manufacturer's weight and height limits.",
          handbookSection: "Defensive Driving — Child Restraints",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，几岁以下的儿童需要使用后向式儿童安全座椅？", explanation: "4岁以下的儿童必须使用经联邦批准的儿童安全座椅。他们必须保持后向乘坐至少到2岁，或直到达到制造商规定的体重和身高限制。" },
            { language: "es", content: "¿Los niños menores de qué edad requieren un asiento de seguridad infantil orientado hacia atrás en Nueva York?", explanation: "Los niños menores de 4 años deben estar asegurados en un asiento de seguridad infantil aprobado federalmente. Deben permanecer orientados hacia atrás hasta al menos los 2 años, o hasta que alcancen los límites de peso y altura del fabricante." },
          ],
          options: [
            {
              content: "Under 4 years old in a child safety seat (rear-facing until age 2)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "4岁以下需使用儿童安全座椅（2岁前需后向乘坐）" },
                { language: "es", content: "Menores de 4 años en un asiento de seguridad infantil (orientado hacia atrás hasta los 2 años)" },
              ],
            },
            {
              content: "Under 8 years old in a rear-facing seat",
              isCorrect: false,
              translations: [
                { language: "zh", content: "8岁以下需使用后向座椅" },
                { language: "es", content: "Menores de 8 años en un asiento orientado hacia atrás" },
              ],
            },
            {
              content: "Under 2 years old only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅2岁以下" },
                { language: "es", content: "Solo menores de 2 años" },
              ],
            },
            {
              content: "Under 1 year old only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅1岁以下" },
                { language: "es", content: "Solo menores de 1 año" },
              ],
            },
          ],
        },
        {
          content: "What restraint is required for children ages 4 through 7 in New York?",
          explanation: "Children ages 4 through 7 must use a booster seat with both a lap belt and shoulder belt. They should remain in a booster seat until they are at least 4 feet 9 inches tall.",
          handbookSection: "Defensive Driving — Child Restraints",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，4至7岁的儿童需要使用什么约束装置？", explanation: "4至7岁的儿童必须使用带有腰带和肩带的增高座椅。他们应继续使用增高座椅，直到身高至少达到4英尺9英寸。" },
            { language: "es", content: "¿Qué sistema de retención se requiere para niños de 4 a 7 años en Nueva York?", explanation: "Los niños de 4 a 7 años deben usar un asiento elevador con cinturón de regazo y hombro. Deben permanecer en un asiento elevador hasta que midan al menos 4 pies 9 pulgadas de altura." },
          ],
          options: [
            {
              content: "A booster seat with lap and shoulder belt",
              isCorrect: true,
              translations: [
                { language: "zh", content: "带有腰带和肩带的增高座椅" },
                { language: "es", content: "Un asiento elevador con cinturón de regazo y hombro" },
              ],
            },
            {
              content: "A rear-facing child safety seat only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅后向式儿童安全座椅" },
                { language: "es", content: "Solo un asiento de seguridad infantil orientado hacia atrás" },
              ],
            },
            {
              content: "A seat belt alone is sufficient",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅安全带即可" },
                { language: "es", content: "Solo el cinturón de seguridad es suficiente" },
              ],
            },
            {
              content: "Any child safety seat without a booster",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何不带增高垫的儿童安全座椅" },
                { language: "es", content: "Cualquier asiento de seguridad infantil sin elevador" },
              ],
            },
          ],
        },
        {
          content: "What is the fine for a driver who fails to wear a seat belt in New York (for drivers and passengers age 16 and older)?",
          explanation: "The fine for a driver or front-seat passenger age 16 or older who fails to wear a seat belt is up to $50. Wearing a seat belt is required by law for all occupants.",
          handbookSection: "Defensive Driving — Seat Belts",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，驾驶员或16岁及以上乘客未系安全带的罚款是多少？", explanation: "16岁或以上的驾驶员或前排乘客未系安全带的罚款最高为50美元。法律要求所有乘员系安全带。" },
            { language: "es", content: "¿Cuál es la multa para un conductor que no usa el cinturón de seguridad en Nueva York (para conductores y pasajeros de 16 años o más)?", explanation: "La multa para un conductor o pasajero del asiento delantero de 16 años o más que no use el cinturón de seguridad es de hasta $50. Usar el cinturón de seguridad es requerido por ley para todos los ocupantes." },
          ],
          options: [
            {
              content: "Up to $50",
              isCorrect: true,
              translations: [
                { language: "zh", content: "最高50美元" },
                { language: "es", content: "Hasta $50" },
              ],
            },
            {
              content: "Up to $150",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高150美元" },
                { language: "es", content: "Hasta $150" },
              ],
            },
            {
              content: "Up to $200",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高200美元" },
                { language: "es", content: "Hasta $200" },
              ],
            },
            {
              content: "Up to $25",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高25美元" },
                { language: "es", content: "Hasta $25" },
              ],
            },
          ],
        },
        {
          content: "What additional penalty applies when a driver fails to properly restrain a child under 16?",
          explanation: "If a driver fails to properly restrain a child under 16, the fine is $25 to $100 per child plus 3 points are added to the driver's license. The driver — not the child — is responsible for the restraint.",
          handbookSection: "Defensive Driving — Child Restraints",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当驾驶员未能正确约束16岁以下儿童时，会受到什么额外处罚？", explanation: "如果驾驶员未能正确约束16岁以下的儿童，每名儿童的罚款为25至100美元，并在驾驶员的驾照上扣3分。驾驶员——而非儿童——对约束装置负责。" },
            { language: "es", content: "¿Qué penalización adicional se aplica cuando un conductor no asegura correctamente a un niño menor de 16 años?", explanation: "Si un conductor no asegura correctamente a un niño menor de 16 años, la multa es de $25 a $100 por niño más 3 puntos añadidos a la licencia del conductor. El conductor — no el niño — es responsable del sistema de retención." },
          ],
          options: [
            {
              content: "$25–$100 fine plus 3 points on the driver's license",
              isCorrect: true,
              translations: [
                { language: "zh", content: "25至100美元罚款，外加驾照扣3分" },
                { language: "es", content: "Multa de $25–$100 más 3 puntos en la licencia del conductor" },
              ],
            },
            {
              content: "$50 fine only, no points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅50美元罚款，不扣分" },
                { language: "es", content: "Solo multa de $50, sin puntos" },
              ],
            },
            {
              content: "$200 fine and automatic license suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "200美元罚款并自动吊销驾照" },
                { language: "es", content: "Multa de $200 y suspensión automática de licencia" },
              ],
            },
            {
              content: "$25 fine per child, no points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每名儿童25美元罚款，不扣分" },
                { language: "es", content: "Multa de $25 por niño, sin puntos" },
              ],
            },
          ],
        },
        {
          content: "What is the maximum fine for a first-offense hand-held cell phone use while driving in New York?",
          explanation: "A first offense for using a hand-held cell phone while driving carries a fine of up to $200 and 5 points on your license. Subsequent offenses within 18 months result in higher fines.",
          handbookSection: "Defensive Driving — Cell Phone Laws",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，首次在驾驶时使用手持手机的最高罚款是多少？", explanation: "首次在驾驶时使用手持手机的违规行为将被处以最高200美元的罚款，并在驾照上扣5分。18个月内再次违规将导致更高的罚款。" },
            { language: "es", content: "¿Cuál es la multa máxima por el primer delito de uso de teléfono celular de mano mientras conduce en Nueva York?", explanation: "Un primer delito por usar un teléfono celular de mano mientras conduce conlleva una multa de hasta $200 y 5 puntos en su licencia. Los delitos subsiguientes dentro de 18 meses resultan en multas más altas." },
          ],
          options: [
            {
              content: "Up to $200 and 5 points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "最高200美元，扣5分" },
                { language: "es", content: "Hasta $200 y 5 puntos" },
              ],
            },
            {
              content: "Up to $100 and 3 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高100美元，扣3分" },
                { language: "es", content: "Hasta $100 y 3 puntos" },
              ],
            },
            {
              content: "Up to $150 and no points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高150美元，不扣分" },
                { language: "es", content: "Hasta $150 y sin puntos" },
              ],
            },
            {
              content: "Up to $450 and 5 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高450美元，扣5分" },
                { language: "es", content: "Hasta $450 y 5 puntos" },
              ],
            },
          ],
        },
        {
          content: "What happens to a junior driver's license after a first offense for using a cell phone while driving?",
          explanation: "A junior or probationary license holder who is convicted of using a cell phone while driving faces a 120-day suspension for a first offense. A second offense results in a revocation of at least one year.",
          handbookSection: "Defensive Driving — Cell Phone Laws",
          difficulty: 3,
          translations: [
            { language: "zh", content: "初级驾照持有人首次因驾驶时使用手机被定罪后会发生什么？", explanation: "初级或试用驾照持有人因驾驶时使用手机被定罪，首次违规将面临120天的驾照暂停。第二次违规将导致至少一年的吊销。" },
            { language: "es", content: "¿Qué sucede con la licencia de un conductor junior después de un primer delito por usar un teléfono celular mientras conduce?", explanation: "Un titular de licencia junior o provisional que sea condenado por usar un teléfono celular mientras conduce enfrenta una suspensión de 120 días por el primer delito. Un segundo delito resulta en una revocación de al menos un año." },
          ],
          options: [
            {
              content: "120-day license suspension for first offense",
              isCorrect: true,
              translations: [
                { language: "zh", content: "首次违规暂停驾照120天" },
                { language: "es", content: "Suspensión de licencia de 120 días por primer delito" },
              ],
            },
            {
              content: "$200 fine only — no license action for juniors",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅罚款200美元——初级驾照不受影响" },
                { language: "es", content: "Solo multa de $200 — sin acción sobre la licencia para juniors" },
              ],
            },
            {
              content: "Immediate 1-year revocation",
              isCorrect: false,
              translations: [
                { language: "zh", content: "立即吊销1年" },
                { language: "es", content: "Revocación inmediata de 1 año" },
              ],
            },
            {
              content: "30-day suspension and $50 fine",
              isCorrect: false,
              translations: [
                { language: "zh", content: "暂停30天并罚款50美元" },
                { language: "es", content: "Suspensión de 30 días y multa de $50" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum tire tread depth required in New York?",
          explanation: "New York requires a minimum tire tread depth of 2/32nds of an inch (0.16 cm). You can check this with a penny: place it head-down in the tread and if you can see the top of Lincoln's head, the tread is too worn.",
          handbookSection: "Defensive Driving — Vehicle Safety",
          difficulty: 2,
          translations: [
            { language: "zh", content: "纽约州要求的最小轮胎胎面深度是多少？", explanation: "纽约州要求最小轮胎胎面深度为2/32英寸（0.16厘米）。您可以用一分硬币检查：将硬币头朝下插入胎面，如果能看到林肯头顶，说明胎面磨损过度。" },
            { language: "es", content: "¿Cuál es la profundidad mínima de la banda de rodadura de los neumáticos requerida en Nueva York?", explanation: "Nueva York requiere una profundidad mínima de la banda de rodadura de 2/32 de pulgada (0.16 cm). Puede verificar esto con un centavo: colóquelo con la cabeza hacia abajo en la banda de rodadura y si puede ver la parte superior de la cabeza de Lincoln, la banda de rodadura está muy desgastada." },
          ],
          options: [
            {
              content: "2/32nds of an inch (0.16 cm)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "2/32英寸（0.16厘米）" },
                { language: "es", content: "2/32 de pulgada (0.16 cm)" },
              ],
            },
            {
              content: "4/32nds of an inch",
              isCorrect: false,
              translations: [
                { language: "zh", content: "4/32英寸" },
                { language: "es", content: "4/32 de pulgada" },
              ],
            },
            {
              content: "1/16th of an inch",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1/16英寸" },
                { language: "es", content: "1/16 de pulgada" },
              ],
            },
            {
              content: "1/8th of an inch",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1/8英寸" },
                { language: "es", content: "1/8 de pulgada" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum distance you should maintain between your chest and an airbag cover?",
          explanation: "You should maintain at least 10 inches between the center of your chest and the airbag cover. Sitting too close to an airbag greatly increases the risk of serious injury when it deploys.",
          handbookSection: "Defensive Driving — Vehicle Safety",
          difficulty: 2,
          translations: [
            { language: "zh", content: "您的胸部与安全气囊盖之间应保持的最小距离是多少？", explanation: "您的胸部中心与安全气囊盖之间应保持至少10英寸的距离。坐得离安全气囊太近会大大增加其展开时造成严重伤害的风险。" },
            { language: "es", content: "¿Cuál es la distancia mínima que debe mantener entre su pecho y la cubierta del airbag?", explanation: "Debe mantener al menos 10 pulgadas entre el centro de su pecho y la cubierta del airbag. Sentarse demasiado cerca de un airbag aumenta enormemente el riesgo de lesiones graves cuando se despliega." },
          ],
          options: [
            {
              content: "At least 10 inches",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少10英寸" },
                { language: "es", content: "Al menos 10 pulgadas" },
              ],
            },
            {
              content: "At least 6 inches",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少6英寸" },
                { language: "es", content: "Al menos 6 pulgadas" },
              ],
            },
            {
              content: "At least 18 inches",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少18英寸" },
                { language: "es", content: "Al menos 18 pulgadas" },
              ],
            },
            {
              content: "At least 12 inches",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少12英寸" },
                { language: "es", content: "Al menos 12 pulgadas" },
              ],
            },
          ],
        },
        {
          content: "Where should you NEVER place a rear-facing infant car seat?",
          explanation: "Never place a rear-facing infant seat in the front passenger seat if the vehicle has a passenger-side airbag. The force of a deploying airbag can cause fatal injuries to an infant in a rear-facing seat.",
          handbookSection: "Defensive Driving — Child Restraints",
          difficulty: 1,
          translations: [
            { language: "zh", content: "绝对不能将后向式婴儿安全座椅放置在哪里？", explanation: "如果车辆配有乘客侧安全气囊，绝对不要将后向式婴儿座椅放在前排乘客座位上。安全气囊展开的冲击力可能对后向座椅中的婴儿造成致命伤害。" },
            { language: "es", content: "¿Dónde NUNCA debe colocar un asiento infantil orientado hacia atrás?", explanation: "Nunca coloque un asiento infantil orientado hacia atrás en el asiento del pasajero delantero si el vehículo tiene un airbag del lado del pasajero. La fuerza de un airbag al desplegarse puede causar lesiones fatales a un bebé en un asiento orientado hacia atrás." },
          ],
          options: [
            {
              content: "In the front passenger seat when the vehicle has an airbag",
              isCorrect: true,
              translations: [
                { language: "zh", content: "车辆配有安全气囊时的前排乘客座位" },
                { language: "es", content: "En el asiento del pasajero delantero cuando el vehículo tiene airbag" },
              ],
            },
            {
              content: "In the rear center seat",
              isCorrect: false,
              translations: [
                { language: "zh", content: "后排中间座位" },
                { language: "es", content: "En el asiento central trasero" },
              ],
            },
            {
              content: "Behind the driver's seat",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶员座位后方" },
                { language: "es", content: "Detrás del asiento del conductor" },
              ],
            },
            {
              content: "In the trunk area of an SUV",
              isCorrect: false,
              translations: [
                { language: "zh", content: "SUV的后备箱区域" },
                { language: "es", content: "En el área del maletero de un SUV" },
              ],
            },
          ],
        },
        {
          content: "What is the maximum advisory speed for a roundabout in New York?",
          explanation: "The advisory entry speed for a roundabout is 30 mph (50 km/h) or less. Slowing down when entering a roundabout helps drivers navigate the circular flow safely.",
          handbookSection: "Defensive Driving — Speed Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "纽约州环岛的最高建议速度是多少？", explanation: "环岛的建议进入速度为30英里/小时（50公里/小时）或更低。进入环岛时减速有助于驾驶员安全地通过环形车流。" },
            { language: "es", content: "¿Cuál es la velocidad máxima recomendada para una rotonda en Nueva York?", explanation: "La velocidad de entrada recomendada para una rotonda es de 30 mph (50 km/h) o menos. Reducir la velocidad al entrar a una rotonda ayuda a los conductores a navegar el flujo circular de manera segura." },
          ],
          options: [
            {
              content: "30 mph (50 km/h) or less",
              isCorrect: true,
              translations: [
                { language: "zh", content: "30英里/小时（50公里/小时）或更低" },
                { language: "es", content: "30 mph (50 km/h) o menos" },
              ],
            },
            {
              content: "15 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "15英里/小时" },
                { language: "es", content: "15 mph" },
              ],
            },
            {
              content: "45 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "45英里/小时" },
                { language: "es", content: "45 mph" },
              ],
            },
            {
              content: "25 mph",
              isCorrect: false,
              translations: [
                { language: "zh", content: "25英里/小时" },
                { language: "es", content: "25 mph" },
              ],
            },
          ],
        },
        {
          content: "When is it illegal to use a hand-held cell phone while driving in New York?",
          explanation: "It is illegal to hold and use a cell phone for any reason while driving in New York. Hands-free devices are legal. The law applies whenever the vehicle is in motion.",
          handbookSection: "Defensive Driving — Cell Phone Laws",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州，什么情况下使用手持手机驾驶是违法的？", explanation: "在纽约州，驾驶时以任何理由手持使用手机都是违法的。免提设备是合法的。该法律适用于车辆行驶的任何时候。" },
            { language: "es", content: "¿Cuándo es ilegal usar un teléfono celular de mano mientras conduce en Nueva York?", explanation: "Es ilegal sostener y usar un teléfono celular por cualquier razón mientras conduce en Nueva York. Los dispositivos de manos libres son legales. La ley se aplica siempre que el vehículo esté en movimiento." },
          ],
          options: [
            {
              content: "At any time while the vehicle is in motion",
              isCorrect: true,
              translations: [
                { language: "zh", content: "车辆行驶中的任何时候" },
                { language: "es", content: "En cualquier momento mientras el vehículo está en movimiento" },
              ],
            },
            {
              content: "Only on highways and expressways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在高速公路和快速路上" },
                { language: "es", content: "Solo en autopistas y vías rápidas" },
              ],
            },
            {
              content: "Only in school zones and work zones",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域和施工区域" },
                { language: "es", content: "Solo en zonas escolares y zonas de trabajo" },
              ],
            },
            {
              content: "Only when other traffic is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有其他车辆时" },
                { language: "es", content: "Solo cuando hay otro tráfico presente" },
              ],
            },
          ],
        },
        {
          content: "What is the fine for a second texting offense within 18 months in New York?",
          explanation: "A second texting offense within 18 months of the first carries a fine of up to $250. A third or subsequent offense within 18 months is up to $450.",
          handbookSection: "Defensive Driving — Cell Phone Laws",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在纽约州，18个月内第二次发短信违规的罚款是多少？", explanation: "在首次违规后18个月内第二次发短信违规将被处以最高250美元的罚款。18个月内第三次或更多次违规最高可罚450美元。" },
            { language: "es", content: "¿Cuál es la multa por un segundo delito de envío de mensajes de texto dentro de 18 meses en Nueva York?", explanation: "Un segundo delito de envío de mensajes de texto dentro de 18 meses del primero conlleva una multa de hasta $250. Un tercer delito o subsiguiente dentro de 18 meses es de hasta $450." },
          ],
          options: [
            {
              content: "Up to $250",
              isCorrect: true,
              translations: [
                { language: "zh", content: "最高250美元" },
                { language: "es", content: "Hasta $250" },
              ],
            },
            {
              content: "Up to $200",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高200美元" },
                { language: "es", content: "Hasta $200" },
              ],
            },
            {
              content: "Up to $300",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高300美元" },
                { language: "es", content: "Hasta $300" },
              ],
            },
            {
              content: "Up to $450",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最高450美元" },
                { language: "es", content: "Hasta $450" },
              ],
            },
          ],
        },
        {
          content: "Why must you slow below the posted speed limit even when driving at the legal maximum?",
          explanation: "The posted speed limit indicates the maximum legal speed under ideal conditions. Drivers must reduce speed further based on actual road conditions such as rain, fog, ice, heavy traffic, curves, or reduced visibility.",
          handbookSection: "Defensive Driving — Speed Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "即使以合法最高速度行驶，为什么您仍必须减速到低于张贴的限速？", explanation: "张贴的限速表示在理想条件下的最高合法速度。驾驶员必须根据实际路况进一步减速，例如雨天、雾天、结冰、交通拥挤、弯道或能见度降低等情况。" },
            { language: "es", content: "¿Por qué debe reducir la velocidad por debajo del límite publicado incluso cuando conduce al máximo legal?", explanation: "El límite de velocidad publicado indica la velocidad legal máxima bajo condiciones ideales. Los conductores deben reducir la velocidad aún más según las condiciones reales de la carretera como lluvia, niebla, hielo, tráfico denso, curvas o visibilidad reducida." },
          ],
          options: [
            {
              content: "Because conditions like rain, fog, or ice may make the posted limit unsafe",
              isCorrect: true,
              translations: [
                { language: "zh", content: "因为雨、雾或结冰等条件可能使张贴的限速变得不安全" },
                { language: "es", content: "Porque condiciones como lluvia, niebla o hielo pueden hacer que el límite publicado sea inseguro" },
              ],
            },
            {
              content: "Because you must always drive 5 mph below the limit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "因为您必须始终以低于限速5英里/小时的速度行驶" },
                { language: "es", content: "Porque siempre debe conducir 5 mph por debajo del límite" },
              ],
            },
            {
              content: "The posted limit is always the minimum — you cannot go slower",
              isCorrect: false,
              translations: [
                { language: "zh", content: "张贴的限速始终是最低速度——您不能开得更慢" },
                { language: "es", content: "El límite publicado siempre es el mínimo — no puede ir más lento" },
              ],
            },
            {
              content: "Only when emergency vehicles are present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有紧急车辆时" },
                { language: "es", content: "Solo cuando hay vehículos de emergencia presentes" },
              ],
            },
          ],
        },
      ],
    },
    // ─── ALCOHOL & OTHER DRUGS ─────────────────────────────────────────
    {
      name: "Alcohol & Other Drugs",
      nameEn: "Alcohol & Other Drugs",
      description: "DWI/DWAI laws, BAC limits, penalties, and implied consent",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-9-alcohol-and-other-drugs",
      translations: [
        { language: "zh", name: "酒精与其他药物", description: "DWI/DWAI 法律、血液酒精含量限制、处罚及默示同意" },
        { language: "es", name: "Alcohol y Otras Drogas", description: "Leyes DWI/DWAI, límites de BAC, penalidades y consentimiento implícito" },
      ],
      questions: [
        {
          content: "At what blood alcohol content (BAC) level is a driver considered legally intoxicated (DWI) in New York?",
          explanation: "A BAC of 0.08% or higher is legal evidence of intoxication (DWI) in New York. At this level, a driver can be charged with Driving While Intoxicated.",
          handbookSection: "Alcohol and Other Drugs — BAC Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州，驾驶员血液酒精浓度（BAC）达到多少即被视为法定醉酒驾驶（DWI）？", explanation: "在纽约州，BAC达到0.08%或更高即构成醉酒驾驶（DWI）的法定证据。达到此水平时，驾驶员可被指控「醉酒驾驶」。" },
            { language: "es", content: "¿A qué nivel de contenido de alcohol en sangre (BAC) se considera que un conductor está legalmente intoxicado (DWI) en Nueva York?", explanation: "Un BAC de 0.08% o más es evidencia legal de intoxicación (DWI) en Nueva York. A este nivel, un conductor puede ser acusado de Conducir en Estado de Ebriedad." },
          ],
          options: [
            {
              content: "0.08% or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.08%或更高" },
                { language: "es", content: "0.08% o más" },
              ],
            },
            {
              content: "0.10% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.10%或更高" },
                { language: "es", content: "0.10% o más" },
              ],
            },
            {
              content: "0.05% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.05%或更高" },
                { language: "es", content: "0.05% o más" },
              ],
            },
            {
              content: "0.15% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.15%或更高" },
                { language: "es", content: "0.15% o más" },
              ],
            },
          ],
        },
        {
          content: "What BAC triggers an Aggravated DWI charge in New York?",
          explanation: "Aggravated DWI (Agg-DWI) applies when a driver's BAC is 0.18% or higher. This carries more severe penalties than a standard DWI.",
          handbookSection: "Alcohol and Other Drugs — BAC Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，BAC达到多少会触发加重醉酒驾驶（Agg-DWI）指控？", explanation: "当驾驶员的BAC达到0.18%或更高时，适用加重醉酒驾驶（Agg-DWI）指控。此罪名的处罚比标准DWI更为严厉。" },
            { language: "es", content: "¿Qué BAC activa un cargo de DWI Agravado en Nueva York?", explanation: "El DWI Agravado (Agg-DWI) se aplica cuando el BAC del conductor es de 0.18% o más. Esto conlleva penalidades más severas que un DWI estándar." },
          ],
          options: [
            {
              content: "0.18% or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.18%或更高" },
                { language: "es", content: "0.18% o más" },
              ],
            },
            {
              content: "0.15% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.15%或更高" },
                { language: "es", content: "0.15% o más" },
              ],
            },
            {
              content: "0.12% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.12%或更高" },
                { language: "es", content: "0.12% o más" },
              ],
            },
            {
              content: "0.20% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.20%或更高" },
                { language: "es", content: "0.20% o más" },
              ],
            },
          ],
        },
        {
          content: "What BAC range results in a DWAI (Driving While Ability Impaired) charge?",
          explanation: "A BAC of 0.05% to 0.07% is legal evidence of impairment (DWAI) in New York. DWAI is a less severe charge than DWI but still carries serious penalties.",
          handbookSection: "Alcohol and Other Drugs — BAC Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "BAC在什么范围内会导致「能力受损驾驶」（DWAI）指控？", explanation: "在纽约州，BAC在0.05%至0.07%之间构成能力受损（DWAI）的法定证据。DWAI的指控比DWI轻，但仍会受到严重处罚。" },
            { language: "es", content: "¿Qué rango de BAC resulta en un cargo de DWAI (Conducir con Capacidad Deteriorada)?", explanation: "Un BAC de 0.05% a 0.07% es evidencia legal de deterioro (DWAI) en Nueva York. DWAI es un cargo menos severo que DWI pero aún conlleva penalidades serias." },
          ],
          options: [
            {
              content: "0.05% to 0.07%",
              isCorrect: true,
              translations: [
                { language: "zh", content: "0.05%至0.07%" },
                { language: "es", content: "0.05% a 0.07%" },
              ],
            },
            {
              content: "0.02% to 0.05%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.02%至0.05%" },
                { language: "es", content: "0.02% a 0.05%" },
              ],
            },
            {
              content: "0.07% to 0.10%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.07%至0.10%" },
                { language: "es", content: "0.07% a 0.10%" },
              ],
            },
            {
              content: "0.04% to 0.08%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.04%至0.08%" },
                { language: "es", content: "0.04% a 0.08%" },
              ],
            },
          ],
        },
        {
          content: "Under New York's Zero Tolerance Law, what BAC is prohibited for drivers under age 21?",
          explanation: "The Zero Tolerance Law prohibits drivers under 21 from having any measurable BAC (0.02% to 0.07%). Even a small amount of alcohol is a violation for underage drivers.",
          handbookSection: "Alcohol and Other Drugs — Zero Tolerance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "根据纽约州「零容忍法」，21岁以下的驾驶员禁止达到多少BAC？", explanation: "「零容忍法」禁止21岁以下的驾驶员体内有任何可测量的BAC（0.02%至0.07%）。即使是少量酒精，对于未成年驾驶员也属于违法。" },
            { language: "es", content: "Bajo la Ley de Tolerancia Cero de Nueva York, ¿qué BAC está prohibido para conductores menores de 21 años?", explanation: "La Ley de Tolerancia Cero prohíbe a los conductores menores de 21 años tener cualquier BAC medible (0.02% a 0.07%). Incluso una pequeña cantidad de alcohol es una violación para conductores menores de edad." },
          ],
          options: [
            {
              content: "Any measurable BAC (0.02% to 0.07%)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "任何可测量的BAC（0.02%至0.07%）" },
                { language: "es", content: "Cualquier BAC medible (0.02% a 0.07%)" },
              ],
            },
            {
              content: "BAC above 0.05%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC超过0.05%" },
                { language: "es", content: "BAC superior a 0.05%" },
              ],
            },
            {
              content: "BAC above 0.08%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "BAC超过0.08%" },
                { language: "es", content: "BAC superior a 0.08%" },
              ],
            },
            {
              content: "Any amount including 0.01%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何含量，包括0.01%" },
                { language: "es", content: "Cualquier cantidad incluyendo 0.01%" },
              ],
            },
          ],
        },
        {
          content: "What is the penalty for a first Zero Tolerance violation for an underage driver?",
          explanation: "A first Zero Tolerance violation results in a 6-month license suspension. The driver must also pay a $100 suspension termination fee and a $125 civil penalty to have the license reinstated.",
          handbookSection: "Alcohol and Other Drugs — Zero Tolerance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "未成年驾驶员首次违反「零容忍法」的处罚是什么？", explanation: "首次违反「零容忍法」将导致驾照被吊销6个月。驾驶员还须支付100美元的吊销终止费和125美元的民事罚款才能恢复驾照。" },
            { language: "es", content: "¿Cuál es la penalidad por una primera violación de Tolerancia Cero para un conductor menor de edad?", explanation: "Una primera violación de Tolerancia Cero resulta en una suspensión de licencia de 6 meses. El conductor también debe pagar una tarifa de terminación de suspensión de $100 y una multa civil de $125 para reinstalar la licencia." },
          ],
          options: [
            {
              content: "6-month license suspension",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾照吊销6个月" },
                { language: "es", content: "Suspensión de licencia por 6 meses" },
              ],
            },
            {
              content: "30-day license suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾照吊销30天" },
                { language: "es", content: "Suspensión de licencia por 30 días" },
              ],
            },
            {
              content: "1-year license revocation",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾照吊销1年" },
                { language: "es", content: "Revocación de licencia por 1 año" },
              ],
            },
            {
              content: "$500 fine and no license action",
              isCorrect: false,
              translations: [
                { language: "zh", content: "罚款500美元，不涉及驾照处罚" },
                { language: "es", content: "Multa de $500 sin acción sobre la licencia" },
              ],
            },
          ],
        },
        {
          content: "What does New York's Implied Consent Law mean?",
          explanation: "By driving in New York, you automatically agree to submit to a chemical test (breath, blood, or urine) if asked by law enforcement. Refusing the test results in immediate license suspension.",
          handbookSection: "Alcohol and Other Drugs — Implied Consent",
          difficulty: 1,
          translations: [
            { language: "zh", content: "纽约州的「默示同意法」是什么意思？", explanation: "在纽约州驾驶即表示您自动同意在执法人员要求时接受化学测试（呼气、血液或尿液测试）。拒绝测试将导致驾照立即被吊销。" },
            { language: "es", content: "¿Qué significa la Ley de Consentimiento Implícito de Nueva York?", explanation: "Al conducir en Nueva York, usted acepta automáticamente someterse a una prueba química (aliento, sangre u orina) si la policía lo solicita. Rechazar la prueba resulta en suspensión inmediata de la licencia." },
          ],
          options: [
            {
              content: "Driving in NY means you consent to chemical testing if asked by police",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在纽约州驾驶意味着您同意在警方要求时接受化学测试" },
                { language: "es", content: "Conducir en NY significa que consiente a pruebas químicas si la policía lo solicita" },
              ],
            },
            {
              content: "Police need a court order to test your BAC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "警方需要法院命令才能检测您的BAC" },
                { language: "es", content: "La policía necesita una orden judicial para analizar su BAC" },
              ],
            },
            {
              content: "You can refuse a chemical test without penalty",
              isCorrect: false,
              translations: [
                { language: "zh", content: "您可以拒绝化学测试而不受处罚" },
                { language: "es", content: "Puede rechazar una prueba química sin penalidad" },
              ],
            },
            {
              content: "Only a blood test is considered under implied consent",
              isCorrect: false,
              translations: [
                { language: "zh", content: "默示同意法只涉及血液测试" },
                { language: "es", content: "Solo una prueba de sangre se considera bajo consentimiento implícito" },
              ],
            },
          ],
        },
        {
          content: "What happens if you refuse a chemical test under New York's Implied Consent Law?",
          explanation: "Refusing a chemical test results in your license being suspended at arraignment. The refusal can also be presented as evidence in court. If a DMV hearing confirms the refusal, your license is revoked even if you are acquitted of the DWI charge.",
          handbookSection: "Alcohol and Other Drugs — Implied Consent",
          difficulty: 2,
          translations: [
            { language: "zh", content: "如果您根据纽约州「默示同意法」拒绝化学测试会发生什么？", explanation: "拒绝化学测试将导致您的驾照在提审时被吊销。拒绝行为也可作为法庭证据。如果DMV听证会确认您的拒绝，即使您被判DWI指控无罪，驾照仍会被吊销。" },
            { language: "es", content: "¿Qué sucede si rechaza una prueba química bajo la Ley de Consentimiento Implícito de Nueva York?", explanation: "Rechazar una prueba química resulta en la suspensión de su licencia en la comparecencia. El rechazo también puede presentarse como evidencia en el tribunal. Si una audiencia del DMV confirma el rechazo, su licencia es revocada incluso si es absuelto del cargo de DWI." },
          ],
          options: [
            {
              content: "Immediate license suspension and the refusal can be used as evidence in court",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾照立即被吊销，且拒绝行为可在法庭上作为证据使用" },
                { language: "es", content: "Suspensión inmediata de licencia y el rechazo puede usarse como evidencia en el tribunal" },
              ],
            },
            {
              content: "No penalty — you have the right to refuse",
              isCorrect: false,
              translations: [
                { language: "zh", content: "无处罚——您有权拒绝" },
                { language: "es", content: "Sin penalidad — tiene derecho a rechazar" },
              ],
            },
            {
              content: "Mandatory jail time but no license action",
              isCorrect: false,
              translations: [
                { language: "zh", content: "强制入狱但不涉及驾照处罚" },
                { language: "es", content: "Tiempo obligatorio en la cárcel pero sin acción sobre la licencia" },
              ],
            },
            {
              content: "$500 fine only, no license suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅罚款500美元，不吊销驾照" },
                { language: "es", content: "Solo multa de $500, sin suspensión de licencia" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum fine range for a first DWI offense in New York?",
          explanation: "A first DWI offense carries a fine of $500 to $1,000. It also results in a minimum 6-month license revocation and possible jail time of up to one year.",
          handbookSection: "Alcohol and Other Drugs — Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，首次DWI违规的最低罚款范围是多少？", explanation: "首次DWI违规的罚款为500至1,000美元。还将导致驾照至少被吊销6个月，并可能面临最长一年的监禁。" },
            { language: "es", content: "¿Cuál es el rango mínimo de multa por una primera ofensa de DWI en Nueva York?", explanation: "Una primera ofensa de DWI conlleva una multa de $500 a $1,000. También resulta en una revocación mínima de licencia de 6 meses y posible tiempo en la cárcel de hasta un año." },
          ],
          options: [
            {
              content: "$500 to $1,000",
              isCorrect: true,
              translations: [
                { language: "zh", content: "500至1,000美元" },
                { language: "es", content: "$500 a $1,000" },
              ],
            },
            {
              content: "$300 to $500",
              isCorrect: false,
              translations: [
                { language: "zh", content: "300至500美元" },
                { language: "es", content: "$300 a $500" },
              ],
            },
            {
              content: "$1,000 to $2,500",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1,000至2,500美元" },
                { language: "es", content: "$1,000 a $2,500" },
              ],
            },
            {
              content: "$250 to $750",
              isCorrect: false,
              translations: [
                { language: "zh", content: "250至750美元" },
                { language: "es", content: "$250 a $750" },
              ],
            },
          ],
        },
        {
          content: "What is the fine range for a first DWAI offense in New York?",
          explanation: "A first DWAI (0.05%-0.07% BAC) offense carries a fine of $300 to $500. It is classified as a traffic infraction (not a criminal offense) for the first offense.",
          handbookSection: "Alcohol and Other Drugs — Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，首次DWAI违规的罚款范围是多少？", explanation: "首次DWAI（BAC 0.05%-0.07%）违规的罚款为300至500美元。首次违规被归类为交通违章（非刑事犯罪）。" },
            { language: "es", content: "¿Cuál es el rango de multa por una primera ofensa de DWAI en Nueva York?", explanation: "Una primera ofensa de DWAI (BAC 0.05%-0.07%) conlleva una multa de $300 a $500. Se clasifica como una infracción de tránsito (no una ofensa criminal) para la primera ofensa." },
          ],
          options: [
            {
              content: "$300 to $500",
              isCorrect: true,
              translations: [
                { language: "zh", content: "300至500美元" },
                { language: "es", content: "$300 a $500" },
              ],
            },
            {
              content: "$500 to $1,000",
              isCorrect: false,
              translations: [
                { language: "zh", content: "500至1,000美元" },
                { language: "es", content: "$500 a $1,000" },
              ],
            },
            {
              content: "$100 to $300",
              isCorrect: false,
              translations: [
                { language: "zh", content: "100至300美元" },
                { language: "es", content: "$100 a $300" },
              ],
            },
            {
              content: "$1,000 to $2,500",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1,000至2,500美元" },
                { language: "es", content: "$1,000 a $2,500" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum license revocation for a first Aggravated DWI offense?",
          explanation: "A first Aggravated DWI (0.18% or higher BAC) offense results in a minimum 1-year license revocation, a fine of $1,000 to $2,500, and possible jail time of up to one year.",
          handbookSection: "Alcohol and Other Drugs — Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "首次加重醉酒驾驶（Agg-DWI）违规的最低驾照吊销期限是多少？", explanation: "首次加重醉酒驾驶（BAC 0.18%或更高）违规将导致驾照至少被吊销1年，罚款1,000至2,500美元，并可能面临最长一年的监禁。" },
            { language: "es", content: "¿Cuál es la revocación mínima de licencia por una primera ofensa de DWI Agravado?", explanation: "Una primera ofensa de DWI Agravado (BAC 0.18% o más) resulta en una revocación mínima de licencia de 1 año, una multa de $1,000 a $2,500, y posible tiempo en la cárcel de hasta un año." },
          ],
          options: [
            {
              content: "Minimum 1-year revocation",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少吊销1年" },
                { language: "es", content: "Revocación mínima de 1 año" },
              ],
            },
            {
              content: "Minimum 6-month revocation",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少吊销6个月" },
                { language: "es", content: "Revocación mínima de 6 meses" },
              ],
            },
            {
              content: "Minimum 90-day suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少暂扣90天" },
                { language: "es", content: "Suspensión mínima de 90 días" },
              ],
            },
            {
              content: "Minimum 18-month revocation",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少吊销18个月" },
                { language: "es", content: "Revocación mínima de 18 meses" },
              ],
            },
          ],
        },
        {
          content: "What does Leandra's Law require for driving while intoxicated with a child in the vehicle?",
          explanation: "Leandra's Law makes it a Class E felony to drive while intoxicated (DWI) with a child under age 16 in the vehicle. This charge carries up to 4 years in prison.",
          handbookSection: "Alcohol and Other Drugs — Leandra's Law",
          difficulty: 2,
          translations: [
            { language: "zh", content: "「利安德拉法」对车内载有儿童时醉酒驾驶有何规定？", explanation: "「利安德拉法」规定，在车内载有16岁以下儿童时醉酒驾驶（DWI）构成E级重罪。此罪名最高可判处4年监禁。" },
            { language: "es", content: "¿Qué requiere la Ley de Leandra para conducir en estado de ebriedad con un niño en el vehículo?", explanation: "La Ley de Leandra hace que sea un delito grave Clase E conducir en estado de ebriedad (DWI) con un niño menor de 16 años en el vehículo. Este cargo conlleva hasta 4 años de prisión." },
          ],
          options: [
            {
              content: "It is a Class E felony — up to 4 years imprisonment",
              isCorrect: true,
              translations: [
                { language: "zh", content: "构成E级重罪——最高可判4年监禁" },
                { language: "es", content: "Es un delito grave Clase E — hasta 4 años de prisión" },
              ],
            },
            {
              content: "It doubles the standard DWI fine only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅将标准DWI罚款加倍" },
                { language: "es", content: "Solo duplica la multa estándar de DWI" },
              ],
            },
            {
              content: "It adds 5 years to the license revocation period",
              isCorrect: false,
              translations: [
                { language: "zh", content: "将驾照吊销期限延长5年" },
                { language: "es", content: "Añade 5 años al período de revocación de licencia" },
              ],
            },
            {
              content: "It only applies if the child is under age 5",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅适用于儿童5岁以下的情况" },
                { language: "es", content: "Solo aplica si el niño es menor de 5 años" },
              ],
            },
          ],
        },
        {
          content: "When must courts order the installation of an ignition interlock device?",
          explanation: "New York courts must order ignition interlock device installation for all DWI and Aggravated DWI convictions. The minimum requirement is 12 months. The device prevents the vehicle from starting unless an acceptable breath sample is provided.",
          handbookSection: "Alcohol and Other Drugs — Ignition Interlock",
          difficulty: 2,
          translations: [
            { language: "zh", content: "法院在什么情况下必须下令安装点火联锁装置？", explanation: "纽约州法院必须对所有DWI和加重DWI定罪下令安装点火联锁装置，最低要求为12个月。该装置要求提供合格的呼气样本后车辆才能启动。" },
            { language: "es", content: "¿Cuándo deben los tribunales ordenar la instalación de un dispositivo de bloqueo de encendido?", explanation: "Los tribunales de Nueva York deben ordenar la instalación de un dispositivo de bloqueo de encendido para todas las condenas de DWI y DWI Agravado. El requisito mínimo es de 12 meses. El dispositivo impide que el vehículo arranque a menos que se proporcione una muestra de aliento aceptable." },
          ],
          options: [
            {
              content: "For all DWI and Aggravated DWI convictions — minimum 12 months",
              isCorrect: true,
              translations: [
                { language: "zh", content: "所有DWI和加重DWI定罪——最低12个月" },
                { language: "es", content: "Para todas las condenas de DWI y DWI Agravado — mínimo 12 meses" },
              ],
            },
            {
              content: "Only for second or subsequent DWI offenses",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅适用于第二次或之后的DWI违规" },
                { language: "es", content: "Solo para segundas o subsiguientes ofensas de DWI" },
              ],
            },
            {
              content: "Only when BAC exceeds 0.18%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当BAC超过0.18%时" },
                { language: "es", content: "Solo cuando el BAC excede 0.18%" },
              ],
            },
            {
              content: "At the judge's discretion — it is not mandatory",
              isCorrect: false,
              translations: [
                { language: "zh", content: "由法官自行决定——非强制性要求" },
                { language: "es", content: "A discreción del juez — no es obligatorio" },
              ],
            },
          ],
        },
        {
          content: "What is the penalty for a first open container violation in New York?",
          explanation: "Possessing or drinking from an open alcoholic beverage container while driving is a traffic infraction. The first conviction carries a fine of up to $150 plus a mandatory surcharge, and possible jail time of up to 15 days.",
          handbookSection: "Alcohol and Other Drugs — Open Container",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，首次违反开放容器法的处罚是什么？", explanation: "在驾驶时持有或饮用开封的酒精饮料容器属于交通违章。首次定罪将被处以最高150美元的罚款加强制附加费，并可能面临最长15天的监禁。" },
            { language: "es", content: "¿Cuál es la penalidad por una primera violación de contenedor abierto en Nueva York?", explanation: "Poseer o beber de un contenedor abierto de bebida alcohólica mientras conduce es una infracción de tránsito. La primera condena conlleva una multa de hasta $150 más un recargo obligatorio, y posible tiempo en la cárcel de hasta 15 días." },
          ],
          options: [
            {
              content: "Fine up to $150 plus mandatory surcharge",
              isCorrect: true,
              translations: [
                { language: "zh", content: "罚款最高150美元加强制附加费" },
                { language: "es", content: "Multa de hasta $150 más recargo obligatorio" },
              ],
            },
            {
              content: "Fine up to $500 and 30-day suspension",
              isCorrect: false,
              translations: [
                { language: "zh", content: "罚款最高500美元并吊销驾照30天" },
                { language: "es", content: "Multa de hasta $500 y suspensión de 30 días" },
              ],
            },
            {
              content: "Fine up to $1,000 and possible jail time",
              isCorrect: false,
              translations: [
                { language: "zh", content: "罚款最高1,000美元并可能入狱" },
                { language: "es", content: "Multa de hasta $1,000 y posible tiempo en la cárcel" },
              ],
            },
            {
              content: "Warning only for the first offense",
              isCorrect: false,
              translations: [
                { language: "zh", content: "首次违规仅给予警告" },
                { language: "es", content: "Solo advertencia para la primera ofensa" },
              ],
            },
          ],
        },
        {
          content: "Under what circumstances may a driver's license be permanently denied in New York?",
          explanation: "New York permanently denies a license to applicants with four or more alcohol/drug-related driving convictions in their lifetime, or three convictions within a 25-year period combined with one serious driving offense.",
          handbookSection: "Alcohol and Other Drugs — Repeat Offenders",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在什么情况下纽约州可能永久拒绝发放驾照？", explanation: "纽约州将永久拒绝向终身有四次或以上酒精/药物相关驾驶定罪的申请人发放驾照，或在25年内有三次定罪且有一次严重驾驶违规的申请人。" },
            { language: "es", content: "¿Bajo qué circunstancias puede denegarse permanentemente una licencia de conducir en Nueva York?", explanation: "Nueva York deniega permanentemente una licencia a solicitantes con cuatro o más condenas de conducción relacionadas con alcohol/drogas en su vida, o tres condenas dentro de un período de 25 años combinadas con una ofensa grave de conducción." },
          ],
          options: [
            {
              content: "Four convictions in a lifetime, or three in 25 years plus a serious driving offense",
              isCorrect: true,
              translations: [
                { language: "zh", content: "终身四次定罪，或25年内三次定罪加一次严重驾驶违规" },
                { language: "es", content: "Cuatro condenas en la vida, o tres en 25 años más una ofensa grave de conducción" },
              ],
            },
            {
              content: "Any two DWI convictions in a 10-year period",
              isCorrect: false,
              translations: [
                { language: "zh", content: "10年内任何两次DWI定罪" },
                { language: "es", content: "Cualquier dos condenas de DWI en un período de 10 años" },
              ],
            },
            {
              content: "Three convictions in any time period",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何时期内三次定罪" },
                { language: "es", content: "Tres condenas en cualquier período de tiempo" },
              ],
            },
            {
              content: "One DWI conviction plus any felony conviction",
              isCorrect: false,
              translations: [
                { language: "zh", content: "一次DWI定罪加任何重罪定罪" },
                { language: "es", content: "Una condena de DWI más cualquier condena de delito grave" },
              ],
            },
          ],
        },
        {
          content: "Under New York's Zero Tolerance Law, what BAC level subjects a driver under 21 to a license suspension?",
          explanation: "New York's Zero Tolerance Law applies to drivers under 21. Any measurable BAC between 0.02% and 0.07% results in a 6-month license suspension. A first violation also requires a $125 civil penalty plus a $100 suspension termination fee for re-licensing.",
          handbookSection: "Alcohol and Other Drugs — Zero Tolerance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据纽约州「零容忍法」，21岁以下驾驶员的血液酒精含量达到多少会导致驾照被暂扣？", explanation: "纽约州「零容忍法」适用于21岁以下的驾驶员。任何可测量的血液酒精含量（0.02%至0.07%之间）将导致驾照被暂扣6个月。首次违规还需缴纳125美元民事罚款以及100美元暂扣终止费才能重新获得驾照。" },
            { language: "es", content: "Según la Ley de Tolerancia Cero de Nueva York, ¿qué nivel de BAC sujeta a un conductor menor de 21 años a una suspensión de licencia?", explanation: "La Ley de Tolerancia Cero de Nueva York se aplica a conductores menores de 21 años. Cualquier BAC medible entre 0.02% y 0.07% resulta en una suspensión de licencia de 6 meses. Una primera infracción también requiere una multa civil de $125 más una tarifa de terminación de suspensión de $100 para volver a obtener la licencia." },
          ],
          options: [
            {
              content: "Any measurable BAC of 0.02% or higher (up to 0.07%)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "任何可测量的0.02%或以上（至0.07%）的血液酒精含量" },
                { language: "es", content: "Cualquier BAC medible de 0.02% o más (hasta 0.07%)" },
              ],
            },
            {
              content: "BAC of 0.08% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.08%或以上的血液酒精含量" },
                { language: "es", content: "BAC de 0.08% o más" },
              ],
            },
            {
              content: "BAC of 0.05% or higher only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅0.05%或以上的血液酒精含量" },
                { language: "es", content: "Solo BAC de 0.05% o más" },
              ],
            },
            {
              content: "BAC of 0.10% or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "0.10%或以上的血液酒精含量" },
                { language: "es", content: "BAC de 0.10% o más" },
              ],
            },
          ],
        },
        {
          content: "In New York, what is the minimum BAC that classifies a driver as committing Aggravated DWI (Agg-DWI)?",
          explanation: "Aggravated DWI requires a BAC of 0.18% or higher. This is a more serious offense than standard DWI (0.08% or higher). A first Agg-DWI offense carries a fine of $1,000–$2,500, up to 1 year in jail, and a minimum 1-year license revocation.",
          handbookSection: "Alcohol and Other Drugs — DWI Penalties",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，驾驶员的血液酒精含量达到多少会构成加重酒驾（Agg-DWI）？", explanation: "加重酒驾要求血液酒精含量为0.18%或以上。这比标准酒驾（0.08%或以上）更为严重。首次加重酒驾罚款为1,000至2,500美元，最高监禁1年，驾照最少被吊销1年。" },
            { language: "es", content: "En Nueva York, ¿cuál es el BAC mínimo que clasifica a un conductor como DWI Agravado (Agg-DWI)?", explanation: "El DWI Agravado requiere un BAC de 0.18% o más. Es una infracción más grave que el DWI estándar (0.08% o más). Una primera infracción de Agg-DWI conlleva una multa de $1,000–$2,500, hasta 1 año de cárcel y una revocación de licencia de mínimo 1 año." },
          ],
          options: [
            {
              content: "0.18% BAC or higher",
              isCorrect: true,
              translations: [
                { language: "zh", content: "血液酒精含量0.18%或以上" },
                { language: "es", content: "BAC de 0.18% o más" },
              ],
            },
            {
              content: "0.08% BAC or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "血液酒精含量0.08%或以上" },
                { language: "es", content: "BAC de 0.08% o más" },
              ],
            },
            {
              content: "0.15% BAC or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "血液酒精含量0.15%或以上" },
                { language: "es", content: "BAC de 0.15% o más" },
              ],
            },
            {
              content: "0.10% BAC or higher",
              isCorrect: false,
              translations: [
                { language: "zh", content: "血液酒精含量0.10%或以上" },
                { language: "es", content: "BAC de 0.10% o más" },
              ],
            },
          ],
        },
        {
          content: "Alcohol begins to impair driving ability:",
          explanation: "Alcohol starts to affect judgment, reaction time, and vision long before a person feels intoxicated. The New York DMV manual states that impairment begins with the very first drink.",
          handbookSection: "Alcohol and Other Drugs — Effects of Alcohol",
          difficulty: 1,
          translations: [
            { language: "zh", content: "酒精何时开始影响驾驶能力？", explanation: "酒精在人感到醉意之前很久就开始影响判断力、反应时间和视力。纽约州DMV手册指出，从第一杯酒开始就会产生影响。" },
            { language: "es", content: "El alcohol comienza a deteriorar la capacidad de conducción:", explanation: "El alcohol comienza a afectar el juicio, el tiempo de reacción y la visión mucho antes de que una persona se sienta intoxicada. El manual del DMV de Nueva York establece que el deterioro comienza con la primera bebida." },
          ],
          options: [
            {
              content: "With the very first drink",
              isCorrect: true,
              translations: [
                { language: "zh", content: "从第一杯酒开始" },
                { language: "es", content: "Con la primera bebida" },
              ],
            },
            {
              content: "Only after reaching the legal 0.08% BAC limit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在达到法定0.08% BAC限制后" },
                { language: "es", content: "Solo después de alcanzar el límite legal de 0.08% de BAC" },
              ],
            },
            {
              content: "Only after three or more drinks",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在喝三杯或更多之后" },
                { language: "es", content: "Solo después de tres o más bebidas" },
              ],
            },
            {
              content: "Only when a person feels drunk",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当人感到醉意时" },
                { language: "es", content: "Solo cuando una persona se siente ebria" },
              ],
            },
          ],
        },
      ],
    },
    // ─── DRIVER LICENSING & VEHICLE LAWS ─────────────────────────────────────────
    {
      name: "Driver Licensing & Vehicle Laws",
      nameEn: "Driver Licensing & Vehicle Laws",
      description: "License classes, GDL rules, testing requirements, and point system",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-1-driver-licenses",
      translations: [
        { language: "zh", name: "驾驶执照与车辆法规", description: "驾照类别、GDL 规则、考试要求及积分制度" },
        { language: "es", name: "Licencia de Conducir y Leyes Vehiculares", description: "Tipos de licencia, reglas GDL, requisitos de examen y sistema de puntos" },
      ],
      questions: [
        {
          content: "How many questions must you answer correctly on the New York written knowledge test?",
          explanation: "You must correctly answer at least 14 of the 20 questions on the written test. Additionally, you must answer at least 2 of the 4 road sign questions correctly.",
          handbookSection: "Driver Licenses — Written Test",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州笔试中，您必须正确回答多少道题目？", explanation: "您必须在20道题目中正确回答至少14道。此外，您还必须在4道路标题目中正确回答至少2道。" },
            { language: "es", content: "¿Cuántas preguntas debe responder correctamente en el examen escrito de conocimientos de Nueva York?", explanation: "Debe responder correctamente al menos 14 de las 20 preguntas del examen escrito. Además, debe responder correctamente al menos 2 de las 4 preguntas sobre señales de tráfico." },
          ],
          options: [
            {
              content: "14 out of 20 (including 2 out of 4 road sign questions)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "20题中答对14题（包括4道路标题中答对2道）" },
                { language: "es", content: "14 de 20 (incluyendo 2 de 4 preguntas sobre señales de tráfico)" },
              ],
            },
            {
              content: "16 out of 20",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20题中答对16题" },
                { language: "es", content: "16 de 20" },
              ],
            },
            {
              content: "15 out of 20",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20题中答对15题" },
                { language: "es", content: "15 de 20" },
              ],
            },
            {
              content: "18 out of 20",
              isCorrect: false,
              translations: [
                { language: "zh", content: "20题中答对18题" },
                { language: "es", content: "18 de 20" },
              ],
            },
          ],
        },
        {
          content: "What vision requirement must you meet to obtain a driver's license in New York?",
          explanation: "You must have at least 20/40 vision in at least one eye, with or without corrective lenses such as glasses or contact lenses.",
          handbookSection: "Driver Licenses — Vision Requirements",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州，获得驾驶执照必须满足什么视力要求？", explanation: "您至少一只眼睛的视力必须达到20/40，可以佩戴或不佩戴矫正镜片（如眼镜或隐形眼镜）。" },
            { language: "es", content: "¿Qué requisito de visión debe cumplir para obtener una licencia de conducir en Nueva York?", explanation: "Debe tener al menos visión 20/40 en al menos un ojo, con o sin lentes correctivos como gafas o lentes de contacto." },
          ],
          options: [
            {
              content: "20/40 vision in at least one eye",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少一只眼睛视力达到20/40" },
                { language: "es", content: "Visión 20/40 en al menos un ojo" },
              ],
            },
            {
              content: "20/20 vision in both eyes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双眼视力达到20/20" },
                { language: "es", content: "Visión 20/20 en ambos ojos" },
              ],
            },
            {
              content: "20/50 vision in both eyes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双眼视力达到20/50" },
                { language: "es", content: "Visión 20/50 en ambos ojos" },
              ],
            },
            {
              content: "20/40 vision in both eyes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "双眼视力达到20/40" },
                { language: "es", content: "Visión 20/40 en ambos ojos" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum age to apply for a Class DJ (junior operator) learner permit in New York?",
          explanation: "The minimum age for a Class DJ junior learner permit is 16 years old. The DJ license has graduated driving restrictions such as passenger limits and night driving rules.",
          handbookSection: "Driver Licenses — License Types",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州，申请DJ类（初级驾驶员）学习许可证的最低年龄是多少？", explanation: "DJ类初级学习许可证的最低年龄为16岁。DJ驾照有渐进式驾驶限制，如乘客人数限制和夜间驾驶规定。" },
            { language: "es", content: "¿Cuál es la edad mínima para solicitar un permiso de aprendizaje Clase DJ (operador junior) en Nueva York?", explanation: "La edad mínima para un permiso de aprendizaje junior Clase DJ es de 16 años. La licencia DJ tiene restricciones de conducción graduadas, como límites de pasajeros y reglas de conducción nocturna." },
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
              content: "17 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "17岁" },
                { language: "es", content: "17 años" },
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
              content: "18 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "18岁" },
                { language: "es", content: "18 años" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum age for a Class D (standard) driver's license in New York without a driver education certificate?",
          explanation: "The minimum age for a Class D license is 18 years old. A driver may qualify at age 17 with a certificate of completion from an approved driver education program.",
          handbookSection: "Driver Licenses — License Types",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州，没有驾驶教育证书的情况下，获得D类（标准）驾照的最低年龄是多少？", explanation: "D类驾照的最低年龄为18岁。如果持有经批准的驾驶教育课程结业证书，驾驶员可在17岁时获得资格。" },
            { language: "es", content: "¿Cuál es la edad mínima para obtener una licencia de conducir Clase D (estándar) en Nueva York sin un certificado de educación vial?", explanation: "La edad mínima para una licencia Clase D es de 18 años. Un conductor puede calificar a los 17 años con un certificado de finalización de un programa de educación vial aprobado." },
          ],
          options: [
            {
              content: "18 years old (or 17 with a driver education certificate)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "18岁（或持有驾驶教育证书可为17岁）" },
                { language: "es", content: "18 años (o 17 con certificado de educación vial)" },
              ],
            },
            {
              content: "16 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "16岁" },
                { language: "es", content: "16 años" },
              ],
            },
            {
              content: "17 years old with no exceptions",
              isCorrect: false,
              translations: [
                { language: "zh", content: "17岁，无例外" },
                { language: "es", content: "17 años sin excepciones" },
              ],
            },
            {
              content: "21 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "21岁" },
                { language: "es", content: "21 años" },
              ],
            },
          ],
        },
        {
          content: "How many practice driving hours are required before taking a road test in New York, and how many must be at night?",
          explanation: "Before taking the road test, you must complete at least 50 hours of supervised practice driving, including at least 15 hours after sunset. This ensures experience in a variety of driving conditions.",
          handbookSection: "Driver Licenses — Road Test Requirements",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州参加路考前需要完成多少小时的练习驾驶，其中多少小时必须在夜间进行？", explanation: "在参加路考前，您必须完成至少50小时的监督练习驾驶，其中至少15小时在日落后进行。这确保您在各种驾驶条件下积累经验。" },
            { language: "es", content: "¿Cuántas horas de práctica de conducción se requieren antes de tomar el examen de carretera en Nueva York, y cuántas deben ser de noche?", explanation: "Antes de tomar el examen de carretera, debe completar al menos 50 horas de práctica de conducción supervisada, incluyendo al menos 15 horas después del atardecer. Esto asegura experiencia en una variedad de condiciones de conducción." },
          ],
          options: [
            {
              content: "50 total hours, with at least 15 hours at night",
              isCorrect: true,
              translations: [
                { language: "zh", content: "总共50小时，其中至少15小时在夜间" },
                { language: "es", content: "50 horas en total, con al menos 15 horas de noche" },
              ],
            },
            {
              content: "30 total hours, with at least 5 hours at night",
              isCorrect: false,
              translations: [
                { language: "zh", content: "总共30小时，其中至少5小时在夜间" },
                { language: "es", content: "30 horas en total, con al menos 5 horas de noche" },
              ],
            },
            {
              content: "40 total hours, with at least 10 hours at night",
              isCorrect: false,
              translations: [
                { language: "zh", content: "总共40小时，其中至少10小时在夜间" },
                { language: "es", content: "40 horas en total, con al menos 10 horas de noche" },
              ],
            },
            {
              content: "50 total hours, no nighttime requirement",
              isCorrect: false,
              translations: [
                { language: "zh", content: "总共50小时，无夜间要求" },
                { language: "es", content: "50 horas en total, sin requisito nocturno" },
              ],
            },
          ],
        },
        {
          content: "What must be completed before a road test in New York?",
          explanation: "All applicants must complete the 5-Hour Pre-Licensing Course before they can take the road test. This course covers safe driving practices and New York traffic laws.",
          handbookSection: "Driver Licenses — Road Test Requirements",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在纽约州参加路考前必须完成什么课程？", explanation: "所有申请人必须完成5小时预备驾照课程才能参加路考。该课程涵盖安全驾驶实践和纽约交通法规。" },
            { language: "es", content: "¿Qué debe completarse antes de un examen de carretera en Nueva York?", explanation: "Todos los solicitantes deben completar el Curso de Pre-Licencia de 5 Horas antes de poder tomar el examen de carretera. Este curso cubre prácticas de conducción segura y las leyes de tráfico de Nueva York." },
          ],
          options: [
            {
              content: "The 5-Hour Pre-Licensing Course",
              isCorrect: true,
              translations: [
                { language: "zh", content: "5小时预备驾照课程" },
                { language: "es", content: "El Curso de Pre-Licencia de 5 Horas" },
              ],
            },
            {
              content: "A 2-hour online traffic course",
              isCorrect: false,
              translations: [
                { language: "zh", content: "2小时在线交通课程" },
                { language: "es", content: "Un curso de tráfico en línea de 2 horas" },
              ],
            },
            {
              content: "A defensive driving course of 10 hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "10小时防御性驾驶课程" },
                { language: "es", content: "Un curso de conducción defensiva de 10 horas" },
              ],
            },
            {
              content: "A first aid and CPR certification",
              isCorrect: false,
              translations: [
                { language: "zh", content: "急救和心肺复苏认证" },
                { language: "es", content: "Una certificación de primeros auxilios y RCP" },
              ],
            },
          ],
        },
        {
          content: "How long must a junior learner permit be held before taking a road test?",
          explanation: "A junior learner permit must be held for a minimum of 6 months before the applicant is eligible to take the road test. This ensures adequate supervised practice time.",
          handbookSection: "Driver Licenses — GDL Rules",
          difficulty: 1,
          translations: [
            { language: "zh", content: "初级学习许可证必须持有多长时间才能参加路考？", explanation: "初级学习许可证必须持有至少6个月，申请人才有资格参加路考。这确保有足够的监督练习时间。" },
            { language: "es", content: "¿Cuánto tiempo debe mantenerse un permiso de aprendizaje junior antes de tomar un examen de carretera?", explanation: "Un permiso de aprendizaje junior debe mantenerse durante un mínimo de 6 meses antes de que el solicitante sea elegible para tomar el examen de carretera. Esto asegura un tiempo adecuado de práctica supervisada." },
          ],
          options: [
            {
              content: "Minimum 6 months",
              isCorrect: true,
              translations: [
                { language: "zh", content: "至少6个月" },
                { language: "es", content: "Mínimo 6 meses" },
              ],
            },
            {
              content: "Minimum 3 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少3个月" },
                { language: "es", content: "Mínimo 3 meses" },
              ],
            },
            {
              content: "Minimum 1 year",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少1年" },
                { language: "es", content: "Mínimo 1 año" },
              ],
            },
            {
              content: "Minimum 30 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "至少30天" },
                { language: "es", content: "Mínimo 30 días" },
              ],
            },
          ],
        },
        {
          content: "Under New York's GDL rules, how many non-family passengers under age 21 may a junior permit holder carry?",
          explanation: "Junior permit holders cannot drive with more than one passenger under the age of 21 unless those passengers are members of their immediate family. This restriction helps reduce distractions for new drivers.",
          handbookSection: "Driver Licenses — GDL Rules",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据纽约州的渐进式驾照规定，初级许可证持有人可以搭载多少名21岁以下的非家庭成员乘客？", explanation: "初级许可证持有人驾驶时，不能搭载超过一名21岁以下的乘客，除非这些乘客是其直系家庭成员。此限制有助于减少新驾驶员的分心因素。" },
            { language: "es", content: "Según las reglas GDL de Nueva York, ¿cuántos pasajeros no familiares menores de 21 años puede llevar un titular de permiso junior?", explanation: "Los titulares de permisos junior no pueden conducir con más de un pasajero menor de 21 años a menos que esos pasajeros sean miembros de su familia inmediata. Esta restricción ayuda a reducir las distracciones para los conductores nuevos." },
          ],
          options: [
            {
              content: "No more than one non-family passenger under 21",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不超过一名21岁以下的非家庭成员乘客" },
                { language: "es", content: "No más de un pasajero no familiar menor de 21 años" },
              ],
            },
            {
              content: "No non-family passengers allowed at all",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全不允许搭载非家庭成员乘客" },
                { language: "es", content: "No se permiten pasajeros no familiares en absoluto" },
              ],
            },
            {
              content: "Up to two non-family passengers under 21",
              isCorrect: false,
              translations: [
                { language: "zh", content: "最多两名21岁以下的非家庭成员乘客" },
                { language: "es", content: "Hasta dos pasajeros no familiares menores de 21 años" },
              ],
            },
            {
              content: "No restriction on passengers with a learner permit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "持有学习许可证对乘客无限制" },
                { language: "es", content: "Sin restricción de pasajeros con permiso de aprendizaje" },
              ],
            },
          ],
        },
        {
          content: "In New York City, what are the nighttime driving restrictions for junior permit holders?",
          explanation: "In New York City, junior permit holders cannot drive between 9 p.m. and 5 a.m. During these hours, driving is prohibited except with a parent, guardian, or driving instructor present.",
          handbookSection: "Driver Licenses — GDL Rules",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约市，初级许可证持有人的夜间驾驶限制是什么？", explanation: "在纽约市，初级许可证持有人不能在晚上9点至凌晨5点之间驾驶。在这些时段内，除非有父母、监护人或驾驶教练在场，否则禁止驾驶。" },
            { language: "es", content: "En la ciudad de Nueva York, ¿cuáles son las restricciones de conducción nocturna para los titulares de permisos junior?", explanation: "En la ciudad de Nueva York, los titulares de permisos junior no pueden conducir entre las 9 p.m. y las 5 a.m. Durante estas horas, está prohibido conducir excepto con la presencia de un padre, tutor o instructor de manejo." },
          ],
          options: [
            {
              content: "No driving between 9 p.m. and 5 a.m.",
              isCorrect: true,
              translations: [
                { language: "zh", content: "晚上9点至凌晨5点之间禁止驾驶" },
                { language: "es", content: "No conducir entre las 9 p.m. y las 5 a.m." },
              ],
            },
            {
              content: "No driving between midnight and 6 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "午夜至凌晨6点之间禁止驾驶" },
                { language: "es", content: "No conducir entre la medianoche y las 6 a.m." },
              ],
            },
            {
              content: "No nighttime driving restrictions in NYC",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在纽约市无夜间驾驶限制" },
                { language: "es", content: "Sin restricciones de conducción nocturna en NYC" },
              ],
            },
            {
              content: "No driving between 10 p.m. and 4 a.m.",
              isCorrect: false,
              translations: [
                { language: "zh", content: "晚上10点至凌晨4点之间禁止驾驶" },
                { language: "es", content: "No conducir entre las 10 p.m. y las 4 a.m." },
              ],
            },
          ],
        },
        {
          content: "Within how many days must you notify the DMV of an address change in New York?",
          explanation: "New York law requires you to notify the DMV of an address change within 10 days. Failure to do so can affect your ability to receive important communications from the DMV.",
          handbookSection: "Driver Licenses — License Maintenance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，您必须在多少天内通知车管局地址变更？", explanation: "纽约州法律要求您在10天内通知车管局地址变更。未能这样做可能会影响您接收车管局重要通信的能力。" },
            { language: "es", content: "¿Dentro de cuántos días debe notificar al DMV un cambio de dirección en Nueva York?", explanation: "La ley de Nueva York requiere que notifique al DMV un cambio de dirección dentro de 10 días. No hacerlo puede afectar su capacidad para recibir comunicaciones importantes del DMV." },
          ],
          options: [
            {
              content: "Within 10 days",
              isCorrect: true,
              translations: [
                { language: "zh", content: "10天内" },
                { language: "es", content: "Dentro de 10 días" },
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
              content: "Within 90 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "90天内" },
                { language: "es", content: "Dentro de 90 días" },
              ],
            },
          ],
        },
        {
          content: "How long after establishing New York residency must a new resident apply for a New York driver's license?",
          explanation: "New residents of New York must apply for a New York driver's license within 30 days of establishing residency. Out-of-state licenses are generally accepted for up to 2 years without requiring a written or road test.",
          handbookSection: "Driver Licenses — License Maintenance",
          difficulty: 2,
          translations: [
            { language: "zh", content: "新居民在确立纽约州居住身份后多长时间内必须申请纽约驾照？", explanation: "纽约州新居民必须在确立居住身份后30天内申请纽约驾照。外州驾照通常在长达2年内有效，无需参加笔试或路考。" },
            { language: "es", content: "¿Cuánto tiempo después de establecer residencia en Nueva York debe un nuevo residente solicitar una licencia de conducir de Nueva York?", explanation: "Los nuevos residentes de Nueva York deben solicitar una licencia de conducir de Nueva York dentro de 30 días de establecer residencia. Las licencias de otros estados generalmente se aceptan hasta por 2 años sin requerir un examen escrito o de carretera." },
          ],
          options: [
            {
              content: "Within 30 days",
              isCorrect: true,
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
              content: "Within 90 days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "90天内" },
                { language: "es", content: "Dentro de 90 días" },
              ],
            },
            {
              content: "Within 6 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "6个月内" },
                { language: "es", content: "Dentro de 6 meses" },
              ],
            },
          ],
        },
        {
          content: "What is the maximum number of points that can be removed from a driver's license by completing an Accident Prevention Course?",
          explanation: "Completing an approved Accident Prevention Course (defensive driving course) allows a reduction of up to 4 points from a driver's license record. The course can be taken once every 18 months for point reduction.",
          handbookSection: "Driver Licenses — Point System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "完成事故预防课程最多可以从驾照中扣除多少分？", explanation: "完成经批准的事故预防课程（防御性驾驶课程）可以从驾照记录中减少最多4分。该课程每18个月可参加一次以减少积分。" },
            { language: "es", content: "¿Cuál es el número máximo de puntos que se pueden eliminar de una licencia de conducir al completar un Curso de Prevención de Accidentes?", explanation: "Completar un Curso de Prevención de Accidentes aprobado (curso de conducción defensiva) permite una reducción de hasta 4 puntos del registro de la licencia de conducir. El curso se puede tomar una vez cada 18 meses para reducción de puntos." },
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
              content: "2 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "2分" },
                { language: "es", content: "2 puntos" },
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
              content: "8 points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "8分" },
                { language: "es", content: "8 puntos" },
              ],
            },
          ],
        },
        {
          content: "What does the Class E driver's license in New York allow that a Class D does not?",
          explanation: "A Class E license allows the holder to transport passengers for hire in a vehicle seating up to 14 passengers (such as a taxi or livery vehicle). It otherwise has the same vehicle permissions as a Class D.",
          handbookSection: "Driver Licenses — License Types",
          difficulty: 2,
          translations: [
            { language: "zh", content: "纽约州E类驾照允许做什么而D类驾照不允许？", explanation: "E类驾照允许持有人在可容纳最多14名乘客的车辆中从事载客营运（如出租车或出租汽车）。除此之外，其车辆准驾范围与D类驾照相同。" },
            { language: "es", content: "¿Qué permite la licencia de conducir Clase E en Nueva York que la Clase D no permite?", explanation: "Una licencia Clase E permite al titular transportar pasajeros por contrato en un vehículo con capacidad para hasta 14 pasajeros (como un taxi o vehículo de alquiler). Por lo demás, tiene los mismos permisos de vehículos que una Clase D." },
          ],
          options: [
            {
              content: "Transport passengers for hire in vehicles seating up to 14",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在可容纳最多14名乘客的车辆中从事载客营运" },
                { language: "es", content: "Transportar pasajeros por contrato en vehículos con capacidad para hasta 14" },
              ],
            },
            {
              content: "Drive vehicles over 26,000 lbs GVWR",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶总重量超过26,000磅的车辆" },
                { language: "es", content: "Conducir vehículos de más de 26,000 lbs GVWR" },
              ],
            },
            {
              content: "Drive motorcycles and scooters",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶摩托车和踏板车" },
                { language: "es", content: "Conducir motocicletas y scooters" },
              ],
            },
            {
              content: "Drive commercial trucks with trailers",
              isCorrect: false,
              translations: [
                { language: "zh", content: "驾驶带拖车的商用卡车" },
                { language: "es", content: "Conducir camiones comerciales con remolques" },
              ],
            },
          ],
        },
        {
          content: "What is the minimum age for a supervising driver when a learner permit holder is driving?",
          explanation: "The supervising driver must be at least 21 years old and hold a valid driver's license. They must sit in the front passenger seat while the permit holder is driving.",
          handbookSection: "Driver Licenses — Learner Permit Rules",
          difficulty: 1,
          translations: [
            { language: "zh", content: "学习许可证持有人驾驶时，监督驾驶员的最低年龄是多少？", explanation: "监督驾驶员必须年满21岁并持有有效驾照。在许可证持有人驾驶时，监督驾驶员必须坐在前排乘客座位上。" },
            { language: "es", content: "¿Cuál es la edad mínima para un conductor supervisor cuando un titular de permiso de aprendizaje está conduciendo?", explanation: "El conductor supervisor debe tener al menos 21 años y poseer una licencia de conducir válida. Debe sentarse en el asiento del pasajero delantero mientras el titular del permiso está conduciendo." },
          ],
          options: [
            {
              content: "21 years old",
              isCorrect: true,
              translations: [
                { language: "zh", content: "21岁" },
                { language: "es", content: "21 años" },
              ],
            },
            {
              content: "18 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "18岁" },
                { language: "es", content: "18 años" },
              ],
            },
            {
              content: "25 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "25岁" },
                { language: "es", content: "25 años" },
              ],
            },
            {
              content: "16 years old",
              isCorrect: false,
              translations: [
                { language: "zh", content: "16岁" },
                { language: "es", content: "16 años" },
              ],
            },
          ],
        },
        {
          content: "What is the GVWR threshold that distinguishes a standard Class D license from commercial driving?",
          explanation: "A Class D license allows operation of vehicles with a gross vehicle weight rating (GVWR) of 26,000 lbs or less. Vehicles above this weight require a commercial driver's license (CDL).",
          handbookSection: "Driver Licenses — License Types",
          difficulty: 3,
          translations: [
            { language: "zh", content: "区分标准D类驾照和商业驾驶的车辆总重量等级阈值是多少？", explanation: "D类驾照允许驾驶车辆总重量等级（GVWR）为26,000磅或以下的车辆。超过此重量的车辆需要商业驾照（CDL）。" },
            { language: "es", content: "¿Cuál es el umbral de GVWR que distingue una licencia Clase D estándar de la conducción comercial?", explanation: "Una licencia Clase D permite la operación de vehículos con un peso bruto vehicular (GVWR) de 26,000 lbs o menos. Los vehículos por encima de este peso requieren una licencia de conducir comercial (CDL)." },
          ],
          options: [
            {
              content: "26,000 lbs GVWR",
              isCorrect: true,
              translations: [
                { language: "zh", content: "26,000磅车辆总重量等级" },
                { language: "es", content: "26,000 lbs GVWR" },
              ],
            },
            {
              content: "10,000 lbs GVWR",
              isCorrect: false,
              translations: [
                { language: "zh", content: "10,000磅车辆总重量等级" },
                { language: "es", content: "10,000 lbs GVWR" },
              ],
            },
            {
              content: "33,000 lbs GVWR",
              isCorrect: false,
              translations: [
                { language: "zh", content: "33,000磅车辆总重量等级" },
                { language: "es", content: "33,000 lbs GVWR" },
              ],
            },
            {
              content: "18,000 lbs GVWR",
              isCorrect: false,
              translations: [
                { language: "zh", content: "18,000磅车辆总重量等级" },
                { language: "es", content: "18,000 lbs GVWR" },
              ],
            },
          ],
        },
        {
          content: "Under New York's Graduated Driver Licensing (GDL) rules, what is the passenger restriction for a junior operator (Class DJ) driving outside New York City?",
          explanation: "Junior operators (Class DJ) cannot drive with more than one passenger under age 21 unless the additional passengers are immediate family members. This restriction applies statewide and is meant to reduce distractions for new drivers.",
          handbookSection: "Driver Licenses — Junior Driver Restrictions",
          difficulty: 2,
          translations: [
            { language: "zh", content: "根据纽约州「分级驾照（GDL）」规定，初级驾驶员（DJ类）在纽约市以外驾驶时，乘客限制是什么？", explanation: "初级驾驶员（DJ类）不得携带超过一名21岁以下的乘客，除非额外乘客是直系家庭成员。此限制适用于全州，旨在减少新驾驶员的分心因素。" },
            { language: "es", content: "Según las reglas de la Licencia de Conducir Graduada (GDL) de Nueva York, ¿cuál es la restricción de pasajeros para un operador junior (Clase DJ) que conduce fuera de la ciudad de Nueva York?", explanation: "Los operadores junior (Clase DJ) no pueden conducir con más de un pasajero menor de 21 años, a menos que los pasajeros adicionales sean miembros de la familia inmediata. Esta restricción aplica en todo el estado y está diseñada para reducir las distracciones de los nuevos conductores." },
          ],
          options: [
            {
              content: "No more than one passenger under 21, unless they are immediate family members",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不超过一名21岁以下的乘客，除非他们是直系家庭成员" },
                { language: "es", content: "No más de un pasajero menor de 21 años, a menos que sean miembros de la familia inmediata" },
              ],
            },
            {
              content: "No passengers at all for the first 6 months",
              isCorrect: false,
              translations: [
                { language: "zh", content: "前6个月完全不能载客" },
                { language: "es", content: "Sin pasajeros en absoluto durante los primeros 6 meses" },
              ],
            },
            {
              content: "No more than two passengers of any age",
              isCorrect: false,
              translations: [
                { language: "zh", content: "不超过两名任何年龄的乘客" },
                { language: "es", content: "No más de dos pasajeros de cualquier edad" },
              ],
            },
            {
              content: "Passengers are unrestricted as long as all wear seat belts",
              isCorrect: false,
              translations: [
                { language: "zh", content: "只要所有人系安全带，乘客不受限制" },
                { language: "es", content: "Los pasajeros no tienen restricciones siempre que todos usen cinturón de seguridad" },
              ],
            },
          ],
        },
        {
          content: "In New York State, how many points accumulated within a 24-month period will result in a license suspension?",
          explanation: "Accumulating 11 or more points on your driving record within any 24-month period will result in your license being suspended. The point count is based on the date of violation, not the date of conviction. Drivers can reduce up to 4 points by completing a DMV-approved Motor Vehicle Crash Prevention Course.",
          handbookSection: "Driver Licenses — Point System",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，24个月内积累多少分会导致驾照被暂扣？", explanation: "在任意24个月内驾驶记录上积累11分或以上，将导致驾照被暂扣。积分以违规日期为准，而非定罪日期。驾驶员可以通过完成DMV批准的「机动车事故预防课程」减少最多4分。" },
            { language: "es", content: "En el estado de Nueva York, ¿cuántos puntos acumulados en un período de 24 meses resultarán en la suspensión de una licencia?", explanation: "Acumular 11 o más puntos en su récord de conducción dentro de cualquier período de 24 meses resultará en la suspensión de su licencia. El conteo de puntos se basa en la fecha de la infracción, no en la fecha de condena. Los conductores pueden reducir hasta 4 puntos completando un Curso de Prevención de Accidentes de Vehículos de Motor aprobado por el DMV." },
          ],
          options: [
            {
              content: "11 or more points",
              isCorrect: true,
              translations: [
                { language: "zh", content: "11分或以上" },
                { language: "es", content: "11 o más puntos" },
              ],
            },
            {
              content: "6 or more points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "6分或以上" },
                { language: "es", content: "6 o más puntos" },
              ],
            },
            {
              content: "8 or more points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "8分或以上" },
                { language: "es", content: "8 o más puntos" },
              ],
            },
            {
              content: "15 or more points",
              isCorrect: false,
              translations: [
                { language: "zh", content: "15分或以上" },
                { language: "es", content: "15 o más puntos" },
              ],
            },
          ],
        },
      ],
    },
    // ─── SHARING THE ROAD & CRASH PROCEDURES ─────────────────────────────────────────
    {
      name: "Sharing the Road & Crash Procedures",
      nameEn: "Sharing the Road & Crash Procedures",
      description: "Pedestrians, cyclists, motorcycles, trucks, and what to do after a crash",
      handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-11-sharing-the-road",
      translations: [
        { language: "zh", name: "与他人共用道路及事故处理", description: "行人、骑车人、摩托车、卡车及事故后处理" },
        { language: "es", name: "Compartir la Vía y Procedimientos en Accidentes", description: "Peatones, ciclistas, motocicletas, camiones y procedimientos tras un accidente" },
      ],
      questions: [
        {
          content: "When must a driver yield to pedestrians?",
          explanation: "Drivers must always yield to pedestrians who are legally crossing — whether at a marked crosswalk or an unmarked crosswalk at an intersection. You must slow down or stop as necessary.",
          handbookSection: "Sharing the Road — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "驾驶员何时必须让行给行人？", explanation: "驾驶员必须始终让行给合法过马路的行人——无论是在有标记的人行横道还是在交叉路口的无标记人行横道。您必须根据需要减速或停车。" },
            { language: "es", content: "¿Cuándo debe un conductor ceder el paso a los peatones?", explanation: "Los conductores siempre deben ceder el paso a los peatones que cruzan legalmente, ya sea en un cruce peatonal marcado o sin marcar en una intersección. Debe reducir la velocidad o detenerse según sea necesario." },
          ],
          options: [
            {
              content: "Whenever pedestrians are legally crossing at any marked or unmarked crosswalk",
              isCorrect: true,
              translations: [
                { language: "zh", content: "当行人在任何有标记或无标记的人行横道合法过马路时" },
                { language: "es", content: "Siempre que los peatones crucen legalmente en cualquier cruce peatonal marcado o sin marcar" },
              ],
            },
            {
              content: "Only at marked crosswalks with painted lines",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有划线标记的人行横道" },
                { language: "es", content: "Solo en cruces peatonales marcados con líneas pintadas" },
              ],
            },
            {
              content: "Only when a WALK signal is displayed",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当显示「步行」信号时" },
                { language: "es", content: "Solo cuando se muestra la señal de WALK (caminar)" },
              ],
            },
            {
              content: "Only in school zones and residential neighborhoods",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在学校区域和住宅区" },
                { language: "es", content: "Solo en zonas escolares y vecindarios residenciales" },
              ],
            },
          ],
        },
        {
          content: "When must a driver yield to a pedestrian with a guide dog or white/metal cane?",
          explanation: "Drivers must yield to pedestrians using guide dogs or carrying white or metal canes at any crosswalk. These individuals may be blind or visually impaired and have absolute right-of-way in these situations.",
          handbookSection: "Sharing the Road — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "驾驶员何时必须让行给带导盲犬或持白色/金属手杖的行人？", explanation: "驾驶员必须在任何人行横道让行给使用导盲犬或持白色或金属手杖的行人。这些人可能是盲人或视力障碍者，在这些情况下拥有绝对的优先通行权。" },
            { language: "es", content: "¿Cuándo debe un conductor ceder el paso a un peatón con perro guía o bastón blanco/metálico?", explanation: "Los conductores deben ceder el paso a los peatones que usan perros guía o llevan bastones blancos o metálicos en cualquier cruce peatonal. Estas personas pueden ser ciegas o tener discapacidad visual y tienen derecho de paso absoluto en estas situaciones." },
          ],
          options: [
            {
              content: "At any crosswalk — they always have the right-of-way",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在任何人行横道——他们始终拥有优先通行权" },
                { language: "es", content: "En cualquier cruce peatonal — siempre tienen el derecho de paso" },
              ],
            },
            {
              content: "Only at marked crosswalks with signals",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅在有信号灯的有标记人行横道" },
                { language: "es", content: "Solo en cruces peatonales marcados con señales" },
              ],
            },
            {
              content: "Only when the pedestrian signal shows WALK",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当行人信号显示「步行」时" },
                { language: "es", content: "Solo cuando la señal peatonal muestra WALK (caminar)" },
              ],
            },
            {
              content: "Only if the driver can stop safely",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅当驾驶员能够安全停车时" },
                { language: "es", content: "Solo si el conductor puede detenerse de manera segura" },
              ],
            },
          ],
        },
        {
          content: "What are the bicycle helmet requirements for young riders in New York?",
          explanation: "In New York, all bicycle riders and passengers between the ages of 1 and 13 must wear an approved helmet. Children under 1 year of age should not be transported on a bicycle.",
          handbookSection: "Sharing the Road — Bicyclists",
          difficulty: 1,
          translations: [
            { language: "zh", content: "纽约州对年轻骑行者的自行车头盔要求是什么？", explanation: "在纽约州，所有1至13岁的自行车骑行者和乘客必须佩戴经批准的头盔。1岁以下的儿童不应用自行车载运。" },
            { language: "es", content: "¿Cuáles son los requisitos de casco de bicicleta para ciclistas jóvenes en Nueva York?", explanation: "En Nueva York, todos los ciclistas y pasajeros de bicicleta entre las edades de 1 y 13 años deben usar un casco aprobado. Los niños menores de 1 año no deben ser transportados en una bicicleta." },
          ],
          options: [
            {
              content: "Ages 1 through 13 must wear an approved helmet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "1至13岁必须佩戴经批准的头盔" },
                { language: "es", content: "Las edades de 1 a 13 años deben usar un casco aprobado" },
              ],
            },
            {
              content: "Only children under 5 must wear helmets",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅5岁以下儿童必须佩戴头盔" },
                { language: "es", content: "Solo los niños menores de 5 años deben usar cascos" },
              ],
            },
            {
              content: "Ages 1 through 16 must wear helmets",
              isCorrect: false,
              translations: [
                { language: "zh", content: "1至16岁必须佩戴头盔" },
                { language: "es", content: "Las edades de 1 a 16 años deben usar cascos" },
              ],
            },
            {
              content: "Helmets are optional for all ages",
              isCorrect: false,
              translations: [
                { language: "zh", content: "所有年龄段头盔均为可选" },
                { language: "es", content: "Los cascos son opcionales para todas las edades" },
              ],
            },
          ],
        },
        {
          content: "What lighting equipment is required for bicycles ridden at night in New York?",
          explanation: "Bicycles operated at night must have a white headlight visible from 500 feet ahead and a red taillight visible from 300 feet behind. This makes cyclists visible to drivers in low-light conditions.",
          handbookSection: "Sharing the Road — Bicyclists",
          difficulty: 2,
          translations: [
            { language: "zh", content: "纽约州夜间骑行的自行车需要什么照明设备？", explanation: "夜间骑行的自行车必须配备从前方500英尺可见的白色前灯和从后方300英尺可见的红色尾灯。这使骑行者在低光照条件下对驾驶员可见。" },
            { language: "es", content: "¿Qué equipo de iluminación se requiere para las bicicletas que circulan de noche en Nueva York?", explanation: "Las bicicletas operadas de noche deben tener una luz delantera blanca visible desde 500 pies adelante y una luz trasera roja visible desde 300 pies atrás. Esto hace que los ciclistas sean visibles para los conductores en condiciones de poca luz." },
          ],
          options: [
            {
              content: "White headlight visible 500 feet; red taillight visible 300 feet",
              isCorrect: true,
              translations: [
                { language: "zh", content: "白色前灯可见距离500英尺；红色尾灯可见距离300英尺" },
                { language: "es", content: "Luz delantera blanca visible a 500 pies; luz trasera roja visible a 300 pies" },
              ],
            },
            {
              content: "White headlight visible 300 feet; no taillight required",
              isCorrect: false,
              translations: [
                { language: "zh", content: "白色前灯可见距离300英尺；不需要尾灯" },
                { language: "es", content: "Luz delantera blanca visible a 300 pies; no se requiere luz trasera" },
              ],
            },
            {
              content: "Reflectors only — no lights required",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅需反光板——不需要车灯" },
                { language: "es", content: "Solo reflectores — no se requieren luces" },
              ],
            },
            {
              content: "Any colored light visible from 100 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "任何颜色的灯光可见距离100英尺" },
                { language: "es", content: "Cualquier luz de color visible desde 100 pies" },
              ],
            },
          ],
        },
        {
          content: "What is the approximate front blind spot size of a large tractor-trailer?",
          explanation: "A tractor-trailer has an approximately 20-foot front blind spot directly in front of the cab. The driver cannot see vehicles in this zone. Avoid cutting in front of trucks and allow extra space when merging ahead of them.",
          handbookSection: "Sharing the Road — Large Trucks",
          difficulty: 2,
          translations: [
            { language: "zh", content: "大型牵引式挂车的前方盲区大约有多大？", explanation: "牵引式挂车在驾驶室正前方有大约20英尺的前方盲区。驾驶员无法看到此区域内的车辆。避免在卡车前方加塞，并在卡车前方并道时留出额外空间。" },
            { language: "es", content: "¿Cuál es el tamaño aproximado del punto ciego delantero de un camión tractor con remolque grande?", explanation: "Un camión tractor con remolque tiene un punto ciego delantero de aproximadamente 20 pies directamente frente a la cabina. El conductor no puede ver vehículos en esta zona. Evite cruzarse frente a camiones y deje espacio adicional al incorporarse delante de ellos." },
          ],
          options: [
            {
              content: "About 20 feet directly in front of the cab",
              isCorrect: true,
              translations: [
                { language: "zh", content: "驾驶室正前方约20英尺" },
                { language: "es", content: "Aproximadamente 20 pies directamente frente a la cabina" },
              ],
            },
            {
              content: "About 5 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "约5英尺" },
                { language: "es", content: "Aproximadamente 5 pies" },
              ],
            },
            {
              content: "About 50 feet",
              isCorrect: false,
              translations: [
                { language: "zh", content: "约50英尺" },
                { language: "es", content: "Aproximadamente 50 pies" },
              ],
            },
            {
              content: "There is no front blind spot",
              isCorrect: false,
              translations: [
                { language: "zh", content: "没有前方盲区" },
                { language: "es", content: "No hay punto ciego delantero" },
              ],
            },
          ],
        },
        {
          content: "Who is at fault in most fatal car-truck collisions?",
          explanation: "According to New York's driver manual, 60% of fatal car-truck crashes are caused by the car driver. The car driver is killed in about 4 out of 5 fatal car-truck collisions.",
          handbookSection: "Sharing the Road — Large Trucks",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在大多数致命的汽车与卡车碰撞事故中，谁有过错？", explanation: "根据纽约州驾驶员手册，60%的致命汽车与卡车碰撞事故是由汽车驾驶员造成的。在大约五分之四的致命汽车与卡车碰撞事故中，汽车驾驶员死亡。" },
            { language: "es", content: "¿Quién tiene la culpa en la mayoría de las colisiones fatales entre automóviles y camiones?", explanation: "Según el manual del conductor de Nueva York, el 60% de los choques fatales entre automóviles y camiones son causados por el conductor del automóvil. El conductor del automóvil muere en aproximadamente 4 de cada 5 colisiones fatales entre automóviles y camiones." },
          ],
          options: [
            {
              content: "The car driver — responsible for 60% of fatal car-truck crashes",
              isCorrect: true,
              translations: [
                { language: "zh", content: "汽车驾驶员——造成60%的致命汽车与卡车碰撞事故" },
                { language: "es", content: "El conductor del automóvil — responsable del 60% de los choques fatales entre automóviles y camiones" },
              ],
            },
            {
              content: "The truck driver — responsible for the majority of fatal crashes",
              isCorrect: false,
              translations: [
                { language: "zh", content: "卡车驾驶员——造成大多数致命碰撞事故" },
                { language: "es", content: "El conductor del camión — responsable de la mayoría de los choques fatales" },
              ],
            },
            {
              content: "Fault is equally shared in most cases",
              isCorrect: false,
              translations: [
                { language: "zh", content: "大多数情况下双方同等责任" },
                { language: "es", content: "La culpa se comparte por igual en la mayoría de los casos" },
              ],
            },
            {
              content: "Road conditions — weather is the primary cause",
              isCorrect: false,
              translations: [
                { language: "zh", content: "道路状况——天气是主要原因" },
                { language: "es", content: "Las condiciones del camino — el clima es la causa principal" },
              ],
            },
          ],
        },
        {
          content: "What percentage of fatal U.S. motorcycle crashes involve a vehicle turning left?",
          explanation: "About 41% of fatal motorcycle crashes in the U.S. involve a vehicle making a left turn in front of the motorcyclist. Drivers should always check carefully for motorcycles before turning left.",
          handbookSection: "Sharing the Road — Motorcyclists",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在美国致命的摩托车事故中，有多少比例涉及车辆左转？", explanation: "在美国约41%的致命摩托车事故涉及车辆在摩托车手前方左转。驾驶员在左转前应始终仔细检查是否有摩托车。" },
            { language: "es", content: "¿Qué porcentaje de accidentes fatales de motocicleta en EE.UU. involucra un vehículo girando a la izquierda?", explanation: "Aproximadamente el 41% de los accidentes fatales de motocicleta en EE.UU. involucran un vehículo que gira a la izquierda frente al motociclista. Los conductores siempre deben verificar cuidadosamente si hay motocicletas antes de girar a la izquierda." },
          ],
          options: [
            {
              content: "About 41%",
              isCorrect: true,
              translations: [
                { language: "zh", content: "约41%" },
                { language: "es", content: "Aproximadamente 41%" },
              ],
            },
            {
              content: "About 25%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "约25%" },
                { language: "es", content: "Aproximadamente 25%" },
              ],
            },
            {
              content: "About 60%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "约60%" },
                { language: "es", content: "Aproximadamente 60%" },
              ],
            },
            {
              content: "About 15%",
              isCorrect: false,
              translations: [
                { language: "zh", content: "约15%" },
                { language: "es", content: "Aproximadamente 15%" },
              ],
            },
          ],
        },
        {
          content: "Can a motorcycle and a car share the same lane at the same time?",
          explanation: "No. Cars and motorcycles cannot share the same lane. However, two motorcycles may ride side by side within a lane. Motorcycles are entitled to the full use of a lane.",
          handbookSection: "Sharing the Road — Motorcyclists",
          difficulty: 1,
          translations: [
            { language: "zh", content: "摩托车和汽车可以同时共用同一车道吗？", explanation: "不可以。汽车和摩托车不能共用同一车道。但是，两辆摩托车可以在一个车道内并排行驶。摩托车有权完整使用一个车道。" },
            { language: "es", content: "¿Puede una motocicleta y un automóvil compartir el mismo carril al mismo tiempo?", explanation: "No. Los automóviles y las motocicletas no pueden compartir el mismo carril. Sin embargo, dos motocicletas pueden circular lado a lado dentro de un carril. Las motocicletas tienen derecho al uso completo de un carril." },
          ],
          options: [
            {
              content: "No — motorcycles are entitled to the full use of their lane",
              isCorrect: true,
              translations: [
                { language: "zh", content: "不可以——摩托车有权完整使用其车道" },
                { language: "es", content: "No — las motocicletas tienen derecho al uso completo de su carril" },
              ],
            },
            {
              content: "Yes — motorcycles can share a lane with one car",
              isCorrect: false,
              translations: [
                { language: "zh", content: "可以——摩托车可以与一辆汽车共用车道" },
                { language: "es", content: "Sí — las motocicletas pueden compartir un carril con un automóvil" },
              ],
            },
            {
              content: "Yes — if the motorcycle rides on the right edge of the lane",
              isCorrect: false,
              translations: [
                { language: "zh", content: "可以——如果摩托车在车道右侧边缘行驶" },
                { language: "es", content: "Sí — si la motocicleta circula en el borde derecho del carril" },
              ],
            },
            {
              content: "Yes — but only on highways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "可以——但仅限于高速公路" },
                { language: "es", content: "Sí — pero solo en autopistas" },
              ],
            },
          ],
        },
        {
          content: "What does an orange reflective triangle on the back of a vehicle mean?",
          explanation: "An orange reflective triangle identifies a slow-moving vehicle such as a farm tractor, animal-drawn vehicle, or construction equipment. These vehicles travel at 25 mph or less and must display this symbol.",
          handbookSection: "Sharing the Road — Slow-Moving Vehicles",
          difficulty: 1,
          translations: [
            { language: "zh", content: "车辆后部的橙色反光三角标志是什么意思？", explanation: "橙色反光三角标志表示慢行车辆，如农用拖拉机、畜力车或工程机械。这些车辆行驶速度在每小时25英里或以下，必须展示此标志。" },
            { language: "es", content: "¿Qué significa un triángulo reflectante naranja en la parte trasera de un vehículo?", explanation: "Un triángulo reflectante naranja identifica un vehículo de movimiento lento como un tractor agrícola, vehículo tirado por animales o equipo de construcción. Estos vehículos viajan a 25 mph o menos y deben mostrar este símbolo." },
          ],
          options: [
            {
              content: "The vehicle is a slow-moving vehicle (25 mph or less)",
              isCorrect: true,
              translations: [
                { language: "zh", content: "该车辆是慢行车辆（每小时25英里或以下）" },
                { language: "es", content: "El vehículo es un vehículo de movimiento lento (25 mph o menos)" },
              ],
            },
            {
              content: "The vehicle is a construction vehicle entering a work zone",
              isCorrect: false,
              translations: [
                { language: "zh", content: "该车辆是进入施工区域的工程车辆" },
                { language: "es", content: "El vehículo es un vehículo de construcción entrando a una zona de trabajo" },
              ],
            },
            {
              content: "The vehicle is an emergency response unit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "该车辆是紧急救援单位" },
                { language: "es", content: "El vehículo es una unidad de respuesta de emergencia" },
              ],
            },
            {
              content: "The vehicle is towing another vehicle",
              isCorrect: false,
              translations: [
                { language: "zh", content: "该车辆正在拖曳另一辆车" },
                { language: "es", content: "El vehículo está remolcando otro vehículo" },
              ],
            },
          ],
        },
        {
          content: "What is the maximum speed for a Class B limited-use motorcycle (moped) in New York?",
          explanation: "A Class B limited-use motorcycle (moped) has a maximum speed of 21 to 30 mph. Class B mopeds must travel in the right lane only. Class A mopeds can travel 31 to 40 mph in any lane.",
          handbookSection: "Sharing the Road — Mopeds",
          difficulty: 3,
          translations: [
            { language: "zh", content: "纽约州B级限制使用摩托车（助力车）的最高速度是多少？", explanation: "B级限制使用摩托车（助力车）的最高速度为每小时21至30英里。B级助力车必须仅在右侧车道行驶。A级助力车可以以每小时31至40英里的速度在任何车道行驶。" },
            { language: "es", content: "¿Cuál es la velocidad máxima para una motocicleta de uso limitado Clase B (ciclomotor) en Nueva York?", explanation: "Una motocicleta de uso limitado Clase B (ciclomotor) tiene una velocidad máxima de 21 a 30 mph. Los ciclomotores Clase B deben viajar solo en el carril derecho. Los ciclomotores Clase A pueden viajar de 31 a 40 mph en cualquier carril." },
          ],
          options: [
            {
              content: "21 to 30 mph, right lane only",
              isCorrect: true,
              translations: [
                { language: "zh", content: "每小时21至30英里，仅限右侧车道" },
                { language: "es", content: "21 a 30 mph, solo carril derecho" },
              ],
            },
            {
              content: "20 mph or less, right lane only",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时20英里或以下，仅限右侧车道" },
                { language: "es", content: "20 mph o menos, solo carril derecho" },
              ],
            },
            {
              content: "31 to 40 mph, any lane",
              isCorrect: false,
              translations: [
                { language: "zh", content: "每小时31至40英里，任何车道" },
                { language: "es", content: "31 a 40 mph, cualquier carril" },
              ],
            },
            {
              content: "Up to 45 mph with a special permit",
              isCorrect: false,
              translations: [
                { language: "zh", content: "持特别许可证最高每小时45英里" },
                { language: "es", content: "Hasta 45 mph con un permiso especial" },
              ],
            },
          ],
        },
        {
          content: "What must you do before backing your vehicle in a parking area?",
          explanation: "Before backing up, you must physically check behind your vehicle. Children and small objects are often in blind spots that mirrors cannot show. Always turn to look behind you before backing.",
          handbookSection: "Sharing the Road — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在停车场倒车前您必须做什么？", explanation: "倒车前，您必须亲自检查车辆后方。儿童和小物体通常位于后视镜无法显示的盲区中。倒车前务必转身查看后方。" },
            { language: "es", content: "¿Qué debe hacer antes de retroceder su vehículo en un área de estacionamiento?", explanation: "Antes de retroceder, debe verificar físicamente detrás de su vehículo. Los niños y objetos pequeños a menudo están en puntos ciegos que los espejos no pueden mostrar. Siempre gire para mirar detrás de usted antes de retroceder." },
          ],
          options: [
            {
              content: "Physically check behind the vehicle before moving",
              isCorrect: true,
              translations: [
                { language: "zh", content: "移动前亲自检查车辆后方" },
                { language: "es", content: "Verificar físicamente detrás del vehículo antes de moverse" },
              ],
            },
            {
              content: "Sound your horn twice then proceed slowly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "按两次喇叭然后缓慢行驶" },
                { language: "es", content: "Tocar la bocina dos veces y luego proceder lentamente" },
              ],
            },
            {
              content: "Check only your rearview mirror",
              isCorrect: false,
              translations: [
                { language: "zh", content: "仅检查后视镜" },
                { language: "es", content: "Verificar solo el espejo retrovisor" },
              ],
            },
            {
              content: "Turn on your hazard lights and back immediately",
              isCorrect: false,
              translations: [
                { language: "zh", content: "打开危险警示灯后立即倒车" },
                { language: "es", content: "Encender las luces de emergencia y retroceder inmediatamente" },
              ],
            },
          ],
        },
        {
          content: "When passing a horse and rider on the road, what should you NOT do?",
          explanation: "When approaching or passing a horse and rider, it is illegal to sound your horn. Sudden loud noises can frighten horses and cause dangerous situations. Always pass slowly and quietly.",
          handbookSection: "Sharing the Road — Horse Riders",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在道路上超越马匹和骑手时，您不应该做什么？", explanation: "当接近或超越马匹和骑手时，鸣喇叭是违法的。突然的巨大噪音可能会惊吓马匹并造成危险情况。请始终缓慢、安静地通过。" },
            { language: "es", content: "Al pasar a un caballo y su jinete en la carretera, ¿qué NO debe hacer?", explanation: "Al acercarse o pasar a un caballo y su jinete, es ilegal tocar la bocina. Los ruidos fuertes repentinos pueden asustar a los caballos y causar situaciones peligrosas. Siempre pase lenta y silenciosamente." },
          ],
          options: [
            {
              content: "Sound your horn — it is illegal to honk when passing horses",
              isCorrect: true,
              translations: [
                { language: "zh", content: "鸣喇叭——超越马匹时鸣喇叭是违法的" },
                { language: "es", content: "Tocar la bocina — es ilegal tocar la bocina al pasar caballos" },
              ],
            },
            {
              content: "Slow down and pass carefully",
              isCorrect: false,
              translations: [
                { language: "zh", content: "减速并小心通过" },
                { language: "es", content: "Reducir la velocidad y pasar con cuidado" },
              ],
            },
            {
              content: "Move to the center of the road for more clearance",
              isCorrect: false,
              translations: [
                { language: "zh", content: "移至道路中央以获得更多间距" },
                { language: "es", content: "Moverse al centro de la carretera para más espacio" },
              ],
            },
            {
              content: "Flash your headlights to alert the rider",
              isCorrect: false,
              translations: [
                { language: "zh", content: "闪烁前灯提醒骑手" },
                { language: "es", content: "Hacer parpadear las luces delanteras para alertar al jinete" },
              ],
            },
          ],
        },
        {
          content: "When an ATV or snowmobile crosses a highway, what must the operator do?",
          explanation: "ATVs and snowmobiles may legally cross highways. Before crossing, the operator must stop and yield to all highway traffic. They must also cross at a 90-degree angle to the road.",
          handbookSection: "Sharing the Road — ATVs & Snowmobiles",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当全地形车或雪地摩托穿越公路时，操作员必须做什么？", explanation: "全地形车和雪地摩托可以合法穿越公路。穿越前，操作员必须停车并让行给所有公路交通。他们还必须以90度角穿越道路。" },
            { language: "es", content: "Cuando un ATV o moto de nieve cruza una carretera, ¿qué debe hacer el operador?", explanation: "Los ATVs y motos de nieve pueden cruzar carreteras legalmente. Antes de cruzar, el operador debe detenerse y ceder el paso a todo el tráfico de la carretera. También deben cruzar en un ángulo de 90 grados con respecto a la carretera." },
          ],
          options: [
            {
              content: "Stop, yield to traffic, and cross at a 90-degree angle",
              isCorrect: true,
              translations: [
                { language: "zh", content: "停车、让行给交通车辆，并以90度角穿越" },
                { language: "es", content: "Detenerse, ceder el paso al tráfico y cruzar en un ángulo de 90 grados" },
              ],
            },
            {
              content: "Cross at any angle if no traffic is visible",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果没有可见车辆可以任意角度穿越" },
                { language: "es", content: "Cruzar en cualquier ángulo si no hay tráfico visible" },
              ],
            },
            {
              content: "Sound the horn and cross quickly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "鸣喇叭后快速穿越" },
                { language: "es", content: "Tocar la bocina y cruzar rápidamente" },
              ],
            },
            {
              content: "ATVs and snowmobiles cannot legally cross public highways",
              isCorrect: false,
              translations: [
                { language: "zh", content: "全地形车和雪地摩托不能合法穿越公共公路" },
                { language: "es", content: "Los ATVs y motos de nieve no pueden cruzar legalmente carreteras públicas" },
              ],
            },
          ],
        },
        {
          content: "When passing a bicycle rider on the road, what should you do?",
          explanation: "When passing a cyclist, give extra space and reduce your speed. Check blind spots carefully before moving back into the lane. Cyclists are entitled to use the road and you must pass them safely.",
          handbookSection: "Sharing the Road — Bicyclists",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在道路上超越自行车骑行者时，您应该怎么做？", explanation: "超越骑行者时，应留出额外空间并降低速度。在返回车道前仔细检查盲区。骑行者有权使用道路，您必须安全地超越他们。" },
            { language: "es", content: "Al pasar a un ciclista en la carretera, ¿qué debe hacer?", explanation: "Al pasar a un ciclista, dé espacio adicional y reduzca su velocidad. Verifique los puntos ciegos cuidadosamente antes de volver a su carril. Los ciclistas tienen derecho a usar la carretera y usted debe pasarlos de manera segura." },
          ],
          options: [
            {
              content: "Give extra space, reduce speed, and check blind spots",
              isCorrect: true,
              translations: [
                { language: "zh", content: "留出额外空间、降低速度并检查盲区" },
                { language: "es", content: "Dar espacio adicional, reducir la velocidad y verificar los puntos ciegos" },
              ],
            },
            {
              content: "Sound the horn to alert the cyclist and pass quickly",
              isCorrect: false,
              translations: [
                { language: "zh", content: "鸣喇叭提醒骑行者并快速通过" },
                { language: "es", content: "Tocar la bocina para alertar al ciclista y pasar rápidamente" },
              ],
            },
            {
              content: "Pass in the same lane — cyclists must stay to the right",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在同一车道内超越——骑行者必须靠右行驶" },
                { language: "es", content: "Pasar en el mismo carril — los ciclistas deben mantenerse a la derecha" },
              ],
            },
            {
              content: "Wait behind the cyclist until they leave the road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在骑行者身后等待直到他们离开道路" },
                { language: "es", content: "Esperar detrás del ciclista hasta que abandone la carretera" },
              ],
            },
          ],
        },
        {
          content: "Where must bicycle riders travel when a bicycle lane is available?",
          explanation: "Cyclists must use bicycle lanes when they are available. If no bicycle lane exists, cyclists must ride near the right curb or edge of the road. This helps separate bicycle and motor vehicle traffic.",
          handbookSection: "Sharing the Road — Bicyclists",
          difficulty: 1,
          translations: [
            { language: "zh", content: "当有自行车道可用时，自行车骑行者必须在哪里行驶？", explanation: "当有自行车道可用时，骑行者必须使用自行车道。如果没有自行车道，骑行者必须靠近右侧路缘或道路边缘行驶。这有助于分离自行车和机动车交通。" },
            { language: "es", content: "¿Dónde deben circular los ciclistas cuando hay un carril para bicicletas disponible?", explanation: "Los ciclistas deben usar los carriles para bicicletas cuando estén disponibles. Si no existe un carril para bicicletas, los ciclistas deben circular cerca del bordillo derecho o el borde de la carretera. Esto ayuda a separar el tráfico de bicicletas y vehículos motorizados." },
          ],
          options: [
            {
              content: "In the bicycle lane; otherwise near the right curb or edge",
              isCorrect: true,
              translations: [
                { language: "zh", content: "在自行车道内；否则靠近右侧路缘或边缘" },
                { language: "es", content: "En el carril para bicicletas; de lo contrario, cerca del bordillo o borde derecho" },
              ],
            },
            {
              content: "In the center of the travel lane for safety",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在行车道中央以确保安全" },
                { language: "es", content: "En el centro del carril de circulación por seguridad" },
              ],
            },
            {
              content: "On the sidewalk if one is present",
              isCorrect: false,
              translations: [
                { language: "zh", content: "如果有人行道则在人行道上" },
                { language: "es", content: "En la acera si hay una presente" },
              ],
            },
            {
              content: "In any lane they choose for visibility",
              isCorrect: false,
              translations: [
                { language: "zh", content: "在他们选择的任何车道内以提高能见度" },
                { language: "es", content: "En cualquier carril que elijan para mayor visibilidad" },
              ],
            },
          ],
        },
        {
          content: "When a driver in New York is involved in a crash that results in death or serious injury, within how many days must a crash report be filed with the DMV?",
          explanation: "New York law requires that crashes causing death or serious injury be reported to the DMV within 10 days. The report must be filed using Form MV-104C, which is available at motor vehicle offices or online. Failure to file a crash report can result in an indefinite license suspension.",
          handbookSection: "Sharing the Road — Crash Reporting",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在纽约州，当驾驶员发生导致死亡或严重伤害的事故时，必须在多少天内向DMV提交事故报告？", explanation: "纽约州法律要求在事故造成死亡或严重伤害后10天内向DMV报告。报告必须使用MV-104C表格提交，该表格可在机动车办公室或网上获取。未提交事故报告可能导致驾照被无限期暂扣。" },
            { language: "es", content: "Cuando un conductor en Nueva York está involucrado en un accidente que resulta en muerte o lesiones graves, ¿dentro de cuántos días debe presentarse un informe de accidente ante el DMV?", explanation: "La ley de Nueva York requiere que los accidentes que causen muerte o lesiones graves sean reportados al DMV dentro de 10 días. El informe debe presentarse usando el Formulario MV-104C, disponible en las oficinas de vehículos de motor o en línea. No presentar un informe de accidente puede resultar en una suspensión indefinida de la licencia." },
          ],
          options: [
            {
              content: "Within 10 days",
              isCorrect: true,
              translations: [
                { language: "zh", content: "10天内" },
                { language: "es", content: "Dentro de 10 días" },
              ],
            },
            {
              content: "Within 24 hours",
              isCorrect: false,
              translations: [
                { language: "zh", content: "24小时内" },
                { language: "es", content: "Dentro de 24 horas" },
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
              content: "Within 5 business days",
              isCorrect: false,
              translations: [
                { language: "zh", content: "5个工作日内" },
                { language: "es", content: "Dentro de 5 días hábiles" },
              ],
            },
          ],
        },
        {
          content: "What must a driver do when approaching or passing a horse being ridden on the road in New York?",
          explanation: "New York law prohibits drivers from sounding the horn when approaching or passing a horse. Horse riders are subject to and protected by the rules of the road. Honking can startle a horse and cause a dangerous accident. Drivers should approach at an acceptable speed and maintain a safe distance.",
          handbookSection: "Sharing the Road — Horse Riders",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在纽约州，当驾驶员靠近或超过骑马者时必须怎么做？", explanation: "纽约州法律禁止驾驶员在靠近或超过马匹时按喇叭。骑马者受道路规则的约束和保护。按喇叭可能会惊吓马匹并引发危险事故。驾驶员应以适当的速度接近并保持安全距离。" },
            { language: "es", content: "¿Qué debe hacer un conductor cuando se acerca o pasa a un caballo montado en la carretera en Nueva York?", explanation: "La ley de Nueva York prohíbe a los conductores tocar el claxon cuando se acercan o pasan a un caballo. Los jinetes están sujetos a y protegidos por las reglas de tránsito. Tocar el claxon puede asustar a un caballo y causar un accidente peligroso. Los conductores deben acercarse a una velocidad aceptable y mantener una distancia segura." },
          ],
          options: [
            {
              content: "Approach at an acceptable speed and distance; do not sound the horn",
              isCorrect: true,
              translations: [
                { language: "zh", content: "以适当的速度和距离接近；不要按喇叭" },
                { language: "es", content: "Acercarse a una velocidad y distancia aceptables; no tocar el claxon" },
              ],
            },
            {
              content: "Sound the horn briefly to alert the rider you are passing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "短暂按喇叭提醒骑手你要超过" },
                { language: "es", content: "Tocar brevemente el claxon para alertar al jinete de que está pasando" },
              ],
            },
            {
              content: "Flash headlights to warn the rider before passing",
              isCorrect: false,
              translations: [
                { language: "zh", content: "超车前闪烁大灯提醒骑手" },
                { language: "es", content: "Destellar los faros para advertir al jinete antes de pasar" },
              ],
            },
            {
              content: "Stop completely and wait for the horse to leave the road",
              isCorrect: false,
              translations: [
                { language: "zh", content: "完全停车等待马匹离开道路" },
                { language: "es", content: "Detenerse completamente y esperar a que el caballo abandone la carretera" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
