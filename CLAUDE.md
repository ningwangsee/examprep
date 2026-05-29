# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**DMV Practice** — a free driver's license written test preparation platform. Currently covers California DMV (111 questions, 6 topics). Built with Next.js 16, Prisma 7, SQLite, and Tailwind CSS v4. Supports multilingual content (English, Spanish, Chinese) via translation tables.

**Scope:** Driver's license exams only (no AI tutoring — wrong answers show handbook section references instead). Professional certification exams (AWS, FINRA, etc.) may be added later with AI tutoring.

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npm run db:seed      # Clear DB and re-seed with all data
npm run db:import    # Incrementally import one seed file (skips if already exists)
npm run db:populate  # Backfill zh/es translations for existing questions (non-destructive)
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

CA DMV officially offers tests in all three languages. All 111 CA DMV questions (content, explanation, all options) have zh + es translations stored in the DB.

**Language selection** is stored in a `lang` cookie (1-year expiry, set by `LanguageSwitcher`). Server components read it via `getLang()` from `lib/lang.ts`. UI strings live in the `ui{}` dict in `lib/lang.ts`. Translated DB values are resolved with the `tr()` helper: `tr(base, translations, lang, field)`.

**Translation backfill**: If questions are added without translations, run `npm run db:populate` to backfill zh/es using the data already in the seed file. The script is non-destructive (skips questions that already have translations).

### Question Schema (key fields)

- `question.handbookSection` — e.g. `"Traffic Controls — Speed Limits"` — shown when user answers incorrectly
- `topic.handbookUrl` — URL to the specific CA DMV handbook section for this topic
- `category.hasAiTutor` — `false` for all DMV exams; `true` would activate AI chat panel

### Database Seeding

Three approaches:

| Command | When to use |
|---|---|
| `npm run db:seed` | Full reset — wipes all data, re-seeds from scratch |
| `npm run db:import` | Add a new state without touching existing data |
| `npx tsx prisma/scripts/add-*.ts` | Add questions to an existing topic (incremental) |

Seed files live in `prisma/seeds/[state-name].ts`. Each exports a typed object with the full category+topics+questions structure. Add a new state by:
1. Creating `prisma/seeds/[state]-dmv.ts`
2. Importing and calling it in `prisma/seeds/import.ts`
3. Running `npm run db:import`

After re-seeding, DB auto-increments restart — so topic/category IDs change. **Restart the dev server** after seeding, otherwise pages may show stale 404s for old IDs.

### Adding Questions to Existing Topics (Incremental Scripts)

Scripts in `prisma/scripts/add-*.ts` insert questions without touching other data. Pattern:

```ts
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../app/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Always look up topic by nameEn — never hardcode IDs (they change on re-seed)
  const topic = await prisma.examTopic.findFirst({ where: { nameEn: "Safe Driving & Parking" } });
  if (!topic) throw new Error("Topic not found");

  for (const q of newQuestions) {
    // Duplicate check before insert — skipDuplicates is NOT supported in Prisma 7 + SQLite
    const exists = await prisma.question.findFirst({ where: { content: q.content, topicId: topic.id } });
    if (exists) { continue; }

    await prisma.question.create({
      data: {
        content: q.content,
        explanation: q.explanation,
        handbookSection: q.handbookSection,
        difficulty: q.difficulty,
        topicId: topic.id,
        translations: { create: q.translations },        // zh + es QuestionTranslations
        options: {
          create: q.options.map((o) => ({
            content: o.content,
            isCorrect: o.isCorrect,
            translations: { create: [                    // zh + es OptionTranslations
              { language: "zh", content: o.zh },
              { language: "es", content: o.es },
            ]},
          })),
        },
      },
    });
  }
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
```

**After running a script, also add the questions to the seed file** (`prisma/seeds/california-dmv.ts`) so `npm run db:seed` stays in sync.

After a data-only change (no schema change), **no server restart is needed** — Server Components re-query the DB on every request.

### Styling

Tailwind CSS v4 — uses `@import "tailwindcss"` in `globals.css` (not `@tailwind base/components/utilities`). No `tailwind.config.js` file needed.

## Current Content

| State | Questions | Topics | Status |
|---|---|---|---|
| California | 111 | 6 | ✅ Live |
| Texas | 98 | 6 | ✅ Live |
| New York | 100 | 6 | ✅ Live |

**CA DMV topics breakdown:**
| Topic | nameEn | Questions |
|---|---|---|
| 1 | Traffic Signs & Signals | ~20 |
| 2 | Right-of-Way Rules | ~20 |
| 3 | Speed Limits | ~15 |
| 4 | Alcohol & Drugs | ~15 |
| 5 | License Requirements | ~10 |
| 6 | Safe Driving & Parking | ~31 |

**TX DMV topics breakdown (DL-7 Jan 2026):**
| Topic | nameEn | Questions | Status |
|---|---|---|---|
| 1 | Road Signs & Markers | 20 | ✅ |
| 2 | Traffic Laws & Right-of-Way | 18 | ✅ |
| 3 | Speed Limits & Special Situations | 15 | ✅ |
| 4 | Alcohol & Drugs | 15 | ✅ |
| 5 | Licensing & Responsibilities | 15 | ✅ |
| 6 | Safety: Pedestrians, Bicycles & Crashes | 15 | ✅ |

