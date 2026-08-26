/**
 * check:registries. The numbered registries are internally consistent, and
 * every cross-reference to one points at an entry that exists.
 *
 * WHY THIS EXISTS, and it is an incident rather than a tidiness preference.
 *
 * On 2026-08-24 two sessions worked in this tree at the same time. One built
 * the offense-level instrument; the other built the charging-document decoder.
 * Both appended a decision to docs/build/DECISIONS.md, and **both called it
 * D35**. The file then held two different D35 entries, on unrelated subjects,
 * and nothing said so. It was caught by a person reading `git diff` before
 * committing, which is exactly the kind of catch that does not happen twice.
 *
 * It is the same defect family as everything else in HUNT-LIST: **nothing was
 * watching a surface that two writers share.** A decision registry is a shared
 * append-only surface with a numeric key, which is the single easiest thing in
 * this repository to collide on and, until now, the only shared surface with
 * no gate. Every other one has had a rail for weeks.
 *
 * What makes it worse than a merge conflict is that it does not conflict. Two
 * writers appending to the end of a file produce no textual overlap, so git
 * merges them cleanly and the numbering is wrong in a way only a reader can
 * see. **A collision that git resolves silently is invisible by construction.**
 *
 * WHAT IT CHECKS, three things:
 *
 *   R1  DECISIONS.md decision numbers: no duplicates, no gaps.
 *   R2  HUNT-LIST.md instance and defect numbers: no duplicates, no gaps.
 *   R3  Every D<n> and Instance <n> reference in the code and the docs points
 *       at an entry that exists.
 *
 * WHAT IT DELIBERATELY DOES NOT CHECK: ORDER. docs/build/DECISIONS.md is not
 * in ascending order and is not meant to be. D15 through D18 sit above D14
 * down to D9, because that section was written in reverse chronological order
 * during a wave of decisions. Requiring ascending order would fail the build on
 * a file that is correct, and a gate whose first finding is wrong teaches its
 * readers to skim the next one (HUNT-LIST Instance 14's note on this gate
 * family's first run). Duplicates and gaps are defects; order is a choice.
 *
 * R3 IS THE HALF THAT WOULD HAVE CAUGHT THE RENUMBER. Resolving the collision
 * meant renumbering one D35 to D36, and two source files already cited it by
 * number. Nothing but a reader connected those. R3 is what makes a renumber
 * safe to perform: break a reference and the build stops.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

const DECISIONS = "docs/build/DECISIONS.md";
const HUNT_LIST = "docs/research/HUNT-LIST.md";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

// ---------------------------------------------------------------- parsing
/**
 * Decision headings, in the two spellings this file actually uses.
 *
 * `### D33. Title` is the current form; `**D19. Title**` is how the
 * statute-table decisions were written and they are not going to be reformatted
 * to suit a checker.
 *
 * THE PERIOD IS LOAD-BEARING. Requiring `D<n>.` is what separates a heading
 * from a reference in prose: line 378 of DECISIONS.md opens with `**D6's
 * client-communication requirement carries over unchanged**`, which is a
 * sentence about D6, not a definition of it. Matching on `**D<n>` alone counts
 * it as an entry and reports 38 decisions where there are 37.
 */
const DECISION_HEADING = /^(?:#{2,4}\s*|\*\*)D(\d{1,3})\.\s/gm;
const INSTANCE_HEADING = /^#{2,4}\s*Instance (\d{1,3}):/gm;
const DEFECT_HEADING = /^#{2,4}\s*Defect (\d{1,3}):/gm;

export function numbersIn(text: string, re: RegExp): number[] {
  return [...text.matchAll(new RegExp(re.source, re.flags))].map((m) => Number(m[1]));
}

/** Duplicates and gaps, as two distinct findings. */
export function registryProblems(
  label: string,
  nums: number[],
): string[] {
  const errs: string[] = [];
  if (!nums.length) return [`${label}: no entries found at all, so this gate is checking nothing`];

  const seen = new Map<number, number>();
  for (const n of nums) seen.set(n, (seen.get(n) ?? 0) + 1);
  for (const [n, count] of [...seen].sort((a, b) => a[0] - b[0])) {
    if (count > 1) {
      errs.push(
        `${label}: number ${n} is used ${count} times. Two writers appending to a ` +
          `shared registry produce no textual conflict, so git merges the collision ` +
          `cleanly and only a reader sees it. Renumber the later entry and update any ` +
          `reference to it (R3 will tell you which).`,
      );
    }
  }

  const max = Math.max(...nums);
  const missing = [];
  for (let i = 1; i <= max; i++) if (!seen.has(i)) missing.push(i);
  if (missing.length) {
    errs.push(
      `${label}: ${missing.length} number(s) in 1..${max} have no entry: ` +
        `${missing.join(", ")}. A gap means an entry was deleted or a number was ` +
        `skipped; either way a reference to it now points at nothing.`,
    );
  }
  return errs;
}

// ---------------------------------------------------------------- R3
/**
 * Files that can cite a registry entry. Source, gates, and every document
 * except the two registries themselves, which define rather than cite.
 */
function scan(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next" || e.startsWith(".")) continue;
    const full = join(dir, e);
    if (statSync(full).isDirectory()) scan(full, out);
    else if (/\.(ts|tsx|mts|md)$/.test(e)) out.push(full);
  }
  return out;
}

