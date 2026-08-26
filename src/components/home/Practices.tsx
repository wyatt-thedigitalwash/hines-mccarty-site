import Link from "next/link";
import { capabilities, injuryPractices } from "@/lib/site";

/**
 * The two practices, at parity, on the home page.
 *
 * REPLACES THE OLD CAPABILITIES GRID, which was three criminal silos under the
 * heading "What we defend." That heading and that shape were correct while the
 * firm had one practice. With two, a card grid of three criminal silos says the
 * injury work is a footnote, and "defend" is the wrong verb for half of it.
 *
 * WHY TWO COLUMNS RATHER THAN FIVE CARDS. Five equal cards would flatten the
 * hierarchy and imply the firm has five practices. It has two, each with its
 * own silos, and the shape should say so: the practice is the heading, the
 * silos are the list beneath it.
 *
 * THE SILO LINKS SURVIVE. The old grid gave each criminal silo a prominent
 * entry point to 30 money pages, and losing those would cost real internal
 * linking. Each column lists its own silos as links, so the criminal three are
 * still one click from the home page.
 *
 * An unpublished silo renders as text, never as a link. Same rule as everywhere
 * else on this site, and `check:routes` sweep B fails the build if one of them
 * ever renders as an href.
 */
export default function Practices() {
  const columns = [
    {
      key: "criminal",
      title: "Criminal Defense",
      href: "/cases-we-defend",
      blurb:
        "The charges most firms refer out, in the 13th Judicial Circuit and in the Middle District of Florida, Tampa Division.",
      items: capabilities.map((c) => ({
        key: c.key,
        title: c.title,
        summary: c.summary,
        href: c.href,
        published: true,
      })),
      cta: "All criminal charges",
    },
    {
      key: "injury",
      title: "Personal Injury",
      href: "/personal-injury",
      blurb:
        "Collision claims in Hillsborough County and across Tampa Bay, from the insurance claim through a lawsuit if the claim does not resolve.",
      items: injuryPractices.map((p) => ({
        key: p.key,
        title: p.title,
        summary: p.summary,
        href: p.href,
        published: p.published,
      })),
      cta: "About the injury practice",
    },
  ];

  return (
    <section data-bg="dark" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl">
            Two practices, one firm.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-linen/70">
            Hines &amp; McCarty defends people accused of crimes and represents
            people injured by someone else. The same collision sometimes
            produces both, and the firm can take it from either side.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {columns.map((col) => (
            <div
              key={col.key}
              data-practice={col.key}
              className="flex flex-col bg-white p-10 lg:p-12"
            >
              <h3 className="font-display text-3xl font-medium leading-tight text-navy lg:text-4xl">
                <Link href={col.href} className="transition-colors hover:text-bronze">
                  {col.title}
                </Link>
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-charcoal">
                {col.blurb}
              </p>

              <ul className="mt-8 flex-1 divide-y divide-navy/10 border-t border-navy/10">
                {col.items.map((item) => (
                  <li key={item.key} className="py-5">
                    {item.published ? (
                      <Link href={item.href} className="group block">
                        <span className="font-display text-xl text-navy transition-colors group-hover:text-bronze">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-base leading-relaxed text-charcoal/80">
                          {item.summary}
                        </span>
                      </Link>
                    ) : (
                      <div>
                        <span className="font-display text-xl text-navy/55">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-base leading-relaxed text-charcoal/60">
                          {item.summary}
                        </span>
                        <span className="mt-2 inline-block font-heading text-xs uppercase tracking-wide text-navy/40">
                          In progress
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                href={col.href}
                className="mt-8 inline-block text-base text-navy underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
              >
                {col.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
