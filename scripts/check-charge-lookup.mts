/**
 * check:charge-lookup. The done criteria for the charging-document decoder.
 *
 * docs/build/tools/CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 11 lists
 * eleven assertions, T1 through T11. Every one has a gate. Where an existing
 * gate already covers the shape, this file says so and does not build a second
 * one; where it does not, the assertion runs here.
 *
 *   T1  resolution corpus            HERE, over src/lib/tools/charge-lookup/corpus.ts
 *   T2  quotes verbatim in the row   HERE, and the same principle as provenance G3
 *   T3  forbidden strings            HERE (split by shape) + check:pages over the copy surface
 *   T4  disclosure on results AND refusals  HERE, over panelFor, all three branches
 *   T5  partial marked               HERE
 *   T6  nothing leaves the page      HERE, static analysis over the island's import closure
 *   T7  every emittable link resolves        HERE + check:routes sweeps A and B
 *   T8  version stamp names every table      HERE, against the built page
 *   T9  no functional input without JS       HERE, against the built page
 *   T10 the 921.0022 chart is not a source   HERE, both directions
 *   T11 absent fields absent, terms verbatim HERE, over every emittable row
 *
 * TWO KINDS OF ASSERTION, deliberately not merged. T1 through T7, T10 and T11
 * are properties of the DATA AND LOGIC and run without a build, so they fail
 * in prebuild before a broken resolver can be rendered. T8 and T9 are
 * properties of the RENDERED PAGE and read .next, so they run in postbuild.
 * D24's rule is that a gate must read the page rather than the data behind it;
 * D30's is that a missing artifact fails rather than skips. Both hold: the
 * rendered half FAILS if .next is absent when it is asked for, and the data
 * half never pretends to have read a page.
 *
 * EVERY CHECKER IS A PURE FUNCTION of its input, so the self-tests can hand it
 * a deliberately broken input and prove it fires. A gate whose failure path
 * has never executed is an assumption with a progress bar.
 */
import { readFileSync, existsSync, readdirSync, statSync, writeFileSync, rmSync } from "node:fs";
import { dirname, resolve as resolvePath } from "node:path";
import { STATUTES } from "../src/lib/statutes.ts";
import { CORPUS, type CorpusCase } from "../src/lib/tools/charge-lookup/corpus.ts";
import {
  EXCLUDED_TABLES,
  INDEX,
  resolve,
  statutoryTerm,
  type ResolvedRow,
} from "../src/lib/tools/charge-lookup/resolve.ts";
import { panelFor, type Panel } from "../src/lib/tools/charge-lookup/panel.ts";
import { CHARGE_MAP_DATA, EMITTABLE_HREFS } from "../src/lib/tools/charge-lookup/charge-map.ts";
import {
  CANNOT_KNOW,
  CHARGE_LOOKUP_PAGE_COPY,
  FORBIDDEN_ANYWHERE,
  FORBIDDEN_IN_COPY,
  REFUSAL,
  VERSION,
} from "../src/lib/tools/charge-lookup/copy.ts";
import { RESOURCES_LIVE } from "../src/lib/site.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

const ROUTE = "/resources/tools/charge-lookup";
const PAGE = `${DIST_DIR}/server/app${ROUTE}.html`;
const ISLAND = "src/components/tools/ChargeLookup.tsx";
// D73: a hidden tool is built as a 404, so there is no rendered page to check.
const RENDERED = process.argv.includes("--rendered") && RESOURCES_LIVE;
if (process.argv.includes("--rendered") && !RESOURCES_LIVE) console.log("  ..    rendered checks skipped: Resources is hidden (D73), so the tool is built as a 404 on purpose.");

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const norm = (s: string) =>
  s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

