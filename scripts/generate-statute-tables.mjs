/**
 * Generate src/lib/statute-tables/ from statute-workflow results snapshots.
 *
 * Usage: node scripts/generate-statute-tables.mjs <results.json> [...more]
 *
 * Each snapshot is {builds: {key: table}, audits: {key: audit}} harvested from
 * a workflow journal. Only tables whose audit verdict is PASS are emitted;
 * presence in src/lib/statute-tables/ IS the verification claim (DECISIONS.md
 * D10). Later snapshots win on key collision, so pass them oldest first.
 *
 * Keys are canonicalized to the bare section number as prose cites it
 * (FS "893.135", USC "1956") per D11.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { basename, join } from "node:path";

const OUT = "src/lib/statute-tables";
const DEGREES = new Set([
  "capital felony", "life felony", "first degree felony",
  "first degree felony punishable by life", "second degree felony punishable by life",
  "second degree felony", "third degree felony", "first degree misdemeanor",
  "second degree misdemeanor", "no degree assigned",
]);
const SCOPES = new Set(["dwelling", "item", "prior", "victim", "place"]);

function canon(key) {
  let k = key.trim().replace(/^(fs|FS)[-_ ]/, "").replace(/-2025$/, "");
  // USC first: "usc-18-924" would otherwise hit the dash-collapse branch below.
  const usc = k.match(/^usc[- ](\d+)[- ](\w+)$/i);
  if (usc) return usc[2];
  // Dashes stand in for the decimal point in agent-chosen keys ("fs-316-193"),
  // and the key must come out as prose cites it, because check-claims.mts
  // matches keys literally against sentences. This once required TWO dashes,
  // so "fs-316-193-2025" canonicalized to "316-193" and the DUI page's claims
  // went unchecked while the gate reported a table for them.
  if (!k.includes(".") && k.includes("-")) {
    const parts = k.split("-");
    k = parts[0] + "." + parts.slice(1).join("");
  }
  return k;
}

// Project annotations the audit pipeline does not produce. See the _why block
// in the JSON: `residual` arms the rule that catches all three shipped errors,
// and the audit schema has no field for it.
const ANNOTATIONS = JSON.parse(
  readFileSync(new URL("./statute-table-annotations.json", import.meta.url), "utf8"),
);

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/generate-statute-tables.mjs <results.json> [...more]");
  process.exit(2);
}

const passes = new Map();
for (const f of files) {
  const { builds, audits } = JSON.parse(readFileSync(f, "utf8"));
  for (const [k, audit] of Object.entries(audits)) {
    if (audit.verdict !== "PASS" || !builds[k]) continue;
    passes.set(canon(k), { build: builds[k], audit });
  }
}

const problems = [];
const entries = [];
mkdirSync(OUT, { recursive: true });
for (const ck of [...passes.keys()].sort()) {
  const { build, audit } = passes.get(ck);
  const ann = ANNOTATIONS[ck] ?? {};
  const residualCites = new Set(ann.residual ?? []);
  const seenResidual = new Set();
  // Same pattern as residual: a typed field the audit schema could not express
  // at the time, transcribed from the row's own trigger prose.
  const exclusiveCites = new Set(ann.minExclusive ?? []);
  const seenExclusive = new Set();
  const rows = build.rows.map((r, i) => {
    if (!DEGREES.has(r.degree)) problems.push(`${ck} row ${i}: degree ${JSON.stringify(r.degree)}`);
    if (r.scope != null && !SCOPES.has(r.scope)) problems.push(`${ck} row ${i}: scope ${JSON.stringify(r.scope)}`);
    const parts = [
      `cite: ${JSON.stringify(r.cite)}`,
      `min: ${JSON.stringify(r.min ?? null)}`,
      `max: ${JSON.stringify(r.max ?? null)}`,
      `degree: ${JSON.stringify(r.degree)}`,
    ];
    const citeKey = r.cite.replace(/\.$/, "");
    const annExclusive = exclusiveCites.has(r.cite) || exclusiveCites.has(citeKey);
    if (annExclusive) seenExclusive.add(exclusiveCites.has(r.cite) ? r.cite : citeKey);
    if (r.minExclusive || annExclusive) parts.push(`minExclusive: true`);
    if (residualCites.has(r.cite) || residualCites.has(citeKey)) {
      parts.push(`residual: true`);
      seenResidual.add(residualCites.has(r.cite) ? r.cite : citeKey);
    }
    if (r.level != null) parts.push(`level: ${r.level}`);
    if (r.trigger) parts.push(`trigger: ${JSON.stringify(r.trigger)}`);
    if (r.scope) parts.push(`scope: ${JSON.stringify(r.scope)}`);
    parts.push(`quote: ${JSON.stringify(r.quote)}`);
    return `    { ${parts.join(", ")} },`;
  });
  // Auditors sometimes annotate the field ("whole-section: every ...") or say
  // "complete"; both affirm full coverage. Anything else degrades to partial,
  // which only ever narrows what pages may claim.
  const c = (audit.completeness ?? "").trim().toLowerCase();
  const completeness = c === "complete" || c.startsWith("whole-section") ? "whole-section" : "partial";
  // A residual cite that matches no row means the subsection was renumbered or
  // the annotation is stale. Either way the rule it arms would go quiet while
  // still appearing to run, so this is a hard error.
  for (const cite of residualCites) {
    if (!seenResidual.has(cite)) {
      problems.push(
        `${ck}: annotated residual cite ${cite} matches no row. The residual rule ` +
          `in check-claims.mts would silently stop guarding this statute.`,
      );
    }
  }
  for (const cite of exclusiveCites) {
    if (!seenExclusive.has(cite)) {
      problems.push(`${ck}: annotated minExclusive cite ${cite} matches no row.`);
    }
  }
  const unread = (build.unread ?? []).filter(Boolean).join("; ");
  const fname = join(OUT, (/^\d+\w*$/.test(ck) ? `usc-${ck}` : `fs-${ck.replace(/\./g, "-")}`) + ".ts");
  const varname = "TABLE_" + ck.replace(/[^0-9A-Za-z]/g, "_");
  writeFileSync(fname, `/**
 * ${build.cite} -- ${build.title}
 *
 * GENERATED by scripts/generate-statute-tables.mjs from an audited build in
 * the statute-table workflow. Built by one agent from the full section text,
 * independently re-fetched and audited by a second agent; verdict PASS. Do
 * not hand-edit a row without re-running the audit; the claim checker treats
 * these as ground truth.
 */
