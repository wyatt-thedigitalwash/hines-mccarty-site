/**
 * Build-time C9 collision check. Runs as `prebuild`, so `npm run build` fails
 * when two charge pages assert the same differentiator.
 *
 *   node --experimental-strip-types scripts/check-c9.mts
 *
 * Node strips the types and runs this directly, so the check needs no test
 * runner and no new dependency. src/lib/site.ts has no imports of its own,
 * which is what makes importing it from a plain script possible.
 *
 * TWO PARTS, AND THE SECOND IS THE POINT.
 *
 * Part 1 checks the real charge data.
 *
 * Part 2 is a self-test that feeds the detector the actual pre-ruling
 * assertions from the embezzlement and grand theft briefs, the ones that DID
 * collide, and fails the build if the detector does not fire on them. Without
 * it, part 1 passing would be indistinguishable from a detector that can never
 * report anything, which is defect 1 in docs/research/HUNT-LIST.md: a check
 * whose reassuring result is available in the failure state. Part 2 is what
 * makes part 1 evidence.
 */
import { charges, chargeHref, CHARGE_C9_KEYS } from "../src/lib/site.ts";
import {
  comparable,
  detectC9Collisions,
  findCategoryConflicts,
  findMisTypedExemptions,
  findUnparseableStatutes,
  isPopulated,
  similarity,
  substanceTokens,
  SIMILARITY_THRESHOLD,
  type C9Assertion,
  type C9Entry,
} from "../src/lib/c9.ts";

let failed = false;
const fail = (msg: string) => {
  console.error(`  FAIL  ${msg}`);
  failed = true;
};

// ---------------------------------------------------------------- part 2 first
// Run the self-test before the real check. If the detector is broken there is
// no point reporting a clean result from it.
console.log("C9 detector self-test");

// Verbatim from the first drafts of W1-02-embezzlement.md and
// W1-03-grand-theft.md, before the collision ruling in plan Section 4.5 moved
// the shared table into the Layer 2 asset. Both rest on F.S. 812.014 and both
// claim the value-to-offense-level table.
const PRE_RULING: C9Entry[] = [
  {
    id: "fixture/grand-theft (pre-ruling)",
    c9: {
      statute: "F.S. 812.014",
      section: "Degrees and penalties",
      assertion:
        "A value-to-degree-to-offense-level ladder running from $750 to $100,000 that exists in this statute alone.",
    },
  },
  {
    id: "fixture/embezzlement (pre-ruling)",
    c9: {
      statute: "F.S. 812.014",
      section: "Degrees and penalties",
      assertion:
        "A dollar-threshold-to-offense-level table running from $750 to $100,000 that exists in this statute alone.",
    },
  },
];

const fixtureHits = detectC9Collisions(PRE_RULING);
if (fixtureHits.length === 0) {
  fail(
    "the detector did NOT fire on the known pre-ruling collision. It cannot be " +
      "trusted to report a real one, so the build stops here rather than " +
      "reporting a clean result from a check that cannot fail.",
  );
} else {
  console.log(`  ok    fires on the known collision: ${fixtureHits[0].reason}`);
}

// The same two pages after the ruling. Same statute, genuinely different
// substance. If this fires, the threshold has been set so low that any two
// pages under one statute collide, which would make the check useless in the
// opposite direction.
const POST_RULING: C9Entry[] = [
  {
    id: "fixture/grand-theft (post-ruling)",
    c9: {
      statute: "F.S. 812.014",
      section: "Degrees and penalties",
      assertion:
        "The value ladder that sets the degree of a theft, from the $750 felony threshold up to the $100,000 first degree tier.",
    },
  },
  {
    id: "fixture/embezzlement (post-ruling)",
    c9: {
      statute: "F.S. 812.014",
      section: "What the state has to prove",
      assertion:
        "Possession was lawful and authorised when it began, so the contested element is intent to deprive rather than the taking.",
    },
  },
];

const postHits = detectC9Collisions(POST_RULING);
if (postHits.length > 0) {
  fail(
    "the detector fired on the post-ruling pair, which rest on one statute but " +
      `genuinely different substance: ${postHits[0].reason}. The threshold is too low to be useful.`,
  );
} else {
  const s = similarity(
    substanceTokens(POST_RULING[0].c9.assertion, POST_RULING[0].c9.statute),
    substanceTokens(POST_RULING[1].c9.assertion, POST_RULING[1].c9.statute),
  );
  console.log(
    `  ok    stays quiet on the resolved pair (similarity ${s.toFixed(2)} < ${SIMILARITY_THRESHOLD})`,
  );
}

