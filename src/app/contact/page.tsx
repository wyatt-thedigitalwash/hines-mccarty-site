import type { Metadata } from "next";
import { firm, publishedOffices, siteUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/schema";
import { contactCanDeliver } from "@/lib/contact-delivery";
import PageHero from "@/components/PageHero";
import { SITE_HERO_PHOTO } from "@/lib/hero-photos";
import ContactForm from "@/components/contact/ContactForm";

/**
 * Contact. Every call to action on the site points here, so it is the most
 * linked page on the domain.
 *
 * THE PHONE COMES FIRST AND THE FORM SECOND, deliberately. The useful action is
 * almost always a call, and the form is the fallback for someone who cannot
 * speak freely where they are.
 *
 * WHAT THE 2026-08-27 PASS CHANGED:
 *
 *   1. THE PAGE SPOKE ONLY TO CRIMINAL CLIENTS. The meta title said "Criminal
 *      Defense in Brandon FL" and the closing note told the reader to call if
 *      they had been "arrested or contacted by investigators". Half the firm's
 *      practice is people hurt in collisions, and this is the page every call
 *      to action on the injury side points at.
 *
 *   2. noindex WAS HARDCODED true, under a comment reading "until Resend is
 *      configured". No code could act on that sentence, so the page would have
 *      stayed out of the index until somebody remembered. It is now derived
 *      from whether delivery is actually configured, and the sitemap reads the
 *      same function, so setting RESEND_API_KEY and CONTACT_FROM_EMAIL flips
 *      the metadata, the sitemap and the server action together.
 *
 *   3. THE FORM'S OUTAGE WAS ONLY VISIBLE AFTER SUBMITTING. Someone in a crisis
 *      typed their details, pressed send, and only then learned the form could
 *      not deliver. The notice now renders above it, from the server, before
 *      anything is typed.
 *
 *   4. NO STRUCTURED DATA. The most linked page on the domain, carrying the
 *      firm's name, address and phone, emitted none. It now emits ContactPage
 *      wrapping the same LegalService entity /about uses, so the NAP a reader
 *      sees and the NAP a machine reads come from one source.
 *
 * [NEEDS: verified Resend domain] and [NEEDS: confirmed intake address] before
 * the form can deliver. See src/app/contact/actions.ts.
 */
export const metadata: Metadata = pageMetadata({
  title: "Contact | Hines McCarty Pavlidis, Brandon FL",
  description:
    "Reach Hines McCarty Pavlidis in Brandon, Florida. Call (813) 738-8650 or send a message and we will arrange a confidential conversation.",
  path: "/contact",
  // Derived, not declared. A contact page whose form cannot deliver should not
  // be the result someone lands on from a search, but the condition is now a
  // fact the build can read rather than a sentence someone has to remember.
  noindex: !contactCanDeliver(),
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contact#page`,
  url: `${siteUrl}/contact`,
  name: "Contact",
  description:
    "Reach Hines McCarty Pavlidis in Brandon, Florida, by phone or by message.",
  // The same LegalService entity /about wraps, by the same reasoning: the
  // address, phone and areas served are asserted once, in one place, and every
  // page that needs them references that rather than restating them.
  mainEntity: organizationJsonLd(),
};

export default function ContactPage() {
  const canDeliver = contactCanDeliver();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <PageHero title="Contact" photo={SITE_HERO_PHOTO}>
        <p>
          The fastest way to reach the firm is by phone. If you cannot speak
          freely right now, send a message and we will arrange a time.
        </p>
        <a
          href={firm.phoneHref}
          className="mt-10 inline-flex items-center bg-bronze px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft"
        >
          Call {firm.phone}
        </a>
      </PageHero>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Send a message
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal">
                Tell us how to reach you. We will follow up to arrange a
                confidential conversation about the matter.
              </p>

              {/*
                BEFORE THE FORM, NOT AFTER THE SUBMIT. The server action already
                refuses to report success for a message nobody received, which
                is the right behaviour and the wrong moment: someone in a crisis
                had to type their name, their number and what happened to them
                before the page admitted it could not send any of it. This
                renders from the server, so the page is honest before a key is
                pressed. It disappears on its own when delivery is configured.
              */}
              {!canDeliver && (
                <p
                  role="status"
                  className="mt-8 max-w-xl border-l-2 border-bronze bg-bronze/10 px-5 py-4 leading-relaxed text-navy"
                >
                  This form is not able to send messages yet. Please call{" "}
                  <a
                    href={firm.phoneHref}
                    className="font-medium underline decoration-1 underline-offset-4 hover:text-bronze"
                  >
                    {firm.phone}
                  </a>{" "}
                  and we will take your details over the phone.
                </p>
              )}

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:pt-4">
              {/* Renders every published office, so Tampa appears the moment
                  its address is confirmed. Rule 4-7.12 requires the firm name
                  and a bona fide office location. */}
              {publishedOffices.map((office) => (
                <div
                  key={office.key}
                  className="border-t border-navy/15 pt-8 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display text-2xl leading-tight">
                    {office.label} office
                  </h3>
                  <address className="mt-4 not-italic leading-relaxed text-charcoal">
                    <span className="block font-medium text-navy">
                      {firm.legalName}
                    </span>
                    {office.street && <span className="block">{office.street}</span>}
                    {office.suite && <span className="block">{office.suite}</span>}
                    <span className="block">
                      {office.city}, {office.state} {office.zip}
                    </span>
                  </address>
                  {office.phone && office.phoneHref && (
                    <a
                      href={office.phoneHref}
                      className="mt-4 inline-block font-display text-2xl font-extrabold text-navy transition-colors hover:text-bronze"
                    >
                      {office.phone}
                    </a>
                  )}
                  {office.hours && (
                    <p className="mt-3 text-sm text-navy/60">{office.hours}</p>
                  )}
                </div>
              ))}

              <p className="mt-10 border-t border-navy/15 pt-8 text-sm leading-relaxed text-navy/70">
                If you or someone you care about has been arrested, contacted by
                investigators, or hurt in a collision, call rather than write. A
                conversation with an attorney is protected in a way that a web
                form is not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
