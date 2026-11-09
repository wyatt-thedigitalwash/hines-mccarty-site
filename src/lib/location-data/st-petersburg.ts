import type { LocationPage } from "../location-types.ts";
import { BUSINESS, FEDERAL, WHITE_COLLAR } from "./hillsborough.ts";
import {
  FEDERAL_TAMPA_SOURCE,
  FLHSMV_CRASH_PORTAL_URL,
  FLHSMV_CRASH_SOURCE,
  JUDICIAL_BUILDING_SOURCE,
  PCSO_CRASH_SOURCE,
  PCSO_JAIL_SOURCE,
  PCSO_PATROL_SOURCE,
  PINELLAS_DEADLINES,
  PINELLAS_CASE_LOOKUP_ANSWER,
  PINELLAS_CLERK_CIVIL_SOURCE,
  PINELLAS_PHONES_SOURCE,
  POST_BOND_URL,
  SIXTH_ADVISORY_ORDER_SOURCE,
  SIXTH_ADVISORY_SOURCE,
  SIXTH_CIRCUIT_ASSIGNMENTS_SOURCE,
  SIXTH_CIVIL_SOURCE,
  SIXTH_COUNTY_ASSIGNMENTS_SOURCE,
  SIXTH_CRIMINAL_COURTS_SOURCE,
  SIXTH_DRUG_COURT_SOURCE,
  SIXTH_LOCAL_RULE_SOURCE,
  SIXTH_NTA_SOURCE,
  SIXTH_TRAFFIC_SOURCE,
  WHOS_IN_JAIL_URL,
} from "./sixth-circuit.ts";

/**
 * St. Petersburg: the market page, its two hubs, and three communities (D154).
 * Kenneth City and Treasure Island are a section on the market page (D157).
 * County facts and their source lines live in sixth-circuit.ts, which also says
 * what is different about Pinellas County and which dates to watch.
 *
 * There is no court boundary to put a town on either side of, as there is in
 * Hillsborough. What changes from town to town is the arresting agency, where its
 * records are, and so which traffic court hears its citations.
 */

const MARKET = "st-petersburg";
const CRIMINAL_HUB = `/locations/${MARKET}/criminal-defense`;
const INJURY_HUB = `/locations/${MARKET}/personal-injury`;
const MARKET_PAGE = `/locations/${MARKET}`;
const STATE = "/criminal-defense/state";

const SPPD_SOURCE = "St. Petersburg Police Department, Records Division";
const PPPD_SOURCE = "City of Pinellas Park, Police Department and Police Records";
const GULFPORT_SOURCE = "City of Gulfport, Police Department";
const TI_SOURCE = "City of Treasure Island, Police Department";
const KC_SOURCE = "Town of Kenneth City, Police Department";

const carLinks = [
  { href: "/personal-injury/car-accidents", label: "Car accident claims" },
  { href: "/personal-injury/truck-accidents", label: "Truck accident claims" },
];

