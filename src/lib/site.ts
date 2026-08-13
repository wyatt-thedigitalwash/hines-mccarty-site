// Central site data. Copy here is first-draft and compliance-aware:
// no "best/expert/specialist" claims, no outcome promises (Fla. Bar R. 4-7).

// Type-only, so it is erased at runtime and this module keeps having no
// runtime imports. That property is what lets scripts/check-c9.ts load this
// file directly under `node --experimental-strip-types`.
import type { C9Assertion } from "./c9.ts";

/**
 * The site's absolute origin. Every canonical URL, Open Graph URL, sitemap
 * entry, and JSON-LD @id derives from this.
 *
 * [NEEDS: production domain] Set NEXT_PUBLIC_SITE_URL in the environment and
 * the whole site switches over with no code change. The fallback is a
 * placeholder and is obviously wrong on purpose, so it cannot be mistaken for a
 * real domain if it ever reaches production. Lower case, because new URL()
 * normalises the host and a mixed-case fallback made canonicals and robots.txt
 * disagree with each other.
 *
 * No trailing slash. Helpers below assume that.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example-domain-not-set.com"
).replace(/\/$/, "");

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path: string) =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const firm = {
  name: "Hines & McCarty",
  legalName: "Hines & McCarty, PLLC",
  tagline: "Criminal Defense, State and Federal",
  phone: "(813) 738-8650",
  phoneHref: "tel:+18137388650",
  // [NEEDS: confirm the firm number accepts text messages] -- the bio CTA reads
  // "Call or Text". If the line is voice only, that overstates a capability
  // (Rule 4-7.13; docs/research/avoid.md item 33) and the label must change.
  email: "intake@hinesmccarty.com",
  serviceArea: "Greater Tampa Bay",
} as const;

export type Office = {
  key: string;
  label: string;
  /** Only published offices render. Never render an office without an address. */
  published: boolean;
  street?: string;
  suite?: string;
  city: string;
  state: string;
  zip?: string;
  phone?: string;
  phoneHref?: string;
  hours?: string;
};

// Two offices, Brandon and Tampa, modeled as a list from the start because a
// second location changes the NAP block, the schema, and the footer.
//
// [NEEDS: confirm which office is primary] -- array order drives which address
// renders first, which one anchors the JSON-LD, and which the GBP points at.
// Brandon is first only because it is the confirmed one.
//
// Tampa stays `published: false` until a real street address exists. Rendering
// a Tampa office without a bona fide address is the exact misleading
// communication flagged in docs/research/avoid.md item 33 (Rule 4-7.12
// comment), so the entry carries the structure and none of the invention.
export const offices: Office[] = [
  {
    key: "brandon",
    label: "Brandon",
    published: true,
    street: "745 W Lumsden Rd",
    city: "Brandon",
    state: "FL",
    zip: "33511",
    phone: firm.phone,
    phoneHref: firm.phoneHref,
    hours: "Monday to Friday, 9 AM to 5 PM",
  },
  {
    key: "tampa",
    label: "Tampa",
    published: false,
    // [NEEDS: Tampa office address]
    // [NEEDS: Tampa office suite number]
    // [NEEDS: Tampa office hours]
    // [NEEDS: confirm whether Tampa has a separate phone number]
    city: "Tampa",
    state: "FL",
  },
];

export const publishedOffices = offices.filter((o) => o.published);

/** The address that satisfies Rule 4-7.12 on every page. */
export const primaryOffice = publishedOffices[0];

export const formatOffice = (o: Office) =>
  [o.street, o.suite, `${o.city}, ${o.state}${o.zip ? ` ${o.zip}` : ""}`]
    .filter(Boolean)
    .join(", ");

export type AttorneyEducation = {
  credential: string;
  school: string;
  year?: string;
  detail?: string;
};

export type AttorneyCredentials = {
  barAdmission?: { state: string; number: string; admitted: string };
  courts?: string[];
  education?: AttorneyEducation[];
  priorRoles?: string[];
  /** Confirmed memberships only. An unconfirmed membership is not a credential. */
  memberships?: string[];
};

export type Attorney = {
  slug: string;
  name: string;
  /** Left undefined until the client confirms it. Never infer a title. */
  role?: string;
  /** One line, factual, no characterization of skill. */
  concentration?: string;
  /** Path under /public. Undefined renders a monogram, never a stock photo. */
  portrait?: string;
  /**
   * True only when every rendered fact is client-verified. Unconfirmed bios
   * render visible [NEEDS] markers, are excluded from the sitemap, and are set
   * to noindex, because a half-written bio is worse than no bio for E-E-A-T.
   */
  confirmed: boolean;
  overview?: string[];
  /**
   * Areas this attorney practices in, shown on their own bio page. Saying
   * "Colton Trina practices state criminal defense" is a description of his
   * work.
   */
  practiceAreaHrefs?: string[];
  /**
   * Areas this attorney LEADS. Drives the "Handled by" block on practice and
   * charge pages, which is a different and stronger claim: it says this is the
   * person who handles this area for the firm.
   *
   * Deliberately empty on all four attorneys. Which attorney leads which area
   * is WEBSITE-PLAN.md Open Question 2 and is unanswered, so "Handled by"
   * renders nowhere. Populating this from practiceAreaHrefs would put a single
   * attorney under "Handled by" on all ten state charge pages, including
   * homicide and sexual battery, which nothing supports.
   */
  leadsPracticeHrefs?: string[];
  credentials?: AttorneyCredentials;
  ownFirmUrl?: string;
};

// The four attorneys. Order is the client's. Each bio page carries its own
// keyword set (WEBSITE-PLAN.md Tier 0).
//
// Compliance rails for every entry (Fla. Bar R. 4-7, docs/research/avoid.md
// Section 2): facts only, no self-laudatory or comparative language, no
// expert/specialist/certified wording absent board certification, no case
// results or verdicts, and no trial counts absent substantiation.
export const attorneys: Attorney[] = [
  {
    slug: "lily-mccarty",
    name: "Lily McCarty",
    confirmed: false,
    // [NEEDS: role and title]
    // [NEEDS: one-line concentration]
    // [NEEDS: bio overview, what she handles and how she works a case]
    // [NEEDS: which practice areas she leads]
    // [NEEDS: Florida Bar number and admission date]
    // [NEEDS: courts admitted to]
    // [NEEDS: education, school, degree, year]
    // [NEEDS: prior roles]
    // [NEEDS: memberships]
    // [NEEDS: portrait]
  },
  {
    slug: "maria-pavlidis",
    name: "Maria Pavlidis",
    confirmed: false,
    // [NEEDS: confirm relationship to firm, likely Of Counsel with separate
    // practice at pavlidislawfirm.com] -- no role label renders until this is
    // answered. Listing a lawyer from a separate firm without an accurate label
    // implies a partnership that may not exist (Rule 4-7.21; WEBSITE-PLAN.md
    // Open Question 2a).
    // [NEEDS: one-line concentration]
    // [NEEDS: bio overview, what she handles and how she works a case]
    // [NEEDS: which practice areas she leads]
    // [NEEDS: Florida Bar number and admission date]
    // [NEEDS: courts admitted to]
    // [NEEDS: education, school, degree, year]
    // [NEEDS: prior roles]
    // [NEEDS: memberships]
    // [NEEDS: portrait]
    ownFirmUrl: "https://pavlidislawfirm.com/",
  },
  {
    slug: "david-hines",
    name: "David Hines",
    confirmed: false,
    // [NEEDS: role and title]
    // [NEEDS: one-line concentration]
    // [NEEDS: bio overview, what he handles and how he works a case]
    // [NEEDS: which practice areas he leads]
    // [NEEDS: Florida Bar number and admission date]
    // [NEEDS: courts admitted to]
    // [NEEDS: education, school, degree, year]
    // [NEEDS: prior roles]
    // [NEEDS: memberships]
    // [NEEDS: portrait]
  },
  {
    slug: "colton-trina",
    name: "Colton Trina",
    confirmed: true,
    // "Attorney" is factual and non-claiming. [NEEDS: confirm his title within
    // the firm, associate, partner, or other] before anything more specific.
    role: "Attorney",
    concentration:
      "Criminal defense in the state courts of Hillsborough County",
    // [NEEDS: portrait] -- rendering a stock photo as a named lawyer would
    // misrepresent a real person, so the monogram stands in until a real
    // headshot exists.

    // Every sentence below traces to a client-verified fact. Nothing about
    // volume, tenure in private practice, or skill.
    // [NEEDS: how Colton Trina approaches a case, in his own words] -- the
    // brief asks for a "how they work a case" paragraph and no verified
    // material exists for one, so none is invented.
    overview: [
      "Colton Trina is a criminal defense attorney at Hines & McCarty. He practices in the state courts of Hillsborough County, in the 13th Judicial Circuit.",
      "Before entering private practice, he spent approximately two years as a public defender, representing clients in misdemeanor and felony matters and trying cases to juries.",
      "He studied criminal law and litigation at Southern Illinois University Simmons Law School, where he served on the Moot Court Board, and holds an engineering degree from Southern Illinois University Carbondale.",
    ],
    // State criminal defense is a description of the work he is verified to do,
    // not a claim that he leads the area.
    // [NEEDS: which practice areas Colton Trina leads] (WEBSITE-PLAN.md OQ 2)
    practiceAreaHrefs: ["/criminal-defense"],
    credentials: {
      barAdmission: {
        state: "Florida",
        number: "1057615",
        admitted: "September 4, 2024",
      },
      // Florida state courts follow from Bar admission.
      // [NEEDS: confirm admission to the U.S. District Court for the Middle
      // District of Florida, or any other federal court]
      courts: ["Florida state courts"],
      education: [
        {
          credential: "Juris Doctor",
          school: "Southern Illinois University Simmons Law School",
          year: "2022",
          detail: "Focus in criminal law and litigation. Moot Court Board.",
        },
        {
          credential: "Bachelor of Science, Engineering",
          school: "Southern Illinois University Carbondale",
          // [NEEDS: graduation year for the engineering degree]
        },
      ],
      priorRoles: [
        "Public defender, approximately two years, representing clients in misdemeanor and felony matters including jury trials",
      ],
      // [NEEDS: memberships] -- nothing renders here until confirmed.
    },
  },
];

export const attorneyBySlug = (slug: string) =>
  attorneys.find((a) => a.slug === slug);

/**
 * The attorneys who LEAD a practice area or charge, for the "Handled by" block.
 * Returns nothing today by design; see `leadsPracticeHrefs`.
 */
export const attorneysLeadingPractice = (href: string) =>
  attorneys.filter((a) => a.leadsPracticeHrefs?.includes(href));

// County result pages. Each one stays unpublished until that county has at
// least 5 real, consented, disclaimered results behind it (WEBSITE-PLAN.md
// Tier 0). While every county is unpublished the Results nav item renders as a
// plain link with no dropdown, which is the correct state today.
export const resultsCounties = [
  {
    label: "Hillsborough County",
    slug: "hillsborough-county",
    published: false,
  },
  { label: "Pinellas County", slug: "pinellas-county", published: false },
  { label: "Polk County", slug: "polk-county", published: false },
  { label: "Manatee County", slug: "manatee-county", published: false },
  { label: "Hernando County", slug: "hernando-county", published: false },
  { label: "Sarasota County", slug: "sarasota-county", published: false },
  { label: "Pasco County", slug: "pasco-county", published: false },
] as const;

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

