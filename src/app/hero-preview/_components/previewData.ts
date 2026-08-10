// Shared constants for the /hero-preview route only. These intentionally do
// NOT touch src/lib/site.ts (the real firm data used by the live site).
//
// [NEEDS: the task spec for this preview explicitly requires the phone number
// 813-333-8886, which does not match the confirmed real firm number
// (813) 738-8650 already on file in SITE.md / src/lib/site.ts. Before this
// content ever goes live, confirm with the client which number is correct
// and reconcile the two.]
export const previewPhone = {
  display: "813-333-8886",
  href: "tel:+18133338886",
};

// Proof-strip facts, shared by all three variants. Every non-[NEEDS] item is
// sourced directly from this repo (src/lib/site.ts / SITE.md), nothing invented.
export const proofItems = [
  { label: "State & Federal Defense", needsConfirmation: false },
  { label: "13th Judicial Circuit + M.D. Fla.", needsConfirmation: false },
  { label: "Four Attorneys, One Firm", needsConfirmation: false },
  // [NEEDS: years of combined experience -- not stated anywhere in the repo
  // or SITE.md. Do not fill this in without the client confirming a number.]
  // [NEEDS: whether any attorney is a former prosecutor or former public
  // defender -- docs/research/STATE.md raises this as an open question, not
  // a confirmed fact. Rule 4-7.14 allows this credential language only if
  // true and phrased carefully, so it must be confirmed before use.]
  { label: "Years combined experience", needsConfirmation: true },
] as const;
