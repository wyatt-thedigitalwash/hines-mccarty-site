/**
 * The sentencing worksheet: the form model, the picker, and the copy.
 *
 * Built to docs/build/tools/SENTENCING-WORKSHEET-CONCEPT.md. Read that document
 * before changing anything here. The constraints below are its Sections 3, 4
 * and 5, not house style.
 *
 * WHAT THIS TOOL IS. It renders the Rule 3.992 form, fills the cells a charge
 * selection determines, and leaves visibly empty every cell that depends on
 * facts it does not have. The output is a picture of a partly filled form.
 *
 * WHAT IT IS NOT. Not a sentence, not a score, not a range, not a total. There
 * is no arithmetic anywhere in this file. `check:worksheet` asserts the total
 * and subtotal cells render empty for EVERY selectable row, exhaustively rather
 * than sampled, which is assertion T2 and the reason C1 is satisfied by
 * construction: if a total ever renders, the build fails.
 *
 * THE EMPTY CELLS ARE THE PRODUCT. Every empty cell carries a label naming the
 * fact it needs (T4). An empty cell with no label is a blank a reader could read
 * as a zero, so the type system makes the label mandatory rather than optional.
 */
import { STATUTES, type Degree } from "../statutes.ts";
import {
  ADDITIONAL_OFFENSE_POINTS,
  DESIGNATIONS,
  FORM_REVISION,
  MULTIPLIERS,
  PRIOR_RECORD_POINTS,
  SCALARS,
  VICTIM_INJURY_POINTS,
  primaryOffensePoints,
} from "./scoresheet-form.ts";

const CHART = STATUTES["921.0022"];

// ---------------------------------------------------------------- the picker
/**
 * Degrees that cannot be a primary offense on this form.
 *
 * Capital felonies: F.S. 921.0023 supplies no default for one, and s. 775.082(1)
 * and s. 921.141 govern instead. Misdemeanours: the Primary Offense grid has no
 * M row, and borrowing the 0.2 from the Additional Offenses grid would invent a
 * rule. Both exclusions are assertion T8.
 *
 * As it happens the 921.0022 chart ranks no capital felony and no misdemeanour,
 * so this filter currently removes nothing. It is written anyway, and T8 checks
 * the OUTPUT rather than this list, because "the chart happens not to contain
 * one today" is not the same statement as "this picker cannot offer one".
 */
const EXCLUDED_DEGREES: Degree[] = [
  "capital felony",
  "first degree misdemeanor",
  "second degree misdemeanor",
  "no degree assigned",
];

/**
 * One selectable primary offense.
 *
 * KEYED BY ROW INDEX, NEVER BY CITE, and this is load-bearing. Three cites in
 * the chart carry two rows at different levels under the same degree, so a
 * picker keyed on cite cannot distinguish them and would silently choose one.
 * Recorded as trap 5 in SENTENCING-BOND-CONCEPT.md with test vectors TV6 and
 * TV7. `index` is the position in this array and is the only handle the UI uses.
 */
export type PickerRow = {
  index: number;
  cite: string;
  degree: Degree;
  level: number;
  /** The chart's own descriptive text. F.S. 921.0022(2): descriptive only. */
  description: string;
};

export const PICKER: PickerRow[] = CHART.rows
  .filter((r) => r.level != null && !EXCLUDED_DEGREES.includes(r.degree))
  .map((r, index) => ({
    index,
    cite: r.cite.trim(),
    degree: r.degree,
    level: r.level as number,
    description: r.quote ?? "",
  }));

/**
 * Section boundary test, the same rule `rowsInSection` enforces in
 * offense-level.ts and for the same reason: F.S. 893.135 is trafficking and
 * F.S. 893.1351 is a different offence. A prefix match conflates them. Used
 * only in the one safe direction described on MULTIPLIERS.
 */
function inSection(cite: string, section: string): boolean {
  return new RegExp(`^${section.replace(/\./g, "\\.")}(?=$|[^0-9])`).test(cite.trim());
}

// ---------------------------------------------------------------- cell model
/**
 * A cell of the rendered form, in one of exactly three states.
 *
 * `empty` REQUIRES `needs`. That is the type-level expression of T4: there is no
 * way to construct an unlabelled empty cell, so the assertion checks something
 * the compiler already prevents rather than being the only thing standing
 * between a reader and a blank that looks like a zero.
 */
export type Cell =
  | { state: "filled"; value: string; source: string }
  | { state: "empty"; needs: string }
  | { state: "na"; why: string };

const empty = (needs: string): Cell => ({ state: "empty", needs });
const filled = (value: string, source: string): Cell => ({
  state: "filled",
  value,
  source,
});