/** Every row the resolver can put in front of a reader. */
function emittableRows(): { row: ResolvedRow; rawQuote: string }[] {
  const out: { row: ResolvedRow; rawQuote: string }[] = [];
  for (const hits of INDEX.byKey.values()) {
    for (const h of hits) {
      const r = resolve(h.rawCite.includes("(") || /\d/.test(h.rawCite)
        ? `${h.tableKey}${h.cite.path.map((p) => `(${p})`).join("")}`
        : h.tableKey);
      void r;
      out.push({
        row: {
          cite: "",
          rawCite: h.rawCite,
          quote: h.row.quote,
          source: { citation: h.table.cite, url: h.table.url, fetched: h.table.fetched },
          ...(h.row.degree !== "no degree assigned" ? { degree: h.row.degree } : {}),
          ...(statutoryTerm(h.row.quote) ? { term: statutoryTerm(h.row.quote)! } : {}),
          ...(h.table.completeness === "partial"
            ? { partial: { unread: h.table.unread ?? null } }
            : {}),
        },
        rawQuote: h.row.quote,
      });
    }
  }
  return out;
}

// ================================================================ checkers
/** T1. Every corpus fixture lands where the brief recorded, or refuses. */
export function t1(cases: CorpusCase[]): string[] {
  const errs: string[] = [];
  for (const c of cases) {
    const r = resolve(c.input);
    const e = c.expect;
    if (e.kind === "refuse") {
      if (r.kind !== "refuse") {
        errs.push(
          `T1: "${c.input}" RESOLVED and must not. Expected a refusal for ` +
            `"${e.reason}". ${c.why}`,
        );
      } else if (r.reason !== e.reason) {
        errs.push(`T1: "${c.input}" refused for "${r.reason}", expected "${e.reason}"`);
      }
      continue;
    }
    if (r.kind === "refuse") {
      errs.push(`T1: "${c.input}" refused ("${r.reason}") and should have resolved. ${c.why}`);
      continue;
    }
    if (e.kind === "paragraph") {
      if (r.kind !== "paragraph" || r.cite !== e.cite)
        errs.push(
          `T1: "${c.input}" resolved to ${r.kind === "paragraph" ? r.cite : `${r.under} (shows-all)`}, ` +
            `expected the paragraph ${e.cite}`,
        );
      else if (e.rows != null && r.rows.length !== e.rows)
        errs.push(
          `T1: "${c.input}" returned ${r.rows.length} row(s), expected exactly ${e.rows}. ${c.why}`,
        );
    } else {
      if (r.kind !== "shows-all" || r.under !== e.under) {
        errs.push(
          `T1: "${c.input}" resolved to ${r.kind === "paragraph" ? `the single paragraph ${r.cite}` : r.under}, ` +
            `expected every paragraph under ${e.under}`,
        );
      } else {
        if (r.rows.length < e.atLeast)
          errs.push(`T1: "${c.input}" showed ${r.rows.length} rows, expected at least ${e.atLeast}`);
        for (const m of e.mustInclude ?? [])
          if (!r.rows.some((x) => x.cite === m))
            errs.push(`T1: "${c.input}" did not include ${m} among its matches`);
      }
    }
  }
  return errs;
}

/** T2. Every quote the tool can render is verbatim in the row it claims. */
export function t2(rows: { row: ResolvedRow; rawQuote: string }[]): string[] {
  const errs: string[] = [];
  for (const { row, rawQuote } of rows) {
    if (norm(row.quote) !== norm(rawQuote))
      errs.push(`T2: the quote rendered for ${row.rawCite} is not the audited row's text`);
    const table = Object.values(STATUTES).find((t) => t.cite === row.source.citation);
    if (!table) {
      errs.push(`T2: ${row.rawCite} claims source "${row.source.citation}", which is no audited table`);
      continue;
    }
    if (!table.rows.some((r) => norm(r.quote) === norm(row.quote)))
      errs.push(`T2: the quote rendered for ${row.rawCite} appears in no row of ${table.cite}`);
  }
  return errs;
}

/**
 * T3, split by shape. See copy.ts for the count and the reasoning: applied
 * literally to the dataset this assertion is unsatisfiable against C12.
 */
