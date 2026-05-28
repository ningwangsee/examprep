# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**DMV Practice** — a free driver's license written test preparation platform. Currently covers California DMV (89 questions, 6 topics). Built with Next.js 16, Prisma 7, SQLite, and Tailwind CSS v4. Supports multilingual content (English, Spanish, Chinese) via translation tables.

**Scope:** Driver's license exams only (no AI tutoring — wrong answers show handbook section references instead). Professional certification exams (AWS, FINRA, etc.) may be added later with AI tutoring.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run db:seed      # Clear DB and re-seed with all data
npm run db:import    # Incrementally import one seed file (skips if already exists)
npx prisma db push   # Apply schema changes to dev.db (no migration files)
npx prisma generate  # Regenerate Prisma client after schema changes
npx prisma studio    # Open Prisma Studio GUI
```

## Environment Variables

Required in `.env`:
```
DATABASE_URL="file:./dev.db"
ANTHROPIC_API_KEY=sk-ant-...   # Only needed for future AI tutor exams (not DMV)
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

Server Components query the DB directly via `lib/prisma.ts`. No REST layer needed for read operations.

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

After any change to `prisma/schema.prisma`, run **all three**:
```bash
npx prisma db push    # sync DB schema
npx prisma generate   # sync client types
# Then restart the dev server (Ctrl+C → npm run dev)
```

⚠️ **Critical:** The dev server caches the Prisma client in memory. If you skip the restart, the running process uses the old client and throws `PrismaClientValidationError: Unknown field` even though TypeScript types look correct. Always restart after schema or seed changes.

If the server seems stuck with stale errors, also clear the Next.js cache:
```bash
Remove-Item -Recurse -Force .next   # PowerShell
# or: rm -rf .next                  # bash
npm run dev
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
| `POST /api/ai/chat` | `app/api/ai/chat/route.ts` | Route Handler — proxies to Anthropic API (future use) |

### Quiz Page Split

`app/quiz/[topicId]/page.tsx` is a Server Component that:
1. Fetches topic + questions + options from DB
2. Passes `hasAiTutor` (from `category.hasAiTutor`) and `handbookUrl` (from `topic.handbookUrl`)
3. Renders `QuizClient.tsx` (`"use client"`)

`QuizClient.tsx` behavior based on `hasAiTutor`:
- **`false` (DMV)**: Right panel shows handbook reference. After a wrong answer, shows `question.handbookSection` (e.g. `"Traffic Controls — Speed Limits"`) with link to `handbookUrl`.
- **`true` (future professional exams)**: Right panel shows AI chat connected to `/api/ai/chat`.

### Multilingual Architecture

All text stored in English base fields; translations in separate tables:
- `CategoryTranslation` (language, name, description)
- `TopicTranslation` (language, name, description)
- `QuestionTranslation` (language, content, explanation)
- `OptionTranslation` (language, content)

Supported languages: `"en"` (base), `"zh"` (Chinese), `"es"` (Spanish)

CA DMV officially offers tests in all three languages. Category and topic translations are seeded. Question/option translations not yet seeded (quiz content stays in English until added).

**Language selection** is stored in a `lang` cookie (1-year expiry, set by `LanguageSwitcher`). Server components read it via `getLang()` from `lib/lang.ts`. UI strings live in the `ui{}` dict in `lib/lang.ts`. Translated DB values are resolved with the `tr()` helper: `tr(base, translations, lang, field)`.

### Question Schema (key fields)

- `question.handbookSection` — e.g. `"Traffic Controls — Speed Limits"` — shown when user answers incorrectly
- `topic.handbookUrl` — URL to the specific CA DMV handbook section for this topic
- `category.hasAiTutor` — `false` for all DMV exams; `true` would activate AI chat panel

### Database Seeding

Two approaches:
1. **Full reset**: `npm run db:seed` — clears all data, re-imports California DMV
2. **Incremental**: `npm run db:import` — imports from `prisma/seeds/import.ts`, skips if category already exists (checks by `nameEn`)

Seed files live in `prisma/seeds/[state-name].ts`. Each exports a typed object with the full category+topics+questions structure. Add a new state by:
1. Creating `prisma/seeds/[state]-dmv.ts`
2. Importing and calling it in `prisma/seeds/import.ts`
3. Running `npm run db:import`

After re-seeding, DB auto-increments restart — so topic/category IDs change. **Restart the dev server** after seeding, otherwise pages may show stale 404s for old IDs.

### Styling

Tailwind CSS v4 — uses `@import "tailwindcss"` in `globals.css` (not `@tailwind base/components/utilities`). No `tailwind.config.js` file needed.

## Current Content

| State | Questions | Topics | Status |
|---|---|---|---|
| California | 89 | 6 | ✅ Live |

Next planned: Texas DMV

## GitHub

Repository: https://github.com/ningwangsee/examprep
