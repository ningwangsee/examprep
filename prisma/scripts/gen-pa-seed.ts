/**
 * Pennsylvania DMV Seed Generator
 * Generates pennsylvania-dmv.ts with full ZH + ES translations via Claude API
 * Run: npx tsx prisma/scripts/gen-pa-seed.ts
 */
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic();

interface QuestionEn {
  content: string;
  explanation: string;
  handbookSection: string;
  difficulty: 1 | 2 | 3;
  options: { content: string; isCorrect: boolean }[];
}

interface TopicEn {
  name: string;
  nameEn: string;
  description: string;
  handbookUrl: string;
  questions: QuestionEn[];
}

const BASE_URL = "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual";

const topicsEn: TopicEn[] = [
  // ─── TOPIC 1: Traffic Signals, Signs & Markings ──────────────────────────
  {
    name: "Traffic Signals, Signs & Markings",
    nameEn: "Traffic Signals, Signs & Markings",
    description: "Traffic signals, road sign shapes and colors, and pavement markings",
    handbookUrl: `${BASE_URL}/chapter-2-signals-signs-and-pavement-markings`,
    questions: [
      {
        content: "What is the only octagon-shaped (8-sided) sign you will see on the road?",
        explanation: "The STOP sign is the only octagon-shaped sign. Its unique shape allows drivers to recognize it even when it is covered by snow or obscured by vegetation.",
        handbookSection: "Signals, Signs & Markings — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "Stop sign", isCorrect: true },
          { content: "Yield sign", isCorrect: false },
          { content: "No entry sign", isCorrect: false },
          { content: "Speed limit sign", isCorrect: false },
        ],
      },
      {
        content: "What is the only pennant-shaped (horizontal triangle) warning sign?",
        explanation: "The NO PASSING ZONE sign is the only pennant-shaped (like a pennant flag, horizontal triangle) sign. It marks the beginning of a no-passing zone and is placed on the left side of the road.",
        handbookSection: "Signals, Signs & Markings — Sign Shapes",
        difficulty: 2,
        options: [
          { content: "No passing zone sign", isCorrect: true },
          { content: "Yield sign", isCorrect: false },
          { content: "School crossing sign", isCorrect: false },
          { content: "Curve warning sign", isCorrect: false },
        ],
      },
      {
        content: "What shape and color are warning signs in Pennsylvania?",
        explanation: "Warning signs are diamond-shaped with a yellow background and black symbols or text. They warn drivers of potentially hazardous conditions or situations ahead.",
        handbookSection: "Signals, Signs & Markings — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "Diamond-shaped, yellow with black symbols", isCorrect: true },
          { content: "Rectangle, white with black text", isCorrect: false },
          { content: "Diamond-shaped, orange with black symbols", isCorrect: false },
          { content: "Pentagon, fluorescent yellow-green", isCorrect: false },
        ],
      },
      {
        content: "What shape and color are work zone signs in Pennsylvania?",
        explanation: "Work zone signs are diamond-shaped with an orange background and black symbols. Orange specifically indicates construction and maintenance work zones.",
        handbookSection: "Signals, Signs & Markings — Work Zones",
        difficulty: 1,
        options: [
          { content: "Diamond-shaped, orange with black symbols", isCorrect: true },
          { content: "Diamond-shaped, yellow with black symbols", isCorrect: false },
          { content: "Rectangle, orange with black text", isCorrect: false },
          { content: "Rectangle, red with white text", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing yellow traffic signal mean in Pennsylvania?",
        explanation: "A flashing yellow signal means CAUTION. You should slow down, look carefully in all directions, and proceed with care. You are not required to stop.",
        handbookSection: "Signals, Signs & Markings — Flashing Signals",
        difficulty: 1,
        options: [
          { content: "Caution — slow down, look, and proceed with care", isCorrect: true },
          { content: "Stop completely before proceeding", isCorrect: false },
          { content: "The signal is about to turn red — stop if possible", isCorrect: false },
          { content: "Yield to cross traffic only", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing red traffic signal mean?",
        explanation: "A flashing red signal must be treated the same as a stop sign. You must come to a complete stop, yield to all cross traffic and pedestrians, and proceed when safe.",
        handbookSection: "Signals, Signs & Markings — Flashing Signals",
        difficulty: 1,
        options: [
          { content: "Treat it as a stop sign — stop, yield, and proceed when safe", isCorrect: true },
          { content: "Slow down and proceed with caution", isCorrect: false },
          { content: "Yield to traffic from the left only", isCorrect: false },
          { content: "Stop only if other traffic is present", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing yellow arrow signal mean?",
        explanation: "A flashing yellow arrow means you may turn in the arrow's direction but you must first yield to oncoming traffic and pedestrians. It is a permissive turn signal, not protected.",
        handbookSection: "Signals, Signs & Markings — Arrow Signals",
        difficulty: 2,
        options: [
          { content: "You may turn but must yield to oncoming traffic and pedestrians", isCorrect: true },
          { content: "A protected turn — oncoming traffic is stopped", isCorrect: false },
          { content: "Do not turn in the arrow's direction", isCorrect: false },
          { content: "Turn only after coming to a complete stop", isCorrect: false },
        ],
      },
      {
        content: "If a traffic signal is not functioning, how should you treat the intersection?",
        explanation: "When a traffic signal is not functioning, treat the intersection as a four-way stop. All drivers must stop and yield the right-of-way based on stop sign rules.",
        handbookSection: "Signals, Signs & Markings — Non-Functioning Signals",
        difficulty: 2,
        options: [
          { content: "Treat it as a four-way stop", isCorrect: true },
          { content: "Proceed through without stopping", isCorrect: false },
          { content: "Yield to traffic from the right only", isCorrect: false },
          { content: "Only stop if another vehicle is present", isCorrect: false },
        ],
      },
      {
        content: "What does a solid yellow center line on your side of the road mean?",
        explanation: "A solid yellow center line on your side of the road means you may not cross the line to pass vehicles. The line on your side dictates whether you may pass.",
        handbookSection: "Signals, Signs & Markings — Center Lines",
        difficulty: 1,
        options: [
          { content: "You may not cross the line to pass", isCorrect: true },
          { content: "You may pass if the way is clearly visible", isCorrect: false },
          { content: "The lane is for turning only", isCorrect: false },
          { content: "Bicycle lane boundary — do not enter", isCorrect: false },
        ],
      },
      {
        content: "In Pennsylvania, what color lines separate traffic moving in opposite directions?",
        explanation: "Yellow lines separate traffic moving in opposite directions. White lines separate lanes of traffic moving in the same direction.",
        handbookSection: "Signals, Signs & Markings — Lane Lines",
        difficulty: 1,
        options: [
          { content: "Yellow lines", isCorrect: true },
          { content: "White lines", isCorrect: false },
          { content: "Red lines", isCorrect: false },
          { content: "Orange lines", isCorrect: false },
        ],
      },
      {
        content: "What does the pentagon (five-sided) shaped sign indicate?",
        explanation: "The pentagon-shaped sign is the only five-sided sign used on roadways. It indicates a school zone or school crossing, alerting drivers to watch for children.",
        handbookSection: "Signals, Signs & Markings — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "School zone or school crossing", isCorrect: true },
          { content: "Construction work zone", isCorrect: false },
          { content: "State park or recreational area", isCorrect: false },
          { content: "Bicycle route", isCorrect: false },
        ],
      },
      {
        content: "What do green signs with white lettering indicate?",
        explanation: "Green guide signs with white text provide direction and distance information. They show routes to destinations, exits, distances, and highway route markers.",
        handbookSection: "Signals, Signs & Markings — Guide Signs",
        difficulty: 1,
        options: [
          { content: "Direction and distance to destinations", isCorrect: true },
          { content: "Service areas such as gas, food, lodging", isCorrect: false },
          { content: "Regulatory requirements and speed limits", isCorrect: false },
          { content: "Construction work zones and delays", isCorrect: false },
        ],
      },
      {
        content: "What must you do when a pedestrian signal shows a steady DON'T WALK (or hand) indicator?",
        explanation: "A steady DON'T WALK signal or hand means you should not begin crossing the street. If you are already in the street when it changes to flashing, you should finish crossing.",
        handbookSection: "Signals, Signs & Markings — Pedestrian Signals",
        difficulty: 1,
        options: [
          { content: "Do not begin crossing — wait for the WALK signal", isCorrect: true },
          { content: "Cross quickly before the signal changes", isCorrect: false },
          { content: "Cross only from the right side of the street", isCorrect: false },
          { content: "Cross if no vehicles are present", isCorrect: false },
        ],
      },
      {
        content: "On Interstate highways in Pennsylvania, what do even-numbered routes generally indicate?",
        explanation: "Even-numbered Interstate routes run east-west. Odd-numbered routes run north-south. This system helps drivers navigate directionally across the country.",
        handbookSection: "Signals, Signs & Markings — Interstate Routes",
        difficulty: 2,
        options: [
          { content: "East-west routes", isCorrect: true },
          { content: "North-south routes", isCorrect: false },
          { content: "Toll routes", isCorrect: false },
          { content: "Routes through urban areas", isCorrect: false },
        ],
      },
      {
        content: "When driving in a posted work zone in Pennsylvania, what additional requirement applies to headlights?",
        explanation: "In Pennsylvania, headlights are required to be on in all posted work zones, even during daylight. Failure to use headlights in a work zone results in an additional $25 fine.",
        handbookSection: "Signals, Signs & Markings — Work Zones",
        difficulty: 2,
        options: [
          { content: "Headlights must be on at all times in posted work zones", isCorrect: true },
          { content: "High beams must be used in work zones", isCorrect: false },
          { content: "Hazard lights must be activated in work zones", isCorrect: false },
          { content: "No additional headlight requirement in work zones", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 2: Right-of-Way, Turns & Intersections ────────────────────────
  {
    name: "Right-of-Way, Turns & Intersections",
    nameEn: "Right-of-Way, Turns & Intersections",
    description: "Right-of-way rules, turning procedures, signaling, and emergency vehicles",
    handbookUrl: `${BASE_URL}/everyday-driving-skills`,
    questions: [
      {
        content: "At an uncontrolled intersection where two vehicles arrive at the same time, who must yield?",
        explanation: "At an uncontrolled intersection where vehicles arrive simultaneously, the driver on the left must yield to the driver on the right. The vehicle on the right has the right-of-way.",
        handbookSection: "Everyday Driving Skills — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "The vehicle on the left yields to the vehicle on the right", isCorrect: true },
          { content: "The vehicle on the right yields to the vehicle on the left", isCorrect: false },
          { content: "The driver going straight always has the right-of-way", isCorrect: false },
          { content: "The larger vehicle has the right-of-way", isCorrect: false },
        ],
      },
      {
        content: "When turning left at an intersection, you must yield to:",
        explanation: "When making a left turn, you must yield to all oncoming traffic (vehicles going straight or turning right) and to pedestrians in the crosswalk you are crossing.",
        handbookSection: "Everyday Driving Skills — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "All oncoming traffic and pedestrians in the crosswalk", isCorrect: true },
          { content: "Only to traffic coming from your right", isCorrect: false },
          { content: "No one — left-turning vehicles have the right-of-way", isCorrect: false },
          { content: "Only emergency vehicles", isCorrect: false },
        ],
      },
      {
        content: "In Pennsylvania, how far in advance must you signal before turning or changing lanes?",
        explanation: "Pennsylvania law requires signaling at least 100 feet before turning or changing lanes in urban areas. On rural highways and higher-speed roads, more warning distance is required.",
        handbookSection: "Everyday Driving Skills — Signaling",
        difficulty: 1,
        options: [
          { content: "At least 100 feet before the turn", isCorrect: true },
          { content: "At least 50 feet before the turn", isCorrect: false },
          { content: "At least 200 feet before the turn", isCorrect: false },
          { content: "Immediately before the turn is sufficient", isCorrect: false },
        ],
      },
      {
        content: "You must yield to pedestrians at crosswalks. Which of the following is true about pedestrian right-of-way?",
        explanation: "Drivers must yield to pedestrians in marked and unmarked crosswalks. You must also yield to blind pedestrians carrying white canes or using guide dogs at any location.",
        handbookSection: "Everyday Driving Skills — Pedestrian Right-of-Way",
        difficulty: 1,
        options: [
          { content: "Yield at marked and unmarked crosswalks; always yield to blind pedestrians", isCorrect: true },
          { content: "Yield only at marked crosswalks", isCorrect: false },
          { content: "Yield only when the pedestrian has the WALK signal", isCorrect: false },
          { content: "Pedestrians must yield to motor vehicles at all intersections", isCorrect: false },
        ],
      },
      {
        content: "When must you pull over and stop for an emergency vehicle in Pennsylvania?",
        explanation: "When an emergency vehicle uses sirens or flashing red or red-blue lights, you must pull to the right curb or edge and stop. You must remain stopped until the vehicle passes and you must maintain 500 feet following distance after it passes.",
        handbookSection: "Everyday Driving Skills — Emergency Vehicles",
        difficulty: 1,
        options: [
          { content: "Pull to the right and stop; stay 500 feet back after it passes", isCorrect: true },
          { content: "Slow down to 25 mph and continue driving", isCorrect: false },
          { content: "Only stop if the emergency vehicle is behind you", isCorrect: false },
          { content: "Pull to the left edge and stop", isCorrect: false },
        ],
      },
      {
        content: "What does Pennsylvania's Steer Clear (Move Over) law require?",
        explanation: "Pennsylvania's Steer Clear law requires drivers to move to a non-adjacent lane when passing emergency responders or highway workers. If changing lanes is not possible, you must reduce speed. Fines start at $250 for a first offense.",
        handbookSection: "Everyday Driving Skills — Move Over Law",
        difficulty: 2,
        options: [
          { content: "Move to a non-adjacent lane, or slow down if changing lanes is not possible", isCorrect: true },
          { content: "Stop completely when passing emergency vehicles", isCorrect: false },
          { content: "Honk to warn workers and pass at normal speed", isCorrect: false },
          { content: "Only applies on highways — not on local roads", isCorrect: false },
        ],
      },
      {
        content: "What is the proper lane position when turning right?",
        explanation: "When making a right turn, approach in the right lane, move as close to the right curb as possible, and turn into the right lane of the destination road.",
        handbookSection: "Everyday Driving Skills — Turning",
        difficulty: 1,
        options: [
          { content: "Approach in the right lane and turn into the nearest right lane", isCorrect: true },
          { content: "Approach from the center lane for visibility", isCorrect: false },
          { content: "Make a wide turn to avoid the curb", isCorrect: false },
          { content: "Turn from any lane as long as you signal", isCorrect: false },
        ],
      },
      {
        content: "When must you yield to a vehicle on a through road when entering from an alley or driveway?",
        explanation: "When entering a highway from an alley, driveway, or private road, you must stop and yield to ALL traffic on the highway and to pedestrians on the sidewalk before entering.",
        handbookSection: "Everyday Driving Skills — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "Always — stop and yield to all highway traffic and pedestrians", isCorrect: true },
          { content: "Only if traffic is within 500 feet", isCorrect: false },
          { content: "Yield only to traffic from the left", isCorrect: false },
          { content: "Signal and enter when your speed matches traffic", isCorrect: false },
        ],
      },
      {
        content: "In Pennsylvania, when are you allowed to pass another vehicle on the right?",
        explanation: "In Pennsylvania, you may pass on the right only when the vehicle ahead is turning left and there is a clear lane to the right, or on a one-way street with multiple lanes. Passing on the shoulder is illegal.",
        handbookSection: "Everyday Driving Skills — Passing",
        difficulty: 2,
        options: [
          { content: "When the vehicle ahead is turning left and there is a clear lane to the right", isCorrect: true },
          { content: "Any time traffic to the left is moving slowly", isCorrect: false },
          { content: "On the shoulder when traffic is congested", isCorrect: false },
          { content: "You may never pass on the right in Pennsylvania", isCorrect: false },
        ],
      },
      {
        content: "What should you do when approaching a roundabout (traffic circle)?",
        explanation: "When approaching a roundabout, yield to traffic already circulating inside. Enter when there is a safe gap, travel counterclockwise, and exit at your desired street.",
        handbookSection: "Everyday Driving Skills — Roundabouts",
        difficulty: 1,
        options: [
          { content: "Yield to traffic already in the circle, then enter when safe", isCorrect: true },
          { content: "Enter immediately — vehicles entering have the right-of-way", isCorrect: false },
          { content: "Stop completely before entering the circle", isCorrect: false },
          { content: "Yield only to traffic coming from your right", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 3: Speed, Space Management & Defensive Driving ────────────────
  {
    name: "Speed, Space & Defensive Driving",
    nameEn: "Speed, Space & Defensive Driving",
    description: "Speed limits, following distances, school buses, and defensive driving techniques",
    handbookUrl: `${BASE_URL}/special-circumstances-and-emergencies`,
    questions: [
      {
        content: "What is the default speed limit in a Pennsylvania urban district when no sign is posted?",
        explanation: "In Pennsylvania, the default speed limit in an urban district is 35 mph. In residential areas, the limit may be lower. You must always drive at a safe speed for conditions.",
        handbookSection: "Everyday Driving Skills — Urban Speed Limits",
        difficulty: 2,
        options: [
          { content: "35 mph", isCorrect: true },
          { content: "25 mph", isCorrect: false },
          { content: "30 mph", isCorrect: false },
          { content: "40 mph", isCorrect: false },
        ],
      },
      {
        content: "How far back must you stop from a school bus with flashing red lights and stop arm extended?",
        explanation: "Pennsylvania law requires you to stop at least 10 feet from a school bus when its red lights flash and the stop arm is extended. You must stop whether you are behind or approaching from the front.",
        handbookSection: "Everyday Driving Skills — School Buses",
        difficulty: 2,
        options: [
          { content: "At least 10 feet", isCorrect: true },
          { content: "At least 25 feet", isCorrect: false },
          { content: "At least 5 feet", isCorrect: false },
          { content: "At least 50 feet", isCorrect: false },
        ],
      },
      {
        content: "Illegally passing a stopped school bus in Pennsylvania results in:",
        explanation: "Passing a stopped school bus in Pennsylvania results in a 60-day license suspension, 5 points on your driving record, and significant fines. This offense is taken very seriously to protect children.",
        handbookSection: "Everyday Driving Skills — School Buses",
        difficulty: 2,
        options: [
          { content: "60-day license suspension and 5 points on your record", isCorrect: true },
          { content: "A warning for first offense only", isCorrect: false },
          { content: "30-day suspension and 3 points", isCorrect: false },
          { content: "1-year suspension for any offense", isCorrect: false },
        ],
      },
      {
        content: "When following a large truck or bus, what is the recommended following distance?",
        explanation: "When following large trucks or buses, maintain at least a 4-second following distance. This keeps you out of their rear blind spot and gives you adequate stopping distance. Increase this in poor conditions.",
        handbookSection: "Everyday Driving Skills — Following Distance",
        difficulty: 2,
        options: [
          { content: "At least 4 seconds", isCorrect: true },
          { content: "At least 2 seconds", isCorrect: false },
          { content: "At least 6 seconds", isCorrect: false },
          { content: "At least 1 car length per 10 mph", isCorrect: false },
        ],
      },
      {
        content: "On a divided highway in Pennsylvania where the two roadways are physically separated, must you stop for an oncoming school bus with flashing lights?",
        explanation: "On a divided highway where the two roadways are separated by a physical barrier, you do NOT need to stop for a school bus traveling in the opposite direction. However, you must still stop if traveling in the same direction as the bus.",
        handbookSection: "Everyday Driving Skills — School Buses",
        difficulty: 3,
        options: [
          { content: "No — divided highways with physical barriers are an exception", isCorrect: true },
          { content: "Yes — you must always stop for a school bus in all directions", isCorrect: false },
          { content: "Only stop if the bus is within 100 feet of you", isCorrect: false },
          { content: "Yes — unless you are on an interstate highway", isCorrect: false },
        ],
      },
      {
        content: "What must you do before passing another vehicle on a two-lane road?",
        explanation: "Before passing on a two-lane road, signal your intention, check that you can see far enough ahead to complete the pass safely, and check mirrors and blind spots. You need more distance than you might think — especially when passing trucks.",
        handbookSection: "Everyday Driving Skills — Passing",
        difficulty: 2,
        options: [
          { content: "Signal, verify clear sight distance, check mirrors and blind spots", isCorrect: true },
          { content: "Sound your horn and pass quickly", isCorrect: false },
          { content: "Flash your high beams to alert oncoming traffic", isCorrect: false },
          { content: "Always wait for the other driver to wave you past", isCorrect: false },
        ],
      },
      {
        content: "In adverse weather conditions (rain, snow, fog), how should you adjust your speed?",
        explanation: "In adverse conditions, you must reduce your speed below the posted limit to maintain control. The posted speed limit reflects ideal conditions. You must drive at a safe speed for the actual conditions.",
        handbookSection: "Everyday Driving Skills — Adverse Conditions",
        difficulty: 1,
        options: [
          { content: "Reduce speed below the posted limit based on road conditions", isCorrect: true },
          { content: "Maintain the posted limit — that is always the maximum safe speed", isCorrect: false },
          { content: "Only slow down if precipitation is actively falling", isCorrect: false },
          { content: "Reduce by exactly 10 mph in all adverse conditions", isCorrect: false },
        ],
      },
      {
        content: "When should you use your vehicle's horn in Pennsylvania?",
        explanation: "Use your horn only when necessary to warn other drivers or pedestrians of danger. Do not use it to express anger, frustration, or to greet other drivers. Unnecessary horn use is illegal.",
        handbookSection: "Everyday Driving Skills — Vehicle Controls",
        difficulty: 1,
        options: [
          { content: "Only when necessary to warn others of danger", isCorrect: true },
          { content: "To alert other drivers when you want to pass", isCorrect: false },
          { content: "Any time you feel it is helpful", isCorrect: false },
          { content: "When someone cuts you off in traffic", isCorrect: false },
        ],
      },
      {
        content: "How far after an emergency vehicle passes must you maintain at least 500 feet of following distance?",
        explanation: "After an emergency vehicle passes with lights and sirens, you must stay at least 500 feet behind it until it clears the roadway. This protects the emergency responders and others near the vehicle.",
        handbookSection: "Everyday Driving Skills — Emergency Vehicles",
        difficulty: 2,
        options: [
          { content: "At all times until the emergency vehicle clears the roadway", isCorrect: true },
          { content: "Only for 30 seconds after it passes", isCorrect: false },
          { content: "Only on highways — not on local roads", isCorrect: false },
          { content: "Until the next intersection", isCorrect: false },
        ],
      },
      {
        content: "How much clearance must you give when passing a bicycle rider on a Pennsylvania road?",
        explanation: "Pennsylvania law requires motorists to give bicycle riders at least 4 feet of clearance when passing. You may cross the center line to do so if the way is clear.",
        handbookSection: "Everyday Driving Skills — Sharing the Road",
        difficulty: 2,
        options: [
          { content: "At least 4 feet", isCorrect: true },
          { content: "At least 3 feet", isCorrect: false },
          { content: "At least 2 feet", isCorrect: false },
          { content: "At least 6 feet", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 4: Alcohol, Drugs & DUI ───────────────────────────────────────
  {
    name: "Alcohol, Drugs & DUI",
    nameEn: "Alcohol, Drugs & DUI",
    description: "Pennsylvania DUI laws, BAC tiers, implied consent, and penalties",
    handbookUrl: `${BASE_URL}/driver-factors`,
    questions: [
      {
        content: "What blood alcohol content (BAC) is the legal limit for adult (21+) drivers in Pennsylvania?",
        explanation: "In Pennsylvania, a BAC of 0.08 or higher is illegal for adult drivers age 21 and over. This is the General Impairment level, and higher BAC levels trigger enhanced penalties.",
        handbookSection: "Driver Factors — BAC Limits",
        difficulty: 1,
        options: [
          { content: "0.08 or higher", isCorrect: true },
          { content: "0.10 or higher", isCorrect: false },
          { content: "0.05 or higher", isCorrect: false },
          { content: "0.12 or higher", isCorrect: false },
        ],
      },
      {
        content: "Pennsylvania has three tiers of DUI based on BAC. What BAC range is the \"High BAC\" tier?",
        explanation: "Pennsylvania's High BAC tier covers 0.10 to 0.159 BAC. General Impairment is 0.08–0.099, and Highest BAC is 0.16 or above. Higher tiers carry more severe penalties.",
        handbookSection: "Driver Factors — DUI Tiers",
        difficulty: 3,
        options: [
          { content: "0.10 to 0.159 BAC", isCorrect: true },
          { content: "0.08 to 0.099 BAC", isCorrect: false },
          { content: "0.16 or higher", isCorrect: false },
          { content: "0.05 to 0.079 BAC", isCorrect: false },
        ],
      },
      {
        content: "Under Pennsylvania's Zero Tolerance Law, what BAC is illegal for drivers under age 21?",
        explanation: "Pennsylvania's Zero Tolerance Law makes any measurable amount of alcohol illegal for drivers under 21. A BAC of 0.02 or higher triggers the underage DUI law.",
        handbookSection: "Driver Factors — Zero Tolerance",
        difficulty: 1,
        options: [
          { content: "0.02 or higher", isCorrect: true },
          { content: "0.05 or higher", isCorrect: false },
          { content: "0.08 or higher", isCorrect: false },
          { content: "Any measurable amount including 0.01", isCorrect: false },
        ],
      },
      {
        content: "Even before your BAC reaches 0.08, alcohol affects your driving ability. At what level does research show crash risk roughly doubles?",
        explanation: "Research shows that even at 0.04 BAC (half the legal limit), a driver is between two and seven times more likely to be in a crash. Alcohol impairs judgment and reaction time well before the legal limit.",
        handbookSection: "Driver Factors — Effects of Alcohol",
        difficulty: 2,
        options: [
          { content: "At 0.04 BAC — half the legal limit", isCorrect: true },
          { content: "Only at the legal limit of 0.08", isCorrect: false },
          { content: "At 0.10 BAC", isCorrect: false },
          { content: "Crash risk only increases above 0.08", isCorrect: false },
        ],
      },
      {
        content: "What does Pennsylvania's Implied Consent Law require of drivers?",
        explanation: "By driving in Pennsylvania, you implicitly agree to submit to chemical testing (breath, blood, or urine) if a police officer has reasonable grounds to believe you are DUI. Refusal leads to automatic license suspension.",
        handbookSection: "Driver Factors — Implied Consent",
        difficulty: 1,
        options: [
          { content: "Drivers consent to chemical testing when an officer has reasonable grounds", isCorrect: true },
          { content: "You may refuse testing without any penalty", isCorrect: false },
          { content: "Police must have a warrant before testing", isCorrect: false },
          { content: "Only blood tests are covered by implied consent", isCorrect: false },
        ],
      },
      {
        content: "Approximately how much of Pennsylvania traffic deaths involve alcohol-impaired drivers?",
        explanation: "According to Pennsylvania's driver manual, approximately 40% of traffic deaths involve drinking drivers. This underscores why impaired driving is such a serious issue.",
        handbookSection: "Driver Factors — Statistics",
        difficulty: 2,
        options: [
          { content: "About 40%", isCorrect: true },
          { content: "About 10%", isCorrect: false },
          { content: "About 25%", isCorrect: false },
          { content: "About 60%", isCorrect: false },
        ],
      },
      {
        content: "Being awake for 18 consecutive hours impairs your driving to a level equivalent to a BAC of approximately:",
        explanation: "Research in Pennsylvania's manual shows that being awake for 18 hours is equivalent to a BAC of approximately 0.05, and being awake for 24 hours is equivalent to 0.10 BAC. Drowsy driving is dangerous.",
        handbookSection: "Driver Factors — Drowsy Driving",
        difficulty: 2,
        options: [
          { content: "0.05 BAC", isCorrect: true },
          { content: "0.02 BAC", isCorrect: false },
          { content: "0.08 BAC", isCorrect: false },
          { content: "0.10 BAC", isCorrect: false },
        ],
      },
      {
        content: "Which of the following is a primary offense under Pennsylvania's anti-texting law?",
        explanation: "Texting while driving is a primary offense in Pennsylvania. Officers can stop you solely for texting while driving. The fine is $50. It applies to all interactive wireless communication devices.",
        handbookSection: "Driver Factors — Distracted Driving",
        difficulty: 2,
        options: [
          { content: "Texting while driving — $50 fine, primary offense", isCorrect: true },
          { content: "Adjusting the radio while driving", isCorrect: false },
          { content: "Eating while driving", isCorrect: false },
          { content: "Hands-free phone conversations", isCorrect: false },
        ],
      },
      {
        content: "A safe drinking guideline (for of-age drivers who plan to drive) is:",
        explanation: "Pennsylvania's manual states: do not drink more than one drink per hour if you plan to drive. The body processes approximately one drink per hour. However, the safest choice is not to drink before driving at all.",
        handbookSection: "Driver Factors — Effects of Alcohol",
        difficulty: 2,
        options: [
          { content: "No more than one drink per hour if you plan to drive", isCorrect: true },
          { content: "Two drinks per hour is acceptable for most adults", isCorrect: false },
          { content: "Only beer and wine are safe to drink before driving", isCorrect: false },
          { content: "As long as you feel fine, there is no safe drinking limit", isCorrect: false },
        ],
      },
      {
        content: "Can you be charged with DUI in Pennsylvania for driving while impaired by a legally prescribed medication?",
        explanation: "Yes. Pennsylvania's DUI law applies to any substance that impairs your ability to drive — including legally prescribed drugs, over-the-counter medications, or any controlled substance. Being prescribed the drug is not a defense to DUI.",
        handbookSection: "Driver Factors — Drug Impairment",
        difficulty: 2,
        options: [
          { content: "Yes — impairment by any substance, including prescriptions, can result in DUI", isCorrect: true },
          { content: "No — legally prescribed medications are exempt from DUI law", isCorrect: false },
          { content: "Only if the medication is a controlled substance", isCorrect: false },
          { content: "Only if the medication caused you to exceed 0.08 BAC", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 5: Driver License & PA-Specific Laws ───────────────────────────
  {
    name: "Driver License & PA Laws",
    nameEn: "Driver License & PA Laws",
    description: "License requirements, GDL rules, points system, and Pennsylvania-specific laws",
    handbookUrl: `${BASE_URL}/applying-for-a-learners-permit`,
    questions: [
      {
        content: "How many questions are on the Pennsylvania knowledge test, and what is the passing score?",
        explanation: "The Pennsylvania knowledge test consists of 18 multiple-choice questions. You must correctly answer at least 15 questions (83%) to pass the test.",
        handbookSection: "Driver License — Knowledge Test",
        difficulty: 1,
        options: [
          { content: "18 questions; must answer at least 15 correct (83%)", isCorrect: true },
          { content: "20 questions; must answer at least 16 correct (80%)", isCorrect: false },
          { content: "50 questions; must answer at least 40 correct (80%)", isCorrect: false },
          { content: "25 questions; must answer at least 20 correct (80%)", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum age to apply for a learner's permit in Pennsylvania?",
        explanation: "In Pennsylvania, you must be at least 16 years old to apply for a learner's permit. You will need to pass a vision screening and a knowledge test.",
        handbookSection: "Driver License — Learner's Permit",
        difficulty: 1,
        options: [
          { content: "16 years old", isCorrect: true },
          { content: "15 years old", isCorrect: false },
          { content: "17 years old", isCorrect: false },
          { content: "14 years old", isCorrect: false },
        ],
      },
      {
        content: "How many hours of supervised driving must Pennsylvania teen drivers complete before a road test?",
        explanation: "Pennsylvania teens must complete at least 65 hours of supervised driving, including at least 10 hours at night and 5 hours in inclement weather, before taking the road test.",
        handbookSection: "Driver License — GDL Requirements",
        difficulty: 2,
        options: [
          { content: "65 hours (including 10 at night and 5 in bad weather)", isCorrect: true },
          { content: "50 hours (including 10 at night)", isCorrect: false },
          { content: "40 hours (no nighttime requirement)", isCorrect: false },
          { content: "30 hours (including 5 at night)", isCorrect: false },
        ],
      },
      {
        content: "Under Pennsylvania's GDL, what are the nighttime driving restrictions for junior drivers?",
        explanation: "Junior license holders in Pennsylvania may not drive between 11 p.m. and 5 a.m. Exceptions include traveling to/from employment, school activities, or volunteer emergency services.",
        handbookSection: "Driver License — GDL Rules",
        difficulty: 2,
        options: [
          { content: "No driving between 11 p.m. and 5 a.m. (with limited exceptions)", isCorrect: true },
          { content: "No driving between midnight and 6 a.m.", isCorrect: false },
          { content: "No nighttime restriction if accompanied by a licensed adult", isCorrect: false },
          { content: "No driving between 10 p.m. and 6 a.m.", isCorrect: false },
        ],
      },
      {
        content: "What happens to a Pennsylvania driver's license when they accumulate 11 or more points?",
        explanation: "When a Pennsylvania driver accumulates 11 or more points on their record, their license is automatically suspended. The length of suspension depends on the number of points and prior suspensions.",
        handbookSection: "Driver License — Points System",
        difficulty: 2,
        options: [
          { content: "License is automatically suspended", isCorrect: true },
          { content: "Driver receives a warning letter only", isCorrect: false },
          { content: "Driver must take a defensive driving course", isCorrect: false },
          { content: "License is revoked permanently", isCorrect: false },
        ],
      },
      {
        content: "How many points are removed from a Pennsylvania driving record for every 12 consecutive months without a violation or suspension?",
        explanation: "In Pennsylvania, 3 points are removed from a driver's record for every 12 consecutive months in which no violations or suspensions occur. This rewards safe driving behavior.",
        handbookSection: "Driver License — Points System",
        difficulty: 2,
        options: [
          { content: "3 points", isCorrect: true },
          { content: "6 points", isCorrect: false },
          { content: "2 points", isCorrect: false },
          { content: "5 points", isCorrect: false },
        ],
      },
      {
        content: "Pennsylvania requires all drivers and front-seat passengers to wear seat belts. What about rear-seat passengers?",
        explanation: "In Pennsylvania, all passengers ages 8 through 17 must wear a seat belt regardless of seating position. Adults 18 and older are only required to wear seat belts in the front seat.",
        handbookSection: "Driver License — Seat Belt Laws",
        difficulty: 2,
        options: [
          { content: "All passengers ages 8-17 must wear seat belts in any seat", isCorrect: true },
          { content: "All passengers in all seats must wear seat belts", isCorrect: false },
          { content: "No rear-seat requirement for anyone", isCorrect: false },
          { content: "Only children under 8 require restraints in the rear", isCorrect: false },
        ],
      },
      {
        content: "What child restraint is required for children under age 4 in Pennsylvania?",
        explanation: "Children under age 4 in Pennsylvania must be in a federally approved child safety seat. Children under age 2 must be in a rear-facing seat, and rear-facing seats must never be placed in front seats with active airbags.",
        handbookSection: "Driver License — Child Restraints",
        difficulty: 1,
        options: [
          { content: "A federally approved child safety seat (rear-facing for under age 2)", isCorrect: true },
          { content: "A seat belt alone is sufficient", isCorrect: false },
          { content: "Any child restraint the parent chooses", isCorrect: false },
          { content: "Car seats are only required for infants under 1 year", isCorrect: false },
        ],
      },
      {
        content: "Within how many days must you notify PennDOT of an address or name change?",
        explanation: "Pennsylvania law requires you to notify PennDOT within 15 days of any change of address or name. This applies even if you are moving out of state.",
        handbookSection: "Driver License — Record Maintenance",
        difficulty: 2,
        options: [
          { content: "Within 15 days", isCorrect: true },
          { content: "Within 30 days", isCorrect: false },
          { content: "Within 60 days", isCorrect: false },
          { content: "Within 10 days", isCorrect: false },
        ],
      },
      {
        content: "What additional driving restriction applies to a teen with a junior license if they accumulate 6 or more points?",
        explanation: "For Pennsylvania teen drivers with a junior license, accumulating 6 or more points — or speeding more than 26 mph over the limit — results in a 90-day license suspension for the first offense, 120 days for each subsequent offense.",
        handbookSection: "Driver License — Junior License Rules",
        difficulty: 3,
        options: [
          { content: "90-day suspension for first offense; 120 days for each subsequent offense", isCorrect: true },
          { content: "30-day suspension only", isCorrect: false },
          { content: "Mandatory defensive driving school — no suspension", isCorrect: false },
          { content: "Permanent revocation of junior license", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 6: Safe Driving, Sharing the Road & Crash Procedures ──────────
  {
    name: "Safe Driving & Sharing the Road",
    nameEn: "Safe Driving & Sharing the Road",
    description: "Defensive driving, vehicle safety, sharing the road, and crash procedures",
    handbookUrl: `${BASE_URL}/choosing-safety-first`,
    questions: [
      {
        content: "What information must you exchange after a traffic crash in Pennsylvania?",
        explanation: "After a crash, you must exchange your name, address, vehicle registration, and driver's license number with the other driver. You must also show your insurance information. Render aid to injured persons.",
        handbookSection: "Choosing Safety First — Crash Procedures",
        difficulty: 1,
        options: [
          { content: "Name, address, registration, license number, and insurance information", isCorrect: true },
          { content: "Only your insurance card is needed", isCorrect: false },
          { content: "Phone number and verbal description of the crash", isCorrect: false },
          { content: "Only your name — the police handle the rest", isCorrect: false },
        ],
      },
      {
        content: "When are you required to use your headlights in Pennsylvania?",
        explanation: "Pennsylvania requires headlights from sunset to sunrise, and any time conditions such as rain, snow, or fog reduce visibility. Headlights must also be on in all posted work zones.",
        handbookSection: "Choosing Safety First — Headlight Laws",
        difficulty: 1,
        options: [
          { content: "Sunset to sunrise, during precipitation, and in all posted work zones", isCorrect: true },
          { content: "Only from sunset to sunrise", isCorrect: false },
          { content: "Only when visibility drops below 500 feet", isCorrect: false },
          { content: "Headlights are optional during daylight hours", isCorrect: false },
        ],
      },
      {
        content: "What must you do when a vehicle approaching from behind is attempting to pass you?",
        explanation: "When a vehicle signals to pass you, you should keep your speed steady or slow down slightly to help them complete the pass safely. Do not speed up while being passed.",
        handbookSection: "Choosing Safety First — Being Passed",
        difficulty: 1,
        options: [
          { content: "Keep a steady speed or slow down slightly to help them pass safely", isCorrect: true },
          { content: "Speed up to maintain your position on the road", isCorrect: false },
          { content: "Move to the center of the lane to block the pass", isCorrect: false },
          { content: "Flash your hazard lights to signal you are not being passed", isCorrect: false },
        ],
      },
      {
        content: "When should you use your high-beam headlights?",
        explanation: "Use high beams on rural roads or wherever you need maximum visibility and there is no oncoming traffic. Dim to low beams within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle.",
        handbookSection: "Choosing Safety First — Headlight Usage",
        difficulty: 2,
        options: [
          { content: "When no oncoming traffic; dim within 500 feet of oncoming vehicles", isCorrect: true },
          { content: "At all times in rural areas", isCorrect: false },
          { content: "Only when driving faster than 45 mph", isCorrect: false },
          { content: "During rain and fog for better visibility", isCorrect: false },
        ],
      },
      {
        content: "What is the proper technique for dealing with a skid on a slippery surface?",
        explanation: "If your vehicle skids, ease off the gas pedal and do not hit the brakes hard. Steer in the direction you want the vehicle to go. This technique is sometimes called steering into the skid.",
        handbookSection: "Choosing Safety First — Skid Recovery",
        difficulty: 2,
        options: [
          { content: "Ease off the gas and steer in the direction you want to go", isCorrect: true },
          { content: "Apply the brakes firmly to stop the skid", isCorrect: false },
          { content: "Press the accelerator to power out of the skid", isCorrect: false },
          { content: "Turn the wheel sharply in the opposite direction of the skid", isCorrect: false },
        ],
      },
      {
        content: "When following a large truck or bus, why should you stay back farther than you would for a passenger car?",
        explanation: "Large trucks have extensive blind spots. If you cannot see the truck driver's mirrors, they cannot see you. Larger vehicles also require more stopping distance, and debris or tire blowouts are more common.",
        handbookSection: "Choosing Safety First — Sharing the Road with Trucks",
        difficulty: 1,
        options: [
          { content: "Large trucks have extensive blind spots and require longer stopping distances", isCorrect: true },
          { content: "Trucks have better brakes so you need more space behind them", isCorrect: false },
          { content: "You only need extra space when it is raining", isCorrect: false },
          { content: "Pennsylvania law requires 10 car lengths behind any truck", isCorrect: false },
        ],
      },
      {
        content: "What is the \"Dutch Reach\" method for opening a car door?",
        explanation: "The Dutch Reach is a method of opening your car door by reaching across with the far hand. This causes you to naturally turn your body and look back, checking for approaching cyclists or traffic before opening the door.",
        handbookSection: "Choosing Safety First — Bicycle Safety",
        difficulty: 2,
        options: [
          { content: "Opening the door with the far hand, turning to check for cyclists behind", isCorrect: true },
          { content: "A technique for making U-turns safely at intersections", isCorrect: false },
          { content: "A parking method used in narrow streets", isCorrect: false },
          { content: "A way to signal to pedestrians when turning", isCorrect: false },
        ],
      },
      {
        content: "When parking on an uphill grade with a curb, how should you position your front wheels?",
        explanation: "When parking uphill with a curb, turn your front wheels away from the curb (toward the road). If the brakes fail, the curb will stop the vehicle from rolling into traffic.",
        handbookSection: "Choosing Safety First — Parking on Grades",
        difficulty: 2,
        options: [
          { content: "Turn wheels away from the curb (toward the road) when parking uphill", isCorrect: true },
          { content: "Turn wheels toward the curb when parking uphill", isCorrect: false },
          { content: "Keep wheels straight on any grade", isCorrect: false },
          { content: "Only adjust wheels on grades steeper than 5%", isCorrect: false },
        ],
      },
      {
        content: "What does Pennsylvania require for motorcycle riders regarding helmets?",
        explanation: "In Pennsylvania, all motorcycle riders and passengers under age 21 must wear a helmet. Riders age 21 and older are exempt from the helmet requirement if they have at least 2 years of experience or have completed a safety course.",
        handbookSection: "Choosing Safety First — Motorcycles",
        difficulty: 2,
        options: [
          { content: "All riders under 21 must wear helmets; those 21+ may be exempt with experience", isCorrect: true },
          { content: "All motorcycle riders must wear helmets at all times", isCorrect: false },
          { content: "Helmets are optional for all riders in Pennsylvania", isCorrect: false },
          { content: "Only passengers must wear helmets; operators are exempt", isCorrect: false },
        ],
      },
      {
        content: "Pennsylvania requires annual vehicle inspections. What does this inspection cover?",
        explanation: "Pennsylvania's annual vehicle safety inspection covers brakes, tires, lights, steering, windshield, and other safety systems. Emissions testing is also required in many counties. Vehicles must pass to remain legally on the road.",
        handbookSection: "Choosing Safety First — Vehicle Maintenance",
        difficulty: 1,
        options: [
          { content: "Safety systems including brakes, lights, tires, and steering", isCorrect: true },
          { content: "Only emissions testing", isCorrect: false },
          { content: "Only the vehicle's registration and title documents", isCorrect: false },
          { content: "Only the driver's insurance coverage", isCorrect: false },
        ],
      },
    ],
  },
];

// ─── TRANSLATION FUNCTION ────────────────────────────────────────────────────

interface TranslationResult {
  questionZh: string;
  explanationZh: string;
  optionsZh: string[];
  questionEs: string;
  explanationEs: string;
  optionsEs: string[];
}

async function translateTopic(
  topicName: string,
  questions: QuestionEn[]
): Promise<TranslationResult[]> {
  const input = questions.map((q, i) => ({
    index: i,
    question: q.content,
    explanation: q.explanation,
    options: q.options.map((o) => o.content),
  }));

  const prompt = `You are a professional translator for driver's license exam materials.
Translate the following Pennsylvania driver's license exam questions from English to both Chinese (Simplified) and Spanish.

CRITICAL RULES:
1. In Chinese text, NEVER use ASCII quotes ". Instead use 「」 corner brackets for quoted terms.
2. Keep driving/legal terminology accurate for each language.
3. Maintain the exact meaning and accuracy of each question and answer.
4. Return ONLY a valid JSON array — no markdown, no explanation, no code fences.
5. The array must have exactly ${questions.length} objects, one per question, in the same order.

Each object must have exactly these keys:
- questionZh: Chinese translation of the question
- explanationZh: Chinese translation of the explanation
- optionsZh: array of Chinese translations, same order as input options
- questionEs: Spanish translation of the question
- explanationEs: Spanish translation of the explanation
- optionsEs: array of Spanish translations, same order as input options

Topic: ${topicName} (Pennsylvania DMV)

Questions:
${JSON.stringify(input, null, 2)}`;

  let attempt = 0;
  while (attempt < 3) {
    attempt++;
    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 8000,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as { type: string; text: string }).text.trim();
      const jsonText = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
      const parsed: TranslationResult[] = JSON.parse(jsonText);
      if (parsed.length !== questions.length) {
        throw new Error(`Expected ${questions.length} results, got ${parsed.length}`);
      }
      console.log(`  ✅ Translated ${questions.length} questions for topic: ${topicName}`);
      return parsed;
    } catch (err) {
      console.error(`  ❌ Attempt ${attempt} failed for topic "${topicName}":`, err);
      if (attempt >= 3) throw err;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  throw new Error("Translation failed after 3 attempts");
}

// ─── SEED FILE BUILDER ───────────────────────────────────────────────────────

function escapeTs(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  console.log("🏛️ Generating Pennsylvania DMV seed file with Claude API translations...\n");

  const topicsWithTranslations: Array<{
    topic: TopicEn;
    translations: TranslationResult[];
  }> = [];

  for (const topic of topicsEn) {
    console.log(`\n📚 Translating: ${topic.name} (${topic.questions.length} questions)`);
    const translations = await translateTopic(topic.name, topic.questions);
    topicsWithTranslations.push({ topic, translations });
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log("\n\n📝 Building seed file...");

  const totalQ = topicsWithTranslations.reduce((sum, t) => sum + t.topic.questions.length, 0);

  let out = `/**
 * Pennsylvania PennDOT Driver's License Practice Questions
 * Source: Pennsylvania Driver's Manual (official) — pa.gov
 * ${totalQ} questions across 6 topics — English, Chinese (Simplified), Spanish
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
  topics: [\n`;

  for (const { topic, translations } of topicsWithTranslations) {
    out += `    // ─── ${topic.name.toUpperCase()} ─────────────────────────────────────────\n`;
    out += `    {\n`;
    out += `      name: "${escapeTs(topic.name)}",\n`;
    out += `      nameEn: "${escapeTs(topic.nameEn)}",\n`;
    out += `      description: "${escapeTs(topic.description)}",\n`;
    out += `      handbookUrl: "${topic.handbookUrl}",\n`;
    out += `      translations: [\n`;
    out += `        { language: "zh", name: "${escapeTs(getTopicNameZh(topic.name))}", description: "${escapeTs(getTopicDescZh(topic.name))}" },\n`;
    out += `        { language: "es", name: "${escapeTs(getTopicNameEs(topic.name))}", description: "${escapeTs(getTopicDescEs(topic.name))}" },\n`;
    out += `      ],\n`;
    out += `      questions: [\n`;

    for (let i = 0; i < topic.questions.length; i++) {
      const q = topic.questions[i];
      const t = translations[i];
      out += `        {\n`;
      out += `          content: "${escapeTs(q.content)}",\n`;
      out += `          explanation: "${escapeTs(q.explanation)}",\n`;
      out += `          handbookSection: "${escapeTs(q.handbookSection)}",\n`;
      out += `          difficulty: ${q.difficulty},\n`;
      out += `          translations: [\n`;
      out += `            { language: "zh", content: "${escapeTs(t.questionZh)}", explanation: "${escapeTs(t.explanationZh)}" },\n`;
      out += `            { language: "es", content: "${escapeTs(t.questionEs)}", explanation: "${escapeTs(t.explanationEs)}" },\n`;
      out += `          ],\n`;
      out += `          options: [\n`;
      for (let j = 0; j < q.options.length; j++) {
        const opt = q.options[j];
        const optZh = t.optionsZh[j] ?? "";
        const optEs = t.optionsEs[j] ?? "";
        out += `            {\n`;
        out += `              content: "${escapeTs(opt.content)}",\n`;
        out += `              isCorrect: ${opt.isCorrect},\n`;
        out += `              translations: [\n`;
        out += `                { language: "zh", content: "${escapeTs(optZh)}" },\n`;
        out += `                { language: "es", content: "${escapeTs(optEs)}" },\n`;
        out += `              ],\n`;
        out += `            },\n`;
      }
      out += `          ],\n`;
      out += `        },\n`;
    }

    out += `      ],\n`;
    out += `    },\n`;
  }

  out += `  ],\n};\n`;

  const outPath = path.join(__dirname, "../seeds/pennsylvania-dmv.ts");
  fs.writeFileSync(outPath, out, "utf-8");
  console.log(`\n✅ Seed file written to: ${outPath}`);
  console.log(`   Topics: ${topicsWithTranslations.length}`);
  console.log(`   Total questions: ${totalQ}`);
  console.log("\n📌 Next steps:");
  console.log("   1. Review prisma/seeds/pennsylvania-dmv.ts");
  console.log("   2. Add to prisma/seeds/import.ts");
  console.log("   3. Run: npm run db:import");
}

function getTopicNameZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Signals, Signs & Markings": "交通信号、标志与路面标线",
    "Right-of-Way, Turns & Intersections": "优先通行权、转弯与路口",
    "Speed, Space & Defensive Driving": "车速、空间管理与防御性驾驶",
    "Alcohol, Drugs & DUI": "酒精、药物与醉驾",
    "Driver License & PA Laws": "驾驶执照与宾州法规",
    "Safe Driving & Sharing the Road": "安全驾驶与共用道路",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Signals, Signs & Markings": "交通信号、道路标志形状与颜色及路面标线",
    "Right-of-Way, Turns & Intersections": "优先权规则、转弯程序、信号及紧急车辆",
    "Speed, Space & Defensive Driving": "限速、跟车距离、校车规则及防御性驾驶技术",
    "Alcohol, Drugs & DUI": "宾州DUI法律、BAC分级、默示同意及处罚",
    "Driver License & PA Laws": "驾照要求、GDL规则、积分制度及宾州特定法规",
    "Safe Driving & Sharing the Road": "防御性驾驶、车辆安全、共用道路及事故处理",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicNameEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Signals, Signs & Markings": "Señales de Tráfico, Señales Viales y Marcas",
    "Right-of-Way, Turns & Intersections": "Derecho de Paso, Giros e Intersecciones",
    "Speed, Space & Defensive Driving": "Velocidad, Espacio y Manejo Defensivo",
    "Alcohol, Drugs & DUI": "Alcohol, Drogas y Conducción Bajo Influencia",
    "Driver License & PA Laws": "Licencia de Conducir y Leyes de Pennsylvania",
    "Safe Driving & Sharing the Road": "Manejo Seguro y Compartir la Vía",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Signals, Signs & Markings": "Semáforos, formas y colores de señales viales y marcas en el pavimento",
    "Right-of-Way, Turns & Intersections": "Reglas de prioridad, procedimientos de giro, señalización y vehículos de emergencia",
    "Speed, Space & Defensive Driving": "Límites de velocidad, distancia de seguimiento, autobuses escolares y técnicas de manejo defensivo",
    "Alcohol, Drugs & DUI": "Leyes DUI de Pennsylvania, niveles de BAC, consentimiento implícito y penalidades",
    "Driver License & PA Laws": "Requisitos de licencia, reglas GDL, sistema de puntos y leyes específicas de Pennsylvania",
    "Safe Driving & Sharing the Road": "Manejo defensivo, seguridad vehicular, compartir la vía y procedimientos en accidentes",
  };
  return map[nameEn] ?? nameEn;
}

main()
  .catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  });
