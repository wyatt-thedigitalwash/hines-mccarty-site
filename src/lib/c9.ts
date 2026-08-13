/**
 * Done-criterion C9, as a check rather than a field that merely exists.
 *
 * CASES-WE-DEFEND-PLAN.md Section 4.5 requires every charge page to carry a
 * differentiator that would be false or nonsensical if another charge were
 * swapped in, and to check that differentiator ACROSS pages rather than only
 * within one. The cross-page rule exists because a real collision happened: the
 * embezzlement and grand theft briefs each independently claimed the F.S.
 * 812.014 value-to-offense-level table as their C9 substance. Each passed the
 * single-page test. Together they would have produced two pages built on one
 * table, which is the interchangeability C9 exists to prevent.
 *
 * WHAT THIS DELIBERATELY IS NOT. It is not a presence check. A check that
 * asserts `c9` is non-empty returns the same reassuring answer whether or not
 * two pages are claiming the same substance, so its passing result is available
 * in the failure state. That is defect 1 in docs/research/HUNT-LIST.md, and
 * building one here would disable the rail it belongs to.
 *
 * The self-test in scripts/check-c9.ts is the other half of the same idea: it
 * feeds the detector the real pre-ruling assertions and fails the build if they
 * do NOT collide. A detector that cannot be shown to fire is not evidence.
 */

export type C9Assertion = {
  /** The statute citation the differentiator rests on. */
  statute: string;
  /** Which template section carries it. */
  section: string;
  /** One line stating the differentiator. */
  assertion: string;
};

