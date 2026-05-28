import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getLang, ui, tr } from "@/lib/lang";
import QuizClient from "./QuizClient";

export default async function QuizPage(props: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await props.params;
  const lang = await getLang();
  const t = ui[lang];

  const topic = await prisma.examTopic.findUnique({
    where: { id: Number(topicId) },
    include: {
      translations: true,
      category: { include: { translations: true } },
      questions: {
        include: { options: { orderBy: { id: "asc" } } },
        orderBy: { id: "asc" },
      },
    },
  });

  if (!topic) notFound();

  const topicName = tr(topic.name, topic.translations, lang, "name");
  const catName = tr(topic.category.name, topic.category.translations, lang, "name");

  const questions = topic.questions.map((q) => ({
    id: q.id,
    content: q.content,
    explanation: q.explanation,
    handbookSection: q.handbookSection ?? undefined,
    options: q.options.map((o) => ({
      id: o.id,
      content: o.content,
      isCorrect: o.isCorrect,
    })),
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">{t.allExams}</Link>
        <span>›</span>
        <Link href={`/category/${topic.categoryId}`} className="hover:text-gray-600">
          {catName}
        </Link>
        <span>›</span>
        <span className="text-gray-600">{topicName}</span>
      </div>

      <QuizClient
        questions={questions}
        topicName={topicName}
        hasAiTutor={topic.category.hasAiTutor}
        handbookUrl={topic.handbookUrl ?? undefined}
        t={t}
      />
    </div>
  );
}
