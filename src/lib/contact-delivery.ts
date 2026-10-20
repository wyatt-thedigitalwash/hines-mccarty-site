/**
 * Whether the contact form can actually send mail.
 *
 * SERVER ONLY. `contactDelivery()` returns the Resend credentials, so this
 * module must never be imported from a client component. The one client
 * component on the contact page, ContactForm, does not import it: it learns
 * the answer as a prop from the server component that renders it. The
 * `server-only` package is not installed here, so that rule is a comment and a
 * convention rather than a build error.
 *
 * WHY IT EXISTS AT ALL. Three places need to know this and each used to decide
 * it for itself, or not at all:
 *
 *   1. the server action, which must refuse to report success for a message
 *      nobody received;
 *   2. the page's metadata, which was hardcoded `noindex: true` with a comment
 *      saying "until Resend is configured", a sentence no code could act on;
 *   3. the sitemap, which listed /contact nowhere for the same reason.
 *
 * A launch condition written in three prose comments is three chances to
 * forget. Reading it from the environment means setting RESEND_API_KEY,
 * CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL in the build environment flips all
 * three at once, with no
 * code change, which is the same pattern the charge pages and guides already
 * use with their `published` flag.
 *
 * Sending domain: thedigitalwash.com, already verified in Resend (D83), so
 * the firm's own domain needs no DNS records for the form.
 * The inbox is CONTACT_TO_EMAIL (D83), not firm.email, so delivery is on only
 * once someone has named the inbox that receives enquiries.
 */

export type ContactDelivery = { apiKey: string; from: string; to: string[] };

/**
 * The Resend credentials and the inbox, or null when any is missing.
 *
 * D83: the destination is a setting too (CONTACT_TO_EMAIL). It used to be
 * firm.email, a placeholder, so a configured key would have sent every
 * enquiry to an address nobody confirmed. Now the form sends only when all
 * three are set; see .env.example.
 */
export function contactDelivery(): ContactDelivery | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  // D139: a comma-separated list; every address gets each inquiry.
  const to = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
  return apiKey && from && to.length ? { apiKey, from, to } : null;
}

/**
 * The same question as a boolean, for the page and the sitemap.
 *
 * A FUNCTION RATHER THAN A CONSTANT, deliberately. A module-level constant is
 * evaluated once when the module is first imported, which in a long-lived
 * server process means the answer is frozen at whatever the environment looked
 * like then. This is cheap to call and cannot go stale.
 */
export const contactCanDeliver = (): boolean => contactDelivery() !== null;