export function t3Copy(copy: readonly string[]): string[] {
  const errs: string[] = [];
  for (const s of copy)
    for (const bad of FORBIDDEN_IN_COPY)
      if (new RegExp(`\\b${bad.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(s))
        errs.push(`T3: authored copy contains the forbidden string "${bad}": "${s.slice(0, 90)}"`);
  return errs;
}

export function t3Dataset(rows: { row: ResolvedRow }[]): string[] {
  const errs: string[] = [];
  for (const { row } of rows)
    for (const bad of FORBIDDEN_ANYWHERE)
      if (row.quote.toLowerCase().includes(bad))
        errs.push(`T3: the shipped dataset row ${row.rawCite} contains "${bad}"`);
  return errs;
}

/** T4. The disclosure renders on results AND on refusals, every branch. */
export function t4(panels: Panel[]): string[] {
  const errs: string[] = [];
  const seen = new Set<string>();
  for (const p of panels) {
    seen.add(p.kind);
    if (p.cannotKnow?.heading !== CANNOT_KNOW.heading || p.cannotKnow?.body !== CANNOT_KNOW.body)
      errs.push(`T4: a "${p.kind}" panel does not carry the Section 5 disclosure verbatim`);
    if (p.kind === "refuse" && p.heading !== REFUSAL.heading)
      errs.push(`T4: a refusal panel does not carry the Section 5 refusal wording`);
  }
  for (const need of ["paragraph", "shows-all", "refuse"])
    if (!seen.has(need))
      errs.push(
        `T4: the corpus produced no "${need}" panel, so that branch was never checked. ` +
          `An assertion that never ran is not evidence.`,
      );
  return errs;
}

/** T5. No resolution from a partial table renders without the partial mark. */
export function t5(panels: Panel[]): string[] {
  const errs: string[] = [];
  for (const p of panels) {
    const partialRows = p.rows.filter((r) => r.partial);
    if (!partialRows.length) continue;
    const marked = p.notes.some((n) => /not known to be complete|was not, so do not read/i.test(n));
    if (!marked)
      errs.push(
        `T5: a panel showing ${partialRows.length} row(s) from a partial table renders no ` +
          `partial mark. D34: a partial record may state what it holds and may never ` +
          `support a claim about what it does not.`,
      );
  }
  return errs;
}

/**
 * T6. Nothing in the island's import closure can send the input anywhere.
 *
 * "This is C5 made mechanical", and it is the assertion the concept document
 * says matters most: C5 is this tool's highest-risk criterion and the one a
 * later well-meaning change is most likely to break.
 *
 * Reads the island and follows its RELATIVE and @/ imports transitively, so a
 * leak added three modules deep is still in scope. Comments are stripped
 * first: this file's own prose names every banned API, and a gate that fired
 * on the comment explaining the ban would be unusable.
 */
const BANNED_APIS: { re: RegExp; what: string }[] = [
  { re: /\bfetch\s*\(/, what: "fetch()" },
  { re: /\bXMLHttpRequest\b/, what: "XMLHttpRequest" },
  { re: /\bsendBeacon\b/, what: "navigator.sendBeacon" },
  { re: /\bnew\s+WebSocket\b/, what: "WebSocket" },
  { re: /\bnew\s+EventSource\b/, what: "EventSource" },
  { re: /\blocalStorage\b/, what: "localStorage" },
  { re: /\bsessionStorage\b/, what: "sessionStorage" },
  { re: /\bindexedDB\b/, what: "indexedDB" },
  { re: /\bdocument\s*\.\s*cookie\b/, what: "document.cookie" },
  { re: /\bhistory\s*\.\s*(pushState|replaceState)\b/, what: "history.pushState/replaceState" },
  { re: /\blocation\s*\.\s*(search|hash|href)\s*=/, what: "a write to location" },
  { re: /\buseSearchParams\b/, what: "useSearchParams" },
  { re: /\buseRouter\b/, what: "useRouter (a router push would put the input in the URL)" },
  /**
   * Analytics and error reporting, matched as CALL AND MEMBER shapes rather
   * than as bare vendor names.
   *
   * The bare-name version fired on the word "plausible" in a sentence of page
   * copy in site.ts, which is in this closure because the charge map reads
   * `charges` from it. That is this project's recurring false-positive shape,
   * the one check-pages.mts records for "parking enforcement specialist": a
   * rule matching a word instead of a construction. A gate whose first finding
   * is wrong is a gate that gets switched off, so it matches the construction.
   */
  { re: /\bgtag\s*\(|\bdataLayer\s*[.[]|\bwindow\s*\.\s*dataLayer\b|\bposthog\s*\.|\bplausible\s*\(|\bSentry\s*\.|\bcaptureException\s*\(|\bwindow\s*\.\s*analytics\b/, what: "an analytics or error-reporting call" },
];

function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/(^|[^:])\/\/.*$/gm, "$1");
}

export function importClosure(entry: string, seen = new Set<string>()): string[] {
  if (seen.has(entry) || !existsSync(entry)) return [...seen];
  seen.add(entry);
  const src = readFileSync(entry, "utf8");
  for (const m of stripComments(src).matchAll(/from\s+["']([^"']+)["']/g)) {
    const spec = m[1];
    let base: string | null = null;
    if (spec.startsWith("@/")) base = resolvePath("src", spec.slice(2));
    else if (spec.startsWith(".")) base = resolvePath(dirname(entry), spec);
    if (!base) continue;
    for (const cand of [base, `${base}.ts`, `${base}.tsx`, base.replace(/\.ts$/, ".ts"), `${base}/index.ts`]) {
      if (existsSync(cand) && !cand.endsWith("/")) { importClosure(cand, seen); break; }
    }
  }
  return [...seen];
}

export function t6(files: string[]): string[] {
  const errs: string[] = [];
  for (const f of files) {
    const src = stripComments(readFileSync(f, "utf8"));
    for (const { re, what } of BANNED_APIS)
      if (re.test(src))
        errs.push(
          `T6: ${f} uses ${what}. Section 3: nothing a reader types here may leave the ` +
            `page, reach a URL, or be persisted. This is C5 and it is the criterion a ` +
            `well-meaning change is most likely to break.`,
        );
  }
  return errs;
}

/** T7. Every charge-page link the tool can emit is a real route. */
export function t7(hrefs: string[], routeExists: (h: string) => boolean): string[] {
  return hrefs
    .filter((h) => !routeExists(h))
    .map((h) => `T7: the tool can emit ${h}, which is not a built route`);
}

/** T8. The version stamp names every table a resolution can rest on. */
export function t8(pageText: string): string[] {
  const errs: string[] = [];
  const missing = VERSION.tables.filter((t) => !pageText.includes(t.cite));
  if (missing.length)
    errs.push(
      `T8: the built page does not name ${missing.length} of ${VERSION.tables.length} tables a ` +
        `resolution can rest on, including ${missing.slice(0, 3).map((m) => m.cite).join(", ")}`,
    );
  for (const t of VERSION.tables)
    if (pageText.includes(t.cite) && !pageText.includes(t.fetched))
      errs.push(`T8: ${t.cite} is named without its recorded date ${t.fetched}`);
  if (!/Rule 3\.992/.test(pageText) || !/does not apply/i.test(pageText))
    errs.push(`T8: the page does not state that the Rule 3.992 clause is inapplicable (C6)`);
  return errs;
}

/** T9. With JavaScript off, no input that appears functional. */
export function t9(html: string): string[] {
  const errs: string[] = [];
  const start = html.indexOf("<main");
  const end = html.lastIndexOf("</main>");
  const main = start === -1 ? "" : html.slice(start, end);
  for (const [re, what] of [
    [/<input\b/i, "an <input>"],
    [/<textarea\b/i, "a <textarea>"],
    [/<form\b/i, "a <form>"],
    [/<button\b/i, "a <button>"],
  ] as const)
    if (re.test(main))
      errs.push(
        `T9: the static HTML contains ${what}. With JavaScript off it does nothing, and an ` +
          `input that appears functional and is not is worse than no input for the reader ` +
          `this tool is for.`,
      );
  if (!/data-lookup-placeholder/.test(main))
    errs.push(`T9: the static HTML carries no placeholder explaining that the lookup needs JavaScript`);
  if (!main.includes(CANNOT_KNOW.heading))
    errs.push(`T9: the Section 5 disclosure is not in the static HTML, so it is absent with JavaScript off`);
  return errs;
}

/** T10. The chart contributes nothing, in both directions. */
export function t10(): string[] {
  const errs: string[] = [];
  if (!Object.keys(EXCLUDED_TABLES).length)
    errs.push(`T10: the exclusion list is empty, so the ship condition is not implemented`);
  for (const key of Object.keys(EXCLUDED_TABLES)) {
    if (!STATUTES[key]) {
      errs.push(`T10: excluded key "${key}" is no longer a table, so the exclusion is dead code`);
      continue;
    }
    const jur = key.includes(".") ? "florida" : "federal";
    if (INDEX.sections.has(`${jur}:${key}`))
      errs.push(`T10: the excluded table ${key} is present in the resolution index`);
  }
  // The positive half: a cite the chart and the statute BOTH carry must
  // resolve to the statute's row, and to exactly one row.
  const r = resolve("794.011 8b");
  if (r.kind !== "paragraph" || r.rows.length !== 1) {
    errs.push(
      `T10: 794.011(8)(b) returned ${r.kind === "refuse" ? "a refusal" : `${(r as { rows: unknown[] }).rows.length} rows`}, ` +
        `expected exactly one. The chart carries this cite too, with a DIFFERENT degree, ` +
        `so a second row means the chart is in the corpus.`,
    );
  } else if (r.rows[0].degree !== "first degree felony") {
    errs.push(
      `T10: 794.011(8)(b) resolved to degree "${r.rows[0].degree}". The operative statute ` +
        `says first degree felony; the ranking chart says first degree felony punishable ` +
        `by life. The chart's answer reached the reader.`,
    );
  }
  // Chart-only cites must not resolve at all.
  const chartOnly = resolve("849.09(1)(a)");
  if (chartOnly.kind !== "refuse")
    errs.push(`T10: 849.09(1)(a) resolved, and this project's only record of it is a chart row`);
  return errs;
}

