/**
 * The resolution test corpus. WRITTEN BEFORE THE NORMALISER, deliberately.
 *
 * CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 8 item 2 and assertion T1. The
 * order matters and is the point: a normaliser written first defines what
 * "correct" means by what it happens to do, and a corpus written afterwards
 * records that behaviour rather than testing it. Every fixture below was taken
 * from a brief BEFORE any resolution code existed, so the expectations are the
 * research's, not the implementation's.
 *
 * WHERE THE FIXTURES COME FROM. These are real recorded user queries, which is
 * what makes them the right fixtures rather than invented ones. Each carries
 * the brief that recorded it. ST-02's Section 2.3 draft table is the richest
 * source: it maps booking strings to paragraphs and it was written by a
 * researcher reading the statute, not by anyone thinking about a decoder.
 *
 * THE HALF THAT MATTERS MORE. A corpus of things that must resolve tests that
 * the tool answers. It cannot test the property the concept document says the
 * tool is FOR, which is that the tool refuses rather than guessing. So roughly
 * half of these fixtures are strings that must NOT resolve, each with the
 * reason it must not, and T1 fails if any of them produces an answer. A
 * decoder that resolves everything would pass a resolve-only corpus perfectly.
 *
 * ST-02 states the standard this file is built to, about its own table:
 *
 *   "One related search cannot be mapped and must not be guessed. `Fss
 *   possession of controlled substance while driving` does not correspond to
 *   any statute fetched this session. Do not invent a section for it."
 */

/** Why a string does not resolve. Each is a distinct, reportable state. */
export type RefusalReason =
  /** The input is not a statute citation at all: a name, a description, prose. */
  | "not-a-citation"
  /** Parsed as a citation, but the section is in no verified table. */
  | "section-not-in-corpus"
  /** The section is recorded but the record holds no paragraph rows. */
  | "section-has-no-rows"
  /**
   * The paragraph named is deeper than the record reaches. The tool holds an
   * ancestor and deliberately does NOT fall back to it (Section 10).
   */
  | "deeper-than-record"
  /** A federal cite whose title contradicts the title the table records. */
  | "title-mismatch"
  /** A citation shape the normaliser cannot reduce to one canonical key. */
  | "unnormalisable";

export type Expectation =
  /**
   * Resolves, and every returned row sits at exactly this canonical cite.
   * `rows` is asserted where the brief or the record fixes it.
   */
  | { kind: "paragraph"; cite: string; rows?: number }
  /**
   * Resolves to MORE THAN ONE paragraph and shows all of them. This is not a
   * weaker expectation than `paragraph`: the concept document requires the
   * tool to show every match and never pick, so "shows N" is the assertion.
   */
  | { kind: "shows-all"; under: string; atLeast: number; mustInclude?: string[] }
  /** Does not resolve, for this stated reason. */
  | { kind: "refuse"; reason: RefusalReason };

export type CorpusCase = {
  /** The string, exactly as a person would type or paste it. */
  input: string;
  /** The brief that recorded this query, or the document that requires it. */
  source: string;
  expect: Expectation;
  /** Why this fixture earns its place. */
  why: string;
};

