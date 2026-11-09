import type { LocationBond, LocationDivisionTable, LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";

/**
 * Sarasota: the market page and its two hubs (D154). Facts come from the Twelfth
 * Circuit's administrative orders, all listed as in effect on the circuit's index
 * on 2026-11-09 (https://www.jud12.flcourts.org/Documents/Administrative-Orders).
 *
 * What is different here: AO 2026-12.2 splits the county at Blackburn Point Road.
 * Felonies stay in Sarasota whatever side they come from; misdemeanors and civil
 * cases from the south go to Venice. AO 2024-23.3 assigns felonies by last name.
 *
 * THE BOND SCHEDULE EXPIRES. AO 2025-22.3 has no end date of its own, but it rests
 * on AOSC25-69, whose schedule runs January 1 through December 31, 2026, and this
 * circuit has amended its order each time (2023-21.3, 2024-06.3, 2024-06a.3,
 * 2025-22.3). Check for the 2027 orders and update these amounts when they issue.
 *
 * JUDGES ARE NOT NAMED. AO 2026-14.4 reassigns them from January 4, 2027.
 */

export const SARASOTA_JAIL_SOURCE = "Sarasota County Sheriff's Office, Corrections";
export const SARASOTA_SPLIT_SOURCE = "12th Circuit Administrative Order 2026-12.2";

export const SARASOTA_BOND: LocationBond = {
  heading: "Bond in Sarasota County: the amounts, and who cannot use them.",
  intro:
    "Police and jail staff use this schedule when they release someone before first appearance. The first appearance judge is not bound by it and can set something else. Every charge needs its own bond. The statewide schedule behind these amounts runs through 31 December 2026.",
  rows: [
    { crime: "Third degree felony, with any force or threat of force against a person", amount: "$5,000" },
    { crime: "Third degree felony, with no force or threat", amount: "$2,500" },
    { crime: "First degree misdemeanor, with any force or threat", amount: "$1,000" },
    { crime: "First degree misdemeanor, with no force or threat, not DUI", amount: "$500" },
    { crime: "Second degree misdemeanor, with any force or threat", amount: "$250" },
    { crime: "Second degree misdemeanor, with no force or threat, not DUI", amount: "$150" },
    { crime: "DUI or boating under the influence, first degree misdemeanor", amount: "$1,000" },
    { crime: "DUI or boating under the influence, second offense, second degree misdemeanor", amount: "$750" },
    { crime: "DUI or boating under the influence, first offense, second degree misdemeanor", amount: "$500" },
  ],
  waitHeading: "Who stays in jail until the judge",
  waitIntro: "No amount on the table helps, and release waits for first appearance, if any of these applies:",
  wait: [
    "The charge is a capital, life, first degree, or second degree felony.",
    "You were arrested for a felony while on pretrial release, probation, or community control.",
    "The charge is domestic violence, domestic battery, or stalking. The order sets no bond at all for domestic battery.",
    "The charge is robbery, burglary, carjacking, felony battery, or resisting an officer with violence.",
    "The charge is assault or battery on a police officer, or on a person 65 or older.",
    "The charge is sexual battery, kidnapping, false imprisonment, child abuse, or abuse of an elderly person.",
    "The charge is trafficking in a controlled substance, or human trafficking.",
    "You are a felon charged with having a gun or ammunition, or you are under a domestic violence or stalking injunction and charged with the same.",
    "You were arrested for breaking a protective injunction, or for missing court while on bail.",
    "You were arrested three or more times in the 6 months before this arrest.",
    "You are designated a sexual offender or sexual predator.",
  ],
  waitNote:
    "This is only part of the order's list. It also holds anyone arrested for a dangerous crime named in state law. If you are unsure, call us before you pay a bail bond company.",
  source:
    "12th Circuit Administrative Order 2025-22.3, effective 1 January 2026; Florida Supreme Court AOSC25-69, schedule effective through 31 December 2026",
};

export const SARASOTA_FELONY_DIVISIONS: LocationDivisionTable = {
  caption: "Sarasota felony divisions, by the first letter of your last name",
  rows: [
    { division: "II", letters: "A, B, C, D, F, G" },
    { division: "IV", letters: "P, Q, R, S, T, U, V, W, X, Y, Z" },
    { division: "VI", letters: "E, H, I, J, K, L, M, N, O" },
  ],
  source: "12th Circuit Administrative Order 2024-23.3, for cases filed on or after 1 January 2025",
};

export const SARASOTA_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The clocks that run once a Sarasota case starts.",
  intro: "State rules set these limits, so they do not change with the courthouse. Count each one from the date shown.",
  steps: [
    { when: "Within 24 hours of arrest", what: "A judge sees you in the courtroom at the jail, unless you were already released. The judge rules on release and on its terms." },
    { when: "30 days, if you are in jail", what: "The State gets 30 days to file a formal charge. If it misses that, the court orders you out on your own word on day 33, or day 40 if the State shows good cause. Nobody can be held past day 40 without a formal charge." },
    { when: "60 days, if you are out", what: "The State gets 60 days to file a formal charge while you are on release. For good cause, the court can give it up to 30 more." },
    { when: "90 or 175 days", what: "Speedy trial time counts from the formal charge. A misdemeanor gets 90 days and a felony gets 175. When the time runs out, the case does not end on its own." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)",
};

const CLERKNET_SOURCE = "Sarasota County Clerk of the Circuit Court and County Comptroller, Courts and Court Date Information";
const CIVIL_SOURCE = "12th Judicial Circuit, Civil Division";

export const sarasotaPages: LocationPage[] = [
  {
    slug: "sarasota",
    kind: "market",
    place: "Sarasota",
    county: "Sarasota County",
    published: true,
    indexable: false,
    metaTitle: "Sarasota Defense and Injury Lawyers | Hines McCarty Pavlidis",
    metaDescription:
      "Where a Sarasota arrest or crash case goes: the jail, first appearance, the Sarasota and Venice courthouses, and federal court in Tampa.",
    h1: "Arrested or hurt in Sarasota: where your case goes.",
    lead: [
      "Sarasota County splits its cases between a main courthouse in downtown Sarasota and a second courthouse in Venice. Which one you go to depends on the kind of case and where it began.",
      "This page gives you the whole path in one place, from the arrest or the crash to the courtroom. Our office is in Brandon, and we take cases in Sarasota County from there.",
    ],
    facts: {
      heading: "Who handles a Sarasota case at each stage.",
      intro: "Each stage has its own agency and its own address. Find the stage you are at, then use the guide below for your kind of case.",
      items: [
        {
          title: "The arrest",
          body: "Inside the city limits, the local agency is the Sarasota Police Department. Sheriff's deputies patrol the county, and they usually make the arrests outside those limits. Venice, North Port, and Longboat Key have police departments of their own.",
          source: "Sarasota County Sheriff's Office, Patrol Bureau and online reporting page; U.S. Census Bureau, 2020 place codes for Florida; 12th Circuit Administrative Order 2025-22.3, distribution list",
        },
        {
          title: "Booking",
          body: "Several agencies bring people to the Sarasota County Jail, 2020 Main Street, in downtown Sarasota. The number is 941-861-4601, and the lobby is open daily from 7 a.m. to 7 p.m. The Sheriff's website has a search for arrests and inmates.",
          source: SARASOTA_JAIL_SOURCE,
        },
        {
          title: "First appearance",
          body: "You see a judge within 24 hours of arrest unless you were already released. The courtroom is inside the jail. It generally sits at 1:00 p.m. on weekdays and 9:00 a.m. on weekends and holidays.",
          source: "Fla. R. Crim. P. 3.130(a); Sarasota County Sheriff's Office, Community Affairs Office; 12th Circuit Administrative Order 2009-9.2",
        },
        {
          title: "Felonies",
          body: "Every felony is heard in the northern part of the county, even one from Venice or North Port. The three felony judges sit at the Judge Lynn N. Silvertooth Judicial Center, 2002 Ringling Boulevard. The first letter of your last name picks your judge's division.",
          source: `${SARASOTA_SPLIT_SOURCE}; 12th Circuit Administrative Order 2024-23.3; 12th Judicial Circuit, telephone list`,
        },
        {
          title: "Misdemeanors and traffic charges",
          body: "The court draws a line at Blackburn Point Road. Cases from south of it go to the South County Courthouse, 4004 South Tamiami Trail, Venice. The City of Sarasota sits north of that line, so most cases from the city stay at the Silvertooth Center.",
          source: SARASOTA_SPLIT_SOURCE,
        },
        {
          title: "Federal court",
          body: "A federal case from this county is not heard here. Sarasota County belongs to the Tampa Division of the Middle District of Florida, and court is at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: "U.S. District Court, Middle District of Florida, Tampa location page",
        },
        {
          title: "Injury lawsuits",
          body: "A claim over $50,000 is a circuit court case. It is filed in Venice if the crash happened south of the line, or if the person you are suing lives there or in Charlotte County. Otherwise it is usually filed in Sarasota.",
          source: `${CIVIL_SOURCE}; ${SARASOTA_SPLIT_SOURCE}`,
        },
      ],
    },
    practices: {
      heading: "Pick the guide for your kind of case.",
      intro: "The first two are written for this county. The other three cover work that does not change much from one county to the next.",
      items: [
        {
          href: "/locations/sarasota/criminal-defense",
          title: "Criminal defense in Sarasota",
          body: "The first day after an arrest, what bond costs, which felony division takes your last name, and the clocks that follow.",
        },
        {
          href: "/locations/sarasota/personal-injury",
          title: "Personal injury in Sarasota",
          body: "What to do after a crash, how to get the report from each agency, and where a lawsuit gets filed.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations. A case from Sarasota County goes to the Tampa Division.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases in state or federal court, starting from the first subpoena or agent visit.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Fights between companies or owners over contracts, non-competes, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Do you have an office in Sarasota?",
        answer: "No. Our only office is at 745 W Lumsden Rd in Brandon. Sarasota County is one of the counties where we take cases, and we work on them from there.",
      },
      {
        question: "Will I have to go to Venice?",
        answer: "Only for some cases. A misdemeanor, a traffic charge, or a civil case from south of Blackburn Point Road usually goes there. A felony does not, because felonies stay in Sarasota wherever they began.",
      },
      {
        question: "How can I tell which agency arrested someone?",
        answer: "Start by asking the jail at 941-861-4601. Several agencies book people there, so the answer matters if you want the report later. The Sheriff's Office sends those requests to the records section of the agency that made the arrest.",
      },
      {
        question: "Where can I see a Sarasota court case online?",
        answer: "The Clerk's ClerkNet site is free, and you can search without signing up. It holds civil records from 2001 and criminal records from 2003. Confidential and sealed filings do not appear.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Sarasota.",
      body: [
        "We have no office in Sarasota County. The firm's one office is at 745 W Lumsden Rd in Brandon.",
        "Call 813-738-8650 at any hour, on any day. If you want to meet in person, call first so an attorney can set aside the time.",
      ],
    },
    cta: {
      heading: "Tell us what happened in Sarasota.",
      body: "A call is confidential and is answered 24/7. Tell us the charge or the crash, and where it happened, and we will tell you what comes next.",
    },
  },
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: "sarasota",
    place: "Sarasota",
    county: "Sarasota County",
    linkLabel: "Criminal defense in Sarasota",
    published: true,
    indexable: false,
    metaTitle: "Sarasota Criminal Defense Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Sarasota County? The jail number, first appearance times, bond amounts, and which felony division takes your last name.",
    h1: "Criminal defense after a Sarasota arrest.",
    lead: [
      "If you or someone you love was just arrested in Sarasota County, the next day has a fixed shape. There is a booking at the jail on Main Street, a pretrial interview, and a judge at a set hour.",
      "This page walks through that day, then what bond costs, which courtroom takes the case, and which deadlines follow. We defend people charged in this county from our office in Brandon.",
    ],
    firstSteps: {
      heading: "The first day after a Sarasota arrest.",
      intro: "A judge will see the person within 24 hours, at a set hour each day. Work through these in order.",
      items: [
        {
          title: "Find out where they are",
          body: "Inside city limits, Sarasota Police usually make the arrest. Outside them it is usually a Sheriff's deputy. Several agencies bring people to the Sarasota County Jail, 2020 Main Street, so call 941-861-4601 or check the Sheriff's search. The Sheriff warns that the list can lag, so call if it looks wrong.",
          source: `${SARASOTA_JAIL_SOURCE} and Arrests and Inmates page`,
          link: { href: "https://www.sarasotasheriff.org/arrest-reports/index.php", label: "Arrests and inmates (Sheriff's Office)", external: true },
        },
        {
          title: "Check the bond table before you pay",
          body: "Many charges cannot bond out until a judge rules, so look at the table first. If bond is allowed, the jail takes card payments up to $7,500 through GovPayNet. You can pay on site, online, or by phone at 1-877-392-2455, using location code 8673.",
          source: "Sarasota County Sheriff's Office, Jail Booking",
          link: { href: "#bond", label: "Bond amounts and who must wait" },
        },
        {
          title: "Expect a Pretrial Services interview",
          body: "Pretrial Services talks with people during booking and works around the clock. Its report tells the judge about your ties to the community, your record, and your risk. Help it confirm where you live and work. It is not the place to explain the charge.",
          source: "Sarasota County Sheriff's Office, Jail Booking; 12th Judicial Circuit, Pretrial Services Program",
        },
        {
          title: "Keep the facts to yourself",
          body: "You do not have to explain anything to officers or detectives. Family members should not ask what happened, and should not repeat it to anyone. Save that talk for a lawyer.",
        },
        {
          title: "Call before the hearing",
          body: "First appearance generally sits at 1:00 p.m. on weekdays and 9:00 a.m. on weekends and holidays, in a courtroom inside the jail. The judge rules on release and its terms, and can appoint a lawyer. That hearing can come before you have hired anyone, so call early.",
          source: "Fla. R. Crim. P. 3.130(a); Sarasota County Sheriff's Office, Community Affairs Office and Victim's Rights page; 12th Circuit Administrative Order 2009-9.2",
        },
      ],
    },
    bond: SARASOTA_BOND,
    facts: {
      heading: "How Sarasota County sorts a criminal case.",
      intro: "Two things decide where you go: the level of the charge, and where it happened. For a felony, your last name then picks the division.",
      items: [
        {
          title: "The Blackburn Point Road line",
          body: "The South County Judicial District is the land south of an east-west line along Blackburn Point Road, out to the county's eastern edge. From the road layout, the City of Sarasota is on the north side, and Venice and North Port are on the south. If the offense happened near the line, check the exact address.",
          source: SARASOTA_SPLIT_SOURCE,
        },
        {
          title: "Felonies stay in Sarasota",
          body: "A felony is filed and heard in the north, even if the arrest was in Venice. The felony judges sit at the Judge Lynn N. Silvertooth Judicial Center, 2002 Ringling Boulevard. The Clerk picks the division from the first letter of your last name, as the table shows.",
          source: `${SARASOTA_SPLIT_SOURCE}; 12th Circuit Administrative Order 2024-23.3; 12th Judicial Circuit, telephone list`,
        },
        {
          title: "When your last name does not decide it",
          body: "If you already have an open felony, a new one usually joins that division. People charged together on one document go with the person listed first. A case that is refiled or reopened returns to its old division.",
          source: "12th Circuit Administrative Order 2024-23.3",
        },
        {
          title: "Misdemeanors north of the line",
          body: "A misdemeanor or criminal traffic charge from the north goes to county court at the Silvertooth Center, in Division A, B, or C. Your notice to appear gives the time and place. You can also find them on the Clerk's site.",
          source: "12th Circuit Administrative Order 2026-14.4; 12th Judicial Circuit, telephone list; Sarasota County Clerk of the Circuit Court and County Comptroller, Court Date Information",
        },
        {
          title: "Misdemeanors south of the line",
          body: "The Clerk dockets a misdemeanor or traffic case from south of the line at the South County Courthouse, 4004 South Tamiami Trail, Venice. Divisions E and F handle them there. The same judges also hear county civil cases.",
          source: `${SARASOTA_SPLIT_SOURCE}; 12th Circuit Administrative Order 2026-14.4`,
        },
        {
          title: "If you are still in jail",
          body: "A person held on a misdemeanor, a probation violation, or contempt over a restraining order is generally not taken to Venice for a hearing. The case moves to the north instead, unless the Chief Judge approves otherwise. A jailed person's arraignment can be reset at the Silvertooth Center.",
          source: "12th Circuit Administrative Orders 2002-10.3 and 2014-3.3",
        },
        {
          title: "Who prosecutes",
          body: "The State Attorney for the 12th Circuit brings state charges. The Sarasota office is at 2071 Ringling Boulevard, Suite 400, 941-861-4400. The Venice office is at 4000 South Tamiami Trail, Suite 135, 941-861-3200.",
          source: "Office of the State Attorney, 12th Judicial Circuit, Our Offices",
        },
        {
          title: "Federal charges",
          body: "A federal charge skips all of this. The case belongs to the Tampa Division of the Middle District of Florida. It is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, in Tampa.",
          source: "U.S. District Court, Middle District of Florida, Tampa location page",
        },
      ],
      table: SARASOTA_FELONY_DIVISIONS,
    },
    timeline: SARASOTA_TIMELINE,
    charges: {
      heading: "Charges we defend, with a Sarasota detail for each.",
      intro: "Each link opens a page on the Florida law and penalties. Those pages are written around Hillsborough County courts, so your court details are on this page.",
      items: [
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "Two cases start at once: the charge, and one against your license. You have 10 days from the notice of suspension to act on the license. Bond on the schedule runs from $500 to $1,000, and the county has a DUI court.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "You wait for the judge. Once out, the circuit's no-contact order keeps you 500 feet from the other person's home, even a home you share, unless a judge changes it.",
        },
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "The substance and amount set the charge, and enough of it becomes trafficking, which must wait for a judge. Pretrial Services also takes an early look at drug court eligibility.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "A simple battery is a misdemeanor, so the Blackburn Point Road line can send it to Venice. A felony battery stays in Sarasota and must wait for a judge.",
        },
        {
          href: "/criminal-defense/state/grand-theft",
          title: "Grand theft",
          body: "Value sets the degree. A third degree theft with no force is usually $2,500 on the schedule. A first or second degree theft has no scheduled bond, so you see the judge first.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "A felon charged with having a gun or ammunition waits for a judge. So does a person charged with the same while under a domestic violence or stalking injunction.",
        },
      ],
    },
    practices: {
      heading: "Other pages that may fit your situation.",
      intro: "A case can involve more than one of these, or you may want the wider view of Sarasota.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Charges and investigations brought by federal agents and prosecutors, in the Tampa Division.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and money cases, whether the State or the federal government brings them.",
        },
        {
          href: "/locations/sarasota/personal-injury",
          title: "Personal injury in Sarasota",
          body: "Crash reports, deadlines, and where a lawsuit is filed if you were the one hurt.",
        },
        {
          href: "/locations/sarasota",
          title: "Sarasota overview",
          body: "The short version of how arrest, court, federal, and injury cases move through this county.",
        },
      ],
    },
    faq: [
      {
        question: "How do I look up a Sarasota case or court date?",
        answer: "Search the Clerk's ClerkNet site by name or case number, with no sign-up needed. Under Case Events you will see scheduled events, with the time and place. For reminders by email or text, sign up for e-Notify. Formal notice still comes by mail.",
      },
      {
        question: "Can I go home if the other person lives there?",
        answer: "Not without a court order. As a condition of release, you must stay 500 feet from that person's home, car, and work, even if you share the home. An invitation from them is no defense. A judge can change these terms, so ask a lawyer to request it.",
      },
      {
        question: "Could I lose money I post as a cash bond?",
        answer: "Yes. The Clerk can take unpaid court costs, the cost of your lawyer, fees, and penalties out of a cash bond. If 30 business days have passed since the case ended, call the Clerk at 941-861-7400. Have the name, case number, and bond number ready.",
      },
      {
        question: "What if I am arrested again while out on release?",
        answer: "The first appearance judge can act on the old case as well as the new one. If the judge finds probable cause for the new crime, that judge can revoke or change your earlier release, even though another judge set it.",
      },
      {
        question: "What is supervised pretrial release?",
        answer: "A judge can release you under Pretrial Services supervision, and its officers then track your court dates and conditions. You must sign the program's agreement before the Sheriff's Office lets you go. If you accept in court and then refuse to sign, you stay in jail with no bond until the next first appearance.",
      },
      {
        question: "What if I cannot afford a lawyer?",
        answer: "A judge can appoint one at first appearance. The Public Defender's application has a $50 fee, due within 7 days. The court can add unpaid fees to your case later. The Sarasota office number is 941-861-5500.",
      },
    ],
    office: {
      heading: "We work from Brandon, with no Sarasota office.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon. There is none in Sarasota or anywhere else in the county.",
        "The phone is answered around the clock at 813-738-8650. Call before you drive over, so an attorney can make time to meet you.",
      ],
    },
    cta: {
      heading: "Call before the next first appearance.",
      body: "Your call is confidential, and someone picks up 24/7. Tell us the name, the charge, and the agency that made the arrest, if you know them.",
    },
  },
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: "sarasota",
    place: "Sarasota",
    county: "Sarasota County",
    linkLabel: "Personal injury in Sarasota",
    published: true,
    indexable: false,
    metaTitle: "Sarasota Personal Injury Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Hurt in a Sarasota crash? How to get the crash report from each agency, the deadlines that apply, and when a lawsuit is filed in Venice.",
    h1: "Hurt in a Sarasota crash: your next steps.",
    lead: [
      "A crash in Sarasota County can be worked by city police, a Sheriff's deputy, or a state trooper. The agency decides where you get the report, so that is the first thing to pin down.",
      "This page covers what to do in the first days, how to get the report, and where a lawsuit would go. We represent people hurt in this county from our office in Brandon.",
    ],
    firstSteps: {
      heading: "What to do in the days after the crash.",
      intro: "None of this takes long, and it protects your claim from the start.",
      items: [
        {
          title: "Get medical care right away",
          body: "Your own insurance pays your first medical bills only if you get care within 14 days of the crash. Go even if you feel fine.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Write down who came",
          body: "Note the agency's name, the officer's name, and any report number you were given. Keep the paper the officer handed you. You will need it to request the report.",
        },
        {
          title: "Save what you have",
          body: "Keep your photos, the other driver's details, and the names of anyone who saw it. Start a folder for medical bills, and note the work you miss.",
        },
        {
          title: "Slow down with insurers",
          body: "An adjuster may call soon and ask you to describe the crash. What you say can be used to put fault on you. You can talk to a lawyer before you answer.",
        },
        {
          title: "Order the crash report",
          body: "For the first 60 days, only people named in the law can get it, and that includes the people in the crash. The state portal asks why you qualify and for your driver license number, and it charges a fee.",
          source: "Florida Department of Highway Safety and Motor Vehicles, crash records FAQ and Contact FHP",
          link: { href: "https://www.floridacrashportal.gov", label: "Florida Crash Portal", external: true },
        },
      ],
    },
    facts: {
      heading: "Who works a Sarasota crash, and where the claim goes.",
      intro: "The agency tells you where to get the report. The place of the crash, and where the other driver lives, tell you where a suit is filed.",
      items: [
        {
          title: "Who investigates",
          body: "Inside the city limits, Sarasota Police are the local agency. Outside them, it is usually a Sheriff's deputy. Venice and North Port have their own departments. A state trooper from the Florida Highway Patrol may also work the crash.",
          source: "Sarasota County Sheriff's Office, Patrol Bureau and online reporting page; Florida Department of Highway Safety and Motor Vehicles, Contact FHP",
        },
        {
          title: "A report from the Sheriff",
          body: "Within 60 days, the Records Section needs photo ID and a sworn statement. It is on the first floor at 2071 Ringling Boulevard, open weekdays from 8 a.m. to 5 p.m., 941-861-4025. After 60 days, use the Sheriff's portal at secure.crashdocs.org/fl-sarasotacounty.",
          source: "Sarasota County Sheriff's Office, Public Record Requests and Arrests and Inmates page",
        },
        {
          title: "A report from Sarasota Police",
          body: "The Records Unit is at 2099 Adams Lane, 941-263-6045. It lists Tuesday to Friday hours, 8 a.m. to 5 p.m. It asks for an affidavit in the first 60 days and sells reports online through BuyCrash. Call to confirm the fee, because its pages differ.",
          source: "Sarasota Police Department, Records Unit and Request a Public Record, from search excerpts",
        },
        {
          title: "A report from a trooper",
          body: "Highway Patrol reports come through FloridaCrashPortal.gov. You can also call the crash report line at 850-617-3416, option 5.",
          source: "Florida Department of Highway Safety and Motor Vehicles, Contact FHP",
        },
        {
          title: "Which court, by amount",
          body: "A claim over $50,000 is a circuit court case. A claim of $50,000 or less is a county court case. Small claims, at $8,000 or under, are part of county court.",
          source: CIVIL_SOURCE,
        },
        {
          title: "Sarasota or Venice",
          body: "A suit is filed at the South County Courthouse, 4004 South Tamiami Trail, if the crash happened south of Blackburn Point Road. The same is true if the person you are suing lives south of that line or in Charlotte County. Otherwise it usually goes to the Silvertooth Center, 2002 Ringling Boulevard.",
          source: `${SARASOTA_SPLIT_SOURCE}; 12th Judicial Circuit, Civil Division and telephone list`,
        },
        {
          title: "Very large cases",
          body: "The circuit also has a Major Trial Division that sits at the Silvertooth Center. A case can be moved there if it is unusually complex, or if the trial should run more than seven days. Malpractice and mass tort cases go there on filing.",
          source: "12th Circuit Administrative Order 2026-09.1; 12th Judicial Circuit, Civil Division",
        },
        {
          title: "Looking up a suit",
          body: "Free ClerkNet records cover civil cases from 2001 on, with no sign-up needed to search. Confidential and sealed filings stay out. For older files or certified copies, call the Clerk at 941-861-7400.",
          source: CLERKNET_SOURCE,
        },
      ],
    },
    injury: {
      heading: "Three Florida rules that shape a Sarasota claim.",
      intro: "These apply across the state. Each can cost you money if you miss it, so know them early.",
      items: [
        {
          title: "14 days to first care",
          body: "Wait longer than 14 days to see a doctor and you can lose the insurance benefit that pays first medical bills.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to sue",
          body: "A negligence claim from a crash after 24 March 2023 must be filed within two years.",
          source: "F.S. 95.11",
        },
        {
          title: "More than half at fault",
          body: "A person found more than 50 percent at fault for their own harm recovers nothing from the other driver.",
          source: "F.S. 768.81",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "Where to go from here.",
      intro: "The first page has the full picture on injury claims. It is written around Hillsborough County, so your court details are on this page.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "How we handle car and truck crash claims for people hurt by someone else's carelessness.",
        },
        {
          href: "/locations/sarasota/criminal-defense",
          title: "Criminal defense in Sarasota",
          body: "If the crash also led to a charge, such as DUI, start with the jail and bond details here.",
        },
        {
          href: "/locations/sarasota",
          title: "Sarasota overview",
          body: "One page on who handles arrests, court cases, and lawsuits in this county.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Our work on contract, ownership, and trade secret disputes.",
        },
      ],
    },
    faq: [
      {
        question: "Do I have to come to Brandon to start a claim?",
        answer: "No. Start with a phone call. Our only office is in Brandon, and there is none in Sarasota. If you want to meet in person, we set that up at the Brandon office.",
      },
      {
        question: "Can I get my crash report before 60 days are up?",
        answer: "Yes, if you were in the crash. The law keeps reports closed for 60 days after filing, except for the people it names, and the parties are among them. You will need to give a sworn statement.",
      },
      {
        question: "The crash was in Venice, but the other driver lives in Sarasota. Where is the suit filed?",
        answer: "A crash south of Blackburn Point Road points to the South County Courthouse, wherever the other driver lives. State venue law can give you other choices. If a suit lands in the wrong place, the Clerk may transfer it.",
      },
      {
        question: "What if the other driver lives in Charlotte County?",
        answer: "The court's order treats that like a south county case, so a suit filed in Sarasota County goes to the South County Courthouse in Venice. State venue law may also allow a suit in another county, so ask before you file.",
      },
      {
        question: "How do I know who has my report?",
        answer: "Look at the paper the officer gave you. If you have nothing, call the Sheriff's Records Section at 941-861-4025, or Sarasota Police Records at 941-263-6045, and give the date and place of the crash.",
      },
    ],
    office: {
      heading: "Your claim is handled from Brandon.",
      body: [
        "We do not have a Sarasota office. The one office we have is at 745 W Lumsden Rd in Brandon.",
        "You can reach us any time at 813-738-8650. Please call ahead if you would like to sit down with an attorney there.",
      ],
    },
    cta: {
      heading: "Hurt in a Sarasota crash? Call us first.",
      body: "We pick up at all hours, and the call is confidential. Talk to an attorney before you give a statement to any insurance company.",
    },
  },
];
