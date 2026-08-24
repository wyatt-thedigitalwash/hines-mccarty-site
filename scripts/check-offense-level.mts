/**
 * check:offense-level. The done criteria for the offense-level comparison
 * instrument, run against the BUILT PAGE.
 *
 * docs/build/tools/OFFENSE-LEVEL-INSTRUMENT-CONCEPT.md Section 11 lists eight
 * assertions. T3 and T7 are covered by gates that already exist (`check:pages`
 * over the copy surface, and `check:routes` sweeps A and B). T6 became sweep C
 * of `check:routes`. The other five run here, plus one this gate adds.
 *
 * WHY IT READS .next AND NOT src/lib. D24. A gate that imported
 * `offense-level.ts` and compared it to `statutes.ts` would prove those two
 * files agree with each other, which is the one thing that was never in doubt.
 * The failure worth catching is the page and the data disagreeing, so every
 * assertion below parses the rendered HTML and treats it as the only evidence.
 *
 * MISSING ARTIFACT = FAIL, D30. Run after `npm run build`.
 *
 * EVERY CHECKER IS A PURE FUNCTION OF THE HTML, so the self-tests can hand it
 * deliberately broken HTML and prove it fires. A gate whose failure path has
 * never executed is an assumption with a progress bar.
 */
import { readFileSync, existsSync } from "node:fs";
import { STATUTES } from "../src/lib/statutes.ts";
import type { Degree } from "../src/lib/statutes.ts";
import {
  CANNOT_KNOW,
  COMPARISON_C,
  OFFENSE_LEVEL_PAGE_COPY,
} from "../src/lib/tools/offense-level.ts";

const ROUTE = "/resources/tools/offense-level-comparison";
const PAGE = `.next/server/app${ROUTE}.html`;

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const CHART = STATUTES["921.0022"];

// ---------------------------------------------------------------- helpers
const decode = (s: string) =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2F;/g, "/");

const norm = (s: string) =>
  decode(s).replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

/** Text of the page body only. Header and footer are outside <main>. */
function mainOf(html: string): string {
  const start = html.indexOf("<main");
  const end = html.lastIndexOf("</main>");
  return start === -1 || end === -1 ? "" : html.slice(start, end);
}

const textOf = (html: string) =>
  norm(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " "));

/** Attribute value from an opening tag. */
const attr = (tag: string, name: string) =>
  tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

type Rendered = { cite: string; degree: string; level: number };

/**
 * A valueless JSX attribute renders as `data-triple="true"`, not as a bare
 * word. The first draft of this gate required whitespace after the name, its
 * self-tests hand-wrote the bare form, and every test passed while the real
 * artifact matched nothing: T2 reported zero span rows on a page that rendered
 * six. The lookahead accepts both spellings, and the fixtures below now use the
 * form React actually emits, because a fixture that does not look like the
 * artifact tests the fixture.
 */
const marker = (name: string) => `<tr[^>]*\\s${name}(?=[\\s=>])[^>]*>`;

function renderedTriples(html: string): Rendered[] {
  const out: Rendered[] = [];
  for (const m of mainOf(html).matchAll(new RegExp(marker("data-triple"), "g"))) {
    const tag = m[0];
    const cite = attr(tag, "data-cite");
    const degree = attr(tag, "data-degree");
    const level = attr(tag, "data-level");
    if (cite == null || degree == null || level == null) continue;
    out.push({ cite: decode(cite), degree: decode(degree), level: Number(level) });
  }
  return out;
}

function renderedSpans(html: string): { degree: string; levels: number[] }[] {
  const out: { degree: string; levels: number[] }[] = [];
  for (const m of mainOf(html).matchAll(new RegExp(marker("data-span"), "g"))) {
    const tag = m[0];
    const degree = attr(tag, "data-degree");
    const levels = attr(tag, "data-levels");
    if (degree == null || levels == null) continue;
    out.push({ degree: decode(degree), levels: levels.split(",").map(Number) });
  }
  return out;
}

// ---------------------------------------------------------------- checkers
/** T1. Every rendered triple is a row of the chart, exactly. */
function T1(html: string): string[] {
  const errs: string[] = [];
  const rows = renderedTriples(html);
  if (!rows.length) return ["T1: the page rendered no triples at all"];
  for (const r of rows) {
    const hits = CHART.rows.filter((x) => x.cite.trim() === r.cite);
    if (hits.length !== 1) {
      errs.push(`T1: rendered cite ${r.cite} matches ${hits.length} chart rows, expected exactly 1`);
      continue;
    }
    const row = hits[0];
    if (row.degree !== r.degree)
      errs.push(`T1: ${r.cite} renders degree "${r.degree}", chart says "${row.degree}"`);
    if (row.level !== r.level)
      errs.push(`T1: ${r.cite} renders level ${r.level}, chart says ${row.level}`);
  }
  return errs;
}

