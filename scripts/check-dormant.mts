/**
 * check:dormant. Nothing that exists is unreachable from the thing that runs it.
 *
 * WHY THIS EXISTS. Three defects in one week, all the same shape, none visible
 * to any rail:
 *
 *   1. `scripts/check-worksheet.mts`, 20KB, twenty passing self-tests,
 *      registered in no npm script. Three source files cited `check:worksheet`
 *      in prose as though it ran. It never ran.
 *   2. `WORKSHEET_PAGE_COPY`, twelve strings including an H1, absent from
 *      `TOOL_PAGE_COPY` and therefore outside the banned-term, duplication and
 *      provenance rails. This is the exact D29 hole assertion T9 was written to
 *      close for one page, live on another.
 *   3. `src/lib/tools/sentencing-worksheet.ts`, the whole form model plus an
 *      eleven-entry forbidden-output list, imported by nothing.
 *
 * **Every rail on this site checks what is wired. None checks what is not.**
 * That is not a gap in any one gate; it is a gap between them, and it is
 * structural: a gate iterates a registry, so a thing outside the registry is
 * outside the gate, and the gate reports green on a smaller world than it
 * appears to describe. HUNT-LIST Instance 19.
 *
 * The three checks below are the three ways a thing can exist here without
 * being reachable: a gate no lifecycle invokes, copy no extractor reads, a
 * module no file imports.
 *
 * WHAT THIS IS NOT. It is not a dead-code detector and it does not care about
 * unused exports. The unit is the whole artifact: a file, or a named copy
 * constant. A module with one unused export is fine; a module nothing imports
 * is not.
 *
 * EVERY CHECK IS A PURE FUNCTION of its inputs, so the self-tests plant all
 * three defects and prove each fires. The real run builds the same inputs from
 * the filesystem and hands them to the same functions.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve as resolvePath } from "node:path";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

// ---------------------------------------------------------------- D1
/**
 * Gate files reachable from an npm LIFECYCLE, not merely present in the
 * scripts block.
 *
 * The distinction is the defect. `check:worksheet` could have been added as an
 * npm script and still never run, because nothing invokes it; being listed in
 * `scripts` is not being wired. So reachability is computed transitively from
 * the lifecycle roots, and a gate referenced only by an orphan alias is still
 * dormant.
 *
 * `prewrite` is deliberately NOT a root. It is an author convenience that runs
 * on demand, and treating it as a root would let a gate satisfy this check
 * while never running in a build.
 */
export function dormantGates(
  gateFiles: string[],
  scripts: Record<string, string>,
  roots: string[],
): string[] {
  // Which npm script names are reachable from a root, transitively.
  const reachable = new Set<string>();
  const walk = (name: string) => {
    if (reachable.has(name)) return;
    if (!(name in scripts)) return;
    reachable.add(name);
    for (const m of scripts[name].matchAll(/npm run ([\w:-]+)/g)) walk(m[1]);
  };
  for (const r of roots) walk(r);

  const out: string[] = [];
  for (const file of gateFiles) {
    const referencedBy = Object.keys(scripts).filter((k) =>
      scripts[k].includes(file),
    );
    if (referencedBy.length === 0) {
      out.push(
        `${file} is a gate script that NO npm script runs. A gate nothing ` +
          `invokes is worse than no gate: its passing self-tests read as ` +
          `coverage. Register it in prebuild or postbuild, or delete it.`,
      );
      continue;
    }
    if (!referencedBy.some((k) => reachable.has(k))) {
      out.push(
        `${file} is referenced by npm script(s) [${referencedBy.join(", ")}], ` +
          `none of which is reachable from ${roots.join(" or ")}. Being listed ` +
          `in the scripts block is not being wired.`,
      );
    }
  }
  return out;
}

// ---------------------------------------------------------------- D2
/**
 * Named copy constants whose strings reach no extractor.
 *
 * The measured corpus is every string `measuredPages` exposes. A copy constant
 * whose strings are absent from it renders to readers and is invisible to the
 * content rails, which is D29's premise being violated by something D29 cannot
 * see.
 *
 * Partial membership fails too, and deliberately: a constant half-registered is
 * a constant whose unregistered half is unchecked, and "mostly gated" is the
 * state that produces confident wrong answers.
 */
