/**
 * California DMV Driver's License Practice Questions
 * Sources: California Driver Handbook (official) + real DMV test patterns
 * ~100 questions across 6 topics
 */

export const californiaDMV = {
  category: {
    name: "加州驾照笔试",
    nameEn: "California DMV",
    description: "California Driver's License Knowledge Test — 46 questions, 83% to pass",
    icon: "🚗",
    color: "#EF4444",
  },
  topics: [
    // ─── TOPIC 1: Traffic Signs & Signals (20 questions) ───────────────────────
    {
      name: "交通标志与信号灯",
      nameEn: "Traffic Signs & Signals",
      description: "Road signs, traffic signals, pavement markings",
      questions: [
        {
          content: "A five-sided (pentagon) shaped sign indicates:",
          explanation: "Pentagon-shaped signs are used exclusively for school zones and school crossings. Their unique shape helps drivers recognize school areas even at a distance or in poor visibility.",
          difficulty: 1,
          options: [
            { content: "A school zone or school crossing", isCorrect: true },
            { content: "A construction work zone", isCorrect: false },
            { content: "A no-passing zone", isCorrect: false },
            { content: "A railroad crossing", isCorrect: false },
          ],
        },
        {
          content: "What does a blue curb indicate?",
          explanation: "Blue curbs mark parking spaces reserved for people with disabilities. Only vehicles displaying a valid disabled person placard or license plate may park at a blue curb.",
          difficulty: 1,
          options: [
            { content: "No parking at any time", isCorrect: false },
            { content: "Parking for persons with disabilities only", isCorrect: true },
            { content: "Limited-time parking", isCorrect: false },
            { content: "Commercial vehicle loading zone", isCorrect: false },
          ],
        },
        {
          content: "Double solid white lines on the road mean:",
          explanation: "Double solid white lines indicate that changing lanes is not permitted. These lines separate lanes of traffic moving in the same direction where lane changes would be dangerous.",
          difficulty: 2,
          options: [
            { content: "You may cross them to pass slow vehicles", isCorrect: false },
            { content: "Changing lanes is not allowed", isCorrect: true },
            { content: "A reversible lane is ahead", isCorrect: false },
            { content: "A construction work zone is ahead", isCorrect: false },
          ],
        },
        {
          content: "A flashing yellow traffic light means:",
          explanation: "A flashing yellow light is a warning signal. You should slow down and proceed with caution, but you are not required to stop.",
          difficulty: 1,
          options: [
            { content: "Stop and wait for a green light", isCorrect: false },
            { content: "The light is about to turn red", isCorrect: false },
            { content: "Slow down and proceed with caution", isCorrect: true },
            { content: "Come to a complete stop", isCorrect: false },
          ],
        },
        {
          content: "What must you do when you see a solid red arrow at a traffic light?",
          explanation: "A solid red arrow means you must stop completely and do not turn in the direction the arrow is pointing. Unlike a circular red light, you may NOT turn on red when there is a red arrow, unless a sign specifically permits it.",
          difficulty: 2,
          options: [
            { content: "You may turn after yielding to oncoming traffic", isCorrect: false },
            { content: "Stop completely and do not turn in that direction", isCorrect: true },
            { content: "Turn only if no pedestrians are in the crosswalk", isCorrect: false },
            { content: "Treat it like a stop sign and proceed when safe", isCorrect: false },
          ],
        },
        {
          content: "A green arrow pointing left while the regular traffic light is also green means:",
          explanation: "A green arrow indicates a protected turn — oncoming traffic is stopped by a red light, so you may turn safely in the direction of the arrow. You still must yield to pedestrians in the crosswalk.",
          difficulty: 2,
          options: [
            { content: "You must yield to oncoming traffic before turning", isCorrect: false },
            { content: "You have a protected turn; oncoming traffic is stopped", isCorrect: true },
            { content: "You may only turn left if no traffic is coming", isCorrect: false },
            { content: "Wait for the regular green light before turning", isCorrect: false },
          ],
        },
        {
          content: "You may turn right on a red light ONLY if:",
          explanation: "A right turn on red is permitted after a complete stop, when there is no 'No Turn on Red' sign posted, and when you yield to pedestrians and cross traffic. You must stop first — rolling through is illegal.",
          difficulty: 1,
          options: [
            { content: "You slow down and no cars are coming", isCorrect: false },
            { content: "You stop, yield to pedestrians and traffic, and no sign prohibits it", isCorrect: true },
            { content: "There is no pedestrian in the crosswalk", isCorrect: false },
            { content: "It is safe to proceed without stopping", isCorrect: false },
          ],
        },
        {
          content: "An octagon (8-sided) shaped sign always means:",
          explanation: "The octagon shape is used exclusively for STOP signs. This unique shape allows drivers to recognize a stop sign even if the color or lettering is obscured by dirt, sun glare, or damage.",
          difficulty: 1,
          options: [
            { content: "Yield to oncoming traffic", isCorrect: false },
            { content: "Stop completely", isCorrect: true },
            { content: "Slow down, school zone ahead", isCorrect: false },
            { content: "Railroad crossing ahead", isCorrect: false },
          ],
        },
        {
          content: "A triangular (three-sided) shaped sign means:",
          explanation: "Triangular signs are yield signs. You must slow down and be prepared to stop to let vehicles with the right-of-way pass. Unlike a stop sign, you do not have to come to a complete stop unless it is necessary.",
          difficulty: 1,
          options: [
            { content: "Stop completely before proceeding", isCorrect: false },
            { content: "Yield — slow down and give right-of-way to other traffic", isCorrect: true },
            { content: "School zone ahead, reduce speed", isCorrect: false },
            { content: "Warning: hazard ahead", isCorrect: false },
          ],
        },
        {
          content: "What does a red curb indicate?",
          explanation: "A red curb means no stopping, standing, or parking at any time. These are typically found near fire hydrants, bus stops, or intersections where stopping would create a hazard.",
          difficulty: 1,
          options: [
            { content: "No parking, but you may stop briefly to load/unload", isCorrect: false },
            { content: "No stopping, standing, or parking at any time", isCorrect: true },
            { content: "Parking allowed only during business hours", isCorrect: false },
            { content: "Emergency vehicles only", isCorrect: false },
          ],
        },
        {
          content: "A yellow curb means:",
          explanation: "A yellow curb indicates a loading and unloading zone for commercial vehicles. The driver must stay with the vehicle. Hours of operation may be posted on a sign nearby.",
          difficulty: 2,
          options: [
            { content: "Parking for disabled persons only", isCorrect: false },
            { content: "No parking at any time", isCorrect: false },
            { content: "Commercial loading/unloading zone — driver must remain in vehicle", isCorrect: true },
            { content: "Passenger pickup and drop-off only", isCorrect: false },
          ],
        },
        {
          content: "A white curb means:",
          explanation: "A white curb is for passenger loading and unloading only — you may stop briefly to pick up or drop off passengers. You must remain in or near the vehicle and move when directed.",
          difficulty: 2,
          options: [
            { content: "Parking for any vehicle for up to 5 minutes", isCorrect: false },
            { content: "Passenger loading and unloading only", isCorrect: true },
            { content: "No parking during school hours", isCorrect: false },
            { content: "Bus stop only", isCorrect: false },
          ],
        },
        {
          content: "What does a pennant-shaped (triangular, pointing right) sign indicate?",
          explanation: "The pennant sign is placed on the left side of the road and warns drivers they are entering a no-passing zone. It is always yellow with black text.",
          difficulty: 2,
          options: [
            { content: "Keep right — passing allowed on left only", isCorrect: false },
            { content: "No passing zone begins here", isCorrect: true },
            { content: "Yield to oncoming traffic", isCorrect: false },
            { content: "School crossing zone ahead", isCorrect: false },
          ],
        },
        {
          content: "An 'X' shaped sign at a railroad crossing means:",
          explanation: "The round (crossbuck) sign with an X indicates a railroad crossing. You must look both ways and be prepared to stop. If lights are flashing or gates are down, you must stop and wait.",
          difficulty: 1,
          options: [
            { content: "Stop immediately, a train is coming", isCorrect: false },
            { content: "A railroad crossing is ahead — look and be prepared to stop", isCorrect: true },
            { content: "No crossing on this road", isCorrect: false },
            { content: "Crossing closed — take a detour", isCorrect: false },
          ],
        },
        {
          content: "When approaching a railroad crossing, you must stop at least:",
          explanation: "California law requires you to stop at least 15 feet from the nearest rail when a train is approaching or the crossing gates are down. Stopping too close creates a danger of being hit if the train has a wide load.",
          difficulty: 2,
          options: [
            { content: "5 feet from the tracks", isCorrect: false },
            { content: "10 feet from the tracks", isCorrect: false },
            { content: "15 feet from the nearest rail", isCorrect: true },
            { content: "25 feet from the crossing gate", isCorrect: false },
          ],
        },
        {
          content: "Orange-colored signs on the highway typically indicate:",
          explanation: "Orange signs are used in construction and maintenance work zones. They warn drivers of temporary conditions, changed traffic patterns, and workers on or near the road. Fines are doubled in these zones.",
          difficulty: 1,
          options: [
            { content: "School zones with children present", isCorrect: false },
            { content: "Construction or maintenance work zones", isCorrect: true },
            { content: "Hazardous material transport routes", isCorrect: false },
            { content: "Detour or alternate route ahead", isCorrect: false },
          ],
        },
        {
          content: "A steady yellow traffic light when you are approaching an intersection means:",
          explanation: "A steady yellow light warns that the signal is about to turn red. You should stop if you can do so safely. If you are too close to stop safely, you may cautiously continue through the intersection.",
          difficulty: 1,
          options: [
            { content: "Speed up to get through before it turns red", isCorrect: false },
            { content: "Stop if you can do so safely", isCorrect: true },
            { content: "You have the right-of-way to proceed at full speed", isCorrect: false },
            { content: "Slow down to 15 mph and proceed", isCorrect: false },
          ],
        },
        {
          content: "Lane markings that are broken white lines indicate:",
          explanation: "Broken white lines separate lanes of traffic moving in the same direction. You may cross broken white lines to change lanes when it is safe to do so.",
          difficulty: 1,
          options: [
            { content: "Two-way traffic — passing is prohibited", isCorrect: false },
            { content: "Lanes moving in the same direction — lane changes are permitted when safe", isCorrect: true },
            { content: "Lanes moving in opposite directions", isCorrect: false },
            { content: "No lane changing allowed", isCorrect: false },
          ],
        },
        {
          content: "A solid yellow line on your side of the center line means:",
          explanation: "A solid yellow line on your side of the road means no passing. You must stay in your lane. Passing is only permitted from the side with a broken yellow line.",
          difficulty: 2,
          options: [
            { content: "You may pass when oncoming traffic is clear", isCorrect: false },
            { content: "Passing is not permitted from your side", isCorrect: true },
            { content: "Passing is allowed with caution", isCorrect: false },
            { content: "This is a two-way left-turn lane", isCorrect: false },
          ],
        },
        {
          content: "What does it mean when a school bus has its red lights flashing?",
          explanation: "When a school bus displays flashing red lights, all traffic from both directions must stop (except on divided highways with a physical barrier). You must remain stopped until the lights stop flashing and the bus moves or the driver signals you to pass.",
          difficulty: 1,
          options: [
            { content: "Slow to 15 mph and pass with caution", isCorrect: false },
            { content: "Stop from both directions — children may be crossing", isCorrect: true },
            { content: "Only oncoming traffic must stop", isCorrect: false },
            { content: "Stop only if a child is visible near the road", isCorrect: false },
          ],
        },
      ],
    },

    // ─── TOPIC 2: Right-of-Way Rules (15 questions) ─────────────────────────────
    {
      name: "行驶优先权",
      nameEn: "Right-of-Way Rules",
      description: "Who goes first at intersections, crosswalks, and special situations",
      questions: [
        {
          content: "At a four-way stop, two cars arrive at the same time at intersecting roads. Who has the right-of-way?",
          explanation: "When two vehicles arrive at a four-way stop at the same time, the vehicle on the RIGHT has the right-of-way. This is a fundamental rule at all-way stops when arrival times are equal.",
          difficulty: 1,
          options: [
            { content: "The vehicle on the left", isCorrect: false },
            { content: "The vehicle on the right", isCorrect: true },
            { content: "The vehicle traveling on the larger road", isCorrect: false },
            { content: "The vehicle going straight", isCorrect: false },
          ],
        },
        {
          content: "At an uncontrolled intersection (no signs or signals), who has the right-of-way?",
          explanation: "At an uncontrolled intersection, the vehicle that arrives first has the right-of-way. If two vehicles arrive at the same time, yield to the vehicle on your right.",
          difficulty: 2,
          options: [
            { content: "Vehicles traveling on the wider road", isCorrect: false },
            { content: "The vehicle that arrived first; if simultaneous, the vehicle on the right", isCorrect: true },
            { content: "Vehicles going straight always have priority", isCorrect: false },
            { content: "The larger vehicle always has priority", isCorrect: false },
          ],
        },
        {
          content: "When turning left at an intersection with a green light, you must yield to:",
          explanation: "When turning left on a green light (not a green arrow), you must yield to oncoming traffic and pedestrians who are close enough to be a hazard. The green light gives you permission to enter the intersection but not to turn unsafely.",
          difficulty: 1,
          options: [
            { content: "No one — a green light gives you the right-of-way", isCorrect: false },
            { content: "Oncoming vehicles and pedestrians", isCorrect: true },
            { content: "Only pedestrians in the crosswalk", isCorrect: false },
            { content: "Only emergency vehicles", isCorrect: false },
          ],
        },
        {
          content: "A pedestrian with a white cane or guide dog is at a crosswalk. You must:",
          explanation: "Blind pedestrians using a white cane or guide dog have the right-of-way at all times and in all locations, even outside of marked crosswalks. You must wait until they have completely crossed the road.",
          difficulty: 2,
          options: [
            { content: "Slow down and proceed if they are not yet in your lane", isCorrect: false },
            { content: "Stop and wait until they have completely crossed", isCorrect: true },
            { content: "Honk to alert them that you are proceeding", isCorrect: false },
            { content: "Proceed if the traffic signal says go", isCorrect: false },
          ],
        },
        {
          content: "You are driving on a road and come to a T-intersection. Which vehicles have the right-of-way?",
          explanation: "At a T-intersection, vehicles on the through road (the top of the T) have the right-of-way over vehicles on the terminating road (the stem of the T). Vehicles entering the through road must yield.",
          difficulty: 2,
          options: [
            { content: "The vehicle that arrives first", isCorrect: false },
            { content: "Vehicles on the through (continuing) road", isCorrect: true },
            { content: "The larger vehicle", isCorrect: false },
            { content: "The vehicle turning right", isCorrect: false },
          ],
        },
        {
          content: "You are driving on a mountain road and meet an oncoming car. There is only room for one car to pass. Who has the right-of-way?",
          explanation: "On a mountain road, the vehicle heading uphill has the right-of-way. The vehicle going downhill must pull over or back up to let the uphill vehicle pass. This is because it is more difficult and dangerous to control a vehicle while backing uphill.",
          difficulty: 2,
          options: [
            { content: "The vehicle going downhill", isCorrect: false },
            { content: "The vehicle going uphill", isCorrect: true },
            { content: "The larger vehicle", isCorrect: false },
            { content: "The vehicle that honks first", isCorrect: false },
          ],
        },
        {
          content: "You must yield the right-of-way to an emergency vehicle with flashing lights and a siren by:",
          explanation: "When an emergency vehicle approaches with lights and siren, you must immediately pull to the right side of the road (or nearest edge) and stop. Remain stopped until the vehicle passes. Never drive in the same path as the emergency vehicle.",
          difficulty: 1,
          options: [
            { content: "Speeding up to get out of its way", isCorrect: false },
            { content: "Pulling to the right and stopping until it passes", isCorrect: true },
            { content: "Slowing down and moving to the center of the road", isCorrect: false },
            { content: "Pulling to the left shoulder and stopping", isCorrect: false },
          ],
        },
        {
          content: "When may you pass a stopped vehicle at a pedestrian crosswalk?",
          explanation: "You may NEVER drive past a vehicle that has stopped at a crosswalk for a pedestrian. The stopped vehicle may be blocking your view of a pedestrian who is crossing. You must also stop and wait.",
          difficulty: 2,
          options: [
            { content: "When you can see no pedestrians are crossing", isCorrect: false },
            { content: "Never — you must also stop when another vehicle stops at a crosswalk", isCorrect: true },
            { content: "When the crosswalk light shows 'Walk'", isCorrect: false },
            { content: "When you are in a different lane from the stopped vehicle", isCorrect: false },
          ],
        },
        {
          content: "You are waiting to turn left. The oncoming traffic light turns yellow. Should you turn?",
          explanation: "A yellow light to oncoming traffic means they should be stopping. However, you must make sure they are actually stopping before you turn. If the oncoming vehicles are moving into the intersection, wait. Only proceed when it is genuinely safe.",
          difficulty: 3,
          options: [
            { content: "Yes, turn quickly because the light is changing", isCorrect: false },
            { content: "Only if oncoming vehicles are stopping and it is safe to do so", isCorrect: true },
            { content: "No, always wait for a green arrow to turn left", isCorrect: false },
            { content: "No, always wait until the intersection clears completely", isCorrect: false },
          ],
        },
        {
          content: "Who has the right-of-way when you are merging onto a freeway?",
          explanation: "Vehicles already on the freeway have the right-of-way. You must yield when merging onto a freeway and match the speed of freeway traffic. Use the on-ramp to accelerate to freeway speed before merging.",
          difficulty: 1,
          options: [
            { content: "You do, because you are entering the freeway", isCorrect: false },
            { content: "Vehicles already on the freeway", isCorrect: true },
            { content: "Whoever is going faster", isCorrect: false },
            { content: "You share it equally with freeway traffic", isCorrect: false },
          ],
        },
        {
          content: "When turning right from a two-lane road, you should be in which lane before the turn?",
          explanation: "Before turning right, you must move into the lane closest to the right curb (the right lane). Signal about 100 feet before the turn. Turning from a lane other than the rightmost lane is illegal and dangerous.",
          difficulty: 1,
          options: [
            { content: "Either lane — right turns can be made from any lane", isCorrect: false },
            { content: "The lane closest to the right curb", isCorrect: true },
            { content: "The left lane, to avoid hitting the curb", isCorrect: false },
            { content: "The center turn lane", isCorrect: false },
          ],
        },
        {
          content: "You are driving and a funeral procession is passing. You should:",
          explanation: "You should yield to a funeral procession. Funeral processions have the right-of-way at intersections. Do not cut through or interfere with the procession. However, if a traffic light turns red, the procession must stop.",
          difficulty: 2,
          options: [
            { content: "Honk and proceed through the procession if needed", isCorrect: false },
            { content: "Yield to the procession and do not cut through it", isCorrect: true },
            { content: "Maintain your speed — they must yield to regular traffic", isCorrect: false },
            { content: "Turn on your hazard lights and join the procession", isCorrect: false },
          ],
        },
        {
          content: "A bicyclist is in the lane in front of you. You want to pass. When is it safe to do so?",
          explanation: "When passing a bicyclist, California law requires you to give at least 3 feet of clearance. Wait until there is enough room and pass safely. Do not honk immediately behind the cyclist as it can cause them to swerve.",
          difficulty: 2,
          options: [
            { content: "As soon as the opposing lane is clear", isCorrect: false },
            { content: "When you can give at least 3 feet of clearance and it is safe", isCorrect: true },
            { content: "Only at intersections where you can turn around the cyclist", isCorrect: false },
            { content: "Bicycle riders must always yield to cars", isCorrect: false },
          ],
        },
        {
          content: "At a green light, you want to enter an intersection to turn left, but it is blocked with traffic. You should:",
          explanation: "You should never enter an intersection if you cannot completely cross it before the light turns red. This is known as 'blocking the box' and is illegal. Wait before the intersection until there is enough space to complete your turn.",
          difficulty: 2,
          options: [
            { content: "Enter the intersection and wait in the center for a gap", isCorrect: false },
            { content: "Wait before the intersection until there is room to complete your turn", isCorrect: true },
            { content: "Turn on your hazard lights and enter the intersection", isCorrect: false },
            { content: "Honk at traffic to clear the way", isCorrect: false },
          ],
        },
        {
          content: "When backing out of a driveway, you must yield to:",
          explanation: "When backing out of a driveway, you must yield to all pedestrians on the sidewalk and to vehicles on the street. You are entering the flow of traffic, so you have no right-of-way.",
          difficulty: 1,
          options: [
            { content: "Only vehicles coming from the left", isCorrect: false },
            { content: "Pedestrians on the sidewalk and all vehicles on the street", isCorrect: true },
            { content: "Nothing — drivers in the road must yield to exiting vehicles", isCorrect: false },
            { content: "Only emergency vehicles", isCorrect: false },
          ],
        },
      ],
    },

    // ─── TOPIC 3: Speed Limits (15 questions) ───────────────────────────────────
    {
      name: "速度限制",
      nameEn: "Speed Limits",
      description: "California speed laws, school zones, work zones, basic speed law",
      questions: [
        {
          content: "What is the maximum speed limit on a two-lane undivided highway in California, unless otherwise posted?",
          explanation: "The maximum speed limit on a two-lane undivided highway in California is 55 mph, unless signs indicate a higher limit. This applies to most rural two-lane roads.",
          difficulty: 1,
          options: [
            { content: "45 mph", isCorrect: false },
            { content: "55 mph", isCorrect: true },
            { content: "65 mph", isCorrect: false },
            { content: "70 mph", isCorrect: false },
          ],
        },
        {
          content: "The maximum speed limit on most California freeways is:",
          explanation: "The maximum speed limit on most California freeways is 65 mph. Some freeways allow 70 mph when posted. Always obey posted speed limit signs, as limits can vary.",
          difficulty: 1,
          options: [
            { content: "55 mph", isCorrect: false },
            { content: "60 mph", isCorrect: false },
            { content: "65 mph", isCorrect: true },
            { content: "75 mph", isCorrect: false },
          ],
        },
        {
          content: "What is the maximum speed limit in a school zone when children are present?",
          explanation: "The speed limit in a school zone when children are present is 25 mph. This applies when the school zone lights are flashing or a school crossing guard is present. Fines for violations in school zones are doubled.",
          difficulty: 1,
          options: [
            { content: "15 mph", isCorrect: false },
            { content: "20 mph", isCorrect: false },
            { content: "25 mph", isCorrect: true },
            { content: "35 mph", isCorrect: false },
          ],
        },
        {
          content: "What is the maximum speed in a residential district, unless otherwise posted?",
          explanation: "The maximum speed limit in a residential area (where people live) is 25 mph. This also applies in business districts. This limit exists to protect pedestrians, cyclists, and children who may be near the road.",
          difficulty: 1,
          options: [
            { content: "15 mph", isCorrect: false },
            { content: "20 mph", isCorrect: false },
            { content: "25 mph", isCorrect: true },
            { content: "30 mph", isCorrect: false },
          ],
        },
        {
          content: "What is California's 'Basic Speed Law'?",
          explanation: "California's Basic Speed Law states that you must never drive faster than is safe for current conditions — regardless of the posted speed limit. For example, if the limit is 55 mph but roads are icy, you must drive slower than 55 mph.",
          difficulty: 2,
          options: [
            { content: "You may drive up to 10 mph over the speed limit if traffic requires it", isCorrect: false },
            { content: "You must never drive faster than is safe for current road, weather, and traffic conditions", isCorrect: true },
            { content: "The posted speed limit is the minimum safe speed", isCorrect: false },
            { content: "Speed limits only apply during daylight hours", isCorrect: false },
          ],
        },
        {
          content: "When visibility is less than 100 feet due to heavy rain, fog, or smoke, you should not drive faster than:",
          explanation: "California law states that when visibility drops below 100 feet due to weather conditions (rain, fog, dust, smoke), you must not drive faster than 30 mph. The reduced visibility means you cannot react safely at higher speeds.",
          difficulty: 2,
          options: [
            { content: "15 mph", isCorrect: false },
            { content: "25 mph", isCorrect: false },
            { content: "30 mph", isCorrect: true },
            { content: "45 mph", isCorrect: false },
          ],
        },
        {
          content: "On wet or rainy roads, you should reduce your speed by approximately:",
          explanation: "On wet or rainy roads, the California Driver Handbook recommends reducing your speed by 5 to 10 mph from the posted limit. Wet roads reduce tire traction and increase stopping distance significantly.",
          difficulty: 2,
          options: [
            { content: "2 to 3 mph", isCorrect: false },
            { content: "5 to 10 mph", isCorrect: true },
            { content: "15 to 20 mph", isCorrect: false },
            { content: "Half the posted speed limit", isCorrect: false },
          ],
        },
        {
          content: "When driving on packed snow, you should reduce your speed to:",
          explanation: "On packed snow, you should reduce your speed to half the normal limit. Snow significantly reduces traction and braking ability. For example, if the limit is 60 mph, drive no faster than 30 mph on packed snow.",
          difficulty: 2,
          options: [
            { content: "10 mph below the posted limit", isCorrect: false },
            { content: "Half the posted speed limit", isCorrect: true },
            { content: "A maximum of 25 mph", isCorrect: false },
            { content: "No more than 30 mph", isCorrect: false },
          ],
        },
        {
          content: "When driving on icy roads, you should drive no faster than:",
          explanation: "On icy roads, you should drive no faster than 5 mph. Ice provides almost no traction, and even at very low speeds, sudden movements can cause the vehicle to slide out of control.",
          difficulty: 2,
          options: [
            { content: "15 mph", isCorrect: false },
            { content: "10 mph", isCorrect: false },
            { content: "5 mph", isCorrect: true },
            { content: "Half the speed limit", isCorrect: false },
          ],
        },
        {
          content: "What is the speed limit for driving within 100 feet of a railroad crossing when you cannot see the tracks clearly?",
          explanation: "When approaching a railroad crossing and you cannot see at least 400 feet in both directions, California law limits your speed to 15 mph within 100 feet of the crossing.",
          difficulty: 3,
          options: [
            { content: "10 mph", isCorrect: false },
            { content: "15 mph", isCorrect: true },
            { content: "25 mph", isCorrect: false },
            { content: "35 mph", isCorrect: false },
          ],
        },
        {
          content: "The maximum speed in an alley is:",
          explanation: "The maximum speed in an alley in California is 15 mph. Alleys are narrow with limited visibility, and pedestrians and vehicles may enter unexpectedly from driveways or doors.",
          difficulty: 2,
          options: [
            { content: "10 mph", isCorrect: false },
            { content: "15 mph", isCorrect: true },
            { content: "25 mph", isCorrect: false },
            { content: "There is no specific limit — use basic speed law", isCorrect: false },
          ],
        },
        {
          content: "On a freeway, you notice traffic has slowed ahead. You should:",
          explanation: "When you see brake lights ahead on a freeway, you should take your foot off the accelerator and begin slowing gradually. Tapping your brakes briefly turns on your brake lights to warn drivers behind you. Avoid sudden braking.",
          difficulty: 1,
          options: [
            { content: "Maintain your speed until you get close, then brake hard", isCorrect: false },
            { content: "Take your foot off the accelerator and slow gradually, warn drivers behind", isCorrect: true },
            { content: "Change lanes immediately to avoid the slowdown", isCorrect: false },
            { content: "Turn on your hazard lights and stop", isCorrect: false },
          ],
        },
        {
          content: "You are driving 55 mph and a vehicle passes you. That driver is:",
          explanation: "If you are driving at the speed limit and another vehicle passes you, you should stay in your lane and maintain your speed. Do not speed up to prevent them from passing. Speeding to block a pass is dangerous and illegal.",
          difficulty: 1,
          options: [
            { content: "Allowed to pass if they do so safely", isCorrect: true },
            { content: "Breaking the law and should be reported", isCorrect: false },
            { content: "Causing you to break the law by driving too slowly", isCorrect: false },
            { content: "Required to flash their lights before passing", isCorrect: false },
          ],
        },
        {
          content: "If you miss your exit on a freeway, you should:",
          explanation: "If you miss your freeway exit, continue to the next exit. Never back up on a freeway or expressway — it is extremely dangerous and illegal. Plan ahead by watching for signs indicating upcoming exits.",
          difficulty: 1,
          options: [
            { content: "Stop on the shoulder and back up to the exit", isCorrect: false },
            { content: "Continue to the next exit", isCorrect: true },
            { content: "Make a U-turn at the nearest gap in the median", isCorrect: false },
            { content: "Cross the median to go back to the exit", isCorrect: false },
          ],
        },
        {
          content: "You are driving on the freeway at 65 mph. What is the minimum following distance you should maintain?",
          explanation: "California recommends the 3-second rule for following distance. At freeway speeds (65 mph), 3 seconds of following distance equals about 286 feet. In poor conditions (rain, fog, at night), increase to 4-5 seconds.",
          difficulty: 2,
          options: [
            { content: "1 second", isCorrect: false },
            { content: "2 seconds", isCorrect: false },
            { content: "3 seconds", isCorrect: true },
            { content: "5 seconds", isCorrect: false },
          ],
        },
      ],
    },

    // ─── TOPIC 4: DUI & Alcohol Laws (12 questions) ─────────────────────────────
    {
      name: "酒驾与药物法规",
      nameEn: "DUI & Alcohol Laws",
      description: "BAC limits, DUI penalties, open container laws",
      questions: [
        {
          content: "What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older in California?",
          explanation: "In California, it is illegal for drivers 21 and older to drive with a BAC of 0.08% or higher. At this level, your ability to operate a vehicle safely is significantly impaired.",
          difficulty: 1,
          options: [
            { content: "0.04%", isCorrect: false },
            { content: "0.06%", isCorrect: false },
            { content: "0.08%", isCorrect: true },
            { content: "0.10%", isCorrect: false },
          ],
        },
        {
          content: "What is the legal BAC limit for drivers under 21 years old in California?",
          explanation: "California has a 'Zero Tolerance' law for underage drivers. Any driver under 21 with a BAC of 0.01% or higher is in violation. This is approximately the amount of alcohol in a few sips of beer.",
          difficulty: 1,
          options: [
            { content: "0.08%", isCorrect: false },
            { content: "0.05%", isCorrect: false },
            { content: "0.02%", isCorrect: false },
            { content: "0.01%", isCorrect: true },
          ],
        },
        {
          content: "What is the legal BAC limit for commercial driver's license (CDL) holders?",
          explanation: "Commercial drivers are held to a stricter standard. The legal BAC limit for CDL holders is 0.04% — half the limit for regular drivers. This applies when driving a commercial vehicle.",
          difficulty: 2,
          options: [
            { content: "0.08%", isCorrect: false },
            { content: "0.06%", isCorrect: false },
            { content: "0.04%", isCorrect: true },
            { content: "0.02%", isCorrect: false },
          ],
        },
        {
          content: "A DUI conviction in California stays on your driving record for:",
          explanation: "A DUI conviction remains on your California driving record for 10 years. During this time, it can be counted as a prior offense if you are convicted of another DUI, resulting in more severe penalties.",
          difficulty: 2,
          options: [
            { content: "3 years", isCorrect: false },
            { content: "5 years", isCorrect: false },
            { content: "7 years", isCorrect: false },
            { content: "10 years", isCorrect: true },
          ],
        },
        {
          content: "Under California's implied consent law, if you are arrested for DUI and refuse a chemical test, you will:",
          explanation: "California's implied consent law means that by driving on public roads, you have implicitly agreed to take a chemical test (breath, blood, or urine) if lawfully arrested for DUI. Refusing results in automatic license suspension, typically 1 year for a first offense.",
          difficulty: 2,
          options: [
            { content: "Be released without charge", isCorrect: false },
            { content: "Face automatic license suspension and other penalties", isCorrect: true },
            { content: "Only face a small fine", isCorrect: false },
            { content: "Have the DUI charges dismissed", isCorrect: false },
          ],
        },
        {
          content: "An open container of alcohol in a vehicle must be stored:",
          explanation: "An open container of alcohol must be kept in the trunk or, if there is no trunk, behind the last upright seat and away from the driver and passengers. It is illegal to have an open container accessible to the driver or passengers.",
          difficulty: 1,
          options: [
            { content: "Under the seat out of sight", isCorrect: false },
            { content: "In the glove compartment", isCorrect: false },
            { content: "In the trunk, away from the passenger area", isCorrect: true },
            { content: "In a bag in the back seat", isCorrect: false },
          ],
        },
        {
          content: "Which of the following CAN impair your driving ability as much as alcohol?",
          explanation: "Prescription drugs, over-the-counter medications, marijuana, and illegal drugs can all impair driving ability as much as alcohol. It is illegal to drive under the influence of ANY drug that affects your ability to drive safely.",
          difficulty: 2,
          options: [
            { content: "A cup of coffee", isCorrect: false },
            { content: "Prescription medications", isCorrect: true },
            { content: "Energy drinks", isCorrect: false },
            { content: "Antihistamines don't count as impairing drugs", isCorrect: false },
          ],
        },
        {
          content: "How many standard drinks does it take to reach a 0.08% BAC for a typical adult?",
          explanation: "Research suggests about 3-4 standard drinks in one hour can bring a typical adult to 0.08% BAC, though this varies by weight, gender, food consumption, and metabolism. The safest choice is not to drink at all if you plan to drive.",
          difficulty: 2,
          options: [
            { content: "1 drink", isCorrect: false },
            { content: "About 2 drinks", isCorrect: false },
            { content: "About 3 to 4 drinks", isCorrect: true },
            { content: "At least 6 drinks", isCorrect: false },
          ],
        },
        {
          content: "If you are under 21 and found in possession of alcohol in a vehicle, your vehicle may be impounded for:",
          explanation: "If a driver under 21 is found in possession of alcohol, California law allows the vehicle to be impounded for up to 30 days. This is in addition to other penalties such as fines and license suspension.",
          difficulty: 3,
          options: [
            { content: "24 hours", isCorrect: false },
            { content: "7 days", isCorrect: false },
            { content: "30 days", isCorrect: true },
            { content: "90 days", isCorrect: false },
          ],
        },
        {
          content: "Which of the following is the ONLY thing that can sober you up after drinking?",
          explanation: "Only time can sober you up. Your liver processes about one standard drink per hour. Coffee, cold showers, food, or exercise do NOT speed up this process. Feeling 'better' does not mean your BAC has decreased.",
          difficulty: 1,
          options: [
            { content: "Drinking coffee or energy drinks", isCorrect: false },
            { content: "Taking a cold shower", isCorrect: false },
            { content: "Eating a large meal", isCorrect: false },
            { content: "Time — your body processes alcohol at a fixed rate", isCorrect: true },
          ],
        },
        {
          content: "It is illegal to drink alcohol or smoke cannabis while driving:",
          explanation: "It is illegal for both drivers and passengers to drink alcohol or smoke cannabis while in a moving vehicle. Cannabis must be in a sealed container if transported. This applies to recreational cannabis as well.",
          difficulty: 1,
          options: [
            { content: "Only for the driver", isCorrect: false },
            { content: "For both the driver and passengers", isCorrect: true },
            { content: "Only on freeways", isCorrect: false },
            { content: "Only for drivers under 21", isCorrect: false },
          ],
        },
        {
          content: "After a DUI arrest, you have how many days to request a hearing to contest your license suspension?",
          explanation: "After a DUI arrest, your driver's license may be suspended automatically. You have 10 days from the date of arrest to request a hearing with the DMV to contest the suspension. If you miss this deadline, your license will be suspended automatically.",
          difficulty: 3,
          options: [
            { content: "5 days", isCorrect: false },
            { content: "10 days", isCorrect: true },
            { content: "30 days", isCorrect: false },
            { content: "60 days", isCorrect: false },
          ],
        },
      ],
    },

    // ─── TOPIC 5: Lane Usage & Passing (12 questions) ───────────────────────────
    {
      name: "车道使用与超车",
      nameEn: "Lane Usage & Passing",
      description: "Lane selection, passing rules, HOV lanes, center turn lanes",
      questions: [
        {
          content: "How far in advance should you signal before turning or changing lanes?",
          explanation: "California law requires you to signal at least 100 feet before turning or changing lanes in most situations. On freeways, you should signal earlier — approximately 5 seconds (about 400 feet) before changing lanes or exiting.",
          difficulty: 1,
          options: [
            { content: "25 feet", isCorrect: false },
            { content: "50 feet", isCorrect: false },
            { content: "100 feet", isCorrect: true },
            { content: "200 feet", isCorrect: false },
          ],
        },
        {
          content: "You may NOT pass another vehicle within how many feet of an intersection?",
          explanation: "You may not pass another vehicle within 100 feet of an intersection, railroad crossing, bridge, or tunnel. The reduced visibility and potential cross traffic make passing in these areas especially dangerous.",
          difficulty: 2,
          options: [
            { content: "50 feet", isCorrect: false },
            { content: "100 feet", isCorrect: true },
            { content: "200 feet", isCorrect: false },
            { content: "300 feet", isCorrect: false },
          ],
        },
        {
          content: "How long may you drive in a center two-way left-turn lane?",
          explanation: "A center two-way left-turn lane is marked with yellow lines and is used only for making left turns or completing U-turns. You may only drive in this lane for a maximum of 200 feet while preparing to turn.",
          difficulty: 2,
          options: [
            { content: "As long as needed to complete the turn", isCorrect: false },
            { content: "Up to 100 feet", isCorrect: false },
            { content: "Up to 200 feet", isCorrect: true },
            { content: "Up to 500 feet", isCorrect: false },
          ],
        },
        {
          content: "When driving on a freeway, which lane is used for passing?",
          explanation: "On a freeway, the left lane (fast lane) is the passing lane. After passing, move back to the right lane. California law requires drivers to keep right except when passing. Camping in the left lane is unsafe and can result in a ticket.",
          difficulty: 1,
          options: [
            { content: "The right lane", isCorrect: false },
            { content: "Any lane, as long as it is safe", isCorrect: false },
            { content: "The left lane", isCorrect: true },
            { content: "The center lane on a three-lane freeway", isCorrect: false },
          ],
        },
        {
          content: "When entering a bike lane to prepare for a right turn, how far from the intersection may you enter the lane?",
          explanation: "You may merge into a bike lane no more than 200 feet before the intersection where you intend to turn right. Always check for cyclists before entering the bike lane.",
          difficulty: 2,
          options: [
            { content: "50 feet", isCorrect: false },
            { content: "100 feet", isCorrect: false },
            { content: "200 feet", isCorrect: true },
            { content: "500 feet", isCorrect: false },
          ],
        },
        {
          content: "What is an HOV lane and who can use it?",
          explanation: "HOV (High Occupancy Vehicle) lanes, also called carpool lanes, are reserved for vehicles with 2 or more occupants (or sometimes 3+, as posted), motorcycles, buses, and some clean-air vehicles with special DMV decals. They help reduce congestion.",
          difficulty: 1,
          options: [
            { content: "A lane for heavy trucks and oversized vehicles", isCorrect: false },
            { content: "A lane for vehicles with 2+ occupants, motorcycles, and buses", isCorrect: true },
            { content: "A lane only for emergency vehicles", isCorrect: false },
            { content: "A lane open to all vehicles during off-peak hours", isCorrect: false },
          ],
        },
        {
          content: "When changing lanes, you should:",
          explanation: "The correct procedure for a lane change is: signal, check your mirror, check your blind spot by looking over your shoulder, and then change lanes when it is safe. Never rely only on mirrors — a car may be in your blind spot.",
          difficulty: 1,
          options: [
            { content: "Check your mirrors and immediately move over", isCorrect: false },
            { content: "Signal, check mirrors, check blind spot, then change lanes when safe", isCorrect: true },
            { content: "Look over your shoulder and change lanes without signaling if clear", isCorrect: false },
            { content: "Sound your horn to warn other drivers, then change lanes", isCorrect: false },
          ],
        },
        {
          content: "You may pass on the right only when:",
          explanation: "You may pass on the right only when the road has two or more lanes going in your direction, the driver ahead is turning left, or you are on a one-way street. Passing on the right on a two-lane undivided highway is illegal.",
          difficulty: 2,
          options: [
            { content: "You are in a hurry and the left lane is blocked", isCorrect: false },
            { content: "The highway has two or more lanes in your direction or the driver ahead is turning left", isCorrect: true },
            { content: "The speed limit is over 55 mph", isCorrect: false },
            { content: "The driver ahead is going 10 mph below the speed limit", isCorrect: false },
          ],
        },
        {
          content: "When merging onto a freeway from an on-ramp, you should:",
          explanation: "Use the on-ramp to accelerate to freeway speed before merging. Look for a safe gap in freeway traffic, signal, and merge smoothly. Never stop on an on-ramp unless forced to — it creates rear-end collision risk.",
          difficulty: 1,
          options: [
            { content: "Stop at the end of the ramp and wait for a gap", isCorrect: false },
            { content: "Accelerate to freeway speed and merge into a safe gap", isCorrect: true },
            { content: "Enter the freeway slowly and let freeway drivers adjust", isCorrect: false },
            { content: "Use the emergency lane until you reach freeway speed", isCorrect: false },
          ],
        },
        {
          content: "After passing a vehicle, you should return to your original lane when:",
          explanation: "After passing, you should return to your original lane only when you can see both headlights of the vehicle you passed in your rearview mirror. Cutting back too soon is dangerous and could cause a collision.",
          difficulty: 2,
          options: [
            { content: "You are about 10 feet ahead of the passed vehicle", isCorrect: false },
            { content: "You can see both headlights of the passed vehicle in your rearview mirror", isCorrect: true },
            { content: "The passing lane is clear behind you", isCorrect: false },
            { content: "Immediately after you pass the vehicle's front bumper", isCorrect: false },
          ],
        },
        {
          content: "Weaving between lanes in traffic:",
          explanation: "Weaving in and out of lanes is illegal and dangerous. It does not save significant time and dramatically increases the risk of a collision. Each lane change puts you at risk for an accident with vehicles in your blind spot.",
          difficulty: 1,
          options: [
            { content: "Is acceptable when traffic is slow", isCorrect: false },
            { content: "Is dangerous, illegal, and rarely saves time", isCorrect: true },
            { content: "Is permitted on freeways with three or more lanes", isCorrect: false },
            { content: "Is fine as long as you signal each lane change", isCorrect: false },
          ],
        },
        {
          content: "You are on a freeway and need to exit. When should you signal before your exit?",
          explanation: "On a freeway, you should begin signaling approximately 5 seconds before your exit, which is roughly 400 feet at freeway speeds. This gives other drivers time to anticipate your move.",
          difficulty: 2,
          options: [
            { content: "100 feet before the exit", isCorrect: false },
            { content: "200 feet before the exit", isCorrect: false },
            { content: "5 seconds (approximately 400 feet) before the exit", isCorrect: true },
            { content: "When you can see the exit sign", isCorrect: false },
          ],
        },
      ],
    },

    // ─── TOPIC 6: Safe Driving & Parking (15 questions) ─────────────────────────
    {
      name: "安全驾驶与停车",
      nameEn: "Safe Driving & Parking",
      description: "Following distance, distracted driving, night driving, parking rules",
      questions: [
        {
          content: "The 3-second rule is used to:",
          explanation: "The 3-second rule helps you maintain a safe following distance. Pick a fixed object ahead. When the vehicle in front passes it, count 3 seconds. If you reach the object before 3 seconds, you are following too closely. Increase this to 4-5 seconds in bad weather.",
          difficulty: 1,
          options: [
            { content: "Determine when to change lanes on a freeway", isCorrect: false },
            { content: "Maintain a safe following distance behind another vehicle", isCorrect: true },
            { content: "Calculate how long it takes to stop from 55 mph", isCorrect: false },
            { content: "Judge whether you have time to make a yellow light", isCorrect: false },
          ],
        },
        {
          content: "What is the main cause of distracted driving in the U.S. today?",
          explanation: "Cell phones are the primary cause of distracted driving. California law prohibits holding or using a cell phone while driving. You must use a hands-free device. Even with hands-free, phone conversations are a significant distraction.",
          difficulty: 1,
          options: [
            { content: "Eating and drinking while driving", isCorrect: false },
            { content: "Cell phones", isCorrect: true },
            { content: "Highway billboards", isCorrect: false },
            { content: "Loud music", isCorrect: false },
          ],
        },
        {
          content: "How far ahead should you scan the road while driving?",
          explanation: "You should scan the road at least 10 to 15 seconds (about a quarter mile on the highway) ahead of your vehicle. This gives you time to identify and respond to hazards before they become emergencies.",
          difficulty: 2,
          options: [
            { content: "One car length ahead", isCorrect: false },
            { content: "3 to 4 seconds ahead", isCorrect: false },
            { content: "At least 10 to 15 seconds ahead", isCorrect: true },
            { content: "As far as headlights illuminate at night", isCorrect: false },
          ],
        },
        {
          content: "You should use your high-beam headlights when:",
          explanation: "Use high beams on dark, open country roads and unlit streets when you cannot see oncoming traffic. Switch to low beams within 500 feet of an oncoming vehicle, within 300 feet when following another vehicle, and in rain or fog.",
          difficulty: 2,
          options: [
            { content: "In heavy rain or dense fog", isCorrect: false },
            { content: "On open roads with no oncoming traffic for at least 500 feet", isCorrect: true },
            { content: "Whenever you are on a highway", isCorrect: false },
            { content: "When you want others to see you more easily in fog", isCorrect: false },
          ],
        },
        {
          content: "When must you turn on your headlights in California?",
          explanation: "California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise. You must also use headlights whenever visibility is less than 1,000 feet (for example, in fog, rain, snow, or dust).",
          difficulty: 2,
          options: [
            { content: "Only after it gets completely dark", isCorrect: false },
            { content: "30 minutes after sunset until 30 minutes before sunrise", isCorrect: true },
            { content: "Only during rain or fog", isCorrect: false },
            { content: "Only when driving on unlit roads", isCorrect: false },
          ],
        },
        {
          content: "When you hear a siren or see flashing lights from an emergency vehicle, you should:",
          explanation: "California's 'Move Over' law requires you to safely pull to the right edge of the road and stop. If you cannot safely pull over immediately, slow down significantly. Remain stopped until the emergency vehicle has passed.",
          difficulty: 1,
          options: [
            { content: "Speed up to clear the road faster", isCorrect: false },
            { content: "Pull to the right edge of the road and stop", isCorrect: true },
            { content: "Maintain your speed and stay in your lane", isCorrect: false },
            { content: "Pull to the left lane to give them more room", isCorrect: false },
          ],
        },
        {
          content: "What should you do if you experience a tire blowout while driving?",
          explanation: "In a blowout, do not brake suddenly — this can cause a spinout. Hold the steering wheel firmly, ease off the accelerator, and steer straight. Let the car slow down naturally, then gently steer to the shoulder and stop.",
          difficulty: 2,
          options: [
            { content: "Immediately apply the brakes hard to stop quickly", isCorrect: false },
            { content: "Hold the wheel firmly, ease off the gas, steer straight, and slow gradually", isCorrect: true },
            { content: "Quickly turn the wheel to the side the tire blew out", isCorrect: false },
            { content: "Turn on your hazard lights and stop wherever you are", isCorrect: false },
          ],
        },
        {
          content: "You must not park within how many feet of a fire hydrant?",
          explanation: "California law prohibits parking within 15 feet of a fire hydrant. This ensures that fire trucks can access the hydrant quickly in an emergency. The curb near a hydrant is often painted red to mark this zone.",
          difficulty: 2,
          options: [
            { content: "5 feet", isCorrect: false },
            { content: "10 feet", isCorrect: false },
            { content: "15 feet", isCorrect: true },
            { content: "20 feet", isCorrect: false },
          ],
        },
        {
          content: "When parking uphill with a curb, which way should your front wheels be turned?",
          explanation: "When parking uphill with a curb, turn your wheels AWAY from the curb (to the left). If the brakes fail, the car will roll back and the curb will stop it. Without a curb, always turn wheels toward the edge of the road.",
          difficulty: 2,
          options: [
            { content: "Toward the curb (to the right)", isCorrect: false },
            { content: "Away from the curb (to the left)", isCorrect: true },
            { content: "Straight ahead", isCorrect: false },
            { content: "It does not matter — set the parking brake", isCorrect: false },
          ],
        },
        {
          content: "When parking downhill with a curb, which way should your front wheels be turned?",
          explanation: "When parking downhill with a curb, turn your wheels TOWARD the curb (to the right). If the brakes fail, the car will roll forward and the curb will stop it. This is the opposite of parking uphill.",
          difficulty: 2,
          options: [
            { content: "Away from the curb (to the left)", isCorrect: false },
            { content: "Toward the curb (to the right)", isCorrect: true },
            { content: "Straight ahead", isCorrect: false },
            { content: "It does not matter — engage the emergency brake", isCorrect: false },
          ],
        },
        {
          content: "You must not park within how many feet of a stop sign?",
          explanation: "California law prohibits parking within 30 feet of a stop sign. Parking too close to a stop sign blocks visibility for drivers trying to see cross-traffic, creating a dangerous situation.",
          difficulty: 3,
          options: [
            { content: "15 feet", isCorrect: false },
            { content: "20 feet", isCorrect: false },
            { content: "30 feet", isCorrect: true },
            { content: "50 feet", isCorrect: false },
          ],
        },
        {
          content: "Fatigue while driving is dangerous because it:",
          explanation: "Driver fatigue reduces alertness, slows reaction times, impairs judgment, and can even cause microsleep — brief moments where you fall asleep without realizing it. Fatigue impairs driving ability similarly to alcohol.",
          difficulty: 1,
          options: [
            { content: "Makes you drive faster than normal", isCorrect: false },
            { content: "Increases reaction time and can cause you to fall asleep at the wheel", isCorrect: true },
            { content: "Actually improves your focus by reducing distraction", isCorrect: false },
            { content: "Only affects you on long trips over 4 hours", isCorrect: false },
          ],
        },
        {
          content: "When stopped at a red light, you are struck from behind. You should first:",
          explanation: "If struck from behind, move to a safe location off the road if possible, then check for injuries and call 911. Do not leave the scene. Exchange information with the other driver. Even in minor accidents, report to the DMV within 10 days if damage exceeds $1,000.",
          difficulty: 2,
          options: [
            { content: "Get out immediately and confront the other driver", isCorrect: false },
            { content: "Move to safety, check for injuries, and call 911", isCorrect: true },
            { content: "Drive away to avoid blocking traffic", isCorrect: false },
            { content: "Stay in your car and wait for police without calling", isCorrect: false },
          ],
        },
        {
          content: "When driving in fog, you should use:",
          explanation: "In fog, use low-beam headlights (not high beams). High beams reflect off fog particles and actually reduce your visibility. Some cars have dedicated fog lights that aim downward for better visibility in fog.",
          difficulty: 1,
          options: [
            { content: "High-beam headlights for maximum visibility", isCorrect: false },
            { content: "Low-beam headlights or fog lights", isCorrect: true },
            { content: "Hazard lights and high beams together", isCorrect: false },
            { content: "No headlights — they reflect off the fog", isCorrect: false },
          ],
        },
        {
          content: "If your accelerator gets stuck while driving, you should:",
          explanation: "If your accelerator sticks, shift to Neutral, which disconnects the engine from the wheels. Steer to the side of the road and apply the brakes. Do NOT turn off the ignition while moving as this disables power steering and brakes.",
          difficulty: 3,
          options: [
            { content: "Turn off the ignition immediately", isCorrect: false },
            { content: "Shift to Neutral, steer to the side, and apply the brakes", isCorrect: true },
            { content: "Pump the brakes rapidly while steering straight", isCorrect: false },
            { content: "Pull the parking brake immediately to stop", isCorrect: false },
          ],
        },
      ],
    },
  ],
};
