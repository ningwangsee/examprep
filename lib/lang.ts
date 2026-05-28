import { cookies } from "next/headers";

export type Lang = "en" | "zh" | "es";

export async function getLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const val = cookieStore.get("lang")?.value;
  if (val === "zh" || val === "es") return val;
  return "en";
}

// UI string translations — page chrome, buttons, labels
export const ui = {
  en: {
    siteTitle: "DMV Practice",
    homeTitle: "Free DMV Practice Tests",
    homeSubtitle:
      "Prepare for your driver's license written test — practice questions based on official state handbooks",
    allExams: "All Exams",
    topics: "topics",
    questions: "questions",
    backToAll: "← All Exams",
    nextQuestion: "Next Question →",
    seeResults: "See Results",
    tryAgain: "Try Again",
    practiceComplete: "Practice Complete!",
    correctCount: "Correct",
    keepPracticing: "CA DMV requires 83% to pass (38/46 correct). Keep practicing!",
    correctLabel: "✓ Correct!",
    incorrectLabel: "✗ Incorrect",
    sessionProgress: "Session Progress",
    answered: "Answered",
    accuracy: "Accuracy",
    handbookTitle: "CA Driver Handbook",
    handbookDesc:
      "All questions are based on the official California Driver Handbook. Study the relevant section to reinforce your knowledge.",
    openHandbook: "Open Handbook Section ↗",
    handbookRef: "Handbook Reference",
    reviewSection: "Review this section →",
    footerText: "Free practice tests based on official state handbooks",
  },
  zh: {
    siteTitle: "驾照练习",
    homeTitle: "免费驾照笔试练习",
    homeSubtitle: "备考美国驾照笔试 — 基于各州官方手册的练习题",
    allExams: "所有考试",
    topics: "个专题",
    questions: "题",
    backToAll: "← 所有考试",
    nextQuestion: "下一题 →",
    seeResults: "查看结果",
    tryAgain: "重新练习",
    practiceComplete: "本轮练习完成！",
    correctCount: "答对",
    keepPracticing: "加州 DMV 要求正确率 83%（46题答对38题），继续加油！",
    correctLabel: "✓ 回答正确！",
    incorrectLabel: "✗ 回答错误",
    sessionProgress: "答题进度",
    answered: "已答",
    accuracy: "正确率",
    handbookTitle: "加州驾照手册",
    handbookDesc: "所有题目均基于加州官方驾照手册，答错时请查阅对应章节加强记忆。",
    openHandbook: "打开手册章节 ↗",
    handbookRef: "手册参考",
    reviewSection: "查看此章节 →",
    footerText: "基于各州官方手册的免费练习题",
  },
  es: {
    siteTitle: "Práctica DMV",
    homeTitle: "Exámenes de Práctica del DMV Gratis",
    homeSubtitle:
      "Prepárate para el examen escrito de tu licencia de conducir — preguntas basadas en los manuales oficiales",
    allExams: "Todos los Exámenes",
    topics: "temas",
    questions: "preguntas",
    backToAll: "← Todos los Exámenes",
    nextQuestion: "Siguiente →",
    seeResults: "Ver Resultados",
    tryAgain: "Intentar de Nuevo",
    practiceComplete: "¡Práctica Completa!",
    correctCount: "Correctas",
    keepPracticing:
      "El DMV de CA requiere 83% para aprobar (38/46 correctas). ¡Sigue practicando!",
    correctLabel: "✓ ¡Correcto!",
    incorrectLabel: "✗ Incorrecto",
    sessionProgress: "Progreso de Sesión",
    answered: "Respondidas",
    accuracy: "Precisión",
    handbookTitle: "Manual del Conductor de CA",
    handbookDesc:
      "Todas las preguntas están basadas en el Manual oficial del Conductor de California.",
    openHandbook: "Abrir sección del manual ↗",
    handbookRef: "Referencia del Manual",
    reviewSection: "Revisar esta sección →",
    footerText: "Exámenes de práctica basados en manuales oficiales",
  },
} satisfies Record<Lang, Record<string, string>>;

export type UiStrings = (typeof ui)[Lang];

/** Pick translated name/description, falling back to the English base. */
export function tr(
  base: string,
  translations: { language: string; name?: string; description?: string; content?: string } [],
  lang: Lang,
  field: "name" | "description" | "content" = "name"
): string {
  if (lang === "en") return base;
  const t = translations.find((x) => x.language === lang);
  return (t && (t[field] as string | undefined)) ?? base;
}
