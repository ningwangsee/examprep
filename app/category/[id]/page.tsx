import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getLang, ui, tr } from "@/lib/lang";
import { examGuides } from "@/lib/exam-info";

export default async function CategoryPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const lang = await getLang();
  const t = ui[lang];

  const category = await prisma.examCategory.findUnique({
    where: { id: Number(id) },
    include: {
      translations: true,
      topics: {
        include: {
          _count: { select: { questions: true } },
          translations: true,
        },
        orderBy: { id: "asc" },
      },
    },
  });

  if (!category) notFound();

  const catName = tr(category.name, category.translations, lang, "name");
  const catDesc = tr(category.description, category.translations, lang, "description");
  const guide = examGuides[category.nameEn];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

      {/* ── Back link ─────────────────────────────────────────── */}
      <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 inline-block">
        {t.backToAll}
      </Link>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <div className="flex items-start gap-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shrink-0"
            style={{ backgroundColor: category.color + "20" }}
          >
            {category.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold mb-1">{catName}</h1>
            <p className="text-gray-500 text-sm mb-5">{catDesc}</p>

            {/* Stat chips */}
            {guide && (
              <div className="flex flex-wrap gap-2">
                {guide.stats.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full"
                  >
                    <span className="text-gray-400 font-medium">{s.label}</span>
                    <span className="font-semibold">{s.value}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick-action buttons */}
        {guide && (
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
            <a
              href="#practice"
              className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              🎯 Start Practicing
            </a>
            <a
              href={guide.officialLinks.find((l) => l.label === "Driver Handbook (Online)")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-700 text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              📖 Read Handbook
            </a>
            <a
              href={guide.officialLinks.find((l) => l.label === "Schedule Appointment")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-700 text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              📅 Schedule Test
            </a>
          </div>
        )}
      </div>

      {/* ── Exam Guide (only when guide data exists) ──────────── */}
      {guide && (
        <>
          {/* What to Bring + How to Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* What to Bring */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-800 mb-4">📋 What to Bring</h2>
              <ul className="space-y-3">
                {guide.whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-green-500 mt-0.5 shrink-0 text-sm">✓</span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.item}</p>
                      {item.note && (
                        <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Schedule */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-800 mb-4">📅 How to Schedule</h2>
              <ol className="space-y-4">
                {guide.howToSchedule.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{s.step}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Test Day Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="font-semibold text-amber-900 mb-4">💡 Test Day Tips</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                  <span className="shrink-0 mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Handbook Chapters */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">📚 California Driver Handbook</h2>
            <p className="text-sm text-gray-500 mb-4">
              All practice questions are based on the chapters below. Click any chapter to read it on the official DMV website.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {guide.handbookChapters.map((ch) => (
                <a
                  key={ch.url}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50 transition-all group text-center"
                >
                  <div className="text-2xl mb-2">{ch.emoji}</div>
                  <p className="text-xs font-medium text-gray-700 group-hover:text-blue-700 leading-snug">
                    {ch.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── Practice Topics ───────────────────────────────────── */}
      <div id="practice">
        <h2 className="font-semibold text-gray-800 mb-4">🎯 Practice by Topic</h2>
        <div className="space-y-3">
          {category.topics.map((topic) => {
            const topicName = tr(topic.name, topic.translations, lang, "name");
            const topicDesc = tr(topic.description, topic.translations, lang, "description");
            return (
              <Link
                key={topic.id}
                href={`/quiz/${topic.id}`}
                className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4 hover:shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all group"
              >
                <div>
                  <h3 className="font-medium group-hover:text-blue-700 transition-colors">
                    {topicName}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">{topicDesc}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-sm text-gray-400">
                    {topic._count.questions} {t.questions}
                  </span>
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Official Links ─────────────────────────────────────── */}
      {guide && (
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">🔗 Official Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {guide.officialLinks.map((link) => (
              <a
                key={link.url + link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all group flex items-start gap-3"
              >
                <span className="text-xl shrink-0">{link.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {link.label} ↗
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
