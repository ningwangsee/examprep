import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function CategoryPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const category = await prisma.examCategory.findUnique({
    where: { id: Number(id) },
    include: {
      topics: {
        include: { _count: { select: { questions: true } } },
        orderBy: { id: "asc" },
      },
    },
  });

  if (!category) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block">
        ← 返回所有考试
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ backgroundColor: category.color + "20" }}
        >
          {category.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{category.name}</h1>
          <p className="text-gray-500 text-sm mt-0.5">{category.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        {category.topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/quiz/${topic.id}`}
            className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-sm hover:border-gray-300 transition-all group"
          >
            <div>
              <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                {topic.name}
              </h3>
              <p className="text-sm text-gray-400 mt-0.5">{topic.description}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <span className="text-sm text-gray-400">
                {topic._count.questions} 题
              </span>
              <span className="text-gray-300 text-lg">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
