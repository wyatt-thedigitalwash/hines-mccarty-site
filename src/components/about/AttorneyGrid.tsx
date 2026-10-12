import Link from "next/link";
import { attorneys } from "@/lib/site";
import Portrait from "@/components/attorneys/Portrait";
import Needs from "@/components/Needs";

/**
 * The four attorneys on the firm page (D108): the /attorneys card (4:5
 * portrait, name, role, concentration) on white. Board certification shows
 * only where one is held, since this is where a referring lawyer looks for
 * it; there is no [NEEDS] for its absence, as most lawyers are not certified.
 */
export default function AttorneyGrid() {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">The attorneys.</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal">
              Each bio states what that attorney handles, the courts they appear in, and their Florida Bar
              admission.
            </p>
          </div>
          <Link
            href="/attorneys"
            className="shrink-0 self-start font-heading text-sm uppercase tracking-[0.08em] underline decoration-1 underline-offset-4 transition-colors hover:text-bronze lg:self-auto"
          >
            All attorneys
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {attorneys.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/attorneys/${a.slug}`}
                className="group flex h-full flex-col border border-navy/15 p-4 transition-colors hover:border-navy sm:p-6"
              >
                <Portrait attorney={a} className="aspect-4/5 w-full" sizes="(min-width: 1024px) 20rem, 45vw" />
                <h3 className="mt-4 font-display text-xl leading-tight transition-colors group-hover:text-bronze sm:mt-6 sm:text-2xl lg:text-3xl">
                  {a.name}
                </h3>
                <p className="mt-2 eyebrow text-navy/60 sm:text-sm">
                  {a.role ?? <Needs>role and title</Needs>}
                </p>
                <p className="mt-3 flex-1 text-sm leading-snug text-charcoal sm:mt-4">
                  {a.concentration ?? <Needs>one-line concentration</Needs>}
                </p>
                {a.credentials?.boardCertifications?.length ? (
                  <p className="mt-4 border-t border-navy/10 pt-4 text-xs leading-snug text-navy/65">
                    {a.credentials.boardCertifications.map((cert) => (
                      <span key={cert.area} className="block">
                        Board certified by The Florida Bar in {cert.area}
                        {cert.since ? ` since ${cert.since}` : ""}
                      </span>
                    ))}
                  </p>
                ) : null}
                <span className="mt-4 inline-block font-heading text-sm font-medium underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze sm:mt-6">
                  Read bio
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
