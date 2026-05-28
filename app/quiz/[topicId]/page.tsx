import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import QuizClient from "./QuizClient";

export default async function QuizPage(props: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await props.params;
  const topic = await prisma.examTopic.findUnique({
    where: { id: Number(topicId) },
    include: {
      category: true,
      questions: {
        include: { options: { orderBy: { id: "asc" } } },
        orderBy: { id: "asc" },
      },
    },
  });

  if (!topic) notFound();

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
        <Link href="/" className="hover:text-gray-600">All Exams</Link>
        <span>›</span>
        <Link href={`/category/${topic.categoryId}`} className="hover:text-gray-600">
          {topic.category.name}
        </Link>
        <span>›</span>
        <span className="text-gray-600">{topic.name}</span>
      </div>

      <QuizClient
        questions={questions}
        topicName={topic.name}
        hasAiTutor={topic.category.hasAiTutor}
        handbookUrl={topic.handbookUrl ?? undefined}
      />
    </div>
  );
}