// Capability pillars. The charges under each one live in `charges`, not here.
//
// These previously carried their own `items` array, which the home practice
// grid read while Cases We Defend read `charges`. Two lists for one thing, and
// they diverged: 23 charges on the home page against 29 in the section. One
// source now, so that cannot happen again.
// URLs are top-level, not nested under the hub, so the money terms keep short
// paths (WEBSITE-PLAN.md Tier 1). The "Cases We Defend" hub links down to them.
// Each item carries a one-line plain-language description rendered under its
// label in the practice-area grid. Descriptions stay descriptive, never
// predictive: what the charge is, never what the outcome will be (R. 4-7.13).
export const capabilities = [
  {
    key: "state",
    short: "State",
    title: "State Criminal Defense",
    href: "/criminal-defense",
    summary:
      "Serious felony and misdemeanor defense in the 13th Judicial Circuit and across Tampa Bay.",
  },
  {
    key: "federal",
    short: "Federal",
    title: "Federal Criminal Defense",
    href: "/federal-criminal-defense",
    summary:
      "Representation in the Middle District of Florida, Tampa Division, from investigation through sentencing.",
  },
  {
    key: "white-collar",
    short: "White-Collar",
    title: "White-Collar Defense",
    href: "/white-collar-defense",
    summary:
      "Fraud and financial-crime defense for professionals and businesses under state or federal scrutiny.",
  },
] as const;

