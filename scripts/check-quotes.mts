/**
 * check:quotes. A quoted statute is marked up as a quotation, and its link
 * points at its own source.
 *
 * THE SILENT-WRONG FAILURE THIS GUARDS. A `cite` attribute is a claim: this
 * text came from here. Pointed at the wrong section it is worse than absent,
 * because it looks like provenance and is not. Nothing on a rendered page
 * shows a reader which URL a blockquote carries, so this is exactly the class
 * of defect that ships and is never noticed.
 *
 * Q1  the resolver's own truth table, including both bugs it had first
 * Q2  every cite= on a built page resolves to a statute this project recorded
 * Q3  a quotation whose citation names more than one section carries NO cite
 * Q4  every rendered statute span is inside a <blockquote>
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { STATUTES } from "../src/lib/statutes.ts";
import {
  namedSectionCount,
  resolveStatuteRefs,
  singleSourceUrl,
} from "../src/lib/statute-links.ts";
import { charges, guides, injuryPages } from "../src/lib/site.ts";
import { isRecordedVerbatim } from "../src/lib/statute-links.ts";
import { RECORDED_SOURCES } from "../src/lib/generated/source-index.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };
const ok = (m: string) => console.log(`  ok    ${m}`);

// ---------------------------------------------------------------- Q1
console.log("Q1: the resolver's truth table");
{
  let bad = 0;
  const t = (name: string, cond: boolean) => {
    if (cond) ok(name);
    else { fail(`SELF-TEST: ${name}`); bad++; }
  };

  // Both of these are bugs this resolver actually had, kept as tests.
  t("PLANTED: subdivisions and the edition year are not sections (F.S. 815.06(7) (2025))",
    namedSectionCount("F.S. 815.06(7) (2025)") === 1);
  t("PLANTED: a five-statute span is NOT single-source even though only one is recorded",
    namedSectionCount("Florida Statutes 776.012, 776.013, 776.032, 782.02 and 782.03, the 2025 Florida Statutes") === 5 &&
      singleSourceUrl("Florida Statutes 776.012, 776.013, 776.032, 782.02 and 782.03, the 2025 Florida Statutes") === undefined);

  t("two subsections of ONE statute stay single-source",
    namedSectionCount("Florida Statute 782.04(1)(a)2. and Florida Statute 782.04(3), the 2025 Florida Statutes") === 1);
  t("two different statutes are multi-source",
    namedSectionCount("Florida Statute 812.014 and Florida Statute 817.034, the 2025 Florida Statutes") === 2);
  t("a federal continuation without a repeated marker counts once",
    namedSectionCount("18 U.S.C. 1030(e)(8) and 1030(e)(11)") === 1);
  t("two federal statutes count twice",
    namedSectionCount("18 U.S.C. 1347, with the definition it runs on at 18 U.S.C. 24(b)") === 2);
  t("an unrecorded statute yields no link",
    singleSourceUrl("18 U.S.C. 2256(1), (5), (8), (9) and (11)") === undefined);
  t("a recorded single statute yields its own url",
    singleSourceUrl("Florida Statute 784.03, the 2025 Florida Statutes") === STATUTES["784.03"]?.url);
  t("a non-statute citation yields no link",
    singleSourceUrl("[VERIFY: charging statute and its current text]") === undefined);

  if (!bad) ok("resolver holds on 9 cases");
}

// ---------------------------------------------------------------- Q3
console.log("\nQ3: multi-source spans carry no cite, single-source ones do");
{
  const spans: string[] = [];
  for (const c of charges) {
    if (c.statute) spans.push(c.statute.citation);
    for (const s of c.sections ?? []) if (s.statute) spans.push(s.statute.citation);
  }
  let bad = 0, linked = 0, unlinked = 0;
  for (const s of spans) {
    const n = namedSectionCount(s);
    const url = singleSourceUrl(s);
    if (n > 1 && url) {
      bad++;
      fail(`a span naming ${n} sections carries a cite: "${s.slice(0, 60)}..."`);
    }
    if (url) {
      linked++;
      const known =
        Object.values(STATUTES).some((t) => t.url === url) ||
        RECORDED_SOURCES.some((r) => r.url === url);
      if (!known) {
        bad++;
        fail(`cite ${url} is not the url of any recorded source`);
      }
    } else unlinked++;
  }
  if (!bad)
    ok(`${spans.length} rendered spans: ${linked} single-source and linked, ${unlinked} left unlinked`);
}

// ---------------------------------------------------------------- Q2 and Q4
console.log("\nQ2 and Q4: the built pages");
const ROOT = `${DIST_DIR}/server/app`;
if (!existsSync(ROOT)) {
  fail(`${ROOT} not found. A missing artifact FAILS rather than skips (D30). Run \`npm run build\`.`);
} else {
  const files: string[] = [];
  (function walk(d: string) {
    for (const e of readdirSync(d)) {
      const f = join(d, e);
      if (statSync(f).isDirectory()) walk(f);
      else if (f.endsWith(".html")) files.push(f);
    }
  })(ROOT);

  // BOTH source registries. A cite may come from an offence-grading table or
  // from a READ-WHOLE record in PAGE-SOURCES.md; court rules only ever have the
  // second. This set was the tables alone at first and failed four correct
  // guide citations, which is a gate narrower than the claim it verifies.
  // BOTH source registries. A cite may come from an offence-grading table or
  // from a READ-WHOLE record in PAGE-SOURCES.md; court rules only ever have the
  // second. This set was the tables alone at first and failed four correct
  // guide citations, which is a gate narrower than the claim it verifies.
  const recorded = new Set([
    ...Object.values(STATUTES).map((t) => t.url),
    ...RECORDED_SOURCES.map((r) => r.url),
  ]);

  // Count inside <main> only. The RSC flight payload repeats every attribute
  // as a string later in the file, which doubled the gloss count on the first
  // run, and the home page carries testimonial <blockquote>s that are correct
  // markup and nothing to do with statutes. Statute quotations are tagged.
  const mainOf = (html: string) => {
    const a = html.indexOf("<main");
    const b = html.lastIndexOf("</main>");
    return a === -1 || b === -1 ? "" : html.slice(a, b);
  };

  let quotes = 0, glosses = 0, cited = 0, bad = 0;
  for (const f of files) {
    const main = mainOf(readFileSync(f, "utf8"));
    quotes += (main.match(/data-statute-quote/g) ?? []).length;
    glosses += (main.match(/data-statute-gloss/g) ?? []).length;
    for (const tag of main.match(/<blockquote[^>]*>/g) ?? []) {
      const m = tag.match(/cite="([^"]*)"/);
      if (!m) continue;
      cited++;
      const url = m[1].replace(/&amp;/g, "&");
      if (!recorded.has(url)) {
        bad++;
        fail(`${f.replace(ROOT, "")}: cite="${url}" is not a recorded source url`);
      }
    }
    // A gloss must never carry a cite: that is the overclaim this split exists
    // to end.
    if (/data-statute-gloss[^>]*cite=/.test(main)) {
      bad++;
      fail(`${f.replace(ROOT, "")}: an attributed passage carries a cite attribute`);
    }
  }

  // What the data says should render, computed independently of the pages.
  let expectVerbatim = 0, expectGloss = 0;
  for (const set of [charges, guides, injuryPages]) {
    for (const c of set as { sections?: { statute?: { body: string } }[] }[]) {
      for (const sec of c.sections ?? []) {
        if (!sec.statute) continue;
        if (isRecordedVerbatim(sec.statute.body)) expectVerbatim++;
        else expectGloss++;
      }
    }
  }

  if (quotes !== expectVerbatim) {
    bad++;
    fail(`${expectVerbatim} statute spans are verbatim from a record but ${quotes} rendered as quotations`);
  }
  if (glosses !== expectGloss) {
    bad++;
    fail(`${expectGloss} statute spans are authored passages but ${glosses} rendered as such`);
  }
  if (!bad)
    ok(
      `${quotes} verbatim spans render as cited quotations and ${glosses} authored passages render as attributed prose; ` +
        `${cited} cite attributes all resolve to a recorded source`,
    );
}

console.log(
  "\n  ..    NOT CHECKED: whether a cite URL still resolves over the network, which " +
    "this project does not verify at build time; whether the quoted text matches " +
    "the source, which is `check:provenance`; and citations on guide pages, which " +
    "carry spans but no Article citation schema yet.",
);

console.log(failed ? "\nQuote check FAILED." : "\nQuote check passed.");
process.exit(failed ? 1 : 0);
