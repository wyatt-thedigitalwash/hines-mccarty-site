import Link from "next/link";
import { type Attorney, capabilities, firm } from "@/lib/site";
import Needs from "./Needs";
import Portrait from "./Portrait";
import OfficeBlock from "./OfficeBlock";

/**
 * The five sections of an attorney bio. One template drives all four bios; a
 * bio is a data entry in `attorneys`, never a hardcoded component.
 *
 * Placeholder rule: an unconfirmed attorney renders a visible [NEEDS] marker
 * for each missing field. A confirmed attorney omits the field entirely, so a
 * publishable bio never shows scaffolding.
 */

/* Section 1. Name, role, portrait, concentration, call CTA. */
export function BioHeader({ attorney }: { attorney: Attorney }) {
  return (
    <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Link
          href="/attorneys"
          className="font-heading text-sm uppercase tracking-wide text-linen/60 transition-colors hover:text-bronze"
        >
          Our Attorneys
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <Portrait
            attorney={attorney}
            className="aspect-4/5 w-full max-w-sm"
            sizes="(min-width: 1024px) 22rem, 90vw"
            priority
          />

          <div className="lg:pt-4">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl lg:text-6xl">
              {attorney.name}
            </h1>

            {/* No role label renders until the client confirms it. For Maria
                Pavlidis that is gated on her relationship to the firm
                (WEBSITE-PLAN.md Open Question 2a). */}
            <p className="mt-4 font-heading text-sm uppercase tracking-wide text-bronze">
              {attorney.role ?? <Needs>role and title</Needs>}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-linen/70">
              {attorney.concentration ?? <Needs>one-line concentration</Needs>}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* [NEEDS: confirm the firm number accepts text messages] before
                  this label ships. If the line is voice only, "Call or Text"
                  advertises a capability the firm does not have (R. 4-7.13). */}
              <a
                href={firm.phoneHref}
                className="inline-flex items-center border border-bronze px-8 py-4 font-heading text-sm font-semibold uppercase text-bronze transition-colors hover:bg-bronze hover:text-navy"
              >
                Call or Text {firm.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section 2. What this attorney handles and how they work a case. */
export function BioOverview({ attorney }: { attorney: Attorney }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Overview
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal">
          {attorney.overview?.length ? (
            attorney.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))
          ) : (
            <p>
              <Needs>
                bio overview, what this attorney handles and how they work a
                case
              </Needs>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* Section 3. Reciprocal with the HandledBy block on the practice pages. */
export function BioPracticeAreas({ attorney }: { attorney: Attorney }) {
  const areas = (attorney.practiceAreaHrefs ?? [])
    .map((href) => capabilities.find((c) => c.href === href))
    .filter((c): c is (typeof capabilities)[number] => Boolean(c));

  return (
    <section data-bg="linen" className="bg-linen py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Practice areas
        </h2>

        {areas.length ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <li key={area.key}>
                <Link
                  href={area.href}
                  className="group flex h-full flex-col border border-navy/20 bg-white px-6 py-5 transition-colors hover:border-navy"
                >
                  <span className="font-display text-2xl leading-tight transition-colors group-hover:text-bronze">
                    {area.title}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-navy/65">
                    {area.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8">
            <Needs>which practice areas this attorney leads</Needs>
          </p>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="eyebrow text-navy/50">{label}</dt>
      <dd className="mt-3 leading-relaxed text-charcoal">{children}</dd>
    </div>
  );
}

/* Section 4. Facts only. Nothing renders that is not confirmed. */
export function BioCredentials({ attorney }: { attorney: Attorney }) {
  const c = attorney.credentials;

  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Credentials
        </h2>

        <dl className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          <Field label="Bar admission">
            {c?.barAdmission ? (
              <>
                The Florida Bar, No. {c.barAdmission.number}
                <span className="block text-navy/65">
                  Admitted {c.barAdmission.admitted}
                </span>
              </>
            ) : (
              <Needs>Florida Bar number and admission date</Needs>
            )}
          </Field>

          <Field label="Courts">
            {c?.courts?.length ? (
              <ul>
                {c.courts.map((court) => (
                  <li key={court}>{court}</li>
                ))}
              </ul>
            ) : (
              <Needs>courts admitted to</Needs>
            )}
          </Field>

          <Field label="Education">
            {c?.education?.length ? (
              <ul className="space-y-3">
                {c.education.map((e) => (
                  <li key={e.school}>
                    {e.credential}
                    {e.year ? `, ${e.year}` : ""}
                    <span className="block text-navy/65">{e.school}</span>
                    {e.detail && (
                      <span className="block text-sm text-navy/65">
                        {e.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <Needs>education, school, degree, year</Needs>
            )}
          </Field>

          <Field label="Prior roles">
            {c?.priorRoles?.length ? (
              <ul className="space-y-2">
                {c.priorRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            ) : (
              <Needs>prior roles</Needs>
            )}
          </Field>

          {/* Memberships render only when confirmed. An unconfirmed membership
              is not a credential, and on a confirmed bio the section is omitted
              rather than marked. */}
          {c?.memberships?.length ? (
            <Field label="Memberships">
              <ul className="space-y-2">
                {c.memberships.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Field>
          ) : (
            !attorney.confirmed && (
              <Field label="Memberships">
                <Needs>memberships</Needs>
              </Field>
            )
          )}
        </dl>
      </div>
    </section>
  );
}

/* Section 5. Consultation CTA and the NAP block (Rule 4-7.12). */
export function BioClose() {
  return (
    <section data-bg="navy" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl leading-tight text-linen sm:text-4xl">
              Talk to an attorney about your case.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center border border-bronze px-8 py-4 font-heading text-sm font-semibold uppercase text-bronze transition-colors hover:bg-bronze hover:text-navy"
              >
                Request a consultation
              </Link>
              <a
                href={firm.phoneHref}
                className="font-display text-2xl font-extrabold text-linen transition-colors hover:text-bronze"
              >
                {firm.phone}
              </a>
            </div>
          </div>
          <OfficeBlock tone="dark" />
        </div>
      </div>
    </section>
  );
}
