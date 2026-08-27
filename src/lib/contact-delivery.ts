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
 * forget. Reading it from the environment means setting RESEND_API_KEY and
 * CONTACT_FROM_EMAIL in the build environment flips all three at once, with no
 * code change, which is the same pattern the charge pages and guides already
 * use with their `published` flag.
 *
 * [NEEDS: verified Resend domain] SITE.md launch blocker.
 * [NEEDS: confirmed intake address] firm.email is still a placeholder, and it
 * is the `to` address. Delivery being ON does not mean it reaches the right
 * inbox; this module only knows whether Resend can send at all.
 */

export type ContactDelivery = { apiKey: string; from: string };

/** The Resend credentials, or null when either is missing. */
export function contactDelivery(): ContactDelivery | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  return apiKey && from ? { apiKey, from } : null;
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