/** A labelled row of the rendered form. */
export type FormRow = { label: string; cell: Cell };

/** A block of the rendered form, matching the Rule 3.992 section numbering. */
export type FormBlock = {
  numeral: string;
  heading: string;
  /** The grid the form prints on its face, where it prints one. */
  printedGrid?: string;
  rows: FormRow[];
  /** The section's own total box. Always empty. Never omitted. */
  total: Cell;
};

/** Reasons, written once so the same fact is named the same way everywhere. */
const NEEDS = {
  file: "the court file",
  charging: "the charging document",
  priors: "the defendant's prior record",
  counts: "any other counts before the court for sentencing",
  injury: "whether the court finds victim injury, and of what kind",
  status: "whether any form of legal status existed at the time of the offense",
  sanction: "whether a community sanction violation is before the court",
  weapon: "whether a firearm or semiautomatic weapon was possessed",
  priorSerious: "the prior record, and the level of the offenses in it",
  priorCapital: "whether there is a prior capital felony in the record",
  judge: "the sentence the judge imposes",
  designation: "a designation the state must plead and prove",
  departure: "reasons a court may state for a departure",
} as const;

/**
 * The total-cell reason, written once and used for every total and subtotal.
 *
 * A single constant rather than per-section wording, because T2 asserts these
 * cells are empty everywhere and a reader who sees the same sentence in every
 * total box learns the rule faster than one who sees eleven paraphrases.
 */
const NO_TOTAL =
  "This box stays empty. A form with empty inputs has no total, and a number here would be arithmetic on figures this page does not have.";

const totalCell = (): Cell => empty(NO_TOTAL);

/** The grid strings the form prints, rebuilt from the typed values. */
const gridString = (
  g: Record<string, number>,
  order: string[],
  sep: string,
): string => `(Level ${sep} Points: ${order.map((k) => `${k}=${g[k]}`).join(", ")})`;