export type Ref = { file: string; line: number; kind: "D" | "Instance"; n: number };

/**
 * References, matched at a word boundary.
 *
 * Scoped to `D<n>` and `Instance <n>` because those are the two registries.
 * Verified against the tree before shipping: every one of the 26 distinct
 * `D<n>` values and 5 `Instance <n>` values in src/ and scripts/ today is a
 * real citation of a real entry, with no incidental match. That check was run
 * BEFORE this gate was wired in, because a gate whose first finding is a false
 * positive is worse than no gate.
 *
 * THE MARKER, and why it is line-scoped rather than file-scoped. This gate's
 * own self-tests plant `D99` and `Instance 42` (REGISTRY-FIXTURE), and it scans
 * scripts/, so its first run failed on its own fixtures. The obvious fix is to
 * skip this whole file,
 * and it is the wrong one: this file makes eight real citations of real
 * entries, and skipping it would exempt exactly the file most likely to cite a
 * decision it just renumbered. So the exemption is one line wide.
 *
 * A marker is an escape hatch, so the count of suppressed lines is printed on
 * every run rather than being silent. An exemption nobody can see is how a rail
 * gets switched off one line at a time.
 */
export const FIXTURE_MARKER = "REGISTRY-FIXTURE";

export function refsIn(file: string, text: string): Ref[] {
  const out: Ref[] = [];
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(FIXTURE_MARKER)) continue;
    for (const m of lines[i].matchAll(/\bD(\d{1,3})\b/g))
      out.push({ file, line: i + 1, kind: "D", n: Number(m[1]) });
    for (const m of lines[i].matchAll(/\bInstance (\d{1,3})\b/gi))
      out.push({ file, line: i + 1, kind: "Instance", n: Number(m[1]) });
  }
  return out;
}

export function danglingRefs(
  refs: Ref[],
  decisions: Set<number>,
  instances: Set<number>,
): string[] {
  const errs: string[] = [];
  for (const r of refs) {
    const known = r.kind === "D" ? decisions : instances;
    if (known.has(r.n)) continue;
    errs.push(
      `${r.file}:${r.line} cites ${r.kind === "D" ? `D${r.n}` : `Instance ${r.n}`}, ` +
        `which does not exist. Highest recorded is ` +
        `${r.kind === "D" ? `D${Math.max(...decisions)}` : `Instance ${Math.max(...instances)}`}.`,
    );
  }
  return errs;
}

