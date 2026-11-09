import type { LocationBond, LocationPage, LocationDeadlines } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";
import { FLHSMV_CRASH_SOURCE } from "./sixth-circuit.ts";

/**
 * Pasco County: the county page, which holds the county's one bond table and
 * timeline, and Wesley Chapel and New Port Richey under it (D159). Pasco is in the
 * Sixth Judicial Circuit, and none of the Hillsborough constants apply here, apart
 * from the three hub hrefs.
 *
 * THE BOND SCHEDULE EXPIRES. Sixth Circuit Administrative Order 2026-035 PA-CIR
 * took effect October 1, 2026, rescinded 2026-025, and runs through December 31,
 * 2026. The circuit changed this schedule more than once in 2026, and its amounts
 * are not Hillsborough's. Check for the 2027 order and update these when it issues.
 */
export const PASCO_BOND: LocationBond = {
  heading: "Pasco County's bond schedule, and who has no bond.",
  intro:
    "Pasco County has its own schedule, in effect since 1 October 2026 and running through 31 December 2026. Its amounts differ from Hillsborough's. It is written for law enforcement and does not bind a judge, who can set a different bond. Each charge needs its own bond.",
  rows: [
    { crime: "Third degree felony, no force or threat against a person", amount: "$5,000" },
    { crime: "Third degree felony, with force or a threat of force", amount: "No bond, see a judge" },
    { crime: "Felony driving or boating offense, or felony failure to register", amount: "No bond, see a judge" },
    { crime: "First degree misdemeanor, with force or a threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, no force or threat", amount: "$500" },
    { crime: "Second degree misdemeanor, with force or a threat", amount: "$250" },
    { crime: "Second degree misdemeanor, no force or threat, not DUI", amount: "$150" },
    { crime: "DUI or boating under the influence, with no damage or injury to anyone else and no earlier DUI or BUI", amount: "$500" },
    { crime: "DUI or boating under the influence, with damage or injury, or an earlier DUI or BUI conviction, diversion dismissal, or reduced charge", amount: "No bond, see a judge" },
  ],
  waitHeading: "Who stays in custody until first appearance",
  waitIntro: "No schedule amount applies, and you wait for a judge, if any of these is true:",
  wait: [
    "You are charged with a first or second degree felony, or a capital or life felony.",
    "You were on pretrial release, probation, or community control when arrested for any felony.",
    "You were on supervised pretrial release, or a bond with supervised conditions, when arrested for a new felony or misdemeanor.",
    "The charge is domestic violence, stalking, robbery, burglary, carjacking, felony battery, or resisting an officer with violence.",
    "The charge is sexual battery, child abuse, kidnapping, false imprisonment, or trafficking in a controlled substance.",
    "You are a convicted felon charged with having a gun or ammunition.",
    "You were arrested for violating a protective injunction, or for missing court while on bail.",
    "You were arrested three or more times in the last 6 months.",
    "You are designated a sexual offender or sexual predator.",
  ],
  waitNote:
    "The order lists more than these. If jail or pretrial staff cannot confirm your status, you also go to first appearance. Call us if you are not sure, before you pay a bail bond company.",
  source: "6th Circuit Administrative Order 2026-035 PA-CIR, effective October 1 through December 31, 2026",
};

export const PASCO_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "What comes after the advisory hearing.",
  intro: "State court rules set these dates, and they are the same in Pasco County as anywhere else in Florida.",
  steps: [
    { when: "Within 24 hours of arrest", what: "If you have not posted bond, you appear before a judge by video from the detention center. The judge deals with bond and tells you the no-contact rule." },
    { when: "30 days in custody", what: "While you are held, the State has 30 days to file a formal charge. If it misses that date, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. Day 40 is the outer limit without a formal charge." },
    { when: "60 days if you are out", what: "Once you are on release, the State has 60 days to file. A judge can add up to 30 more days for good cause." },
    { when: "90 days, or 175 days", what: "This is speedy trial: 90 days for a misdemeanor, 175 for a felony, counted from the formal charge. A missed date does not end the case on its own." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o); Pasco Sheriff's Office, Victims' Rights Brochure",
};

/** The key numbers for pages without the full table (D155). */
export const PASCO_DEADLINES: LocationDeadlines = {
  bond: {
    body: "Through 31 December 2026, a third degree felony with no force is $5,000, and one with force or a threat has no bond until a judge rules. A first degree misdemeanor is $500 or $1,000. Many charges have to wait for a judge, and each charge needs its own bond.",
    href: "/locations/pasco-county#bond",
    label: "Full Pasco County bond table",
  },
  clocks: {
    body: "You see a judge within 24 hours of arrest. The State then has 30 days to file a formal charge if you are held, or 60 days if you are out. The speedy trial clock is 90 days for a misdemeanor and 175 for a felony, counted from the formal charge.",
    href: "/locations/pasco-county#timeline",
    label: "Full Pasco County timeline",
  },
  source: `${PASCO_BOND.source}; Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)`,
};

