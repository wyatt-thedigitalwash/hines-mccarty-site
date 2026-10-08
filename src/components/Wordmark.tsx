/**
 * The firm's text wordmark, "Hines · McCarty · Pavlidis", used by the header
 * and footer (D69). The bronze dots echo the bullets in the firm's logo, as
 * the bronze ampersand did in "Hines & McCarty". They are hidden from
 * assistive technology, so the name is read as "Hines McCarty Pavlidis".
 * Replace with the logo artwork once the firm supplies it.
 */
const Dot = () => (
  <span aria-hidden="true" className="mx-[0.3em] text-bronze">
    ·
  </span>
);

export default function Wordmark() {
  return (
    <>
      Hines
      <Dot />
      McCarty
      <Dot />
      Pavlidis
    </>
  );
}
