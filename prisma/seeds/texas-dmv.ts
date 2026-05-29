/**
 * Texas DPS Driver's License Practice Questions
 * Sources: Texas Driver Handbook (DL-7, Jan 2026) + real DPS test patterns
 * Target: ~100 questions across 6 topics — English base + zh/es translations
 * Test format: 30 questions (2 sections × 15), 70% to pass per section
 */

export const texasDMV = {
  category: {
    name: "Texas Driver's License",
    nameEn: "Texas Driver's License",
    description: "Texas DPS Knowledge Test — 30 questions (2 sections of 15), 70% to pass each section",
    icon: "⭐",
    color: "#1D4ED8",
    hasAiTutor: false,
    translations: [
      {
        language: "zh",
        name: "德克萨斯州驾照笔试",
        description: "德克萨斯州 DPS 驾照知识考试 — 共 30 题（分 2 节，各 15 题），每节 70% 通过",
      },
      {
        language: "es",
        name: "Licencia de Conducir de Texas",
        description: "Examen de conocimientos del DPS de Texas — 30 preguntas (2 secciones de 15), 70% para aprobar cada sección",
      },
    ],
  },
  topics: [
    // ─── TOPIC 1: Road Signs & Markers ────────────────────────────────────────
    {
      name: "Road Signs & Markers",
      nameEn: "Road Signs & Markers",
      description: "Sign shapes, colors, regulatory signs, warning signs, guide signs, railroad signs",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "道路标志与标记", description: "标志形状、颜色、法规标志、警告标志、指引标志、铁路标志" },
        { language: "es", name: "Señales y Marcas Viales", description: "Formas y colores de señales, señales regulatorias, preventivas, informativas y ferroviarias" },
      ],
      questions: [
        {
          content: "What does an octagonal (eight-sided) red sign mean?",
          explanation: "A red octagon is exclusively used for STOP signs. You must come to a complete stop, check for pedestrians and cross traffic, and only proceed when it is safe.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "八边形（八角形）红色标志是什么意思？", explanation: "红色八角形标志专用于停车标志（STOP）。您必须完全停车，确认行人和横向交通情况，确认安全后方可继续行驶。" },
            { language: "es", content: "¿Qué significa una señal roja de forma octagonal (ocho lados)?", explanation: "El octágono rojo se usa exclusivamente para señales de ALTO (STOP). Debe detenerse por completo, verificar la presencia de peatones y tráfico cruzado, y avanzar solo cuando sea seguro." },
          ],
          options: [
            { content: "Slow down and yield to traffic", isCorrect: false, translations: [{ language: "zh", content: "减速并让行" }, { language: "es", content: "Reduzca la velocidad y ceda el paso" }] },
            { content: "Come to a complete stop", isCorrect: true, translations: [{ language: "zh", content: "完全停车" }, { language: "es", content: "Deténgase completamente" }] },
            { content: "Stop only if other vehicles are present", isCorrect: false, translations: [{ language: "zh", content: "只有在有其他车辆时才停车" }, { language: "es", content: "Deténgase solo si hay otros vehículos presentes" }] },
            { content: "Yield to pedestrians only", isCorrect: false, translations: [{ language: "zh", content: "仅让行人先行" }, { language: "es", content: "Ceda el paso solo a los peatones" }] },
          ],
        },
        {
          content: "A triangular sign with a red border and white background means:",
          explanation: "A downward-pointing triangle with a red border means YIELD. You must slow down and give the right-of-way to cross traffic and pedestrians before proceeding.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "红色边框、白色背景的三角形标志是什么意思？", explanation: "倒三角形红色边框标志表示「让行」（YIELD）。您必须减速，并让横向车流和行人先行后，方可继续通行。" },
            { language: "es", content: "Una señal triangular con borde rojo y fondo blanco significa:", explanation: "Un triángulo invertido con borde rojo significa CEDA EL PASO (YIELD). Debe reducir la velocidad y dar preferencia al tráfico cruzado y a los peatones antes de continuar." },
          ],
          options: [
            { content: "Stop completely before proceeding", isCorrect: false, translations: [{ language: "zh", content: "完全停车后再继续行驶" }, { language: "es", content: "Detenerse completamente antes de continuar" }] },
            { content: "Slow down and yield to cross traffic and pedestrians", isCorrect: true, translations: [{ language: "zh", content: "减速并让横向车流和行人先行" }, { language: "es", content: "Reducir la velocidad y ceder el paso al tráfico cruzado y a los peatones" }] },
            { content: "Merge into the right lane", isCorrect: false, translations: [{ language: "zh", content: "并入右侧车道" }, { language: "es", content: "Incorporarse al carril derecho" }] },
            { content: "Speed up to match traffic flow", isCorrect: false, translations: [{ language: "zh", content: "加速以匹配车流速度" }, { language: "es", content: "Acelerar para igualar la velocidad del tráfico" }] },
          ],
        },
        {
          content: "What color are warning signs in Texas?",
          explanation: "Warning signs in Texas (and throughout the US) are diamond-shaped with a yellow background and black symbols or text. They alert drivers to upcoming hazards or changes in road conditions.",
          handbookSection: "Road Signs — Warning Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "德克萨斯州的警告标志是什么颜色？", explanation: "德克萨斯州（以及全美）的警告标志为菱形，黄色底配黑色符号或文字，用于提醒驾驶人前方存在危险或路况变化。" },
            { language: "es", content: "En Texas, ¿de qué color son las señales preventivas?", explanation: "Las señales preventivas en Texas (y en todo EE. UU.) tienen forma de rombo con fondo amarillo y símbolos o texto negro. Alertan a los conductores sobre peligros próximos o cambios en las condiciones de la vía." },
          ],
          options: [
            { content: "Red and white", isCorrect: false, translations: [{ language: "zh", content: "红白色" }, { language: "es", content: "Rojo y blanco" }] },
            { content: "Green and white", isCorrect: false, translations: [{ language: "zh", content: "绿白色" }, { language: "es", content: "Verde y blanco" }] },
            { content: "Yellow with black symbols", isCorrect: true, translations: [{ language: "zh", content: "黄色底配黑色符号" }, { language: "es", content: "Amarillo con símbolos negros" }] },
            { content: "Orange and black", isCorrect: false, translations: [{ language: "zh", content: "橙黑色" }, { language: "es", content: "Naranja y negro" }] },
          ],
        },
        {
          content: "A diamond-shaped orange sign with black text indicates:",
          explanation: "Orange diamond-shaped signs are used in construction and maintenance zones. They warn drivers of workers, equipment, and changed road conditions ahead. Fines are typically doubled in these areas.",
          handbookSection: "Road Signs — Construction Zone Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "黑色文字的橙色菱形标志表示：", explanation: "橙色菱形标志用于施工和道路维护区域，提醒驾驶人前方有工人、设备及改变的路况。此类区域罚款通常加倍。" },
            { language: "es", content: "Una señal en forma de rombo de color naranja con texto negro indica:", explanation: "Las señales romboidales de color naranja se usan en zonas de construcción y mantenimiento vial. Advierten a los conductores sobre la presencia de trabajadores, equipos y cambios en las condiciones de la vía. Las multas generalmente se duplican en estas zonas." },
          ],
          options: [
            { content: "A school zone ahead", isCorrect: false, translations: [{ language: "zh", content: "前方为学区" }, { language: "es", content: "Una zona escolar adelante" }] },
            { content: "A railroad crossing", isCorrect: false, translations: [{ language: "zh", content: "前方有铁路道口" }, { language: "es", content: "Un cruce de ferrocarril" }] },
            { content: "A construction or work zone ahead", isCorrect: true, translations: [{ language: "zh", content: "前方为施工或作业区" }, { language: "es", content: "Una zona de construcción o trabajos viales adelante" }] },
            { content: "A detour route", isCorrect: false, translations: [{ language: "zh", content: "绕行路线" }, { language: "es", content: "Una ruta de desvío" }] },
          ],
        },
        {
          content: "What shape is a railroad crossing warning sign?",
          explanation: "The advance warning sign for a railroad crossing is round (circular) with a yellow background and an X symbol with the letters 'RR'. This unique shape is used only for railroad crossings.",
          handbookSection: "Road Signs — Warning Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "铁路道口预警标志是什么形状？", explanation: "铁路道口预警标志为圆形，黄色底配「X」符号及「RR」字样。这种独特形状仅用于铁路道口警告。" },
            { language: "es", content: "¿Qué forma tiene la señal de advertencia anticipada de un cruce de ferrocarril?", explanation: "La señal de advertencia anticipada de un cruce de ferrocarril es circular, con fondo amarillo y un símbolo de X con las letras \"RR\". Esta forma única se usa exclusivamente para los cruces ferroviarios." },
          ],
          options: [
            { content: "Diamond", isCorrect: false, translations: [{ language: "zh", content: "菱形" }, { language: "es", content: "Rombo" }] },
            { content: "Square", isCorrect: false, translations: [{ language: "zh", content: "正方形" }, { language: "es", content: "Cuadrado" }] },
            { content: "Round", isCorrect: true, translations: [{ language: "zh", content: "圆形" }, { language: "es", content: "Redonda" }] },
            { content: "Pentagon", isCorrect: false, translations: [{ language: "zh", content: "五边形" }, { language: "es", content: "Pentágono" }] },
          ],
        },
        {
          content: "A five-sided (pentagon-shaped) sign indicates:",
          explanation: "Pentagon-shaped signs are used exclusively for school zones and school crossings. Their unique shape lets drivers recognize them even from a distance before reading the text.",
          handbookSection: "Road Signs — Warning Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "五边形（五角形）标志表示：", explanation: "五边形标志专用于学区和学校人行横道。其独特形状使驾驶人即使在远距离、未能读清文字时也能辨识。" },
            { language: "es", content: "Una señal de cinco lados (forma de pentágono) indica:", explanation: "Las señales pentagonales se usan exclusivamente para zonas escolares y cruces peatonales escolares. Su forma única permite que los conductores las reconozcan desde lejos, incluso antes de leer el texto." },
          ],
          options: [
            { content: "A hospital zone", isCorrect: false, translations: [{ language: "zh", content: "医院区域" }, { language: "es", content: "Una zona hospitalaria" }] },
            { content: "A school zone or school crossing", isCorrect: true, translations: [{ language: "zh", content: "学区或学校人行横道" }, { language: "es", content: "Una zona escolar o cruce escolar" }] },
            { content: "A no-passing zone", isCorrect: false, translations: [{ language: "zh", content: "禁止超车区" }, { language: "es", content: "Una zona de prohibición de adelantamiento" }] },
            { content: "A construction zone", isCorrect: false, translations: [{ language: "zh", content: "施工区" }, { language: "es", content: "Una zona de construcción" }] },
          ],
        },
        {
          content: "What do green signs on a highway primarily provide?",
          explanation: "Green signs are guide signs that provide directional and distance information, such as highway names, exit numbers, distances to cities, and mileage. They help drivers navigate and plan route changes.",
          handbookSection: "Road Signs — Guide Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "高速公路上的绿色标志主要提供：", explanation: "绿色标志为指引标志，提供方向和距离信息，如高速公路名称、出口编号、距各城市的里程等，帮助驾驶人导航和规划路线。" },
            { language: "es", content: "¿Qué información proporcionan principalmente las señales verdes en una autopista?", explanation: "Las señales verdes son señales informativas que proporcionan dirección y distancia, como nombres de autopistas, números de salidas, distancias a ciudades y kilometraje. Ayudan a los conductores a navegar y planificar cambios de ruta." },
          ],
          options: [
            { content: "Speed limit information", isCorrect: false, translations: [{ language: "zh", content: "限速信息" }, { language: "es", content: "Información sobre límites de velocidad" }] },
            { content: "Hazard warnings", isCorrect: false, translations: [{ language: "zh", content: "危险警告" }, { language: "es", content: "Advertencias de peligro" }] },
            { content: "Directional and distance information", isCorrect: true, translations: [{ language: "zh", content: "方向和距离信息" }, { language: "es", content: "Información de dirección y distancia" }] },
            { content: "Construction zone warnings", isCorrect: false, translations: [{ language: "zh", content: "施工区警告" }, { language: "es", content: "Advertencias de zonas de construcción" }] },
          ],
        },
        {
          content: "A blue rectangular sign on the highway typically indicates:",
          explanation: "Blue signs provide information about motorist services available nearby, such as gas stations, food, lodging, hospitals, and rest areas. They help travelers locate essential services at upcoming exits.",
          handbookSection: "Road Signs — Service Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "高速公路上的蓝色矩形标志通常表示：", explanation: "蓝色标志提供附近驾驶人服务信息，如加油站、餐饮、住宿、医院和休息区，帮助旅行者找到前方出口处的必要服务设施。" },
            { language: "es", content: "Una señal rectangular azul en la autopista generalmente indica:", explanation: "Las señales azules informan sobre los servicios para automovilistas disponibles en las cercanías, como gasolineras, restaurantes, hospedaje, hospitales y áreas de descanso. Ayudan a los viajeros a localizar servicios esenciales en las próximas salidas." },
          ],
          options: [
            { content: "State park or recreational areas", isCorrect: false, translations: [{ language: "zh", content: "州立公园或休闲区" }, { language: "es", content: "Parques estatales o áreas recreativas" }] },
            { content: "Upcoming road hazards", isCorrect: false, translations: [{ language: "zh", content: "前方路况危险" }, { language: "es", content: "Peligros viales próximos" }] },
            { content: "Motorist services such as gas, food, or lodging", isCorrect: true, translations: [{ language: "zh", content: "附近有加油站、餐饮或住宿等驾驶人服务" }, { language: "es", content: "Servicios para automovilistas como gasolina, comida u hospedaje" }] },
            { content: "Speed restrictions in effect", isCorrect: false, translations: [{ language: "zh", content: "当前限速规定" }, { language: "es", content: "Restricciones de velocidad vigentes" }] },
          ],
        },
        {
          content: "What does a white rectangular sign with black text typically display?",
          explanation: "White rectangular signs are regulatory signs. They display rules that drivers must obey, such as speed limits, turn restrictions, lane use rules, and parking regulations.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "黑色文字的白色矩形标志通常显示：", explanation: "白色矩形标志为法规标志，显示驾驶人必须遵守的规则，如限速、转向限制、车道使用规定和停车法规。" },
            { language: "es", content: "¿Qué muestra generalmente una señal rectangular blanca con texto negro?", explanation: "Las señales rectangulares blancas son señales regulatorias. Muestran reglas que los conductores deben obedecer, como límites de velocidad, restricciones de giro, reglas de uso de carriles y reglamentos de estacionamiento." },
          ],
          options: [
            { content: "Distance to the next city", isCorrect: false, translations: [{ language: "zh", content: "距下一城市的距离" }, { language: "es", content: "Distancia a la siguiente ciudad" }] },
            { content: "Laws or regulations drivers must obey", isCorrect: true, translations: [{ language: "zh", content: "驾驶人必须遵守的法律或法规" }, { language: "es", content: "Leyes o reglamentos que los conductores deben obedecer" }] },
            { content: "Road hazard warnings", isCorrect: false, translations: [{ language: "zh", content: "道路危险警告" }, { language: "es", content: "Advertencias de peligros viales" }] },
            { content: "Service area information", isCorrect: false, translations: [{ language: "zh", content: "服务区信息" }, { language: "es", content: "Información sobre áreas de servicio" }] },
          ],
        },
        {
          content: "A yellow pennant-shaped sign on the left side of the road means:",
          explanation: "A pennant (triangular) shape is used only for NO PASSING ZONE signs. It is always placed on the left side of the road to warn drivers they are entering a zone where passing is prohibited.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "道路左侧的黄色三角旗形标志表示：", explanation: "三角旗形专用于「禁止超车区」标志，始终设置在道路左侧，提醒驾驶人已进入禁止超车路段。" },
            { language: "es", content: "Una señal amarilla en forma de banderín (triangular) al lado izquierdo de la carretera significa:", explanation: "La forma de banderín se usa únicamente para señales de ZONA DE NO REBASE. Siempre se coloca al lado izquierdo de la carretera para advertir a los conductores que están entrando a una zona donde está prohibido adelantar." },
          ],
          options: [
            { content: "Merge ahead", isCorrect: false, translations: [{ language: "zh", content: "前方合流" }, { language: "es", content: "Incorporación adelante" }] },
            { content: "Divided highway begins", isCorrect: false, translations: [{ language: "zh", content: "分隔式公路起点" }, { language: "es", content: "Inicio de carretera dividida" }] },
            { content: "No passing zone", isCorrect: true, translations: [{ language: "zh", content: "禁止超车区" }, { language: "es", content: "Zona de prohibición de adelantamiento" }] },
            { content: "Lane ends ahead", isCorrect: false, translations: [{ language: "zh", content: "前方车道减少" }, { language: "es", content: "Carril termina adelante" }] },
          ],
        },
        {
          content: "What does a sign showing two arrows pointing in opposite directions (one up, one down) in the same lane indicate?",
          explanation: "This sign indicates a two-way traffic lane where vehicles travel in both directions using the same lane — typically a center turn lane. Drivers must use it only for turning and must not use it as a travel lane.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 3,
          translations: [
            { language: "zh", content: "同一车道内显示两个方向相反的箭头（一上一下）的标志表示：", explanation: "此标志表示该车道为双向共用的中央转弯车道，两个方向的车辆均可使用。驾驶人只能用于转弯，不得将其作为行驶车道使用。" },
            { language: "es", content: "Una señal que muestra dos flechas apuntando en direcciones opuestas (una hacia arriba y una hacia abajo) en el mismo carril indica:", explanation: "Esta señal indica un carril central de giro compartido donde los vehículos circulan en ambas direcciones — típicamente un carril de vuelta central. Los conductores deben usarlo solo para girar y no como carril de circulación." },
          ],
          options: [
            { content: "A one-way road ahead", isCorrect: false, translations: [{ language: "zh", content: "前方为单行道" }, { language: "es", content: "Una carretera de sentido único adelante" }] },
            { content: "A shared center turn lane used by traffic in both directions", isCorrect: true, translations: [{ language: "zh", content: "双向车辆共用的中央转弯车道" }, { language: "es", content: "Un carril central compartido de vuelta utilizado por el tráfico en ambas direcciones" }] },
            { content: "A lane reserved for HOV vehicles", isCorrect: false, translations: [{ language: "zh", content: "高乘载专用车道（HOV）" }, { language: "es", content: "Un carril reservado para vehículos de alta ocupación (HOV)" }] },
            { content: "A U-turn is permitted", isCorrect: false, translations: [{ language: "zh", content: "此处允许掉头" }, { language: "es", content: "Se permite el retorno en U" }] },
          ],
        },
        {
          content: "A sign showing a truck on a downward slope warns you to:",
          explanation: "This warning sign alerts drivers — especially trucks — of a steep downhill grade ahead. Drivers should shift to a lower gear before descending to maintain control and avoid overheating brakes.",
          handbookSection: "Road Signs — Warning Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "显示一辆卡车在下坡路段行驶的标志，提醒您：", explanation: "此警告标志提醒驾驶人（尤其是卡车驾驶人）前方有陡峭下坡路段。下坡前应换入低速档，以保持对车辆的控制并避免制动器过热。" },
            { language: "es", content: "Una señal que muestra un camión en una pendiente descendente le advierte que:", explanation: "Esta señal preventiva alerta a los conductores — especialmente a los camioneros — sobre una pendiente pronunciada descendente adelante. Los conductores deben cambiar a una marcha baja antes de descender para mantener el control y evitar el sobrecalentamiento de los frenos." },
          ],
          options: [
            { content: "Watch for trucks entering from a truck stop", isCorrect: false, translations: [{ language: "zh", content: "注意从卡车停靠站驶入的卡车" }, { language: "es", content: "Esté atento a camiones que ingresan desde una parada de camiones" }] },
            { content: "Prepare for a steep downhill grade and use lower gears", isCorrect: true, translations: [{ language: "zh", content: "前方有陡下坡，请换低速档行驶" }, { language: "es", content: "Se prepare para una pendiente pronunciada hacia abajo y use marchas bajas" }] },
            { content: "A truck weigh station is ahead", isCorrect: false, translations: [{ language: "zh", content: "前方有卡车称重站" }, { language: "es", content: "Hay una estación de pesaje de camiones adelante" }] },
            { content: "Trucks are prohibited in the right lane", isCorrect: false, translations: [{ language: "zh", content: "右侧车道禁止卡车通行" }, { language: "es", content: "Los camiones están prohibidos en el carril derecho" }] },
          ],
        },
        {
          content: "What does a flashing yellow X signal above a lane on a managed lane or highway mean?",
          explanation: "A flashing yellow X above a lane means the lane is open but is about to close, or requires caution — for example, it is a reversible lane that is transitioning. Prepare to merge out of that lane.",
          handbookSection: "Road Signs — Lane Control Signals",
          difficulty: 3,
          translations: [
            { language: "zh", content: "在管控车道或公路上，车道上方闪烁的黄色「X」信号表示：", explanation: "车道上方闪烁的黄色「X」表示该车道开放但即将关闭，或需要谨慎通行（例如可变方向车道正在切换）。请准备驶出该车道。" },
            { language: "es", content: "Una señal de X amarilla intermitente sobre un carril en una vía controlada significa:", explanation: "Una X amarilla intermitente sobre un carril significa que el carril está abierto pero está a punto de cerrarse, o que se requiere precaución — por ejemplo, es un carril reversible que está cambiando de dirección. Prepárese para salir de ese carril." },
          ],
          options: [
            { content: "Lane is open and you may use it freely", isCorrect: false, translations: [{ language: "zh", content: "车道开放，可自由使用" }, { language: "es", content: "El carril está abierto y puede usarlo libremente" }] },
            { content: "Lane is closed — do not use it", isCorrect: false, translations: [{ language: "zh", content: "车道关闭，禁止使用" }, { language: "es", content: "El carril está cerrado — no lo use" }] },
            { content: "Use the lane with caution — it may be closing", isCorrect: true, translations: [{ language: "zh", content: "需谨慎使用该车道，车道可能即将关闭" }, { language: "es", content: "Use el carril con precaución — puede estar cerrándose" }] },
            { content: "HOV lane — eligible vehicles only", isCorrect: false, translations: [{ language: "zh", content: "高乘载专用车道，仅限符合条件的车辆" }, { language: "es", content: "Carril HOV — solo vehículos elegibles" }] },
          ],
        },
        {
          content: "What does a crossbuck sign (two white planks in an X shape) at a railroad crossing mean?",
          explanation: "A crossbuck sign is a regulatory sign at a railroad crossing. It means yield to trains. If multiple tracks exist, a sign below the crossbuck will state the number of tracks. You must yield and stop if a train is approaching.",
          handbookSection: "Road Signs — Railroad Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "铁路道口处的「交叉木」标志（两块白色木板呈X形交叉）表示：", explanation: "交叉木标志是铁路道口处的法规标志，意为让火车先行。若存在多条轨道，标志下方会注明轨道数量。如有火车驶近，必须停车让行。" },
            { language: "es", content: "Una señal de cruceta ferroviaria (dos tablas blancas en forma de X) en un cruce de ferrocarril significa:", explanation: "La señal de cruceta es una señal regulatoria en los cruces ferroviarios. Significa ceder el paso a los trenes. Si hay varias vías, una señal debajo de la cruceta indicará el número de vías. Debe ceder el paso y detenerse si se aproxima un tren." },
          ],
          options: [
            { content: "Stop completely regardless of conditions", isCorrect: false, translations: [{ language: "zh", content: "无论情况如何均须完全停车" }, { language: "es", content: "Detenerse completamente independientemente de las condiciones" }] },
            { content: "Yield to trains; stop if a train is approaching", isCorrect: true, translations: [{ language: "zh", content: "让火车先行；若有火车驶近须停车" }, { language: "es", content: "Ceda el paso a los trenes; deténgase si se aproxima uno" }] },
            { content: "The crossing is closed", isCorrect: false, translations: [{ language: "zh", content: "该道口已关闭" }, { language: "es", content: "El cruce está cerrado" }] },
            { content: "Cross quickly while no train is visible", isCorrect: false, translations: [{ language: "zh", content: "未见火车时可快速通过" }, { language: "es", content: "Cruce rápidamente si no hay trenes visibles" }] },
          ],
        },
        {
          content: "What does a white sign with 'WRONG WAY' in red letters mean?",
          explanation: "A WRONG WAY sign means you are traveling in the wrong direction on a one-way road or divided highway. You must stop immediately, back up if safe, and return to the correct direction of travel.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "红色字体写有「WRONG WAY」的白色标志是什么意思？", explanation: "「WRONG WAY」（逆行）标志表示您正在单行道或分隔式公路上逆向行驶。必须立即停车，在安全的情况下倒车，并驶回正确行驶方向。" },
            { language: "es", content: "¿Qué significa una señal blanca con las letras \"WRONG WAY\" en rojo?", explanation: "La señal de WRONG WAY significa que está viajando en la dirección incorrecta en una carretera de un solo sentido o en una autopista dividida. Debe detenerse de inmediato, retroceder si es seguro, y regresar a la dirección correcta de circulación." },
          ],
          options: [
            { content: "The road ahead is closed for construction", isCorrect: false, translations: [{ language: "zh", content: "前方道路因施工封闭" }, { language: "es", content: "La carretera adelante está cerrada por construcción" }] },
            { content: "You are driving against traffic — stop and return to the correct direction", isCorrect: true, translations: [{ language: "zh", content: "您正在逆向行驶——立即停车并返回正确方向" }, { language: "es", content: "Está conduciendo en sentido contrario — deténgase y regrese a la dirección correcta" }] },
            { content: "Slow down and merge left", isCorrect: false, translations: [{ language: "zh", content: "减速并向左并道" }, { language: "es", content: "Reduzca la velocidad y cambie al carril izquierdo" }] },
            { content: "U-turn permitted here", isCorrect: false, translations: [{ language: "zh", content: "此处允许掉头" }, { language: "es", content: "Se permite el retorno en U aquí" }] },
          ],
        },
        {
          content: "Brown signs with white text on highways are used to indicate:",
          explanation: "Brown signs are used to identify public recreation areas, national or state parks, historical sites, and scenic locations. They guide travelers to cultural and natural attractions.",
          handbookSection: "Road Signs — Guide Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "高速公路上白色文字的棕色标志用于标识：", explanation: "棕色标志用于标识公共休闲区、国家或州立公园、历史遗址及风景名胜，引导旅行者前往文化和自然景点。" },
            { language: "es", content: "Las señales de color café con texto blanco en las autopistas se usan para indicar:", explanation: "Las señales café se usan para identificar áreas recreativas públicas, parques nacionales o estatales, sitios históricos y lugares pintorescos. Guían a los viajeros hacia atracciones culturales y naturales." },
          ],
          options: [
            { content: "Detour routes", isCorrect: false, translations: [{ language: "zh", content: "绕行路线" }, { language: "es", content: "Rutas de desvío" }] },
            { content: "Emergency services", isCorrect: false, translations: [{ language: "zh", content: "紧急服务设施" }, { language: "es", content: "Servicios de emergencia" }] },
            { content: "Parks, recreation areas, or historical sites", isCorrect: true, translations: [{ language: "zh", content: "公园、休闲区或历史遗址" }, { language: "es", content: "Parques, áreas recreativas o sitios históricos" }] },
            { content: "Restricted military zones", isCorrect: false, translations: [{ language: "zh", content: "军事限制区" }, { language: "es", content: "Zonas militares restringidas" }] },
          ],
        },
        {
          content: "What does a 'DO NOT ENTER' sign (red circle with white horizontal bar) mean?",
          explanation: "A DO NOT ENTER sign means no vehicles may enter from that direction. It is placed at the wrong end of one-way streets or freeway off-ramps to prevent wrong-way entry.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 1,
          translations: [
            { language: "zh", content: "红圈白横杠的「禁止进入」（DO NOT ENTER）标志是什么意思？", explanation: "「禁止进入」标志（红圈内白色横杠）表示禁止任何车辆从该方向进入，通常设置在单行道或高速公路出口匝道的错误入口端，以防止逆向驶入。" },
            { language: "es", content: "¿Qué significa una señal de \"DO NOT ENTER\" (círculo rojo con barra blanca horizontal)?", explanation: "La señal de DO NOT ENTER significa que ningún vehículo puede entrar desde esa dirección. Se coloca en el extremo incorrecto de calles de un solo sentido o rampas de salida de autopistas para evitar el ingreso en sentido contrario." },
          ],
          options: [
            { content: "Road is closed for maintenance", isCorrect: false, translations: [{ language: "zh", content: "道路因维护封闭" }, { language: "es", content: "La carretera está cerrada por mantenimiento" }] },
            { content: "No vehicles may enter from this direction", isCorrect: true, translations: [{ language: "zh", content: "禁止车辆从该方向进入" }, { language: "es", content: "Ningún vehículo puede entrar desde esa dirección" }] },
            { content: "Trucks and large vehicles prohibited", isCorrect: false, translations: [{ language: "zh", content: "禁止卡车和大型车辆通行" }, { language: "es", content: "Camiones y vehículos grandes prohibidos" }] },
            { content: "No U-turns permitted", isCorrect: false, translations: [{ language: "zh", content: "禁止掉头" }, { language: "es", content: "No se permiten retornos en U" }] },
          ],
        },
        {
          content: "In Texas, what does a 'SPEED LIMIT 85' sign on a highway legally mean?",
          explanation: "Texas has the highest posted speed limit in the US at 85 mph, found on State Highway 130. When a posted speed limit sign shows 85, that is the maximum legal speed — not a suggestion. You must not exceed it.",
          handbookSection: "Road Signs — Speed Limit Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，公路上「限速 85 英里/小时」的标志在法律上意味着：", explanation: "德克萨斯州拥有全美最高的公路限速——85 英里/小时，位于 130 号州道。当限速标志显示 85 时，这是法定最高速度，而非建议速度，不得超过。" },
            { language: "es", content: "En Texas, ¿qué significa legalmente una señal de \"SPEED LIMIT 85\" en una autopista?", explanation: "Texas tiene el límite de velocidad publicado más alto de EE. UU., de 85 mph, en la Carretera Estatal 130. Cuando una señal de límite de velocidad muestra 85, esa es la velocidad máxima legal, no una sugerencia. No debe excederla." },
          ],
          options: [
            { content: "The safe speed under ideal conditions is 85, but you may go faster", isCorrect: false, translations: [{ language: "zh", content: "理想条件下的安全车速为 85 英里/小时，可超过该速度行驶" }, { language: "es", content: "La velocidad segura en condiciones ideales es 85, pero puede ir más rápido" }] },
            { content: "85 mph is the maximum legal speed you may drive", isCorrect: true, translations: [{ language: "zh", content: "85 英里/小时是法定最高行驶速度" }, { language: "es", content: "85 mph es la velocidad máxima legal a la que puede conducir" }] },
            { content: "This is a minimum speed — you must travel at least 85 mph", isCorrect: false, translations: [{ language: "zh", content: "这是最低速度限制——必须至少以 85 英里/小时行驶" }, { language: "es", content: "Esta es una velocidad mínima — debe conducir al menos a 85 mph" }] },
            { content: "Speed is unregulated on this road", isCorrect: false, translations: [{ language: "zh", content: "该道路不受速度限制" }, { language: "es", content: "La velocidad no está regulada en esta carretera" }] },
          ],
        },
        {
          content: "What does a sign showing a pedestrian symbol inside a red circle with a diagonal line through it mean?",
          explanation: "A red circle with a diagonal line through a symbol means that activity is PROHIBITED. A pedestrian symbol with this treatment means pedestrians are not permitted to cross at that location.",
          handbookSection: "Road Signs — Regulatory Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "行人符号上叠加红圈及斜线的标志是什么意思？", explanation: "红圈加斜线叠加在某一符号上，表示该行为被禁止。行人符号加此标志表示该位置禁止行人穿越。" },
            { language: "es", content: "¿Qué significa una señal con el símbolo de un peatón dentro de un círculo rojo con una línea diagonal?", explanation: "Un círculo rojo con una línea diagonal sobre un símbolo significa que esa actividad está PROHIBIDA. El símbolo de peatón con este tratamiento significa que los peatones no tienen permitido cruzar en ese lugar." },
          ],
          options: [
            { content: "A pedestrian crossing is ahead", isCorrect: false, translations: [{ language: "zh", content: "前方有行人横道" }, { language: "es", content: "Hay un cruce peatonal adelante" }] },
            { content: "Pedestrians have the right-of-way", isCorrect: false, translations: [{ language: "zh", content: "行人享有优先通行权" }, { language: "es", content: "Los peatones tienen derecho de paso" }] },
            { content: "No pedestrian crossing is allowed at this location", isCorrect: true, translations: [{ language: "zh", content: "该位置禁止行人穿越" }, { language: "es", content: "No se permite el cruce peatonal en ese lugar" }] },
            { content: "Pedestrians must use the left side of the road", isCorrect: false, translations: [{ language: "zh", content: "行人须靠道路左侧行走" }, { language: "es", content: "Los peatones deben usar el lado izquierdo de la carretera" }] },
          ],
        },
        {
          content: "A sign displaying 'FM 1960' in Texas identifies:",
          explanation: "FM stands for Farm-to-Market Road — a designation unique to Texas for state-maintained rural highways that historically connected farms to market towns. FM roads are maintained by TxDOT and carry standard state speed limits.",
          handbookSection: "Road Signs — Guide Signs",
          difficulty: 2,
          translations: [
            { language: "zh", content: "德克萨斯州路牌上显示的「FM 1960」标识的是：", explanation: "「FM」代表「农场市场路」（Farm-to-Market Road），是德克萨斯州独有的道路类型，指由州政府维护、历史上连接农场与集市小镇的农村公路。FM 路由德州交通局（TxDOT）负责维护，适用标准州道限速。" },
            { language: "es", content: "Una señal que muestra \"FM 1960\" en Texas identifica:", explanation: "FM significa Farm-to-Market Road (Carretera de Granja al Mercado), una designación exclusiva de Texas para carreteras rurales mantenidas por el estado que históricamente conectaban las granjas con los pueblos mercado. Las carreteras FM son mantenidas por TxDOT y tienen los límites de velocidad estatales estándar." },
          ],
          options: [
            { content: "A private agricultural road", isCorrect: false, translations: [{ language: "zh", content: "私人农业道路" }, { language: "es", content: "Un camino agrícola privado" }] },
            { content: "A federally managed highway", isCorrect: false, translations: [{ language: "zh", content: "联邦管辖公路" }, { language: "es", content: "Una autopista administrada por el gobierno federal" }] },
            { content: "A state-maintained Farm-to-Market road", isCorrect: true, translations: [{ language: "zh", content: "州政府维护的农场市场路（Farm-to-Market Road）" }, { language: "es", content: "Una carretera rural mantenida por el estado (Farm-to-Market Road)" }] },
            { content: "A county road with reduced speed limits", isCorrect: false, translations: [{ language: "zh", content: "降低限速的县道" }, { language: "es", content: "Un camino de condado con límites de velocidad reducidos" }] },
          ],
        },
      ],
    },

    // ─── TOPIC 2: Traffic Laws & Right-of-Way ─────────────────────────────────
    {
      name: "Traffic Laws & Right-of-Way",
      nameEn: "Traffic Laws & Right-of-Way",
      description: "Right-of-way rules, turning, passing, lane changes, parking restrictions",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "交通法规与优先通行权", description: "优先通行规则、转弯、超车、变道、停车限制" },
        { language: "es", name: "Leyes de Tránsito y Derecho de Paso", description: "Reglas de preferencia, giros, adelantamiento, cambios de carril, restricciones de estacionamiento" },
      ],
      questions: [],
    },

    // ─── TOPIC 3: Speed Limits & Special Situations ───────────────────────────
    {
      name: "Speed Limits & Special Situations",
      nameEn: "Speed Limits & Special Situations",
      description: "Texas speed laws, school zones, work zones, night driving, special road conditions",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "限速规定与特殊驾驶情况", description: "德州限速法规、学区、施工区、夜间驾驶、特殊路况" },
        { language: "es", name: "Límites de Velocidad y Situaciones Especiales", description: "Leyes de velocidad de Texas, zonas escolares, zonas de obras, conducción nocturna, condiciones especiales" },
      ],
      questions: [],
    },

    // ─── TOPIC 4: Alcohol & Drugs ─────────────────────────────────────────────
    {
      name: "Alcohol & Drugs",
      nameEn: "Alcohol & Drugs",
      description: "DWI laws, BAC limits, ALR program, zero tolerance for minors, penalties",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "酒精与药物", description: "醉驾法规、BAC 限制、ALR 行政吊销程序、未成年人零容忍、处罚规定" },
        { language: "es", name: "Alcohol y Drogas", description: "Leyes de DWI, límites de BAC, programa ALR, tolerancia cero para menores, penalidades" },
      ],
      questions: [],
    },

    // ─── TOPIC 5: Licensing & Responsibilities ────────────────────────────────
    {
      name: "Licensing & Responsibilities",
      nameEn: "Licensing & Responsibilities",
      description: "License requirements, provisional license rules, vehicle inspection, safety responsibility, accident reporting",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "驾照要求与驾驶人责任", description: "驾照申请要求、临时驾照规则、车辆检验、安全责任、事故报告" },
        { language: "es", name: "Licencia y Responsabilidades", description: "Requisitos de licencia, reglas de licencia provisional, inspección vehicular, responsabilidad de seguridad, reporte de accidentes" },
      ],
      questions: [],
    },

    // ─── TOPIC 6: Safety — Pedestrians, Bicycles & Crashes ───────────────────
    {
      name: "Safety: Pedestrians, Bicycles & Crashes",
      nameEn: "Safety: Pedestrians, Bicycles & Crashes",
      description: "Pedestrian right-of-way, bicycle laws, crash procedures, Move Over law, child safety seats",
      handbookUrl: "https://www.dps.texas.gov/internetforms/Forms/DL-7.pdf",
      translations: [
        { language: "zh", name: "安全：行人、自行车与事故处理", description: "行人优先权、自行车法规、事故处理程序、避让执法车辆法规、儿童安全座椅" },
        { language: "es", name: "Seguridad: Peatones, Bicicletas y Accidentes", description: "Prioridad peatonal, leyes de bicicletas, procedimientos de accidentes, ley de ceder el paso, sillas de seguridad infantiles" },
      ],
      questions: [],
    },
  ],
};