const MARKET = "pasco-county";
const STATE = "/criminal-defense/state";

const NPRPD_SOURCE = "City of New Port Richey, Police Department, Records and Communication Center";
const PASCO_ASSIGNMENT_SOURCE = "6th Circuit Administrative Order 2023-005 PA-CIR";
const PASCO_CIRCUIT_SOURCE = "6th Circuit Administrative Order 2026-027 PA-CIR";
const PASCO_COUNTY_SOURCE = "6th Circuit Administrative Order 2026-037 PA-CTY";
const PASCO_CIVIL_SOURCE = "6th Circuit Administrative Order PA-CIR-97-20";
const WEST_PASCO_SOURCE = "Pasco County Clerk, Office Locations; Sixth Judicial Circuit, West Pasco Judicial Center";
const PASCO_CORRECTIONS_SOURCE = "Pasco County, Corrections and Inmate Services";
const PASCO_SHERIFF_BROCHURE = "Pasco Sheriff's Office, Victims' Rights Brochure";
const PASCO_TRANSITION_SOURCE = "Pasco Sheriff's Office, Detention Center Management Transition";

const carLinks = [
  { href: "/personal-injury/car-accidents", label: "Car accident claims" },
  { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
];

export const pascoPages: LocationPage[] = [
  {
    slug: MARKET,
    kind: "market",
    place: "Pasco County",
    county: "Pasco County",
    published: true,
    indexable: false,
    search: {
      primary: "criminal defense attorney pasco county",
      source: "D159: DataForSEO, Florida, about 140 searches a month, 2026-11-09",
    },
    metaTitle: "Pasco County Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Pasco County splits criminal cases at US 41 between Dade City and New Port Richey. See the jail, 2026 bond amounts, and what to do first.",
    h1: "Pasco County splits its criminal cases at US 41.",
    lead: [
      "Pasco County shares a judicial circuit with Pinellas County, but it has its own jail, clerk, bond schedule, and two courthouses of its own. Where the offense happened decides which courthouse hears a criminal case.",
      "This page follows a Pasco case from the arrest to the courtroom. Our office is in Brandon, in Hillsborough County, and we take Pasco County cases from there.",
    ],
    firstSteps: {
      heading: "The first day after a Pasco County arrest.",
      intro: "A judge will rule on release within about a day. These four things come first.",
      items: [
        {
          title: "Check the county's custody list",
          body: "The county runs this jail, not the Sheriff. Pasco County government took over the detention center at 20101 Central Boulevard, Land O' Lakes, on 1 October 2022. Search its In Custody list, or call booking at 813-235-6070.",
          source: `${PASCO_CORRECTIONS_SOURCE}; ${PASCO_TRANSITION_SOURCE}; ${PASCO_SHERIFF_BROCHURE}`,
          link: { href: "https://jailinfo.pascocorrections.net/jmc/#/inCustody", label: "In Custody list (Pasco County)", external: true },
        },
        {
          title: "Read the bond table before you pay",
          body: "Many charges have no amount at all until a judge rules, so money cannot help yet. If there is an amount, use a licensed bond agent or post cash at the detention facility. The county warns about callers who ask for money to free someone, and says its staff will never do that.",
          source: PASCO_CORRECTIONS_SOURCE,
          link: { href: "#bond", label: "Pasco bond table" },
        },
        {
          title: "Find the agency on the paperwork",
          body: "Outside city limits, Pasco Sheriff's deputies usually respond. Some cities, such as New Port Richey and Port Richey, have their own police. The name on the paperwork tells you whose report to ask about.",
          source: "Pasco Sheriff's Office, Contact; City of New Port Richey, Police Department; Port Richey Police Department, Communications",
        },
        {
          title: "Get ready for the advisory hearing",
          body: "That is Pasco's name for first appearance. If no bond has been posted, it happens by video from the detention center within 24 hours of arrest. The Sheriff says it usually runs at 1 pm on weekdays and 8 am on weekends, but times can change.",
          source: `Fla. R. Crim. P. 3.130(a); ${PASCO_SHERIFF_BROCHURE}`,
        },
      ],
    },
    bond: PASCO_BOND,
    facts: {
      heading: "East Pasco or West Pasco: where your case goes.",
      intro: "For a criminal case, the location of the offense decides this. Your home address does not.",
      items: [
        {
          title: "The US 41 line",
          body: "The Clerk makes a case East Pasco if the offense happened east of US 41, and West Pasco if it happened west of it. Officers have to mark East or West on the complaint affidavit or traffic citation, so look for that mark. A judge can reassign a case when needed.",
          source: PASCO_ASSIGNMENT_SOURCE,
        },
        {
          title: "East Pasco, in Dade City",
          body: "Cases go to the Robert D. Sumner Judicial Center, 38053 Live Oak Avenue. Sections 1 and 2 hear felonies, and Section 30 is the adult drug court and veterans court. Sections 10 and 14 hear misdemeanors, DUI, and criminal traffic.",
          source: `${PASCO_ASSIGNMENT_SOURCE}; ${PASCO_CIRCUIT_SOURCE}; ${PASCO_COUNTY_SOURCE}; Pasco County Clerk, Office Locations`,
        },
        {
          title: "West Pasco, in New Port Richey",
          body: "Cases go to the West Pasco Judicial Center, 7530 Little Road. Sections 3 and 4 split the felonies, and Section 31 is the adult drug court and veterans court. Sections 15, 16, and 17 hear misdemeanors, DUI, and criminal traffic.",
          source: `${PASCO_ASSIGNMENT_SOURCE}; ${PASCO_CIRCUIT_SOURCE}; ${PASCO_COUNTY_SOURCE}; ${WEST_PASCO_SOURCE}`,
        },
        {
          title: "Finding your section",
          body: "Section numbers change with new court orders, so go by your own case. The Pasco Clerk has a Case Section/Division Lookup next to its Online Court Records Search.",
          source: "Pasco County Clerk, Search Court Records",
        },
        {
          title: "Offenses over the county line",
          body: "Pasco borders Hillsborough to the south and Pinellas to the southwest. An offense on the other side of either line is that county's case, with a different jail, bond schedule, and courthouse.",
        },
        {
          title: "Federal charges",
          body: "Federal cases are separate from all of this. Pasco County is in the Tampa Division of the Middle District of Florida, so they are heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: "M.D. Fla. Local Rule 1.04(a)",
        },
      ],
    },
    timeline: PASCO_TIMELINE,
    injury: {
      heading: "If you were hurt in a Pasco County crash.",
      intro: "Florida's deadlines apply here as they do anywhere. The rule for which courthouse hears the suit is Pasco's own.",
      items: [
        {
          title: "Civil cases use a different line",
          body: "A circuit civil case does not follow US 41. A 1997 order uses survey lines instead, and looks at where the defendant lives, where the claim arose, or where disputed property sits. That makes it East Pasco or West Pasco. If both could fit, the order has a rule for choosing.",
          source: PASCO_CIVIL_SOURCE,
        },
        {
          title: "The amount decides the court",
          body: "A claim over $50,000 is a circuit court case. A smaller claim stays in county court.",
          source: "F.S. 34.01(1)(c)",
        },
        {
          title: "Getting the crash report",
          body: "Ask which agency worked the crash. Florida Highway Patrol's Troop C covers Pasco County. The state's portal sells reports for $10 plus a $2 order fee, and a report can take up to 10 days to appear.",
          source: `${FLHSMV_CRASH_SOURCE}; FLHSMV, Troop C`,
        },
        {
          title: "Three Florida rules",
          body: "Get your first care within 14 days to use your own policy's medical benefits. A negligence suit from a crash after 24 March 2023 must be filed within two years. If you are more than 50 percent at fault for your own harm, you recover nothing from the other driver.",
          source: "F.S. 627.736(1)(a); F.S. 95.11; F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More on what we handle.",
      intro:
        "These pages explain Florida law and the kinds of cases we take. The state pages are written around Hillsborough County, so use this page for Pasco's courts.",
      items: [
        { href: STATE, title: "State criminal defense", body: "Florida charges, penalties, and how a state case runs." },
        { href: "/personal-injury", title: "Personal injury", body: "Claims after a crash that someone else caused." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Charges brought in the Middle District of Florida." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial cases, often before any charge." },
        { href: BUSINESS, title: "Business litigation", body: "Disputes over contracts, ownership, and trade secrets." },
      ],
    },
    communitiesIntro:
      "Two Pasco communities have their own pages, one on each side of US 41. Wesley Chapel is on the East Pasco side, and New Port Richey is on the West Pasco side.",
    faq: [
      {
        question: "Is Pasco's bond the same as Hillsborough's or Pinellas's?",
        answer: "No. Each county has its own schedule through 2026. A third degree felony with no force is $5,000 in Pasco, and one with force has no bond until a judge rules. Hillsborough lists $2,500 and $5,000 for those same charges, so do not rely on another county's chart.",
      },
      {
        question: "I live in Pasco but was arrested in another county. Which rules apply?",
        answer: "Where the offense happened usually controls. An offense in Hillsborough or Pinellas goes through that county's jail, bond schedule, and courts, even if you live in Pasco.",
      },
      {
        question: "How can I see a Pasco court file online?",
        answer: "Start with the Pasco County Clerk's Online Court Records Search, then use its section lookup. Sealed, expunged, and confidential cases do not appear. A search on another county's site will not show a Pasco case.",
      },
      {
        question: "Does the firm have an office in Pasco County?",
        answer: "No. Our only office is in Brandon, in Hillsborough County. We take Pasco County cases from there, and you can call at any hour.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Pasco County.",
      body: [
        "The firm has one office, at 745 W Lumsden Rd in Brandon. There is no office in Pasco County.",
        "We answer 813-738-8650 24 hours a day, 7 days a week. If you would like to meet in Brandon, call first to set a time.",
      ],
    },
    cta: {
      heading: "Talk to an attorney about a Pasco County case.",
      body: "Calls are confidential and answered 24/7. If you were arrested, contacted by investigators, or hurt in a crash in Pasco County, call before you explain anything to anyone else.",
    },
  },
  {
    slug: "wesley-chapel",
    kind: "community",
    parent: MARKET,
    place: "Wesley Chapel",
    county: "Pasco County",
    published: true,
    indexable: false,
    metaTitle: "Wesley Chapel Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Wesley Chapel? Pasco County jail in Land O' Lakes, Dade City courthouse, the US 41 rule, Pasco's own bond amounts, and crash deadlines.",
    h1: "Wesley Chapel arrests and crashes go through Pasco County.",
    lead: [
      "Wesley Chapel is in Pasco County, not Hillsborough. It has a different circuit court, jail, clerk and bond schedule than Tampa, so advice about Tampa's courts may not fit your case.",
      "We take cases from Wesley Chapel and across Pasco County, and our only office is in Brandon. The steps below follow Pasco's own court orders.",
    ],
    firstSteps: {
      heading: "If the arrest happened in Wesley Chapel.",
      intro: "The advisory hearing comes within 24 hours, and it is often the first real chance at release. Work through these in order.",
      items: [
        {
          title: "Find the person at the Pasco jail",
          body: "The Census Bureau lists Wesley Chapel as a census-designated place, not a city, so arrests here are usually made by Pasco Sheriff's deputies. The jail itself is not the Sheriff's. Pasco County government has run the detention center at 20101 Central Boulevard, Land O' Lakes, since 1 October 2022. Use the county's In Custody list, or call booking at 813-235-6070.",
          source: "Pasco County, Corrections; Pasco Sheriff's Office, Detention Center Management Transition and Victims' Rights Brochure; U.S. Census Bureau, TIGERweb: Wesley Chapel CDP",
          link: { href: "https://jailinfo.pascocorrections.net/jmc/#/inCustody", label: "In Custody list (Pasco County)", external: true },
        },
        {
          title: "Check the Pasco bond amounts",
          body: "Do not use a Tampa bond figure. A third degree felony with no force has a $5,000 schedule amount here, and one with force has no bond until a judge rules. The county bond table linked below has the rest.",
          link: { href: "#bond", label: "Pasco bond schedule" },
        },
        {
          title: "Watch for the money scam",
          body: "Pasco County warns about callers asking for money to free someone. Corrections and the Sheriff will never ask for it. To bond out, use a licensed bond agent or post cash at the detention facility, and do not send gift cards or card numbers. Report it at 727-847-8102, option 7.",
          source: "Pasco County, Inmate Services",
        },
        {
          title: "Stay quiet about the facts",
          body: "You do not have to explain anything to deputies or detectives. If you are family, keep the case out of jail messages and video visits, which the county says can be reviewed, monitored, and recorded. Let a lawyer hear the details first.",
          source: "Pasco County, Inmate Services",
        },
        {
          title: "Plan around the advisory hearing",
          body: "Pasco calls first appearance an advisory hearing. If bond has not been posted, it comes within 24 hours of arrest, by video from the detention center. The Sheriff says these usually run at 1 pm on weekdays and 8 am on weekends, though times can change.",
          source: "Fla. R. Crim. P. 3.130(a); Pasco Sheriff's Office, Victims' Rights Brochure",
        },
      ],
    },
    deadlines: PASCO_DEADLINES,
    facts: {
      heading: "Why a Wesley Chapel case should go to Dade City.",
      intro:
        "Pasco County has two courthouses, and one highway divides the criminal cases between them. Wesley Chapel falls on the Dade City side.",
      items: [
        {
          title: "The US 41 rule",
          body: "The Clerk makes a case East Pasco if the offense happened east of US 41, and West Pasco if it happened west. Wesley Chapel lies east of US 41, so a case from here should be East Pasco. The location of the offense decides this, not your home address.",
          source: "6th Circuit Administrative Order 2023-005 PA-CIR",
        },
        {
          title: "Where East Pasco cases are heard",
          body: "East Pasco cases go to the Robert D. Sumner Judicial Center, 38053 Live Oak Avenue, Dade City. West Pasco cases go to the West Pasco Judicial Center in New Port Richey. A judge can reassign a case when needed.",
          source: "6th Circuit Administrative Order 2023-005 PA-CIR; Pasco County Clerk, Office Locations",
        },
        {
          title: "Check your paperwork",
          body: "The officer has to mark East Pasco or West Pasco on the complaint affidavit, or on a traffic citation. Look for that mark. If it says West Pasco for an offense in Wesley Chapel, ask a lawyer about it right away.",
          source: "6th Circuit Administrative Order 2023-005 PA-CIR",
        },
        {
          title: "Felonies",
          body: "A felony is a circuit court case. In East Pasco, circuit Sections 1 and 2 hear criminal cases at Dade City. Section 30 is the adult drug court and veterans court.",
          source: "6th Circuit Administrative Orders 2023-005 PA-CIR and 2026-027 PA-CIR; F.S. 26.012(2)(d)",
        },
        {
          title: "Misdemeanors, DUI, and criminal traffic",
          body: "These are county court cases. In East Pasco, Sections 10 and 14 hear them. The Clerk has a Case Section/Division Lookup tool, so you can find which section has your case.",
          source: "6th Circuit Administrative Order 2026-037 PA-CTY; Pasco County Clerk, Search Court Records",
        },
        {
          title: "South of the county line",
          body: "Wesley Chapel ends at the Hillsborough County line. An offense south of that line is a Hillsborough County case, with a different jail, bond schedule, and courthouse. Check where the arrest actually took place.",
        },
        {
          title: "Federal charges",
          body: "Pasco County is in the Tampa Division of the Middle District of Florida. A federal case from Wesley Chapel is heard in Tampa, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
          source: "M.D. Fla. Local Rule 1.04(a)",
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Pasco County.",
      intro:
        "Our charge pages are written around the Hillsborough County courts. Each one explains the Florida law and penalties, which are the same here. Your court details are on this page.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "The bond here turns on the facts and your history: $500 with no damage, injury, or earlier DUI, and no bond otherwise. You also have 10 days from the notice of suspension to act on your license.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "No schedule amount applies. You stay in custody until the advisory hearing, and the judge will tell you about the no-contact rule.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "Value sets the degree. A third degree felony with no force has a $5,000 schedule amount in Pasco. A higher degree waits for a judge.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "Which drug and how much set the charge and the bond. Trafficking has no schedule amount at all.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "A first degree misdemeanor with force has a $1,000 schedule amount, unless it is domestic violence. Felony battery, or battery on someone 65 or older, waits for a judge.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "A person with a felony record, or under certain injunctions, who is charged with a gun or ammunition has no bond before first appearance.",
        },
      ],
    },
    injury: {
      heading: "Hurt in a Wesley Chapel crash.",
      intro: "I-75, State Road 54 and Bruce B. Downs Boulevard all run through Wesley Chapel. The Florida deadlines are the same here, but the civil courthouse rule is Pasco's own.",
      items: [
        {
          title: "Find the report",
          body: "Ask if the Pasco Sheriff or Florida Highway Patrol worked the crash. Troop C covers Pasco County. The state's crash portal sells reports for $10, plus a $2 fee per order, and a report can take up to 10 days to appear.",
          source: "FLHSMV, Traffic Crash Reports and Troop C",
        },
        {
          title: "Be seen within 14 days",
          body: "Your own insurance pays first medical bills only if your first care is within 14 days of the crash. Do not wait to see how you feel.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to file",
          body: "A negligence claim from a crash after 24 March 2023 has a two-year limit.",
          source: "F.S. 95.11",
        },
        {
          title: "When fault ends a claim",
          body: "If you are more than 50 percent at fault for your own harm, you recover nothing from the other driver. Be careful how you describe the crash.",
          source: "F.S. 768.81",
        },
        {
          title: "Which court for a lawsuit",
          body: "A claim over $50,000 is a circuit court case. Civil cases use survey lines, not US 41. A crash in Wesley Chapel falls on the East Pasco side, so the suit can go to Dade City. If a defendant lives in West Pasco, either courthouse could fit, and the order has a rule for choosing.",
          source: "F.S. 34.01(1)(c); 6th Circuit Administrative Order PA-CIR-97-20",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "Other work we do for people in Pasco County.",
      intro:
        "The state criminal and injury pages are written around Hillsborough County. Use them for Florida law, and use this page for Pasco's courts.",
      items: [
        { href: `/locations/${MARKET}`, title: "Pasco County", body: "The full bond table, the deadlines, and how the two courthouses split." },
        { href: "/criminal-defense/state", title: "State criminal defense", body: "How Florida charges work, written around the Hillsborough courts." },
        { href: "/personal-injury", title: "Personal injury", body: "Claims after a car or truck crash someone else caused." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal cases from Pasco County, heard in the Tampa Division." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial charges, state or federal." },
        { href: BUSINESS, title: "Business litigation", body: "Contract, ownership, non-compete, and trade secret disputes." },
      ],
    },
    faq: [
      {
        question: "Will my Wesley Chapel case be in New Port Richey?",
        answer: "It should not be, if the offense happened in Wesley Chapel. New Port Richey handles West Pasco cases. Wesley Chapel lies east of US 41, so it should be an East Pasco case at the Dade City courthouse. A judge can reassign a case when needed.",
      },
      {
        question: "How do I look up a Pasco case?",
        answer: "The Pasco County Clerk has an Online Court Records Search on its website, plus a lookup for the section handling a case. Sealed and expunged cases, and those confidential by law, are not open for viewing. Use Pasco's clerk for this, not Hillsborough's.",
      },
      {
        question: "Can I visit someone at the Pasco jail?",
        answer: "Visits are by video. Video visits are booked through ICSolutions at least 17 hours ahead, and on-site visits happen at the county's building at 10326 Asbel Road, Land O' Lakes. Rules and rates can change, so check with the county first.",
      },
      {
        question: "Does one bond cover every charge?",
        answer: "No. Pasco's order requires a separate bond for each crime of arrest, so add up the amount for each charge.",
      },
      {
        question: "Is the firm in Wesley Chapel?",
        answer: "No. Our only office is in Brandon, in Hillsborough County. We have none in Wesley Chapel or anywhere else in Pasco County.",
      },
    ],
    office: {
      heading: "Our office is in Brandon. We have none in Pasco County.",
      body: [
        "Our only office is at 745 West Lumsden Road in Brandon. There is no office in Wesley Chapel.",
        "We answer the phone 24 hours a day, 7 days a week, so a call is the place to start.",
      ],
    },
    cta: {
      heading: "Call about a Pasco County case.",
      body: "The call is confidential and answered at any hour. If you were arrested, contacted by investigators, or hurt in a Wesley Chapel crash, talk to an attorney before you talk to anyone else about it.",
    },
  },
  {
    slug: "new-port-richey",
    kind: "community",
    parent: MARKET,
    place: "New Port Richey",
    county: "Pasco County",
    published: true,
    indexable: false,
    metaTitle: "New Port Richey Defense, Pasco Co. | Hines McCarty Pavlidis",
    metaDescription:
      "New Port Richey is in Pasco County, not Pinellas. See its police, the Land O' Lakes jail, Pasco bond amounts, and the West Pasco court on Little Road.",
    h1: "New Port Richey is in Pasco County, with a Pasco court.",
    lead: [
      "New Port Richey is in Pasco County, about three miles north of the Pinellas County line, along US 19. Its court system is not Clearwater's. It has a different jail, a different clerk, and a different courthouse.",
      "If someone told you to go to the Justice Center in Pinellas, check again. Everything below follows Pasco County's own orders. Our office is in Brandon, and we take Pasco County cases from there.",
    ],
    firstSteps: {
      heading: "After an arrest in New Port Richey.",
      intro: "The advisory hearing comes within 24 hours. Here is what a family can do in that time.",
      items: [
        {
          title: "Look on Pasco's list, not Pinellas's",
          body: "New Port Richey police work inside the city limits. Adults are usually held at the Pasco County detention center, 20101 Central Boulevard, Land O' Lakes, about 15 miles east. County government has run it since 1 October 2022. Use the county's In Custody list, or call booking at 813-235-6070.",
          source: `${PASCO_CORRECTIONS_SOURCE}; ${PASCO_TRANSITION_SOURCE}; ${PASCO_SHERIFF_BROCHURE}`,
          link: { href: "https://jailinfo.pascocorrections.net/jmc/#/inCustody", label: "In Custody list (Pasco County)", external: true },
        },
        {
          title: "Use Pasco's bond order",
          body: "This county has its own order for bond. Do not rely on a chart from Pinellas or Hillsborough. The county bond table linked below has the amounts, and many charges have none until the hearing.",
          link: { href: "#bond", label: "Pasco bond schedule" },
        },
        {
          title: "Ignore callers who want money",
          body: "Pasco County says Corrections and the Sheriff's Office will never ask you to pay to get someone released. To bond someone out, use a licensed bond agent or post cash at the detention facility. You can report a scam at 727-847-8102, option 7.",
          source: PASCO_CORRECTIONS_SOURCE,
        },
        {
          title: "Know the hearing is by video",
          body: "If bond has not been posted, the advisory hearing is by video from the detention center. The Sheriff's brochure says hearings usually run at 1 p.m. on weekdays and 8 a.m. on weekends. Times can change, so ask booking which courthouse is hosting it if you plan to attend.",
          source: `Fla. R. Crim. P. 3.130(a); ${PASCO_SHERIFF_BROCHURE}`,
        },
        {
          title: "Keep it off jail messages",
          body: "Video visits and messages can be monitored or reviewed. Do not talk about what happened. Save that for a lawyer, and call us before the hearing.",
          source: PASCO_CORRECTIONS_SOURCE,
        },
      ],
    },
    deadlines: PASCO_DEADLINES,
    facts: {
      heading: "Why a New Port Richey case should stay on the West Pasco side.",
      intro: "Pasco splits criminal cases at one highway. New Port Richey lies far to the west of it, so a case from here should stay near home.",
      items: [
        {
          title: "New Port Richey police",
          body: "The department is at 6739 Adams Street and is open 24 hours a day. Its non-emergency line is 727-841-4550. Its dispatch center answers calls inside the city limits. Port Richey, just to the north, is a separate city with a separate police department.",
          source: `${NPRPD_SOURCE}; Port Richey Police Department, Communications`,
        },
        {
          title: "Outside the city",
          body: "Outside the city limits, Pasco Sheriff's deputies usually respond. Their non-emergency line is 727-847-8102, option 7. A New Port Richey mailing address does not prove you are in the city, so read the agency named on your paperwork.",
          source: "Pasco Sheriff's Office, Contact",
        },
        {
          title: "The US 41 rule",
          body: "If an offense happened east of US 41, the Clerk makes it an East Pasco case in Dade City. New Port Richey is more than 10 miles west of that road, so a case from here should be West Pasco. Officers mark East or West on the affidavit or ticket, so look for it.",
          source: PASCO_ASSIGNMENT_SOURCE,
        },
        {
          title: "The courthouse",
          body: "West Pasco cases are heard at the West Pasco Judicial Center, 7530 Little Road, New Port Richey. A judge can reassign a case when needed. The orders send these cases here, not to the Pinellas County Justice Center.",
          source: `${PASCO_ASSIGNMENT_SOURCE}; ${WEST_PASCO_SOURCE}`,
        },
        {
          title: "Felony sections",
          body: "Sections 3 and 4 split West Pasco felonies evenly. Section 31 is the adult drug court and veterans court. These numbers change with new orders, so look yours up.",
          source: PASCO_CIRCUIT_SOURCE,
        },
        {
          title: "Misdemeanors, DUI, and traffic",
          body: "Sections 15, 16, and 17 hear West Pasco misdemeanors, DUI, and criminal traffic. Civil traffic goes to Sections 24, 25, and 27. The Clerk has a Case Section/Division Lookup, so you can find your section.",
          source: `${PASCO_COUNTY_SOURCE}; Pasco County Clerk, Search Court Records`,
        },
        {
          title: "Getting the police file",
          body: "Since 1 June 2026, the department's Records Section no longer fills discovery requests from defendants or their lawyers. Those go to the State Attorney's Office. A request sent to Records is treated as a public records request, and it may have fees and redactions.",
          source: NPRPD_SOURCE,
        },
        {
          title: "South of the county line",
          body: "An offense south of the line is a Pinellas County case, with a Pinellas jail and court. Tarpon Springs and Palm Harbor are on that side. Check where the arrest actually happened.",
        },
        {
          title: "Federal cases",
          body: "Pasco County is in the Tampa Division of the Middle District of Florida. A federal case from New Port Richey is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: "M.D. Fla. Local Rule 1.04(a)",
        },
      ],
    },
    charges: {
      heading: "Charges we defend in New Port Richey.",
      intro: "These pages explain the Florida law and penalties. They are written around Hillsborough County courts, so use this page for Pasco's courts.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "Sections 15, 16, and 17 hear it. Pasco's schedule says $500 with no damage or DUI history, and no bond otherwise. You have 10 days from the suspension notice to act on your license.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "No schedule amount. You stay in custody until the advisory hearing, and any release comes with a no-contact rule.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "If you end up asking about treatment, Section 31 is West Pasco's drug court. Trafficking has no schedule amount.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "The amount sets the degree. In Pasco, the lowest degree with no force is $5,000, and anything higher waits for the judge.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A first degree misdemeanor with force has a $1,000 amount, unless it is domestic violence. Felony battery has none.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a New Port Richey crash.",
      intro: "US 19 and Main Street both run through the city. The Florida deadlines are the same as anywhere, but the civil court rule is Pasco's own.",
      items: [
        {
          title: "Getting the report",
          body: "Ask which agency came. City police records can be requested through the JustFOIA portal or at 6739 Adams Street, Monday to Friday, 8 a.m. to 5 p.m. The city's records page does not mention crash reports, so ask the clerk at 727-232-8920. The state's portal sells them for $10 plus a $2 order fee.",
          source: `${NPRPD_SOURCE}; ${FLHSMV_CRASH_SOURCE}`,
        },
        {
          title: "Care within 14 days",
          body: "Your own insurance pays first medical bills only if your first care is within 14 days of the crash.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to sue",
          body: "A negligence claim from a crash after 24 March 2023 has a two-year limit.",
          source: "F.S. 95.11",
        },
        {
          title: "Over half at fault",
          body: "If you are more than 50 percent at fault for your own harm, you recover nothing from the other driver.",
          source: "F.S. 768.81",
        },
        {
          title: "Which courthouse",
          body: "Civil cases use survey lines, not US 41. The city is on the West Pasco side, so a suit over a crash here can be heard at Little Road. Over $50,000 goes to Sections G or H. County civil is Sections O and U, and small claims is S and W.",
          source: `${PASCO_CIVIL_SOURCE}; ${PASCO_CIRCUIT_SOURCE}; ${PASCO_COUNTY_SOURCE}; F.S. 34.01(1)(c)`,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "Other pages, and how far they apply.",
      intro: "Our charge and injury pages explain Florida law around Hillsborough's courts. The Pasco County page has the full bond table and how the two courthouses split.",
      items: [
        { href: `/locations/${MARKET}`, title: "Pasco County", body: "The county's bond table, its deadlines, and both courthouses." },
        { href: STATE, title: "State criminal defense", body: "Florida charges and penalties, written around Hillsborough." },
        { href: "/personal-injury", title: "Personal injury", body: "Car and truck claims under Florida law." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal cases from Pasco County, heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial charges, state or federal." },
        { href: BUSINESS, title: "Business litigation", body: "Contract, ownership, and trade secret disputes." },
      ],
    },
    faq: [
      {
        question: "Could a New Port Richey crash ever end up in Clearwater?",
        answer: "Only if the suit is properly filed in Pinellas County, which depends on the facts. A Pinellas order lists ZIP codes 34652 through 34655 with Clearwater's civil sections, which matters if you have no lawyer. Our Brandon ZIP code is not listed, so that order can send our suits to either city.",
      },
      {
        question: "How do I look up a Pasco case?",
        answer: "Use the Pasco County Clerk's Online Court Records Search, plus its section lookup. Sealed, expunged, and confidential cases are not open to view. Pinellas County's search will not show a Pasco case.",
      },
      {
        question: "I live in New Port Richey but was arrested in Clearwater. Which page applies?",
        answer: "Where the offense happened usually controls, so that is a Pinellas County case. Use the Clearwater criminal defense page, not this one.",
      },
      {
        question: "Is the firm in New Port Richey?",
        answer: "No. Our only office is in Brandon, in Hillsborough County. There is no office in New Port Richey or anywhere else in Pasco County.",
      },
    ],
    office: {
      heading: "We are in Brandon, not New Port Richey.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon. We have no office in New Port Richey or elsewhere in Pasco County.",
        "We answer 813-738-8650 at any hour, so a call is the place to start.",
      ],
    },
    cta: {
      heading: "Call about a West Pasco case.",
      body: "If you were arrested, heard from an investigator, or were hurt in New Port Richey, talk to an attorney first. The call is confidential and answered 24/7.",
    },
  },
];
