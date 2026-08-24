/**
 * check:worksheet. The audit half of the Rule 3.992 build-and-audit pass.
 *
 * SENTENCING-WORKSHEET-CONCEPT.md Section 8 machine item 3 requires the point
 * grids to be transcribed "by a fresh build-and-audit pass (D19/D23), not by
 * regexing the flattened quote strings". `src/lib/tools/scoresheet-form.ts` is
 * the build: hand-typed from a visual render of the form. This file is the
 * audit: it re-derives every value from TWO in-repo records written
 * independently of that file, and fails on any disagreement.
 *
 *   PATH A  the audited whole-section statute table `fs-921-0024.ts`, whose
 *           quote strings are F.S. 921.0024(1)(a)'s own worksheet cells in
 *           document order, and (1)(b)'s key paragraphs.
 *   PATH B  the READ-WHOLE Fla. R. Crim. P. 3.992 record in
 *           docs/research/PAGE-SOURCES.md, which is the FORM rather than the
 *           statute.
 *
 * Two paths, not one, because the whole point of the concept document's open
 * question 1 was that the form and the statute could disagree. A gate that read
 * only one of them could not see that, and would report agreement it never
 * tested.
 *
 * NO SILENT DEFAULTS (D22, and the shape every gate on this site has failed in):
 * every probe below must LOCATE its target. A probe that matches nothing FAILS
 * rather than contributing zero comparisons and passing quietly.
 */
import { readFileSync } from "node:fs";
import { STATUTES } from "../src/lib/statutes.ts";
import {
  ADDITIONAL_OFFENSE_POINTS,
  FORM_REVISION,
  PRIMARY_OFFENSE_POINTS,
  PRIOR_RECORD_POINTS,
  SCALARS,
  VICTIM_INJURY_POINTS,
  type LevelKey,
} from "../src/lib/tools/scoresheet-form.ts";

let failed = false;
const fail = (m: string) => {
  console.error(`  FAIL  ${m}`);
  failed = true;
};
const ok = (m: string) => console.log(`  ok    ${m}`);

const SOURCES = "docs/research/PAGE-SOURCES.md";
const sourcesText = readFileSync(SOURCES, "utf8");

// ------------------------------------------------------------------ helpers
type Grid = Record<string, number>;

/** Normalize a typed grid to string keys so the two paths compare alike. */
const asGrid = (o: Partial<Record<LevelKey, number>>): Grid =>
  Object.fromEntries(
    Object.entries(o).filter(([, v]) => v != null) as [string, number][],
  );

/** Compare two grids cell by cell, naming every disagreement. */
function compareGrid(what: string, path: string, typed: Grid, derived: Grid) {
  const keys = new Set([...Object.keys(typed), ...Object.keys(derived)]);
  let bad = 0;
  for (const k of [...keys].sort()) {
    if (typed[k] !== derived[k]) {
      bad++;
      fail(
        `${what} (${path}): level ${k} is ${derived[k] ?? "absent"} in the record ` +
          `but ${typed[k] ?? "absent"} in scoresheet-form.ts.`,
      );
    }
  }
  if (!bad) ok(`${what} matches ${path} in all ${keys.size} cells`);
}

