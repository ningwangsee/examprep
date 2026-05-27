import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const categories = await prisma.examCategory.findMany({
    include: { _count: { select: { topics: true } } },
    orderBy: { id: "asc" },
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">免费备考，从这里开始</h1>
        <p className="text-gray-500 text-lg">
          覆盖美国证券、AWS 认证、中国 CPA 等主流考试，AI 辅导随时答疑
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              style={{ backgroundColor: cat.color + "20" }}
            >
              {cat.icon}
            </div>
            <h2 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
              {cat.name}
            </h2>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {cat.description}
            </p>
            <span className="text-xs text-gray-400">
              {cat._count.topics} 个专题
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
