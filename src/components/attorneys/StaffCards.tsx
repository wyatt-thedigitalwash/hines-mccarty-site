import { firm, staff } from "@/lib/site";
import Portrait from "@/components/attorneys/Portrait";

/**
 * Staff cards for the end of an attorney grid, so they sit in the same row
 * (D150). Same frame as the attorney cards, but not links, because staff have
 * no bio pages, and no concentration or "Read bio". The title always renders,
 * so nobody in the row reads as a lawyer. `className` carries the host grid's
 * border and padding so the cards match their neighbours exactly.
 */
export default function StaffCards({ className }: { className: string }) {
  return staff.map((person) => (
    <li key={person.name}>
      <div className={`flex h-full flex-col border ${className}`}>
        <Portrait
          attorney={person}
          alt={`${person.name}, ${person.role} at ${firm.name}`}
          className="aspect-4/5 w-full"
          sizes="(min-width: 1024px) 16rem, 45vw"
        />
        <h3 className="mt-4 font-display text-xl leading-tight sm:mt-6 sm:text-2xl lg:text-xl xl:text-2xl">
          {person.name}
        </h3>
        <p className="mt-2 eyebrow text-navy/70 sm:text-sm">{person.role}</p>
      </div>
    </li>
  ));
}