export const CORPUS: CorpusCase[] = [
  // ------------------------------------------------------------------
  // ST-02 drug possession. Section 2.3's charging-string table, which is the
  // closest thing in the research to a specification of this tool, written by
  // a researcher reading F.S. 893.13 rather than by anyone designing software.
  // ------------------------------------------------------------------
  {
    input: "893.13 6a",
    source: "ST-02 Section 2.3 table; related search `FL 893.13 6a`",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(a)" },
    why: "The canonical shape: section, space, run-together subdivision. ST-02 records the target as F.S. 893.13(6)(a), possession without a valid prescription.",
  },
  {
    input: "FL 893.13 6a",
    source: "ST-02, recorded related search, verbatim",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(a)" },
    why: "A state-abbreviation prefix. Must reach the same paragraph as the bare form, or the prefix silently changes the answer.",
  },
  {
    input: "893.13 6b",
    source: "ST-02, recorded related search, verbatim",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(b)" },
    why: "TOOLS.md's own example of the audience: nobody searches 893.13 6b out of curiosity. ST-02 fixes the target as 20 grams or less of cannabis, first degree misdemeanor.",
  },
  {
    input: "893.13 6B",
    source: "ST-02 Section 2.3 table, upper-case as the table writes it",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(b)" },
    why: "THE CASING FIXTURE, and it asserts two different things at once. Case must not change WHICH paragraph is reached: booking sheets are upper-case throughout and the statute is lower-case. And the citation shown back must be the STATUTE'S casing, `(6)(b)`, not the reader's `6B`. Echoing the input's case would make the tool agree with whatever was typed, which is the opposite of Section 4 item 1's purpose. Its federal mirror is the 1030(a)(2)(A) fixture below, where the correct answer is a CAPITAL at the third level; a rule that simply lower-cased everything would pass here and fail there.",
  },
  {
    input: "893.13 6C",
    source: "ST-02 Section 2.3 table",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(c)" },
    why: "The third row of the recorded table, kept so the fixture set is the table rather than a sample of it.",
  },
  {
    input: "893.13 6D",
    source: "ST-02 Section 2.3 table",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(d)" },
    why: "The fourth row. (6)(d) is a second degree misdemeanor, the only one in the group, so a resolver that collapsed the group would still have to get this one wrong to be caught.",
  },
  {
    input: "893.13 6A DRUGS POSSESS CNTRL SUB WO PRESCRIPTION",
    source: "ST-02 line 92, the literal string on a Hillsborough booking sheet",
    expect: { kind: "paragraph", cite: "F.S. 893.13(6)(a)" },
    why: "THE PASTE CASE. This is what is actually on the paper, and the tool's input is described as pasted text. The trailing words are a booking description; none of them could be a subdivision, so dropping them is not a guess.",
  },
  {
    input: "893.147 2",
    source: "ST-02 Section 2.3 table",
    expect: { kind: "paragraph", cite: "F.S. 893.147(2)" },
    why: "A space-separated single subdivision, and a different section, so the parse cannot be special-cased to 893.13.",
  },

  // ------------------------------------------------------------------
  // W4-01 sexual battery, and the chart-collision fixture.
  // ------------------------------------------------------------------
  {
    input: "794.011 8b",
    source: "W4-01, recorded related search; TOOLS.md evidence table",
    expect: { kind: "paragraph", cite: "F.S. 794.011(8)(b)", rows: 1 },
    why: "Points at the familial or custodial authority provision that no page in the market discusses. `rows: 1` is asserted deliberately: this cite ALSO appears in the 921.0022 chart carrying a DIFFERENT degree, so a second row here means the chart got into the corpus. This fixture is T10 in the corpus.",
  },

  // ------------------------------------------------------------------
  // ST-03 battery. The boundary query, and the fixture that proves the tool
  // does not fall back to the section.
  // ------------------------------------------------------------------
  {
    input: "784.03 1A1",
    source: "ST-03, recorded related search `784.03 1A1 domestic battery`",
    expect: { kind: "refuse", reason: "deeper-than-record" },
    why: "THE NO-FALLBACK FIXTURE. ST-03 says F.S. 784.03(1)(a)1. is quoted on this site, but the AUDITED TABLE stops at 784.03(1)(a): there is no row at sub-subparagraph depth. Section 10 forbids falling back to the ancestor, so this refuses. It is the single most important must-not-resolve case, because resolving it would look completely correct to a reader.",
  },
  {
    input: "784.03 1A1 domestic battery",
    source: "ST-03, the recorded string verbatim",
    expect: { kind: "refuse", reason: "deeper-than-record" },
    why: "The same refusal must survive the trailing words. ST-03 also records that there is no domestic battery statute in Florida, so a tool that resolved this would be answering a question whose premise is wrong.",
  },
  {
    input: "Fss 784.03",
    source: "TOOLS.md item 3, 'what it must do, at minimum'",
    expect: {
      kind: "shows-all",
      under: "F.S. 784.03",
      atLeast: 4,
      mustInclude: ["F.S. 784.03(1)(a)", "F.S. 784.03(1)(b)", "F.S. 784.03(2)"],
    },
    why: "A section with no subdivision named. TOOLS.md requires the string to work; Section 10 forbids picking one paragraph for it. So it shows every paragraph in the section and says the document's own numbers decide. Note 784.03(1)(a) carries NO degree, which is concept finding 3 arriving inside a real fixture.",
  },

  // ------------------------------------------------------------------
  // TOOLS.md's four named Florida input forms, and the federal two.
  // ------------------------------------------------------------------
  {
    input: "F.S. 812.014(2)(c)",
    source: "TOOLS.md item 3, named input form",
    expect: { kind: "shows-all", under: "F.S. 812.014(2)(c)", atLeast: 15 },
    why: "Fully punctuated, and a paragraph that is BOTH a record and a parent: the record holds two flush-language rows AT (2)(c) and thirteen subparagraphs beneath it. All fifteen show. This fixture caught a real bug, a resolver that returned on the exact hit and dropped the thirteen children without a signal. It is the shape the concept document calls trap 5.",
  },
  {
    input: "18 usc 2252",
    source: "W4-04; 70/month Florida, 20/month Tampa DMA, the second-largest statute-number term in the corpus",
    expect: { kind: "shows-all", under: "18 U.S.C. 2252", atLeast: 5 },
    why: "THE HIGHEST-VOLUME FEDERAL FIXTURE, and the one D33 was decided for. Every row carries no degree. The table holds only the (b) penalty paragraphs, and two of them share the cite (b)(1) while three share (b)(2), so this also tests duplicate cites within one section.",
  },
  {
    input: "18 U.S.C. § 1343",
    source: "TOOLS.md item 3, named federal input form",
    expect: { kind: "paragraph", cite: "18 U.S.C. 1343", rows: 3 },
    why: "Section-level with the full formal punctuation. All three rows in the 1343 table carry the IDENTICAL cite `18 U.S.C. 1343` and nothing sits beneath them, so this is an exact match that resolves to THREE records. `rows: 3` is the assertion: any resolver that assumed one row per cite returns one and silently drops two.",
  },
  {
    input: "21 usc 841",
    source: "FED-03; 140/month Florida, the largest verified statute-number figure in the corpus",
    expect: { kind: "shows-all", under: "21 U.S.C. 841", atLeast: 20 },
    why: "The largest measured term. Its rows are written `§841(a)(1)`, with no title and no U.S.C., so the section must be recovered from the table key and the title from the table's own cite field.",
  },
  {
    input: "18 usc 841",
    source: "Constructed from the corpus, not from a brief. Recorded as constructed.",
    expect: { kind: "refuse", reason: "title-mismatch" },
    why: "THE WRONG-TITLE FIXTURE. Section 841 is in title 21, not 18. A resolver that ignores the title returns the drug-trafficking statute to someone who typed a different title, which is a confident answer to a question they did not ask. The one fixture here that is constructed rather than recorded, because the corpus of real queries contains no wrong-title example and the failure is silent.",
  },
  {
    input: "18 u.s.c. 924(c)",
    source: "W2-03 / FED-07, recorded related search `18 U.S.C. § 924(c)`",
    expect: { kind: "shows-all", under: "18 U.S.C. 924(c)", atLeast: 9 },
    why: "A parent paragraph in a federal section: the record holds 924(c)(1)(A)(i) downward and nothing at (c) itself. The single most-searched federal gun provision, and it must not pick one of its nine children.",
  },

  {
    input: "18 usc 1030",
    source: "FED-02 computer and internet crimes; 40/month Florida, recorded",
    expect: { kind: "shows-all", under: "18 U.S.C. 1030", atLeast: 50 },
    why: "THE PARTIAL-TABLE FIXTURE, and it was added because the gate's own self-test found T5 had nothing to run against. 1030 is one of the five tables recorded `partial`, so every row it returns must carry the D34 mark. It is also a measured query, which is what makes it the right fixture rather than a constructed one, and its 60 rows are written as bare paths like `(a)(2)(A)` whose section exists only in the table key.",
  },
  {
    input: "18 usc 1030 (a)(2)(A)",
    source: "Constructed from the FED-02 query, to reach a single partial paragraph.",
    expect: { kind: "paragraph", cite: "18 U.S.C. 1030(a)(2)(A)" },
    why: "The partial mark must survive a resolution to ONE paragraph, not only a section-level list. A mark shown on the crowded answer and dropped on the precise one would be exactly backwards: the precise answer is the one a reader trusts. The expected cite also fixes the CASE: the Code writes (a)(2)(A) with a capital at the third level, and the tool must echo the statute's casing rather than the reader's.",
  },

  // ------------------------------------------------------------------
  // Must NOT resolve. Each is a real recorded query except where noted.
  // ------------------------------------------------------------------
  {
    input: "Fss possession of controlled substance while driving",
    source: "ST-02, recorded related search, and ST-02's own explicit instruction",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "THE CANONICAL REFUSAL. ST-02: 'does not correspond to any statute fetched this session. Do not invent a section for it.' A researcher reading the statutes could not map it. The tool must not do better than the research by guessing.",
  },
  {
    input: "Fss possession of controlled substance",
    source: "ST-02, recorded related search",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "An offense NAME with an Fss prefix. The prefix makes it look like a citation and it carries no number. Refused as out of scope rather than mapped by name, because name-matching is the fuzzy-matching Section 10 forbids.",
  },
  {
    input: "Fss battery",
    source: "ST-03, recorded related search",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "Same shape, different silo, kept because the tool must refuse it identically whether or not a battery page exists to tempt a link.",
  },
  {
    input: "Drug equip possess and or use",
    source: "ST-02, recorded related search, a booking description verbatim",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "ST-02 CAN map this one, to F.S. 893.147(1), and the tool still refuses it. That is deliberate: the mapping is a page's editorial content, and a decoder that maps booking descriptions by name is doing nearest-match under another name.",
  },
  {
    input: "Fss sexual battery Jury Instructions",
    source: "W4-01, recorded related search, graded 'REFUSE as a target'",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "The research already decided this query is not ours: the searcher wants the flcourts.gov instruction document. The tool agrees rather than reaching for the nearest statute.",
  },
  {
    input: "18 U.S.C. § 922(g)",
    source: "W2-03 / FED-07, recorded related search",
    expect: { kind: "refuse", reason: "section-not-in-corpus" },
    why: "A REAL, extremely common federal gun charge for which this project has NO verified table. The tool has 924 and would look authoritative resolving 922 to it. It must say it does not have 922 instead.",
  },
  {
    input: "18 U.S.C. § 1955",
    source: "FED-01, recorded related search",
    expect: { kind: "refuse", reason: "section-not-in-corpus" },
    why: "Adjacent by number to 1956, which IS in the corpus. Off-by-one section numbers are the neighbouring-key failure a resolver invites.",
  },
  {
    input: "18 U.S.C. § 3553(f)",
    source: "FED-03, recorded related search",
    expect: { kind: "refuse", reason: "section-has-no-rows" },
    why: "THE EMPTY-TABLE FIXTURE. 3553 is a recorded, whole-section, audited table with ZERO rows. 'The section is in the corpus' and 'the corpus can answer about this section' are different facts, and a resolver that checks only the first returns an empty result set as a successful resolution.",
  },
  {
    input: "921.0022(3)(a)",
    source: "Constructed from TOOLS.md's ship condition. Recorded as constructed.",
    expect: { kind: "refuse", reason: "section-not-in-corpus" },
    why: "T10 stated as a fixture. The 921.0022 chart is 624 rows sitting inside STATUTES and is excluded by the ship condition, so the chart is not resolvable even by its own section number.",
  },
  {
    input: "849.09(1)(a)",
    source: "Constructed. The cite exists in the corpus ONLY inside the chart.",
    expect: { kind: "refuse", reason: "section-not-in-corpus" },
    why: "T10's harder half. This cite IS present in STATUTES, as a 921.0022 chart row, and in no operative table. If chart exclusion is implemented as anything less than a filter on the index, this string resolves and the ship condition is broken silently.",
  },
  {
    input: "Tampa City Code 14-26",
    source: "Concept document Section 12 open question 5",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "Municipal ordinances appear on booking sheets and are in no audited table. Open question 5's recommendation is out of scope, said explicitly in the refusal copy rather than silently absent.",
  },
  {
    input: "O.C.G.A. 16-13-30",
    source: "Concept document Section 10, 'a citation from another state'",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "Another state's code, in another state's format. It must be refused as out of scope and must never be pattern-matched into a Florida section by its digits.",
  },
  {
    input: "",
    source: "Constructed. The empty state.",
    expect: { kind: "refuse", reason: "not-a-citation" },
    why: "An empty input must be a refusal state and not a crash, and must not render the refusal copy at a reader who has typed nothing. The caller distinguishes these; the resolver still has to return cleanly.",
  },
  {
    input: "893.13",
    source: "Constructed from the ST-02 family.",
    expect: { kind: "shows-all", under: "F.S. 893.13", atLeast: 40 },
    why: "A bare Florida section with 47 rows. Included among the refusals on purpose: it is the case where showing all matches is a POOR answer and is still the right one, because picking would be worse. The page's copy has to carry that weight rather than the resolver softening it.",
  },
];

/** The recorded-query fixtures, excluding the four constructed ones. */
export const RECORDED_CASES = CORPUS.filter(
  (c) => !/^Constructed/.test(c.source),
);

export const MUST_REFUSE = CORPUS.filter((c) => c.expect.kind === "refuse");
export const MUST_RESOLVE = CORPUS.filter((c) => c.expect.kind !== "refuse");