**NY DMV topics breakdown (NY State Driver's Manual):**
| Topic | nameEn | Questions | Status |
|---|---|---|---|
| 1 | Traffic Control & Road Signs | 20 | ✅ |
| 2 | Right-of-Way, Intersections & Turns | 18 | ✅ |
| 3 | Speed, Space & Defensive Driving | 17 | ✅ |
| 4 | Alcohol & Other Drugs | 15 | ✅ |
| 5 | Driver Licensing & Vehicle Laws | 15 | ✅ |
| 6 | Sharing the Road & Crash Procedures | 15 | ✅ |

**Target question count:** ~90–100 per state (≈3–5× the actual test length). TX complete at 98 questions. NY complete at 100 questions.

## Known Gotchas & Lessons Learned

### Prisma 7 + SQLite

- **`skipDuplicates` is NOT supported** in `createMany()` with the better-sqlite3 adapter. Use `findFirst` check before each `create` instead.
- **Never hardcode topic/category IDs** in scripts. IDs reset when `db:seed` is run. Always look up by `nameEn`.
- **`createMany` vs nested `create`**: For question+translations+options in one call, use nested `create` inside `prisma.question.create()`. `createMany` does not support nested relations.

### Chinese Text in TypeScript / TSX Files

- **ASCII double quotes inside Chinese strings break esbuild/tsx.** If Chinese text contains `"quoted"` phrases using ASCII `"`, the string terminates early with a syntax error.
- Fix: replace ASCII `"..."` with Chinese corner brackets `「...」` inside zh strings.
- Example: `"禁止红灯转弯"` (broken) → `「禁止红灯转弯」` (correct)

### PowerShell (Windows dev environment)

- **`&&` is NOT supported** in PowerShell 5.1. Use `;` to chain commands unconditionally, or `if ($?) { cmd2 }` for conditional chaining.
- **Heredoc syntax** for multi-line git commit messages: use `@'...'@` (single-quoted), not `$(cat <<'EOF'...EOF)` (bash syntax).
  ```powershell
  git commit -m @'
  Your commit message here
  Co-Authored-By: ...
  '@
  ```
- **Path separator**: Always use `C:\Users\...` style in PowerShell. Bash-style paths (`C:/Users/...`) may work but avoid mixing.

### DMV Handbook URLs

- The CA DMV website restructures URLs periodically. Verify `topic.handbookUrl` links are still valid before adding a new state.
- Topic 1 CA URL was fixed: `/traffic-controls/` → `/introduction-to-driving/` (outdated as of 2025).
- If a handbook link 404s, update both the seed file and the DB directly via a one-off script in `prisma/scripts/`.

### Question Bank Design

- **Optimal count**: ~3× the actual test length. CA test = 46 questions, target = ~150 questions.
- **Difficulty spread**: aim for ~40% easy (difficulty=1), ~40% medium (difficulty=2), ~20% hard (difficulty=3).
- **handbookSection format**: `"Topic Name — Subtopic"` e.g. `"Traffic Controls — School Buses"`. Shown to users after wrong answers.
- **Translation workflow (new states)**: Use `prisma/scripts/gen-ny-seed.ts` as a template. Script defines English questions → calls Claude API (`claude-opus-4-5`) to translate all topics in batches → writes complete trilingual seed file. Set `$env:ANTHROPIC_API_KEY` before running. See `gen-ny-seed.ts` for the pattern.
- **Translation workflow (CA/TX legacy)**: Generate English questions → translate externally (Anthropic Chat / ChatGPT) → paste back translations → run insertion script → update seed file.

### Incremental Script File Locations

All one-off insertion scripts live in `prisma/scripts/`. Existing scripts (for reference):

**CA scripts** (all in `prisma/scripts/`):

| Script | Knowledge point | CA Topic |
|---|---|---|
| `add-distracted-driving.ts` | Cell phone / distracted driving | 6 |
| `add-seat-belts.ts` | Seat belts & child passenger safety | 6 |
| `add-school-bus.ts` | School bus rules | 1 |
| `add-roundabouts.ts` | Roundabout rules | 2 |
| `add-headlights.ts` | Headlight requirements | 6 |
| `add-accidents.ts` | Accident reporting | 6 |
| `fix-content-accuracy.ts` | Fix "Since 2008" + school bus VC §22454 citation | — |
| `populate-translations.ts` | Backfill zh/es for all questions | all |
| `fix-handbook-url.ts` | Fix Topic 1 handbookUrl | — |

**NY scripts** (all in `prisma/scripts/`):

| Script | Purpose |
|---|---|
| `gen-ny-seed.ts` | Generates `new-york-dmv.ts` seed via Claude API auto-translation (100 questions, 6 topics) |

**TX scripts** (all in `prisma/scripts/`):

| Script | Knowledge point | TX Topic |
|---|---|---|
| `add-tx-topic2.ts` | Traffic Laws & Right-of-Way (18 questions) | 2 |
| `add-tx-topic3.ts` | Speed Limits & Special Situations (15 questions) | 3 |
| `add-tx-topic4.ts` | Alcohol & Drugs (15 questions) | 4 |
| `add-tx-topic5.ts` | Licensing & Responsibilities (15 questions) | 5 |
| `add-tx-topic6.ts` | Safety: Pedestrians, Bicycles & Crashes (15 questions) | 6 |

## GitHub

Repository: https://github.com/ningwangsee/examprep