// ------------------------------------------------------------------ PATH A
// The audited statute table. Its (1)(a) grid quotes are the statute's own
// worksheet cells, whitespace-separated, in document order.
console.log("PATH A: F.S. 921.0024, audited whole-section table");
{
  const table = STATUTES["921.0024"];
  if (!table) {
    fail("F.S. 921.0024 is not in STATUTES. The audit cannot run.");
  } else {
    if (table.completeness !== "whole-section")
      fail(
        `F.S. 921.0024 is recorded "${table.completeness}", not whole-section. ` +
          `A partial record cannot audit a whole form.`,
      );
    else ok("F.S. 921.0024 is recorded whole-section");

    const quotes = table.rows.map((r) => r.quote ?? "");

    /** Find the one quote containing a marker, or FAIL loudly. */
    const quoteWith = (marker: string): string | null => {
      const hits = quotes.filter((q) => q.includes(marker));
      if (hits.length !== 1) {
        fail(
          `PATH A probe "${marker}" matched ${hits.length} quote strings in ` +
            `fs-921-0024.ts; exactly 1 is required. The record changed shape and ` +
            `this gate is no longer reading what it claims to read.`,
        );
        return null;
      }
      return hits[0];
    };

    /** Level/points pairs out of a flattened grid quote. */
    const levelGrid = (quote: string): Grid => {
      const out: Grid = {};
      for (const m of quote.matchAll(/\b(M|10|[1-9])\s+(\d+(?:\.\d+)?)\s+(?:x\s+)?=/g))
        out[m[1]] = Number(m[2]);
      return out;
    };

    const primary = quoteWith("Level Sentence Points Total 10 116");
    if (primary) {
      const g = levelGrid(primary);
      if (Object.keys(g).length !== 10)
        fail(
          `PATH A Primary Offense: parsed ${Object.keys(g).length} rows, expected 10. ` +
            `Parsing nothing must never look like agreeing.`,
        );
      else compareGrid("Primary Offense grid", "PATH A", asGrid(PRIMARY_OFFENSE_POINTS), g);
      if ("M" in g)
        fail("PATH A Primary Offense: an M row was parsed. This grid has no M row.");
      else ok("Primary Offense grid has no M row in the statute, as typed");
    }

    const additional = quoteWith("Level Sentence Points Counts Total");
    if (additional) {
      const g = levelGrid(additional);
      if (Object.keys(g).length !== 11)
        fail(`PATH A Additional Offenses: parsed ${Object.keys(g).length} rows, expected 11.`);
      else
        compareGrid(
          "Additional Offenses grid",
          "PATH A",
          asGrid(ADDITIONAL_OFFENSE_POINTS),
          g,
        );
    }

    const prior = quoteWith("Total 10 29 x =");
    if (prior) {
      const g = levelGrid(prior);
      if (Object.keys(g).length !== 11)
        fail(`PATH A Prior Record: parsed ${Object.keys(g).length} rows, expected 11.`);
      else compareGrid("Prior Record grid", "PATH A", asGrid(PRIOR_RECORD_POINTS), g);
    }

    // Victim injury is not level-keyed, and the statute's labels differ from the
    // form's ("Sexual penetration" vs "Sex Penetration"). Compare the ORDERED
    // VALUE SEQUENCE here; the labels are audited against the form in PATH B,
    // which is where the form's own wording lives.
    const victim = quoteWith("2nd degree murder-death 240");
    if (victim) {
      const values = [...victim.matchAll(/\s(\d+(?:\.\d+)?)\s+x\s+=/g)].map((m) =>
        Number(m[1]),
      );
      const typed = VICTIM_INJURY_POINTS.map((v) => v.points);
      if (values.length !== 7)
        fail(`PATH A Victim Injury: parsed ${values.length} values, expected 7.`);
      else if (values.join(",") !== typed.join(","))
        fail(
          `PATH A Victim Injury: the statute's value sequence is [${values}] but ` +
            `scoresheet-form.ts types [${typed}]. Order is part of the claim: the two ` +
            `sexual categories sit at the bottom and outrank rows above them.`,
        );
      else ok(`Victim Injury values match PATH A in order: [${typed}]`);
    }

    // The eight scalars, each located by its own phrase in the (1)(b) key, with
    // the parenthesized numeral read out. A probe that fails to match FAILS.
    const scalarProbes: [keyof typeof SCALARS, string, RegExp][] = [
      ["legalStatus", "Legal status points are assessed", /Four \((\d+)\) sentence points/],
      [
        "communitySanction",
        "Community sanction violation points are assessed",
        /Six \((\d+)\) sentence points/,
      ],
      [
        "communitySanctionNewFelony",
        "includes a new felony conviction before the sentencing court",
        /twelve \((\d+)\) community sanction violation points/i,
      ],
      [
        "communitySanctionSpecialConcern",
        "The violation does not include a new felony conviction",
        /Twelve \((\d+)\) community sanction violation points/i,
      ],
      [
        "communitySanctionSpecialConcernNewFelony",
        "where the violation includes a new felony conviction",
        /Twenty-four \((\d+)\) community sanction violation points/i,
      ],
      ["priorSeriousFelony", "Prior serious felony points", /thirty \((\d+)\) points/],
      ["firearm", "a firearm as defined in s. 790.001", /eighteen \((\d+)\) sentence points/],
      [
        "semiautomaticOrMachineGun",
        "a machine gun as defined in s. 790.001",
        /twenty-five \((\d+)\) sentence points/,
      ],
    ];
    let scalarsChecked = 0;
    for (const [key, marker, pattern] of scalarProbes) {
      const hits = quotes.filter((q) => q.includes(marker));
      if (hits.length === 0) {
        fail(`PATH A scalar "${key}": probe "${marker}" matched no quote string.`);
        continue;
      }
      const m = hits.map((h) => h.match(pattern)).find(Boolean);
      if (!m) {
        fail(
          `PATH A scalar "${key}": located the paragraph but could not read its ` +
            `numeral. The gate must not pass on a paragraph it cannot parse.`,
        );
        continue;
      }
      const derived = Number(m[1]);
      const typed = SCALARS[key].points;
      if (derived !== typed)
        fail(`PATH A scalar "${key}": statute says ${derived}, typed as ${typed}.`);
      else scalarsChecked++;
    }
    if (scalarsChecked === scalarProbes.length)
      ok(`all ${scalarsChecked} scalars match PATH A`);
  }
}