/** T2. The degree-span table equals a group-by computed here, at check time. */
function T2(html: string): string[] {
  const errs: string[] = [];
  const expected = new Map<Degree, number[]>();
  for (const r of CHART.rows) {
    if (r.level == null) continue;
    if (!expected.has(r.degree)) expected.set(r.degree, []);
    const l = expected.get(r.degree)!;
    if (!l.includes(r.level)) l.push(r.level);
  }
  for (const l of expected.values()) l.sort((a, b) => a - b);

  const rendered = renderedSpans(html);
  if (!rendered.length) return ["T2: the page rendered no degree-span rows at all"];
  for (const r of rendered) {
    const want = expected.get(r.degree as Degree);
    if (!want) {
      errs.push(`T2: the page renders a span for "${r.degree}", which no chart row carries`);
      continue;
    }
    if (want.join(",") !== r.levels.join(","))
      errs.push(
        `T2: "${r.degree}" renders levels ${r.levels.join(",")}, the chart group-by gives ${want.join(",")}`,
      );
  }
  for (const d of expected.keys())
    if (!rendered.some((r) => r.degree === d))
      errs.push(`T2: the chart ranks "${d}" but the page omits it from the span table`);
  return errs;
}

/**
 * T3. None of the Section 4 forbidden strings reaches the page.
 *
 * `check:pages` runs the banned-term rail over the copy surface. This is the
 * rendered-side twin, and it carries the strings that are specific to THIS
 * tool's compliance posture rather than the site-wide list.
 */
const FORBIDDEN = [
  "your level",
  "your score",
  "your sentence",
  "you are facing",
  "worse than",
  "better than",
  "more serious than",
  "less serious than",
  "likely",
  "expect",
];
function T3(html: string): string[] {
  const text = textOf(mainOf(html)).toLowerCase();
  return FORBIDDEN.filter((s) => text.includes(s)).map(
    (s) => `T3: the rendered page contains the forbidden string "${s}" (concept document Section 4)`,
  );
}

/** T4. The disclosure is present, whole, and above the first comparison. */
function T4(html: string): string[] {
  const errs: string[] = [];
  const main = mainOf(html);
  const text = textOf(main);
  if (!text.includes(norm(CANNOT_KNOW.heading)))
    errs.push("T4: the Section 5 disclosure heading is not on the page");
  if (!text.includes(norm(CANNOT_KNOW.body)))
    errs.push("T4: the Section 5 disclosure body is not on the page in full");
  const disclosure = main.indexOf("data-cannot-know");
  const firstTable = main.indexOf("data-comparison");
  if (disclosure === -1) errs.push("T4: no element carries data-cannot-know");
  else if (firstTable === -1) errs.push("T4: no element carries data-comparison");
  else if (disclosure > firstTable)
    errs.push(
      "T4: the disclosure renders AFTER the first comparison table. Plan Section 5.2 " +
        "requires it adjacent to the output at equal or greater prominence, not below it.",
    );
  return errs;
}

/** T5. The version stamp, and the Rule 3.992 scope correction. */
function T5(html: string): string[] {
  const errs: string[] = [];
  const text = textOf(mainOf(html));
  if (!/921\.0022/.test(text)) errs.push("T5: the page does not name Statute 921.0022");
  if (!/2025 Florida Statutes/.test(text))
    errs.push("T5: the page does not state the 2025 Florida Statutes edition");
  if (!/Rule 3\.992/.test(text)) errs.push("T5: the page does not mention Rule 3.992");
  else if (!/3\.992[^.]*does not apply|implements no Criminal Punishment Code scoresheet/.test(text))
    errs.push(
      "T5: the page mentions Rule 3.992 without stating that the clause is INAPPLICABLE. " +
        "A satisfied-looking C6 must not read as a claim about a form this tool does not implement.",
    );
  return errs;
}

