/**
 * The search map, D66. One row per URL that is meant to be found in search:
 * the one search it is built to win, what the searcher wants, and the pages it
 * deliberately shares a subject with.
 *
 * WHY THIS EXISTS. Pages compete in search when two of them go after the same
 * search with the same intent, not when they share a topic. A service page and
 * a blog post on the same charge are fine as long as the service page targets
 * the hire search ("sexual battery lawyer Tampa") and the post targets a
 * question ("how long does Florida have to file sexual battery charges"). The
 * research briefs already assign each page its primary query and say which
 * queries belong to a different page, but nothing enforced it, so a blog post
 * written later could quietly target a service page's search and no gate would
 * notice. check:search-map (data) and check:seo (built HTML) read this file.
 *
 * ADDING A PAGE. Every built page is either a row here or listed in
 * `NOT_TARGETED` with the reason. A blog post, insight or case result gets a
 * row the day it is written: blogs and insights are `answer` or `process`, and
 * may not use hire words ("lawyer", "attorney") in their primary query; case
 * results are `proof` and need no primary query at all.
 *
 * Primary queries are copied from the brief named in `source`, not invented.
 * A page whose brief recorded no primary query has `primary: null` and a note.
 */

export type SearchIntent =
  /** Wants to hire someone: service pages, hubs, the home page. */
  | "hire"
  /** Wants an answer to one question: blog posts, insights. */
  | "answer"
  /** Wants a process explained: guides. */
  | "process"
  /** Wants to work something out: the tools. */
  | "tool"
  /** Wants evidence: case results. Not a ranking target. */
  | "proof"
  /** Looking for this firm or a named attorney. */
  | "navigate";

export type SearchKind =
  | "home"
  | "hub"
  | "charge"
  | "injury"
  | "guide"
  | "tool"
  | "blog"
  | "insight"
  | "result"
  | "bio"
  | "page";

export type SearchTarget = {
  href: string;
  kind: SearchKind;
  intent: SearchIntent;
  /** The one search this page is built to win, as the brief records it. */
  primary: string | null;
  /**
   * The words naming the page's subject. They must appear in the page's
   * <title> and its H1 (check:seo), because a page that does not say what it
   * is about in either place is not about it as far as search is concerned.
   */
  topic: string;
  /**
   * Pages that share this page's subject on purpose, such as the federal and
   * Florida money laundering pages. Must be declared on both rows, and the
   * two pages must link to each other (check:seo), so search engines and
   * readers can tell which is which.
   */
  siblings?: string[];
  /**
   * The H1 is a brand tagline by client decision, not the subject (D77). The
   * topic must still be in the <title>; check:seo skips the H1 half of P5.
   */
  h1Tagline?: true;
  /** Where the primary query and the sibling split are recorded. */
  source: string;
  note?: string;
};

/**
 * Built pages that are not meant to win a search of their own, with the
 * reason. check:seo fails on a built page that is in neither list.
 */
export const NOT_TARGETED: Record<string, string> = {
  "/contact": "Utility page. Reached from every call to action, not from search.",
  "/hmp-tasks-k7x2": "D127: the firm's private to-do list at an unlisted address; noindex.",
  "/resources": "Index of the resources section; links to the pages that target searches.",
  "/resources/articles": "Index page; each article carries its own row.",
  "/resources/tools-and-guides": "Index page; each tool and guide carries its own row.",
  "/results": "Index of case results; results are proof, not ranking targets.",
  "/attorneys": "Index of bios; each bio carries its own row.",
  "/about": "Firm page. Searched for by name, which the home page row covers.",
};

/** Intents that may use hire words in their primary query. */
export const HIRE_INTENTS: SearchIntent[] = ["hire", "navigate"];

/** "lawyer", "attorney", "law firm" and their plurals. */
export const HIRE_WORDS = /\b(lawyers?|attorneys?|law firms?|defen[cs]e firms?)\b/i;

const PLACE_WORDS = new Set([
  "tampa", "fl", "florida", "hillsborough", "county", "brandon", "bay", "near", "me",
  "middle", "district", "of",
]);
const STOP_WORDS = new Set(["a", "an", "the", "in", "for", "and", "to", "on", "is", "what"]);

/**
 * The subject words of a query: lower case, without place names, hire words
 * or stop words, singular. Two primaries with the same subject words and the
 * same intent family are going after the same search.
 */
