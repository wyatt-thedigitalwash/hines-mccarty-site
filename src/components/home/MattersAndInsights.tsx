import Link from "next/link";
import { insightsPreview } from "@/lib/site";

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

// Shared card shell for both grids, matching the plain white treatment
// already used in Capabilities.tsx: no label row, no accent border.
function Card({
  href,
  title,
  text,
}: {
  href?: string;
  title: string;
  text?: string;
}) {
  const content = (
    <>
      <h3 className="font-display text-2xl font-medium leading-tight text-navy sm:text-3xl">
        {title}
      </h3>
      {text && (
        <p className="mt-4 flex-1 text-lg leading-relaxed text-charcoal">
          {text}
        </p>
      )}
      {href && (
        <span className="mt-8 inline-block text-base text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
          Learn More
        </span>
      )}
    </>
  );

  // Bordered so the card still reads distinctly at rest now that the
  // section itself is also white (cream is reserved for the hover state).
  const className =
    "group flex min-h-[220px] flex-col border border-navy/10 bg-white p-10 transition-colors hover:border-transparent hover:bg-linen";

  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
}

// Representative matter types, framed by area and forum only. No outcomes are
// stated. Replace or supplement with real, client-consented results on /results.
const matters = [
  {
    title: "Drug conspiracy, Middle District of Florida",
    text: "Pre-indictment strategy and motion practice in a multi-defendant federal case.",
  },
  {
    title: "Sexual battery, 13th Judicial Circuit",
    text: "Careful, discreet handling of a serious charge from first appearance forward.",
  },
  {
    title: "Fraud investigation, pre-charge",
    text: "Response to a target letter and grand jury exposure for a licensed professional.",
  },
];

export default function MattersAndInsights() {
  return (
    <section data-bg="light" className="bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Block 1: Representative Matters, 3 most recent */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            The range of what we handle.
          </h2>
          <Link
            href="/results"
            className="link-arrow group inline-flex items-center gap-2 font-display text-lg text-navy transition-colors hover:text-bronze"
          >
            View results
            <ArrowUpRight />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {matters.map((matter) => (
            <Card key={matter.title} title={matter.title} text={matter.text} />
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-charcoal/70">
          These examples describe the types of matters the firm handles. Every
          case is different, and prior results do not guarantee a similar
          outcome.
        </p>

        {/* Divider between the two blocks */}
        <div className="my-16 border-t border-navy/10 lg:my-20" />

        {/* Block 2: Insights, 3 most recent posts */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Notes on the process.
          </h2>
          <Link
            href="/resources/articles"
            className="link-arrow group inline-flex items-center gap-2 font-display text-lg text-navy transition-colors hover:text-bronze"
          >
            All insights
            <ArrowUpRight />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {insightsPreview.map((post) => (
            <Card key={post.title} href={post.href} title={post.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
