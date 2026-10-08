/**
 * The built-page SEO gate, D66. Reads the built HTML, after the build, for
 * every page on the site.
 *
 *   P1  every built page is in the search map or in NOT_TARGETED
 *   P2  <title> is 60 characters or fewer, and no two pages share one
 *   P3  meta description is 70 to 160 characters, and no two pages share one
 *   P4  exactly one H1
 *   P5  the row's topic appears in the <title> and in the H1
 *   P6  sibling pages link to each other from the page body
 *   P7  repeated text. Each content page's body is split into overlapping
 *       8-word runs. Runs found on a quarter or more of all pages, or on 6
 *       or more, are the template (header labels, the call band, a section's
 *       shared blocks) and are set aside. Then:
 *         - at least 60% of a content page's runs appear on no other page
 *         - no two pages share more than 30% of the smaller page's runs
 *       Shared layout does not hurt a page in search; pages that read the same
 *       with the subject swapped do, and so do two pages answering the same
 *       thing. This is the number that tells them apart.
 *
 * THE BASELINE. 23 pages broke P2 or P3 and one pair broke P7 on the day this
 * gate was built, so it records what it found in docs/build/seo-baseline.json,
 * the same ratchet as readability-baseline.json: a recorded problem may stay
 * until it is fixed, a NEW problem fails the build, and a fixed one is removed
 * from the file on the next clean run so it cannot come back.
 *
 * Run AFTER a build. A missing build FAILS rather than skips (D30).
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { NOT_TARGETED, searchMap, type SearchTarget } from "../src/lib/search-map.ts";
import { isLiveHref } from "../src/lib/site.ts";

const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";
const APP = `${DIST_DIR}/server/app`;
const BASELINE_PATH = "docs/build/seo-baseline.json";

const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;
const RUN = 8;
const TEMPLATE_SHARE = 0.25;
const TEMPLATE_PAGES = 6;
const UNIQUE_MIN = 0.6;
const PAIR_MAX = 0.3;
const MIN_WORDS = 500;
const CONTENT_KINDS = new Set(["charge", "injury", "guide", "tool", "blog", "insight"]);

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const decode = (s: string) =>
  s.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
   .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const text = (html: string) =>
  decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
const wordsOf = (s: string) => s.toLowerCase().match(/[a-z0-9']+/g) ?? [];
const runsOf = (words: string[]) => {
  const out = new Set<string>();
  for (let i = 0; i + RUN <= words.length; i++) out.add(words.slice(i, i + RUN).join(" "));
  return out;
};

type Page = { href: string; title: string; desc: string; h1s: string[]; main: string; links: Set<string> };

function parse(href: string, html: string): Page {
  const main = /<main[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1] ?? "";
  return {
    href,
    title: decode(/<title>([\s\S]*?)<\/title>/.exec(html)?.[1] ?? ""),
    desc: decode(/<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? ""),
    h1s: [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => text(m[0])),
    main: text(main),
    links: new Set([...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/$/, "") || "/")),
  };
}

/** P2 to P7 as one function, so the self-tests run the same code as the site. */
function audit(pages: Page[], rows: Map<string, SearchTarget>): Map<string, string[]> {
  const issues = new Map<string, string[]>();
  const add = (href: string, code: string) => {
    const list = issues.get(href) ?? [];
    if (!list.includes(code)) list.push(code);
    issues.set(href, list);
  };
  const titles = new Map<string, string>();
  const descs = new Map<string, string>();
  for (const p of pages) {
    if (p.title.length > TITLE_MAX) add(p.href, `P2 title over ${TITLE_MAX}`);
    const t = titles.get(p.title);
    if (t) { add(p.href, `P2 title shared with ${t}`); } else titles.set(p.title, p.href);
    if (p.desc.length < DESC_MIN || p.desc.length > DESC_MAX) add(p.href, `P3 description not ${DESC_MIN} to ${DESC_MAX}`);
    const d = descs.get(p.desc);
    if (d && p.desc) { add(p.href, `P3 description shared with ${d}`); } else descs.set(p.desc, p.href);
    if (p.h1s.length !== 1) add(p.href, `P4 ${p.h1s.length} H1s`);
    const r = rows.get(p.href);
    if (r) {
      const topic = r.topic.toLowerCase();
      if (!p.title.toLowerCase().includes(topic)) add(p.href, `P5 topic not in title`);
      if (!p.h1s.some((h) => h.toLowerCase().includes(topic))) add(p.href, `P5 topic not in H1`);
      for (const s of r.siblings ?? []) if (!p.links.has(s)) add(p.href, `P6 no link to sibling ${s}`);
    }
  }
  // P7
  const runs = new Map(pages.map((p) => [p.href, runsOf(wordsOf(p.main))]));
  const count = new Map<string, number>();
  for (const set of runs.values()) for (const r of set) count.set(r, (count.get(r) ?? 0) + 1);
  // A section of the site has its own template: the nine injury pages share an
// attorney block, a call band and a FAQ intro that appear nowhere else, so a
// quarter of the whole site never reached them and they read as copying
// (D72). Text on TEMPLATE_PAGES pages counts as template too.
const templateAt = Math.max(3, Math.min(TEMPLATE_PAGES, Math.ceil(pages.length * TEMPLATE_SHARE)));
  const own = new Map<string, Set<string>>();
  for (const [href, set] of runs) own.set(href, new Set([...set].filter((r) => count.get(r)! < templateAt)));
  const content = pages.filter((p) => {
    const r = rows.get(p.href);
    return r && CONTENT_KINDS.has(r.kind) && wordsOf(p.main).length >= MIN_WORDS;
  });
  for (const p of content) {
    const set = own.get(p.href)!;
    if (!set.size) continue;
    const unique = [...set].filter((r) => count.get(r) === 1).length / runs.get(p.href)!.size;
    if (unique < UNIQUE_MIN) add(p.href, `P7 under ${UNIQUE_MIN * 100}% unique text`);
  }
  for (let i = 0; i < content.length; i++)
    for (let j = i + 1; j < content.length; j++) {
      const a = own.get(content[i].href)!, b = own.get(content[j].href)!;
      if (!a.size || !b.size) continue;
      const [small, big] = a.size <= b.size ? [a, b] : [b, a];
      let shared = 0;
      for (const r of small) if (big.has(r)) shared++;
      if (shared / small.size > PAIR_MAX) {
        add(content[i].href, `P7 shares over ${PAIR_MAX * 100}% of its text with ${content[j].href}`);
        add(content[j].href, `P7 shares over ${PAIR_MAX * 100}% of its text with ${content[i].href}`);
      }
    }
  return issues;
}

