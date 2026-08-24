/**
 * The cite-normalisation layer. THIS IS THE TOOL, not a detail of it.
 *
 * CHARGING-DOCUMENT-DECODER-CONCEPT.md finding 2 and Section 8 item 1. The
 * same conceptual paragraph is written four ways across the audited tables:
 *
 *     316.193(2)(a)3.        a Florida section with a subparagraph
 *     (a)(1)                 a bare path, its section living in the table key
 *     §841(a)(1)             a section sign, no title, no U.S.C.
 *     18 U.S.C. 1343         a title, a section, and no path at all
 *
 * and a reader types a fifth and sixth way off their own paperwork:
 *
 *     893.13 6a              spaces, run-together subdivision, lower case
 *     784.03 1A1             no spaces at all, mixed case, three levels deep
 *
 * A decoder built on a key match against `STATUTES` resolves some of these,
 * fails others, and gives no signal which. So every cite, from the tables and
 * from the reader alike, goes through ONE parser into ONE canonical shape, and
 * matching happens only in that shape.
 *
 * THE DESIGN RULE, from Section 10: this parser reports what it could not do
 * rather than doing its best. Every function here returns either a parse or a
 * stated reason, never a nearest guess. `null` is not a return value; a
 * refusal with a reason is. A reader can see a refusal. They cannot see a
 * wrong answer.
 */
import type { RefusalReason } from "./corpus.ts";

export type Jurisdiction = "florida" | "federal";

/**
 * A citation reduced to structure.
 *
 * `path` is the subdivision chain, lower-cased, with every notation the corpus
 * uses flattened to the same token list. 316.193(2)(a)1.a. and a reader's
 * "316.193 2a1a" both become ["2","a","1","a"].
 *
 * `qualifier` is the prose some table cites carry to name a span within a
 * paragraph: "(second sentence)", "(value prong)", "(flush language following
 * subparagraph 13.)". It is NOT part of the key. Two rows that differ only by
 * qualifier are two real, distinct records of the same paragraph, and the tool
 * shows both rather than choosing.
 */
export type ParsedCite = {
  jurisdiction: Jurisdiction;
  /** Federal title, where the citation states one. Florida cites carry none. */
  title: number | null;
  /** "893.13", "2252", "1028A". */
  section: string;
  /** Lower-cased. THE MATCH KEY. Case must never decide whether two cites are one. */
  path: string[];
  /**
   * The same tokens in the casing they were written in, for DISPLAY ONLY.
   *
   * The U.S. Code nests (a)(2)(A)(i): the third level is a CAPITAL letter and
   * the fourth is a lower-case roman. Matching has to fold that case away, or
   * a reader typing "1030 a2a" reaches nothing. Displaying the folded form
   * instead of the statute's own is a different failure: the browser check
   * rendered "18 U.S.C. 1030(a)(2)(a)" for a paragraph the Code writes
   * "1030(a)(2)(A)", and Section 4 item 1's whole purpose is that the reader
   * can see what was matched.
   *
   * So the key is folded and the label is not, and they are separate fields
   * rather than one field with a formatting rule, because a formatting rule is
   * something a later change can forget to apply.
   *
   * DECISIONS.md D37 and HUNT-LIST Instance 17. Twelve green gates could not
   * see this defect, because every one of them compared through the same fold
   * the matcher uses. A browser found it.
   */
  displayPath: string[];
  qualifier: string | null;
};

export type ParseResult =
  | { ok: true; cite: ParsedCite }
  | { ok: false; reason: RefusalReason; detail: string };

/**
 * Words that introduce a citation and carry no information once stripped.
 *
 * `fss` is the one that matters: it is how Floridians write "Florida Statutes"
 * in a search box and it appears in six recorded queries. Stripping it is
 * safe; what is NOT safe is treating its PRESENCE as evidence that what
 * follows is a citation, which is why `Fss battery` still refuses below.
 */
const LEADING_NOISE =
  /^(?:\s*(?:fss?|f\.?\s*s\.?\s*a?\.?|fla\.?|florida(?:\s+statutes?)?|fl|state\s+of\s+florida|statutes?|sec(?:tion)?s?|ss?|§+|chapter|ch\.?|under|per|title)\b[\s.,:;-]*)+/i;

