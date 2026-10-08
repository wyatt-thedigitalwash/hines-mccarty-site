/**
 * Site search, the matching half, D76. Pure functions with no imports, so the
 * browser runs them on the index and `check:search` runs them in Node against
 * the queries real visitors type.
 *
 * WHAT IT IS BUILT FOR. A visitor types what is on their paperwork or what
 * they would say out loud: "dui", "weed", "893.13", "hit and run", "how long
 * do they have to charge me", "lily". So the matcher:
 *   - matches word starts, so "traff" finds trafficking as you type
 *   - expands everyday words to the site's words ("weed" to marijuana and
 *     drug possession, "drunk driving" to DUI, "uber" to rideshare)
 *   - matches statute numbers on their own ("893.13", "1343")
 *   - forgives one typo in a longer word ("trafficing")
 *   - drops filler ("lawyer", "florida", "how", "my") so a question still finds
 *     the topic that answers it
 *   - ranks the page about the subject first, then topics and questions on
 *     other pages, and shows at most a handful.
 */

export type SearchKind = "page" | "topic" | "question" | "attorney";

export type SearchEntry = {
  /** URL, with a #fragment for a topic or question inside a page. */
  u: string;
  /** The result's heading: a page name, a topic question, a FAQ question. */
  t: string;
  /** Where it lives: the page name or section, shown under the heading. */
  c: string;
  /** One short line of what the reader finds there. */
  s: string;
  /** Extra words that should find this entry: aliases, statute numbers. */
  k: string;
  kind: SearchKind;
};

export type SearchResult = SearchEntry & { score: number };

/** Words that carry no meaning for finding a page. */
const STOP = new Set([
  "a", "an", "the", "of", "for", "in", "on", "to", "and", "or", "my", "me", "i", "im",
  "is", "are", "was", "be", "been", "it", "its", "with", "at", "by", "from", "about",
  "what", "how", "do", "does", "did", "can", "could", "should", "will", "would", "if",
  "when", "who", "why", "which", "there", "they", "them", "their", "you", "your", "get",
  "got", "lawyer", "lawyers", "attorney", "attorneys", "law", "firm", "florida", "fl",
  "tampa", "hillsborough", "county", "near", "best", "help", "need", "charged", "charge",
  "charges", "case", "arrested",
]);

/**
 * Everyday words to the words the site uses. Each key expands to every value,
 * and a result matching any of them counts as matching the key.
 */
const SYNONYMS: Record<string, string[]> = {
  weed: ["marijuana", "cannabis"], pot: ["marijuana", "cannabis"], cannabis: ["marijuana"],
  coke: ["cocaine"], meth: ["methamphetamine"], pills: ["oxycodone", "controlled", "prescription"],
  drugs: ["drug"], dwi: ["dui"], drunk: ["dui", "impaired"], dui: ["impaired"],
  breathalyzer: ["breath", "refusal"], blow: ["breath", "refusal"],
  gun: ["firearm", "weapon"], guns: ["firearm", "weapon"], firearm: ["gun"], weapon: ["gun"],
  rape: ["sexual battery"], molestation: ["lewd", "sex crimes"], porn: ["child pornography", "csam"],
  pornography: ["csam"], assault: ["battery"], fight: ["battery"],
  stealing: ["theft"], steal: ["theft"], stole: ["theft"], shoplifting: ["theft"],
  murder: ["homicide"], manslaughter: ["homicide"], killed: ["homicide", "death"],
  taxes: ["tax"], irs: ["tax"], laundering: ["money laundering"], fraud: ["fraud"],
  hacking: ["computer", "unauthorized"], hacked: ["computer"], identity: ["identity theft"],
  medicaid: ["medicaid", "health care"], healthcare: ["health care"], ppp: ["paycheck protection"],
  wreck: ["accident", "crash", "collision"], crash: ["accident", "collision"],
  accident: ["crash", "collision"], uber: ["rideshare"], lyft: ["rideshare"],
  semi: ["semi-truck", "18-wheeler"], tractor: ["semi-truck"], eighteen: ["18-wheeler"],
  insurance: ["pip", "coverage"], pip: ["personal injury protection"],
  expunge: ["sealing", "expunction"], expunged: ["sealing", "expunction"], seal: ["sealing"],
  record: ["sealing", "record"], deadline: ["time limit", "limitations"], statute: ["limitations"],
  bail: ["bond", "release"], jail: ["custody", "release"], probation: ["probation"],
  federal: ["federal"], feds: ["federal"], fbi: ["federal", "agents"], letter: ["target letter"],
  subpoena: ["target letter", "investigation"], investigation: ["investigation"],
  domestic: ["domestic violence"], dv: ["domestic violence"], restraining: ["injunction", "no contact"],
  embezzle: ["embezzlement"], embezzling: ["embezzlement"], securities: ["securities fraud"],
  stock: ["securities"], wire: ["wire fraud"], bank: ["bank fraud"], money: ["money laundering"],
};