// ---------------------------------------------------------------- self-tests
console.log("SEO gate self-tests (planted violations must fire)");
{
  const prose = (seed: string, n: number) =>
    Array.from({ length: n }, (_, i) => `${seed}${i} word${(i * 7) % 13}`).join(" ");
  const page = (o: Partial<Page>): Page => ({
    href: "/a", title: "Sexual Battery Lawyer, Hillsborough County | Firm",
    desc: "x".repeat(120), h1s: ["Charged with sexual battery?"], main: prose("a", 600), links: new Set(), ...o,
  });
  const row = (o: Partial<SearchTarget>): SearchTarget => ({
    href: "/a", kind: "charge", intent: "hire", primary: "q", topic: "sexual battery", source: "t", ...o,
  });
  const has = (issues: Map<string, string[]>, href: string, code: string) =>
    (issues.get(href) ?? []).some((c) => c.startsWith(code));
  const t = (name: string, ok: boolean) => {
    if (ok) console.log(`  ok    ${name}`);
    else fail(`SELF-TEST: ${name}`);
  };
  const rows = (...r: SearchTarget[]) => new Map(r.map((x) => [x.href, x]));
  t("a clean page raises nothing", !audit([page({})], rows(row({}))).size);
  t("a 61-character title fires P2", has(audit([page({ title: "x".repeat(61) })], rows(row({ topic: "x" }))), "/a", "P2"));
  t("a missing description fires P3", has(audit([page({ desc: "" })], rows(row({}))), "/a", "P3"));
  t("two H1s fire P4", has(audit([page({ h1s: ["sexual battery", "b"] })], rows(row({}))), "/a", "P4"));
  t("a title without the topic fires P5", has(audit([page({ title: "Charges | Firm" })], rows(row({}))), "/a", "P5"));
  t("a sibling with no link fires P6",
    has(audit([page({})], rows(row({ siblings: ["/b"] }))), "/a", "P6"));
  const body = prose("shared", 800);
  t("two pages with the same body fire P7",
    has(audit([page({ main: body }), page({ href: "/b", main: body, title: "Sexual Battery 2" })],
      rows(row({}), row({ href: "/b" }))), "/a", "P7"));
  t("two pages with different bodies do not fire P7",
    !has(audit([page({}), page({ href: "/b", main: prose("b", 600), title: "Sexual Battery 2" })],
      rows(row({}), row({ href: "/b" }))), "/a", "P7"));
}

