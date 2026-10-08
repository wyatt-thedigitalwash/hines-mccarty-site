/**
 * The injury page standard, D72. Reads src/lib/site.ts, before the build.
 *
 * Every injury page whose sections carry a tier is on the standard
 * (docs/build/PAGE-STANDARD.md section 13), and this gate holds it to the parts
 * a script can measure. A page with no tiers still renders through the old
 * template and is reported, not held, so the rebuild can land page by page.
 *
 *   I1  pillars: Tier 2 is exactly "Who pays." (ladder), "What happens next."
 *       (3 to 6 steps), "What to do right now." (navy, 3 to 5 bullets, each
 *       opening with a headline of 64 characters or fewer)
 *   I2  spokes: Tier 2 is exactly "The short answer.", prose, 1 or 2 paragraphs
 *   I3  details as boxes; every topic a reader's question with a summary;
 *       pillars 5 to 9 topics, spokes 3 to 6
 *   I4  links: pillars 3 to 6; spokes 1 to 4, one of them to the pillar
 *   I5  FAQ: pillars 4 to 6, spokes 3 to 5, every one with a source
 *   I6  readability (D41): grade 8 or below for the page and 9.5 for a section,
 *       average sentence under 20 words, paragraphs of 4 sentences or fewer,
 *       no citations or statute voice in body copy
 *   I7  no "What this page does not cover" section, no office holder by name
 *
 * The copy measured is the same set of fields the charge gate measures
 * (`bodyCopy`), because the injury pages use the same section grammar.
 */
import { injuryPages, injuryHref, type InjuryPage, type ChargePage } from "../src/lib/site.ts";
import { bodyCopy } from "../src/lib/page-copy.ts";
import {
  GRADE_PAGE,
  GRADE_SECTION,
  SENTENCE_WORDS,
  PARA_SENTENCES,
  CITATION_PATTERNS,
  STATUTE_VOICE,
  score,
  sentencesOf,
} from "../src/lib/readability.ts";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const PILLAR_T2 = ["Who pays.", "What happens next.", "What to do right now."];
const SPOKE_T2 = ["The short answer."];
const OFFICE_HOLDERS = /Susan S\. Lopez|Victor Crist|Christopher C\. Sabella|Lisa B\. McLean|Chad Chronister/;