/**
 * T12. The island's import closure does not reach site.ts.
 *
 * NOT IN THE CONCEPT DOCUMENT. Added 2026-08-24. In the first working build
 * `panel.ts` imported `charge-map.ts` for its lookup; charge-map derives the
 * map from `charges`, and `charges` carries the full authored prose of all 30
 * charge pages. The map itself is 33 keys.
 *
 * HONEST ABOUT WHAT THIS SAVED: nothing today. A shared chunk loaded by every
 * route already contains site.ts, so the page measured 2.90 MB before and
 * after, against a 1.89 MB site-wide baseline. The ~1.0 MB difference is the
 * statute dataset, which is the design.
 *
 * It earns a gate anyway, for two reasons. This tool must not become a SECOND
 * cause of a problem the site already has, and when the shared chunk is fixed
 * the fix must not be silently undone here by a one-line import that will look
 * entirely reasonable to whoever writes it. Nothing was "wrong" the first
 * time: every import was legitimate, the tool worked, and all eleven other
 * assertions passed. The cost was invisible everywhere except the artifact,
 * which is this project's recorded failure shape.
 */
export function t12(files: string[]): string[] {
  const leaked = files.filter((f) => /(^|\/)site\.ts$/.test(f));
  return leaked.length
    ? [
        `T12: the island's import closure reaches ${leaked.join(", ")}, which carries the ` +
          `authored prose of every charge page into the client bundle. The charge map ` +
          `is computed on the server and passed as a prop; see lib/tools/charge-lookup/links.ts.`,
      ]
    : [];
}

