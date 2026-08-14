/**
 * F.S. 784.045 (2025) -- Aggravated battery
 *
 * GENERATED from an audited build in the statute-table workflow (batch runs of
 * 2026-08-13). Built by one agent from the full section text, independently
 * re-fetched and audited by a second agent; verdict PASS. Do not hand-edit a
 * row without re-running the audit; the claim checker treats these as ground
 * truth.
 */
import type { StatuteTable } from "../statutes";

export const TABLE_784_045: StatuteTable = {
  cite: "F.S. 784.045 (2025)",
  title: "Aggravated battery",
  url: "https://www.flsenate.gov/Laws/Statutes/2025/784.045",
  fetched: "2026-08-13",
  completeness: "whole-section",
  unread: "Nothing within F.S. 784.045 was left unread. The section consists of exactly three subsections -- (1) with paragraphs (a) [subparagraphs 1. and 2.] and (b), (2), and (3) -- plus the History note, and every one was retrieved and read verbatim via curl from flsenate.gov. The full operative text is under 200 words.; Cross-referenced statutes NOT read (they are outside this section and their contents are not recorded here): s. 775.082 (penalties/terms of imprisonment), s. 775.083 (fines), s. 775.084 (habitual/violent felony offender enhancements), s. 870.01 (riot and aggravated riot definitions).; F.S. 921.0022 was NOT read in full. Only the three rows containing 784.045 were extracted from the offense severity ranking chart, which verified: (1)(a)1. = Level 7, 2nd degree; (1)(a)2. = Level 7, 2nd degree; (1)(b) = Level 7, 2nd degree. The remainder of the 921.0022 ranking chart was not read.; History note read but not recorded as a row (it assigns no degree, minimum, or enhancement): s. 1, ch. 70-63; s. 732, ch. 71-136; s. 20, ch. 74-383; s. 10, ch. 75-298; s. 3, ch. 88-344; s. 7, ch. 2021-6.",
  rows: [
    { cite: "784.045(1)(a)1.", min: null, max: null, degree: "second degree felony", level: 7, trigger: "Battery in which the offender intentionally or knowingly causes great bodily harm, permanent disability, or permanent disfigurement. No dollar or quantity threshold of any kind -- min is null because value is never a trigger anywhere in this section.", quote: "A person commits aggravated battery who, in committing battery:1. Intentionally or knowingly causes great bodily harm, permanent disability, or permanent disfigurement" },
    { cite: "784.045(1)(a)2.", min: null, max: null, degree: "second degree felony", level: 7, trigger: "Battery in which the offender uses a deadly weapon. This is the SECOND subparagraph of (1)(a) and is a wholly independent alternative to subparagraph 1. -- it requires NO great bodily harm, NO permanent disability, NO permanent disfigurement, and no injury threshold of any kind. min is null: there is no lower bound of harm.", scope: "item", quote: "A person commits aggravated battery who, in committing battery:...2. Uses a deadly weapon." },
    { cite: "784.045(1)(b)", min: null, max: null, degree: "second degree felony", level: 7, trigger: "Battery where the victim was pregnant at the time of the offense and the offender knew or should have known she was pregnant. This is a SEPARATE paragraph from (1)(a) and does NOT require great bodily harm or a deadly weapon -- a simple battery qualifies. min is null: no lower bound of harm or force beyond battery itself.", scope: "victim", quote: "A person commits aggravated battery if the person who was the victim of the battery was pregnant at the time of the offense and the offender knew or should have known that the victim was pregnant." },
    { cite: "784.045(2)", min: null, max: null, degree: "second degree felony", level: 7, trigger: "Single degree-assigning provision for the entire section: ANY violation of subsection (1) -- meaning (1)(a)1., (1)(a)2., or (1)(b) alike -- is a second degree felony. There is no graduated ladder in this statute; no value, quantity, or prior-conviction tier raises or lowers the degree. min is null because value is not a trigger.", quote: "A person who violates subsection (1) commits a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084." },
    { cite: "784.045(3)", min: null, max: null, degree: "no degree assigned", trigger: "Sentencing enhancement only, not a degree change: a violation of this section committed by a person acting in furtherance of a riot or an aggravated riot prohibited under s. 870.01 is ranked ONE LEVEL ABOVE its s. 921.0022 ranking for purposes of chapter 921 sentencing. Applies to every violation of the section, including (1)(a)2. and (1)(b). Because the base ranking for all three offense variants is Level 7, this enhancement produces a Level 8 ranking, but the statutory degree remains second degree felony under subsection (2). min is null -- the trigger is conduct, not value.", quote: "For the purposes of sentencing under chapter 921, a violation of this section committed by a person acting in furtherance of a riot or an aggravated riot prohibited under s. 870.01 is ranked one level above the ranking under s. 921.0022 for the offense committed." },
  ],
};
