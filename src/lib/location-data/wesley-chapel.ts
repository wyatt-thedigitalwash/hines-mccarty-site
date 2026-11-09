import type { LocationBond, LocationPage, LocationDeadlines } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";

/**
 * Wesley Chapel, in Pasco County and the Sixth Judicial Circuit. None of the
 * Hillsborough constants apply here, apart from the three hub hrefs.
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
    href: "/locations/wesley-chapel#bond",
    label: "Full Pasco County bond table",
  },
  clocks: {
    body: "You see a judge within 24 hours of arrest. The State then has 30 days to file a formal charge if you are held, or 60 days if you are out. The speedy trial clock is 90 days for a misdemeanor and 175 for a felony, counted from the formal charge.",
    href: "/locations/wesley-chapel#timeline",
    label: "Full Pasco County timeline",
  },
  source: `${PASCO_BOND.source}; Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)`,
};

export const wesleyChapelPages: LocationPage[] = [
  {
    slug: "wesley-chapel",
    kind: "community",
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
          body: "Do not use a Tampa bond figure. A third degree felony with no force has a $5,000 schedule amount here, and one with force has no bond until a judge rules. The table below has the rest.",
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
    bond: PASCO_BOND,
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
    timeline: PASCO_TIMELINE,
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
];
