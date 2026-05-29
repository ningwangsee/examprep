/**
 * validate-links.ts
 *
 * Checks every external URL in lib/exam-info.ts returns a non-4xx/5xx status.
 * Run after editing exam-info.ts:  npx tsx prisma/scripts/validate-links.ts
 */
import { examGuides } from "../../lib/exam-info";
import https from "https";
import http from "http";

type Result = { url: string; status: number | string; ok: boolean; source: string };

function checkUrl(url: string, depth = 0): Promise<{ status: number | string; ok: boolean }> {
  if (depth > 5) return Promise.resolve({ status: "TOO_MANY_REDIRECTS", ok: false });
  return new Promise((resolve) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
        timeout: 12000,
      },
      (res) => {
        // Follow redirects manually (resolve relative URLs against the original)
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          req.destroy();
          const loc = res.headers.location;
          // Build absolute URL for relative redirects
          const nextUrl = loc.startsWith("http") ? loc : new URL(loc, url).href;
          checkUrl(nextUrl, depth + 1).then(resolve);
          return;
        }
        res.destroy();
        const ok = !!res.statusCode && res.statusCode < 400;
        resolve({ status: res.statusCode ?? "?", ok });
      }
    );
    req.on("error", () => resolve({ status: "ERR", ok: false }));
    req.on("timeout", () => { req.destroy(); resolve({ status: "TIMEOUT", ok: false }); });
  });
}

async function main() {
  // Collect all URLs with their sources
  const tasks: { url: string; source: string }[] = [];

  for (const [stateName, guide] of Object.entries(examGuides)) {
    const state = stateName.replace(" Driver's License", "");

    for (const ch of guide.handbookChapters) {
      tasks.push({ url: ch.url, source: `${state} / handbookChapters / ${ch.title.en}` });
    }
    for (const link of guide.officialLinks) {
      tasks.push({ url: link.url, source: `${state} / officialLinks / ${link.label.en}` });
    }
    for (const step of guide.howToSchedule) {
      if (step.url) tasks.push({ url: step.url, source: `${state} / howToSchedule` });
    }
  }

  // Deduplicate URLs but keep all sources for reporting
  const urlMap = new Map<string, string[]>();
  for (const t of tasks) {
    if (!urlMap.has(t.url)) urlMap.set(t.url, []);
    urlMap.get(t.url)!.push(t.source);
  }

  // Check duplicates within same state's officialLinks (likely a copy-paste bug)
  console.log("🔍 Checking for duplicate officialLink URLs within the same state...");
  let dupWarnings = 0;
  for (const [stateName, guide] of Object.entries(examGuides)) {
    const state = stateName.replace(" Driver's License", "");
    const seen = new Map<string, string>();
    for (const link of guide.officialLinks) {
      if (seen.has(link.url)) {
        console.warn(`  ⚠️  DUPLICATE  ${state}: "${seen.get(link.url)}" and "${link.label.en}" both point to ${link.url}`);
        dupWarnings++;
      }
      seen.set(link.url, link.label.en);
    }
  }
  if (dupWarnings === 0) console.log("  ✅ No duplicates found.\n");

  // HTTP checks
  console.log(`🌐 Checking ${urlMap.size} unique URLs (may take ~${Math.ceil(urlMap.size * 1.5)}s)...\n`);

  const results: Result[] = [];
  // Run in parallel batches of 8
  const entries = [...urlMap.entries()];
  const batchSize = 8;
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const checks = await Promise.all(
      batch.map(async ([url, sources]) => {
        const { status, ok } = await checkUrl(url);
        return { url, status, ok, source: sources[0] };
      })
    );
    results.push(...checks);
    process.stdout.write(`  checked ${Math.min(i + batchSize, entries.length)}/${entries.length}\r`);
  }
  console.log("\n");

  // Report
  const failed = results.filter((r) => !r.ok);
  const passed = results.filter((r) => r.ok);

  if (failed.length === 0) {
    console.log(`✅ All ${passed.length} URLs returned OK.\n`);
  } else {
    console.log(`✅ ${passed.length} URLs OK`);
    console.log(`❌ ${failed.length} URLs FAILED:\n`);
    for (const r of failed) {
      console.log(`  [${r.status}] ${r.url}`);
      console.log(`       source: ${r.source}`);
    }
  }

  // Duplicates are warnings only — some states intentionally share a URL
  // (e.g. "Find Office" + "Check Wait Times" on the same office-locator page).
  // Only exit 1 for actual HTTP failures.
  process.exit(failed.length > 0 ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