/** T8. No 893.1351 row inside anything presented as 893.135 trafficking. */
function T8(html: string): string[] {
  const errs: string[] = [];
  for (const r of renderedTriples(html))
    if (/^893\.1351/.test(r.cite))
      errs.push(
        `T8: ${r.cite} is rendered in a comparison table. 893.1351 is a different ` +
          `statute from 893.135 and a prefix match is how it gets there.`,
      );
  // The trafficking count in prose must equal a boundary-respecting count.
  const boundary = CHART.rows.filter(
    (r) => /^893\.135(?=$|[^0-9])/.test(r.cite.trim()) && r.level != null,
  );
  const text = textOf(mainOf(html));
  if (!text.includes(`893.135 has ${boundary.length} ranked paragraphs`))
    errs.push(
      `T8: the page does not state the boundary-respecting trafficking count of ` +
        `${boundary.length}. A prefix match would give ${
          CHART.rows.filter((r) => r.cite.trim().startsWith("893.135") && r.level != null).length
        }.`,
    );
  if (boundary.length !== COMPARISON_C.rowCount)
    errs.push(
      `T8: the module's rowCount (${COMPARISON_C.rowCount}) disagrees with this gate's ` +
        `independent boundary count (${boundary.length})`,
    );
  return errs;
}

/**
 * T9, added by this gate rather than by Section 11.
 *
 * D29 puts the page inside the content rails by registering its copy. That
 * only works if the registered copy IS the page. Nothing stopped a future edit
 * from adding a sentence in JSX, where the banned-term, duplication and
 * provenance rails would never see it, and the registry would still look full.
 * So every heading and paragraph in the rendered body must be a string the
 * copy surface already carries.
 *
 * [NEEDS:] scaffolding is exempt: it is deliberately visible placeholder text
 * and `check:pages` owns it.
 */