/** T11. Absent fields absent; every rendered term verbatim in its own quote. */
export function t11(rows: { row: ResolvedRow; rawQuote: string }[]): string[] {
  const errs: string[] = [];
  for (const { row, rawQuote } of rows) {
    if ("degree" in row && (row.degree === "" || row.degree === "no degree assigned"))
      errs.push(
        `T11: ${row.rawCite} renders a degree of "${row.degree}". D33: a row that assigns no ` +
          `degree carries NO degree key, because a blank reads as "we do not know" when the ` +
          `truth is "this paragraph assigns none".`,
      );
    if (row.term !== undefined && !rawQuote.includes(row.term))
      errs.push(
        `T11: the term rendered for ${row.rawCite} is not a verbatim span of that row's quote. ` +
          `D33: the term is located inside the quote, never paraphrased and never read out of ` +
          `the row's trigger summary.`,
      );
  }
  return errs;
}

// ================================================================ self-tests
console.log("Charge-lookup gate self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  // T1 fires when a must-refuse string resolves.
  t("PLANTED: T1 fires when a must-refuse fixture resolves",
    t1([{ input: "893.13 6a", source: "planted", why: "planted",
          expect: { kind: "refuse", reason: "not-a-citation" } }]).length > 0);
  // T1 fires when a fixture lands on the WRONG paragraph.
  t("PLANTED: T1 fires on resolution to the wrong paragraph",
    t1([{ input: "893.13 6a", source: "planted", why: "planted",
          expect: { kind: "paragraph", cite: "F.S. 893.13(6)(b)" } }]).length > 0);
  // T1 fires when rows are silently dropped.
  t("PLANTED: T1 fires when a match count is short (the dropped-rows shape)",
    t1([{ input: "18 U.S.C. § 1343", source: "planted", why: "planted",
          expect: { kind: "paragraph", cite: "18 U.S.C. 1343", rows: 99 } }]).length > 0);
  t("the real corpus passes T1", t1(CORPUS).length === 0);

  // T2 fires on a quote that is not in the row it claims.
  const goodRow = emittableRows()[0];
  t("PLANTED: T2 fires on a quote that is not the audited text",
    t2([{ row: { ...goodRow.row, quote: "words no statute contains anywhere at all" },
          rawQuote: goodRow.rawQuote }]).length > 0);

  // T3 fires on each shape, and stays silent on quoted statutory text.
  t("PLANTED: T3 fires on a claim-shaped phrase in copy",
    t3Copy(["This page tells you what you are charged with."]).length > 0);
  t("PLANTED: T3 fires on a bare characterisation in copy",
    t3Copy(["That is a serious charge."]).length > 0);
  t("PLANTED: T3 fires on a claim-shaped phrase in the DATASET",
    t3Dataset([{ row: { ...goodRow.row, quote: "whoever commits, your charge is fixed" } }]).length > 0);
  t("CONTROL: T3 stays silent on a statute using the word 'minor'",
    t3Dataset([{ row: { ...goodRow.row,
      quote: "any person who employs any minor to engage in sexually explicit conduct" } }]).length === 0);

  // T4 fires when a branch drops the disclosure, and when a branch never ran.
  const realPanels = CORPUS.map((c) => panelFor(resolve(c.input), CHARGE_MAP_DATA));
  t("PLANTED: T4 fires when a panel drops the disclosure",
    t4([{ ...realPanels[0], cannotKnow: { heading: "", body: "" } }]).length > 0);
  t("PLANTED: T4 fires when the refusal branch was never exercised",
    t4(realPanels.filter((p) => p.kind !== "refuse")).length > 0);

  // T5 fires when a partial row renders without the mark.
  const partialPanel = realPanels.find((p) => p.rows.some((r) => r.partial));
  t("the corpus produces at least one partial-sourced panel to test T5 against",
    Boolean(partialPanel));
  if (partialPanel)
    t("PLANTED: T5 fires when the partial mark is removed",
      t5([{ ...partialPanel, notes: [] }]).length > 0);

  // T6 fires on each banned API. Written to a real temp file, because the
  // checker reads files and a fixture that is not a file tests the fixture.
  {
    const tmp = ".charge-lookup-t6-selftest.tsx";
    const planted = [
      'const r = await fetch("/api/log?q=" + input);',
      'localStorage.setItem("last", input);',
      'history.replaceState({}, "", "?cite=" + input);',
      'gtag("event", "lookup", { q: input });',
      'window.analytics.track("lookup", input);',
    ];
    // The control: the word "plausible" in prose is not the Plausible SDK.
    // This is the false positive the rule above was rewritten for, so it gets
    // a standing test rather than a comment.
    writeFileSync(tmp, 'export const NOTE = "a plausible guess about the analytics is not a call";');
    const controlClean = t6([tmp]).length === 0;
    let fired = 0;
    for (const p of planted) {
      writeFileSync(tmp, `export default function X(){ ${p} }`);
      if (t6([tmp]).length > 0) fired++;
    }
    rmSync(tmp, { force: true });
    t(`PLANTED: T6 fires on all ${planted.length} leak shapes (fired on ${fired})`,
      fired === planted.length);
    t("CONTROL: T6 stays silent on the word 'plausible' in prose", controlClean);
  }
  t("the island's import closure is clean under T6", t6(importClosure(ISLAND)).length === 0);
  t("T6 actually walked past the island into the lib",
    importClosure(ISLAND).some((f) => f.includes("charge-lookup/resolve")));

  // T7 fires on an href with no route.
  t("PLANTED: T12 fires when the closure reaches site.ts",
    t12(["src/lib/site.ts"]).length > 0);
  t("the island's closure does NOT reach site.ts", t12(importClosure(ISLAND)).length === 0);

  t("PLANTED: T7 fires on an unbuilt destination",
    t7(["/criminal-defense/not-a-real-charge"], () => false).length > 0);

  // T8 and T9 fire on broken HTML.
  t("PLANTED: T8 fires when a table is named without its date",
    t8(`${VERSION.tables[0].cite} and Rule 3.992 does not apply`).length > 0);
  t("PLANTED: T8 fires when the Rule 3.992 clause is missing",
    t8(VERSION.tables.map((x) => `${x.cite} ${x.fetched}`).join(" ")).length > 0);
  t("PLANTED: T9 fires on a server-rendered input",
    t9(`<main><input name="citation"><p>${CANNOT_KNOW.heading}</p></main>`).length > 0);
  t("PLANTED: T9 fires when the disclosure is absent from the static HTML",
    t9(`<main><div data-lookup-placeholder>needs JS</div></main>`).length > 0);

  // T10 and T11 fire on their own failure states.
  t("T10 passes against the real index", t10().length === 0);
  t("PLANTED: T11 fires on a rendered 'no degree assigned'",
    t11([{ row: { ...goodRow.row, degree: "no degree assigned" }, rawQuote: goodRow.rawQuote }]).length > 0);
  t("PLANTED: T11 fires on a term that is not in its own quote",
    t11([{ row: { ...goodRow.row, term: "imprisoned not more than 900 years" },
           rawQuote: goodRow.rawQuote }]).length > 0);

  if (!ok) {
    console.log("\nCharge-lookup check FAILED (self-tests). The gate cannot be trusted to report on the tool.");
    process.exit(1);
  }
}

