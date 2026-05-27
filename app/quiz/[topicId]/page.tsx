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

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">所有考试</Link>
        <span>›</span>
        <Link href={`/category/${topic.categoryId}`} className="hover:text-gray-600">
          {topic.category.name}
        </Link>
        <span>›</span>
        <span className="text-gray-600">{topic.name}</span>
      </div>

      <QuizClient questions={topic.questions} topicName={topic.name} />
    </div>
  );
}