function T9(html: string): string[] {
  const errs: string[] = [];
  const known = new Set(OFFENSE_LEVEL_PAGE_COPY.map(norm));
  const main = mainOf(html);
  for (const m of main.matchAll(/<(h1|h2|h3|p|caption)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const t = textOf(m[2]);
    if (!t || t.includes("[NEEDS:")) continue;
    if (!known.has(t))
      errs.push(
        `T9: the rendered <${m[1]}> "${t.slice(0, 70)}${t.length > 70 ? "..." : ""}" is not in ` +
          `OFFENSE_LEVEL_PAGE_COPY, so no content rail can see it (D29)`,
      );
  }
  return errs;
}

// ---------------------------------------------------------------- self-tests
console.log("Offense-level instrument self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  // data-triple="true" is what React emits for a valueless JSX attribute.
  const row = (cite: string, degree: string, level: number | string) =>
    `<tr data-triple="true" data-cite="${cite}" data-degree="${degree}" data-level="${level}"><td>x</td></tr>`;
  const wrap = (body: string) => `<main>${body}</main>`;

  // A minimal page that should pass every checker it is given.
  const goodTriple = wrap(
    `<div data-comparison><table>${row("812.014(2)(c)3.", "third degree felony", 4)}</table></div>`,
  );
  t("T1 accepts a triple that matches the chart", T1(goodTriple).length === 0);
  t("PLANTED: T1 fires on a wrong LEVEL",
    T1(wrap(row("812.014(2)(c)3.", "third degree felony", 5))).some((e) => e.includes("renders level 5")));
  t("PLANTED: T1 fires on a wrong DEGREE",
    T1(wrap(row("812.014(2)(c)3.", "second degree felony", 4))).some((e) => e.includes("renders degree")));
  t("PLANTED: T1 fires on a cite that is not in the chart",
    T1(wrap(row("812.014(9)(z)99.", "third degree felony", 4))).some((e) => e.includes("matches 0 chart rows")));
  t("PLANTED: T1 fires when the page rendered no triples", T1(wrap("<p>hi</p>")).length === 1);

  const span = (degree: string, levels: string) =>
    `<tr data-span="true" data-degree="${degree}" data-levels="${levels}"><td>x</td></tr>`;
  // The regression that made this necessary: the marker must be found in BOTH
  // spellings, because only one of them is what the build actually produces.
  t("markers are found whether the attribute is bare or valued",
    renderedTriples(wrap(`<tr data-triple data-cite="812.014(2)(c)3." data-degree="third degree felony" data-level="4"></tr>`)).length === 1 &&
      renderedTriples(wrap(row("812.014(2)(c)3.", "third degree felony", 4))).length === 1);
  t("PLANTED: T2 fires on a stale span",
    T2(wrap(span("second degree felony punishable by life", "8"))).some((e) => e.includes("renders levels 8")));
  t("PLANTED: T2 fires on a degree the chart does not rank",
    T2(wrap(span("fourth degree felony", "1"))).some((e) => e.includes("no chart row carries")));
  t("PLANTED: T2 fires when a ranked degree is omitted from the table",
    T2(wrap(span("life felony", "9,10"))).some((e) => e.includes("omits it from the span table")));

  t("PLANTED: T3 fires on a predictive string",
    T3(wrap("<p>This is your level and your score.</p>")).length === 2);
  t("PLANTED: T3 fires on a comparative string",
    T3(wrap("<p>Trafficking is more serious than theft.</p>")).some((e) => e.includes("more serious than")));
  t("T3 is silent on ordinary copy", T3(wrap("<p>The chart assigns a level.</p>")).length === 0);

  const disclosure = `<aside data-cannot-know><h2>${CANNOT_KNOW.heading}</h2><p>${CANNOT_KNOW.body}</p></aside>`;
  const table = `<div data-comparison><table></table></div>`;
  t("T4 accepts the disclosure above the first table",
    T4(wrap(disclosure + table)).length === 0);
  t("PLANTED: T4 fires when the disclosure is moved BELOW the tables",
    T4(wrap(table + disclosure)).some((e) => e.includes("renders AFTER the first comparison")));
  t("PLANTED: T4 fires when the disclosure body is truncated",
    T4(wrap(`<aside data-cannot-know><h2>${CANNOT_KNOW.heading}</h2><p>${CANNOT_KNOW.body.slice(0, 40)}</p></aside>` + table))
      .some((e) => e.includes("not on the page in full")));

  t("PLANTED: T5 fires when the version stamp is absent", T5(wrap("<p>nothing</p>")).length >= 3);
  t("PLANTED: T5 fires when Rule 3.992 is cited WITHOUT the inapplicability statement",
    T5(wrap("<p>Statute 921.0022, 2025 Florida Statutes. This page implements Rule 3.992 as revised</p>"))
      .some((e) => e.includes("INAPPLICABLE")));

  t("PLANTED: T8 fires on a 893.1351 row inside a comparison",
    T8(wrap(row("893.1351(1)", "third degree felony", 5))).some((e) => e.includes("different statute")));

  const copy = OFFENSE_LEVEL_PAGE_COPY[1];
  t("T9 accepts a paragraph that is in the copy surface", T9(wrap(`<p>${copy}</p>`)).length === 0);
  t("PLANTED: T9 fires on copy that exists only in JSX",
    T9(wrap("<p>A sentence nobody registered.</p>")).some((e) => e.includes("not in")));
  t("T9 ignores [NEEDS:] scaffolding",
    T9(wrap("<p>Reviewed by [NEEDS: owning attorney].</p>")).length === 0);

  if (!ok) {
    console.log("\nOffense-level check FAILED (self-tests).");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- the page
console.log("\nAssertions against the built page");
if (!existsSync(PAGE)) {
  fail(
    `${PAGE} not found. This gate reads built HTML and a missing artifact FAILS ` +
      `rather than skips (D30). Run \`npm run build\` first.`,
  );
  console.log("\nOffense-level check FAILED.");
  process.exit(1);
}

const html = readFileSync(PAGE, "utf8");
const suites: [string, (h: string) => string[]][] = [
  ["T1 rendered triples match the chart exactly", T1],
  ["T2 degree spans match a group-by computed at check time", T2],
  ["T3 no forbidden string reaches the page", T3],
  ["T4 the disclosure is whole and precedes the first comparison", T4],
  ["T5 the version stamp and the Rule 3.992 scope correction", T5],
  ["T8 no 893.1351 row inside a 893.135 comparison", T8],
  ["T9 every rendered heading and paragraph is in the copy surface", T9],
];
for (const [name, fn] of suites) {
  const errs = fn(html);
  if (errs.length) for (const e of errs) fail(e);
  else console.log(`  ok    ${name}`);
}
console.log(
  `  ..    ${renderedTriples(html).length} triple(s) and ${renderedSpans(html).length} degree span(s) read from the built HTML`,
);

// D22: say what was not checked.
console.log(
  "\n  ..    NOT CHECKED HERE: T3's site-wide banned-term list, which `check:pages` " +
    "runs over the copy surface; T6, which is sweep C of `check:routes`; and T7, " +
    "which is `check:routes` sweeps A and B. Nothing here reads the C1 to C8 " +
    "dispositions: those need a person, and the page stays noindex and unpublished " +
    "until one signs them.",
);

console.log(failed ? "\nOffense-level check FAILED." : "\nOffense-level check passed.");
process.exit(failed ? 1 : 0);
