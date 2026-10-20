/**
 * Content checks for the contact forms (D139). Pure functions, no outside
 * service. They catch the mass-produced submissions that get past the bot
 * checks: SEO and marketing pitches, link drops, messages in a script the
 * firm does not practise in, throwaway inboxes, and repeats.
 *
 * Kept narrow on purpose. A false positive here loses a real client, so
 * nothing matches words a person in trouble would use ("loan", "fraud",
 * "investment" all appear in real enquiries: PPP loan fraud is a practice).
 */

/** Phrases that only appear in sales pitches and spam, never in a legal enquiry. */
const PITCH = [
  "backlink", "back link", "guest post", "seo service", "search engine optimization",
  "rank higher", "first page of google", "page 1 of google", "web design", "website redesign",
  "redesign your website", "lead generation", "more leads", "grow your business", "marketing agency",
  "digital marketing", "social media marketing", "virtual assistant", "outsourc", "white label",
  "casino", "betting", "viagra", "cialis", "porn", "onlyfans", "crypto signal", "forex signal",
  "unsubscribe", "opt out", "free trial", "limited time offer", "click here", "app development",
  "chatgpt", "ai chatbot for your", "increase your traffic", "domain authority",
];

/** Throwaway inbox providers. */
const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "10minutemail.com", "tempmail.com",
  "temp-mail.org", "yopmail.com", "sharklasers.com", "getnada.com", "trashmail.com", "dispostable.com",
  "maildrop.cc", "throwawaymail.com", "fakeinbox.com", "mintemail.com", "mohmal.com", "emailondeck.com",
]);

const URL_RE = /\b(?:https?:\/\/|www\.)\S+|\b[a-z0-9-]+\.(?:com|net|org|io|co|ru|cn|xyz|top|info|biz|shop|site|online)\b/gi;

/** Share of letters outside Latin script (Cyrillic, CJK, Arabic and so on). */
function foreignScriptShare(text: string): number {
  const letters = text.match(/\p{L}/gu) ?? [];
  if (letters.length < 12) return 0;
  const nonLatin = letters.filter((ch) => !/\p{Script=Latin}/u.test(ch)).length;
  return nonLatin / letters.length;
}

export type SpamInput = { name: string; email: string; phone: string; note: string };

/** A short reason when the submission looks like spam, otherwise null. */
export function spamReason({ name, email, phone, note }: SpamInput): string | null {
  const all = `${name} ${note}`.toLowerCase();
  if (URL_RE.test(name)) return "link in name";
  URL_RE.lastIndex = 0;
  if (/@|https?:/i.test(name) || name.length > 80) return "odd name";
  const links = note.match(URL_RE)?.length ?? 0;
  URL_RE.lastIndex = 0;
  if (links >= 2) return "links in message";
  if (PITCH.some((p) => all.includes(p))) return "sales pitch";
  if (foreignScriptShare(`${name} ${note}`) > 0.3) return "foreign script";
  const domain = email.split("@")[1]?.toLowerCase();
  if (domain && DISPOSABLE.has(domain)) return "disposable email";
  if (/(.)\1{6,}/.test(phone.replace(/\D/g, ""))) return "fake phone";
  return null;
}

/**
 * Repeats within a day (see repeatKeys). Kept in memory,
 * so on serverless it is per instance and resets on a cold start; a brake,
 * not a guarantee.
 */
const seen = new Map<string, number>();
const DAY = 24 * 60 * 60 * 1000;

// An exact resend only: the same phone and the same message, or the same long
// message from anyone (a blast). A person writing again with something new
// still gets through.
function repeatKeys({ phone, note }: SpamInput): string[] {
  const digits = phone.replace(/\D/g, "");
  const msg = note.toLowerCase().replace(/\s+/g, " ").trim().slice(0, 200);
  return [`pn:${digits}|${msg}`, msg.length > 40 && `n:${msg}`].filter(Boolean) as string[];
}

/** True when this phone, email or message was already sent today. */
export function isRepeat(input: SpamInput): boolean {
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > DAY) seen.delete(k);
  return repeatKeys(input).some((k) => seen.has(k));
}

/** Record a submission once it has actually been sent. */
export function remember(input: SpamInput): void {
  if (seen.size > 5000) seen.clear();
  const now = Date.now();
  for (const k of repeatKeys(input)) seen.set(k, now);
}
