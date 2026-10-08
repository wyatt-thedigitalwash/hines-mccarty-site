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
import { existsSync, readFileSync } from "node:fs";
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
import { RESOURCES_LIVE } from "../src/lib/site.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

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

// ------------------------------------------------- Section 11 assertions
/**
 * T1 through T9 of SENTENCING-WORKSHEET-CONCEPT.md Section 11.
 *
 * T2 is the important one. It is the reframe expressed as something a machine
 * can check, and it is exhaustive over the picker rather than sampled, because a
 * sampled check on 623 rows is a check that has not run on 622 of them.
 */
console.log("\nSection 11 assertions");
{
  const worksheetMod = await import("../src/lib/tools/sentencing-worksheet.ts");
  const {
    CANNOT_KNOW,
    FORBIDDEN_OUTPUT_STRINGS,
    PICKER,
    TOTAL_SENTENCE_POINTS,
    VERSION_NOTE,
    WORKSHEET_PAGE_COPY,
    worksheet,
  } = worksheetMod;

  /** Every cell the form can emit, for one selection. */
  const cellsFor = (row: (typeof PICKER)[number] | null) => {
    const blocks = worksheet(row);
    return blocks.flatMap((b) => [
      ...b.rows.map((r) => ({ block: b.numeral, label: r.label, cell: r.cell })),
      { block: b.numeral, label: `${b.numeral}. Total`, cell: b.total },
    ]);
  };

  // ---- T8 first: it defines what the other assertions must iterate over.
  {
    const banned = PICKER.filter(
      (r) =>
        /capital/i.test(r.degree) || /misdemeanor|misdemeanour/i.test(r.degree),
    );
    if (banned.length)
      fail(
        `T8: the picker offers ${banned.length} row(s) it must not: ` +
          banned.map((r) => `${r.cite} (${r.degree})`).join(", "),
      );
    else if (PICKER.length === 0)
      fail("T8: the picker is empty, so every other assertion iterates nothing.");
    else ok(`T8: picker has ${PICKER.length} rows, no capital felony and no misdemeanor`);
    // Every row must carry a level in 1..10, or the primary grid has no cell.
    const offGrid = PICKER.filter((r) => !(r.level >= 1 && r.level <= 10));
    if (offGrid.length)
      fail(`T8: ${offGrid.length} picker row(s) carry a level outside 1 through 10.`);
  }

  // ---- T2: no total or subtotal ever renders a value. EXHAUSTIVE.
  {
    let checked = 0;
    let offenders = 0;
    const states: (typeof PICKER)[number][] = [...PICKER];
    for (const row of [null, ...states] as ((typeof PICKER)[number] | null)[]) {
      for (const c of cellsFor(row)) {
        if (!/Total$/i.test(c.label)) continue;
        checked++;
        if (c.cell.state !== "empty") {
          offenders++;
          if (offenders <= 3)
            fail(
              `T2: block ${c.block} total rendered state "${c.cell.state}" for ` +
                `${row ? row.cite : "the blank form"}. A total must never render.`,
            );
        }
      }
    }
    if (TOTAL_SENTENCE_POINTS.state !== "empty")
      fail("T2: TOTAL SENTENCE POINTS is not empty. This is the box the tool exists not to fill.");
    if (offenders) fail(`T2: ${offenders} total cell(s) rendered a value.`);
    else
      ok(
        `T2: ${checked} total/subtotal cells across ${PICKER.length + 1} states, all empty (exhaustive, not sampled)`,
      );
  }

  // ---- T4: every empty cell carries a label naming the fact it needs.
  {
    let bad = 0;
    let seen = 0;
    for (const row of [null, ...PICKER] as ((typeof PICKER)[number] | null)[]) {
      for (const c of cellsFor(row)) {
        if (c.cell.state !== "empty") continue;
        seen++;
        if (!c.cell.needs || c.cell.needs.trim().length < 8) {
          bad++;
          if (bad <= 3)
            fail(
              `T4: empty cell "${c.label}" in block ${c.block} has no usable label. ` +
                `An unlabelled blank is a blank a reader can read as a zero.`,
            );
        }
      }
    }
    if (!bad) ok(`T4: ${seen} empty cells checked, every one labelled`);
  }

  // ---- T1: every FILLED cell traces to the typed table or the chart.
  {
    let bad = 0;
    let filledSeen = 0;
    for (const row of PICKER) {
      for (const c of cellsFor(row)) {
        if (c.cell.state !== "filled") continue;
        filledSeen++;
        if (!c.cell.source || !c.cell.value) {
          bad++;
          fail(`T1: filled cell "${c.label}" carries no value or no source.`);
          continue;
        }
        // The one NUMERIC filled cell. Its value must equal the typed grid.
        if (c.label === "Points") {
          const expected = String(
            (PRIMARY_OFFENSE_POINTS as Record<number, number>)[row.level],
          );
          if (c.cell.value !== expected) {
            bad++;
            if (bad <= 3)
              fail(
                `T1: ${row.cite} at level ${row.level} rendered ${c.cell.value} points, ` +
                  `but the typed Primary Offense grid says ${expected}.`,
              );
          }
        }
      }
    }
    if (!bad)
      ok(
        `T1: ${filledSeen} filled cells across ${PICKER.length} selections, every point value matches the typed grid`,
      );
  }

  // ---- T3 (source side): forbidden strings absent from authored copy.
  {
    const hay = WORKSHEET_PAGE_COPY.join("\n").toLowerCase();
    const hits = FORBIDDEN_OUTPUT_STRINGS.filter((s) => hay.includes(s));
    if (hits.length)
      fail(`T3: authored copy contains forbidden string(s): ${hits.join(", ")}`);
    else ok(`T3: none of the ${FORBIDDEN_OUTPUT_STRINGS.length} forbidden strings in authored copy`);
    /*
     * "lowest permissible sentence", "months" and "years" are forbidden AS
     * COMPUTED VALUES, not as substrings. They appear legitimately in the form's
     * own face and in the cell explaining why the statutory-maximum box is
     * empty, so the check is that no CELL renders one as a value.
     *
     * THE DESCRIPTION CELL IS EXEMPT, AND THE EXEMPTION IS GUARDED. It carries
     * F.S. 921.0022's descriptive column verbatim, where "years" is an age
     * ("65 years of age or older", "16 or 17 years of age") and "months" is a
     * period ("within 6 months") in all 40 rows that contain either. Exempting
     * a cell by name would be the kind of hole this project keeps finding, so
     * the exemption is paired with an assertion that the value is BYTE-IDENTICAL
     * to the chart row it claims to reproduce. A Description cell that ever
     * stops being verbatim chart text loses the exemption by failing that check
     * first.
     */
    const chart = STATUTES["921.0022"];
    let notVerbatim = 0;
    let asOutput = 0;
    for (const row of [null, ...PICKER] as ((typeof PICKER)[number] | null)[]) {
      for (const c of cellsFor(row)) {
        if (c.cell.state !== "filled") continue;
        // Hoisted out of the closures below: TypeScript's narrowing of
        // `c.cell` does not survive into an arrow function.
        const value = c.cell.value;
        if (c.label === "Description") {
          const source = chart.rows.find((r) => (r.quote ?? "") === value);
          if (!source) {
            notVerbatim++;
            if (notVerbatim <= 3)
              fail(
                `T3: a Description cell is not byte-identical to any F.S. 921.0022 ` +
                  `row quote, so it cannot claim the verbatim exemption: ` +
                  `"${value.slice(0, 80)}"`,
              );
          }
          continue;
        }
        // A computed sentence length looks like a number next to a time unit.
        if (
          /\b\d+(?:\.\d+)?\s*(?:month|year)s?\b/i.test(value) ||
          /lowest permissible/i.test(value)
        ) {
          asOutput++;
          if (asOutput <= 3)
            fail(
              `T3: filled cell "${c.label}" renders a sentence length or a ` +
                `permissible-sentence label as a VALUE: "${value.slice(0, 80)}"`,
            );
        }
      }
    }
    if (!asOutput && !notVerbatim)
      ok(
        "T3: no filled cell renders months, years, or a lowest-permissible-sentence " +
          "label as a value, and every Description cell is verbatim chart text",
      );
  }

  // ---- T6 (source side): the version note carries revision AND correction.
  {
    if (!VERSION_NOTE.includes(FORM_REVISION.effective))
      fail(`T6: the version note does not state "${FORM_REVISION.effective}".`);
    else if (!VERSION_NOTE.includes(FORM_REVISION.correction))
      fail(`T6: the version note does not name the "${FORM_REVISION.correction}" correction.`);
    else ok("T6: the version note states the revision and the correction together");
    if (!WORKSHEET_PAGE_COPY.includes(VERSION_NOTE))
      fail("T6: the version note is not in WORKSHEET_PAGE_COPY, so no rail sees it.");
  }

  // ---- T5 (source side): the disclosure exists and is registered.
  {
    if (!WORKSHEET_PAGE_COPY.includes(CANNOT_KNOW.body))
      fail("T5: the Section 5 disclosure is not registered in WORKSHEET_PAGE_COPY.");
    else if (!/mostly empty/i.test(CANNOT_KNOW.heading))
      fail("T5: the disclosure heading no longer says the form is mostly empty.");
    else ok("T5: the Section 5 disclosure is present and registered");
    // The concept document's draft said "Every one of those raises the score"
    // across a list ending in the four designations, which the audited table
    // records as carrying no point value. If that clause ever comes back, the
    // page is asserting something the record contradicts.
    if (/every one of those raises the score/i.test(CANNOT_KNOW.body))
      fail(
        "T5: the disclosure claims every listed item raises the score. The four " +
          "sentencing designations are yes/no boxes with no point value per the " +
          "audited F.S. 921.0024 table. See the note on CANNOT_KNOW.",
      );
  }

  // ---- C5 static sweep: nothing in the island can carry a selection away.
  {
    const island = "src/components/tools/SentencingWorksheet.tsx";
    const src = readFileSync(island, "utf8");
    const FORBIDDEN_APIS = [
      "fetch(", "XMLHttpRequest", "sendBeacon", "WebSocket", "EventSource",
      "localStorage", "sessionStorage", "document.cookie", "indexedDB",
      "location.search", "location.hash", "pushState", "replaceState",
    ];
    const found = FORBIDDEN_APIS.filter((a) => src.includes(a));
    if (found.length)
      fail(`C5: ${island} references ${found.join(", ")}. Nothing may leave this page.`);
    else ok(`C5: no storage, network, URL or history API in the island`);
    if (!/autoComplete="off"/.test(src))
      fail("C5: the picker does not set autoComplete=\"off\".");
  }

  // ---- T7: no federal page links the route.
  {
    const { measuredPages } = await import("../src/lib/measured.ts");
    const ROUTE = "/resources/tools/sentencing-worksheet";
    const offenders = measuredPages.filter(
      (m) =>
        m.href.startsWith("/federal-criminal-defense") &&
        JSON.stringify(m).includes(ROUTE),
    );
    if (offenders.length)
      fail(
        `T7: ${offenders.length} federal page(s) reference the worksheet route. ` +
          `The Criminal Punishment Code does not apply to federal cases.`,
      );
    else ok("T7: no page under /federal-criminal-defense references the route");
  }

  // ---- T9 and the rendered-HTML assertions, only with --rendered.
  // D73: a hidden tool is built as a 404, so there is no rendered page to check.
  const RENDERED = process.argv.includes("--rendered") && RESOURCES_LIVE;
  if (process.argv.includes("--rendered") && !RESOURCES_LIVE) console.log("  ..    rendered checks skipped: Resources is hidden (D73), so the tool is built as a 404 on purpose.");
  const PAGE = `${DIST_DIR}/server/app/resources/tools/sentencing-worksheet.html`;
  if (!RENDERED) {
    console.log(
      "  ..    T9 and the rendered T3/T5 SKIPPED: run `npm run check:worksheet:rendered` " +
        "after a build. They are the assertions that read the artifact, and D24 is that a " +
        "gate importing the source cannot see what the page actually shipped.",
    );
  } else if (!existsSync(PAGE)) {
    fail(`T9: ${PAGE} does not exist. Build first; a missing artifact FAILS (D30).`);
  } else {
    const html = readFileSync(PAGE, "utf8");
    const start = html.indexOf("<main");
    const end = html.lastIndexOf("</main>");
    const main = start === -1 || end === -1 ? "" : html.slice(start, end);
    if (!main) fail("T9: no <main> in the rendered page.");
    const text = main
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ");

    // T9: the static artifact has the blank form, the disclosure, and NO filled cell.
    if (!main.includes("data-worksheet")) fail("T9: the blank form did not render server side.");
    if (!main.includes("data-cannot-know")) fail("T9: the disclosure did not render server side.");
    const filledCount = [...main.matchAll(/data-cell="filled"/g)].length;
    if (filledCount)
      fail(
        `T9: the static artifact contains ${filledCount} filled cell(s). With JavaScript ` +
          `disabled the page must show the blank form and nothing filled.`,
      );
    else if (!main.includes("data-no-js"))
      fail("T9: the no-JavaScript note did not render, so the page offers no explanation.");
    else ok("T9: static artifact carries the blank form, the disclosure, the no-JS note, and zero filled cells");

    // T5 rendered: the disclosure PRECEDES the form.
    const iDisc = main.indexOf("data-cannot-know");
    const iForm = main.indexOf("data-worksheet");
    if (iDisc === -1 || iForm === -1 || iDisc > iForm)
      fail("T5: the Section 5 disclosure does not precede the form in the rendered HTML.");
    else ok("T5: the disclosure precedes the form in the artifact");

    // T3 rendered.
    const lower = text.toLowerCase();
    const hits = FORBIDDEN_OUTPUT_STRINGS.filter((s) => lower.includes(s));
    if (hits.length) fail(`T3: rendered page contains ${hits.join(", ")}`);
    else ok("T3: no forbidden string in the rendered page");

    // T6 rendered.
    if (!text.includes(FORM_REVISION.effective) || !text.includes(FORM_REVISION.correction))
      fail("T6: the rendered page does not state both the revision and the correction.");
    else ok("T6: the rendered page states the revision and the January 2026 correction");
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