import type { StatuteTable } from "../statutes.ts";

export const ${varname}: StatuteTable = {
  cite: ${JSON.stringify(build.cite)},
  title: ${JSON.stringify(build.title)},
  url: ${JSON.stringify(build.url)},
  fetched: "2026-08-13",
  completeness: ${JSON.stringify(completeness)},
${unread ? `  unread: ${JSON.stringify(unread)},\n` : ""}  rows: [
${rows.join("\n")}
  ],
};
`);
  // Explicit .ts extension: the gates run under `node --experimental-strip-types`,
  // which will not resolve an extensionless specifier. tsconfig enables
  // allowImportingTsExtensions for exactly this reason.
  entries.push({ ck, varname, mod: "./" + basename(fname) });
  console.log(`wrote ${fname}: ${build.rows.length} rows, ${completeness}`);
}

writeFileSync(join(OUT, "index.ts"), `/**
 * Audited statute tables, one file per statute, merged into STATUTES in
 * src/lib/statutes.ts. Every table here passed the independent build-then-audit
 * workflow; FAILed tables never land in this directory.
 */
import type { StatuteTable } from "../statutes.ts";
${entries.map((e) => `import { ${e.varname} } from "${e.mod}";`).join("\n")}

export const VERIFIED_TABLES: Record<string, StatuteTable> = {
${entries.map((e) => `  ${JSON.stringify(e.ck)}: ${e.varname},`).join("\n")}
};
`);
console.log(`index.ts: ${entries.length} tables`);
if (problems.length) {
  console.error("PROBLEMS:\n" + problems.join("\n"));
  process.exit(1);
}
