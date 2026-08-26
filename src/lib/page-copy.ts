/**
 * Every human-visible string on a charge page. ONE definition, shared by every
 * gate.
 *
 * WHY THIS FILE EXISTS. Two gates each carried their own hand-written copy of
 * this function and they had already drifted apart: `check-pages.mts` read
 * `description`, `check-unverified.mts` did not, so an unverified citation
 * placed in `description` published clean. Worse, NEITHER read `label`, which
 * the charge template and the charge index both render. The gate testing
 * planted `label: "Grand Theft — the best defense in Tampa"` and every gate
 * stayed silent: an em dash and a superiority claim, on a rendered field,
 * invisible to the compliance check.
 *
 * A field that renders but is not extracted is a hole in every gate at once,
 * and duplicated extractors guarantee the holes differ per gate. So there is
 * one function, and `RENDERED_FIELDS` below is the checklist that has to be
 * revisited whenever the page schema grows.
 */
import type { ChargePage, GuidePage, InjuryPage, Tool } from "./site.ts";
import { TOOL_PAGE_COPY } from "./tools/index.ts";

/**
 * Fields rendered to a reader, as a checklist.
 *
 * `owner` and `lastReviewed` are rendered by the byline. `readerNeeds` is not
 * rendered today, and is extracted anyway: it satisfies the reader-question
 * coverage gate, so it is content a writer can hide a claim in, and "currently
 * unrendered" is a property that changes without anyone thinking about it.
 */
export const RENDERED_FIELDS = [
  "label",
  "description",
  "title",
  "metaTitle",
  "metaDescription",
  "lead",
  "counterpart.label",
  "counterpart.note",
  "statute.citation",
  "statute.body",
  "penalties[].degree|maximum|offenseLevel|note",
  "elements[]",
  "defenseApproach[]",
  "forum[]",
  "faq[].question|answer",
  "relatedGuides[].label",
  "sections[].heading|prose|bullets|statute|penalties|steps|guidance",
  "readerNeeds{}",
  "owner",
  "lastReviewed",
] as const;

/**
 * A penalty row is ONE claim, so it is one entry.
 *
 * The fields were emitted separately, which left `check-claims.mts` to
 * reassemble them: it joins entries with a newline and splits on sentence
 * punctuation, so "Second degree felony" ran into its own note and the degree
 * could be checked against the note's dollar figures. That association is the
 * point, and it must survive. But the same accident ran UNRELATED fields
 * together too, and "Tools and guides" (a related-guide label, emitted just
 * before the sections) merged with the first section heading and then borrowed
 * a citation from the prose after it, producing a subsection-to-degree failure
 * against a page that was correct. Making the row one entry keeps the true
 * association and lets the checker terminate entries to stop the false one.
 */
function penaltyRow(p: {
  degree: string;
  maximum: string;
  offenseLevel?: string;
  note?: string;
}): string {
  return [p.degree, p.maximum, p.offenseLevel, p.note]
    .filter((x): x is string => typeof x === "string" && x.length > 0)
    .join(", ");
}

export function pageCopy(c: ChargePage): string[] {
  const out: (string | undefined)[] = [
    c.label,
    c.description,
    c.title,
    c.metaTitle,
    c.metaDescription,
    c.lead,
    c.owner,
    c.lastReviewed,
    c.counterpart?.label,
    c.counterpart?.note,
    c.statute?.citation,
    c.statute?.body,
    ...(c.elements ?? []),
    ...(c.defenseApproach ?? []),
    ...(c.forum ?? []),
    ...(c.penalties ?? []).map(penaltyRow),
    ...(c.faq ?? []).flatMap((f) => [f.question, f.answer]),
    ...(c.relatedGuides ?? []).map((g) => g.label),
    ...Object.values(c.readerNeeds ?? {}),
    ...(c.sections ?? []).flatMap((s) => [
      s.heading,
      ...(s.prose ?? []),
      ...(s.bullets ?? []),
      ...(s.statute ? [s.statute.citation, s.statute.body] : []),
      ...(s.penalties ?? []).map(penaltyRow),
      ...(s.steps ?? []).flatMap((t) => [t.when, t.what]),
      ...(s.guidance ?? []).flatMap((g) => [g.heading, ...g.items]),
    ]),
  ];
  return out.filter((x): x is string => typeof x === "string" && x.length > 0);
}

/**
 * Fields of a GuidePage rendered to a reader. Same contract as RENDERED_FIELDS:
 * revisit whenever the guide schema grows, because a field that renders but is
 * not extracted is a hole in every gate at once.
 */