/** `18 U.S.C. § 2252`, `18 usc 2252`, `18 U. S. C. 2252`, `Title 18 section 2252`. */
const FEDERAL_TITLE = /^\s*(\d{1,2})\s*u\.?\s*s\.?\s*c\.?\s*(?:a\.?)?\s*(?:§+\s*)?/i;

/** A Florida section always carries a dot; a USC section never does. */
const FLORIDA_SECTION = /^(\d{1,3}\.\d{1,4})/;
const FEDERAL_SECTION = /^(\d{1,4}[A-Za-z]?)(?![\d.])/;

/**
 * A token that could be a subdivision, so that trailing prose can be told from
 * trailing citation.
 *
 * This is the rule that makes the paste case safe. ST-02's booking string is
 * "893.13 6A DRUGS POSSESS CNTRL SUB WO PRESCRIPTION": the citation ends at
 * "6A" and everything after is a description. Dropping it is only defensible
 * if nothing dropped could have been part of the citation, so every dropped
 * token is checked against this and a match aborts the parse as ambiguous
 * rather than being silently discarded.
 *
 * Single letters and roman numerals qualify. Ordinary words do not, because
 * they contain letters roman numerals cannot use.
 */
const SUBDIVISION_TOKEN = /^(?:\d{1,3}|[a-z]{1,2}|[ivxlc]+)$/i;

/** A run of digits or a run of letters: "1A1" splits to 1, A, 1. */
const RUNS = /\d+|[A-Za-z]+/g;

/**
 * Split a run-together subdivision string into path tokens.
 *
 * "6a" -> ["6","a"], "1A1" -> ["1","a","1"], "2c13" -> ["2","c","13"].
 *
 * Alternating runs, NOT character by character. Character-splitting would turn
 * "2c13" into ["2","c","1","3"] and reach a paragraph that exists, which is
 * the silent-wrong this whole module is arranged against: 812.014(2)(c)1. and
 * 812.014(2)(c)13. are both real and are different offenses.
 */
function splitRuns(chunk: string): string[] {
  return (chunk.match(RUNS) ?? []).map((t) => t.toLowerCase());
}

/** The same split, keeping the case the reader or the table actually wrote. */
function splitRunsRaw(chunk: string): string[] {
  return chunk.match(RUNS) ?? [];
}

/**
 * Pull a trailing qualifier off a table cite.
 *
 * Three notations appear in the corpus and all three are handled here rather
 * than in three places: " (second sentence)", " [first clause]", and the
 * comma form ", flush language following paragraph (c)".
 *
 * THE COMMA FORM IS THE TRAP. "893.13(4), flush language following paragraph
 * (c)" contains a parenthesised "(c)" INSIDE the qualifier. A parser that
 * consumes subdivisions greedily reads it as 893.13(4)(c), a paragraph that
 * does not exist, and the row disappears from the index without a word. So the
 * qualifier is removed before any subdivision is consumed, never after.
 */
function splitQualifier(raw: string): { body: string; qualifier: string | null } {
  const trimmed = raw.trim();

  // The comma form: a comma followed by a word, not by a subdivision.
  const comma = trimmed.match(/^(.*?),\s+([a-z][^,]*.*)$/i);
  if (comma && !/^\(/.test(comma[2])) {
    return { body: comma[1].trim(), qualifier: comma[2].trim() };
  }

  // The bracket and trailing-parenthetical forms. The parenthetical must start
  // with a letter: "(2)(a)" is a subdivision, "(value prong)" is a qualifier.
  const bracket = trimmed.match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
  if (bracket) return { body: bracket[1].trim(), qualifier: bracket[2].trim() };

  const paren = trimmed.match(/^(.*?)\s+\(([a-z][^)]*(?:\([^)]*\)[^)]*)*)\)\s*$/i);
  if (paren) return { body: paren[1].trim(), qualifier: paren[2].trim() };

  return { body: trimmed, qualifier: null };
}

/**
 * Parse any citation, from a table row or from a reader.
 *
 * ONE parser for both, deliberately. Two parsers would drift, and a drift
 * between the shape the index is built in and the shape a query is reduced to
 * is invisible: every query simply stops matching, and an index that returns
 * nothing looks exactly like a reader who typed something unknown.
 */
