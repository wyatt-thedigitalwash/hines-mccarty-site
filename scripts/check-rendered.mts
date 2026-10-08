/**
 * The gate that reads the PAGE rather than the data behind it.
 *
 * D24. Every other check on this project reads src/lib. None of them read the
 * rendered output, and the one defect none of them could see was the one where
 * the data and the page disagreed: SectionBody dropped `prose` from any section
 * whose kind was not "prose", and 1,489 written words on the DUI page reached
 * no reader while every gate passed.
 *
 * The renderer is total now and a schema check guards the payload fields, but
 * both of those still read src/lib. This reads .next. It takes each written
 * page, samples the copy the data says should be there, and greps the built
 * HTML for it. A sample rather than everything for charge pages, because the
 * point is to catch a whole channel going missing, not to diff prose. Guide
 * quoted-statute spans are NOT sampled (G5): a guide's quotations are its
 * factual core and a dropped clause is a wrong statement of law, so every
 * statute body on a guide is asserted in full.
 *
 * Run AFTER a build: `npm run build && npm run check:rendered`.
 *
 * MISSING ARTIFACT = FAIL. D30. This gate used to skip with a notice when
 * .next was absent. That produced the same green pipeline for "the site is
 * not built" and "the site contains none of its content", which is the exact
 * failure shape the gate exists to answer. It fails now; run the build first.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { guides, TOOLS_LIVE } from "../src/lib/site.ts";
import { measuredPages } from "../src/lib/measured.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const strip = (html: string) =>
  html.replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ");

const norm = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();

console.log("Rendered-output check (D24)");
if (!existsSync(`${DIST_DIR}/server/app`)) {
  fail(
    `${DIST_DIR}/server/app not found. This gate reads built HTML, and a missing ` +
      "artifact FAILS rather than skips (D30): 'the site is not built' and " +
      "'the site contains none of its content' must never produce the same " +
      "green run. Run `npm run build` first.",
  );
  console.log("\nRendered check FAILED.");
  process.exit(1);
}

// ---------------------------------------------------------------- G1
// Route <-> registry completeness for guides, both directions. A guide route
// on disk with no registry entry is a page outside every gate; a registry
// entry with no route is a link to a 404. Charges predate the registry and
// are covered per-page below.
console.log("\nG1: guide routes match the registry, one to one");
if (!TOOLS_LIVE)
  console.log("  ..    skipped: Resources is hidden (D73), so guide routes are built as 404s on purpose");
else {
  const dir = `${DIST_DIR}/server/app/resources/guides`;
  const onDisk = existsSync(dir)
    ? readdirSync(dir).filter((f) => f.endsWith(".html")).map((f) => f.replace(/\.html$/, ""))
    : [];
  const inRegistry = guides.map((g) => g.slug);
  for (const slug of onDisk)
    if (!inRegistry.includes(slug))
      fail(`built guide route "${slug}" has no entry in \`guides\`; a page outside the registry is invisible to every gate`);
  for (const slug of inRegistry)
    if (!onDisk.includes(slug))
      fail(`guide "${slug}" is in the registry but produced no built HTML at ${dir}/${slug}.html`);
  if (onDisk.length === inRegistry.length && inRegistry.every((s) => onDisk.includes(s)))
    console.log(`  ok    ${inRegistry.length} guide route(s) and ${inRegistry.length} registry entries correspond one to one`);
}

// ---------------------------------------------------------------- pages
let checked = 0;
let guideSpans = 0;
const writtenCharges = measuredPages.filter(
  (m) => m.kind === "charge" && Boolean(m.charge.sections?.length),
);
// D73: hidden guides are built as the not-found page, so there is no copy to sample.
const writtenGuides = TOOLS_LIVE ? measuredPages.filter((m) => m.kind === "guide" && m.written) : [];

for (const m of writtenCharges) {
  if (m.kind !== "charge") continue;
  const c = m.charge;
  const path = `${DIST_DIR}/server/app${m.href}.html`;
  if (!existsSync(path)) { fail(`${m.href} has no built HTML at ${path}`); continue; }
  const text = norm(strip(readFileSync(path, "utf8")));
  // One sample from every payload channel the page uses, so a whole channel
  // going missing is caught even if individual sentences change.
  const samples: [string, string][] = [];
  for (const s of c.sections ?? []) {
    if (s.prose?.length) samples.push([`${s.id} prose`, s.prose[0]]);
    if (s.bullets?.length) samples.push([`${s.id} bullets`, s.bullets[0]]);
    if (s.steps?.length) samples.push([`${s.id} steps`, s.steps[0].what]);
    if (s.guidance?.length) samples.push([`${s.id} guidance`, s.guidance[0].items[0]]);
    if (s.penalties?.length) samples.push([`${s.id} penalties`, s.penalties[0].note ?? s.penalties[0].degree]);
    if (s.statute) samples.push([`${s.id} statute`, s.statute.body]);
    samples.push([`${s.id} heading`, s.heading]);
  }
  if (c.faq?.length && c.faq[0].answer) samples.push(["faq", c.faq[0].answer]);
  if (c.lead) samples.push(["lead", c.lead]);
  for (const [where, raw] of samples) {
    const probe = norm(raw).slice(0, 60);
    if (probe.length < 20) continue;
    checked++;
    if (!text.includes(probe))
      fail(`${m.href}: ${where} does not reach the rendered page. Looked for: "${probe}"`);
  }
}

// ---------------------------------------------------------------- G5
// Written guides: samples for prose channels exactly as above, but every
// quoted statutory span IN FULL, not sampled.
for (const m of writtenGuides) {
  if (m.kind !== "guide") continue;
  const g = m.guide;
  const path = `${DIST_DIR}/server/app${m.href}.html`;
  if (!existsSync(path)) { fail(`${m.href} has no built HTML at ${path}`); continue; }
  const text = norm(strip(readFileSync(path, "utf8")));
  for (const s of g.sections ?? []) {
    const samples: [string, string][] = [];
    if (s.prose?.length) samples.push([`${s.id} prose`, s.prose[0]]);
    if (s.bullets?.length) samples.push([`${s.id} bullets`, s.bullets[0]]);
    if (s.steps?.length) samples.push([`${s.id} steps`, s.steps[0].what]);
    if (s.guidance?.length) samples.push([`${s.id} guidance`, s.guidance[0].items[0]]);
    samples.push([`${s.id} heading`, s.heading]);
    for (const [where, raw] of samples) {
      const probe = norm(raw).slice(0, 60);
      if (probe.length < 20) continue;
      checked++;
      if (!text.includes(probe))
        fail(`${m.href}: ${where} does not reach the rendered page. Looked for: "${probe}"`);
    }
    // The G5 rule: statute bodies whole, no truncation window.
    if (s.statute) {
      guideSpans++;
      const whole = norm(s.statute.body);
      if (!text.includes(whole))
        fail(
          `${m.href}: the quoted span for ${s.statute.citation} does not reach the ` +
            `rendered page IN FULL. A guide's quotations are its factual core; a ` +
            `dropped clause is a wrong statement of law, not a formatting slip.`,
        );
    }
  }
}

if (!failed)
  console.log(
    `  ok    ${checked} copy samples across ${writtenCharges.length} written charge page(s) ` +
      `and ${writtenGuides.length} written guide(s) reach the built HTML` +
      (guideSpans
        ? `; ${guideSpans} guide statute span(s) asserted whole (G5)`
        : `; no written guide carries a statute span yet, so G5 asserted nothing this run (printed per D22, not silently)`),
  );
console.log(failed ? "\nRendered check FAILED." : "\nRendered check passed.");
process.exit(failed ? 1 : 0);