// ---------------------------------------------------------------- self-tests
console.log("Registry-numbering self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  // PLANTED: the exact collision that happened, two D35 entries.
  const collided = [
    "### D34. A paragraph from one of the five partial tables",
    "### D35. F.S. 921.0023(4) is recorded as a first degree felony",
    "### D35. A criterion that fails on the words of the statute",
  ].join("\n\n");
  const dupErrs = registryProblems("DECISIONS.md", numbersIn(collided, DECISION_HEADING));
  t("PLANTED: R1 fires on the real 2026-08-24 collision, two D35 entries",
    dupErrs.some((e) => e.includes("35 is used 2 times")));

  // PLANTED: a skipped number.
  const gapped = ["### D1. one", "### D2. two", "### D4. four"].join("\n\n");
  t("PLANTED: R1 fires on a skipped number (D3 missing)",
    registryProblems("DECISIONS.md", numbersIn(gapped, DECISION_HEADING))
      .some((e) => e.includes("no entry: 3")));

  // The two heading spellings both parse, and a possessive reference does not.
  const mixed = [
    "### D23. heading form one",
    "**D19. heading form two**",
    "**D6's client-communication requirement carries over unchanged**",
  ].join("\n\n");
  const parsed = numbersIn(mixed, DECISION_HEADING);
  t("both heading spellings parse (### D23. and **D19.)",
    parsed.includes(23) && parsed.includes(19));
  t("CONTROL: a possessive reference in prose is NOT counted as an entry (**D6's)",
    !parsed.includes(6) && parsed.length === 2);

  // CONTROL: out-of-order is legal. DECISIONS.md really is out of order.
  t("CONTROL: R1 stays silent on out-of-order but complete numbering",
    registryProblems("DECISIONS.md", [3, 1, 2]).length === 0);

  // PLANTED: a cross-reference to a number that does not exist.
  const planted = ["// See DECISIONS.md ", "D", "99 and HUNT-LIST ", "Instance ", "42."].join("");
  const refs = refsIn("planted.ts", planted);
  const dangling = danglingRefs(refs, new Set([1, 2, 3]), new Set([1, 2]));
  t("PLANTED: R3 fires on a dangling decision reference (D99)", // REGISTRY-FIXTURE
    dangling.some((e) => e.includes("D" + "99")));
  t("PLANTED: R3 fires on a dangling instance reference (Instance 42)", // REGISTRY-FIXTURE
    dangling.some((e) => e.includes("Instance " + "42")));
  t("CONTROL: R3 stays silent on a reference that resolves",
    danglingRefs(refsIn("x.ts", "per D2 and Instance 1"), new Set([1, 2]), new Set([1]))
      .length === 0);

  // PLANTED: the renumber case, which is the one R3 exists for. A file citing
  // D35 after the second D35 was renumbered to D36 must fail.
  t("PLANTED: R3 fires on a reference orphaned by a renumber",
    danglingRefs(refsIn("copy.ts", "DECISIONS.md " + "D35" + ", and the concept document"),
      new Set([1, 2, 3]), new Set([1])).length > 0);

  // An empty registry must FAIL, not pass vacuously. D30's principle: "the
  // file is empty" and "the file is consistent" must never look the same.
  t("PLANTED: R1 fires on an empty registry rather than passing vacuously",
    registryProblems("DECISIONS.md", []).length > 0);

  if (!ok) {
    console.log("\nRegistry check FAILED (self-tests). The gate cannot be trusted to report.");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- real run
const decisionsText = readFileSync(DECISIONS, "utf8");
const huntText = readFileSync(HUNT_LIST, "utf8");

const decisionNums = numbersIn(decisionsText, DECISION_HEADING);
const instanceNums = numbersIn(huntText, INSTANCE_HEADING);
const defectNums = numbersIn(huntText, DEFECT_HEADING);

console.log("\nR1: DECISIONS.md numbering");
{
  const errs = registryProblems("DECISIONS.md", decisionNums);
  errs.forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    ${decisionNums.length} decisions, D1 through D${Math.max(...decisionNums)}, ` +
        `no duplicates and no gaps (order not checked, and the file is not in order)`,
    );
}

console.log("\nR2: HUNT-LIST.md numbering");
{
  const a = registryProblems("HUNT-LIST.md instances", instanceNums);
  const b = registryProblems("HUNT-LIST.md defects", defectNums);
  [...a, ...b].forEach(fail);
  if (!a.length && !b.length)
    console.log(
      `  ok    ${instanceNums.length} instances (1..${Math.max(...instanceNums)}) and ` +
        `${defectNums.length} defect categor(y/ies) (1..${Math.max(...defectNums)}), ` +
        `no duplicates and no gaps`,
    );
}

console.log("\nR3: cross-references resolve");
{
  const decisions = new Set(decisionNums);
  const instances = new Set(instanceNums);
  const files = [...scan("src"), ...scan("scripts"), ...scan("docs")].filter(
    (f) => f !== DECISIONS && f !== HUNT_LIST,
  );
  const refs = files.flatMap((f) => refsIn(f, readFileSync(f, "utf8")));
  const suppressed = files.flatMap((f) =>
    readFileSync(f, "utf8").split("\n").filter((l) => l.includes(FIXTURE_MARKER)).map(() => f),
  );
  const errs = danglingRefs(refs, decisions, instances);
  errs.slice(0, 12).forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    ${refs.length} reference(s) across ${files.length} file(s) all resolve ` +
        `(${refs.filter((r) => r.kind === "D").length} to decisions, ` +
        `${refs.filter((r) => r.kind === "Instance").length} to instances)` +
        (suppressed.length
          ? `\n  ..    ${suppressed.length} line(s) suppressed by ${FIXTURE_MARKER}, all in ` +
            `${[...new Set(suppressed)].join(", ")}. Printed, not silent: an exemption ` +
            `nobody can see is how a rail gets switched off one line at a time.`
          : ""),
    );
}

// D22: say what was not checked, every run.
console.log(
  "\n  ..    NOT CHECKED: whether a reference cites the RIGHT entry. R3 proves D29 " +
    "exists, not that the sentence citing it is about the measured-surface registry. " +
    "Also not checked: ORDER, deliberately, because DECISIONS.md is not in ascending " +
    "order and is not meant to be; and prose references in files this gate does not " +
    "scan, which is anything outside src/, scripts/ and docs/.",
);

console.log(failed ? "\nRegistry check FAILED." : "\nRegistry check passed.");
process.exit(failed ? 1 : 0);