export function parseCite(raw: string, opts: { sectionFallback?: string } = {}): ParseResult {
  if (typeof raw !== "string" || !raw.trim()) {
    return { ok: false, reason: "not-a-citation", detail: "empty input" };
  }

  const { body, qualifier } = splitQualifier(raw);
  let rest = body.replace(/\s+/g, " ").trim();

  // A multi-cite row ("18 U.S.C. 2251(c)(2)(A), (c)(2)(B)", "817.568(5) and
  // 817.568(10)") is recorded as covering more than one paragraph. The primary
  // path is parsed here; `expandMultiCite` below returns the rest.
  rest = rest.split(/\s+(?:and|or)\s+/i)[0].split(/,\s*(?=\()/)[0].trim();

  let jurisdiction: Jurisdiction | null = null;
  let title: number | null = null;

  // Federal title first: "18 U.S.C." must be consumed before the noise
  // stripper, or "s." inside "U.S.C." is eaten as a section marker.
  const fed = rest.match(FEDERAL_TITLE);
  if (fed) {
    title = Number(fed[1]);
    jurisdiction = "federal";
    rest = rest.slice(fed[0].length).trim();
  } else {
    const before = rest;
    rest = rest.replace(LEADING_NOISE, "").trim();
    if (/\b(?:fss?|fla|florida|fl)\b/i.test(before.slice(0, before.length - rest.length))) {
      jurisdiction = "florida";
    }
    // A second pass: "Fss 18 usc 2252" and "section 18 U.S.C. 2252" exist.
    const fed2 = rest.match(FEDERAL_TITLE);
    if (fed2) {
      title = Number(fed2[1]);
      jurisdiction = "federal";
      rest = rest.slice(fed2[0].length).trim();
    }
  }
  rest = rest.replace(/^§+\s*/, "").trim();

  // ---------------------------------------------------------------- section
  let section: string;
  const flMatch = rest.match(FLORIDA_SECTION);
  if (flMatch) {
    section = flMatch[1];
    jurisdiction = "florida";
    rest = rest.slice(flMatch[0].length).trim();
  } else {
    const fedMatch = rest.match(FEDERAL_SECTION);
    if (fedMatch && jurisdiction !== "florida") {
      section = fedMatch[1];
      jurisdiction = "federal";
      rest = rest.slice(fedMatch[0].length).trim();
    } else if (opts.sectionFallback) {
      // A bare table cite: "(a)(1)" in the 1030 and 2252 tables. Its section
      // is the table key, which is the ONLY place it exists.
      section = opts.sectionFallback;
      jurisdiction = section.includes(".") ? "florida" : "federal";
    } else {
      return {
        ok: false,
        reason: "not-a-citation",
        detail:
          "no statute section found. A citation needs a section number, like " +
          "893.13 or 2252.",
      };
    }
  }
  if (!jurisdiction) jurisdiction = section.includes(".") ? "florida" : "federal";

  // ---------------------------------------------------------------- path
  const path: string[] = [];
  const displayPath: string[] = [];
  for (;;) {
    rest = rest.replace(/^[\s.,:;-]+/, "");
    if (!rest) break;

    // Parenthesised: (2), (a), (aa), (III), (b)
    const paren = rest.match(/^\(\s*([0-9A-Za-z]{1,4})\s*\)/);
    if (paren) {
      path.push(paren[1].toLowerCase());
      displayPath.push(paren[1]);
      rest = rest.slice(paren[0].length);
      continue;
    }

    // Florida's dotted subparagraphs: "3.", "1.", "a.", "b."
    const dotted = rest.match(/^([0-9]{1,3}|[A-Za-z])\./);
    if (dotted) {
      path.push(dotted[1].toLowerCase());
      displayPath.push(dotted[1]);
      rest = rest.slice(dotted[0].length);
      continue;
    }

    // A reader's bare chunk: "6a", "1A1", "2 c 3". Only accepted where every
    // remaining token could be a subdivision; the first token that could not
    // be one ends the citation and the rest is treated as a description.
    const chunk = rest.match(/^([0-9A-Za-z]+)(?=$|[\s.,)])/);
    if (chunk && SUBDIVISION_TOKEN.test(chunk[1])) {
      path.push(...splitRuns(chunk[1]));
      displayPath.push(...splitRunsRaw(chunk[1]));
      rest = rest.slice(chunk[0].length);
      continue;
    }
    if (chunk && /^\d+[a-z]+\d*$/i.test(chunk[1])) {
      // "6a", "1A1", "2c13": a digit run followed by letters, which no single
      // SUBDIVISION_TOKEN covers but which is the commonest reader shape.
      path.push(...splitRuns(chunk[1]));
      displayPath.push(...splitRunsRaw(chunk[1]));
      rest = rest.slice(chunk[0].length);
      continue;
    }
    break;
  }

  // ------------------------------------------------- trailing text is prose
  // Everything left is description, and is only DISCARDED if nothing in it
  // could have been part of the citation. A stray subdivision-shaped token
  // after the description means the input is not one citation, and the tool
  // refuses rather than deciding which reading was meant.
  const leftovers = rest
    .replace(/[()[\].,;:/-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  for (const token of leftovers) {
    if (SUBDIVISION_TOKEN.test(token) && /\d/.test(token)) {
      return {
        ok: false,
        reason: "unnormalisable",
        detail:
          `"${raw.trim()}" has more numbers after the citation ("${token}"), so it ` +
          `could be read more than one way. Enter the citation on its own.`,
      };
    }
  }

  return {
    ok: true,
    cite: { jurisdiction, title, section, path, displayPath, qualifier },
  };
}

/**
 * The extra paragraphs a multi-cite table row also covers.
 *
 * Two shapes exist in the audited tables: "18 U.S.C. 2251(c)(2)(A), (c)(2)(B)"
 * and "817.568(5) and 817.568(10) (interaction, unresolved)". Both are ONE row
 * of verified text that answers for MORE THAN ONE paragraph, so the row is
 * indexed under every path it names. Indexing it under only the first would
 * make the second paragraph unresolvable while the text for it sat in the
 * corpus.
 */
export function expandMultiCite(raw: string, sectionFallback: string): ParsedCite[] {
  const { body } = splitQualifier(raw);
  const parts = body.split(/\s+(?:and|or)\s+|,\s*(?=\()/i).map((p) => p.trim()).filter(Boolean);
  if (parts.length <= 1) return [];
  const out: ParsedCite[] = [];
  for (const part of parts.slice(1)) {
    const r = parseCite(part, { sectionFallback });
    if (r.ok) out.push(r.cite);
  }
  return out;
}

/**
 * The canonical key. Matching happens here and nowhere else.
 *
 * The TITLE IS NOT IN THE KEY, on purpose. Table rows mostly omit it (`§841`)
 * while readers mostly supply it (`21 usc 841`), so keying on it would make
 * every federal query miss. The title is checked separately, against the
 * table's own cite, so a wrong title is a stated refusal rather than a miss.
 */
export function citeKey(c: ParsedCite): string {
  return `${c.jurisdiction}:${c.section}:${c.path.join(".")}`;
}

/** The key of the paragraph one level up, or null at a section root. */
export function parentKey(c: ParsedCite): string | null {
  if (!c.path.length) return null;
  return citeKey({ ...c, path: c.path.slice(0, -1) });
}

/**
 * How this project writes a citation back to a reader.
 *
 * Florida gets `F.S. 893.13(6)(a)`; federal gets `18 U.S.C. 2252(b)(1)`. The
 * output is the tool's first promise, per Section 4 item 1: the reader sees
 * what was matched, so a normalisation they did not intend is visible to them
 * rather than hidden behind a correct-looking answer.
 */
export function formatCite(
  c: ParsedCite,
  opts: { title?: number | null; displayPath?: string[] } = {},
): string {
  const tokens = opts.displayPath ?? c.displayPath ?? c.path;
  const path = tokens.map((p) => `(${p})`).join("");
  if (c.jurisdiction === "florida") return `F.S. ${c.section}${path}`;
  const t = opts.title ?? c.title;
  return `${t ? `${t} U.S.C. ` : ""}${c.section}${path}`;
}
