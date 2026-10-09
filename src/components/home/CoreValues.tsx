import Link from "next/link";
import { coreStatement, coreValues } from "@/lib/site";
import { card, color, type } from "@/components/cases/ui";

/**
 * Core values, D93: the four values in one row of filled cards, the same card
 * as the steps on the charge pages, without the numerals (client choice:
 * the values have no order).
 * The placeholder team photo that sat beside them is gone. Two by two on a
 * tablet, stacked on a phone.
 */
export default function CoreValues() {
  return (
    <section
      data-bg="dark"
      className="bg-navy py-24 pt-24! lg:py-32 lg:pt-32!"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* The link sits opposite the heading and intro from lg, level with
            the intro's last line; under the intro below that. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl">
              Core values.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-linen/70">
              {coreStatement}
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 self-start font-heading text-sm uppercase tracking-[0.08em] text-linen underline decoration-1 underline-offset-4 transition-colors hover:text-bronze lg:self-auto"
          >
            More about the firm
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <li key={value.title} className={`flex flex-col bg-linen/[0.06] ${card}`}>
              <h3 className={`${type.subheading} ${color.onDarkHeading}`}>
                {value.title}
              </h3>
              <p className={`mt-3 ${type.body} ${color.onDarkBody}`}>{value.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
