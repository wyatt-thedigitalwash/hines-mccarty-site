/**
 * Accessibility scan and screenshots of every page, in a real browser, D66.
 *
 * Starts the built site, then for every page in the search map (or the hrefs
 * passed as arguments), at desktop (1440px) and phone (390px) width:
 *   - runs axe-core against WCAG 2.0, 2.1 and 2.2 A and AA plus best practice,
 *     with every <details> and collapsed panel opened so hidden content is
 *     scanned too, and fails on any violation
 *   - saves a full-page screenshot to .audit/<page>-desktop.png and
 *     -mobile.png, scrolling first so lazy images load
 *
 * The screenshots are for a person to look at. Every page gets looked at
 * before it is called done; no formula here can say whether a page looks
 * right, which is why they are saved rather than scored.
 *
 * Not part of `npm run build`, because it needs a browser. Run it after
 * `npm run verify`:
 *   npm run audit:pages                       every mapped page
 *   npm run audit:pages -- /criminal-defense/dui-defense
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next-verify";
const PORT = Number(process.env.AUDIT_PORT || 3199);
const BASE = `http://localhost:${PORT}`;
const OUT = ".audit";
const WIDTHS = [["desktop", 1440, 900], ["mobile", 390, 844]];

const { searchMap } = await import("../src/lib/search-map.ts");
const hrefs = process.argv.slice(2).length ? process.argv.slice(2) : searchMap.map((r) => r.href);

const server = spawn("npx", ["next", "start", "-p", String(PORT)], {
  env: { ...process.env, NEXT_DIST_DIR: DIST_DIR },
  stdio: "ignore",
});
const stop = () => { try { server.kill(); } catch {} };
process.on("exit", stop);

for (let i = 0; ; i++) {
  try { if ((await fetch(BASE)).ok) break; } catch {}
  if (i > 60) { console.error(`  FAIL  the built site did not start on ${BASE}. Run \`npm run verify\` first.`); process.exit(1); }
  await new Promise((r) => setTimeout(r, 500));
}

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
let failed = false;
const report = {};

for (const href of hrefs) {
  const name = href === "/" ? "home" : href.slice(1).replaceAll("/", "__");
  report[href] = {};
  for (const [label, width, height] of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height } });
    const res = await page.goto(BASE + href, { waitUntil: "networkidle" });
    if (!res || !res.ok()) {
      console.error(`  FAIL  ${href} returned ${res?.status()}`); failed = true; await page.close(); continue;
    }
    // Scroll to the bottom and back so lazy images load before the screenshot.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/${name}-${label}.png`, fullPage: true });

    await page.addScriptTag({ content: axeSource });
    await page.evaluate(() => {
      document.querySelectorAll("details").forEach((d) => (d.open = true));
      document.querySelectorAll("[role=region][hidden]").forEach((e) => (e.hidden = false));
    });
    const violations = await page.evaluate(async () =>
      (await window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] },
      })).violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, targets: v.nodes.slice(0, 3).map((n) => n.target.join(" ")) })),
    );
    report[href][label] = violations;
    if (violations.length) {
      failed = true;
      for (const v of violations)
        console.error(`  FAIL  ${href} (${label}): ${v.id}, ${v.help} [${v.impact}] at ${v.targets.join(", ")}`);
    }
    await page.close();
  }
  if (!Object.values(report[href]).some((v) => v.length)) console.log(`  ok    ${href}: no violations at desktop or phone width`);
}

await browser.close();
stop();
writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 1));
console.log(`\nScreenshots and report.json in ${OUT}/. Look at every screenshot before calling a page done.`);
console.log(failed ? "\nPage audit FAILED." : "\nPage audit passed.");
process.exit(failed ? 1 : 0);
