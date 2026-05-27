# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**ExamPrep** — a free exam preparation platform covering US securities (FINRA), AWS certification, China CPA, and more. Built with Next.js 16, Prisma 7, SQLite, Tailwind CSS v4, and Claude AI for tutoring.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run db:seed      # Reset and re-seed the SQLite database with sample data
npx prisma db push   # Apply schema changes to dev.db (no migration files)
npx prisma generate  # Regenerate Prisma client after schema changes
npx prisma studio    # Open Prisma Studio GUI
```

## Environment Variables

Required in `.env`:
```
DATABASE_URL="file:./dev.db"
ANTHROPIC_API_KEY=sk-ant-...   # Optional; AI chat is disabled without it
```

## Architecture

### Stack Versions (critical — both have breaking changes)
- **Next.js 16.2.6**: APIs may differ from training data. Read relevant guides in `node_modules/next/dist/docs/` before writing page/route code.
- **Prisma 7.8**: Connection URL is **not** in `schema.prisma`. It lives in `prisma.config.ts` and is passed via `adapter` to `PrismaClient`. See below.

### Data Flow

```
SQLite (dev.db)
  └── Prisma 7 + @prisma/adapter-better-sqlite3
        └── lib/prisma.ts  (singleton PrismaClient)
              └── Server Components / API Routes
```

Server Components query the DB directly via `lib/prisma.ts`. No REST layer is needed for read operations.

### Key Prisma 7 Conventions

The generated client is at `app/generated/prisma/client` (not `@prisma/client`):
```ts
import { PrismaClient } from "@/app/generated/prisma/client";
```

The adapter must be instantiated with the URL — never put `url` in `schema.prisma`:
```ts
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });
```

After any change to `prisma/schema.prisma`, run **both**:
```bash
npx prisma db push    # sync DB
npx prisma generate   # sync client types
```

### Next.js 16 Page Params Convention

Route params are `Promise<{...}>` and must be awaited:
```ts
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
}
```

### Route Map

| Route | File | Type |
|---|---|---|
| `/` | `app/page.tsx` | Server Component — lists all `ExamCategory` |
| `/category/[id]` | `app/category/[id]/page.tsx` | Server Component — lists `ExamTopic` for a category |
| `/quiz/[topicId]` | `app/quiz/[topicId]/page.tsx` | Server Component — fetches questions, renders `QuizClient` |
| `POST /api/ai/chat` | `app/api/ai/chat/route.ts` | Route Handler — proxies to Anthropic API |

### Quiz Page Split

`app/quiz/[topicId]/page.tsx` is a Server Component that fetches all questions with options from DB, then passes them as props to `QuizClient.tsx` (`"use client"`). The client component owns all interactive state: selected answer, score, AI chat messages.

### AI Chat

`/api/ai/chat` calls `https://api.anthropic.com/v1/messages` directly (no SDK) using `claude-haiku-4-5-20251001`. It receives the current question, its explanation, and the full chat history, and returns `{ reply: string }`. The endpoint gracefully degrades if `ANTHROPIC_API_KEY` is unset.

### Styling

Tailwind CSS v4 — uses `@import "tailwindcss"` in `globals.css` (not `@tailwind base/components/utilities`). No `tailwind.config.js` file needed.

### Database Seeding

`prisma/seed.ts` deletes all rows and recreates 3 exam categories with topics and questions. Run `npm run db:seed` after any schema reset or to restore sample data. The seed script imports `dotenv/config` directly since it runs outside Next.js.
