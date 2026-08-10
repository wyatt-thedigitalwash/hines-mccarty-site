import Link from "next/link";
import { capabilities } from "@/lib/site";

export default function Capabilities() {
  return (
    <section data-bg="dark" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl">
            What we defend.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-linen/70">
            The firm handles the charges most others refer out, in the 13th
            Judicial Circuit and in the Middle District of Florida, Tampa
            Division.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((cap) => (
            <Link
              key={cap.key}
              href={cap.href}
              className="group flex min-h-[380px] flex-col bg-white p-10 transition-colors hover:bg-linen lg:min-h-[440px] lg:p-12"
            >
              <h3 className="font-display text-3xl font-medium leading-tight text-navy lg:text-4xl">
                {cap.title}
              </h3>
              <p className="mt-6 flex-1 text-lg leading-relaxed text-charcoal">
                {cap.summary}
              </p>
              <span className="mt-8 inline-block text-base text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