function problems(p: InjuryPage): string[] {
  const out: string[] = [];
  const pillar = !p.parent;
  const secs = p.sections ?? [];
  const t2 = secs.filter((s) => s.tier === 2);
  const want = pillar ? PILLAR_T2 : SPOKE_T2;
  if (JSON.stringify(t2.map((s) => s.heading)) !== JSON.stringify(want))
    out.push(`I${pillar ? 1 : 2} Tier 2 headings must be exactly ${want.join(" / ")} (has: ${t2.map((s) => s.heading).join(" / ")})`);
  if (pillar) {
    const pays = t2.find((s) => s.heading === PILLAR_T2[0]);
    if (pays && (pays.kind !== "penalties" || pays.display !== "ladder"))
      out.push(`I1 "Who pays." must be a penalties section with display: "ladder"`);
    const steps = t2.find((s) => s.kind === "timeline")?.steps ?? [];
    if (steps.length < 3 || steps.length > 6) out.push(`I1 the timeline has ${steps.length} steps; the standard is 3 to 6`);
    const doNow = t2.find((s) => s.heading === PILLAR_T2[2]);
    if (doNow && doNow.background !== "navy") out.push(`I1 "What to do right now." must be the navy band`);
    const bullets = doNow?.bullets ?? [];
    if (bullets.length < 3 || bullets.length > 5) out.push(`I1 "What to do right now." has ${bullets.length} bullets; the standard is 3 to 5`);
    for (const b of bullets)
      if (!/^[\s\S]{1,64}?[.!?]\s/.test(b)) out.push(`I1 do-now bullet needs a first sentence of 64 characters or fewer: "${b.slice(0, 60)}..."`);
  } else {
    const short = t2[0];
    if (short && (short.kind !== "prose" || !short.prose?.length || short.prose.length > 2))
      out.push(`I2 "The short answer." must be prose of 1 or 2 paragraphs`);
  }
  if (p.detailsLayout !== "grid") out.push(`I3 detailsLayout must be "grid"`);
  const groups: string[] = [];
  for (const s of secs.filter((s) => s.tier === 3)) {
    if (!s.group) { out.push(`I3 Tier 3 section ${s.id} has no group`); continue; }
    if (!groups.includes(s.group)) {
      groups.push(s.group);
      if (!s.groupSummary) out.push(`I3 topic "${s.group}" has no groupSummary on its first section`);
      if (!s.group.trim().endsWith("?")) out.push(`I3 topic "${s.group}" is not written as the reader's question`);
    }
  }
  const [gMin, gMax] = pillar ? [5, 9] : [3, 6];
  if (groups.length < gMin || groups.length > gMax) out.push(`I3 ${groups.length} topics; the standard is ${gMin} to ${gMax}`);
  const links = secs.filter((s) => s.link).map((s) => s.link!.href);
  const [lMin, lMax] = pillar ? [3, 6] : [1, 4];
  if (links.length < lMin || links.length > lMax) out.push(`I4 ${links.length} section links; the standard is ${lMin} to ${lMax}`);
  if (!pillar && !links.includes(`/personal-injury/${p.parent}`)) out.push(`I4 a spoke must link to its pillar, /personal-injury/${p.parent}`);
  const faqs = p.faq ?? [];
  const [fMin, fMax] = pillar ? [4, 6] : [3, 5];
  if (faqs.length < fMin || faqs.length > fMax) out.push(`I5 ${faqs.length} common questions; the standard is ${fMin} to ${fMax}`);
  for (const f of faqs) if (!f.source?.trim()) out.push(`I5 FAQ "${f.question.slice(0, 50)}" has no source`);

  // I6
  const chunks = bodyCopy(p as unknown as ChargePage);
  const all = score(chunks.map((c) => c.text));
  if (all.grade > GRADE_PAGE + 0.05) out.push(`I6 page grade ${all.grade.toFixed(1)}; the limit is ${GRADE_PAGE}`);
  if (all.asl >= SENTENCE_WORDS) out.push(`I6 average sentence ${all.asl.toFixed(1)} words; the limit is under ${SENTENCE_WORDS}`);
  const bySection = new Map<string, string[]>();
  for (const c of chunks) bySection.set(c.where, [...(bySection.get(c.where) ?? []), c.text]);
  for (const [where, texts] of bySection) {
    const g = score(texts).grade;
    if (g > GRADE_SECTION + 0.05) out.push(`I6 section ${where} grade ${g.toFixed(1)}; the limit is ${GRADE_SECTION}`);
  }
  for (const c of chunks) {
    if (c.run && sentencesOf(c.text).length > PARA_SENTENCES)
      out.push(`I6 ${c.where}: a paragraph of ${sentencesOf(c.text).length} sentences; the limit is ${PARA_SENTENCES}`);
    for (const [name, re] of [...CITATION_PATTERNS, ...STATUTE_VOICE]) {
      const m = re.exec(c.text);
      if (m) out.push(`I6 ${c.where}: ${name} in body copy ("${m[0]}")`);
    }
  }
  // I7
  for (const s of secs) if (/does not cover|will not do/i.test(s.heading)) out.push(`I7 section "${s.heading}": scope disclaimers are not sections`);
  const named = OFFICE_HOLDERS.exec(JSON.stringify(p));
  if (named) out.push(`I7 names an office holder ("${named[0]}")`);
  return out;
}

console.log("Injury page standard (D72)");
{
  // Self-test: a planted spoke with every structural fault fires.
  const planted = {
    slug: "x", parent: "car-accidents", label: "X", title: "X", description: "x", published: false,
    sections: [{ id: "a", heading: "Overview", kind: "prose", tier: 2, prose: ["Under 627.736 you must act."] }],
    faq: [],
  } as unknown as InjuryPage;
  const hits = problems(planted);
  const want = ["I2", "I3", "I4", "I5", "I6"];
  const missing = want.filter((w) => !hits.some((h) => h.startsWith(w)));
  if (missing.length) fail(`SELF-TEST: planted faults did not fire for ${missing.join(", ")}`);
  else console.log("  ok    a planted spoke with every fault fires I2 to I6");
}
let onStandard = 0;
const legacy: string[] = [];
for (const p of injuryPages) {
  if (!(p.sections ?? []).some((s) => s.tier)) { legacy.push(injuryHref(p)); continue; }
  onStandard++;
  const ps = problems(p);
  for (const x of ps) fail(`${injuryHref(p)}: ${x}`);
  if (!ps.length) console.log(`  ok    ${injuryHref(p)}`);
}
console.log(`\n  ..    ${onStandard} of ${injuryPages.length} injury pages on the standard` +
  (legacy.length ? `; still on the old template: ${legacy.join(", ")}` : ""));
console.log(failed ? "\nInjury check FAILED." : "\nInjury check passed.");
process.exit(failed ? 1 : 0);
