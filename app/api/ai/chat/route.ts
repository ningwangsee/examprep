import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { question, explanation, messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: "AI 功能尚未配置，请先设置 ANTHROPIC_API_KEY。" });
  }

  const systemPrompt = `你是一位专业的考试辅导老师。当前题目如下：

题目：${question}
标准解析：${explanation}

请根据学生的问题，用简洁清晰的中文解答。如果学生问的是中文，用中文回答；如果是英文，用英文回答。`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 500,
      system: systemPrompt,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  if (!response.ok) {
    return Response.json({ reply: "AI 响应失败，请稍后再试。" }, { status: 500 });
  }

  const data = await response.json();
  const reply = data.content?.[0]?.text ?? "暂无回复";
  return Response.json({ reply });
}