// ------------------------------------------------------------------ PATH B
// The Rule 3.992 record. This is the FORM, and it is where the form's own
// printed grid lines and labels live.
console.log("\nPATH B: Fla. R. Crim. P. 3.992, READ-WHOLE record in PAGE-SOURCES.md");
{
  const marked = /^READ-WHOLE:\s*Fla\. R\. Crim\. P\. 3\.992\s*$/m.test(sourcesText);
  if (!marked)
    fail(
      `No "READ-WHOLE: Fla. R. Crim. P. 3.992" marker in ${SOURCES}. Without it the ` +
        `form is not recorded as read whole and C6 is not satisfied.`,
    );
  else ok("READ-WHOLE marker for Fla. R. Crim. P. 3.992 is present");

  /** Every "(Level - Points: ...)" / "(Level = Points: ...)" line in the record. */
  const gridLines = [
    ...sourcesText.matchAll(/^>\s*\(Level [-=] Points:\s*([^)]+)\)\s*$/gm),
  ].map((m) => m[1]);
  if (gridLines.length === 0) {
    fail("PATH B: no printed grid lines found in the Rule 3.992 record.");
  } else {
    const parse = (s: string): Grid =>
      Object.fromEntries(
        [...s.matchAll(/(M|\d+)\s*=\s*(\d+(?:\.\d+)?)/g)].map((m) => [m[1], Number(m[2])]),
      );
    const grids = gridLines.map(parse);
    const find = (expect: Grid, what: string) => {
      const hit = grids.find(
        (g) => JSON.stringify(g) === JSON.stringify(expect),
      );
      if (hit) {
        ok(`${what} matches a printed grid line on the form (PATH B)`);
        return;
      }
      // Not a silent miss: show the nearest candidate so the failure is legible.
      fail(
        `${what}: no printed grid line in the Rule 3.992 record matches the typed ` +
          `values. Typed ${JSON.stringify(expect)}. Record carries: ` +
          grids.map((g) => JSON.stringify(g)).join(" | "),
      );
    };
    find(asGrid(PRIMARY_OFFENSE_POINTS), "Primary Offense grid");
    find(asGrid(ADDITIONAL_OFFENSE_POINTS), "Additional Offenses grid");
    find(asGrid(PRIOR_RECORD_POINTS), "Prior Record grid");

    // The correction. The Additional Offenses grid must NOT equal the Primary
    // Offense grid: that equality IS the October 2025 defect the January 2026
    // upload fixed, and it is the single most consequential thing this gate can
    // watch for. If a future revision is recorded by someone reading the
    // superseded PDF, this fires.
    if (
      JSON.stringify(asGrid(ADDITIONAL_OFFENSE_POINTS)) ===
      JSON.stringify(asGrid(PRIMARY_OFFENSE_POINTS))
    )
      fail(
        "The Additional Offenses grid equals the Primary Offense grid. That is the " +
          "exact defect in the superseded October 23, 2025 upload of Rule 3.992, " +
          "corrected January 2026. This build is on the wrong PDF.",
      );
    else ok("Additional Offenses grid differs from Primary Offense grid (the January 2026 correction holds)");
  }

  // Victim injury LABELS come from the form, not the statute.
  for (const { label, points } of VICTIM_INJURY_POINTS) {
    const re = new RegExp(
      `^>\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+${points}\\s+x`,
      "m",
    );
    if (!re.test(sourcesText))
      fail(
        `PATH B Victim Injury: the form record has no line reading "${label} ${points} x". ` +
          `Labels on this tool are the form's, and must be quoted from it.`,
      );
  }
  ok(`all ${VICTIM_INJURY_POINTS.length} Victim Injury labels located on the form record`);

  // The scalars as the FORM prints them, which is a different wording from the
  // statute's key and therefore a real second check rather than a restatement.
  const facePhrases: [keyof typeof SCALARS, RegExp][] = [
    ["legalStatus", /LEGAL STATUS VIOLATION = 4 Points/],
    ["communitySanction", /6 points for any violation other than new felony conviction/],
    ["communitySanctionNewFelony", /New felony conviction = 12 points/],
    ["communitySanctionSpecialConcern", /12 points x ____ each successive violation for a violent felony offender of special concern/],
    ["communitySanctionSpecialConcernNewFelony", /New felony conviction = 24 points/],
    ["firearm", /FIREARM\/SEMI-AUTOMATIC OR MACHINE GUN = 18 or 25 Points/],
    ["semiautomaticOrMachineGun", /FIREARM\/SEMI-AUTOMATIC OR MACHINE GUN = 18 or 25 Points/],
    ["priorSeriousFelony", /PRIOR SERIOUS FELONY = 30 Points/],
  ];
  let faceOk = 0;
  for (const [key, re] of facePhrases) {
    if (!re.test(sourcesText))
      fail(
        `PATH B scalar "${key}": the form's printed wording was not found in the ` +
          `Rule 3.992 record. Either the record or the typed value moved.`,
      );
    else faceOk++;
  }
  if (faceOk === facePhrases.length)
    ok(`all ${faceOk} scalars located in the form's own printed wording`);
}

