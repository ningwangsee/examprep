"use client";

import { useState, useRef, useEffect } from "react";

type Option = { id: number; content: string; isCorrect: boolean };
type Question = { id: number; content: string; explanation: string; options: Option[] };

type Message = { role: "user" | "assistant"; content: string };

export default function QuizClient({ questions, topicName }: { questions: Question[]; topicName: string }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // AI chat
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const question = questions[current];

  function handleSelect(optionId: number, isCorrect: boolean) {
    if (selected !== null) return;
    setSelected(optionId);
    setShowExplanation(true);
    if (isCorrect) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
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
      setMessages((m) => [...m, { role: "assistant", content: "抱歉，AI 暂时无法响应，请稍后再试。" }]);
    } finally {
      setLoading(false);
    }
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-4">{pct >= 70 ? "🎉" : "📖"}</div>
        <h2 className="text-2xl font-bold mb-2">本轮练习完成！</h2>
        <p className="text-gray-500 mb-1">
          答对 <span className="font-semibold text-gray-800">{score}</span> / {questions.length} 题
        </p>
        <p className="text-3xl font-bold mt-2 mb-8" style={{ color: pct >= 70 ? "#10B981" : "#F59E0B" }}>
          {pct}%
        </p>
        <button
          onClick={() => { setCurrent(0); setSelected(null); setShowExplanation(false); setScore(0); setFinished(false); setMessages([]); }}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          重新练习
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* 题目区 */}
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{topicName}</span>
          <span>{current + 1} / {questions.length}</span>
        </div>

        {/* 进度条 */}
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
              let style = "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
              if (selected !== null) {
                if (opt.isCorrect) style = "border-green-400 bg-green-50";
                else if (opt.id === selected) style = "border-red-400 bg-red-50";
                else style = "border-gray-200 opacity-60";
              }
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id, opt.isCorrect)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${style}`}
                >
                  {opt.content}
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <p className="text-sm font-semibold text-blue-800 mb-1">解析</p>
            <p className="text-sm text-blue-700 leading-relaxed">{question.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            {current + 1 < questions.length ? "下一题 →" : "查看结果"}
          </button>
        )}
      </div>

      {/* AI 问答区 */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 flex flex-col h-[520px]">
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-sm font-semibold">🤖 AI 辅导</p>
          <p className="text-xs text-gray-400 mt-0.5">针对本题随时提问</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <p className="text-sm text-gray-400 text-center mt-8">
              对这道题有疑问？直接问我吧
            </p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] text-sm px-3 py-2 rounded-xl leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-400 text-sm px-3 py-2 rounded-xl">
                思考中...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-3 border-t border-gray-100 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleAsk()}
            placeholder="输入问题..."
            className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={handleAsk}
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  );
}
