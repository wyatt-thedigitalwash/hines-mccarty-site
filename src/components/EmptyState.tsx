import Link from "next/link";

/**
 * An honest empty state for a page that exists but has no content yet.
 *
 * Deliberately not a "coming soon" banner. It says what is not here, why, and
 * where to go instead. Pages using this are noindex and out of the sitemap
 * until they have something on them.
 */
export default function EmptyState({
  heading,
  body,
  linkHref,
  linkLabel,
}: {
  heading: string;
  body: string;
  linkHref: string;
  linkLabel: string;
}) {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="border border-navy/20 p-10 lg:p-12">
          <h2 className="font-display text-2xl leading-tight lg:text-3xl">
            {heading}
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal">{body}</p>
          <Link
            href={linkHref}
            className="link-arrow mt-8 inline-block text-base underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