// A C9 resting on no statute at all. This is the corporate fraud card as it
// stood before the overlap audit: a label, a plausible-sounding assertion, and
// nothing chargeable underneath. The collision checker could never see it,
// because it only compares pages sharing a statute. If this fixture stops
// firing, that blind spot is back.
const NO_STATUTE: C9Entry[] = [
  {
    id: "fixture/corporate-fraud (pre-audit)",
    c9: {
      statute: "Corporate fraud",
      section: "What the statute says",
      assertion:
        "Fraud committed by a company or by its officers against investors, lenders, or the public.",
    },
  },
];

const unparseableHits = findUnparseableStatutes(NO_STATUTE);
if (unparseableHits.length === 0) {
  fail(
    "the detector did NOT flag a C9 resting on no statute. That is the blind " +
      "spot the overlap audit found, so the build stops rather than reporting " +
      "a clean result from a check that cannot see it.",
  );
} else {
  console.log(
    `  ok    flags a C9 resting on no statute: "${NO_STATUTE[0].c9.statute}"`,
  );
}

// The converse: a real citation must not be flagged. Both notations count.
const realCitations = [
  { id: "fixture/fs", c9: { statute: "F.S. 812.014", section: "x", assertion: "y" } },
  { id: "fixture/usc", c9: { statute: "18 U.S.C. 1343", section: "x", assertion: "y" } },
];
if (findUnparseableStatutes(realCitations).length > 0) {
  fail("the detector flagged a real statute citation as unparseable");
} else {
  console.log("  ok    accepts both F.S. and U.S.C. citation forms");
}

// The exemption-type invariants, shown firing. Each of these three fixtures is
// the exact shape its check exists to reject, and a check that cannot be
// demonstrated firing is not evidence that the real data is clean.
{
  const REAL: C9Assertion = {
    statute: "18 U.S.C. 1343",
    section: "s",
    assertion: "a",
  };
  const EMPTY: C9Assertion = {
    statute: "[NEEDS: the statute the differentiator rests on]",
    section: "[NEEDS]",
    assertion: "[NEEDS]",
  };

  const hatch: C9Entry[] = [
    { id: "hatch", c9: EMPTY, c9Exempt: { type: "policy-governed", reason: "r" } },
  ];
  if (findMisTypedExemptions(hatch).length !== 1) {
    fail(
      'the "policy-governed" invariant does not fire on an empty C9. Without it ' +
        "that exemption is a general escape hatch: any page could claim policy " +
        "governs it and then say nothing at all.",
    );
  } else {
    console.log('  ok    fires when "policy-governed" is claimed with an empty C9');
  }

  const wrong: C9Entry[] = [
    { id: "wrong", c9: REAL, c9Exempt: { type: "no-statute", reason: "r" } },
  ];
  if (findMisTypedExemptions(wrong).length !== 1) {
    fail('the "no-statute" invariant does not fire on a C9 that names a statute.');
  } else {
    console.log('  ok    fires when "no-statute" is claimed but a statute exists');
  }

  const both: C9Entry[] = [
    {
      id: "both",
      c9: REAL,
      c9Category: { reason: "r" },
      c9Exempt: { type: "no-statute", reason: "r" },
    },
  ];
  if (findCategoryConflicts(both).length !== 1) {
    fail("a page marked both category (C9-required) and exempt is not detected.");
  } else {
    console.log("  ok    fires when a page is both category-required and exempt");
  }

  // And stays quiet on the two legitimate shapes, so the checks above are not
  // simply returning everything handed to them.
  const ok: C9Entry[] = [
    { id: "a", c9: { statute: "JM 9-11.151", section: "s", assertion: "a" },
      c9Exempt: { type: "policy-governed", reason: "r" } },
    { id: "b", c9: EMPTY, c9Exempt: { type: "no-statute", reason: "r" } },
    { id: "c", c9: REAL, c9Category: { reason: "r" } },
  ];
  if (findMisTypedExemptions(ok).length || findCategoryConflicts(ok).length) {
    fail("the exemption-type checks fire on legitimate entries.");
  } else {
    console.log("  ok    stays quiet on correctly typed exemptions and categories");
  }
}

// ---------------------------------------------------------------- part 1a
// Every key in CHARGE_C9 must match a real charge. A key that matches nothing
// looks recorded and governs nothing: the collision checker never sees it, and
// the page it was written for silently keeps its [NEEDS] placeholder. This
// check found exactly that on its first run, where the money laundering
// assertion was keyed to a white-collar slug that does not exist.
console.log("\nC9 keys resolve to real charges");

const validIds = new Set(charges.map((c) => `${c.silo}/${c.slug}`));
const orphans = CHARGE_C9_KEYS.filter((k) => !validIds.has(k));
if (orphans.length) {
  for (const k of orphans) {
    fail(
      `CHARGE_C9 key "${k}" matches no charge. Either the slug is wrong or the ` +
        `page does not exist yet, and until it resolves the assertion governs nothing.`,
    );
  }
} else {
  console.log(`  ok    all ${CHARGE_C9_KEYS.length} keys resolve`);
}

