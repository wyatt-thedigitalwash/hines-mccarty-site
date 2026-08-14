// Central site data. Copy here is first-draft and compliance-aware:
// no "best/expert/specialist" claims, no outcome promises (Fla. Bar R. 4-7).

// Type-only, so it is erased at runtime and this module keeps having no
// runtime imports. That property is what lets scripts/check-c9.ts load this
// file directly under `node --experimental-strip-types`.
import type { C9Assertion, C9Category, C9Exemption } from "./c9.ts";
import type {
  ChargeSection,
  PenaltyRow,
  ReaderQuestion,
} from "./charge-page.ts";

export type {
  ChargeSection,
  ChargeSectionKind,
  Guidance,
  PenaltyRow,
  ReaderQuestion,
  TimelineStep,
} from "./charge-page.ts";

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
/** A pointer from one silo hub to another, for coverage that lives elsewhere. */
export type CrossSiloRow = { href: string; label: string; note: string };

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
  /**
   * A row pointing at another silo, for coverage that genuinely lives there.
   *
   * Added for D12: the federal silo no longer carries a white-collar and
   * corporate fraud card, because that card rested on no statute and
   * duplicated the name of a whole silo. The coverage is one click away in the
   * silo that owns it, which is the same treatment mail fraud received.
   */
  crossSilo?: CrossSiloRow;
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
    // D12. Replaces the removed white-collar-corporate-fraud card. The federal
    // silo does prosecute white-collar matters, and the pages that cover them
    // live in the white-collar silo, so this points there rather than holding a
    // card that rests on no statute.
    crossSilo: {
      href: "/white-collar-defense",
      label: "White-collar and fraud defense",
      note: "Many federal prosecutions in this district are white-collar matters. The offenses themselves, including bank fraud, securities fraud, embezzlement, wire fraud, tax evasion, and Medicaid provider fraud, are covered in the white-collar section rather than duplicated here.",
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

// PenaltyRow moved to ./charge-page.ts and re-exported above.

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
  /**
   * Where the question came from. Never invent one and label it research.
   *
   * WAS the two-value union "keywords.md" | "drafted", which forced writers to
   * throw away the useful half of the answer. A question lifted verbatim from
   * a Tampa-geolocated People Also Ask box and a question invented at the desk
   * are both "drafted" under that union, and those are not the same claim.
   *
   * So this is a string, and the honesty is enforced by a gate rather than by
   * the type: scripts/check-pages.mts requires every value to begin with one
   * of the recognised provenances, so "research" cannot be asserted by
   * writing it here. The prefix says WHAT KIND of source; the remainder says
   * which one, and is free text.
   */
  source: string;
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
  /**
   * The body, ordered by significance rather than by a fixed sequence.
   *
   * When present this REPLACES the legacy statute/penalties/elements/
   * defenseApproach/forum fields in the rendered page. Those fields stay on the
   * type while the eight pre-existing pages are migrated two at a time, and
   * scripts/check-pages.mts counts what is left so the migration cannot quietly
   * stall. A page carrying both is rendered from `sections`.
   */
  sections?: ChargeSection[];
  /**
   * Reader questions this page cannot answer, each with the reason.
   *
   * The coverage check passes when every one of the six is either answered by a
   * section or recorded here. It is deliberately not possible to satisfy it by
   * saying nothing: an unanswered, unrecorded question fails the build.
   */
  readerNeeds?: Partial<Record<ReaderQuestion, string>>;
  /** Template item 9. */
  relatedGuides?: RelatedLink[];
  /** Template item 10, C11. */
  owner?: string;
  lastReviewed?: string;
  /**
   * Excuses this entry from the C9 check, by decision rather than by omission.
   *
   * Reserved for entries that are not charge pages at all. A category overview
   * has no statute, so it has no differentiator that could be false if another
   * charge were swapped in, and testing it against C9 asks a question it cannot
   * answer. Marking it here means the checker skips it on the record, with a
   * reason, rather than silently passing it because nobody noticed.
   *
   * This is not an escape hatch for a page that is merely hard to differentiate.
   * If a page rests on a statute, it is checked.
   */
  c9Exempt?: C9Exemption;
  c9Category?: C9Category;
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
  // Moved from the white-collar silo 2026-08-13 (DECISIONS.md D14). Labelled to
  // the conduct F.S. 815.06 actually reaches, which is unauthorized access, and
  // deliberately not to fraud: the fraud limb is an enhancement in Florida and
  // an offense of its own federally, and it is the federal page that carries it.
  // The label also steers away from "internet crimes", which in this market
  // pulls child pornography defence into the same SERP.
  [
    "computer-crimes-defense",
    "Unauthorized Computer Access",
    "Florida charges for accessing computers without authorization",
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
  // white-collar-corporate-fraud REMOVED 2026-08-13 (DECISIONS.md D12). It
  // rested on no statute: there is no corporate fraud offence in the United
  // States Code. Its name also duplicated an entire silo, and every chargeable
  // offence it would have covered already has its own page. The federal silo
  // hub carries one cross-silo row to /white-collar-defense instead, which is
  // the treatment mail fraud received under D4.
  [
    "healthcare-fraud",
    "Healthcare Fraud",
    "Fraud against any health care benefit program",
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
    "Medicaid Provider Fraud",
    "Florida charges over claims submitted to AHCA",
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
  // computer-crime MOVED to the state silo 2026-08-13 (DECISIONS.md D14) as
  // computer-crimes-defense. Unauthorized access is not inherently financial,
  // federal-shaped demand beats Florida-shaped roughly nine to one, and the
  // genuinely white-collar limb is federal 1030(a)(4), which the federal page
  // carries. The white-collar silo keeps no computer page.
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
      "Possession was lawful and authorized when it began, so the contested element is intent to deprive rather than the taking.",
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
  // Recorded 2026-08-13, closing the last outstanding C9. The limitations
  // period was carried as "reported" for the whole programme and is now
  // resolved from operative text; see OPP-01 Section 6A. The answer is
  // conditional, and the C9 rests on the conditionality itself.
  "white-collar/ppp-loan-fraud": {
    statute: "15 U.S.C. 636(a)(36)(W), against 18 U.S.C. 3293",
    section: "Is this still live? The two ten-year clocks and the one that runs out",
    assertion:
      "This is the only charge in the set whose limitations period is set by the loan rather than by the offence: 15 U.S.C. 636(a)(36)(W) gives ten years for any charge alleging a borrower defrauded a first draw PPP loan whatever title 18 section is used, while 18 U.S.C. 3293 runs the other way and gives ten years to 1344 and 1014 outright but to 1343 only if the offence affects a financial institution as 18 U.S.C. 20 defines one, so a non-borrower charged with wire fraud on a fintech-originated loan can fall outside both and keep the ordinary five years under 3282.",
  },

  // Recorded 2026-08-13 under D15. This page is c9Exempt with type
  // "policy-governed", and the exemption REQUIRES this field to be populated:
  // the page has verified substance and is excused from the statute-parse check
  // only. An empty C9 here would mean the page is claiming an exemption it has
  // not earned, and scripts/check-c9.mts fails the build on exactly that.
  "federal/target-letter-defense": {
    statute: "JM 9-11.151",
    section: "Witness, subject, target: the three statuses and the Advice of Rights text",
    assertion:
      "No statute creates this letter or defines its terms: 'target' and 'subject' exist only in DOJ charging policy at JM 9-11.151, which also publishes verbatim the Advice of Rights text the letter carries, and the phrase 'target letter' appears nowhere in the Justice Manual's grand jury chapter.",
  },

  // W4, recorded 2026-08-13. Barrier ran over 27 assertions: 351 pairwise
  // comparisons with statute ignored, max similarity 0.196 against the 0.34
  // threshold, and no same-statute pair beyond the ruled 812.014 one.
  // /criminal-defense/sex-crimes-defense is recorded with a populated C9
  // deliberately. W4-02 recommends classifying it a category overview that is
  // still checked, which is a third state this file does not yet model. It is
  // NOT c9Exempt: D12's condition for exemption is that no statute exists, and
  // this page rests on five. Pending decision.
  "state/sexual-battery-defense": {
    statute: "F.S. 794.011(5) and (6), read with F.S. 794.005",
    section: "The basic charge, and what force adds to it",
    assertion:
      "Florida's basic sexual battery charge is the one with no force in it: each paragraph of F.S. 794.011(5) is committed where the person does not use physical force and violence likely to cause serious personal injury, F.S. 794.011(6) makes those paragraphs necessarily included offences of the charges under (3) and (4), and F.S. 794.005 records the Legislature's finding that (5) was never intended to require any force or violence beyond the force and violence inherent in the accomplishment of penetration or union.",
  },
  "state/sex-crimes-defense": {
    statute: "F.S. 943.0435",
    section: "Registration: what the statute requires, and when",
    assertion:
      "Registration runs on a 48-hour clock rather than a calendar and the offence it creates is an offence of omission: F.S. 943.0435(9)(a) makes any failure to report a third degree felony, ranked at level 7 on the F.S. 921.0022 chart, and makes each separate instance a separate offence, and F.S. 943.0435(9)(b) requires a mandatory minimum term of community control with electronic monitoring of 6 months, 1 year, or 2 years by offence count wherever the court imposes no prison sentence, while two narrower failures are graded a full degree higher to a second degree felony, reporting an intent to vacate a residence and then remaining under F.S. 943.0435(4)(c), and reporting an intent to leave the state and then remaining in Florida under F.S. 943.0435(8).",
  },
  "state/homicide-defense": {
    statute: "F.S. 782.04",
    section: "The same felony, two degrees: who caused the death",
    assertion:
      "Florida's felony murder provisions send the same underlying felony to two different degrees depending on who caused the death: under F.S. 782.04(1)(a)2 a death caused by a participant during one of nineteen enumerated felonies is first degree murder and a capital felony, while under F.S. 782.04(3) a death caused during those same felonies by a person other than a participant makes the participant guilty of second degree murder, a first degree felony ranked at level 9 rather than the level 10 that ordinary second degree murder carries, and the two enumerated lists are not identical, because human trafficking appears in the first degree list and in neither the second nor the third degree list.",
  },
  "federal/csam-defense": {
    statute: "18 U.S.C. 2252",
    section: "Which paragraph of 18 U.S.C. 2252(a) you are charged under",
    assertion:
      "The paragraph named in the charging document, and not the quantity of material, sets three separate things at once: 2252(a)(1), (a)(2) and (a)(3) carry a five year minimum under 2252(b)(1), appear in the rebuttable detention presumption at 18 U.S.C. 3142(e)(3)(E), and take a base offense level of 22 under USSG 2G2.2(a)(2), while 2252(a)(4) carries no minimum at all under 2252(b)(2), is absent from that presumption list, and takes a base offense level of 18.",
  },

  // W3, recorded 2026-08-13. Barrier ran over 23 assertions, 253 pairs
  // pairwise with statute ignored, max similarity 0.196 against the 0.34
  // threshold. The only same-statute pair is the ruled grand theft and
  // embezzlement pair on F.S. 812.014, at 0.000 substance similarity.
  "state/drug-possession-defense": {
    statute: "F.S. 893.13(6)",
    section: "Degrees, penalties and offense levels",
    assertion:
      "One paragraph of the possession statute is ranked twice in the F.S. 921.0022 chart at two different severity levels, level 1 for felony possession of cannabis and level 3 for possession of any other controlled substance, so two third degree felonies carrying the identical five-year maximum score 4 primary offense points and 16, while 893.13(6)(c) possession of more than 10 grams of a substance named in s. 893.03(1)(a), (1)(b) or (2)(b) is a first degree felony at level 8 and 74 points, above the 44-point threshold on the primary offense alone.",
  },
  "state/battery-defense": {
    statute: "F.S. 784.03",
    section: "What raises a battery without changing what happened",
    assertion:
      "The same first degree misdemeanor battery becomes a third degree felony on facts outside the act itself, and the three routes do not work alike: 784.03(2) needs only one prior battery conviction and counts a withheld adjudication or a nolo plea as that conviction, 784.07(2)(b) applies only where the defendant knowingly battered a law enforcement officer or other listed person, and 784.08(2)(c) reaches a person 65 years of age or older regardless of whether the defendant knows or has reason to know the age of the victim.",
  },
  "state/dui-defense": {
    statute: "F.S. 322.2615",
    section: "The other case: the 10 days that run from the notice, not from a court date",
    assertion:
      "A Florida DUI arrest opens a second case against the driver license that runs on its own clock, and F.S. 322.2615(1)(b)3 gives 10 days from the date the notice of suspension is issued, not from the arrest and not from any court date, to do one of three mutually exclusive things: request a formal review, request an informal review, or take the restricted business-purposes privilege under F.S. 322.271(7), which by that statute's own terms is a waiver of both reviews.",
  },

  // Recorded 2026-08-13. These two were briefed in W1 and the briefs were
  // committed, but the assertions were never written here, which meant they sat
  // outside the W2 barrier rather than inside it. Folded in and the full barrier
  // re-run over all 21 populated assertions, not just the 19 it saw the first time.
  "federal/money-laundering": {
    statute: "18 U.S.C. 1956 and 1957",
    section: "What counts as specified unlawful activity",
    assertion:
      "The offense turns on a finite statutory predicate list rather than on an amount: 1956 sets no dollar threshold at all, while its companion at 1957 turns on a single $10,000 figure.",
  },
  "federal/computer-internet-crimes": {
    statute: "18 U.S.C. 1030",
    section: "The three offenses this page is built on",
    assertion:
      "Three separate offenses rather than one: (a)(1) reaches national defense information with no Florida counterpart, (a)(4) requires intent to defraud plus obtaining something of value, and (a)(5) makes damage itself the offense with no dollar floor.",
  },

  // Recorded 2026-08-13 after the W2 reconciliation barrier. 171 pairs compared
  // pairwise, statute ignored, plus the same-statute rule across the union of new
  // and populated assertions. No collision; highest similarity 0.148 against a
  // 0.34 threshold. See docs/research/briefs/STATE.md for how the barrier ran.
  "federal/weapons-gun-offenses": {
    statute: "18 U.S.C. 924",
    section: "The Armed Career Criminal Act",
    assertion:
      "Fifteen years is the ceiling and the floor for the same conviction: 924(a)(8) caps a 922(g) violation at fifteen years, and 924(e)(1) makes fifteen years the minimum once three violent felony or serious drug convictions were committed on occasions different from one another.",
  },
  "white-collar/healthcare-fraud": {
    statute: "F.S. 409.920",
    section: "The claim, the ladder, and where the two ladders come apart",
    assertion:
      "The offense is complete when a false statement of material fact reaches a claim submitted to the Agency for Health Care Administration, its fiscal agent, or a Medicaid managed care plan, and its degree ladder at $10,000 and $50,000 comes apart from the F.S. 921.0022 ladder: the third degree tier and the second degree tier are both ranked at level 7, so the statutory maximum triples from 5 years to 15 while the primary offense points stay at 56.",
  },
  "federal/conspiracy-charges": {
    statute: "18 U.S.C. 371, against 21 U.S.C. 846 and 18 U.S.C. 1349",
    section: "Which conspiracy statute you are charged under",
    assertion:
      "Section 371 names an act to effect the object of the conspiracy on the face of its text and caps the sentence at five years whatever the object offense was, while the conspiracy provisions at 21 U.S.C. 846 and 18 U.S.C. 1349 name only the agreement and carry the same penalties as the completed offense.",
  },
  "state/computer-crimes-defense": {
    statute: "F.S. 815.06",
    section: "What turns a third degree charge into a second or first degree charge",
    assertion:
      "Florida escalates unauthorized computer access by the kind of harm rather than by an amount: the base offense is a third degree felony on the access itself, the second degree attaches on $5,000 in damage or loss, a fraud purpose, disruption of a government or public service, or a transit system, and the first degree is reached only by endangering human life or disrupting medical equipment used in the direct administration of care.",
  },
  "federal/wire-mail-fraud": {
    statute: "18 U.S.C. 1341 and 1343",
    section: "Mail fraud and wire fraud are one offence with two delivery methods",
    assertion:
      "1341 reaches any private or commercial interstate carrier and not only the Postal Service, and carries a counterfeit-article limb 1343 has no counterpart to, while both rise from 20 years to 30 where the scheme affects a financial institution or a presidentially declared disaster.",
  },
  "federal/drug-trafficking": {
    statute: "21 U.S.C. 841",
    section: "Intent to distribute, and what quantity actually does",
    assertion:
      "Quantity sets the mandatory minimum but never the offense: 841(a)(1) turns on intent to distribute, and 841(b)(1)(C) reaches a schedule I or II controlled substance in any amount at all, with a 20 year maximum and no minimum.",
  },
  "federal/healthcare-fraud": {
    statute: "18 U.S.C. 1347",
    section: "Any health care benefit program, and why a private insurer counts",
    assertion:
      "The offense is defined by the object rather than by an amount: 1347 reaches a scheme against any health care benefit program, which 18 U.S.C. 24(b) defines as any public or private plan or contract affecting commerce, so a commercial insurer is a federal victim, the statute states no dollar figure at all, and the same billing count runs from a 10-year maximum to life where the violation results in serious bodily injury or death.",
  },
  "white-collar/securities-fraud": {
    statute: "F.S. 517.302 and 18 U.S.C. 1348",
    section: "Degrees, penalties and offense levels",
    assertion:
      "Florida ranks its general securities fraud offense at level 1, the floor of the F.S. 921.0022 chart, and lifts it to a first degree felony only on a count of persons, more than $50,000 obtained from five or more, while the federal analogue at 18 U.S.C. 1348 reaches only the securities of a registered or reporting issuer.",
  },
  "white-collar/tax-evasion": {
    statute: "26 U.S.C. 7201 and F.S. 212.15(2)",
    section: "Forum section: is there a Florida tax evasion charge?",
    assertion:
      "Florida's only criminal tax offense punishes failing to remit sales tax already collected from a customer, a theft of state funds rather than an evasion, and the one Florida statute that uses the words attempt to evade or defeat tax, F.S. 213.29, imposes a civil penalty of twice the tax instead of a crime.",
  },
  "white-collar/bank-fraud": {
    statute: "18 U.S.C. 1344",
    section: "What the government has to prove: the institution is the element",
    assertion:
      "There is no mailing and no wire in this statute; the financial institution defined at 18 U.S.C. 20 is itself the element, and it carries a $1,000,000 fine and a 30-year maximum as the baseline rather than as an enhancement to a lower one.",
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
  // Corrected 2026-08-13 against the fetched text of 817.568(6) and (7). The
  // brief inferred these tiers from the truncated ranking-chart description and
  // recorded them as covering minors. The statute covers a person younger than
  // 18 OR aged 60 or older, in both subsections.
  "white-collar/identity-theft": {
    statute: "F.S. 817.568",
    section: "The protected-person and custodial tiers",
    assertion:
      "Using the identifying information of someone under 18 or aged 60 or over is a second degree felony at level 8, and rises to level 9 where the defendant is that person's parent, guardian, or custodian.",
  },
  "white-collar/wire-fraud": {
    statute: "F.S. 817.034",
    section: "Forum section: state charge or federal charge?",
    assertion:
      "No Florida offense carries this name, and the state analogue is the Florida Communications Fraud Act with its own aggregate-value tiers.",
  },
  // OPP-01's placeholder was removed 2026-08-13 when the limitations period was
  // resolved from operative text. The populated entry is above.
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

/**
 * Entries that are not charge pages, excused from C9 on the record.
 *
 * DECISIONS.md D12. `/white-collar-defense/corporate-fraud` is kept, but it is
 * reclassified: it is a category overview that links down to the pages that do
 * rest on statutes. It is not a charge page and must not be written as one.
 *
 * There is no corporate fraud offence in the Florida Statutes or in the United
 * States Code, so this entry has no elements, no degrees, and no offense level,
 * and the level 3 template's statute, penalties, and elements sections stay
 * empty on it by design rather than by omission.
 */
const CHARGE_C9_EXEMPT: Record<string, C9Exemption> = {
  "white-collar/corporate-fraud": {
    type: "no-statute",
    reason:
      "Category overview, not a charge page. No corporate fraud offence exists in Florida or federal law, so there is no statute for a differentiator to rest on. Kept because the term carries client-side search value, and it links down to securities fraud, bank fraud, embezzlement, and wire fraud, which do rest on statutes. DECISIONS.md D12.",
  },
  "federal/target-letter-defense": {
    type: "policy-governed",
    reason:
      "A procedure page with verified substance, not an empty category. No statute creates a target letter or defines \"target\" and \"subject\": those terms exist only in DOJ charging policy at JM 9-11.151, which also publishes the Advice of Rights text verbatim, and the phrase \"target letter\" appears nowhere in the Justice Manual's grand jury chapter. The differentiator IS that absence, so the statute-parse flag is correct and is excused rather than engineered away. Substituting 18 U.S.C. 3282 or 1519 into the statute field was rejected: the differentiator does not rest on either, and a field that says otherwise makes the checker pass by lying to it. Widening isStatuteCitation to accept Justice Manual citations was rejected because it would let any later page rest on policy without anyone deciding that it should. DECISIONS.md D15.",
  },
};

/**
 * Category overviews that are still C9-checked. See C9Category in c9.ts.
 *
 * Distinct from CHARGE_C9_EXEMPT on purpose. These pages are compared; the
 * field records what they are, not permission to skip anything.
 */
const CHARGE_C9_CATEGORY: Record<string, C9Category> = {
  "state/sex-crimes-defense": {
    reason:
      "Category overview spanning F.S. 800.04, 847.0135, 800.03, 943.0435 and 775.21, sitting in a charge silo under a category name. It fails D12's condition for exemption, which is that no statute exists: this page rests on five, and Florida law enumerates the category itself twice, at F.S. 943.0435(1)(h)1.a and F.S. 775.21(4)(a)1. Its C9 rests on the registration scheme at 943.0435. Exempting it would delete a 23-row penalties table that is both its strongest asset and its referral asset. DECISIONS.md D16.",
  },
};

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
    c9Exempt: CHARGE_C9_EXEMPT[`${silo}/${slug}`],
    c9Category: CHARGE_C9_CATEGORY[`${silo}/${slug}`],
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
 * case results, no outcome prediction, nothing characterizing the firm's skill
 * or record, and the defense sections describe process only.
 */
const CHARGE_CONTENT: Record<string, Partial<ChargePage>> = {
  // ---------------------------------------------------------------------
  // CORPORATE FRAUD. NOT A CHARGE PAGE. Category overview, per D12.
  //
  // C9-exempt, so ChargeTemplate omits the statute, penalties, and elements
  // sections rather than rendering [NEEDS] markers for fields that will never
  // apply. No statute is cited here because none exists to cite: there is no
  // corporate fraud offence in Florida law or in the United States Code.
  //
  // Its whole job is to route. Do not write charge content on it, and do not
  // give it a statute section later without reopening D12.
  // ---------------------------------------------------------------------
  "white-collar/corporate-fraud": {
    title: "Corporate fraud",
    metaTitle: "Corporate Fraud Defense | Hines & McCarty",
    metaDescription:
      "Corporate fraud is a description rather than a charge. The offenses actually filed, and where each one is explained.",
    lead: "Corporate fraud is a description of a situation rather than the name of an offense. Neither Florida law nor federal law contains a crime called corporate fraud, so a case described that way is always filed under something more specific.",
    defenseApproach: [
      "What arrives instead is one or more of a familiar set: a theft or organized fraud charge where money or property moved, a bank fraud charge where a lender was involved, a securities charge where investors or reporting obligations were, or a wire fraud charge where the transmissions themselves are the hook. Which one it is changes the elements, the thresholds, and often the court.",
      "That is why this page is a signpost rather than an explanation. Each of the pages below covers an offense that exists, with the statute it rests on and what it requires.",
    ],
    relatedGuides: [
      {
        label: "Securities fraud",
        href: "/white-collar-defense/securities-fraud",
      },
      { label: "Bank fraud", href: "/white-collar-defense/bank-fraud" },
      { label: "Embezzlement", href: "/white-collar-defense/embezzlement" },
      { label: "Wire fraud", href: "/white-collar-defense/wire-fraud" },
    ],
  },

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
      "Value sets the degree of a Florida theft, but a list of specific items is grand theft at any value. The thresholds, the sentencing arithmetic, and whether the record can be sealed.",
    lead: "Grand theft is a felony under Florida Statute 812.014, and value usually decides it at $750. Below that line there are still two different misdemeanors, and a separate list of specific items is a felony whatever the property was worth.",
    sections: [
      {
        id: "threshold",
        heading: "Why $750 is not one line, and why a home changes every tier",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "The general threshold is $750. At or above it the offense is grand theft, a felony. Below it the offense is often petit theft, but not always, because other routes in the same statute reach a felony under that figure. Property valued at $40 or more but less than $750 taken from a dwelling as defined in Statute 810.011(2), or from the unenclosed curtilage of a dwelling, is grand theft of the third degree under Statute 812.014(2)(d)1. Statute 812.014(2)(c) also grades some property by what it is or where it was taken from rather than by what it was worth, including a firearm at subparagraph 5., written except as provided in paragraph (g), and a motor vehicle at subparagraph 6., written except as provided in paragraph (a). Prior theft convictions open felony routes as well, including under Statute 812.014(3)(c). Those routes appear on the ladder below. Where the offense is petit theft, which of the two petit theft degrees applies is not decided by that one number.",
          "Statute 812.014(2)(f) covers property valued at $100 or more but less than $750, and makes it petit theft of the first degree, a first degree misdemeanor carrying up to 1 year under Statute 775.082(4)(a). Statute 812.014(3)(a) then reaches theft of any property not specified in subsection (2), which is petit theft of the second degree, up to 60 days under 775.082(4)(b). So the lowest tier is narrower than people assume: it is what is left after subsection (2) has taken everything it covers.",
          "Where the property was taken decides more than what it was worth. Statute 812.014(2)(f) opens with the words except as provided in paragraph (d), and paragraph (d) is the dwelling route. Taken from a dwelling or its unenclosed curtilage, the grading changes at every level: under Statute 812.014(2)(e)1. property valued at less than $40 is petit theft of the first degree; under 812.014(2)(d)1. property valued at $40 or more but less than $750 is grand theft of the third degree, a felony; and under 812.014(2)(d)2. property valued at $750 or more is also grand theft of the third degree. A $500 item is a first degree misdemeanor taken from a shop and a third degree felony taken from a home.",
          "A list of specific items ignores value entirely. Statute 812.014(2)(c) opens with three value tiers at subparagraphs 1. to 3., and then at subparagraphs 4. to 13. names property that is grand theft of the third degree by what it is: a will, codicil, or other testamentary instrument; a firearm, except as provided in paragraph (g); a motor vehicle, except as provided in paragraph (a); a commercially farmed animal; a fire extinguisher installed in a building at the time of the taking; citrus fruit consisting of 2,000 or more individual pieces; property taken from a designated construction site identified by a posted sign; any stop sign; anhydrous ammonia; and any amount of a controlled substance as defined in Statute 893.02.",
          "A firearm is where degree understates exposure twice over. A stolen firearm is grand theft of the third degree under 812.014(2)(c)5. whatever it was worth, and the F.S. 921.0022 ranking chart puts that subparagraph at offense level 6, which is where a theft of $20,000 to $100,000 sits. And under Statute 812.014(2)(g), if the property stolen is a firearm and the offender has previously been convicted of grand theft of a firearm under subparagraph (c)5., it is grand theft of the second degree, which carries fifteen years rather than five.",
          "Prior convictions move the charge again, and they do it on two separate tracks. On the general track, Statute 812.014(3)(b) makes a petit theft by a person previously convicted of any theft a first degree misdemeanor, and 812.014(3)(c) makes a petit theft by a person previously convicted two or more times of any theft a felony of the third degree. On the dwelling track the escalation is faster: Statute 812.014(2)(e)2. makes a violation of (2)(e)1. by a person previously convicted of any theft a felony of the third degree on a single prior, and 812.014(2)(e)3. reaches two or more priors. One prior conviction is the difference between a misdemeanor and a felony where a dwelling is involved.",
        ],
      },
      {
        id: "ladder",
        heading: "The theft ladder, from 60 days to thirty years",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "First degree felony, grand theft", maximum: "Up to 30 years", offenseLevel: "Level 8", note: "Cargo valued at $50,000 or more that has entered the stream of interstate or intrastate commerce, under 812.014(2)(a)2. This is the highest offense level any theft under this statute carries, and it attaches at a smaller number than the level 7 row below it." },
          { degree: "First degree felony, grand theft", maximum: "Up to 30 years", offenseLevel: "Level 7", note: "Property valued at $100,000 or more, or a semitrailer that was deployed by a law enforcement officer, under 812.014(2)(a)1. Statute 812.014(2)(a)3. adds two more first degree routes, and both begin with a grand theft: where the offender commits any grand theft and, in the course of committing the offense, either uses a motor vehicle as an instrumentality, other than merely as a getaway vehicle, to assist in committing the offense and thereby damages the real property of another, or causes damage to the real or personal property of another in excess of $1,000. They score here as well. The ranking chart's level 7 entry for (2)(a)1. describes property stolen while causing other property damage, and Statute 921.0023(3) in any event places a felony of the first degree that is not listed on the chart within offense level 7." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 7", note: "Four routes rank here, above the ordinary $20,000 tier below: a firearm where the offender has a prior conviction for grand theft of a firearm, under 812.014(2)(g); cargo worth less than $50,000 taken from the stream of commerce, under 812.014(2)(b)2.; emergency medical equipment worth $300 or more taken from a facility licensed under chapter 395 or from an aircraft or vehicle permitted under chapter 401, under 812.014(2)(b)3.; and law enforcement equipment worth $300 or more taken from an authorized emergency vehicle as defined in Statute 316.003, under 812.014(2)(b)4." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 6", note: "Property valued at $20,000 or more but less than $100,000, under 812.014(2)(b)1. Coordinating the activities of one or more people in committing a theft under this section, where the stolen property has a value in excess of $3,000, is also a second degree felony at this level, under 812.014(6)." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 5", note: "Property taken from more than 20 dwellings, under 812.014(2)(d)3. It is the lowest ranked second degree row this chart prints for the theft statute, though not the lowest level a second degree theft can reach: the flush language described in the next section reclassifies some thefts as second degree felonies ranked one level above the row they came from, and the lowest of those lands at level 4." },
          { degree: "Third degree felony, grand theft", maximum: "Up to 5 years", offenseLevel: "Level 6", note: "A firearm, under 812.014(2)(c)5., whatever it was worth. A five year maximum sits on the same offense level as a theft of $20,000 to $100,000, which is the clearest case of the degree understating the exposure." },
          { degree: "Third degree felony, grand theft", maximum: "Up to 5 years", offenseLevel: "Level 4", note: "Property valued at $10,000 or more but less than $20,000, under 812.014(2)(c)3. Also property valued at $750 or more taken from a dwelling, under 812.014(2)(d)2., the listed items at 812.014(2)(c)4. and 6. to 10., and a dwelling-route petit theft with two or more prior theft convictions, under 812.014(2)(e)3." },
          { degree: "Third degree felony, grand theft", maximum: "Up to 5 years", offenseLevel: "Level 3", note: "Property valued at $5,000 or more but less than $10,000, under 812.014(2)(c)2." },
          { degree: "Third degree felony, grand theft", maximum: "Up to 5 years", offenseLevel: "Level 2", note: "Property valued at $750 or more but less than $5,000, under 812.014(2)(c)1. Also property valued at $40 or more but less than $750 taken from a dwelling, under 812.014(2)(d)1., and a dwelling-route petit theft with one prior theft conviction, under 812.014(2)(e)2." },
          { degree: "Third degree felony, on a prior conviction", maximum: "Up to 5 years", offenseLevel: "Level 1", note: "Petit theft with two or more prior theft convictions, under 812.014(3)(c). This is the floor of the entire ranking chart, and it is a felony: the same conduct that is a misdemeanor for a first offense becomes a third degree felony on a third." },
          { degree: "First degree misdemeanor, petit theft", maximum: "Up to 1 year", note: "Property valued at $100 or more but less than $750, under 812.014(2)(f), except where taken from a dwelling. Also property valued at less than $40 taken from a dwelling, under 812.014(2)(e)1. Maximum from 775.082(4)(a)." },
          { degree: "Second degree misdemeanor, petit theft", maximum: "Up to 60 days", note: "Theft of any property not specified in subsection (2), under 812.014(3)(a). This tier has no floor of its own: it is whatever every other paragraph of subsection (2) leaves behind, so it cannot be described by a dollar figure. Maximum from 775.082(4)(b)." },
        ],
      },
      {
        id: "arithmetic",
        heading: "Five theft charges, one five-year maximum, five different scoresheets",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Five rows above are the same degree, third degree felony, with the same five year maximum, and they sit at offense levels 1, 2, 3, 4 and 6. The degree on the paperwork does not tell you where a case sits. Usually the value decides it, and the value is something the State has to establish rather than something the accusation settles. But not always. A stolen firearm is level 6 under Statute 812.014(2)(c)5., which names no value figure and is written except as provided in paragraph (g), and a petit theft with two or more prior theft convictions is level 1 under 812.014(3)(c). The chart's level 4 row for specified items covers 812.014(2)(c)4. and 6. to 10., graded by the item taken or the place it came from, though the motor vehicle entry at (2)(c)6. is written except as provided in paragraph (a), and a vehicle valued at $100,000 or more falls under 812.014(2)(a)1., which the chart ranks at level 7. The stop sign, anhydrous ammonia, and controlled substance entries at (2)(c)11. to 13. have no row on the chart at all, and Statute 921.0023(1) places a felony of the third degree that is not listed on the chart within offense level 1. Where the charge rests on what the property was rather than what it cost, the value is not the argument.",
          "That figure comes from somewhere. A receipt, a replacement quote, an insurance schedule, and a complainant's recollection are four kinds of evidence and they do not always agree. Where a number sits near a threshold, one valuation can be the difference between two degrees.",
          "The riot and emergency reclassifications sit in the flush text that follows the numbered lists, which is where they are easy to miss. Under the flush language of Statute 812.014(2)(b), a theft under that paragraph is a felony of the first degree if the property is stolen during a riot or an aggravated riot prohibited under Statute 870.01 and the perpetration of the theft is facilitated by conditions arising from the riot, or is stolen within a county that is subject to a state of emergency declared by the Governor under chapter 252, the theft is committed after the declaration of emergency is made, and the perpetration of the theft is facilitated by conditions arising from the emergency. The flush language of Statute 812.014(2)(c) does the same in the same circumstances for property valued at $5,000 or more but less than $10,000 under subparagraph 2., and for property valued at $10,000 or more but less than $20,000 under subparagraph 3., and makes those a felony of the second degree. Each of those paragraphs adds that a person arrested for committing a theft in those circumstances may not be released until the person appears before a committing magistrate at a first appearance hearing, and that for purposes of sentencing under chapter 921 a felony offense reclassified under the paragraph is ranked one level above the ranking under Statute 921.0022 or Statute 921.0023 of the offense committed.",
          "The offense level then feeds an arithmetic that has discretion built into it, which is easy to lose when the numbers are quoted on their own. Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximum, is appropriate. Above 44 points the statute produces a minimum by subtracting 28 and reducing the remainder by 25 percent.",
          "Statute 775.082(10) is narrower than it is often quoted as being. It applies to a third degree felony that is not a forcible felony as defined in Statute 776.08, and it excludes third degree felony violations under chapter 810. Where it applies and the total is 22 points or fewer the court must impose a nonstate prison sanction. It then adds that if the court makes written findings that a nonstate prison sanction could present a danger to the public, the court may sentence the offender to a state correctional facility. It is a floor with an express exception, not a guarantee.",
        ],
      },
      {
        id: "timeline",
        heading: "Sixty days or thirty before a theft charge has to be filed, and why bonding out decides which",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "Within 24 hours of arrest", what: "First appearance. Rule 3.130(a) provides that except when previously released in a lawful manner, every arrested person must be taken before a judge, in person or by audio-video communication technology, within 24 hours. Under Rule 3.130(d) the judge must proceed to determine pretrial detention or conditions of release under rule 3.132 or rule 3.131." },
          { when: "60 days, if you bonded out", what: "Rule 3.134(b) governs defendants not in custody and gives the State 60 days from arrest to file formal charges, with automatic release on recognizance on the 63rd day if it has not. Under (b)(1)(B) the court may, on a showing of good cause, continue the defendant on pretrial release for up to an additional 30 days. Which track applies is decided by custody, not by the charge." },
          { when: "30 days, if you are still in custody", what: "Rule 3.134(a) gives the State 30 days for defendants in custody. If still uncharged the court must order automatic release on recognizance on the 33rd day, or on the 40th if the State shows good cause, and provides that in no event may a defendant remain in custody beyond 40 days uncharged. Release under this rule is not a dismissal and the State can file afterwards." },
          { when: "175 days from the formal charge", what: "The felony speedy trial period under Rule 3.191(a), which runs from formal charge by information or indictment as subdivision (d) defines it, not from the arrest. A misdemeanor carries 90 days. Missing it does not end a case by itself: the rule directs the reader to the remedy in subdivision (o), which is a recapture procedure rather than automatic discharge. Rule 3.191(b) allows a defendant to demand trial within 60 days instead." },
        ],
      },
      {
        id: "now",
        heading: "The property, the valuation, and the conversation about both",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are in place from the arrest onward",
            items: [
              "You have the right to decline to answer questions. It is available at every stage and it does not have to be justified.",
              "You have the right to counsel, and the rule separates being told from being given. Rule 3.130(b)(1)(B) requires the judge at first appearance to advise an unrepresented defendant of the right to counsel and that counsel will be appointed if the defendant cannot afford one. Rule 3.130(c)(1) is the appointment itself: when the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel. Rule 3.130(c)(2) allows a reasonable time to send for a retained lawyer, with the hearing postponed if necessary.",
              "You are entitled to see what the State relies on, through discovery, in the ordinary course. A theft case is assembled from documents about value, and those documents are examinable rather than something to reconstruct from memory.",
            ],
          },
          {
            heading: "Where these cases are commonly complicated",
            items: [
              "Returning or moving property without advice. It does not resolve the elements of the offense, and how it is described afterwards becomes part of the record.",
              "Describing the transaction to a complainant, an employer, or an investigator without counsel. Value and intent are the two live issues in most theft cases, and both are things people describe loosely in conversation.",
              "Treating the civil demand letter and the criminal case as one matter. They are separate proceedings with separate decision-makers.",
            ],
          },
        ],
      },
      {
        id: "elements",
        heading: "The four things a theft charge rests on, and where value sits among them",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "That the property belonged to someone else.",
          "That the defendant knowingly obtained or used it, or endeavored to obtain or use it. The statute reaches an attempt in the same breath as a completed taking.",
          "That the defendant intended to deprive the owner of a right to the property or a benefit from it, or to appropriate it to someone not entitled to it. A temporary intent is enough.",
          "What the property was worth. This one is a grading fact under Statute 812.014(2) rather than part of the definition of theft in 812.014(1), and it decides the degree only where the charge rests on value rather than on the item taken or the place it was taken from.",
        ],
      },
      {
        id: "statute",
        heading: "Statute 812.014, and the point where petit theft stops",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 812.014, the 2025 Florida Statutes",
          body: "The statute defines theft in one sentence and then spends its length on grading. A person commits theft if he or she knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to either temporarily or permanently deprive the other person of a right to the property or a benefit from the property, or to appropriate the property to his or her own use or to the use of any person not entitled to the use of the property. Everything after that is grading, and the grading runs on more axes than value. Paragraphs (a) and (b) are usually read as the value tiers, and mostly they are, but each also grades by the item taken: a semitrailer deployed by a law enforcement officer under (2)(a)1., cargo in the stream of commerce under (2)(a)2. and (2)(b)2., emergency medical equipment at $300 or more taken from a facility licensed under chapter 395 or from an aircraft or vehicle permitted under chapter 401 under (2)(b)3., and law enforcement equipment at $300 or more taken from an authorized emergency vehicle under (2)(b)4. Subparagraphs (c)4. to 13. add a further item list, (d) and (e)1. grade by the place the property was taken from, and (e)2., (e)3. and (g) grade by a prior conviction. Subsection (6) grades by role rather than by property at all, reaching a person who coordinates one or more others in a theft of more than $3,000. Statute 812.014(3)(a) is not one of those rules. It is the remainder: theft of any property not specified in subsection (2). So the second degree misdemeanor is what is left after every paragraph of subsection (2) has taken what it covers, which is why reading (3)(a) first produces the wrong answer for a dwelling at any value, for the listed items at any value, and for cargo in the stream of commerce at any value at all.",
        },
      },
      {
        id: "civil",
        heading: "The demand letter that arrives separately from the prosecution",
        kind: "prose",
        answers: ["consequences"],
        prose: [
          "A theft accusation can produce a second case that has nothing to do with the State. Statute 772.11(1) gives a person who proves by clear and convincing evidence that they were injured by a theft a cause of action for threefold the actual damages, with minimum damages of $200 and reasonable attorney's fees and court costs. That standard of proof is higher than the ordinary civil one and lower than the criminal one.",
          "The statute requires a written demand for $200 or the treble damage amount before an action is filed, and provides that a person who complies with that demand within 30 days after receipt of the demand is given a written release from further civil liability for the specific act of theft or exploitation by the person making the written demand. Those qualifiers are the statute's own words: the release runs to the specific act, and it is given by the person who made the demand. That release addresses the civil claim only. It does not end, settle, or bind the criminal case, and the two are decided by different people on different records.",
        ],
      },
      {
        id: "record",
        heading: "Statute 812.014 is not on the permanent bar list, and what follows from that",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "An arrest generates a criminal history record, and in Florida those records are public unless they are sealed or expunged. That is the practical answer to what this does to work: an ordinary background check can surface the arrest whether or not the case ends in a conviction, and it stays visible for as long as the record is unsealed. A theft allegation carries particular weight with employers who handle money or inventory, which is why the sealing question below is usually the one that outlasts the sentence. Theft under Statute 812.014 is not on the list of offenses that are permanently barred. Statute 943.0584(2) makes a record ineligible where it is a conviction for one of the offenses it enumerates, and that list includes robbery under 812.13, drug trafficking under 893.135, and the Florida Communications Fraud Act at 817.034. Statute 812.014 appears nowhere in it.",
          "The word conviction there does not mean what most readers expect. Statute 943.0584(1) defines it as a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, and continues that where the defendant was a minor it means a finding that the defendant committed or pled guilty or nolo contendere to a delinquent act, regardless of whether adjudication of delinquency is withheld. A withhold is still a conviction for the purposes of that bar.",
          "Where the record is not barred, Statute 943.059(1) sets the conditions, and they are cumulative: the record must not be ineligible under 943.0584; the person must never have been adjudicated guilty in Florida of a criminal offense, or adjudicated delinquent for a felony or one of thirteen listed misdemeanors, of which petit theft is one; the person must not have been adjudicated guilty of any of the acts stemming from this arrest; the person must no longer be under court supervision for it; and the person must never have secured a prior sealing or expunction. Subsection (2) then requires a certificate of eligibility from the department before a petition is filed, which is the step most people meet first.",
          "Two things this page does not decide. A specific professional license is governed by the rules of the board that issues it, and none of those are addressed here. Immigration consequences turn on federal law and belong with an immigration attorney rather than being inferred from a Florida statute.",
        ],
      },
      {
        id: "who",
        heading: "Who is already involved in a theft case, and who to contact",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Three offices are involved before you choose anyone. The arresting agency produced the report. The Office of the State Attorney for the Thirteenth Judicial Circuit decides whether to file charges and what to file. The Hillsborough County Clerk holds the file, with circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
          "For counsel there are two routes and the first hearing addresses both. Rule 3.130(b)(1)(B) requires the judge to advise an unrepresented defendant of the right to counsel and that counsel will be appointed if they cannot afford one, and Rule 3.130(c)(1) requires the judge to appoint counsel immediately once entitlement and desire for it are determined. A defendant who intends to retain a lawyer can say so, and Rule 3.130(c)(2) requires a reasonable time to send for one, with the hearing postponed if necessary. If you are reading this before a first appearance, contacting a defense lawyer is the step that does not wait for a court date, and the public defender route is raised at that hearing if you cannot pay.",
        ],
      },
    ],
    faq: [
      { question: "How much does the property have to be worth for a theft to be grand theft?", source: "keywords.md", grade: "6-12mo", answer: "The general threshold is $750, and the degree rises again at $20,000 and at $100,000. But $750 only settles it where the property was not taken from a dwelling and is not one of the items the statute lists. From a dwelling, Statute 812.014(2)(d)1. makes property worth $40 or more but less than $750 a third degree felony, and 812.014(2)(d)2. does the same at $750 or more. And subparagraphs 4. to 13. of Statute 812.014(2)(c) make certain property grand theft whatever its value." },
      { question: "Is stealing $500 a felony in Florida?", source: "drafted", answer: "It depends where it was taken from, and on whether there are prior theft convictions. On a first theft charge, taken from a shop, $500 is petit theft of the first degree under Statute 812.014(2)(f), a misdemeanor carrying up to 1 year. Taken from a dwelling or its unenclosed curtilage, the same $500 is grand theft of the third degree under 812.014(2)(d)1., a felony carrying up to 5 years. Taken from a shop, two or more prior theft convictions make the same $500 a third degree felony under 812.014(3)(c), which reaches a petit theft by someone with that record. Taken from a dwelling it is already a felony without them. It is also a felony at any value if the property is one of the items in Statute 812.014(2)(c)4. to 13., which include a firearm, a motor vehicle, a will, a stop sign, and any amount of a controlled substance." },
      { question: "What is third degree grand theft in Florida?", source: "drafted", answer: "It is the lowest felony tier of theft, with a five year statutory maximum under Statute 775.082. One degree is not one exposure, and the spread is wider than most people expect: on the Florida offense severity ranking chart a third degree theft can sit at level 2 at $750, level 3 at $5,000, level 4 at $10,000 or for the items at Statute 812.014(2)(c)4. and 6. to 10., level 6 where the property is a firearm under Statute 812.014(2)(c)5. whatever the firearm was worth, or level 1 where it is a petit theft with two prior theft convictions. The stop sign, anhydrous ammonia, and controlled substance items at Statute 812.014(2)(c)11. to 13. have no row on that chart, and Statute 921.0023(1) places a felony of the third degree that is not listed on it within offense level 1. The level, not the degree, is what the sentencing scoresheet uses." },
      { question: "Who decides what the property was worth?", source: "drafted", answer: "Value is something the State has to prove, not something the accusation settles. Statute 812.014 sets the degree by the value of the property where the charge rests on value, so the figure has to be established like any other part of the case, and its source is open to examination." },
      { question: "Can a grand theft charge be sealed later?", source: "drafted", answer: "Theft under Statute 812.014 is not among the offenses Statute 943.0584(2) bars permanently. Sealing does not always start with a petition: Statute 943.0595(2)(a) directs the department to automatically seal some criminal history records, including where an indictment, information, or other charging document was not filed or issued in the case, and Statute 943.0595(3)(a) has the clerk of the court transmit a certified copy of the disposition for that to happen. That route reaches only a record that does not result from a charging document for a forcible felony as defined in Statute 776.08 or for an offense enumerated in Statute 943.0435(1)(h)1.a.(I). Where sealing is by petition, whether a particular record qualifies turns on the cumulative conditions in Statute 943.059(1), and on a certificate of eligibility from the department under 943.059(2). Note that 943.0584(1) defines conviction to include a plea regardless of whether adjudication is withheld." },
      { question: "How long does a theft case take?", source: "drafted", answer: "The rules set outer limits rather than a schedule. First appearance is within 24 hours of arrest under Rule 3.130(a). The State then has 60 days to file charges for someone on pretrial release under Rule 3.134(b), or 30 days for someone in custody under Rule 3.134(a). Once formally charged, the felony speedy trial period is 175 days under Rule 3.191(a), or 60 days on a demand under Rule 3.191(b)." },
    ],
    // [NEEDS: Layer 2 targets from the brief] The 33-day correction guide, the
    // third degree felony sentencing page, and the offense-level comparison
    // instrument are all named in W1-03 but none has a route yet. Linking to
    // them now would ship broken links, so the generic hub stands until they do.
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
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
  //
  // RESTITUTION AND REPAYMENT (round 7). W1-02 Section 4 calls this the
  // page's differentiating passage, and it stays where it is, as one
  // guidance item plus one FAQ. That is a choice rather than an oversight:
  // repayment is a decision made with counsel, not a mechanism any statute
  // sets out, and a prose section would pull the copy toward saying what
  // repayment achieves, which is the one thing it must not say.
  // ---------------------------------------------------------------------
  "white-collar/embezzlement": {
    title: "Embezzlement charges in Florida",
    metaTitle: "Embezzlement Charges in Florida | Hines & McCarty",
    metaDescription:
      "Florida charges embezzlement as theft, or as organized fraud. Which statute is used changes the offense level, and a conviction under one of them can never be sealed.",
    lead: "Embezzlement accusations start from lawful access. The money or property was handed over legitimately, usually through a job, and the accusation is about what happened afterwards. Florida charges this as theft under Statute 812.014.",
    sections: [
      {
        id: "trust",
        heading: "Authorized access changes which part of the case is contested",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "In most theft cases the argument is whether the defendant took something. Here that is rarely the question, because access was granted at the outset. What is contested is use, and what was intended at the time.",
          "That moves the dispute into the parts of a business that are least well documented. Permission in a small organization is often informal, inconsistent, or spoken rather than absent, and the difference between an approved transaction and an unapproved one can exist only in somebody's memory of a conversation.",
          "It also explains a case that looks odd from outside. Statute 812.014 reaches an intent to deprive the owner of a right or benefit either temporarily or permanently. Money that moved and came back is not outside the statute by virtue of having come back, which is why a case can exist where the account balances at the end.",
        ],
      },
      {
        id: "charge-choice",
        heading: "Chapter 812 names embezzlement in its definitions, and a second statute can also apply",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 812.014 and Florida Statute 817.034, the 2025 Florida Statutes",
          body: "Chapter 812 absorbs this conduct by name. Statute 812.012(3) defines obtains or uses, and paragraph (d)1. of that definition covers conduct previously known as stealing, larceny, purloining, abstracting, embezzlement, misapplication, misappropriation, conversion, or obtaining money or property by false pretenses, fraud, or deception. That is how Statute 812.014, titled Theft, reaches a case that begins with lawful access: it does not need a separate offense because its definitional section already names one. Statute 812.014 itself reaches a person who knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to deprive the owner of a right to it or to appropriate it to someone not entitled to it. A second statute can also apply. Statute 817.034(3)(d) defines a scheme to defraud as a systematic, ongoing course of conduct with intent to defraud one or more persons, or with intent to obtain property from one or more persons by false or fraudulent pretenses, representations, endorsements of nonconsenting parties, or promises or willful misrepresentations of a future act, and 817.034(4)(a) makes engaging in such a scheme and obtaining property organized fraud. A third route sits in the theft statute itself: Statute 812.014(6) reaches a person who individually, or in concert with one or more other persons, coordinates the activities of one or more persons in committing theft under that section where the stolen property has a value in excess of $3,000, and makes that a felony of the second degree. The subsection grades on the value of the stolen property and says nothing about how a total is divided among the people involved. The scheme to defraud definition in 817.034(3)(d) does not describe an isolated act, so where organized fraud is charged the pattern is an element rather than a way of describing the total. Either statute can be the vehicle, and both can appear on the same charging document. Whether both can stand at conviction for the same conduct is a separate double jeopardy question with its own case law, and it is one to raise with a lawyer rather than one this page settles.",
        },
      },
      {
        id: "tiers",
        heading: "Why this page has no value ladder",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Most theft pages are organized around a table of dollar thresholds. This one is not, and the reason is the fork above rather than an omission. The amount matters, but it does not decide the case on its own, because the same money produces a different offense level depending on which statute the count is brought under.",
          "Charged as theft, the tiers are the ordinary ones in Statute 812.014. Charged as organized fraud under Statute 817.034(4)(a), there are three: an aggregate value of less than $20,000 is a felony of the third degree, $20,000 or more but less than $50,000 is a felony of the second degree, and $50,000 or more is a felony of the first degree. Those cut lines are not the theft cut lines, and $50,000 is the clearest example: a first degree felony as organized fraud, a second degree felony as theft.",
          "The maximums behind those degrees come from Statute 775.082: up to 5 years for a third degree felony, up to 15 for a second, and up to 30 for a first. A maximum is a ceiling rather than a prediction. Statute 775.082(10) sets a floor in the other direction for some third degree felonies: where the offense is a third degree felony that is not a forcible felony as defined in Statute 776.08, excluding any third degree felony violation under chapter 810, and the total sentence points under Statute 921.0024 are 22 points or fewer, the court must impose a nonstate prison sanction, unless it makes written findings that such a sanction could present a danger to the public, in which case it may impose a state prison sentence.",
          "Statute 817.034 also carries two features that change the arithmetic rather than the tier. Under 817.034(4)(b) each act of communication made in furtherance of the scheme is a separate offense, graded by the value obtained or sought in that communication. Under 817.034(4)(e), notwithstanding any contrary provisions of law, separate judgments and sentences for organized fraud under paragraph (a) and for each offense of communications fraud under paragraph (b) may be imposed when all of those offenses involve the same scheme to defraud. That is what the statute authorizes, not a forecast of how any case will be charged.",
          "The offense levels diverge too, and not always in the direction people expect. A $25,000 accusation is a second degree felony either way, at offense level 6 as theft and level 5 as organized fraud. The degree is identical, the scoresheet input is not, and the scoresheet is what the sentence is calculated from. The full value-to-offense-level comparison belongs in one place rather than being reproduced on each page that touches it.",
        ],
      },
      {
        id: "authorized",
        heading: "Intent is the element that survives lawful access",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "Theft under Statute 812.014(1) has three elements, and the first is that the property belonged to someone else, which in these cases is rarely in dispute.",
          "That the defendant knowingly obtained or used it. Because possession was authorized at the outset, the argument is usually about use rather than about obtaining.",
          "That the defendant intended to deprive the owner of a right or benefit, or to appropriate the property to someone not entitled to it. Where access began lawfully, intent is ordinarily the contested element.",
          "This last item is not an element of theft at all, and it is here because it belongs to the other count. Where the State charges organized fraud under Statute 817.034 instead, it must also show a systematic, ongoing course of conduct, which is a different thing from a single transaction and has to be proved as such.",
        ],
      },
      {
        id: "records",
        heading: "The ledgers were read before the meeting was scheduled",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "What the documents are doing while this is happening",
            items: [
              "Ledgers, approvals, expense systems, and email predate the accusation. These cases are built from records that already existed, which means the record is fixed and the account of it is not.",
              "A total in an accusation is a sum of individual transactions. Both the arithmetic and the decision to treat the transactions as one course of conduct have to be supported, and under Statute 817.034 the pattern is an element rather than a description.",
              "Access logs and approval trails can show authorization that nobody remembers granting. That is a documentary question, not a credibility contest.",
            ],
          },
          {
            heading: "An internal interview is not a police interview, and the protections are not the same",
            items: [
              "You can decline to answer. But the protections people have in mind, the ones that attach to police questioning, are aimed at the government, and an employer's investigator is not the government. What is said in an internal interview does not stay inside the company, and declining carries consequences at work rather than in court. That trade is the reason to take the decision with a lawyer rather than in the meeting.",
              "You can hire a lawyer at any point, and that does not depend on being charged first. Appointed counsel is different. Rule 3.111(a) attaches the right at the earliest of three moments: when you are formally charged, as soon as feasible after custodial restraint, or at first appearance, whichever comes first. At the internal-interview stage none of the three has happened, so no appointment follows on its own.",
              "Repayment is a decision to take with advice. It does not answer the elements of the offense, and how a repayment is characterized afterwards can carry consequences of its own.",
            ],
          },
        ],
      },
      {
        id: "arrival",
        heading: "Why the long quiet period before charges is not part of any clock",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "The investigative period, which the procedural rules do not reach", what: "An employer, auditor, or insurer reviews records and reaches a conclusion. The clocks in the rest of this table begin at an arrest or a formal charge, so none of them has started. Deadlines are running, though, and they run against the State rather than against you. Statute 775.15(2) sets the general felony periods, 4 years for a felony of the first degree and 3 years for any other felony, and it opens with the words except as otherwise provided in this section. Periods stated to override other law sit outside that section as well. Statute 812.035(10) provides that notwithstanding any other provision of law, a criminal action or proceeding under Statutes 812.012 to 812.037 may be commenced at any time within 5 years after the cause of action accrues, and theft under Statute 812.014 sits inside that range. Statute 817.034(4)(f) provides the same 5 years, notwithstanding any other law, for a criminal action under that section. Each of those two also stops the clock while the defendant is continuously absent from the state or is without a reasonably ascertainable place of abode or work within it, and each caps that at 1 year; Statute 775.15(5) states a similar rule, capped at 3 years. Statute 775.15(3) states when an offense is committed, either when every element has occurred or, if a legislative purpose to prohibit a continuing course of conduct plainly appears, at the time when the course of conduct or the defendant's complicity in it is terminated, with time starting to run on the day after. Which limb fits a particular accusation, and how a period set outside Statute 775.15 works alongside that section's other rules, are legal questions to put to a lawyer. Where a person has not previously been arrested or served with a summons, Statute 775.15(4)(b) commences a prosecution when an indictment or information is filed, provided the capias, summons, or other process issued on it is executed without unreasonable delay. Statute 775.15(12)(a) adds an extension where fraud or a breach of fiduciary obligation is a material element, giving 1 year after discovery of the offense by an aggrieved party or by a person who has a legal duty to represent an aggrieved party and who is himself or herself not a party to the offense, and capping the extension at 3 years; by its own words it applies where the period prescribed in subsection (2), subsection (8), subsection (9), subsection (10), or subsection (11) of Statute 775.15 has expired." },
          { when: "24 hours from an arrest", what: "First appearance under Rule 3.130(a). Release conditions are set at that hearing." },
          { when: "60 days on pretrial release, 30 in custody", what: "Rule 3.134 runs two tracks and custody decides which. Someone released before this point falls under subdivision (b) at 60 days; someone held falls under subdivision (a) at 30. Each carries its own automatic release date if no charge is filed, and neither is a dismissal." },
          { when: "175 days after the charge, not after the conduct", what: "The felony speedy trial period under Rule 3.191(a) runs from formal charge by information or indictment as subdivision (d) defines it. In a case whose transactions are years old, that is the distinction that matters: the age of the conduct does not start it. Missing the period does not end the case by itself, because the rule directs the reader to the recapture remedy in subdivision (o)." },
        ],
      },
      {
        id: "work",
        heading: "An accusation from the employer, and a background check that shows the arrest",
        kind: "prose",
        answers: ["consequences"],
        prose: [
          "This is the charge where the collateral question usually arrives before the legal one, because the accusation and the employment almost always come from the same place. Florida criminal history records are public unless they are sealed or expunged, and an arrest record is visible to an ordinary background check while it stays that way. Sealing is not always something you have to ask for. Under Statute 943.0595 the department seals a record automatically, with no petition and no fee, where no charging document was filed or issued, or where a charging document was dismissed or nolle prosequi as to all counts, or where the defendant was acquitted as to all counts, whether by the verdict or by a judgment of acquittal. Two disqualifiers sit inside those subparagraphs. Under 943.0595(2)(a)2. a person is not eligible if the dismissal was pursuant to Statute 916.145 or Statute 985.19, and under 943.0595(2)(a)3. a person is not eligible if the defendant was found not guilty by reason of insanity. The words as to all counts do the work: where one count survives while others fall away, the automatic route gives nothing. Records charged as a forcible felony as defined in Statute 776.08, or as one of the offenses enumerated in Statute 943.0435(1)(h)1.a.(I), are excluded, and 776.08 is not a closed list because it ends with any other felony involving the use or threat of physical force or violence against an individual.",
          "The employer may also sue, and that claim is decided separately from the prosecution. Statute 772.11(1) sets a clear and convincing standard and allows treble damages with fees, and it requires a written demand first. The statute provides that a person who complies with the demand within 30 days after receiving it is given a written release from further civil liability for the specific act of theft or exploitation, by the person who made the demand. It also says nothing about a prosecution, which is decided by a different office on a different record. The same subsection carries a good deal more, including a bar on punitive damages and an award of fees and costs to the defendant where the court finds the claim was without substantial fact or legal support.",
          "What this page does not resolve is what a specific licensing board will do. Those consequences are governed by each board's own rules rather than by the criminal statutes, and they are not addressed here. Immigration consequences are a matter of federal law and belong with an immigration attorney.",
        ],
      },
      {
        id: "sealing",
        heading: "Why the sealing question turns on the whole arrest, not on the theft count",
        kind: "prose",
        answers: ["sealing"],
        prose: [
          "The choice between theft and organized fraud is usually discussed in terms of offense level. It carries a second consequence that outlasts the sentence, and it runs in the opposite direction.",
          "Statute 943.0584(2) lists offenses whose records are permanently ineligible for sealing or expunction where the record is a conviction for one of them. The Florida Communications Fraud Act at Statute 817.034 is on that list at paragraph (v). Theft under Statute 812.014 is not on it at all.",
          "The trigger is the record being a conviction for a listed offense, which is not the same thing as the charge that was filed. A count under 817.034 that does not end in a conviction on that count does not produce such a record, and a count that does, does. Nothing here says how any case will end, and this is not a reason to expect one ending over another. Note also that Statute 943.0584(1) defines conviction to include a determination of guilt from a trial or a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, so a withhold on an 817.034 count still engages the bar.",
          "Two things about that contrast are easy to state too neatly, and both matter more than the list does. The first is that Statute 943.059(4)(c) makes the unit of sealing one arrest or one incident of alleged criminal activity, not one count. Where a theft count and an organized fraud count come out of the same arrest, there is one record, and a permanent bar attaching to either takes the whole record with it. The theft count's own position never gets reached.",
          "The second is that the general eligibility conditions in Statute 943.059(1) decide most cases before any list does, and they are cumulative. Statute 943.059(1)(c) requires that the person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest, so an adjudication on any count in the case ends it. Statute 943.059(1)(b) requires that the person has never been adjudicated guilty in this state of a criminal offense, which is any criminal offense rather than a listed few, and measures that as of the date the application for a certificate of eligibility is filed. A certificate from the department is required before a petition, and Statute 943.059(1)(e) requires that the person has never secured a prior sealing or expunction of a criminal history record under that section, Statute 943.0585, former Statute 893.14, former Statute 901.33, or former Statute 943.058. A prior sealing or expunction under any provision on that list defeats eligibility here, so a record that was dealt with once before is a reason to raise this with a lawyer before an application goes in rather than after.",
        ],
      },
      {
        id: "who",
        heading: "Who to call while an internal review is running, and who decides what afterwards",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Early on the decisions are being made inside a company, by people who are not neutral and are not bound by criminal procedure. An internal investigator, an outside accountant, and an insurer each answer to the organization rather than to a court.",
          "Once a report is made, the Office of the State Attorney for the Thirteenth Judicial Circuit decides whether to charge and under which statute, and that decision reaches further than the sentence does. Felony charges are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
          "Who to call, and when. If a charge exists and you cannot afford a lawyer, counsel is addressed at the first appearance: Rule 3.130(b)(1)(B) requires the judge to advise you of the right and that counsel will be appointed, and Rule 3.130(c)(1) requires immediate appointment once the judge determines you are entitled to it and want it. If no charge exists yet, which is the ordinary position while an internal review is running, there is no hearing to raise it at and no appointment will happen on its own. That is the gap specific to these cases: the stage where the record is being assembled is the stage with no court in it, so a defense lawyer is the only route available during it.",
        ],
      },
    ],
    faq: [
      { question: "Is there an embezzlement law in Florida?", source: "drafted", answer: "Not as the title of an offense in the theft chapter. Chapter 812, titled Theft, Robbery, and Related Crimes, is where a case like this is usually charged, and no section in that chapter is titled embezzlement. The chapter does use the word: Statute 812.012(3)(d)1. defines obtains or uses to include conduct previously known as stealing, larceny, purloining, abstracting, embezzlement, misapplication, misappropriation, conversion, or obtaining money or property by false pretenses, fraud, or deception. That is how theft under Statute 812.014 reaches a case that begins with lawful access, without a separate offense having been written for it. Where the accusation covers a series of transactions it may instead be charged as organized fraud under Statute 817.034." },
      { question: "How much do you have to take for it to be a felony in Florida?", source: "drafted", answer: "There is no single number, because it depends on which statute the count is brought under. Charged as theft, Statute 812.014 sets $750 as the general line, and where the property was taken from, what kind of property it was, and prior theft convictions all move that line; the full value ladder belongs with the grand theft charge rather than with this one. Charged as organized fraud under Statute 817.034(4)(a), what is graded is an aggregate value: less than $20,000 is a felony of the third degree, $20,000 or more but less than $50,000 is a felony of the second degree, and $50,000 or more is a felony of the first degree. On either route the figure in an accusation can be a sum of separate transactions rather than one taking. Statute 812.012(10)(c) says amounts of value of separate properties involved in thefts committed pursuant to one scheme or course of conduct, whether the thefts are from the same person or from several persons, may be aggregated in determining the grade of the offense, and Statute 817.034(3)(e)3. says amounts of value of separate properties obtained in one scheme to defraud shall be aggregated in determining the grade under paragraph (4)(a). Both of those turn on a single scheme or course of conduct, and Statute 817.034(3)(d) defines a scheme to defraud for that section as a systematic, ongoing course of conduct, which is something to be proved rather than a way of describing a total." },
      { question: "Does the charging choice change the exposure?", source: "drafted", answer: "It can, and not always as expected. A $25,000 accusation charged as theft is a second degree felony at offense level 6; the same figure as organized fraud is a second degree felony at offense level 5. The degree is identical and the offense level is not, and the offense level is what the scoresheet uses." },
      { question: "Can an embezzlement record be sealed afterwards?", source: "drafted", answer: "It depends on how the case ends. Statute 943.0584(2) bars sealing where the record is a conviction for a listed offense, and the Florida Communications Fraud Act at Statute 817.034 is listed at paragraph (v). Theft under Statute 812.014 is not listed. Because the trigger is the conviction rather than the charge, a case charged under 817.034 that does not end in a conviction on that count is not barred by it." },
      { question: "If I pay the money back, does the case go away?", source: "drafted", answer: "Repayment does not answer the elements of the offense, so it does not by itself end a criminal case. It can be relevant at other stages, including in negotiation and at sentencing, and it may matter to a separate civil claim. Because how a repayment is characterized carries its own consequences, it is a decision to make with a lawyer." },
      { question: "Does it matter that I was allowed to handle the money?", source: "drafted", answer: "It changes which part of the case is in dispute. Because access was authorized at the outset, the argument is rarely about whether property was obtained and is usually about use and intent. Statute 812.014 requires an intent to deprive the owner of a right or benefit, or to appropriate the property to someone not entitled to it, and that is a separate question from whether a transaction happened." },
      { question: "Is this a state case or a federal case?", source: "drafted", answer: "It can be either, and the answer is visible on the paperwork rather than in the conduct. A case brought by the Office of the State Attorney for the Thirteenth Judicial Circuit under Florida law is heard in circuit court in Hillsborough County, and that is the track this page covers. Which system you are in is stated on the charging document and by the court named on it, so that is the first thing to look at, and it is a question to put to a lawyer early because the two tracks run on different rules." },
    ],
    // [NEEDS: Layer 2 targets from the brief] W1-02 names a professional
    // license guide and the 33-day correction guide. Neither has a route yet,
    // so the generic hub stands rather than shipping a broken link.
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // MONEY LAUNDERING, state. From docs/research/briefs/W2-05-money-laundering.md.
  // Migrated to sections 2026-08-14. Overlap pair with the federal page under
  // Section 4.6 and C10: forum section opens the body, exactly one cross-link,
  // no shared body copy. Both halves were written in the same run with the
  // division of labour stated to each.
  //
  // C9: the three tier ladder from $300 across a rolling 12 month window, with
  // even the third degree tier at offense level 7.
  //
  // 896.101(5)(a) reads "exceeding $300", a STRICT threshold, so $300 exactly
  // is outside it. The row carries minExclusive true (D22) and the copy must
  // never say "$300 or more".
  // ---------------------------------------------------------------------
  "white-collar/money-laundering": {
    title: "Money laundering charges under Florida law",
    metaTitle: "Florida Money Laundering Charges, Statute 896.101 | Hines & McCarty",
    metaDescription: "The Florida Money Laundering Act starts above $300 and totals transactions across any 12-month period. The bands, the offense levels, and what the count adds to a scoresheet.",
    lead: "Florida has its own money laundering statute, and its floor is lower than most people expect. Under the Florida Money Laundering Act, Statute 896.101, the lowest felony band starts at financial transactions exceeding $300, totaled across any 12-month period.",
    counterpart: {
      href: "/federal-criminal-defense/money-laundering",
      label: "Federal money laundering charges",
      note: "This page covers the Florida charge: the dollar bands in Statute 896.101(5), the 12-month aggregation window, the Florida offense levels those bands carry, and the state sentencing scoresheet they feed. None of that machinery exists on the federal side, which is calculated a different way under different statutes. If your case is being prosecuted in federal court, the companion page covers it.",
    },
    sections: [
      {
        id: "forum",
        heading: "Two sovereigns read the same bank file, and the order on the account has a venue rule of its own",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "The count tells you which system you are in. A Florida count cites Statute 896.101, is filed by a state prosecutor, and is heard in circuit court, which for this county is the Thirteenth Judicial Circuit. A federal count cites a section of the United States Code and is filed in a United States District Court, which for this county is the Middle District of Florida, Tampa Division. The companion page linked from this section covers the federal charge. It rests on machinery that does not exist in Florida's chapter, and nothing on this page describes it.",
          "The reason the question is genuinely open on this charge, rather than a formality, is that Florida wrote federal filing duties into its own chapter. Statute 896.104(2) makes it a Florida offense to act for the purpose of evading the reporting and registration requirements of chapter 560, chapter 655, or chapter 896, or of 31 U.S.C. s. 5313(a) or s. 5325, and Statute 896.104(3) does the same for s. 5316. A state offense defined by reference to a federal filing obligation is an offense the same institutional records can support in either system. What ties it here is territorial rather than documentary: Statute 896.104(2) requires that some portion of the activity occur in this state.",
          "There is a second forum question on this charge, and it is not about the prosecution at all. Statute 896.101(8)(a) places the civil action over funds in any circuit court where the funds are located or have been deposited. The court that reaches an account is therefore not necessarily the court that would hear a criminal count, and an account opened in another Florida county can be reached where it sits. Statute 896.101(2)(g) then defines who may petition for that order widely enough to include a federal law enforcement agency, so a federal agency can be the moving party in a Florida circuit court under a Florida statute. Reading the agency name and the court on a civil order is a separate exercise from reading the statute number on a charging document, and the answers do not have to match.",
        ],
      },
      {
        id: "floor",
        heading: "Why $300 has to be exceeded, and why the year is a rolling one",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "The $300 figure is the one people get wrong first, and they get it wrong in both directions. Statute 896.101(5)(a) reaches financial transactions exceeding $300 but less than $20,000 in any 12-month period. The word exceeding carries weight: a total of exactly $300 is not inside that paragraph. The band opens above $300, not at it.",
          "The second surprise is that the figure is not one transaction. Subsection (5) grades on financial transactions in any 12-month period, so the total that sets the degree is an aggregate rather than a single transfer. Four movements of $90 spread across ten months are not four small separate questions under that subsection; together they are $360 inside a 12-month period. And the window is not the calendar year and is not measured from the date of arrest. It is any 12 months, so where the window is drawn is part of what the total depends on, and that is an arithmetic question answerable from records rather than a matter of characterization.",
          "Financial transaction is a defined term rather than ordinary usage. Statute 896.101(2)(c) defines it as a transaction involving the movement of funds by wire or other means or involving one or more monetary instruments, which in any way or degree affects commerce, or a transaction involving the transfer of title to any real property, vehicle, vessel, or aircraft, or a transaction involving the use of a financial institution which is engaged in, or the activities of which affect, commerce in any way or degree. Statute 896.101(2)(f) includes virtual currency within monetary instruments, and 896.101(2)(j) defines virtual currency as a medium of exchange in electronic or digital format that is not a coin or currency of the United States or any other country.",
          "Subsection (5) assigns a degree only where the violation involves a total inside one of its three bands, and it states no degree at all for a total of $300 or less. That is not the same as saying nothing attaches below the bands. Statute 896.101(6) allows a fine of not more than $250,000 or twice the value of the financial transactions, whichever is greater, on a finding of guilt or a plea of guilty or nolo contendere, and it states no dollar floor of its own. Statute 896.101(7) makes a person who violates the section liable for a civil penalty of not more than the value of the financial transactions involved or $25,000, whichever is greater, and it states no floor either.",
        ],
      },
      {
        id: "ladder",
        heading: "Three bands, three degrees, and a third degree felony that outranks a second degree theft",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "First degree felony", maximum: "Up to 30 years", offenseLevel: "Level 9", note: "Financial transactions totaling or exceeding $100,000 in any 12-month period, under Statute 896.101(5)(c). The paragraph states no upper bound. The chart entry for this paragraph is worded as financial instruments rather than financial transactions; under Statute 921.0022(2) the statute number and the degree are controlling and the description column is provided solely for descriptive purposes." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 8", note: "Financial transactions totaling or exceeding $20,000 but less than $100,000 in any 12-month period, under Statute 896.101(5)(b). The lower bound here is inclusive: exactly $20,000 is inside this band, not the one below it." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 7", note: "Financial transactions exceeding $300 but less than $20,000 in any 12-month period, under Statute 896.101(5)(a). This is the lowest band the statute grades, and it is ranked at level 7. A grand theft of $20,000 or more but less than $100,000 under Statute 812.014(2)(b)1. is a second degree felony carrying three times the maximum, and the same chart ranks it at level 6. The lowest money laundering band outranks it on the sheet the sentence is actually calculated from." },
          { degree: "Additional fine, no degree assigned", maximum: "The greater of $250,000 or twice the value of the financial transactions", note: "Statute 896.101(6) provides that in addition to the penalties authorized by Statutes 775.082, 775.083, or 775.084, a person found guilty of, or who has pleaded guilty or nolo contendere to, a violation may be sentenced to pay this fine. It attaches with no dollar threshold of its own." },
          { degree: "Additional fine on a second or subsequent violation, no degree assigned", maximum: "The greater of $500,000 or quintuple the value of the financial transactions", note: "The same sentence of Statute 896.101(6) raises the ceiling for a second or subsequent violation of the section. The trigger is the repeat violation rather than any amount, and it does not raise the degree of the offense." },
          { degree: "Civil penalty, no degree assigned", maximum: "The greater of the value of the financial transactions involved or $25,000", note: "Statute 896.101(7) makes a person who violates the section liable for this civil penalty. It is a civil liability rather than a criminal degree, and it too states no minimum transaction value." },
        ],
      },
      {
        id: "stacking",
        heading: "The count that gets added, and the 28 points it adds each time",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "A money laundering count rarely arrives on its own. It sits beside a drug count or a fraud count, and the question the person holding that document actually has is what a further count changes. It is not an aggravating description of the first count. It is a separate offense with its own severity level, so it enters the sentencing arithmetic on a line of its own.",
          "The Criminal Punishment Code worksheet in Statute 921.0024(1)(a) reads offense levels in more than one place, and which table a count before the court lands in depends on whether it is the primary offense. The Primary Offense table scores a single primary offense: a level 7 primary is 56 sentence points, a level 8 is 74, and a level 9 is 92. The Additional Offenses table is scored per count: a level 7 count is 28 points each, a level 8 is 37, and a level 9 is 46. A laundering count riding alongside something else is scored on the second table, once for every count of it. The worksheet also reads levels on its Prior Record table, which scores entries in the prior record rather than counts before the court: an entry ranked at level 7 is 14 points, a level 8 is 19, and a level 9 is 23.",
          "Set that beside the same money charged as theft, because the comparison is where the level does something the degree does not. On the offense severity ranking chart, a grand theft of $10,000 or more but less than $20,000 under Statute 812.014(2)(c)3. is a third degree felony at offense level 4, which is 22 points as a primary offense and 3.6 points as an additional one. A total of $19,000 in financial transactions in a 12-month period under Statute 896.101(5)(a) is also a third degree felony, and it is offense level 7: 56 points as a primary offense and 28 as an additional one. Same degree on the paperwork, same five year maximum, and a different number goes onto the sheet.",
          "Statute 921.0024(2) provides that the lowest permissible sentence is the minimum sentence that may be imposed by the trial court absent a valid reason for departure, and that it is any nonstate prison sanction where the total sentence points equal or are less than 44 points, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximums for the offenses committed, is appropriate. Where the total exceeds 44 points, the same subsection sets the lowest permissible sentence in prison months by subtracting 28 points from the total and decreasing the remainder by 25 percent. It also provides that any sentence to state prison must exceed 1 year, and that the permissible range runs from the lowest permissible sentence up to and including the statutory maximum under Statute 775.082. A single level 7 laundering count contributes 28 points as an additional offense, which is well over half of the 44 before anything else is scored, and 56 points where it is the primary offense, which is already past it.",
          "One provision runs in the other direction, and the level 7 ranking puts it out of reach on this count's points alone. Statute 775.082(10) requires a nonstate prison sanction where the offense was committed on or after July 1, 2009, is a third degree felony but not a forcible felony as defined in Statute 776.08, is not a third degree felony violation under chapter 810, and the total sentence points under Statute 921.0024 are 22 points or fewer. It then adds that if the court makes written findings that a nonstate prison sanction could present a danger to the public, the court may sentence the offender to a state correctional facility. Twenty-two points is below both of the level 7 figures above, so that route is not reached by the arithmetic of a laundering count itself.",
          "How that count is defended is a question about records rather than about narrative. What the money is said to have come from is one line of inquiry, whether the transactions the State has gathered belong inside a single 12-month window is another, and whether the statutory purpose in subsection (3) is established at all is a third. Each of those is examined against documents that already exist.",
        ],
      },
      {
        id: "elements",
        heading: "The definitions in subsection (2) are where a laundering count is decided",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "A financial transaction, or an attempt at one. Statute 896.101(2)(a) defines conducts to include initiating, concluding, or participating in initiating or concluding a transaction, which reaches a person who took part in arranging a transfer and not only the person who moved the money.",
          "Knowledge that the property involved represents the proceeds of some form of unlawful activity. Statute 896.101(2)(e) defines that phrase, and the definition is looser than the words look: it means the person knew the property represented proceeds from some form, though not necessarily which form, of activity that constitutes a felony under state or federal law, regardless of whether that activity is specified in paragraph (h).",
          "That the transaction in fact involved the proceeds of specified unlawful activity. Statute 896.101(2)(h) defines specified unlawful activity as any racketeering activity as defined in Statute 895.02. That cross-reference is where the State has to identify what the money is said to have come from, and it is a separate question from what the defendant knew.",
          "What knowing means changes above $10,000. Statute 896.101(2)(d) defines knowing as that a person knew, or, with respect to any transaction or transportation involving more than $10,000 in U.S. currency or foreign equivalent, should have known after reasonable inquiry, unless the person has a duty to file a federal currency transaction report, IRS Form 8300, or a like report under state law and has complied with that reporting requirement in accordance with law. Above that figure the definition reaches what someone should have known after reasonable inquiry, and the compliance clause sits in the same sentence as the standard it qualifies.",
          "One of the purposes the statute names. Under Statute 896.101(3)(a) the conduct is unlawful where it is done with the intent to promote the carrying on of specified unlawful activity, or knowing that the transaction is designed in whole or in part to conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity, or to avoid a transaction reporting requirement or money transmitters' registration requirement under state law. Subsection (3) reaches further conduct as well, including transporting or attempting to transport a monetary instrument or funds under paragraph (b), and conduct involving property that an investigative or law enforcement officer represents as being derived from specified unlawful activity under paragraph (c), which is the paragraph an undercover operation is built on.",
          "The dollar total across the 12-month period. That figure sets the degree under subsection (5). It is not what makes the conduct unlawful under subsection (3), which is a separate part of the statute with no amount in it.",
          "Statute 896.101(4) removes several arguments before they are made. It provides that it does not constitute a defense that any stratagem or deception, including the use of an undercover operative or law enforcement officer, was employed; that a facility or an opportunity to engage in conduct in violation of the act was provided; or that a law enforcement officer, or a person acting under an officer's direction, solicited a person predisposed to engage in the conduct in order to gain evidence against that person, provided such solicitation would not induce an ordinary law-abiding person to violate the chapter. The subsection closes with the sentence that it does not preclude the defense of entrapment, and that sentence is part of the rule.",
          "Statute 896.101(11) changes a rule of evidence for prosecutions brought under the chapter. The common law corpus delicti rule does not apply, and a defendant's confession or admission is admissible at trial without the state having to prove the corpus delicti if the court finds, in a hearing conducted outside the presence of the jury, that the statement is trustworthy; before it is admitted, the state must prove by a preponderance of the evidence that there is sufficient corroborating evidence tending to establish trustworthiness, and hearsay is admissible at that hearing. A statement made early in one of these cases sits under a different rule than it would in most chapters of the criminal code.",
        ],
      },
      {
        id: "freeze",
        heading: "The order that can reach the accounts before anything is decided, and the ten days written on it",
        kind: "prose",
        answers: ["consequences"],
        prose: [
          "The section that creates the offense also creates a way to reach the money while the criminal case is still at its beginning, and it is a civil proceeding running alongside rather than a part of the prosecution. Under Statute 896.101(8)(a), where a person is alienating or disposing of monetary instruments or funds, or appears likely to or demonstrates an intent to do so, a petitioner may commence a civil action in any circuit court where the funds are located or have been deposited, for a temporary injunction prohibiting any person from withdrawing, transferring, removing, dissipating, or disposing of those funds or funds of equivalent value. Statute 896.101(2)(g) defines petitioner widely enough that the office which freezes an account is not necessarily the office prosecuting the count: it means any local, county, state, or federal law enforcement agency, the Attorney General, any state attorney, or the statewide prosecutor.",
          "The order is entered without the account holder present. Statute 896.101(8)(c) provides that it is entered upon application of the petitioner, ex parte and without notice or opportunity for a hearing with respect to the funds. Statute 896.101(8)(b) provides that it must be granted without bond to the petitioner, and that the court may authorize a respondent to post a bond equal to the amount enjoined and have the injunction dissolved. Statute 896.101(8)(a) also directs the court to take into account any anticipated impact the injunction will have on innocent third parties or businesses, balanced against the petitioner's need to preserve the funds.",
          "It is short, and the deadlines around it are shorter. Under Statute 896.101(8)(d) the temporary order expires not more than 10 days after the date on which it is served, unless extended for good cause shown or unless the party against whom it is entered consents to a longer period. Under Statute 896.101(8)(g)1. the petitioner must immediately notify both the person or entity in possession of the funds and the owner if known, by certified mail with return receipt requested or by personal service, so that the notice is received within 72 hours, and 896.101(8)(g)2. provides that the notice must advise that a hearing will be held within 3 days of the request and that the hearing is set and noticed by the person against whom the order is served. Under Statute 896.101(8)(h) only the lawful owner or the account holder may request that hearing, notice of it must reach the petitioner not less than 24 hours beforehand, and the court may receive and consider evidence and information that would be inadmissible under the Florida Rules of Evidence.",
          "Two things inside that block are worth knowing before the hearing rather than after it. Statute 896.101(8)(g)3. requires the notice to state specifically that the lawful owner has the right to produce evidence of legitimate business expenses, obligations, and liabilities, including but not limited to employee payroll expenses verified by current reemployment assistance records, employee workers' compensation insurance, employee health insurance, state and federal taxes, and regulatory or licensing fees, only as may become due before the temporary order expires; Statute 896.101(8)(g)4. then sets out how the court reviews those expenses and how payment is made to court-ordered payees. And Statute 896.101(8)(e) provides that if at any time the petitioner discovers that the funds sought to be enjoined total less than $10,000, the petitioner shall immediately inform the court and the court shall immediately dissolve the temporary injunction.",
          "What happens when the order runs out is set out in Statute 896.101(8)(f). At or before its termination the petitioner may obtain a warrant or other court order and seize the funds and initiate a civil forfeiture action; may obtain a warrant or other court order and seize them for a subsequent criminal prosecution; or may petition the court to extend the order for a period not longer than 10 days from the original order's termination date, after which the subsection says no additional extensions may be granted. Separately, Statute 896.101(9)(a) allows a petitioner to request a warrant authorizing seizure of property, monetary instruments, or funds subject to civil forfeiture in the same manner as provided for search warrants in chapter 933.",
          "One further provision explains a silence people notice afterwards. Statute 896.101(10) gives immunity to a financial institution, licensed money services business, or other person that complies with a warrant, temporary injunction, or other court order, including a subpoena issued under Statute 16.56 or Statute 27.04, and provides that where such a subpoena contains a nondisclosure provision, the institution and its employees and officers may not notify the customer whose records are sought, directly or indirectly, about the existence or the contents of the subpoena or about what has been furnished in response. Bank records can be produced in one of these investigations without the account holder being told.",
        ],
      },
      {
        id: "structuring",
        heading: "Statute 896.104 is a separate offense, and it does not need a transaction over $10,000",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 896.104, the 2025 Florida Statutes",
          body: "Structuring is charged under its own section, titled Structuring transactions to evade reporting or registration requirements prohibited, and it is not a variation on the laundering count. Statute 896.104(1) defines structure and structuring to mean that a person, acting alone or in conjunction with or on behalf of other persons, conducts or attempts to conduct one or more transactions in currency, in any amount, at one or more financial institutions, on one or more days, in any manner, for the purpose of evading currency transaction reporting requirements provided by state or federal law. The same subsection says that in any manner includes, but is not limited to, the breaking down of a single sum of currency exceeding $10,000 into smaller sums, including sums at or below $10,000, or the conduct of a transaction or series of currency transactions at or below $10,000, and it states expressly that the transaction or transactions need not exceed the $10,000 reporting threshold at any single financial institution on any single day in order to meet the definition. The purpose of evading a reporting requirement is what the section is built on rather than any particular amount. Statute 896.104(2) prohibits a range of conduct done for the purpose of evading the reporting and registration requirements of chapter 560, chapter 655, or chapter 896, or 31 U.S.C. s. 5313(a) or s. 5325, where some portion of the activity occurs in this state, including at paragraph (c) structuring or assisting in structuring, or attempting to do either, any financial transaction with or involving one or more financial institutions in this state. Statute 896.104(3) does the same for international monetary instrument transactions and 31 U.S.C. s. 5316, including at its paragraph (c) structuring or assisting in structuring any importation or exportation of currency or monetary instruments or funds to, from, or through financial institutions in this state. The criminal penalties in Statute 896.104(4)(a) run on the same three bands as the laundering statute and are ranked at the same three levels: financial transactions exceeding $300 but less than $20,000 in any 12-month period is a felony of the third degree at offense level 7 under 896.104(4)(a)1.; totaling or exceeding $20,000 but less than $100,000 is a felony of the second degree at level 8 under 896.104(4)(a)2.; and totaling or exceeding $100,000 is a felony of the first degree at level 9 under 896.104(4)(a)3. Statute 896.104(4)(b) adds the same fine provision the laundering section carries, up to the greater of $250,000 or twice the value of the financial transactions, rising for a second or subsequent violation to the greater of $500,000 or quintuple that value, and 896.104(4)(c) adds a civil penalty of not more than the value of the transactions involved or $25,000, whichever is greater. Statute 896.104(5) supplies an evidentiary inference rather than a penalty: proof that a person engaged for monetary consideration in the business of a money transmitter, as defined in Statute 560.103, was transporting more than $10,000 in currency or the foreign equivalent without being licensed as a money transmitter or designated as an authorized vendor under chapter 560 gives rise to an inference that the transportation was done with knowledge of the licensure requirements of chapter 560 and the reporting requirements of the chapter. Statute 896.104(6) closes by providing that the section may not be construed to require any new or additional reporting requirements on any entity obligated to file reports under state or federal law.",
        },
      },
      {
        id: "clocks",
        heading: "A 12-month window measured backward, a 10-day order measured forward, and the filing deadline that depends on where the window sits",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "Within 24 hours of arrest", what: "First appearance. Rule 3.130(a) provides that except when previously released in a lawful manner, every arrested person must be taken before a judge, either in person or by audio-video communication technology in the discretion of the court, within 24 hours of arrest, and Rule 3.130(d) has that judge proceed to determine pretrial detention or conditions of release under rule 3.132 or rule 3.131. Someone previously released in a lawful manner sits outside that requirement. Nothing at that hearing reaches the accounts. Those run on the separate civil clock in the entries that follow, down to the expiry of the temporary order." },
          { when: "Within 72 hours of service of a temporary injunction", what: "Notice to the person or entity holding the funds and to the known owner, under Statute 896.101(8)(g)1. The mechanics are set out in the account-freeze section above. What belongs on a timeline is the trigger: this clock starts on service of the civil order, not on the arrest and not on a filing decision." },
          { when: "Within 3 days of the request, or as soon as practicable after it", what: "The hearing on the enjoined funds. Statute 896.101(8)(h) provides that a hearing must be held within 3 days after the request or as soon as practicable thereafter and before the expiration of the temporary order. A court does not set it on its own motion. The lawful owner or the account holder requests it, sets it, and notices it, with notice reaching the petitioner not less than 24 hours beforehand. A person waiting to be told when the hearing is has misread who moves first." },
          { when: "Not more than 10 days after service, extendable", what: "Expiry of the temporary injunction. Statute 896.101(8)(d) provides that the temporary order expires not more than 10 days after the date on which the order is served, unless extended for good cause shown or unless the party against whom it is entered consents to an extension for a longer period. Statute 896.101(8)(f)3. separately allows the petitioner to petition the court to extend the order for a period not longer than 10 days from the original order's termination date, and states that the petitioner may not be granted any additional extensions. This is the shortest interval on the page, and it can run out before the deadline to file the criminal charge is reached." },
          { when: "30 days in custody, 60 days on pretrial release", what: "Rule 3.134 sets the State's deadline to file formal charges: 30 days under 3.134(a) for someone held, 60 days under 3.134(b) for someone released, each with release on recognizance shortly after if the deadline passes and an extension on good cause. Release under the rule is not a dismissal, and a filing can follow it." },
          { when: "175 days from the formal charge", what: "Rule 3.191(a) sets the felony period, and Rule 3.191(d) fixes its start at the information or indictment rather than at the arrest. Subdivision (o) supplies a recapture procedure where the period passes. Rule 3.191(b) allows a defendant to demand trial within 60 days instead." },
          { when: "3 years on the third and second degree bands, 4 years on the first degree band", what: "The limitation period under Statute 775.15(2)(b) and Statute 775.15(2)(a). On this charge the period is set by the degree, and the degree is set by the dollar total inside a 12-month window under Statute 896.101(5). Where that window is drawn therefore moves the filing deadline as well as the exposure, which is not true of a charge built on a single dated incident." },
          { when: "Counted from the day after the offense is committed", what: "Statute 775.15(3) provides that an offense is committed either when every element has occurred or, if a legislative purpose to prohibit a continuing course of conduct plainly appears, at the time when the course of conduct or the defendant's complicity in it is terminated, and that time starts to run on the day after. A charge graded on transactions aggregated across any 12-month period puts that choice directly in issue, because the earliest transaction in a window and the last one do not share a date of commission. Which branch applies to a chapter 896 count is a question the wording raises rather than one the statute answers, and it is a question to put on the specific charging document." },
          { when: "Up to 3 additional years, and no further", what: "Statute 775.15(5) stops the period from running while a defendant is continuously absent from the state or has no reasonably ascertainable place of abode or work within it, and caps that extension at 3 years beyond the period otherwise applicable. Time spent outside Florida is an ordinary feature of facts about transfers, and it has a ceiling." },
          { when: "A separate deadline that may or may not apply here", what: "Statute 775.15 gives longer periods to some offenses by name, including chapter 517 and s. 409.920 at Statute 775.15(8) and ss. 817.5695, 825.102 and 825.103 at Statute 775.15(10)(a). Chapter 896 is not among the statutes those provisions name. Statute 775.15(12)(a) works differently: it permits commencement within 1 year after discovery of an offense a material element of which is fraud or a breach of fiduciary obligation, capped at 3 years beyond the period otherwise applicable. Fraud is not written into the elements of Statute 896.101, whose subsection (3) names purposes instead, so whether that provision reaches a laundering count is a question about the count charged rather than a settled reading. Raise it on the document; do not assume it in either direction." },
        ],
      },
      {
        id: "now",
        heading: "The records sit with institutions that are not you, and one of them may be barred from calling",
        kind: "guidance",
        answers: ["now", "who"],
        guidance: [
          {
            heading: "What a case built on transfers asks you to account for",
            items: [
              "Declining to answer questions is a right held at every stage, and no reason has to be given for using it.",
              "The questions in this kind of case are about the origin of a deposit, why a sequence of transfers looks the way it does, and how the person asked is connected to an account. People answer those approximately, from memory, while the underlying records are exact. That gap between an approximate account and an exact record is itself something that goes into the file.",
              "Above $10,000 the statute asks what inquiry was made. The definition of knowing at Statute 896.101(2)(d), set out in the elements section above, reaches what a person should have known after reasonable inquiry at that figure. A description of what was or was not asked at the time is therefore not context around the element. It sits inside it.",
              "A request for consent here is usually a request about records, devices, and account credentials rather than about a place, and consent can be declined. Statute 896.101(9)(a) sets out the route used instead, a warrant for property, monetary instruments, or funds subject to civil forfeiture, requested in the same manner as provided for search warrants in chapter 933.",
              "Counsel attaches at the earliest of formal charge, as soon as feasible after custodial restraint, or first appearance, under Rule 3.111(a). Retaining a lawyer does not wait for any of those points, and appointment for a person who cannot pay is addressed at the first hearing.",
            ],
          },
          {
            heading: "Who is holding the file, and who is not permitted to tell you",
            items: [
              "The banks, money services businesses, and payment processors whose records assemble this case are not parties to it. That has an edge to it in each direction. The material exists already and can be examined in discovery rather than reconstructed from recollection, and it was fixed in its final form before anyone was asked a question about it.",
              "An institution served with a subpoena carrying a nondisclosure provision is barred by Statute 896.101(10) from notifying the customer whose records are sought, directly or indirectly, about the subpoena or about what it produced in response. Silence from a bank carries no information about whether an investigation exists.",
              "Where funds have been frozen, the agency named on the civil order is not necessarily the office deciding the criminal count, so the caption on that order is worth reading rather than assuming. The hearing about those funds happens because the lawful owner or the account holder asks for it under Statute 896.101(8)(h).",
              "Charging decisions for this county are made by the Office of the State Attorney for the Thirteenth Judicial Circuit.",
              "The court file sits with the Hillsborough County Clerk. Circuit criminal: Edgecomb Courthouse, 800 E. Twiggs Street, Room 101. Criminal court services: Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
              "Contacting a defense lawyer is the step that does not depend on a court date, and on this charge the civil clock over the accounts can be running while the criminal one has not started.",
            ],
          },
        ],
      },
      {
        id: "record",
        heading: "Chapter 896 is off the permanent bar list, and the misdemeanor filed beside it may not be",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "Until a record is sealed or expunged it is public, and an allegation about moving money is read closely by the banks, regulators, and counterparties whose business is moving it. So the sealing question tends to outlast everything else here, and it starts with Statute 943.0584(2), the permanent bar. That subsection works by naming offenses rather than by grading them, and chapter 896 is not among the offenses it names at paragraphs (a) through (gg). Stopping there would be the wrong check. Paragraph (hh) reaches any violation specified as a predicate offense for registration as a sexual predator under Statute 775.21 or a sexual offender under Statute 943.0435, without regard to whether that offense alone is sufficient to require registration, so the named paragraphs do not close the list. Chapter 896 does not appear in those two predicate lists either. A money laundering conviction is not itself permanently barred, and that answer comes from checking past the named paragraphs rather than from reading them.",
          "The result sits oddly beside what the same subsection does bar, and the comparison matters because these counts get filed together. Paragraph (2)(v) puts a violation of the Florida Communications Fraud Act, Statute 817.034, on the list, and Statute 943.0584 states no dollar threshold of its own, so the bar reaches the bottom of that statute's ladder. That bottom is Statute 817.034(4)(b)2., communications fraud where the value of the property obtained or endeavored to be obtained by the communication is less than $300, which is a misdemeanor of the first degree. A conviction there is permanently ineligible for court-ordered sealing. A conviction under Statute 896.101(5)(c), a felony of the first degree resting on financial transactions totaling or exceeding $100,000, is not on the list. The permanent bar is keyed to which offense it is, not to how serious it is, and on a charging document carrying a laundering count next to a fraud count, the smaller-looking count can be the one that closes the record.",
          "That comparison bites because sealing is not decided count by count. Statute 943.059(4)(c) makes the unit of an order one arrest or one incident of alleged criminal activity, adds that a court may include additional arrests where they directly relate to the original arrest, and adds that a court may seal a portion of a record pertaining to one arrest. A chapter 896 count rarely arrives alone, so the eligibility question on this charge is usually a question about the company it was filed in. Paragraphs (2)(ff) and (2)(gg) do similar work for manufacturing a controlled substance in violation of chapter 893 and for drug trafficking under Statute 893.135, which are the other counts a laundering charge commonly travels with. Statute 943.059(4)(e) also states that the section confers no right to sealing and that a request may be denied in the court's discretion.",
          "The word conviction is doing unfamiliar work throughout that bar. Statute 943.0584(1) defines it, for that section, to include the entry of a plea of guilty or nolo contendere regardless of whether adjudication is withheld, and to include a juvenile finding on the same terms. Where a multi-count case resolves with a withhold on the fraud or trafficking count, the record still answers to the bar, which is the opposite of the intuition most people bring to a withhold.",
          "A route exists that involves no petition, and a multi-count case is where it falls away. Statute 943.0595(2)(a) has the department seal a record automatically where the record does not result from a charging document for a forcible felony as defined in Statute 776.08 or for an offense enumerated in Statute 943.0435(1)(h)1.a.(I), and where one of the events it lists has occurred, with the clerk transmitting a certified copy of the disposition under Statute 943.0595(3)(a). Read those events closely where there is more than one count, because they include routes at subparagraphs 2., 3., and 4. that are written as to all counts, so a case in which one count ends in a conviction while others fall away does not reach them. Note as well that Statute 776.08 closes with any other felony which involves the use or threat of physical force or violence against any individual, so the forcible felony exclusion is not a fixed roster to be checked against.",
          "Licensure is not settled on this page. A money transmitter or an authorized vendor holds that status under chapter 560, which Statute 896.104(5) refers to, and a financial professional answers to the regulator that issues the credential. Those bodies apply their own standards to a criminal history record, and none of those standards are set out here. Immigration consequences run on federal law and belong with an immigration attorney rather than being inferred from a Florida statute.",
        ],
      },
    ],
    faq: [
      { question: "What is money laundering under Florida law, as opposed to federal law?", source: "brief W2-05 Section 3, question 1", answer: "Florida prosecutes it under the Florida Money Laundering Act, Statute 896.101. That statute grades the offense by a dollar total measured across any 12-month period: financial transactions exceeding $300 but less than $20,000 is a third degree felony under 896.101(5)(a), $20,000 or more but less than $100,000 is a second degree felony under 896.101(5)(b), and $100,000 or more is a first degree felony under 896.101(5)(c). Each of those carries an offense level on Florida's offense severity ranking chart, which feeds a state sentencing scoresheet under Statute 921.0024. A federal money laundering charge is brought under different statutes in a United States District Court, and none of the Florida bands, levels, or scoresheet apply to it. The charging document names which statute is charged." },
      { question: "How much money makes it money laundering in Florida?", source: "brief W2-05 Section 3, question 2", answer: "Less than most people assume, and it is a running total rather than a single transaction. The lowest band, Statute 896.101(5)(a), covers financial transactions exceeding $300 but less than $20,000 in any 12-month period, and it is a third degree felony carrying up to 5 years. The word exceeding matters: a total of exactly $300 is not inside that band. The degree rises at $20,000 under 896.101(5)(b) and again at $100,000 under 896.101(5)(c). Because subsection (5) measures transactions across any 12-month period, several small transfers can be added together to reach a band. A dollar total is only part of the offense: subsection (3) separately requires knowledge and one of the purposes it names." },
      { question: "What is the difference between money laundering and structuring?", source: "brief W2-05 Section 3, question 5", answer: "They are separate offenses in separate sections of the same chapter. Money laundering is Statute 896.101, and it turns on transactions involving the proceeds of specified unlawful activity, which Statute 896.101(2)(h) defines as any racketeering activity as defined in Statute 895.02. Structuring is Statute 896.104, and it turns on purpose rather than on where the money came from: Statute 896.104(1) defines it as conducting or attempting to conduct one or more transactions in currency, in any amount, at one or more financial institutions, on one or more days, in any manner, for the purpose of evading currency transaction reporting requirements provided by state or federal law, and states that the transactions need not exceed the $10,000 reporting threshold at any single financial institution on any single day. The two sections use the same three dollar bands and the same three offense levels: the lowest band opens above $300 and is level 7, the next runs from $20,000 and is level 8, and the highest runs from $100,000 and is level 9, each measured over any 12-month period." },
      { question: "Do they have to prove where the money came from?", source: "brief W2-05 Section 3, question 6", answer: "Under Florida's statute the source is part of the case rather than background to it, but the statute splits the question in two. Statute 896.101(3)(a) requires that the transaction in fact involved the proceeds of specified unlawful activity, and Statute 896.101(2)(h) defines that term as any racketeering activity as defined in Statute 895.02, so the State has to place the source inside that cross-reference. The knowledge element is written more loosely. Statute 896.101(2)(e) provides that knowing the property represents the proceeds of some form of unlawful activity means the person knew it represented proceeds from some form, though not necessarily which form, of activity that constitutes a felony under state or federal law. A person can therefore be alleged to have had the required knowledge without being alleged to have known which offense produced the money." },
      { question: "Can they freeze my accounts before I am convicted?", source: "brief W2-05 Section 3, question 7", answer: "The Florida statute contains a civil mechanism that runs alongside the criminal case. Statute 896.101(8)(a) allows a petitioner to commence a civil action in circuit court for a temporary injunction prohibiting withdrawal, transfer, removal, dissipation, or disposal of monetary instruments or funds, or funds of equivalent value, where a person is alienating or disposing of them or appears likely to. Statute 896.101(8)(c) provides that the order is entered ex parte and without notice or opportunity for a hearing as to the funds. It is time limited: Statute 896.101(8)(d) has it expire not more than 10 days after service unless extended for good cause or by consent. Notice must be received within 72 hours under 896.101(8)(g)1., and under 896.101(8)(h) the lawful owner or account holder may request a hearing, which must be held within 3 days of the request or as soon as practicable and before the order expires. Statute 896.101(8)(e) requires the court to dissolve the injunction immediately if the petitioner discovers the enjoined funds total less than $10,000." },
      { question: "Why is money laundering charged on top of the drug or fraud count?", source: "brief W2-05 Section 3, questions 3 and 8", answer: "Because it is a separate offense with its own severity level rather than an aggravating description of the first count, so it changes the sentencing arithmetic on a line of its own. On the offense severity ranking chart at Statute 921.0022, money laundering is ranked at level 7 in its lowest band under 896.101(5)(a), level 8 under 896.101(5)(b), and level 9 under 896.101(5)(c). The Criminal Punishment Code worksheet in Statute 921.0024(1)(a) scores an additional offense at level 7 at 28 sentence points per count, level 8 at 37, and level 9 at 46, and scores a primary offense at those levels at 56, 74, and 92. Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where total sentence points equal or are less than 44 points, unless the court within its discretion determines a prison sentence is appropriate, and sets a formula above 44 points. A single added laundering count is a substantial part of that total before anything else is scored." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // MONEY LAUNDERING, federal. From docs/research/briefs/FED-01-money-laundering.md.
  // Migrated to sections 2026-08-14. The other half of the C10 overlap pair.
  //
  // BINDING CONSTRAINT, plan Section 4.6.2: this page rests on the PREDICATE
  // LIST, the ABSENCE of a dollar threshold, and FEDERAL SENTENCING, and may
  // not restate conduct language near-identical to Florida's. The Florida
  // sibling owns the dollar bands, the 12 month window, the Florida offense
  // levels and the state scoresheet.
  //
  // No Florida degree and no offense level: F.S. 921.0022 does not rank
  // federal statutes. Penalty rows use "no degree assigned" with the term of
  // years in the note. Florida sealing statutes do not reach a federal
  // conviction, so the sealing question is answered for a federal case.
  // ---------------------------------------------------------------------
  "federal/money-laundering": {
    title: "Federal money laundering charges in the Middle District of Florida",
    metaTitle: "Federal Money Laundering Charges, 18 U.S.C. 1956 | Hines & McCarty",
    metaDescription: "18 U.S.C. 1956 sets no dollar minimum. The case turns on the predicate list at 1956(c)(7), what 1957's $10,000 line changes, and how these are sentenced.",
    lead: "There is no minimum amount in 18 U.S.C. 1956. A federal money laundering charge turns on whether the money came from an offense the statute lists at 1956(c)(7). The companion section, 1957, is the one with a $10,000 figure in it.",
    counterpart: {
      href: "/white-collar-defense/money-laundering",
      label: "Money laundering charges under Florida law",
      note: "Florida prosecutes money laundering under its own statute, and the two charges are not two versions of one case. The Florida offense is graded by the amount of the transactions, and it carries a Florida offense level that feeds a state sentencing scoresheet. A charge under 18 U.S.C. 1956 has no amount element, carries no Florida offense level because F.S. 921.0022 does not rank federal statutes, and is heard in the United States District Court rather than in a Florida circuit court. The statute number and the court named on the charging document tell you which of the two you are reading about.",
    },
    sections: [
      {
        id: "forum",
        heading: "Whether the number on the charging document says 1956 or 896.101",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "The description of the prohibited conduct in the federal statute and in the Florida Money Laundering Act reads almost the same, and that is the least useful fact about either case. The similarity stops at the description. What the predicate can be, whether an amount matters at all, which office files the charge, which courthouse hears it, and how a sentence is calculated are each different, and this page is about the federal side of that split. The Florida side is covered on the page linked from this one.",
          "A federal charge is heard in the United States District Court. Hillsborough County sits in the Middle District of Florida, Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue. The Tampa Division covers Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, and Sarasota counties. The prosecuting office is the United States Attorney's Office for the Middle District of Florida.",
          "Which district can hear the case is written into the money laundering statute itself, and it reaches further than where you live or bank. Except as provided in its own paragraph (2), 18 U.S.C. 1956(i)(1) allows a prosecution under 1956 or 1957 to be brought in any district in which the financial or monetary transaction is conducted, and also in any district where a prosecution for the underlying specified unlawful activity could be brought, if the defendant participated in the transfer of the proceeds of that activity from that district to the district where the transaction was conducted. Paragraph (2) puts venue for an attempt or a conspiracy in the district where venue would lie for the completed offense, or in any other district where an act in furtherance of it took place. And 1956(i)(3) provides that a transfer of funds from one place to another, by wire or any other means, is a single continuing transaction, and that any person who conducts any portion of that transaction may be charged in any district in which it takes place.",
        ],
      },
      {
        id: "restraint",
        heading: "The bank accounts are dealt with before the trial is",
        kind: "prose",
        answers: ["consequences"],
        prose: [
          "For most people charged under these sections the first real consequence is not the sentence. It is that the money stops moving. 18 U.S.C. 1956(b)(3) provides that a court may issue a pretrial restraining order or take any other action necessary to ensure that any bank account or other property held by the defendant in the United States is available to satisfy a judgment under that section. It is available before trial and it carries no dollar floor.",
          "The same subsection reaches further than one account. Under 18 U.S.C. 1956(b)(4)(A) a court may appoint a Federal Receiver to collect, marshal, and take custody, control, and possession of all assets of the defendant, wherever located, to satisfy a civil judgment under that subsection, a forfeiture judgment under section 981 or 982, or a criminal sentence under section 1957 or subsection (a), including an order of restitution to any victim of a specified unlawful activity. Under 1956(b)(4)(B) the receiver may be appointed on the application of a federal prosecutor or a federal or state regulator, is an officer of the court with the powers set out in 28 U.S.C. 754, and has standing equivalent to that of a federal prosecutor for the purpose of requesting information about the defendant's assets, including from the Financial Crimes Enforcement Network of the Department of the Treasury.",
          "Forfeiture on a conviction is not discretionary, and it is not measured by what anyone gained. 18 U.S.C. 982(a)(1) provides that in imposing sentence on a person convicted of an offense in violation of section 1956, 1957, or 1960, the court shall order that the person forfeit to the United States any property, real or personal, involved in such offense, or any property traceable to such property. Property involved in the offense is a wider measure than proceeds obtained, which is the measure 982(a)(2) applies to the fraud offenses it lists. One limit on that machinery sits at 982(b)(2): the substitution of assets provisions of 21 U.S.C. 853(p) may not be used to order a defendant to forfeit assets in place of the actual property laundered where the defendant acted merely as an intermediary who handled but did not retain the property in the course of the money laundering offense, unless the defendant, in committing the offense or offenses giving rise to the forfeiture, conducted three or more separate transactions involving a total of $100,000 or more in any twelve month period.",
          "Two further consequences are written into the statutes rather than left to practice. Under 18 U.S.C. 1956(g), if a financial institution or any officer, director, or employee of one has been found guilty of an offense under section 1956, 1957, or 1960 of title 18, or under 31 U.S.C. 5322 or 5324, the Attorney General shall provide written notice of that fact to the appropriate regulatory agency for the institution. And 18 U.S.C. 1957(f)(1), in defining what a monetary transaction is for that section, excludes any transaction necessary to preserve a person's right to representation as guaranteed by the sixth amendment to the Constitution.",
        ],
      },
      {
        id: "clocks",
        heading: "Thirty days from arrest to indictment, seventy from indictment or appearance in the charging court, whichever is later",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "The investigative period, which can run for years before you hear anything", what: "These charges usually surface after work nobody outside it can see. 18 U.S.C. 1956(e) gives investigative authority over violations of the section to such components of the Department of Justice as the Attorney General may direct and such components of the Department of the Treasury as the Secretary of the Treasury may direct, as appropriate, to components of the Department of Homeland Security for offenses over which that department has jurisdiction, and to the Postal Service for offenses over which it has jurisdiction. The same subsection adds that violations involving the environmental offenses described in 1956(c)(7)(E) may be investigated by such components of the Department of Justice as the Attorney General may direct, and by the National Enforcement Investigations Center of the Environmental Protection Agency. What is running during that stage is the limitations period. 18 U.S.C. 3282(a) provides that except as otherwise expressly provided by law, no person shall be prosecuted, tried, or punished for any offense, not capital, unless the indictment is found or the information is instituted within five years next after the offense was committed. That opening qualifier is part of the rule, because other provisions set other periods, and one of them is inside this statute: 18 U.S.C. 1956(j) gives seven years, notwithstanding section 3282, where the specified unlawful activity constituting the violation is a foreign offense defined in 1956(c)(7)(B)." },
          { when: "Thirty days from the arrest or the summons", what: "18 U.S.C. 3161(b) requires that any information or indictment charging an individual with the commission of an offense be filed within thirty days from the date on which that individual was arrested or served with a summons in connection with the charges. If the individual has been charged with a felony in a district in which no grand jury has been in session during that thirty day period, the period for filing the indictment is extended an additional thirty days." },
          { when: "Seventy days from the indictment or from the appearance, whichever comes last", what: "Under 18 U.S.C. 3161(c)(1), in a case in which a plea of not guilty is entered, trial must commence within seventy days from the filing date, and making public, of the information or indictment, or from the date the defendant has appeared before a judicial officer of the court in which the charge is pending, whichever date last occurs." },
          { when: "No sooner than thirty days after the first appearance through counsel", what: "18 U.S.C. 3161(c)(2) provides that unless the defendant consents in writing to the contrary, trial must not commence less than thirty days from the date on which the defendant first appears through counsel or expressly waives counsel and elects to proceed pro se. It is a floor on how fast a case can be brought to trial, not a schedule for it." },
          { when: "Throughout, the excluded periods", what: "18 U.S.C. 3161(h) lists periods of delay that are excluded from both computations above, including delay resulting from any pretrial motion, from the filing of the motion through the conclusion of the hearing on it or other prompt disposition, delay resulting from any interlocutory appeal, and delay resulting from the court's consideration of a proposed plea agreement. The seventy days is a count with stoppages built into it rather than seventy days on a calendar." },
        ],
      },
      {
        id: "records",
        heading: "The transfers already exist in somebody's records",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are running before any of this is decided",
            items: [
              "You have the right to decline to answer questions. It is available at every stage and it does not have to be justified.",
              "A lawyer can be retained at any point, and that does not wait for a charge. Appointed counsel is a separate route with its own trigger. 18 U.S.C. 3006A(a) requires each United States district court to operate a plan for furnishing representation to any person financially unable to obtain adequate representation, and 3006A(a)(1)(A) covers a financially eligible person charged with a felony.",
              "Under 18 U.S.C. 3006A(b), where a person entitled to representation under the plan appears without counsel, the magistrate judge or the court must advise that person of the right to be represented by counsel and that counsel will be appointed if the person is financially unable to obtain counsel, and, unless representation is waived, must appoint counsel after appropriate inquiry into whether the person is financially unable to obtain it.",
              "Under 18 U.S.C. 3006A(c), a person for whom counsel is appointed is represented at every stage of the proceedings from the initial appearance before the magistrate judge or the court through appeal, including ancillary matters appropriate to the proceedings.",
            ],
          },
          {
            heading: "Where a laundering accusation gets complicated",
            items: [
              "Moving, consolidating, or closing accounts after learning that an investigation exists. Each transfer is conduct in its own right, and 18 U.S.C. 1956(i)(3) treats a transfer of funds from one place to another, by wire or any other means, as a single continuing transaction chargeable in any district in which it takes place.",
              "Explaining transfers to a bank, an accountant, a business partner, or an investigator without counsel. Note both halves of 18 U.S.C. 1956(a)(3). Its conduct clause covers conducting or attempting to conduct a financial transaction involving property represented to be the proceeds of specified unlawful activity, or property used to conduct or facilitate specified unlawful activity, and the paragraph reaches that conduct only where it is done with one of the three intents it sets out first: to promote the carrying on of specified unlawful activity, to conceal or disguise the nature, location, source, ownership, or control of property believed to be the proceeds of specified unlawful activity, or to avoid a transaction reporting requirement under State or Federal law. The same paragraph defines represented as any representation made by a law enforcement officer, or by another person at the direction of or with the approval of a federal official authorized to investigate or prosecute violations of the section, and actual criminal proceeds are not required for it.",
              "Treating the restraint on the money and the criminal charge as one problem. They run on separate tracks. Subsection (b) of 18 U.S.C. 1956 is a civil penalty scheme with a judgment of its own, and 1956(d) states that nothing in the section supersedes any provision of federal, state, or other law imposing criminal penalties or affording civil remedies in addition to those the section provides.",
            ],
          },
        ],
      },
      {
        id: "predicate",
        heading: "The money has to be tied to something inside 1956(c)(7)",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "This is the part of a federal money laundering case that has no counterpart in the amount. Section 1956 reaches the proceeds of specified unlawful activity, and that phrase is a defined term rather than a description. 18 U.S.C. 1956(c)(7) defines it by listing, running from subparagraph (A) through subparagraph (G), and a charge has to place its predicate inside that definition.",
          "The largest single entry is a cross reference with an exception attached. 1956(c)(7)(A) takes in any act or activity constituting an offense listed in the racketeering statute at 18 U.S.C. 1961(1), except an act which is indictable under subchapter II of chapter 53 of title 31. That exception is part of the rule rather than a footnote to it: the currency reporting offenses in that subchapter are carved out of this route. This page does not reproduce the contents of the 1961(1) list, which is a statute of its own and is not set out here.",
          "The rest of the definition adds categories that stand on their own. 1956(c)(7)(B) covers offenses against a foreign nation, with respect to a financial transaction occurring in whole or in part in the United States, across clauses (i) through (vii), including the manufacture, importation, sale, or distribution of a controlled substance; murder, kidnapping, robbery, extortion, destruction of property by means of explosive or fire, or a crime of violence as defined in section 16; fraud, or any scheme or attempt to defraud, by or against a foreign bank; bribery of a public official, or the misappropriation, theft, or embezzlement of public funds by or for the benefit of a public official; certain smuggling and export control violations; an offense covered by a multilateral obligation to extradite or submit for prosecution; and trafficking in persons. 1956(c)(7)(C) covers acts constituting a continuing criminal enterprise as defined in 21 U.S.C. 848. 1956(c)(7)(D) is a long enumeration of federal offenses, running from destruction of aircraft at one end to sanctions violations at the other. 1956(c)(7)(E) covers felony violations of the Federal Water Pollution Control Act, the Ocean Dumping Act, the Act to Prevent Pollution from Ships, the Safe Drinking Water Act, and the Resources Conservation and Recovery Act. 1956(c)(7)(F) covers a federal health care offense.",
          "Two clauses inside that definition carry a value figure, and both figures decide whether an offense can serve as the predicate at all rather than how a money laundering charge is graded. Inside the long list at 1956(c)(7)(D), a felony violation of section 15 of the Food and Nutrition Act of 2008 qualifies only where it involves a quantity of benefits having a value of not less than $5,000. And 1956(c)(7)(G), which covers certain Endangered Species Act, African Elephant Conservation Act, and Rhinoceros and Tiger Conservation Act violations, qualifies only where the fish, wildlife, products, items, or substances involved in the violation and relevant conduct have a total value of more than $10,000.",
          "The predicate is one element among several, not the whole of what 18 U.S.C. 1956(a)(1) makes the government prove. Alongside knowledge that the property involved in the transaction represents the proceeds of some form of unlawful activity, and a financial transaction that in fact involves the proceeds of specified unlawful activity, the paragraph requires one of the four alternatives set out in its subparagraphs (A) and (B): intent to promote the carrying on of specified unlawful activity at (A)(i); intent to engage in conduct constituting a violation of section 7201 or section 7206 of the Internal Revenue Code of 1986 at (A)(ii); knowledge that the transaction is designed in whole or in part to conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity at (B)(i); or knowledge that it is designed in whole or in part to avoid a transaction reporting requirement under State or Federal law at (B)(ii). Two of those limbs carry reach that is distinctly federal on their face: the tax limb at (A)(ii) is keyed to two sections of the Internal Revenue Code, and the reporting limb at (B)(ii) reaches a transaction reporting requirement under State or Federal law, so a federal reporting requirement sits inside it. The paragraph then closes with a rule of its own, that a financial transaction is considered to be one involving the proceeds of specified unlawful activity if it is part of a set of parallel or dependent transactions, any one of which involves those proceeds, and all of which are part of a single plan or arrangement.",
          "What the structure means for a defendant is concrete. The government does not get to call the money dirty in general terms. It has to identify what the money came from and place that offense inside the definition. Where the predicate is not established, an unexplained transfer is not converted into laundering by the absence of an explanation.",
        ],
      },
      {
        id: "exposure",
        heading: "What each subsection carries, with no Florida degree attached to any of it",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1956(a)(1), the domestic financial transaction offense. The paragraph provides a fine of not more than $500,000 or twice the value of the property involved in the transaction, whichever is greater, or imprisonment for not more than twenty years, or both. No amount is an element: the $500,000 is a cap on a fine. A federal offense carries no Florida degree, and F.S. 921.0022 does not rank federal statutes, so no Florida offense level attaches to any row in this table." },
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1956(a)(2), transporting, transmitting, or transferring, or attempting to, a monetary instrument or funds from a place in the United States to or through a place outside it, or into the United States from or through a place outside it. Moving funds across the border is not by itself the offense: the paragraph requires either (A) the intent to promote the carrying on of specified unlawful activity, or (B) knowledge that the monetary instrument or funds involved represent the proceeds of some form of unlawful activity together with knowledge that the transportation, transmission, or transfer is designed in whole or in part to conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity, or to avoid a transaction reporting requirement under State or Federal law. For the offense described in subparagraph (B), the same paragraph adds that the defendant's knowledge may be established by proof that a law enforcement officer represented the matter specified in subparagraph (B) as true, and the defendant's subsequent statements or actions indicate that the defendant believed those representations to be true. Same penalty language as (a)(1): a fine of not more than $500,000 or twice the value of the monetary instrument or funds involved, whichever is greater, or imprisonment for not more than twenty years, or both." },
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1956(a)(3), where the property is only represented to be the proceeds of specified unlawful activity, or property used to conduct or facilitate it. The paragraph opens with an intent element, and the conduct clause follows it: the transaction has to be conducted or attempted with one of the three intents set out at (A), (B) and (C), which are intent to promote the carrying on of specified unlawful activity, intent to conceal or disguise the nature, location, source, ownership, or control of property believed to be the proceeds of specified unlawful activity, and intent to avoid a transaction reporting requirement under State or Federal law. The paragraph provides a fine under title 18 or imprisonment for not more than 20 years, or both. Actual criminal proceeds are not required for this paragraph." },
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1957, the section with the figure in it. Under 1957(a) the property must be criminally derived property of a value greater than $10,000 that is derived from specified unlawful activity, and the offense must fall within one of the circumstances in 1957(d). Except as provided in its paragraph (2), 1957(b)(1) provides a fine under title 18 or imprisonment for not more than ten years or both, and adds that where the offense involves a pre-retail medical product as defined in section 670, the punishment is the same as for an offense under section 670 unless the punishment under 1957(b) is greater. Under 1957(b)(2) the court may impose an alternate fine of not more than twice the amount of the criminally derived property involved in the transaction." },
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1956(h), conspiracy. A person who conspires to commit any offense defined in section 1956 or section 1957 is subject to the same penalties as those prescribed for the offense that was the object of the conspiracy." },
          { degree: "no degree assigned", maximum: "Set by the charging statute", note: "18 U.S.C. 1956(b)(1), a civil penalty that is separate from and cumulative with the criminal penalties above. It reaches a person who conducts or attempts to conduct a transaction described in subsection (a)(1) or (a)(3), or section 1957, or a transportation, transmission, or transfer described in subsection (a)(2), and the penalty is not more than the greater of the value of the property, funds, or monetary instruments involved in the transaction, or $10,000. That $10,000 measures the penalty amount. Liability under the paragraph attaches at any value." },
        ],
      },
      {
        id: "reach",
        heading: "Proceeds means gross receipts, and the felony you knew about need not be the listed one",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "The knowledge element and the predicate element are not the same element, and 18 U.S.C. 1956(c)(1) is where they separate. Knowing that the property involved represents the proceeds of some form of unlawful activity means the person knew the property represented proceeds from some form, though not necessarily which form, of activity that constitutes a felony under State, Federal, or foreign law, regardless of whether or not that activity is specified in paragraph (7). The property itself still has to in fact involve the proceeds of specified unlawful activity.",
          "Proceeds is defined to include gross receipts. Under 18 U.S.C. 1956(c)(9) the term means any property derived from or obtained or retained, directly or indirectly, through some form of unlawful activity, including the gross receipts of that activity. Net profit is not the measure the definition uses.",
          "A financial transaction under 18 U.S.C. 1956(c)(4) is broader than a bank transfer. Branch (A) is a transaction which in any way or degree affects interstate or foreign commerce and which involves the movement of funds by wire or other means, or involves one or more monetary instruments, or involves the transfer of title to any real property, vehicle, vessel, or aircraft. Branch (B) is a transaction involving the use of a financial institution which is engaged in, or the activities of which affect, interstate or foreign commerce in any way or degree. Subsection (c) introduces that definition with the words as used in this section.",
          "Section 1957 does not require the government to prove something people assume it must. 18 U.S.C. 1957(c) provides that in a prosecution under that section, the Government is not required to prove the defendant knew that the offense from which the criminally derived property was derived was specified unlawful activity.",
          "Where the conduct happened is a condition of 1957 in a way it is not of 1956(a)(1). Under 1957(d), the circumstances are that the offense takes place in the United States or in the special maritime and territorial jurisdiction of the United States, or that it takes place outside them and the defendant is a United States person as section 3077 defines that term, excluding the class described in paragraph (2)(D) of that section.",
          "Section 1956 does carry dollar figures, and the ones a case is likely to run into are doing jobs other than grading the offense. They include the $500,000 in 1956(a)(1), which caps a fine; the $10,000 in 1956(b)(1)(B), which measures the amount of a civil penalty whose liability attaches at any value; and the figure in 1956(f)(2), which is a condition of extraterritorial jurisdiction requiring a transaction or series of related transactions involving funds or monetary instruments of a value exceeding $10,000, and which by its own terms governs extraterritorial reach rather than a domestic prosecution under subsection (a). A fine cap, a penalty measure, and a jurisdictional condition are not sentencing tiers.",
        ],
      },
      {
        id: "after",
        heading: "Sixty-nine months is the published average, and no Florida clerk can seal a federal judgment",
        kind: "prose",
        answers: ["facing", "consequences", "sealing"],
        prose: [
          "A federal sentence is not calculated the way a Florida one is. There is no Florida offense level and no state scoresheet in a federal case, because F.S. 921.0022 ranks Florida offenses and says nothing about a title 18 charge. The maximum stated in the charging section is a ceiling on what a court may impose rather than a description of what courts do impose. How the federal guideline calculation itself runs is not set out here; that belongs with counsel who has the file.",
          "What the United States Sentencing Commission publishes is what courts have already done. Of 66,662 cases reported to the Commission in fiscal year 2025, 1,170 involved money laundering. Of those individuals, 90 percent were sentenced to prison, and the average sentence length was 69 months. Those are national figures covering cases that have already been decided, across a wide range of conduct and histories. They describe the past rather than forecasting any particular case, and nothing here should be read as a prediction about one.",
          "The sealing question has a different answer for a federal case than for a Florida one, and the reason is mechanical rather than moral. Florida's court-ordered route at F.S. 943.059(1) lets a person petition a court to seal a criminal history record, and 943.059(2) requires a certificate of eligibility from the Florida Department of Law Enforcement before that petition can be filed. The automatic route at F.S. 943.0595(3)(a) works by having the clerk of the court transmit a certified copy of the disposition to that same department, which seals the record on receipt. Both routes run through a Florida clerk and a Florida department, and a case decided in the United States District Court passes through neither. Whether any relief exists for a federal record is a question to put to a lawyer, and it is not one this page answers.",
          "For work and licensing, the practical consequence is that a federal case leaves a federal court record that the Florida sections above do not address. One further consequence is not discretionary at all: under 18 U.S.C. 1956(g), where a financial institution or any of its officers, directors, or employees has been found guilty of an offense under 1956, 1957, or 1960, or under 31 U.S.C. 5322 or 5324, the Attorney General shall notify the institution's regulator in writing. What a particular licensing board then does is governed by that board's own rules and is not decided here, and immigration consequences turn on federal immigration law and belong with an immigration attorney.",
        ],
      },
      {
        id: "who",
        heading: "Who is already investigating, and who a call reaches before there is a hearing",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Several offices are usually involved well before any court is. 18 U.S.C. 1956(e) provides that violations of the section may be investigated by such components of the Department of Justice as the Attorney General may direct and such components of the Department of the Treasury as the Secretary of the Treasury may direct, as appropriate; by components of the Department of Homeland Security for offenses over which that department has jurisdiction; and by the Postal Service for offenses over which it has jurisdiction. For the environmental predicates at 1956(c)(7)(E), the same subsection adds the National Enforcement Investigations Center of the Environmental Protection Agency. No field office is named on this page, because no local agency practice has been verified for it.",
          "The prosecuting office is the United States Attorney's Office for the Middle District of Florida, and the case is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, in the Tampa Division. If the paperwork names a Florida circuit court and the Hillsborough County Clerk instead, the case is on the state track, which the Florida page covers.",
          "For counsel there are two routes, and only one of them waits for a court date. A lawyer can be retained at any point, including during the investigative stage described above, which is the stage where records are assembled and no hearing is scheduled at which anything can be raised. The appointed route runs through 18 U.S.C. 3006A: the district's plan covers a financially eligible person charged with a felony, and under 3006A(b) the magistrate judge or the court must advise an unrepresented person of the right to counsel and that counsel will be appointed if they are financially unable to obtain counsel, then appoint counsel after appropriate inquiry unless representation is waived.",
        ],
      },
    ],
    faq: [
      { question: "What is the difference between 18 U.S.C. 1956 and 18 U.S.C. 1957?", source: "brief FED-01, assistant question 1", answer: "They are separate federal offenses with different structures and different maximum terms. Section 1956 reaches transactions involving the proceeds of specified unlawful activity as 1956(c)(7) defines that term, and it states no dollar minimum; its subsection (a)(1) provides imprisonment for not more than twenty years, or a fine of not more than $500,000 or twice the value of the property involved, whichever is greater, or both. Section 1957 requires criminally derived property of a value greater than $10,000 that is derived from specified unlawful activity, in one of the circumstances set out in 1957(d), and 1957(f)(1) defines the monetary transaction it reaches as a deposit, withdrawal, transfer, or exchange, in or affecting interstate or foreign commerce, of funds or a monetary instrument by, through, or to a financial institution. Except as its own paragraph (2) provides, 1957(b)(1) carries a fine under title 18 or imprisonment for not more than ten years or both." },
      { question: "Does federal money laundering have a dollar minimum?", source: "brief FED-01, assistant question 2", answer: "Section 1956 does not. No amount is an element of the offenses in 18 U.S.C. 1956(a)(1), (a)(2), or (a)(3). The dollar figures that appear elsewhere in that section do other work, including the $500,000 in 1956(a)(1), which caps a fine, and the figure in 1956(f)(2), which is a condition of extraterritorial jurisdiction rather than a limit on a domestic prosecution. The companion section is where a threshold sits: 18 U.S.C. 1957(a) applies to criminally derived property of a value greater than $10,000. Florida's money laundering statute is graded by amount and is a different charge in a different court." },
      { question: "What counts as specified unlawful activity?", source: "brief FED-01, assistant question 3", answer: "It is a defined term, and 18 U.S.C. 1956(c)(7) defines it by listing rather than by description, running from subparagraph (A) through subparagraph (G). Subparagraph (A) takes in any act or activity constituting an offense listed in the racketeering statute at 18 U.S.C. 1961(1), except an act which is indictable under subchapter II of chapter 53 of title 31. The remaining subparagraphs add categories of their own, including certain offenses against a foreign nation, a continuing criminal enterprise as defined in 21 U.S.C. 848, a long list of federal offenses, felony violations of several environmental statutes, and a federal health care offense. Two clauses in the definition carry a value figure that decides whether that particular offense can serve as a predicate, and neither is a threshold for the money laundering charge itself." },
      { question: "How many years do you have to go to jail for money laundering?", source: "PAA", answer: "There are two different numbers and the difference between them is the useful part. The statutory maximum is a ceiling: 18 U.S.C. 1956(a)(1) provides imprisonment for not more than twenty years, and 18 U.S.C. 1957(b)(1), except as its paragraph (2) provides, provides not more than ten years. What courts have actually imposed is published separately. The United States Sentencing Commission reported that of 66,662 cases reported to it in fiscal year 2025, 1,170 involved money laundering, that 90 percent of those individuals were sentenced to prison, and that the average sentence length was 69 months. Those are national figures about decided cases spanning very different situations, not a prediction about any one case." },
      { question: "What amount of money is considered a federal crime?", source: "People Also Ask", answer: "For federal money laundering there is no such amount under 18 U.S.C. 1956, which states no dollar minimum for the offenses in its subsection (a). The question the statute asks instead is where the money came from, and 1956(c)(7) answers that by listing the offenses that can serve as the predicate. The one figure in this pair of statutes sits in the companion section: 18 U.S.C. 1957(a) reaches criminally derived property of a value greater than $10,000 that is derived from specified unlawful activity." },
      { question: "Can they take money or property before the case is decided?", source: "drafted", answer: "The statutes provide for it. 18 U.S.C. 1956(b)(3) allows a court to issue a pretrial restraining order or take any other action necessary to ensure that a bank account or other property held by the defendant in the United States is available to satisfy a judgment under that section, and 1956(b)(4)(A) allows the appointment of a Federal Receiver to take custody, control, and possession of all assets of the defendant, wherever located, to satisfy a civil judgment under that subsection, a forfeiture judgment under section 981 or 982, or a criminal sentence under section 1957 or subsection (a). On a conviction, 18 U.S.C. 982(a)(1) requires the court to order forfeiture of any property, real or personal, involved in the offense, or any property traceable to it. What happens in a particular case depends on what is sought and what a court orders, which is a matter for counsel." },
      { question: "How long does the government have to bring a federal money laundering charge?", source: "drafted, from the verbatim related search recorded in brief FED-01", answer: "The general federal period is set by 18 U.S.C. 3282(a), which provides that except as otherwise expressly provided by law, no person shall be prosecuted, tried, or punished for any offense, not capital, unless the indictment is found or the information is instituted within five years next after the offense was committed. That opening qualifier matters, because other provisions set other periods. One of them is written into the money laundering statute: 18 U.S.C. 1956(j) gives seven years, notwithstanding section 3282, where the specified unlawful activity constituting the violation is a foreign offense defined in 1956(c)(7)(B). Which period governs a particular accusation, and when the offense was committed for this purpose, are legal questions for a lawyer rather than ones this answer settles." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // DUI, state. From docs/research/briefs/ST-04-dui.md. Migrated from the
  // legacy flat fields to sections 2026-08-14, assembled from audited tables.
  //
  // LEADS ON THE 2025 CHANGE, which is the whole reason this page is urgent:
  // ch. 2025-121 (HB 687), effective 1 October 2025, made a FIRST refusal a
  // second degree misdemeanor under F.S. 316.1939(1)(e). Five sources still
  // publish the superseded rule, flhsmv.gov among them at organic position 1.
  // The advantage closes as they update.
  //
  // C9: the licence case is a second case on its own clock, 10 days under
  // 322.2615(1)(b)3. The writer sharpened it: the 10 days run from the DATE OF
  // ISSUANCE OF THE NOTICE, not from the arrest, and in a blood case the
  // notice can issue days later or be mailed under 322.251 with no temporary
  // permit at all.
  //
  // NO counterpart block. The writer proposed one pointing at the homicide
  // page for DUI manslaughter; counterpart is the Section 4.6 state/federal
  // overlap device under C10 and DUI has no federal sibling, so it was
  // dropped on merge. The manslaughter substance is in the body already.
  // ---------------------------------------------------------------------
  "state/dui-defense": {
    title: "DUI charges in Hillsborough County",
    metaTitle: "Florida DUI Charges and Test Refusal After 1 October 2025 | Hines & McCarty",
    metaDescription: "Refusing a breath or urine test in Florida became a crime on the first refusal on 1 October 2025. What Statute 316.1939 now says, and the 10 days Statute 322.2615 gives to answer the license suspension.",
    lead: "A Florida DUI arrest starts two cases. Since 1 October 2025 refusing a breath or urine test is also a separate crime on the first refusal, and Statute 322.2615 gives 10 days to answer the license case.",
    sections: [
      {
        id: "refusal-2025",
        heading: "Since 1 October 2025 a first refusal is its own criminal charge",
        kind: "statute",
        answers: ["facing"],
        prose: [
          "That text is new. It was put in place by chapter 2025-121, House Bill 687, which the Florida Legislature's own 2025 Regular Session chapter number and effective date report lists as effective 10/01/2025 under the subject heading Driving and Boating Offenses. The history line of Statute 316.1939 records the amendment as section 4 of that chapter. Before it, the opening limb of subsection (1) carried a predicate that is now gone. It reached a person who had refused and whose driving privilege was previously suspended, or who was previously fined under Statute 327.35215, for a prior refusal to submit to a lawful test of his or her breath, urine, or blood required under chapter 316 or chapter 327, and the words closing the subsection after paragraph (e) read commits a misdemeanor of the first degree. Chapter 2025-121 amended subsection (1) as a whole, striking that prior-refusal predicate from the opening limb and rewriting those closing words into the first refusal and second or subsequent refusal split quoted here, so before 1 October 2025 a first refusal was not an offense under this section at all. The date is therefore part of the answer rather than background to it: a refusal on 30 September 2025 and a refusal on 1 October 2025 are governed by different text.",
          "The degrees carry the terms set in Statute 775.082. A misdemeanor of the second degree is a definite term of imprisonment not exceeding 60 days under Statute 775.082(4)(b), and a misdemeanor of the first degree is a definite term not exceeding 1 year under Statute 775.082(4)(a). A refusal count is separate from the DUI count and is charged under a separate statute.",
          "Statute 316.1939(1) is written as a chain of conditions running from paragraph (a) through paragraph (e), and the warning is one of them. Paragraph (a) requires that the arresting officer had probable cause to believe the person was driving or in actual physical control of a motor vehicle while under the influence. Paragraph (b) requires that the person was placed under lawful arrest for a violation of Statute 316.193, and it carries its own exception, written as unless such test was requested pursuant to s. 316.1932(1)(c). Paragraph (c) requires that the person was informed of the suspension consequence, and paragraph (d), quoted above, requires that the person was informed of the criminal one. Only then does paragraph (e) reach the refusal itself.",
          "Read the opening words of subsection (1) closely, because the scope is narrower than the shorthand. The offense limb reaches a chemical or physical test of his or her breath or urine, as described in s. 316.1932. Blood appears in paragraph (d)'s description of the prior refusal that raises the degree, and blood refusals carry license consequences under Statute 322.2615, but the offense limb of this section names breath and urine.",
          "Refusing does not remove the refusal from the case. Statute 316.1932(1)(a)1.a. provides that the refusal to submit to a chemical or physical breath test upon the request of a law enforcement officer as provided in this section is admissible into evidence in any criminal proceeding, and Statute 316.1932(1)(a)1.b. says the same of a urine test. Statute 316.1932(1)(c) says it of a blood test. Statute 316.1939(3) also provides that the department's records showing a prior suspension for refusal are admissible and create a rebuttable presumption of that suspension.",
        ],
        statute: {
          citation: "Florida Statute 316.1939(1), 2025 Florida Statutes, paragraphs (d) and (e) and the words closing the subsection",
          body: "A person who has refused to submit to a chemical or physical test of his or her breath or urine, as described in s. 316.1932, and: ... (d) Who was informed that a refusal to submit to a lawful test of his or her breath or urine is a misdemeanor of the second degree, punishable as provided in s. 775.082 or s. 775.083, or if his or her driving privilege has been previously suspended or if he or she has previously been fined under s. 327.35215 for a prior refusal to submit to a lawful test of his or her breath, urine, or blood as required under this chapter or chapter 327, that a refusal to submit to a lawful test of his or her breath or urine is a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083, in addition to any other penalties provided by law; and (e) Who, after having been so informed, refused to submit to any such test when requested to do so by a law enforcement officer or correctional officer commits a misdemeanor of the second degree for a first refusal or a misdemeanor of the first degree for a second or subsequent refusal, and is subject to punishment as provided in s. 775.082 or s. 775.083.",
        },
      },
      {
        id: "license-clock",
        heading: "The 10 days run from the notice of suspension, not from the arrest",
        kind: "prose",
        answers: ["next", "now"],
        prose: [
          "Statute 322.2615(1)(a) puts the license suspension in the officer's hands at the roadside. The officer shall, on behalf of the department, suspend the driving privilege of a person driving or in actual physical control of a motor vehicle with an unlawful blood-alcohol level or breath-alcohol level of 0.08 or higher, or of a person who has refused a urine test or a test of breath-alcohol or blood-alcohol level. The officer takes the person's driver license, issues a notice of suspension, and issues a 10-day temporary permit if the person is otherwise eligible for the driving privilege. Nothing in that sequence waits for a prosecutor, a charging document, or a judge.",
          "Three subparagraphs then set the clock. Statute 322.2615(1)(b)2. provides that the suspension period shall commence on the date of issuance of the notice of suspension. Subparagraph 3. provides that the driver may request a formal or informal review of the suspension by the department within 10 days after the date of issuance of the notice of suspension or may request a review of eligibility for a restricted driving privilege under s. 322.271(7). Subparagraph 4. provides that the temporary permit issued at the time of suspension expires at midnight of the 10th day following the date of issuance of the notice of suspension.",
          "The date of issuance of the notice and the date of the arrest are commonly the same day, and in one class of case they are not. Statute 322.2615(1)(a) provides that if a blood test has been administered, the officer or the employing agency transmits the results to the department within 5 days after receipt of the results, and if the department then determines the level was 0.08 or higher, the department suspends the license under subsection (3). Subsection (3) has the department issue the notice of suspension and, unless the notice is mailed pursuant to s. 322.251, a temporary permit that expires 10 days after the date of issuance if the driver is otherwise eligible. So in a blood case the notice can issue well after the arrest, and where it is mailed under Statute 322.251 no temporary permit comes with it. The date printed on the notice is the date the 10 days run from.",
          "The suspension does not pause while it is contested. Statute 322.2615(9) provides that a request for a formal review hearing or an informal review hearing shall not stay the suspension of the person's driver license. The same subsection cuts the other way as well: if the department fails to schedule the formal review hearing within 30 days after receipt of the request, the department shall invalidate the suspension. Where a scheduled hearing is continued at the department's initiative, or where the driver enforces a subpoena as provided in subsection (6), the department issues a temporary driving permit valid until the hearing is conducted if the person is otherwise eligible, and that permit authorizes driving for business or employment use only. Subsection (9) also provides that such a permit may not be issued to a person who sought and obtained a continuance of the hearing.",
          "The length of the suspension depends on which kind it is. Statute 322.2615(1)(b)1.a. sets 1 year for a first refusal, or 18 months where the driving privilege has been previously suspended as a result of a refusal to submit to such a test. Statute 322.2615(1)(b)1.b. sets 6 months for a first offense at a level of 0.08 or higher, or 1 year where the driving privilege has been previously suspended under that section. If the suspension is sustained, Statute 322.2615(10)(a) provides that a person suspended for failure to submit to a breath, urine, or blood test is not eligible for a business or employment purposes license until 90 days have elapsed after the expiration of the last temporary permit issued, and Statute 322.2615(10)(b) sets 30 days for a suspension relating to an unlawful level of 0.08 or higher.",
          "Statute 322.2615(14)(a) is written about what the criminal trial may consider. It provides that the department's decision, or any circuit court review of it, may not be considered in any trial for a violation of Statute 316.193, and that a written statement submitted in a request for departmental review may not be admitted into evidence against the person in such a trial. Statute 316.193(10) states the same rule from the criminal side and adds a qualification the administrative statute does not carry: testimony or evidence from the administrative proceedings, or any written statement submitted in a request for administrative review, is inadmissible in any criminal proceeding unless timely disclosed in criminal discovery pursuant to Rule 3.220, Florida Rules of Criminal Procedure. Statute 316.1939(2) and (3) provide that the disposition of the administrative proceeding does not affect the criminal refusal action, and that the disposition of the criminal refusal action does not affect the administrative proceeding. Statute 322.2615(14)(b) provides that the disposition of any related criminal proceedings does not affect a suspension for refusal to submit to a blood, breath, or urine test imposed under that section. Statute 322.2615(16) provides that the department shall invalidate a suspension for driving with an unlawful blood-alcohol level or breath-alcohol level imposed under that section if the suspended person is acquitted of an underlying violation of Statute 316.193 at trial.",
        ],
      },
      {
        id: "review-fork",
        heading: "Formal review, informal review, or the business purposes trade",
        kind: "bullets",
        answers: ["now", "consequences"],
        bullets: [
          "Statute 322.2615(1)(b)3. names three things a driver may request, and the 10 days are written into only part of it: a formal review of the suspension by the department, an informal review, or a review of eligibility for a restricted driving privilege under Statute 322.271(7). The subparagraph reads that the driver may request a formal or informal review of the suspension by the department within 10 days after the date of issuance of the notice of suspension or may request a review of eligibility for a restricted driving privilege under Statute 322.271(7), so the period is attached to the review clause and the restricted-privilege clause carries none of its own. They are different proceedings with different consequences, and the third one forecloses the first two.",
          "The informal review is a paper proceeding. Statute 322.2615(4) provides that it is conducted by a hearing officer designated by the department and shall consist solely of an examination by the department of the materials submitted by a law enforcement officer or correctional officer and by the person whose license was suspended, and the presence of an officer or witness is not required. Under Statute 322.2615(5), notice of the decision must be mailed within 21 days after the expiration of the temporary permit.",
          "The formal review is a hearing. Statute 322.2615(6)(a) requires the department to schedule it within 30 days after the request is received and to notify the person of the date, time, and place. Under Statute 322.2615(6)(b) the hearing officer is authorized to administer oaths, examine witnesses and take testimony, receive relevant evidence, issue subpoenas for the officers and witnesses identified in documents provided under paragraph (2)(a), regulate the course and conduct of the hearing, question witnesses, and make a ruling on the suspension. The same paragraph provides that if the person who requested the hearing fails to appear and the hearing officer finds the failure to be without just cause, the right to a formal hearing is waived and the suspension shall be sustained. Under Statute 322.2615(6)(d) the department must send notice of the decision within 7 working days after the hearing.",
          "Two provisions about a witness who does not appear sit in the same section and have to be read together. Statute 322.2615(11) provides that if the arresting officer or the breath technician fails to appear pursuant to a subpoena as provided in subsection (6), the department shall invalidate the suspension. Statute 322.2615(6)(c) provides that the failure of a subpoenaed witness to appear at the formal review hearing is not grounds to invalidate the suspension, and sets out an enforcement route instead: a party may file a petition for enforcement in the circuit court of the judicial circuit where the person failing to comply resides, or a motion for enforcement in any criminal court case resulting from the driving or actual physical control that gave rise to the suspension.",
          "What the review can decide is fixed by statute. Statute 322.2615(7) provides that the hearing officer shall determine by a preponderance of the evidence whether sufficient cause exists to sustain, amend, or invalidate the suspension, and that the scope of the review shall be limited to the following issues. On a suspension for an unlawful level of 0.08 or higher, paragraph (7)(a) lists whether the officer had probable cause to believe the person was driving or in actual physical control while under the influence, and whether the person had an unlawful level of 0.08 or higher as provided in Statute 316.193. On a refusal suspension, paragraph (7)(b) lists those two probable cause and refusal questions and adds whether the person was told that a refusal would suspend the privilege to operate a motor vehicle for 1 year, or 18 months in the case of a second or subsequent refusal.",
          "The third request is a trade with conditions attached. Statute 322.271(7) provides that, notwithstanding Statute 322.2615(10)(a) and (b), a person who has never previously had a driver license suspended under Statute 322.2615, has never been disqualified under Statute 322.64, has never been convicted of a violation of Statute 316.193, and whose driving privilege is now suspended under Statute 322.2615 is eligible for a restricted driving privilege pursuant to a hearing under subsection (2). Paragraph (7)(a) counts an out-of-state conviction for driving under the influence, driving while intoxicated, driving with an unlawful blood-alcohol level, or any other similar alcohol-related or drug-related traffic offense, and a conviction of former Statute 316.028, 316.1931 or 860.01, as a previous conviction of Statute 316.193 for this purpose.",
          "Paragraph (7)(c) is the part the shorthand drops: acceptance of the reinstated driving privilege as provided in this subsection is deemed a waiver of the right to formal and informal review under Statute 322.2615, and the waiver may not be used as evidence in any other proceeding. Paragraph (7)(b) restricts the reinstatement to business purposes only for the duration of the suspension imposed under Statute 322.2615.",
          "Statute 322.271(1)(c)1. defines a driving privilege restricted to business purposes only as a driving privilege limited to any driving necessary to maintain livelihood, including driving to and from work, necessary on-the-job driving, driving for educational purposes, and driving for church and for medical purposes. Statute 322.271(1)(c)2. defines the narrower employment purposes only privilege as driving to and from work and any necessary on-the-job driving required by an employer or occupation.",
          "Statute 322.2615(10) makes the business or employment purposes license available only if the person is otherwise eligible for the driving privilege pursuant to Statute 322.271, and Statute 322.271(2)(a) provides that where a license has been suspended under Statute 322.2615 the department shall require proof of enrollment in the applicable approved driver training course or licensed DUI program substance abuse education course, including evaluation and treatment if referred. The same paragraph contains a bar, written to begin except as provided in paragraph (c): the privilege of driving on a limited or restricted basis for business or employment use may not be granted to a person whose license is revoked pursuant to Statute 322.28 or suspended pursuant to Statute 322.2615 and who has been convicted of a violation of Statute 316.193 two or more times, or whose license has been suspended two or more times for refusal to submit to a test pursuant to Statute 322.2615 or former Statute 322.261.",
        ],
      },
      {
        id: "ladder",
        heading: "The DUI ladder, and the two felonies that share a maximum but not a level",
        kind: "penalties",
        answers: ["facing"],
        prose: [
          "Two rows on that table come from the same paragraph, carry the same degree, and carry the same 5 year statutory maximum, and they are ranked three levels apart. A third violation within 10 years after a prior conviction is level 3 on the Statute 921.0022 chart. A fourth or subsequent violation is level 6. The statutory maximum does not move between them and the scoresheet input does: the Criminal Punishment Code worksheet in Statute 921.0024(1)(a) assigns 16 sentence points to a level 3 primary offense and 36 to a level 6 primary offense. The primary offense is one input among several the worksheet totals, so those figures are not a sentence. Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equals or is less than 44 points, unless the court determines within its discretion that a prison sentence is appropriate, and that where the total exceeds 44 points the lowest permissible sentence in prison months is calculated by subtracting 28 points from the total and decreasing the remainder by 25 percent.",
          "What counts as a prior conviction on this ladder is broader than a Florida DUI. The flush language closing Statute 316.193(6) provides that any conviction for a violation of Statute 327.35, which is the boating offense, a previous conviction of former Statute 316.1931, former Statute 860.01, or former Statute 316.028, or a previous conviction outside this state for driving under the influence, driving while intoxicated, driving with an unlawful blood-alcohol level, driving with an unlawful breath-alcohol level, or any other similar alcohol-related or drug-related traffic offense, is also considered a previous conviction for a violation of the section. Statute 316.193(12) adds that department records showing a previous DUI conviction are sufficient by themselves to establish it, and that the evidence may be contradicted or rebutted and the presumption weighed against whatever else is presented.",
        ],
        penalties: [
          { degree: "No degree assigned by the statute", maximum: "Up to 6 months, fine $500 to $1,000", note: "Statute 316.193(2)(a), first conviction. The paragraph opens except as provided in paragraph (b), subsection (3), or subsection (4), and it prescribes the fine and the term of imprisonment directly rather than assigning a misdemeanor degree." },
          { degree: "No degree assigned by the statute", maximum: "Up to 9 months, fine $1,000 to $2,000", note: "Statute 316.193(2)(a), second conviction. Subparagraph 3. also requires mandatory placement, for at least 1 year and at the convicted person's sole expense, of an approved ignition interlock device upon all vehicles individually or jointly leased or owned and routinely operated by that person, when he or she qualifies for a permanent or restricted license." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 3", note: "Statute 316.193(2)(b)1., a third violation for an offense that occurs within 10 years after a prior conviction for a violation of the section. The statute measures from a prior conviction rather than from the second one. The offense severity ranking chart in Statute 921.0022 carries this at level 3, described as Felony DUI, 3rd conviction. The paragraph also requires an interlock device for not less than 2 years." },
          { degree: "No degree assigned by the statute", maximum: "Up to 12 months, fine $2,000 to $5,000", note: "Statute 316.193(2)(b)2., a third violation for an offense that occurs more than 10 years after the date of a prior conviction. The paragraph also requires an interlock device for at least 2 years." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 6", note: "Statute 316.193(2)(b)3., a fourth or subsequent violation, regardless of when any prior conviction occurred. The chart in Statute 921.0022 carries this at level 6, described as Felony DUI, 4th or subsequent conviction. The paragraph provides that the fine imposed may be not less than $2,000." },
          { degree: "First degree misdemeanor", maximum: "Up to 1 year", note: "Statute 316.193(3)(c)1., where a person in violation of subsection (1) operates a vehicle and by reason of that operation causes or contributes to causing damage to the property or person of another. Maximum from Statute 775.082(4)(a)." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 7", note: "Statute 316.193(3)(c)2., serious bodily injury to another as defined in Statute 316.1933. The chart describes this row as DUI resulting in serious bodily injury." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 8", note: "Statute 316.193(3)(c)3.a., DUI manslaughter. The flush language closing subsection (3) provides that a person who is convicted of DUI manslaughter shall be sentenced to a mandatory minimum term of imprisonment of 4 years." },
          { degree: "First degree felony", maximum: "Up to 30 years", offenseLevel: "Level 9", note: "Statute 316.193(3)(c)3.b., DUI manslaughter where at the time of the crash the person knew, or should have known, that the crash occurred, and failed to give information and render aid as required by Statute 316.062." },
          { degree: "First degree felony", maximum: "Up to 30 years", offenseLevel: "Level 9", note: "Statute 316.193(3)(c)3.c., which applies if the person has a prior conviction under this subparagraph, s. 327.35(3)(a)3.c., s. 782.071, or s. 782.072. Sub-subparagraph c. sits inside subparagraph 3., so the words this subparagraph reach a prior conviction under subparagraph (3)(c)3. rather than under sub-subparagraph c. alone. The chart in Statute 921.0022 describes this row as DUI manslaughter; prior conviction for DUI manslaughter, BUI manslaughter, vehicular homicide, or vessel homicide." },
          { degree: "Second degree misdemeanor", maximum: "Up to 60 days", note: "Statute 316.1939(1), a first refusal of a lawful test of breath or urine. The degree is set by the words closing subsection (1) after paragraph (e), as amended by chapter 2025-121 effective 1 October 2025. This is a separate offense from the DUI itself. Maximum from Statute 775.082(4)(b)." },
          { degree: "First degree misdemeanor", maximum: "Up to 1 year", note: "Statute 316.1939(1), a second or subsequent refusal, under the same words closing subsection (1) after paragraph (e). Maximum from Statute 775.082(4)(a)." },
        ],
      },
      {
        id: "proof-and-range",
        heading: "Impairment, 0.08, and what 0.15 or a child in the car adds",
        kind: "statute",
        answers: ["facing"],
        prose: [
          "Paragraph (a) has no number in it. A prosecution can proceed on impairment of normal faculties without a blood or breath result at all, which is why the 0.08 figure that dominates most published summaries of this charge answers only part of the question. Paragraphs (b) and (c) are separate routes with their own measurements, one per 100 milliliters of blood and one per 210 liters of breath.",
          "Statute 316.193(4) sets a higher range on two triggers, and it states them in one sentence: a person convicted of a violation of subsection (1) who has a blood-alcohol level or breath-alcohol level of 0.15 or higher, or who at the time of the offense was accompanied in the vehicle by a person under the age of 18 years. The fines are $1,000 to $2,000 for a first conviction, $2,000 to $4,000 for a second, and not less than $4,000 for a third or subsequent. The terms of imprisonment are not more than 9 months for a first conviction and not more than 12 months for a second. The flush language closing the subsection carries a qualifier worth reading: for the purposes of this subsection, only the instant offense is required to be a violation of subsection (1) by a person who has a blood-alcohol level or breath-alcohol level of 0.15 or higher. That sentence is written about the 0.15 trigger and does not mention the minor passenger trigger.",
          "The ignition interlock provision changes from permissive to mandatory across the same two paragraphs. Statute 316.193(2)(c) provides that the court may order placement of an approved interlock device for at least 6 continuous months where at the time of the offense the person had a level of .08 or higher. Statute 316.193(4)(c) provides that the court shall order it for not less than 6 continuous months for a first offense and not less than 2 continuous years for a second offense. Same device, same starting period, discretionary in one paragraph and required in the next.",
          "A 0.15 result also closes a door in a different chapter. Statute 316.656(2)(a) provides that no trial judge may accept a plea of guilty to a lesser offense from a person charged under the provisions of this act who has been given a breath or blood test to determine blood or breath alcohol content, the results of which show a blood or breath alcohol content by weight of 0.15 percent or more. Statute 316.656(2)(b) applies the same bar to a person charged with a violation of Statute 316.193(3), with manslaughter resulting from the operation of a motor vehicle, or with vehicular homicide.",
          "Where injury or death is alleged, the definition that decides the felony tier lives in a different section again. Statute 316.1933(1)(b) provides that the term serious bodily injury means an injury to any person, including the driver, which consists of a physical condition that creates a substantial risk of death, serious personal disfigurement, or protracted loss or impairment of the function of any bodily member or organ. The words including the driver are in the statute. Statute 316.1933(1)(a) also removes the consent question entirely in these cases: where an officer has probable cause to believe that a motor vehicle driven by or in the actual physical control of a person under the influence has caused the death or serious bodily injury of a human being, the officer shall require a blood test, may use reasonable force if necessary, and, notwithstanding Statute 316.1932, the testing required by that paragraph need not be incidental to a lawful arrest of the person.",
          "There is also a route by which one of these cases begins without a traffic stop. Statute 316.1933(2)(a)1. provides that where a health care provider giving medical care in a health care facility to a person injured in a motor vehicle crash becomes aware, as a result of a blood test performed in the course of that treatment, that the person's blood-alcohol level meets or exceeds the level specified in Statute 316.193(1)(b), the provider may notify a law enforcement officer or agency. Subparagraph 2. limits that notice to the name of the person being treated, the name of the person who drew the blood, the blood-alcohol level indicated by the test, and the date and time of the test.",
        ],
        statute: {
          citation: "Florida Statute 316.193(1), 2025 Florida Statutes",
          body: "A person is guilty of the offense of driving under the influence and is subject to punishment as provided in subsection (2) if the person is driving or in actual physical control of a vehicle within this state and: (a) The person is under the influence of alcoholic beverages, any chemical substance set forth in s. 877.111, or any substance controlled under chapter 893, when affected to the extent that the person's normal faculties are impaired; (b) The person has a blood-alcohol level of 0.08 or more grams of alcohol per 100 milliliters of blood; or (c) The person has a breath-alcohol level of 0.08 or more grams of alcohol per 210 liters of breath.",
        },
      },
      {
        id: "clock-intervals",
        heading: "The 8 hours that can bar release, the 10th day, and the 30 days the department has",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "Until no longer impaired, until under 0.05, or until 8 hours have elapsed, whichever of the three comes first", what: "Statute 316.193(9) provides that a person arrested for a violation of that section may not be released from custody until the person is no longer under the influence and affected to the extent that normal faculties are impaired, until the person's blood-alcohol level or breath-alcohol level is less than 0.05, or until 8 hours have elapsed from the time the person was arrested. Paragraphs (a), (b) and (c) are joined by the word or, so the subsection stops barring release once any one of them is satisfied, and a person under 0.05 can be released before 8 hours have run. Families calling about release in the first hours of a DUI arrest are running into this subsection." },
          { when: "Within 24 hours of arrest", what: "First appearance. Rule 3.130(a) of the Florida Rules of Criminal Procedure provides that except when previously released in a lawful manner, every arrested person must be taken before a judge, either in person or by audio-video communication technology in the discretion of the court, within 24 hours of arrest. Rule 3.130(c)(1) provides that when the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel. Rule 3.130(d) has the judge proceed to determine pretrial detention or conditions of release under rule 3.132 or rule 3.131." },
          { when: "Within 5 days after the notice of suspension is issued", what: "Except as provided in paragraph (1)(a), which is the roadside suspension paragraph and sets a separate 5 day period running from receipt of blood test results, Statute 322.2615(2)(a) requires the officer to forward to the department the driver license, an affidavit stating the grounds for belief that the person was driving or in actual physical control while under the influence, the results of any breath or blood test or an affidavit that a test was requested and refused, the officer's description of any field sobriety test, and the notice of suspension. The same paragraph provides that failure to submit those materials within the 5 day period does not affect the department's ability to consider evidence submitted at or prior to the hearing." },
          { when: "Within 10 days after the date of issuance of the notice of suspension", what: "The window in Statute 322.2615(1)(b)3. to request a formal or informal review of the suspension by the department. The same subparagraph also allows a request for a review of eligibility for a restricted driving privilege under Statute 322.271(7), and the 10 day phrase sits in the review clause rather than in that one. Under subparagraph 4. the temporary permit expires at midnight of the 10th day following the date of issuance of the notice." },
          { when: "Within 30 days after the department receives a request for formal review", what: "Statute 322.2615(6)(a) requires the department to schedule the hearing and notify the person of the date, time, and place. Statute 322.2615(9) provides that if the department fails to schedule the formal review hearing within 30 days after receipt of the request, the department shall invalidate the suspension." },
          { when: "Within 7 working days after a formal review hearing, or within 21 days after the temporary permit expires on an informal review", what: "Statute 322.2615(6)(d) sets the 7 working day period for notice of the hearing officer's decision on a formal review. Statute 322.2615(5) sets the 21 day period for notice of the department's decision after an informal review, mailed to the person at the last known address shown on the department's records or to the address in the officer's report." },
          { when: "Within 30 days of arrest for someone in custody, or 60 days for someone on pretrial release", what: "Rule 3.134 governs the filing of formal charges, and custody decides which track applies. Under 3.134(a) the state must file formal charges on defendants in custody within 30 days, and on the 30th day the court must order automatic release on recognizance on the 33rd day unless charges are filed, or on the 40th day if good cause is shown. Under 3.134(b)(1) the period for defendants on pretrial release is 60 days, and the court must order that the defendants automatically be released on their own recognizance on the 63rd day unless the state files formal charges by that date, or, if good cause is shown by the state, may continue the defendant on pretrial release for up to an additional 30 days. Release from all requirements of bail and all conditions of pretrial release is a separate step: Rule 3.134(b)(2) provides for it on the expiration of that period and on motion with notice to the state, rather than automatically. Anyone who bonded out is on the 60 and 63 day track." },
          { when: "Within 90 days for a misdemeanor or 175 days for a felony, running from the formal charge", what: "Rule 3.191(a) sets the speedy trial periods without demand, and Rule 3.191(d) provides that a person is formally charged by information, or by indictment, or in the case of alleged misdemeanors by whatever documents constitute a formal charge. The period runs from that charging document rather than from the arrest, and Rule 3.191(a) directs the reader to the recapture procedure in subdivision (o) rather than to automatic discharge. Rule 3.191(b) allows a defendant to file a demand for speedy trial and require trial within 60 days." },
          { when: "30 days or 90 days after the last temporary permit expires, if the suspension is sustained", what: "Statute 322.2615(10)(b) provides that a person whose suspension for an unlawful level of 0.08 or higher is sustained is not eligible for a business or employment purposes license under Statute 322.271 until 30 days have elapsed after expiration of the last temporary permit issued. Statute 322.2615(10)(a) sets 90 days where the sustained suspension is for failure to submit to a breath, urine, or blood test. Both paragraphs also provide that where no 10 day permit was issued because the driver was ineligible for one, the period runs from the date of the suspension." },
        ],
      },
      {
        id: "paperwork",
        heading: "The notice of suspension, the breath instrument records, and the test you can pay for yourself",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are in place from the arrest onward",
            items: [
              "Rule 3.130(b)(1)(B) requires the judge at first appearance to advise an unrepresented defendant of the right to counsel and that counsel will be appointed if the defendant is financially unable to afford counsel. Rule 3.130(c)(1) requires the judge to appoint counsel immediately once entitlement and a desire for counsel are determined, and Rule 3.130(c)(2) requires the judge to allow a defendant a reasonable time to send for retained counsel and, if necessary, to postpone the first appearance hearing for that purpose.",
              "Statute 316.1932(1)(f)3. provides that the person tested may, at his or her own expense, have a physician, registered nurse, other personnel authorized by a hospital to draw blood, a duly licensed clinical laboratory director, supervisor, technologist or technician, or another person of his or her own choosing administer an independent test in addition to the one taken at the officer's direction. The same subparagraph provides that the law enforcement officer shall not interfere with the person's opportunity to obtain the independent test and shall provide the person with timely telephone access to secure it, and that the burden is on the person to arrange and secure the test at his or her own expense.",
              "Statute 316.1932(1)(d) provides that where the arresting officer does not request a breath test, the arrested person may request the officer to have a test made of breath, urine or blood, and if so requested the arresting officer shall have the test performed.",
            ],
          },
          {
            heading: "Documents this case runs on, and the dates printed on them",
            items: [
              "The notice of suspension carries the date the whole license timetable is measured from, under Statute 322.2615(1)(b)2., (1)(b)3. and (1)(b)4. Keep the notice and the 10 day temporary permit issued with it, and note that under Statute 322.2615(3) a notice mailed pursuant to Statute 322.251 is not accompanied by a temporary permit.",
              "Statute 316.1932(1)(f)4. provides that upon the request of the person tested, full information concerning the results of the test taken at the officer's direction shall be made available to the person or his or her attorney, and it defines full information as limited to the type of test administered and the procedures followed, the time of collection of the blood or breath sample analyzed, the numerical results indicating alcohol content of blood and breath, the type and status of any permit issued by the Department of Law Enforcement held by the person who performed the test, and, if a breath testing instrument was used, the date of performance of the most recent required inspection of that instrument. The same subparagraph provides that full information does not include manuals, schematics or software of the instrument, or material not in the actual possession of the state.",
              "Statute 316.1932(1)(a)2. places the Alcohol Testing Program within the Department of Law Enforcement in charge of the operation, inspection and registration of breath test instruments used under these provisions, and of permitting and disciplining the breath test operators, agency inspectors, instructors and blood analysts who use them. Records of that kind exist independently of the arrest report.",
              "Statute 322.2615(2)(a), which opens except as provided in paragraph (1)(a), lists what the officer sends the department, and Statute 322.2615(2)(b) provides that the officer may also submit a copy of the crash report and a copy of a video recording of the field sobriety test or the attempt to administer it. That paragraph provides that materials submitted by a law enforcement or correctional agency are self-authenticating and are in the record for the hearing officer, and that notwithstanding Statute 316.066(4) the crash report shall be considered by the hearing officer.",
            ],
          },
          {
            heading: "Choices in the license case that are not reversible",
            items: [
              "The waiver is the irreversible step, not the request. Statute 322.271(7)(c) provides that acceptance of the reinstated restricted driving privilege is deemed a waiver of the right to formal and informal review under Statute 322.2615, so the third route closes the other two.",
              "Statute 322.2615(9) provides that a temporary permit valid until the hearing may not be issued to a person who sought and obtained a continuance of the hearing, so a request to move a hearing date has a consequence attached to it in the statute.",
              "A refusal already given is in the case under the admissibility sentences in Statute 316.1932(1)(a)1.a., (1)(a)1.b. and (1)(c), and a refusal is chargeable as a separate count under Statute 316.1939 where the conditions in paragraphs (a) through (e) of subsection (1) are met, the warning about the criminal consequence in paragraph (d) among them. Statute 316.1939(2) and (3) keep the criminal count and the administrative suspension on separate tracks, so a result on one does not dispose of the other.",
            ],
          },
        ],
      },
      {
        id: "after-conviction",
        heading: "Florida forbids a withheld adjudication on a DUI, and that is what settles the sealing question",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "Statute 316.656(1) is short and it decides more than it appears to. Notwithstanding the provisions of s. 948.01, no court may suspend, defer, or withhold adjudication of guilt or imposition of sentence for any violation of s. 316.193, for manslaughter resulting from the operation of a motor vehicle, or for vehicular homicide. A conviction on the DUI count therefore comes with an adjudication of guilt, because the court has no authority to withhold one.",
          "That connects directly to the sealing statute. Statute 943.059(1)(c) makes a person eligible to petition to seal only where the person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest or alleged criminal activity to which the petition to seal pertains. Because Statute 316.656(1) makes adjudication mandatory on a Statute 316.193 violation, a DUI conviction closes the court-ordered sealing route for the arrest that produced it. Statute 943.059(1)(b) is separate and looks backward instead: it requires that the person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, so a DUI adjudication also affects the sealing of any other Florida record afterward.",
          "Where a case does not end in a conviction, a different section can operate without any petition. Statute 943.0595(2)(a) directs the department to automatically seal a criminal history record that does not result from an indictment, information, or other charging document for a forcible felony as defined in Statute 776.08 or for an offense enumerated in Statute 943.0435(1)(h)1.a.(I), where one of the events in its subparagraphs occurred: no charging document was filed or issued in the case; a charging document was filed but was dismissed or nolle prosequi as to all counts, other than a dismissal pursuant to Statute 916.145 or 985.19; the defendant was acquitted by the verdict as to all counts, other than by a verdict of not guilty by reason of insanity; or a judgment of acquittal was rendered as to all counts. Statute 943.0595(3)(a) then has the clerk of the court transmit a certified copy of the disposition to the department, which shall seal the record upon receipt. The words as to all counts do real work where a refusal count is charged alongside the DUI count, and Statute 943.0595(2)(b) provides there is no limitation on the number of times a person may obtain an automatic sealing under that paragraph.",
          "On the conviction side, the license consequence is announced before the case is over. Statute 316.193(8) requires the clerk, at arraignment or with the notice of arraignment, to give a person charged under the section notice that upon conviction the court shall suspend or revoke the driver license and that the offender should make arrangements for transportation at any proceeding where the court may take such action. Failure to give that notice does not affect the suspension or revocation.",
          "Statute 316.193(5) requires the court to place all offenders convicted of violating the section on monthly reporting probation and to require completion of a substance abuse course conducted by a DUI program licensed under Statute 322.292, which must include a psychosocial evaluation. Where the program refers the offender to a treatment provider, completion of the education, evaluation and treatment is a condition of reporting probation, and the offender assumes the reasonable costs. If an offender fails to report for or complete treatment or the education course and evaluation, the program notifies the court and the department, and upon receipt of that notice the department shall cancel the driving privilege notwithstanding the terms of the court order or of any suspension or revocation.",
          "The vehicle is reached separately from the person. Under Statute 316.193(6)(a), on a first conviction the court places the defendant on probation for a period not to exceed 1 year, orders a minimum of 50 hours of public service or a community work project as a condition, and orders impoundment or immobilization of the vehicle operated by or in the actual control of the defendant, or any one vehicle registered in the defendant's name, for 10 days. The total period of probation and incarceration may not exceed 1 year, and the impoundment must not occur concurrently with incarceration. Under (6)(b), a second conviction for an offense occurring within 5 years after the date of a prior conviction carries imprisonment of not less than 10 days with at least 48 hours of confinement consecutive, and impoundment or immobilization of all vehicles owned by the defendant for 30 days. Under (6)(c), a third or subsequent conviction for an offense within 10 years after the date of a prior conviction carries not less than 30 days and 90 days of impoundment. The scope changes at the second conviction from one vehicle to all vehicles the defendant owns.",
          "Statute 316.193(6)(i) provides that the court may dismiss the impoundment or immobilization order if the defendant provides proof to the court's satisfaction that a functioning, certified ignition interlock device has been installed upon all vehicles individually or jointly leased or owned and routinely operated by the person. Statute 322.271(6) provides that a person may not be issued a commercial driver license during a period in which the person is disqualified from operating commercial motor vehicles or the driving privilege is suspended, revoked, or canceled. And Statute 316.193(7) states plainly that a conviction under the section does not bar any civil suit for damages against the person convicted, so a civil claim can run alongside everything else.",
        ],
      },
      {
        id: "two-proceedings-who",
        heading: "Two proceedings, two places, and who to contact about each",
        kind: "prose",
        answers: ["who"],
        prose: [
          "The criminal case in Hillsborough County is prosecuted by the Office of the State Attorney for the Thirteenth Judicial Circuit. Which court hears it depends on the tier. Statute 26.012(2)(d) gives circuit courts exclusive original jurisdiction of all felonies and of all misdemeanors arising out of the same circumstances as a felony which is also charged, so the felony tiers of Statute 316.193 are circuit court matters, and so is a misdemeanor count charged out of the same circumstances as one of them. Statute 34.01(1)(a) gives county courts original jurisdiction in all misdemeanor cases not cognizable by the circuit courts. Statute 316.193(3)(c)1. is written as a misdemeanor of the first degree, the words closing Statute 316.1939(1) set misdemeanor degrees for a refusal count, and Statute 316.193(2)(a) and Statute 316.193(2)(b)2. assign no degree at all and prescribe terms of not more than 6 months, not more than 9 months, and not more than 12 months, within the term of imprisonment not in excess of 1 year by which Statute 775.08(2) defines a misdemeanor. Where no felony arises out of the same circumstances as one of those counts, that is the county court side of the split. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, in Tampa, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071. The clerk lists county criminal alongside circuit criminal at its courthouse locations.",
          "The license case is not heard at either address, because it is not a court proceeding. Statute 322.2615(4) has the informal review conducted by a hearing officer designated by the department, on the papers. Statute 322.2615(6)(b) has the formal review held before a hearing officer designated by the department, who may conduct hearings using communications technology. Statute 322.2615(12) provides that both the formal review hearing and the informal review hearing are exempt from the provisions of chapter 120. The request under Statute 322.2615(1)(b)3. is made to the department, and under Statute 322.2615(6)(a) it is the department that notifies the person of the date, time and place.",
          "Statute 322.2615(13) sets the route after the department sustains a suspension: a petition for writ of certiorari to the circuit court in the county where the person resides or where a formal or informal review was conducted, pursuant to Statute 322.31. The same subsection provides that an appeal shall not stay the suspension, that a law enforcement agency may likewise seek certiorari review of a decision invalidating a suspension, and that the subsection is not to be construed to provide for a de novo review.",
          "Both clocks are already running when the phone call is made, and they are answered in different places by different filings. The first call is to a defense lawyer, and the first thing to have in front of you is the notice of suspension, because the date printed on it is the date the 10 days in Statute 322.2615(1)(b)3. are counted from. Hines & McCarty can be reached about a Hillsborough County DUI arrest and about the license suspension that comes with it.",
        ],
      },
    ],
    faq: [
      { question: "What is the 10 day rule for DUI in Florida?", source: "PAA", answer: "It is the window for answering the license side of a Florida DUI arrest. Statute 322.2615(1)(b)3. provides that the driver may request a formal or informal review of the suspension by the department within 10 days after the date of issuance of the notice of suspension, or may request a review of eligibility for a restricted driving privilege under Statute 322.271(7). Subparagraph 2. of the same paragraph provides that the suspension period commences on that same date of issuance, and subparagraph 4. provides that the temporary permit issued at the time of suspension expires at midnight of the 10th day following it. Under Statute 322.2615(1)(a) the officer takes the driver license and issues a 10 day temporary permit only if the person is otherwise eligible for the driving privilege. The 10 days run from the notice rather than from the arrest, and the two are not always the same day: where a blood test was administered, Statute 322.2615(1)(a) and (3) allow the department to issue the notice later, with a temporary permit that expires 10 days after the date of issuance unless the notice is mailed pursuant to Statute 322.251, in which case no permit is issued with it." },
      { question: "Is refusing a breath test a crime in Florida?", source: "ST-04", answer: "Since 1 October 2025, yes, including on a first refusal. Statute 316.1939(1) provides that a person who, after having been so informed, refused to submit to any such test when requested to do so by a law enforcement officer or correctional officer commits a misdemeanor of the second degree for a first refusal or a misdemeanor of the first degree for a second or subsequent refusal. That text came from chapter 2025-121, House Bill 687, which the Florida Legislature's 2025 Regular Session chapter number and effective date report lists as effective 10/01/2025. Before that date the offense was written differently. The opening limb of Statute 316.1939(1) reached only a person who had refused and whose driving privilege was previously suspended, or who was previously fined under Statute 327.35215, for a prior refusal to submit to a lawful test of his or her breath, urine, or blood required under chapter 316 or chapter 327, and the words closing that subsection read commits a misdemeanor of the first degree. Chapter 2025-121 struck the prior-refusal predicate from the opening limb and replaced those closing words with the first refusal and second or subsequent refusal split set out at the start of this answer. Statute 775.082(4)(b) sets a misdemeanor of the second degree at a term not exceeding 60 days and Statute 775.082(4)(a) sets a misdemeanor of the first degree at a term not exceeding 1 year. The offense limb of Statute 316.1939(1) is written about a chemical or physical test of breath or urine, and the section also requires probable cause under paragraph (a), a lawful arrest for a violation of Statute 316.193 under paragraph (b) unless the test was requested pursuant to Statute 316.1932(1)(c), and that the person was informed of both the suspension consequence and the criminal consequence under paragraphs (c) and (d) before the refusal in paragraph (e)." },
      { question: "If I am found not guilty, does the license suspension go away?", source: "drafted", answer: "It depends which suspension it is, and the two are treated in opposite ways. Statute 322.2615(16) provides that the department shall invalidate a suspension for driving with an unlawful blood-alcohol level or breath-alcohol level imposed under that section if the suspended person is found not guilty at trial of an underlying violation of Statute 316.193. Statute 322.2615(14)(b) provides that the disposition of any related criminal proceedings does not affect a suspension for refusal to submit to a blood, breath, or urine test imposed under that section. Statute 316.1939(2) and (3) carry the same separation for the criminal refusal charge in both directions: the disposition of the administrative proceeding does not affect the criminal action, and the disposition of the criminal action does not affect the administrative proceeding. Statute 322.2615(14)(a) also keeps the department's decision, and any written statement submitted in a request for departmental review, out of a trial for a violation of Statute 316.193." },
      { question: "Is every DUI a felony in Florida?", source: "People Also Ask", answer: "No. Statute 316.193(2)(a) punishes a first conviction by a fine of not less than $500 or more than $1,000 and imprisonment of not more than 6 months, and a second conviction by a fine of $1,000 to $2,000 and imprisonment of not more than 9 months, without assigning either a felony degree. The felony routes are elsewhere in the section. Statute 316.193(2)(b)1. makes a third violation a felony of the third degree where the offense occurs within 10 years after a prior conviction for a violation of the section, and Statute 316.193(2)(b)3. makes a fourth or subsequent violation a felony of the third degree regardless of when any prior conviction occurred. Statute 316.193(2)(b)2. covers a third violation for an offense occurring more than 10 years after the date of a prior conviction, and punishes it by a fine of not less than $2,000 or more than $5,000 and imprisonment of not more than 12 months rather than as a felony. Subsection (3)(c) carries separate tiers where the offense causes serious bodily injury or death, and paragraph (2)(a) itself opens with the words except as provided in paragraph (b), subsection (3), or subsection (4)." },
      { question: "Is jail time mandatory on a second DUI in Florida?", source: "People Also Ask", answer: "Not on every second conviction, because the provision that carries the minimum is conditional. Statute 316.193(6)(b) applies to a second conviction for an offense that occurs within a period of 5 years after the date of a prior conviction for a violation of the section, and where it applies the court shall order imprisonment for not less than 10 days, of which at least 48 hours of confinement must be consecutive. The same paragraph requires, as a condition of probation, impoundment or immobilization of all vehicles owned by the defendant for 30 days, and provides that the impoundment must not occur concurrently with the incarceration. Where a second conviction falls outside that 5 year measure, Statute 316.193(6)(b) is not the paragraph that governs, and the term for a second conviction is the one in Statute 316.193(2)(a), imprisonment for not more than 9 months, subject to the exceptions that paragraph names in paragraph (b), subsection (3) and subsection (4)." },
      { question: "Can I get a business purposes license and still fight the suspension?", source: "drafted", answer: "Not on the route in Statute 322.271(7), because that statute makes the two mutually exclusive. Paragraph (7)(c) provides that acceptance of the reinstated driving privilege as provided in that subsection is deemed a waiver of the right to formal and informal review under Statute 322.2615, and that the waiver may not be used as evidence in any other proceeding. The eligibility conditions are also narrower than the shorthand suggests: subsection (7) reaches a person who has never previously had a driver license suspended under Statute 322.2615, has never been disqualified under Statute 322.64, has never been convicted of a violation of Statute 316.193, and whose driving privilege is now suspended under Statute 322.2615. Paragraph (7)(a) counts an out-of-state conviction for driving under the influence, driving while intoxicated, driving with an unlawful blood-alcohol level, or any other similar alcohol-related or drug-related traffic offense, and a conviction under former Statute 316.028, 316.1931 or 860.01, as a previous conviction of Statute 316.193 for this purpose. Paragraph (7)(b) restricts the reinstatement to business purposes only for the duration of the suspension imposed under Statute 322.2615." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // DRUG TRAFFICKING, state. From docs/research/briefs/W2-02-drug-trafficking.md.
  // Written 2026-08-14 by assembly from the audited tables, not from recall.
  //
  // C9: the weight-to-mandatory-minimum-to-fine structure in the tiers
  // section. The brief's form of the C9 claim, "no tier ranked below offense
  // level 7", was CHECKED against the whole-section chart rather than
  // assumed, and it needed narrowing: 48 chart entries cite 893.135, none
  // below level 7, but several tiers (flunitrazepam (1)(g)1.c., all three
  // (1)(i) GBL tiers, all three (1)(l) LSD tiers) appear in no chart entry at
  // all. The page therefore does not say the chart ranks them. It rests the
  // floor on F.S. 921.0023(3), which places an unlisted first degree felony
  // in level 7, a verified row in fs-921-0023.ts.
  //
  // Overlap page under Section 4.6 and C10: forum section opens the body,
  // exactly one cross-link to the federal sibling, no shared body copy.
  //
  // D7: the Brandon Regional Service Center is NOT named. The writer included
  // it from the brief; it was removed on merge. It stays out of copy pending
  // attorney confirmation.
  // ---------------------------------------------------------------------
  "state/drug-trafficking-defense": {
    title: "Drug trafficking charges in Hillsborough County",
    metaTitle: "Drug Trafficking Charges in Hillsborough County | Hines & McCarty",
    metaDescription: "Florida trafficking turns on weight, not on selling. Each substance has its own threshold, mandatory minimum, and fixed fine, and a conviction cannot be sealed.",
    lead: "Florida drug trafficking is defined by weight. Selling is not required and neither is an intent to sell: possession of the threshold amount is enough. Statute 893.135 sets a mandatory minimum prison term and a fixed fine for each tier.",
    counterpart: {
      href: "/federal-criminal-defense/drug-trafficking",
      label: "Federal drug trafficking charges",
      note: "Trafficking is prosecuted in both systems and the two are not versions of one case. Everything on this page, the Statute 893.135 weight tiers, the mandatory minimums attached to them, the Florida offense levels and the state scoresheet, belongs to the Florida track. A federal prosecution is calculated a different way, and that page covers it.",
    },
    sections: [
      {
        id: "forum",
        heading: "Which sovereign files, and why the weight tiers only exist on one side",
        kind: "prose",
        answers: ["facing", "who"],
        prose: [
          "The first thing to read is not the drug name on the paperwork. It is who signed it. The same seizure in the same Brandon parking lot can be filed by the State of Florida or by the federal government, and that choice is not the defendant's.",
          "A Florida case is filed by the Office of the State Attorney for the Thirteenth Judicial Circuit and heard in circuit court in Hillsborough County. The Clerk holds the file, with circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071. A federal case is brought by a United States Attorney in the Middle District of Florida, Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue. Both addresses are in Tampa.",
          "For this charge the fork matters more than it does on most, because the substance of this page does not cross it. The weight tiers in Statute 893.135, the mandatory minimum term and fixed fine attached to each of them, the offense levels in Statute 921.0022, and the Criminal Punishment Code scoresheet in Statute 921.0024 are all features of the Florida track. A federal prosecution is not scored on any of them. What it is calculated on instead is not described here, because it is a different body of law and it belongs on the federal page.",
          "So the practical instruction is narrow and checkable: look at the charging document, find the name of the prosecuting office, and read the rest of this page only if it says Thirteenth Judicial Circuit.",
        ],
      },
      {
        id: "weight-and-mixture",
        heading: "Possession is enough, and the mixture is what gets weighed",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 893.135, with Florida Statute 893.03(3)(c), the 2025 Florida Statutes",
          body: "Subsection (1) opens by setting itself apart from the ordinary drug offenses. It applies except as authorized in this chapter or in chapter 499 and notwithstanding the provisions of Statute 893.13, which is the possession, sale and delivery statute. Trafficking is therefore not a heavier version of a possession charge. It is a separate scheme, and its trigger is quantity. Each paragraph of subsection (1) reaches a person who knowingly sells, purchases, manufactures, delivers, or brings into this state, or who is knowingly in actual or constructive possession of, a stated amount. Possession stands on its own in that list, and constructive possession is inside it, so the possession route does not name a sale, a buyer, a price, or an intent to sell among the things it requires. That is the single most common misunderstanding a person arrives with, and it is the reason a quantity someone describes as personal use can still be charged as trafficking. Subsection (2) then defines the mental element in a way that surprises people: a person acts knowingly under subsection (1) if that person intends to sell, purchase, manufacture, deliver, or bring into this state, or to actually or constructively possess, any of the controlled substances listed in subsection (1), regardless of which controlled substance listed in subsection (1) is in fact sold, purchased, manufactured, delivered, brought into this state, or possessed. What gets weighed is the second thing people get wrong, and it is answered in the statute rather than left to argument. Subsection (6) provides that a mixture, as defined in Statute 893.02, containing any controlled substance described in the section includes a solution or a dosage unit, including a gelatin capsule, pill, or tablet, containing a controlled substance; that for the purpose of clarifying legislative intent regarding the weighing of a mixture, the weight of the controlled substance is the total weight of the mixture, including the controlled substance and any other substance in the mixture; and that if there is more than one mixture containing the same controlled substance, the weight is calculated by aggregating the total weight of each mixture. Statute 893.03(3)(c) says the same thing from the other direction for certain hydrocodone preparations: for the purpose of charging a violation of Statute 893.135, the controlled substance remains a Schedule III substance but the weight per milliliter or per dosage unit is not relevant to the charging, and the weight is determined under Statute 893.135(6). In a pill case that is the whole ballgame, because the tablet is weighed rather than the milligrams of the controlled substance inside it. The units are not uniform across the statute and are worth reading twice. Cannabis is measured in pounds, or in cannabis plants counted individually. Cocaine, the opioids, the amphetamines and most of the rest are measured in grams and kilograms. The fines are dollars, and a dollar figure in this statute is never a threshold: no provision of Statute 893.135 is triggered by the value of anything. Finally, the six substances in the table below are a selection and not the whole section. Subsection (1) also sets tiers for hydrocodone and codeine at (1)(c)2., phencyclidine at (1)(d), methaqualone at (1)(e), flunitrazepam at (1)(g), gamma-hydroxybutyric acid at (1)(h), gamma-butyrolactone at (1)(i), 1,4-Butanediol at (1)(j), phenethylamines at (1)(k), lysergic acid diethylamide at (1)(l), synthetic cannabinoids at (1)(m), and n-benzyl phenethylamines at (1)(n). Above the ladders sit separate provisions: 150 kilograms or more of cocaine under (1)(b)2., and 30 kilograms or more of the (1)(c) opioids under (1)(c)5., are each punished by life imprisonment with ineligibility for any form of discretionary early release except pardon or executive clemency or conditional medical release under Statute 947.149.",
        },
      },
      {
        id: "tiers",
        heading: "Every tier names a weight, a mandatory minimum, and a dollar fine",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "First degree felony, trafficking in cannabis, in excess of 25 pounds but less than 2,000 pounds, or 300 or more cannabis plants but not more than 2,000", maximum: "Up to 30 years, with a 3 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $25,000. Statute 893.135(1)(a)1. Cannabis is the one substance here measured in pounds and in plant counts rather than in grams." },
          { degree: "First degree felony, trafficking in cannabis, 2,000 pounds or more but less than 10,000 pounds, or 2,000 or more cannabis plants but not more than 10,000", maximum: "Up to 30 years, with a 7 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $50,000. Statute 893.135(1)(a)2." },
          { degree: "First degree felony, trafficking in cannabis, 10,000 pounds or more, or 10,000 or more cannabis plants", maximum: "Up to 30 years, with a mandatory minimum of 15 calendar years", offenseLevel: "Level 9", note: "Fine of $200,000. Statute 893.135(1)(a)3." },
          { degree: "First degree felony, trafficking in cocaine, 28 grams or more but less than 200 grams", maximum: "Up to 30 years, with a 3 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $50,000. Statute 893.135(1)(b)1.a. Twenty-eight grams is the figure most searches are looking for, and it is specific to cocaine." },
          { degree: "First degree felony, trafficking in cocaine, 200 grams or more but less than 400 grams", maximum: "Up to 30 years, with a 7 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $100,000. Statute 893.135(1)(b)1.b." },
          { degree: "First degree felony, trafficking in cocaine, 400 grams or more but less than 150 kilograms", maximum: "Up to 30 years, with a mandatory minimum of 15 calendar years", offenseLevel: "Level 9", note: "Fine of $250,000. Statute 893.135(1)(b)1.c. At 150 kilograms or more, Statute 893.135(1)(b)2. moves out of this ladder entirely." },
          { degree: "First degree felony, trafficking in illegal drugs (morphine, opium, hydromorphone, or any salt, derivative, isomer, or salt of an isomer, including heroin), 4 grams or more but less than 14 grams", maximum: "Up to 30 years, with a 3 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $50,000. Statute 893.135(1)(c)1.a. Four grams is roughly one seventh of the cocaine threshold." },
          { degree: "First degree felony, trafficking in illegal drugs, 14 grams or more but less than 28 grams", maximum: "Up to 30 years, with a 15 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $100,000. Statute 893.135(1)(c)1.b. The minimum goes from 3 years to 15 at 14 grams, the sharpest single step in the statute." },
          { degree: "First degree felony, trafficking in illegal drugs, 28 grams or more but less than 30 kilograms", maximum: "Up to 30 years, with a 25 year mandatory minimum", offenseLevel: "Level 9", note: "Fine of $500,000. Statute 893.135(1)(c)1.c." },
          { degree: "First degree felony, trafficking in oxycodone, 7 grams or more but less than 14 grams", maximum: "Up to 30 years, with a 3 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $50,000. Statute 893.135(1)(c)3.a. Under Statute 893.135(6) the figure is the weight of the whole tablet, not the oxycodone in it." },
          { degree: "First degree felony, trafficking in oxycodone, 14 grams or more but less than 25 grams", maximum: "Up to 30 years, with a 7 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $100,000. Statute 893.135(1)(c)3.b. The offense level does not move at this step even though the mandatory minimum more than doubles, which is why the level and the minimum have to be read separately." },
          { degree: "First degree felony, trafficking in oxycodone, 25 grams or more but less than 100 grams", maximum: "Up to 30 years, with a 15 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $500,000. Statute 893.135(1)(c)3.c." },
          { degree: "First degree felony, trafficking in oxycodone, 100 grams or more but less than 30 kilograms", maximum: "Up to 30 years, with a 25 year mandatory minimum", offenseLevel: "Level 9", note: "Fine of $750,000. Statute 893.135(1)(c)3.d." },
          { degree: "First degree felony, trafficking in dangerous fentanyl or fentanyl analogues, 4 grams or more but less than 14 grams", maximum: "Up to 30 years, with a 7 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $50,000. Statute 893.135(1)(c)4.b.(I). The 4 gram threshold at 893.135(1)(c)4.a. covers alfentanil, carfentanil, fentanyl, sufentanil, a fentanyl derivative, a controlled substance analog of any of them, or a mixture containing any of them. The lowest tier here opens at 7 years rather than 3." },
          { degree: "First degree felony, trafficking in dangerous fentanyl or fentanyl analogues, 14 grams or more but less than 28 grams", maximum: "Up to 30 years, with a 20 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $100,000. Statute 893.135(1)(c)4.b.(II)." },
          { degree: "First degree felony, trafficking in dangerous fentanyl or fentanyl analogues, 28 grams or more", maximum: "Up to 30 years, with a 25 year mandatory minimum", offenseLevel: "Level 9", note: "Fine of $500,000. Statute 893.135(1)(c)4.b.(III). This tier has no upper bound." },
          { degree: "First degree felony, trafficking in amphetamine, 14 grams or more but less than 28 grams of amphetamine or methamphetamine", maximum: "Up to 30 years, with a 3 year mandatory minimum", offenseLevel: "Level 7", note: "Fine of $50,000. Statute 893.135(1)(f)1.a. The same paragraph also reaches phenylacetone, phenylacetic acid, pseudoephedrine, or ephedrine held in conjunction with other chemicals and equipment used in manufacture." },
          { degree: "First degree felony, trafficking in amphetamine, 28 grams or more but less than 200 grams", maximum: "Up to 30 years, with a 7 year mandatory minimum", offenseLevel: "Level 8", note: "Fine of $100,000. Statute 893.135(1)(f)1.b." },
          { degree: "First degree felony, trafficking in amphetamine, 200 grams or more", maximum: "Up to 30 years, with a mandatory minimum of 15 calendar years", offenseLevel: "Level 9", note: "Fine of $250,000. Statute 893.135(1)(f)1.c." },
        ],
      },
      {
        id: "arithmetic",
        heading: "Level 7 is the floor of this statute, and 56 points is where the scoresheet starts",
        kind: "prose",
        answers: ["facing", "next"],
        prose: [
          "Statute 921.0022 is the offense severity ranking chart, and it is where every Florida felony gets the number the sentencing scoresheet actually uses. It carries 48 entries under Statute 893.135: 18 at level 7, 15 at level 8, and 15 at level 9. Not one of them is ranked below level 7. A few tiers in the statute do not appear in the chart at all, and they do not fall lower either, because Statute 921.0023(3) places an unlisted felony of the first degree within offense level 7 until the Legislature assigns it a level, and the trafficking tiers are felonies of the first degree. Level 7 is the floor of this statute in both directions, which is not true of theft, fraud, or ordinary drug possession.",
          "That floor has a number attached to it. The Primary Offense table in Statute 921.0024(1)(a) scores a level 7 primary offense at 56 sentence points, a level 8 at 74, and a level 9 at 92. Statute 921.0024(2) then provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximums for the offenses committed, is appropriate. A trafficking charge is above that 44 point line on the primary offense alone, before a single prior conviction, additional count, or multiplier is added to the sheet.",
          "Above 44 points the same subsection gives a formula: subtract 28 from the total sentence points, then decrease the remainder by 25 percent, and the result is the lowest permissible sentence in prison months. Run on the primary offense alone with nothing else on the sheet, that is 21 months at level 7, 34.5 months at level 8, and 48 months at level 9. Set those against the mandatory minimums in the table above, which begin at 3 years and run to 25. In every tier listed above, the mandatory minimum is the longer of the two figures. That is the structural point about this charge: on most Florida felonies the scoresheet sets the floor, and here the statute usually does. Prior record points, additional offenses, and the multiplier below all move the scoresheet figure, and they can move it past the minimum.",
          "There is a multiplier written for this charge and for no other drug offense. The Criminal Punishment Code worksheet in Statute 921.0024(1)(a) carries a checkbox reading DRUG TRAFFICKER, and the key at Statute 921.0024(1)(b) supplies the value: if the primary offense is drug trafficking under Statute 893.135, the subtotal sentence points are multiplied, at the discretion of the court, for a level 7 or level 8 offense, by 1.5. Two limits sit inside that one sentence and both get skipped. It reaches level 7 and level 8 offenses only, not level 9. And it is discretionary, which the other multipliers in that key are not.",
          "The mandatory minimum is also walled off from the usual ways a Florida sentence is softened. Statute 893.135(3) provides that notwithstanding Statute 948.01, with respect to any person found to have violated the section, adjudication of guilt or imposition of sentence shall not be suspended, deferred, or withheld, nor shall such person be eligible for parole prior to serving the mandatory minimum term prescribed by the section; and that a person sentenced to a mandatory minimum term under the section is not eligible for any form of discretionary early release, except pardon or executive clemency or conditional medical release under Statute 947.149, prior to serving that term. A withheld adjudication, which exists on many Florida felonies, is not available on this one.",
          "One statutory route runs the other way, and its mechanics matter more than its name. Statute 893.135(4) provides that the state attorney may move the sentencing court to reduce or suspend the sentence of a person convicted of a violation of the section who provides substantial assistance in the identification, arrest, or conviction of that person's accomplices, accessories, coconspirators, or principals, or of any other person engaged in trafficking in controlled substances. The arresting agency is to be given an opportunity to be heard in aggravation or mitigation on any such motion, and upon good cause shown the motion may be filed and heard in camera. The judge hearing the motion may reduce or suspend the sentence if the judge finds that the defendant rendered such substantial assistance. Read the actors in that text rather than the label on it: the motion belongs to the state attorney and the decision belongs to the judge. Nothing in the subsection gives a defendant a right to either one, and whether to raise it at all is a decision to take with a lawyer before anything is said to anybody.",
          "Two further provisions extend the arithmetic past the person holding the substance. Statute 893.135(5) provides that a person who agrees, conspires, combines, or confederates with another person to commit any act prohibited by subsection (1) commits a felony of the first degree and is punishable as if he or she had actually committed the prohibited act, and that nothing in the subsection prohibits separate convictions and sentences for the conspiracy and for the underlying violation. The mandatory minimum travels with the agreement. And Statute 921.0024(2) provides that if the lowest permissible sentence under the code exceeds the statutory maximum in Statute 775.082, the sentence required by the code must be imposed.",
        ],
      },
      {
        id: "firearm",
        heading: "Sub-subparagraph p., where 10-20-Life names trafficking by name",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "Statute 775.087(2)(a)1. lists the felonies that carry the 10-20-Life minimums at sub-subparagraphs a. through r. Sub-subparagraph p. is a drug list: trafficking in cannabis, trafficking in cocaine, capital importation of cocaine, trafficking in illegal drugs, capital importation of illegal drugs, trafficking in phencyclidine, capital importation of phencyclidine, trafficking in methaqualone, capital importation of methaqualone, trafficking in amphetamine, capital importation of amphetamine, trafficking in flunitrazepam, trafficking in gamma-hydroxybutyric acid, trafficking in 1,4-Butanediol, trafficking in Phenethylamines, and it closes with the words or other violation of s. 893.135(1). The provision applies regardless of whether the use of a weapon is an element of the felony.",
          "A minimum term of 10 years where, during the commission of the offense, the person actually possessed a firearm or destructive device as those terms are defined in Statute 790.001. The statute says actually possessed, which is a narrower phrase than the constructive possession that can support the trafficking count itself.",
          "A minimum term of 20 years under Statute 775.087(2)(a)2. where, during the course of the commission of the felony, the person discharged a firearm or destructive device. That provision reaches the felonies listed at sub-subparagraphs 1.a. through p. or 1.r.",
          "A minimum term of not less than 25 years and not more than a term of imprisonment of life in prison under Statute 775.087(2)(a)3. where the discharge inflicted death or great bodily harm upon any person.",
          "Statute 775.087(2)(c) resolves the collision between the two schemes. If the minimum mandatory terms under that section exceed the maximum sentences authorized by Statute 775.082, Statute 775.084, or the Criminal Punishment Code, the mandatory minimum must be imposed; if they are less than what those laws would allow, the sentence imposed must still include the mandatory minimum term.",
          "Statute 775.087(2)(d) provides that the court shall impose the minimum term for each qualifying felony offense of conviction, and that where a person is convicted of multiple qualifying felony offenses the court shall impose those terms consecutively.",
          "Separately from all of that, the Criminal Punishment Code worksheet in Statute 921.0024(1)(a) carries a FIREARM OR SEMIAUTOMATIC WEAPON line feeding the subtotal, so a weapon can register on the scoresheet as well as under Statute 775.087.",
        ],
      },
      {
        id: "clocks",
        heading: "Four intervals the rules actually set, none of which is the mandatory minimum",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "Within 24 hours of the arrest", what: "First appearance. Rule 3.130(a) requires that, except when previously released in a lawful manner, every arrested person be taken before a judge, in person or by audio-video communication technology at the court's discretion, within 24 hours. Rule 3.130(d) then directs the judge to determine pretrial detention or conditions of release under rule 3.132 or rule 3.131. Both counsel routes described further down are raised at this hearing." },
          { when: "30 days from arrest, if you are still in custody", what: "Rule 3.134(a) requires the state to file formal charges by information or indictment within 30 days on defendants in custody. If they remain uncharged, the court on the 30th day and with notice to the state must order automatic release on recognizance on the 33rd day, or on the 40th day if the state shows good cause, and the rule adds that in no event may a defendant remain in custody beyond 40 days without a formal charge. Release under this rule is not a dismissal and the state may file afterwards." },
          { when: "60 days from arrest, if you were released", what: "Rule 3.134(b) is the track for defendants on pretrial release: 60 days for the state to file, with automatic release on recognizance on the 63rd day if it has not, and, on a showing of good cause, continuation on pretrial release for up to an additional 30 days. Both tracks carry a good cause extension. Custody decides which of the two applies, not the charge." },
          { when: "175 days after the formal charge, not after the arrest", what: "Rule 3.191(a) sets the felony speedy trial period at 175 days, and Rule 3.191(d) fixes where it starts: a person is formally charged by information or by indictment. The gap between arrest and charge is therefore outside it. Missing the period does not end a case on its own, because the rule points to the remedy in subdivision (o), which is a recapture procedure. Under Rule 3.191(b) a defendant may instead file a demand and require trial within 60 days." },
        ],
      },
      {
        id: "now",
        heading: "Consent, questions, and the arresting agency's seat at a later hearing",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are in place from the first contact onward",
            items: [
              "You have the right to decline to answer questions. It is available at the roadside, at the station, and at every stage after that, and it does not have to be explained or justified.",
              "You do not have to consent to a search. Whether a search would have been lawful without consent is a question a court can be asked to decide, and consent is what removes that question from the case.",
              "You are entitled to see what the State relies on, through discovery, in the ordinary course. On this charge that includes how the substance was weighed and what was weighed along with it, because Statute 893.135(6) makes the total weight of the mixture the operative figure.",
              "Counsel is a right, and appointment is a step a judge takes at first appearance rather than something that happens automatically beforehand. The two rules that carry it are set out in the last section of this page.",
            ],
          },
          {
            heading: "What is different about this charge before a lawyer is involved",
            items: [
              "The number on the charging document is an element, not a description. The tier turns on it, and under Statute 893.135(6) it is the whole mixture and it aggregates across more than one mixture of the same substance. It is something the State has to establish, and where it came from is examinable.",
              "Conversations about helping are not informal, and they are not off the record. Statute 893.135(4) gives the arresting agency an opportunity to be heard in aggravation or mitigation on any substantial assistance motion, and the motion itself is the state attorney's to file. What is said to officers before there is a lawyer in the room can sit inside that later process.",
              "Explaining whose it was is never a small statement. Subsection (1) reaches actual and constructive possession, and subsection (2) defines the mental element by reference to the substances listed in subsection (1) rather than to the particular one found. Accounts of who owned what, who knew what was in the bag, and what somebody thought it was all touch elements of the offense.",
              "Advice that works on other Florida felonies does not transfer here. Statute 893.135(3) provides that adjudication of guilt or imposition of sentence shall not be suspended, deferred, or withheld for a violation of that section, so any plan built around a withheld adjudication is a plan for a different charge.",
            ],
          },
        ],
      },
      {
        id: "record",
        heading: "Paragraph (gg), and the sealing door that closes on a trafficking conviction",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "Florida criminal history records are public. Unless a court seals or expunges one, an arrest is visible to an ordinary background check and stays visible for as long as it is unsealed. That is the practical answer to the employment question, and it operates whether or not a case produces a conviction.",
          "On this charge the sealing question has a definite answer at one end, and it is worth knowing early rather than three years later. Statute 943.0584(2) makes a criminal history record ineligible for a certificate of eligibility for expunction or a court-ordered expunction under Statute 943.0585, and ineligible for a certificate of eligibility for sealing or a court-ordered sealing under Statute 943.059, if the record is a conviction for one of the offenses it lists. Paragraph (gg) of that list reads, in full, drug trafficking, as defined in s. 893.135. There is no weight qualifier and no substance qualifier in that paragraph, so every tier in the table above sits inside it. Paragraph (ff) separately covers manufacturing a controlled substance in violation of chapter 893.",
          "The word conviction in that section is broader than most readers expect, and on this charge two statutes lock together around it. Statute 943.0584(1) defines conviction as a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld. Statute 893.135(3) provides that adjudication of guilt shall not be withheld for a violation of the trafficking statute in the first place. The usual route around a permanent record bar is a withhold, and these two provisions close it from opposite directions.",
          "What the bar attaches to is the record being a conviction for a listed offense, which is not the same thing as the charge that was filed. A record that is not a conviction for a listed offense is not barred by paragraph (gg). Where no bar applies, the conditions in Statute 943.059(1) still have to be met and they are cumulative, including never having been adjudicated guilty in Florida of a criminal offense, no longer being under court supervision for this one, and never having secured a prior sealing or expunction; and Statute 943.059(2) requires a certificate of eligibility from the department before any petition is filed. Nothing in this paragraph says how any case will end, and it is not a reason to expect one ending over another.",
          "Two consequences are outside what a Florida criminal statute can answer. A professional license is governed by the rules of the board that issued it. Immigration consequences turn on federal law, and a controlled substance charge is an area where that question belongs with an immigration attorney rather than being read off a Florida statute.",
        ],
      },
      {
        id: "who",
        heading: "Whose decisions are already running, and how counsel actually gets appointed",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Three offices are working on this before anybody chooses a lawyer, and they answer to different people. The arresting agency wrote the report, and under Statute 893.135(4) it keeps a role well past that: it is entitled to be heard in aggravation or mitigation on any substantial assistance motion. The Office of the State Attorney for the Thirteenth Judicial Circuit decides whether to file, what to file, and which weight tier a count alleges, which is the decision that fixes the mandatory minimum before a judge sees the case. The Hillsborough County Clerk holds the file, with circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
          "Counsel arrives on two different tracks and the first hearing is where both are raised. If you cannot pay, the appointment happens there: Rule 3.130(b)(1)(B) requires the judge to advise an unrepresented defendant of the right to counsel and that counsel will be appointed if the defendant is financially unable to afford one, and Rule 3.130(c)(1) requires that when the judge determines the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel. If you intend to hire someone, Rule 3.130(c)(2) requires the judge to allow a reasonable time to send for counsel and, if necessary, to postpone the first appearance hearing for that purpose.",
          "The reason to make the call before that hearing rather than after it is specific to this statute. The one provision in Statute 893.135 that runs downward is triggered by a motion the state attorney files, not by anything a defendant can file, and the arresting agency has a statutory seat at the hearing on it. Decisions about what is said, and to whom, are being made in the hours after an arrest, and those are decisions to make with a lawyer rather than alone.",
        ],
      },
    ],
    faq: [
      { question: "How many grams is a felony in Florida?", source: "PAA, verbatim, Tampa-geolocated 2026-08-13", answer: "Possession and trafficking are two different questions and the gram figure depends on which one you mean. For simple possession there is no gram threshold at all: under Florida Statute 893.13(6)(a), possessing any controlled substance not lawfully obtained from a practitioner or by valid prescription is a third degree felony at any amount, with two carve-outs, 20 grams or less of cannabis being a first degree misdemeanor under 893.13(6)(b) and a Schedule V substance a second degree misdemeanor under 893.13(6)(d). Possessing more than 10 grams of certain Schedule I and II substances is a first degree felony under 893.13(6)(c). For trafficking under Florida Statute 893.135 the threshold differs by substance: 4 grams for morphine, opium, hydromorphone or heroin and for fentanyl, 7 grams for oxycodone, 14 grams for amphetamine or methamphetamine, 28 grams for cocaine and for hydrocodone or codeine, and, for cannabis, more than 25 pounds or 300 or more plants." },
      { question: "Is there a minimum sentence for drug trafficking in Florida?", source: "W2-02 Section 3, question 2", answer: "Yes. Florida Statute 893.135 attaches a mandatory minimum term of imprisonment and a fixed fine to each weight tier of each substance. The lowest tiers carry a 3 year mandatory minimum for most substances and 7 years for dangerous fentanyl or fentanyl analogues, and the highest tiers reach 25 years. Statute 893.135(3) adds that adjudication of guilt or imposition of sentence shall not be suspended, deferred, or withheld, that the person is not eligible for parole before serving the mandatory minimum, and that no form of discretionary early release is available before it is served, except pardon or executive clemency or conditional medical release under Statute 947.149. Every trafficking offense in subsection (1) is a felony of the first degree, which carries a statutory maximum of up to 30 years." },
      { question: "Can a judge go below the mandatory minimum in a Florida trafficking case?", source: "W2-02 Section 3, question 3", answer: "There is one mechanism in the statute and it does not start with the judge or the defendant. Florida Statute 893.135(4) provides that the state attorney may move the sentencing court to reduce or suspend the sentence of a person convicted under that section who provides substantial assistance in the identification, arrest, or conviction of that person's accomplices, accessories, coconspirators, or principals, or of any other person engaged in trafficking in controlled substances. The arresting agency must be given an opportunity to be heard in aggravation or mitigation on the motion, and the judge hearing it may reduce or suspend the sentence if the judge finds the defendant rendered such substantial assistance. Nothing in the text gives a defendant a right to have the motion filed or granted. Separately, Statute 893.135(3) forbids suspending, deferring, or withholding adjudication or sentence, so that route is closed." },
      { question: "Can a drug trafficking charge be reduced in Florida?", source: "keywords.md, retained seeded question, graded 6-12mo", answer: "What a person is convicted of is decided by the charging and plea process rather than by any statute promising a reduction, and no page can say how a particular case will end. Two things in Florida Statute 893.135 shape the question. Weight is an element the State has to establish, and under 893.135(6) that weight is the total weight of the mixture, aggregated across more than one mixture of the same substance, so how the figure was reached is examinable like any other part of the case. And 893.135(4) contains the only downward mechanism in the section: the state attorney may move to reduce or suspend a sentence for substantial assistance, with the arresting agency entitled to be heard, and the judge may grant it on a finding that such assistance was rendered. Whether either matters in a given case is a question for a lawyer looking at that case." },
      { question: "I only had it for personal use. Why am I charged with trafficking?", source: "W2-02 Section 3, question 4", answer: "Because Florida trafficking is defined by quantity rather than by commercial conduct. Florida Statute 893.135(1) reaches a person who knowingly sells, purchases, manufactures, delivers, or brings into this state, or who is knowingly in actual or constructive possession of, the threshold amount. Possession stands on its own in that list, so the statute does not require a sale, a buyer, a price, or an intent to sell. The statute also opens by saying it applies notwithstanding the provisions of Statute 893.13, which is the ordinary possession, sale, and delivery statute, so trafficking is a separate scheme rather than an aggravated version of a possession charge." },
      { question: "Does the weight include the pills themselves or just the drug?", source: "W2-02 Section 3, question 7", answer: "The whole thing is weighed. Florida Statute 893.135(6) provides that a mixture containing a controlled substance described in the section includes a solution or a dosage unit, including a gelatin capsule, pill, or tablet, and that the weight of the controlled substance is the total weight of the mixture, including the controlled substance and any other substance in the mixture. It adds that where there is more than one mixture containing the same controlled substance, the weight is calculated by aggregating the total weight of each mixture. Florida Statute 893.03(3)(c) confirms the point for certain hydrocodone preparations, providing that for the purpose of charging a violation of 893.135 the weight per milliliter or per dosage unit is not relevant and the weight is determined under 893.135(6)." },
      { question: "What happens if there was a gun in the car?", source: "W2-02 Section 3, question 8", answer: "Florida's 10-20-Life statute reaches trafficking by name. Statute 775.087(2)(a)1.p. lists trafficking in cannabis, cocaine, illegal drugs, phencyclidine, methaqualone, amphetamine, flunitrazepam, gamma-hydroxybutyric acid, 1,4-Butanediol and Phenethylamines, and closes with the words or other violation of s. 893.135(1). Where a person is convicted of one of those and actually possessed a firearm or destructive device as defined in Statute 790.001 during the commission of the offense, the minimum term is 10 years; it is 20 years where the firearm was discharged under 775.087(2)(a)2., and not less than 25 years and up to life where the discharge inflicted death or great bodily harm under 775.087(2)(a)3. Under 775.087(2)(d) the court imposes that minimum for each qualifying felony of conviction, consecutively where there is more than one." },
      { question: "Can a Florida drug trafficking conviction ever be sealed?", source: "drafted from F.S. 943.0584 and F.S. 893.135(3)", answer: "No. Florida Statute 943.0584(2) makes a criminal history record permanently ineligible for sealing under Statute 943.059 and for expunction under Statute 943.0585 where the record is a conviction for a listed offense, and paragraph (gg) of that list is drug trafficking, as defined in s. 893.135, with no weight or substance qualifier. Two further points matter. Statute 943.0584(1) defines conviction to include a plea of guilty or nolo contendere regardless of whether adjudication is withheld, and Statute 893.135(3) forbids withholding adjudication on a trafficking violation in any event. Because the bar attaches to a record that is a conviction for a listed offense rather than to the charge that was filed, a record that is not such a conviction is not barred by paragraph (gg), and eligibility is then governed by the cumulative conditions in Statute 943.059(1) and the certificate of eligibility required by 943.059(2)." },
      { question: "Is my drug case a state case or a federal case?", source: "W2-02 Section 3, question 5", answer: "The charging document says so, and it is the first thing to look at. A Florida case is filed by the Office of the State Attorney for the Thirteenth Judicial Circuit and heard in circuit court in Hillsborough County, with the file at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101. A federal case is brought by a United States Attorney in the Middle District of Florida, Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue. The distinction is not cosmetic: the weight tiers of Florida Statute 893.135, the mandatory minimums attached to them, the offense levels in Statute 921.0022, and the Criminal Punishment Code scoresheet all belong to the Florida track and are not how a federal sentence is calculated. This answer describes the Florida track only." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // GUN CRIMES, state. From docs/research/briefs/W2-03-gun-crimes.md.
  // Written 2026-08-14 by assembly from the audited tables.
  //
  // C9: the 775.087(2)(a)1. exception. A person convicted of possession of a
  // firearm by a felon, or of burglary of a conveyance, faces a three year
  // minimum rather than the ten years every other enumerated felony carries.
  // Verified in fs-775-087.ts.
  //
  // Overlap page under Section 4.6 and C10: forum section opens the body,
  // exactly one cross-link to /federal-criminal-defense/weapons-gun-offenses.
  //
  // F.S. 790.01 is not in the statute-table set and the brief recorded it
  // UNVERIFIED, yet the legacy page asserted the permitless-carry scheme from
  // no recorded fetch. The writer fetched it in full; the record is in
  // PAGE-SOURCES.md under Pair 2.
  //
  // D7: the Brandon Regional Service Center is NOT named, removed on merge.
  // Rights restoration PROCESS stays unwritten by design; only the statutory
  // exceptions in 790.23(2) are stated.
  // ---------------------------------------------------------------------
  "state/gun-crimes-defense": {
    title: "Gun and firearm charges in Hillsborough County",
    metaTitle: "Gun and Firearm Charges in Hillsborough County | Hines & McCarty",
    metaDescription: "Florida has no single gun charge. What Statute 790.23 reaches, where each 790 offense ranks, and why 10-20-Life sets three years for a felon in possession.",
    lead: "Florida has no offense called a gun charge. The 790 series holds several, from carrying concealed to possession by a felon, and a separate statute, 775.087, adds minimum terms to felonies that are not gun charges at all.",
    counterpart: {
      href: "/federal-criminal-defense/weapons-gun-offenses",
      label: "Federal gun and weapons charges",
      note: "If the case is being prosecuted in federal court, see the federal page. A federal firearm case is brought under the United States Code in the Middle District of Florida rather than under the Florida 790 series in circuit court, the federal prohibition at 18 U.S.C. 922(g) rests on a conviction punishable by imprisonment for a term exceeding one year rather than on Florida's five predicate categories, and the Florida offense levels and the Criminal Punishment Code scoresheet have no application there. Which sovereign files is not the defendant's choice.",
    },
    sections: [
      {
        id: "forum",
        heading: "Two prohibitions, two courthouses, and a predicate test that is not written the same way in both",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "A firearm case arising in Hillsborough County can be filed by the State of Florida or by the federal government, and that is not the defendant's decision. A state case is filed by the Office of the State Attorney for the Thirteenth Judicial Circuit and heard in circuit court. A federal case is filed in the Middle District of Florida, whose Tampa Division sits at 801 North Florida Avenue. Everything on this page describes the state route.",
          "The two prohibitions are not copies of each other, and the difference sits in the first line of each. Florida Statute 790.23(1) applies to a person convicted of a felony in the courts of this state, convicted of or found to have committed a crime against the United States designated as a felony, found guilty of an offense that is a felony in another state, territory, or country punishable by imprisonment for a term exceeding 1 year, or found to have committed a qualifying delinquent act while under 24 years of age. The federal prohibition at 18 U.S.C. 922(g) opens on a different phrase: a conviction for a crime punishable by imprisonment for a term exceeding one year. Punishable by more than a year and convicted of a Florida felony are two tests, not one wording of the same test, and they do not cover identical groups of people. An answer about one is not an answer about the other, and this page does not attempt to translate between them.",
          "Section 922(g) also reaches eight categories of person that Florida Statute 790.23 does not list at all: a fugitive from justice, an unlawful user of or person addicted to a controlled substance, a person adjudicated as a mental defective or committed to a mental institution, certain aliens, a person discharged from the armed forces under dishonorable conditions, a person who has renounced United States citizenship, a person subject to a qualifying domestic violence restraining order, and a person convicted of a misdemeanor crime of domestic violence. Florida's section lists five predicate categories and no others.",
          "One practical consequence for anyone reading numbers on this page. Florida sentencing runs through the Criminal Punishment Code, and the offense levels in Statute 921.0022 and the point tables in Statute 921.0024 are inputs to that code. They have nothing to say about exposure in federal court.",
        ],
      },
      {
        id: "reach",
        heading: "A single round of ammunition is inside the words, and a juvenile finding stops counting at 24",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statutes 790.23 and 790.01, the 2025 Florida Statutes",
          body: "Statute 790.23(1) is broader than its nickname. It makes it unlawful for a person to own or to have in his or her care, custody, possession, or control any firearm, ammunition, or electric weapon or device, or to carry a concealed weapon, including a tear gas gun or chemical weapon or device. Ammunition is named in the same breath as a firearm, ownership counts alongside possession, and there is no quantity threshold anywhere in the section, so a single round is within the words. Who it applies to is the second half of the same sentence, and it is a closed list of five: a person convicted of a felony in the courts of this state; a person found in the courts of this state to have committed a delinquent act that would be a felony if committed by an adult and such person is under 24 years of age; a person convicted of or found to have committed a crime against the United States which is designated as a felony; a person found to have committed a delinquent act in another state, territory, or country that would be a felony if committed by an adult and which was punishable by imprisonment for a term exceeding 1 year and such person is under 24 years of age; and a person found guilty of an offense that is a felony in another state, territory, or country punishable by imprisonment for a term exceeding 1 year. The under-24 condition is written into paragraphs (b) and (d) as part of the predicate, so a juvenile adjudication is not a disqualification that runs on forever. The felony paragraphs, (a), (c) and (e), carry no age limit and state no waiting period. Grading is in the last two subsections. Statute 790.23(3) provides that except as otherwise provided in subsection (4), a person who violates this section commits a felony of the second degree. Statute 790.23(4) provides that where the offense described in subsection (1) has been committed by a person who has previously qualified or currently qualifies for the penalty enhancements provided for in Statute 874.04, the offense is a felony of the first degree, punishable by a term of years not exceeding life. Note that subsection (4) has two prongs, previously qualified and currently qualifies, so it is not only a criminal history provision. Statute 790.23(2) states the exceptions, and it states them as status rather than as procedure: the section does not apply to a person convicted of a felony whose civil rights and firearm authority have been restored, both of them, or to a person whose criminal history record has been expunged pursuant to Statute 943.0515(1)(b). How restoration is obtained is a clemency question that this page does not describe. Carrying concealed is a different statute with no prior conviction in it. Statute 790.01(1) authorizes a person to carry a concealed weapon or concealed firearm if he or she is licensed under Statute 790.06, or is not licensed but otherwise satisfies the criteria for receiving and maintaining such a license under Statute 790.06(2)(a)-(f) and (i)-(n), (3), and (10). A person who does not meet those criteria and carries a concealed firearm commits a felony of the third degree under 790.01(3), while a person who does not meet them and carries a concealed weapon or electric weapon or device commits a misdemeanor of the first degree under 790.01(2). Statute 790.01(4) then does something unusual: in any prosecution under subsection (2) or (3), the state bears the burden of proving, as an element of the offense, both that the person is not licensed under 790.06 and that he or she is ineligible to receive and maintain such a license under those listed criteria. Statute 790.01(5) carves out two situations: carrying a lawfully possessed concealed weapon or firearm while in the act of evacuating during a mandatory evacuation order, which the subsection defines as immediate and urgent movement away from the evacuation zone within 48 hours of the order unless the Governor extends it, and carrying for lawful self-defense a self-defense chemical spray or a nonlethal stun gun, dart-firing stun gun, or other nonlethal electric weapon or device designed solely for defensive purposes. Statute 790.01(6) adds that none of this precludes prosecution for the use of such a device during an offense under Statute 790.07, 790.10, 790.23, or 790.235.",
        },
      },
      {
        id: "minimums",
        heading: "Statute 775.087 does two separate jobs, and for a felon in possession the number is three years, not ten",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Statute 775.087 is not a charge and nobody is arrested for it. It operates on other felonies, and it contains two different mechanisms that are easy to read as one. Subsection (1) reclassifies a felony upward. Subsection (2) imposes minimum terms, and it is subsection (2) that people know by the name 10-20-Life.",
          "Reclassification first. Statute 775.087(1) provides that unless otherwise provided by law, whenever a person is charged with a felony, except a felony in which the use of a weapon or firearm is an essential element, and during the commission of that felony the defendant carries, displays, uses, threatens to use, or attempts to use any weapon or firearm, or commits an aggravated battery, the felony is reclassified: a third degree felony to a second degree felony, a second to a first, and a first degree felony to a life felony. The essential-element exception is part of the rule and travels with it, which is why reclassification is a question on a robbery or a battery rather than on a charge that already has a firearm in its elements.",
          "Reclassification also moves the sentencing arithmetic, not only the label. The undesignated text following 775.087(1)(c) provides that for purposes of sentencing under chapter 921 and determining incentive gain-time eligibility under chapter 944, a felony offense reclassified under this section is ranked one level above its ranking under Statute 921.0022 or 921.0023. Both the degree and the offense level move, and the level is the scoresheet input.",
          "The minimum terms are separate. Statute 775.087(2)(a)1. applies to a person convicted of, or of an attempt to commit, one of a list of named felonies, regardless of whether the use of a weapon is an element, where during the commission of the offense the person actually possessed a firearm or destructive device as those terms are defined in Statute 790.001. The list runs a. through r.: murder, sexual battery, robbery, burglary, arson, aggravated battery, kidnapping, escape, aircraft piracy, aggravated child abuse, aggravated abuse of an elderly person or disabled adult, unlawful throwing, placing, or discharging of a destructive device or bomb, carjacking, home-invasion robbery, aggravated stalking, the trafficking offenses and other violations of Statute 893.135(1), possession of a firearm by a felon, and human trafficking. The minimum is 10 years.",
          "Here is the part most summaries leave out. Possession of a firearm by a felon is on that list, at sub-subparagraph q., but the same subparagraph carries an exception in its own sentence: a person who is convicted for possession of a firearm by a felon or burglary of a conveyance shall be sentenced to a minimum term of imprisonment of 3 years if such person possessed a firearm or destructive device during the commission of the offense. Three things about that clause are worth reading closely. Burglary of a conveyance is reached by the clause even though it is not separately named in the a. through r. list. The clause says possessed rather than actually possessed, which is the wording used for the 10 year minimum. And its condition is a firearm or destructive device, which is narrower than what Statute 790.23(1) reaches, since that subsection also covers ammunition and an electric weapon or device.",
          "The exception has its own exception, in the final sentence of the same subparagraph. If an offender convicted of possession of a firearm by a felon has a previous conviction of committing or attempting to commit a felony listed in Statute 775.084(1)(b)1. and actually possessed a firearm or destructive device during the commission of that prior felony, the minimum term is 10 years. So the three year figure is the starting point for this offense, and one prior conviction of the right kind moves it back to ten.",
          "Discharge raises the numbers, and the carve-out is visible there too. Statute 775.087(2)(a)2. sets a 20 year minimum for discharging a firearm or destructive device during the commission of a felony listed in sub-subparagraphs 1.a. through p. or 1.r., and Statute 775.087(2)(a)3. sets a minimum of not less than 25 years and not more than life where the discharge inflicted death or great bodily harm on any person. Both provisions list the same range of sub-subparagraphs and both leave out 1.q., which is possession of a firearm by a felon.",
          "Subsection (3) is a third ladder in the same section and it is not the same list. Statute 775.087(3)(a)1. sets a 15 year minimum where the person possessed a semiautomatic firearm and its high-capacity detachable box magazine or a machine gun as defined in Statute 790.001, and 775.087(3)(f)1. defines a high-capacity detachable box magazine as one capable of being loaded with more than 20 centerfire cartridges. That capacity element gates only the semiautomatic route; the machine gun route carries no magazine or capacity requirement at all. The subsection (3) list of felonies includes sale, manufacture, delivery, or intent to sell, manufacture, or deliver any controlled substance, which subsection (2) does not, and it does not include possession of a firearm by a felon, which subsection (2) does.",
          "Where a minimum applies, it displaces the arithmetic rather than sitting alongside it. A level 5 primary offense scores 28 sentence points under the table in Statute 921.0024(1)(a), and Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where total sentence points equal or are less than 44, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximums, is appropriate. Statute 775.087(2)(c) then provides that where the minimum mandatory term exceeds the maximum authorized by Statute 775.082, Statute 775.084, or the Criminal Punishment Code, the mandatory minimum must be imposed, and where it is lower, the sentence imposed must still include it. Statute 775.087(2)(d) requires the minimum to be imposed for each qualifying felony offense and, where there are several, consecutively, and 775.087(2)(e) allows the court to run the term consecutively to a sentence for a felony that is not on the list. One exclusion is worth naming: under Statute 775.087(5) the section does not apply to law enforcement officers or United States military personnel performing their lawful duties or traveling to or from their places of employment or assignment to perform them.",
        ],
      },
      {
        id: "ladder",
        heading: "Same firearm, five statutes, and an offense level that does not follow the degree",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 5", note: "Owning or having in care, custody, possession, or control a firearm, ammunition, or an electric weapon or device by a person within Statute 790.23(1), graded by 790.23(3). The Statute 921.0022 chart entry reads: felons in possession of firearms, ammunition, or electronic weapons or devices." },
          { degree: "First degree felony punishable by life", maximum: "Up to life (a term of years not exceeding life)", offenseLevel: "Level 7", note: "Statute 790.23(4), where the person has previously qualified or currently qualifies for the criminal gang penalty enhancements in Statute 874.04. The chart designates this one 1st, PBL, which is a separate sentencing category with a life ceiling rather than the ordinary first degree cap." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 5", note: "Carrying a concealed firearm without meeting the Statute 790.01(1) criteria, under 790.01(3). The chart entry reads: unlawful carrying of a concealed firearm." },
          { degree: "First degree misdemeanor", maximum: "Up to 1 year", note: "Carrying a concealed weapon or an electric weapon or device without meeting the 790.01(1) criteria, under 790.01(2). The maximum is from Statute 775.082(4)(a), a definite term not exceeding 1 year. No offense level: the primary offense table in Statute 921.0024(1)(a) has no misdemeanor row." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 5", note: "Possession of a short-barreled shotgun or machine gun, Statute 790.221(1)." },
          { degree: "First degree felony", maximum: "Up to 30 years", offenseLevel: "Level 7", note: "A specified weapons violation subsequent to a previous conviction under Statute 790.07(1) or (2), under 790.07(4). Discharge of a machine gun under specified circumstances, Statute 790.16(1), is also a first degree felony at level 7." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 6", note: "Grand theft of a firearm, Statute 812.014(2)(c)5. A stolen firearm is charged as theft rather than under the 790 series, and it is a felony whatever the firearm was worth." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 7", note: "Grand theft of a firearm where the offender has previously been convicted of grand theft of a firearm under subparagraph (c)5., under Statute 812.014(2)(g)." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 3", note: "Directing another person to discharge a firearm from a vehicle, Statute 790.15(3). Three of the rows above are third degree felonies with the same five year maximum and they rank at levels 3, 5 and 6, which score 16, 28 and 36 primary offense points respectively under Statute 921.0024(1)(a)." },
        ],
      },
      {
        id: "proof",
        heading: "Three different ways of having a gun, and each one is attached to something different",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "The words in Statute 790.23(1) are own, or have in his or her care, custody, possession, or control. That reaches beyond carrying, which is why cases about a firearm found in a shared vehicle or a shared residence turn on what the State can attribute to one person rather than on the firearm itself.",
          "The item in 790.23(1) can be a firearm, ammunition, or an electric weapon or device, and the same sentence separately covers carrying a concealed weapon, including a tear gas gun or chemical weapon or device. Nothing in the section sets a quantity, and nothing in it distinguishes a loaded firearm from an unloaded one.",
          "The predicate status is part of the offense, not background. It has to be one of the five categories in 790.23(1)(a) through (e), and two of those, (b) and (d), are available only while the person is under 24 years of age.",
          "For the minimum terms, Statute 775.087(2)(a)1. requires that the person actually possessed a firearm or destructive device, and Statute 775.087(4) defines possession for the minimum mandatory provisions of that section as carrying it on the person, or having it within immediate physical reach with ready access with the intent to use it during the commission of the offense, proven beyond a reasonable doubt. That definition is written for those provisions. It is not the language Statute 790.23(1) uses, so the test for the charge and the test for the minimum are not the same test.",
          "For reclassification under Statute 775.087(1), the conduct is carrying, displaying, using, threatening to use, or attempting to use a weapon or firearm during the commission of the felony, or committing an aggravated battery during it, and it does not apply where the use of a weapon or firearm is an essential element of the felony charged.",
          "On a concealed carry charge, Statute 790.01(4) puts the licensing question inside the State's case. It bears the burden of proving, as an element of the offense, both that the person is not licensed under Statute 790.06 and that he or she is ineligible to receive and maintain such a license under the criteria the subsection lists.",
        ],
      },
      {
        id: "now",
        heading: "The firearm and the rounds are already logged, and access, consent, and what gets said about them are not",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are in place before anyone sorts out whose it was",
            items: [
              "You can decline to answer questions, including the specific questions a firearm case is assembled from: whose it is, how long it has been there, who else has a key, who was driving, and where it is usually kept. Declining is available at every stage and it does not have to be explained or justified.",
              "Consent to a search of a car, a bag, a locker, or a home is asked for rather than assumed, and both the request and the answer go into the report. Whether a particular search was lawful is argued later, on the record of what was asked and what was said, so it is a question for counsel and for a court rather than one to resolve at the roadside or the doorway.",
              "Counsel is appointed on the earliest of three events, not on one. Rule 3.111(a) provides that a person entitled to appointment of counsel shall have counsel appointed when the person is formally charged with an offense, or as soon as feasible after custodial restraint, or at the first appearance before a committing judge, whichever occurs earliest. Rule 3.111(c)(1) and (2) place the first duty at the jail rather than on a judge: the booking officer is to immediately advise the defendant of the right to counsel and that one will be provided immediately at no charge, and on request to immediately and effectively place the defendant in communication with the public defender.",
              "The guarantee follows the exposure, not the name of the charge. Rule 3.111(b)(1) provides that counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration, and then allows a judge, in the court's discretion, to withhold it in a misdemeanor prosecution by filing a written order of no incarceration at least 15 days before trial. On the charges described on this page that discretion reaches only the concealed weapon charge under Statute 790.01(2), which is a first degree misdemeanor. Rule 3.111(b)(1)(C) requires the court to immediately appoint counsel if it withdraws such an order and the defendant is otherwise eligible.",
              "Appointment has preconditions and they are worth expecting. Rule 3.111(b)(5) requires the court, before appointing a public defender, to inform the accused that a lien for the services rendered by counsel may be imposed as provided by law, to inquire into the financial status of the accused with the accused responding under oath, and to require an affidavit of insolvency.",
              "In the ordinary course you are entitled to see the material the state relies on, through discovery. In a firearm case that material is largely physical and already fixed: the property receipt for each item seized, and the report of where the firearm, the magazine, the ammunition, and whatever they were inside were each found. Those documents are examinable rather than something to reconstruct from memory.",
            ],
          },
          {
            heading: "Where a firearm case gets complicated before a lawyer is involved",
            items: [
              "Explaining access instead of declining to explain it. Statute 790.23(1) is not limited to carrying. Its words are own, or have in his or her care, custody, possession, or control, so sentences about who keeps the item, who knew it was in the car, who has a key to the room, and who was in the house are the material an attribution theory is built from. These sentences are usually said early, at the scene or on a recorded call from the jail.",
              "Volunteering where things are kept. Pointing out a glovebox, a safe, a closet, or a bag answers the location question and the access question in one gesture, and both are part of what the state has to establish.",
              "Arranging for a firearm, ammunition, or an electric weapon to be moved, sold, or held by someone else. The subsection reaches ownership as well as physical holding, and how the arrangement is described afterwards becomes part of the record whatever was intended by it.",
              "Treating a restoration question as something to settle informally. Statute 790.23(2) exempts a person convicted of a felony whose civil rights and firearm authority have both been restored, and a person whose criminal history record has been expunged pursuant to Statute 943.0515(1)(b). Whether either status applies, and whether the separate federal prohibition still does, are questions for a lawyer, since the federal one runs on its own predicate.",
              "Treating a concealed carry charge as an administrative dispute about paperwork. Under Statute 790.01(4) both non-licensure and ineligibility are elements the state must prove, so they sit inside the criminal case rather than beside it.",
            ],
          },
        ],
      },
      {
        id: "clock",
        heading: "Twenty-four hours, sixty days, and the sentencing step where a withhold is not available",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "Within 24 hours of the arrest", what: "First appearance. Rule 3.130(a) requires that, except when previously released in a lawful manner, an arrested person be brought before a judge within 24 hours, in person or by audio-video communication technology at the court's discretion. Under Rule 3.130(d) the judge proceeds to determine pretrial detention or conditions of release under Rule 3.132 or Rule 3.131." },
          { when: "Day 60, for anyone released on bond", what: "Rule 3.134(b)(1) gives the state 60 days from arrest to file formal charges against a defendant on pretrial release. If it has not, the court orders automatic release on recognizance on the 63rd day, or, on a showing of good cause, may continue the defendant on pretrial release for up to an additional 30 days. Under Rule 3.134(b)(2) the court on motion with notice to the state then orders release from bail and all conditions of pretrial release unless a charge has been filed. Release from conditions is not a dismissal, and this is the track most people are on, because most people are released before this point." },
          { when: "Day 30, for anyone still in custody", what: "Rule 3.134(a)(1) gives the state 30 days for a defendant in custody. On the 30th day, with notice to the state, the court must order automatic release on recognizance on the 33rd day, or on the 40th where the state shows good cause, and the rule provides that in no event may a defendant remain in custody beyond 40 days without being formally charged." },
          { when: "175 days after the formal charge, on a felony", what: "Rule 3.191(a) sets 175 days for a felony and 90 days for a misdemeanor, which is the track a Statute 790.01(2) charge sits on while a 790.01(3) or 790.23 charge sits on the felony track. Under Rule 3.191(d) the period starts when the person is formally charged by information or indictment, not at the arrest. Rule 3.191(b) allows a defendant to file a demand for speedy trial and require trial within 60 days. Expiry does not end a case by itself: the rule directs the reader to the recapture procedure in subdivision (o)." },
          { when: "At sentencing, where a minimum term applies", what: "Statute 775.087(2)(b) provides that adjudication of guilt or imposition of sentence may not be suspended, deferred, or withheld, and that the defendant is not eligible for statutory gain-time under Statute 944.275 or any form of discretionary early release other than pardon, executive clemency, or conditional medical release under Statute 947.149, before the minimum sentence is served. Under Statute 775.087(2)(d) the court imposes the required minimum for each qualifying felony offense and imposes multiple such terms consecutively." },
        ],
      },
      {
        id: "record",
        heading: "A conviction here writes the next prohibition, and Statute 790.23(2) names only two ways out of it",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "The consequence that separates a firearm case from most others is not what the record shows, it is what the record does. Statute 790.23(1)(a) applies to a person convicted of a felony in the courts of this state, so a felony conviction moves the person inside the class the section describes. From that point the section makes it unlawful for that person to own or to have in his or her care, custody, possession, or control any firearm, ammunition, or electric weapon or device, or to carry a concealed weapon, including a tear gas gun or chemical weapon or device. Ammunition is named in the same list as the firearm, an electric weapon or device is named alongside both, and the section sets no quantity anywhere, so a single round is inside the words. A felony conviction therefore changes what a person may lawfully have afterward, not only what a background check reports.",
          "What a check of the record shows on this charge is unusual for a second reason. The predicate status in 790.23(1)(a) through (e) is an element the state has to prove rather than background to the case, so the earlier felony conviction or delinquency finding and the current charge sit on the same record and are read together by anyone who pulls it.",
          "Statute 790.23(2) states the ways out, and it states two. The section does not apply to a person convicted of a felony whose civil rights and firearm authority have been restored, both of them, and it does not apply to a person whose criminal history record has been expunged pursuant to Statute 943.0515(1)(b). Those two are what appears on the face of the subsection. How restoration is obtained is a clemency question governed outside the criminal statutes, and this page does not describe it. One point carries into the sealing question below: court-ordered sealing under Statute 943.059 is not one of the two things subsection (2) names.",
          "The federal prohibition does not lift alongside the Florida one, because it never rested on the same fact. Title 18 U.S.C. 922(g)(1) engages on a conviction for a crime punishable by imprisonment for a term exceeding one year, which is a test about the sentence the offense could carry. Statute 790.23(1)(a) is a test about a Florida felony conviction, and the exemption at 790.23(2)(a) speaks to Florida civil rights and Florida firearm authority. Two prohibitions built on two different predicates are answered separately, and the federal one is not answered here.",
          "On sealing, the first question is whether the offense is barred outright, and that list was checked rather than assumed. Statute 943.0584(2) makes a record ineligible for a certificate of eligibility for sealing or expunction, or for a court-ordered sealing or expunction, where the record is a conviction for one of the offenses enumerated at paragraphs (a) through (hh). No chapter 790 offense appears in any of those paragraphs, and the four chapters the section incorporates whole are 552, 794, 839, and 893. Paragraph (hh) is not a named offense, though. It is a catch-all reaching any violation specified as a predicate offense for registration as a sexual predator pursuant to Statute 775.21, or as a sexual offender pursuant to Statute 943.0435, without regard to whether that offense alone is sufficient to require such registration, so the barred set does not close at paragraph (gg). The predicate offenses those two sections enumerate are drawn from chapters 393, 394, 787, 794, 800, 810, 825, 827, 847, 895, 916, and 985. No chapter 790 offense appears there either.",
          "Not barred is not the same as eligible, and the eligibility conditions ask about chapter 790 by name. Statute 943.059(1)(b) holds two separate bars that are often collapsed into one. The adult bar is that the person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, and no list narrows it. The juvenile bar is that the person has never been adjudicated delinquent in this state for any felony or for one of thirteen named misdemeanors, unless the record of that adjudication of delinquency has been expunged pursuant to Statute 943.0515. Five of those thirteen are chapter 790 offenses: carrying a concealed weapon under 790.01(2), open carrying of a weapon under 790.053, unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property under 790.115, unlawful use of destructive devices or bombs under 790.1615(1), and unlawful possession of a firearm by a minor under 790.22(5). Both bars say in this state, so an adjudication elsewhere does not trigger the paragraph.",
          "That produces an overlap worth naming on this charge in particular. Statute 790.23(1)(b) and (1)(d) build the offense on a juvenile delinquency finding while the person is under 24, and Statute 943.059(1)(b) asks whether a juvenile delinquency finding exists at all. The charging statute and the sealing statute are reading the same juvenile history for opposite purposes. Both then point at the same section, Statute 943.0515, with 790.23(2)(b) naming its paragraph (1)(b) and 943.059(1)(b) naming the section, and what that section does with a particular record is a question to put to a lawyer rather than one to read off this page.",
          "The withhold question also lands differently here than the general account of it suggests. Statute 943.0584(1) defines conviction to include the entry of a plea of guilty or nolo contendere regardless of whether adjudication is withheld, but that definition is written as used in this section, and this section's list carries no chapter 790 offense for it to attach to. The condition that actually applies is Statute 943.059(1)(c), whose words are adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest. Separately, where a minimum term under Statute 775.087 applies the question is closed at sentencing, because 775.087(2)(b) provides that adjudication of guilt or imposition of sentence shall not be suspended, deferred, or withheld.",
        ],
      },
      {
        id: "who",
        heading: "Who already holds a file on a firearm case, and who to contact before the first hearing",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Three offices are involved before anyone is chosen. The arresting agency wrote the report and holds the property receipt for the item seized. The Office of the State Attorney for the Thirteenth Judicial Circuit decides whether a charge is filed and which one. The Hillsborough County Clerk keeps the court file: circuit criminal services sit in Room 101 of the Edgecomb Courthouse at 800 E. Twiggs Street, criminal court services in Room 1071 of the Plant City Courthouse at 301 North Michigan Avenue. If the case is federal instead, the Middle District of Florida hears it in its Tampa Division at 801 North Florida Avenue.",
          "There are two routes to a lawyer and the first hearing addresses both. A defendant who cannot afford counsel is advised of the right under Rule 3.130(b)(1)(B) and counsel is appointed under Rule 3.130(c)(1) once the judge determines entitlement and a desire for it. A defendant who intends to retain counsel can say so, and Rule 3.130(c)(2) requires the judge to allow a reasonable time to send for that lawyer and to postpone the hearing if necessary. The reason not to leave this until later on a firearm case is structural rather than promotional: where Statute 775.087 applies, the sentencing consequences are set by statute rather than by the scoresheet, and Statute 775.087(2)(b) removes the withhold, the gain-time, and the discretionary early release that shape most other cases.",
        ],
      },
    ],
    faq: [
      { question: "How much is a gun charge in Florida?", source: "People Also Ask, Tampa-geolocated, observed 2026-08-13", answer: "There is no single gun charge in Florida, so there is no single figure. Carrying a concealed weapon or electric weapon without meeting the criteria in Statute 790.01(1) is a first degree misdemeanor under 790.01(2), carrying a concealed firearm in the same circumstances is a third degree felony under 790.01(3) with a five year maximum, and possession of a firearm, ammunition, or an electric weapon by a person covered by Statute 790.23(1) is a second degree felony under 790.23(3) with a fifteen year maximum. Where the person previously qualified or currently qualifies for the gang penalty enhancements in Statute 874.04, 790.23(4) makes it a first degree felony punishable by a term of years not exceeding life. Separately, Statute 775.087 can add a minimum term to a felony that is not a gun charge at all, and the Florida Criminal Punishment Code sets the sentencing arithmetic on top of the maximum." },
      { question: "What is 10-20-Life in Florida?", source: "drafted", answer: "It is the popular name for the minimum terms in Statute 775.087(2). For a person convicted of one of the felonies listed at 775.087(2)(a)1., where the person actually possessed a firearm or destructive device during the offense, the minimum is 10 years. Discharging a firearm or destructive device during one of the listed felonies raises the minimum to 20 years under (2)(a)2., and a discharge that inflicts death or great bodily harm raises it to not less than 25 years and up to life under (2)(a)3. The name does not describe the whole statute. The same subparagraph sets a three year minimum for possession of a firearm by a felon or burglary of a conveyance, and Statute 775.087(3) carries a separate 15 year ladder for a semiautomatic firearm with a high-capacity detachable box magazine or a machine gun." },
      { question: "If I had a gun but never fired it, does a mandatory minimum still apply?", source: "drafted", answer: "It can, because the ten year minimum in Statute 775.087(2)(a)1. attaches to actually possessing a firearm or destructive device during one of the felonies that subparagraph lists, not to firing it. Statute 775.087(4) defines possession for those provisions as carrying the firearm on the person, or having it within immediate physical reach with ready access and with the intent to use it during the offense, proven beyond a reasonable doubt. There is an exception in the same subparagraph that most summaries omit: a person convicted for possession of a firearm by a felon, or of burglary of a conveyance, is sentenced to a minimum of 3 years where the person possessed a firearm or destructive device during the offense. That exception has its own limit, since the final sentence of the subparagraph returns the minimum to 10 years for an offender convicted of possession of a firearm by a felon who has a previous conviction for a felony listed in Statute 775.084(1)(b)1. and actually possessed a firearm during that prior felony." },
      { question: "Is it a felony to carry a concealed firearm without a permit in Florida?", source: "drafted", answer: "Not automatically, because Statute 790.01(1) authorizes carrying a concealed weapon or concealed firearm by a person who is either licensed under Statute 790.06 or, though unlicensed, otherwise satisfies the criteria for receiving and maintaining such a license under Statute 790.06(2)(a)-(f) and (i)-(n), (3), and (10). A person who does not meet those criteria and carries a concealed firearm commits a felony of the third degree under 790.01(3); the same person carrying a concealed weapon or an electric weapon or device commits a first degree misdemeanor under 790.01(2). Statute 790.01(4) makes both non-licensure and ineligibility elements the state must prove, and 790.01(5) excepts carrying while in the act of evacuating under a mandatory evacuation order and carrying a self-defense chemical spray or a nonlethal stun gun for lawful self-defense." },
      { question: "How long before a convicted felon can own a gun in Florida?", source: "People Also Ask, Tampa-geolocated, observed 2026-08-13", answer: "Statute 790.23 states no waiting period. It is written as a status rather than a term of years: paragraphs (1)(a), (c) and (e) apply to a person convicted of a felony in this state, of a federal felony, or of an offense that is a felony elsewhere punishable by more than one year, with no time limit attached. Two of the five predicates, (1)(b) and (1)(d), apply to juvenile delinquency findings and reach only a person under 24 years of age. The section's own exceptions are in Statute 790.23(2): it does not apply to a person convicted of a felony whose civil rights and firearm authority have both been restored, or to a person whose criminal history record has been expunged under Statute 943.0515(1)(b). How restoration is obtained is a clemency question governed outside the criminal statutes, and it is not described here. The separate federal prohibition at 18 U.S.C. 922(g) uses its own predicate, a crime punishable by imprisonment for a term exceeding one year, so a Florida answer does not settle the federal question." },
      { question: "Does it matter that the gun was unloaded, or that it belonged to someone else in the house?", source: "drafted", answer: "Statute 790.23(1) draws no distinction between a loaded and an unloaded firearm, and it separately reaches ammunition and an electric weapon or device, so the item does not have to be a working loaded gun for the subsection to apply. Ownership by someone else does not settle it either, because the subsection reaches a person who owns or has in his or her care, custody, possession, or control the item, which is broader than carrying it. What another person's ownership does affect is what the state can attribute to a particular defendant, and attribution is something it has to prove like any other part of the case. None of that reaches the mandatory minimum question, which uses the narrower definition of possession in Statute 775.087(4)." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
  },
  // ---------------------------------------------------------------------
  // IDENTITY THEFT, white collar. From docs/research/briefs/W2-06-identity-theft.md.
  // Migrated to sections 2026-08-14.
  //
  // C9: the age brackets. Using the identifying information of a person under
  // 18, or aged 60 or over, is a second degree felony at level 8 and rises to
  // level 9 in the circumstance the assertion names.
  //
  // THE TABLE BEHIND THIS PAGE IS THE AWKWARD ONE. F.S. 817.568(2)(b) and
  // (2)(c) each carry TWO INDEPENDENT PRONGS sharing one pair of numeric
  // fields, a dollar prong and a PERSON-COUNT prong, with overlapping ranges.
  // check-claims is deliberately configured to skip amount rules for 817.568
  // (amountUnit "mixed-usd-and-person-count", D22), so nothing automatic will
  // catch a dollar figure stated against a count row here. Reviewers must.
  //
  // D5: no federal sibling, so forum material links UP to the federal silo and
  // no counterpart block renders.
  // ---------------------------------------------------------------------
  "white-collar/identity-theft": {
    title: "Identity theft charges under Florida Statute 817.568",
    metaTitle: "Florida Identity Theft Charges, Statute 817.568 | Hines & McCarty",
    metaDescription: "Florida charges identity theft as fraudulent use of personal identification information. The dollar routes, the person-count routes, the 3, 5 and 10 year mandatory minimums, and the child and custodial tiers.",
    lead: "Florida charges identity theft as fraudulent use of personal identification information under Statute 817.568. The offense in subsection (2) is a felony at its lowest tier, and a count of people raises it just as dollars do.",
    sections: [
      {
        id: "prongs",
        heading: "Twelve names and no money is still a second degree felony",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "The base offense is Statute 817.568(2)(a). A person who willfully and without authorization fraudulently uses, or possesses with intent to fraudulently use, personal identification information concerning another person without first obtaining that person's consent commits the offense of fraudulent use of personal identification information, a felony of the third degree. No dollar figure appears in that paragraph. Value is not an element of it at all, which is why a case in which nothing was ever obtained still starts as a felony.",
          "Statute 817.568(2)(b) is where the exposure moves, and it is written as a single sentence carrying a dollar route and, separately, a person-count route. The dollar route reaches a felony of the second degree where the pecuniary benefit, the value of the services received, the payment sought to be avoided, or the amount of the injury or fraud perpetrated is $5,000 or more. The person-count route reaches the same second degree felony where the person fraudulently uses the personal identification information of 10 or more persons, but fewer than 20 persons, without their consent. That second route names no money. A file with twelve names in it and no proven loss is described by the same paragraph as a $5,000 loss, and carries the same mandatory minimum.",
          "Statute 817.568(2)(c) repeats the structure one tier up: a felony of the first degree at $50,000 or more on the same four measures, and a felony of the first degree where the information of 20 or more persons, but fewer than 30 persons, is used without their consent. The paragraph does not stop there. Its third sentence sets a 10-year mandatory minimum at $100,000 or more, or where the person fraudulently uses the personal identification information of 30 or more persons. The degree-assigning clause of (2)(c) stops at fewer than 30 persons, so the 30-or-more figure appears in the sentence that prescribes the term rather than in the sentence that names the degree. A reader who found the degree answer in the first sentence and stopped has not reached it.",
          "Who counts as a person is broader than the word suggests. Statute 817.568(1)(e) takes the definition in Statute 1.01(3), which provides that the word person includes individuals, children, firms, associations, joint adventures, partnerships, estates, trusts, business trusts, syndicates, fiduciaries, corporations, and all other groups or combinations. Corporations, partnerships, trusts and estates therefore count toward the 10, 20 and 30 person thresholds. Counting only the human beings in a file undercounts what the paragraph is measuring.",
          "One structural point separates the base offense from the tiers above it. Paragraph (2)(a) reaches possession with intent to fraudulently use. Paragraphs (2)(b) and (2)(c) are written in terms of a person who fraudulently uses, so possession with intent does not by itself reach them. What the state can establish about use, as distinct from possession, is doing work at that boundary.",
        ],
      },
      {
        id: "minimums",
        heading: "Three years, five, then ten, and why the scoresheet does not lower them",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Each of the higher paragraphs carries a prescribed term in a sentence of its own. The second sentence of Statute 817.568(2)(b) reads that notwithstanding any other provision of law, the court shall sentence any person convicted of committing the offense described in that paragraph to a mandatory minimum sentence of 3 years' imprisonment. The second sentence of 817.568(2)(c) does the same at 5 years, and its third sentence at 10 years where the figure is $100,000 or more or the information of 30 or more persons was used. Those sentences attach to the paragraph, not to the dollar route within it, so a conviction resting on the person-count route with no proven loss carries the same minimum.",
          "Statute 817.568(3) then addresses the interaction with Florida's sentencing arithmetic directly, in both directions. If the minimum mandatory terms imposed under paragraph (2)(b) or paragraph (2)(c) exceed the maximum sentences authorized under Statute 775.082, Statute 775.084, or the Criminal Punishment Code under chapter 921, the mandatory minimum sentence must be imposed. If they are less than the sentence that could be imposed under those provisions, the sentence imposed must include the mandatory minimum term. The subsection also states that neither paragraph prevents a court from imposing a greater sentence of incarceration as authorized by law.",
          "That matters because the scoresheet on its own would point somewhere lower. Under the worksheet in Statute 921.0024(1)(a) a level 4 primary offense scores 22 sentence points and a level 5 primary offense scores 28, before anything else is added to the sheet. Statute 921.0024(2) provides that the lowest permissible sentence is any nonstate prison sanction where the total sentence points equal or are less than 44 points, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximums for the offenses committed, is appropriate. On a 817.568(2)(b) count, subsection (3) speaks to that gap by its own terms.",
          "Statute 775.082(10) is a separate provision people reach for, and it is narrower than it is usually quoted as being. It applies to an offense committed on or after July 1, 2009 which is a third degree felony but not a forcible felony as defined in Statute 776.08, excluding any third degree felony violation under chapter 810, and only where the total sentence points under 921.0024 are 22 points or fewer. Where it applies the court must impose a nonstate prison sanction, and the same subsection adds that if the court makes written findings that a nonstate prison sanction could present a danger to the public, the court may sentence the offender to a state correctional facility. It is a floor with an express exception written into it.",
          "The route this statute names for reducing or suspending a sentence is Statute 817.568(13), and its mechanics are worth reading exactly. The prosecutor may move the sentencing court to reduce or suspend the sentence of a person convicted under the section who provides substantial assistance in the identification, arrest, or conviction of that person's accomplices, accessories, coconspirators, or principals, or of any other person engaged in fraudulent possession or use of personal identification information. The arresting agency is to be given an opportunity to be heard in aggravation or mitigation, the motion may on good cause be filed and heard in camera, and the judge hearing it may reduce or suspend the sentence if the judge finds that the defendant rendered such substantial assistance. The motion belongs to the prosecutor and the decision to the judge. Nothing in the text gives a defendant a right to either.",
        ],
      },
      {
        id: "ladder",
        heading: "Every tier in Statute 817.568, and where the ranking chart stops",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "Level 4", note: "Statute 817.568(2)(a), the base offense: willfully and without authorization fraudulently using, or possessing with intent to fraudulently use, personal identification information concerning another person without first obtaining that person's consent. Value is not an element. Maximum from Statute 775.082(3)(e)." },
          { degree: "Second degree felony", maximum: "Up to 15 years, with a mandatory minimum of 3 years", offenseLevel: "Level 5", note: "Statute 817.568(2)(b). Reached where the pecuniary benefit, value of services received, payment sought to be avoided, or amount of injury or fraud is $5,000 or more, and reached separately where the information of 10 or more persons but fewer than 20 persons is used without consent. The person-count route carries no dollar element. Maximum from Statute 775.082(3)(d); the mandatory minimum is the second sentence of the paragraph." },
          { degree: "First degree felony", maximum: "Up to 30 years, with a mandatory minimum of 5 years", offenseLevel: "No entry for this paragraph on the ranking chart. Statute 921.0023(3) places a felony of the first degree that is not listed on the chart within offense level 7", note: "Statute 817.568(2)(c), at $50,000 or more on the same measures, and separately where the information of 20 or more persons but fewer than 30 persons is used. The paragraph's third sentence raises the mandatory minimum to 10 years at $100,000 or more, or where the information of 30 or more persons is used. Maximum from Statute 775.082(3)(b)1." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "Level 8", note: "Statute 817.568(6): fraudulently using, without authorization, the personal identification information of an individual who is younger than 18 years of age or 60 years of age or older, without first obtaining the consent of that individual or of his or her legal guardian. No dollar figure and no person count is an element. The chart entry ranked at level 8 is described there as fraudulent use of personal identification information of an individual under the age of 18." },
          { degree: "Second degree felony, carried on the ranking chart with the degree designation 2nd, PBL", maximum: "Up to 15 years for a felony of the second degree under Statute 775.082(3)(d). The chart's punishable-by-life designation carries up to life, a term of years not exceeding life", offenseLevel: "Level 9", note: "Statute 817.568(7), where the person is in the relationship of parent or legal guardian, or otherwise exercises custodial authority over the individual, and willfully and fraudulently uses that individual's personal identification information. The subsection's own words make it a felony of the second degree. The chart entry ranked at level 9 is described there as fraudulent use of personal identification information of an individual under the age of 18 by his or her parent, legal guardian, or person exercising custodial authority." },
          { degree: "Second degree felony", maximum: "Up to 15 years", offenseLevel: "No entry for this subsection on the ranking chart. Statute 921.0023(2) places a felony of the second degree that is not listed on the chart within offense level 4", note: "Statute 817.568(11), which names protected classes including an individual 60 years of age or older, a disabled adult as defined in Statute 825.101, a public servant as defined in Statute 838.014, a veteran as defined in Statute 1.01, and a first responder as defined in Statute 125.01045. No dollar figure is an element, so a single unauthorized fraudulent use sits here." },
          { degree: "Third degree felony", maximum: "Up to 5 years", offenseLevel: "No entry for these subsections on the ranking chart. Statute 921.0023(1) places a felony of the third degree that is not listed on the chart within offense level 1", note: "Statute 817.568(8)(a), for the personal identification information of a deceased individual or a dissolved business entity, which reaches possession with intent as well as use. Also Statute 817.568(9), for willfully and fraudulently creating or using, or possessing with intent to fraudulently use, counterfeit or fictitious personal identification information concerning a fictitious person, or concerning a real person without that person's consent, with intent to commit or facilitate a fraud on another person. Paragraphs (8)(b) and (8)(c) raise the deceased-victim offense to second and first degree on the same dollar-or-count structure, with 3-year and 5-year minimums of their own." },
          { degree: "First degree misdemeanor", maximum: "Up to 1 year", note: "Statute 817.568(4), possessing, using, or attempting to use the information without authorization and without consent for the purpose of harassing that person. Statute 817.568(1)(c) narrows harass to conduct intended to cause substantial emotional distress that serves no legitimate purpose, and states that the term does not include accepted commercial purposes or constitutionally protected conduct such as organized protests. Statute 817.568(5)(a) and Statute 817.568(10)(a) each reclassify a misdemeanor under this section as a third degree felony, and the closing language of each subsection ranks a reclassified misdemeanor in level 2 of the offense severity ranking chart. The same closing sentences also rank a reclassified felony one level above the ranking of the felony offense committed, under Statute 921.0022 in subsection (5) and under Statute 921.0022 or Statute 921.0023 in subsection (10). Maximum from Statute 775.082(4)(a)." },
          { degree: "Life felony", maximum: "Up to life", note: "Statute 817.568(10)(d), the reclassification in the last paragraph of the subsection, with unnumbered closing language after it. Where a person commits an offense described in this section and, for the purpose of obtaining or using personal identification information, misrepresents himself or herself to be a law enforcement officer, or an employee or representative of a bank, credit card company, credit counseling company, or credit reporting agency, or wrongfully represents that he or she is seeking to assist the victim with a problem with the victim's credit history, a felony of the first degree under this section is reclassified as a life felony. That closing language ranks a felony reclassified under the subsection one level above the ranking under Statute 921.0022 or Statute 921.0023 of the felony offense committed, so the level on this rung is read off the offense that was reclassified rather than assigned to the life felony on its own. Because the person-count routes in (2)(c) carry no dollar element, that rung is reachable in a case with no proven loss." },
        ],
      },
      {
        id: "definition",
        heading: "What counts as personal identification information, and why possession can be enough",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 817.568, the 2025 Florida Statutes",
          body: "The section is titled criminal use of personal identification information, and the offense in paragraph (2)(a) is named in the text itself: the offense of fraudulent use of personal identification information. Its words are that any person who willfully and without authorization fraudulently uses, or possesses with intent to fraudulently use, personal identification information concerning another person without first obtaining that person's consent commits that offense, which is a felony of the third degree, punishable as provided in Statute 775.082, Statute 775.083, or Statute 775.084. The phrase possesses with intent to fraudulently use is the part that surprises people. A completed transaction is not part of the base offense, so what was held and what it was held for become the questions rather than what was obtained. Statute 817.568(1)(f) then defines personal identification information as any name or number that may be used, alone or in conjunction with any other information, to identify a specific person, and the list that follows is introduced by the word including: a name, postal or electronic mail address, telephone number, social security number, date of birth, mother's maiden name, state-issued or United States-issued driver license or identification number, alien registration number, government passport number, employer or taxpayer identification number, Medicaid or food assistance account number, bank account number, credit or debit card number, or personal identification number or code assigned to the holder of a debit card; unique biometric data such as a fingerprint, voice print, or retina or iris image; a unique electronic identification number, address, or routing code; medical records; telecommunication identifying information or an access device; and other number or information that can be used to access a person's financial resources. Two further definitions decide who the protections run to and are worth separating. Statute 817.568(1)(e) defines person by reference to Statute 1.01(3), which sweeps in corporations, partnerships, trusts, estates and other groups, and that definition governs subsection (2). Statute 817.568(1)(d) defines individual as a single human being, and states that the term does not mean a firm, association of individuals, corporation, partnership, joint venture, sole proprietorship, or any other entity, and that narrower word is the one subsections (6), (7), (8) and (11) use, which is why subsection (8) has to name a dissolved business entity separately from a deceased individual. Statute 817.568(1)(b) supplies the meaning of the authorization element: empowerment, permission, or competence to act. Statute 817.568(1)(g) defines counterfeit or fictitious personal identification information as counterfeit, fictitious, or fabricated information in the similitude of the data outlined in paragraph (f) that, although not truthful or accurate, would in context lead a reasonably prudent person to credit its truthfulness and accuracy, which is what makes the fabricated-identity offense in subsection (9) chargeable. The object of that subsection is the counterfeit or fictitious term rather than the paragraph (f) definition, and by its own words it covers information that is not truthful or accurate and may concern a fictitious person. And Statute 817.568(14) states that the section does not prohibit any lawfully authorized investigative, protective, or intelligence activity of a law enforcement agency of this state or any of its political subdivisions, of any other state or its political subdivisions, or of the Federal Government or its political subdivisions.",
        },
      },
      {
        id: "protected",
        heading: "A child's information, and the tier that ranks a parent above a $100,000 theft",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Statute 817.568(6) does not ask what was obtained. It reaches any person who willfully and without authorization fraudulently uses personal identification information concerning an individual who is younger than 18 years of age or 60 years of age or older, without first obtaining the consent of that individual or of his or her legal guardian, and makes it a felony of the second degree. There is no dollar element and no person count in the subsection, so a single small transaction is graded the same way as a large one.",
          "Statute 817.568(7) adds a subsection built on the relationship rather than on the money. It reaches a person who is in the relationship of parent or legal guardian, or who otherwise exercises custodial authority over an individual who is younger than 18 years of age or 60 years of age or older, and who willfully and fraudulently uses that individual's personal identification information. Read against (6), its mens rea is written differently: the words without authorization do not appear in it, and it contains no lack-of-consent element. It is a felony of the second degree.",
          "The ranking is where this statute stops behaving like the rest of the code. On the offense severity ranking chart in Statute 921.0022, the entry for 817.568(6) is ranked at offense level 8 and the entry for 817.568(7) at offense level 9, which is the highest ranking anything in this section carries. For comparison, the chart ranks Statute 812.014(2)(a)1., theft of property valued at $100,000 or more, at offense level 7 as a felony of the first degree. A second degree felony under 817.568(7) is therefore ranked above a first degree grand theft of $100,000, and that is a sentence that would be nonsense about almost any other charge.",
          "Two features of those two entries are worth reading closely, and the chart supplies the rule for the first. Each entry is described on the chart as concerning an individual under the age of 18, so neither description mentions the 60-or-older branch of the same subsection. Statute 921.0022(2) provides that for purposes of determining which felony offenses are specifically listed in the chart and which severity level has been assigned to each of these offenses, the numerical statutory references in the left column and the felony degree designations in the middle column are controlling, and that the language in the right column is provided solely for descriptive purposes. The left column entries read 817.568(6) and 817.568(7) with no branch named, so on the terms of that provision the level attaches to the subsection and the narrower description in the right column does not cut it down. Separately, the chart carries the degree designation for 817.568(7) as 2nd, PBL, meaning second degree punishable by life, while the subsection's own words grade it a felony of the second degree punishable as provided in Statute 775.082, and Statute 775.082(3)(d) sets a term not exceeding 15 years for a felony of the second degree. Those readings do not produce the same maximum. That is a question for the lawyer handling the case, and it should be asked early rather than late.",
          "The ranking drives the arithmetic. Under the worksheet in Statute 921.0024(1)(a), a level 8 primary offense scores 74 sentence points and a level 9 primary offense scores 92, with nothing else yet added. Statute 921.0024(2) provides that when the total sentence points exceed 44, the lowest permissible sentence in prison months is calculated by subtracting 28 points from the total sentence points and decreasing the remaining total by 25 percent. A single count under either subsection is already past that 44-point figure before any additional offense, prior record, or legal status points are counted.",
          "Statute 817.568(11) covers a further set of protected people with no dollar element of any kind, naming classes including an individual 60 years of age or older, a disabled adult as defined in Statute 825.101, a public servant as defined in Statute 838.014, a veteran as defined in Statute 1.01, and a first responder as defined in Statute 125.01045. It is a felony of the second degree. The chart carries no entry for that subsection, and Statute 921.0023(2) places a felony of the second degree that is not listed on the chart within offense level 4.",
        ],
      },
      {
        id: "timeline",
        heading: "Three years from the use, one year from discovery inside a five year outer limit, and the subsections that clock is not written to reach",
        kind: "timeline",
        answers: ["next"],
        steps: [
          { when: "The day after the conduct, for the limitations clock", what: "Statute 775.15(3) provides that an offense is committed either when every element has occurred or, if a legislative purpose to prohibit a continuing course of conduct plainly appears, at the time when the course of conduct or the defendant's complicity therein is terminated, and that time starts to run on the day after the offense is committed. On the first of those branches the date is fixed by the use, or by the possession coupled with the intent, rather than by the day a statement was reconciled or a dispute was filed. Whether the continuing course of conduct branch is in play on a file with many names and many dates is argued from the charging document rather than settled here. A file can therefore be years old at the institution and recent at the courthouse, or the reverse." },
          { when: "3 years after the offense, for a charge under subsection (2), subsection (6) or subsection (7)", what: "Statute 817.568(19) provides that a prosecution of an offense prohibited under subsection (2), subsection (6), or subsection (7) must be commenced within 3 years after the offense occurred. It continues that a prosecution may be commenced within 1 year after discovery of the offense by an aggrieved party, or by a person who has a legal duty to represent the aggrieved party and who is not a party to the offense, if such prosecution is commenced within 5 years after the violation occurred. The discovery branch is what a bank's reconciliation date reaches, and 5 years after the violation is where the subsection stops it. Statute 775.15(4)(a) supplies what commencement means on a charge following an arrest: prosecution on a charge on which the defendant has previously been arrested or served with a summons is commenced by the filing of an indictment, information, or other charging document." },
          { when: "Where the subsection charged is one that 817.568(19) does not name", what: "Subsection (19) is written to reach a prosecution under subsection (2), subsection (6), or subsection (7). A charge filed under a different subsection of the same section, such as the harassment misdemeanor in Statute 817.568(4), the deceased-victim or dissolved-entity offense in 817.568(8), the fabricated-identity offense in 817.568(9), or the protected-class offense in 817.568(11), sits outside those words, and the period is supplied by the general law instead. Statute 775.15(2) provides that except as otherwise provided in that section, a prosecution for a felony of the first degree must be commenced within 4 years after it is committed, a prosecution for any other felony within 3 years after it is committed, and a prosecution for a misdemeanor of the first degree within 2 years after it is committed. Which subsection the information names is therefore a date question as well as an exposure question, and it is worth reading off the charging document early." },
          { when: "Where the two provisions do not line up, on a first degree felony count", what: "For a first degree felony under Statute 817.568(2)(c), the general provision and the section's own provision do not produce the same figure. Statute 775.15(2)(a) gives 4 years for a felony of the first degree, and its exception clause is written as except as otherwise provided in this section, which is keyed to Statute 775.15 rather than to Statute 817.568. Statute 817.568(19) says 3 years for a prosecution under subsection (2). That gap is a question to raise with counsel against the actual charging date rather than one a page can settle, and it is worth raising before it becomes academic." },
          { when: "The fraud discovery extension in Statute 775.15(12)(a), and why it may not be the one operating here", what: "Statute 775.15(12)(a) provides that if the period prescribed in subsection (2), subsection (8), subsection (9), subsection (10), or subsection (11) has expired, a prosecution may nevertheless be commenced for any offense, a material element of which is either fraud or a breach of fiduciary obligation, within 1 year after discovery of the offense by an aggrieved party or by a person who has a legal duty to represent an aggrieved party and who is himself or herself not a party to the offense, but in no case shall this provision extend the period of limitation otherwise applicable by more than 3 years. Statute 817.568(2)(a) is written in terms of a person who fraudulently uses, or possesses with intent to fraudulently use, so whether it is an offense a material element of which is fraud is a question that provision squarely raises. Note what the extension is keyed to, though: the subsections it names are subsections of Statute 775.15, not of Statute 817.568. Where 817.568(19) is the provision supplying the period, 775.15(12)(a) is not by its own terms the extension in play, and the section's own cap at 5 years after the violation is not the same instrument as an extension of up to 3 years beyond the otherwise applicable period." },
          { when: "Within 24 hours of arrest", what: "First appearance under Rule 3.130(a), where the judge addresses pretrial detention or conditions of release under rule 3.132 or rule 3.131." },
          { when: "30 days in custody, 60 days on pretrial release", what: "The charging deadlines in Rule 3.134, which turn on custody rather than on which subsection is alleged. Release under that rule is not a dismissal." },
          { when: "175 days from the formal charge", what: "The felony speedy trial period under Rule 3.191(a), running from the charging document as subdivision (d) defines it rather than from the arrest, with the recapture procedure in subdivision (o) as the remedy the rule points to." },
        ],
      },
      {
        id: "now",
        heading: "The accounts, the applications, and the device: this file was assembled before anyone called you",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that do not wait on anyone deciding whose account it was",
            items: [
              "You can decline to answer questions. That applies to an investigator calling from a bank, a card issuer, a credit bureau, or an employer's fraud unit exactly as it applies to a deputy, and it needs no reason.",
              "You can decline consent to a search of a phone, a laptop, an email account, or a cloud backup. On this charge the device and the login history are often the file itself, so the request arrives early and it usually arrives politely.",
              "A person entitled to appointment of counsel has counsel appointed under Rule 3.111(a) when the person is formally charged with an offense, or as soon as feasible after custodial restraint, or at the first appearance before a committing judge, whichever occurs earliest. Entitlement is what the rule turns on rather than the calendar, and the entitlement provision has a qualifier written into it. Rule 3.111(b)(1) provides that counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration including appeals from the conviction thereof, and the next sentence of the same subdivision provides that in the discretion of the court counsel does not have to be provided to an indigent person in a prosecution for a misdemeanor or violation of a municipal ordinance if the judge, at least 15 days prior to trial, files in the cause a written order of no incarceration certifying that the defendant will not be incarcerated in the case pending trial or probation violation hearing, or as part of a sentence after trial, guilty or nolo contendere plea, or probation revocation, with that 15 day requirement waivable by the defendant or defense counsel. The harassment offense in Statute 817.568(4) is a misdemeanor of the first degree, so a count under that subsection falls in the class of prosecution that sentence describes, which is worth raising rather than assuming. Rule 3.111(b)(4) defines indigent as a person unable to pay for the services of an attorney, including costs of investigation, without substantial hardship to the person or the person's family, and Rule 3.111(b)(5) has the court, before appointing a public defender, inform the accused that a lien for the services rendered by counsel may be imposed as provided by law, make inquiry into the financial status of the accused in a manner not inconsistent with the guidelines established by section 27.52, and require the accused to execute an affidavit of insolvency, with the accused responding to the inquiry under oath. Rule 3.130(c)(1) then provides that when the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel, and Rule 3.130(c)(2) requires a reasonable time to send for a lawyer you intend to retain, with the hearing postponed if necessary. Retaining a lawyer does not wait on any of that.",
              "What the state relies on here is documentary. Application files, account logs, and recorded calls come through discovery in the ordinary course, and they are examinable rather than something to reconstruct from memory.",
            ],
          },
          {
            heading: "Where each source in a personal identification information file is asking you to explain something",
            items: [
              "The account record. Who opened it, from what address, with which identifiers, and on which device. Statute 817.568(2)(a) makes the absence of consent an element, and Statute 817.568(1)(b) defines authorization as empowerment, permission, or competence to act, so a casual description of a shared login or a family arrangement is a statement about the element the case turns on.",
              "The device. Leave it as it is. Resetting a password, wiping a phone, clearing a browser profile, or deleting a message thread after an inquiry has started becomes conduct described in the same file, alongside the records it was meant to address.",
              "The application. Credit applications, account openings, benefits filings, and change-of-address requests are dated documents with identifiers printed on them, retained by the institution that took them, and available to an investigator before any conversation with you happens.",
              "The dispute paperwork. Signing a fraud affidavit, filing a chargeback, or working through a card issuer's fraud department while an investigation is open produces a written statement about the same transactions, taken down by the person receiving it and filed where it can be read later.",
              "The list of names. Statute 817.568(2)(b) reaches a felony of the second degree where the personal identification information of 10 or more persons, but fewer than 20 persons, is used without their consent, so how many people are in a file is an element rather than background detail. Walking an investigator through who is on a list, or accounting for why a name is there, is testimony about that element.",
              "The relationship, where Statute 817.568(7) is in play. As the tier section above sets out, that subsection is written without the lack-of-consent element the base offense carries. An account of having had permission is therefore addressed to a different subsection than the one charged, which is a reason to have that conversation with counsel before having it with anyone else.",
            ],
          },
        ],
      },
      {
        id: "record",
        heading: "A $1,001 the court cannot waive, and the chapter 817 count that decides whether this can be sealed",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "This section attaches a fixed sum at conviction. Statute 817.568(12) provides that in addition to any sanction imposed when a person pleads guilty or nolo contendere to, or is found guilty of, regardless of adjudication, a violation of this section, the court shall impose a surcharge of $1,001. Statute 817.568(12)(d) adds that the surcharge may not be waived by the court, and that in the event the person has been ordered to pay restitution in accordance with Statute 775.089, the surcharge shall be included in a judgment. The words regardless of adjudication carry it past a withhold, and the figure does not move with the tier, so it lands the same on the first degree misdemeanor in Statute 817.568(4) as on a felony count.",
          "Restitution here is measured by something other than the figure that sets the degree, and that gap is the part people do not expect. Statute 817.568(15)(a) provides that in addition to the victim's out-of-pocket costs, restitution may include payment of any other costs, including attorney's fees incurred by the victim in clearing the victim's credit history or credit rating, or any costs incurred in connection with any civil or administrative proceeding to satisfy any debt, lien, or other obligation of the victim arising as the result of the actions of the defendant. Because that measure is not the pecuniary benefit element that grades the offense, a count resting on the person-count route with little proven loss can still carry a restitution figure built out of what it took to undo the entries. Statute 817.568(15)(b) runs the other way for the same reason: the sentencing court may issue such orders as are necessary to correct any public record that contains false information given in violation of the section.",
          "What the record does to work is specific to the subject matter. The disposition names the conduct as fraudulent use of personal identification information, and the people who read that description are deciding access, to accounts, to payment systems, to patient files, to credentialing. That is why the sealing question on this charge tends to outlast the sentence.",
          "On sealing, whether the offense is barred outright was checked here rather than assumed. Statute 943.0584(2) makes a criminal history record ineligible for a certificate of eligibility for sealing, or for a court-ordered sealing, where the record is a conviction for an offense enumerated in its paragraphs (a) through (hh). Statute 817.568 is named in none of them. Paragraph (hh) is where a reader who stops at the named offenses gets the wrong answer, because it is not an offense name at all: it reaches any violation specified as a predicate offense for registration as a sexual predator pursuant to Statute 775.21, or sexual offender pursuant to Statute 943.0435, without regard to whether that offense alone is sufficient to require such registration. The barred set therefore does not close at paragraph (gg), and the check has to run through those two predicate lists as well. No chapter 817 offense appears in either of them.",
          "The live risk on this charge is not the identity theft count. It is the count that travels beside it, and it comes from the same chapter. Statute 943.0584(2)(v) bars a record that is a conviction for a violation of the Florida Communications Fraud Act, as provided in Statute 817.034. Paragraph (v) states no dollar figure and no degree floor, so the bar reaches that act down to Statute 817.034(4)(b)2., where the value of the property obtained or endeavored to be obtained by the communication is less than $300 and the offense is a misdemeanor of the first degree. Now read how that act is built. Statute 817.034(4)(b) provides that a person who engages in a scheme to defraud and, in furtherance of that scheme, communicates with any person with intent to obtain property from that person commits, for each such act of communication, communications fraud. Statute 817.034(4)(e) provides that notwithstanding any contrary provisions of law, separate judgments and sentences for organized fraud under paragraph (a) and for each offense of communications fraud under paragraph (b) may be imposed when all such offenses involve the same scheme to defraud.",
          "Those two provisions describe the same file the person-count route in Statute 817.568(2)(b) describes: a list of people, and a communication to each. So a reader on a charge that carries no permanent bar can be holding a charging document that carries one, and the way to find out is to read the counts rather than the offense name at the top. Statute 943.0584(1) closes the route people reach for first. It defines conviction, for the purposes of that bar, as a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld. A withheld adjudication on a listed chapter 817 count is inside that definition.",
          "Sealing does not always begin with a petition, and the automatic route asks nothing of the person. Statute 943.0595(2)(a) directs the department to automatically seal a criminal history record that does not result from an indictment, information, or other charging document for a forcible felony as defined in Statute 776.08 or for an offense enumerated in Statute 943.0435(1)(h)1.a.(I). Statute 776.08 is one undesignated sentence naming treason, murder and the violent offenses beside them, and closing with any other felony which involves the use or threat of physical force or violence against any individual. Fraudulent use of personal identification information carries no force element, and no subsection of it sits on the 943.0435 list, so that gateway is not what stands in the way here.",
          "What stands in the way here is a phrase further in. Statute 943.0595(2)(a) carries the words as to all counts through its dismissal and acquittal subparagraphs, including subparagraph 2., where a charging document was filed but was dismissed or entered nolle prosequi as to all counts, and subparagraph 4., where a judgment of acquittal was rendered as to all counts. Subparagraph 3. reaches a case in which the defendant was acquitted as to all counts by the verdict of a judge or jury. The exclusions in that paragraph attach to two of its four subparagraphs and not to the others: subparagraph 2. does not reach a dismissal pursuant to Statute 916.145 or Statute 985.19, and subparagraph 3. does not reach a defendant found not guilty by reason of insanity. Subparagraph 4., a judgment of acquittal rendered by a judge as to all counts, carries no exclusion of its own, and neither does subparagraph 1. In a file charged one count per named person, which is what the person-count structure of this statute tends to produce, as to all counts is the demanding part. Where the route does reach a record, Statute 943.0595(3)(a) has the clerk of the court transmit a certified copy of the disposition to the department, which seals the record on receipt, and Statute 943.0595(3)(b) then has the clerk keep the related court record confidential and exempt. Under 943.0595(3)(c) the record continues to be maintained by the department and other criminal justice agencies.",
          "A licensing board applies its own rules to a fraud finding and is not governed by anything in Statute 817.568, and immigration consequences turn on federal law and belong with an immigration attorney. Neither is decided on this page.",
        ],
      },
      {
        id: "forum",
        heading: "Venue follows the person whose information was used, and the charging office is not fixed to one circuit",
        kind: "prose",
        answers: ["who"],
        prose: [
          "Venue on this charge is written more broadly than on most, and the statute says why before it says what. Statute 817.568(17) records a legislative finding that, in the absence of evidence to the contrary, the location where a victim gives or fails to give consent to the use of personal identification information is the county where the victim generally resides. Statute 817.568(18) then provides that notwithstanding any other provision of law, venue for the prosecution and trial of violations of this section may be commenced and maintained in any county in which an element of the offense occurred, including the county where the victim generally resides. A file with no other connection to Hillsborough County can be tried here because the person whose information was used lives here, and the same rule works in reverse on a Tampa file with names in other counties.",
          "Which office brings it is not fixed either. Statute 817.568(16) provides that prosecutions for violations of this section may be brought on behalf of the state by any state attorney or by the statewide prosecutor. Read against the person-count routes, that matters: a file assembled to reach 10 or more persons, or 20 or more, is a file whose named people commonly sit in several circuits, and this section gives Florida a way to hold it together in one prosecution without needing a different sovereign to do it. So the office to ask about is decided by where the names are, not by where the arrest happened. In Hillsborough County a felony under this section is heard in circuit court, in the Thirteenth Judicial Circuit, and the Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
          "The statute also contemplates who investigates, and it funds them out of the same conviction. Statute 817.568(12)(a) directs that $500 of the surcharge be deposited into the Department of Law Enforcement Operating Trust Fund for the department to provide grants to local law enforcement agencies to investigate offenses related to the criminal use of personal identification information as provided in Statute 943.0412. Which agency assembled a particular file is answered by the report inside it rather than by any general rule, and that report is among the first things worth reading.",
          "There is no counterpart to this page in the federal section of this site, and that is the accurate position rather than a gap. The federal provision people mean by identity theft is not written as a standalone offense the way Statute 817.568 is. Under 18 U.S.C. 1028A(a)(1), a person who, during and in relation to any felony violation enumerated in subsection (c), knowingly transfers, possesses, or uses, without lawful authority, a means of identification of another person shall, in addition to the punishment provided for such felony, be sentenced to a term of imprisonment of 2 years. It attaches to a predicate felony, so the question that decides a federal forum is what that predicate is, and the answer to it lives with the federal charge pages on this site rather than on this one.",
          "Where that count does appear, its sentencing rule is unlike anything in the Florida statute. Under 18 U.S.C. 1028A(b) a court shall not place on probation any person convicted of a violation of the section, and, except as provided in its paragraph (4), no term of imprisonment imposed on a person under the section shall run concurrently with any other term of imprisonment imposed on the person under any other provision of law, including any term imposed for the felony during which the means of identification was transferred, possessed, or used. A federal case is heard in the United States District Court for the Middle District of Florida, Tampa Division, at 801 North Florida Avenue, where Florida's offense levels and the Criminal Punishment Code do not apply.",
          "For a Florida file, the offices already holding it are the agency that produced the report, the Office of the State Attorney for the Thirteenth Judicial Circuit or the Office of Statewide Prosecution depending on how far the names reach, and the Hillsborough County Clerk. If you are reading this before a first appearance, contacting a defense lawyer is the step that does not wait for a court date.",
        ],
      },
    ],
    faq: [
      { question: "Is identity theft a felony in Florida?", source: "PAA", answer: "Florida charges it as fraudulent use of personal identification information under Statute 817.568. The base offense in 817.568(2)(a) is a felony of the third degree, carrying up to 5 years under Statute 775.082(3)(e), and the same section rises to a felony of the second degree at 817.568(2)(b) and a felony of the first degree at 817.568(2)(c). Not everything in the section is a felony, though: Statute 817.568(4) makes willfully and without authorization possessing, using, or attempting to use another person's personal identification information, without that person's consent and for the purpose of harassing that person, a misdemeanor of the first degree, and Statute 817.568(5)(a) and 817.568(10)(a) each reclassify that misdemeanor as a third degree felony in the circumstances they describe." },
      { question: "How much has to be involved before it becomes a second degree felony?", source: "brief", answer: "Under Statute 817.568(2)(b) the dollar figure is $5,000 or more, measured as the pecuniary benefit, the value of the services received, the payment sought to be avoided, or the amount of the injury or fraud perpetrated. But the same paragraph reaches a felony of the second degree with no dollar figure at all where a person fraudulently uses the personal identification information of 10 or more persons, but fewer than 20 persons, without their consent, and under Statute 817.568(1)(e) and Statute 1.01(3) corporations, partnerships, trusts and estates count as persons for that threshold. Every conviction under that paragraph carries a mandatory minimum of 3 years' imprisonment under its second sentence. Other subsections reach the second degree without any dollar element, including 817.568(6) where the individual is younger than 18 or 60 years of age or older, and 817.568(11) for the protected classes it names." },
      { question: "Does it matter that the person whose information was used was a minor?", source: "brief", answer: "It changes the subsection. Statute 817.568(6) makes it a felony of the second degree to willfully and without authorization fraudulently use the personal identification information of an individual who is younger than 18 years of age or 60 years of age or older, without the consent of that individual or of his or her legal guardian, and no dollar figure is an element of it. On the offense severity ranking chart in Statute 921.0022, the entry for 817.568(6) is ranked at offense level 8 and is described there as concerning an individual under the age of 18. Statute 817.568(7) goes further where the person is a parent or legal guardian, or otherwise exercises custodial authority over that individual: the chart entry for it is ranked at offense level 9, which is higher than the level 7 the chart gives to a theft of property valued at $100,000 or more under Statute 812.014(2)(a)1." },
      { question: "What if I never actually got any money?", source: "brief", answer: "The base offense does not require it. Statute 817.568(2)(a) reaches a person who willfully and without authorization fraudulently uses, or possesses with intent to fraudulently use, personal identification information concerning another person without first obtaining that person's consent, so possession coupled with the required intent completes a third degree felony and no loss of any amount is an element. The higher paragraphs are written in terms of a person who fraudulently uses, so possession with intent does not by itself reach them, but their person-count routes carry no dollar element either: Statute 817.568(2)(b) reaches a second degree felony at 10 or more but fewer than 20 persons, and 817.568(2)(c) a first degree felony at 20 or more but fewer than 30 persons, at any value including none." },
      { question: "Is Florida identity theft a state charge or a federal charge?", source: "brief", answer: "Florida prosecutes it under Statute 817.568, and Statute 817.568(16) allows the prosecution to be brought by any state attorney or by the statewide prosecutor. A federal count can also appear, and 18 U.S.C. 1028A is structured differently: it applies during and in relation to a felony violation enumerated in its subsection (c), and adds a term of imprisonment of 2 years to the punishment for that felony. Under 1028A(b) a court may not place a person convicted under the section on probation, and the term does not run concurrently with any other term imposed under any other provision of law, including the term for the underlying felony, except as its paragraph (4) allows for another 1028A term imposed at the same time. Because it attaches to a predicate felony rather than standing alone, it normally arrives as a companion count. A federal case is heard in the Middle District of Florida rather than in circuit court, and Florida's Criminal Punishment Code does not apply to it." },
      { question: "Can an identity theft charge in Florida be sealed?", source: "drafted", answer: "Statute 817.568 is not among the offenses listed in Statute 943.0584(2), which is the provision that makes a record permanently ineligible for sealing or expunction where the record is a conviction for a listed offense. Sealing does not always start with a petition: Statute 943.0595(2)(a) directs the department to automatically seal a criminal history record in the situations it lists, including where an indictment, information, or other charging document was not filed or issued in the case, subject to the exclusions written into it, and under 943.0595(3)(a) the clerk transmits a certified copy of the disposition and the department seals the record on receipt. Where sealing is by petition, Statute 943.059(1) sets cumulative conditions covering the record itself, prior adjudications in this state, adjudication on the acts stemming from this arrest, current court supervision, and any prior sealing or expunction, and Statute 943.059(2)(a)1. requires a certificate of eligibility from the department before the petition is filed. Note that Statute 943.0584(1) defines conviction to include a plea of guilty or nolo contendere regardless of whether adjudication is withheld, which matters where another count on the same arrest is on that list." },
    ],
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
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
   * Path under /public to the organization's mark. Renders instead of the
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
   * organizations has its own brand policy. WEBSITE-PLAN.md Open Question 8.
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
 * actually holds it AND the strip names the certifying organization and the
 * certified area (Rule 4-7.14(a)(4)).
 *
 * So the five items from the client meeting are all confirmed: false. What
 * renders today is the three courts, which are established elsewhere in the
 * repo and are claims about where the firm appears rather than about what it
 * has been awarded.
 *
 * [NEEDS: board certification status, and if held, the certifying organization
 * and the certified area] WEBSITE-PLAN.md Open Question 7.
 * [NEEDS: confirm HCBA, NACDL, DUIDLA, and FJA memberships, and permission to
 * use each organization's mark] Open Question 8. Membership does not by itself
 * grant trademark usage rights.
 * [NEEDS: confirm FACDL membership] The Florida Association of Criminal Defense
 * Lawyers is the on-point credential for this firm and was missing from the
 * client list; FJA is primarily a plaintiff-side organization.
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
  // marks before the eight were known, and inventing organization names to
  // fill it would put guesses into the data where a real answer belongs. An
  // unconfirmed entry renders as an unlabelled square either way, so a slot
  // with no organization behind it is honest rather than lossy.
  // [NEEDS: which organizations fill slots 7 and 8, if any] Open Question 8.
  {
    label: "[NEEDS: organization]",
    kind: "membership",
    confirmed: false,
    logo: "/logos/placeholder-7.svg",
  },
  {
    label: "[NEEDS: organization]",
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
 * with generic alt text. The organization is never named, so the strip can show
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
