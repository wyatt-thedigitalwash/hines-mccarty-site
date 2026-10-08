/**
 * Attorney byline and last-reviewed date (done-criterion C11).
 *
 * `lastReviewed` is the date a named person checked the page against its cited
 * sources. It is never a publish date. The byline renders only when BOTH a
 * reviewer and a real review date are set (D65, D74): it used to render
 * [NEEDS] markers in their place, which put unfinished-content markers on live
 * pages. A page without a review is also unpublished (noindex), and the review
 * register (REVIEW-QUEUE.md) is where the missing review is tracked.
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
  if (!owner || !lastReviewed) return null;
  const muted = tone === "dark" ? "text-linen/60" : "text-navy/70";

  return (
    <div className={`mt-16 border-t pt-6 text-sm ${
      tone === "dark" ? "border-white/15" : "border-navy/15"
    }`}>
      <p className={muted}>
        Reviewed by {owner}. Last reviewed{" "}
        {new Date(`${lastReviewed}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
      </p>
    </div>
  );
}