export function unmeasuredCopy(
  constants: { file: string; name: string; strings: string[] }[],
  measured: Set<string>,
): string[] {
  const out: string[] = [];
  for (const c of constants) {
    if (c.strings.length === 0) {
      out.push(`${c.file} exports ${c.name} with no strings in it; an empty copy surface is not a covered one`);
      continue;
    }
    const missing = c.strings.filter((s) => !measured.has(s));
    if (missing.length)
      out.push(
        `${c.file} exports ${c.name}, and ${missing.length} of its ` +
          `${c.strings.length} string(s) reach NO extractor, so no content rail ` +
          `sees them (D29). First: "${missing[0].slice(0, 60)}${missing[0].length > 60 ? "..." : ""}"`,
      );
  }
  return out;
}

// ---------------------------------------------------------------- D3
/** Modules under src/lib/tools that nothing imports. */
export function orphanModules(
  modules: string[],
  importers: Map<string, string[]>,
): string[] {
  return modules
    .filter((m) => (importers.get(m) ?? []).length === 0)
    .map(
      (m) =>
        `${m} is imported by nothing. A module no file imports ships its ` +
          `contents to no reader and its rules to no gate; wire it or delete it.`,
    );
}

// ---------------------------------------------------------------- self-tests
console.log("Dormancy self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  // --- D1
  const wired = {
    prebuild: "npm run check:a && npm run check:b",
    postbuild: "npm run check:c",
    "check:a": "node scripts/check-a.mts",
    "check:b": "node scripts/check-b.mts",
    "check:c": "node scripts/check-c.mts",
  };
  t("D1 silent when every gate is reachable from a lifecycle",
    dormantGates(["scripts/check-a.mts", "scripts/check-b.mts", "scripts/check-c.mts"], wired, ["prebuild", "postbuild"]).length === 0);

  // PLANTED 1: the check-worksheet.mts defect exactly, a gate no script runs.
  t("PLANTED 1: a gate script NO npm script runs FIRES",
    dormantGates(["scripts/check-a.mts", "scripts/check-orphan.mts"], wired, ["prebuild", "postbuild"])
      .some((e) => e.includes("check-orphan.mts") && e.includes("NO npm script runs")));

  // PLANTED 1b: the subtler half. Registered, but nothing invokes the alias.
  const aliased = { ...wired, "check:d": "node scripts/check-d.mts" };
  t("PLANTED 1b: a gate registered as a script but in NO lifecycle FIRES",
    dormantGates(["scripts/check-d.mts"], aliased, ["prebuild", "postbuild"])
      .some((e) => e.includes("none of which is reachable")));
  t("D1 follows transitive npm run chains",
    dormantGates(["scripts/check-e.mts"],
      { prebuild: "npm run gates", gates: "npm run check:e", "check:e": "node scripts/check-e.mts" },
      ["prebuild"]).length === 0);
  t("D1 does NOT accept prewrite as a lifecycle root",
    dormantGates(["scripts/check-f.mts"],
      { prebuild: "npm run check:a", prewrite: "node scripts/check-f.mts", "check:a": "node scripts/check-a.mts" },
      ["prebuild", "postbuild"]).some((e) => e.includes("check-f.mts")));

  // --- D2
  const corpus = new Set(["alpha", "beta"]);
  t("D2 silent when every string is measured",
    unmeasuredCopy([{ file: "x.ts", name: "X_PAGE_COPY", strings: ["alpha", "beta"] }], corpus).length === 0);

  // PLANTED 2: the WORKSHEET_PAGE_COPY defect exactly.
  t("PLANTED 2: a copy constant outside every extractor FIRES",
    unmeasuredCopy([{ file: "w.ts", name: "WORKSHEET_PAGE_COPY", strings: ["an H1 nobody registered", "alpha"] }], corpus)
      .some((e) => e.includes("1 of its 2") && e.includes("NO extractor")));
  t("PLANTED 2b: a PARTLY registered constant still FIRES",
    unmeasuredCopy([{ file: "w.ts", name: "P", strings: ["alpha", "beta", "unregistered"] }], corpus).length === 1);
  t("PLANTED 2c: an EMPTY copy constant FIRES",
    unmeasuredCopy([{ file: "w.ts", name: "E", strings: [] }], corpus)
      .some((e) => e.includes("no strings in it")));

  // --- D3
  const edges = new Map<string, string[]>([
    ["src/lib/tools/used.ts", ["src/app/page.tsx"]],
    ["src/lib/tools/lonely.ts", []],
  ]);
  t("D3 silent for a module something imports",
    orphanModules(["src/lib/tools/used.ts"], edges).length === 0);

  // PLANTED 3: the sentencing-worksheet.ts defect exactly.
  t("PLANTED 3: a module in src/lib/tools imported by nothing FIRES",
    orphanModules(["src/lib/tools/used.ts", "src/lib/tools/lonely.ts"], edges)
      .some((e) => e.includes("lonely.ts") && e.includes("imported by nothing")));
  t("D3 treats an absent edge entry as zero importers, not as unknown",
    orphanModules(["src/lib/tools/never-seen.ts"], edges).length === 1);

  if (!ok) {
    console.log("\nDormancy check FAILED (self-tests).");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- real inputs
/** Every file under a directory, recursively, matching a predicate. */
function filesUnder(dir: string, keep: (f: string) => boolean): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...filesUnder(full, keep));
    else if (keep(full)) out.push(full);
  }
  return out;
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const scripts: Record<string, string> = pkg.scripts ?? {};
const ROOTS = ["prebuild", "postbuild"];

