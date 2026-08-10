// Central site data. Copy here is first-draft and compliance-aware:
// no "best/expert/specialist" claims, no outcome promises (Fla. Bar R. 4-7).

// [NEEDS: production domain] -- used for canonical URLs, sitemap, and the @id
// values in JSON-LD. Every absolute URL in the build reads from here.
export const siteUrl = "https://DOMAIN.com";

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
  /** hrefs into `capabilities`. Drives the reciprocal "handled by" link. */
  practiceAreaHrefs?: string[];
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
 * Reciprocal of `practiceAreaHrefs`: the attorneys attached to a practice page.
 * Powers the "handled by" block that links a practice page back to the bios.
 */
export const attorneysForPractice = (href: string) =>
  attorneys.filter((a) => a.practiceAreaHrefs?.includes(href));

// County result pages. Each one stays unpublished until that county has at
// least 5 real, consented, disclaimered results behind it (WEBSITE-PLAN.md
// Tier 0). While every county is unpublished the Results nav item renders as a
// plain link with no dropdown, which is the correct state today.
export const resultsCounties = [
  { label: "Hillsborough County", slug: "hillsborough-county", published: false },
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

// Capability pillars. Sub-items mirror the client's SEO.pdf page list.
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
    items: [
      {
        label: "Sexual Battery",
        description: "Charges involving alleged non-consensual sexual acts",
      },
      {
        label: "Drug Trafficking",
        description: "Drug charges based on large amounts",
      },
      {
        label: "Drug Possession",
        description: "Charges for having drugs on you",
      },
      {
        label: "Gun Crimes",
        description: "Charges for carrying, using, or owning firearms",
      },
      {
        label: "Sex Crimes",
        description: "Charges involving alleged sexual conduct or contact",
      },
      {
        label: "Battery",
        description: "Charges for allegedly hitting or touching someone",
      },
      {
        label: "Domestic Violence",
        description: "Charges involving a partner or family member",
      },
      {
        label: "Grand Theft",
        description: "Theft charges above a set dollar amount",
      },
      {
        label: "Homicide",
        description: "Charges involving someone's death, including murder",
      },
      {
        label: "DUI",
        description: "Driving charges involving alcohol or drugs",
      },
    ],
  },
  {
    key: "federal",
    short: "Federal",
    title: "Federal Criminal Defense",
    href: "/federal-criminal-defense",
    summary:
      "Representation in the Middle District of Florida, Tampa Division, from investigation through sentencing.",
    items: [
      {
        label: "Federal Drug Trafficking",
        description: "Drug charges brought by federal prosecutors",
      },
      {
        label: "Conspiracy Charges",
        description: "Charges for allegedly agreeing to a crime",
      },
      {
        label: "Weapons and Gun Offenses",
        description: "Gun charges prosecuted in federal court",
      },
      {
        label: "Child Sex Abuse Material",
        description: "Federal charges involving illegal images of minors",
      },
      {
        label: "Money Laundering",
        description: "Charges for hiding where money came from",
      },
      {
        label: "Computer and Internet Crimes",
        description:
          "Charges involving computers, networks, or online activity",
      },
      {
        label: "Target Letter Defense",
        description: "A letter saying you are under federal investigation",
      },
    ],
  },
  {
    key: "white-collar",
    short: "White-Collar",
    title: "White-Collar Defense",
    href: "/white-collar-defense",
    summary:
      "Fraud and financial-crime defense for professionals and businesses under state or federal scrutiny.",
    items: [
      {
        label: "Corporate and Wire Fraud",
        description: "Fraud charges involving business, calls, or email",
      },
      {
        label: "Healthcare Fraud",
        description: "Billing charges involving Medicare, Medicaid, or insurers",
      },
      {
        label: "Bank Fraud",
        description: "Charges involving loans, accounts, or bank records",
      },
      {
        label: "Embezzlement",
        description: "Charges for taking money you were trusted with",
      },
      {
        label: "Securities Fraud",
        description: "Charges involving investments, stocks, or investor money",
      },
      {
        label: "Tax Evasion",
        description: "Charges for not paying or reporting taxes",
      },
    ],
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

// Interactive tools (build order per docs/research/tools-and-hooks.md).
export const tools = [
  {
    label: "Sentencing Calculator",
    kind: "Calculator",
    title: "Florida Sentencing Scoresheet Calculator",
    description:
      "Estimate the lowest permissible sentence under Florida's Criminal Punishment Code by charge, level, and prior record.",
    href: "/sentencing/florida-criminal-punishment-code",
  },
  {
    label: "Bond & Bail Estimator",
    kind: "Estimator",
    title: "Bond & Bail Estimator, Hillsborough County",
    description:
      "See how bond is typically set locally and what to expect at first appearance.",
    href: "/resources/tools/bond-bail-estimator",
  },
  {
    label: "Seal & Expunge Checker",
    kind: "Checker",
    title: "Record Sealing & Expungement Eligibility Checker",
    description:
      "Find out whether a Florida record may be eligible to be sealed or expunged.",
    href: "/resources/tools/seal-expunge-eligibility",
  },
  {
    label: "After an Arrest",
    kind: "Guide",
    title: "First 24 Hours After a Hillsborough Arrest",
    description:
      "A step-by-step walkthrough of the first day, from booking and first appearance through bond.",
    href: "/resources/guides/after-an-arrest",
  },
  {
    label: "Federal Case Timeline",
    kind: "Guide",
    title: "Federal Case Timeline, Tampa Division",
    description:
      "How a federal case moves from target letter through indictment, trial, and sentencing.",
    href: "/resources/guides/federal-criminal-process-timeline",
  },
] as const;

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
export const process = [
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