// Header navigation, per the client meeting. Five items. The wordmark is the
// home link, so there is no Home entry. About has no top-level slot: the
// Attorneys hub carries the overview and links out to the full page.
// Defined after `capabilities` because it reads from it.
export const primaryNav: NavItem[] = [
  {
    label: "Attorneys",
    href: "/attorneys",
    children: [
      {
        label: "About the Firm",
        href: "/about",
        description: "Who we are and how the bench is built",
      },
      ...attorneys.map((a) => ({
        label: a.name,
        href: `/attorneys/${a.slug}`,
      })),
    ],
  },
  {
    // Plain-language label by client direction. The keywords live in the page's
    // meta title, not the nav. 30+ money pages sit under this item, so it needs
    // a real hub page behind it, not just a dropdown.
    label: "Cases We Defend",
    href: "/cases-we-defend",
    children: capabilities.map((c) => ({
      label: c.title,
      href: c.href,
      description: c.summary,
    })),
  },
  {
    label: "Results",
    href: "/results",
    children: resultsCounties
      .filter((c) => c.published)
      .map((c) => ({ label: c.label, href: `/results/${c.slug}` })),
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Tools & Guides",
        href: "/resources/tools-and-guides",
        description: "Calculators, estimators, and process walkthroughs",
      },
      {
        label: "Articles",
        href: "/resources/articles",
        description: "Explainers on charges, courts, and sentencing",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

// ---------------------------------------------------------------------------
// Cases We Defend
// Section hub, three silo hubs, and the level 3 charge pages.
// Plan: docs/build/CASES-WE-DEFEND-PLAN.md
// ---------------------------------------------------------------------------

export type SiloKey = "state" | "federal" | "white-collar";

/**
 * Verified court facts a silo hub can carry, beyond the prose forum section.
 *
 * Every field is optional and renders nothing when absent, so a hub with no
 * verified facts yet looks deliberate rather than broken. Nothing here is
 * charge-specific: these describe the forum, which is what a hub is for.
 *
 * ONLY VERIFIED FACTS GO IN HERE. Each entry carries the allowlisted source it
 * was fetched from, per done-criterion C12. Anything unverified stays a [NEEDS]
 * comment beside the data rather than becoming rendered text.
 */
export type ForumFacts = {
  /**
   * The court's internal geography. Federal: the divisions and their counties.
   * `isLocal` marks the row the reader is most likely in, which is a factual
   * emphasis, not a claim about the firm.
   */
  divisions?: {
    heading: string;
    intro?: string;
    rows: { name: string; counties: string; isLocal?: boolean }[];
  };
  /** The courthouse a local reader actually goes to. */
  courthouse?: {
    heading: string;
    name: string;
    address: string;
    body?: string[];
    /** Label and value rows: clerk phone, hours, counties served. */
    rows?: { label: string; value: string }[];
  };
  /**
   * Who prosecutes and who defends in this forum. Factual identification of
   * public offices only. Never any implication of a relationship with or
   * influence over the court or the prosecuting office (Rule 4-7.13).
   */
  offices?: {
    heading: string;
    intro?: string;
    items: { role: string; name: string; note?: string }[];
  };
  /** An admission or practice requirement of this court, stated factually. */
  practice?: { heading: string; body: string[] };
};

export type Silo = {
  key: SiloKey;
  href: string;
  /** Label used in the charge index and nav-adjacent lists. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Plan Section 3 item 4, the section that earns the page. */
  forumHeading: string;
  forumBody: string[];
  /** Verified court facts. See ForumFacts. */
  forumFacts?: ForumFacts;
  owner?: string;
  lastReviewed?: string;
  /**
   * Forum-level questions. These belong on the hub rather than on any one
   * charge page because they are about the court, not the offence.
   */
  faq?: FaqItem[];
  /** False until the copy has had its C12 verification pass and attorney read. */
  published: boolean;
};

export const silos: Silo[] = [
  {
    key: "state",
    href: "/criminal-defense",
    label: "State Criminal Defense",
    h1: "State criminal defense in Hillsborough County",
    metaTitle:
      "State Criminal Defense in Hillsborough County | Hines & McCarty",
    metaDescription:
      "Felony and misdemeanor defense in the 13th Judicial Circuit, Hillsborough County, from first appearance through trial.",
    intro: [
      "A state criminal case in Hillsborough County is brought by the State Attorney for the 13th Judicial Circuit and heard in the circuit or county court, depending on whether the charge is a felony or a misdemeanor.",
      "Hines & McCarty defends the full range of state charges, including the serious felonies that many firms refer out. Select a charge below to read what it involves and how the defense is built.",
    ],
    forumHeading: "What is different about a state case",
    forumBody: [
      "A state case usually begins with an arrest, so the first decisions happen fast. First appearance comes within a set period after booking, and release is often addressed against a published bond schedule before an attorney has seen a single page of discovery.",
      "From there the case moves through arraignment, discovery, and motion practice. The state has to disclose what it intends to use, and that disclosure is where most cases are actually won or narrowed, well before a trial date matters.",
    ],
    faq: [
      {
        question: "How do I know whether my case is in state or federal court?",
        source: "drafted",
      },
      {
        question: "What happens at a first appearance in Hillsborough County?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question:
          "Who qualifies for pretrial intervention in the 13th Circuit?",
        source: "keywords.md",
        grade: "NOW",
      },
      {
        question: "What does adjudication withheld mean on a Florida felony?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question:
          "What happens at a violation of probation hearing in Florida?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question:
          "What is the minimum sentence for a third degree felony in Florida?",
        source: "keywords.md",
        grade: "6-12mo",
      },
    ],
    published: false,
  },
  {
    key: "federal",
    href: "/federal-criminal-defense",
    label: "Federal Criminal Defense",
    h1: "Federal criminal defense in the Middle District of Florida",
    metaTitle:
      "Federal Criminal Defense, Middle District of Florida | Hines & McCarty",
    metaDescription:
      "Defense in the Middle District of Florida, Tampa Division, from investigation and target letters through indictment, trial, and sentencing.",
    intro: [
      "A federal case in the Tampa Division of the Middle District of Florida is prosecuted by the United States Attorney's Office and investigated by federal agencies, often for a long time before anyone is charged.",
      "Hines & McCarty represents clients in federal matters from the investigative stage forward. Select a charge below to read what it involves and how the defense is built.",
    ],
    forumHeading: "What is different about a federal case",
    forumBody: [
      "Two things about federal practice surprise people most. The first is timing. A federal investigation frequently runs for months before an indictment issues, which means that by the time someone learns they are charged, the government has already built its case. It also means the most valuable point to involve counsel is usually before charges exist, not after.",
      "The second is release. Federal court does not work from a bond schedule. Whether a defendant is released pending trial is litigated at a hearing, on statutory factors, and that hearing happens early.",
      "Sentencing works differently too. Federal exposure is driven by an advisory guideline calculation rather than by a state scoresheet, and the inputs to that calculation are often contested long before sentencing.",
    ],
    /**
     * From docs/research/briefs/W1-01-middle-district-florida-hub.md. This hub
     * carries that brief, per DECISIONS.md D1: the Layer 2 guide at
     * /resources/guides/middle-district-florida-federal-court is not built,
     * because two pages cannot own one query.
     *
     * The C9 differentiator, named in the brief: cover the words "Middle
     * District of Florida" and the page is still identifiable, because the
     * division list names a seven-county Tampa Division that no other court in
     * the world has.
     *
     * Every fact below was fetched 2026-08-13 from flmd.uscourts.gov, which is
     * allowlisted for this court under CASES-WE-DEFEND-PLAN.md Section 10.3.
     *
     * [NEEDS: Tampa Division district and magistrate judges] Not fetched. The
     * brief records the judges directory as UNVERIFIED. Do not name a judge
     * from recall.
     * [NEEDS: current U.S. Attorney for the Middle District of Florida] The
     * office is verified; the incumbent is not. justice.gov/usao-mdfl is now
     * allowlisted for this (DECISIONS.md D2, procedure and policy scope), but
     * it has not been fetched. The name also decays every administration,
     * which is why the brief keeps it out of the FAQ.
     * [NEEDS: Speedy Trial Act intervals, 18 U.S.C. 3161] Fetchable from
     * uscode.house.gov since D2. Publish no interval until fetched.
     * [NEEDS: detention factors, 18 U.S.C. 3142] Same.
     * [NEEDS: federal investigating agency offices in Tampa] Verify against
     * each agency's own site before naming a field office.
     */
    forumFacts: {
      divisions: {
        heading: "The five divisions, and which one hears a Tampa case",
        intro:
          "The Middle District of Florida runs from the Georgia line to the edge of the Everglades, and it is split into five divisions. Which one hears a case follows the county it comes from.",
        rows: [
          {
            name: "Tampa",
            counties:
              "Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota",
            isLocal: true,
          },
          {
            name: "Orlando",
            counties: "Brevard, Orange, Osceola, Seminole, Volusia",
          },
          {
            name: "Jacksonville",
            counties:
              "Baker, Bradford, Clay, Columbia, Duval, Flagler, Hamilton, Nassau, Putnam, St. Johns, Suwannee, Union",
          },
          {
            name: "Ocala",
            counties: "Citrus, Hernando, Lake, Marion, Sumter",
          },
          {
            name: "Fort Myers",
            counties: "Charlotte, Collier, DeSoto, Glades, Hendry, Lee",
          },
        ],
      },
      courthouse: {
        heading: "Where a Tampa Division case is heard",
        name: "Sam M. Gibbons United States Courthouse",
        address: "801 North Florida Avenue, Tampa, Florida 33602",
        body: [
          // A statement about court geography, not about the firm's presence.
          // Plan Section 8.1 rule 3 forbids implying an office the firm does
          // not have; naming the county a division covers implies nothing.
          "Brandon sits in Hillsborough County, and Hillsborough County sits in the Tampa Division. A federal case arising here is heard downtown, at the courthouse below.",
        ],
        rows: [
          { label: "Clerk's office", value: "(813) 301-5400" },
          {
            label: "Clerk's office hours",
            value: "8:30 a.m. to 4:00 p.m., weekdays except holidays",
          },
          {
            label: "Counties served",
            value:
              "Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota",
          },
        ],
      },
      offices: {
        heading: "Who prosecutes, and who defends",
        intro:
          "Federal cases here are brought by one office and defended by private counsel or, for those who qualify, by the federal defender.",
        items: [
          {
            role: "Prosecution",
            name: "United States Attorney's Office, Middle District of Florida",
            note: "Federal charges in this district are brought by this office rather than by a state attorney.",
          },
          {
            role: "Appointed defense",
            name: "Office of the Federal Defender for the Middle District of Florida",
            note: "Represents defendants who qualify for appointed counsel. A defendant who does not qualify, or who retains counsel, is represented privately.",
          },
        ],
      },
      practice: {
        heading: "Who can appear in this court",
        body: [
          "Appearing in the Middle District is not automatic for a Florida lawyer. The court requires membership of its own bar, or special admission in the individual case, under its Local Rule 2.01.",
          "It is a fact worth checking about anyone being considered for a federal matter here, and it is checkable: the court publishes a directory of the members of its bar.",
        ],
      },
    },
    faq: [
      {
        question: "How do I know whether my case is in state or federal court?",
        source: "drafted",
      },
      {
        question:
          "How long does a federal indictment take after an investigation starts?",
        source: "keywords.md",
        grade: "NOW",
      },
      {
        question:
          "How does pretrial release work in the Middle District of Florida?",
        source: "keywords.md",
        grade: "NOW",
      },
      {
        question: "What should I do if the FBI wants to talk to me?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question:
          "What is the difference between a witness, a subject, and a target?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question: "What is a proffer agreement, and what are the risks of one?",
        source: "keywords.md",
        grade: "6-12mo",
      },
    ],
    published: false,
  },
  {
    key: "white-collar",
    href: "/white-collar-defense",
    label: "White-Collar Defense",
    h1: "White-collar and fraud defense",
    metaTitle: "White-Collar and Fraud Defense | Hines & McCarty",
    metaDescription:
      "Fraud and financial-crime defense for professionals and businesses under state or federal scrutiny in Tampa Bay.",
    intro: [
      "White-collar matters often arrive before any charge does: an audit, a subpoena, a letter, a call from an investigator, or a regulator asking questions. What happens in that window shapes everything after it.",
      "Hines & McCarty represents professionals and businesses in fraud and financial-crime matters. Select a charge below to read what it involves and how the defense is built.",
    ],
    forumHeading: "What is different about a white-collar case",
    forumBody: [
      "These cases are built on documents rather than on eyewitnesses, and the record usually already exists before anyone knows there is an investigation. Emails, billing records, and bank files are gathered quietly, which is why the pre-charge stage matters more here than almost anywhere else in criminal law.",
      "They also carry consequences beyond the criminal case. A professional license, a security clearance, an employment agreement, or a firm's ability to keep operating can all turn on the outcome, and those tracks move on their own schedules.",
    ],
    faq: [
      {
        question: "How do I know whether my case is in state or federal court?",
        source: "drafted",
      },
      {
        question:
          "What should a provider do when they learn they are under investigation for healthcare fraud?",
        source: "keywords.md",
        grade: "6-12mo",
      },
      {
        question:
          "Can a case start before anyone tells me I am being investigated?",
        source: "drafted",
      },
      {
        question: "How does a criminal charge affect a professional license?",
        source: "drafted",
      },
    ],
    published: false,
  },
];

export const siloByKey = (key: string) => silos.find((s) => s.key === key);
export const siloByHref = (href: string) => silos.find((s) => s.href === href);

export type PenaltyRow = {
  degree: string;
  maximum: string;
  offenseLevel?: string;
  note?: string;
};

/**
 * One FAQ entry.
 *
 * Questions and answers land separately on purpose. A question is research: it
 * comes from docs/research/keywords.md, which recorded what people actually
 * type and graded how winnable each one is. An answer is legal content and has
 * to clear the C12 verification pass and an attorney read before it publishes.
 *
 * So questions ship first, unanswered, and the schema simply omits any item
 * without an answer rather than emitting a hollow Q with no A.
 */
export type FaqItem = {
  question: string;
  /** Undefined until written and verified. */
  answer?: string;
  /** Where the question came from. Never invent one and label it research. */
  source: "keywords.md" | "drafted";
  /** keywords.md winnability grade, for build ordering. */
  grade?: "NOW" | "6-12mo" | "YEARS";
};

export type RelatedLink = { label: string; href: string };

/**
 * A level 3 charge page. Every field is data; nothing about a specific charge
 * is hardcoded in a component.
 *
 * Content fields are undefined until the page is written. The template renders
 * a visible [NEEDS] marker for each one, and `published` stays false, which
 * keeps the page out of the sitemap and sets it to noindex.
 */
export type ChargePage = {
  slug: string;
  silo: SiloKey;
  /** Short label for the charge index. */
  label: string;
  /**
   * One line, plain language, capped at 8 words. Rendered under the label in
   * the home practice grid and the charge index.
   */
  description: string;
  /** H1. Falls back to the label until written. */
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  /** Template item 1, the direct answer in the first 40 words. */
  lead?: string;
  /** Template item 2. */
  statute?: { citation: string; body: string };
  /** Template item 3. Never links the calculator until it clears C1-C8. */
  penalties?: PenaltyRow[];
  /** Template item 4, what the government has to prove. */
  elements?: string[];
  /** Template item 5, process only, no outcome language. */
  defenseApproach?: string[];
  /** Template item 6, courthouse-level specificity. */
  forum?: string[];
  /**
   * Plan Section 4.6. Overlap pages open with a forum section and carry one
   * cross-link to their counterpart. Body copy is never shared.
   */
  counterpart?: { href: string; label: string; note: string };
  /** Template item 8, rendered with FAQPage schema. */
  faq?: FaqItem[];
  /** Template item 9. */
  relatedGuides?: RelatedLink[];
  /** Template item 10, C11. */
  owner?: string;
  lastReviewed?: string;
  /**
   * Done-criterion C9, recorded as an assertion so it can be checked ACROSS
   * pages rather than only within one.
   *
   * This never renders. It exists so scripts/check-c9.ts can fail the build
   * when two pages rest on the same statute and claim the same substance,
   * which is what happened when the embezzlement and grand theft briefs each
   * claimed the F.S. 812.014 value table. See src/lib/c9.ts for why this is a
   * collision check and deliberately not a presence check.
   *
   * [NEEDS] in `statute` or `assertion` marks an entry as not yet briefed. Those
   * are skipped by the checker, because a placeholder cannot collide.
   */
  c9: C9Assertion;
  published: boolean;
};

const stateCharges: ChargeSeed[] = [
  [
    "sexual-battery-defense",
    "Sexual Battery",
    "Charges involving alleged non-consensual sexual acts",
  ],
  [
    "drug-trafficking-defense",
    "Drug Trafficking",
    "Drug charges based on large amounts",
  ],
  [
    "drug-possession-defense",
    "Drug Possession",
    "Charges for having drugs on you",
  ],
  [
    "gun-crimes-defense",
    "Gun Crimes",
    "Charges for carrying, using, or owning firearms",
  ],
  [
    "sex-crimes-defense",
    "Sex Crimes",
    "Charges involving alleged sexual conduct or contact",
  ],
  [
    "battery-defense",
    "Battery",
    "Charges for allegedly hitting or touching someone",
  ],
  [
    "domestic-violence-defense",
    "Domestic Violence",
    "Charges involving a partner or family member",
  ],
  [
    "grand-theft-defense",
    "Grand Theft",
    "Theft charges above a set dollar amount",
  ],
  [
    "homicide-defense",
    "Homicide",
    "Charges involving someone's death, including murder",
  ],
  ["dui-defense", "DUI", "Driving charges involving alcohol or drugs"],
];

const federalCharges: ChargeSeed[] = [
  [
    "drug-trafficking",
    "Federal Drug Trafficking",
    "Drug charges brought by federal prosecutors",
  ],
  // DRAFTED, not client-supplied. See the note above the seed arrays.
  [
    "white-collar-corporate-fraud",
    "White-Collar and Corporate Fraud",
    "Fraud charges against a company or its officers",
  ],
  [
    "healthcare-fraud",
    "Healthcare Fraud",
    "Billing charges involving Medicare, Medicaid, or insurers",
  ],
  // DRAFTED
  [
    "wire-mail-fraud",
    "Wire and Mail Fraud",
    "Fraud charges based on calls, email, or mail",
  ],
  [
    "conspiracy-charges",
    "Conspiracy Charges",
    "Charges for allegedly agreeing to a crime",
  ],
  [
    "weapons-gun-offenses",
    "Weapons and Gun Offenses",
    "Gun charges prosecuted in federal court",
  ],
  [
    "csam-defense",
    "Child Sex Abuse Material",
    "Federal charges involving illegal images of minors",
  ],
  [
    "money-laundering",
    "Money Laundering",
    "Charges for hiding where money came from",
  ],
  [
    "computer-internet-crimes",
    "Computer and Internet Crimes",
    "Charges involving computers, networks, or online activity",
  ],
  [
    "target-letter-defense",
    "Target Letter Defense",
    "A letter saying you are under federal investigation",
  ],
];

const whiteCollarCharges: ChargeSeed[] = [
  // DRAFTED. The supplied copy covered a combined "Corporate and Wire Fraud"
  // entry, which Tier 2 splits into corporate-fraud and wire-fraud, so each
  // needed its own line.
  [
    "corporate-fraud",
    "Corporate Fraud",
    "Fraud charges involving a business or its records",
  ],
  [
    "healthcare-fraud",
    "Healthcare Fraud",
    "Billing charges involving Medicare, Medicaid, or insurers",
  ],
  // mail-fraud REMOVED 2026-08-13 (DECISIONS.md D4). It failed the C9
  // cover-the-name test against wire fraud: 18 U.S.C. 1341 and 1343 share an
  // opening clause, a 20-year maximum, and a word-for-word identical
  // enhancement sentence, differing only in the jurisdictional means. The
  // `mail fraud attorney Tampa` query is targeted by an H2 within
  // /federal-criminal-defense/wire-mail-fraud, whose slug already names both.
  [
    "bank-fraud",
    "Bank Fraud",
    "Charges involving loans, accounts, or bank records",
  ],
  [
    "embezzlement",
    "Embezzlement",
    "Charges for taking money you were trusted with",
  ],
  [
    "securities-fraud",
    "Securities Fraud",
    "Charges involving investments, stocks, or investor money",
  ],
  // DRAFTED
  [
    "computer-crime",
    "Computer Crime",
    "Charges involving unauthorized computer or network access",
  ],
  // DRAFTED
  [
    "wire-fraud",
    "Wire Fraud",
    "Fraud charges based on calls, email, or transfers",
  ],
  ["tax-evasion", "Tax Evasion", "Charges for not paying or reporting taxes"],
  // Both added 2026-08-13 (DECISIONS.md D3). Each is a wave 1 or wave 2 page in
  // CASES-WE-DEFEND-PLAN.md Section 7 that had no slug, and each passes C9 on
  // its own substance rather than being folded into a sibling: PPP on a
  // programme-specific limitations period and an audit-before-indictment
  // posture, identity theft on a four-tier offense-level ladder under
  // F.S. 817.568 running from level 4 to level 9.
  [
    "ppp-loan-fraud",
    "PPP Loan Fraud",
    "Charges over pandemic relief loan applications",
  ],
  [
    "identity-theft",
    "Identity Theft",
    "Charges for using another person's identifying information",
  ],
  // Added 2026-08-13 (DECISIONS.md D11). The federal silo already had a
  // money-laundering slug, but the Florida offence is a different statute with
  // its own thresholds and its own aggregation window, so the two are an
  // overlap pair rather than one page. Same shape as healthcare-fraud, which
  // also appears in both silos.
  [
    "money-laundering",
    "Money Laundering",
    "Charges for moving money tied to unlawful activity",
  ],
];

/** [slug, label, one-line description capped at 8 words] */
type ChargeSeed = [string, string, string];

/**
 * C9 assertions, keyed `silo/slug`, from the named differentiator in each
 * page's brief in docs/research/briefs/.
 *
 * Only charges with a written brief appear here. Everything else gets the
 * [NEEDS] placeholder from `stub` below, which the collision checker skips: a
 * placeholder cannot collide with anything, and pretending otherwise would make
 * the check noisy rather than useful.
 *
 * Note that grand theft and embezzlement both rest on F.S. 812.014 and do NOT
 * collide, which is the whole point of the ruling in CASES-WE-DEFEND-PLAN.md
 * Section 4.5: the shared value table moved to the Layer 2 offense-level asset,
 * grand theft kept the value ladder as its subject matter, and embezzlement
 * took the position-of-trust pattern.
 */
const CHARGE_C9: Record<string, C9Assertion> = {
  "state/grand-theft-defense": {
    statute: "F.S. 812.014",
    section: "Degrees and penalties",
    assertion:
      "The value ladder that sets the degree of a theft, from the $750 felony threshold up to the $100,000 first degree tier, plus the $40 floor for property taken from a dwelling.",
  },
  "white-collar/embezzlement": {
    statute: "F.S. 812.014",
    section: "What the state has to prove",
    assertion:
      "Possession was lawful and authorised when it began, so the contested element is intent to deprive rather than the taking.",
  },
  "state/drug-trafficking-defense": {
    statute: "F.S. 893.135",
    section: "Weight, mandatory minimum, fine and offense level",
    assertion:
      "Substance-specific weight tiers, each tied to a mandatory minimum term and a fixed fine, with no tier ranked below offense level 7.",
  },
  "state/gun-crimes-defense": {
    statute: "F.S. 775.087",
    section: "If a firearm was involved",
    assertion:
      "Possession of a firearm by a felon and burglary of a conveyance carry a three-year minimum under 10-20-Life, not the ten years every other enumerated felony draws.",
  },
  "state/domestic-violence-defense": {
    statute: "F.S. 741.2901",
    section: "Why the case continues if the complainant recants",
    assertion:
      "Every state attorney is directed by statute to adopt a pro-prosecution policy for this category of case, so the complainant does not control whether it proceeds.",
  },
  // RESOLVED 2026-08-13 (DECISIONS.md D11). The white-collar slug now exists,
  // so this assertion attaches to a real page. The federal sibling rests on
  // different statutes and will need its own differentiator when it is briefed.
  "white-collar/money-laundering": {
    statute: "F.S. 896.101",
    section: "Thresholds, degrees and offense levels",
    assertion:
      "A three-tier ladder starting at $300 and measured across any rolling 12-month period, where even the third degree tier is ranked at offense level 7.",
  },
  "white-collar/identity-theft": {
    statute: "F.S. 817.568",
    section: "The minor and the guardian tiers",
    assertion:
      "Using the identifying information of a minor in the defendant's own custody is a second degree felony ranked at level 9, above a first degree grand theft.",
  },
  "white-collar/wire-fraud": {
    statute: "F.S. 817.034",
    section: "Forum section: state charge or federal charge?",
    assertion:
      "No Florida offense carries this name, and the state analogue is the Florida Communications Fraud Act with its own aggregate-value tiers.",
  },
  // OPP-01. Its differentiator rests on a limitations period that is reported
  // rather than verified, so the statute stays a placeholder and the entry is
  // not compared. See docs/research/briefs/OPP-01-ppp-loan-fraud.md.
  "white-collar/ppp-loan-fraud": {
    statute: "[NEEDS: the limitations statute governing PPP fraud prosecutions]",
    section: "Is this still live?",
    assertion:
      "[NEEDS: verify the limitations period before asserting it as the differentiator]",
  },
};

/**
 * Exported so scripts/check-c9.mts can verify every key here matches a real
 * charge. A key that matches nothing is a silent failure: the assertion looks
 * recorded, the collision checker never sees it, and the page it was meant to
 * govern quietly carries a [NEEDS] placeholder instead. That is exactly the
 * shape of defect 1 in docs/research/HUNT-LIST.md, so it gets its own check
 * rather than trust.
 */
export const CHARGE_C9_KEYS = Object.keys(CHARGE_C9);

const stub =
  (silo: SiloKey) =>
  ([slug, label, description]: ChargeSeed): ChargePage => ({
    slug,
    silo,
    label,
    description,
    c9: CHARGE_C9[`${silo}/${slug}`] ?? {
      statute: "[NEEDS: the statute the differentiator rests on]",
      section: "[NEEDS: which template section carries it]",
      assertion: "[NEEDS: brief not written; see CASES-WE-DEFEND-PLAN.md Section 7]",
    },
    published: false,
  });

/**
 * All charge pages, from WEBSITE-PLAN.md Section 3 Tier 2 (the client's
 * SEO.pdf list). 30 entries: 10 state, 10 federal, 10 white-collar.
 *
 * NOTE ON THE COUNT. CASES-WE-DEFEND-PLAN.md says "~26" and the home practice
 * grid carries 23. The authoritative list is Tier 2. It totals 30, because
 * several federal and white-collar entries overlap: healthcare-fraud appears
 * in both silos with the same slug, and corporate-fraud, wire-fraud, and
 * computer-crime each shadow a broader federal sibling. WEBSITE-PLAN.md says to
 * cross-link those, not duplicate them, which is what `counterpart` is for.
 *
 * RESOLVED 2026-08-13 (DECISIONS.md D3 and D4). "Whether some should be merged
 * rather than cross-linked" was recorded here as an unmade content decision.
 * It was made, by running the C9 cover-the-name test rather than by judgment:
 * mail-fraud failed against wire fraud and was removed, bank-fraud passed and
 * was kept, and ppp-loan-fraud and identity-theft were added. The generalisable
 * rule, now in CASES-WE-DEFEND-PLAN.md Section 4.6.1: where two pages would rest
 * on statutes differing only in a jurisdictional element, they are one page;
 * where they differ in an element of the offence, they are two.
 */
/**
 * The one populated entry, so the template's filled branches can be verified
 * without waiting for content. Every value is explicitly labelled a template
 * preview: NONE of it is charge content, no legal proposition is asserted, and
 * the page stays unpublished, noindex, and out of the sitemap.
 *
 * Attached to state drug trafficking because it is the one preview entry that
 * also exercises the overlap cross-link in Section 4.6, having a genuine
 * federal counterpart. Replace wholesale when the real page is written.
 */
const templatePreview: Partial<ChargePage> = {
  title: "Drug trafficking charges in Hillsborough County",
  lead: "TEMPLATE PREVIEW. The opening answer goes here: what this charge is, in plain language, inside the first 40 words. No content has been written for this page.",
  statute: {
    citation: "[VERIFY: charging statute and its current text]",
    body: "TEMPLATE PREVIEW. What the statute says, cited to the operative version, verified against an allowlisted official source per done-criterion C12.",
  },
  penalties: [
    {
      degree: "[VERIFY: degree]",
      maximum: "[VERIFY: statutory maximum]",
      offenseLevel: "[VERIFY: offense level]",
      note: "The scoresheet link belongs on this row and is absent on purpose. The calculator has not cleared C1 through C8.",
    },
    {
      degree: "[VERIFY: degree]",
      maximum: "[VERIFY: statutory maximum]",
      offenseLevel: "[VERIFY: offense level]",
    },
  ],
  elements: [
    "TEMPLATE PREVIEW. First element the government has to prove.",
    "TEMPLATE PREVIEW. Second element.",
    "TEMPLATE PREVIEW. Third element, with the point that is most often contested.",
  ],
  defenseApproach: [
    "TEMPLATE PREVIEW. How the defense is approached, described as process. No outcome is predicted or implied anywhere in this section (R. 4-7.13).",
    "TEMPLATE PREVIEW. Second paragraph, covering what gets examined first and why.",
  ],
  forum: [
    "TEMPLATE PREVIEW. Which court hears this charge and what to expect there, at courthouse-level specificity.",
  ],
  counterpart: {
    href: "/federal-criminal-defense/drug-trafficking",
    label: "Federal drug trafficking charges",
    note: "TEMPLATE PREVIEW. The forum section for an overlap page: how to tell whether a case is being prosecuted in state or federal court, and what changes if it is federal. Body copy is never shared between the two pages.",
  },
  faq: [
    {
      question: "Can a drug trafficking charge be reduced in Florida?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  relatedGuides: [
    {
      label: "TEMPLATE PREVIEW. A Layer 2 guide this page links down to",
      href: "/resources/guides",
    },
  ],
};

/**
 * Charge-level FAQ questions, from docs/research/keywords.md Section 3.
 *
 * Only questions that pass C9 at the question level: each one is askable about
 * this charge and nonsensical about any other. "What are the elements of the
 * offence" is filler and appears nowhere; "how much does the value have to be"
 * belongs to grand theft and to nothing else.
 *
 * Answers are deliberately absent. They are legal content, they carry statutory
 * figures, and they publish only after the C12 verification pass and an
 * attorney read. The FAQPage schema omits any unanswered item.
 *
 * Questions with no research-graded query yet are simply absent rather than
 * invented. A thin FAQ beats a padded one.
 */
const CHARGE_FAQ: Record<string, FaqItem[]> = {
  "state/grand-theft-defense": [
    {
      question:
        "How much does the property have to be worth for a theft to be grand theft?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "state/domestic-violence-defense": [
    {
      question:
        "Can the alleged victim drop domestic violence charges in Hillsborough County?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "federal/target-letter-defense": [
    {
      question: "What happens after a federal target letter?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "federal/weapons-gun-offenses": [
    {
      question:
        "How much time does a felon in possession charge carry under 18 U.S.C. 922(g)?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "federal/healthcare-fraud": [
    {
      question:
        "What should a provider do when they learn they are under investigation for healthcare fraud?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "federal/wire-mail-fraud": [
    {
      question: "How much time does a first wire fraud offense carry?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "federal/computer-internet-crimes": [
    {
      question: "Federal agents seized my phone. How long until I get it back?",
      source: "keywords.md",
      grade: "NOW",
    },
  ],
  "white-collar/healthcare-fraud": [
    {
      question:
        "What should a provider do when they learn they are under investigation for healthcare fraud?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
  "white-collar/wire-fraud": [
    {
      question: "How much time does a first wire fraud offense carry?",
      source: "keywords.md",
      grade: "6-12mo",
    },
  ],
};

/**
 * Written charge pages, keyed `silo/slug`.
 *
 * EVERY statutory figure below was fetched from an allowlisted official source
 * and is quoted in the page's brief in docs/research/briefs/ with its URL.
 * Nothing here comes from recall (done-criterion C12). Where a brief records a
 * claim as UNVERIFIED it is absent from the copy and carries a [NEEDS] comment
 * instead, rather than being written around.
 *
 * Compliance rails on both entries (Fla. Bar R. 4-7, avoid.md Section 2): no
 * case results, no outcome prediction, nothing characterising the firm's skill
 * or record, and the defense sections describe process only.
 */
const CHARGE_CONTENT: Record<string, Partial<ChargePage>> = {
  // ---------------------------------------------------------------------
  // GRAND THEFT. From docs/research/briefs/W1-03-grand-theft.md.
  //
  // C9: the value ladder. Under the collision ruling in
  // CASES-WE-DEFEND-PLAN.md Section 4.5 this page KEEPS the ladder, because
  // the ladder is what the charge is, and embezzlement took the
  // position-of-trust pattern instead.
  //
  // What this page does NOT reproduce is the cross-statute offense-level
  // comparison. That is the Layer 2 comparison instrument's job (TOOLS.md
  // item 1).
  // [NEEDS: link to the offense-level comparison instrument once it ships]
  // It is not linked today because it does not exist, and shipping a pointer
  // to a page that is not there is the dead-link problem the 33-day guide
  // entry in REVIEW-QUEUE.md also guards against.
  // ---------------------------------------------------------------------
  "state/grand-theft-defense": {
    title: "Grand theft charges in Hillsborough County",
    metaTitle: "Grand Theft Charges in Hillsborough County | Hines & McCarty",
    metaDescription:
      "What Florida Statute 812.014 says about grand theft, the value thresholds that set the degree, the offense levels they carry, and where these cases are heard.",
    lead: "Grand theft is a felony under Florida Statute 812.014. A theft becomes grand theft when the property is worth $750 or more. Below that figure the same conduct is petit theft, which is a misdemeanor.",
    statute: {
      citation: "Florida Statute 812.014, the 2025 Florida Statutes",
      body: "The statute defines theft in one sentence and then sets the degree by value. A person commits theft if he or she knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to either temporarily or permanently deprive the other person of a right to the property or a benefit from the property, or to appropriate the property to his or her own use or to the use of any person not entitled to the use of the property. Everything else in the statute is about how much the property was worth, and in a few places about what the property was or where it was taken from. Theft of property not covered by the grand theft subsection is petit theft of the second degree under 812.014(3)(a), which is a misdemeanor. A prior theft conviction raises a later petit theft to a misdemeanor of the first degree under 812.014(3)(b), and two or more prior theft convictions raise it to a felony of the third degree under 812.014(3)(c). That last provision is worth reading twice, because it means a low-value theft can be a felony on the strength of history rather than of value.",
    },
    penalties: [
      {
        degree: "First degree felony",
        maximum: "Up to 30 years",
        offenseLevel: "Level 7",
        note: "Property valued at $100,000 or more, under 812.014(2)(a)1.",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years",
        offenseLevel: "Level 6",
        note: "Property valued at $20,000 or more but less than $100,000, under 812.014(2)(b)1.",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 4",
        note: "Property valued at $10,000 or more but less than $20,000, under 812.014(2)(c)3.",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 3",
        note: "Property valued at $5,000 or more but less than $10,000, under 812.014(2)(c)2.",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 2",
        note: "Property valued at $750 or more but less than $5,000, under 812.014(2)(c)1. Also the level for property worth $40 or more taken from a dwelling or its unenclosed curtilage, under 812.014(2)(d)1.",
      },
    ],
    elements: [
      "That the property belonged to someone else.",
      "That the defendant knowingly obtained or used it, or endeavored to obtain or use it. The statute reaches an attempt in the same breath as a completed taking.",
      "That the defendant intended to deprive the owner of a right to the property or a benefit from it, or to appropriate it to someone not entitled to it. The statute covers a temporary intent as well as a permanent one.",
      "What the property was worth. Value is a separate question from whether anything was taken, and it is the question that decides the degree of the charge and the offense level that follows from it.",
    ],
    defenseApproach: [
      "The first questions are usually about value rather than about the taking. A charge sits on one side or the other of the $750 line, or the $20,000 line, because someone assigned a figure to the property. Where that figure came from is a fair question: a receipt, a replacement quote, an insurance schedule, and a complainant's recollection are not the same kind of evidence, and they do not always agree with each other.",
      "The second set of questions is about intent. The statute asks what the defendant meant to do at the time, and that is rarely something a report records directly. It is usually inferred from surrounding facts, which means the surrounding facts are open to examination.",
      "Where the value sits near a threshold, the difference between two degrees can rest on a single valuation. That is worth identifying early, because it shapes what the case is about.",
      "The offense level matters for a reason that is easy to miss. Florida sentences felonies through the Criminal Punishment Code, and Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points. Above that figure the statute produces a minimum by subtracting 28 points from the total and reducing the remainder by 25 percent. Statute 775.082(10) adds that where the total sentence points are 22 or fewer, the court must impose a nonstate prison sanction. The primary offense level is only one input into that total, alongside prior record, additional offenses, victim injury, and multipliers, but it is the input the charge itself sets.",
      "None of that predicts an outcome in a particular case, and it is not meant to. It explains why two charges that carry the same words on the paperwork can sit in very different places once the arithmetic is done.",
    ],
    forum: [
      "Felony charges in Hillsborough County are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, in downtown Tampa.",
      "The Clerk also lists criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071, which serves the eastern side of the county.",
      // [NEEDS: which courthouse actually hears a felony arising in Brandon]
      // The Clerk's site establishes that both locations offer Circuit Criminal
      // services. It does not establish how a given Brandon case is assigned,
      // and that is exactly the sort of fact plan Section 8.3 warns is easy to
      // guess wrong. Not asserted here.
      //
      // [NEEDS: attorney confirmation on the Brandon Regional Service Center]
      // Blocked by DECISIONS.md D7. It is a Clerk location in the firm's own
      // town, which is why it is tempting, and a service centre is not
      // necessarily where a felony is heard. Stays out of copy until confirmed.
    ],
    faq: [
      {
        question:
          "How much does the property have to be worth for a theft to be grand theft?",
        source: "keywords.md",
        grade: "6-12mo",
        answer:
          "The general threshold is $750. At or above that figure the offense is grand theft, which is a felony; below it the same conduct is petit theft, which is a misdemeanor under Florida Statute 812.014(3)(a). The statute then sets higher degrees at $20,000 and at $100,000.",
      },
      {
        question: "Is stealing $500 a felony in Florida?",
        source: "drafted",
        answer:
          "Usually not, because $500 is below the $750 grand theft threshold, so it is ordinarily petit theft. There is an exception that catches people by surprise: under Florida Statute 812.014(2)(d)1., property worth $40 or more taken from a dwelling or its unenclosed curtilage is grand theft of the third degree, which is a felony.",
      },
      {
        question: "What is third degree grand theft in Florida?",
        source: "drafted",
        answer:
          "It is the lowest felony tier of theft, covering property valued at $750 or more but less than $20,000, and it carries a statutory maximum of five years under Florida Statute 775.082(3)(e). One degree is not one exposure: within that tier the offense level rises from level 2 to level 4 as the value climbs, and the level is what the sentencing scoresheet uses.",
      },
      {
        question: "Who decides what the property was worth?",
        source: "drafted",
        answer:
          "Value is something the state has to prove, not something the accusation settles. Florida Statute 812.014 sets the degree by the value of the property, so the figure has to be established like any other part of the case, and the source of that figure is open to examination.",
      },
      {
        question: "Can the same conduct also be a civil case?",
        source: "drafted",
        answer:
          "Yes, and it is a separate track from the criminal one. Florida Statute 772.11 gives a person injured by a theft a civil cause of action for threefold the actual damages, with minimum damages of $200 plus attorney's fees and court costs. The statute requires a written demand first, and it provides that someone who complies with that demand within 30 days is given a written release from further civil liability for that specific act of theft.",
      },
      {
        question: "Can a low-value theft still be a felony?",
        source: "drafted",
        answer:
          "It can, on two separate routes. Property worth $40 or more taken from a dwelling or its unenclosed curtilage is grand theft of the third degree under Florida Statute 812.014(2)(d)1. Separately, a petit theft by someone with two or more prior theft convictions is a felony of the third degree under 812.014(3)(c), which turns on history rather than on value.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
  },

  // ---------------------------------------------------------------------
  // EMBEZZLEMENT. From docs/research/briefs/W1-02-embezzlement.md.
  //
  // C9: the position-of-trust pattern, NOT the value ladder. Section 4.5.
  //
  // COPY-LEVEL VARIATION (plan Section 4.3). Three pages will have a
  // differentiator resting on the charge not existing under that name in
  // Florida: this one, wire fraud, and identity theft. They must not all open
  // with that move. This page opens on the trust relationship instead, and the
  // naming point arrives later, in the statute section. That ordering is also
  // the more accurate one here, since the trust pattern is what makes the page
  // different from grand theft rather than what makes it different from its
  // own name.
  // ---------------------------------------------------------------------
  "white-collar/embezzlement": {
    title: "Embezzlement charges in Florida",
    metaTitle: "Embezzlement Charges in Florida | Hines & McCarty",
    metaDescription:
      "Embezzlement accusations start from lawful possession. What Florida charges instead, which statute applies, and why the charging choice changes the offense level.",
    lead: "Embezzlement accusations start from a position of trust. The money or property was handed over lawfully, usually as part of a job, and the accusation is about what happened next. Florida prosecutes this as theft, under Statute 812.014.",
    statute: {
      citation:
        "Florida Statute 812.014, and Florida Statute 817.034, the 2025 Florida Statutes",
      body: "There is no Florida offense called embezzlement. The conduct is charged as theft under Florida Statute 812.014, which reaches a person who knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to deprive the owner of a right to it or to appropriate it to someone not entitled to it. Where the accusation is not a single transaction but a series of them, the state may instead charge organized fraud under the Florida Communications Fraud Act, Florida Statute 817.034, which defines a scheme to defraud as a systematic, ongoing course of conduct with intent to defraud one or more persons, or with intent to obtain property from one or more persons by false or fraudulent pretenses, representations, endorsements of nonconsenting parties, or promises or willful misrepresentations of a future act.",
    },
    penalties: [
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 2 to 4 as theft, level 3 as organized fraud",
        note: "Theft of $750 or more but less than $20,000 under 812.014(2)(c). Organized fraud of less than $20,000 under 817.034(4)(a)3.",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years",
        offenseLevel: "Level 6 as theft, level 5 as organized fraud",
        note: "Theft of $20,000 or more but less than $100,000 under 812.014(2)(b)1. Organized fraud of $20,000 or more but less than $50,000 under 817.034(4)(a)2.",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years",
        offenseLevel: "Level 7",
        note: "Theft of $100,000 or more under 812.014(2)(a)1. Organized fraud of $50,000 or more under 817.034(4)(a)1.",
      },
    ],
    elements: [
      "That the property belonged to someone else, which in these cases is rarely in dispute.",
      "That the defendant knowingly obtained or used it. This is where the trust pattern matters: possession was authorised at the outset, so the argument is usually about use rather than about obtaining.",
      "That the defendant intended to deprive the owner of a right or benefit, or to appropriate the property to someone not entitled to it. In a case that began with lawful access, intent is ordinarily the contested element.",
      "If the charge is organized fraud instead, that the conduct was a systematic, ongoing course of conduct, which is a different thing from a single transaction and has to be shown as such.",
    ],
    defenseApproach: [
      "These cases are built from records, and the records usually exist before anyone is accused. Ledgers, approvals, expense systems, and email are gathered first and the accusation is assembled from them, which means the first work is understanding what those records actually show rather than what they are said to show.",
      "Authorisation is the question underneath most of them. Access was granted, so the issue is whether a given transaction fell inside what was permitted, and permission in a small business is often informal, inconsistent, or undocumented rather than absent.",
      "Aggregation is the second question. A charge that covers months or years is a collection of individual transactions added together, and both the total and the decision to treat them as one course of conduct are things that have to be supported. Statute 817.034 does not describe an isolated act: it defines a scheme to defraud as a systematic, ongoing course of conduct, so where that charge is brought, the pattern is part of what has to be shown rather than a description of the total.",
      "The definition of obtaining is broader than it first sounds. Under 817.034(3)(b), to obtain means temporarily or permanently to deprive a person of a right to property or a benefit from it, or to appropriate the property to one's own use or to the use of another person not entitled to it. That language covers money that was moved and returned, which is why a case can exist even where nothing is missing at the end.",
      "The offense level is worth understanding early, because it is set by the charging decision rather than by the conduct. Florida sentences felonies through the Criminal Punishment Code, and Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points, with a formula above that figure. Statute 775.082(10) requires a nonstate prison sanction where the total is 22 points or fewer. The primary offense level feeds that total, and as the table above shows, the same dollar figure does not always produce the same level.",
      "Restitution comes up early, and it is a decision made with counsel rather than a step to take alone. Repaying money does not answer the elements of the offense, and how a repayment is characterised can matter as much as whether it happens.",
    ],
    forum: [
      "Felony charges in Hillsborough County are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
      // [NEEDS: federal embezzlement exposure] The brief records 18 U.S.C. 656,
      // 664 and 666 as UNVERIFIED. uscode.house.gov is allowlisted as of
      // DECISIONS.md D2 but they were not fetched, so no federal maximum,
      // element, or statute number is stated on this page.
      // [NEEDS: whether a Thirteenth Circuit economic crime unit exists]
      // Not verified against the State Attorney's own site.
    ],
    faq: [
      {
        question: "Is there an embezzlement law in Florida?",
        source: "drafted",
        answer:
          "No, not by that name. Florida prosecutes the conduct as theft under Statute 812.014, and where the accusation covers a series of transactions it may instead be charged as organized fraud under Statute 817.034. The word embezzlement describes the fact pattern rather than the charge.",
      },
      {
        question: "How much do you have to take for it to be a felony in Florida?",
        source: "drafted",
        answer:
          "Charged as theft, the felony threshold is $750, and the degree rises at $20,000 and again at $100,000. Charged as organized fraud under Statute 817.034, the tiers sit at less than $20,000, at $20,000 or more, and at $50,000 or more, so the same money can produce a different degree depending on which statute is charged.",
      },
      {
        question: "Does the charging choice change the exposure?",
        source: "drafted",
        answer:
          "It can, and not always in the direction people expect. A $25,000 accusation charged as theft is a second degree felony at offense level 6, while the same figure charged as organized fraud is a second degree felony at offense level 5. The degree is identical and the offense level is not, and the offense level is what the sentencing scoresheet uses.",
      },
      {
        question: "If I pay the money back, does the case go away?",
        source: "drafted",
        answer:
          "Repayment does not answer the elements of the offense, so it does not by itself end a criminal case. It is relevant at other stages, including in negotiation and at sentencing, and it can also matter to a separate civil claim. Because how a repayment is characterised can carry its own consequences, it is a decision to make with a lawyer rather than on your own.",
      },
      {
        question: "Does it matter that I was allowed to handle the money?",
        source: "drafted",
        answer:
          "It changes which part of the case is actually in dispute. Because access was authorised at the outset, the argument is rarely about whether the property was obtained, and is usually about use and about intent. Florida Statute 812.014 requires an intent to deprive the owner of a right or benefit, or to appropriate the property to someone not entitled to it, and that is a separate question from whether a transaction happened.",
      },
      {
        question: "Can my employer bring a civil claim as well?",
        source: "drafted",
        answer:
          "Yes, and it runs separately from any criminal case. Florida Statute 772.11 gives a person injured by a theft a cause of action for threefold the actual damages, with minimum damages of $200 plus attorney's fees and court costs, after a written demand. The statute provides that someone who complies with the demand within 30 days receives a written release from further civil liability for that specific act.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
  },

  // ---------------------------------------------------------------------
  // MONEY LAUNDERING, state. From docs/research/briefs/W2-05-money-laundering.md.
  //
  // Overlap page under plan Section 4.6 and done-criterion C10: the forum
  // section opens the body, there is exactly one cross-link to the federal
  // sibling, and no body copy is shared with it. The federal page rests on
  // different statutes and is not written yet.
  //
  // C9: the $300 floor and the 12-month aggregation window. Leads on both.
  //
  // [NEEDS: federal money laundering exposure] 18 U.S.C. 1956 and 1957 were not
  // fetched. uscode.house.gov is allowlisted as of DECISIONS.md D2. No federal
  // statute number, element, or maximum appears on this page.
  // [NEEDS: USSG 2S1.1 guideline treatment] Belongs to the federal sibling.
  // [NEEDS: forfeiture and seizure procedure] The statute's title names seizure
  // warrants, so the hook is real, but nothing was fetched. Not described.
  // ---------------------------------------------------------------------
  "white-collar/money-laundering": {
    title: "Money laundering charges under Florida law",
    metaTitle: "Florida Money Laundering Charges | Hines & McCarty",
    metaDescription:
      "The Florida Money Laundering Act starts at $300 and measures transactions across any 12-month period. What the statute requires, and how a state charge differs from a federal one.",
    lead: "Florida has its own money laundering statute, and its threshold is lower than most people expect. Under the Florida Money Laundering Act, the offense starts at financial transactions exceeding $300, measured across any 12-month period.",
    counterpart: {
      href: "/federal-criminal-defense/money-laundering",
      label: "Federal money laundering charges",
      note: "Money laundering is charged in both systems, and they are not versions of the same case. A Florida charge is brought under the Florida Money Laundering Act, Statute 896.101, and is scored on a state sentencing scoresheet. A federal charge is brought under federal statutes, carries no Florida offense level, and is calculated under the federal guidelines instead. Which one you are facing is usually clear from the charging document, and it changes the thresholds, the court, and the prosecutor.",
    },
    statute: {
      citation: "Florida Statute 896.101, the 2025 Florida Statutes",
      body: "The statute is titled the Florida Money Laundering Act. Its subsection (3) makes it unlawful for a person, knowing that the property involved in a financial transaction represents the proceeds of some form of unlawful activity, to conduct or attempt to conduct such a financial transaction which in fact involves the proceeds of specified unlawful activity, either with the intent to promote the carrying on of specified unlawful activity, or knowing that the transaction is designed in whole or in part to conceal or disguise the nature, the location, the source, the ownership, or the control of those proceeds, or to avoid a transaction reporting requirement or money transmitters' registration requirement under state law. The same subsection separately reaches transporting or attempting to transport a monetary instrument or funds with those purposes. Two defined terms do a great deal of work. Specified unlawful activity means any racketeering activity as defined in Statute 895.02, so the state has to identify what the money is said to have come from. Conducts includes initiating, concluding, or participating in initiating or concluding a transaction, which is broader than carrying out a transfer yourself.",
    },
    penalties: [
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 7",
        note: "Financial transactions exceeding $300 but less than $20,000 in any 12-month period, under 896.101(5)(a).",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years",
        offenseLevel: "Level 8",
        note: "Financial transactions totaling or exceeding $20,000 but less than $100,000 in any 12-month period, under 896.101(5)(b).",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years",
        offenseLevel: "Level 9",
        note: "Financial transactions totaling or exceeding $100,000 in any 12-month period, under 896.101(5)(c).",
      },
    ],
    elements: [
      "A financial transaction, or an attempt at one, or the transport of a monetary instrument or funds.",
      "Knowledge that the property represents the proceeds of some form of unlawful activity.",
      "That the transaction in fact involved the proceeds of specified unlawful activity, which the statute defines as any racketeering activity under Statute 895.02. This is a separate question from whether the defendant knew which activity it was.",
      "One of the statutory purposes: an intent to promote the carrying on of specified unlawful activity, or knowledge that the transaction was designed to conceal or disguise the nature, location, source, ownership, or control of the proceeds, or to avoid a reporting or registration requirement under state law.",
      "The total value of the transactions across the relevant 12-month period, which is what sets the degree.",
    ],
    defenseApproach: [
      "The first question is what the money is said to have come from. The statute does not reach proceeds in general: it reaches the proceeds of specified unlawful activity, which is defined by reference to the racketeering activity list in Statute 895.02. If the underlying activity is not established, the transaction does not become laundering because the money is unexplained.",
      "The second is the aggregation window. The degree turns on transactions across any 12-month period, so what gets counted and where the window is placed can move a charge between tiers. That is a question about the arithmetic and about which transactions belong in it, and it is answerable from records.",
      "The third is the statutory purpose. Moving money is not the offense by itself. The statute requires either an intent to promote the underlying activity or knowledge that the transaction was designed to conceal something or to evade a reporting requirement, and that is a different thing from an unusual or poorly documented transfer.",
      "It is worth understanding why this count is added to others. Money laundering is a separate offense with its own points, so it changes the sentencing scoresheet independently of the charge it accompanies. Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points, with a formula above that figure, and Statute 775.082(10) requires a nonstate prison sanction at 22 points or fewer. A count ranked at level 7 enters that arithmetic well above the level a comparable theft would.",
      "Where a structuring count is charged alongside, it is a separate statute rather than a variation on the same one. Statute 896.104 prohibits structuring, which it defines as conducting or attempting to conduct one or more transactions in currency, in any amount, at one or more financial institutions, on one or more days, in any manner, for the purpose of evading currency transaction reporting requirements provided by state or federal law. The statute says in any manner includes breaking down a single sum of currency exceeding $10,000 into smaller sums. Its penalty tiers track the laundering tiers at $300, $20,000, and $100,000 across any 12-month period, and Statute 896.104(4)(b) adds that a person found guilty may be sentenced to pay a fine not exceeding $250,000 or twice the value of the financial transactions, whichever is greater.",
    ],
    forum: [
      "Felony charges in Hillsborough County are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
      "A federal money laundering case is heard instead in the Middle District of Florida. Hillsborough County sits in its Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
      // [NEEDS: whether the State Attorney has a dedicated financial crimes unit]
      // Not verified against the office's own site.
    ],
    faq: [
      {
        question:
          "What is money laundering under Florida law, as opposed to federal law?",
        source: "drafted",
        answer:
          "Florida prosecutes it under the Florida Money Laundering Act, Statute 896.101, which sets its own thresholds and its own offense levels. A federal case is brought under different statutes in a different court, and the Florida offense levels do not apply to it. The conduct can look similar while the two charges are built quite differently.",
      },
      {
        question: "How much money makes it money laundering in Florida?",
        source: "drafted",
        answer:
          "Less than most people assume. The lowest tier under Statute 896.101(5)(a) covers financial transactions exceeding $300 in any 12-month period, and it is a third degree felony. The degree rises at $20,000 and again at $100,000.",
      },
      {
        question:
          "What is the difference between money laundering and structuring?",
        source: "drafted",
        answer:
          "They are separate offenses under separate statutes. Structuring is charged under Statute 896.104, which defines it as conducting or attempting to conduct one or more currency transactions, in any amount, at one or more financial institutions, on one or more days, in any manner, for the purpose of evading currency transaction reporting requirements. Its penalty tiers mirror the laundering tiers at $300, $20,000, and $100,000 across any 12-month period.",
      },
      {
        question:
          "Do they have to prove where the money came from?",
        source: "drafted",
        answer:
          "The statute requires that the transaction in fact involved the proceeds of specified unlawful activity, which Statute 896.101 defines as any racketeering activity under Statute 895.02. So the source is not an incidental detail; it is part of what the state has to establish, alongside the defendant's knowledge that the property represented proceeds of some form of unlawful activity.",
      },
      {
        question: "Why is this charged on top of another count?",
        source: "drafted",
        answer:
          "Because it is a separate offense rather than an aggravating feature of the first one. That matters at sentencing: it carries its own offense level and its own points, so it changes the scoresheet arithmetic independently of the underlying charge.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
  },

  // ---------------------------------------------------------------------
  // DRUG TRAFFICKING, state. From docs/research/briefs/W2-02-drug-trafficking.md.
  //
  // Overlap page under Section 4.6 and C10. Forum section opens the body, one
  // cross-link, no shared copy.
  //
  // C9: weight rather than intent to sell, with mandatory minimums attached to
  // the tiers, plus 10-20-Life naming trafficking by name.
  //
  // Substantial assistance is quoted as the statutory mechanism it is and is
  // never described as an outcome (Rule 4-7.13).
  //
  // [NEEDS: federal 21 U.S.C. 841 and 846 exposure] Not fetched. No federal
  // statute number, quantity, or maximum appears on this page.
  // [NEEDS: multi-agency task force names] Not verified against agency sites.
  // ---------------------------------------------------------------------
  "state/drug-trafficking-defense": {
    title: "Drug trafficking charges in Hillsborough County",
    metaTitle: "Drug Trafficking Charges in Hillsborough County | Hines & McCarty",
    metaDescription:
      "Florida trafficking is defined by weight, not by selling, and each tier carries a mandatory minimum. What Statute 893.135 says, and how a state case differs from a federal one.",
    lead: "Florida drug trafficking is defined by weight. Selling is not required, and neither is an intent to sell. Statute 893.135 attaches trafficking to a quantity, and each tier carries a mandatory minimum term of imprisonment and a fixed fine.",
    counterpart: {
      href: "/federal-criminal-defense/drug-trafficking",
      label: "Federal drug trafficking charges",
      note: "The same conduct can be charged by the state or by the federal government, and the two are not interchangeable. A Florida case runs on the weight tiers in Statute 893.135, is heard in circuit court, and is scored on a state sentencing scoresheet. A federal case is brought under federal statutes in the Middle District of Florida, where the Florida offense levels do not apply and sentencing is calculated a different way. Which sovereign files is not the defendant's choice.",
    },
    statute: {
      citation: "Florida Statute 893.135, the 2025 Florida Statutes",
      body: "The trafficking statute opens by setting itself apart from the ordinary drug offenses: it applies except as authorized in the chapter and notwithstanding the provisions of Statute 893.13. What follows is a series of substances, each with quantity bands, and each band carries its own mandatory minimum and fine. Trafficking in cannabis begins in excess of 25 pounds, with a mandatory minimum term of imprisonment of 3 years and a fine of $25,000, rising to 7 years and $50,000 at 2,000 pounds and to 15 calendar years and $200,000 at 10,000 pounds. Trafficking in cocaine begins at 28 grams or more, with a mandatory minimum of 3 years and a fine of $50,000, rising to 7 years and $100,000 at 200 grams and to 15 calendar years and $250,000 at 400 grams. The opioid provisions escalate faster: trafficking in illegal drugs at 4 grams or more but less than 14 grams carries a mandatory minimum of 3 years and a $50,000 fine, at 14 grams or more but less than 28 grams it is 15 years and $100,000, and at 28 grams or more it is 25 years and $500,000. Every one of these is a felony of the first degree.",
    },
    penalties: [
      {
        degree: "First degree felony",
        maximum: "Up to 30 years, subject to the mandatory minimum for the tier",
        offenseLevel: "Level 7",
        note: "The lowest tier of each substance. Cannabis in excess of 25 pounds, cocaine at 28 grams or more, illegal drugs at 4 grams or more, each under 893.135(1).",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years, subject to the mandatory minimum for the tier",
        offenseLevel: "Level 8",
        note: "The middle tiers. Cannabis at 2,000 pounds or more, cocaine at 200 grams or more, and the corresponding bands for other substances.",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years, subject to the mandatory minimum for the tier",
        offenseLevel: "Level 9",
        note: "The highest tiers. Cannabis at 10,000 pounds or more, cocaine at 400 grams or more, and the corresponding bands for other substances.",
      },
    ],
    elements: [
      "Knowing sale, purchase, manufacture, delivery, or bringing into the state, or knowing actual or constructive possession. Possession alone is enough; the statute does not require a sale.",
      "That the substance is one the statute names.",
      "That the quantity reaches a tier in the statute. This is the element that separates trafficking from other drug charges, and it is where most of these cases are actually decided.",
      "On weight, the statute answers a question people often get wrong. Statute 893.135(6) provides that where a mixture contains a controlled substance, the weight of the controlled substance is the total weight of the mixture, including the controlled substance and any other substance in the mixture, and that where there is more than one mixture containing the same substance the weight is calculated by aggregating the total weight.",
    ],
    defenseApproach: [
      "Because the charge turns on quantity, the first work is on how the quantity was established: what was seized, how it was weighed, what was included in the weight, and whether the laboratory result supports the tier that was charged. A case sitting near a boundary is a different case from one sitting in the middle of a band.",
      "Possession is the second question, and it is frequently constructive rather than actual. Whose vehicle, whose residence, who had access, and what the state can actually attribute to this defendant are the questions underneath a constructive possession theory.",
      "The statute provides one mechanism that is specific to trafficking and is worth understanding precisely. Under Statute 893.135(4), the state attorney may move the sentencing court to reduce or suspend the sentence of a person convicted under the section who provides substantial assistance in the identification, arrest, or conviction of that person's accomplices, accessories, coconspirators, or principals, or of any other person engaged in trafficking in controlled substances. The arresting agency is given an opportunity to be heard, and the judge hearing the motion may reduce or suspend the sentence if the judge finds that the defendant rendered such substantial assistance. Every step there belongs to someone else: the motion is the state attorney's to file and the finding is the judge's to make. It is a decision to weigh with counsel, and nothing about it is automatic.",
      "The scoresheet arithmetic also works differently here. Statute 921.0024(1)(b) provides that where the primary offense is drug trafficking under Statute 893.135, the subtotal sentence points are multiplied, at the discretion of the court, for a level 7 or level 8 offense, by 1.5. Since no trafficking tier is ranked below level 7, that multiplier is available in every one of these cases.",
    ],
    forum: [
      "Felony charges in Hillsborough County are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
      "A federal case arising from the same conduct is heard in the Middle District of Florida. Hillsborough County sits in its Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
    ],
    faq: [
      {
        question: "Can a drug trafficking charge be reduced in Florida?",
        source: "keywords.md",
        grade: "6-12mo",
        answer:
          "There is a statutory route, and it is not something a defendant controls. Statute 893.135(4) allows the state attorney to move the sentencing court to reduce or suspend a trafficking sentence where the person has provided substantial assistance, and the judge may do so if the judge finds that such assistance was rendered. Both steps belong to other people, which is why it is a decision to take with a lawyer rather than an expectation to plan around.",
      },
      {
        question: "How many grams is trafficking in Florida?",
        source: "drafted",
        answer:
          "It depends entirely on the substance. Cocaine trafficking begins at 28 grams, while the illegal drugs provision covering opioids begins at 4 grams, and cannabis is measured in pounds rather than grams and begins in excess of 25 pounds. There is no single trafficking weight, which is why the substance named in the charge matters as much as the quantity.",
      },
      {
        question: "Is there a minimum sentence for drug trafficking in Florida?",
        source: "drafted",
        answer:
          "Yes. Each tier in Statute 893.135 carries a mandatory minimum term of imprisonment and a fixed fine, beginning at 3 years for the lowest cannabis and cocaine bands and rising with quantity. That is a feature of the trafficking statute specifically, and it is why these charges are treated differently from other drug offenses.",
      },
      {
        question:
          "I only had it for personal use. Why am I charged with trafficking?",
        source: "drafted",
        answer:
          "Because Florida trafficking turns on weight rather than on what the substance was for. Statute 893.135 reaches knowing possession at a threshold quantity, without requiring a sale or an intent to sell, so a quantity above a tier can support the charge even where nothing was sold.",
      },
      {
        question: "Does the weight include the pills themselves?",
        source: "drafted",
        answer:
          "It includes the whole mixture. Statute 893.135(6) provides that the weight of the controlled substance is the total weight of the mixture, including the controlled substance and any other substance in it, and that multiple mixtures containing the same substance are aggregated. This is why a quantity can reach a tier that the amount of the drug itself would not.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
  },
};

export const charges: ChargePage[] = [
  ...stateCharges.map(stub("state")),
  ...federalCharges.map(stub("federal")),
  ...whiteCollarCharges.map(stub("white-collar")),
].map((charge) => {
  const key = `${charge.silo}/${charge.slug}`;
  const withPreview =
    charge.silo === "state" && charge.slug === "drug-trafficking-defense"
      ? { ...charge, ...templatePreview }
      : charge;

  // Written content wins over both the template preview and the seeded FAQ
  // questions, since a written page carries answered questions rather than
  // placed ones.
  const content = CHARGE_CONTENT[key];
  if (content) return { ...withPreview, ...content };

  const faq = CHARGE_FAQ[key];
  return faq ? { ...withPreview, faq } : withPreview;
});

export const chargesInSilo = (silo: SiloKey) =>
  charges.filter((c) => c.silo === silo);

export const chargeHref = (charge: ChargePage) =>
  `${siloByKey(charge.silo)?.href ?? ""}/${charge.slug}`;

export const chargeBySlug = (silo: SiloKey, slug: string) =>
  charges.find((c) => c.silo === silo && c.slug === slug);

/** One item in a breadcrumb trail. The last item has no href: it is the page. */
export type Crumb = { name: string; href?: string };

/**
 * Trail builders.
 *
 * The visible breadcrumb and the BreadcrumbList JSON-LD both read from these,
 * so they cannot drift. That drift is exactly what the audit found: charge
 * pages were emitting a four-level trail in schema while showing a single
 * back-link, and Google's guidance is that markup should correspond to visible
 * content.
 *
 * Only pages more than one level deep get a trail. "Home / Attorneys" on the
 * attorneys hub is decoration in the slot the eyebrows were just removed from.
 */
export const siloTrail = (silo: Silo): Crumb[] => [
  { name: "Home", href: "/" },
  { name: "Cases We Defend", href: "/cases-we-defend" },
  { name: silo.label },
];

export const chargeTrail = (charge: ChargePage): Crumb[] => {
  const silo = siloByKey(charge.silo);
  return [
    { name: "Home", href: "/" },
    { name: "Cases We Defend", href: "/cases-we-defend" },
    ...(silo ? [{ name: silo.label, href: silo.href }] : []),
    { name: charge.label },
  ];
};

export const attorneyTrail = (attorney: Attorney): Crumb[] => [
  { name: "Home", href: "/" },
  { name: "Attorneys", href: "/attorneys" },
  { name: attorney.name },
];

export type Tool = {
  label: string;
  kind: "Calculator" | "Estimator" | "Checker" | "Guide";
  title: string;
  description: string;
  href: string;
  /**
   * False until the asset actually exists. Unpublished tools are listed by name
   * and never linked, so the Resources hub can show what is coming without
   * pointing at a 404.
   *
   * The sentencing calculator additionally cannot be linked even once it
   * exists, until it clears done-criteria C1 through C8
   * (CASES-WE-DEFEND-PLAN.md Section 5.6).
   */
  published: boolean;
};

/**
 * Layer 2 tools and guides, in build order (CASES-WE-DEFEND-PLAN.md Section 5,
 * from docs/research/tools-and-hooks.md).
 *
 * Order here is build priority, not popularity. There is no traffic data, and
 * a "most popular" label on a law firm site is a claim about something we
 * cannot measure yet.
 */
export const tools: Tool[] = [
  {
    label: "Sentencing Calculator",
    kind: "Calculator",
    title: "Florida Sentencing Scoresheet Calculator",
    description:
      "Estimate the lowest permissible sentence under Florida's Criminal Punishment Code by charge, level, and prior record.",
    href: "/sentencing/florida-criminal-punishment-code",
    published: false,
  },
  {
    label: "Bond & Bail Estimator",
    kind: "Estimator",
    title: "Bond & Bail Estimator, Hillsborough County",
    description:
      "See how bond is typically set locally and what to expect at first appearance.",
    href: "/resources/tools/bond-bail-estimator",
    published: false,
  },
  {
    label: "Seal & Expunge Checker",
    kind: "Checker",
    title: "Record Sealing & Expungement Eligibility Checker",
    description:
      "Find out whether a Florida record may be eligible to be sealed or expunged.",
    href: "/resources/tools/seal-expunge-eligibility",
    published: false,
  },
  {
    label: "After an Arrest",
    kind: "Guide",
    title: "First 24 Hours After a Hillsborough Arrest",
    description:
      "A step-by-step walkthrough of the first day, from booking and first appearance through bond.",
    href: "/resources/guides/after-an-arrest",
    published: false,
  },
  {
    label: "Federal Case Timeline",
    kind: "Guide",
    title: "Federal Case Timeline, Tampa Division",
    description:
      "How a federal case moves from target letter through indictment, trial, and sentencing.",
    href: "/resources/guides/federal-criminal-process-timeline",
    published: false,
  },
];

export const publishedTools = tools.filter((t) => t.published);

/**
 * Layer 3 articles. Empty until the money pages exist for them to link up to
 * (WEBSITE-PLAN.md Section 2: an article that has nothing to point at is a
 * dead end).
 */
export type Article = { title: string; href: string; published: boolean };
export const articles: Article[] = [];

export type Credential = {
  label: string;
  kind: "court" | "certification" | "membership";
  /**
   * Path under /public to the organisation's mark. Renders instead of the
   * label when present, with the label as its alt text.
   *
   * Only ever set this for a MEMBERSHIP or CERTIFICATION, never for a court.
   * A court seal or the Florida Bar seal on a law firm site reads as
   * endorsement by that body, which is the "no implication of special
   * influence or relationships with the court" line in content-gaps.md and a
   * Rule 4-7.13 problem. Courts stay as text.
   *
   * [NEEDS: logo files AND written permission to use each mark] Membership
   * does not by itself grant trademark usage rights, and every one of these
   * organisations has its own brand policy. WEBSITE-PLAN.md Open Question 8.
   */
  logo?: string;
  /**
   * Only confirmed entries render. Everything else sits here ready to flip the
   * moment the client answers, and shows nowhere until then.
   */
  confirmed: boolean;
};

/**
 * The credential strip on the home hero.
 *
 * THIS IS THE HIGHEST-RISK CONTENT ON THE SITE. A certification or membership
 * displayed without the underlying fact is a Rule 4-7.14 problem, not a copy
 * problem, and "Board Certified" specifically is unusable unless an attorney
 * actually holds it AND the strip names the certifying organisation and the
 * certified area (Rule 4-7.14(a)(4)).
 *
 * So the five items from the client meeting are all confirmed: false. What
 * renders today is the three courts, which are established elsewhere in the
 * repo and are claims about where the firm appears rather than about what it
 * has been awarded.
 *
 * [NEEDS: board certification status, and if held, the certifying organisation
 * and the certified area] WEBSITE-PLAN.md Open Question 7.
 * [NEEDS: confirm HCBA, NACDL, DUIDLA, and FJA memberships, and permission to
 * use each organisation's mark] Open Question 8. Membership does not by itself
 * grant trademark usage rights.
 * [NEEDS: confirm FACDL membership] The Florida Association of Criminal Defense
 * Lawyers is the on-point credential for this firm and was missing from the
 * client list; FJA is primarily a plaintiff-side organisation.
 */
export const credentials: Credential[] = [
  { label: "The Florida Bar", kind: "court", confirmed: true },
  {
    label: "13th Judicial Circuit, Hillsborough County",
    kind: "court",
    confirmed: true,
  },
  { label: "Middle District of Florida", kind: "court", confirmed: true },

  // Everything below is unconfirmed and therefore invisible.
  {
    label: "Board Certified",
    kind: "certification",
    confirmed: false,
    logo: "/logos/placeholder-1.svg",
  },
  {
    label: "Hillsborough County Bar Association",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-2.svg",
  },
  {
    label: "National Association of Criminal Defense Lawyers",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-3.svg",
  },
  {
    label: "DUI Defense Lawyers Association",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-4.svg",
  },
  {
    label: "Florida Justice Association",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-5.svg",
  },
  // FACDL is not from the client meeting. It is the on-point credential for a
  // criminal defense firm and its absence from the meeting list is raised in
  // WEBSITE-PLAN.md Open Question 8, so it holds a slot here as a candidate.
  {
    label: "Florida Association of Criminal Defense Lawyers",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-6.svg",
  },
  // Two reserved slots, deliberately unnamed. The strip was sized for eight
  // marks before the eight were known, and inventing organisation names to
  // fill it would put guesses into the data where a real answer belongs. An
  // unconfirmed entry renders as an unlabelled square either way, so a slot
  // with no organisation behind it is honest rather than lossy.
  // [NEEDS: which organisations fill slots 7 and 8, if any] Open Question 8.
  {
    label: "[NEEDS: organisation]",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-7.svg",
  },
  {
    label: "[NEEDS: organisation]",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-8.svg",
  },
];

/**
 * The strip renders MARKS ONLY, so this is every credential that has a logo
 * file. The three courts are deliberately excluded and have no `logo`: a court
 * seal or the Florida Bar seal on a law firm site reads as endorsement by that
 * body, a Rule 4-7.13 problem. They are stated in prose on the home and section
 * pages and in the Bar admission and Courts fields on each bio, so leaving them
 * out of the strip loses nothing.
 *
 * An entry with `confirmed: false` still renders, but as an UNLABELLED square
 * with generic alt text. The organisation is never named, so the strip can show
 * its full width without the page claiming a certification or membership the
 * firm has not established. Swapping a real file into `logo` is NOT enough to
 * name one: flip `confirmed` to true, and only after WEBSITE-PLAN.md Open
 * Question 7 (certification status) and Open Question 8 (membership plus
 * written permission to use each mark) are both answered.
 */
export const credentialMarks = credentials.filter((c) => c.logo);

export const coreValues = [
  {
    number: "01",
    title: "Discretion",
    body: "Matters handled quietly, questions answered directly.",
  },
  {
    number: "02",
    title: "Preparation",
    body: "Every case built early, before a decision is made.",
  },
  {
    number: "03",
    title: "Advocacy",
    body: "Trial-ready from day one, in state and federal court.",
  },
  {
    number: "04",
    title: "Access",
    body: "Four attorneys, each known for their own area.",
  },
] as const;

// One-paragraph positioning statement that sits beside the section heading.
export const coreStatement =
  "Hines & McCarty is built around a small number of commitments that do not change from case to case: discretion in how a matter is handled, preparation from the first meeting, advocacy that is ready for trial, and direct access to the attorney who already knows that kind of charge.";

// The firm's working process, shown as a numbered row of boxes.
//
// Named `caseProcess`, not `process`: an export called `process` shadows the
// Node global inside this module, which broke reading NEXT_PUBLIC_SITE_URL at
// the top of the file. Nothing consumed it yet, so renaming was free.
export const caseProcess = [
  {
    number: "01",
    title: "Consultation",
    body: "A direct, confidential conversation about the charge, the exposure, and the realistic paths in front of you.",
  },
  {
    number: "02",
    title: "Investigation",
    body: "The evidence, the discovery, and the state's file are worked through in full before any strategy is set.",
  },
  {
    number: "03",
    title: "Strategy",
    body: "Motions, negotiation, and trial preparation move together, so no option is closed off too early.",
  },
  {
    number: "04",
    title: "Resolution",
    body: "Dismissal, plea, or trial, the aim set at the first meeting is the one the defense is built around.",
  },
] as const;

// Placeholder posts until the Insights blog is populated.
export const insightsPreview = [
  {
    title: "What happens after a federal target letter in Tampa",
    category: "Federal Defense",
    href: "/insights",
    date: "Coming soon",
  },
  {
    title: "First appearance in Hillsborough County, what to expect",
    category: "State Defense",
    href: "/insights",
    date: "Coming soon",
  },
  {
    title: "How Florida's sentencing scoresheet actually works",
    category: "Sentencing",
    href: "/insights",
    date: "Coming soon",
  },
] as const;

// Placeholder testimonials. Replace with real, client-consented reviews and a
// results-may-vary disclaimer before launch (Fla. Bar R. 4-7.13).
export const testimonials = [
  {
    quote:
      "They explained every step and never left us guessing. We always knew what was happening and why.",
    attribution: "Google Review",
  },
  {
    quote:
      "Calm, prepared, and honest with us from the first phone call through the end of the case.",
    attribution: "Google Review",
  },
] as const;

/**
 * Where the firm appears, for the locations map.
 *
 * THESE ARE NOT OFFICES. The firm has one published office, Brandon, which
 * lives in `offices` and is drawn differently on the map. Rule 4-7.12 forbids
 * advertising a location as an office unless it is a bona fide office, so no
 * copy on this section may call these locations, branches, or anything that
 * implies a place a client can walk into.
 *
 * Every one of these cities is in the Middle District of Florida, across three
 * of its five divisions, which is the framing that asserts nothing the site does
 * not already claim.
 *
 * [NEEDS: confirmation the firm accepts STATE cases in Pinellas, Sarasota, Lee,
 * Collier, and Orange Counties, or that these six are federal reach only.] The
 * site currently claims state practice in Hillsborough alone. See
 * docs/build/LOCATIONS-MAP-PLAN.md Section 2.
 */
export type ServiceArea = {
  /** Joins to `floridaLocations.places` in the generated map module. */
  key: "tampa" | "stPete" | "sarasota" | "fortMyers" | "naples" | "orlando";
  label: string;
  /** City centre, for placing the pin on the tile map. */
  lat: number;
  lon: number;
  /** M.D. Fla. division. [VERIFY per C12 against flmd.uscourts.gov] */
  division: "Tampa" | "Fort Myers" | "Orlando";
  /**
   * Which side of its marker the label sits on. Hand-assigned, because seven
   * markers in one metro do not resolve with a uniform offset: Tampa, Brandon,
   * and St. Pete sit within 30 projected units of each other, so their labels
   * are pushed west, east, and south respectively to stop them colliding.
   * Tampa was north until the rendered map showed its label running into the
   * Brandon shield, which sits 14 units east at the same latitude.
   */
  side: "n" | "s" | "e" | "w";
};

export const serviceAreas: ServiceArea[] = [
  {
    key: "orlando",
    label: "Orlando",
    division: "Orlando",
    side: "e",
    lat: 28.5383,
    lon: -81.3792,
  },
  {
    key: "tampa",
    label: "Tampa",
    division: "Tampa",
    side: "w",
    lat: 27.9506,
    lon: -82.4572,
  },
  {
    key: "stPete",
    label: "St. Pete",
    division: "Tampa",
    side: "s",
    lat: 27.7676,
    lon: -82.6403,
  },
  {
    key: "sarasota",
    label: "Sarasota",
    division: "Tampa",
    side: "e",
    lat: 27.3364,
    lon: -82.5307,
  },
  {
    key: "fortMyers",
    label: "Fort Myers",
    division: "Fort Myers",
    side: "e",
    lat: 26.6406,
    lon: -81.8723,
  },
  {
    key: "naples",
    label: "Naples",
    division: "Fort Myers",
    side: "e",
    lat: 26.142,
    lon: -81.7948,
  },
];

/** The office, for the map pin. Brandon, the firm's only published location. */
export const officeLatLon = { lat: 27.9378, lon: -82.2859 } as const;
