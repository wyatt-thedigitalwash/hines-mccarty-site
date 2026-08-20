/**
 * The ONE citation parser, shared by check-unverified and check-provenance.
 *
 * Extracted 2026-08-20 with the D29 registry. Duplicated extractors guarantee
 * per-gate holes that differ (the finding that created page-copy.ts), and
 * GUIDES-CONCEPT F.3 G2 specifies "the existing refs() parser" precisely so
 * the provenance gate and the unverified gate cannot disagree about what a
 * citation is. check-unverified's self-tests exercise these functions.
 */

/**
 * Statute references, at SUBSECTION granularity.
 *
 * Granularity is the whole point. "F.S. 812.014" was verified and
 * "812.014(3)" was not, so a check keyed on the section number alone would
 * have passed the exact page that failed. It has to see the subsection path.
 */
export function refs(text: string): Set<string> {
  const out = new Set<string>();
  // Chapter numbers are 1 to 4 digits, not exactly 3. The old pattern made the
  // ENTIRE Florida Evidence Code invisible, including 90.803 hearsay and
  // 90.404(2) similar-fact evidence, which are two of the most-litigated
  // provisions on a criminal defense site. It also truncated four-digit
  // chapters, so 1006.13(2) keyed as "006.13(2)" and collided with 2006.13(2).
  const fs =
    /(?:F\.?\s?S\.?\s*|Florida Statutes?\s*|Statute\s*|s\.\s*)?\b(\d{1,4}\.\d{2,4})((?:\s*\**\s*\(\s*\**\s*[0-9a-z]{1,3}\s*\**\s*\)\s*\**)*)/gi;
  for (const m of text.matchAll(fs)) {
    // Strip markdown emphasis so 784.03(**1**)(a) does not degrade to a bare
    // section and slip past the subsection filter.
    const subs = (m[2] ?? "").replace(/[\s*_]+/g, "");
    out.add(`fs ${m[1]}${subs}`.toLowerCase());
  }
  const usc = /(\d{1,2})\s*U\.?\s?S\.?\s?C\.?\s*(?:§\s*)?(\d{1,4}[A-Za-z]?)((?:\s*\(\s*[0-9a-z]{1,3}\s*\))*)/gi;
  for (const m of text.matchAll(usc)) {
    const subs = (m[3] ?? "").replace(/\s+/g, "");
    out.add(`usc ${m[1]} ${m[2]}${subs}`.toLowerCase());
  }
  const rule = /Rule\s*(\d\.\d{2,4})((?:\s*\(\s*[0-9a-z]{1,3}\s*\))*)/gi;
  for (const m of text.matchAll(rule)) {
    const subs = (m[2] ?? "").replace(/\s+/g, "");
    out.add(`rule ${m[1]}${subs}`.toLowerCase());
  }
  return out;
}

/**
 * Does `broader` cover `narrower`? One direction only, deliberately.
 *
 * The first version tested both directions, which put a hole in the gate the
 * same shape as the defect it exists to catch: a bare "F.S. 812.014" recorded
 * in PAGE-SOURCES satisfied a citation of "812.014(3)(a)", because the citation
 * starts with the record. That let a section-level fetch clear a
 * subsection-level flag, which is exactly the confusion that produced the
 * original error. A fetch of the statute is not a fetch of the paragraph.
 */
export function covers(broader: string, narrower: string): boolean {
  return narrower === broader || narrower.startsWith(broader);
}

/**
 * A citation is cleared only by a record at least as specific as the FLAG.
 *
 * Recording "812.014" does not clear a flag on "812.014(3)". Recording
 * "812.014(3)" or "812.014(3)(a)" does.
 */
export function clearedBy(recorded: Set<string>, flag: string, cited: string): boolean {
  return [...recorded].some((r) => covers(flag, r) && covers(r, cited));
}