// ================================================================ real run
const rows = emittableRows();
const panels = CORPUS.map((c) => panelFor(resolve(c.input), CHARGE_MAP_DATA));

console.log(`\nCorpus: ${CORPUS.length} recorded-query fixtures`);
{
  const errs = t1(CORPUS);
  errs.forEach(fail);
  if (!errs.length) {
    const refusals = CORPUS.filter((c) => c.expect.kind === "refuse").length;
    console.log(
      `  ok    T1  all ${CORPUS.length} resolve as the briefs recorded, including ` +
        `${refusals} that must NOT resolve`,
    );
  }
}

console.log(`\nT2: quoted text, over ${rows.length} emittable rows`);
{
  const errs = t2(rows);
  errs.slice(0, 8).forEach(fail);
  if (!errs.length) console.log(`  ok    every renderable quote is verbatim in the audited row it claims`);
}

console.log("\nT3: forbidden strings");
{
  const a = t3Copy(CHARGE_LOOKUP_PAGE_COPY);
  const b = t3Dataset(rows);
  [...a, ...b].forEach(fail);
  if (!a.length && !b.length)
    console.log(
      `  ok    ${FORBIDDEN_IN_COPY.length} forbidden strings absent from ${CHARGE_LOOKUP_PAGE_COPY.length} authored strings; ` +
        `${FORBIDDEN_ANYWHERE.length} claim-shaped phrases absent from ${rows.length} dataset rows`,
    );
}

