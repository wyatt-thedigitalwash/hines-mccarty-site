import type { LocationBond, LocationDivisionTable, LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";

/**
 * Bradenton: the market page and its two hubs (D154, D159). Manatee County shares
 * the Twelfth Circuit with Sarasota, but its practice differs, so nothing here
 * comes across without a check against the order or agency for this county. All
 * orders are listed as in effect on the circuit's index on 2026-11-09
 * (https://www.jud12.flcourts.org/Documents/Administrative-Orders).
 *
 * What is different here: one courthouse and no geographic split. The jail is in
 * Palmetto, first appearance is in courtroom 2-A in Bradenton, and the jail takes
 * no cards for bond. AO 2024-23.3 and AO 2026-04a.4 assign felonies and county
 * criminal cases by last name, with different letters.
 *
 * THE BOND SCHEDULE EXPIRES. AO 2025-22.3 has no end date of its own, but it rests
 * on AOSC25-69, whose schedule runs January 1 through December 31, 2026. Check for
 * the 2027 orders and update these amounts when they issue.
 *
 * THE FELONY TABLE MAY CHANGE. AO 2026-14.4 lists a Felony Division VII for Manatee
 * County from January 4, 2027. AO 2024-23.3 has no letters for it, and no newer
 * order was on the index on 2026-11-09. Update BRADENTON_DIVISIONS and the
 * "A fourth felony division" card when letters issue.
 *
 * JUDGES ARE NOT NAMED. AO 2026-14.4 reassigns them from January 4, 2027.
 */

export const MANATEE_JAIL_SOURCE = "Manatee County Sheriff's Office, Charges and Bond";
export const MANATEE_FIRST_APPEARANCE_SOURCE = "Manatee County Sheriff's Office, Marsy's Law page";
export const MANATEE_COURT_SOURCE = "12th Judicial Circuit, Manatee County Judicial Center page and telephone list";

export const BRADENTON_BOND: LocationBond = {
  heading: "What bond takes in Manatee County, and who cannot use it yet.",
  intro:
    "A circuit order gives officers and jail staff these amounts. They apply only to release before first appearance. After that, the judge can set a different figure. Each charge needs its own bond. The statewide schedule behind the order ends on 31 December 2026.",
  rows: [
    { crime: "Third degree felony involving force or a threat against a person", amount: "$5,000" },
    { crime: "Third degree felony without force or a threat", amount: "$2,500" },
    { crime: "First degree misdemeanor involving force or a threat", amount: "$1,000" },
    { crime: "First degree misdemeanor without force or a threat, other than DUI", amount: "$500" },
    { crime: "Second degree misdemeanor involving force or a threat", amount: "$250" },
    { crime: "Second degree misdemeanor without force or a threat, other than DUI", amount: "$150" },
    { crime: "DUI or boating under the influence charged as a first degree misdemeanor", amount: "$1,000" },
    { crime: "DUI or boating under the influence, second degree misdemeanor, second offense", amount: "$750" },
    { crime: "DUI or boating under the influence, second degree misdemeanor, first offense", amount: "$500" },
  ],
  waitHeading: "Who must see the judge first",
  waitIntro: "The table does not help if any of these fits. Release then waits for first appearance:",
  wait: [
    "A capital, life, first degree, or second degree felony, or any homicide charge.",
    "A felony arrest while you are already on probation, community control, or pretrial release.",
    "Stalking or domestic violence. Domestic battery has no bond amount at all.",
    "Burglary, robbery, carjacking, felony battery, or resisting with violence.",
    "Assault or battery on an officer, or on someone 65 or older.",
    "Kidnapping, false imprisonment, or human trafficking.",
    "Sexual battery, lewd touching, luring a child, or child pornography.",
    "Child abuse, or abusing or exploiting an elderly or disabled adult.",
    "Trafficking in a controlled substance, or conspiracy to do so.",
    "A gun or ammunition charge against a convicted felon, or against someone under a domestic violence, stalking, or cyberstalking injunction.",
    "Violating a protective injunction, or missing court while on bail.",
    "Being a registered sexual offender or sexual predator, or having three or more arrests in the prior 6 months.",
  ],
  waitNote:
    "The order's full list is longer. It also holds anyone arrested for a dangerous crime named in state law. If the charge is not clear to you, call us before you pay anyone.",
  source:
    "12th Circuit Administrative Order 2025-22.3, effective 1 January 2026; Florida Supreme Court AOSC25-69, schedule effective through 31 December 2026",
};

export const BRADENTON_DIVISIONS: LocationDivisionTable = {
  caption: "Manatee criminal divisions, felony and county court",
  rows: [
    { division: "Felony I", letters: "B, C, D, E, F" },
    { division: "Felony III", letters: "A, G, H, I, J, K, L, M, N, O" },
    { division: "Felony V", letters: "P, Q, R, S, T, U, V, W, X, Y, Z" },
    { division: "County 3", letters: "A, B, C, D, E, F, J" },
    { division: "County 4", letters: "O, P, Q, R, S, T, U, V, W, X" },
    { division: "County 5", letters: "G, H, I, K, L, M, N, Y, Z" },
  ],
  source:
    "12th Circuit Administrative Orders 2024-23.3, felony cases filed on or after 1 January 2025, and 2026-04a.4, county court cases filed on or after 1 September 2026",
};

export const BRADENTON_TIMELINE: NonNullable<LocationPage["timeline"]> = {
  heading: "The deadlines that follow a Manatee County arrest.",
  intro: "These come from statewide court rules, not from anything local. Write the dates down as they land.",
  steps: [
    { when: "Within 24 hours of arrest", what: "If you have not bonded out, you go before the first appearance judge, who rules on release and its terms." },
    { when: "30 days, if you stay in custody", what: "This is how long the State has to file a formal charge against someone held in jail. After that, the court orders release on your own word on day 33, or on day 40 if the State shows good cause. Without a formal charge, day 40 is as long as you can be held." },
    { when: "60 days, if you are released", what: "Out of custody, the State has this long to file. A judge can add as many as 30 more days for good cause." },
    { when: "90 or 175 days", what: "Speedy trial runs from the formal charge, at 90 days for a misdemeanor and 175 for a felony. The case does not end just because that date passes." },
  ],
  source: "Fla. R. Crim. P. 3.130(a), 3.134(a) and (b), and 3.191(a), (d), (f) and (o)",
};

const CLERK_RECORDS_SOURCE = "Manatee County Clerk of the Circuit Court and Comptroller, Court Records Search and Electronic Access";
const CIVIL_SOURCE = "12th Judicial Circuit, Civil Division";
const FEDERAL_SOURCE = "U.S. District Court, Middle District of Florida, Tampa location page";
const AGENCIES_SOURCE = "Manatee County Sheriff's Office, File a Report Online";
const BPD_CRASH_SOURCE = "Bradenton Police Department, Obtain a Crash Report";

export const bradentonPages: LocationPage[] = [
  {
    slug: "bradenton",
    kind: "market",
    place: "Bradenton",
    county: "Manatee County",
    published: true,
    indexable: false,
    search: {
      primary: "criminal defense attorney bradenton",
      source: "D159: DataForSEO, Florida, about 590 searches a month, 2026-11-09",
    },
    metaTitle: "Bradenton Criminal Defense Attorney | Hines McCarty Pavlidis",
    metaDescription:
      "A Bradenton arrest means a jail in Palmetto and a courtroom downtown. See who handles each step, and where crash and federal cases go.",
    h1: "Criminal defense attorneys for Bradenton cases, and help after a crash.",
    lead: [
      "Someone arrested in Bradenton is held in one town and sees a judge in another. The jail is on Harlee Road in Palmetto. The first hearing is downtown, at the Manatee County Judicial Center.",
      "This page shows who handles each step, from the arrest or crash to the courtroom. We take cases across Florida, including Manatee County, and we work from our only office, in Brandon.",
    ],
    facts: {
      heading: "Where a Bradenton case goes, one step at a time.",
      intro: "Manatee County runs its state cases through one courthouse, so no line on a map sends you to a second one. The harder parts are knowing who made the arrest and getting to the right building.",
      items: [
        {
          title: "The arrest",
          body: "Bradenton Police cover the city limits, and the Sheriff covers the unincorporated county. Your mailing address may not settle it, since the Census lists West Bradenton and South Bradenton as separate places. Palmetto, Holmes Beach, Bradenton Beach, and Longboat Key have police of their own.",
          source: `${AGENCIES_SOURCE}; U.S. Census Bureau, 2020 place codes for Florida`,
        },
        {
          title: "Booking",
          body: "The Sheriff says people under arrest go first to the Manatee County Central Jail, 14470 Harlee Road, Palmetto. The Clerk places it about 11 miles north of Bradenton. Booking is 941-723-5132, and the lobby desk is open from 7:00 a.m. to 5:30 p.m.",
          source: `${MANATEE_JAIL_SOURCE} and Intake and Release; Manatee County Clerk, Criminal department page`,
        },
        {
          title: "First appearance",
          body: "If you have not bonded out, you see a judge within 24 hours. The Sheriff lists these hearings in courtroom 2-A of the Judicial Center, 1051 Manatee Avenue West. They run at 1:00 p.m. on court workdays, and at 8:00 a.m. on weekends and holidays.",
          source: `Fla. R. Crim. P. 3.130(a); ${MANATEE_FIRST_APPEARANCE_SOURCE}; 12th Circuit Administrative Order 2009-9.2`,
        },
        {
          title: "State criminal court",
          body: "Felonies and misdemeanors are both handled at the Judicial Center. Your last name decides the division, and the letters are not the same for the two. Neither order sorts cases by neighborhood.",
          source: `12th Circuit Administrative Orders 2024-23.3 and 2026-04a.4; ${MANATEE_COURT_SOURCE}`,
        },
        {
          title: "Federal court",
          body: "A federal charge leaves the county. Manatee belongs to the Tampa Division of the Middle District of Florida, and that court sits at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: FEDERAL_SOURCE,
        },
        {
          title: "Injury lawsuits",
          body: "Above $50,000, a suit belongs in circuit court. At $50,000 or less it is a county court case, and small claims stop at $8,000. The Clerk's civil desk is at 1115 Manatee Avenue West, 941-741-4025, and the civil judges are listed at the Judicial Center.",
          source: `${CIVIL_SOURCE}; Manatee County Clerk, Circuit Civil and County Civil; ${MANATEE_COURT_SOURCE}`,
        },
      ],
    },
    practices: {
      heading: "Choose the page that fits your case.",
      intro: "The first two are written around Manatee County. The other three cover work that looks much the same from one county to the next.",
      items: [
        {
          href: "/locations/bradenton/criminal-defense",
          title: "Criminal defense in Bradenton",
          body: "The hours after an arrest, how to post bond at the jail, which letters go to which judge, and the deadlines after that.",
        },
        {
          href: "/locations/bradenton/personal-injury",
          title: "Personal injury in Bradenton",
          body: "The first steps after a crash, the rules each agency sets for its report, and how a Manatee County suit moves.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal investigations and indictments. A Manatee County case goes to the court in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial charges, from a first subpoena or agent's call through state or federal court.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Lawsuits between owners or companies, including contract, non-compete, and trade secret disputes.",
        },
      ],
    },
    faq: [
      {
        question: "Do you have an office in Bradenton?",
        answer: "No. Our only office is at 745 W Lumsden Rd in Brandon. The names sound alike, but Brandon is a different community, in Hillsborough County. We take Manatee County cases from there.",
      },
      {
        question: "Is the jail in Bradenton?",
        answer: "No. It is at 14470 Harlee Road, Palmetto. The Clerk's directions are to take US 41 north to the Port Manatee exit, turn left, go west to Harlee Road, and follow the signs. The first appearance hearing is back in Bradenton.",
      },
      {
        question: "How do I know which agency made the arrest?",
        answer: "Start with Booking at 941-723-5132. You need the answer for the report, because the Sheriff sends those requests to the records section of the arresting agency. Bradenton Police Records is 941-932-9358. Sheriff's Records is 941-747-3011, extension 2295.",
      },
      {
        question: "Where can I look up a Manatee County case?",
        answer: "The Clerk's Court Records Search lets you look by name, case number, citation number, or case type. It also lists the day's hearings. If you cannot find what you need, the Clerk's main number is 941-749-1800.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not Bradenton.",
      body: [
        "We have no office in Bradenton or anywhere else in Manatee County. The one office we have is at 745 W Lumsden Rd in Brandon.",
        "Reach us day or night at 813-738-8650. If you would like to sit down with an attorney, call first and we will set a time at that office.",
      ],
    },
    cta: {
      heading: "Call us about a Bradenton case.",
      body: "We answer around the clock, and the call is confidential. Tell us who was arrested or hurt, and which agency came.",
    },
  },
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: "bradenton",
    place: "Bradenton",
    county: "Manatee County",
    linkLabel: "Criminal defense in Bradenton",
    published: true,
    indexable: false,
    metaTitle: "Bradenton Arrest: Jail, Bond, Court | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in Bradenton? The Palmetto jail, what it takes to post bond, first appearance in courtroom 2-A, and which division takes your last name.",
    h1: "Arrested in Bradenton: the jail, bond, and court.",
    lead: [
      "A Bradenton arrest moves between two towns. The person is held at the jail in Palmetto, bond money goes there too, and the first hearing is in downtown Bradenton.",
      "This page covers the hours after an arrest, what bond takes, how the court picks your judge, and the deadlines that follow. We represent people charged in Manatee County from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "The hours after a Bradenton arrest.",
      intro: "Find the person first, then plan around the hearing.",
      items: [
        {
          title: "Find the person, and get the booking number",
          body: "Call Booking at 941-723-5132, or use the Sheriff's Arrest Inquiry page. It shows people in custody and people released in the last 90 days. Write down the booking number, because bond payments and jail deposits ask for it.",
          source: `${MANATEE_JAIL_SOURCE}, Arrest Inquiries, and Inmate Money`,
          link: { href: "https://www.manateesheriff.com/arrest_inquiries_app/", label: "Arrest Inquiry (Sheriff's Office)", external: true },
        },
        {
          title: "Bring the right kind of money",
          body: "Check the table below first, because many charges cannot bond out before the judge. If bond is allowed, the jail takes cash, a cashier's check, or a money order, and nothing else. Make checks out to the Manatee County Clerk of Circuit Court, with the booking number on them. Cash bonds are taken 24 hours a day.",
          source: MANATEE_JAIL_SOURCE,
          link: { href: "#bond", label: "Bond amounts and who must wait" },
        },
        {
          title: "Know the jail phone rules",
          body: "Once the person has a housing assignment, they can call out, with two free 20-minute calls a week. Nobody can call in, and staff will not pass along personal messages. For more calls, set up a prepaid account with IC Solutions at 888-506-8407.",
          source: "Manatee County Sheriff's Office, Inmate Phone Service and Jail",
        },
        {
          title: "Leave the facts out of it",
          body: "The person does not have to explain anything to officers or detectives. As family, do not ask what happened, and do not repeat what you hear. That talk belongs with a lawyer.",
        },
        {
          title: "Plan around the 2-A hearing",
          body: "First appearance is listed for courtroom 2-A at the Judicial Center, at 1:00 p.m. on court workdays and 8:00 a.m. on weekends and holidays. Booking can confirm the person is on that day's list. On a misdemeanor, the judge can accept a guilty plea at this hearing, so call a lawyer before then.",
          source: `Fla. R. Crim. P. 3.130(a); ${MANATEE_FIRST_APPEARANCE_SOURCE}; Manatee County Sheriff's Office, First Appearance`,
        },
        {
          title: "Give the result time to reach the jail",
          body: "Booking gets the outcome from the Clerk after the hearing. The Sheriff asks you to wait for it before you call about bond on a new arrest. Its pages give different times, as late as about 5:00 p.m., so try again if it is not in yet.",
          source: "Manatee County Sheriff's Office, First Appearance, Jail, and Jail Information",
        },
      ],
    },
    bond: BRADENTON_BOND,
    facts: {
      heading: "One courthouse, and your last name picks the judge.",
      intro: "The court lists one courthouse for this county, so your address does not move the case. The level of the charge and the first letter of your last name do.",
      items: [
        {
          title: "The Judicial Center",
          body: "Criminal judges are listed at the Manatee County Judicial Center, 1051 Manatee Avenue West, 941-749-3600. Most nearby streets have free two-hour parking. For longer days, use the garage on 12th Street West or 10th Street West.",
          source: MANATEE_COURT_SOURCE,
        },
        {
          title: "Felonies",
          body: "A felony goes to Division I, III, or V, according to the table below. The letters cover cases filed from 1 January 2025 and include probation violations. A case that was already open then stays put unless a judge finds good cause to move it.",
          source: "12th Circuit Administrative Order 2024-23.3",
        },
        {
          title: "Misdemeanors and criminal traffic",
          body: "These go to county court Division 3, 4, or 5. Do not guess from the felony letters, because the two sets do not match. The current letters apply to cases filed on or after 1 September 2026. An older case stays where the Clerk's latest notice put it.",
          source: "12th Circuit Administrative Order 2026-04a.4",
        },
        {
          title: "When your letter does not decide it",
          body: "Both orders share a few exceptions. A new charge follows any open case at the same level. Co-defendants usually follow whoever is named first. A new charge tied to a probation violation goes to the violation's division. Refiled and reopened cases go back where they were.",
          source: "12th Circuit Administrative Orders 2024-23.3 and 2026-04a.4",
        },
        {
          title: "A fourth felony division",
          body: "The court's 2027 assignments list a Division VII for Manatee County from 4 January 2027. The letter order still names only I, III, and V, and we found no new letters. If a new felony is filed after that date, go by your notice or the Clerk's site, not this table.",
          source: "12th Circuit Administrative Orders 2026-14.4 and 2024-23.3",
        },
        {
          title: "If you are held at the jail",
          body: "The Sheriff's court security unit brings people in by video for misdemeanor hearings such as arraignment. For a felony arraignment, you do not have to appear, unless your lawyer gets approval for video. You are not moved to meet with a lawyer. Trial clothes go to the jail through your lawyer, and family may not deliver them.",
          source: "12th Judicial Circuit, Manatee Inmate Transport Requests, updated 10 September 2026",
        },
        {
          title: "Supervised release",
          body: "A judge can order you screened for release under supervision, and that screening adds time. Standard terms include reporting twice a week, home and job visits, and staying in Manatee, Sarasota, or a bordering county unless a court says otherwise. The county's office is on the 5th floor of the Hensley Wing, 941-749-3051.",
          source: "Manatee County Sheriff's Office, First Appearance; Manatee County, Pretrial Release and Judicial Center location page",
        },
        {
          title: "Treatment courts",
          body: "The county has a Comprehensive Treatment Court, along with drug and veterans courts. The treatment court is for people with a substance use disorder, a serious mental illness, or both, on misdemeanors and low-level felonies. A provider checks whether you fit, and the court decides.",
          source: "12th Circuit Administrative Orders 2024-21.3 and 2026-14.4",
        },
        {
          title: "Prosecutor and Public Defender",
          body: "The State Attorney's Manatee office is in the Manatee County Building, 1112 Manatee Avenue West, 941-747-3077. The Public Defender is on the 7th floor at 1051 Manatee Avenue West, 941-747-6436.",
          source: "Office of the State Attorney, 12th Judicial Circuit, Our Offices; Office of the Public Defender, 12th Judicial Circuit, Manatee",
        },
        {
          title: "Federal charges",
          body: "None of the letters above matter in federal court. These cases go to the Tampa Division, at 801 North Florida Avenue in Tampa.",
          source: FEDERAL_SOURCE,
        },
      ],
      table: BRADENTON_DIVISIONS,
    },
    timeline: BRADENTON_TIMELINE,
    charges: {
      heading: "Charges we defend, and how each plays out in Manatee County.",
      intro: "Each link opens our page on the Florida law and penalties. Those pages are written around Hillsborough County courts, so use this page for your court details.",
      items: [
        {
          href: "/criminal-defense/state/drug-possession",
          title: "Drug possession",
          body: "The substance and amount set the charge. Some misdemeanors, including marijuana and paraphernalia, are on the treatment court's quick list for people in custody who qualify.",
        },
        {
          href: "/criminal-defense/state/domestic-violence",
          title: "Domestic violence",
          body: "Release waits for the judge. Once out, a circuit order sent to the Manatee Sheriff keeps you 500 feet from the other person's home, even if you live there too. A judge can change that, and an invitation from them is no defense.",
        },
        {
          href: "/criminal-defense/state/dui",
          title: "DUI",
          body: "You get 10 days from the notice of suspension to act on your license, apart from the court case. The schedule lists bond from $500 to $1,000. The charge itself goes to county court by your last name.",
        },
        {
          href: "/criminal-defense/state/battery",
          title: "Battery",
          body: "A simple battery can get a schedule amount and goes to county court. Felony battery cannot, and neither can battery on an officer or on someone 65 or older. Those wait for first appearance.",
        },
        {
          href: "/criminal-defense/state/drug-trafficking",
          title: "Drug trafficking",
          body: "No amount on the schedule applies, even to a conspiracy charge, so you see the judge before any release.",
        },
        {
          href: "/criminal-defense/state/gun-crimes",
          title: "Gun crimes",
          body: "A convicted felon charged with having a firearm or ammunition has no schedule bond. Neither does a person charged with the same while under certain injunctions.",
        },
      ],
    },
    practices: {
      heading: "Other pages for this kind of case.",
      intro: "A case can cross into more than one of these.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "If federal agents or prosecutors are involved, the case runs out of Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Money and fraud cases, state or federal.",
        },
        {
          href: "/locations/bradenton/personal-injury",
          title: "Personal injury in Bradenton",
          body: "If you were the one hurt, this covers crash reports, time limits, and lawsuits in this county.",
        },
        {
          href: "/locations/bradenton",
          title: "Bradenton overview",
          body: "One short page on who handles each step of a case from this area.",
        },
      ],
    },
    faq: [
      {
        question: "How do I find a court date?",
        answer: "Search the Clerk's Court Records site by name or case number. For reminders by text or email, sign up for eNotify at enotify.flcourts.org. The Clerk's criminal desk is 941-741-4019. The Clerk cannot move a date for you, so ask your lawyer about that.",
      },
      {
        question: "Why is someone still in jail after bond was posted?",
        answer: "One reason is supervised release. If the judge ordered it, the person must sign the program's agreement first. A Manatee County order says that without the signature, the jail cannot let them go, even with bond posted.",
      },
      {
        question: "How does a cash bond come back?",
        answer: "It stays on the case until sentencing, and then it goes toward court costs and fines. The Clerk also checks for money owed on other Manatee County cases and tickets. Anything left is returned. Keep the blue bond receipt, since the refund asks for that and the court's disposition sheet.",
      },
      {
        question: "What if I missed a court date?",
        answer: "The judge can issue a warrant, and you can lose the bail you posted. On a traffic offense, your license can be suspended as well. The Clerk says to turn yourself in at the jail, or at the closest agency if you live out of county. You then get a new date about 3 weeks out. Talk to a lawyer before you go.",
      },
      {
        question: "Can family bring clothes to the courthouse for a trial?",
        answer: "No. For someone in custody, clothes go to the jail through the lawyer, before the day of trial. Family members may not deliver them, and they are not brought to court that morning.",
      },
      {
        question: "What if I cannot afford a lawyer?",
        answer: "Ask the judge at first appearance. The Public Defender application has a $50 fee, due to the Clerk within 7 days, and the court can add it later if unpaid. If you stay in jail more than 24 hours after that hearing and ask for counsel, a circuit order allows an interim appointment.",
      },
    ],
    office: {
      heading: "We are in Brandon, which is not Bradenton.",
      body: [
        "The names sound alike, but Brandon is a separate community in Hillsborough County. Our only office is there, at 745 W Lumsden Rd. We have none in Bradenton or Palmetto.",
        "Someone answers 813-738-8650 day and night. To meet an attorney face to face, call ahead so we can hold a time for you.",
      ],
    },
    cta: {
      heading: "Call us before the 2-A hearing.",
      body: "The call is confidential, and we pick up 24/7. Give us the person's name and booking number if you have them.",
    },
  },
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: "bradenton",
    place: "Bradenton",
    county: "Manatee County",
    linkLabel: "Personal injury in Bradenton",
    published: true,
    indexable: false,
    metaTitle: "Bradenton Personal Injury Lawyer | Hines McCarty Pavlidis",
    metaDescription:
      "Hurt in a Bradenton crash? How to get your report from police, the Sheriff, or the Highway Patrol, the time limits, and how a Manatee suit moves.",
    h1: "Hurt in a crash in Bradenton: reports, time limits, and court.",
    lead: [
      "A Bradenton crash report can sit with any of three agencies, and each one has its own process for the first 60 days. Knowing who came to the scene can save you a wasted trip.",
      "Below you will find what to do first, how to get the report, and how a Manatee County lawsuit moves. We represent people hurt across Florida from our only office, in Brandon.",
    ],
    firstSteps: {
      heading: "After a Bradenton crash, in this order.",
      intro: "These steps are short, and most of them can be done from your phone.",
      items: [
        {
          title: "Stay, and call 911",
          body: "Bradenton Police say law enforcement must report a crash with an injury, a death, a hit-and-run, a DUI, a towed vehicle, or a commercial vehicle. The same goes for damage of at least $2,000. In those cases, stay at the scene and call 911.",
          source: "Bradenton Police Department, Report a Crash",
        },
        {
          title: "See a doctor inside 14 days",
          body: "Your own insurance helps with early medical bills only if you get first care within 14 days of the crash. Do not wait to see how you feel.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Note who came",
          body: "Write down the agency, the officer's name, and any case number. Bradenton Police say a report can take up to 10 days to be ready, so give it time before you make the trip.",
          source: BPD_CRASH_SOURCE,
        },
        {
          title: "Build a simple file",
          body: "Keep your photos, the other driver's details, and the names of witnesses in one place. Add each medical bill and each day of work you miss.",
        },
        {
          title: "Be careful with adjusters",
          body: "An insurance adjuster may call early and ask for your account of the crash. Your answers can be used to shift fault to you, so you can speak with a lawyer first.",
        },
        {
          title: "Find your police district if you are unsure",
          body: "If you do not know whether the crash was inside the city, the county's address tool can show the police district for a street address.",
          source: "Manatee County, Resident Information Tool",
          link: { href: "https://www.mymanatee.org/services-and-amenities/service-listing/service-details/resident-information-tool", label: "Resident Information Tool", external: true },
        },
      ],
    },
    facts: {
      heading: "Who has your report, and how a Manatee suit moves.",
      intro: "Each agency keeps its own reports. All of them follow the same state rule that closes reports for 60 days to anyone the law does not name.",
      items: [
        {
          title: "Who investigates",
          body: "Inside the city it is usually Bradenton Police, and in the unincorporated county usually a Sheriff's deputy. Highway Patrol's Troop F also covers Manatee County, with a Bradenton station at 5023 53rd Avenue East, 941-751-8350.",
          source: `${AGENCIES_SOURCE}; Florida Department of Highway Safety and Motor Vehicles, Troop F and FHP Station Locations`,
        },
        {
          title: "A Bradenton Police report",
          body: "Records is at 100 10th Street West, weekdays 7:00 a.m. to 4:30 p.m. For crash questions, call 941-932-9397. In the first 60 days, bring photo ID or a notarized sworn statement, which Records can complete with you. The department says not to use the state portal until those 60 days pass.",
          source: `${BPD_CRASH_SOURCE}; Location and Hours`,
        },
        {
          title: "A Sheriff's report",
          body: "The Records Section is at 600 301 Boulevard West, Suite 202, weekdays 8:00 a.m. to 5:00 p.m. Call 941-747-3011, extension 2295 or 2364. Its page quotes the state rule for the first 60 days: show ID or proof of your status, and file a sworn statement.",
          source: "Manatee County Sheriff's Office, Public Records and Contact",
        },
        {
          title: "A Highway Patrol report",
          body: "These come through FloridaCrashPortal.gov, for a fee, or through the state line at 850-617-3416, option 5. People in the crash can get a copy during the first 60 days. The portal has you state why you qualify and give your driver license number.",
          source: "Florida Department of Highway Safety and Motor Vehicles, crash records FAQ and Contact FHP",
        },
        {
          title: "Which court, by the amount",
          body: "A claim over $50,000 belongs in circuit court. County court takes $50,000 or less, and that includes small claims at $8,000 or under.",
          source: CIVIL_SOURCE,
        },
        {
          title: "Inside the Judicial Center",
          body: "Circuit civil cases are in Division B or D. County civil cases go to Division 1 or 2 by blind draw, and small claims to Division 1, 2, 3, or 5. The judges are listed at 1051 Manatee Avenue West. The Clerk's civil desk is at 1115 Manatee Avenue West, 941-741-4025.",
          source: `12th Circuit Administrative Orders 2026-14.4 and 2026-04a.4; ${MANATEE_COURT_SOURCE}; Manatee County Clerk, Circuit Civil and County Civil`,
        },
        {
          title: "Malpractice and mass torts",
          body: "A new malpractice or mass tort case filed since 3 August 2026 goes straight to a Major Trial Division that spans the circuit. Other cases can be moved there by order. The court's page puts that judge's trials in Sarasota, at 2002 Ringling Boulevard, so a case there may not stay in Bradenton.",
          source: "12th Circuit Administrative Order 2026-09.1; 12th Judicial Circuit, Civil Division",
        },
        {
          title: "Looking up a suit",
          body: "The Clerk's Court Records Search takes a person, business, case number, or citation number. Many documents can be viewed, but some need a manual review first and some are not public. For help, call Public Access at 941-741-4040.",
          source: `${CLERK_RECORDS_SOURCE}; Public Access Frequently Asked Questions`,
        },
      ],
    },
    injury: {
      heading: "The time limits on a Bradenton claim, and the fault rule.",
      intro: "All three are Florida law, so they apply the same way here as anywhere in the state. Learn them now, not at the end of a claim.",
      items: [
        {
          title: "First care inside 14 days",
          body: "If your first visit to a doctor comes after day 14, you can lose the benefit from your own policy that pays early bills.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "The 50 percent line",
          body: "If you are found more than 50 percent at fault for your own injury, you recover nothing from the other side.",
          source: "F.S. 768.81",
        },
        {
          title: "A suit inside two years",
          body: "For a negligence claim from a crash after 24 March 2023, the suit has to be filed within two years.",
          source: "F.S. 95.11",
        },
      ],
      links: [
        { href: "/personal-injury/car-accidents", label: "Car accident claims" },
        { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
      ],
    },
    practices: {
      heading: "More pages that may help.",
      intro: "Our main injury page has the wider picture. It is written around Hillsborough County, so use this page for Manatee County court details.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "Our work for people hurt in car and truck crashes caused by another driver's carelessness.",
        },
        {
          href: "/locations/bradenton/criminal-defense",
          title: "Criminal defense in Bradenton",
          body: "If a crash also brought a charge such as DUI, this covers the Palmetto jail and how bond works.",
        },
        {
          href: "/locations/bradenton",
          title: "Bradenton overview",
          body: "A short page on who handles arrests, court, and lawsuits around Bradenton.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Disputes over contracts, company ownership, and trade secrets.",
        },
      ],
    },
    faq: [
      {
        question: "Can we start this without me driving to Brandon?",
        answer: "Yes. A claim starts with a call to 813-738-8650. Our only office is in Brandon, and we have none in Bradenton. If you want to meet in person, we set that up at the Brandon office.",
      },
      {
        question: "Why can't I get my Bradenton Police report from the state portal yet?",
        answer: "The department says the portal is not for its reports during the first 60 days. Go to Records instead, with photo ID or a notarized statement. After 60 days the report is public, and you can use the portal or go in person.",
      },
      {
        question: "What if the crash was in Holmes Beach, Anna Maria, or Longboat Key?",
        answer: "Holmes Beach Police are at 941-778-2677, and Longboat Key Police at 941-316-1201. The Sheriff's Anna Maria Unit is at 941-708-8899. Longboat Key sits in both Manatee and Sarasota counties, so check which side the crash was on.",
      },
      {
        question: "I do not know who has my report. Who do I call?",
        answer: "Look at any paper the officer gave you. If you have none, call Bradenton Police at 941-932-9397, or Sheriff's Records at 941-747-3011, extension 2295. For a trooper, try the Bradenton station at 941-751-8350. Have the date and place ready.",
      },
      {
        question: "Will my lawsuit be heard in Bradenton?",
        answer: "A suit filed in Manatee County is usually heard at the Judicial Center. State law can also allow a suit where the other driver lives, if that is another county. Ask before you file.",
      },
    ],
    office: {
      heading: "One office, and it is in Brandon.",
      body: [
        "We have no office in Bradenton. All of our work runs from 745 W Lumsden Rd in Brandon, a separate community in Hillsborough County.",
        "Call 813-738-8650 at any hour. If you would rather talk across a table, phone first so an attorney can be there.",
      ],
    },
    cta: {
      heading: "Hurt in Bradenton? Talk to us first.",
      body: "Calls are confidential and answered at all hours. Speak with an attorney before you give an insurer a statement.",
    },
  },
];
