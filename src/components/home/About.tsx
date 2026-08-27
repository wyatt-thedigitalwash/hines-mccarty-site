import Link from "next/link";
import Portrait from "@/components/attorneys/Portrait";
import Needs from "@/components/Needs";
import { attorneys } from "@/lib/site";

/**
 * The firm section on the home page: heading, copy, then the four attorneys.
 *
 * WHAT THIS REPLACED. A two-column split with a stock photograph bleeding off
 * the right edge. The photograph was `mock-team-photo2.jpg`, a stock image of
 * three people who do not work here, sitting under a sign reading CRIMSON LAW
 * FIRM. On a page about a four-attorney firm whose whole argument is that you
 * get the person who knows your kind of case, a stock photo of strangers was
 * the weakest thing available. The attorneys are the illustration.
 *
 * THE CARDS ARE THE ONES FROM /attorneys, deliberately identical: same border,
 * same 4:5 portrait, same name, role, concentration and Read bio. Two surfaces
 * showing the same four people in two different card designs is how a site
 * starts looking assembled rather than designed.
 *
 * Four across from lg, two by two from sm, one up on a phone. The `sizes` hint
 * matches those breakpoints so a phone does not fetch a 20rem portrait.
 */
export default function About() {
  return (
    <section data-bg="light" className="bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A partnership, not a single name on the door.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal">
            <p>
              Hines &amp; McCarty is a Brandon firm built around four attorneys
              who each concentrate on different areas. When a case comes in, it
              goes to the person who knows that kind of case, not to whoever is
              available.
            </p>
            <p>
              That structure is why so much of the firm&apos;s work arrives by
              referral, from former clients and from other lawyers who send the
              matters they do not handle themselves.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <li key={attorney.slug}>
              <Link
                href={`/attorneys/${attorney.slug}`}
                className="group flex h-full flex-col border border-navy/20 p-6 transition-colors hover:border-navy"
              >
                <Portrait
                  attorney={attorney}
                  className="aspect-4/5 w-full"
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 90vw"
                />

                <h3 className="mt-6 font-display text-2xl leading-tight transition-colors group-hover:text-bronze lg:text-3xl">
                  {attorney.name}
                </h3>

                {/* No role label renders until the client confirms it, same
                    rule as the attorneys index. */}
                <p className="mt-2 font-heading text-sm uppercase tracking-wide text-navy/50">
                  {attorney.role ?? <Needs>role and title</Needs>}
                </p>

                <p className="mt-4 flex-1 text-sm leading-snug text-navy/65">
                  {attorney.concentration ?? (
                    <Needs>one-line concentration</Needs>
                  )}
                </p>

                <span className="mt-6 inline-block font-heading text-sm font-medium text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                  Read bio
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/attorneys"
          className="mt-12 inline-flex items-center border border-navy px-8 py-4 font-display text-lg transition-colors hover:border-bronze hover:text-bronze"
        >
          Meet the attorneys
        </Link>
      </div>
    </section>
  );
}
