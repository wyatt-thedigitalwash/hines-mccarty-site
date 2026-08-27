import Link from "next/link";
import {
  type Attorney,
  attorneyTrail,
  firm,
  practiceAreaIndex,
} from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Needs from "@/components/Needs";
import Portrait from "./Portrait";
import CallToAction from "@/components/CallToAction";
import CredentialStrip from "@/components/CredentialStrip";
import { attorneyMarks } from "@/lib/site";

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
    <section data-bg="navy" className="bg-navy pt-36 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-24">
        <Breadcrumbs trail={attorneyTrail(attorney)} />

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

      {/* Credential strip on the hero's bottom edge. Full bleed, so the bottom
          padding lives on the content wrapper above rather than on the section,
          which would inset the strip. */}
      {/* This attorney's marks, not the firm's eight. See attorneyMarks. */}
      <CredentialStrip marks={attorneyMarks(attorney)} />
    </section>
  );
}

/* Section 2. What this attorney handles and how they work a case. */
export function BioOverview({ attorney }: { attorney: Attorney }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
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
  // Resolved against practiceAreaIndex, not `capabilities`. The latter is the
  // three criminal silos, so it silently dropped /personal-injury and erased
  // an attorney's second practice from his own bio.
  const areas = (attorney.practiceAreaHrefs ?? [])
    .map((href) => practiceAreaIndex.find((c) => c.href === href))
    .filter((c): c is (typeof practiceAreaIndex)[number] => Boolean(c));

  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
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
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Credentials
        </h2>

        <dl className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          {/* The Bar number renders only when known. "The Florida Bar, No.
              undefined" is worse than no number at all, and an admission year
              on its own is still a complete, true statement. */}
          <Field label="Bar admission">
            {c?.barAdmission ? (
              <>
                The Florida Bar
                {c.barAdmission.number ? `, No. ${c.barAdmission.number}` : ""}
                <span className="block text-navy/65">
                  Admitted {c.barAdmission.admitted}
                </span>
              </>
            ) : (
              <Needs>Florida Bar number and admission date</Needs>
            )}
          </Field>

          {/* Board certification. Rendered above education and prior roles in
              source order so it reads early in the list, and only when held:
              there is no [NEEDS] branch, because most lawyers are not
              certified and marking its absence would imply the credential is
              missing rather than simply not applicable. */}
          {c?.boardCertifications?.length ? (
            <Field label="Board certification">
              <ul className="space-y-2">
                {c.boardCertifications.map((cert) => (
                  <li key={cert.area}>
                    The Florida Bar, {cert.area}
                    {cert.since && (
                      <span className="block text-navy/65">
                        Certified since {cert.since}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Field>
          ) : null}

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
    <CallToAction heading="Talk to an attorney about your case." tone="white" />
  );
}
