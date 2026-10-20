import type { Silo } from "@/lib/site";

/**
 * Verified court facts, on the federal hub (D112 restyle of D1's W1-01
 * section). White, in the site's card language, replacing the last cream
 * section: the five divisions as cards with Tampa's in gold (no eyebrow, D113), the
 * courthouse as a card with its details, the two offices as cards, and the
 * appearance rule as prose. Renders nothing for a silo with no facts.
 *
 * No Criminal Punishment Code artifact is linked from any of this: the CPC
 * does not apply to federal cases (CASES-WE-DEFEND-PLAN.md Section 4.2).
 */
const H2 = "font-display font-semibold text-4xl leading-tight sm:text-5xl";
const LEAD = "mt-6 max-w-3xl text-lg leading-relaxed text-charcoal";
const EYEBROW = "eyebrow";

export default function ForumFactsSection({ facts }: { facts: NonNullable<Silo["forumFacts"]> }) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] space-y-20 px-6 lg:space-y-28 lg:px-10">
        {facts.divisions && (
          <div>
            <h2 className={H2}>{facts.divisions.heading}</h2>
            {facts.divisions.intro && <p className={LEAD}>{facts.divisions.intro}</p>}
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {facts.divisions.rows.map((row) => (
                <li
                  key={row.name}
                  className={`flex flex-col border p-6 ${row.isLocal ? "border-bronze bg-bronze/[0.07]" : "border-navy/15"}`}
                >
                  <h3 className="font-display text-2xl leading-tight">{row.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal">{row.counties}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {facts.courthouse && (
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className={H2}>{facts.courthouse.heading}</h2>
              {facts.courthouse.body?.map((p) => (
                <p key={p.slice(0, 40)} className={LEAD}>{p}</p>
              ))}
            </div>
            <div className="self-start bg-navy p-8 text-linen lg:p-10">
              <p className={`${EYEBROW} text-bronze`}>Courthouse</p>
              <p className="mt-3 font-display text-3xl leading-snug">{facts.courthouse.name}</p>
              <p className="mt-2 leading-relaxed text-linen/75">{facts.courthouse.address}</p>
              {!!facts.courthouse.rows?.length && (
                <dl className="mt-8 space-y-4">
                  {facts.courthouse.rows.map((row) => (
                    <div key={row.label} className="border-t border-white/12 pt-4">
                      <dt className={`${EYEBROW} text-linen/55`}>{row.label}</dt>
                      <dd className="mt-1 leading-relaxed text-linen/85">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        )}

        {facts.offices && (
          <div>
            <h2 className={H2}>{facts.offices.heading}</h2>
            {facts.offices.intro && <p className={LEAD}>{facts.offices.intro}</p>}
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {facts.offices.items.map((item) => (
                <li key={item.name} className="border border-navy/15 p-8">
                  <p className={`${EYEBROW} text-navy/70`}>{item.role}</p>
                  <p className="mt-3 font-display text-2xl leading-snug">{item.name}</p>
                  {item.note && <p className="mt-4 leading-relaxed text-charcoal">{item.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {facts.practice && (
          <div className="max-w-3xl">
            <h2 className={H2}>{facts.practice.heading}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal">
              {facts.practice.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
