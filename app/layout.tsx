import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Free DMV Practice Tests — ExamPrep",
  description:
    "Free practice questions for US driver's license written tests. Based on official state handbooks. California DMV and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight">
              🚗 DMV Practice
            </Link>
            <nav className="text-sm text-gray-500 flex items-center gap-5">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                All Exams
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
          Free practice tests based on official state handbooks
        </footer>
      </body>
    </html>
  );
}