/** Lower case, keep letters, digits and the dot inside statute numbers. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/(\d)\.(\d)/g, "$1§$2")
    .replace(/[^a-z0-9§\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/§/g, ".")
    .replace(/\s+/g, " ")
    .trim();
}

export function queryTokens(query: string): string[] {
  const toks = normalize(query).split(" ").filter(Boolean);
  const kept = toks.filter((t) => !STOP.has(t));
  return kept.length ? kept : toks;
}

/** Edit distance of at most one, cheaply. */
function withinOne(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else { i++; j++; }
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

type Prepared = SearchEntry & { words: string[][]; fields: string[] };

/** Index-side preparation, done once when the index loads. */
export function prepare(entries: SearchEntry[]): Prepared[] {
  return entries.map((e) => {
    const fields = [normalize(e.t), normalize(e.k), normalize(e.c), normalize(e.s)];
    return { ...e, fields, words: fields.map((f) => f.split(" ")) };
  });
}

/** Field weights: heading, keywords, context, snippet. */
const WEIGHTS = [10, 6, 2, 3];
const KIND_BOOST: Record<SearchKind, number> = { page: 1.35, attorney: 1.3, topic: 1, question: 0.9 };

/** How well one query token (or one of its synonyms) matches an entry. */
function tokenScore(entry: Prepared, token: string): number {
  const alts = [token, ...(SYNONYMS[token] ?? [])].map(normalize);
  let best = 0;
  for (const alt of alts) {
    const isPhrase = alt.includes(" ");
    for (let f = 0; f < entry.fields.length; f++) {
      const field = entry.fields[f];
      let s = 0;
      if (isPhrase) {
        if (field.includes(alt)) s = WEIGHTS[f] * 1.2;
      } else {
        for (const w of entry.words[f]) {
          if (w === alt) { s = Math.max(s, WEIGHTS[f] * 1.2); break; }
          if (w.startsWith(alt) && alt.length >= 2) s = Math.max(s, WEIGHTS[f]);
          else if (alt.length >= 5 && w.length >= 5 && withinOne(w, alt)) s = Math.max(s, WEIGHTS[f] * 0.6);
        }
      }
      // A synonym counts a little less than the word the reader typed.
      if (alt !== normalize(token)) s *= 0.7;
      best = Math.max(best, s);
    }
  }
  return best;
}

/**
 * Rank the index for a query. Every meaningful word must match somewhere
 * (AND); if nothing matches every word, the entries matching the most words
 * are returned instead, so a long question still finds something useful.
 */
export function search(index: Prepared[], query: string, limit = 8): SearchResult[] {
  const tokens = queryTokens(query);
  if (!tokens.length) return [];
  const phrase = normalize(query);
  const scored = index.map((e) => {
    const per = tokens.map((t) => tokenScore(e, t));
    const matched = per.filter((s) => s > 0).length;
    let score = per.reduce((a, b) => a + b, 0);
    if (phrase.length > 3 && e.fields[0].includes(phrase)) score += 15;
    score *= KIND_BOOST[e.kind];
    return { e, score, matched };
  });
  const all = scored.filter((r) => r.matched === tokens.length);
  const pool = all.length
    ? all
    : (() => {
        const most = Math.max(...scored.map((r) => r.matched));
        return most >= Math.ceil(tokens.length / 2) ? scored.filter((r) => r.matched === most) : [];
      })();
  pool.sort((a, b) => b.score - a.score);
  // Two cuts that keep the list worth reading. Results far weaker than the best
  // one are noise ("weed" pulling in a gun topic). And the same heading from
  // many pages ("Can it come off my record?" on every charge) shows twice at
  // most; the box tells the reader to add their charge to narrow it.
  const top = pool[0]?.score ?? 0;
  const wordsOf = (t: string) => new Set(t.split(" ").filter((w) => !STOP.has(w) && w !== "ever"));
  const kept: typeof pool = [];
  const seen: Set<string>[] = [];
  for (const r of pool) {
    if (r.score < top * 0.55) break;
    // Near-identical headings ("Can it come off my record?" and "Can it ever
    // come off my record?") count as the same heading.
    const w = wordsOf(r.e.fields[0]);
    const same = seen.filter((x) => {
      const inter = [...w].filter((y) => x.has(y)).length;
      return inter / Math.max(1, Math.max(w.size, x.size)) >= 0.75;
    }).length;
    if (same >= 2) continue;
    seen.push(w);
    kept.push(r);
    if (kept.length >= limit) break;
  }
  return kept.map(({ e, score }) => ({ u: e.u, t: e.t, c: e.c, s: e.s, k: e.k, kind: e.kind, score }));
}

/**
 * True when a query matched the same question on several pages, so the box
 * can suggest adding the charge ("seal battery") to narrow it.
 */
export function isGeneric(results: SearchResult[]): boolean {
  if (results.length < 2) return false;
  const titles = new Set(results.map((r) => normalize(r.t)));
  return results.every((r) => r.kind === "topic" || r.kind === "question") && titles.size < results.length;
}
