import Needs from "@/components/Needs";

/**
 * Attorney byline and last-reviewed date (done-criterion C11).
 *
 * `lastReviewed` is the date a named person checked the page against its cited
 * sources. It is never a publish date, and it renders a [NEEDS] marker rather
 * than today's date when no review has happened, because a false review date
 * removes the signal that the page needs looking at.
 */
export default function Byline({
  owner,
  lastReviewed,
  tone = "light",
}: {
  owner?: string;
  lastReviewed?: string;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-linen/55" : "text-navy/55";

  return (
    <div className={`mt-16 border-t pt-6 text-sm ${
      tone === "dark" ? "border-white/15" : "border-navy/15"
    }`}>
      <p className={muted}>
        Reviewed by{" "}
        {owner ?? <Needs>owning attorney</Needs>}
        {". "}
        Last reviewed{" "}
        {lastReviewed ?? <Needs>attorney review date</Needs>}
        {"."}
      </p>
    </div>
  );
}
