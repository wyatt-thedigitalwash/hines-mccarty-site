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
  detectC9Collisions,
  isPopulated,
  similarity,
  substanceTokens,
  SIMILARITY_THRESHOLD,
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
}));
const populated = entries.filter((e) => isPopulated(e.c9));

console.log(
  `  ${populated.length} of ${entries.length} charge entries have a populated C9. ` +
    `The rest carry [NEEDS] and are not compared, because a placeholder cannot collide with anything.`,
);

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

if (failed) process.exit(1);
console.log("\nC9 check passed.");
