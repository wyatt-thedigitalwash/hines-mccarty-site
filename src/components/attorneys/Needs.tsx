/**
 * A visible placeholder for a field the client has not supplied yet.
 *
 * Only unconfirmed attorney entries render these. A confirmed bio omits the
 * section entirely rather than showing a marker, so nothing half-written ever
 * appears on a page meant to publish.
 */
export default function Needs({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      data-needs
      className={`inline-block border border-dashed border-bronze/70 bg-bronze/10 px-2 py-0.5 font-heading text-xs uppercase tracking-wide text-bronze ${className}`}
    >
      [NEEDS: {children}]
    </span>
  );
}
