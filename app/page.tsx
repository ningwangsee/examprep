import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getLang, ui, tr } from "@/lib/lang";

export default async function HomePage() {
  const lang = await getLang();
  const t = ui[lang];

  const categories = await prisma.examCategory.findMany({
    include: {
      _count: { select: { topics: true } },
      translations: true,
    },
    orderBy: { id: "asc" },
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">{t.homeTitle}</h1>
        <p className="text-gray-500 text-lg">{t.homeSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const name = tr(cat.name, cat.translations, lang, "name");
          const description = tr(cat.description, cat.translations, lang, "description");
          return (
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
                {name}
              </h2>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>
              <span className="text-xs text-gray-400">
                {cat._count.topics} {t.topics}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
