import type { Metadata } from "next";
import FirmTasks from "@/components/tasks/FirmTasks";
import { RECOMMENDED } from "@/lib/firm-tasks";

/**
 * D127. The firm's to-do list at an unlisted address: linked from nowhere,
 * kept out of the sitemap and the site search, and noindex, nofollow.
 * Unlisted is not private; nothing confidential goes on it.
 */
export const metadata: Metadata = {
  title: { absolute: "Your to-do list | Hines McCarty Pavlidis" },
  description: "Each attorney's and the office's tasks for updating listings, earning links and collecting reviews for Hines McCarty Pavlidis.",
  robots: { index: false, follow: false },
};

export default function FirmTasksPage() {
  return (
    <>
      {/* Navy band, like every page's hero, so the transparent header reads. */}
      <section data-bg="navy" data-hero className="bg-navy pt-36 pb-16 text-linen lg:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-5xl leading-tight">Your to-do list</h1>
          <p className="mt-4 text-lg text-linen/80">Find your name. Click the button, make the change, tick the box.</p>
        </div>
      </section>
      <section data-bg="white" className="bg-white pt-12 pb-24 text-navy">
        <div className="mx-auto max-w-3xl px-6">
          <div className="border border-navy/15 p-5">
            <p className="mb-2 text-sm text-navy/70">Use exactly this everywhere:</p>
            <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1">
              <dt className="eyebrow text-[#8a6d2f]">Name</dt>
              <dd className="font-medium">Hines McCarty Pavlidis, PLLC</dd>
              <dt className="eyebrow text-[#8a6d2f]">Address</dt>
              <dd className="font-medium">745 W Lumsden Rd, Brandon, FL 33511</dd>
              <dt className="eyebrow text-[#8a6d2f]">Phone</dt>
              <dd className="font-medium">(813) 738-8650</dd>
              <dt className="eyebrow text-[#8a6d2f]">Website</dt>
              <dd className="font-medium">tampa-litigation.com</dd>
            </dl>
          </div>
          <FirmTasks />
          {/* D144: optional, so no checkboxes and outside the progress count. */}
          <section className="mt-14">
            <h2 className="font-display text-4xl">Optional</h2>
            <p className="mt-3 text-charcoal">Worth considering once the list above is done. None of these are required.</p>
            <ul className="mt-6 grid gap-3">
              {RECOMMENDED.map((r) => (
                <li key={r.title} className="border-l-2 border-bronze/60 bg-navy/[0.03] px-5 py-4">
                  <p className="font-medium text-navy">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">{r.note}</p>
                  {r.links?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.links.map(([label, href]) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-navy/20 bg-white px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-bronze hover:text-bronze"
                        >
                          {label} ↗
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-4xl">Every month</h2>
            <ul className="mt-4 grid gap-2 text-lg text-charcoal">
              <li>Ask every happy client for a Google review.</li>
              <li>Answer a few reporter questions on Featured.com or Qwoted.</li>
              <li>Approve the month&apos;s articles.</li>
              <li>Never pay anyone for &ldquo;links&rdquo; or &ldquo;Top Lawyer&rdquo; badges.</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
