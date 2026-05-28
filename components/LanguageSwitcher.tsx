"use client";

import { useRouter } from "next/navigation";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "es", label: "ES" },
] as const;

export default function LanguageSwitcher({ current }: { current: string }) {
  const router = useRouter();

  function setLang(lang: string) {
    // Store in cookie for 1 year
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
            current === code
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