// D1 inventory: gate scripts are check-*.mts. citations.mts is a LIBRARY that
// gates import rather than a gate, and the .mjs generators are authoring tools
// run by hand; neither is a gate and neither is claimed to run in a build.
const gateFiles = filesUnder("scripts", (f) => /check-[\w-]+\.mts$/.test(f));

// D3 inventory and edges.
const toolModules = filesUnder("src/lib/tools", (f) => f.endsWith(".ts"));
const sourceFiles = [
  ...filesUnder("src", (f) => /\.tsx?$/.test(f)),
  ...filesUnder("scripts", (f) => /\.mts$/.test(f)),
];

/** Resolve an import specifier against the importing file. */
function resolveSpec(fromFile: string, spec: string): string | null {
  let base: string;
  if (spec.startsWith("@/")) base = join("src", spec.slice(2));
  else if (spec.startsWith(".")) base = join(dirname(fromFile), spec);
  else return null;
  const rel = (p: string) => p.replace(resolvePath(".") + "/", "");
  for (const cand of [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts")]) {
    if (existsSync(cand) && statSync(cand).isFile()) return rel(resolvePath(cand));
  }
  return null;
}

const importers = new Map<string, string[]>(toolModules.map((m) => [m, []]));
for (const f of sourceFiles) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/(?:from|import)\s*\(?\s*["']([^"']+)["']/g)) {
    const target = resolveSpec(f, m[1]);
    if (!target || target === f) continue;
    if (importers.has(target)) importers.get(target)!.push(f);
  }
}

// D2 inventory: exported `NAME_PAGE_COPY` string arrays, read by importing the
// modules rather than by parsing them, so the strings checked are the strings
// that ship.
const { measuredPages } = await import("../src/lib/measured.ts");
const measured = new Set<string>(measuredPages.flatMap((m) => m.copy));

const constants: { file: string; name: string; strings: string[] }[] = [];
for (const f of toolModules) {
  if (!/export const [A-Z_]*PAGE_COPY/.test(readFileSync(f, "utf8"))) continue;
  const mod = await import(resolvePath(f));
  for (const [name, value] of Object.entries(mod)) {
    if (!name.endsWith("PAGE_COPY")) continue;
    if (!Array.isArray(value)) continue; // TOOL_PAGE_COPY is the registry itself
    constants.push({ file: f, name, strings: value as string[] });
  }
}

// ---------------------------------------------------------------- real run
console.log("\nD1: every gate script is reachable from a build lifecycle");
{
  const errs = dormantGates(gateFiles, scripts, ROOTS);
  errs.forEach(fail);
  if (!errs.length)
    console.log(`  ok    all ${gateFiles.length} gate script(s) run from ${ROOTS.join(" or ")}`);
}

console.log("\nD2: every copy constant reaches an extractor");
{
  const errs = unmeasuredCopy(constants, measured);
  errs.forEach(fail);
  if (!errs.length)
    console.log(
      `  ok    all ${constants.length} copy constant(s), ` +
        `${constants.reduce((n, c) => n + c.strings.length, 0)} strings, are inside the measured corpus`,
    );
}

console.log("\nD3: every module under src/lib/tools is imported");
{
  const errs = orphanModules(toolModules, importers);
  errs.forEach(fail);
  if (!errs.length)
    console.log(`  ok    all ${toolModules.length} tool module(s) are imported by at least one file`);
}

// D22: say what was not checked, every run.
console.log(
  "\n  ..    NOT CHECKED: unused EXPORTS within a wired module, which this gate " +
    "deliberately ignores because the unit here is the whole artifact; modules " +
    "outside src/lib/tools, so an orphan under src/lib or src/components would " +
    "pass; copy constants not named *_PAGE_COPY, so a differently named surface " +
    "is invisible to D2 exactly as the ones it catches were; and whether a " +
    "reachable gate ASSERTS anything, which is HUNT-LIST Instance 8's question " +
    "and a different gate's job.",
);

console.log(failed ? "\nDormancy check FAILED." : "\nDormancy check passed.");
process.exit(failed ? 1 : 0);
