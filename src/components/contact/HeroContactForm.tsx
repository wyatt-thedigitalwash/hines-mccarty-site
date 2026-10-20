"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { firm } from "@/lib/site";

const INITIAL: ContactState = { status: "idle" };

/**
 * The short form in the hero of the five practice pages (D132): name, email,
 * phone, and what happened, sent to the firm through the same server action,
 * validation and spam checks as /contact. `source` names the page in the
 * email so the firm knows which practice it is about.
 *
 * THE NOTICE SITS ABOVE THE MESSAGE FIELD, as on /contact (Rule 4-1.18): it
 * has to be read before anyone types facts. The client asked for "tell me
 * what happened", so the field stays, asks for a short summary, and the
 * notice says the details are for the phone.
 */
export default function HeroContactForm({ source }: { source: string }) {
  const [state, action, pending] = useActionState(submitContact, INITIAL);
  const shownAt = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (shownAt.current) shownAt.current.value = String(Date.now());
  }, []);

  const field =
    "mt-1.5 w-full border border-navy/20 bg-white px-3.5 py-2.5 text-base text-navy placeholder:text-navy/40 focus:border-navy focus:outline-none";
  const label = "block font-heading text-sm font-medium text-navy";
  const err = (k: "name" | "phone" | "email" | "note") =>
    state.fieldErrors?.[k] ? <p className="mt-1 text-sm text-[#9a2f1c]">{state.fieldErrors[k]}</p> : null;

  if (state.status === "success") {
    return (
      <div role="status" className="bg-white p-7 text-navy shadow-[0_24px_48px_rgba(5,9,20,0.35)]">
        <h2 className="font-display text-3xl font-semibold leading-tight">Message sent</h2>
        <p className="mt-4 leading-relaxed text-charcoal">{state.message}</p>
        <p className="mt-4 leading-relaxed text-charcoal">
          If it is urgent, call <a href={firm.phoneHref} className="font-semibold underline underline-offset-4">{firm.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="bg-white p-6 text-navy shadow-[0_24px_48px_rgba(5,9,20,0.35)] sm:p-7" noValidate>
      <h2 className="font-display text-3xl font-semibold leading-tight">Free consultation</h2>
      <p className="mt-1 font-heading text-sm text-navy/70">Available 24/7. We will call you back.</p>

      {state.status === "error" && state.message ? (
        <p role="alert" className="mt-4 border-l-2 border-[#9a2f1c] pl-3 text-sm text-[#9a2f1c]">{state.message}</p>
      ) : null}

      <input type="hidden" name="source" value={source} />
      <div className="mt-5 grid gap-3.5">
        <div>
          <label htmlFor="hf-name" className={label}>Name</label>
          <input id="hf-name" name="name" autoComplete="name" required className={field} />
          {err("name")}
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <label htmlFor="hf-phone" className={label}>Phone</label>
            <input id="hf-phone" name="phone" type="tel" autoComplete="tel" required className={field} />
            {err("phone")}
          </div>
          <div>
            <label htmlFor="hf-email" className={label}>Email</label>
            <input id="hf-email" name="email" type="email" autoComplete="email" className={field} />
            {err("email")}
          </div>
        </div>
        <p className="text-xs leading-relaxed text-navy/70">
          This does not create an attorney-client relationship. Please don&apos;t include confidential details.
        </p>
        <div>
          <label htmlFor="hf-note" className={label}>Briefly, what happened?</label>
          <textarea id="hf-note" name="note" rows={3} maxLength={2000} className={`${field} resize-y`} />
          {err("note")}
        </div>
      </div>

      {/* Honeypot and fill-time stamp, as on /contact (D83). */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hf-company">Company</label>
        <input id="hf-company" name="company" tabIndex={-1} autoComplete="off" />
        <input ref={shownAt} type="hidden" name="shown_at" defaultValue="" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-5 inline-flex w-full items-center justify-center bg-bronze px-6 py-3.5 font-heading text-base font-semibold text-navy transition-colors hover:bg-bronze-soft disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a free consultation"}
      </button>
    </form>
  );
}