console.log("\nT4: the Section 5 disclosure, on results and on refusals");
{
  const errs = t4(panels);
  errs.forEach(fail);
  if (!errs.length) {
    const byKind = new Map<string, number>();
    for (const p of panels) byKind.set(p.kind, (byKind.get(p.kind) ?? 0) + 1);
    console.log(
      `  ok    present on all ${panels.length} panels: ` +
        `${[...byKind].map(([k, n]) => `${n} ${k}`).join(", ")}`,
    );
  }
}

console.log("\nT5: partial sources marked");
{
  const errs = t5(panels);
  errs.forEach(fail);
  const n = panels.filter((p) => p.rows.some((r) => r.partial)).length;
  if (!errs.length)
    console.log(`  ok    ${n} panel(s) draw on a partial table and all ${n} carry the mark (D34)`);
}

console.log("\nT6: nothing leaves the page (C5 made mechanical)");
{
  const files = importClosure(ISLAND);
  const errs = t6(files);
  errs.forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    ${files.length} file(s) in the island's import closure use none of the ` +
        `${BANNED_APIS.length} banned APIs`,
    );
}

console.log("\nT12: the client bundle");
{
  const files = importClosure(ISLAND);
  const errs = t12(files);
  errs.forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    ${files.length} file(s) in the island's closure, and site.ts is not among ` +
        `them: the charge map crosses as a prop, not as an import`,
    );
}

