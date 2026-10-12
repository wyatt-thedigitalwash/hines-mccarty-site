/**
 * The four kinds of dispute on /business-litigation (D116), as cards: what the
 * dispute is, then the Florida rule that most shapes it, with its citation.
 *
 * Every rule here was checked against the statute text at leg.state.fl.us on
 * 2026-10-12 (2026 edition, unchanged from 2025 for these sections). Kept to
 * what the statute says; anything that rests on case law is left out.
 */
type Dispute = { title: string; what: string; rules: string[]; sources: string };

const DISPUTES: Dispute[] = [
  {
    title: "Contract disputes",
    what: "A customer who will not pay, a vendor who did not deliver, a deal that fell apart after one side relied on it.",
    rules: [
      "In Florida you have five years to sue on a written contract and four years on a contract that was never put in writing.",
    ],
    sources: "Fla. Stat. § 95.11(2)(b), (3)(j)",
  },
  {
    title: "Partner, shareholder, and LLC member disputes",
    what: "Disagreements between the people who own a business: control, money taken out, a partner competing with the company, a buyout nobody can agree on.",
    rules: [
      "The people who run a Florida LLC owe it and its members duties of loyalty and care.",
      "A member suing on the company's behalf usually has to ask the company to act first and wait up to 90 days, unless asking would be pointless or the wait would cause harm that cannot be undone.",
    ],
    sources: "Fla. Stat. §§ 605.04091, 605.0802",
  },
  {
    title: "Non-competes and trade secrets",
    what: "Enforcing a non-compete or confidentiality agreement against a former employee, or defending against one. Protecting customer lists, pricing, and other information a competitor should not have.",
    rules: [
      "A non-compete is enforceable only if it protects a legitimate business interest. For a former employee, six months or less is presumed reasonable and more than two years is presumed unreasonable, and a court must narrow a restriction that goes too far rather than throw it out.",
      "Since July 1, 2025, agreements with higher-paid employees that meet the CHOICE Act's requirements can run up to four years.",
      "A trade secret claim must be brought within three years of when the theft was or should have been discovered.",
    ],
    sources: "Fla. Stat. §§ 542.335, 542.41 to 542.45, 688.007",
  },
  {
    title: "Business fraud and unfair trade practices",
    what: "Being misled into a deal, a competitor interfering with your contracts or customers, or unfair and deceptive practices in trade.",
    rules: [
      "A fraud claim has four years from when the fraud was or should have been discovered, and no more than twelve years from when it happened.",
      "Under Florida's Deceptive and Unfair Trade Practices Act, the side that wins may be awarded its attorney's fees, which cuts both ways.",
    ],
    sources: "Fla. Stat. §§ 95.11(3)(i), 95.031(2)(a), 501.211, 501.2105",
  },
];

export default function DisputeCards() {
  return (
    <ul className="mt-12 grid gap-6 md:grid-cols-2">
      {DISPUTES.map((d) => (
        <li key={d.title} className="flex flex-col border border-navy/15 p-8 lg:p-10">
          <h3 className="font-display text-3xl leading-tight">{d.title}</h3>
          <p className="mt-4 leading-relaxed text-charcoal">{d.what}</p>
          <ul className="mt-6 flex-1 space-y-3 border-t border-navy/10 pt-6">
            {d.rules.map((r) => (
              <li key={r.slice(0, 40)} className="flex gap-3 leading-relaxed text-charcoal">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-navy/65">
            <span className="eyebrow text-navy/70">Sources</span> {d.sources}
          </p>
        </li>
      ))}
    </ul>
  );
}