const NEEDS = /\[NEEDS/i;

/** An entry whose C9 is still a placeholder is not compared. */
export function isPopulated(c9: C9Assertion): boolean {
  return !NEEDS.test(c9.statute) && !NEEDS.test(c9.assertion);
}

/**
 * Reduce a citation to the statute it identifies, so that subsection-level
 * differences cannot hide a collision. "F.S. 812.014(2)(c)1." and "F.S.
 * 812.014" are the same statute for this purpose, and two pages resting on the
 * same statute is the precondition the real collision had.
 */
export function statuteKey(citation: string): string {
  const usc = citation.match(/(\d+)\s*U\.?\s*S\.?\s*C\.?\s*(?:§\s*)?(\d+[A-Za-z]?)/i);
  if (usc) return `${usc[1]} USC ${usc[2]}`.toLowerCase();
  const fs = citation.match(/(\d{3}\.\d+)/);
  if (fs) return `fs ${fs[1]}`;
  return citation.trim().toLowerCase();
}

/**
 * True when the citation actually names a statute.
 *
 * `statuteKey` falls back to the raw string when it matches neither pattern,
 * which means a C9 resting on no statute at all still produces a key and still
 * compares cleanly against everything else. The overlap audit found exactly
 * that: the corporate fraud pair rested on no statute in either silo, so the
 * collision checker could never have seen it, and a card with no chargeable
 * offence sat in the list unremarked while pages were written around it.
 *
 * The signal was already there and was being discarded. This exposes it.
 */
export function isStatuteCitation(citation: string): boolean {
  return /(\d+\s*U\.?\s*S\.?\s*C\.?\s*(?:§\s*)?\d+[A-Za-z]?)|(\d{3}\.\d+)/i.test(
    citation,
  );
}

// Words that carry no distinguishing substance. Kept deliberately small: an
// aggressive stopword list would strip the very terms that separate two
// assertions and would make everything look similar, which fails toward a
// collision report rather than toward silence.
const STOPWORDS = new Set([
  "a", "an", "and", "the", "of", "in", "on", "to", "that", "is", "it", "its",
  "for", "from", "by", "with", "as", "at", "or", "this", "which", "under",
  "page", "charge", "section", "florida", "statute", "f.s", "fs", "usc",
  "no", "not", "any", "other", "only", "because", "than", "then", "these",
  "there", "their", "they", "are", "be", "been", "was", "were", "has", "have",
]);

/**
 * Substance tokens for an assertion.
 *
 * The statute's own digits are removed before tokenising. Leaving them in would
 * hand every same-statute pair a free token match and inflate the similarity of
 * exactly the pairs the detector is meant to judge on their substance.
 */
export function substanceTokens(assertion: string, statute: string): Set<string> {
  // Every distinct number in the citation, longest first so that removing
  // "812.014" happens before a bare "812" could partially match it.
  const numbers = (statuteKey(statute).match(/\d+(?:\.\d+)?/g) ?? []).sort(
    (x, y) => y.length - x.length,
  );
  let cleaned = assertion.toLowerCase();
  for (const n of numbers) {
    cleaned = cleaned.split(n).join(" ");
  }
  cleaned = cleaned.replace(/[^a-z0-9$\s]/g, " ");
  return new Set(
    cleaned
      .split(/\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length > 2 && !STOPWORDS.has(w)),
  );
}

/** Jaccard overlap of two token sets. */
export function similarity(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const t of a) if (b.has(t)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/**
 * Calibrated against the real collision, not chosen by feel.
 *
 * The pre-ruling embezzlement and grand theft assertions score well above this;
 * the post-ruling pair, which rest on the same statute but genuinely different
 * substance, score well below. scripts/check-c9.ts asserts both, so a change
 * that made this threshold meaningless would fail the build.
 */
export const SIMILARITY_THRESHOLD = 0.34;

/**
 * An entry excused from C9, by decision rather than by omission.
 *
 * The distinction matters. A page carrying a [NEEDS] placeholder is unfinished
 * and will be checked once it is written. A page carrying an exemption has been
 * looked at and ruled out of scope on the record, with a reason, and will never
 * be checked. Reporting the two as one number would hide finished-and-excused
 * inside not-yet-done, which is how a page with no statute goes unnoticed.
 */
export type C9Exemption = { type: C9ExemptionType; reason: string };

/**
 * Why a page is excused, as a type rather than as prose in the reason.
 *
 * Two pages are exempt for reasons that are not the same reason, and a single
 * `c9Exempt` boolean reports them as one state. That is the same collapse this
 * file already refuses between excused-by-decision and not-yet-written: two
 * states that mean different things must not share a label, because the moment
 * they do, the narrower one silently widens to admit anything the broader one
 * would.
 *
 * - `no-statute`: no offence exists, so there is no element a differentiator
 *   could be false about. /white-collar-defense/corporate-fraud. D12.
 * - `policy-governed`: a real page with verified substance whose governing
 *   source is agency policy rather than a statute, and whose differentiator is
 *   precisely that absence. /federal-criminal-defense/target-letter-defense,
 *   which rests on JM 9-11.151. D15.
 *
 * The two carry OPPOSITE invariants, enforced in scripts/check-c9.mts. A
 * `no-statute` page has nothing to say and its C9 stays a placeholder. A
 * `policy-governed` page has substance and MUST carry a populated C9; it is
 * excused from the statute-parse check only, not from having a differentiator.
 * Without that invariant `policy-governed` would be a general escape hatch, and
 * a page could reach publication by claiming policy governs it and then saying
 * nothing at all.
 */
export type C9ExemptionType = "no-statute" | "policy-governed";

/**
 * A page that is a category overview rather than a single charge, and is
 * checked anyway.
 *
 * D12 exempted corporate fraud on the ground that no statute existed. That
 * condition does not travel to every category page.
 * /criminal-defense/sex-crimes-defense is a category resting on five statutes,
 * so it fails D12's condition and stays in the comparison set. Modelling it as
 * either a plain charge page or as exempt would state something untrue: it is
 * not one charge, and it is not excused.
 *
 * A category entry is compared exactly like a charge page. The field records
 * what the page is, so that "category" never becomes an argument for skipping
 * the check. D16.
 */
export type C9Category = { reason: string };

export type C9Entry = {
  id: string;
  c9: C9Assertion;
  c9Exempt?: C9Exemption;
  c9Category?: C9Category;
};

export type C9Collision = {
  a: string;
  b: string;
  statute: string;
  similarity: number;
  reason: string;
};

/**
 * Two pages collide when they rest on the same statute AND either say
 * substantially the same thing, or name the same template section as the one
 * carrying the differentiator.
 *
 * The section rule is not redundant with the similarity rule. Two pages can
 * describe one shared table in different words and still be built on it, which
 * is precisely how the 812.014 collision would have reached publication.
 */
/**
 * Entries the checker compares: populated, and not exempted by decision.
 *
 * Note what is deliberately absent: `c9Category` is not filtered out. A
 * category overview is compared exactly like a charge page, because being a
 * category is a fact about the page and not a reason to skip the check.
 */
export function comparable(entries: C9Entry[]): C9Entry[] {
  return entries.filter((e) => !e.c9Exempt && isPopulated(e.c9));
}

/**
 * Entries whose exemption type contradicts what they actually carry.
 *
 * This is what stops `policy-governed` widening into a general escape hatch.
 * The two exemption types have opposite obligations, so each can be checked
 * against the page's real content rather than trusted:
 *
 * - `policy-governed` claims verified substance, so an unpopulated C9 means the
 *   page is claiming an exemption it has not earned.
 * - `no-statute` claims there is no statute, so a populated C9 naming one means
 *   the exemption is the wrong one and the page should be compared.
 *
 * Each check fires in the state its own exemption is supposed to prevent, which
 * is the property docs/research/HUNT-LIST.md defect 1 asks for.
 */
export function findMisTypedExemptions(entries: C9Entry[]): C9Entry[] {
  return entries.filter((e) => {
    if (!e.c9Exempt) return false;
    const populated = isPopulated(e.c9);
    if (e.c9Exempt.type === "policy-governed") return !populated;
    if (e.c9Exempt.type === "no-statute") {
      return populated && isStatuteCitation(e.c9.statute);
    }
    return false;
  });
}

/** A page cannot be both excused from the check and required to pass it. */
export function findCategoryConflicts(entries: C9Entry[]): C9Entry[] {
  return entries.filter((e) => e.c9Category && (e.c9Exempt || !isPopulated(e.c9)));
}

/**
 * Populated, non-exempt entries whose statute field does not name a statute.
 *
 * This is the check that would have caught the corporate fraud pair. A C9 that
 * rests on no statute cannot be false if another charge were swapped in,
 * because there is no element to be false, so it fails C9 by construction
 * rather than by comparison.
 */
export function findUnparseableStatutes(entries: C9Entry[]): C9Entry[] {
  return comparable(entries).filter((e) => !isStatuteCitation(e.c9.statute));
}

export function detectC9Collisions(entries: C9Entry[]): C9Collision[] {
  const live = comparable(entries);
  const out: C9Collision[] = [];

  for (let i = 0; i < live.length; i += 1) {
    for (let j = i + 1; j < live.length; j += 1) {
      const a = live[i];
      const b = live[j];
      const key = statuteKey(a.c9.statute);
      if (key !== statuteKey(b.c9.statute)) continue;

      const score = similarity(
        substanceTokens(a.c9.assertion, a.c9.statute),
        substanceTokens(b.c9.assertion, b.c9.statute),
      );
      const sameSection =
        a.c9.section.trim().toLowerCase() === b.c9.section.trim().toLowerCase();

      if (score >= SIMILARITY_THRESHOLD) {
        out.push({
          a: a.id,
          b: b.id,
          statute: key,
          similarity: score,
          reason: `same statute and substantially the same substance (similarity ${score.toFixed(2)} >= ${SIMILARITY_THRESHOLD})`,
        });
      } else if (sameSection) {
        out.push({
          a: a.id,
          b: b.id,
          statute: key,
          similarity: score,
          reason: `same statute and both name "${a.c9.section}" as the section carrying the differentiator`,
        });
      }
    }
  }
  return out;
}
