"use client";

import { useState, useRef, useEffect } from "react";
import type { UiStrings } from "@/lib/lang";

type Option = { id: number; content: string; isCorrect: boolean };
type Question = {
  id: number;
  content: string;
  explanation: string;
  handbookSection?: string;
  options: Option[];
};

type Message = { role: "user" | "assistant"; content: string };

type Props = {
  questions: Question[];
  topicName: string;
  hasAiTutor: boolean;
  handbookUrl?: string;
  t: UiStrings;
};

export default function QuizClient({ questions, topicName, hasAiTutor, handbookUrl, t }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // AI chat (only used when hasAiTutor is true)
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const question = questions[current];

  function handleSelect(optionId: number, correct: boolean) {
    if (selected !== null) return;
    setSelected(optionId);
    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setIsCorrect(null);
      setShowExplanation(false);
      setMessages([]);
    }
  }

  async function handleAsk() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMessage: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMessage]);
    setLoading(true);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.content,
          explanation: question.explanation,
          messages: [...messages, userMessage],
        }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "AI is temporarily unavailable. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 83;
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">{passed ? "🎉" : "📖"}</div>
        <h2 className="text-2xl font-bold mb-2">{t.practiceComplete}</h2>
        <p className="text-gray-500 mb-1">
          {t.correctCount}:{" "}
          <span className="font-semibold text-gray-800">{score}</span> / {questions.length}
        </p>
        <p
          className="text-3xl font-bold mt-2 mb-3"
          style={{ color: passed ? "#10B981" : "#F59E0B" }}
        >
          {pct}%
        </p>
        {!passed && (
          <p className="text-sm text-gray-400 mb-6">{t.keepPracticing}</p>
        )}
        <button
          onClick={() => {
            setCurrent(0);
            setSelected(null);
            setIsCorrect(null);
            setShowExplanation(false);
            setScore(0);
            setFinished(false);
            setMessages([]);
          }}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          {t.tryAgain}
        </button>
      </div>
    );
  }

  const answeredCount = current + (selected !== null ? 1 : 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Question area */}
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{topicName}</span>
          <span>
            {current + 1} / {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <p className="text-lg font-medium leading-relaxed mb-6">{question.content}</p>

          <div className="space-y-3">
            {question.options.map((opt) => {
              let style = "border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer";
              if (selected !== null) {
                if (opt.isCorrect) style = "border-green-400 bg-green-50 cursor-default";
                else if (opt.id === selected) style = "border-red-400 bg-red-50 cursor-default";
                else style = "border-gray-200 opacity-50 cursor-default";
              }
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id, opt.isCorrect)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${style}`}
                >
                  <span className="flex items-start gap-2">
                    {selected !== null && opt.isCorrect && (
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    )}
                    {selected !== null && opt.id === selected && !opt.isCorrect && (
                      <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                    )}
                    {opt.content}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div
            className={`rounded-2xl p-5 border ${
              isCorrect ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"
            }`}
          >
            <p
              className={`text-sm font-semibold mb-1 ${
                isCorrect ? "text-green-800" : "text-amber-800"
              }`}
            >
              {isCorrect ? t.correctLabel : t.incorrectLabel}
            </p>
            <p
              className={`text-sm leading-relaxed ${
                isCorrect ? "text-green-700" : "text-amber-700"
              }`}
            >
              {question.explanation}
            </p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            {current + 1 < questions.length ? t.nextQuestion : t.seeResults}
          </button>
        )}
      </div>

      {/* Right panel: AI chat or Handbook reference */}
      {hasAiTutor ? (
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 flex flex-col h-[520px]">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold">🤖 AI Tutor</p>
            <p className="text-xs text-gray-400 mt-0.5">Ask anything about this question</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-sm text-gray-400 text-center mt-8">Have a question? Ask me!</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] text-sm px-3 py-2 rounded-xl leading-relaxed ${
                    msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-400 text-sm px-3 py-2 rounded-xl">...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleAsk()}
              placeholder="Type your question..."
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={handleAsk}
              disabled={loading || !input.trim()}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <div className="lg:col-span-2 space-y-4">
          {/* Handbook info */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-700 mb-1">📚 {t.handbookTitle}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{t.handbookDesc}</p>
            {handbookUrl && (
              <a
                href={handbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                {t.openHandbook}
              </a>
            )}
          </div>

          {/* Handbook section reference — shown after answering */}
          {selected !== null && question.handbookSection && (
            <div
              className={`rounded-2xl border p-5 ${
                isCorrect ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                  isCorrect ? "text-green-600" : "text-blue-600"
                }`}
              >
                {t.handbookRef}
              </p>
              <p
                className={`text-sm font-medium ${
                  isCorrect ? "text-green-800" : "text-blue-800"
                }`}
              >
                {question.handbookSection}
              </p>
              {!isCorrect && handbookUrl && (
                <a
                  href={handbookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t.reviewSection}
                </a>
              )}
            </div>
          )}

          {/* Session progress */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
            <p className="text-sm font-semibold text-gray-700 mb-3">📊 {t.sessionProgress}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t.answered}</span>
                <span className="font-medium">{answeredCount} / {questions.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t.correctCount}</span>
                <span className="font-medium text-green-600">{score}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t.accuracy}</span>
                <span className="font-medium">
                  {answeredCount === 0 ? "—" : `${Math.round((score / answeredCount) * 100)}%`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