export function subjectWords(query: string): string {
  return query
    .toLowerCase()
    .replace(HIRE_WORDS, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !PLACE_WORDS.has(w) && !STOP_WORDS.has(w) && w !== "defense")
    .map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w))
    .sort()
    .join(" ");
}

/** Hire and navigate compete with each other; answer and process do too. */
export const intentFamily = (i: SearchIntent) =>
  i === "hire" || i === "navigate" ? "hire" : i === "answer" || i === "process" ? "learn" : i;

export const searchMap: SearchTarget[] = [
  {
    href: "/criminal-defense/state/battery",
    kind: "charge",
    intent: "hire",
    primary: "battery lawyer Tampa",
    topic: "battery",
    siblings: ["/criminal-defense/state/domestic-violence"],
    source: "docs/research/briefs/ST-03-battery.md:135",
  },
  {
    href: "/criminal-defense/state/computer-crimes",
    kind: "charge",
    intent: "hire",
    primary: "computer crimes lawyer Tampa Florida",
    topic: "computer crime",
    siblings: ["/criminal-defense/federal/computer-internet-crimes"],
    source: "docs/research/briefs/ST-01-computer-crimes.md:79",
  },
  {
    href: "/criminal-defense/state/domestic-violence",
    kind: "charge",
    intent: "hire",
    primary: "domestic violence lawyer Tampa",
    topic: "domestic violence",
    siblings: ["/criminal-defense/state/battery"],
    source: "docs/research/briefs/W2-04-domestic-violence.md:15",
  },
  {
    href: "/criminal-defense/state/drug-possession",
    kind: "charge",
    intent: "hire",
    primary: "drug possession lawyer Tampa",
    topic: "drug possession",
    siblings: ["/criminal-defense/state/drug-trafficking"],
    source: "docs/research/briefs/ST-02-drug-possession.md:76",
  },
  {
    href: "/criminal-defense/state/drug-trafficking",
    kind: "charge",
    intent: "hire",
    primary: "drug trafficking attorney Tampa",
    topic: "drug trafficking",
    siblings: ["/criminal-defense/state/drug-possession", "/criminal-defense/federal/drug-trafficking"],
    source: "docs/research/briefs/W2-02-drug-trafficking.md:17",
  },
  {
    href: "/criminal-defense/state/dui",
    kind: "charge",
    intent: "hire",
    primary: "DUI lawyer Tampa",
    topic: "DUI",
    source: "docs/research/briefs/ST-04-dui.md:160",
  },
  {
    href: "/criminal-defense/state/grand-theft",
    kind: "charge",
    intent: "hire",
    primary: "grand theft attorney Tampa",
    topic: "grand theft",
    source: "docs/research/briefs/W1-03-grand-theft.md:18",
  },
  {
    href: "/criminal-defense/state/gun-crimes",
    kind: "charge",
    intent: "hire",
    primary: "gun charge lawyer Tampa",
    topic: "gun",
    siblings: ["/criminal-defense/federal/weapons-gun-offenses"],
    source: "docs/research/briefs/W2-03-gun-crimes.md:16",
  },
  {
    href: "/criminal-defense/state/homicide",
    kind: "charge",
    intent: "hire",
    primary: "homicide attorney Tampa",
    topic: "homicide",
    source: "docs/research/briefs/W4-03-homicide.md:244",
  },
  {
    href: "/criminal-defense/state/sex-crimes",
    kind: "charge",
    intent: "hire",
    primary: "sex crimes attorney Tampa",
    topic: "sex crime",
    siblings: ["/criminal-defense/state/sexual-battery", "/criminal-defense/federal/csam"],
    source: "docs/research/briefs/W4-02-sex-crimes.md:131",
  },
  {
    href: "/criminal-defense/state/sexual-battery",
    kind: "charge",
    intent: "hire",
    primary: "sexual battery attorney Tampa",
    topic: "sexual battery",
    siblings: ["/criminal-defense/state/sex-crimes"],
    source: "docs/research/briefs/W4-01-sexual-battery.md:108",
  },
  {
    href: "/criminal-defense/federal/computer-internet-crimes",
    kind: "charge",
    intent: "hire",
    primary: "federal computer crime lawyer Tampa",
    topic: "computer crime",
    siblings: ["/criminal-defense/state/computer-crimes"],
    source: "docs/research/briefs/FED-02-computer-internet-crimes.md:105",
  },
  {
    href: "/criminal-defense/federal/conspiracy-charges",
    kind: "charge",
    intent: "hire",
    primary: "federal conspiracy lawyer Tampa",
    topic: "conspiracy",
    source: "docs/research/briefs/FED-06-conspiracy-charges.md:48",
  },
  {
    href: "/criminal-defense/federal/csam",
    kind: "charge",
    intent: "hire",
    primary: "child pornography defense attorney Tampa",
    topic: "child pornography",
    siblings: ["/criminal-defense/state/sex-crimes"],
    source: "docs/research/briefs/W4-04-csam.md:117",
  },
  {
    href: "/criminal-defense/federal/drug-trafficking",
    kind: "charge",
    intent: "hire",
    primary: "federal drug trafficking lawyer Tampa",
    topic: "drug trafficking",
    siblings: ["/criminal-defense/state/drug-trafficking"],
    source: "docs/research/briefs/FED-03-drug-trafficking.md:50",
  },
  {
    href: "/criminal-defense/federal/healthcare-fraud",
    kind: "charge",
    intent: "hire",
    primary: "federal healthcare fraud attorney Tampa",
    topic: "health care fraud",
    siblings: ["/criminal-defense/white-collar/healthcare-fraud"],
    source: "docs/research/briefs/FED-04-healthcare-fraud.md:49",
  },
  {
    href: "/criminal-defense/federal/money-laundering",
    kind: "charge",
    intent: "hire",
    primary: "federal money laundering attorney Tampa",
    topic: "money laundering",
    siblings: ["/criminal-defense/white-collar/money-laundering"],
    source: "docs/research/briefs/FED-01-money-laundering.md:42",
  },
  {
    href: "/criminal-defense/federal/target-letter",
    kind: "charge",
    intent: "hire",
    primary: "federal target letter attorney Tampa",
    topic: "target letter",
    source: "docs/research/briefs/FED-08-target-letter-defense.md:48",
  },
  {
    href: "/criminal-defense/federal/weapons-gun-offenses",
    kind: "charge",
    intent: "hire",
    primary: "federal gun charges lawyer Tampa",
    topic: "gun",
    siblings: ["/criminal-defense/state/gun-crimes"],
    source: "docs/research/briefs/FED-07-weapons-gun-offenses.md:45",
  },
  {
    href: "/criminal-defense/federal/wire-mail-fraud",
    kind: "charge",
    intent: "hire",
    primary: "federal wire fraud lawyer Tampa",
    topic: "mail fraud",
    siblings: ["/criminal-defense/white-collar/wire-fraud"],
    source: "docs/research/briefs/FED-05-wire-mail-fraud.md:72",
  },
  {
    href: "/criminal-defense/white-collar/bank-fraud",
    kind: "charge",
    intent: "hire",
    primary: "bank fraud attorney Tampa",
    topic: "bank fraud",
    siblings: ["/criminal-defense/white-collar/ppp-loan-fraud"],
    source: "docs/research/briefs/WC-02-bank-fraud.md:72",
  },
  {
    href: "/criminal-defense/white-collar/corporate-fraud",
    kind: "charge",
    intent: "hire",
    primary: null,
    topic: "corporate fraud",
    siblings: ["/criminal-defense/white-collar/securities-fraud"],
    source: "none",
    note: "No brief. D12 reclassified it as a C9-exempt category overview (WC-03:12-16). WC-03:125 says 'The overview page holds the term' corporate fraud, but no brief records a primary query or grade for it.",
  },
  {
    href: "/criminal-defense/white-collar/embezzlement",
    kind: "charge",
    intent: "hire",
    primary: "embezzlement lawyer Tampa",
    topic: "embezzlement",
    source: "docs/research/briefs/W1-02-embezzlement.md:12",
  },
  {
    href: "/criminal-defense/white-collar/healthcare-fraud",
    kind: "charge",
    intent: "hire",
    primary: "Medicaid provider fraud attorney Florida",
    topic: "Medicaid fraud",
    siblings: ["/criminal-defense/federal/healthcare-fraud"],
    source: "docs/research/briefs/WC-01-healthcare-fraud.md:54",
  },
  {
    href: "/criminal-defense/white-collar/identity-theft",
    kind: "charge",
    intent: "hire",
    primary: "identity theft defense lawyer Tampa",
    topic: "identity theft",
    source: "docs/research/briefs/W2-06-identity-theft.md:22",
  },
  {
    href: "/criminal-defense/white-collar/money-laundering",
    kind: "charge",
    intent: "hire",
    primary: "money laundering defense attorney Tampa",
    topic: "money laundering",
    siblings: ["/criminal-defense/federal/money-laundering"],
    source: "docs/research/briefs/W2-05-money-laundering.md:17",
  },
  {
    href: "/criminal-defense/white-collar/ppp-loan-fraud",
    kind: "charge",
    intent: "hire",
    primary: "PPP loan fraud attorney Tampa",
    topic: "PPP loan fraud",
    siblings: ["/criminal-defense/white-collar/bank-fraud", "/criminal-defense/white-collar/wire-fraud"],
    source: "docs/research/briefs/OPP-01-ppp-loan-fraud.md:35",
  },
  {
    href: "/criminal-defense/white-collar/securities-fraud",
    kind: "charge",
    intent: "hire",
    primary: "securities fraud attorney Tampa",
    topic: "securities fraud",
    siblings: ["/criminal-defense/white-collar/corporate-fraud"],
    source: "docs/research/briefs/WC-03-securities-fraud.md:52",
  },
  {
    href: "/criminal-defense/white-collar/tax-evasion",
    kind: "charge",
    intent: "hire",
    primary: "tax evasion attorney Tampa",
    topic: "tax evasion",
    source: "docs/research/briefs/WC-04-tax-evasion.md:63",
  },
  {
    href: "/criminal-defense/white-collar/wire-fraud",
    kind: "charge",
    intent: "hire",
    primary: "wire fraud attorney Tampa",
    topic: "wire fraud",
    siblings: ["/criminal-defense/federal/wire-mail-fraud", "/criminal-defense/white-collar/ppp-loan-fraud"],
    source: "docs/research/briefs/W2-07-wire-fraud.md:18",
  },
  {
    href: "/criminal-defense",
    kind: "hub",
    intent: "hire",
    primary: "criminal defense attorney Tampa",
    topic: "criminal defense",
    source: "docs/research/keywords.md (cluster A head term, graded YEARS); D81",
    note: "The criminal defense overview and full charge list, the parent of the state, federal and white-collar hubs since D81.",
  },
  {
    href: "/criminal-defense/state",
    kind: "hub",
    intent: "hire",
    primary: null,
    topic: "state criminal defense",
    source: "keywords.md",
    note: "keywords.md grades Cluster A head terms ('criminal defense attorney Tampa' YEARS, keywords.md:39; 'criminal defense lawyer Tampa FL' YEARS, :40; 'felony lawyer Brandon FL' NOW, :46; 'violent crimes attorney Tampa' 6-12mo hub-and-spoke, :47) but assigns none to a page. No brief assigns a query to this hub.",
  },
  {
    href: "/criminal-defense/federal",
    kind: "hub",
    intent: "hire",
    primary: "Middle District of Florida federal criminal defense attorney",
    topic: "federal criminal defense",
    source: "docs/research/briefs/W1-01-middle-district-florida-hub.md:24",
  },
  {
    href: "/criminal-defense/white-collar",
    kind: "hub",
    intent: "hire",
    primary: "white collar criminal defense attorney Tampa",
    topic: "white-collar",
    source: "docs/research/keywords.md:225",
  },
  {
    href: "/personal-injury",
    h1Tagline: true,
    kind: "hub",
    intent: "hire",
    primary: null,
    topic: "personal injury",
    source: "none",
    note: "keywords.md covers criminal clusters only; no personal injury query recorded anywhere in briefs or keywords.md.",
  },
  {
    href: "/business-litigation",
    kind: "hub",
    intent: "hire",
    primary: null,
    topic: "business litigation",
    source: "none",
    note: "D116: added 2026-10-12 on client direction; no business query researched yet in keywords.md.",
  },
  {
    href: "/",
    h1Tagline: true,
    kind: "home",
    intent: "navigate",
    primary: null,
    topic: "criminal defense",
    source: "keywords.md",
    note: "keywords.md assigns no head term to the home page. Candidate head terms graded there: 'criminal defense attorney Tampa' YEARS (keywords.md:39), 'felony lawyer Brandon FL' NOW, 'home turf' (keywords.md:46, :102). Not assigned to any route.",
  },
  {
    href: "/resources/tools/charge-lookup",
    kind: "tool",
    intent: "tool",
    primary: null,
    topic: "statute number",
    source: "docs/research/briefs/TOOLS.md:289",
    note: "TOOLS.md Section 3 (charging-document decoder) records demand as a statute-string pattern ('18 usc 2252', '893.13 6b', '794.011 8b', '784.03 1A1 domestic battery') but no target query. Mapped via site.ts:11685-11701.",
  },
  {
    href: "/resources/tools/offense-level-comparison",
    kind: "tool",
    intent: "tool",
    primary: null,
    topic: "offense",
    source: "docs/research/briefs/TOOLS.md:38",
    note: "TOOLS.md Section 1 cites 'Florida criminal punishment code scoresheet' 70/mo FL as demand evidence (TOOLS.md:90-91), not as a target query. No primary recorded.",
  },
  {
    href: "/resources/tools/seal-expunge-eligibility",
    kind: "tool",
    intent: "tool",
    primary: null,
    topic: "sealed",
    source: "TOOLS.md",
    note: "TOOLS.md:6-8 lists the seal/expunge checker as already in the plan and 'not re-argued'; no query recorded.",
  },
  {
    href: "/resources/tools/sentencing-worksheet",
    kind: "tool",
    intent: "tool",
    primary: null,
    topic: "sentencing worksheet",
    source: "TOOLS.md",
    note: "TOOLS.md has no section for the worksheet (it treats the CPC calculator as gated, TOOLS.md:606-610). TOOLS.md Section 4's third degree felony page cites 'third degree felony Florida' 1,000/mo as demand, but that is a separate proposed guide, not this route.",
  },
  {
    href: "/resources/guides/after-an-arrest",
    kind: "guide",
    intent: "process",
    primary: null,
    topic: "first 24 hours",
    source: "none",
    note: "No brief. TOOLS.md:6-8 lists the After an Arrest guide as already in the plan and not re-argued; no query recorded.",
  },
  {
    href: "/resources/guides/federal-criminal-process-timeline",
    kind: "guide",
    intent: "process",
    primary: null,
    topic: "federal case timeline",
    source: "none",
    note: "No brief of its own. W1-01:47 assigns 'federal indictment lawyer Tampa' (6-12mo, keywords.md:146) to 'the Layer 2 federal timeline guide'.",
  },
  {
    href: "/personal-injury/car-accidents",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "car accident",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/car-accidents/insurance-claims",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "insurance claim",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/car-accidents/types-of-car-accidents",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "car accident claims",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/car-accidents/compensation",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "compensation",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/car-accidents/catastrophic-injuries",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "catastrophic injury",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/truck-accidents",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "truck",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/truck-accidents/fmcsa-violations",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "FMCSA",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/truck-accidents/semi-truck-collisions",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "semi-truck",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/personal-injury/truck-accidents/delivery-and-box-truck",
    kind: "injury",
    intent: "hire",
    primary: null,
    topic: "box truck",
    source: "src/lib/site.ts injuryPages (client PI keyword architecture, 2026-08-26)",
    note: "The client's PI keyword architecture is not in the repo, so no primary query is recorded. Add them before the injury rebuild.",
  },
  {
    href: "/attorneys/lily-mccarty",
    kind: "bio",
    intent: "navigate",
    primary: null,
    topic: "Lily McCarty",
    source: "none",
    note: "A bio is found by the attorney's name; no brief assigns it a query.",
  },
  {
    href: "/attorneys/maria-pavlidis",
    kind: "bio",
    intent: "navigate",
    primary: null,
    topic: "Maria Pavlidis",
    source: "none",
    note: "A bio is found by the attorney's name; no brief assigns it a query.",
  },
  {
    href: "/attorneys/david-hines",
    kind: "bio",
    intent: "navigate",
    primary: null,
    topic: "David Hines",
    source: "none",
    note: "A bio is found by the attorney's name; no brief assigns it a query.",
  },
  {
    href: "/attorneys/colton-trina",
    kind: "bio",
    intent: "navigate",
    primary: null,
    topic: "Colton Trina",
    source: "none",
    note: "A bio is found by the attorney's name; no brief assigns it a query.",
  },
];