export const GUIDE_RENDERED_FIELDS = [
  "label",
  "title",
  "description",
  "metaTitle",
  "metaDescription",
  "lead",
  "faq[].question|answer",
  "relatedLinks[].label",
  "sections[].heading|prose|bullets|statute|penalties|steps|guidance",
  "readerNeeds{}",
  "owner",
  "lastReviewed",
] as const;

/** Every human-visible string on a guide page. One definition, every gate. */
export function guideCopy(g: GuidePage): string[] {
  const out: (string | undefined)[] = [
    g.label,
    g.title,
    g.description,
    g.metaTitle,
    g.metaDescription,
    g.lead,
    g.owner,
    g.lastReviewed,
    ...(g.faq ?? []).flatMap((f) => [f.question, f.answer]),
    ...(g.relatedLinks ?? []).map((l) => l.label),
    ...Object.values(g.readerNeeds ?? {}),
    ...(g.sections ?? []).flatMap((s) => [
      s.heading,
      ...(s.prose ?? []),
      ...(s.bullets ?? []),
      ...(s.statute ? [s.statute.citation, s.statute.body] : []),
      ...(s.penalties ?? []).map(penaltyRow),
      ...(s.steps ?? []).flatMap((t) => [t.when, t.what]),
      ...(s.guidance ?? []).flatMap((gr) => [gr.heading, ...gr.items]),
    ]),
  ];
  return out.filter((x): x is string => typeof x === "string" && x.length > 0);
}

/**
 * Fields of an InjuryPage rendered to a reader. Same contract as
 * RENDERED_FIELDS: revisit whenever the schema grows, because a field that
 * renders but is not extracted is a hole in every gate at once.
 */
export const INJURY_RENDERED_FIELDS = [
  "label",
  "title",
  "description",
  "metaTitle",
  "metaDescription",
  "lead",
  "faq[].question|answer",
  "relatedLinks[].label",
  "sections[].heading|prose|bullets|statute|penalties|steps|guidance",
  "readerNeeds{}",
  "owner",
  "lastReviewed",
] as const;

/** Every human-visible string on an injury page. One definition, every gate. */
export function injuryCopy(p: InjuryPage): string[] {
  const out: (string | undefined)[] = [
    p.label,
    p.title,
    p.description,
    p.metaTitle,
    p.metaDescription,
    p.lead,
    p.owner,
    p.lastReviewed,
    ...(p.faq ?? []).flatMap((f) => [f.question, f.answer]),
    ...(p.relatedLinks ?? []).map((l) => l.label),
    ...Object.values(p.readerNeeds ?? {}),
    ...(p.sections ?? []).flatMap((s) => [
      s.heading,
      ...(s.prose ?? []),
      ...(s.bullets ?? []),
      ...(s.statute ? [s.statute.citation, s.statute.body] : []),
      ...(s.penalties ?? []).map(penaltyRow),
      ...(s.steps ?? []).flatMap((t) => [t.when, t.what]),
      ...(s.guidance ?? []).flatMap((g) => [g.heading, ...g.items]),
    ]),
  ];
  return out.filter((x): x is string => typeof x === "string" && x.length > 0);
}

/**
 * A tool's renderable copy: its card (label, title, description), rendered by
 * the home carousel and the Resources pages, PLUS the authored copy of its
 * page where one is built. D29 puts tools in the measured registry precisely
 * so both surfaces sit inside the banned-term, em-dash and duplication rails.
 *
 * WHAT IS DELIBERATELY NOT RETURNED HERE: the shipped statutory dataset. The
 * charge-lookup page renders 987 verbatim quotes and they ARE a rendered
 * surface, so CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 9 requires them
 * covered. They are covered, by `check:charge-lookup`, which sweeps every row
 * the resolver can emit against the rules that can legitimately apply to
 * quoted statutory text.
 *
 * They are not returned here because the rails this function feeds include
 * bare-word rules that a quoted statute must be allowed to trip. 53 of those
 * quotes contain "serious", "minor", "likely" or "severe", every one of them
 * the statute's own word: "serious bodily injury" in 21 U.S.C. 841(b)(1)(A),
 * "any minor" in 18 U.S.C. 2251(a). Routing the dataset through this extractor
 * would fail the build on the words of the United States Code, which is the
 * same false positive `check-pages.mts` already records for "parking
 * enforcement specialist".
 */
export function toolCopy(t: Tool): string[] {
  return [t.label, t.title, t.description, ...(TOOL_PAGE_COPY[t.href] ?? [])].filter(
    (x) => x.length > 0,
  );
}