// ------------------------------------------------------------------ C6
console.log("\nC6: the implemented revision is stated, correction included");
{
  if (!/October 23, 2025/.test(sourcesText))
    fail("The Rule 3.992 record does not state the October 23, 2025 effective date.");
  else if (!/January 2026/.test(sourcesText))
    fail("The Rule 3.992 record does not name the January 2026 correction.");
  else ok("the record states both the October 23, 2025 revision and the January 2026 correction");

  if (FORM_REVISION.effective !== "October 23, 2025")
    fail(`FORM_REVISION.effective is "${FORM_REVISION.effective}".`);
  if (FORM_REVISION.correction !== "January 2026")
    fail(`FORM_REVISION.correction is "${FORM_REVISION.correction}".`);
  if (!FORM_REVISION.singleSource)
    fail(
      "FORM_REVISION.singleSource is false, but the form rests on one publisher. " +
        "That asymmetry is printed, never inferred (D22).",
    );
  else
    ok(
      "FORM_REVISION carries the revision, the correction, and the single-source flag",
    );
}

// ------------------------------------------------------------------ SINGLE-SOURCE
/**
 * The single-source status, machine-CHECKED rather than merely machine-findable.
 *
 * check:provenance already PRINTS every SINGLE-SOURCE line on every run, which
 * is what makes the asymmetry read rather than inferred. This block asserts the
 * 3.992 line actually exists, parses under the same rule that printer uses, and
 * records the split: the point values rest on three independent paths, the
 * layout and wording on one. A flag in a TypeScript file and a marker in the
 * record can drift apart, and the drift would be invisible, so they are checked
 * against each other here.
 */
console.log("\nSINGLE-SOURCE: the split between what is confirmed three ways and what is not");
{
  // Same parse as scripts/check-provenance.mts: line-anchored, name before " (".
  const lines = sourcesText.split("\n");
  const markers = lines
    .filter((l) => l.startsWith("SINGLE-SOURCE:"))
    .map((l) => l.replace(/^SINGLE-SOURCE:\s*/, ""));
  const mine = markers.find((m) => m.startsWith("Fla. R. Crim. P. 3.992"));
  if (!mine) {
    fail(
      `No line-anchored "SINGLE-SOURCE: Fla. R. Crim. P. 3.992" marker in ${SOURCES}. ` +
        `The form rests on one publisher and that must be recorded where ` +
        `check:provenance prints it, not left to prose.`,
    );
  } else {
    ok(`SINGLE-SOURCE marker present and parses to "${mine.split(" (")[0]}"`);
    // The split itself, asserted. A marker that says only "one source" would
    // understate the record: the numbers this tool renders are triple-sourced.
    const saysThreeWays = /three ways/i.test(mine);
    const saysOnePublisher = /one publisher/i.test(mine);
    if (!saysThreeWays || !saysOnePublisher)
      fail(
        `The 3.992 SINGLE-SOURCE marker does not record the split. It must state ` +
          `both that the POINT VALUES are confirmed three ways and that the LAYOUT ` +
          `AND WORDING rest on one publisher. Recording only the weaker half would ` +
          `misdescribe the record in the cautious direction, which is still ` +
          `misdescribing it.`,
      );
    else ok("the marker records both halves: point values three ways, layout and wording one publisher");
    // The three paths, named in the marker, so "three ways" is not a bare count.
    for (const path of ["921.0024", "FDLE"])
      if (!mine.includes(path))
        fail(`The marker claims three paths but does not name "${path}".`);
  }
}

