/**
 * The firm's to-do list for listings, links and reviews (D127), shown at the
 * unlisted /hmp-tasks-k7x2. Research 2026-10-13; see docs/seo/.
 */
export type Task = { id: string; title: string; links?: [string, string][] };
export type TaskGroup = { id: string; title: string; items: Task[] };

const BAR: [string, string] = ["Florida Bar login", "https://member.floridabar.org/"];
const AVVO: [string, string] = ["Avvo: claim profile", "https://www.avvo.com/for-lawyers/avvo-profile"];
const JUSTIA: [string, string] = ["Justia: get listed", "https://lawyers.justia.com/lawyer-directory-listings"];
export const FIRM_TASKS: TaskGroup[] = [
  { id: "lily", title: "Lily", items: [
    { id: "l-bar", title: "Florida Bar: add the firm name and website", links: [BAR] },
    { id: "l-avvo", title: "Avvo: change your firm and address (keep your 25 reviews)", links: [["Your Avvo", "https://www.avvo.com/attorneys/33602-fl-lily-mccarty-1272927.html"], AVVO] },
    { id: "l-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    { id: "l-nacdl", title: "Join NACDL and add the website to your profile ($364/yr)", links: [["NACDL", "https://www.nacdl.org/findalawyer"]] },
    { id: "l-hcacdl", title: "HCACDL: ask the board if member listings can link to websites", links: [["HCACDL members", "https://www.hcacdl.org/member-directory/"]] },
    { id: "l-fsu", title: "FSU Law: send a class note about the new firm", links: [["FSU class note", "https://law.fsu.edu/alumni/submit-class-note"]] },
  ]},
  { id: "maria", title: "Maria", items: [
    { id: "m-bar", title: "Florida Bar: change Tampa to the Brandon address, phone and firm name", links: [BAR] },
    { id: "m-pavlidis", title: "Close the old Pavlidis Law Google listing and point pavlidislawfirm.com to the new site", links: [["Google Business Profile", "https://business.google.com/"]] },
    { id: "m-avvo", title: "Avvo: change your firm and address", links: [["Your Avvo", "https://www.avvo.com/attorneys/33602-fl-maria-pavlidis-1272809.html"], AVVO] },
    { id: "m-lawyerscom", title: "Lawyers.com: change Tampa to Brandon", links: [["Update form", "https://www.martindale.com/update-profile/"]] },
    { id: "m-experience", title: "Experience.com: update or remove the old Pavlidis Law profile", links: [["Your profile", "https://www.experience.com/reviews/maria-7932190"]] },
    { id: "m-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    { id: "m-nacdl", title: "Join NACDL and add the website to your profile ($364/yr)", links: [["NACDL", "https://www.nacdl.org/findalawyer"]] },
  ]},
  { id: "david", title: "David", items: [
    { id: "d-bar", title: "Florida Bar: update the firm name, add the website", links: [BAR] },
    { id: "d-avvo", title: "Avvo: update the firm name", links: [["Your Avvo", "https://www.avvo.com/attorneys/33511-fl-david-hines-5288849.html"], AVVO] },
    { id: "d-martindale", title: "Martindale: add the firm, phone and website", links: [["Update form", "https://www.martindale.com/update-profile/"]] },
    { id: "d-justia", title: "Justia: create your free profile", links: [JUSTIA] },
    { id: "d-stetson", title: "Stetson: mail a note about the new firm to Alumni Engagement, 1401 61st St. S, Gulfport, FL 33707" },
  ]},
  { id: "colton", title: "Colton", items: [
    { id: "c-bar", title: "Florida Bar: add the firm name, main phone and website", links: [BAR] },
    { id: "c-duidla", title: "DUIDLA: add the website to your member profile", links: [["DUIDLA", "https://duidla.org/directory/"]] },
    { id: "c-justia", title: "Justia: change Rhino Lawyers to the new firm", links: [["Your Justia", "https://lawyers.justia.com/lawyer/colton-trina-1812075"]] },
    { id: "c-avvo", title: "Avvo: create your free profile", links: [AVVO] },
    { id: "c-siu", title: "SIU Law: submit an alumni highlight", links: [["SIU form", "https://law.siu.edu/alumni-support/alumni-highlights.php"]] },
  ]},
  { id: "office", title: "Office", items: [
    { id: "o-name", title: "Confirm the exact firm name with the Florida Bar", links: [["Sunbiz", "https://search.sunbiz.org/"]] },
    { id: "o-google", title: "Google: rename the listing, add categories and photos", links: [["Google Business Profile", "https://business.google.com/"]] },
    { id: "o-apple", title: "Apple Maps: claim the listing", links: [["Apple Business Connect", "https://business.apple.com/"]] },
    { id: "o-facebook", title: "Facebook: keep one page, use the new name", links: [["Page 1", "https://www.facebook.com/547898668412988"], ["Page 2", "https://www.facebook.com/61573377995254"]] },
    { id: "o-linkedin", title: "LinkedIn: create a company page", links: [["Create", "https://www.linkedin.com/company/setup/new/"]] },
    { id: "o-yelp", title: "Yelp: claim or add the firm", links: [["Yelp", "https://biz.yelp.com/claim"]] },
    { id: "o-findlaw", title: "FindLaw: fix or remove the old McCarty Gonzalez & Pavlidis listing", links: [["The listing", "https://lawyers.findlaw.com/florida/tampa/4871907_1/"], ["How to claim", "https://profileupdate.findlaw.com/help/finding-and-claiming-a-profile/"]] },
    { id: "o-chamber", title: "Chamber: ask them to change \"The Hines Law Firm\" to the new name. Call (813) 234-5944" },
    { id: "o-featured", title: "Featured.com: sign one attorney up (free)", links: [["Sign up", "https://featured.com/signup"]] },
    { id: "o-qwoted", title: "Qwoted: sign one attorney up (free)", links: [["Sign up", "https://app.qwoted.com/users/sign_up"]] },
    { id: "o-sponsor", title: "Sponsor one local team (from $500). Email sponsorship@valricorams.org", links: [["Valrico Rams", "https://www.valricorams.com/"]] },
    { id: "o-domains", title: "Keep hinesmccarty.com and hines-lawfirm.com renewed" },
  ]},
];
