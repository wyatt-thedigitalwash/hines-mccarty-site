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
          "The general threshold is $750. At or above it the offense is grand theft, a felony. Below it the offense is petit theft, and which of the two petit theft degrees applies is not decided by that one number.",
          "Statute 812.014(2)(f) covers property valued at $100 or more but less than $750, and makes it petit theft of the first degree, a first degree misdemeanor carrying up to 1 year under Statute 775.082(4)(a). Statute 812.014(3)(a) then reaches theft of any property not specified in subsection (2), which is petit theft of the second degree, up to 60 days under 775.082(4)(b). So the lowest tier is narrower than people assume: it is what is left after subsection (2) has taken everything it covers.",
          "Where the property was taken decides more than what it was worth. Statute 812.014(2)(f) opens with the words except as provided in paragraph (d), and paragraph (d) is the dwelling route. Taken from a dwelling or its unenclosed curtilage, the grading changes at every level: under Statute 812.014(2)(e)1. property valued at less than $40 is petit theft of the first degree; under 812.014(2)(d)1. property valued at $40 or more but less than $750 is grand theft of the third degree, a felony; and under 812.014(2)(d)2. property valued at $750 or more is also grand theft of the third degree. A $500 item is a first degree misdemeanor taken from a shop and a third degree felony taken from a home.",
          "A list of specific items ignores value entirely. Statute 812.014(2)(c) opens with three value tiers at subparagraphs 1. to 3., and then at subparagraphs 4. to 13. names property that is grand theft of the third degree by what it is: a will, codicil, or other testamentary instrument; a firearm, except as provided in paragraph (g); a motor vehicle, except as provided in paragraph (a); a commercially farmed animal; a fire extinguisher installed in a building at the time of the taking; citrus fruit consisting of 2,000 or more individual pieces; property taken from a designated construction site identified by a posted sign; any stop sign; anhydrous ammonia; and any amount of a controlled substance as defined in Statute 893.02.",
          "A firearm is where degree understates exposure twice over. A stolen firearm is grand theft of the third degree under 812.014(2)(c)5. whatever it was worth, and the F.S. 921.0022 ranking chart puts that subparagraph at offense level 6, which is where a theft of $20,000 to $100,000 sits. And under Statute 812.014(2)(g), if the property stolen is a firearm and the offender has previously been convicted of grand theft of a firearm under subparagraph (c)5., it is grand theft of the second degree, which carries fifteen years rather than five.",
          "Prior convictions move the charge again, and they do it on two separate tracks. On the general track, Statute 812.014(3)(b) makes a petit theft by a person previously convicted of any theft a first degree misdemeanor, and 812.014(3)(c) makes a petit theft by a person previously convicted two or more times of any theft a felony of the third degree. On the dwelling track the escalation is faster: Statute 812.014(2)(e)2. makes a violation of (2)(e)1. by a person previously convicted of any theft a felony of the third degree on a single prior, and 812.014(2)(e)3. reaches two or more priors. One prior conviction is the difference between a misdemeanor and a felony where a dwelling is involved.",
        ],
      },
      {
        id: "ladder",
        heading: "The whole theft ladder, from 60 days to thirty years",
        kind: "penalties",
        answers: ["facing"],
        penalties: [
          { degree: "First degree felony, grand theft", maximum: "Up to 30 years", offenseLevel: "Level 8", note: "Cargo valued at $50,000 or more that has entered the stream of interstate or intrastate commerce, under 812.014(2)(a)2. This is the highest offense level any theft under this statute carries, and it attaches at a smaller number than the level 7 row below it." },
          { degree: "First degree felony, grand theft", maximum: "Up to 30 years", offenseLevel: "Level 7", note: "Property valued at $100,000 or more, under 812.014(2)(a)1. Two further first degree routes under 812.014(2)(a)3. carry no dollar threshold of their own: using a motor vehicle as an instrumentality in a way that damages another person's real property, and causing damage of more than $1,000 to another person's property in the course of the theft. The ranking chart lists no level for either, so their level is not stated here." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 7", note: "Four routes rank here, above the ordinary $20,000 tier below: a firearm where the offender has a prior conviction for grand theft of a firearm, under 812.014(2)(g); cargo worth less than $50,000 taken from the stream of commerce, under 812.014(2)(b)2.; emergency medical equipment worth $300 or more, under 812.014(2)(b)3.; and law enforcement equipment worth $300 or more, under 812.014(2)(b)4." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 6", note: "Property valued at $20,000 or more but less than $100,000, under 812.014(2)(b)1. Coordinating one or more other people in a theft of property worth more than $3,000 is also a second degree felony at this level, under 812.014(6), whatever each person's own share came to." },
          { degree: "Second degree felony, grand theft", maximum: "Up to 15 years", offenseLevel: "Level 5", note: "Property taken from more than 20 dwellings, under 812.014(2)(d)3. This is the one second degree route ranked below the ordinary tier." },
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
        heading: "Three theft charges, one five-year maximum, three different scoresheets",
        kind: "prose",
        answers: ["facing"],
        prose: [
          "Five rows above are the same degree, third degree felony, with the same five year maximum, and they sit at offense levels 1, 2, 3, 4 and 6. The degree on the paperwork does not tell you where a case sits. Usually the value decides it, and the value is something the State has to establish rather than something the accusation settles. But not always: a stolen firearm is level 6 whatever it was worth, the listed items are level 4 whatever they were worth, and a petit theft with two priors is level 1. Where the charge rests on what the property was rather than what it cost, the value is not the argument.",
          "That figure comes from somewhere. A receipt, a replacement quote, an insurance schedule, and a complainant's recollection are four kinds of evidence and they do not always agree. Where a number sits near a threshold, one valuation can be the difference between two degrees.",
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
          { when: "Within 24 hours of arrest", what: "First appearance. Rule 3.130(a) provides that except when previously released in a lawful manner, every arrested person must be taken before a judge, in person or by audio-video communication technology, within 24 hours. The judge determines pretrial detention or conditions of release under rule 3.132 or rule 3.131." },
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
        heading: "The four things a theft charge rests on, and the one that is usually contested",
        kind: "bullets",
        answers: ["facing"],
        bullets: [
          "That the property belonged to someone else.",
          "That the defendant knowingly obtained or used it, or endeavored to obtain or use it. The statute reaches an attempt in the same breath as a completed taking.",
          "That the defendant intended to deprive the owner of a right to the property or a benefit from it, or to appropriate it to someone not entitled to it. A temporary intent is enough.",
          "What the property was worth, where the charge rests on value rather than on the item taken or the place it was taken from.",
        ],
      },
      {
        id: "statute",
        heading: "Statute 812.014, and the point where petit theft stops",
        kind: "statute",
        answers: ["facing"],
        statute: {
          citation: "Florida Statute 812.014, the 2025 Florida Statutes",
          body: "The statute defines theft in one sentence and then spends its length on grading. A person commits theft if he or she knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to either temporarily or permanently deprive the other person of a right to the property or a benefit from the property, or to appropriate the property to his or her own use or to the use of any person not entitled to the use of the property. Everything after that is grading, and the grading runs on more axes than value. Paragraphs (a) and (b) are usually read as the value tiers, and mostly they are, but each also grades by the item taken: a semitrailer deployed by a law enforcement officer under (2)(a)1., cargo in the stream of commerce under (2)(a)2. and (2)(b)2., and emergency medical or law enforcement equipment at $300 or more under (2)(b)3. and (2)(b)4. Subparagraphs (c)4. to 13. add a further item list, (d) and (e)1. grade by the place the property was taken from, and (e)2., (e)3. and (g) grade by a prior conviction. Subsection (6) grades by role rather than by property at all, reaching a person who coordinates one or more others in a theft of more than $3,000. Statute 812.014(3)(a) is not one of those rules. It is the remainder: theft of any property not specified in subsection (2). So the second degree misdemeanor is what is left after every paragraph of subsection (2) has taken what it covers, which is why reading (3)(a) first produces the wrong answer for a dwelling at any value, for the listed items at any value, and for cargo in the stream of commerce at any value at all.",
        },
      },
      {
        id: "civil",
        heading: "The demand letter that arrives separately from the prosecution",
        kind: "prose",
        answers: ["consequences"],
        prose: [
          "A theft accusation can produce a second case that has nothing to do with the State. Statute 772.11(1) gives a person who proves by clear and convincing evidence that they were injured by a theft a cause of action for threefold the actual damages, with minimum damages of $200 and reasonable attorney's fees and court costs. That standard of proof is higher than the ordinary civil one and lower than the criminal one.",
          "The statute requires a written demand for $200 or the treble damage amount before an action is filed, and provides that a person who complies with the demand within 30 days is given a written release from further civil liability. That release addresses the civil claim only. It does not end, settle, or bind the criminal case, and the two are decided by different people on different records.",
        ],
      },
      {
        id: "record",
        heading: "Statute 812.014 is not on the permanent bar list, and what follows from that",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "An arrest generates a criminal history record, and in Florida those records are public unless a court seals or expunges them. That is the practical answer to what this does to work: an ordinary background check can surface the arrest whether or not the case ends in a conviction, and it stays visible for as long as the record is unsealed. A theft allegation carries particular weight with employers who handle money or inventory, which is why the sealing question below is usually the one that outlasts the sentence. Theft under Statute 812.014 is not on the list of offenses that are permanently barred. Statute 943.0584(2) makes a record ineligible where it is a conviction for one of the offenses it enumerates, and that list includes robbery under 812.13, drug trafficking under 893.135, and the Florida Communications Fraud Act at 817.034. Statute 812.014 appears nowhere in it.",
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
      { question: "How much does the property have to be worth for a theft to be grand theft?", source: "keywords.md", grade: "6-12mo", answer: "The general threshold is $750, and the degree rises again at $20,000 and at $100,000. But $750 only settles it where the property was not taken from a dwelling and is not one of the items the statute lists. From a dwelling, Statute 812.014(2)(d)1. makes property worth $40 or more a third degree felony. And subparagraphs 4. to 13. of Statute 812.014(2)(c) make certain property grand theft whatever its value." },
      { question: "Is stealing $500 a felony in Florida?", source: "drafted", answer: "It depends where it was taken from, and on whether there are prior theft convictions. On a first theft charge, taken from a shop, $500 is petit theft of the first degree under Statute 812.014(2)(f), a misdemeanor carrying up to 1 year. Taken from a dwelling or its unenclosed curtilage, the same $500 is grand theft of the third degree under 812.014(2)(d)1., a felony carrying up to 5 years. Taken from a shop, two or more prior theft convictions make the same $500 a third degree felony under 812.014(3)(c), which reaches a petit theft by someone with that record. Taken from a dwelling it is already a felony without them. It is also a felony at any value if the property is one of the items in Statute 812.014(2)(c)4. to 13., which include a firearm, a motor vehicle, a will, a stop sign, and any amount of a controlled substance." },
      { question: "What is third degree grand theft in Florida?", source: "drafted", answer: "It is the lowest felony tier of theft, with a five year statutory maximum under Statute 775.082. One degree is not one exposure, and the spread is wider than most people expect: on the Florida offense severity ranking chart a third degree theft can sit at level 2 at $750, level 3 at $5,000, level 4 at $10,000 or for one of the items the statute lists, level 6 where the property is a firearm under Statute 812.014(2)(c)5. whatever the firearm was worth, or level 1 where it is a petit theft with two prior theft convictions. The level, not the degree, is what the sentencing scoresheet uses." },
      { question: "Who decides what the property was worth?", source: "drafted", answer: "Value is something the State has to prove, not something the accusation settles. Statute 812.014 sets the degree by the value of the property where the charge rests on value, so the figure has to be established like any other part of the case, and its source is open to examination." },
      { question: "Can a grand theft charge be sealed later?", source: "drafted", answer: "Theft under Statute 812.014 is not among the offenses Statute 943.0584(2) bars permanently. Whether a particular record qualifies then turns on the cumulative conditions in Statute 943.059(1), and on a certificate of eligibility from the department under 943.059(2). Note that 943.0584(1) defines conviction to include a plea regardless of whether adjudication is withheld." },
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
          body: "Chapter 812 absorbs this conduct by name. Statute 812.012(3) defines obtains or uses, and paragraph (d)1. of that definition covers conduct previously known as stealing, larceny, purloining, abstracting, embezzlement, misapplication, misappropriation, conversion, or obtaining money or property by false pretenses, fraud, or deception. That is how Statute 812.014, titled Theft, reaches a case that begins with lawful access: it does not need a separate offense because its definitional section already names one. Statute 812.014 itself reaches a person who knowingly obtains or uses, or endeavors to obtain or to use, the property of another with intent to deprive the owner of a right to it or to appropriate it to someone not entitled to it. A second statute can also apply. Statute 817.034(3)(d) defines a scheme to defraud as a systematic, ongoing course of conduct with intent to defraud one or more persons, or with intent to obtain property from one or more persons by false or fraudulent pretenses, representations, endorsements of nonconsenting parties, or promises or willful misrepresentations of a future act, and 817.034(4)(a) makes engaging in such a scheme and obtaining property organized fraud. A third route sits in the theft statute itself: Statute 812.014(6) reaches a person who, alone or with others, coordinates the activities of one or more people in committing a theft of property worth more than $3,000, and makes that a felony of the second degree whatever any one person's share came to. That definition does not describe an isolated act, so where organized fraud is charged the pattern is an element rather than a way of describing the total. Either statute can be the vehicle, and both can appear on the same charging document. Whether both can stand at conviction for the same conduct is a separate double jeopardy question with its own case law, and it is one to raise with a lawyer rather than one this page settles.",
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
          "The maximums behind those degrees come from Statute 775.082: up to 5 years for a third degree felony, up to 15 for a second, and up to 30 for a first. A maximum is a ceiling rather than a prediction. Statute 775.082(10) sets a floor in the other direction for some third degree felonies: where the offense is a third degree felony that is not a forcible felony as defined in Statute 776.08, and the total sentence points under Statute 921.0024 are 22 points or fewer, the court must impose a nonstate prison sanction, unless it makes written findings that such a sanction could present a danger to the public, in which case it may impose a state prison sentence.",
          "Statute 817.034 also carries two features that change the arithmetic rather than the tier. Under 817.034(4)(b) each act of communication made in furtherance of the scheme is a separate offense, graded by the value obtained or sought in that communication. Under 817.034(4)(e) sentences for communications fraud may be imposed cumulatively. That is what the statute authorizes, not a forecast of how any case will be charged.",
          "The offense levels diverge too, and not always in the direction people expect. A $25,000 accusation is a second degree felony either way, at offense level 6 as theft and level 5 as organized fraud. The degree is identical, the scoresheet input is not, and the scoresheet is what the sentence is calculated from. The full value-to-offense-level comparison belongs in one place rather than being reproduced on each page that touches it.",
        ],
      },
      {
        id: "authorized",
        heading: "Why authorized access moves this case to intent, and what still has to be proved",
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
          { when: "The investigative period, which the procedural rules do not reach", what: "An employer, auditor, or insurer reviews records and reaches a conclusion. The clocks in the rest of this table begin at an arrest or a formal charge, so none of them has started. One deadline is running, though, and it is running against the State rather than against you: under Statute 775.15(2) a prosecution for a first degree felony must be commenced within 4 years of the offense and for any other felony within 3 years, and Statute 775.15(3) starts that clock the day after the offense, not on the day anyone discovers it. Under Statute 775.15(4)(a) a prosecution is only commenced when a charging document is filed. There is a narrow extension where fraud or a breach of fiduciary obligation is a material element, in Statute 775.15(12)(a), but it applies only after the ordinary period has run, gives one year from discovery by an aggrieved party, and can never extend the ordinary period by more than 3 years." },
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
          "This is the charge where the collateral question usually arrives before the legal one, because the accusation and the employment almost always come from the same place. Florida criminal history records are public unless they are sealed or expunged, and an arrest record is visible to an ordinary background check while it stays that way. Sealing is not always something you have to ask for. Under Statute 943.0595 the department seals a record automatically, with no petition and no fee, where no charging document was filed, or where the charges were dismissed, nolle prossed, or ended in acquittal as to all counts. The words as to all counts do the work: where one count survives while others fall away, the automatic route gives nothing. Records charged as a forcible felony as defined in Statute 776.08, or as one of the offenses enumerated in Statute 943.0435(1)(h)1.a.(I), are excluded, and 776.08 is not a closed list because it ends with any other felony involving the use or threat of physical force or violence against an individual.",
          "The employer may also sue, and that claim is decided separately from the prosecution. Statute 772.11(1) sets a clear and convincing standard and allows treble damages with fees, and it requires a written demand first. The statute provides that a person who complies with the demand within 30 days after receiving it is given a written release from further civil liability for the specific act of theft or exploitation, by the person who made the demand. Both limits matter. It releases that claimant and not the world, and it covers that act and not a course of conduct made up of several. It also says nothing about a prosecution, which is decided by a different office on a different record. The same subsection carries a good deal more, including a bar on punitive damages and an award of fees and costs to the defendant where the court finds the claim was without substantial fact or legal support.",
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
          "The second is that the general eligibility conditions in Statute 943.059(1) decide most cases before any list does, and they are cumulative. Statute 943.059(1)(c) requires that the person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest, so an adjudication on any count in the case ends it. Statute 943.059(1)(b) requires that the person has never been adjudicated guilty in this state of a criminal offense, which is any criminal offense rather than a listed few, and measures that as of the date the application for a certificate of eligibility is filed. A certificate from the department is required before a petition, and sealing is a remedy available once.",
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
      { question: "Is there an embezzlement law in Florida?", source: "drafted", answer: "Not under that name. The conduct is prosecuted as theft under Statute 812.014, and where the accusation covers a series of transactions it may instead be charged as organized fraud under Statute 817.034. Embezzlement describes the fact pattern rather than the charge on the paperwork." },
      { question: "How much do you have to take for it to be a felony in Florida?", source: "drafted", answer: "Charged as theft, $750 is the general line, and it only settles the question where the property was not taken from a dwelling and is not one of the items the statute lists. Taken from a dwelling or its unenclosed curtilage the line drops to $40 under Statute 812.014(2)(d)1., the listed items are felonies whatever they were worth, and prior theft convictions open a felony route of their own. Above the general line the degree rises at $20,000 and again at $100,000. Charged as organized fraud under Statute 817.034, the tiers sit at less than $20,000, at $20,000 or more, and at $50,000 or more, so the same money can produce a different degree depending on the count." },
      { question: "Does the charging choice change the exposure?", source: "drafted", answer: "It can, and not always as expected. A $25,000 accusation charged as theft is a second degree felony at offense level 6; the same figure as organized fraud is a second degree felony at offense level 5. The degree is identical and the offense level is not, and the offense level is what the scoresheet uses." },
      { question: "Can an embezzlement record be sealed afterwards?", source: "drafted", answer: "It depends on how the case ends. Statute 943.0584(2) bars sealing where the record is a conviction for a listed offense, and the Florida Communications Fraud Act at Statute 817.034 is listed at paragraph (v). Theft under Statute 812.014 is not listed. Because the trigger is the conviction rather than the charge, a case charged under 817.034 that does not end in a conviction on that count is not barred by it." },
      { question: "If I pay the money back, does the case go away?", source: "drafted", answer: "Repayment does not answer the elements of the offense, so it does not by itself end a criminal case. It can be relevant at other stages, including in negotiation and at sentencing, and it may matter to a separate civil claim. Because how a repayment is characterized carries its own consequences, it is a decision to make with a lawyer." },
      { question: "Does it matter that I was allowed to handle the money?", source: "drafted", answer: "It changes which part of the case is in dispute. Because access was authorized at the outset, the argument is rarely about whether property was obtained and is usually about use and intent. Statute 812.014 requires an intent to deprive the owner of a right or benefit, or to appropriate the property to someone not entitled to it, and that is a separate question from whether a transaction happened." },
      { question: "Is this a state case or a federal case?", source: "drafted", answer: "It can be either, and the answer is visible on the paperwork rather than in the conduct. A case brought by the Office of the State Attorney for the Thirteenth Judicial Circuit under Florida law is heard in circuit court in Hillsborough County, and that is the track this page covers. A federal prosecution requires a federal hook, which is a feature of the institution the money belonged to or of the funding behind it rather than of how the money was taken. Which system you are in is stated on the charging document and by the court named on it, so that is the first thing to look at, and it is a question to put to a lawyer early because the two tracks run on different rules." },
    ],
    // [NEEDS: Layer 2 targets from the brief] W1-02 names a professional
    // license guide and the 33-day correction guide. Neither has a route yet,
    // so the generic hub stands rather than shipping a broken link.
    relatedGuides: [{ label: "Tools and guides", href: "/resources/tools-and-guides" }],
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
  // MONEY LAUNDERING, federal. From docs/research/briefs/FED-01-money-laundering.md.
  //
  // Overlap page under Section 4.6 and C10. Forum section opens the body, one
  // cross-link, no shared copy. Its sibling at /white-collar-defense/
  // money-laundering is WRITTEN, so the duplication risk here is live rather
  // than theoretical, and this page was checked against that entry directly and
  // not only against the brief.
  //
  // Plan Section 4.6.2 made this page conditional: it survives only if built on
  // the predicate list, the absence of thresholds, and federal sentencing. The
  // condition was verified SATISFIED in W1 and this page honours it.
  //
  // THE CONDUCT LANGUAGE IS DELIBERATELY ABSENT. 18 U.S.C. 1956(a)(1) and F.S.
  // 896.101(3) describe near-identical conduct: knowledge that property is the
  // proceeds of unlawful activity, transactions designed to conceal nature,
  // location, source, ownership or control, and avoidance of reporting
  // requirements. The state page quotes that material. Repeating it here would
  // make two pages that read as one, which is exactly what C9 exists to
  // prevent. What differs is the DEFINITION of the predicate and the presence
  // or absence of a threshold, and that is what this page is built on.
  //
  // C9: the offense turns on a finite statutory predicate list rather than on
  // an amount. 1956 sets no dollar threshold at all; 1957 turns on a single
  // $10,000 figure. The state page's entire ladder is dollar thresholds at
  // $300, $20,000 and $100,000 across a 12 month window, so the two pages make
  // opposite structural claims and neither restates the other.
  //
  // No Florida offense level appears anywhere on this page, because a federal
  // charge does not carry one. The penalties table has no offenseLevel column
  // for that reason, which is itself a differentiator from the sibling.
  //
  // [NEEDS: USSG 2S1.1 base offense level mechanics] UNMET, and left UNMET by
  // instruction. The sentencing section stands on USSC published statistics
  // without it. A search engine's synthesis of 2S1.1 is not a fetched source.
  // [NEEDS: the RICO predicate list at 18 U.S.C. 1961(1)] Not fetched. This
  // page describes 1956(c)(7)(A) as incorporating that list, which is verified,
  // and does NOT enumerate its contents, which is not.
  // [NEEDS: limitations period for federal money laundering] Not fetched.
  // [NEEDS: investigating agency in this district] Not verified. No field
  // office or agency is named.
  // [NEEDS: whether self-laundering is chargeable] C12-B byline class. Case
  // law. Not answered here in any form.
  // ---------------------------------------------------------------------
  "federal/money-laundering": {
    title: "Federal money laundering charges",
    metaTitle: "Federal Money Laundering Charges | Hines & McCarty",
    metaDescription:
      "Federal money laundering turns on a list of predicate offenses rather than on an amount. Statute 1956 sets no dollar threshold at all. What the government has to identify, and how these cases are sentenced.",
    lead: "Federal money laundering does not start at a dollar figure. Under 18 U.S.C. 1956 the offense turns on whether the money came from something on a specific statutory list, and the section sets no minimum amount at all.",
    counterpart: {
      href: "/white-collar-defense/money-laundering",
      label: "Money laundering charges under Florida law",
      note: "Florida prosecutes money laundering under its own statute, and the two charges are built on different foundations rather than being versions of one another. The Florida offense is graded by amount, starting at transactions exceeding $300 measured across any 12 month period, and it carries a Florida offense level that feeds a state sentencing scoresheet. A federal charge under 18 U.S.C. 1956 has no dollar threshold and no Florida offense level, and it is calculated under the federal sentencing guidelines instead. The charging document will say which one you are facing.",
    },
    statute: {
      citation:
        "18 U.S.C. 1956 and 18 U.S.C. 1957, Current 2024 Main Edition, Office of the Law Revision Counsel",
      body: "The federal scheme is built around a defined term rather than around an amount. Section 1956 reaches transactions involving the proceeds of specified unlawful activity, and 1956(c)(7) defines that term by enumeration. It incorporates the racketeering activity listed in the RICO statute at 18 U.S.C. 1961(1), excluding certain currency reporting violations. It adds specified foreign offenses, including drug manufacturing and distribution, violent crimes, fraud against foreign banks, public corruption, munitions smuggling, extraditable offenses and human trafficking. It adds continuing criminal enterprises under the Controlled Substances Act. It adds a long list of federal crimes spanning aircraft destruction, espionage, counterfeiting, smuggling, bank fraud, terrorism related offenses and environmental violations. It adds felony violations of the water pollution, ocean dumping, ship pollution, safe drinking water and waste disposal statutes. It adds federal health care fraud offenses. And it adds endangered species trafficking where the value exceeds $10,000. The practical consequence is that a federal charge has to name its predicate offense and locate it inside that enumeration, rather than resting on proceeds described in general terms. Section 1957 is a separate offense with a different shape. It reaches monetary transactions in criminally derived property of a value greater than $10,000, and 1957(f)(1) defines a monetary transaction as the deposit, withdrawal, transfer or exchange, in or affecting interstate or foreign commerce, of funds or a monetary instrument by, through or to a financial institution. That $10,000 figure is the only dollar threshold in either section.",
    },
    penalties: [
      {
        degree: "18 U.S.C. 1956(a)(1)",
        maximum: "Up to 20 years",
        note: "The section provides a fine of not more than $500,000 or twice the value of the property involved in the transaction, whichever is greater, or imprisonment for not more than twenty years, or both. No Florida offense level applies to a federal charge.",
      },
      {
        degree: "18 U.S.C. 1957",
        maximum: "Up to 10 years",
        note: "Under 1957(b)(1), a fine under title 18 or imprisonment for not more than ten years or both. This is the section carrying the $10,000 threshold.",
      },
    ],
    elements: [
      "A financial transaction, or an attempt at one, in the case of Statute 1956; or a monetary transaction as Statute 1957(f)(1) defines it, meaning a deposit, withdrawal, transfer or exchange of funds or a monetary instrument by, through or to a financial institution.",
      "That the property involved was the proceeds of specified unlawful activity, which Statute 1956(c)(7) defines by enumeration rather than in general terms. Identifying the predicate is part of the government's case, not background to it.",
      "The defendant's knowledge, which the statute treats separately from whether the predicate is established as a fact.",
      "For Statute 1957 only, that the value of the criminally derived property was greater than $10,000. Statute 1956 states no amount.",
      "The interstate or foreign commerce element, which is what places the conduct in federal court in the first place.",
    ],
    defenseApproach: [
      "The first question on a federal charge is which section is charged, because the two are built differently. Statute 1956 has no dollar threshold, so the amount is not an element and cannot be attacked as one. Statute 1957 has a single threshold at more than $10,000 in criminally derived property, and there the value is an element. A case can involve both sections and the analysis is not the same for each count.",
      "The second is the predicate. Statute 1956(c)(7) does not reach proceeds of unlawful activity in general terms. It reaches proceeds of the offenses it enumerates, so the government has to identify a specific predicate and place it inside the list. Where the underlying activity is not established, unexplained money does not become laundering by default. This is the point at which federal and Florida law diverge most clearly: Florida defines the predicate by a single cross reference to its racketeering statute, while the federal definition runs to seven separate categories.",
      "The third is what Statute 1957 actually requires. Its transaction has to run by, through or to a financial institution, which is narrower than the general transaction concept in Statute 1956. That is a question answerable from records rather than from characterization.",
      "It is worth understanding how the sentence is calculated, because it is not calculated the way a Florida sentence is. There is no Florida offense level and no state scoresheet. A federal sentence is calculated under the federal sentencing guidelines, and the guideline provision for these offenses is separate from the statutory maximum. The published outcome data below describes what has actually happened in these cases nationally, which is a different and more useful thing than the maximum.",
      "On the numbers that do exist: the United States Sentencing Commission reported that of 66,662 cases reported to it in fiscal year 2025, 1,170 involved money laundering. Of those individuals, 90 percent were sentenced to prison, and the average sentence length was 69 months. Those are national figures describing past cases and they are not a prediction about any particular one.",
    ],
    forum: [
      "A federal money laundering case is heard in the United States District Court rather than in a Florida circuit court, and for Hillsborough County that means the Middle District of Florida.",
      "Hillsborough County sits in the Tampa Division of the Middle District, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue. The Tampa Division covers Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk and Sarasota counties.",
      "The prosecuting office is the United States Attorney's Office for the Middle District of Florida. A federal case follows federal procedure throughout, which differs from state practice in ways that begin well before any court appearance.",
      // [NEEDS: investigating agency practice in this district] Not verified
      // against any agency's own site. No field office is named.
      // [NEEDS: whether the US Attorney's Office has a dedicated unit]
    ],
    faq: [
      {
        question:
          "What is the difference between 18 U.S.C. 1956 and 18 U.S.C. 1957?",
        source: "drafted",
        answer:
          "They are separate offenses with different structures and different maximums. Statute 1956 reaches transactions involving the proceeds of specified unlawful activity and states no dollar threshold at all, carrying up to 20 years. Statute 1957 reaches monetary transactions in criminally derived property of a value greater than $10,000, and it defines a monetary transaction as one made by, through or to a financial institution. It carries up to 10 years.",
      },
      {
        question: "Does federal money laundering have a dollar minimum?",
        source: "drafted",
        answer:
          "Statute 1956 does not. There is no minimum amount in that section. Statute 1957 is the one with a figure in it, and that figure is a value greater than $10,000 in criminally derived property. This is a genuine difference from Florida law, where the offense begins at transactions exceeding $300 and the amount sets the degree.",
      },
      {
        question: "What counts as specified unlawful activity?",
        source: "drafted",
        answer:
          "It is a defined term, and Statute 1956(c)(7) defines it by listing rather than by description. The list incorporates the racketeering activity named in the RICO statute at 18 U.S.C. 1961(1), and then adds six further categories: certain foreign offenses, continuing criminal enterprises under the Controlled Substances Act, a long list of federal crimes, felony violations of several environmental statutes, federal health care fraud offenses, and endangered species trafficking above $10,000 in value.",
      },
      {
        question: "Do they have to prove what crime the money came from?",
        source: "drafted",
        answer:
          "The statute requires that the property was the proceeds of specified unlawful activity, and that term is defined by the enumerated list in Statute 1956(c)(7). So the source is part of what has to be established rather than an incidental detail, and it has to be a source that falls inside the list.",
      },
      {
        question:
          "How is a federal money laundering sentence calculated, and how does it differ from a Florida one?",
        source: "drafted",
        answer:
          "A Florida sentence runs through an offense level on a state sentencing scoresheet. A federal sentence does not use either. It is calculated under the federal sentencing guidelines, which are a separate scheme, and the statutory maximum in the section is a ceiling rather than the calculation. This is why a Florida offense level appears nowhere on this page.",
      },
      {
        question: "How much time do people actually get for money laundering?",
        source: "drafted",
        answer:
          "The United States Sentencing Commission publishes the figures. Of 66,662 cases reported to the Commission in fiscal year 2025, 1,170 involved money laundering. Of those individuals, 90 percent were sentenced to prison and the average sentence length was 69 months. Those are national figures about cases that have already been decided, and they describe a range of very different situations rather than predicting any one of them.",
      },
      {
        question: "Is my case state or federal?",
        source: "drafted",
        answer:
          "The charging document says so, and the two are not alternative labels for one case. A Florida charge is brought by the State Attorney under the Florida statute in circuit court. A federal charge is brought by the United States Attorney's Office under Statute 1956 or 1957 in the United States District Court, which for Hillsborough County is the Middle District of Florida, Tampa Division.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
  },

  // ---------------------------------------------------------------------
  // DUI, state. From docs/research/briefs/ST-04-dui.md.
  //
  // Built first in the page-writing order (CASES-WE-DEFEND-PLAN.md Section 7),
  // because `refusing breathalyzer florida` is the only NOW-graded term in the
  // remaining set and the position closes as the field updates.
  //
  // C9: the 10 days run from the notice of suspension, not from the arrest and
  // not from any court date, and the choice among the three options is
  // exclusive. F.S. 322.2615(1)(b)3 with 322.271(7).
  //
  // THE 1 OCTOBER 2025 AMENDMENT IS THE PAGE. ch. 2025-121 (CS/HB 687) made a
  // FIRST refusal a second degree misdemeanor. Established by comparing the
  // 2023, 2024 and 2025 editions of F.S. 316.1939 plus the Legislature's own
  // chapter report, which is three editions of one authoritative publisher
  // rather than two reads of one document (HUNT-LIST defect 1, instance 2).
  //
  // The date is an element of accuracy, not decoration: a refusal before that
  // date is governed by the old text. The page states the date every time it
  // states the rule.
  //
  // F.S. 316.193(2)(a) assigns NO misdemeanor degree. Verified by absence in
  // the fetched text: it prescribes a term directly and does not carry the
  // "punishable as provided in s. 775.082 or s. 775.083" formula that (2)(b)1
  // and (3)(c)1 both carry. Do not write "second degree misdemeanor" here.
  //
  // flhsmv.gov is NOT allowlisted (DECISIONS.md D18) and nothing here rests on
  // it. Where the statute and that agency page disagree, the statute governs.
  //
  // [NEEDS: how first refusals are charged in the Thirteenth Circuit] The
  // amendment is verified, its application is not. No sentence on this page
  // says how the change is being applied in practice.
  // [NEEDS: the DHSMV Bureau of Administrative Reviews office serving
  // Hillsborough County] Not verified. No address for the hearing is given.
  // [NEEDS: whether a diversion track exists for a first DUI in Hillsborough]
  // Not verified against the State Attorney's own site.
  // [NEEDS: county versus circuit forum split within F.S. 316.193] Inferred
  // from verified degrees, not directly verified. The forum section states the
  // felony rule only.
  // [NEEDS: Florida sobriety checkpoint law] Case law, C12-B byline class.
  // ---------------------------------------------------------------------
  "state/dui-defense": {
    title: "DUI charges in Florida",
    metaTitle: "Florida DUI Charges and the 10 Day Rule | Hines & McCarty",
    metaDescription:
      "A Florida DUI arrest starts two separate cases, and the one against your license runs on a 10 day clock. What changed for test refusals on 1 October 2025, and what the statute now says.",
    lead: "A Florida DUI arrest starts two cases, not one. Alongside the criminal charge, a separate proceeding against your driver license begins immediately, and Statute 322.2615 gives 10 days from the date the notice of suspension is issued to respond to it.",
    counterpart: {
      href: "/criminal-defense/homicide-defense",
      label: "Homicide charges in Florida",
      note: "Where a DUI is alleged to have caused a death, it is charged as DUI manslaughter under Statute 316.193(3)(c)3 rather than under the homicide statutes in chapter 782. It is a second degree felony at the base tier, rising to a first degree felony in the two circumstances the subsection sets out, and any DUI manslaughter conviction carries a mandatory minimum term of 4 years. The charge stays inside the DUI statute, which is why it is covered here rather than there.",
    },
    statute: {
      citation:
        "Florida Statutes 316.193, 316.1932, 316.1939 and 322.2615, the 2025 Florida Statutes",
      body: "Statute 316.193(1) sets out three limbs, and only two of them involve a number. A person commits the offense while driving or in actual physical control of a vehicle when under the influence of alcoholic beverages, a chemical substance named in Statute 877.111, or a controlled substance under chapter 893, when affected to the extent that the person's normal faculties are impaired; or when the person has a blood-alcohol level of 0.08 or more grams per 100 milliliters of blood; or a breath-alcohol level of 0.08 or more grams per 210 liters of breath. The first limb has no threshold in it, so a case can proceed without a test result. Refusal is governed separately. Statute 316.1932(1)(a) sets out the implied consent warning that must be given, and Statute 316.1939 makes refusal itself an offense. That section was amended by chapter 2025-121, effective 1 October 2025. Under the text now in force at 316.1939(1)(e), a person who, after having been so informed, refused to submit to any such test when requested to do so by a law enforcement officer or correctional officer commits a misdemeanor of the second degree for a first refusal, or a misdemeanor of the first degree for a second or subsequent refusal. Before 1 October 2025 the same subparagraph reached only a second or subsequent refusal, and a first refusal was not an offense under this section at all. The date matters: a refusal that occurred before it is governed by the earlier text.",
    },
    penalties: [
      {
        degree: "First conviction, no degree assigned by the statute",
        maximum: "Up to 6 months, fine $500 to $1,000",
        note: "Statute 316.193(2)(a). The subsection prescribes the term and fine directly and does not assign a misdemeanor degree.",
      },
      {
        degree: "Second conviction, no degree assigned by the statute",
        maximum: "Up to 9 months, fine $1,000 to $2,000",
        note: "Statute 316.193(2)(a).",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 3",
        note: "Statute 316.193(2)(b)1, a third violation for an offense occurring within 10 years after a prior conviction. The statute measures from a prior conviction, not from the second one.",
      },
      {
        degree: "Not a felony",
        maximum: "Up to 12 months, fine $2,000 to $5,000",
        note: "Statute 316.193(2)(b)2, a third violation more than 10 years after a prior conviction.",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 6",
        note: "Statute 316.193(2)(b)3, a fourth or subsequent violation, regardless of when the prior convictions occurred. Same subsection and same degree as the level 3 row above, and the same 5 year maximum, at double the offense level.",
      },
      {
        degree: "First degree misdemeanor",
        maximum: "Set by Statute 775.082",
        note: "Statute 316.193(3)(c)1, where the offense caused or contributed to causing damage to the property or person of another.",
      },
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 7",
        note: "Statute 316.193(3)(c)2, serious bodily injury as defined in Statute 316.1933.",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years",
        offenseLevel: "Level 8",
        note: "Statute 316.193(3)(c)3.a, DUI manslaughter. A mandatory minimum term of 4 years applies to any DUI manslaughter conviction.",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years",
        offenseLevel: "Level 9",
        note: "Statute 316.193(3)(c)3.b, DUI manslaughter where the person knew or should have known the crash occurred and failed to give information and render aid as required by Statute 316.062.",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years",
        offenseLevel: "Level 9",
        note: "Statute 316.193(3)(c)3.c, DUI manslaughter with a prior conviction under that sub-subparagraph or under Statute 327.35(3)(a)3.c, 782.071 or 782.072.",
      },
      {
        degree: "Second degree misdemeanor, first refusal",
        maximum: "Set by Statute 775.082 or 775.083",
        note: "Statute 316.1939(1)(e) as amended by chapter 2025-121, effective 1 October 2025. This is a separate offense from the DUI itself.",
      },
      {
        degree: "First degree misdemeanor, second or subsequent refusal",
        maximum: "Set by Statute 775.082 or 775.083",
        note: "Statute 316.1939(1)(e).",
      },
    ],
    elements: [
      "Driving, or being in actual physical control of, a vehicle within this state.",
      "Either impairment of normal faculties by alcohol, a Statute 877.111 chemical substance, or a chapter 893 controlled substance; or a blood-alcohol level of 0.08 or more grams per 100 milliliters of blood; or a breath-alcohol level of 0.08 or more grams per 210 liters of breath. These are alternatives, and the first requires no test result.",
      "For the enhanced range under Statute 316.193(4), either a level of 0.15 or higher or the presence in the vehicle of a person under the age of 18. The subsection provides that only the instant offense is required to be a violation at 0.15 or higher, so prior convictions need not have been at that level.",
      "For a refusal charge under Statute 316.1939, that the person was first informed as Statute 316.1932 requires, and then refused a lawful test.",
      "For the felony tiers, the number and timing of prior convictions, which is what separates Statute 316.193(2)(b)1 from (2)(b)2 and (2)(b)3.",
    ],
    defenseApproach: [
      "The first thing to understand is that there are two proceedings and they run on different clocks. The criminal case proceeds in court. The license suspension is administrative, handled by the Department of Highway Safety and Motor Vehicles, and Statute 322.2615(1)(b)2 provides that the suspension period commences on the date the notice of suspension is issued. Statute 322.2615(1)(b)3 gives 10 days from that date to request a formal review, request an informal review, or request review of eligibility for a restricted driving privilege under Statute 322.271(7). The temporary permit issued at the time expires at midnight of the 10th day.",
      "Those three options are alternatives rather than steps. Statute 322.271(7) sets out the restricted business purposes route, and taking it operates as a waiver of the review the other two options provide. The choice is therefore made once, inside a short window, and it is worth understanding what each one forecloses before the window closes.",
      "The two cases are formally insulated from each other in both directions. Statute 322.2615(14)(a) provides that the department's decision may not be considered in any trial for a violation of Statute 316.193, and that a written statement submitted in a request for departmental review may not be admitted into evidence at such a trial. Statute 322.2615(14)(b) provides that the disposition of any related criminal proceeding does not affect a suspension imposed for refusing a test. Statute 316.1939(2) and (3) say the same thing about the criminal refusal charge and the administrative proceeding. There is one exception running one way: under Statute 322.2615(16), a finding of not guilty at trial on the underlying Statute 316.193 violation invalidates a suspension imposed for an unlawful alcohol level.",
      "The statute sets out its own procedural failure points. Under Statute 322.2615(9), a request for a hearing does not stay the suspension, and if the department fails to schedule a formal review hearing within 30 days after receiving the request, the department shall invalidate the suspension. Under Statute 322.2615(11), if the arresting officer or the breath technician fails to appear pursuant to a subpoena, the department shall invalidate the suspension. Both are written as commands to the department rather than as matters of discretion.",
      "On the criminal side, the charging paragraph is worth reading closely, because two rows of the penalty table are the same subsection and the same degree and sit three offense levels apart. A third violation under Statute 316.193(2)(b)1 is ranked at level 3 and a fourth or subsequent violation under (2)(b)2 and (2)(b)3 is ranked at level 6, and both are third degree felonies carrying the same 5 year maximum. The statutory maximum does not move and the scoresheet arithmetic does.",
      "Where a refusal is charged, the timing question is now a live one. The amendment at chapter 2025-121 took effect on 1 October 2025 and the version of Statute 316.1939 that applies is the version in force when the refusal occurred, so the date of the stop is a threshold fact rather than a background detail.",
      "What the court must order on a conviction is set by statute rather than left open. Statute 316.193(5) requires monthly reporting probation and a substance abuse course by a licensed DUI program including a psychosocial evaluation. Statute 316.193(6)(a) sets, on a first conviction, probation not to exceed 1 year, a minimum of 50 hours of public service or community work, and impoundment or immobilization of the vehicle for 10 days, with the total of probation and incarceration not to exceed 1 year.",
    ],
    forum: [
      "A DUI case in Hillsborough County can sit in two places at once, and only one of them is a courthouse.",
      "Felony DUI charges are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
      "The license suspension is not heard in either. It is an administrative proceeding of the Department of Highway Safety and Motor Vehicles, and Statute 322.2615(4) provides that an informal review consists solely of the department's examination of the materials submitted by the officer and by the person whose license was suspended, with no requirement that an officer or witness be present. A formal review is the option that allows subpoenas, which is what makes Statute 322.2615(11) available.",
      // [NEEDS: the DHSMV Bureau of Administrative Reviews office serving
      // Hillsborough County] Not verified against an allowlisted source. No
      // address for the administrative hearing appears on this page.
      // [NEEDS: county versus circuit split for the misdemeanor tiers]
      // Inferred from the verified degrees rather than directly verified.
    ],
    faq: [
      {
        question: "What is the 10 day rule for a DUI in Florida?",
        source: "drafted",
        answer:
          "It is the window to respond to the license suspension, and it runs from the date the notice of suspension is issued rather than from any court date. Statute 322.2615(1)(b)3 gives 10 days to request a formal review, request an informal review, or request review of eligibility for a restricted driving privilege under Statute 322.271(7). The temporary permit issued at the time of the stop expires at midnight of the 10th day. The three options are alternatives, and the restricted privilege route under Statute 322.271(7) operates as a waiver of the other two.",
      },
      {
        question: "Is refusing a breath test a crime in Florida?",
        source: "drafted",
        answer:
          "Yes, and this changed recently. Under Statute 316.1939(1)(e), as amended by chapter 2025-121 effective 1 October 2025, a first refusal is a misdemeanor of the second degree and a second or subsequent refusal is a misdemeanor of the first degree. Before that date the same subparagraph reached only a second or subsequent refusal, so a first refusal was not an offense under this section. Which version applies depends on when the refusal occurred.",
      },
      {
        question: "What happens to my license if I refuse a test?",
        source: "drafted",
        answer:
          "The suspension is separate from the criminal case and longer than the one for an unlawful alcohol level. Statute 322.2615(1)(b)1.a provides for a 1 year suspension for a first refusal, or 18 months if the driving privilege has previously been suspended for a refusal. Where the suspension is for a level of 0.08 or higher, Statute 322.2615(1)(b)1.b provides 6 months for a first offense or 1 year if previously suspended under that section. If a refusal suspension is sustained, Statute 322.2615(10)(a) provides that the person is not eligible for a business or employment purposes license until 90 days have elapsed after the last temporary permit expires, against 30 days under (10)(b) for an unlawful level.",
      },
      {
        question: "Does a DUI charge require a breath or blood test result?",
        source: "drafted",
        answer:
          "No. Statute 316.193(1) sets out three alternatives, and the first is impairment of normal faculties by alcohol, a Statute 877.111 chemical substance, or a chapter 893 controlled substance. Only the second and third limbs involve the 0.08 figure. A case can be built on the first limb with no test result at all.",
      },
      {
        question: "When does a Florida DUI become a felony?",
        source: "drafted",
        answer:
          "Statute 316.193(2)(b)1 makes a third violation a third degree felony where the offense occurs within 10 years after a prior conviction. Note that the statute measures from a prior conviction, not specifically from the second one. Under (2)(b)2, a third violation more than 10 years after a prior conviction is not a felony. Under (2)(b)3, a fourth or subsequent violation is a third degree felony regardless of when the priors occurred.",
      },
      {
        question:
          "If the criminal case is dropped, does the license suspension go away?",
        source: "drafted",
        answer:
          "Not automatically, and it depends on which suspension it is. Statute 322.2615(14)(b) provides that the disposition of a related criminal proceeding does not affect a suspension imposed for refusing a test. There is one exception running the other way: under Statute 322.2615(16), the department shall invalidate a suspension imposed for an unlawful alcohol level if the person is found not guilty at trial of the underlying Statute 316.193 violation.",
      },
    ],
    relatedGuides: [
      { label: "Tools and guides", href: "/resources/tools-and-guides" },
    ],
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
        heading: "The firearm is already logged into evidence, and what is still open is what gets said about it",
        kind: "guidance",
        answers: ["now"],
        guidance: [
          {
            heading: "Rights that are in place from the arrest onward",
            items: [
              "You have the right to decline to answer questions. It is available at every stage, and it does not have to be explained or justified to anyone.",
              "You have the right to counsel, and the rules separate being told about it from being given it. Rule 3.130(b)(1)(B) requires the judge at first appearance to advise an unrepresented defendant of the right to counsel and that counsel will be appointed if the defendant cannot afford one. Rule 3.130(c)(1) is the appointment itself: once the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel. Rule 3.130(c)(2) requires the judge to allow a reasonable time to send for a retained lawyer and to postpone the hearing for that purpose if necessary.",
              "In the ordinary course you are entitled to see the material the state relies on, through discovery. In a firearm case that material includes how the item was located and what was recorded about who had access to it.",
            ],
          },
          {
            heading: "Where firearm cases are commonly complicated before a lawyer is involved",
            items: [
              "Explaining whose gun it is, at the scene or on a recorded call from the jail. Statute 790.23(1) reaches care, custody, and control as well as ownership, so statements about who kept it, who knew about it, and who could reach it are the material an attribution theory is built from.",
              "Arranging for a firearm, ammunition, or an electric weapon to be moved, sold, or held by someone else. The section reaches ownership as well as physical possession, and how the arrangement is described afterwards becomes part of the record.",
              "Treating a restoration question as something to settle informally. Statute 790.23(2) exempts a person whose civil rights and firearm authority have both been restored, and a person whose record was expunged under Statute 943.0515(1)(b). Whether either status applies is a question to put to a lawyer, and it is separate from the federal prohibition, which has its own test.",
              "Treating a concealed carry charge as an administrative dispute about paperwork. Under Statute 790.01(4) non-licensure and ineligibility are elements the state has to prove, so they sit inside the criminal case rather than beside it.",
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
        heading: "No chapter 790 offense sits on the permanent bar list, and the prior conviction usually decides sealing anyway",
        kind: "prose",
        answers: ["consequences", "sealing"],
        prose: [
          "An arrest produces a criminal history record, and in Florida those records are public unless a court seals or expunges them. That is the practical answer to what this does to work: an ordinary background check can show the arrest whether or not the case ends in a conviction. On this charge the entry rarely travels alone, because a Statute 790.23 charge rests on a prior conviction or delinquency finding that is already on the same record, and the two are read together by anyone looking. Future firearm possession is a separate question again, and not one Florida law answers on its own, since 18 U.S.C. 922(g) is a distinct prohibition with the distinct predicate test described at the top of this page.",
          "On sealing, the first question is whether the offense is barred outright, and for chapter 790 the answer is no. Statute 943.0584(2) makes a record ineligible for sealing or expunction where the record is a conviction for one of the offenses it enumerates at paragraphs (a) through (hh). Those paragraphs name offenses from other chapters: murder, manslaughter, aggravated assault, aggravated battery, kidnapping, arson, burglary of a dwelling, robbery, carjacking, home-invasion robbery, human trafficking, terrorism, any offense defined in chapter 794, manufacturing a controlled substance, drug trafficking under Statute 893.135, the Florida Communications Fraud Act, and a catch-all for any violation specified as a predicate for sexual predator or sexual offender registration. No chapter 790 offense appears anywhere in that list.",
          "Not barred is not the same as eligible, and on this charge the difference matters more than usual. Statute 943.059(1) sets cumulative conditions, and the first ones ask about the person's whole record rather than about this case: the record must not be ineligible under Statute 943.0584; the person must never have been adjudicated guilty in Florida of a criminal offense, or adjudicated delinquent for a felony or for one of thirteen listed misdemeanors; the person must not have been adjudicated guilty of any of the acts stemming from this arrest; the person must no longer be under court supervision for it; and the person must never have obtained a prior sealing or expunction. Statute 943.059(2) then requires a certificate of eligibility from the department before a petition is filed. Because Statute 790.23 is built on a prior felony conviction or a delinquency finding, the sealing statute and the charging statute are looking at the same history from opposite ends, which is why this question is usually about the earlier case at least as much as about this one.",
          "Two definitions catch people out. Statute 943.0584(1) defines conviction to mean a determination of guilt resulting from a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, and for a minor a finding of a delinquent act regardless of whether adjudication of delinquency is withheld. And where a minimum term under Statute 775.087 applies, a withhold is not available at all, because 775.087(2)(b) provides that adjudication of guilt may not be suspended, deferred, or withheld.",
          "Two questions this page does not reach. How civil rights and firearm authority are restored is a clemency matter rather than a criminal statute, and it is not described here. Whether a particular professional license survives is governed by the board that issues it.",
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
  // IDENTITY THEFT, state. From docs/research/briefs/W2-06-identity-theft.md.
  //
  // NO FEDERAL SIBLING, per DECISIONS.md D5: 18 U.S.C. 1028A attaches to an
  // enumerated felony rather than standing alone, so it is a companion count
  // and not a demand centre.
  //
  // The reader still needs the forum question answered, so `counterpart` is
  // used here to point UP at the federal silo hub rather than sideways at a
  // sibling page that does not exist. That is a deliberate reuse of the field:
  // it renders the same "state charge or federal charge?" section the overlap
  // pages get, which is what the reader needs, without implying a counterpart
  // page. C10 does not apply, because this is not an overlap page.
  //
  // C9: the protected-person and custodial tiers, verified from the operative
  // text rather than from the ranking chart. The page leads on them.
  //
  // COPY-LEVEL VARIATION (plan Section 4.3). This is the third page whose
  // differentiator involves the charge not existing under its popular name.
  // Embezzlement opens on the trust relationship; wire fraud will open on the
  // state-federal question. This one opens on who the protected person is,
  // and the naming point arrives in the statute section.
  //
  // [NEEDS: 18 U.S.C. 1028A] Not fetched. No federal statute number, term, or
  // consecutive-sentencing rule appears on this page.
  // [NEEDS: which agency investigates identity theft in Hillsborough County]
  // Not verified against any agency's own site.
  // ---------------------------------------------------------------------
  "white-collar/identity-theft": {
    title: "Identity theft charges in Florida",
    metaTitle: "Florida Identity Theft Charges | Hines & McCarty",
    metaDescription:
      "Florida's identity theft statute turns on who the information belonged to. What Statute 817.568 covers, its mandatory minimums, and the tiers for children and older adults.",
    lead: "Florida's identity theft statute reserves its heaviest treatment for cases involving a child or an older adult, and its heaviest of all for someone who had custody of them. Statute 817.568 calls the offense fraudulent use of personal identification information.",
    counterpart: {
      href: "/federal-criminal-defense",
      label: "Federal criminal defense in the Middle District of Florida",
      note: "Identity theft counts appear in both systems, but they behave differently. Florida charges the offense on its own under Statute 817.568, with the tiers and offense levels set out below. Federally, an identity theft count is normally attached to another offense rather than standing alone, which is why there is no separate federal page for it here. A federal case is heard in the Middle District of Florida rather than in circuit court, and the Florida offense levels do not apply to it.",
    },
    statute: {
      citation: "Florida Statute 817.568, the 2025 Florida Statutes",
      body: "There is no Florida offense named identity theft. The charge is fraudulent use of personal identification information under Statute 817.568, which reaches any person who willfully and without authorization fraudulently uses, or possesses with intent to fraudulently use, personal identification information concerning another person without first obtaining that person's consent. The phrase possesses with intent matters, because the statute does not require that anything was obtained. The definition of the information itself is broad. It means any name or number that may be used, alone or in conjunction with any other information, to identify a specific person, and the statute lists names, postal or electronic mail addresses, telephone numbers, social security numbers, dates of birth, mother's maiden names, driver license or identification numbers, passport numbers, employer or taxpayer identification numbers, Medicaid or food assistance account numbers, bank account numbers, credit or debit card numbers and their PINs, unique biometric data such as fingerprints, voice prints or retina images, unique electronic identification numbers or routing codes, medical records, telecommunication identifying information, and any other number or information that can be used to access a person's financial resources.",
    },
    penalties: [
      {
        degree: "Third degree felony",
        maximum: "Up to 5 years",
        offenseLevel: "Level 4",
        note: "The base offense under 817.568(2)(a): fraudulent use, or possession with intent to fraudulently use, without consent.",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years, with a mandatory minimum of 3 years",
        offenseLevel: "Level 5",
        note: "Under 817.568(2)(b), where the benefit, services received, payment avoided, or injury is $5,000 or more, or where the information of 10 or more but fewer than 20 people is used.",
      },
      {
        degree: "First degree felony",
        maximum: "Up to 30 years, with a mandatory minimum of 5 years",
        offenseLevel: "Not ranked separately in the chart rows verified",
        note: "Under 817.568(2)(c), at $50,000 or more, or the information of 20 or more but fewer than 30 people. The mandatory minimum rises to 10 years at $100,000 or more, or 30 or more people.",
      },
      {
        degree: "Second degree felony",
        maximum: "Up to 15 years",
        offenseLevel: "Level 8",
        note: "Under 817.568(6), where the person whose information was used is younger than 18 or is 60 years of age or older.",
      },
      {
        degree: "Second degree felony, PBL",
        maximum: "Up to 15 years",
        offenseLevel: "Level 9",
        note: "Under 817.568(7), where the defendant is the parent or legal guardian of that person, or otherwise exercises custodial authority over them.",
      },
    ],
    elements: [
      "That the information was personal identification information concerning another person, as the statute defines that term.",
      "That the defendant used it, or possessed it with intent to fraudulently use it. A completed transaction is not required for the base offense.",
      "That the use was willful, fraudulent, and without authorization.",
      "That the person did not first give consent.",
      "For the higher tiers, either a dollar figure or a count of people. The statute measures the benefit obtained, the value of services received, the payment sought to be avoided, or the amount of injury or fraud, and it separately counts how many people's information was used.",
    ],
    defenseApproach: [
      "The first question is usually authorization rather than identity. These cases often arise between people who know each other, and the statute requires that the use was without authorization and without consent. Where an account was shared, or a family member had handled someone's paperwork for years, what was permitted becomes the contested question rather than what was done.",
      "The second is the counting. Two separate measures raise the degree: a dollar figure and a number of people. Both are things the state has to establish, and a charge that sits at $5,000 or at ten people sits at a threshold where the count itself decides the tier.",
      "The mandatory minimums make that counting consequential in a way it is not on most charges. Statute 817.568(2)(b) directs that a person convicted under it be sentenced to a mandatory minimum of three years, and 817.568(2)(c) directs five years, rising to ten years where the figure reaches $100,000 or the information of thirty or more people is involved. The statute states each of these notwithstanding any other provision of law.",
      "The protected-person tiers turn on a fact that is rarely in dispute once it is identified, which is why identifying it early matters. Subsections (6) and (7) do not ask what was taken or how much. They ask how old the person was and what the defendant's relationship to them was.",
      "One definitional point catches people who assume the statute only reaches real identities. It separately defines counterfeit or fictitious personal identification information as counterfeit, fictitious, or fabricated information in the similitude of the listed data which, although not truthful or accurate, would in context lead a reasonably prudent person to credit its truthfulness and accuracy. Invented details are not automatically outside the statute, so what was fabricated and how it would have read to an ordinary person become part of the analysis rather than an answer to it.",
    ],
    forum: [
      "Felony charges in Hillsborough County are heard in circuit court. The Hillsborough County Clerk lists circuit criminal services at the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, and criminal court services at the Plant City Courthouse, 301 North Michigan Avenue, Room 1071.",
      "Identity theft counts also appear in federal prosecutions, usually alongside another charge rather than on their own. Where that happens the case is heard in the Middle District of Florida rather than in circuit court, and the Florida offense levels do not apply to it.",
    ],
    faq: [
      {
        question: "Is identity theft a felony in Florida?",
        source: "drafted",
        answer:
          "Yes, at every tier. The base offense under Statute 817.568(2)(a) is a felony of the third degree, and the statute rises to second and first degree felonies as the amount involved or the number of people affected increases. There is no misdemeanor version of this offense.",
      },
      {
        question:
          "How much has to be involved before it becomes a second degree felony?",
        source: "drafted",
        answer:
          "Under Statute 817.568(2)(b) it is $5,000 or more, measured as the benefit obtained, the value of services received, the payment avoided, or the amount of injury or fraud. The same subsection reaches the same degree where the information of ten or more but fewer than twenty people was used, so the count of people is an independent route to that tier.",
      },
      {
        question:
          "Does it matter how old the person whose information was used was?",
        source: "drafted",
        answer:
          "It changes the charge substantially. Statute 817.568(6) makes it a second degree felony where the person is younger than 18 or is 60 years of age or older, without regard to any dollar figure. That subsection is ranked at offense level 8, above the level assigned to the ordinary tiers.",
      },
      {
        question: "What if it was my own child or a relative in my care?",
        source: "drafted",
        answer:
          "Florida treats that as the most serious version of the offense rather than the least. Statute 817.568(7) covers a parent, a legal guardian, or a person who otherwise exercises custodial authority over someone younger than 18 or 60 or older, and it is ranked at offense level 9, which is higher than a first degree grand theft.",
      },
      {
        question: "What if I never actually got any money?",
        source: "drafted",
        answer:
          "The base offense does not require it. Statute 817.568(2)(a) reaches a person who fraudulently uses, or possesses with intent to fraudulently use, personal identification information without consent, so possession coupled with the required intent is enough. The dollar figures matter for the higher tiers rather than for whether an offense exists.",
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