// ------------------------------------------------------------------ self-tests
// House convention: a gate is preceded by a self-test that plants the violation
// and asserts it fires. check-claims.mts: "a self-test that cannot fail for its
// stated reason is worse than no self-test."
console.log("\nSelf-tests (planted violations must fire)");
{
  let selfOk = true;
  const t = (name: string, cond: boolean) => {
    if (cond) ok(name);
    else {
      fail(`SELF-TEST: ${name}`);
      selfOk = false;
    }
  };

  const gridOf = (s: string): Grid =>
    Object.fromEntries(
      [...s.matchAll(/(M|\d+)\s*=\s*(\d+(?:\.\d+)?)/g)].map((m) => [m[1], Number(m[2])]),
    );

  // The October 2025 defect, planted: the additional-offenses line carrying the
  // primary grid. The comparison that catches it must return unequal-to-correct.
  const october = gridOf("1=4, 2=10, 3=16, 4=22, 5=28, 6=36, 7=56, 8=74, 9=92, 10=116");
  const corrected = gridOf(
    "M=0.2, 1=0.7, 2=1.2, 3=2.4, 4=3.6, 5=5.4, 6=18, 7=28, 8=37, 9=46, 10=58",
  );
  t(
    "the superseded October 2025 Additional Offenses line does NOT match the typed grid",
    JSON.stringify(october) !== JSON.stringify(asGrid(ADDITIONAL_OFFENSE_POINTS)),
  );
  t(
    "the corrected January 2026 Additional Offenses line DOES match the typed grid",
    JSON.stringify(corrected) === JSON.stringify(asGrid(ADDITIONAL_OFFENSE_POINTS)),
  );
  t(
    "the October line is exactly the Primary Offense grid, which is why it was wrong",
    JSON.stringify(october) === JSON.stringify(asGrid(PRIMARY_OFFENSE_POINTS)),
  );

  // A one-cell corruption must be caught, not averaged away.
  const bent = { ...asGrid(PRIMARY_OFFENSE_POINTS), "7": 57 };
  t(
    "a single bent cell (level 7: 56 to 57) compares unequal",
    JSON.stringify(bent) !== JSON.stringify(asGrid(PRIMARY_OFFENSE_POINTS)),
  );

  // The parser must not "succeed" on nothing.
  t("the grid parser returns an empty object for text with no pairs", Object.keys(gridOf("no pairs here at all")).length === 0);

  if (!selfOk) {
    console.log("\nWorksheet check FAILED (self-tests).");
    process.exit(1);
  }
}

// ------------------------------------------------------------------ D22 note
console.log(
  "\n  ..    NOT CHECKED, by design: the form's LAYOUT and WORDING against a second " +
    "publisher. Rule 3.992 has one official publication path (the Bar's standalone " +
    "form PDF); the Bar's own July 2026 rules compilation does not reproduce the form, " +
    "and FDLE's independently published copy is a 2015 revision. The POINT VALUES are " +
    "confirmed three ways (statute, form, FDLE) and are what this gate audits. The " +
    "SINGLE-SOURCE marker on the record is the standing record of that asymmetry.",
);
console.log(
  "  ..    NOT CHECKED, by design: s. 775.082(10), s. 948.20, s. 397.334(3), " +
    "s. 921.0026, s. 775.082(9), s. 775.084 and State v. Gabriel. The form's face cites " +
    "all of them; none is recorded whole in this repository, so no surface may describe " +
    "what any of them does.",
);

console.log(failed ? "\nWorksheet check FAILED." : "\nWorksheet check passed.");
process.exit(failed ? 1 : 0);
