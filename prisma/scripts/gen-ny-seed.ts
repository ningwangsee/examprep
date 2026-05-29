/**
 * NY DMV Seed Generator
 * Generates new-york-dmv.ts with full ZH + ES translations via Claude API
 * Run: npx tsx prisma/scripts/gen-ny-seed.ts
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

const topicsEn: TopicEn[] = [
  // ─── TOPIC 1: Traffic Control & Road Signs ───────────────────────────────
  {
    name: "Traffic Control & Road Signs",
    nameEn: "Traffic Control & Road Signs",
    description: "Traffic signs, signals, pavement markings, and lane controls",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-4-traffic-control",
    questions: [
      {
        content: "What shape is used for warning signs in New York?",
        explanation: "Warning signs are diamond-shaped with yellow background and black letters/symbols. They warn drivers of potential hazards or special rules ahead.",
        handbookSection: "Traffic Control — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "Diamond", isCorrect: true },
          { content: "Rectangle", isCorrect: false },
          { content: "Pentagon", isCorrect: false },
          { content: "Circle", isCorrect: false },
        ],
      },
      {
        content: "What color are service signs that mark rest areas, gas stations, and medical facilities?",
        explanation: "Service signs have a blue background with white letters or symbols. They mark locations of services such as rest areas, fuel, food, medical facilities, and lodging.",
        handbookSection: "Traffic Control — Sign Colors",
        difficulty: 1,
        options: [
          { content: "Blue with white symbols", isCorrect: true },
          { content: "Green with white letters", isCorrect: false },
          { content: "Brown with white letters", isCorrect: false },
          { content: "Yellow with black symbols", isCorrect: false },
        ],
      },
      {
        content: "What color background is used on work zone signs?",
        explanation: "Work zone signs have an orange background with black letters or symbols. They indicate construction or maintenance areas where drivers must reduce speed and exercise extra caution.",
        handbookSection: "Traffic Control — Work Zone Signs",
        difficulty: 1,
        options: [
          { content: "Orange with black", isCorrect: true },
          { content: "Yellow with black", isCorrect: false },
          { content: "Red with white", isCorrect: false },
          { content: "White with black", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing red traffic light mean?",
        explanation: "A flashing red light has the same meaning as a stop sign. You must come to a complete stop, yield the right-of-way to cross traffic and pedestrians, then proceed when safe.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "Same as a stop sign — stop, yield, then proceed when safe", isCorrect: true },
          { content: "Slow down and proceed with caution", isCorrect: false },
          { content: "Stop only if traffic is present", isCorrect: false },
          { content: "The light is about to turn red", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing yellow traffic light mean?",
        explanation: "A flashing yellow light means drive with caution. You do not need to stop, but you should slow down and be alert for potential hazards.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "Drive with caution", isCorrect: true },
          { content: "Stop completely before proceeding", isCorrect: false },
          { content: "Prepare to stop — light is changing to red", isCorrect: false },
          { content: "Yield to oncoming traffic only", isCorrect: false },
        ],
      },
      {
        content: "What does a red arrow traffic signal mean?",
        explanation: "A red arrow means you cannot turn in the direction the arrow is pointing. You must wait for the arrow to change before making that turn.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 1,
        options: [
          { content: "No turns permitted in the arrow's direction", isCorrect: true },
          { content: "Turn after yielding to oncoming traffic", isCorrect: false },
          { content: "Right turn only is permitted", isCorrect: false },
          { content: "Proceed after stopping completely", isCorrect: false },
        ],
      },
      {
        content: "In New York City, when may a driver turn right on a red light?",
        explanation: "In New York City, right turns on red are prohibited unless a sign specifically permits the turn. This is different from other parts of New York State where right turns on red are generally permitted after stopping.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 2,
        options: [
          { content: "Only when a sign specifically permits the turn", isCorrect: true },
          { content: "After stopping and yielding to traffic and pedestrians", isCorrect: false },
          { content: "Only between midnight and 6 a.m.", isCorrect: false },
          { content: "Never, right on red is prohibited statewide", isCorrect: false },
        ],
      },
      {
        content: "What must a school bus driver do at a red traffic signal?",
        explanation: "School bus drivers cannot turn right on any red light, regardless of location or whether signs permit it for other drivers. This applies statewide including outside New York City.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 2,
        options: [
          { content: "Stop and wait — school buses cannot turn right on red anywhere", isCorrect: true },
          { content: "Turn right after stopping if the way is clear", isCorrect: false },
          { content: "Follow the same rules as other drivers", isCorrect: false },
          { content: "Turn right only when no children are on board", isCorrect: false },
        ],
      },
      {
        content: "What does a steady red X on a lane-use control signal mean?",
        explanation: "A steady red X means that the lane directly below the signal is closed. Drivers must not travel in that lane.",
        handbookSection: "Traffic Control — Lane Use Signals",
        difficulty: 2,
        options: [
          { content: "Do not drive in this lane", isCorrect: true },
          { content: "Move from this lane soon", isCorrect: false },
          { content: "Left turns only in this lane", isCorrect: false },
          { content: "Lane is available for use", isCorrect: false },
        ],
      },
      {
        content: "What does a flashing yellow X on a lane-use control signal mean?",
        explanation: "A flashing yellow X indicates that the lane may be used for left turns only. Drivers should prepare to turn left or change lanes.",
        handbookSection: "Traffic Control — Lane Use Signals",
        difficulty: 2,
        options: [
          { content: "Left turns only in this lane", isCorrect: true },
          { content: "Do not drive in this lane", isCorrect: false },
          { content: "Move from this lane immediately", isCorrect: false },
          { content: "Lane available for all uses", isCorrect: false },
        ],
      },
      {
        content: "What do double solid yellow lines in the center of the road mean?",
        explanation: "Double solid yellow lines mean you cannot pass or change lanes across them. You may cross them only to make a left turn into or from a driveway or for a legal U-turn.",
        handbookSection: "Traffic Control — Pavement Markings",
        difficulty: 2,
        options: [
          { content: "You cannot pass or change lanes except for a left turn or U-turn", isCorrect: true },
          { content: "You may pass when it is safe to do so", isCorrect: false },
          { content: "These lanes are for emergency vehicles only", isCorrect: false },
          { content: "Passing is only permitted during daylight hours", isCorrect: false },
        ],
      },
      {
        content: "What does a solid white line with a broken white line alongside it indicate?",
        explanation: "When a solid line and broken line run parallel, drivers on the solid-line side cannot pass, while drivers on the broken-line side may pass if it is safe. The solid line prohibits passing; the broken line permits it.",
        handbookSection: "Traffic Control — Pavement Markings",
        difficulty: 2,
        options: [
          { content: "Solid-side drivers cannot pass; broken-side drivers may pass if safe", isCorrect: true },
          { content: "Both sides may pass when traffic is clear", isCorrect: false },
          { content: "Broken-side drivers cannot pass; solid-side drivers may pass", isCorrect: false },
          { content: "Neither side may pass at any time", isCorrect: false },
        ],
      },
      {
        content: "What does a diamond symbol painted on the road surface indicate?",
        explanation: "A diamond marking identifies a reserved lane, typically for buses, carpools (HOV), or bicycles. Regular vehicles cannot enter the lane unless they meet the requirements for that lane.",
        handbookSection: "Traffic Control — Pavement Markings",
        difficulty: 2,
        options: [
          { content: "A reserved lane for buses, HOV vehicles, or bicycles", isCorrect: true },
          { content: "A no-passing zone", isCorrect: false },
          { content: "A pedestrian crossing area", isCorrect: false },
          { content: "A turning lane only", isCorrect: false },
        ],
      },
      {
        content: "When must drivers obey the directions of a traffic officer over other traffic controls?",
        explanation: "Directions given by traffic officers always take precedence over signs, signals, or pavement markings. When a police officer, fire police, highway flagger, or school crossing guard directs traffic, you must follow their instructions.",
        handbookSection: "Traffic Control — Traffic Officers",
        difficulty: 1,
        options: [
          { content: "Always — traffic officer directions take precedence over all signals and signs", isCorrect: true },
          { content: "Only at intersections without traffic signals", isCorrect: false },
          { content: "Only in school zones and work zones", isCorrect: false },
          { content: "Only when the officer is in a marked vehicle", isCorrect: false },
        ],
      },
      {
        content: "What does an orange pentagon-shaped sign indicate?",
        explanation: "No — a pentagon (five-sided sign) is used for school zones and school crossings. The color is yellow-green fluorescent with black markings. Orange rectangles/diamonds are used for work zones.",
        handbookSection: "Traffic Control — Sign Shapes",
        difficulty: 1,
        options: [
          { content: "A school zone or school crossing ahead", isCorrect: true },
          { content: "A construction work zone", isCorrect: false },
          { content: "A hazardous material route", isCorrect: false },
          { content: "A no-passing zone", isCorrect: false },
        ],
      },
      {
        content: "What are edge lines on the roadway used for?",
        explanation: "Edge lines mark the outer boundary of the road. It is illegal to cross them except by authorized personnel. They help drivers stay within the roadway, especially at night or in poor weather.",
        handbookSection: "Traffic Control — Pavement Markings",
        difficulty: 1,
        options: [
          { content: "Mark the road edge; crossing is illegal except for authorized personnel", isCorrect: true },
          { content: "Separate lanes of traffic moving in opposite directions", isCorrect: false },
          { content: "Indicate where cyclists must ride", isCorrect: false },
          { content: "Show the boundary of a no-parking zone", isCorrect: false },
        ],
      },
      {
        content: "What do green background signs with white lettering indicate?",
        explanation: "Green destination signs provide direction and distance information to destinations such as cities, highways, and exit points. They help drivers navigate and plan their routes.",
        handbookSection: "Traffic Control — Sign Colors",
        difficulty: 1,
        options: [
          { content: "Direction and distance to destinations", isCorrect: true },
          { content: "Service areas and facilities", isCorrect: false },
          { content: "Regulatory rules and speed limits", isCorrect: false },
          { content: "Work zone and construction warnings", isCorrect: false },
        ],
      },
      {
        content: "A work zone sign warns that speed limit fines are doubled. Does this apply even when no workers are present?",
        explanation: "Yes. In New York, fines for speeding in a work zone are doubled whether or not workers are present. The doubled fine applies as long as the work zone signs are posted.",
        handbookSection: "Traffic Control — Work Zone Signs",
        difficulty: 2,
        options: [
          { content: "Yes, the doubled fine applies even when no workers are present", isCorrect: true },
          { content: "No, the doubled fine only applies when workers are actively working", isCorrect: false },
          { content: "No, the doubled fine only applies during daylight hours", isCorrect: false },
          { content: "Yes, but only on interstate highways", isCorrect: false },
        ],
      },
      {
        content: "What does a yellow arrow traffic signal mean?",
        explanation: "A yellow arrow means the green arrow protection is ending and you should prepare to stop. It warns that the signal is about to change for that turning movement.",
        handbookSection: "Traffic Control — Traffic Signals",
        difficulty: 2,
        options: [
          { content: "Green arrow protection is ending — prepare to stop", isCorrect: true },
          { content: "You may turn with caution", isCorrect: false },
          { content: "Yield to pedestrians and turn", isCorrect: false },
          { content: "Stop immediately", isCorrect: false },
        ],
      },
      {
        content: "At what location must you stop when there is a stop sign and a stop line painted on the road?",
        explanation: "When a stop line is present, you must stop before the front of your vehicle crosses the stop line. You must not creep past it before stopping.",
        handbookSection: "Traffic Control — Pavement Markings",
        difficulty: 1,
        options: [
          { content: "Before your vehicle crosses the stop line", isCorrect: true },
          { content: "With your front wheels on the stop line", isCorrect: false },
          { content: "Just past the stop line for better visibility", isCorrect: false },
          { content: "At the edge of the crosswalk if no stop line is present", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 2: Right-of-Way, Intersections & Turns ───────────────────────
  {
    name: "Right-of-Way, Intersections & Turns",
    nameEn: "Right-of-Way, Intersections & Turns",
    description: "Right-of-way rules, turning procedures, signals, and emergency vehicles",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-5-intersections-and-turns",
    questions: [
      {
        content: "At an uncontrolled intersection where two vehicles arrive at the same time, who has the right-of-way?",
        explanation: "At an uncontrolled intersection where vehicles arrive simultaneously, the driver on the left must yield to the driver on the right. This is the standard right-of-way rule at intersections without signals or signs.",
        handbookSection: "Intersections and Turns — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "The driver on the right has the right-of-way", isCorrect: true },
          { content: "The driver on the left has the right-of-way", isCorrect: false },
          { content: "The driver going straight has the right-of-way", isCorrect: false },
          { content: "The larger vehicle has the right-of-way", isCorrect: false },
        ],
      },
      {
        content: "When two vehicles approach from opposite directions and one driver wants to turn left, who must yield?",
        explanation: "A driver turning left must yield to all oncoming traffic going straight or turning right. Left-turning drivers must wait until it is safe to complete the turn.",
        handbookSection: "Intersections and Turns — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "The driver turning left must yield to traffic going straight or turning right", isCorrect: true },
          { content: "The driver going straight must yield to the turning vehicle", isCorrect: false },
          { content: "Both drivers must stop and yield to each other", isCorrect: false },
          { content: "The driver arriving second must yield", isCorrect: false },
        ],
      },
      {
        content: "How far in advance must you signal before turning or changing lanes?",
        explanation: "New York law requires drivers to signal at least 100 feet (30 meters) before turning or changing lanes. This gives other drivers and pedestrians adequate warning of your intended movement.",
        handbookSection: "Intersections and Turns — Signaling",
        difficulty: 1,
        options: [
          { content: "At least 100 feet (30 m) ahead", isCorrect: true },
          { content: "At least 50 feet ahead", isCorrect: false },
          { content: "At least 200 feet ahead", isCorrect: false },
          { content: "At least 500 feet ahead", isCorrect: false },
        ],
      },
      {
        content: "What is the correct hand signal for a left turn?",
        explanation: "The correct hand signal for a left turn is to extend your left arm straight out horizontally through the window. This is the universal signal for a left turn.",
        handbookSection: "Intersections and Turns — Hand Signals",
        difficulty: 1,
        options: [
          { content: "Left arm extended horizontally out the window", isCorrect: true },
          { content: "Left arm bent upward at 90 degrees", isCorrect: false },
          { content: "Left arm extended downward at 90 degrees", isCorrect: false },
          { content: "Right arm extended out the passenger window", isCorrect: false },
        ],
      },
      {
        content: "What is the correct hand signal for a right turn?",
        explanation: "The correct hand signal for a right turn is to extend your left arm out the window and bend it upward at a 90-degree angle. This indicates a right turn to drivers behind you.",
        handbookSection: "Intersections and Turns — Hand Signals",
        difficulty: 1,
        options: [
          { content: "Left arm bent upward at 90 degrees", isCorrect: true },
          { content: "Left arm extended horizontally", isCorrect: false },
          { content: "Left arm extended downward at 90 degrees", isCorrect: false },
          { content: "Both hands raised above the steering wheel", isCorrect: false },
        ],
      },
      {
        content: "When making a right turn at an intersection, you should:",
        explanation: "When turning right, get as far to the right as possible before turning. Turn into the right lane of the destination road. Do not make wide, sweeping right turns that enter the left lane.",
        handbookSection: "Intersections and Turns — Turning",
        difficulty: 1,
        options: [
          { content: "Get as far right as possible and turn into the right lane", isCorrect: true },
          { content: "Turn from the center lane to increase visibility", isCorrect: false },
          { content: "Make a wide sweeping turn to avoid the curb", isCorrect: false },
          { content: "Turn into the nearest available lane regardless of direction", isCorrect: false },
        ],
      },
      {
        content: "When must you yield to pedestrians in a crosswalk?",
        explanation: "Drivers must yield to pedestrians who are legally crossing at marked or unmarked crosswalks. You must slow down or stop if necessary to allow pedestrians to cross safely.",
        handbookSection: "Intersections and Turns — Pedestrian Right-of-Way",
        difficulty: 1,
        options: [
          { content: "Whenever pedestrians are legally crossing at marked or unmarked crosswalks", isCorrect: true },
          { content: "Only at marked crosswalks with painted lines", isCorrect: false },
          { content: "Only when a pedestrian signal says WALK", isCorrect: false },
          { content: "Only in school zones and residential areas", isCorrect: false },
        ],
      },
      {
        content: "Why should you keep your wheels pointing straight ahead while waiting to make a left turn?",
        explanation: "Keeping your wheels straight while waiting prevents your car from being pushed into oncoming traffic if you are struck from behind. If your wheels are turned left and you are rear-ended, you could be pushed into oncoming traffic.",
        handbookSection: "Intersections and Turns — Turning",
        difficulty: 2,
        options: [
          { content: "If hit from behind, you will not be pushed into oncoming traffic", isCorrect: true },
          { content: "It improves your view of oncoming traffic", isCorrect: false },
          { content: "It keeps the intersection clear for pedestrians", isCorrect: false },
          { content: "It allows other drivers to pass you on the right", isCorrect: false },
        ],
      },
      {
        content: "What must you do when you hear or see an emergency vehicle approaching with flashing lights and a siren?",
        explanation: "When an emergency vehicle approaches with lights and siren, you must safely pull over to the right edge of the road and stop. Remain stopped until the emergency vehicle has passed.",
        handbookSection: "Intersections and Turns — Emergency Vehicles",
        difficulty: 1,
        options: [
          { content: "Pull over to the right edge and stop immediately", isCorrect: true },
          { content: "Speed up to clear the intersection quickly", isCorrect: false },
          { content: "Slow down but continue driving", isCorrect: false },
          { content: "Pull to the left so the emergency vehicle can pass on the right", isCorrect: false },
        ],
      },
      {
        content: "What does New York's Move Over Law require on multi-lane highways?",
        explanation: "The Move Over Law requires drivers on multi-lane parkways and interstates to move from the lane immediately adjacent to a stopped emergency vehicle that has its lights activated, unless it is unsafe to do so.",
        handbookSection: "Intersections and Turns — Emergency Vehicles",
        difficulty: 2,
        options: [
          { content: "Move from the lane adjacent to the stopped emergency vehicle if safe", isCorrect: true },
          { content: "Stop your vehicle behind the emergency vehicle", isCorrect: false },
          { content: "Slow to 25 mph when passing any emergency vehicle", isCorrect: false },
          { content: "Pull over to the right shoulder and stop", isCorrect: false },
        ],
      },
      {
        content: "When must you yield to vehicles already in a traffic circle (roundabout)?",
        explanation: "Vehicles already circulating inside a roundabout have the right-of-way. Drivers entering the roundabout must yield to all traffic already in the circle before merging.",
        handbookSection: "Intersections and Turns — Roundabouts",
        difficulty: 1,
        options: [
          { content: "Always — yield to all vehicles already circulating in the roundabout", isCorrect: true },
          { content: "Only when entering from the right side", isCorrect: false },
          { content: "Only if the roundabout has a yield sign", isCorrect: false },
          { content: "Never — vehicles entering have the right-of-way", isCorrect: false },
        ],
      },
      {
        content: "When exiting a driveway or alley, what must you do before entering the roadway?",
        explanation: "When exiting a driveway, alley, or private road, you must stop and yield the right-of-way to all traffic on the roadway and to pedestrians before proceeding.",
        handbookSection: "Intersections and Turns — Right-of-Way",
        difficulty: 1,
        options: [
          { content: "Stop and yield to all roadway traffic and pedestrians", isCorrect: true },
          { content: "Yield only if traffic is coming from the left", isCorrect: false },
          { content: "Proceed if no vehicles are visible within 300 feet", isCorrect: false },
          { content: "Signal and merge without stopping if speed is slow", isCorrect: false },
        ],
      },
      {
        content: "Under what conditions is a U-turn prohibited in New York?",
        explanation: "U-turns are prohibited when drivers approaching cannot see you from 500 feet away (near hills or curves), in NYC business districts, where NO U-TURN signs are posted, on limited-access expressways, and in school zones.",
        handbookSection: "Intersections and Turns — U-Turns",
        difficulty: 2,
        options: [
          { content: "When drivers approaching cannot see you from 500 feet, in NYC business districts, or where prohibited by signs", isCorrect: true },
          { content: "Only in school zones and hospital zones", isCorrect: false },
          { content: "Only when posted signs specifically prohibit it", isCorrect: false },
          { content: "When there is oncoming traffic within 100 feet", isCorrect: false },
        ],
      },
      {
        content: "From which lane must a U-turn be made?",
        explanation: "A U-turn must be made from the leftmost portion of the lane nearest to the centerline of the roadway. You cannot make a U-turn from the right lane.",
        handbookSection: "Intersections and Turns — U-Turns",
        difficulty: 2,
        options: [
          { content: "From the left portion of the lane nearest to the center line", isCorrect: true },
          { content: "From either the left or right lane depending on traffic", isCorrect: false },
          { content: "From any lane as long as a signal is given", isCorrect: false },
          { content: "From the right lane after yielding to traffic", isCorrect: false },
        ],
      },
      {
        content: "What does a blue flashing light on a non-emergency vehicle (such as a volunteer firefighter's personal car) mean?",
        explanation: "Volunteer firefighters may display blue lights on their personal vehicles. These are not authorized emergency vehicles; you are not required to yield but it is recommended if you can safely do so.",
        handbookSection: "Intersections and Turns — Emergency Vehicles",
        difficulty: 3,
        options: [
          { content: "Not an emergency vehicle; yield only if you can safely do so", isCorrect: true },
          { content: "Treat it the same as a police vehicle — stop and yield", isCorrect: false },
          { content: "Ignore it; only red lights require a response", isCorrect: false },
          { content: "Speed up to clear the way for the vehicle", isCorrect: false },
        ],
      },
      {
        content: "You cannot enter an intersection even when the light is green if:",
        explanation: "You cannot enter an intersection if traffic is backed up and you cannot completely clear the intersection. Blocking an intersection is illegal and creates gridlock.",
        handbookSection: "Intersections and Turns — Intersection Rules",
        difficulty: 2,
        options: [
          { content: "Traffic is backed up and you cannot completely clear the intersection", isCorrect: true },
          { content: "There is a pedestrian in the crosswalk on the far side", isCorrect: false },
          { content: "A vehicle is waiting to turn left from the opposite direction", isCorrect: false },
          { content: "It has been green for less than 3 seconds", isCorrect: false },
        ],
      },
      {
        content: "When turning left from a two-way street onto another two-way street, you should:",
        explanation: "When making a left turn from a two-way street, approach from the right half of the road closest to the center, and after turning, enter the destination road to the right of its center line as close to the center as possible.",
        handbookSection: "Intersections and Turns — Turning",
        difficulty: 2,
        options: [
          { content: "Approach from near the center line and enter to the right of the center line of the new road", isCorrect: true },
          { content: "Approach from the right lane and swing wide to the left", isCorrect: false },
          { content: "Turn from any lane as long as you signal", isCorrect: false },
          { content: "Enter the new road in the lane farthest to the left", isCorrect: false },
        ],
      },
      {
        content: "A vehicle is already in the intersection when the light turns red. What should the driver do?",
        explanation: "A driver who is already in the intersection when the light changes must clear the intersection safely. Traffic law requires you to clear the intersection you are already in.",
        handbookSection: "Intersections and Turns — Intersection Rules",
        difficulty: 2,
        options: [
          { content: "Clear the intersection — the driver may continue through safely", isCorrect: true },
          { content: "Stop immediately in the intersection", isCorrect: false },
          { content: "Back up out of the intersection", isCorrect: false },
          { content: "Wait until the light turns green again", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 3: Speed, Space & Defensive Driving ──────────────────────────
  {
    name: "Speed, Space & Defensive Driving",
    nameEn: "Speed, Space & Defensive Driving",
    description: "Speed limits, following distances, seat belts, cell phone laws, and vehicle safety",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-8-defensive-driving",
    questions: [
      {
        content: "What is the maximum speed limit on an unmarked road in New York State?",
        explanation: "On roads where no speed limit is posted, the maximum speed in New York State is 55 mph (88 km/h). You may need to drive slower than this based on road conditions.",
        handbookSection: "Defensive Driving — Speed Limits",
        difficulty: 1,
        options: [
          { content: "55 mph (88 km/h)", isCorrect: true },
          { content: "65 mph", isCorrect: false },
          { content: "45 mph", isCorrect: false },
          { content: "50 mph", isCorrect: false },
        ],
      },
      {
        content: "What is the default speed limit in New York City unless otherwise posted?",
        explanation: "The default speed limit in New York City is 25 mph unless a different speed limit is posted. This lower limit reflects the dense pedestrian and vehicle traffic in urban areas.",
        handbookSection: "Defensive Driving — Speed Limits",
        difficulty: 1,
        options: [
          { content: "25 mph", isCorrect: true },
          { content: "30 mph", isCorrect: false },
          { content: "35 mph", isCorrect: false },
          { content: "20 mph", isCorrect: false },
        ],
      },
      {
        content: "How do you correctly apply the two-second following distance rule?",
        explanation: "Pick a fixed object (such as a sign). When the vehicle ahead passes that object, count one-thousand-one, one-thousand-two. If you reach the object before finishing the count, you are following too closely.",
        handbookSection: "Defensive Driving — Following Distance",
        difficulty: 1,
        options: [
          { content: "When the car ahead passes a landmark, count to two — if you pass it first, you are too close", isCorrect: true },
          { content: "Stay at least two car lengths behind at all times", isCorrect: false },
          { content: "Keep one second of space for every 10 mph of speed", isCorrect: false },
          { content: "Stay at least 20 feet behind the vehicle ahead", isCorrect: false },
        ],
      },
      {
        content: "In bad weather or when following large trucks, you should increase your following distance to:",
        explanation: "In adverse weather conditions or when following large trucks or buses, increase your following distance to at least 3 to 4 seconds. These conditions require more stopping distance.",
        handbookSection: "Defensive Driving — Following Distance",
        difficulty: 2,
        options: [
          { content: "At least 3 to 4 seconds", isCorrect: true },
          { content: "At least 5 to 6 seconds", isCorrect: false },
          { content: "At least 1 to 2 seconds", isCorrect: false },
          { content: "At least 10 car lengths", isCorrect: false },
        ],
      },
      {
        content: "Children under what age require a rear-facing child safety seat in New York?",
        explanation: "Children under 4 years old must be secured in a federally approved child safety seat. They must remain rear-facing until at least age 2, or until they reach the manufacturer's weight and height limits.",
        handbookSection: "Defensive Driving — Child Restraints",
        difficulty: 2,
        options: [
          { content: "Under 4 years old in a child safety seat (rear-facing until age 2)", isCorrect: true },
          { content: "Under 8 years old in a rear-facing seat", isCorrect: false },
          { content: "Under 2 years old only", isCorrect: false },
          { content: "Under 1 year old only", isCorrect: false },
        ],
      },
      {
        content: "What restraint is required for children ages 4 through 7 in New York?",
        explanation: "Children ages 4 through 7 must use a booster seat with both a lap belt and shoulder belt. They should remain in a booster seat until they are at least 4 feet 9 inches tall.",
        handbookSection: "Defensive Driving — Child Restraints",
        difficulty: 2,
        options: [
          { content: "A booster seat with lap and shoulder belt", isCorrect: true },
          { content: "A rear-facing child safety seat only", isCorrect: false },
          { content: "A seat belt alone is sufficient", isCorrect: false },
          { content: "Any child safety seat without a booster", isCorrect: false },
        ],
      },
      {
        content: "What is the fine for a driver who fails to wear a seat belt in New York (for drivers and passengers age 16 and older)?",
        explanation: "The fine for a driver or front-seat passenger age 16 or older who fails to wear a seat belt is up to $50. Wearing a seat belt is required by law for all occupants.",
        handbookSection: "Defensive Driving — Seat Belts",
        difficulty: 2,
        options: [
          { content: "Up to $50", isCorrect: true },
          { content: "Up to $150", isCorrect: false },
          { content: "Up to $200", isCorrect: false },
          { content: "Up to $25", isCorrect: false },
        ],
      },
      {
        content: "What additional penalty applies when a driver fails to properly restrain a child under 16?",
        explanation: "If a driver fails to properly restrain a child under 16, the fine is $25 to $100 per child plus 3 points are added to the driver's license. The driver — not the child — is responsible for the restraint.",
        handbookSection: "Defensive Driving — Child Restraints",
        difficulty: 2,
        options: [
          { content: "$25–$100 fine plus 3 points on the driver's license", isCorrect: true },
          { content: "$50 fine only, no points", isCorrect: false },
          { content: "$200 fine and automatic license suspension", isCorrect: false },
          { content: "$25 fine per child, no points", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum fine for a first-offense hand-held cell phone use while driving in New York?",
        explanation: "A first offense for using a hand-held cell phone while driving carries a fine of up to $200 and 5 points on your license. Subsequent offenses within 18 months result in higher fines.",
        handbookSection: "Defensive Driving — Cell Phone Laws",
        difficulty: 2,
        options: [
          { content: "Up to $200 and 5 points", isCorrect: true },
          { content: "Up to $100 and 3 points", isCorrect: false },
          { content: "Up to $150 and no points", isCorrect: false },
          { content: "Up to $450 and 5 points", isCorrect: false },
        ],
      },
      {
        content: "What happens to a junior driver's license after a first offense for using a cell phone while driving?",
        explanation: "A junior or probationary license holder who is convicted of using a cell phone while driving faces a 120-day suspension for a first offense. A second offense results in a revocation of at least one year.",
        handbookSection: "Defensive Driving — Cell Phone Laws",
        difficulty: 3,
        options: [
          { content: "120-day license suspension for first offense", isCorrect: true },
          { content: "$200 fine only — no license action for juniors", isCorrect: false },
          { content: "Immediate 1-year revocation", isCorrect: false },
          { content: "30-day suspension and $50 fine", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum tire tread depth required in New York?",
        explanation: "New York requires a minimum tire tread depth of 2/32nds of an inch (0.16 cm). You can check this with a penny: place it head-down in the tread and if you can see the top of Lincoln's head, the tread is too worn.",
        handbookSection: "Defensive Driving — Vehicle Safety",
        difficulty: 2,
        options: [
          { content: "2/32nds of an inch (0.16 cm)", isCorrect: true },
          { content: "4/32nds of an inch", isCorrect: false },
          { content: "1/16th of an inch", isCorrect: false },
          { content: "1/8th of an inch", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum distance you should maintain between your chest and an airbag cover?",
        explanation: "You should maintain at least 10 inches between the center of your chest and the airbag cover. Sitting too close to an airbag greatly increases the risk of serious injury when it deploys.",
        handbookSection: "Defensive Driving — Vehicle Safety",
        difficulty: 2,
        options: [
          { content: "At least 10 inches", isCorrect: true },
          { content: "At least 6 inches", isCorrect: false },
          { content: "At least 18 inches", isCorrect: false },
          { content: "At least 12 inches", isCorrect: false },
        ],
      },
      {
        content: "Where should you NEVER place a rear-facing infant car seat?",
        explanation: "Never place a rear-facing infant seat in the front passenger seat if the vehicle has a passenger-side airbag. The force of a deploying airbag can cause fatal injuries to an infant in a rear-facing seat.",
        handbookSection: "Defensive Driving — Child Restraints",
        difficulty: 1,
        options: [
          { content: "In the front passenger seat when the vehicle has an airbag", isCorrect: true },
          { content: "In the rear center seat", isCorrect: false },
          { content: "Behind the driver's seat", isCorrect: false },
          { content: "In the trunk area of an SUV", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum advisory speed for a roundabout in New York?",
        explanation: "The advisory entry speed for a roundabout is 30 mph (50 km/h) or less. Slowing down when entering a roundabout helps drivers navigate the circular flow safely.",
        handbookSection: "Defensive Driving — Speed Limits",
        difficulty: 2,
        options: [
          { content: "30 mph (50 km/h) or less", isCorrect: true },
          { content: "15 mph", isCorrect: false },
          { content: "45 mph", isCorrect: false },
          { content: "25 mph", isCorrect: false },
        ],
      },
      {
        content: "When is it illegal to use a hand-held cell phone while driving in New York?",
        explanation: "It is illegal to hold and use a cell phone for any reason while driving in New York. Hands-free devices are legal. The law applies whenever the vehicle is in motion.",
        handbookSection: "Defensive Driving — Cell Phone Laws",
        difficulty: 1,
        options: [
          { content: "At any time while the vehicle is in motion", isCorrect: true },
          { content: "Only on highways and expressways", isCorrect: false },
          { content: "Only in school zones and work zones", isCorrect: false },
          { content: "Only when other traffic is present", isCorrect: false },
        ],
      },
      {
        content: "What is the fine for a second texting offense within 18 months in New York?",
        explanation: "A second texting offense within 18 months of the first carries a fine of up to $250. A third or subsequent offense within 18 months is up to $450.",
        handbookSection: "Defensive Driving — Cell Phone Laws",
        difficulty: 3,
        options: [
          { content: "Up to $250", isCorrect: true },
          { content: "Up to $200", isCorrect: false },
          { content: "Up to $300", isCorrect: false },
          { content: "Up to $450", isCorrect: false },
        ],
      },
      {
        content: "Why must you slow below the posted speed limit even when driving at the legal maximum?",
        explanation: "The posted speed limit indicates the maximum legal speed under ideal conditions. Drivers must reduce speed further based on actual road conditions such as rain, fog, ice, heavy traffic, curves, or reduced visibility.",
        handbookSection: "Defensive Driving — Speed Limits",
        difficulty: 1,
        options: [
          { content: "Because conditions like rain, fog, or ice may make the posted limit unsafe", isCorrect: true },
          { content: "Because you must always drive 5 mph below the limit", isCorrect: false },
          { content: "The posted limit is always the minimum — you cannot go slower", isCorrect: false },
          { content: "Only when emergency vehicles are present", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 4: Alcohol & Other Drugs ─────────────────────────────────────
  {
    name: "Alcohol & Other Drugs",
    nameEn: "Alcohol & Other Drugs",
    description: "DWI/DWAI laws, BAC limits, penalties, and implied consent",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-9-alcohol-and-other-drugs",
    questions: [
      {
        content: "At what blood alcohol content (BAC) level is a driver considered legally intoxicated (DWI) in New York?",
        explanation: "A BAC of 0.08% or higher is legal evidence of intoxication (DWI) in New York. At this level, a driver can be charged with Driving While Intoxicated.",
        handbookSection: "Alcohol and Other Drugs — BAC Limits",
        difficulty: 1,
        options: [
          { content: "0.08% or higher", isCorrect: true },
          { content: "0.10% or higher", isCorrect: false },
          { content: "0.05% or higher", isCorrect: false },
          { content: "0.15% or higher", isCorrect: false },
        ],
      },
      {
        content: "What BAC triggers an Aggravated DWI charge in New York?",
        explanation: "Aggravated DWI (Agg-DWI) applies when a driver's BAC is 0.18% or higher. This carries more severe penalties than a standard DWI.",
        handbookSection: "Alcohol and Other Drugs — BAC Limits",
        difficulty: 2,
        options: [
          { content: "0.18% or higher", isCorrect: true },
          { content: "0.15% or higher", isCorrect: false },
          { content: "0.12% or higher", isCorrect: false },
          { content: "0.20% or higher", isCorrect: false },
        ],
      },
      {
        content: "What BAC range results in a DWAI (Driving While Ability Impaired) charge?",
        explanation: "A BAC of 0.05% to 0.07% is legal evidence of impairment (DWAI) in New York. DWAI is a less severe charge than DWI but still carries serious penalties.",
        handbookSection: "Alcohol and Other Drugs — BAC Limits",
        difficulty: 2,
        options: [
          { content: "0.05% to 0.07%", isCorrect: true },
          { content: "0.02% to 0.05%", isCorrect: false },
          { content: "0.07% to 0.10%", isCorrect: false },
          { content: "0.04% to 0.08%", isCorrect: false },
        ],
      },
      {
        content: "Under New York's Zero Tolerance Law, what BAC is prohibited for drivers under age 21?",
        explanation: "The Zero Tolerance Law prohibits drivers under 21 from having any measurable BAC (0.02% to 0.07%). Even a small amount of alcohol is a violation for underage drivers.",
        handbookSection: "Alcohol and Other Drugs — Zero Tolerance",
        difficulty: 1,
        options: [
          { content: "Any measurable BAC (0.02% to 0.07%)", isCorrect: true },
          { content: "BAC above 0.05%", isCorrect: false },
          { content: "BAC above 0.08%", isCorrect: false },
          { content: "Any amount including 0.01%", isCorrect: false },
        ],
      },
      {
        content: "What is the penalty for a first Zero Tolerance violation for an underage driver?",
        explanation: "A first Zero Tolerance violation results in a 6-month license suspension. The driver must also pay a $100 suspension termination fee and a $125 civil penalty to have the license reinstated.",
        handbookSection: "Alcohol and Other Drugs — Zero Tolerance",
        difficulty: 2,
        options: [
          { content: "6-month license suspension", isCorrect: true },
          { content: "30-day license suspension", isCorrect: false },
          { content: "1-year license revocation", isCorrect: false },
          { content: "$500 fine and no license action", isCorrect: false },
        ],
      },
      {
        content: "What does New York's Implied Consent Law mean?",
        explanation: "By driving in New York, you automatically agree to submit to a chemical test (breath, blood, or urine) if asked by law enforcement. Refusing the test results in immediate license suspension.",
        handbookSection: "Alcohol and Other Drugs — Implied Consent",
        difficulty: 1,
        options: [
          { content: "Driving in NY means you consent to chemical testing if asked by police", isCorrect: true },
          { content: "Police need a court order to test your BAC", isCorrect: false },
          { content: "You can refuse a chemical test without penalty", isCorrect: false },
          { content: "Only a blood test is considered under implied consent", isCorrect: false },
        ],
      },
      {
        content: "What happens if you refuse a chemical test under New York's Implied Consent Law?",
        explanation: "Refusing a chemical test results in your license being suspended at arraignment. The refusal can also be presented as evidence in court. If a DMV hearing confirms the refusal, your license is revoked even if you are acquitted of the DWI charge.",
        handbookSection: "Alcohol and Other Drugs — Implied Consent",
        difficulty: 2,
        options: [
          { content: "Immediate license suspension and the refusal can be used as evidence in court", isCorrect: true },
          { content: "No penalty — you have the right to refuse", isCorrect: false },
          { content: "Mandatory jail time but no license action", isCorrect: false },
          { content: "$500 fine only, no license suspension", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum fine range for a first DWI offense in New York?",
        explanation: "A first DWI offense carries a fine of $500 to $1,000. It also results in a minimum 6-month license revocation and possible jail time of up to one year.",
        handbookSection: "Alcohol and Other Drugs — Penalties",
        difficulty: 2,
        options: [
          { content: "$500 to $1,000", isCorrect: true },
          { content: "$300 to $500", isCorrect: false },
          { content: "$1,000 to $2,500", isCorrect: false },
          { content: "$250 to $750", isCorrect: false },
        ],
      },
      {
        content: "What is the fine range for a first DWAI offense in New York?",
        explanation: "A first DWAI (0.05%-0.07% BAC) offense carries a fine of $300 to $500. It is classified as a traffic infraction (not a criminal offense) for the first offense.",
        handbookSection: "Alcohol and Other Drugs — Penalties",
        difficulty: 2,
        options: [
          { content: "$300 to $500", isCorrect: true },
          { content: "$500 to $1,000", isCorrect: false },
          { content: "$100 to $300", isCorrect: false },
          { content: "$1,000 to $2,500", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum license revocation for a first Aggravated DWI offense?",
        explanation: "A first Aggravated DWI (0.18% or higher BAC) offense results in a minimum 1-year license revocation, a fine of $1,000 to $2,500, and possible jail time of up to one year.",
        handbookSection: "Alcohol and Other Drugs — Penalties",
        difficulty: 2,
        options: [
          { content: "Minimum 1-year revocation", isCorrect: true },
          { content: "Minimum 6-month revocation", isCorrect: false },
          { content: "Minimum 90-day suspension", isCorrect: false },
          { content: "Minimum 18-month revocation", isCorrect: false },
        ],
      },
      {
        content: "What does Leandra's Law require for driving while intoxicated with a child in the vehicle?",
        explanation: "Leandra's Law makes it a Class E felony to drive while intoxicated (DWI) with a child under age 16 in the vehicle. This charge carries up to 4 years in prison.",
        handbookSection: "Alcohol and Other Drugs — Leandra's Law",
        difficulty: 2,
        options: [
          { content: "It is a Class E felony — up to 4 years imprisonment", isCorrect: true },
          { content: "It doubles the standard DWI fine only", isCorrect: false },
          { content: "It adds 5 years to the license revocation period", isCorrect: false },
          { content: "It only applies if the child is under age 5", isCorrect: false },
        ],
      },
      {
        content: "When must courts order the installation of an ignition interlock device?",
        explanation: "New York courts must order ignition interlock device installation for all DWI and Aggravated DWI convictions. The minimum requirement is 12 months. The device prevents the vehicle from starting unless an acceptable breath sample is provided.",
        handbookSection: "Alcohol and Other Drugs — Ignition Interlock",
        difficulty: 2,
        options: [
          { content: "For all DWI and Aggravated DWI convictions — minimum 12 months", isCorrect: true },
          { content: "Only for second or subsequent DWI offenses", isCorrect: false },
          { content: "Only when BAC exceeds 0.18%", isCorrect: false },
          { content: "At the judge's discretion — it is not mandatory", isCorrect: false },
        ],
      },
      {
        content: "What is the penalty for a first open container violation in New York?",
        explanation: "Possessing or drinking from an open alcoholic beverage container while driving is a traffic infraction. The first conviction carries a fine of up to $150 plus a mandatory surcharge, and possible jail time of up to 15 days.",
        handbookSection: "Alcohol and Other Drugs — Open Container",
        difficulty: 2,
        options: [
          { content: "Fine up to $150 plus mandatory surcharge", isCorrect: true },
          { content: "Fine up to $500 and 30-day suspension", isCorrect: false },
          { content: "Fine up to $1,000 and possible jail time", isCorrect: false },
          { content: "Warning only for the first offense", isCorrect: false },
        ],
      },
      {
        content: "Under what circumstances may a driver's license be permanently denied in New York?",
        explanation: "New York permanently denies a license to applicants with four or more alcohol/drug-related driving convictions in their lifetime, or three convictions within a 25-year period combined with one serious driving offense.",
        handbookSection: "Alcohol and Other Drugs — Repeat Offenders",
        difficulty: 3,
        options: [
          { content: "Four convictions in a lifetime, or three in 25 years plus a serious driving offense", isCorrect: true },
          { content: "Any two DWI convictions in a 10-year period", isCorrect: false },
          { content: "Three convictions in any time period", isCorrect: false },
          { content: "One DWI conviction plus any felony conviction", isCorrect: false },
        ],
      },
      {
        content: "Alcohol begins to impair driving ability:",
        explanation: "Alcohol starts to affect judgment, reaction time, and vision long before a person feels intoxicated. The New York DMV manual states that impairment begins with the very first drink.",
        handbookSection: "Alcohol and Other Drugs — Effects of Alcohol",
        difficulty: 1,
        options: [
          { content: "With the very first drink", isCorrect: true },
          { content: "Only after reaching the legal 0.08% BAC limit", isCorrect: false },
          { content: "Only after three or more drinks", isCorrect: false },
          { content: "Only when a person feels drunk", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 5: Driver Licensing & Vehicle Laws ────────────────────────────
  {
    name: "Driver Licensing & Vehicle Laws",
    nameEn: "Driver Licensing & Vehicle Laws",
    description: "License classes, GDL rules, testing requirements, and point system",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-1-driver-licenses",
    questions: [
      {
        content: "How many questions must you answer correctly on the New York written knowledge test?",
        explanation: "You must correctly answer at least 14 of the 20 questions on the written test. Additionally, you must answer at least 2 of the 4 road sign questions correctly.",
        handbookSection: "Driver Licenses — Written Test",
        difficulty: 1,
        options: [
          { content: "14 out of 20 (including 2 out of 4 road sign questions)", isCorrect: true },
          { content: "16 out of 20", isCorrect: false },
          { content: "15 out of 20", isCorrect: false },
          { content: "18 out of 20", isCorrect: false },
        ],
      },
      {
        content: "What vision requirement must you meet to obtain a driver's license in New York?",
        explanation: "You must have at least 20/40 vision in at least one eye, with or without corrective lenses such as glasses or contact lenses.",
        handbookSection: "Driver Licenses — Vision Requirements",
        difficulty: 1,
        options: [
          { content: "20/40 vision in at least one eye", isCorrect: true },
          { content: "20/20 vision in both eyes", isCorrect: false },
          { content: "20/50 vision in both eyes", isCorrect: false },
          { content: "20/40 vision in both eyes", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum age to apply for a Class DJ (junior operator) learner permit in New York?",
        explanation: "The minimum age for a Class DJ junior learner permit is 16 years old. The DJ license has graduated driving restrictions such as passenger limits and night driving rules.",
        handbookSection: "Driver Licenses — License Types",
        difficulty: 1,
        options: [
          { content: "16 years old", isCorrect: true },
          { content: "17 years old", isCorrect: false },
          { content: "15 years old", isCorrect: false },
          { content: "18 years old", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum age for a Class D (standard) driver's license in New York without a driver education certificate?",
        explanation: "The minimum age for a Class D license is 18 years old. A driver may qualify at age 17 with a certificate of completion from an approved driver education program.",
        handbookSection: "Driver Licenses — License Types",
        difficulty: 1,
        options: [
          { content: "18 years old (or 17 with a driver education certificate)", isCorrect: true },
          { content: "16 years old", isCorrect: false },
          { content: "17 years old with no exceptions", isCorrect: false },
          { content: "21 years old", isCorrect: false },
        ],
      },
      {
        content: "How many practice driving hours are required before taking a road test in New York, and how many must be at night?",
        explanation: "Before taking the road test, you must complete at least 50 hours of supervised practice driving, including at least 15 hours after sunset. This ensures experience in a variety of driving conditions.",
        handbookSection: "Driver Licenses — Road Test Requirements",
        difficulty: 2,
        options: [
          { content: "50 total hours, with at least 15 hours at night", isCorrect: true },
          { content: "30 total hours, with at least 5 hours at night", isCorrect: false },
          { content: "40 total hours, with at least 10 hours at night", isCorrect: false },
          { content: "50 total hours, no nighttime requirement", isCorrect: false },
        ],
      },
      {
        content: "What must be completed before a road test in New York?",
        explanation: "All applicants must complete the 5-Hour Pre-Licensing Course before they can take the road test. This course covers safe driving practices and New York traffic laws.",
        handbookSection: "Driver Licenses — Road Test Requirements",
        difficulty: 1,
        options: [
          { content: "The 5-Hour Pre-Licensing Course", isCorrect: true },
          { content: "A 2-hour online traffic course", isCorrect: false },
          { content: "A defensive driving course of 10 hours", isCorrect: false },
          { content: "A first aid and CPR certification", isCorrect: false },
        ],
      },
      {
        content: "How long must a junior learner permit be held before taking a road test?",
        explanation: "A junior learner permit must be held for a minimum of 6 months before the applicant is eligible to take the road test. This ensures adequate supervised practice time.",
        handbookSection: "Driver Licenses — GDL Rules",
        difficulty: 1,
        options: [
          { content: "Minimum 6 months", isCorrect: true },
          { content: "Minimum 3 months", isCorrect: false },
          { content: "Minimum 1 year", isCorrect: false },
          { content: "Minimum 30 days", isCorrect: false },
        ],
      },
      {
        content: "Under New York's GDL rules, how many non-family passengers under age 21 may a junior permit holder carry?",
        explanation: "Junior permit holders cannot drive with more than one passenger under the age of 21 unless those passengers are members of their immediate family. This restriction helps reduce distractions for new drivers.",
        handbookSection: "Driver Licenses — GDL Rules",
        difficulty: 2,
        options: [
          { content: "No more than one non-family passenger under 21", isCorrect: true },
          { content: "No non-family passengers allowed at all", isCorrect: false },
          { content: "Up to two non-family passengers under 21", isCorrect: false },
          { content: "No restriction on passengers with a learner permit", isCorrect: false },
        ],
      },
      {
        content: "In New York City, what are the nighttime driving restrictions for junior permit holders?",
        explanation: "In New York City, junior permit holders cannot drive between 9 p.m. and 5 a.m. During these hours, driving is prohibited except with a parent, guardian, or driving instructor present.",
        handbookSection: "Driver Licenses — GDL Rules",
        difficulty: 2,
        options: [
          { content: "No driving between 9 p.m. and 5 a.m.", isCorrect: true },
          { content: "No driving between midnight and 6 a.m.", isCorrect: false },
          { content: "No nighttime driving restrictions in NYC", isCorrect: false },
          { content: "No driving between 10 p.m. and 4 a.m.", isCorrect: false },
        ],
      },
      {
        content: "Within how many days must you notify the DMV of an address change in New York?",
        explanation: "New York law requires you to notify the DMV of an address change within 10 days. Failure to do so can affect your ability to receive important communications from the DMV.",
        handbookSection: "Driver Licenses — License Maintenance",
        difficulty: 2,
        options: [
          { content: "Within 10 days", isCorrect: true },
          { content: "Within 30 days", isCorrect: false },
          { content: "Within 60 days", isCorrect: false },
          { content: "Within 90 days", isCorrect: false },
        ],
      },
      {
        content: "How long after establishing New York residency must a new resident apply for a New York driver's license?",
        explanation: "New residents of New York must apply for a New York driver's license within 30 days of establishing residency. Out-of-state licenses are generally accepted for up to 2 years without requiring a written or road test.",
        handbookSection: "Driver Licenses — License Maintenance",
        difficulty: 2,
        options: [
          { content: "Within 30 days", isCorrect: true },
          { content: "Within 60 days", isCorrect: false },
          { content: "Within 90 days", isCorrect: false },
          { content: "Within 6 months", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum number of points that can be removed from a driver's license by completing an Accident Prevention Course?",
        explanation: "Completing an approved Accident Prevention Course (defensive driving course) allows a reduction of up to 4 points from a driver's license record. The course can be taken once every 18 months for point reduction.",
        handbookSection: "Driver Licenses — Point System",
        difficulty: 2,
        options: [
          { content: "4 points", isCorrect: true },
          { content: "2 points", isCorrect: false },
          { content: "6 points", isCorrect: false },
          { content: "8 points", isCorrect: false },
        ],
      },
      {
        content: "What does the Class E driver's license in New York allow that a Class D does not?",
        explanation: "A Class E license allows the holder to transport passengers for hire in a vehicle seating up to 14 passengers (such as a taxi or livery vehicle). It otherwise has the same vehicle permissions as a Class D.",
        handbookSection: "Driver Licenses — License Types",
        difficulty: 2,
        options: [
          { content: "Transport passengers for hire in vehicles seating up to 14", isCorrect: true },
          { content: "Drive vehicles over 26,000 lbs GVWR", isCorrect: false },
          { content: "Drive motorcycles and scooters", isCorrect: false },
          { content: "Drive commercial trucks with trailers", isCorrect: false },
        ],
      },
      {
        content: "What is the minimum age for a supervising driver when a learner permit holder is driving?",
        explanation: "The supervising driver must be at least 21 years old and hold a valid driver's license. They must sit in the front passenger seat while the permit holder is driving.",
        handbookSection: "Driver Licenses — Learner Permit Rules",
        difficulty: 1,
        options: [
          { content: "21 years old", isCorrect: true },
          { content: "18 years old", isCorrect: false },
          { content: "25 years old", isCorrect: false },
          { content: "16 years old", isCorrect: false },
        ],
      },
      {
        content: "What is the GVWR threshold that distinguishes a standard Class D license from commercial driving?",
        explanation: "A Class D license allows operation of vehicles with a gross vehicle weight rating (GVWR) of 26,000 lbs or less. Vehicles above this weight require a commercial driver's license (CDL).",
        handbookSection: "Driver Licenses — License Types",
        difficulty: 3,
        options: [
          { content: "26,000 lbs GVWR", isCorrect: true },
          { content: "10,000 lbs GVWR", isCorrect: false },
          { content: "33,000 lbs GVWR", isCorrect: false },
          { content: "18,000 lbs GVWR", isCorrect: false },
        ],
      },
    ],
  },

  // ─── TOPIC 6: Sharing the Road & Crash Procedures ────────────────────────
  {
    name: "Sharing the Road & Crash Procedures",
    nameEn: "Sharing the Road & Crash Procedures",
    description: "Pedestrians, cyclists, motorcycles, trucks, and what to do after a crash",
    handbookUrl: "https://dmv.ny.gov/new-york-state-drivers-manual-and-practice-tests/chapter-11-sharing-the-road",
    questions: [
      {
        content: "When must a driver yield to pedestrians?",
        explanation: "Drivers must always yield to pedestrians who are legally crossing — whether at a marked crosswalk or an unmarked crosswalk at an intersection. You must slow down or stop as necessary.",
        handbookSection: "Sharing the Road — Pedestrians",
        difficulty: 1,
        options: [
          { content: "Whenever pedestrians are legally crossing at any marked or unmarked crosswalk", isCorrect: true },
          { content: "Only at marked crosswalks with painted lines", isCorrect: false },
          { content: "Only when a WALK signal is displayed", isCorrect: false },
          { content: "Only in school zones and residential neighborhoods", isCorrect: false },
        ],
      },
      {
        content: "When must a driver yield to a pedestrian with a guide dog or white/metal cane?",
        explanation: "Drivers must yield to pedestrians using guide dogs or carrying white or metal canes at any crosswalk. These individuals may be blind or visually impaired and have absolute right-of-way in these situations.",
        handbookSection: "Sharing the Road — Pedestrians",
        difficulty: 1,
        options: [
          { content: "At any crosswalk — they always have the right-of-way", isCorrect: true },
          { content: "Only at marked crosswalks with signals", isCorrect: false },
          { content: "Only when the pedestrian signal shows WALK", isCorrect: false },
          { content: "Only if the driver can stop safely", isCorrect: false },
        ],
      },
      {
        content: "What are the bicycle helmet requirements for young riders in New York?",
        explanation: "In New York, all bicycle riders and passengers between the ages of 1 and 13 must wear an approved helmet. Children under 1 year of age should not be transported on a bicycle.",
        handbookSection: "Sharing the Road — Bicyclists",
        difficulty: 1,
        options: [
          { content: "Ages 1 through 13 must wear an approved helmet", isCorrect: true },
          { content: "Only children under 5 must wear helmets", isCorrect: false },
          { content: "Ages 1 through 16 must wear helmets", isCorrect: false },
          { content: "Helmets are optional for all ages", isCorrect: false },
        ],
      },
      {
        content: "What lighting equipment is required for bicycles ridden at night in New York?",
        explanation: "Bicycles operated at night must have a white headlight visible from 500 feet ahead and a red taillight visible from 300 feet behind. This makes cyclists visible to drivers in low-light conditions.",
        handbookSection: "Sharing the Road — Bicyclists",
        difficulty: 2,
        options: [
          { content: "White headlight visible 500 feet; red taillight visible 300 feet", isCorrect: true },
          { content: "White headlight visible 300 feet; no taillight required", isCorrect: false },
          { content: "Reflectors only — no lights required", isCorrect: false },
          { content: "Any colored light visible from 100 feet", isCorrect: false },
        ],
      },
      {
        content: "What is the approximate front blind spot size of a large tractor-trailer?",
        explanation: "A tractor-trailer has an approximately 20-foot front blind spot directly in front of the cab. The driver cannot see vehicles in this zone. Avoid cutting in front of trucks and allow extra space when merging ahead of them.",
        handbookSection: "Sharing the Road — Large Trucks",
        difficulty: 2,
        options: [
          { content: "About 20 feet directly in front of the cab", isCorrect: true },
          { content: "About 5 feet", isCorrect: false },
          { content: "About 50 feet", isCorrect: false },
          { content: "There is no front blind spot", isCorrect: false },
        ],
      },
      {
        content: "Who is at fault in most fatal car-truck collisions?",
        explanation: "According to New York's driver manual, 60% of fatal car-truck crashes are caused by the car driver. The car driver is killed in about 4 out of 5 fatal car-truck collisions.",
        handbookSection: "Sharing the Road — Large Trucks",
        difficulty: 2,
        options: [
          { content: "The car driver — responsible for 60% of fatal car-truck crashes", isCorrect: true },
          { content: "The truck driver — responsible for the majority of fatal crashes", isCorrect: false },
          { content: "Fault is equally shared in most cases", isCorrect: false },
          { content: "Road conditions — weather is the primary cause", isCorrect: false },
        ],
      },
      {
        content: "What percentage of fatal U.S. motorcycle crashes involve a vehicle turning left?",
        explanation: "About 41% of fatal motorcycle crashes in the U.S. involve a vehicle making a left turn in front of the motorcyclist. Drivers should always check carefully for motorcycles before turning left.",
        handbookSection: "Sharing the Road — Motorcyclists",
        difficulty: 2,
        options: [
          { content: "About 41%", isCorrect: true },
          { content: "About 25%", isCorrect: false },
          { content: "About 60%", isCorrect: false },
          { content: "About 15%", isCorrect: false },
        ],
      },
      {
        content: "Can a motorcycle and a car share the same lane at the same time?",
        explanation: "No. Cars and motorcycles cannot share the same lane. However, two motorcycles may ride side by side within a lane. Motorcycles are entitled to the full use of a lane.",
        handbookSection: "Sharing the Road — Motorcyclists",
        difficulty: 1,
        options: [
          { content: "No — motorcycles are entitled to the full use of their lane", isCorrect: true },
          { content: "Yes — motorcycles can share a lane with one car", isCorrect: false },
          { content: "Yes — if the motorcycle rides on the right edge of the lane", isCorrect: false },
          { content: "Yes — but only on highways", isCorrect: false },
        ],
      },
      {
        content: "What does an orange reflective triangle on the back of a vehicle mean?",
        explanation: "An orange reflective triangle identifies a slow-moving vehicle such as a farm tractor, animal-drawn vehicle, or construction equipment. These vehicles travel at 25 mph or less and must display this symbol.",
        handbookSection: "Sharing the Road — Slow-Moving Vehicles",
        difficulty: 1,
        options: [
          { content: "The vehicle is a slow-moving vehicle (25 mph or less)", isCorrect: true },
          { content: "The vehicle is a construction vehicle entering a work zone", isCorrect: false },
          { content: "The vehicle is an emergency response unit", isCorrect: false },
          { content: "The vehicle is towing another vehicle", isCorrect: false },
        ],
      },
      {
        content: "What is the maximum speed for a Class B limited-use motorcycle (moped) in New York?",
        explanation: "A Class B limited-use motorcycle (moped) has a maximum speed of 21 to 30 mph. Class B mopeds must travel in the right lane only. Class A mopeds can travel 31 to 40 mph in any lane.",
        handbookSection: "Sharing the Road — Mopeds",
        difficulty: 3,
        options: [
          { content: "21 to 30 mph, right lane only", isCorrect: true },
          { content: "20 mph or less, right lane only", isCorrect: false },
          { content: "31 to 40 mph, any lane", isCorrect: false },
          { content: "Up to 45 mph with a special permit", isCorrect: false },
        ],
      },
      {
        content: "What must you do before backing your vehicle in a parking area?",
        explanation: "Before backing up, you must physically check behind your vehicle. Children and small objects are often in blind spots that mirrors cannot show. Always turn to look behind you before backing.",
        handbookSection: "Sharing the Road — Pedestrians",
        difficulty: 1,
        options: [
          { content: "Physically check behind the vehicle before moving", isCorrect: true },
          { content: "Sound your horn twice then proceed slowly", isCorrect: false },
          { content: "Check only your rearview mirror", isCorrect: false },
          { content: "Turn on your hazard lights and back immediately", isCorrect: false },
        ],
      },
      {
        content: "When passing a horse and rider on the road, what should you NOT do?",
        explanation: "When approaching or passing a horse and rider, it is illegal to sound your horn. Sudden loud noises can frighten horses and cause dangerous situations. Always pass slowly and quietly.",
        handbookSection: "Sharing the Road — Horse Riders",
        difficulty: 2,
        options: [
          { content: "Sound your horn — it is illegal to honk when passing horses", isCorrect: true },
          { content: "Slow down and pass carefully", isCorrect: false },
          { content: "Move to the center of the road for more clearance", isCorrect: false },
          { content: "Flash your headlights to alert the rider", isCorrect: false },
        ],
      },
      {
        content: "When an ATV or snowmobile crosses a highway, what must the operator do?",
        explanation: "ATVs and snowmobiles may legally cross highways. Before crossing, the operator must stop and yield to all highway traffic. They must also cross at a 90-degree angle to the road.",
        handbookSection: "Sharing the Road — ATVs & Snowmobiles",
        difficulty: 2,
        options: [
          { content: "Stop, yield to traffic, and cross at a 90-degree angle", isCorrect: true },
          { content: "Cross at any angle if no traffic is visible", isCorrect: false },
          { content: "Sound the horn and cross quickly", isCorrect: false },
          { content: "ATVs and snowmobiles cannot legally cross public highways", isCorrect: false },
        ],
      },
      {
        content: "When passing a bicycle rider on the road, what should you do?",
        explanation: "When passing a cyclist, give extra space and reduce your speed. Check blind spots carefully before moving back into the lane. Cyclists are entitled to use the road and you must pass them safely.",
        handbookSection: "Sharing the Road — Bicyclists",
        difficulty: 1,
        options: [
          { content: "Give extra space, reduce speed, and check blind spots", isCorrect: true },
          { content: "Sound the horn to alert the cyclist and pass quickly", isCorrect: false },
          { content: "Pass in the same lane — cyclists must stay to the right", isCorrect: false },
          { content: "Wait behind the cyclist until they leave the road", isCorrect: false },
        ],
      },
      {
        content: "Where must bicycle riders travel when a bicycle lane is available?",
        explanation: "Cyclists must use bicycle lanes when they are available. If no bicycle lane exists, cyclists must ride near the right curb or edge of the road. This helps separate bicycle and motor vehicle traffic.",
        handbookSection: "Sharing the Road — Bicyclists",
        difficulty: 1,
        options: [
          { content: "In the bicycle lane; otherwise near the right curb or edge", isCorrect: true },
          { content: "In the center of the travel lane for safety", isCorrect: false },
          { content: "On the sidewalk if one is present", isCorrect: false },
          { content: "In any lane they choose for visibility", isCorrect: false },
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
Translate the following New York State driver's license exam questions from English to both Chinese (Simplified) and Spanish.

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

Topic: ${topicName}

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
      // Strip any markdown code fences if present
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
  // Escape backticks and backslashes for template literal usage, but we use regular strings
  // For double-quoted TS strings: escape backslash and double-quote
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  console.log("🗽 Generating New York DMV seed file with Claude API translations...\n");

  const topicsWithTranslations: Array<{
    topic: TopicEn;
    translations: TranslationResult[];
  }> = [];

  for (const topic of topicsEn) {
    console.log(`\n📚 Translating: ${topic.name} (${topic.questions.length} questions)`);
    const translations = await translateTopic(topic.name, topic.questions);
    topicsWithTranslations.push({ topic, translations });
    // Small delay between topics to avoid rate limiting
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log("\n\n📝 Building seed file...");

  // Build the seed file content
  let out = `/**
 * New York State DMV Driver's License Practice Questions
 * Source: New York State Driver's Manual (official) — dmv.ny.gov
 * ${topicsWithTranslations.reduce((sum, t) => sum + t.topic.questions.length, 0)} questions across 6 topics — English, Chinese (Simplified), Spanish
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
  topics: [\n`;

  for (const { topic, translations } of topicsWithTranslations) {
    out += `    // ─── ${topic.name.toUpperCase()} ─────────────────────────────────────────\n`;
    out += `    {\n`;
    out += `      name: "${escapeTs(topic.name)}",\n`;
    out += `      nameEn: "${escapeTs(topic.nameEn)}",\n`;
    out += `      description: "${escapeTs(topic.description)}",\n`;
    out += `      handbookUrl: "${topic.handbookUrl}",\n`;
    out += `      translations: [\n`;
    out += `        { language: "zh", name: "${escapeTs(translations[0]?.questionZh ? getTopicNameZh(topic.name) : topic.name)}", description: "${escapeTs(getTopicDescZh(topic.name))}" },\n`;
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

  const outPath = path.join(__dirname, "../seeds/new-york-dmv.ts");
  fs.writeFileSync(outPath, out, "utf-8");
  console.log(`\n✅ Seed file written to: ${outPath}`);
  console.log(`   Topics: ${topicsWithTranslations.length}`);
  console.log(`   Total questions: ${topicsWithTranslations.reduce((sum, t) => sum + t.topic.questions.length, 0)}`);
  console.log("\n📌 Next steps:");
  console.log("   1. Review prisma/seeds/new-york-dmv.ts");
  console.log("   2. Add to prisma/seeds/import.ts");
  console.log("   3. Run: npm run db:import");
}

// ─── TOPIC NAME/DESCRIPTION TRANSLATIONS (static) ───────────────────────────

function getTopicNameZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Control & Road Signs": "交通控制与道路标志",
    "Right-of-Way, Intersections & Turns": "优先通行权、路口与转弯",
    "Speed, Space & Defensive Driving": "车速、车距与防御性驾驶",
    "Alcohol & Other Drugs": "酒精与其他药物",
    "Driver Licensing & Vehicle Laws": "驾驶执照与车辆法规",
    "Sharing the Road & Crash Procedures": "与他人共用道路及事故处理",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescZh(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Control & Road Signs": "交通标志、信号灯、路面标线及车道控制",
    "Right-of-Way, Intersections & Turns": "优先权规则、转弯程序、信号及紧急车辆",
    "Speed, Space & Defensive Driving": "限速、跟车距离、安全带、手机法规及车辆安全",
    "Alcohol & Other Drugs": "DWI/DWAI 法律、血液酒精含量限制、处罚及默示同意",
    "Driver Licensing & Vehicle Laws": "驾照类别、GDL 规则、考试要求及积分制度",
    "Sharing the Road & Crash Procedures": "行人、骑车人、摩托车、卡车及事故后处理",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicNameEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Control & Road Signs": "Control de Tráfico y Señales Viales",
    "Right-of-Way, Intersections & Turns": "Derecho de Paso, Intersecciones y Giros",
    "Speed, Space & Defensive Driving": "Velocidad, Espacio y Manejo Defensivo",
    "Alcohol & Other Drugs": "Alcohol y Otras Drogas",
    "Driver Licensing & Vehicle Laws": "Licencia de Conducir y Leyes Vehiculares",
    "Sharing the Road & Crash Procedures": "Compartir la Vía y Procedimientos en Accidentes",
  };
  return map[nameEn] ?? nameEn;
}

function getTopicDescEs(nameEn: string): string {
  const map: Record<string, string> = {
    "Traffic Control & Road Signs": "Señales de tráfico, semáforos, marcas en el pavimento y controles de carril",
    "Right-of-Way, Intersections & Turns": "Reglas de prioridad, procedimientos de giro, señales y vehículos de emergencia",
    "Speed, Space & Defensive Driving": "Límites de velocidad, distancia de seguimiento, cinturones, leyes de celular y seguridad vehicular",
    "Alcohol & Other Drugs": "Leyes DWI/DWAI, límites de BAC, penalidades y consentimiento implícito",
    "Driver Licensing & Vehicle Laws": "Tipos de licencia, reglas GDL, requisitos de examen y sistema de puntos",
    "Sharing the Road & Crash Procedures": "Peatones, ciclistas, motocicletas, camiones y procedimientos tras un accidente",
  };
  return map[nameEn] ?? nameEn;
}

main()
  .catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  });
