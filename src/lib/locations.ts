/**
 * Location pages (D151, D152). Four market pages, St. Petersburg, Clearwater,
 * Sarasota and Orlando, each with community pages around it. A market also gets
 * its own State Criminal and Personal Injury pages, because the courthouse and
 * the jail change with the county; Federal, White Collar and Business Litigation
 * stay as links to the main hubs, because every market but Orlando is in the
 * same federal division and the pages would read the same with the city swapped.
 *
 * THERE IS NO TAMPA PAGE (D152). Tampa is the whole site: the home page and the
 * hubs are its pages. Tampa's communities have no `parent` and sit directly
 * under /locations, so Brandon is /locations/brandon, while a community of
 * another market nests under it, as in /locations/st-petersburg/gulfport.
 *
 * THE RULES THESE PAGES LIVE UNDER, every one a reason a location page goes
 * wrong:
 *   - Rule 4-7.12. Brandon is the only office. No page says or implies an
 *     office anywhere else, and every page names the Brandon office.
 *   - Doorway pages. A page that reads the same as its siblings with the place
 *     name swapped is the pattern Google penalises. Each page carries facts
 *     that are true of that place and not its siblings (who makes the arrest,
 *     where you are booked, which court), from an official source recorded in
 *     PAGE-SOURCES.md. check:seo P7 measures the overlap after the build.
 *   - D7. The Brandon clerk service center stays out of copy until the
 *     attorneys confirm what is heard there.
 *
 * NO IMPORTS, on purpose: the gate scripts load this file directly under
 * node's type stripping, which cannot resolve the "@/" alias.
 *
 * `indexable` is false until an attorney has read the page, the same gate the
 * injury and business litigation pages carry. False means noindex and out of
 * the sitemap; the page still builds so it can be reviewed.
 */

export type LocationFact = {
  title: string;
  body: string;
  /** The source line under the card. Omitted where the card states only what other pages on the site already do. */
  source?: string;
};

export type LocationLink = { href: string; title: string; body: string };

export type LocationStep = LocationFact & {
  link?: { href: string; label: string; external?: boolean };
};

export type LocationBond = {
  heading: string;
  intro: string;
  rows: { crime: string; amount: string }[];
  waitHeading: string;
  waitIntro: string;
  wait: string[];
  waitNote: string;
  source: string;
};

export type LocationDivisionTable = {
  caption: string;
  rows: { division: string; letters: string }[];
  source: string;
};

export type LocationPage = {
  slug: string;
  kind: "market" | "community";
  /** The market's slug. Absent on a market, and on a Tampa community (D152). */
  parent?: string;
  /** The place as a reader writes it: "Tampa", "Brandon". */
  place: string;
  county: string;
  published: boolean;
  /** An attorney has read it. See the file comment. */
  indexable: boolean;
  /** True only for Brandon: the office section comes straight after the hero. */
  officeHere?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string[];
  facts: { heading: string; intro: string; items: LocationFact[]; table?: LocationDivisionTable };
  /** What to do in the first day. */
  firstSteps?: { heading: string; intro: string; items: LocationStep[] };
  bond?: LocationBond;
  timeline?: { heading: string; intro: string; steps: { when: string; what: string }[]; source: string };
  charges?: { heading: string; intro: string; items: LocationLink[] };
  injury?: {
    heading: string;
    intro: string;
    items: LocationFact[];
    links: { href: string; label: string }[];
  };
  faq?: { question: string; answer: string }[];
  practices: { heading: string; intro: string; items: LocationLink[] };
  office: { heading: string; body: string[] };
  /** The line over the sub-location links on a market page. */
  communitiesIntro?: string;
  cta: { heading: string; body: string };
};

// The three hubs every market links to rather than duplicating.
const FEDERAL = "/criminal-defense/federal";
const WHITE_COLLAR = "/criminal-defense/white-collar";
const BUSINESS = "/business-litigation";

