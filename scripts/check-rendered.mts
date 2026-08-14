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
 * HTML for it. A sample rather than everything, because the point is to catch a
 * whole channel going missing, not to diff prose.
 *
 * Run AFTER a build: `npm run build && npm run check:rendered`. It skips with a
 * loud notice when .next is absent rather than passing quietly, because a check
 * that silently does nothing is the failure mode this file exists to answer.
 */
import { readFileSync, existsSync } from "node:fs";
import { charges, chargeHref } from "../src/lib/site.ts";

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

const norm = (s: string) => s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, " ").trim();

console.log("Rendered-output check (D24)");
const written = charges.filter((c) => c.sections?.length);
if (!existsSync(".next/server/app")) {
  console.log("  ..    .next/server/app not found. Run `npm run build` first; this check needs the built HTML.");
  console.log("\nRendered check SKIPPED.");
  process.exit(0);
}

let checked = 0;
for (const c of written) {
  const href = chargeHref(c);
  const path = `.next/server/app${href}.html`;
  if (!existsSync(path)) { fail(`${href} has no built HTML at ${path}`); continue; }
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
      fail(`${href}: ${where} does not reach the rendered page. Looked for: "${probe}"`);
  }
}
if (!failed) console.log(`  ok    ${checked} copy samples across ${written.length} written pages all reach the built HTML`);
console.log(failed ? "\nRendered check FAILED." : "\nRendered check passed.");
process.exit(failed ? 1 : 0);
