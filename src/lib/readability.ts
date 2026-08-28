/**
 * The readability measures, as pure functions. DECISIONS.md D41.
 *
 * SEPARATE FROM THE GATE ON PURPOSE. scripts/check-readability.mts runs its
 * self-tests and its real sweep at import time and exits the process, which is
 * right for a gate and makes it unimportable by anything else. The measures
 * themselves have to be usable by tooling that reports scores without failing a
 * build, so they live here, where importing them does nothing.
 *
 * Same reasoning as src/lib/c9.ts: the detector is a library, the gate is a
 * script, and one definition serves both so they cannot drift.
 */
// ------------------------------------------------------------------ limits
export const GRADE_PAGE = 8.0;
export const GRADE_SECTION = 9.5;
export const SENTENCE_WORDS = 20;
export const RUN_WORDS = 300;
export const PARA_SENTENCES = 4;

// ------------------------------------------------------------------ measures
/**
 * Syllables, by the standard vowel-group heuristic.
 *
 * PRINTED AS A LIMIT rather than presented as a measurement. This undercounts
 * "fire" and overcounts "business", and every Flesch-Kincaid implementation in
 * the world disagrees with every other by a few tenths for exactly this reason.
 * What it is good for is comparing two versions of the same page and holding a
 * line; what it is not is an authority on what an eighth grader can read. The
 * grade number is a proxy, and the human read is still the check.
 */
export function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const trimmed = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "");
  const groups = trimmed.match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function sentencesOf(text: string): string[] {
  return text
    .split(/(?<=[.!?])["'”’)\]]?\s+/)
    .map((s) => s.trim())
    .filter((s) => /[a-z0-9]/i.test(s));
}

export function wordsOf(text: string): string[] {
  return text.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w));
}

export type Score = { grade: number; asl: number; asw: number; words: number };

/** Flesch-Kincaid grade over a set of strings. */
export function score(texts: string[]): Score {
  let sents = 0, words = 0, syls = 0;
  for (const t of texts) {
    // A heading has no terminal punctuation and is still one unit of reading.
    const ss = sentencesOf(t);
    sents += Math.max(1, ss.length);
    for (const w of wordsOf(t)) {
      words++;
      syls += syllables(w);
    }
  }
  if (!words) return { grade: 0, asl: 0, asw: 0, words: 0 };
  const asl = words / Math.max(1, sents);
  const asw = syls / words;
  return { grade: 0.39 * asl + 11.8 * asw - 15.59, asl, asw, words };
}

// ------------------------------------------------------------------ R6
/**
 * Citations and statute-voice, the two halves of the shape D41 bans.
 *
 * The citation half is mechanical. The voice half is a word list, and a word
 * list is exactly the rail check-pages.mts warns is defeatable by ordinary
 * writing. It is here anyway because it catches the specific habit this codebase
 * has: naming the provision as the sentence's subject. "The statute provides
 * that you have 10 days" is the failure even with the number removed, because
 * the reader is still being addressed through the law rather than about it.
 */
export const CITATION_PATTERNS: [string, RegExp][] = [
  ["statute number", /\b\d{2,3}\.\d{2,4}\b/],
  ["usc citation", /\b\d{1,2}\s+U\.?S\.?C\.?\s+\d+/i],
  ["subsection number", /\([0-9]{1,2}\)\s*\([a-z]\)|\([a-z]\)[0-9]\.|\(\d+\)\([a-z]\)/],
  ["named statute", /\bStatute\s+\d|\bs\.\s*\d{2,3}\.\d|\bF\.S\.\s*\d|\bch\.\s*\d{4}-\d/i],
  ["rule citation", /\bRule\s+\d+\.\d+/i],
  ["subsection word", /\b(subsection|subparagraph|paragraph)\s*\(?[0-9a-z]\)?/i],
];

export const STATUTE_VOICE: [string, RegExp][] = [
  ["statute-as-subject", /\b(the statute|the section|the subsection|the paragraph|this section|that section)\s+(provides|states|requires|reaches|sets|makes|says)\b/i],
  ["provides that", /\bprovides that\b|\bshall be deemed\b|\bas provided in\b|\bpursuant to\b|\bnotwithstanding\b/i],
  ["third-person reader", /\bthe driver may\b|\bthe defendant must\b|\bthe person whose\b|\bsuch person\b|\bhis or her\b|\bthe accused\b/i],
];