const HCSO_SOURCE = "Hillsborough County Sheriff's Office, Department of Detention Services";
/**
 * Hillsborough County facts shared by the communities in that county, held once
 * so a change reaches them all. Shared text is not what makes a community page
 * worth having: each one still needs its own side of the East Division line,
 * its own arresting agency and its own routing.
 *
 * THE BOND SCHEDULE EXPIRES. S-2025-063 runs January 1 to December 31, 2026, and
 * this circuit readopts it yearly (it superseded S-2024-083). Check for the 2027
 * order and update these amounts when it issues.
 */
const HILLSBOROUGH_BOND: LocationBond = {
  heading: "What bond costs, and who has to wait.",
  intro:
    "For 2026, Hillsborough County uses the statewide bond schedule without change. The booking officer applies it so you can be released before your first appearance. It does not bind a judge, who can set something different. Each charge needs its own bond.",
  rows: [
    { crime: "Third degree felony, with force or a threat of force against a person", amount: "$5,000" },
    { crime: "Third degree felony, no force or threat", amount: "$2,500" },
    { crime: "First degree misdemeanor, with force or a threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, no force or threat", amount: "$500" },
    { crime: "Second degree misdemeanor, with force or a threat", amount: "$250" },
    { crime: "Second degree misdemeanor, no force or threat", amount: "$150" },
    { crime: "DUI or boating under the influence, first degree misdemeanor", amount: "$1,000" },
    { crime: "DUI or boating under the influence, second offense, second degree misdemeanor", amount: "$750" },
    { crime: "DUI or boating under the influence, first offense, second degree misdemeanor", amount: "$500" },
  ],
  waitHeading: "When you have to see a judge first",
  waitIntro: "The schedule does not apply, and you stay in custody until first appearance, if any of these is true:",
  wait: [
    "You are charged with a first or second degree felony, or a capital or life felony.",
    "You were on pretrial release, probation, or community control when arrested for a felony.",
    "The charge is domestic violence, stalking, robbery, burglary, felony battery, or resisting an officer with violence.",
    "The charge is sexual battery, child abuse, kidnapping, or trafficking in a controlled substance.",
    "You are a convicted felon charged with having a gun or ammunition.",
    "You were arrested for violating a protective injunction, or for missing court while on bail.",
    "You were arrested three or more times in the last 6 months.",
    "You are designated a sexual offender or sexual predator.",
  ],
  waitNote: "The order lists more than these. If you are not sure, call us before you pay a bail bond company.",
  source: "13th Circuit Administrative Orders S-2025-063, effective through December 31, 2026, and S-2026-006",
};

const HILLSBOROUGH_DIVISIONS: LocationDivisionTable = {
  caption: "Tampa county criminal divisions, by the first letter of your last name",
  rows: [
    { division: "A", letters: "A, G, S, U" },
    { division: "B", letters: "B, F, I, N, P, Q, Z" },
    { division: "C", letters: "D, E, M, O, V, X, Y" },
    { division: "D", letters: "C, R, T" },
    { division: "E", letters: "H, J, K, L, W" },
  ],
  source: "13th Circuit Administrative Order S-2025-012",
};

const HOVER_ANSWER =
  "The Clerk's free HOVER site, hover.hillsclerk.com, lets you search by case number, citation number, or a person's name, and it has a court hearing lookup. Sealed and confidential records do not appear.";