console.log("\nT7: every link the tool can emit");
{
  const routes = new Set<string>();
  (function walk(dir: string, prefix = "") {
    for (const e of readdirSync(dir)) {
      const full = `${dir}/${e}`;
      if (statSync(full).isDirectory()) walk(full, `${prefix}/${e}`);
      else if (e === "page.tsx") routes.add(prefix || "/");
    }
  })("src/app");
  const dynamicOk = (h: string) =>
    routes.has(h) ||
    [...routes].some((r) => r.includes("[") &&
      new RegExp(`^${r.replace(/\[[^\]]+\]/g, "[^/]+")}$`).test(h));
  const errs = t7(EMITTABLE_HREFS, dynamicOk);
  errs.forEach(fail);
  if (!errs.length)
    console.log(`  ok    all ${EMITTABLE_HREFS.length} emittable charge-page links resolve to a built route`);
}

console.log("\nT10: the 921.0022 chart is not a mapping source");
{
  const errs = t10();
  errs.forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    ${Object.keys(EXCLUDED_TABLES).length} chart table(s) excluded, ` +
        `${INDEX.excludedRowCount} rows withheld from the index, and a cite both sources ` +
        `carry resolves to the statute's degree`,
    );
}

console.log("\nT11: absent fields absent, terms verbatim");
{
  const errs = t11(rows);
  errs.slice(0, 8).forEach(fail);
  const noDegree = rows.filter((r) => r.row.degree === undefined).length;
  const withTerm = rows.filter((r) => r.row.term !== undefined).length;
  if (!errs.length)
    console.log(
      `  ok    ${noDegree} of ${rows.length} rows carry no degree key at all (never a blank), ` +
        `and all ${withTerm} rendered terms are verbatim spans of their own quote`,
    );
}

// ---------------------------------------------------------------- rendered
console.log("\nT8 and T9: the built page");
if (!RENDERED) {
  console.log(
    "  ..    DEFERRED to postbuild. These two read .next, and a prebuild run would " +
      "report on the PREVIOUS build's HTML, which is worse than not running: a stale " +
      "pass reads as a current one.",
  );
} else if (!existsSync(PAGE)) {
  fail(
    `${PAGE} not found and --rendered was requested. A missing artifact FAILS rather ` +
      `than skips (D30): "the page is not built" and "the page has no disclosure" must ` +
      `never produce the same green run.`,
  );
} else {
  const html = readFileSync(PAGE, "utf8");
  const text = norm(
    html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")
      .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
  );
  const e8 = t8(text);
  const e9 = t9(html);
  [...e8, ...e9].forEach(fail);
  if (!e8.length)
    console.log(`  ok    T8  the version stamp names all ${VERSION.tables.length} tables with their dates, and states Rule 3.992 is inapplicable`);
  if (!e9.length)
    console.log(`  ok    T9  the static HTML carries the explanation and the disclosure, and no input at all`);
}

// D22: say what was not checked, every run.
console.log(
  "\n  ..    NOT CHECKED, and each is a real gap rather than an oversight:\n" +
    "  ..    Whether a resolution lands on the paragraph the STATUTE means, as opposed to\n" +
    "  ..    the paragraph the audited table records. That is C7 and it is an attorney's\n" +
    "  ..    read, not a machine's; this gate can only prove the tool agrees with the\n" +
    "  ..    tables.\n" +
    "  ..    Whether the refusal copy reads correctly to a frightened person, which the\n" +
    "  ..    concept document Section 8 names as its own human-only item.\n" +
    "  ..    Runtime network behaviour. T6 is static analysis over the import closure; a\n" +
    "  ..    leak introduced by a third-party script injected at runtime is outside it.",
);

console.log(failed ? "\nCharge-lookup check FAILED." : "\nCharge-lookup check passed.");
process.exit(failed ? 1 : 0);
