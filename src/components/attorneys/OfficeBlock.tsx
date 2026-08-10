import { firm, publishedOffices } from "@/lib/site";

/**
 * The NAP block. Satisfies the Rule 4-7.12 requirement that the firm name and a
 * bona fide office location appear on the page.
 *
 * Renders every published office, so a second location needs no layout change.
 * Unpublished offices are absent by design: an office named without a real
 * street address is the misleading-communication pattern in
 * docs/research/avoid.md item 33.
 */
export default function OfficeBlock({
  tone,
  showPhone = true,
  className = "grid gap-8 sm:grid-cols-2",
}: {
  tone: "dark" | "light";
  /** Off where the surrounding section already shows the number. */
  showPhone?: boolean;
  className?: string;
}) {
  const label = tone === "dark" ? "text-linen" : "text-navy";
  const muted = tone === "dark" ? "text-linen/60" : "text-navy/60";

  return (
    <div className={className}>
      {publishedOffices.map((office) => (
        <div key={office.key}>
          <p className={`eyebrow ${muted}`}>{office.label} Office</p>
          <address className={`mt-3 not-italic leading-relaxed ${label}`}>
            <span className="block font-medium">{firm.legalName}</span>
            {office.street && <span className="block">{office.street}</span>}
            {office.suite && <span className="block">{office.suite}</span>}
            <span className="block">
              {office.city}, {office.state} {office.zip}
            </span>
          </address>
          {showPhone && office.phone && office.phoneHref && (
            <a
              href={office.phoneHref}
              className={`mt-3 inline-block font-heading font-semibold text-bronze transition-colors hover:text-bronze-soft`}
            >
              {office.phone}
            </a>
          )}
          {office.hours && (
            <p className={`mt-2 text-sm ${muted}`}>{office.hours}</p>
          )}
        </div>
      ))}
    </div>
  );
}
