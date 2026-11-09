import type { LocationBond, LocationDeadlines, LocationDivisionTable, LocationPage } from "../location-types.ts";

/** Tampa's communities in Hillsborough County (D151, D152, D153), and the hubs' hrefs every market links to. */
// The three hubs every market links to rather than duplicating.
export const FEDERAL = "/criminal-defense/federal";
export const WHITE_COLLAR = "/criminal-defense/white-collar";
export const BUSINESS = "/business-litigation";

export const HCSO_SOURCE = "Hillsborough County Sheriff's Office, Department of Detention Services";
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
export const HILLSBOROUGH_BOND: LocationBond = {
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

/** The key numbers for pages without the full table (D155). */
export const HILLSBOROUGH_DEADLINES: LocationDeadlines = {
  bond: {
    body: "Through 31 December 2026, a third degree felony is $2,500 with no force and $5,000 with force or a threat. A first degree misdemeanor is $500 or $1,000. Many charges have no schedule amount and have to wait for a judge, and each charge needs its own bond.",
    href: "/locations/brandon#bond",
    label: "Full Hillsborough bond table",
  },
  clocks: {
    body: "You see a judge within 24 hours of arrest. The State then has 30 days to file a formal charge if you are held, or 60 days if you are out. The speedy trial clock is 90 days for a misdemeanor and 175 for a felony, counted from the formal charge.",
    href: "/locations/brandon#timeline",
    label: "Full Hillsborough timeline",
  },
  source: `${HILLSBOROUGH_BOND.source}; Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)`,
};

export const HILLSBOROUGH_DIVISIONS: LocationDivisionTable = {
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

export const HOVER_ANSWER =
  "The Clerk's free HOVER site, hover.hillsclerk.com, lets you search by case number, citation number, or a person's name, and it has a court hearing lookup. Sealed and confidential records do not appear.";

/** The clocks after first appearance, for the communities added after Brandon. Brandon keeps its own wording. */
export const HILLSBOROUGH_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The clocks that start after first appearance.",
  intro: "Court rules set these dates. Mark them, because some of them can get you out of custody.",
  steps: [
    { when: "Within 24 hours of arrest", what: "Unless you were already released, you go before a judge by video. The judge decides if you stay in custody and what terms come with any release." },
    { when: "30 days in custody", what: "While you are held, the State has 30 days to file a formal charge. If it misses that date, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. Day 40 is the outer limit without a formal charge." },
    { when: "60 days if you are out", what: "Once you are on release, the State has 60 days to file. A judge can add up to 30 more days for good cause." },
    { when: "90 days, or 175 days", what: "This is speedy trial: 90 days for a misdemeanor, 175 for a felony, counted from the formal charge. A missed date does not end the case on its own." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)",
};

export const hillsboroughPages: LocationPage[] = [
  {
    slug: "brandon",
    kind: "community",
    place: "Brandon",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    officeHere: true,
    search: { primary: "felony lawyer Brandon FL", source: "docs/research/keywords.md:46" },
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
  {
    slug: "plant-city",
    kind: "community",
    place: "Plant City",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    metaTitle: "Plant City Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Plant City? Division X, the East Division courthouse, Plant City Police, bond amounts for 2026, and crash report steps.",
    h1: "Arrested or hurt in Plant City. What happens from here.",
    lead: [
      "Plant City is an incorporated city with its own police department, and Hillsborough County's East Division sits at its courthouse. Those two facts change who arrests you and where many cases are heard.",
      "This page walks through the first day, bond, the courtrooms, and crash claims. Our only office is in Brandon. We take cases from Plant City and across Hillsborough County.",
    ],
    firstSteps: {
      heading: "The first hours after a Plant City arrest.",
      intro: "Start with who made the arrest. A judge will see the person within 24 hours, so the rest of this list moves quickly.",
      items: [
        {
          title: "Ask which agency made the arrest",
          body: "Inside the city limits, it is usually Plant City Police, at 813-757-9200. Outside them, it is usually Sheriff's deputies, whose Plant City community station is 813-757-3855. Either way, adults usually go to the Orient Road Jail, 1201 Orient Road in Tampa, which the Sheriff calls its primary receiving facility. Search the Sheriff's online list or call the jail at 813-247-8300.",
          source: `City of Plant City, Police Department; ${HCSO_SOURCE}; Sheriff's Office Telephone Directory`,
          link: { href: "https://webapps.hcso.tampa.fl.us/ArrestInquiry", label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Read the bond table before you pay",
          body: "Some charges can bond out from a set schedule. Others cannot, whatever you can afford. Find the charge in the county bond table linked below first.",
          link: { href: "#bond", label: "2026 bond amounts" },
        },
        {
          title: "Keep the facts to yourself",
          body: "You can decline to answer questions from an officer or detective. Jail calls are not the place to go over what happened, for you or for family. Tell it to a lawyer instead.",
        },
        {
          title: "Plan for first appearance by video",
          body: "Even a Plant City case starts in Division O, the county's first appearance division, and it runs by video. Unless you were already released, this happens within 24 hours of arrest. Try to reach a lawyer before it, since release terms are set there.",
          source: "Fla. R. Crim. P. 3.130(a); 13th Circuit Administrative Order S-2024-030",
        },
      ],
    },
    deadlines: HILLSBOROUGH_DEADLINES,
    facts: {
      heading: "Plant City cases split between two courthouses.",
      intro:
        "A misdemeanor from Plant City stays at the courthouse on North Michigan Avenue. A felony does not. Unlike in Tampa, your last name has no effect on a misdemeanor here.",
      items: [
        {
          title: "Why Plant City is in the East Division",
          body: "The East Division's western edge follows I-75, then Martin Luther King Jr. Boulevard east to Dover Road, then runs south. Plant City's city limits lie east of Dover Road, so an offense in the city should fall inside the division. The location of the offense decides this, not your home address.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "Misdemeanors and criminal traffic",
          body: "These go to Division X at the Plant City Courthouse, 301 North Michigan Avenue. Criminal violations of Plant City's own ordinances go there too. The last-name table used in Tampa does not apply.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-012",
        },
        {
          title: "Domestic violence",
          body: "A misdemeanor domestic violence case from inside the East Division also goes to Division X. It does not go to Division F in Tampa unless the case is moved.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-012",
        },
        {
          title: "Felonies",
          body: "The East Division order sets up no felony division at Plant City. So a Plant City felony should go through the circuit criminal divisions in Tampa, at the Edgecomb Courthouse, 800 E. Twiggs Street. The clerk normally spreads new cases evenly among those divisions when the arrest report is filed.",
          source: "13th Circuit Administrative Orders S-2024-062 and S-2024-079; F.S. 26.012(2)(d)",
        },
        {
          title: "When a case moves to Tampa",
          body: "After a hearing, a judge can send a case to a Tampa division for good cause, based mainly on what suits the people involved. If the Division X judge steps aside, the clerk moves the case to Tampa. It then follows the last-name table, or goes to Division F if it is domestic violence.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "Protective injunctions",
          body: "An injunction is a separate court case from any arrest. If a party lives in the East Division, it is filed there. The Clerk takes petitions at the Plant City Courthouse on weekdays from 8 am to 5 pm, and lists Plant City Police as a filing location. Breaking an injunction can mean no bond until you see a judge.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-063; Hillsborough County Clerk of Court, Domestic Violence Injunction Filing Locations",
        },
        {
          title: "Federal charges",
          body: "A federal case takes a different road entirely. It is heard in the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
        },
      ],
    },
    charges: {
      heading: "Charges we defend, and where each one goes.",
      intro: "Each link opens a full page on the penalties and the process. Here is how each charge starts out for someone arrested in Plant City.",
      items: [
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "You wait in custody for a judge to set bond. If the charge is a misdemeanor, it should stay in Division X in Plant City.",
        },
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "A misdemeanor DUI is a criminal traffic case for Division X. Separately, you have 10 days from the notice of suspension to act on your license.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "Simple battery is a misdemeanor for Division X. Felony battery, or battery on someone 65 or older, waits for a judge and goes on to Tampa.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "The drug and the amount set the charge. That also sets the courthouse, since a felony count should go to Tampa and not Plant City.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "Value sets the degree. The degree decides if a bond schedule amount applies or if you have to see a judge first.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "A convicted felon charged with a gun or ammunition cannot use the schedule. Expect to wait for a judge, and expect the felony to run through Tampa.",
        },
      ],
    },
    injury: {
      heading: "After a crash in or near Plant City.",
      intro: "The crash report and the first doctor visit come first. The other limits run in the background from the day of the crash.",
      items: [
        {
          title: "Get the crash report",
          body: "If Plant City Police worked the crash, the Records Unit sells the report for $2. You can ask in person or by signed letter, or call 813-757-9200, extension 2226, from 7 am to 5 pm on weekdays. The state's crash portal also sells reports, at $10 each plus a $2 fee per order, and a report can take up to 10 days to appear.",
          source: "City of Plant City Police, Records Unit; FLHSMV, Traffic Crash Reports",
        },
        {
          title: "First care within 14 days",
          body: "Your own insurer pays first medical bills only if you are first treated within 14 days of the crash. Feeling fine does not change that limit.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to file suit",
          body: "A negligence claim from a crash after 24 March 2023 must be filed within two years.",
          source: "F.S. 95.11",
        },
        {
          title: "More than half at fault",
          body: "If you are more than 50 percent at fault for your own harm, you recover nothing from the other driver. Watch what you say to an adjuster.",
          source: "F.S. 768.81",
        },
        {
          title: "The courthouse for a lawsuit",
          body: "A claim over $50,000 is a circuit court case. If the crash happened in the East Division, or a defendant lives there, it goes to the East Division at the Plant City Courthouse. So a civil case can stay in Plant City when a felony would not.",
          source: "Hillsborough County Clerk of Court, Circuit Civil; 13th Circuit Administrative Order S-2024-079",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "What else we handle for Plant City clients.",
      intro: "These pages go deeper than this one. The state criminal and injury pages are written around the Hillsborough County courts.",
      items: [
        { href: "/criminal-defense/state", title: "State criminal defense", body: "Felonies and misdemeanors in Hillsborough County, in Tampa or Plant City." },
        { href: "/personal-injury", title: "Personal injury", body: "Claims for people hurt in car and truck crashes caused by someone else." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal charges and investigations, heard in the Tampa Division." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial cases, from the first subpoena or agent contact." },
        { href: BUSINESS, title: "Business litigation", body: "Contract, ownership, non-compete, and trade secret disputes." },
      ],
    },
    faq: [
      {
        question: "I was arrested in Plant City. Will my whole case be heard there?",
        answer: "It depends on the charge. A misdemeanor or criminal traffic case should stay in Division X in Plant City. A felony should run through the circuit divisions in Tampa. First appearance is by video in Division O in either case.",
      },
      {
        question: "I live in Tampa, but the arrest was in Plant City. Which court is it?",
        answer: "For a criminal case, the court looks at where the offense happened, not where you live. An offense inside the East Division goes to the East Division's court, wherever your home is.",
      },
      {
        question: "Does the first letter of my last name matter?",
        answer: "Not for a Division X case. The letter only matters on the Tampa side, or if a Plant City case is later moved to a Tampa division.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: HOVER_ANSWER,
      },
      {
        question: "What happens to a city ordinance charge?",
        answer: "A criminal violation of a Plant City ordinance goes to Division X. A civil ordinance violation goes to Division Y, at the same courthouse.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Plant City.",
      body: [
        "We have no office in Plant City. Our only office is in Brandon, at 745 West Lumsden Road.",
        "The phone is answered 24 hours a day, 7 days a week, so start with a call and we will set up the next step.",
      ],
    },
    cta: {
      heading: "Talk to an attorney about your Plant City case.",
      body: "The call is confidential and someone answers around the clock. Call before first appearance if you can, and before you speak to investigators or an insurer.",
    },
  },
  {
    slug: "riverview",
    kind: "community",
    place: "Riverview",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    metaTitle: "Riverview Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Riverview? Sheriff's deputies, Orient Road Jail, the East Division line along Boyette Road, bond amounts, and crash deadlines.",
    h1: "After an arrest or crash in Riverview.",
    lead: [
      "Riverview has no city government or police force of its own. Arrests here are usually made by Sheriff's deputies, and the case then goes to the Hillsborough County courts.",
      "One local detail matters more than most. The line that divides the county's courts runs along Riverview's eastern side, so an address near Boyette Road can change the courthouse. We take cases from Riverview from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "What to do first after a Riverview arrest.",
      intro: "A judge will see the person within 24 hours. These steps put the most useful things first.",
      items: [
        {
          title: "Find the person",
          body: "The Census Bureau lists Riverview as a census-designated place, not a city, so arrests here are usually made by Sheriff's deputies. The Sheriff's 2023 report places Riverview in District V, at 813-318-5400. Adults usually go to the Orient Road Jail, 1201 Orient Road, and you can check its online list or call 813-247-8300.",
          source: `${HCSO_SOURCE}; Sheriff's Office, 2023 Annual Report; U.S. Census Bureau, TIGERweb: Riverview CDP`,
          link: { href: "https://webapps.hcso.tampa.fl.us/ArrestInquiry", label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Write down where it happened",
          body: "Get the street address or nearest cross street of the offense, not just the word Riverview. It helps decide if a misdemeanor goes to Tampa or to Plant City. The arrest report should show it.",
        },
        {
          title: "Check bond, then pay",
          body: "Look up the charge in the county bond table linked below before you call a bond company. Some charges have a set amount, and others have no bond until a judge sets one.",
          link: { href: "#bond", label: "See the 2026 schedule" },
        },
        {
          title: "Say nothing about the facts",
          body: "Deputies and detectives can ask, but you do not have to answer. Family members should not ask for the story on a jail call or pass one along. A lawyer is the person to hear it.",
        },
        {
          title: "Reach a lawyer before first appearance",
          body: "A judge in Division O sees you by video within 24 hours of arrest, unless you were already released. Release is decided at that hearing, so an early call helps.",
          source: "Fla. R. Crim. P. 3.130(a); 13th Circuit Administrative Order S-2024-030",
        },
      ],
    },
    deadlines: HILLSBOROUGH_DEADLINES,
    facts: {
      heading: "Riverview sits beside the East Division line.",
      intro:
        "Hillsborough County runs two sets of county courts. Most of Riverview falls on the Tampa side. Near its eastern edge, you need the exact location before you know which one applies.",
      items: [
        {
          title: "Where the line runs",
          body: "Going south, the line follows Fish Hawk Boulevard west to Bell Shoals Road, then Bell Shoals to Boyette Road, then Boyette to Balm Boyette Road and on to County Road 579. Most of Riverview lies west of those roads. Check the address if the offense happened on or near them.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "West of the line",
          body: "A misdemeanor or criminal traffic offense goes to a county criminal division in Tampa. Your division comes from the first letter of your last name, shown in the table below.",
          source: "13th Circuit Administrative Order S-2025-012; F.S. 34.01(1)(a)",
        },
        {
          title: "East of the line",
          body: "The same kinds of cases go to one place, Division X at the Plant City Courthouse, 301 North Michigan Avenue. Last name plays no part.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-012",
        },
        {
          title: "Domestic violence",
          body: "A misdemeanor domestic violence case leaves the last-name table. West of the line it goes to Division F in Tampa. East of it, Division X in Plant City.",
          source: "13th Circuit Administrative Order S-2025-012",
        },
        {
          title: "Felonies",
          body: "Which side of the line you are on should not matter here. The East Division order creates no felony division, so a Riverview felony should go through the circuit criminal divisions at the Edgecomb Courthouse, 800 E. Twiggs Street, in Tampa.",
          source: "13th Circuit Administrative Orders S-2024-062 and S-2024-079; F.S. 26.012(2)(d)",
        },
        {
          title: "Your home address does not decide it",
          body: "For a criminal case, the order looks at where the offense happened. If you live in Riverview and the offense happened in Plant City, it is an East Division case. A judge can still move a case between Tampa and Plant City for good cause.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "Federal charges",
          body: "A federal case from Riverview is outside the county courts. It is heard in the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
        },
      ],
      table: HILLSBOROUGH_DIVISIONS,
    },
    charges: {
      heading: "Charges we defend, for people arrested in Riverview.",
      intro: "Each link opens a full page on the law and penalties. Here is the first thing to know about each one.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "The license clock is the urgent part: 10 days from the notice of suspension. A misdemeanor DUI then goes to Tampa or Plant City depending on where you were stopped.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "No bond is available from the schedule. You see a judge first, and any release comes with a stay-away condition.",
        },
        {
          href: "/criminal-defense/state/drug-trafficking",
          title: "Drug trafficking",
          body: "Trafficking in a controlled substance must wait for a judge before any release. It is a felony, so it should go to Tampa.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "The value involved sets the degree of the felony. That decides if the schedule applies or you wait for first appearance.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "Simple battery is usually a misdemeanor with a schedule amount. Felony battery has no schedule amount.",
        },
        {
          href: "/criminal-defense/state/sex-crimes",
          title: "Sex crimes",
          body: "Sexual battery must wait for a judge. A person designated a sexual offender must also wait on any new arrest.",
        },
      ],
    },
    injury: {
      heading: "Hurt in a Riverview crash.",
      intro: "US 301, I-75 and Big Bend Road all run through Riverview. Wherever your crash happened, these limits apply.",
      items: [
        {
          title: "See a doctor within 14 days",
          body: "Your own insurance only covers early medical bills if your first care comes within 14 days of the crash. Go even if the pain has not started.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "The two-year limit",
          body: "If your crash came after 24 March 2023, you have two years to bring a negligence claim.",
          source: "F.S. 95.11",
        },
        {
          title: "How fault can end a claim",
          body: "A finding that you are more than 50 percent at fault for your own harm means no recovery from the other driver. Think before you describe the crash to an insurer.",
          source: "F.S. 768.81",
        },
        {
          title: "The crash report",
          body: "Ask which agency worked the crash: Sheriff's deputies, or Florida Highway Patrol, whose Troop C covers Hillsborough County. The state's crash portal sells reports for $10, plus a $2 fee per order. A report can take up to 10 days to appear, and people in the crash can get one.",
          source: "FLHSMV, Traffic Crash Reports and Troop C",
        },
        {
          title: "Filing a lawsuit",
          body: "A claim over $50,000 goes to circuit court, in the civil divisions in downtown Tampa. It goes to the East Division in Plant City instead if the crash happened east of the line, or if a defendant lives there.",
          source: "Hillsborough County Clerk of Court, Circuit Civil; 13th Circuit Administrative Order S-2024-079",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "More on the work we do.",
      intro: "Each page goes further than this one. The state criminal page covers Hillsborough County's courts, which is where Riverview cases go.",
      items: [
        { href: "/criminal-defense/state", title: "State criminal defense", body: "How charges move through the Hillsborough County courts, from arrest to trial." },
        { href: "/personal-injury", title: "Personal injury", body: "Crash claims, what they cover, and how they are built." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Charges and investigations in the Middle District of Florida's Tampa Division." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "State or federal fraud and financial cases." },
        { href: BUSINESS, title: "Business litigation", body: "Business disputes over contracts, ownership, and trade secrets." },
      ],
    },
    faq: [
      {
        question: "Is a Riverview case heard in Tampa or Plant City?",
        answer: "Most misdemeanors from Riverview go to Tampa. An offense east of the Bell Shoals and Boyette Road line goes to Plant City. A felony should run through Tampa either way.",
      },
      {
        question: "How do I know which side of the line an address is on?",
        answer: "Compare the location to the roads named above. An address on or close to those roads is the one to check, so ask a lawyer to read the arrest report with you. The order lists the roads, not individual addresses.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: HOVER_ANSWER,
      },
      {
        question: "Can one bond cover all my charges?",
        answer: "No. Hillsborough courts need a separate bond for each charge, and they prohibit blanket bonds. Add up the amounts to get the total.",
      },
      {
        question: "I was arrested on a warrant. What is the bond?",
        answer: "Look at the warrant first, since the bond is usually the amount written on it. If a warrant for a probation violation or missed court date shows no amount, you have no bond until you see the judge on that matter.",
      },
    ],
    office: {
      heading: "We meet clients in Brandon.",
      body: [
        "We have no office in Riverview. Our only office is on West Lumsden Road in Brandon.",
        "Call first, at any hour, so an attorney can make time for you.",
      ],
    },
    cta: {
      heading: "Have a Riverview arrest or crash to talk through?",
      body: "Calls are confidential and taken at any hour. If you have the arrest report or crash report, have it with you so we can check the location together.",
    },
  },
  {
    slug: "carrollwood",
    kind: "community",
    place: "Carrollwood",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    metaTitle: "Carrollwood Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Carrollwood? Deputies or Tampa Police, Orient Road Jail, Tampa court divisions by last name, 2026 bond amounts, and crash deadlines.",
    h1: "Criminal defense and injury help for Carrollwood.",
    lead: [
      "Most Carrollwood cases have a simple path through the courts. Carrollwood sits in the northwest of the county, far from the line that sends some cases to Plant City, so it should stay in Tampa. What differs is who made the arrest, since Carrollwood borders the City of Tampa.",
      "Our only office is in Brandon, and we take cases from Carrollwood and across Hillsborough County.",
    ],
    firstSteps: {
      heading: "Someone you know was arrested in Carrollwood. Start here.",
      intro: "Bond and release get decided fast. A judge sees the person within 24 hours, so work through these today.",
      items: [
        {
          title: "Work out who arrested them",
          body: "The Census Bureau lists Carrollwood as a census-designated place with no city government, and the Sheriff lists it in District III. Its southeast edge meets the City of Tampa, where Tampa Police work instead. Sheriff's District III is at 813-247-0330, and Tampa Police non-emergency is 813-231-6130.",
          source: "Hillsborough County Sheriff's Office, 2023 Annual Report and Telephone Directory; U.S. Census Bureau, TIGERweb: Carrollwood CDP; Tampa Police, Contact Us",
        },
        {
          title: "Check the jail list",
          body: "Adults are usually booked at the Orient Road Jail, 1201 Orient Road, whichever agency made the arrest. Search the Sheriff's list online, or call 813-247-8300.",
          source: HCSO_SOURCE,
          link: { href: "https://webapps.hcso.tampa.fl.us/ArrestInquiry", label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Know if bond is on the table",
          body: "The county bond table linked below shows the amounts. It also shows charges where no amount helps until a judge rules.",
          link: { href: "#bond", label: "Who can bond out in 2026" },
        },
        {
          title: "Hold back the details",
          body: "You can tell an officer you will not discuss what happened. Family should do the same if anyone calls them, and should not ask about it on the jail phone.",
        },
        {
          title: "Call us before the video hearing",
          body: "Unless you were already released, first appearance comes within 24 hours in Division O, by video. Sometimes that happens before anyone has hired a lawyer, so call as soon as you can.",
          source: "Fla. R. Crim. P. 3.130(a); 13th Circuit Administrative Order S-2024-030",
        },
      ],
    },
    deadlines: HILLSBOROUGH_DEADLINES,
    facts: {
      heading: "A Carrollwood case should stay in Tampa.",
      intro:
        "For a misdemeanor, the first letter of your last name picks the courtroom. A felony has a different method. Here is how each kind of case is sorted.",
      items: [
        {
          title: "Why not Plant City",
          body: "The East Division's western edge starts at US 301 and I-75, well to the east. Carrollwood lies on the Tampa side of that line, so its county cases should go to Tampa. A judge can still move a case for good cause.",
          source: "13th Circuit Administrative Order S-2024-079",
        },
        {
          title: "Misdemeanors by last name",
          body: "A misdemeanor or criminal traffic case goes to a county criminal division in Tampa. Find your first letter in the table below. If your last name starts with R, for example, you are in Division D.",
          source: "13th Circuit Administrative Order S-2025-012; F.S. 34.01(1)(a)",
        },
        {
          title: "Domestic violence skips the table",
          body: "Whatever your last name, a misdemeanor domestic violence case from here goes to Division F in Tampa.",
          source: "13th Circuit Administrative Order S-2025-012",
        },
        {
          title: "Felonies go by rotation",
          body: "Felonies are circuit court cases, at the Edgecomb Courthouse, 800 E. Twiggs Street. When the arrest report is filed, the clerk normally spreads new cases evenly among the circuit criminal divisions. Your name does not matter there.",
          source: "13th Circuit Administrative Order S-2024-062; F.S. 26.012(2)(d)",
        },
        {
          title: "Injunctions",
          body: "A protective injunction is a separate case from any arrest. The Clerk lists the Sheriff's office at 7202 Gunn Highway as a place to start a petition. Breaking an injunction means no bond until you see a judge.",
          source: "Hillsborough County Clerk of Court, Domestic Violence Injunction Filing Locations; 13th Circuit Administrative Order S-2025-063",
        },
        {
          title: "Federal charges",
          body: "If federal agents bring the case, the county courts are not involved. It goes to the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
        },
      ],
      table: HILLSBOROUGH_DIVISIONS,
    },
    charges: {
      heading: "Charges we defend for people from Carrollwood.",
      intro: "Follow a link for the full picture on penalties and process. The note below each one is where to start.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "A misdemeanor DUI goes to your last-name division in Tampa. The license deadline is separate: 10 days from the notice of suspension.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "Expect to stay in custody until a judge sets bond. A misdemeanor case then goes to Division F.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "A felony on the rotation at Edgecomb. The amount taken sets its degree, and that decides if bond can be paid from the schedule.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "Which drug, and how much, sets the charge. Enough of it becomes trafficking, with no schedule amount at all.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "A felon charged with a gun or ammunition waits for a judge. The charge details decide the rest.",
        },
        {
          href: "/criminal-defense/state/sexual-battery",
          title: "Sexual battery",
          body: "There is no release before first appearance. The first meeting with a lawyer should come before any talk with detectives.",
        },
      ],
    },
    injury: {
      heading: "If a crash in Carrollwood hurt you.",
      intro: "Dale Mabry Highway and Gunn Highway both cross Carrollwood. These rules are the same on any road here, and the clock starts right away.",
      items: [
        {
          title: "Two weeks for first care",
          body: "Get seen within 14 days of the crash. After that, your own insurance does not have to pay first medical bills.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years for a lawsuit",
          body: "Two years is the limit for a negligence claim from a crash after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "Your share of fault",
          body: "More than 50 percent of the fault for your own harm means you recover nothing from the other driver. Be careful what you say to adjusters.",
          source: "F.S. 768.81",
        },
        {
          title: "Who has the report",
          body: "A crash here could be worked by deputies, Tampa Police, or Florida Highway Patrol. Reports can be bought through the state's crash portal for $10 plus a $2 fee per order, once one has been filed. That can take up to 10 days.",
          source: "FLHSMV, Traffic Crash Reports",
        },
        {
          title: "Where the suit goes",
          body: "Over $50,000 means circuit court, normally in downtown Tampa. If a defendant lives in the East Division, the case can go to Plant City.",
          source: "Hillsborough County Clerk of Court, Circuit Civil; 13th Circuit Administrative Order S-2024-079",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "Other pages that may help.",
      intro: "The state criminal page is written for the Hillsborough County courts, so it applies to Carrollwood cases.",
      items: [
        { href: "/criminal-defense/state", title: "State criminal defense", body: "The Hillsborough County process for felonies and misdemeanors." },
        { href: "/personal-injury", title: "Personal injury", body: "What you can claim after a car or truck crash." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Cases brought by federal agents, heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial charges, from the first agent visit." },
        { href: BUSINESS, title: "Business litigation", body: "Non-compete, ownership, and contract fights." },
      ],
    },
    faq: [
      {
        question: "Where is a Carrollwood case heard?",
        answer: "First appearance is by video in Division O. After that, a misdemeanor goes to a county division in Tampa and a felony goes through the circuit divisions at the Edgecomb Courthouse.",
      },
      {
        question: "My address says Tampa but I live in Carrollwood. Does that change anything?",
        answer: "It can change who responds. A mailing address does not show the city limits, and the city limits decide which agency works the area. It should not change the courts, since both are on the Tampa side of the East Division line.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: HOVER_ANSWER,
      },
      {
        question: "What can be used for bond?",
        answer: "Hillsborough courts take a licensed bail bond company's bond or cash, and they do not take personal property such as a car. They discourage bonds backed by real estate.",
      },
      {
        question: "Am I allowed to call the person who reported me?",
        answer: "No. Pretrial release comes with a rule that you stay away from any alleged victim and have no contact of any type, except the formal exchange of evidence. Breaking it can cost you your bond.",
      },
    ],
    office: {
      heading: "Where to find us.",
      body: [
        "Our only office is in Brandon, at 745 West Lumsden Road. We have no office in Carrollwood.",
        "We pick up the phone at all hours. Call ahead so an attorney is free when you arrive.",
      ],
    },
    cta: {
      heading: "Call about a Carrollwood arrest or crash.",
      body: "It is confidential, and someone answers 24/7. Reach out before you sit down with investigators or an insurance adjuster.",
    },
  },
  {
    slug: "town-n-country",
    kind: "community",
    place: "Town 'n' Country",
    county: "Hillsborough County",
    published: true,
    indexable: false,
    metaTitle: "Town 'n' Country Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Town 'n' Country? Deputies, Tampa Police or Airport Police, Orient Road Jail, Tampa court divisions, bond amounts, crash deadlines.",
    h1: "Arrested or hurt in Town 'n' Country.",
    lead: [
      "Several police agencies work in and around Town 'n' Country. It has no city government, so the Sheriff covers it, but the City of Tampa and Tampa International Airport sit right next door. Knowing which agency made the arrest helps you find the paperwork.",
      "After that, the path is the same: the cases go to the Hillsborough County courts in Tampa. We take cases from Town 'n' Country from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "First moves after an arrest in Town 'n' Country.",
      intro: "The hearing on release comes within 24 hours, so it pays to do these today, in this order.",
      items: [
        {
          title: "Check the jail list first",
          body: "Adults are usually booked at the Orient Road Jail, 1201 Orient Road, even if a different agency made the arrest. The Sheriff's online list shows who is there. You can also call 813-247-8300.",
          source: HCSO_SOURCE,
          link: { href: "https://webapps.hcso.tampa.fl.us/ArrestInquiry", label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Ask which agency it was",
          body: "You need the agency to get the report. The card further down shows who works where. It also helps to know if a charge came from a stop on a highway or at the airport.",
        },
        {
          title: "Look up the bond",
          body: "Find the charge in the county bond table linked below. If the charge is on the wait list, paying a bond company ahead of time will not get anyone out.",
          link: { href: "#bond", label: "Bond table for 2026" },
        },
        {
          title: "Do not explain it to police",
          body: "No one has to give officers an account of what happened. Relatives should avoid the subject on jail phones and in messages.",
        },
        {
          title: "Get a lawyer on it before the hearing",
          body: "Division O holds first appearance by video, within 24 hours of arrest, unless you were released first. The judge sets the terms of release right there.",
          source: "Fla. R. Crim. P. 3.130(a); 13th Circuit Administrative Order S-2024-030",
        },
      ],
    },
    deadlines: HILLSBOROUGH_DEADLINES,
    facts: {
      heading: "Who makes the arrest, and where the case goes.",
      intro:
        "The agency can vary from block to block. The court should not. Town 'n' Country, the airport and the Tampa streets beside them all appear to sit on the Tampa side of the county's East Division line.",
      items: [
        {
          title: "Sheriff's deputies",
          body: "The Census Bureau lists Town 'n' Country as a census-designated place, and the Sheriff places it in District III. That district's general number is 813-247-0330, and its Town 'n' Country community station is 813-554-5170.",
          source: "Hillsborough County Sheriff's Office, 2023 Annual Report and Telephone Directory; U.S. Census Bureau, TIGERweb: Town 'n' Country CDP",
        },
        {
          title: "Tampa Police",
          body: "The southern and eastern edges of Town 'n' Country meet the City of Tampa. Across that border, Tampa Police work the area, and the non-emergency number is 813-231-6130. Check the location of the arrest on the report.",
          source: "U.S. Census Bureau, TIGERweb; Tampa Police, Contact Us",
        },
        {
          title: "Airport Police and Highway Patrol",
          body: "Tampa International Airport has its own police department, and Census maps put the airport in the City of Tampa, not in Town 'n' Country. On the Veterans Expressway, a stop may come from Florida Highway Patrol, whose Troop C covers this county.",
          source: "Tampa International Airport; U.S. Census Bureau, TIGERweb; FLHSMV, Troop C",
        },
        {
          title: "Misdemeanors",
          body: "A misdemeanor or criminal traffic case from here should go to a county criminal division in Tampa, whichever agency made the arrest. The table below sets out which letter goes where.",
          source: "13th Circuit Administrative Orders S-2024-079 and S-2025-012; F.S. 34.01(1)(a)",
        },
        {
          title: "Domestic violence",
          body: "This is the one misdemeanor where your last name makes no difference. It goes to Division F in Tampa.",
          source: "13th Circuit Administrative Order S-2025-012",
        },
        {
          title: "Felonies",
          body: "A felony from this area is handled in the circuit criminal divisions at the Edgecomb Courthouse, 800 E. Twiggs Street. The clerk normally spreads new cases evenly among those divisions once the arrest report is filed.",
          source: "13th Circuit Administrative Order S-2024-062; F.S. 26.012(2)(d)",
        },
        {
          title: "Federal charges",
          body: "A federal case from Town 'n' Country is heard by the Tampa Division of the Middle District of Florida, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
        },
      ],
      table: HILLSBOROUGH_DIVISIONS,
    },
    charges: {
      heading: "Charges we defend, with the first thing to check.",
      intro: "Open a charge for the penalties and how the case runs. The note here is only where to begin if the arrest was in Town 'n' Country.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "Ask which agency stopped you, since it holds the report. Then count 10 days from the notice of suspension, because that license deadline will not wait.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "Having a gun or ammunition as a convicted felon rules out bond from the schedule. You wait for the judge.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "Felony battery and battery on someone 65 or older wait for a judge. A misdemeanor battery can use the schedule, unless it is domestic violence.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "You are held until first appearance. A misdemeanor case then goes to Division F, and contact with the other person stops.",
        },
        {
          href: "/criminal-defense/state/drug-trafficking",
          title: "Drug trafficking",
          body: "No schedule bond applies. Trafficking must wait for a judge, so the first appearance is the first chance at release.",
        },
        {
          href: "/criminal-defense/state/homicide",
          title: "Homicide",
          body: "Capital and life felonies, like other first or second degree felonies, have no bond before first appearance. Talk to a lawyer before you talk to detectives.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt on the roads here.",
      intro: "Hillsborough Avenue, Memorial Highway and the Veterans Expressway all cross Town 'n' Country, and any of several agencies may have worked your crash.",
      items: [
        {
          title: "Find the agency, then the report",
          body: "Ask if it was deputies, Tampa Police, or Florida Highway Patrol. The state's crash portal sells reports at $10 each plus a $2 fee per order, and people in the crash can get theirs. Allow up to 10 days for it to appear.",
          source: "FLHSMV, Traffic Crash Reports and Troop C",
        },
        {
          title: "Medical care inside 14 days",
          body: "First care has to come within 14 days of the crash for your own insurance to pay those early bills.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to sue",
          body: "From a crash after 24 March 2023, a negligence claim has a two-year limit.",
          source: "F.S. 95.11",
        },
        {
          title: "The 50 percent rule",
          body: "Once you are more than 50 percent at fault for your own harm, you cannot recover from the other driver. Take care how you tell the story.",
          source: "F.S. 768.81",
        },
        {
          title: "Filing suit",
          body: "Claims above $50,000 are circuit court cases, usually in downtown Tampa for a crash here. If a defendant lives in the East Division, it goes to Plant City instead.",
          source: "Hillsborough County Clerk of Court, Circuit Civil; 13th Circuit Administrative Order S-2024-079",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "What we handle beyond this page.",
      intro: "These pages give the full detail. Town 'n' Country cases use the same Hillsborough County courts that the state criminal page describes.",
      items: [
        { href: "/criminal-defense/state", title: "State criminal defense", body: "Charges heard in the Hillsborough County courts." },
        { href: "/personal-injury", title: "Personal injury", body: "Help after a car or truck crash someone else caused." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal investigations and cases in the Tampa Division." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and other financial allegations, state or federal." },
        { href: BUSINESS, title: "Business litigation", body: "Business disputes, including partnership and contract fights." },
      ],
    },
    faq: [
      {
        question: "Tampa Police arrested me near Town 'n' Country. Is that a different court?",
        answer: "No. Sheriff's and Tampa Police cases both come into the same Hillsborough County courts. For a misdemeanor, your last name sets the division in Tampa.",
      },
      {
        question: "What if the arrest was at the airport?",
        answer: "Airport Police have their own department, so ask them for the report. The location is on the Tampa side of the East Division line, so a state case should run through the Tampa divisions.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: HOVER_ANSWER,
      },
      {
        question: "Will my case ever go to Plant City?",
        answer: "Probably not. Plant City hears county cases from the East Division, which is well east of here. A judge can transfer a case for good cause, mainly for the convenience of the people involved.",
      },
    ],
    office: {
      heading: "We are in Brandon.",
      body: [
        "Our only office is at 745 West Lumsden Road in Brandon. There is no office in Town 'n' Country.",
        "Phones are staffed 24 hours a day, every day. Please call before you make the drive.",
      ],
    },
    cta: {
      heading: "Talk through a Town 'n' Country case.",
      body: "A call is confidential at any hour. Keep anything you have close by, such as a booking number, citation, or crash report number.",
    },
  },
];
