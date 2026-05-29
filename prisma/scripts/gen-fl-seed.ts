/**
 * Florida DMV Seed Generator
 * Generates florida-dmv.ts with full ZH + ES translations via Claude API
 * Run: npx tsx prisma/scripts/gen-fl-seed.ts
 */
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const client = new Anthropic();

// ─── ENGLISH QUESTIONS ─────────────────────────────────────────────────────

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

const HANDBOOK_URL = "https://www.flhsmv.gov/resources/handbooks-manuals/";

const topicsEn: TopicEn[] = [
  // ─── TOPIC 1: Road Signs & Traffic Controls ──────────────────────────────
  {
    name: "Road Signs & Traffic Controls",
    nameEn: "Road Signs & Traffic Controls",
    description: "Sign shapes, colors, traffic signals, and pavement markings",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "What shape is an octagon (8-sided) sign, and what does it mean?",
        explanation: "An octagon shape is used exclusively for STOP signs. When you see this sign, you must come to a complete stop before the stop line or crosswalk.",
        handbookSection: "Road Signs — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "Stop sign — you must come to a complete stop", isCorrect: true },
          { content: "Yield sign — slow down and yield to traffic", isCorrect: false },
          { content: "Warning sign — hazard ahead", isCorrect: false },
          { content: "Railroad crossing sign — train may be approaching", isCorrect: false },
        ],
      },
      {
        content: "A downward-pointing triangle sign (pointing down) means:",
        explanation: "A downward-pointing equilateral triangle indicates a YIELD sign. You must slow down and yield the right-of-way to pedestrians and vehicles in the intersection or roadway you are entering.",
        handbookSection: "Road Signs — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "Yield — slow down and give the right-of-way", isCorrect: true },
          { content: "Stop completely before proceeding", isCorrect: false },
          { content: "No passing zone ahead", isCorrect: false },
          { content: "Curve or hill ahead", isCorrect: false },
        ],
      },
      {
        content: "What does a diamond-shaped sign indicate?",
        explanation: "Diamond-shaped signs are warning signs. They alert drivers to conditions that require extra caution, such as curves, intersections, hills, or other potential hazards ahead.",
        handbookSection: "Road Signs — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "A warning of hazardous conditions or special rules ahead", isCorrect: true },
          { content: "A speed limit or regulatory requirement", isCorrect: false },
          { content: "Direction to a destination or service area", isCorrect: false },
          { content: "A school zone or pedestrian crossing", isCorrect: false },
        ],
      },
      {
        content: "What color are construction and maintenance work zone signs?",
        explanation: "Work zone signs have an orange background with black text or symbols. Orange specifically indicates construction and maintenance areas, warning drivers to slow down and watch for workers.",
        handbookSection: "Road Signs — Sign Colors",
        difficulty: 1,
        options: [
          { content: "Orange with black text or symbols", isCorrect: true },
          { content: "Yellow with black text", isCorrect: false },
          { content: "Red with white text", isCorrect: false },
          { content: "White with black text", isCorrect: false },
        ],
      },
      {
        content: "What color background is used for motorist service signs (gas, food, lodging)?",
        explanation: "Blue signs with white symbols identify motorist services such as gas stations, food, lodging, medical facilities, and rest areas. They guide drivers to nearby amenities.",
        handbookSection: "Road Signs — Sign Colors",
        difficulty: 1,
        options: [
          { content: "Blue with white symbols", isCorrect: true },
          { content: "Green with white text", isCorrect: false },
          { content: "Brown with white text", isCorrect: false },
          { content: "Yellow with black text", isCorrect: false },
        ],
      },
      {
        content: "What must you do at a steady red traffic signal?",
        explanation: "At a steady red light, you must come to a complete stop before the stop line or crosswalk. You may turn right on red after stopping and yielding to pedestrians and oncoming traffic, unless a NO TURN ON RED sign is posted.",
        handbookSection: "Traffic Controls — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "Stop completely; may turn right after stopping and yielding unless prohibited", isCorrect: true },
          { content: "Slow down and proceed with caution", isCorrect: false },
          { content: "Stop only if other traffic is present", isCorrect: false },
          { content: "Come to a complete stop; no turns permitted in any direction", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing yellow traffic light mean?",
        explanation: "A flashing yellow light is a warning signal. You should slow down and proceed with caution through the intersection. You are not required to stop.",
        handbookSection: "Traffic Controls — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "Slow down and proceed with caution", isCorrect: true },
          { content: "Stop completely and wait for a green light", isCorrect: false },
          { content: "The light is about to change to red", isCorrect: false },
          { content: "Same as a stop sign — stop, then proceed", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing red traffic light mean?",
        explanation: "A flashing red signal has the same meaning as a stop sign. You must stop completely, yield the right-of-way to other vehicles and pedestrians, and proceed when safe.",
        handbookSection: "Traffic Controls — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "Same as a stop sign — stop completely, yield, then proceed when safe", isCorrect: true },
          { content: "Slow down and proceed with caution", isCorrect: false },
          { content: "Prepare to stop — signal is changing to steady red", isCorrect: false },
          { content: "Stop only for cross traffic", isCorrect: false },
        ],
      },
      {
        content: "What does a solid yellow line on the center of the road mean for drivers on that side?",
        explanation: "A solid yellow line on your side of the road means you cannot cross it to pass other vehicles. You must remain on your side of the road.",
        handbookSection: "Traffic Controls — Pavement Markings",
        difficulty: 1,
        options: [
          { content: "You may not cross the line to pass", isCorrect: true },
          { content: "You may pass if the way is clear", isCorrect: false },
          { content: "The lane ahead is reserved for turning only", isCorrect: false },
          { content: "Pedestrian crossing area — proceed with caution", isCorrect: false },
        ],
      },
      {
        content: "White lane markings on the road separate:",
        explanation: "White lane markings separate lanes of traffic traveling in the same direction. Yellow markings separate traffic moving in opposite directions.",
        handbookSection: "Traffic Controls — Pavement Markings",
        difficulty: 1,
        options: [
          { content: "Traffic traveling in the same direction", isCorrect: true },
          { content: "Traffic traveling in opposite directions", isCorrect: false },
          { content: "Highway lanes from bicycle lanes", isCorrect: false },
          { content: "Merge areas from through traffic", isCorrect: false },
        ],
      },
      {
        content: "What must you do when you see a railroad crossing sign (round, yellow with X)?",
        explanation: "A round yellow sign with an X and the letter R warns you that a railroad crossing is ahead. You must look, listen, slow down, and be prepared to stop for trains.",
        handbookSection: "Traffic Controls — Railroad Crossings",
        difficulty: 1,
        options: [
          { content: "Look and listen for trains; slow down and prepare to stop", isCorrect: true },
          { content: "Stop completely — a train is always approaching", isCorrect: false },
          { content: "This sign indicates a one-way road crossing", isCorrect: false },
          { content: "Yield only to traffic from the right", isCorrect: false },
        ],
      },
      {
        content: "What does a pentagon (five-sided) sign indicate?",
        explanation: "A pentagon-shaped sign indicates a school zone or school crossing ahead. Drivers must reduce speed and watch for children crossing the road in these areas.",
        handbookSection: "Road Signs — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "School zone or school crossing", isCorrect: true },
          { content: "Construction work zone ahead", isCorrect: false },
          { content: "State highway route marker", isCorrect: false },
          { content: "No passing zone ahead", isCorrect: false },
        ],
      },
      {
        content: "What do double solid yellow center lines on the road mean?",
        explanation: "Double solid yellow lines indicate that passing is not allowed from either direction. Vehicles may only cross them to make a left turn into a driveway or private road.",
        handbookSection: "Traffic Controls — Pavement Markings",
        difficulty: 2,
        options: [
          { content: "No passing from either direction; may only cross for a left turn into a driveway", isCorrect: true },
          { content: "Passing allowed only during daylight hours", isCorrect: false },
          { content: "Passing allowed from both sides when clear", isCorrect: false },
          { content: "Only emergency vehicles may cross these lines", isCorrect: false },
        ],
      },
      {
        content: "When must you stop for a school bus?",
        explanation: "You must stop for a school bus when it is stopped with its red lights flashing and stop arm extended. You must stop in both directions on a two-lane road. On a four-lane divided highway, only traffic traveling in the same direction as the bus must stop.",
        handbookSection: "Traffic Controls — School Buses",
        difficulty: 2,
        options: [
          { content: "Both directions on two-lane roads; same direction on divided four-lane highways", isCorrect: true },
          { content: "Only if you are behind the bus", isCorrect: false },
          { content: "All directions on all roads", isCorrect: false },
          { content: "Only in school zones; not on highways", isCorrect: false },
        ],
      },
      {
        content: "A steady green arrow signal at an intersection means:",
        explanation: "A steady green arrow means you may proceed in the direction the arrow points. Oncoming traffic is stopped by a red light, so you have a protected turn.",
        handbookSection: "Traffic Controls — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "A protected turn — proceed in the direction of the arrow", isCorrect: true },
          { content: "Yield to oncoming traffic, then turn", isCorrect: false },
          { content: "Turn only if no pedestrians are present", isCorrect: false },
          { content: "Stop before the intersection, then turn", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 2: Right-of-Way & Intersections ───────────────────────────────
  {
    name: "Right-of-Way & Intersections",
    nameEn: "Right-of-Way & Intersections",
    description: "Right-of-way rules, turning, signaling, and intersection procedures",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "At an uncontrolled intersection where two vehicles arrive at the same time, who has the right-of-way?",
        explanation: "When two vehicles reach an uncontrolled intersection at the same time, the driver on the LEFT must yield to the driver on the RIGHT. The vehicle on the right has the right-of-way.",
        handbookSection: "Right-of-Way — Uncontrolled Intersections",
        difficulty: 1,
        options: [
          { content: "The driver on the right has the right-of-way", isCorrect: true },
          { content: "The driver on the left has the right-of-way", isCorrect: false },
          { content: "The larger vehicle has the right-of-way", isCorrect: false },
          { content: "The driver going straight has the right-of-way", isCorrect: false },
        ],
      },
      {
        content: "When turning left at an intersection, you must yield to:",
        explanation: "When making a left turn, you must yield to all oncoming traffic and to pedestrians in the crosswalk. Left turns are the most dangerous turns because you must cross oncoming traffic.",
        handbookSection: "Right-of-Way — Turning",
        difficulty: 1,
        options: [
          { content: "All oncoming traffic and pedestrians in the crosswalk", isCorrect: true },
          { content: "Only traffic approaching from the right", isCorrect: false },
          { content: "Only pedestrians — cars must yield to you", isCorrect: false },
          { content: "Vehicles already in the intersection only", isCorrect: false },
        ],
      },
      {
        content: "How far in advance must you signal before making a turn in Florida?",
        explanation: "Florida law requires you to signal at least 100 feet before making a turn. On highways, you should signal for a greater distance to give faster traffic adequate warning.",
        handbookSection: "Right-of-Way — Signaling",
        difficulty: 1,
        options: [
          { content: "At least 100 feet before the turn", isCorrect: true },
          { content: "At least 50 feet before the turn", isCorrect: false },
          { content: "At least 200 feet before the turn", isCorrect: false },
          { content: "Immediately before the turn is sufficient", isCorrect: false },
        ],
      },
      {
        content: "When must you yield to pedestrians?",
        explanation: "Drivers must yield to pedestrians at all crosswalks — both marked and unmarked. An unmarked crosswalk exists at every intersection where sidewalks meet the road, even without painted lines.",
        handbookSection: "Right-of-Way — Pedestrians",
        difficulty: 1,
        options: [
          { content: "At all crosswalks, both marked and unmarked", isCorrect: true },
          { content: "Only at marked crosswalks with painted lines", isCorrect: false },
          { content: "Only when a crossing signal shows WALK", isCorrect: false },
          { content: "Only in school zones and hospital areas", isCorrect: false },
        ],
      },
      {
        content: "When entering a road from a driveway or private road, you must:",
        explanation: "When entering a public roadway from a driveway, alley, or private road, you must stop and yield to all traffic and pedestrians on the road before entering.",
        handbookSection: "Right-of-Way — Entering Roadway",
        difficulty: 1,
        options: [
          { content: "Stop and yield to all traffic and pedestrians on the roadway", isCorrect: true },
          { content: "Proceed carefully if no traffic is within 100 feet", isCorrect: false },
          { content: "Yield only to traffic coming from your left", isCorrect: false },
          { content: "Signal and merge without stopping if speed is slow", isCorrect: false },
        ],
      },
      {
        content: "What must you do when you hear a siren or see lights of an emergency vehicle?",
        explanation: "When an emergency vehicle with flashing lights or a siren approaches, you must pull to the right edge of the road and stop. Remain stopped until the emergency vehicle has passed.",
        handbookSection: "Right-of-Way — Emergency Vehicles",
        difficulty: 1,
        options: [
          { content: "Pull to the right edge of the road and stop", isCorrect: true },
          { content: "Speed up to clear the intersection quickly", isCorrect: false },
          { content: "Slow down but continue at reduced speed", isCorrect: false },
          { content: "Move to the left lane to allow more space", isCorrect: false },
        ],
      },
      {
        content: "Florida's Move Over Law requires you to do what when approaching a stopped law enforcement, emergency, or utility vehicle with lights flashing?",
        explanation: "Florida's Move Over Law requires you to move over one lane away from the stopped vehicle if safely possible. If you cannot change lanes, you must slow to 20 mph below the posted speed limit (minimum 5 mph).",
        handbookSection: "Right-of-Way — Move Over Law",
        difficulty: 2,
        options: [
          { content: "Move over one lane, or slow to 20 mph below the speed limit if unable to change lanes", isCorrect: true },
          { content: "Stop behind the vehicle and wait for it to move", isCorrect: false },
          { content: "Pass the vehicle quickly while maintaining speed", isCorrect: false },
          { content: "Move over only for law enforcement — not for utility vehicles", isCorrect: false },
        ],
      },
      {
        content: "When making a right turn, you should:",
        explanation: "For a right turn, approach in the right lane, move as close to the right curb as possible, and make a tight turn into the nearest right lane of the road you are entering.",
        handbookSection: "Right-of-Way — Turning",
        difficulty: 1,
        options: [
          { content: "Approach in the right lane and turn into the nearest right lane", isCorrect: true },
          { content: "Turn from the center lane for better visibility", isCorrect: false },
          { content: "Make a wide sweeping turn to avoid the curb", isCorrect: false },
          { content: "Turn into the far lane to avoid blocking traffic", isCorrect: false },
        ],
      },
      {
        content: "You are driving straight through an intersection when the light turns yellow. You should:",
        explanation: "A yellow light means the signal is about to turn red. If you can safely stop before the intersection, you should stop. If you are too close to stop safely, you should proceed through the intersection with caution.",
        handbookSection: "Right-of-Way — Traffic Signals",
        difficulty: 2,
        options: [
          { content: "Stop if you can do so safely; proceed through if stopping is not safe", isCorrect: true },
          { content: "Speed up to clear the intersection before it turns red", isCorrect: false },
          { content: "Always stop immediately when you see yellow", isCorrect: false },
          { content: "Continue through — yellow means proceed with caution", isCorrect: false },
        ],
      },
      {
        content: "At a four-way stop, which vehicle goes first?",
        explanation: "At a four-way stop, the vehicle that arrived first has the right-of-way. If vehicles arrive at the same time, the vehicle on the right goes first. If directly across from each other going straight, both may go. If across from each other with one turning left, the straight-going vehicle has priority.",
        handbookSection: "Right-of-Way — Four-Way Stop",
        difficulty: 2,
        options: [
          { content: "The vehicle that arrived first; if simultaneous, the vehicle on the right", isCorrect: true },
          { content: "The vehicle going straight always has priority", isCorrect: false },
          { content: "The vehicle with the most passengers", isCorrect: false },
          { content: "The largest vehicle proceeds first", isCorrect: false },
        ],
      },
      {
        content: "When can you legally make a U-turn in Florida?",
        explanation: "U-turns are legal in Florida when you can see clearly for at least 500 feet in both directions, unless a NO U-TURN sign is posted. They are prohibited at intersections with traffic signals unless signs permit it.",
        handbookSection: "Right-of-Way — U-Turns",
        difficulty: 2,
        options: [
          { content: "When you can see at least 500 feet in both directions and no sign prohibits it", isCorrect: true },
          { content: "Any time as long as you signal first", isCorrect: false },
          { content: "Only at intersections with traffic signals", isCorrect: false },
          { content: "U-turns are never legal in Florida", isCorrect: false },
        ],
      },
      {
        content: "Vehicles on a highway must yield to vehicles on an entrance ramp:",
        explanation: "This is incorrect — vehicles on the entrance ramp must yield to vehicles already on the highway. Freeway traffic has the right-of-way. Merging vehicles must find a safe gap in traffic before entering the highway.",
        handbookSection: "Right-of-Way — Merging",
        difficulty: 2,
        options: [
          { content: "False — vehicles on the entrance ramp must yield to highway traffic", isCorrect: true },
          { content: "True — highway vehicles must slow down for merging traffic", isCorrect: false },
          { content: "True — merging vehicles always have the right-of-way", isCorrect: false },
          { content: "Both must slow down and negotiate the merge equally", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 3: Speed Limits & Special Zones ───────────────────────────────
  {
    name: "Speed Limits & Special Zones",
    nameEn: "Speed Limits & Special Zones",
    description: "Florida speed limits, school zones, work zones, and safe following distance",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "What is the maximum speed limit on Florida's limited-access highways (interstates) unless otherwise posted?",
        explanation: "The maximum speed limit on Florida's limited-access highways and interstates is 70 mph. Some sections may have lower posted limits.",
        handbookSection: "Speed Limits — Maximum Limits",
        difficulty: 1,
        options: [
          { content: "70 mph", isCorrect: true },
          { content: "65 mph", isCorrect: false },
          { content: "55 mph", isCorrect: false },
          { content: "75 mph", isCorrect: false },
        ],
      },
      {
        content: "What is the default speed limit in a business or residential district in Florida?",
        explanation: "The default speed limit in a business or residential district is 30 mph unless a different limit is posted. This lower speed protects pedestrians and cyclists in urban areas.",
        handbookSection: "Speed Limits — Default Limits",
        difficulty: 1,
        options: [
          { content: "30 mph", isCorrect: true },
          { content: "25 mph", isCorrect: false },
          { content: "35 mph", isCorrect: false },
          { content: "40 mph", isCorrect: false },
        ],
      },
      {
        content: "What is the speed limit in a school zone when children are present or flashing lights are active?",
        explanation: "In Florida, the speed limit in a school zone is 20 mph during school hours or when the flashing lights are activated. This protects children going to and from school.",
        handbookSection: "Speed Limits — School Zones",
        difficulty: 1,
        options: [
          { content: "20 mph", isCorrect: true },
          { content: "15 mph", isCorrect: false },
          { content: "25 mph", isCorrect: false },
          { content: "30 mph", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum speed on a rural two-lane road in Florida when no limit is posted?",
        explanation: "The default speed limit on rural two-lane roads in Florida is 55 mph. This applies to roads outside of urban and residential areas where no speed limit sign is posted.",
        handbookSection: "Speed Limits — Default Limits",
        difficulty: 2,
        options: [
          { content: "55 mph", isCorrect: true },
          { content: "45 mph", isCorrect: false },
          { content: "60 mph", isCorrect: false },
          { content: "65 mph", isCorrect: false },
        ],
      },
      {
        content: "When driving at night, you should:",
        explanation: "At night you should drive at a speed that allows you to stop within the distance your headlights illuminate. This is called driving within the range of your headlights.",
        handbookSection: "Speed Limits — Night Driving",
        difficulty: 2,
        options: [
          { content: "Drive at a speed at which you can stop within the range of your headlights", isCorrect: true },
          { content: "Drive 10 mph below the posted speed limit at all times", isCorrect: false },
          { content: "Drive at the same speed as during daylight", isCorrect: false },
          { content: "Use high beams at all times to see farther", isCorrect: false },
        ],
      },
      {
        content: "What is the recommended following distance under normal driving conditions in Florida?",
        explanation: "Florida recommends a minimum 3-second following distance. Pick a fixed point; when the vehicle ahead passes it, count to three. If you reach it before finishing, increase your following distance.",
        handbookSection: "Speed Limits — Following Distance",
        difficulty: 1,
        options: [
          { content: "At least 3 seconds", isCorrect: true },
          { content: "At least 2 seconds", isCorrect: false },
          { content: "At least 1 car length per 10 mph", isCorrect: false },
          { content: "At least 4 seconds", isCorrect: false },
        ],
      },
      {
        content: "In a construction or work zone, if workers are present, fines for traffic violations are:",
        explanation: "In Florida, when workers are present in a construction or maintenance zone, fines for moving violations are doubled. This increased penalty protects road workers.",
        handbookSection: "Speed Limits — Work Zones",
        difficulty: 2,
        options: [
          { content: "Doubled when workers are present", isCorrect: true },
          { content: "Tripled when workers are present", isCorrect: false },
          { content: "The same as in regular driving zones", isCorrect: false },
          { content: "Doubled only if the speed limit is exceeded by 10 mph or more", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum following distance you should maintain when towing a trailer or when driving in heavy traffic?",
        explanation: "When towing a trailer or driving in heavy traffic and adverse conditions, you should increase your following distance to at least 4 seconds to allow more stopping distance.",
        handbookSection: "Speed Limits — Following Distance",
        difficulty: 2,
        options: [
          { content: "At least 4 seconds", isCorrect: true },
          { content: "At least 2 seconds", isCorrect: false },
          { content: "At least 3 seconds — same as normal", isCorrect: false },
          { content: "At least 6 seconds", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum speed on a divided highway that is NOT a limited-access road in Florida?",
        explanation: "The speed limit on divided highways that are not limited-access roads is 65 mph in Florida. Limited-access interstates allow up to 70 mph.",
        handbookSection: "Speed Limits — Maximum Limits",
        difficulty: 2,
        options: [
          { content: "65 mph", isCorrect: true },
          { content: "70 mph", isCorrect: false },
          { content: "60 mph", isCorrect: false },
          { content: "55 mph", isCorrect: false },
        ],
      },
      {
        content: "You are about to drive into heavy rain or fog. What should you do with your speed?",
        explanation: "In poor visibility conditions such as rain, fog, or smoke, you must reduce your speed well below the posted limit. Florida law requires you to drive at a safe speed for the existing conditions, even if that means going much slower than the posted limit.",
        handbookSection: "Speed Limits — Adverse Conditions",
        difficulty: 1,
        options: [
          { content: "Reduce speed significantly below the posted limit for safety", isCorrect: true },
          { content: "Maintain the posted speed limit and use your horn", isCorrect: false },
          { content: "Increase speed to minimize time spent in poor visibility", isCorrect: false },
          { content: "Only slow down if visibility drops below 100 feet", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 4: Alcohol, Drugs & DUI ──────────────────────────────────────
  {
    name: "Alcohol, Drugs & DUI",
    nameEn: "Alcohol, Drugs & DUI",
    description: "Florida DUI laws, BAC limits, implied consent, and penalties",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "What blood alcohol content (BAC) level constitutes DUI (Driving Under the Influence) for non-commercial adult drivers in Florida?",
        explanation: "In Florida, a driver with a BAC of 0.08 or higher is considered legally impaired and can be charged with DUI. This applies to drivers age 21 and over.",
        handbookSection: "Alcohol & Drugs — BAC Limits",
        difficulty: 1,
        options: [
          { content: "0.08 or higher", isCorrect: true },
          { content: "0.10 or higher", isCorrect: false },
          { content: "0.05 or higher", isCorrect: false },
          { content: "0.12 or higher", isCorrect: false },
        ],
      },
      {
        content: "What is the BAC limit for commercial vehicle drivers in Florida?",
        explanation: "Commercial driver license (CDL) holders are held to a stricter standard. A commercial driver with a BAC of 0.04 or higher is considered legally impaired for DUI purposes.",
        handbookSection: "Alcohol & Drugs — BAC Limits",
        difficulty: 2,
        options: [
          { content: "0.04 or higher", isCorrect: true },
          { content: "0.08 or higher", isCorrect: false },
          { content: "0.06 or higher", isCorrect: false },
          { content: "0.02 or higher", isCorrect: false },
        ],
      },
      {
        content: "Under Florida's Zero Tolerance Law, what BAC is illegal for drivers under age 21?",
        explanation: "Florida's Zero Tolerance Law makes it illegal for drivers under age 21 to drive with a BAC of 0.02 or higher. This reflects a strict position that underage drivers should not drink and drive at any level.",
        handbookSection: "Alcohol & Drugs — Zero Tolerance",
        difficulty: 1,
        options: [
          { content: "0.02 or higher", isCorrect: true },
          { content: "0.05 or higher", isCorrect: false },
          { content: "0.08 or higher", isCorrect: false },
          { content: "Any measurable amount — 0.01 or higher", isCorrect: false },
        ],
      },
      {
        content: "What does Florida's Implied Consent Law state?",
        explanation: "Florida's Implied Consent Law means that by driving on Florida's roads, you agree to submit to a chemical test (breath, blood, or urine) if a law enforcement officer has probable cause to believe you are impaired.",
        handbookSection: "Alcohol & Drugs — Implied Consent",
        difficulty: 1,
        options: [
          { content: "By driving in Florida, you consent to chemical testing when lawfully requested", isCorrect: true },
          { content: "You may refuse any chemical test without penalty", isCorrect: false },
          { content: "Police must obtain a court order before testing you", isCorrect: false },
          { content: "Only a blood test is covered under implied consent", isCorrect: false },
        ],
      },
      {
        content: "What are the consequences of refusing a chemical test under Florida's Implied Consent Law?",
        explanation: "Refusing a chemical test in Florida results in a 1-year license suspension for the first refusal and an 18-month suspension for a second refusal. A second refusal is also a first-degree misdemeanor.",
        handbookSection: "Alcohol & Drugs — Implied Consent",
        difficulty: 2,
        options: [
          { content: "1-year license suspension for first refusal; 18 months for second refusal", isCorrect: true },
          { content: "No penalty — refusal is your legal right", isCorrect: false },
          { content: "6-month suspension for any refusal", isCorrect: false },
          { content: "Immediate arrest and jail time", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum fine for a first DUI conviction in Florida?",
        explanation: "The minimum fine for a first DUI conviction in Florida is $500, with a maximum of $1,000. If the BAC was 0.15 or higher or a minor was in the vehicle, the minimum fine increases to $1,000.",
        handbookSection: "Alcohol & Drugs — DUI Penalties",
        difficulty: 2,
        options: [
          { content: "$500 (or $1,000 if BAC 0.15+ or minor in vehicle)", isCorrect: true },
          { content: "$100", isCorrect: false },
          { content: "$2,000", isCorrect: false },
          { content: "$250", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum license revocation period for a first DUI conviction in Florida?",
        explanation: "A first DUI conviction in Florida results in a minimum 180-day (6-month) license revocation. The revocation period can be up to one year.",
        handbookSection: "Alcohol & Drugs — DUI Penalties",
        difficulty: 2,
        options: [
          { content: "Minimum 180 days (6 months)", isCorrect: true },
          { content: "30 days", isCorrect: false },
          { content: "1 year mandatory", isCorrect: false },
          { content: "90 days", isCorrect: false },
        ],
      },
      {
        content: "A DUI conviction with a BAC of 0.15 or higher is called what in Florida?",
        explanation: "In Florida, a DUI with a BAC of 0.15 or higher is considered an enhanced or aggravated DUI. It carries higher fines (minimum $1,000 first offense) and may require ignition interlock device installation.",
        handbookSection: "Alcohol & Drugs — Enhanced DUI",
        difficulty: 3,
        options: [
          { content: "An enhanced DUI with higher fines and possible ignition interlock", isCorrect: true },
          { content: "A standard DUI with the same penalties as 0.08", isCorrect: false },
          { content: "An automatic felony DUI", isCorrect: false },
          { content: "This BAC level has no additional consequences", isCorrect: false },
        ],
      },
      {
        content: "Which of the following is legal while operating a motor vehicle in Florida?",
        explanation: "Hands-free use of a cell phone (such as through Bluetooth or a mounted device) is legal in Florida. Hand-held use of a cell phone while driving is prohibited, especially in school zones and work zones.",
        handbookSection: "Alcohol & Drugs — Distracted Driving",
        difficulty: 1,
        options: [
          { content: "Using a hands-free device to make a call", isCorrect: true },
          { content: "Texting while the vehicle is moving", isCorrect: false },
          { content: "Holding the phone to your ear while driving", isCorrect: false },
          { content: "Reading a text message at a red light", isCorrect: false },
        ],
      },
      {
        content: "When is it illegal to possess an open container of alcohol in a motor vehicle in Florida?",
        explanation: "In Florida, it is illegal for the driver or any passenger to have an open container of alcohol in the passenger area of a motor vehicle while the vehicle is on a public road.",
        handbookSection: "Alcohol & Drugs — Open Container",
        difficulty: 1,
        options: [
          { content: "Any time an open container is in the passenger area on a public road", isCorrect: true },
          { content: "Only when the driver is drinking from the container", isCorrect: false },
          { content: "Only when driving above the speed limit", isCorrect: false },
          { content: "Open containers are legal as long as the driver is not drinking", isCorrect: false },
        ],
      },
      {
        content: "A driver is impaired by prescription medication. Can they be charged with DUI in Florida?",
        explanation: "Yes. In Florida, DUI applies to any driver impaired by alcohol, controlled substances, or any chemical substance — including legally prescribed medications. If your ability to drive is impaired, you can be charged with DUI regardless of the substance.",
        handbookSection: "Alcohol & Drugs — Drug Impairment",
        difficulty: 2,
        options: [
          { content: "Yes — any impairment, including from legal prescriptions, can result in DUI", isCorrect: true },
          { content: "No — prescription drugs are legal, so no DUI charge applies", isCorrect: false },
          { content: "Only if the medication was taken in excess of the prescribed dose", isCorrect: false },
          { content: "No — only alcohol can result in DUI in Florida", isCorrect: false },
        ],
      },
      {
        content: "How many points are added to your Florida driving record for a DUI conviction?",
        explanation: "A DUI conviction adds 4 points to your Florida driving record. However, the license may also be revoked due to the DUI, so points may be less relevant than the revocation itself.",
        handbookSection: "Alcohol & Drugs — Points System",
        difficulty: 3,
        options: [
          { content: "4 points", isCorrect: true },
          { content: "6 points", isCorrect: false },
          { content: "3 points", isCorrect: false },
          { content: "12 points", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 5: Driver License & Florida-Specific Laws ────────────────────
  {
    name: "Driver License & Florida Laws",
    nameEn: "Driver License & Florida Laws",
    description: "License classes, GDL rules, points system, insurance, and Florida-specific requirements",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "How many questions are on the Florida Class E knowledge test, and how many must you answer correctly?",
        explanation: "The Florida Class E knowledge test has 50 questions. You must answer at least 40 correctly (80%) to pass. The test covers traffic laws, road signs, and safe driving practices.",
        handbookSection: "Driver License — Knowledge Test",
        difficulty: 1,
        options: [
          { content: "50 questions; must answer at least 40 correct (80%)", isCorrect: true },
          { content: "40 questions; must answer at least 32 correct (80%)", isCorrect: false },
          { content: "50 questions; must answer at least 45 correct (90%)", isCorrect: false },
          { content: "20 questions; must answer at least 14 correct (70%)", isCorrect: false },
        ],
      },
      {
        content: "At what age can a Florida teen apply for a learner's license (permit)?",
        explanation: "In Florida, teens can apply for a learner's license at age 15. They must pass a vision and knowledge test, and must be accompanied by a licensed driver age 21 or older when driving.",
        handbookSection: "Driver License — GDL Program",
        difficulty: 1,
        options: [
          { content: "Age 15", isCorrect: true },
          { content: "Age 14", isCorrect: false },
          { content: "Age 16", isCorrect: false },
          { content: "Age 17", isCorrect: false },
        ],
      },
      {
        content: "Under Florida's GDL program, how many hours of supervised driving must a teen complete before getting a restricted license?",
        explanation: "Before receiving a Class E restricted license at age 16, Florida teens must complete at least 50 hours of supervised driving, including at least 10 hours at night.",
        handbookSection: "Driver License — GDL Program",
        difficulty: 2,
        options: [
          { content: "50 hours (including 10 hours at night)", isCorrect: true },
          { content: "30 hours (including 5 hours at night)", isCorrect: false },
          { content: "40 hours (no nighttime requirement)", isCorrect: false },
          { content: "60 hours (including 20 hours at night)", isCorrect: false },
        ],
      },
      {
        content: "Under Florida's GDL, what are the nighttime driving restrictions for a 16-17 year-old with a restricted license?",
        explanation: "Teens with a restricted license in Florida may not drive between 11 p.m. and 6 a.m. Exceptions include driving for work, emergencies, or with a licensed driver age 21+ in the front seat.",
        handbookSection: "Driver License — GDL Program",
        difficulty: 2,
        options: [
          { content: "No driving between 11 p.m. and 6 a.m. (with limited exceptions)", isCorrect: true },
          { content: "No driving between midnight and 5 a.m.", isCorrect: false },
          { content: "No nighttime restriction if accompanied by a parent", isCorrect: false },
          { content: "No driving between 10 p.m. and 7 a.m.", isCorrect: false },
        ],
      },
      {
        content: "How many points on your Florida driver's license will result in a 30-day suspension?",
        explanation: "In Florida, 12 points within 12 months results in a 30-day suspension. 18 points within 18 months causes a 3-month suspension. 24 points within 36 months causes a 1-year suspension.",
        handbookSection: "Driver License — Points System",
        difficulty: 2,
        options: [
          { content: "12 points within 12 months", isCorrect: true },
          { content: "6 points within 12 months", isCorrect: false },
          { content: "18 points within 18 months", isCorrect: false },
          { content: "10 points within 12 months", isCorrect: false },
        ],
      },
      {
        content: "What happens to your Florida driver's license if you accumulate 18 points within 18 months?",
        explanation: "If you accumulate 18 points within 18 months, your Florida driver's license is suspended for 3 months. Point accumulation is a common way the state manages driving behavior.",
        handbookSection: "Driver License — Points System",
        difficulty: 2,
        options: [
          { content: "3-month suspension", isCorrect: true },
          { content: "30-day suspension", isCorrect: false },
          { content: "1-year suspension", isCorrect: false },
          { content: "Permanent revocation", isCorrect: false },
        ],
      },
      {
        content: "What minimum insurance coverage is required for most Florida vehicle owners?",
        explanation: "Florida requires a minimum of $10,000 Personal Injury Protection (PIP) and $10,000 Property Damage Liability (PDL). Florida is a no-fault state, so PIP covers your own injuries regardless of fault.",
        handbookSection: "Driver License — Insurance Requirements",
        difficulty: 2,
        options: [
          { content: "$10,000 PIP and $10,000 PDL", isCorrect: true },
          { content: "$25,000/$50,000 bodily injury and $10,000 PDL", isCorrect: false },
          { content: "$10,000 bodily injury only", isCorrect: false },
          { content: "$20,000 comprehensive coverage", isCorrect: false },
        ],
      },
      {
        content: "Florida law requires all front-seat occupants to wear a seat belt. What about rear-seat passengers?",
        explanation: "In Florida, all passengers under age 18 must wear a seat belt regardless of seating position. Adults age 18 and older riding in the rear seat are not required by law to wear a seat belt (though it is always recommended).",
        handbookSection: "Driver License — Seat Belt Laws",
        difficulty: 2,
        options: [
          { content: "Rear passengers under 18 must wear a seat belt; adults 18+ in rear are not required", isCorrect: true },
          { content: "All rear passengers must wear a seat belt", isCorrect: false },
          { content: "No rear seat passengers are required to wear seat belts", isCorrect: false },
          { content: "Rear passengers only need seat belts on highways", isCorrect: false },
        ],
      },
      {
        content: "What child restraint is required for children under age 5 in Florida?",
        explanation: "Florida law requires children under age 5 to be secured in a federally approved child restraint device (car seat or booster). Children under 3 must be in a separate carrier or built-in child seat.",
        handbookSection: "Driver License — Child Restraints",
        difficulty: 1,
        options: [
          { content: "A federally approved child restraint device (car seat or booster)", isCorrect: true },
          { content: "A seat belt alone is sufficient", isCorrect: false },
          { content: "A child restraint is only required for infants under 1 year", isCorrect: false },
          { content: "Any seat belt or restraint the parent chooses", isCorrect: false },
        ],
      },
      {
        content: "Within how many days must a new Florida resident obtain a Florida driver's license?",
        explanation: "New residents of Florida who are employed, enroll children in school, or register a vehicle must obtain a Florida driver's license within 30 days of establishing residency.",
        handbookSection: "Driver License — New Residents",
        difficulty: 2,
        options: [
          { content: "30 days", isCorrect: true },
          { content: "60 days", isCorrect: false },
          { content: "90 days", isCorrect: false },
          { content: "6 months", isCorrect: false },
        ],
      },
      {
        content: "How many points are added to your Florida license for speeding 15 mph over the limit?",
        explanation: "In Florida, speeding 15 mph or more above the posted limit results in 4 points being added to your driving record. Speeding less than 15 mph over is a 3-point violation.",
        handbookSection: "Driver License — Points System",
        difficulty: 3,
        options: [
          { content: "4 points", isCorrect: true },
          { content: "3 points", isCorrect: false },
          { content: "6 points", isCorrect: false },
          { content: "2 points", isCorrect: false },
        ],
      },
      {
        content: "What is the vision requirement to obtain a Florida driver's license?",
        explanation: "To obtain a Florida driver's license, you must have at least 20/70 vision in your better eye (with or without corrective lenses) and at least 20/200 in your worse eye.",
        handbookSection: "Driver License — Vision Requirements",
        difficulty: 2,
        options: [
          { content: "At least 20/70 in the better eye; at least 20/200 in the worse eye", isCorrect: true },
          { content: "20/20 in both eyes required", isCorrect: false },
          { content: "At least 20/40 in at least one eye", isCorrect: false },
          { content: "Any vision level is acceptable with corrective lenses", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 6: Safe Driving & Crash Prevention ────────────────────────────
  {
    name: "Safe Driving & Crash Prevention",
    nameEn: "Safe Driving & Crash Prevention",
    description: "Defensive driving, sharing the road, crash procedures, and vehicle safety",
    handbookUrl: HANDBOOK_URL,
    questions: [
      {
        content: "What should you do immediately after being involved in a crash in Florida?",
        explanation: "After any crash in Florida, you must stop at the scene, provide your name, address, vehicle registration, and insurance information to the other driver, and render reasonable aid to injured persons.",
        handbookSection: "Safe Driving — Crash Procedures",
        difficulty: 1,
        options: [
          { content: "Stop, exchange information, and render aid to injured persons", isCorrect: true },
          { content: "Drive to the nearest police station to report the crash", isCorrect: false },
          { content: "Continue driving if injuries appear minor", isCorrect: false },
          { content: "Take photos and leave if the other driver is not injured", isCorrect: false },
        ],
      },
      {
        content: "When must you report a crash to law enforcement in Florida?",
        explanation: "In Florida, you must report a crash to law enforcement if it results in injury, death, or property damage exceeding $500. The report must be made immediately.",
        handbookSection: "Safe Driving — Crash Procedures",
        difficulty: 2,
        options: [
          { content: "When there is injury, death, or property damage exceeding $500", isCorrect: true },
          { content: "Only if someone is killed", isCorrect: false },
          { content: "Only if the other driver does not have insurance", isCorrect: false },
          { content: "For all crashes regardless of damage", isCorrect: false },
        ],
      },
      {
        content: "When are you required to use your headlights in Florida?",
        explanation: "Florida law requires headlights from sunset to sunrise and any time you use your windshield wipers due to rain, fog, smoke, or other precipitation. This also improves your visibility to others.",
        handbookSection: "Safe Driving — Headlight Laws",
        difficulty: 1,
        options: [
          { content: "From sunset to sunrise and whenever windshield wipers are in use", isCorrect: true },
          { content: "Only from sunset to sunrise", isCorrect: false },
          { content: "Only when visibility is less than 100 feet", isCorrect: false },
          { content: "At all times — headlights should always be on", isCorrect: false },
        ],
      },
      {
        content: "When should you use your high-beam headlights?",
        explanation: "High-beam headlights should be used on open roads without oncoming traffic. You must switch to low beams when within 500 feet of an oncoming vehicle or within 300 feet of a vehicle you are following.",
        handbookSection: "Safe Driving — Headlight Laws",
        difficulty: 2,
        options: [
          { content: "On open roads; switch to low beams within 500 feet of oncoming traffic", isCorrect: true },
          { content: "At all times on rural roads", isCorrect: false },
          { content: "Only in complete darkness with no other vehicles", isCorrect: false },
          { content: "Whenever driving above 55 mph", isCorrect: false },
        ],
      },
      {
        content: "What is hydroplaning and how can you avoid it?",
        explanation: "Hydroplaning occurs when your tires ride on a layer of water rather than the road surface, causing loss of control. To avoid it: reduce speed in wet conditions, maintain proper tire tread and inflation, and avoid sudden steering or braking changes.",
        handbookSection: "Safe Driving — Wet Roads",
        difficulty: 2,
        options: [
          { content: "Tires riding on water causing loss of control; reduce speed and maintain good tires", isCorrect: true },
          { content: "Brakes overheating on hills; avoid using brakes downhill", isCorrect: false },
          { content: "Engine flooding in deep water; avoid puddles over 6 inches", isCorrect: false },
          { content: "Windshield fogging; use defrost and reduce speed", isCorrect: false },
        ],
      },
      {
        content: "When following a large truck, why is it important to stay out of its blind spots?",
        explanation: "Large trucks have extensive blind spots on all four sides. If you cannot see the truck driver's mirrors, the driver cannot see you. Staying out of blind spots gives the truck driver a chance to see you and react.",
        handbookSection: "Safe Driving — Large Trucks",
        difficulty: 1,
        options: [
          { content: "If you cannot see the driver's mirrors, the driver cannot see you", isCorrect: true },
          { content: "Trucks have better brakes so they do not need as much space", isCorrect: false },
          { content: "You only need to stay out of the left blind spot", isCorrect: false },
          { content: "Blind spots only exist behind large trucks, not in front", isCorrect: false },
        ],
      },
      {
        content: "What is the proper technique to recover from a rear-wheel skid?",
        explanation: "To recover from a rear-wheel skid, take your foot off the accelerator and steer in the direction you want the front of the vehicle to go. Do not apply the brakes. This technique is called counter-steering.",
        handbookSection: "Safe Driving — Skid Control",
        difficulty: 2,
        options: [
          { content: "Take your foot off the gas and steer in the direction you want to go", isCorrect: true },
          { content: "Apply the brakes firmly to stop the skid", isCorrect: false },
          { content: "Accelerate out of the skid by pressing the gas", isCorrect: false },
          { content: "Turn the wheel sharply in the opposite direction of the skid", isCorrect: false },
        ],
      },
      {
        content: "You must give at least how many feet of clearance when passing a bicycle rider in Florida?",
        explanation: "Florida law requires motorists to give bicycle riders at least 3 feet of clearance when passing. This gives cyclists a safe buffer from the vehicle.",
        handbookSection: "Safe Driving — Sharing the Road",
        difficulty: 2,
        options: [
          { content: "At least 3 feet", isCorrect: true },
          { content: "At least 1 foot", isCorrect: false },
          { content: "At least 5 feet", isCorrect: false },
          { content: "At least 2 feet", isCorrect: false },
        ],
      },
      {
        content: "What is aggressive driving in Florida, and what can it result in?",
        explanation: "Aggressive driving in Florida includes committing two or more moving violations (like speeding, tailgating, or unsafe lane changes) that endanger others. It is a moving violation that can lead to fines, points, and in some cases criminal charges.",
        handbookSection: "Safe Driving — Aggressive Driving",
        difficulty: 2,
        options: [
          { content: "Two or more moving violations that endanger others; results in fines and points", isCorrect: true },
          { content: "Driving above 90 mph on any road", isCorrect: false },
          { content: "Honking your horn more than twice", isCorrect: false },
          { content: "Making eye contact with other drivers", isCorrect: false },
        ],
      },
      {
        content: "When should you turn your wheels to the curb when parking on a downhill grade?",
        explanation: "When parking on a downhill grade (whether with or without a curb), you should turn your front wheels toward the curb or edge of the road. This prevents the vehicle from rolling into traffic if the brakes fail.",
        handbookSection: "Safe Driving — Parking",
        difficulty: 2,
        options: [
          { content: "Turn wheels toward the curb when parking downhill", isCorrect: true },
          { content: "Turn wheels away from the curb when parking downhill", isCorrect: false },
          { content: "Keep wheels straight when parking on any grade", isCorrect: false },
          { content: "Only on grades steeper than 10 degrees", isCorrect: false },
        ],
      },
      {
        content: "Florida's \"Slow Down, Move Over\" law applies to which types of vehicles?",
        explanation: "Florida's Move Over law applies to stopped emergency vehicles (police, fire, EMS), sanitation workers, utility service vehicles, and tow trucks with flashing lights. You must move over one lane or reduce speed by 20 mph.",
        handbookSection: "Safe Driving — Move Over Law",
        difficulty: 2,
        options: [
          { content: "Emergency vehicles, sanitation, utility, and tow trucks with lights flashing", isCorrect: true },
          { content: "Only law enforcement vehicles", isCorrect: false },
          { content: "Only fire trucks and ambulances", isCorrect: false },
          { content: "Any vehicle stopped on the shoulder", isCorrect: false },
        ],
      },
      {
        content: "What is the correct response when your vehicle begins to skid on a wet road?",
        explanation: "When skidding, ease off the gas pedal and do not hit the brakes hard. Steer gently in the direction you want the vehicle to go. Sudden braking during a skid will make it worse.",
        handbookSection: "Safe Driving — Skid Control",
        difficulty: 2,
        options: [
          { content: "Ease off the gas and steer gently in the desired direction", isCorrect: true },
          { content: "Apply maximum braking force immediately", isCorrect: false },
          { content: "Turn the wheel sharply to regain control", isCorrect: false },
          { content: "Accelerate to push out of the skid", isCorrect: false },
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
Translate the following Florida driver's license exam questions from English to both Chinese (Simplified) and Spanish.

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

Topic: ${topicName} (Florida DMV)

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
  console.log("🌴 Generating Florida DMV seed file with Claude API translations...\n");

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
 * Florida DHSMV Driver's License Practice Questions
 * Source: Official Florida Driver License Handbook — flhsmv.gov
 * ${totalQ} questions across 6 topics — English, Chinese (Simplified), Spanish
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

  const outPath = path.join(__dirname, "../seeds/florida-dmv.ts");
  fs.writeFileSync(outPath, out, "utf-8");
  console.log(`\n✅ Seed file written to: ${outPath}`);
  console.log(`   Topics: ${topicsWithTranslations.length}`);
  console.log(`   Total questions: ${totalQ}`);
  console.log("\n📌 Next steps:");
  console.log("   1. Review prisma/seeds/florida-dmv.ts");
  console.log("   2. Add to prisma/seeds/import.ts");
  console.log("   3. Run: npm run db:import");
}

function getTopicNameZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Road Signs & Traffic Controls": "道路标志与交通控制",
    "Right-of-Way & Intersections": "优先通行权与路口规则",
    "Speed Limits & Special Zones": "限速与特殊区域",
    "Alcohol, Drugs & DUI": "酒精、药物与醉驾",
    "Driver License & Florida Laws": "驾驶执照与佛罗里达法规",
    "Safe Driving & Crash Prevention": "安全驾驶与事故预防",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Road Signs & Traffic Controls": "标志形状与颜色、信号灯及路面标线",
    "Right-of-Way & Intersections": "优先权规则、转弯、信号及路口程序",
    "Speed Limits & Special Zones": "佛罗里达限速、学校区域、施工区域及安全跟车距离",
    "Alcohol, Drugs & DUI": "佛罗里达DUI法律、血液酒精含量限制、默示同意及处罚",
    "Driver License & Florida Laws": "驾照类别、GDL规则、积分制度、保险及佛罗里达特定要求",
    "Safe Driving & Crash Prevention": "防御性驾驶、共用道路、事故处理及车辆安全",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicNameEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Road Signs & Traffic Controls": "Señales Viales y Controles de Tráfico",
    "Right-of-Way & Intersections": "Derecho de Paso e Intersecciones",
    "Speed Limits & Special Zones": "Límites de Velocidad y Zonas Especiales",
    "Alcohol, Drugs & DUI": "Alcohol, Drogas y Conducción Bajo Influencia",
    "Driver License & Florida Laws": "Licencia de Conducir y Leyes de Florida",
    "Safe Driving & Crash Prevention": "Manejo Seguro y Prevención de Accidentes",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Road Signs & Traffic Controls": "Formas y colores de señales, semáforos y marcas en el pavimento",
    "Right-of-Way & Intersections": "Reglas de prioridad, giros, señalización y procedimientos en intersecciones",
    "Speed Limits & Special Zones": "Límites de velocidad en Florida, zonas escolares, obras y distancia de seguimiento",
    "Alcohol, Drugs & DUI": "Leyes DUI de Florida, límites de BAC, consentimiento implícito y penalidades",
    "Driver License & Florida Laws": "Tipos de licencia, reglas GDL, sistema de puntos, seguro y requisitos específicos de Florida",
    "Safe Driving & Crash Prevention": "Manejo defensivo, compartir la vía, procedimientos en accidentes y seguridad vehicular",
  };
  return map[nameEn] ?? nameEn;
}

main()
  .catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  });