// ---------------------------------------------------------------- the site
console.log("\nThe built pages");
if (!existsSync(APP)) {
  fail(`${APP} not found. This gate reads built HTML; a missing build fails (D30). Run the build first.`);
  console.log("\nSEO check FAILED.");
  process.exit(1);
}
const files: string[] = [];
const walk = (dir: string) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) files.push(p);
  }
};
walk(APP);
const pages: Page[] = [];
for (const f of files) {
  let href = f.slice(APP.length, -".html".length);
  if (href.startsWith("/_")) continue; // _not-found, _global-error
  if (href === "/index") href = "/";
  if (!isLiveHref(href)) continue; // D73: hidden Resources pages are built as 404s
  pages.push(parse(href, readFileSync(f, "utf8")));
}
const rows = new Map(searchMap.filter((r) => isLiveHref(r.href)).map((r) => [r.href, r]));

// P1
{
  const built = new Set(pages.map((p) => p.href));
  let bad = 0;
  for (const p of pages)
    if (!rows.has(p.href) && !NOT_TARGETED[p.href]) {
      fail(`P1 ${p.href} is built but is neither in the search map nor in NOT_TARGETED`); bad++;
    }
  for (const r of searchMap)
    if (isLiveHref(r.href) && !built.has(r.href)) { fail(`P1 ${r.href} has a search-map row but no built page`); bad++; }
  if (!bad) console.log(`  ok    all ${pages.length} built pages are mapped or listed as not targeted`);
}

// P2 to P7, against the baseline.
type Baseline = Record<string, string[]>;
let baseline: Baseline = {};
if (!existsSync(BASELINE_PATH)) {
  fail(`${BASELINE_PATH} is missing. It records known problems; its absence is a failure, not a clean slate. Restore it from git.`);
} else {
  try { baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8")); }
  catch { fail(`${BASELINE_PATH} is not valid JSON.`); }
}
const issues = audit(pages.filter((p) => !p.href.includes("preview")), rows);
let known = 0;
for (const [href, codes] of issues)
  for (const code of codes) {
    if ((baseline[href] ?? []).includes(code)) known++;
    else {
      const p = pages.find((x) => x.href === href)!;
      const detail = code.startsWith("P2 title over") ? ` (${p.title.length}: "${p.title}")`
        : code.startsWith("P3 description not") ? ` (${p.desc.length} characters)` : "";
      fail(`${href}: ${code}${detail}`);
    }
  }
if (!failed) console.log(`  ok    no new title, description, H1, topic, sibling-link or repeated-text problems`);
if (known)
  console.log(
    `  ..    ${known} known problem(s) on ${Object.keys(baseline).length} page(s) remain in ${BASELINE_PATH}; ` +
      `each one leaves the file when it is fixed`,
  );

// The ratchet, written only on a clean run.
if (!failed) {
  const next: Baseline = {};
  for (const href of Object.keys(baseline).sort()) {
    const still = (baseline[href] ?? []).filter((c) => (issues.get(href) ?? []).includes(c));
    if (still.length) next[href] = still;
  }
  if (JSON.stringify(next) !== JSON.stringify(baseline)) {
    writeFileSync(BASELINE_PATH, JSON.stringify(next, null, 2) + "\n");
    console.log(`\n  ..    fixed problems removed from ${BASELINE_PATH}`);
  }
}

console.log(
  "\n  ..    KNOWN LIMITS. P5 checks for the topic words, not whether the page " +
    "serves the search. P7 measures repeated wording, so two pages that say the " +
    "same thing in different words pass; read sibling pages side by side. Pixel " +
    "widths are not measured, so a 60-character title of wide letters can still " +
    "be cut off in results.",
);
console.log(failed ? "\nSEO check FAILED." : "\nSEO check passed.");
process.exit(failed ? 1 : 0);