export const locationPages: LocationPage[] = [
  {
    slug: "brandon",
    kind: "community",
    place: "Brandon",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    officeHere: true,
    metaTitle: "Brandon Criminal Defense Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Our office is in Brandon. Felony and misdemeanor defense, injury claims, and business disputes in Hillsborough County. Call (813) 738-8650.",
    h1: "Criminal defense and injury lawyers in Brandon.",
    lead: [
      "Our office is on West Lumsden Road in Brandon. From here we defend people charged with felonies and misdemeanors, and represent people hurt in crashes, across Hillsborough County.",
      "If you or someone you love was just arrested, this page covers what to do first, what bond costs, and which courtroom the case goes to.",
    ],
    office: {
      heading: "Visit us on West Lumsden Road.",
      body: [
        "This is the firm's only office.",
        "We answer the phone 24 hours a day, 7 days a week. Call first so an attorney can set aside time to meet you.",
      ],
    },
    firstSteps: {
      heading: "If someone was just arrested in Brandon.",
      intro: "The first day moves fast, and the hearing that sets release comes within 24 hours. Here is what to do, in order.",
      items: [
        {
          title: "Find out where they are",
          body: "Brandon is not a city. The Census Bureau counts it as a census-designated place, so it has no police force of its own, and arrests here are usually made by Sheriff's deputies. Adults are taken to the Orient Road Jail, 1201 Orient Road, where the Sheriff books new arrests. You can check the Sheriff's online list or call the jail at 813-247-8300.",
          source: `${HCSO_SOURCE}; U.S. Census Bureau, QuickFacts: Brandon CDP, Florida`,
          link: { href: "https://webapps.hcso.tampa.fl.us/ArrestInquiry", label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "See if bond is possible yet",
          body: "Some arrests can bond out at the jail from a set schedule. Others have to wait for a judge, whatever the amount. The table below shows both, so check it before you pay anyone.",
          link: { href: "#bond", label: "Bond amounts for 2026" },
        },
        {
          title: "Do not talk about what happened",
          body: "You do not have to explain anything to deputies or detectives. If you are the family, do not ask the person what happened, and do not pass along their account. Save that conversation for a lawyer.",
        },
        {
          title: "Call before first appearance",
          body: "You must see a judge within 24 hours of arrest unless you were already released. In Hillsborough County that is Division O, and it is held by video. The judge decides release and its terms, sometimes before you have a lawyer, so call as early as you can.",
          source: "Fla. R. Crim. P. 3.130(a), (d); 13th Circuit Administrative Order S-2024-030",
        },
      ],
    },
    bond: HILLSBOROUGH_BOND,
    facts: {
      heading: "Which courtroom a Brandon case goes to.",
      intro:
        "Hillsborough County splits its county court cases along a line, so where the offense happened can decide which courthouse you go to. A Brandon case can land in downtown Tampa or Plant City.",
      items: [
        {
          title: "The line that matters",
          body: "The East Division's western edge runs south along Dover Road, west on Bloomingdale Avenue, then south on Lithia Pinecrest Road. Most of Brandon sits west of it, on the Tampa side. If the offense happened near that line, check the exact address.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "Felonies",
          body: "A felony is a circuit court case. The East Division order sets up no felony division in Plant City, so a Brandon felony goes through the circuit criminal divisions in Tampa, at the Edgecomb Courthouse, 800 E. Twiggs Street. The clerk assigns the division on an even rotation when the arrest report is filed.",
          source: "13th Circuit Administrative Orders S-2024-062 and S-2024-079; F.S. 26.012(2)(d)",
        },
        {
          title: "Misdemeanors on the Tampa side",
          body: "A misdemeanor or criminal traffic offense west of the line goes to a county court division in Tampa. The division depends on the first letter of your last name, as the table below shows.",
          source: "13th Circuit Administrative Order S-2025-012; F.S. 34.01(1)(a)",
        },
        {
          title: "Misdemeanors east of the line",
          body: "If the offense happened inside the East Division, a misdemeanor or criminal traffic offense goes to Division X at the Plant City Courthouse, 301 North Michigan Avenue. A judge can move a case between Plant City and Tampa for good cause, mainly for the convenience of the people involved.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-012",
        },
        {
          title: "Domestic violence",
          body: "A misdemeanor domestic violence case has its own path. West of the line it goes to Division F in Tampa, whatever your last name. East of the line it goes to Division X in Plant City.",
          source: "13th Circuit Administrative Order S-2025-012",
        },
        {
          title: "Federal charges",
          body: "Federal cases are not part of this system. A federal case from Brandon is heard in the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
        },
      ],
      table: HILLSBOROUGH_DIVISIONS,
    },
    timeline: {
      heading: "What happens after first appearance.",
      intro: "A state case runs on clocks set by rule. These are the ones to know about, counted from the dates shown.",
      steps: [
        { when: "Within 24 hours of arrest", what: "You see a judge by video, unless you were already released. The judge decides whether you are held and sets the terms of any release." },
        { when: "30 days in custody", what: "If you are held, the State has 30 days to file a formal charge. If it does not, the court orders you released on your own word on day 33, or day 40 if the State shows good cause. You cannot be held past day 40 without a formal charge." },
        { when: "60 days if you are out", what: "If you are on release, the State has 60 days to file. The court can give it up to 30 more days for good cause." },
        { when: "90 days, or 175 days", what: "The speedy trial clock. It is 90 days for a misdemeanor and 175 for a felony, counted from the formal charge. Running out of time does not end a case by itself." },
      ],
      source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)",
    },
    charges: {
      heading: "Common charges, and what is different about each.",
      intro: "Each charge has a full page with the penalties, the process, and what to do now. Here is the first thing to know about each one.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "You have two cases: the charge, and one against your license. You get 10 days from the notice of suspension to act on the license, and that clock does not wait for court.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "The bond schedule does not get you out first. You are held until a judge sets bond, and if you are released you must stay away from the other person.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "If you are charged with having a firearm as a convicted felon, the schedule does not apply and you wait for a judge.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "The substance and the amount decide the charge, and a large enough amount becomes trafficking, which must wait for a judge.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "A simple battery is a misdemeanor, but a felony battery or a battery on someone 65 or older must wait for a judge before any release.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "The value of what was taken sets the degree, so it also sets whether the bond schedule applies at all.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Brandon crash.",
      intro: "A few deadlines and rules decide most of what you can recover, and the first one starts the day of the crash.",
      items: [
        {
          title: "See a doctor within 14 days",
          body: "Your own insurance pays your first medical bills, but only if you get your first care within 14 days of the crash. Go even if you feel fine.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "You have two years to sue",
          body: "That is the time limit for a negligence claim from a crash after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "Fault can end the claim",
          body: "If you are found more than 50 percent at fault for your own harm, you recover nothing from the other driver. Be careful how you describe the crash to an insurer.",
          source: "F.S. 768.81",
        },
        {
          title: "Where a lawsuit is filed",
          body: "A claim over $50,000 is a circuit court case. The East Division in Plant City takes a civil case if the defendant lives there or the crash happened there. Otherwise a Brandon crash case goes through the circuit civil divisions in downtown Tampa.",
          source: "Hillsborough County Clerk of Court, Circuit Civil; 13th Circuit Administrative Order S-2024-079",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "What we handle from the Brandon office.",
      intro: "Each of these has its own page, written for the Hillsborough County courts that Brandon cases go to.",
      items: [
        {
          href: "/criminal-defense/state",
          title: "State criminal defense",
          body: "Felony and misdemeanor charges in the Hillsborough County courts, including DUI, drug, theft, and violent charges.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations in the Middle District of Florida, heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, from the first subpoena or agent visit.",
        },
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Car and truck crash claims for people hurt by someone else's carelessness.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, ownership, non-competes, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Where will my Brandon case be heard?",
        answer: "Your first appearance is by video, in Division O. After that, a felony goes through the circuit criminal divisions in Tampa. A misdemeanor goes to a county division in Tampa or to Plant City, depending on which side of the East Division line the offense happened.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: HOVER_ANSWER,
      },
      {
        question: "Does one bond cover all of the charges?",
        answer: "No. Each charge needs its own bond, so the total is the sum of the amounts for each charge. Hillsborough County courts do not allow one bond to cover more than one charge or case.",
      },
      {
        question: "Can I use a car or other property to post bond?",
        answer: "No. The courts here accept a bond from a licensed bail bond company or cash, not personal property. Bonds backed by real estate are discouraged.",
      },
      {
        question: "What if the arrest was on a warrant?",
        answer: "The bond is usually the amount written on the warrant. If a warrant for a probation violation or a missed court date gives no amount, there is no bond until you see the judge handling that matter.",
      },
      {
        question: "Can I contact the person who reported me once I am out?",
        answer: "No. Anyone released before trial must stay away from any alleged victim and avoid any contact of any type, except through the formal exchange of evidence in the case. Breaking that rule can cost you your bond.",
      },
    ],
    cta: {
      heading: "Call the Brandon office.",
      body: "Calls are confidential and answered 24/7. If you were arrested, contacted by investigators, or hurt in a crash, talk to an attorney before you talk to anyone else.",
    },
  },
];

export const publishedLocations = locationPages.filter((p) => p.published);

export const locationHref = (p: Pick<LocationPage, "slug" | "parent">) =>
  p.parent ? `/locations/${p.parent}/${p.slug}` : `/locations/${p.slug}`;

export const locationBySegments = (segments: string[]) =>
  publishedLocations.find((p) =>
    segments.length === 1
      ? !p.parent && p.slug === segments[0]
      : segments.length === 2 && p.parent === segments[0] && p.slug === segments[1],
  );

export const marketLocations = publishedLocations.filter((p) => p.kind === "market");
export const subLocations = (marketSlug: string) =>
  publishedLocations.filter((p) => p.parent === marketSlug);
/** The communities around Tampa, which have no market page of their own (D152). */
export const tampaCommunities = publishedLocations.filter((p) => p.kind === "community" && !p.parent);

export const locationTrail = (p: LocationPage) => {
  const market = p.parent ? marketLocations.find((m) => m.slug === p.parent) : undefined;
  return [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    ...(market ? [{ name: market.place, href: locationHref(market) }] : []),
    { name: p.place, href: locationHref(p) },
  ];
};

/** Every rendered string on a location page, for the content gates (D29). */
export function locationCopy(p: LocationPage): string[] {
  const facts = (items: LocationFact[]) =>
    items.flatMap((f) => [f.title, f.body, ...(f.source ? [f.source] : [])]);
  return [
    p.metaTitle,
    p.metaDescription,
    p.h1,
    ...p.lead,
    p.facts.heading,
    p.facts.intro,
    ...facts(p.facts.items),
    ...(p.facts.table
      ? [p.facts.table.caption, p.facts.table.source, ...p.facts.table.rows.flatMap((r) => [r.division, r.letters])]
      : []),
    ...(p.firstSteps
      ? [
          p.firstSteps.heading,
          p.firstSteps.intro,
          ...facts(p.firstSteps.items),
          ...p.firstSteps.items.flatMap((i) => (i.link ? [i.link.label] : [])),
        ]
      : []),
    ...(p.bond
      ? [
          p.bond.heading,
          p.bond.intro,
          ...p.bond.rows.flatMap((r) => [r.crime, r.amount]),
          p.bond.waitHeading,
          p.bond.waitIntro,
          ...p.bond.wait,
          p.bond.waitNote,
          p.bond.source,
        ]
      : []),
    ...(p.timeline
      ? [p.timeline.heading, p.timeline.intro, ...p.timeline.steps.flatMap((t) => [t.when, t.what]), p.timeline.source]
      : []),
    ...(p.charges ? [p.charges.heading, p.charges.intro, ...p.charges.items.flatMap((l) => [l.title, l.body])] : []),
    ...(p.injury
      ? [p.injury.heading, p.injury.intro, ...facts(p.injury.items), ...p.injury.links.map((l) => l.label)]
      : []),
    p.practices.heading,
    p.practices.intro,
    ...p.practices.items.flatMap((l) => [l.title, l.body]),
    p.office.heading,
    ...p.office.body,
    ...(p.communitiesIntro ? [p.communitiesIntro] : []),
    ...(p.faq ?? []).flatMap((f) => [f.question, f.answer]),
    p.cta.heading,
    p.cta.body,
  ];
}
