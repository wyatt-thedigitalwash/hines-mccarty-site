import { firm, staff } from "@/lib/site";
import Portrait from "@/components/attorneys/Portrait";

/**
 * Non-attorney staff on the firm page (D149), directly under the attorneys and
 * on the same four-column grid so a card lines up with theirs. Not links: staff
 * have no bio pages. The title always renders, so nobody here reads as a lawyer.
 */
export default function StaffGrid() {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">The staff.</h2>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {staff.map((person) => (
            <li key={person.name}>
              <div className="flex h-full flex-col border border-navy/15 p-4 sm:p-6">
                <Portrait
                  attorney={person}
                  alt={`${person.name}, ${person.role} at ${firm.name}`}
                  className="aspect-4/5 w-full"
                  sizes="(min-width: 1024px) 20rem, 45vw"
                />
                <h3 className="mt-4 font-display text-xl leading-tight sm:mt-6 sm:text-2xl lg:text-3xl">
                  {person.name}
                </h3>
                <p className="mt-2 eyebrow text-navy/60 sm:text-sm">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