const LEVELS_M_FIRST = ["M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// ---------------------------------------------------------------- the form
/**
 * The whole form, for a selection or for no selection.
 *
 * `row === null` is the blank form, and it is what the server renders. T9: with
 * JavaScript disabled the page shows the blank form and the disclosure and no
 * filled cell, so the blank state is a real product rather than a loading state.
 */
export function worksheet(row: PickerRow | null): FormBlock[] {
  const primaryRows: FormRow[] = row
    ? [
        {
          label: "Felony degree",
          cell: filled(row.degree, `F.S. 921.0022, row ${row.index + 1}`),
        },
        { label: "F.S. #", cell: filled(row.cite, "F.S. 921.0022") },
        {
          label: "Description",
          cell: filled(row.description, "F.S. 921.0022, descriptive column"),
        },
        {
          label: "Offense level",
          cell: filled(String(row.level), "F.S. 921.0022"),
        },
        {
          label: "Points",
          cell: filled(
            String(primaryOffensePoints(row.level)),
            `${FORM_REVISION.rule} Primary Offense grid, and F.S. 921.0024(1)(a)`,
          ),
        },
      ]
    : [
        { label: "Felony degree", cell: empty(NEEDS.charging) },
        { label: "F.S. #", cell: empty(NEEDS.charging) },
        { label: "Description", cell: empty(NEEDS.charging) },
        { label: "Offense level", cell: empty(NEEDS.charging) },
        { label: "Points", cell: empty(NEEDS.charging) },
      ];

  return [
    {
      numeral: "I",
      heading: "Primary offense",
      printedGrid:
        "(Level - Points: 1=4, 2=10, 3=16, 4=22, 5=28, 6=36, 7=56, 8=74, 9=92, 10=116)",
      rows: [
        {
          label: "Qualifier (attempt, solicitation, conspiracy, reclassification)",
          cell: empty(NEEDS.charging),
        },
        ...primaryRows,
        {
          label: "Prior capital felony triples primary offense points",
          cell: empty(NEEDS.priorCapital),
        },
      ],
      // NOT the points above. The form's own line triples this box when there is
      // a prior capital felony, and this page cannot know whether there is one.
      // Filling it with the point value would be a guess wearing a number.
      total: empty(
        `${NO_TOTAL} The form also triples this box where there is a prior capital felony, which is a fact about the record and not about the charge.`,
      ),
    },
    {
      numeral: "II",
      heading: "Additional offenses",
      printedGrid: gridString(ADDITIONAL_OFFENSE_POINTS, LEVELS_M_FIRST, "-"),
      rows: [{ label: "Each additional count", cell: empty(NEEDS.counts) }],
      total: totalCell(),
    },
    {
      numeral: "III",
      heading: "Victim injury",
      rows: VICTIM_INJURY_POINTS.map((v) => ({
        label: `${v.label} (${v.points} points each)`,
        cell: empty(NEEDS.injury),
      })),
      total: totalCell(),
    },
    {
      numeral: "IV",
      heading: "Prior record",
      printedGrid: gridString(PRIOR_RECORD_POINTS, LEVELS_M_FIRST, "="),
      rows: [{ label: "Each prior offense", cell: empty(NEEDS.priors) }],
      total: totalCell(),
    },
    {
      numeral: "V",
      heading: `Legal status violation (${SCALARS.legalStatus.points} points)`,
      rows: [{ label: SCALARS.legalStatus.face, cell: empty(NEEDS.status) }],
      total: totalCell(),
    },
    {
      numeral: "VI",
      heading: "Community sanction violation before the court for sentencing",
      rows: [
        SCALARS.communitySanction,
        SCALARS.communitySanctionNewFelony,
        SCALARS.communitySanctionSpecialConcern,
        SCALARS.communitySanctionSpecialConcernNewFelony,
      ].map((s) => ({ label: s.face, cell: empty(NEEDS.sanction) })),
      total: totalCell(),
    },
    {
      numeral: "VII",
      heading: `Firearm, semiautomatic firearm, or machine gun (${SCALARS.firearm.points} or ${SCALARS.semiautomaticOrMachineGun.points} points)`,
      rows: [{ label: SCALARS.firearm.face, cell: empty(NEEDS.weapon) }],
      total: totalCell(),
    },
    {
      numeral: "VIII",
      heading: `Prior serious felony (${SCALARS.priorSeriousFelony.points} points)`,
      rows: [
        { label: SCALARS.priorSeriousFelony.face, cell: empty(NEEDS.priorSerious) },
      ],
      total: totalCell(),
    },
    {
      numeral: "IX",
      heading: "Enhancements (only if the primary offense qualifies)",
      rows: MULTIPLIERS.map((m) => {
        // The form prints "x 2.0" and "x 1.25", not "x 2". Preserve the printed
        // decimals: this page reproduces a form, and 2.0 is what is on its face.
        const show = (v: number) =>
          v.toFixed(Math.max(1, (String(v).split(".")[1] ?? "").length));
        const label = `${m.label} (x ${m.values.map(show).join(", x ")})`;
        // The ONE safe inference, in one direction. The key names a required
        // primary-offense statute and the selection is not in it, so the
        // multiplier cannot apply. A MATCH proves nothing: the remaining
        // conditions are conduct, purpose or prior record, none of them here.
        if (
          row &&
          m.requiresPrimaryOffenseIn &&
          !m.requiresPrimaryOffenseIn.some((s) => inSection(row.cite, s))
        ) {
          return {
            label,
            cell: {
              state: "na",
              why: `Cannot apply to this selection. This multiplier requires the primary offense to be a violation of ${m.requiresPrimaryOffenseIn.map((s) => `s. ${s}`).join(", ")}, and ${row.cite} is not.`,
            } as Cell,
          };
        }
        return { label, cell: empty("whether the primary offense qualifies") };
      }),
      total: totalCell(),
    },
  ];
}

/** The four designations, names only. Never described. See scoresheet-form.ts. */
export const DESIGNATION_ROWS: FormRow[] = DESIGNATIONS.map((d) => ({
  label: d,
  cell: empty(NEEDS.designation),
}));

export const SENTENCE_IMPOSED_ROWS: FormRow[] = [
  "State prison",
  "County jail",
  "Community control",
  "Probation",
].map((l) => ({ label: l, cell: empty(NEEDS.judge) }));

export const DEPARTURE_ROW: FormRow = {
  label: "Reasons for departure, mitigating circumstances",
  cell: empty(NEEDS.departure),
};

/** The grand total. Its own export so T2 can assert on it by name. */
export const TOTAL_SENTENCE_POINTS: Cell = empty(
  `${NO_TOTAL} This is the box a sentencing worksheet exists to produce, and it is the box this page will never fill.`,
);

export const STATUTORY_MAXIMUM_CELL: Cell = empty(
  "the statutory maximum for the offense, which the form's own text says the lowest permissible sentence can replace. Working that out needs the completed form above.",
);

// ---------------------------------------------------------------- copy
export const H1 = "The Florida sentencing worksheet, mostly empty";

export const LEAD =
  "A Florida sentencing score is computed on a form. This page shows that form, Rule 3.992, and fills in the parts a charge selection determines. Everything else stays blank, because it depends on facts about a case that no website has.";

export const INTRO_NOTE =
  "Pick a primary offense below to see which cells a charge fills. Nothing is stored, nothing is sent anywhere, and the selection disappears when this page is closed.";

/**
 * Section 5 of the concept document, at Rule 4-7.12(d) prominence, adjacent to
 * the form rather than beneath it.
 *
 * DEPARTURE FROM THE CONCEPT DOCUMENT'S DRAFT, deliberate and recorded. Its
 * wording ran "Every one of those raises the score" across a list that ended
 * with the four sentencing designations. That is not accurate: the audited
 * F.S. 921.0024 table records each designation as a yes/no box with "no point
 * value, no multiplier, no corresponding (1)(b) key paragraph". They change what
 * a court may or must impose, through s. 775.082(9) and s. 775.084, and neither
 * is recorded in this repository, so this page names them and says nothing about
 * what they do. The point items and the multipliers are described accurately and
 * separately instead.
 */
export const CANNOT_KNOW = {
  heading: "This form is mostly empty, and that is the accurate result.",
  body:
    "What fills the empty cells is prior record, additional offenses, victim injury, legal status at the time of the offense, community sanction violations, prior serious and prior capital felonies, and whether a firearm was possessed. Each of those adds points, and any of eight multipliers can then multiply the subtotal. The form also carries four sentencing designations, which are checkboxes rather than point values, and this page does not describe what any of them does. None of that is on this page, and no total is shown, because a form with empty inputs has no total. A real worksheet in a real case is prepared by the state attorney and reviewed by a defense lawyer. This page is not that and cannot be.",
};

export const EMPTY_CELL_NOTE =
  "Every blank cell below is labelled with the fact it needs and who would know it. A blank is not a zero.";

/** C6. The revision AND the correction, together, because the date alone was satisfiable by the defective upload. */
export const VERSION_NOTE = `The form on this page is ${FORM_REVISION.rule} as amended effective ${FORM_REVISION.effective} (${FORM_REVISION.amendedBy}), including the corrected version The Florida Bar published in ${FORM_REVISION.correction}. That correction is not cosmetic: the ${FORM_REVISION.effective} upload printed the primary offense point values inside the additional offenses block, and this page implements the corrected grid. Point values are drawn from Statute 921.0024, 2025 Florida Statutes, recorded 2026-08-13, which carries the same figures.`;

export const DESIGNATION_NOTE =
  "The form prints four sentencing designations as checkboxes. They are shown here because they are on the form. What each one does is set by Statute 775.082 and Statute 775.084, which are not recorded on this site, so this page does not say.";

export const DESCRIPTION_NOTE =
  "The description is the ranking chart's own wording. Statute 921.0022(2) provides that the language in the right column is provided solely for descriptive purposes, so it describes the row rather than stating what the offense is.";

export const FEDERAL_NOTE =
  "The Criminal Punishment Code ranks Florida offenses. It does not apply to federal cases, so nothing on this page speaks to a charge in federal court.";

export const NO_RELATIONSHIP =
  "This page is educational information about how Florida computes a sentencing score. It is not legal advice, it is not about any particular case, and reading it does not create an attorney-client relationship with Hines & McCarty. Every case is different. Speak to a Florida lawyer about yours.";

export const NO_JS_NOTE =
  "The offense picker needs JavaScript. The blank form and the explanation below are the whole of what this page asserts, and they render without it.";

/**
 * Strings that must never appear in the rendered page. Concept document
 * Section 4, asserted by `check:worksheet` T3.
 *
 * "lowest permissible sentence", "months" and "years" appear on the form's own
 * face and in the version note, so they are forbidden AS OUTPUT LABELS rather
 * than as substrings. The gate encodes that distinction; see its T3 block.
 */
export const FORBIDDEN_OUTPUT_STRINGS = [
  "your sentence",
  "your score",
  "your level",
  "you are facing",
  "you would get",
  "likely",
  "expected",
  "typical",
  "usually",
  "on average",
  "most people",
] as const;

/** Every rendered string, for the measured-surface registry (D29). */
export const WORKSHEET_PAGE_COPY: string[] = [
  H1,
  LEAD,
  INTRO_NOTE,
  CANNOT_KNOW.heading,
  CANNOT_KNOW.body,
  EMPTY_CELL_NOTE,
  VERSION_NOTE,
  DESIGNATION_NOTE,
  DESCRIPTION_NOTE,
  FEDERAL_NOTE,
  NO_RELATIONSHIP,
  NO_JS_NOTE,
];
