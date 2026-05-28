/**
 * Static exam guide content keyed by category nameEn.
 * Covers: exam stats, requirements, scheduling, handbook chapters, official links.
 * Content is in English; labels are translated via lib/lang.ts.
 */

export type HandbookChapter = {
  title: string;
  url: string;
  emoji: string;
};

export type OfficialLink = {
  label: string;
  url: string;
  description: string;
  emoji: string;
};

export type ExamGuide = {
  /** Key facts shown as stat chips */
  stats: { label: string; value: string }[];
  /** What to bring on test day */
  whatToBring: { item: string; note?: string }[];
  /** How to schedule steps */
  howToSchedule: { step: string; detail: string }[];
  /** Test day tips */
  tips: string[];
  /** Links to official handbook chapters */
  handbookChapters: HandbookChapter[];
  /** External official links */
  officialLinks: OfficialLink[];
};

const californiaDMV: ExamGuide = {
  stats: [
    { label: "Questions", value: "46" },
    { label: "To Pass", value: "38 correct (83%)" },
    { label: "Time Limit", value: "None" },
    { label: "Languages", value: "EN · ES · ZH + 29 more" },
    { label: "Retake", value: "3 attempts / visit" },
    { label: "Fee", value: "Included in application" },
  ],

  whatToBring: [
    {
      item: "Proof of identity",
      note: "U.S. passport, birth certificate, or permanent resident card",
    },
    {
      item: "Social Security Number",
      note: "Card not required — just know the number",
    },
    {
      item: "California residency proof",
      note: "Utility bill, bank statement, or lease (showing CA address)",
    },
    {
      item: "Application form (DL 44)",
      note: "Available at DMV or fill out online in advance",
    },
    {
      item: "$41 application fee",
      note: "Cash, check, or card accepted",
    },
  ],

  howToSchedule: [
    {
      step: "Schedule online",
      detail: "Visit dmv.ca.gov and book a same-day or future appointment — usually the fastest option.",
    },
    {
      step: "Call by phone",
      detail: "1-800-777-0133 (Mon–Fri 8am–5pm). Have your ZIP code ready to find the nearest office.",
    },
    {
      step: "Walk in",
      detail: "Arrive early morning. Wait times vary by office — check current wait times at dmv.ca.gov before going.",
    },
  ],

  tips: [
    "Read the full California Driver Handbook at least once before taking the test.",
    "The test is on a touchscreen computer — no paper, no pencil needed.",
    "You can take the test in your preferred language (33 languages available).",
    "If you fail, you can retake up to 3 times per visit after paying once. After 3 failures, you must reapply.",
    "There is no time limit — read each question carefully before answering.",
    "Questions are drawn from a large pool, so each attempt may show different questions.",
  ],

  handbookChapters: [
    {
      title: "Getting Your License",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/getting-your-license/",
      emoji: "🪪",
    },
    {
      title: "Traffic Controls",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/traffic-controls/",
      emoji: "🚦",
    },
    {
      title: "Safe Driving",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/safe-driving/",
      emoji: "🛡️",
    },
    {
      title: "Sharing the Road",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/sharing-the-road/",
      emoji: "🚲",
    },
    {
      title: "Alcohol and Drugs",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/alcohol-and-drugs/",
      emoji: "🚫",
    },
    {
      title: "Emergencies",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/emergencies/",
      emoji: "🆘",
    },
    {
      title: "Vehicle Safety",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/vehicle-safety/",
      emoji: "🔧",
    },
    {
      title: "Financial Responsibility",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/financial-responsibility/",
      emoji: "📋",
    },
  ],

  officialLinks: [
    {
      label: "CA DMV Official Site",
      url: "https://www.dmv.ca.gov",
      description: "Home of the California Department of Motor Vehicles",
      emoji: "🏛️",
    },
    {
      label: "Driver Handbook (Online)",
      url: "https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/",
      description: "Full California Driver Handbook — read chapter by chapter",
      emoji: "📖",
    },
    {
      label: "Handbook PDF Download",
      url: "https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/",
      description: "Download the handbook as a PDF to study offline",
      emoji: "⬇️",
    },
    {
      label: "Schedule Appointment",
      url: "https://www.dmv.ca.gov/portal/make-an-appointment/",
      description: "Book your knowledge test appointment online",
      emoji: "📅",
    },
    {
      label: "Find a DMV Office",
      url: "https://www.dmv.ca.gov/portal/locations/",
      description: "Find the DMV office nearest to you",
      emoji: "📍",
    },
    {
      label: "Check Wait Times",
      url: "https://www.dmv.ca.gov/portal/locations/",
      description: "See current wait times before you go",
      emoji: "⏱️",
    },
  ],
};

/** Look up exam guide by category.nameEn — returns undefined if not found. */
export const examGuides: Record<string, ExamGuide> = {
  "California Driver's License": californiaDMV,
};
