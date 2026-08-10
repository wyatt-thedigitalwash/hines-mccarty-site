import Link from "next/link";
import { coreStatement, coreValues } from "@/lib/site";

export default function CoreValues() {
  return (
    <section
      data-bg="dark"
      className="bg-navy py-24 pt-24! lg:py-32 lg:pt-32!"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex flex-col">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl">
              Core values.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-linen/70">
              {coreStatement}
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              {coreValues.map((value) => (
                <div key={value.title}>
                  <dt className="font-display text-2xl text-linen sm:text-3xl">
                    {value.title}
                  </dt>
                  <dd className="mt-2 max-w-[16rem] text-sm leading-snug text-linen/60">
                    {value.body}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="mt-10 inline-block font-heading text-sm uppercase tracking-[0.08em] text-linen underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
            >
              More about the firm
            </Link>
          </div>

          {/* Portrait photo, 1080x1440 (3:4) */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/team/mock-team-photo2.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
