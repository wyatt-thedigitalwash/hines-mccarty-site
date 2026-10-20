"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { firm } from "@/lib/site";

const INITIAL: ContactState = { status: "idle" };

/**
 * Intake form.
 *
 * Asks for as little as possible on purpose. Name and a phone number are what
 * actually move a criminal matter forward; everything else can be gathered on
 * a call where the conversation is privileged.
 *
 * THE NOTICE ABOVE THE MESSAGE FIELD IS LOAD-BEARING. Rule 4-1.18 prospective
 * client duties attach the moment someone sends case facts, and under
 * Bartholomew v. Bartholomew a relationship can turn on the sender's own
 * reasonable belief regardless of what the firm intended. So the warning has to
 * come BEFORE fact entry, not under the submit button where it would be read
 * after the fact. That is also why the message field is optional and labelled
 * for context rather than for detail.
 */
export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, INITIAL);
  // D83: when the form was shown, so the server can drop submissions faster
  // than a person could type. Set after mount, so it is the real time on
  // this visitor's screen, not the build time.
  const shownAt = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (shownAt.current) shownAt.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border border-navy/20 bg-white p-10 lg:p-12"
      >
        <h2 className="font-display text-2xl leading-tight lg:text-3xl">
          Message sent
        </h2>
        <p className="mt-5 leading-relaxed text-charcoal">{state.message}</p>
        <p className="mt-5 leading-relaxed text-charcoal">
          If your matter is urgent, call{" "}
          <a
            href={firm.phoneHref}
            className="underline decoration-1 underline-offset-4 hover:text-bronze"
          >
            {firm.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="border border-navy/20 bg-white p-8 lg:p-10">
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="mb-8 border-l-2 border-bronze bg-bronze/10 px-5 py-4 leading-relaxed text-navy"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="name"
          label="Your name"
          required
          error={state.fieldErrors?.name}
        />
        <Field
          name="phone"
          label="Phone"
          type="tel"
          required
          error={state.fieldErrors?.phone}
        />
      </div>

      <div className="mt-6">
        <Field
          name="email"
          label="Email"
          type="email"
          hint="Optional"
          error={state.fieldErrors?.email}
        />
      </div>

      {/* Before the field, deliberately. See the note on this component. */}
      <div className="mt-10 border-t border-navy/15 pt-8">
        <p className="text-sm leading-relaxed text-navy/70">
          Sending this form does not create an attorney-client relationship, and
          a message sent through a website is not privileged. Please do not
          include details about your case here. Tell us how to reach you and we
          will have that conversation by phone or in person.
        </p>
      </div>

      <div className="mt-6">
        <label
          htmlFor="note"
          className="block font-heading text-sm font-medium text-navy"
        >
          How can we help?{" "}
          <span className="font-normal text-navy/70">
            Optional, and no case details
          </span>
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          maxLength={2000}
          className="mt-2 w-full border border-navy/25 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-navy"
        />
      </div>

      {/* Honeypot. Hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        <input ref={shownAt} type="hidden" name="shown_at" defaultValue="" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-10 inline-flex items-center bg-bronze px-7 py-4 font-heading text-base font-semibold tabular-nums text-navy transition-colors hover:bg-bronze-soft disabled:opacity-60"
      >
        {pending ? "Sending" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  hint,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  hint?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-sm font-medium text-navy"
      >
        {label}
        {hint && <span className="font-normal text-navy/70"> {hint}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 w-full border bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-navy ${
          error ? "border-bronze" : "border-navy/25"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-navy/70">
          {error}
        </p>
      )}
    </div>
  );
}
