import type { Metadata } from "next";
import { firm, publishedOffices } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import PageHero, { HERO_PHOTO } from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";

/**
 * Contact. Every call to action on the site points here, so it is the most
 * linked page on the domain and was 404ing until now.
 *
 * The phone comes first and the form second, deliberately. In criminal defense
 * the useful action is almost always a call, and a form is the fallback for
 * someone who cannot speak freely where they are.
 *
 * [NEEDS: verified Resend domain] and [NEEDS: confirmed intake address] before
 * the form can actually deliver. Until then it validates and then tells the
 * sender to call, rather than reporting success for a message nobody received.
 * See src/app/contact/actions.ts.
 */
export const metadata: Metadata = pageMetadata({
  title: "Contact | Hines & McCarty, Criminal Defense in Brandon FL",
  description:
    "Reach Hines & McCarty in Brandon, Florida. Call (813) 738-8650 or send a message and we will arrange a confidential conversation.",
  path: "/contact",
  // The form cannot deliver until Resend is configured.
  noindex: true,
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" photo={HERO_PHOTO}>
        <p>
          The fastest way to reach the firm is by phone. If you cannot speak
          freely right now, send a message and we will arrange a time.
        </p>
        <a
          href={firm.phoneHref}
          className="mt-10 inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
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
                If you or someone you care about has been arrested or contacted
                by investigators, call rather than write. A conversation with an
                attorney is protected in a way that a web form is not.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
