import Link from "next/link";
import type { LocationPage } from "@/lib/locations";

/**
 * The guidance sections of a location page (D153): the first day, bond, the
 * clocks, charges and questions. Each sets data-bg for the house spacing rule.
 */
const H2 = "font-display font-semibold text-4xl leading-tight sm:text-5xl";
const LEAD = "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal";
const LEAD_DARK = "mt-6 max-w-3xl text-lg leading-relaxed text-linen/70";

export function FirstStepsSection({ steps }: { steps: NonNullable<LocationPage["firstSteps"]> }) {
  return (
    <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{steps.heading}</h2>
        <p className={LEAD_DARK}>{steps.intro}</p>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {steps.items.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-linen/[0.06] p-8 lg:p-10">
              <span aria-hidden="true" className="font-display text-4xl leading-none text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{s.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-linen/75">{s.body}</p>
              {s.link ? (
                <a
                  href={s.link.href}
                  {...(s.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-6 self-start font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                >
                  {s.link.label}
                  {s.link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </a>
              ) : null}
              {s.source ? (
                <p className="mt-6 border-t border-linen/10 pt-4 text-sm text-linen/60">
                  <span className="eyebrow">Source</span> {s.source}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BondSection({ bond }: { bond: NonNullable<LocationPage["bond"]> }) {
  return (
    <section id="bond" data-bg="white" className="scroll-mt-28 bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{bond.heading}</h2>
        <p className={LEAD}>{bond.intro}</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <table className="w-full self-start border-collapse text-left">
            <thead>
              <tr className="border-b border-navy/30 font-heading text-sm">
                <th scope="col" className="py-3 pr-6 font-semibold">If you are arrested for</th>
                <th scope="col" className="py-3 text-right font-semibold">Bond</th>
              </tr>
            </thead>
            <tbody>
              {bond.rows.map((r) => (
                <tr key={r.crime} className="border-b border-navy/10">
                  <td className="py-4 pr-6 leading-snug text-charcoal">{r.crime}</td>
                  <td className="py-4 text-right font-heading font-semibold tabular-nums">{r.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="self-start border border-navy/15 p-6 lg:p-8">
            <h3 className="font-display text-2xl leading-tight">{bond.waitHeading}</h3>
            <p className="mt-4 leading-relaxed text-charcoal">{bond.waitIntro}</p>
            <ul className="mt-4 space-y-3">
              {bond.wait.map((w) => (
                <li key={w} className="flex gap-3 leading-snug text-charcoal">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-medium leading-relaxed">{bond.waitNote}</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-navy/65">
          <span className="eyebrow">Source</span> {bond.source}
        </p>
      </div>
    </section>
  );
}

export function TimelineSection({ timeline }: { timeline: NonNullable<LocationPage["timeline"]> }) {
  return (
    <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{timeline.heading}</h2>
        <p className={LEAD_DARK}>{timeline.intro}</p>
        <ol className="mt-12 max-w-4xl">
          {timeline.steps.map((t) => (
            <li key={t.when} className="grid gap-2 border-t border-linen/15 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
              <p className="font-display text-xl leading-snug text-bronze">{t.when}</p>
              <p className="leading-relaxed text-linen/80">{t.what}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-linen/60">
          <span className="eyebrow">Source</span> {timeline.source}
        </p>
      </div>
    </section>
  );
}

export function ChargesSection({ charges }: { charges: NonNullable<LocationPage["charges"]> }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>{charges.heading}</h2>
        <p className={LEAD}>{charges.intro}</p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {charges.items.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex h-full flex-col border border-navy/15 p-6 transition-colors hover:border-navy lg:p-8"
              >
                <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-bronze">{c.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-charcoal">{c.body}</p>
                <span className="mt-6 font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                  Read more<span className="sr-only"> about {c.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqSection({ faq }: { faq: NonNullable<LocationPage["faq"]> }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className={H2}>Common questions.</h2>
        <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {faq.map((f) => (
            <div key={f.question} className="border-t border-navy/15 pt-6">
              <dt className="font-display text-2xl leading-snug">{f.question}</dt>
              <dd className="mt-3 leading-relaxed text-charcoal">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
