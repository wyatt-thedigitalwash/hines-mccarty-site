/**
 * Location pages (D151). Five market pages, Tampa, St. Petersburg, Clearwater,
 * Sarasota and Orlando, each with sub-location pages for the communities around
 * it. Outside Tampa, a market also gets its own State Criminal and Personal
 * Injury pages, because the courthouse and the jail change with the county;
 * Federal, White Collar and Business Litigation stay as links to the main hubs,
 * because every one of those markets but Orlando is in the same federal
 * division and the pages would read the same with the city swapped.
 *
 * TAMPA IS THE EXCEPTION. The whole site is already written for Hillsborough
 * County, and the Tampa head terms belong to the home page and the hubs
 * (search-map.ts). A Tampa State Criminal page would compete with
 * /criminal-defense/state, so Tampa links to the hubs instead.
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

export type LocationPage = {
  slug: string;
  /** The market's slug, for a sub-location. Absent on a market page. */
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
  facts: { heading: string; intro: string; items: LocationFact[] };
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
const FIRST_APPEARANCE_SOURCE = "Fla. R. Crim. P. 3.130(a), (d)";
const COURT_LEVEL_SOURCE = "F.S. 26.012(2)(d); F.S. 34.01(1)(a)";

export const locationPages: LocationPage[] = [
  {
    slug: "tampa",
    place: "Tampa",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    metaTitle: "Lawyers Serving Tampa, FL | Hines McCarty Pavlidis",
    metaDescription:
      "Criminal defense, personal injury, and business litigation for people in Tampa, from our Brandon office. Call (813) 738-8650, 24/7.",
    h1: "Lawyers for Tampa criminal, injury, and business cases.",
    lead: [
      "Hines McCarty Pavlidis defends people charged with crimes in Tampa, represents people hurt in Tampa crashes, and handles business disputes in the Hillsborough County courts.",
      "Our office is in Brandon, in the same county. A Tampa case moves through the same county jail, courthouses, and prosecutor's office as every other Hillsborough case.",
    ],
    facts: {
      heading: "Where a Tampa case goes.",
      intro:
        "Knowing which offices will handle your case helps you make sense of the papers you are handed. Here is the path a Tampa case takes.",
      items: [
        {
          title: "Who makes the arrest",
          body: "Inside the city limits, arrests are usually made by the Tampa Police Department. In the parts of the county that are not a city, it is usually the Hillsborough County Sheriff's Office. Either way, the case enters the same county system.",
        },
        {
          title: "Where you are booked",
          body: "Adults arrested in Tampa are booked at the Sheriff's Orient Road Jail, 1201 Orient Road. The Sheriff calls it the county's primary receiving facility. The Sheriff also houses people at the Falkenburg Road Jail, 520 N. Falkenburg Road, so a person booked at Orient Road may be held at either.",
          source: HCSO_SOURCE,
        },
        {
          title: "Your first court date",
          body: "You must be brought before a judge within 24 hours of arrest, unless you were already released. The judge may see you in person or by video. That hearing is where release and bond are first decided.",
          source: FIRST_APPEARANCE_SOURCE,
        },
        {
          title: "Who decides the charge",
          body: "The State Attorney for the 13th Judicial Circuit decides whether to file charges and which ones. The police report starts the case, but the charge you face is the prosecutor's choice.",
        },
        {
          title: "Where the case is heard",
          body: "A felony is a circuit court case and a misdemeanor is a county court case. Criminal court services are at the Edgecomb Courthouse, 800 E. Twiggs Street, in downtown Tampa, and at the Plant City Courthouse, 301 North Michigan Avenue.",
          source: COURT_LEVEL_SOURCE,
        },
        {
          title: "If the charge is federal",
          body: "A federal case from Tampa is heard in the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue. Federal agents and the U.S. Attorney's Office bring these cases, not the county.",
        },
        {
          title: "Injury and business lawsuits",
          body: "A Tampa lawsuit asking for more than $50,000 is a circuit court case, and the Clerk lists car crash and other personal injury claims among them. The Clerk serves circuit civil filers in person downtown and in Plant City.",
          source: "Hillsborough County Clerk of Court, Circuit Civil",
        },
      ],
    },
    practices: {
      heading: "What we handle for people in Tampa.",
      intro:
        "Each area has its own page with the charges or claims it covers. Those pages are written for Hillsborough County, so they apply to Tampa as written.",
      items: [
        {
          href: "/criminal-defense/state",
          title: "State criminal defense",
          body: "Felonies and misdemeanors in the Hillsborough County courts, from DUI and drug charges to violent and sex offenses.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Charges brought by the U.S. Attorney in the Middle District of Florida, and investigations before any charge is filed.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud, embezzlement, and other financial charges, in state or federal court, often starting with a subpoena or a call from an agent.",
        },
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Claims for people hurt in car and truck crashes caused by someone else.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Contract, ownership, non-compete, and trade secret disputes for businesses and their owners.",
        },
      ],
    },
    communitiesIntro:
      "Pages for the communities around Tampa, each with the local details that differ from the city's.",
    office: {
      heading: "Our office is in Brandon.",
      body: [
        "The firm has one office, in Brandon. There is no Tampa office. Tampa clients work with the same attorneys who handle the firm's other Hillsborough County cases.",
        "We answer the phone 24 hours a day, 7 days a week.",
      ],
    },
    cta: {
      heading: "Talk to an attorney about your Tampa case.",
      body: "Calls are confidential. If you or someone close to you was arrested in Tampa, contacted by police, or hurt in a crash, call now.",
    },
  },
  {
    slug: "brandon",
    parent: "tampa",
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
    ],
    office: {
      heading: "Visit us on West Lumsden Road.",
      body: [
        "This is the firm's only office.",
        "We answer the phone 24 hours a day, 7 days a week. Call first so an attorney can set aside time to meet you.",
      ],
    },
    facts: {
      heading: "If you are arrested in Brandon.",
      intro:
        "Brandon cases run through the Hillsborough County system, but a few things work differently here than they do inside Tampa.",
      items: [
        {
          title: "There is no Brandon police department",
          body: "Brandon is not a city. The Census Bureau counts it as a census-designated place, which is an unincorporated community, so it has no police force of its own. Arrests in Brandon are usually made by deputies of the Hillsborough County Sheriff's Office.",
          source: "U.S. Census Bureau, QuickFacts: Brandon CDP, Florida",
        },
        {
          title: "Booking at Orient Road",
          body: "Deputies take adults they arrest to the Orient Road Jail, 1201 Orient Road, where the Sheriff books and processes new arrests. If someone you know was just arrested in Brandon, that is the place to start looking.",
          source: HCSO_SOURCE,
        },
        {
          title: "In front of a judge within a day",
          body: "You must see a judge within 24 hours of arrest unless you have already been released, and it may be by video from the jail. Bond and release conditions are set at that hearing, sometimes before you have a lawyer, so call as early as you can.",
          source: FIRST_APPEARANCE_SOURCE,
        },
        {
          title: "Felony or misdemeanor",
          body: "A felony goes to circuit court and a misdemeanor to county court. The State Attorney for the 13th Judicial Circuit prosecutes both. Criminal court services are at the Edgecomb Courthouse in downtown Tampa and the Plant City Courthouse.",
          source: COURT_LEVEL_SOURCE,
        },
        {
          title: "Hurt in a Brandon crash",
          body: "You have two years to sue over a crash that happened after 24 March 2023. Your own insurance pays your first medical bills only if you get care within 14 days. If you are found more than 50 percent at fault, you recover nothing from the other driver.",
          source: "F.S. 95.11; F.S. 627.736(1)(a); F.S. 768.81",
        },
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

export const marketLocations = publishedLocations.filter((p) => !p.parent);
export const subLocations = (marketSlug: string) =>
  publishedLocations.filter((p) => p.parent === marketSlug);

export const locationTrail = (p: LocationPage) => {
  const market = p.parent ? publishedLocations.find((m) => !m.parent && m.slug === p.parent) : undefined;
  return [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    ...(market ? [{ name: market.place, href: locationHref(market) }] : []),
    { name: p.place, href: locationHref(p) },
  ];
};

/** Every rendered string on a location page, for the content gates (D29). */
export function locationCopy(p: LocationPage): string[] {
  return [
    p.metaTitle,
    p.metaDescription,
    p.h1,
    ...p.lead,
    p.facts.heading,
    p.facts.intro,
    ...p.facts.items.flatMap((f) => [f.title, f.body, ...(f.source ? [f.source] : [])]),
    p.practices.heading,
    p.practices.intro,
    ...p.practices.items.flatMap((l) => [l.title, l.body]),
    p.office.heading,
    ...p.office.body,
    ...(p.communitiesIntro ? [p.communitiesIntro] : []),
    p.cta.heading,
    p.cta.body,
  ];
}