export const stPetersburgPages: LocationPage[] = [
  // ------------------------------------------------------------------ Market
  {
    slug: MARKET,
    kind: "market",
    place: "St. Petersburg",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "St. Petersburg Arrests and Crashes | Hines McCarty Pavlidis",
    metaDescription:
      "A St. Petersburg arrest goes to the Justice Center on 49th Street, not downtown. See the jail, the courts, federal court, and where injury suits go.",
    h1: "Your St. Petersburg case may not stay in St. Petersburg.",
    lead: [
      "An arrest in St. Petersburg does not lead to a courtroom in St. Petersburg. Every criminal section in Pinellas County sits at the Pinellas County Justice Center on 49th Street North, with a Clearwater address. The downtown Judicial Building is mainly for civil and family cases.",
      "This page follows a case from the arrest or the crash to the courtroom. Our office is in Brandon, and we take Pinellas County cases from there.",
    ],
    facts: {
      heading: "Where a St. Petersburg case goes, stage by stage.",
      intro: "Each stage has its own agency and its own address. Start with the agency named on the paperwork.",
      items: [
        {
          title: "The arrest",
          body: "Inside the city limits, this is usually the St. Petersburg Police Department, 1301 First Avenue North. Its non-emergency line is 727-893-7780. Sheriff's deputies and state troopers also work in the county, so the paperwork is the surest guide.",
          source: `${SPPD_SOURCE}; ${PINELLAS_PHONES_SOURCE}`,
        },
        {
          title: "Booking",
          body: "Adults are usually taken to the Pinellas County Jail, 14400 49th Street North, Clearwater. Call Inmate Records at 727-464-6415, or search the Sheriff's Who's In Jail site. People held there cannot take incoming calls.",
          source: PCSO_JAIL_SOURCE,
        },
        {
          title: "First appearance",
          body: "A judge must see you within 24 hours unless you were already released. Here the hearing is called advisories. The court calendar lists it at the Justice Center, and families can call State Attorney Dispatch at 727-464-6221 to confirm the place before they drive.",
          source: `Fla. R. Crim. P. 3.130(a); ${SIXTH_ADVISORY_SOURCE}`,
        },
        {
          title: "State criminal court",
          body: "Felonies, misdemeanors, and criminal traffic charges all go to the Justice Center, 14250 49th Street North. The county does not divide these cases by neighborhood or by last name. The St. Petersburg Judicial Building has no criminal section.",
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Federal court",
          body: "Pinellas County is part of the Tampa Division of the Middle District of Florida. A federal case from St. Petersburg is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa.",
          source: FEDERAL_TAMPA_SOURCE,
        },
        {
          title: "Injury and other civil suits",
          body: "This is where the downtown building comes in. A civil suit goes to St. Petersburg or Clearwater based on the ZIP code of the plaintiff's lawyer, not the place of the crash. Ours is on neither list, so a suit we file can be assigned to either one.",
          source: `${SIXTH_CIVIL_SOURCE}; ${JUDICIAL_BUILDING_SOURCE}`,
        },
      ],
    },
    practices: {
      heading: "What we handle in St. Petersburg cases.",
      intro: "The first two pages are written for Pinellas County. The other three are the firm's main pages for those areas.",
      items: [
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in St. Petersburg",
          body: "What to do on the first day, the Pinellas bond schedule, how sections are assigned, and the deadlines that follow.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in St. Petersburg",
          body: "What to do after a crash, how to get the report, your deadlines, and where a suit gets filed.",
        },
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Federal charges and investigations in the Middle District of Florida, where Pinellas cases are heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and financial cases, state or federal, starting from the first subpoena or agent visit.",
        },
        {
          href: BUSINESS,
          title: "Business litigation",
          body: "Fights over contracts, ownership, non-competes, and trade secrets.",
        },
      ],
    },
    communitiesIntro: "These places around St. Petersburg have their own pages, because the agency that handles a case changes from one to the next.",
    faq: [
      {
        question: "Will I ever go to court in downtown St. Petersburg?",
        answer: "Not for a criminal or traffic case, which goes to the Justice Center. The downtown Judicial Building handles civil, small claims, family, and probate matters, so an injury suit could end up there.",
      },
      {
        question: "Does it matter which agency arrested me?",
        answer: "Yes, for two reasons. The agency holds the reports, and its name decides which of the two traffic courts hears a non-DUI traffic charge. St. Petersburg police citations go to Traffic Court II.",
      },
      {
        question: "How do I look up a Pinellas County case?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Do you have an office in St. Petersburg?",
        answer: "No. Our only office is in Brandon, at 745 W Lumsden Rd. We take Pinellas County cases from there, and you can call us at any hour.",
      },
    ],
    towns: {
      heading: "Kenneth City and Treasure Island.",
      intro:
        "These two small towns follow the same Pinellas County process as St. Petersburg, so the criminal defense and personal injury pages above apply. What differs is who to call and how a ticket is handled.",
      items: [
        {
          title: "Kenneth City",
          body: "Kenneth City has its own police department, at 4600 58th Street North. The town lists 727-582-6200 as its non-emergency police line, and the county's phone list shows that as Sheriff's dispatch for the town. The officers who respond still come from Kenneth City's department. For records or a crash report, call 727-498-8942. The county's order lists its police with Traffic Court I, for non-DUI criminal traffic charges.",
          source: `${KC_SOURCE}; ${PINELLAS_PHONES_SOURCE}; ${SIXTH_TRAFFIC_SOURCE}`,
        },
        {
          title: "Treasure Island",
          body: "Treasure Island has its own police department, at 180 108th Avenue, with business hours Monday to Friday, 8:00 a.m. to 4:00 p.m. The Sheriff's Office monitors its non-emergency line, 727-547-4595, around the clock. For a crash report, call Police Records at 727-547-4592 on a weekday. The order also lists its police with Traffic Court I. For a ticket, use the methods printed on it. The city warns that third-party payment sites may add delays and fines, and that you cannot dispute a ticket once it is paid. A criminal traffic charge requires a court date, so do not just pay it.",
          source: `${TI_SOURCE}; ${SIXTH_TRAFFIC_SOURCE}`,
        },
      ],
    },
    office: {
      heading: "We are in Brandon, not St. Petersburg.",
      body: [
        "The firm has one office, at 745 W Lumsden Rd in Brandon. There is no office in St. Petersburg or elsewhere in Pinellas County.",
        "Call 813-738-8650 at any hour. If you want to meet in person, call first so an attorney can set aside the time.",
      ],
    },
    cta: {
      heading: "Tell us what happened in St. Petersburg.",
      body: "The call is confidential and answered 24/7. We will tell you where your case is headed and what needs to happen first.",
    },
  },

  // ------------------------------------------------------------------ Criminal hub
  {
    slug: "criminal-defense",
    kind: "hub",
    hubType: "criminal",
    parent: MARKET,
    place: "St. Petersburg",
    county: "Pinellas County",
    published: true,
    indexable: false,
    linkLabel: "Criminal defense in St. Petersburg",
    metaTitle: "St. Petersburg Criminal Defense | Hines McCarty Pavlidis",
    metaDescription:
      "Arrested in St. Petersburg? The jail number, Pinellas bond amounts for 2026, advisories, and why your case is heard on 49th Street North.",
    h1: "Charged in St. Petersburg: criminal defense and your next steps.",
    lead: [
      "Someone you love was arrested in St. Petersburg, or you were. This page covers what to do in the first day, what bond costs under the Pinellas schedule, which courtroom comes next, and which deadlines start running.",
      "One fact surprises people. The case will not be heard downtown. It goes to the Pinellas County Justice Center on 49th Street North, the same road as the jail. Our office is in Brandon, and we take these cases from there.",
    ],
    firstSteps: {
      heading: "The first day after a St. Petersburg arrest.",
      intro: "The release hearing comes within 24 hours, so these steps are in the order that helps most.",
      items: [
        {
          title: "Locate the person",
          body: "St. Petersburg police usually take adults to the Pinellas County Jail, 14400 49th Street North, Clearwater. Search the Sheriff's list online, or call Inmate Records at 727-464-6415. You cannot call in to the person. They can only call out on a jail account that family can fund.",
          source: PCSO_JAIL_SOURCE,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Check whether bond is open yet",
          body: "Many charges have no bond until a judge has seen the person. Look at the county bond table linked below before you pay anyone. If bond is open, the jail takes cash in the full amount with a photo ID, a surety bond from a registered agent, or a card for up to $2,500 per charge.",
          source: PCSO_JAIL_SOURCE,
          link: { href: POST_BOND_URL, label: "How to post bond (Sheriff's Office)", external: true },
        },
        {
          title: "Say nothing about the facts",
          body: "You owe police no explanation. Family members should not ask what happened on the phone. Keep that talk for a lawyer.",
        },
        {
          title: "Call before advisories",
          body: "Advisories is the local name for first appearance. On weekends and holidays, the advisory judge sits from 8:30 a.m. to about noon. To go in person, call State Attorney Dispatch at 727-464-6221 and confirm the place. The judge decides on release, so call us early.",
          source: `Fla. R. Crim. P. 3.130(a); ${SIXTH_ADVISORY_SOURCE}`,
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "One courthouse for every St. Petersburg criminal case.",
      intro: "Some Florida counties split criminal cases by address or last name. Pinellas County does not. What changes here is the section inside the Justice Center that gets your case.",
      items: [
        {
          title: "Nothing criminal downtown",
          body: "The court's own assignment orders list every felony, misdemeanor, and traffic section at the Justice Center, 14250 49th Street North, Clearwater. The St. Petersburg sections they list are civil, family, and probate. Do not go to the downtown building for a criminal date.",
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Felonies",
          body: "A felony goes to a circuit court section with a letter, such as A or B. Under the local rule, the clerk assigns a case to a section at random unless an order says otherwise. Your section tells you which judge has the case.",
          source: `${SIXTH_CIRCUIT_ASSIGNMENTS_SOURCE}; ${SIXTH_LOCAL_RULE_SOURCE}`,
        },
        {
          title: "Misdemeanors",
          body: "These go to a county court section: E, F, G, H, L, or V. If you already have an open misdemeanor case, a new notice to appear usually follows it to that section. If you have never had one, the clerk picks at random.",
          source: `${SIXTH_COUNTY_ASSIGNMENTS_SOURCE}; ${SIXTH_NTA_SOURCE}`,
        },
        {
          title: "Domestic violence",
          body: "All county court domestic violence cases go to Section R, including probation violations. On weekdays, first appearance in those cases also stays in Section R. A petition for an injunction is a separate case, and it goes to a Community Violence Court section.",
          source: `${SIXTH_ADVISORY_ORDER_SOURCE}; ${SIXTH_CIVIL_SOURCE}`,
        },
        {
          title: "DUI and other traffic charges",
          body: "A DUI usually goes to one of the misdemeanor sections, and to the same section if you already have a case in one. Other criminal traffic charges follow the agency that wrote the ticket. St. Petersburg police tickets go to Traffic Court II, and both traffic courts sit at the Justice Center.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "A trooper's ticket",
          body: "A Florida Highway Patrol ticket goes to Traffic Court I through 2026. From 1 January 2027 it goes to Traffic Court II. Either way, the Clerk aims to set arraignment within 20 days of getting the citation, and a jury demand usually moves the case to a criminal section.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "Drug court",
          body: "Felony Section N is the adult drug court. The State Attorney's Office decides which cases go there. A defense lawyer can ask for a transfer, but that office has to approve it.",
          source: SIXTH_DRUG_COURT_SOURCE,
        },
        {
          title: "Federal charges",
          body: "A federal case runs on a separate track. It is heard in Tampa, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, because Pinellas County is in the Tampa Division.",
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in St. Petersburg.",
      intro: "Each link opens a page on the Florida law and penalties. Those pages describe Hillsborough County courts, so use this page for your court details.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "The bond is $500 only if nobody was hurt, nothing was damaged, and you have no DUI history. Otherwise you wait for a judge. Your license has its own 10-day deadline from the notice of suspension.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "There is no bond before first appearance. The case then goes to Section R, one section for the whole county.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "A felon charged with having a gun or ammunition cannot use the schedule. The same is true for someone under certain injunctions.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "A third degree felony with no force carries a $5,000 bond here. Ask early about diversion or drug court, since the State Attorney's Office controls both doors.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "A misdemeanor battery usually has a set bond. A felony battery, or a battery on someone 65 or older, waits for a judge.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "The value taken sets the degree. At the third degree level with no force, bond is $5,000. Higher degrees have no bond until first appearance.",
        },
      ],
    },
    practices: {
      heading: "Related pages for a St. Petersburg case.",
      intro: "If the case turns federal or financial, or someone was also hurt, these pages pick up from here.",
      items: [
        {
          href: FEDERAL,
          title: "Federal criminal defense",
          body: "Investigations and charges in the Middle District of Florida, heard in Tampa.",
        },
        {
          href: WHITE_COLLAR,
          title: "White-collar defense",
          body: "Fraud and money cases, from the first subpoena or agent visit.",
        },
        {
          href: INJURY_HUB,
          title: "Personal injury in St. Petersburg",
          body: "Deadlines, crash reports, and where a suit gets filed after a crash in the city.",
        },
        {
          href: MARKET_PAGE,
          title: "St. Petersburg overview",
          body: "The full path of a case, and the towns around the city.",
        },
      ],
    },
    faq: [
      {
        question: "Where will my St. Petersburg case be heard?",
        answer: "At the Pinellas County Justice Center, 14250 49th Street North, Clearwater. That covers felonies, misdemeanors, and traffic charges. A federal case is the exception, and it goes to Tampa.",
      },
      {
        question: "How do I look up a case or a court date?",
        answer: `${PINELLAS_CASE_LOOKUP_ANSWER} You can also call the Clerk at 727-464-7000.`,
      },
      {
        question: "Why does the bond amount differ from what I read online?",
        answer: "Many charts show other counties or older orders. Pinellas County sets a third degree felony with no force at $5,000, where Hillsborough County lists $2,500 for 2026. With any force, Pinellas has no bond before first appearance at all.",
      },
      {
        question: "Can I pay bond with a card or a check?",
        answer: "The jail takes credit and debit cards through its AllPaid program, for up to $2,500 per charge. A bank check, traveler's check, or money order must be made out to the Clerk of the Circuit Court. Personal checks are not accepted.",
      },
      {
        question: "What if the arrest was on a warrant?",
        answer: "The booking officer uses the bond written on the warrant, and not the schedule. If you are not sure what the warrant says, call us.",
      },
      {
        question: "Could I get a notice to appear and skip jail?",
        answer: "Sometimes. A local order urges police to use them where the law allows. At booking, an officer may also issue one on an ordinance charge or a first or second degree misdemeanor if you seem likely to come to court and no rule requires holding you.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, with none in St. Petersburg.",
      body: [
        "We have no office in St. Petersburg. The firm's only office is at 745 W Lumsden Rd in Brandon, and we take Pinellas County cases from there.",
        "The phone is answered around the clock at 813-738-8650. Call ahead if you would like to sit down with an attorney.",
      ],
    },
    cta: {
      heading: "Call before the advisory hearing.",
      body: "The sooner you call, the more we can do before a judge decides on release. Calls are confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Injury hub
  {
    slug: "personal-injury",
    kind: "hub",
    hubType: "injury",
    parent: MARKET,
    place: "St. Petersburg",
    county: "Pinellas County",
    published: true,
    indexable: false,
    linkLabel: "Personal injury in St. Petersburg",
    metaTitle: "St. Petersburg Injury Lawyers | Hines McCarty Pavlidis",
    metaDescription:
      "Hurt in a St. Petersburg crash? How to get the police report, your 14-day and two-year deadlines, and how Pinellas County assigns an injury suit.",
    h1: "Hurt in a St. Petersburg crash: your deadlines and your report.",
    lead: [
      "After a crash in St. Petersburg, two deadlines start right away. One is 14 days and the other is two years. This page explains both, along with how to get the police report and where a suit would be heard.",
      "Our office is in Brandon, and we represent people hurt in Pinellas County from there.",
    ],
    firstSteps: {
      heading: "What to do after a St. Petersburg crash.",
      intro: "Most of this takes a few minutes, and it protects your claim later.",
      items: [
        {
          title: "Get the report number",
          body: "Ask the officer for the agency name and report number before you leave. You will need both for the report. If no officer came, the police department's site links to the state's self-report form.",
          source: `St. Petersburg Police Department; ${FLHSMV_CRASH_SOURCE}`,
          link: { href: FLHSMV_CRASH_PORTAL_URL, label: "Florida Crash Portal", external: true },
        },
        {
          title: "See a doctor within 14 days",
          body: "Your own insurance pays first medical bills only if you get first care within 14 days of the crash. Pain can show up late, so go even if you feel fine now.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Take care with insurers",
          body: "Do not guess about speed, fault, or how you feel. If you are found more than 50 percent at fault, you recover nothing from the other driver, and your own words can be used for that.",
          source: "F.S. 768.81",
        },
        {
          title: "Save what you have",
          body: "Keep photos, medical papers, and the names of witnesses in one place. Then call us, so an attorney can look at the claim while the facts are fresh.",
        },
      ],
    },
    facts: {
      heading: "Reports and courts for a St. Petersburg crash.",
      intro: "The agency that responded holds the report. A suit, if you need one, follows a Pinellas County rule that many people do not expect.",
      items: [
        {
          title: "Who investigates",
          body: "Inside the city it is usually the St. Petersburg Police Department. On other roads it may be Sheriff's deputies or the Florida Highway Patrol, whose Pinellas station is at 727-217-8820. The paper the officer gave you names the agency.",
          source: `${SPPD_SOURCE}; ${PINELLAS_PHONES_SOURCE}`,
        },
        {
          title: "Getting a city police report",
          body: "Make a public records request to the Records Division, 1301 First Avenue North. The counter is open Monday to Friday, 8:00 a.m. to 4:30 p.m., and the desk is at 727-893-7521. Most reports take 10 to 14 days to become available.",
          source: SPPD_SOURCE,
        },
        {
          title: "Who can get it early",
          body: "For the first 60 days, a crash report generally goes only to the people involved, their insurers, and their lawyers. The state also sells reports through its crash portal for $10, plus a $2 fee per order.",
          source: `${SPPD_SOURCE}; ${FLHSMV_CRASH_SOURCE}`,
        },
        {
          title: "Which court takes the claim",
          body: "A claim over $50,000 is a circuit court case. From over $8,000 up to $50,000 it is county court, and $8,000 or less is small claims. These amounts leave out interest, costs, and attorney fees.",
          source: PINELLAS_CLERK_CIVIL_SOURCE,
        },
        {
          title: "St. Petersburg or Clearwater",
          body: "If a suit is filed in Pinellas County, the courthouse follows the ZIP code of the plaintiff's lawyer, or your own if you have no lawyer. The place of the crash does not decide it. The St. Petersburg list includes 33701 to 33716.",
          source: SIXTH_CIVIL_SOURCE,
        },
        {
          title: "What that means with us",
          body: "Our Brandon ZIP code is on neither list. The order spreads cases like that evenly across both locations, so a suit we file could go to the St. Petersburg Judicial Building, 545 1st Avenue North, or to Clearwater.",
          source: `${SIXTH_CIVIL_SOURCE}; ${JUDICIAL_BUILDING_SOURCE}`,
        },
        {
          title: "Looking up a civil case",
          body: "Search the Clerk's Public Access site, courtrecords.mypinellasclerk.gov, by name or case number. Most records need no account. For help, call the Clerk at 727-464-7000.",
          source: "Pinellas County Clerk of the Circuit Court, Public Access Case Records",
        },
      ],
    },
    injury: {
      heading: "The rules that shape a St. Petersburg claim.",
      intro: "These are Florida rules, so they apply the same way here as anywhere in the state. Miss one and the claim can shrink or end.",
      items: [
        {
          title: "14 days to first care",
          body: "Skip this and you can lose the benefits from your own policy. Getting seen soon after the crash keeps that door open.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to file suit",
          body: "A negligence claim from a crash after 24 March 2023 must be filed within two years. Do not wait on an insurer's answer before you check that date.",
          source: "F.S. 95.11",
        },
        {
          title: "The 50 percent line",
          body: "Up to 50 percent, fault lowers what you can recover. Above that line, you get nothing from the other side.",
          source: "F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More on injury claims, and related help.",
      intro: "Start with the main injury page for how a claim works. The others cover what else can come out of a crash.",
      items: [
        {
          href: "/personal-injury",
          title: "Personal injury",
          body: "How a claim works from the crash to the settlement or trial.",
        },
        {
          href: CRIMINAL_HUB,
          title: "Criminal defense in St. Petersburg",
          body: "If the crash led to a DUI or another charge, start here.",
        },
        {
          href: MARKET_PAGE,
          title: "St. Petersburg overview",
          body: "Where each kind of case goes, and the towns around the city.",
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
        question: "Will my injury suit be heard in St. Petersburg?",
        answer: "It might be, if it is filed in Pinellas County. The courthouse depends on the lawyer's ZIP code, and ours is on neither list, so it could be assigned to St. Petersburg or to Clearwater. Criminal charges from the same crash would go to the Justice Center.",
      },
      {
        question: "How soon can I get my crash report?",
        answer: "You can ask right away, but most city police reports take 10 to 14 days to come through. As someone in the crash, you do not have to wait out the 60 days that apply to the public.",
      },
      {
        question: "How long do I have to sue?",
        answer: "Two years, for a negligence claim from a crash after 24 March 2023. Do not wait for the end of that time, because evidence fades and a suit takes time to prepare.",
      },
      {
        question: "Do I have to come to your office?",
        answer: "No. You can start by phone at 813-738-8650. Our only office is in Brandon, and an attorney can tell you on the call what is needed.",
      },
    ],
    office: {
      heading: "Your claim is handled from Brandon.",
      body: [
        "There is no St. Petersburg office. Our one office is at 745 W Lumsden Rd in Brandon.",
        "You can reach us at any time at 813-738-8650. Please call before coming in, so an attorney can make time for you.",
      ],
    },
    cta: {
      heading: "Talk to us about your crash.",
      body: "Tell us when and where it happened, and we will tell you which deadlines apply. Calls are confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Pinellas Park
  {
    slug: "pinellas-park",
    kind: "community",
    parent: MARKET,
    place: "Pinellas Park",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Pinellas Park Defense and Injury | Hines McCarty Pavlidis",
    metaDescription:
      "Pinellas Park has its own police. See the jail number, 2026 bond amounts, which courtroom comes next, and how to get a Pinellas Park crash report.",
    h1: "Arrested or hurt in Pinellas Park.",
    lead: [
      "Pinellas Park has its own police department, so an arrest or crash report here usually starts at 7700 59th Street North. The court case then moves into the county system, on the same road as the jail.",
      "Below is what to do first, what bond costs, and what comes after. Our office is in Brandon, and we take Pinellas Park cases from there.",
    ],
    firstSteps: {
      heading: "If someone was just arrested in Pinellas Park.",
      intro: "Work through these in order. A judge will decide on release within 24 hours, often before a family has had time to think.",
      items: [
        {
          title: "Find the person in custody",
          body: "Try the Sheriff's Who's In Jail search first. If you cannot find the name, call Inmate Records at 727-464-6415. The city police department's phone is 727-369-7864.",
          source: `${PCSO_JAIL_SOURCE}; ${PPPD_SOURCE}`,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Read the bond table before paying",
          body: "A charge either has a set amount or no bond at all until the hearing. If it has an amount, the Sheriff's bond page lists what the jail will take.",
          link: { href: "#bond", label: "Bond amounts through 2026" },
        },
        {
          title: "Keep the facts private",
          body: "An officer may ask for your side of things, and you can decline. If you are family, leave the details out of your calls and visits until a lawyer is involved.",
        },
        {
          title: "Call us before advisories",
          body: "That is the name for first appearance in this county. A judge sets the release terms there, and the hearing comes within a day of arrest. An early call gives us time to prepare.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "How a Pinellas Park case moves through the courts.",
      intro: "The town has no court of its own for these cases. Here is what the county's orders say about where each kind of charge goes.",
      items: [
        {
          title: "Your police department",
          body: "The Pinellas Park Police Department handles calls in the city, and the county's traffic order lists it by name. Its phone is 727-369-7864. Deputies or troopers can also make an arrest, so read the paperwork.",
          source: `${PPPD_SOURCE}; ${SIXTH_TRAFFIC_SOURCE}`,
        },
        {
          title: "Felony and misdemeanor court",
          body: "Both are heard at the Pinellas County Justice Center, 14250 49th Street North, Clearwater. Felonies go to a circuit section and misdemeanors to a county section. Neither depends on your street or your last name.",
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Traffic charges",
          body: "A non-DUI criminal traffic ticket from a Pinellas Park officer goes to Traffic Court II. A ticket from a Sheriff's deputy goes to Traffic Court I. A DUI skips both and goes to a misdemeanor section.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "A notice to appear",
          body: "If you were given a notice instead of being booked, it should send you to the Justice Center. A misdemeanor notice brings you to an arraignment there, so do not miss the date on it.",
          source: SIXTH_NTA_SOURCE,
        },
        {
          title: "Federal cases",
          body: "A federal charge from Pinellas Park is a Tampa Division case. It is heard at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, in Tampa.",
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Pinellas Park.",
      intro: "Each page explains the Florida law and penalties. They are written around Hillsborough County courts, so your court details are on this page instead.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "If there was a crash with any damage, or you have a past DUI, you wait for a judge. You also get just 10 days from the suspension notice to act on your license.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "The charge depends on the drug and the amount. Enough of it becomes trafficking, which has no bond before first appearance.",
        },
        {
          href: `${STATE}/grand-theft`,
          title: "Grand theft",
          body: "Third degree grand theft with no force sits at $5,000 on the Pinellas schedule, double the 2026 Hillsborough figure.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "You stay in custody until first appearance. After that, a county court case goes to Section R at the Justice Center.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "As a misdemeanor it usually has a set bond. As a felony, the schedule gives you no way out before the hearing.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Pinellas Park crash.",
      intro: "The clock starts on the day of the crash. These are the points people most often need right away.",
      items: [
        {
          title: "Getting the police report",
          body: "Email PoliceReports@pinellaspark.gov, or call the Records Section at 727-369-7836. Within the first 60 days, people in the crash, their lawyers, and their insurers can still get it by filling out a sworn statement form.",
          source: PPPD_SOURCE,
        },
        {
          title: "First care within 14 days",
          body: "Your own policy pays early medical bills only if you are seen within 14 days. Do not wait to see how you feel next week.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Your two-year limit",
          body: "For a crash after 24 March 2023, a negligence suit has to be filed within two years.",
          source: "F.S. 95.11",
        },
        {
          title: "Your share of the fault",
          body: "A finding that you were over 50 percent at fault ends your claim against the other driver. Choose your words with insurers.",
          source: "F.S. 768.81",
        },
        {
          title: "If it becomes a lawsuit",
          body: "A Pinellas suit goes to St. Petersburg or Clearwater by the ZIP code of the lawyer who files it. That means the crash address does not settle it. Our ZIP is on neither list, so ours can be assigned to either.",
          source: SIXTH_CIVIL_SOURCE,
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "More help for a Pinellas Park case.",
      intro: "The two St. Petersburg pages go deeper on Pinellas County courts. The other three are firm-wide practice pages.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in St. Petersburg", body: "Sections, drug court, and bond questions for the whole county." },
        { href: INJURY_HUB, title: "Personal injury in St. Petersburg", body: "Civil courts, amount limits, and claim deadlines in Pinellas." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Charges and investigations heard in the Tampa Division." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial cases, from the first subpoena on." },
        { href: BUSINESS, title: "Business litigation", body: "Contract, ownership, and non-compete disputes." },
      ],
    },
    faq: [
      {
        question: "Is my Pinellas Park case heard in Pinellas Park?",
        answer: "No. State criminal and traffic cases from the city are heard at the Justice Center on 49th Street North. Check your paperwork for the courtroom and time.",
      },
      {
        question: "How do I find a court date?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Can a credit card cover the bond?",
        answer: "Yes, within limits. The jail's AllPaid program takes up to $2,500 per charge. Above that, use a registered bail agent or pay the full amount in cash or by bank check.",
      },
      {
        question: "Which ZIP codes matter in a Pinellas Park injury suit?",
        answer: "If you file with no lawyer, your own ZIP counts. Both 33781 and 33782 are on the St. Petersburg list. With a lawyer, the lawyer's ZIP counts instead.",
      },
    ],
    office: {
      heading: "We have no Pinellas Park office.",
      body: [
        "Our only office is at 745 W Lumsden Rd in Brandon. We take Pinellas Park cases from there.",
        "Call 813-738-8650, day or night. If you want to meet face to face, call first so we can set the time.",
      ],
    },
    cta: {
      heading: "Call about your Pinellas Park case.",
      body: "A short, confidential call can settle what to do next. We answer 24/7.",
    },
  },

  // ------------------------------------------------------------------ Gulfport
  {
    slug: "gulfport",
    kind: "community",
    parent: MARKET,
    place: "Gulfport",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "Gulfport Arrest and Crash Lawyers | Hines McCarty Pavlidis",
    metaDescription:
      "Gulfport has its own police on 53rd Street South. Bond amounts for 2026, the county jail number, the courtroom, and how to get a Gulfport crash report.",
    h1: "After an arrest or crash in Gulfport.",
    lead: [
      "Gulfport keeps its own police department, open around the clock at 2401 53rd Street South. So the officer and the report are local, but the jail and the courtroom are the county's.",
      "This page gives you the numbers to call and the path the case takes. Our office is in Brandon, and we take Gulfport cases from there.",
    ],
    firstSteps: {
      heading: "The first hours after a Gulfport arrest.",
      intro: "A release hearing comes within 24 hours. These four things are worth doing before then.",
      items: [
        {
          title: "Call us first if you can",
          body: "The judge at first appearance, known here as advisories, decides whether the person goes home and on what terms. That can happen before anyone has hired a lawyer, so an early call matters most.",
          source: "Fla. R. Crim. P. 3.130(a)",
        },
        {
          title: "Confirm where they are held",
          body: "Gulfport police can be reached at 727-582-6177, day or night. For someone already booked, call Inmate Records at 727-464-6415 or use the Sheriff's online list.",
          source: `${GULFPORT_SOURCE}; ${PCSO_JAIL_SOURCE}`,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Look up the bond",
          body: "The degree of the charge sets the amount, and some charges have none until the hearing. Find the charge in the county bond table linked below. Then see the Sheriff's page on how to pay.",
          link: { href: POST_BOND_URL, label: "How to post bond (Sheriff's Office)", external: true },
        },
        {
          title: "Do not explain it to anyone",
          body: "That includes officers, jail staff, and relatives on the phone. Nothing said now has to be said at all, and it can be hard to take back later.",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    facts: {
      heading: "Where a Gulfport case is heard.",
      intro: "A Gulfport address does not change the courthouse, but it can change the traffic court. Here is how the pieces fit.",
      items: [
        {
          title: "Criminal court is on 49th Street",
          body: "The county's assignment orders put every criminal section at the Justice Center, 14250 49th Street North, Clearwater. Your paperwork will show the section and the courtroom. That is where you go, felony or misdemeanor.",
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Gulfport tickets",
          body: "Gulfport police citations are assigned by the agency's name to Traffic Court II. That is where non-DUI criminal traffic charges from this department are heard, and that court also sits at the Justice Center.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "A DUI stop",
          body: "A DUI is handled differently from other traffic charges. It goes to one of six misdemeanor sections, picked at random unless you already have a county court case.",
          source: SIXTH_TRAFFIC_SOURCE,
        },
        {
          title: "City ordinance notices",
          body: "A notice for breaking a city ordinance is set in Courtroom 16 at the Justice Center. The order sets it for 1:30 p.m. on the fifth Thursday after it was issued. Go by the date printed on your own notice.",
          source: SIXTH_NTA_SOURCE,
        },
        {
          title: "If agents are involved",
          body: "Federal agents and federal charges fall outside this system. Those cases are heard in Tampa, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    charges: {
      heading: "Charges we defend in Gulfport.",
      intro: "Follow a link for the Florida law and penalties. Those pages talk about Hillsborough County courts, so rely on this page for where you go.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "First offense with no damage: $500 bond under the county schedule. Separately, the license clock gives you 10 days from the notice of suspension.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "If the other person is 65 or older, there is no bond before first appearance, even for a charge that would otherwise have one.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "Family and partner cases wait for the judge. Section R then takes the county court case.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "Felony cases may qualify for diversion or drug court, but the prosecutor's office makes that call.",
        },
        {
          href: `${STATE}/gun-crimes`,
          title: "Gun crimes",
          body: "With a past felony conviction, a gun or ammunition charge means no bond until the hearing.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a Gulfport crash.",
      intro: "Gulfport police keep the report, and state law sets the deadlines.",
      items: [
        {
          title: "Ask Gulfport Records for the report",
          body: "The Records line is 727-893-1041, Monday to Friday, 8:00 a.m. to 4:30 p.m. Have the date, the place, and any report number ready.",
          source: GULFPORT_SOURCE,
        },
        {
          title: "The 14-day medical rule",
          body: "To use the injury benefits in your own policy, get care within 14 days of the crash. Going late can cost you those benefits.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Time limit to sue",
          body: "You have two years for a negligence claim if the crash came after 24 March 2023.",
          source: "F.S. 95.11",
        },
        {
          title: "When fault bars recovery",
          body: "If more than half the fault is yours, Florida law gives you nothing from the other driver. Do not guess when an adjuster asks what happened.",
          source: "F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "Where to read more.",
      intro: "Gulfport cases use the same county courts as St. Petersburg, so those two pages apply here too.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in St. Petersburg", body: "A longer look at Pinellas sections and traffic courts." },
        { href: INJURY_HUB, title: "Personal injury in St. Petersburg", body: "How the county assigns a civil suit, and its dollar limits." },
        { href: FEDERAL, title: "Federal criminal defense", body: "What happens when a case is charged in federal court." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Financial investigations and fraud charges." },
        { href: BUSINESS, title: "Business litigation", body: "Disputes between owners, partners, and companies." },
      ],
    },
    faq: [
      {
        question: "Who do I call for a Gulfport police matter?",
        answer: "Call 911 in an emergency. Otherwise the department's non-emergency line is 727-582-6177. The county's phone list also shows 727-582-6200, where the Sheriff's dispatch can send out Gulfport officers.",
      },
      {
        question: "Where do I look up a Gulfport case?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "What are the ways to post bond?",
        answer: "A registered bail agent, the full amount in cash with a photo ID, or a card for up to $2,500 per charge. Make bank checks and money orders out to the Clerk of the Circuit Court. Personal checks are refused.",
      },
      {
        question: "Would a suit from a Gulfport crash be filed in St. Petersburg?",
        answer: "The downtown Judicial Building is one possibility, not a certainty. In Pinellas County a suit follows the ZIP code of the filing lawyer. Ours is not listed, so it can be assigned to St. Petersburg or Clearwater.",
      },
    ],
    office: {
      heading: "Our one office is in Brandon.",
      body: [
        "The firm has no office in Gulfport. We are at 745 W Lumsden Rd in Brandon, and we take Gulfport cases from there.",
        "Reach us at 813-738-8650 at any time of day. Please call before you make the drive.",
      ],
    },
    cta: {
      heading: "Talk to us about a Gulfport case.",
      body: "If police, an agent, or an insurer has been in touch, call before you answer them. It is confidential, and someone picks up 24/7.",
    },
  },

  // ------------------------------------------------------------------ St. Pete Beach
  {
    slug: "st-pete-beach",
    kind: "community",
    parent: MARKET,
    place: "St. Pete Beach",
    county: "Pinellas County",
    published: true,
    indexable: false,
    metaTitle: "St. Pete Beach Arrests and Injuries | Hines McCarty Pavlidis",
    metaDescription:
      "St. Pete Beach is policed by Sheriff's deputies under contract. Get the jail number, 2026 bond amounts, the courtroom, and how to get a crash report.",
    h1: "St. Pete Beach arrests and crashes: who handles them.",
    lead: [
      "St. Pete Beach has no city police department of its own. It is one of the cities that contract with the Pinellas County Sheriff's Office, so the deputy, the jail, and the crash report all run through the Sheriff.",
      "If you are visiting and do not know the area, this page tells you who to call and where to go. Our office is in Brandon, and we take St. Pete Beach cases from there.",
    ],
    facts: {
      heading: "Who you deal with after a St. Pete Beach arrest.",
      intro: "Because deputies work here under contract, one agency covers much of what follows. The courts are a separate step.",
      items: [
        {
          title: "Sheriff's deputies, under contract",
          body: "The Sheriff's Central District lists St. Pete Beach among its 10 contract cities. Its station is in the Sheriff's building in Largo, so there is no beach-town police desk to go to. For non-emergencies, call 727-582-6200.",
          source: PCSO_PATROL_SOURCE,
        },
        {
          title: "Your court date",
          body: "Felony and misdemeanor cases go to the Justice Center at 14250 49th Street North, Clearwater. Your own home county does not change that, even if you live out of state.",
          source: SIXTH_CRIMINAL_COURTS_SOURCE,
        },
        {
          title: "Tickets from a deputy",
          body: "A non-DUI criminal traffic citation from the Sheriff's Office goes to Traffic Court I, also at the Justice Center. The Clerk aims to set arraignment within 20 days of getting the citation. The Clerk says a criminal traffic charge requires a court appearance, so you cannot simply pay the ticket.",
          source: `${SIXTH_TRAFFIC_SOURCE}; Pinellas County Clerk of the Circuit Court, Criminal Court`,
        },
        {
          title: "On the water",
          body: "The bond schedule treats boating under the influence the same as DUI. It is $500 with no damage and no past DUI or boating case. Wildlife officers' non-DUI citations go to Traffic Court I as well.",
          source: `6th Circuit Administrative Order 2026-036; ${SIXTH_TRAFFIC_SOURCE}`,
        },
        {
          title: "City ordinance notices",
          body: "These are set in Courtroom 16 at the Justice Center. Under the county's order, a municipal notice comes due at 1:30 p.m. on the fifth Thursday after it was written. Check the notice you were given.",
          source: SIXTH_NTA_SOURCE,
        },
        {
          title: "Federal charges",
          body: "Federal charges from the beach go to the Tampa Division, at the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue.",
          source: FEDERAL_TAMPA_SOURCE,
        },
      ],
    },
    firstSteps: {
      heading: "What to do first if someone was arrested on the beach.",
      intro: "This matters even more if you are from out of town. The hearing on release comes within 24 hours, wherever you live.",
      items: [
        {
          title: "Search the jail list",
          body: "Deputies usually book adults into the Pinellas County Jail, 14400 49th Street North, Clearwater. It is not on the beach. Search online, or phone Inmate Records at 727-464-6415.",
          source: PCSO_JAIL_SOURCE,
          link: { href: WHOS_IN_JAIL_URL, label: "Who's In Jail (Sheriff's Office)", external: true },
        },
        {
          title: "Check bond before you wire money",
          body: "Do not send money to anyone until you know a bond is open. Many charges have no amount until a judge has ruled.",
          link: { href: "#bond", label: "Bond amounts through 2026" },
        },
        {
          title: "Plan for the hearing",
          body: "Advisories run at the Justice Center, and on weekends and holidays from 8:30 a.m. to about noon. To be sure of the place, call State Attorney Dispatch at 727-464-6221 before you drive there.",
          source: `Fla. R. Crim. P. 3.130(a); ${SIXTH_ADVISORY_SOURCE}`,
        },
        {
          title: "Leave the story out of it",
          body: "A deputy may ask what happened, and you are allowed to say nothing. Friends and family should not ask either. Let a lawyer hear it first.",
        },
      ],
    },
    deadlines: PINELLAS_DEADLINES,
    charges: {
      heading: "Charges we defend in St. Pete Beach.",
      intro: "The linked pages cover Florida law and penalties, and they are written around Hillsborough County courts. For your court details, use this page.",
      items: [
        {
          href: `${STATE}/dui`,
          title: "DUI",
          body: "A prior DUI, a diversion, or a reduced charge all rule out the $500 bond. So does any damage. The license clock is 10 days from the suspension notice, and an out-of-state driver should ask about it too.",
        },
        {
          href: `${STATE}/battery`,
          title: "Battery",
          body: "If force is involved in a misdemeanor, the schedule puts bond at $250 or $1,000 depending on degree. Felony battery has to wait for the judge.",
        },
        {
          href: `${STATE}/drug-possession`,
          title: "Drug possession",
          body: "What the substance is and how much you had decide the charge. Trafficking amounts mean no release before first appearance.",
        },
        {
          href: `${STATE}/domestic-violence`,
          title: "Domestic violence",
          body: "Being on vacation changes nothing here. There is no bond before first appearance, and the case goes to one county section.",
        },
        {
          href: `${STATE}/sex-crimes`,
          title: "Sex crimes",
          body: "Sexual battery, lewd conduct, and exposure charges all wait for a judge. Do not speak with detectives before you have a lawyer.",
        },
      ],
    },
    injury: {
      heading: "If you were hurt in a St. Pete Beach crash.",
      intro: "The Sheriff's Office runs an online system for its own crash reports, which is handy if you have already gone home.",
      items: [
        {
          title: "Get the report online",
          body: "Go to pinellassheriff.gov/crash-reports with the number the deputy gave you, the crash date, and a driver's last name. Reports can take several days or weeks to appear, so try again after two weeks. Records is at 727-582-6281.",
          source: PCSO_CRASH_SOURCE,
        },
        {
          title: "14 days for first treatment",
          body: "This applies to Florida policies. Without care in that time, your own insurance may not pay. If you live elsewhere, ask us how your coverage fits.",
          source: "F.S. 627.736(1)(a)",
        },
        {
          title: "Two years to bring a suit",
          body: "That is the limit for negligence when the crash came after 24 March 2023. Keep the date in mind after you go home.",
          source: "F.S. 95.11",
        },
        {
          title: "Fault over 50 percent",
          body: "At that point you can recover nothing from the other side. Be careful with what you tell any insurance adjuster.",
          source: "F.S. 768.81",
        },
      ],
      links: carLinks,
    },
    practices: {
      heading: "Other pages that may help.",
      intro: "The county's courts are covered in more depth on the St. Petersburg pages.",
      items: [
        { href: CRIMINAL_HUB, title: "Criminal defense in St. Petersburg", body: "More on Pinellas sections, drug court, and bond." },
        { href: INJURY_HUB, title: "Personal injury in St. Petersburg", body: "Civil court limits and how a Pinellas suit is assigned." },
        { href: FEDERAL, title: "Federal criminal defense", body: "Federal cases from Pinellas County, heard in Tampa." },
        { href: WHITE_COLLAR, title: "White-collar defense", body: "Fraud and financial matters, state or federal." },
        { href: BUSINESS, title: "Business litigation", body: "Contract and ownership disputes for companies." },
      ],
    },
    faq: [
      {
        question: "Does St. Pete Beach have its own police?",
        answer: "No. It contracts with the Pinellas County Sheriff's Office, whose deputies respond to calls here. Nearby Treasure Island does have its own department, so check which town you were in.",
      },
      {
        question: "I live in another state. Do I have to come back for court?",
        answer: "You should plan on it unless a lawyer tells you otherwise. Missing court can lead to a warrant, and being arrested for missing court while on bail means no bond until a judge sees you. Call us before you leave Florida if you can.",
      },
      {
        question: "How do I track the case from home?",
        answer: PINELLAS_CASE_LOOKUP_ANSWER,
      },
      {
        question: "Can someone pay my bond from out of state?",
        answer: "The jail's AllPaid program takes a credit or debit card online for up to $2,500 per charge, using the inmate's name and booking number from Who's In Jail. Larger amounts need a registered bail agent or cash in full.",
      },
    ],
    office: {
      heading: "Our office is in Brandon, not on the beach.",
      body: [
        "We have no office in St. Pete Beach or anywhere in Pinellas County. The firm's only office is at 745 W Lumsden Rd in Brandon.",
        "Call 813-738-8650 from anywhere, at any hour. An attorney can talk it through by phone, and you can set a time if you want to meet.",
      ],
    },
    cta: {
      heading: "Call, even if you are already home.",
      body: "A St. Pete Beach case keeps moving after you leave. Calls are confidential and answered 24/7.",
    },
  },

  // ------------------------------------------------------------------ Treasure Island

  // ------------------------------------------------------------------ Kenneth City
];
