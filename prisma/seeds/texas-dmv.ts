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
      questions: [
        // ── Q1: Right-of-way at uncontrolled intersection ──────────────────────
        {
          content: "At an uncontrolled intersection (no signs or signals), who has the right-of-way?",
          explanation: "At an uncontrolled intersection, the driver who arrives first has the right-of-way. If two vehicles arrive at the same time, the driver on the LEFT must yield to the driver on the RIGHT.",
          handbookSection: "Traffic Laws — Right-of-Way at Intersections",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在无控制交叉路口（无标志或信号灯），谁享有优先通行权？", explanation: "在无控制交叉路口，先到达的驾驶人享有优先通行权。若两辆车同时到达，左侧车辆须让右侧车辆先行。" },
            { language: "es", content: "En una intersección no controlada (sin señales ni semáforos), ¿quién tiene la preferencia de paso?", explanation: "En una intersección no controlada, el conductor que llega primero tiene la preferencia de paso. Si dos vehículos llegan al mismo tiempo, el conductor de la izquierda debe ceder el paso al conductor de la derecha." },
          ],
          options: [
            { content: "The driver traveling at higher speed", isCorrect: false, translations: [{ language: "zh", content: "行驶速度较快的驾驶人" }, { language: "es", content: "El conductor que viaja a mayor velocidad" }] },
            { content: "The driver who arrives first; if simultaneous, yield to the driver on the right", isCorrect: true, translations: [{ language: "zh", content: "先到达的驾驶人；若同时到达，左侧驾驶人须让右侧驾驶人先行" }, { language: "es", content: "El conductor que llega primero; si llegan al mismo tiempo, el de la izquierda cede al de la derecha" }] },
            { content: "The driver on the left always goes first", isCorrect: false, translations: [{ language: "zh", content: "左侧驾驶人始终先行" }, { language: "es", content: "El conductor de la izquierda siempre pasa primero" }] },
            { content: "The driver on the busier road", isCorrect: false, translations: [{ language: "zh", content: "行驶在较繁忙道路上的驾驶人" }, { language: "es", content: "El conductor en la vía más transitada" }] },
          ],
        },
        // ── Q2: Four-way stop, straight vs. left turn ──────────────────────────
        {
          content: "At a four-way stop, two vehicles arrive at the same time from opposite directions. One wants to go straight, the other wants to turn left. Who goes first?",
          explanation: "When two vehicles face each other at a four-way stop, the vehicle going straight has the right-of-way over the vehicle turning left. The turning vehicle must yield to oncoming through traffic.",
          handbookSection: "Traffic Laws — Right-of-Way at Intersections",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在四向停车路口，两辆车同时从相对方向到达——一辆直行，另一辆左转。谁先通行？", explanation: "当两辆车在四向停车路口相对而立时，直行车辆对左转车辆享有优先通行权。转向车辆必须让对向直行车辆先行。" },
            { language: "es", content: "En un alto de cuatro vías, dos vehículos llegan al mismo tiempo desde direcciones opuestas. Uno va recto y el otro quiere girar a la izquierda. ¿Quién pasa primero?", explanation: "Cuando dos vehículos se enfrentan en un alto de cuatro vías, el vehículo que va recto tiene preferencia sobre el que gira a la izquierda. El vehículo que gira debe ceder el paso al tráfico de frente que va recto." },
          ],
          options: [
            { content: "The vehicle turning left", isCorrect: false, translations: [{ language: "zh", content: "左转车辆" }, { language: "es", content: "El vehículo que gira a la izquierda" }] },
            { content: "The vehicle going straight", isCorrect: true, translations: [{ language: "zh", content: "直行车辆" }, { language: "es", content: "El vehículo que va recto" }] },
            { content: "Both may proceed simultaneously", isCorrect: false, translations: [{ language: "zh", content: "两辆车可同时通行" }, { language: "es", content: "Ambos pueden avanzar simultáneamente" }] },
            { content: "The larger vehicle", isCorrect: false, translations: [{ language: "zh", content: "较大的车辆" }, { language: "es", content: "El vehículo más grande" }] },
          ],
        },
        // ── Q3: Emergency vehicles ─────────────────────────────────────────────
        {
          content: "When must you yield the right-of-way to an emergency vehicle with lights and sirens?",
          explanation: "In Texas, when an emergency vehicle approaches with lights and/or sirens activated, you must immediately pull to the right side of the road and stop. Remain stopped until the emergency vehicle passes. If you are in an intersection, clear the intersection first, then pull over.",
          handbookSection: "Traffic Laws — Emergency Vehicles",
          difficulty: 1,
          translations: [
            { language: "zh", content: "何时必须为开启警灯和警报器的紧急车辆让行？", explanation: "在德克萨斯州，当有开启警灯或警报器的紧急车辆驶近时，必须立即靠右停车。保持停止状态，直到紧急车辆通过。如果您正在路口，应先驶出路口，再靠边停车。" },
            { language: "es", content: "¿Cuándo debe ceder el paso a un vehículo de emergencia con luces y sirenas?", explanation: "En Texas, cuando se aproxima un vehículo de emergencia con luces o sirenas activadas, debe orillarse inmediatamente al lado derecho de la carretera y detenerse. Permanezca detenido hasta que el vehículo de emergencia haya pasado. Si está en una intersección, despéjela primero y luego orillese." },
          ],
          options: [
            { content: "Only on two-lane roads", isCorrect: false, translations: [{ language: "zh", content: "仅在双车道道路上" }, { language: "es", content: "Solo en carreteras de dos carriles" }] },
            { content: "Only if the emergency vehicle is directly behind you", isCorrect: false, translations: [{ language: "zh", content: "仅当紧急车辆直接在您后方时" }, { language: "es", content: "Solo si el vehículo de emergencia está directamente detrás de usted" }] },
            { content: "Any time an emergency vehicle with lights or sirens approaches", isCorrect: true, translations: [{ language: "zh", content: "任何时候，只要有开启警灯或警报器的紧急车辆驶近" }, { language: "es", content: "Siempre que se aproxime un vehículo de emergencia con luces o sirenas activadas" }] },
            { content: "Only at night", isCorrect: false, translations: [{ language: "zh", content: "仅在夜间" }, { language: "es", content: "Solo de noche" }] },
          ],
        },
        // ── Q4: Move Over law ──────────────────────────────────────────────────
        {
          content: "Texas law requires you to 'Move Over' or slow down when passing a stationary emergency or law enforcement vehicle on a highway. What is the required speed reduction if you cannot move over?",
          explanation: "Under Texas Transportation Code §545.157, if you cannot safely change lanes, you must slow to a speed at least 20 mph below the posted speed limit when passing a stationary authorized vehicle with its lights activated. On roads with a speed limit of 25 mph or less, you must slow to 5 mph.",
          handbookSection: "Traffic Laws — Move Over Law",
          difficulty: 2,
          translations: [
            { language: "zh", content: "德克萨斯州法律要求在公路上超过停靠的紧急或执法车辆时须「让道」或减速。若无法变道，要求减速多少？", explanation: "根据德克萨斯州交通法典第 545.157 条，若无法安全变道，在超过开启警示灯的静止授权车辆时，必须将速度降至至少低于限速 20 英里/小时。在限速 25 英里/小时或以下的道路上，必须减速至 5 英里/小时。" },
            { language: "es", content: "La ley de Texas exige \"ceder el paso\" o reducir la velocidad al pasar un vehículo de emergencia o policial detenido en una autopista. ¿Cuánto debe reducir la velocidad si no puede cambiar de carril?", explanation: "Según el Código de Transporte de Texas §545.157, si no puede cambiar de carril con seguridad, debe reducir la velocidad al menos 20 mph por debajo del límite publicado al pasar un vehículo autorizado detenido con sus luces activadas. En vías con límite de 25 mph o menos, debe reducir la velocidad a 5 mph." },
          ],
          options: [
            { content: "10 mph below the posted speed limit", isCorrect: false, translations: [{ language: "zh", content: "低于限速 10 英里/小时" }, { language: "es", content: "10 mph por debajo del límite de velocidad publicado" }] },
            { content: "At least 20 mph below the posted speed limit", isCorrect: true, translations: [{ language: "zh", content: "至少低于限速 20 英里/小时" }, { language: "es", content: "Al menos 20 mph por debajo del límite de velocidad publicado" }] },
            { content: "5 mph below the posted speed limit", isCorrect: false, translations: [{ language: "zh", content: "低于限速 5 英里/小时" }, { language: "es", content: "5 mph por debajo del límite de velocidad publicado" }] },
            { content: "Half the posted speed limit", isCorrect: false, translations: [{ language: "zh", content: "降至限速的一半" }, { language: "es", content: "La mitad del límite de velocidad publicado" }] },
          ],
        },
        // ── Q5: Right turn procedure ───────────────────────────────────────────
        {
          content: "When turning right at an intersection, you should:",
          explanation: "When making a right turn, you should stay as close to the right curb or edge of the road as possible, both before and during the turn. Signal your intention at least 100 feet before the turn. Enter the nearest lane on the road you are turning onto.",
          handbookSection: "Traffic Laws — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在路口右转时，您应该：", explanation: "右转时，转弯前及转弯过程中均应尽量靠近右侧路缘石或道路边缘行驶。至少在转弯前 100 英尺处打转向灯。转入您所进入道路的最近车道。" },
            { language: "es", content: "Al girar a la derecha en una intersección, debe:", explanation: "Al girar a la derecha, debe mantenerse lo más cerca posible de la orilla derecha o del borde de la carretera, tanto antes como durante el giro. Señale su intención al menos 100 pies antes del giro. Ingrese al carril más cercano de la vía a la que está girando." },
          ],
          options: [
            { content: "Swing wide into the left lane before turning", isCorrect: false, translations: [{ language: "zh", content: "转弯前先大幅向左偏转进入左侧车道" }, { language: "es", content: "Desplazarse hacia el carril izquierdo antes de girar" }] },
            { content: "Stay close to the right curb and turn into the nearest right lane", isCorrect: true, translations: [{ language: "zh", content: "靠近右侧路缘石行驶，并转入最近的右侧车道" }, { language: "es", content: "Mantenerse cerca de la orilla derecha y girar hacia el carril derecho más cercano" }] },
            { content: "Yield to all pedestrians but not to cyclists", isCorrect: false, translations: [{ language: "zh", content: "让行人先行，但无需让自行车先行" }, { language: "es", content: "Ceder el paso a los peatones pero no a los ciclistas" }] },
            { content: "Turn from any lane if traffic is clear", isCorrect: false, translations: [{ language: "zh", content: "只要无来车，可从任意车道转弯" }, { language: "es", content: "Girar desde cualquier carril si no hay tráfico" }] },
          ],
        },
        // ── Q6: Left turn: yield to oncoming + pedestrians ────────────────────
        {
          content: "When making a left turn at an intersection, you must yield to:",
          explanation: "When turning left, you must yield to all oncoming vehicles that are close enough to pose a hazard, and to pedestrians crossing the street you are turning into. Left turns are one of the most dangerous maneuvers — always wait for a clear, safe gap.",
          handbookSection: "Traffic Laws — Turning",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在路口左转时，必须让行于：", explanation: "左转时，必须让所有近至足以构成危险的对向来车先行，以及正在穿越您所转入街道的行人先行。左转是最危险的驾驶操作之一——务必等待足够安全的间隙。" },
            { language: "es", content: "Al girar a la izquierda en una intersección, debe ceder el paso a:", explanation: "Al girar a la izquierda, debe ceder el paso a todos los vehículos que se aproximan de frente y que estén lo suficientemente cerca como para representar un peligro, y a los peatones que cruzan la calle a la que va a girar. Los giros a la izquierda son una de las maniobras más peligrosas — espere siempre un espacio seguro y despejado." },
          ],
          options: [
            { content: "Only pedestrians", isCorrect: false, translations: [{ language: "zh", content: "仅行人" }, { language: "es", content: "Solo a los peatones" }] },
            { content: "Oncoming traffic and pedestrians crossing the intersection", isCorrect: true, translations: [{ language: "zh", content: "对向来车及正在穿越您所转入街道的行人" }, { language: "es", content: "Al tráfico que viene de frente y a los peatones que cruzan la calle a la que está girando" }] },
            { content: "Only vehicles to your left", isCorrect: false, translations: [{ language: "zh", content: "仅您左侧的车辆" }, { language: "es", content: "Solo a los vehículos a su izquierda" }] },
            { content: "No one, if the light is green", isCorrect: false, translations: [{ language: "zh", content: "绿灯时无需让任何人先行" }, { language: "es", content: "A nadie si el semáforo está en verde" }] },
          ],
        },
        // ── Q7: U-turn prohibitions ────────────────────────────────────────────
        {
          content: "In Texas, when is a U-turn generally NOT permitted?",
          explanation: "U-turns are not permitted where a sign prohibits them, in school zones, on curves or hills where you cannot be seen by other drivers at least 500 feet away, or where a U-turn would interfere with traffic. In most Texas cities, U-turns are permitted at intersections unless posted otherwise.",
          handbookSection: "Traffic Laws — Turning",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，通常在什么情况下不允许掉头？", explanation: "在标志禁止处、学区内、弯道或坡道上（无法被至少 500 英尺外的其他驾驶人看见）以及掉头会妨碍交通的地方，均不允许掉头。在德克萨斯州大多数城市，路口处允许掉头，除非有标志另行规定。" },
            { language: "es", content: "En Texas, ¿cuándo generalmente NO se permite el retorno en U?", explanation: "Los retornos en U no están permitidos donde una señal los prohíba, en zonas escolares, en curvas o colinas donde otros conductores no puedan verlo al menos a 500 pies de distancia, o donde el retorno interfiera con el tráfico. En la mayoría de las ciudades de Texas, los retornos en U están permitidos en las intersecciones a menos que haya señalización que indique lo contrario." },
          ],
          options: [
            { content: "On any divided highway", isCorrect: false, translations: [{ language: "zh", content: "在任何分隔式公路上" }, { language: "es", content: "En cualquier autopista dividida" }] },
            { content: "On a curve or hill where you cannot be seen 500 feet away, or where prohibited by a sign", isCorrect: true, translations: [{ language: "zh", content: "在弯道或坡道上无法被 500 英尺外其他驾驶人看见时，或有标志禁止时" }, { language: "es", content: "En una curva o colina donde no pueda ser visto a 500 pies de distancia, o donde una señal lo prohíba" }] },
            { content: "Only in residential areas", isCorrect: false, translations: [{ language: "zh", content: "仅在住宅区内" }, { language: "es", content: "Solo en áreas residenciales" }] },
            { content: "Whenever oncoming traffic is present", isCorrect: false, translations: [{ language: "zh", content: "只要有对向来车时" }, { language: "es", content: "Siempre que haya tráfico que se aproxima" }] },
          ],
        },
        // ── Q8: Lane change procedure ──────────────────────────────────────────
        {
          content: "Before changing lanes on a highway, you must:",
          explanation: "Before changing lanes, you must signal your intention, check your mirrors, and check your blind spots by looking over your shoulder. Make sure the lane is clear and that you can change safely without forcing other drivers to adjust their speed.",
          handbookSection: "Traffic Laws — Lane Changes",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在公路上变道前，您必须：", explanation: "变道前，必须打转向灯示意，检查后视镜，并通过转头查看盲区。确认车道畅通，且变道不会迫使其他驾驶人调整车速后，方可变道。" },
            { language: "es", content: "Antes de cambiar de carril en una autopista, debe:", explanation: "Antes de cambiar de carril, debe señalizar su intención, revisar los espejos y verificar los puntos ciegos mirando por encima del hombro. Asegúrese de que el carril esté despejado y de que pueda cambiar con seguridad sin obligar a otros conductores a ajustar su velocidad." },
          ],
          options: [
            { content: "Only check your rearview mirror", isCorrect: false, translations: [{ language: "zh", content: "仅查看后视镜" }, { language: "es", content: "Solo revisar el espejo retrovisor" }] },
            { content: "Signal, check mirrors, and check blind spots before moving", isCorrect: true, translations: [{ language: "zh", content: "打转向灯，检查后视镜，并查看盲区后再变道" }, { language: "es", content: "Señalizar, revisar los espejos y verificar los puntos ciegos antes de moverse" }] },
            { content: "Honk to alert other drivers", isCorrect: false, translations: [{ language: "zh", content: "鸣笛提醒其他驾驶人" }, { language: "es", content: "Tocar el claxon para avisar a otros conductores" }] },
            { content: "Change quickly to minimize time in the other lane", isCorrect: false, translations: [{ language: "zh", content: "迅速变道以缩短占用其他车道的时间" }, { language: "es", content: "Cambiar rápidamente para minimizar el tiempo en el otro carril" }] },
          ],
        },
        // ── Q9: Passing on the right ───────────────────────────────────────────
        {
          content: "In Texas, you may pass another vehicle on the right when:",
          explanation: "You may pass on the right only when the vehicle ahead is making or about to make a left turn, or when you are on a road with two or more lanes of traffic moving in the same direction. Never pass on the right by driving on the shoulder or unpaved portion of the road.",
          handbookSection: "Traffic Laws — Passing",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，以下哪种情况下可以从右侧超车？", explanation: "仅在前方车辆正在或即将左转时，或道路有两条及以上同向行驶车道时，方可从右侧超车。禁止通过驶上路肩或未铺装路面的方式从右侧超车。" },
            { language: "es", content: "En Texas, puede rebasar otro vehículo por la derecha cuando:", explanation: "Solo puede rebasar por la derecha cuando el vehículo de adelante está haciendo o está a punto de hacer un giro a la izquierda, o cuando está en una vía con dos o más carriles de tráfico en la misma dirección. Nunca rebase por la derecha conduciendo por el acotamiento o la parte no pavimentada de la carretera." },
          ],
          options: [
            { content: "The driver ahead is traveling below the speed limit", isCorrect: false, translations: [{ language: "zh", content: "前方车辆行驶速度低于限速时" }, { language: "es", content: "El conductor de adelante viaja por debajo del límite de velocidad" }] },
            { content: "The vehicle ahead is turning left, or when there are two or more lanes going the same direction", isCorrect: true, translations: [{ language: "zh", content: "前方车辆正在左转或即将左转，或道路有两条及以上同向车道时" }, { language: "es", content: "El vehículo de adelante está girando a la izquierda, o cuando hay dos o más carriles en la misma dirección" }] },
            { content: "Any time you can do so safely", isCorrect: false, translations: [{ language: "zh", content: "只要能安全完成超车的任何时候" }, { language: "es", content: "Cualquier momento en que pueda hacerlo con seguridad" }] },
            { content: "Only on one-way streets", isCorrect: false, translations: [{ language: "zh", content: "仅在单行道上" }, { language: "es", content: "Solo en calles de sentido único" }] },
          ],
        },
        // ── Q10: Passing on a two-lane road ───────────────────────────────────
        {
          content: "When is it legal to pass another vehicle on a two-lane road?",
          explanation: "On a two-lane road, passing is legal only when the center line is a single dashed yellow line, you have a clear view ahead, and you can complete the pass safely. You must not pass in a no-passing zone (solid yellow line on your side), on hills or curves, near intersections, or within 100 feet of a railroad crossing.",
          handbookSection: "Traffic Laws — Passing",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在双车道道路上，何时可以合法超车？", explanation: "在双车道道路上，仅当中心线为单条黄色虚线、前方视野开阔，且能安全完成超车时，超车方属合法。禁止在禁止超车区（您一侧为实黄线）、坡道或弯道、路口附近或距铁路道口 100 英尺以内处超车。" },
            { language: "es", content: "¿Cuándo es legal rebasar otro vehículo en una carretera de dos carriles?", explanation: "En una carretera de dos carriles, el rebase es legal solo cuando la línea central es una línea amarilla discontinua simple, tiene visibilidad despejada al frente y puede completar el rebase con seguridad. No debe rebasar en una zona de prohibición de adelantamiento (línea amarilla continua de su lado), en colinas o curvas, cerca de intersecciones, ni dentro de 100 pies de un cruce ferroviario." },
          ],
          options: [
            { content: "Whenever the road ahead appears clear", isCorrect: false, translations: [{ language: "zh", content: "只要前方道路看起来畅通时" }, { language: "es", content: "Siempre que la carretera por delante parezca despejada" }] },
            { content: "Only when the center line is a dashed yellow line and there is a clear view ahead", isCorrect: true, translations: [{ language: "zh", content: "仅当中心线为黄色虚线且前方视野开阔时" }, { language: "es", content: "Solo cuando la línea central es una línea amarilla discontinua y hay visibilidad despejada al frente" }] },
            { content: "Any time traffic behind you is not visible", isCorrect: false, translations: [{ language: "zh", content: "只要后方无来车时" }, { language: "es", content: "Cualquier momento en que el tráfico detrás no sea visible" }] },
            { content: "Only on roads with a speed limit above 55 mph", isCorrect: false, translations: [{ language: "zh", content: "仅在限速高于 55 英里/小时的道路上" }, { language: "es", content: "Solo en carreteras con límite de velocidad superior a 55 mph" }] },
          ],
        },
        // ── Q11: Solid yellow line ─────────────────────────────────────────────
        {
          content: "You are driving on a road with a solid yellow line on your side of the center. This means:",
          explanation: "A solid yellow line on your side means you must not cross it to pass another vehicle. This line is placed where visibility is limited or where passing is dangerous. You must stay in your lane until the solid line ends.",
          handbookSection: "Traffic Laws — Passing",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您正在行驶的道路，您一侧的中心线为实线黄线。这意味着：", explanation: "您一侧的实线黄线表示不得越线超越前方车辆。此线设置在能见度有限或超车危险的路段。必须保持在本车道内，直到实线结束。" },
            { language: "es", content: "Usted conduce por una vía con una línea amarilla continua en su lado del centro. Esto significa:", explanation: "Una línea amarilla continua en su lado significa que no debe cruzarla para rebasar otro vehículo. Esta línea se coloca donde la visibilidad es limitada o donde rebasar es peligroso. Debe permanecer en su carril hasta que la línea continua termine." },
          ],
          options: [
            { content: "You may pass if the road ahead is clear", isCorrect: false, translations: [{ language: "zh", content: "若前方道路畅通可以超车" }, { language: "es", content: "Puede rebasar si la carretera por delante está despejada" }] },
            { content: "Passing is prohibited from your side", isCorrect: true, translations: [{ language: "zh", content: "您一侧禁止超车" }, { language: "es", content: "Está prohibido rebasar desde su lado" }] },
            { content: "The road is under construction", isCorrect: false, translations: [{ language: "zh", content: "道路正在施工" }, { language: "es", content: "La carretera está en construcción" }] },
            { content: "You are approaching a school zone", isCorrect: false, translations: [{ language: "zh", content: "您正在接近学区" }, { language: "es", content: "Se está aproximando a una zona escolar" }] },
          ],
        },
        // ── Q12: Turn signal distance 100 ft ──────────────────────────────────
        {
          content: "How far from an intersection must you signal before turning in Texas?",
          explanation: "In Texas, you must signal your intention to turn at least 100 feet before the turn in a residential or city area. On a highway, the signal must be given well in advance to warn other drivers, typically at least 100 feet but more on higher-speed roads.",
          handbookSection: "Traffic Laws — Turning",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，转弯前需要在距路口多远处打转向灯？", explanation: "在德克萨斯州，在住宅区或城市道路上，必须在转弯前至少 100 英尺处打转向灯。在公路上，须提前足够远距离打灯以警示其他驾驶人，通常至少 100 英尺，在高速路段则需更远。" },
            { language: "es", content: "¿Con cuánta anticipación debe señalizar antes de girar en una intersección en Texas?", explanation: "En Texas, debe señalizar su intención de girar al menos 100 pies antes del giro en áreas residenciales o urbanas. En una autopista, la señal debe darse con suficiente anticipación para advertir a otros conductores, generalmente al menos 100 pies, pero más en vías de mayor velocidad." },
          ],
          options: [
            { content: "25 feet", isCorrect: false, translations: [{ language: "zh", content: "25 英尺" }, { language: "es", content: "25 pies" }] },
            { content: "50 feet", isCorrect: false, translations: [{ language: "zh", content: "50 英尺" }, { language: "es", content: "50 pies" }] },
            { content: "At least 100 feet", isCorrect: true, translations: [{ language: "zh", content: "至少 100 英尺" }, { language: "es", content: "Al menos 100 pies" }] },
            { content: "200 feet", isCorrect: false, translations: [{ language: "zh", content: "200 英尺" }, { language: "es", content: "200 pies" }] },
          ],
        },
        // ── Q13: Parking prohibitions ──────────────────────────────────────────
        {
          content: "Where are you NOT permitted to park in Texas?",
          explanation: "In Texas, parking is prohibited within 15 feet of a fire hydrant, in an intersection, on a crosswalk, within 20 feet of a crosswalk at an intersection, on a sidewalk, blocking a driveway, on a bridge or overpass, and in a space reserved for persons with disabilities unless you have a valid placard.",
          handbookSection: "Traffic Laws — Parking",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在德克萨斯州，以下哪些地方禁止停车？", explanation: "在德克萨斯州，禁止在以下地点停车：消防栓 15 英尺以内、路口内、人行横道上、路口人行横道 20 英尺以内、人行道上、堵塞车道出入口处、桥梁或高架道路上，以及残障人士专用停车位（除非持有有效停车标牌）。" },
            { language: "es", content: "¿Dónde NO está permitido estacionarse en Texas?", explanation: "En Texas, está prohibido estacionarse dentro de 15 pies de un hidrante, en una intersección, sobre un cruce peatonal, dentro de 20 pies de un cruce peatonal en una intersección, sobre una banqueta, bloqueando una entrada, en un puente o paso elevado, y en un espacio reservado para personas con discapacidad a menos que tenga un permiso válido." },
          ],
          options: [
            { content: "On a residential street after 10 PM", isCorrect: false, translations: [{ language: "zh", content: "晚上 10 点后在住宅区街道上" }, { language: "es", content: "En una calle residencial después de las 10 PM" }] },
            { content: "Within 15 feet of a fire hydrant, in an intersection, on a crosswalk, or blocking a driveway", isCorrect: true, translations: [{ language: "zh", content: "消防栓 15 英尺以内、路口内、人行横道上或堵塞车道出入口处" }, { language: "es", content: "Dentro de 15 pies de un hidrante, en una intersección, en un cruce peatonal o bloqueando una entrada" }] },
            { content: "On any street without a parking meter", isCorrect: false, translations: [{ language: "zh", content: "没有停车计时器的任何街道" }, { language: "es", content: "En cualquier calle sin parquímetro" }] },
            { content: "More than 12 inches from the curb", isCorrect: false, translations: [{ language: "zh", content: "距路缘石超过 12 英寸处" }, { language: "es", content: "A más de 12 pulgadas de la orilla" }] },
          ],
        },
        // ── Q14: Hill parking uphill with curb ────────────────────────────────
        {
          content: "When parking on a hill facing uphill with a curb, you should turn your front wheels:",
          explanation: "When parking facing uphill with a curb, turn your wheels AWAY from the curb (to the left). If the brakes fail, the front wheel will catch on the curb and prevent the vehicle from rolling into traffic.",
          handbookSection: "Traffic Laws — Parking",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在有路缘石的上坡方向停车时，前轮应转向：", explanation: "在有路缘石的上坡方向停车时，车轮应转向远离路缘石的方向（向左）。若刹车失灵，前轮将卡在路缘石上，防止车辆滑入行车道。" },
            { language: "es", content: "Al estacionar en una colina mirando hacia arriba con una orilla, debe girar las ruedas delanteras:", explanation: "Al estacionar mirando hacia una colina ascendente con orilla, gire las ruedas ALEJÁNDOSE de la orilla (a la izquierda). Si los frenos fallan, la rueda delantera se enganchará en la orilla e impedirá que el vehículo ruede hacia el tráfico." },
          ],
          options: [
            { content: "Toward the curb (right)", isCorrect: false, translations: [{ language: "zh", content: "朝向路缘石（向右）" }, { language: "es", content: "Hacia la orilla (a la derecha)" }] },
            { content: "Straight ahead", isCorrect: false, translations: [{ language: "zh", content: "保持直行" }, { language: "es", content: "Hacia el frente (recto)" }] },
            { content: "Away from the curb (left)", isCorrect: true, translations: [{ language: "zh", content: "远离路缘石（向左）" }, { language: "es", content: "Alejándose de la orilla (a la izquierda)" }] },
            { content: "It does not matter", isCorrect: false, translations: [{ language: "zh", content: "无所谓" }, { language: "es", content: "No importa la dirección" }] },
          ],
        },
        // ── Q15: Hill parking downhill with curb ──────────────────────────────
        {
          content: "When parking on a hill facing downhill with a curb, you should turn your front wheels:",
          explanation: "When parking facing downhill with a curb, turn your wheels TOWARD the curb (to the right). This way, if the brakes fail, the vehicle will roll into the curb rather than into traffic.",
          handbookSection: "Traffic Laws — Parking",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在有路缘石的下坡方向停车时，前轮应转向：", explanation: "在有路缘石的下坡方向停车时，车轮应转向朝向路缘石的方向（向右）。这样，若刹车失灵，车辆将滚向路缘石，而非滑入行车道。" },
            { language: "es", content: "Al estacionar en una colina mirando hacia abajo con una orilla, debe girar las ruedas delanteras:", explanation: "Al estacionar mirando hacia una colina descendente con orilla, gire las ruedas HACIA la orilla (a la derecha). De esta manera, si los frenos fallan, el vehículo rodará hacia la orilla en lugar de hacia el tráfico." },
          ],
          options: [
            { content: "Away from the curb (left)", isCorrect: false, translations: [{ language: "zh", content: "远离路缘石（向左）" }, { language: "es", content: "Alejándose de la orilla (a la izquierda)" }] },
            { content: "Straight ahead", isCorrect: false, translations: [{ language: "zh", content: "保持直行" }, { language: "es", content: "Hacia el frente (recto)" }] },
            { content: "Toward the curb (right)", isCorrect: true, translations: [{ language: "zh", content: "朝向路缘石（向右）" }, { language: "es", content: "Hacia la orilla (a la derecha)" }] },
            { content: "Either direction is acceptable", isCorrect: false, translations: [{ language: "zh", content: "任意方向均可" }, { language: "es", content: "Cualquier dirección es aceptable" }] },
          ],
        },
        // ── Q16: Pedestrian crosswalk (marked + unmarked) ─────────────────────
        {
          content: "You must stop for a pedestrian in a crosswalk:",
          explanation: "In Texas, drivers must stop for pedestrians who are lawfully in a crosswalk — both marked and unmarked crosswalks at intersections. You must yield the right-of-way to pedestrians and must not pass a vehicle that has stopped for a pedestrian in a crosswalk.",
          handbookSection: "Traffic Laws — Right-of-Way — Pedestrians",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您必须在人行横道处为行人停车让行的情况是：", explanation: "在德克萨斯州，驾驶人必须为合法穿越人行横道的行人停车让行——包括有标线和无标线的路口人行横道。必须让行人先行，且不得超越已为行人停车的车辆。" },
            { language: "es", content: "Debe detenerse para un peatón en un cruce peatonal:", explanation: "En Texas, los conductores deben detenerse ante los peatones que cruzan legalmente por un cruce peatonal, tanto marcados como no marcados en intersecciones. Debe ceder el paso a los peatones y no debe rebasar un vehículo que se haya detenido por un peatón en un cruce." },
          ],
          options: [
            { content: "Only at marked crosswalks with painted lines", isCorrect: false, translations: [{ language: "zh", content: "仅在有划线标识的人行横道处" }, { language: "es", content: "Solo en cruces peatonales marcados con líneas pintadas" }] },
            { content: "Only when the pedestrian has a walk signal", isCorrect: false, translations: [{ language: "zh", content: "仅当行人有行人通行信号时" }, { language: "es", content: "Solo cuando el peatón tiene señal de caminar" }] },
            { content: "At both marked and unmarked crosswalks when pedestrians are lawfully crossing", isCorrect: true, translations: [{ language: "zh", content: "在有划线或无划线的路口人行横道处，当行人合法穿越时" }, { language: "es", content: "En cruces peatonales marcados y no marcados cuando los peatones cruzan legalmente" }] },
            { content: "Only in school zones", isCorrect: false, translations: [{ language: "zh", content: "仅在学区内" }, { language: "es", content: "Solo en zonas escolares" }] },
          ],
        },
        // ── Q17: Blind pedestrian with white cane ─────────────────────────────
        {
          content: "What should you do when you see a blind pedestrian with a white cane or guide dog waiting at a curb?",
          explanation: "You must always yield the right-of-way to a blind person using a white cane or accompanied by a guide dog, even if they are not in a crosswalk. This is required by Texas law to protect visually impaired pedestrians.",
          handbookSection: "Traffic Laws — Right-of-Way — Pedestrians",
          difficulty: 2,
          translations: [
            { language: "zh", content: "当您看到一位持白手杖或携带导盲犬的盲人在路缘石旁等待时，应该怎么做？", explanation: "必须始终为使用白手杖或由导盲犬陪同的盲人让行，即使他们不在人行横道内。这是德克萨斯州法律的明确要求，旨在保护视力障碍行人的安全。" },
            { language: "es", content: "¿Qué debe hacer cuando ve a un peatón ciego con bastón blanco o perro guía esperando en la orilla?", explanation: "Siempre debe ceder el paso a una persona ciega que use bastón blanco o esté acompañada por un perro guía, incluso si no están en un cruce peatonal. Esto es un requisito de la ley de Texas para proteger a los peatones con discapacidad visual." },
          ],
          options: [
            { content: "Honk to let them know you are there", isCorrect: false, translations: [{ language: "zh", content: "鸣笛告知其您的存在" }, { language: "es", content: "Tocar el claxon para avisar que está ahí" }] },
            { content: "Proceed if they have not yet stepped off the curb", isCorrect: false, translations: [{ language: "zh", content: "若其尚未踏上路面，可继续行驶" }, { language: "es", content: "Continuar si aún no ha bajado de la orilla" }] },
            { content: "Always yield — they have the right-of-way", isCorrect: true, translations: [{ language: "zh", content: "始终让行——他们享有优先通行权" }, { language: "es", content: "Siempre ceder el paso — tienen derecho de preferencia" }] },
            { content: "Slow down but do not stop unless they enter the road", isCorrect: false, translations: [{ language: "zh", content: "减速但无需停车，除非其进入行车道" }, { language: "es", content: "Reducir la velocidad pero no detenerse a menos que entren a la vía" }] },
          ],
        },
        // ── Q18: Yellow light ──────────────────────────────────────────────────
        {
          content: "You are about to enter an intersection when the traffic light turns yellow. What should you do?",
          explanation: "A yellow light warns that the signal is about to turn red. You should stop before the intersection if you can do so safely. If you are too close to stop safely, you may proceed through the intersection with caution. Never speed up to 'beat' a yellow light.",
          handbookSection: "Traffic Laws — Traffic Signals",
          difficulty: 1,
          translations: [
            { language: "zh", content: "您即将进入路口时，交通信号灯变为黄灯。您应该怎么做？", explanation: "黄灯警示信号即将变为红灯。若能安全停车，应在路口前停下。若距离过近无法安全停车，可谨慎通过路口。切勿加速「抢黄灯」。" },
            { language: "es", content: "Está a punto de entrar a una intersección cuando el semáforo cambia a amarillo. ¿Qué debe hacer?", explanation: "La luz amarilla advierte que el semáforo está a punto de cambiar a rojo. Debe detenerse antes de la intersección si puede hacerlo con seguridad. Si está demasiado cerca para detenerse con seguridad, puede cruzar la intersección con precaución. Nunca acelere para \"ganarle\" a la luz amarilla." },
          ],
          options: [
            { content: "Speed up to clear the intersection before it turns red", isCorrect: false, translations: [{ language: "zh", content: "加速在变红灯前通过路口" }, { language: "es", content: "Acelerar para cruzar la intersección antes de que cambie a rojo" }] },
            { content: "Stop if you can do so safely; proceed with caution only if stopping is unsafe", isCorrect: true, translations: [{ language: "zh", content: "若能安全停车则停车；仅在无法安全停车时方可谨慎通过" }, { language: "es", content: "Detenerse si puede hacerlo con seguridad; avanzar con precaución solo si detenerse es inseguro" }] },
            { content: "Always stop immediately", isCorrect: false, translations: [{ language: "zh", content: "始终立即停车" }, { language: "es", content: "Siempre detenerse de inmediato" }] },
            { content: "Flash your hazard lights and continue", isCorrect: false, translations: [{ language: "zh", content: "打开危险警示灯并继续行驶" }, { language: "es", content: "Encender las luces de emergencia y continuar" }] },
          ],
        },
      ],
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
      questions: [
        // ── Q1: Basic speed rule ───────────────────────────────────────────────
        {
          content: "In Texas, what is the basic speed law?",
          explanation: "Texas law requires you to drive at a speed that is reasonable and prudent under existing conditions — never faster than is safe, and never faster than the posted speed limit. This means you may need to drive below the posted limit in rain, fog, heavy traffic, or other hazardous conditions.",
          handbookSection: "Speed Limits — Basic Speed Rule",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在德克萨斯州，基本限速法则是什么？", explanation: "德克萨斯州法律要求驾驶人以适应当前路况的合理、谨慎速度行驶，绝不超过限速标志规定的速度。这意味着在雨天、雾天、繁忙交通或其他危险条件下，可能需要低于限速行驶。" },
            { language: "es", content: "En Texas, ¿cuál es la ley básica de velocidad?", explanation: "La ley de Texas exige conducir a una velocidad razonable y prudente para las condiciones existentes, nunca más rápido de lo que sea seguro ni más rápido que el límite publicado. Esto significa que puede necesitar conducir por debajo del límite en lluvia, niebla, tráfico pesado u otras condiciones peligrosas." },
          ],
          options: [
            { content: "Always drive at the posted speed limit", isCorrect: false, translations: [{ language: "zh", content: "始终以限速标志所示速度行驶" }, { language: "es", content: "Siempre conduzca al límite de velocidad publicado" }] },
            { content: "Drive at a speed that is reasonable and prudent for existing conditions, never exceeding the posted limit", isCorrect: true, translations: [{ language: "zh", content: "以适应当前路况的合理、谨慎速度行驶，且不超过限速标志规定的速度" }, { language: "es", content: "Conduzca a una velocidad razonable y prudente para las condiciones actuales, sin exceder el límite publicado" }] },
            { content: "You may exceed the posted limit by 5 mph if traffic allows", isCorrect: false, translations: [{ language: "zh", content: "只要交通允许，可超过限速 5 英里/小时" }, { language: "es", content: "Puede exceder el límite publicado en 5 mph si el tráfico lo permite" }] },
            { content: "Match the speed of surrounding traffic at all times", isCorrect: false, translations: [{ language: "zh", content: "任何时候都应与周围车流保持相同速度" }, { language: "es", content: "Iguale siempre la velocidad del tráfico que lo rodea" }] },
          ],
        },
        // ── Q2: Urban district 30 mph ──────────────────────────────────────────
        {
          content: "What is the default speed limit in a Texas business or residential district when no speed limit is posted?",
          explanation: "In Texas, the prima facie (default) speed limit in a business or residential district is 30 mph. You must observe this limit even when no sign is posted.",
          handbookSection: "Speed Limits — Statutory Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在德克萨斯州商业区或住宅区，若无限速标志，默认限速是多少？", explanation: "在德克萨斯州，商业区或住宅区的法定默认限速为 30 英里/小时。即使没有标志，也必须遵守此限速。" },
            { language: "es", content: "En Texas, ¿cuál es el límite de velocidad predeterminado en un distrito comercial o residencial cuando no hay límite publicado?", explanation: "En Texas, el límite de velocidad prima facie (predeterminado) en un distrito comercial o residencial es de 30 mph. Debe respetar este límite incluso cuando no haya señal publicada." },
          ],
          options: [
            { content: "25 mph", isCorrect: false, translations: [{ language: "zh", content: "25 英里/小时" }, { language: "es", content: "25 mph" }] },
            { content: "30 mph", isCorrect: true, translations: [{ language: "zh", content: "30 英里/小时" }, { language: "es", content: "30 mph" }] },
            { content: "35 mph", isCorrect: false, translations: [{ language: "zh", content: "35 英里/小时" }, { language: "es", content: "35 mph" }] },
            { content: "45 mph", isCorrect: false, translations: [{ language: "zh", content: "45 英里/小时" }, { language: "es", content: "45 mph" }] },
          ],
        },
        // ── Q3: Daytime highway 70 mph ─────────────────────────────────────────
        {
          content: "What is the default daytime speed limit on a Texas highway outside an urban district when no speed limit is posted?",
          explanation: "The prima facie daytime speed limit on a highway outside an urban district is 70 mph. However, many Texas highways are posted higher than this by TxDOT based on engineering studies.",
          handbookSection: "Speed Limits — Statutory Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，城市区域以外的公路上，若无限速标志，白天的默认限速是多少？", explanation: "城市区域以外公路的法定白天默认限速为 70 英里/小时。不过，德州交通局（TxDOT）根据工程研究，在许多德克萨斯州公路上设定了更高的限速。" },
            { language: "es", content: "En Texas, ¿cuál es el límite de velocidad diurno predeterminado en una autopista fuera de un distrito urbano cuando no hay límite publicado?", explanation: "El límite de velocidad diurno prima facie en una autopista fuera de un distrito urbano es de 70 mph. Sin embargo, TxDOT ha establecido límites más altos en muchas autopistas de Texas basándose en estudios de ingeniería." },
          ],
          options: [
            { content: "60 mph", isCorrect: false, translations: [{ language: "zh", content: "60 英里/小时" }, { language: "es", content: "60 mph" }] },
            { content: "65 mph", isCorrect: false, translations: [{ language: "zh", content: "65 英里/小时" }, { language: "es", content: "65 mph" }] },
            { content: "70 mph", isCorrect: true, translations: [{ language: "zh", content: "70 英里/小时" }, { language: "es", content: "70 mph" }] },
            { content: "75 mph", isCorrect: false, translations: [{ language: "zh", content: "75 英里/小时" }, { language: "es", content: "75 mph" }] },
          ],
        },
        // ── Q4: Nighttime highway 65 mph ───────────────────────────────────────
        {
          content: "What is the default nighttime speed limit on a Texas highway outside an urban district when no speed limit is posted?",
          explanation: "The prima facie nighttime speed limit on a highway outside an urban district is 65 mph. Night driving is more dangerous because visibility is reduced, so the nighttime limit is 5 mph lower than the daytime limit.",
          handbookSection: "Speed Limits — Statutory Limits",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，城市区域以外的公路上，若无限速标志，夜间的默认限速是多少？", explanation: "城市区域以外公路的法定夜间默认限速为 65 英里/小时。夜间行车能见度降低，驾驶风险更高，因此夜间限速比白天低 5 英里/小时。" },
            { language: "es", content: "En Texas, ¿cuál es el límite de velocidad nocturno predeterminado en una autopista fuera de un distrito urbano cuando no hay límite publicado?", explanation: "El límite de velocidad nocturno prima facie en una autopista fuera de un distrito urbano es de 65 mph. Manejar de noche es más peligroso porque la visibilidad es menor, por lo que el límite nocturno es 5 mph más bajo que el diurno." },
          ],
          options: [
            { content: "55 mph", isCorrect: false, translations: [{ language: "zh", content: "55 英里/小时" }, { language: "es", content: "55 mph" }] },
            { content: "60 mph", isCorrect: false, translations: [{ language: "zh", content: "60 英里/小时" }, { language: "es", content: "60 mph" }] },
            { content: "65 mph", isCorrect: true, translations: [{ language: "zh", content: "65 英里/小时" }, { language: "es", content: "65 mph" }] },
            { content: "70 mph", isCorrect: false, translations: [{ language: "zh", content: "70 英里/小时" }, { language: "es", content: "70 mph" }] },
          ],
        },
        // ── Q5: Alley 15 mph ───────────────────────────────────────────────────
        {
          content: "What is the maximum speed limit in an alley in Texas?",
          explanation: "The speed limit in an alley is 15 mph. Alleys are narrow, with limited visibility and pedestrians, so this low limit helps prevent accidents.",
          handbookSection: "Speed Limits — Statutory Limits",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在德克萨斯州，小巷内的最高限速是多少？", explanation: "小巷内的限速为 15 英里/小时。小巷道路狭窄、能见度有限且行人较多，较低的限速有助于防止事故发生。" },
            { language: "es", content: "¿Cuál es el límite máximo de velocidad en un callejón en Texas?", explanation: "El límite de velocidad en un callejón es de 15 mph. Los callejones son estrechos, con visibilidad limitada y presencia de peatones, por lo que este límite bajo ayuda a prevenir accidentes." },
          ],
          options: [
            { content: "10 mph", isCorrect: false, translations: [{ language: "zh", content: "10 英里/小时" }, { language: "es", content: "10 mph" }] },
            { content: "15 mph", isCorrect: true, translations: [{ language: "zh", content: "15 英里/小时" }, { language: "es", content: "15 mph" }] },
            { content: "20 mph", isCorrect: false, translations: [{ language: "zh", content: "20 英里/小时" }, { language: "es", content: "20 mph" }] },
            { content: "25 mph", isCorrect: false, translations: [{ language: "zh", content: "25 英里/小时" }, { language: "es", content: "25 mph" }] },
          ],
        },
        // ── Q6: School zone ────────────────────────────────────────────────────
        {
          content: "In Texas, when must you observe the reduced speed limit in a school zone?",
          explanation: "You must observe the school zone speed limit whenever children are present near the road, or whenever the school zone warning lights are flashing. This applies regardless of whether school is in session — if children are visible, you must slow down.",
          handbookSection: "Speed Limits — School Zones",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在德克萨斯州，何时必须遵守学区降低的限速规定？", explanation: "只要道路附近有儿童，或学区警示灯正在闪烁，就必须遵守学区限速规定。无论学校是否正在上课——只要看到儿童，就必须减速。" },
            { language: "es", content: "En Texas, ¿cuándo debe respetar el límite de velocidad reducido en una zona escolar?", explanation: "Debe respetar el límite de velocidad de la zona escolar siempre que haya niños cerca de la vía, o cuando las luces de advertencia de la zona escolar estén parpadeando. Esto aplica independientemente de si hay clases — si hay niños visibles, debe reducir la velocidad." },
          ],
          options: [
            { content: "Only during posted school hours on weekdays", isCorrect: false, translations: [{ language: "zh", content: "仅在工作日的规定上学时间内" }, { language: "es", content: "Solo durante el horario escolar publicado en días de semana" }] },
            { content: "Only when a crossing guard is present", isCorrect: false, translations: [{ language: "zh", content: "仅当有过街护卫员在场时" }, { language: "es", content: "Solo cuando hay un guardia de cruce presente" }] },
            { content: "Whenever children are present near the road or the school zone warning lights are flashing", isCorrect: true, translations: [{ language: "zh", content: "只要道路附近有儿童，或学区警示灯闪烁时" }, { language: "es", content: "Siempre que haya niños cerca de la vía o cuando las luces de advertencia de la zona escolar estén parpadeando" }] },
            { content: "Only when a school bus is stopped in the zone", isCorrect: false, translations: [{ language: "zh", content: "仅当学区内有校车停靠时" }, { language: "es", content: "Solo cuando un autobús escolar esté detenido en la zona" }] },
          ],
        },
        // ── Q7: Work zone doubled fines ────────────────────────────────────────
        {
          content: "In Texas, fines for speeding in a construction or maintenance zone when workers are present are:",
          explanation: "Texas law doubles the fines for speeding in active construction or maintenance work zones when workers are present. These enhanced penalties are intended to deter speeding and protect road workers.",
          handbookSection: "Speed Limits — Work Zones",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，当施工或道路维护区有工人在场时，超速罚款为：", explanation: "德克萨斯州法律规定，在有工人在场的施工或道路维护区超速，罚款加倍。这些加重处罚旨在遏制超速行为，保护道路工人安全。" },
            { language: "es", content: "En Texas, las multas por exceso de velocidad en una zona de construcción o mantenimiento cuando hay trabajadores presentes son:", explanation: "La ley de Texas duplica las multas por exceso de velocidad en zonas de construcción o mantenimiento activas cuando hay trabajadores presentes. Estas sanciones reforzadas buscan disuadir el exceso de velocidad y proteger a los trabajadores viales." },
          ],
          options: [
            { content: "The same as regular speeding fines", isCorrect: false, translations: [{ language: "zh", content: "与普通超速罚款相同" }, { language: "es", content: "Iguales a las multas normales por exceso de velocidad" }] },
            { content: "Doubled when workers are present", isCorrect: true, translations: [{ language: "zh", content: "有工人在场时加倍" }, { language: "es", content: "Duplicadas cuando hay trabajadores presentes" }] },
            { content: "Tripled when workers are present", isCorrect: false, translations: [{ language: "zh", content: "有工人在场时增至三倍" }, { language: "es", content: "Triplicadas cuando hay trabajadores presentes" }] },
            { content: "Applied only if you cause an accident", isCorrect: false, translations: [{ language: "zh", content: "仅在造成事故时适用" }, { language: "es", content: "Aplicadas solo si causa un accidente" }] },
          ],
        },
        // ── Q8: Adverse weather ────────────────────────────────────────────────
        {
          content: "When driving in rain, fog, or other conditions that reduce visibility or road traction, you should:",
          explanation: "In adverse conditions, you must slow below the posted speed limit if necessary to drive safely, and increase your following distance. The basic speed rule requires you to adjust your speed to match current conditions — the posted limit is a maximum for ideal conditions, not a target.",
          handbookSection: "Speed Limits — Basic Speed Rule",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在雨天、雾天或其他降低能见度或路面抓地力的条件下驾驶时，应该：", explanation: "在不良天气条件下，若有必要，必须将车速降至限速以下以确保安全，并增加跟车距离。基本限速规则要求根据当前路况调整速度——限速是理想条件下的最高速度，而非目标速度。" },
            { language: "es", content: "Al conducir bajo lluvia, niebla u otras condiciones que reducen la visibilidad o la tracción, debe:", explanation: "En condiciones adversas, debe reducir la velocidad por debajo del límite publicado si es necesario para conducir con seguridad, y aumentar la distancia de seguimiento. La regla básica de velocidad exige ajustar la velocidad a las condiciones actuales — el límite publicado es un máximo para condiciones ideales, no un objetivo." },
          ],
          options: [
            { content: "Maintain the posted speed limit since it is already set for safety", isCorrect: false, translations: [{ language: "zh", content: "保持限速行驶，因为限速本身已考虑安全因素" }, { language: "es", content: "Mantener el límite de velocidad publicado, ya que fue establecido para la seguridad" }] },
            { content: "Slow down and increase your following distance as needed", isCorrect: true, translations: [{ language: "zh", content: "根据需要减速并增加跟车距离" }, { language: "es", content: "Reducir la velocidad y aumentar la distancia de seguimiento según sea necesario" }] },
            { content: "Turn on hazard lights and continue at normal speed", isCorrect: false, translations: [{ language: "zh", content: "开启危险警示灯并以正常速度继续行驶" }, { language: "es", content: "Encender las luces de emergencia y continuar a velocidad normal" }] },
            { content: "Follow the vehicle ahead closely so you can see the road better", isCorrect: false, translations: [{ language: "zh", content: "紧跟前车，以便更好地看清道路" }, { language: "es", content: "Seguir de cerca al vehículo de adelante para ver mejor la carretera" }] },
          ],
        },
        // ── Q9: Minimum speed ──────────────────────────────────────────────────
        {
          content: "It is illegal in Texas to drive so slowly that you:",
          explanation: "While there is no absolute minimum speed on most Texas roads, it is illegal to drive so slowly that you impede the normal and reasonable movement of traffic, unless reduced speed is necessary for safety. Driving too slowly can be just as dangerous as driving too fast.",
          handbookSection: "Speed Limits — Minimum Speed",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在德克萨斯州，以下哪种情况下驾车速度过低属于违法？", explanation: "虽然德克萨斯州大多数道路没有绝对最低限速，但若行驶速度过低，妨碍正常合理的交通流动，且并非出于安全需要，则属违法。行驶速度过低与过快同样危险。" },
            { language: "es", content: "En Texas, es ilegal conducir tan despacio que:", explanation: "Aunque no hay una velocidad mínima absoluta en la mayoría de las vías de Texas, es ilegal conducir tan despacio que obstaculice el movimiento normal y razonable del tráfico, a menos que la velocidad reducida sea necesaria por seguridad. Conducir demasiado lento puede ser tan peligroso como conducir demasiado rápido." },
          ],
          options: [
            { content: "Drive below the speed limit", isCorrect: false, translations: [{ language: "zh", content: "行驶速度低于限速时" }, { language: "es", content: "Conduzca por debajo del límite de velocidad" }] },
            { content: "Drive more slowly than the vehicle behind you", isCorrect: false, translations: [{ language: "zh", content: "行驶速度低于后方车辆时" }, { language: "es", content: "Conduzca más lento que el vehículo detrás de usted" }] },
            { content: "Impede the normal and reasonable movement of traffic unless necessary for safety", isCorrect: true, translations: [{ language: "zh", content: "在非出于安全需要的情况下，妨碍正常合理的交通流动时" }, { language: "es", content: "Obstaculice el movimiento normal y razonable del tráfico, a menos que sea necesario por seguridad" }] },
            { content: "Fail to match the average speed of surrounding vehicles", isCorrect: false, translations: [{ language: "zh", content: "未能与周围车辆保持平均速度时" }, { language: "es", content: "No iguale la velocidad promedio de los vehículos que lo rodean" }] },
          ],
        },
        // ── Q10: Fog low beams ─────────────────────────────────────────────────
        {
          content: "When driving in dense fog, you should:",
          explanation: "In dense fog, use low-beam headlights — not high beams, which reflect off fog and reduce visibility further. Reduce your speed significantly, increase following distance, and pull completely off the road and turn off your lights if visibility becomes dangerously low.",
          handbookSection: "Speed Limits — Special Driving Conditions",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在浓雾中行驶时，应该：", explanation: "在浓雾中应使用近光灯——远光灯会被雾气反射，反而降低能见度。须显著减速，增加跟车距离。若能见度降至危险水平，应将车辆完全驶离道路并关闭车灯。" },
            { language: "es", content: "Al conducir con niebla densa, debe:", explanation: "En niebla densa, use las luces bajas — no las altas, ya que se reflejan en la niebla y reducen aún más la visibilidad. Reduzca considerablemente la velocidad, aumente la distancia de seguimiento y, si la visibilidad se vuelve peligrosamente baja, orillese completamente y apague las luces." },
          ],
          options: [
            { content: "Use high-beam headlights to see farther ahead", isCorrect: false, translations: [{ language: "zh", content: "使用远光灯以看得更远" }, { language: "es", content: "Usar las luces altas para ver más lejos" }] },
            { content: "Use low-beam headlights, slow down significantly, and increase following distance", isCorrect: true, translations: [{ language: "zh", content: "使用近光灯，显著减速，并增加跟车距离" }, { language: "es", content: "Usar las luces bajas, reducir significativamente la velocidad y aumentar la distancia de seguimiento" }] },
            { content: "Keep your speed steady so other drivers can anticipate your position", isCorrect: false, translations: [{ language: "zh", content: "保持匀速，以便其他驾驶人判断您的位置" }, { language: "es", content: "Mantener una velocidad constante para que otros conductores puedan anticipar su posición" }] },
            { content: "Use hazard lights only and maintain the speed limit", isCorrect: false, translations: [{ language: "zh", content: "仅开启危险警示灯并保持限速行驶" }, { language: "es", content: "Usar solo las luces de emergencia y mantener el límite de velocidad" }] },
          ],
        },
        // ── Q11: Night driving / overdriving headlights ────────────────────────
        {
          content: "Why should you reduce your speed when driving at night compared to daytime?",
          explanation: "At night, your headlights typically illuminate only 350–500 feet ahead, but at highway speeds your vehicle needs much more distance to stop. Overdriving your headlights — going fast enough that you cannot stop within the distance your lights illuminate — is a leading cause of night crashes.",
          handbookSection: "Speed Limits — Night Driving",
          difficulty: 2,
          translations: [
            { language: "zh", content: "为什么夜间行车应比白天降低速度？", explanation: "夜间行车时，车头灯通常仅能照亮前方 350 至 500 英尺的范围，但在公路速度下，车辆需要更长的距离才能停下。「超越车灯范围驾驶」——车速过快，制动距离超过车灯照明范围——是夜间事故的主要原因之一。" },
            { language: "es", content: "¿Por qué debe reducir la velocidad al conducir de noche en comparación con el día?", explanation: "De noche, los faros generalmente iluminan solo entre 350 y 500 pies hacia adelante, pero a velocidades de autopista su vehículo necesita mucha más distancia para detenerse. Conducir más rápido de lo que los faros pueden iluminar — ir a una velocidad tal que no pueda detenerse dentro de la distancia que sus luces alumbran — es una de las principales causas de accidentes nocturnos." },
          ],
          options: [
            { content: "Because the speed limit is lower at night", isCorrect: false, translations: [{ language: "zh", content: "因为夜间限速更低" }, { language: "es", content: "Porque el límite de velocidad es más bajo de noche" }] },
            { content: "Because headlights only illuminate a limited distance ahead, and you may not be able to stop in time for unseen hazards", isCorrect: true, translations: [{ language: "zh", content: "因为车头灯仅能照亮有限距离，可能无法及时停车避开未察觉的危险" }, { language: "es", content: "Porque los faros solo iluminan una distancia limitada y puede que no pueda detenerse a tiempo ante peligros no vistos" }] },
            { content: "Because road surfaces are always wet at night", isCorrect: false, translations: [{ language: "zh", content: "因为夜间路面总是潮湿的" }, { language: "es", content: "Porque la superficie de la carretera siempre está mojada de noche" }] },
            { content: "To conserve fuel", isCorrect: false, translations: [{ language: "zh", content: "为了节省燃油" }, { language: "es", content: "Para ahorrar combustible" }] },
          ],
        },
        // ── Q12: Max speed 85 mph SH-130 ───────────────────────────────────────
        {
          content: "What is the highest posted speed limit in Texas, and where does it apply?",
          explanation: "The highest posted speed limit in Texas is 85 mph, currently applied to a section of State Highway 130 (SH-130) toll road between Austin and Seguin. Texas also has 75 and 80 mph limits on many rural interstates and highways.",
          handbookSection: "Speed Limits — Maximum Speed",
          difficulty: 2,
          translations: [
            { language: "zh", content: "德克萨斯州最高的公路限速是多少？适用于哪里？", explanation: "德克萨斯州最高的公路限速为 85 英里/小时，目前适用于奥斯汀至塞金之间的 130 号州道（SH-130）收费公路某段。德克萨斯州许多农村州际公路和公路上也设有 75 和 80 英里/小时的限速。" },
            { language: "es", content: "¿Cuál es el límite de velocidad publicado más alto en Texas y dónde aplica?", explanation: "El límite de velocidad publicado más alto en Texas es de 85 mph, aplicado actualmente a un tramo de la carretera de peaje State Highway 130 (SH-130) entre Austin y Seguin. Texas también tiene límites de 75 y 80 mph en muchas autopistas interestatales y carreteras rurales." },
          ],
          options: [
            { content: "75 mph — on all rural interstates", isCorrect: false, translations: [{ language: "zh", content: "75 英里/小时——所有农村州际公路" }, { language: "es", content: "75 mph — en todas las autopistas interestatales rurales" }] },
            { content: "80 mph — on certain rural highways", isCorrect: false, translations: [{ language: "zh", content: "80 英里/小时——部分农村公路" }, { language: "es", content: "80 mph — en ciertas carreteras rurales" }] },
            { content: "85 mph — on a section of State Highway 130 (SH-130) toll road", isCorrect: true, translations: [{ language: "zh", content: "85 英里/小时——130 号州道（SH-130）收费公路某路段" }, { language: "es", content: "85 mph — en un tramo de la carretera de peaje State Highway 130 (SH-130)" }] },
            { content: "90 mph — on designated test corridors", isCorrect: false, translations: [{ language: "zh", content: "90 英里/小时——指定测试路段" }, { language: "es", content: "90 mph — en corredores de prueba designados" }] },
          ],
        },
        // ── Q13: Stopping distance ─────────────────────────────────────────────
        {
          content: "As your vehicle's speed increases, your stopping distance:",
          explanation: "Stopping distance increases dramatically with speed. Doubling your speed more than doubles your stopping distance — it roughly quadruples it because kinetic energy increases as the square of velocity. This is why speed is such a critical factor in crash severity.",
          handbookSection: "Speed Limits — Speed and Stopping Distance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "随着车速增加，制动距离会：", explanation: "制动距离随车速增加而急剧增大。车速翻倍，制动距离不止翻倍——由于动能与速度的平方成正比，制动距离大约增加至四倍。这正是车速对事故严重程度影响如此关键的原因。" },
            { language: "es", content: "A medida que aumenta la velocidad de su vehículo, la distancia de frenado:", explanation: "La distancia de frenado aumenta drásticamente con la velocidad. Duplicar la velocidad más que duplica la distancia de frenado — aproximadamente la cuadruplica, porque la energía cinética aumenta con el cuadrado de la velocidad. Por eso la velocidad es un factor tan crítico en la gravedad de los accidentes." },
          ],
          options: [
            { content: "Remains roughly the same", isCorrect: false, translations: [{ language: "zh", content: "大致保持不变" }, { language: "es", content: "Se mantiene aproximadamente igual" }] },
            { content: "Increases slightly", isCorrect: false, translations: [{ language: "zh", content: "略有增加" }, { language: "es", content: "Aumenta ligeramente" }] },
            { content: "Increases significantly — faster speeds require much greater stopping distances", isCorrect: true, translations: [{ language: "zh", content: "显著增加——车速越快，所需制动距离越长" }, { language: "es", content: "Aumenta significativamente — las velocidades más altas requieren distancias de frenado mucho mayores" }] },
            { content: "Decreases because of better momentum", isCorrect: false, translations: [{ language: "zh", content: "因惯性更大而缩短" }, { language: "es", content: "Disminuye debido a un mejor impulso" }] },
          ],
        },
        // ── Q14: 3-second following distance ──────────────────────────────────
        {
          content: "What is the recommended minimum following time gap between your vehicle and the one ahead in normal driving conditions?",
          explanation: "Texas recommends at least a 3-second following distance under normal conditions. To measure: when the vehicle ahead passes a fixed object, count 'one-thousand-one, one-thousand-two, one-thousand-three.' If you reach the object before finishing the count, you are following too closely. In adverse conditions, increase to 4–5 seconds or more.",
          handbookSection: "Speed Limits — Following Distance",
          difficulty: 1,
          translations: [
            { language: "zh", content: "在正常驾驶条件下，建议与前车保持的最短跟车时间间隔是多少？", explanation: "德克萨斯州建议在正常条件下保持至少 3 秒的跟车距离。测量方法：当前车经过某固定参照物时，默数「一千零一、一千零二、一千零三」。若在数完之前您已到达该参照物，则跟车距离过近。在不良天气条件下，应增加至 4 至 5 秒或更长。" },
            { language: "es", content: "¿Cuál es el tiempo mínimo de seguimiento recomendado entre su vehículo y el de adelante en condiciones normales de manejo?", explanation: "Texas recomienda al menos 3 segundos de distancia de seguimiento en condiciones normales. Para medirlo: cuando el vehículo de adelante pase un objeto fijo, cuente \"mil uno, mil dos, mil tres\". Si llega al objeto antes de terminar la cuenta, está siguiendo demasiado de cerca. En condiciones adversas, aumente a 4 o 5 segundos o más." },
          ],
          options: [
            { content: "1 second", isCorrect: false, translations: [{ language: "zh", content: "1 秒" }, { language: "es", content: "1 segundo" }] },
            { content: "2 seconds", isCorrect: false, translations: [{ language: "zh", content: "2 秒" }, { language: "es", content: "2 segundos" }] },
            { content: "At least 3 seconds", isCorrect: true, translations: [{ language: "zh", content: "至少 3 秒" }, { language: "es", content: "Al menos 3 segundos" }] },
            { content: "5 seconds at all times", isCorrect: false, translations: [{ language: "zh", content: "任何时候都保持 5 秒" }, { language: "es", content: "5 segundos en todo momento" }] },
          ],
        },
        // ── Q15: Hydroplaning ──────────────────────────────────────────────────
        {
          content: "Hydroplaning on a wet road is most likely to occur when you:",
          explanation: "Hydroplaning occurs when a vehicle's tires lose contact with the road surface and ride on a film of water. It can begin at speeds as low as 35 mph and becomes increasingly likely at higher speeds, especially on tires with worn tread. To recover from a skid, ease off the accelerator and steer gently in the direction you want to go.",
          handbookSection: "Speed Limits — Special Driving Conditions",
          difficulty: 2,
          translations: [
            { language: "zh", content: "在湿滑路面上，最可能发生水滑（失控漂浮）的情况是：", explanation: "水滑现象是指车辆轮胎失去与路面的接触，在水膜上漂浮滑行。在 35 英里/小时的速度下即可开始发生，车速越高风险越大，轮胎胎纹磨损时尤为明显。若发生打滑，应松开油门并轻柔地朝您希望行进的方向转向。" },
            { language: "es", content: "El aquaplaning (hidroplaneo) en una vía mojada es más probable que ocurra cuando:", explanation: "El aquaplaning ocurre cuando los neumáticos del vehículo pierden contacto con la superficie de la vía y se deslizan sobre una película de agua. Puede comenzar a velocidades tan bajas como 35 mph y se vuelve más probable a mayores velocidades, especialmente con neumáticos con la banda de rodadura desgastada. Para recuperar el control en un derrape, suelte el acelerador y gire suavemente en la dirección que desea tomar." },
          ],
          options: [
            { content: "Drive slowly on a wet road", isCorrect: false, translations: [{ language: "zh", content: "在湿滑路面上低速行驶时" }, { language: "es", content: "Conduce despacio en una vía mojada" }] },
            { content: "Drive at higher speeds (35 mph or above) on a wet road, especially with worn tires", isCorrect: true, translations: [{ language: "zh", content: "在湿滑路面上以较高车速（35 英里/小时及以上）行驶时，尤其是轮胎磨损的情况下" }, { language: "es", content: "Conduce a velocidades más altas (35 mph o más) en una vía mojada, especialmente con neumáticos desgastados" }] },
            { content: "Brake hard on a wet road", isCorrect: false, translations: [{ language: "zh", content: "在湿滑路面上急踩刹车时" }, { language: "es", content: "Frena bruscamente en una vía mojada" }] },
            { content: "Use cruise control on a dry road", isCorrect: false, translations: [{ language: "zh", content: "在干燥路面上使用定速巡航时" }, { language: "es", content: "Usa el control de crucero en una vía seca" }] },
          ],
        },
      ],
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
