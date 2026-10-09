import { caseProcess } from "@/lib/site";
import { card, color, type } from "@/components/cases/ui";

/**
 * "How a case is handled here." on the firm page (D108): the four stages as
 * filled navy cards, the same card as the charge pages' numbered steps. The
 * numerals stay here, unlike Core Values, because these happen in order.
 */
export default function ProcessCards() {
  return (
    <section data-bg="navy" className="bg-navy py-20 text-linen lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">How a case is handled here.</h2>
          <p className="mt-6 text-lg leading-relaxed text-linen/70">
            The order of operations does not change based on the matter. What changes is how long each
            stage takes.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseProcess.map((step) => (
            <li key={step.number} className={`flex flex-col bg-linen/[0.06] ${card}`}>
              {/* Bronze on navy is 7.07:1, so gold type is safe here. */}
              <span aria-hidden="true" className={`${type.numeral} ${color.accent}`}>
                {step.number}
              </span>
              <h3 className={`mt-6 ${type.subheading} ${color.onDarkHeading}`}>{step.title}</h3>
              <p className={`mt-3 ${type.body} ${color.onDarkBody}`}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