// ---------------------------------------------------------------- part 1b
console.log("\nC9 collisions across charge pages");

const entries: C9Entry[] = charges.map((c) => ({
  id: chargeHref(c),
  c9: c.c9,
  c9Exempt: c.c9Exempt,
  c9Category: c.c9Category,
}));
const populated = entries.filter((e) => isPopulated(e.c9));
const exempt = entries.filter((e) => e.c9Exempt);

// Reported separately on purpose. Excused-by-decision and not-yet-written are
// different states, and collapsing them into one skipped count is how a page
// with no statute hides inside a pile of placeholders.
const category = entries.filter((e) => e.c9Category);
console.log(
  `  ${comparable(entries).length} compared (of which ${category.length} category overview), ${
    entries.length - populated.length
  } carrying [NEEDS] and not yet written, ${exempt.length} exempt by decision.`,
);

// Exemptions are reported BY TYPE, never as one count. Two pages excused for
// different reasons are in different states, and a single number would let the
// narrow exemption widen into the broad one unnoticed. D15.
const byType = new Map<string, C9Entry[]>();
for (const e of exempt) {
  const t = e.c9Exempt!.type;
  byType.set(t, [...(byType.get(t) ?? []), e]);
}
for (const [type, es] of [...byType].sort()) {
  console.log(`  exempt(${type})  ${es.length}`);
  for (const e of es) console.log(`      ${e.id}: ${e.c9Exempt!.reason}`);
}
for (const e of category) {
  console.log(`  category  ${e.id}: compared, not excused. ${e.c9Category!.reason}`);
}

// The two exemption types carry OPPOSITE obligations, so each is checked
// against what the page actually holds rather than trusted. Without this,
// "policy-governed" is a general escape hatch.
const misTyped = findMisTypedExemptions(entries);
if (misTyped.length) {
  for (const e of misTyped) {
    const t = e.c9Exempt!.type;
    fail(
      t === "policy-governed"
        ? `${e.id} claims a "policy-governed" exemption but carries no populated C9. ` +
            `That exemption asserts the page HAS verified substance and is excused from ` +
            `the statute-parse check only. An empty C9 means the exemption was not earned.`
        : `${e.id} claims a "no-statute" exemption but its C9 names a statute ` +
            `("${e.c9.statute}"). If a statute exists, the exemption is the wrong one ` +
            `and the page belongs in the comparison set.`,
    );
  }
} else {
  console.log("  ok    every exemption matches what its page actually carries");
}

const conflicts = findCategoryConflicts(entries);
if (conflicts.length) {
  for (const e of conflicts) {
    fail(
      `${e.id} is marked a category overview, which is C9-REQUIRED, but it is ` +
        `${e.c9Exempt ? "also exempt" : "carrying an unpopulated C9"}. A page cannot be ` +
        `both excused from the check and required to pass it.`,
    );
  }
} else {
  console.log("  ok    every category overview is populated and compared");
}

// Statute-parse check on the real data.
const unparseable = findUnparseableStatutes(entries);
if (unparseable.length) {
  for (const e of unparseable) {
    fail(
      `${e.id} has a populated C9 whose statute field does not name a statute: ` +
        `"${e.c9.statute}". A differentiator resting on no statute cannot be false ` +
        `if another charge were swapped in, so it fails C9 by construction. Either ` +
        `give it the statute it rests on, or mark it c9Exempt with a reason.`,
    );
  }
} else {
  console.log("  ok    every compared C9 names a statute");
}

const collisions = detectC9Collisions(entries);
if (collisions.length) {
  for (const c of collisions) {
    fail(`${c.a} and ${c.b} both rest on ${c.statute}: ${c.reason}`);
  }
  console.error(
    "\n  Two pages claiming one differentiator is the failure mode C9 exists to " +
      "prevent (CASES-WE-DEFEND-PLAN.md Section 4.5). Resolve it by giving one " +
      "page different substance, or by moving the shared material to a Layer 2 " +
      "asset that both link to.",
  );
} else {
  console.log("  ok    no two populated C9 assertions collide");
}

console.log(
  "  ..    guides and tools are SKIPPED BY DESIGN: cover-the-name is a " +
    "between-charge-pages test, and a guide has no sibling charge it could " +
    "be confused with (D29; GUIDES-CONCEPT D.2). Their gates are " +
    "check:pages, check:claims, check:provenance, and check:rendered.",
);

if (failed) process.exit(1);
console.log("\nC9 check passed.");
