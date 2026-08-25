"use client";

import { useActionState, useMemo, useState } from "react";
import { submitChecker, type CheckerState } from "@/app/resources/tools/seal-expunge-eligibility/actions";
import {
  evaluate,
  visibleQuestions,
  type Answers,
} from "@/lib/tools/seal-expunge/engine";
import * as C from "@/lib/tools/seal-expunge/copy";
import { firm } from "@/lib/site";

const INITIAL: CheckerState = { status: "idle" };

/**
 * The question flow, the result, and the request-a-copy step.
 *
 * CLIENT SIDE BY NECESSITY, not by preference: the whole point is that the
 * answers are evaluated in the browser and reach no server unless the reader
 * asks for their summary. `evaluate` is a pure function shared with the server
 * action, so the summary emailed is produced by the same code that rendered
 * the screen.
 *
 * ONE QUESTION AT A TIME because the flow branches: the juvenile follow-up only
 * exists when the previous answer makes it matter, and a single long form
 * cannot express that without showing people questions that do not apply.
 */
export default function SealExpungeChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [state, action, pending] = useActionState(submitChecker, INITIAL);

  const questions = useMemo(() => visibleQuestions(answers), [answers]);
  const done = step >= questions.length;
  const result = useMemo(() => (done ? evaluate(answers) : null), [done, answers]);

  function choose(id: string, choice: string) {
    setAnswers((prev) => {
      const next = { ...prev, [id]: choice };
      // Dependent answers stop being meaningful when their parent changes.
      if (id === "priorConviction" && choice !== "no") {
        delete next.juvenile;
        delete next.juvenileExpunged;
      }
      if (id === "juvenile" && choice !== "yes") delete next.juvenileExpunged;
      return next;
    });
    setStep((s) => s + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  if (!done) {
    const q = questions[step];
    return (
      <div className="border border-navy/20 bg-white p-8 lg:p-10" data-checker>
        <p className="font-heading text-xs uppercase tracking-wide text-navy/50">
          {C.STEP_LABEL} {step + 1} of {questions.length}
        </p>
        <div className="mt-2 h-1 w-full bg-navy/10" aria-hidden="true">
          <div
            className="h-1 bg-bronze transition-all"
            style={{ width: `${(step / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="mt-6 font-display text-2xl leading-tight text-navy lg:text-3xl">
          {q.prompt}
        </h2>
        {q.help && <p className="mt-3 max-w-[60ch] text-navy/70">{q.help}</p>}

        <div className="mt-7 grid gap-3">
          {q.choices.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => choose(q.id, c.id)}
              className="group border border-navy/20 px-5 py-4 text-left transition hover:border-bronze hover:bg-bronze/5"
            >
              <span className="block text-navy">{c.label}</span>
              {c.hint && (
                <span className="mt-1 block text-sm text-navy/60">{c.hint}</span>
              )}
            </button>
          ))}
        </div>

        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="mt-6 text-sm text-navy/60 underline underline-offset-4 hover:text-bronze"
          >
            {C.BACK}
          </button>
        )}
      </div>
    );
  }

  const tone: Record<string, string> = {
    "may-petition": "border-l-4 border-bronze",
    blocked: "border-l-4 border-navy",
    "needs-review": "border-l-4 border-navy/40",
    "other-route": "border-l-4 border-navy/40",
  };

  return (
    <div data-checker data-outcome={result!.outcome}>
      <div className={`bg-white p-8 lg:p-10 ${tone[result!.outcome]}`}>
        <h2 className="font-display text-2xl leading-tight text-navy lg:text-3xl">
          {result!.headline}
        </h2>
        <p className="mt-4 max-w-[68ch] leading-relaxed text-navy/80">
          {result!.summary}
        </p>

        {result!.route && (
          <p className="mt-4 max-w-[68ch] leading-relaxed text-navy/80">
            {result!.route.label}, {result!.route.cite}. {result!.route.note}
          </p>
        )}

        <h3 className="mt-9 font-heading text-sm uppercase tracking-wide text-navy/50">
          {C.RESULT_INTRO}
        </h3>
        <ul className="mt-4 grid gap-4">
          {result!.conditions.map((c) => (
            <li
              key={c.condition.id}
              data-condition={c.condition.id}
              data-verdict={c.verdict}
              className="border-t border-navy/10 pt-4"
            >
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span
                  className={`font-heading text-xs uppercase tracking-wide ${
                    c.verdict === "met"
                      ? "text-bronze"
                      : c.verdict === "failed"
                        ? "text-navy"
                        : "text-navy/50"
                  }`}
                >
                  {c.verdict === "met"
                    ? "Met"
                    : c.verdict === "failed"
                      ? "Not met"
                      : "Needs checking"}
                </span>
                <span className="text-sm text-navy/50">{c.condition.cite}</span>
              </p>
              <p className="mt-1 text-navy">{c.condition.plain}</p>
              <p className="mt-1 text-sm text-navy/70">{c.because}</p>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={restart}
          className="mt-8 text-sm text-navy/60 underline underline-offset-4 hover:text-bronze"
        >
          {C.RESTART}
        </button>
      </div>

      {/* Capture. The result above is already complete: nothing is withheld. */}
      {state.status === "success" ? (
        <div role="status" className="mt-6 border border-navy/20 bg-white p-8 lg:p-10">
          <h2 className="font-display text-2xl leading-tight text-navy">
            {C.CAPTURE.successHeading}
          </h2>
          <p className="mt-4 max-w-[68ch] leading-relaxed text-navy/80">
            {C.CAPTURE.successBody}
          </p>
        </div>
      ) : (
        <form action={action} className="mt-6 border border-navy/20 bg-white p-8 lg:p-10">
          <h2 className="font-display text-2xl leading-tight text-navy">
            {C.CAPTURE.heading}
          </h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed text-navy/80">
            {C.CAPTURE.body}
          </p>

          {Object.entries(answers).map(([k, v]) => (
            <input key={k} type="hidden" name={`q_${k}`} value={v ?? ""} />
          ))}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          {state.status === "error" && state.message && (
            <p role="alert" className="mt-5 border-l-2 border-bronze bg-bronze/10 px-5 py-4 text-navy">
              {state.message}
            </p>
          )}

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-heading text-xs uppercase tracking-wide text-navy/60">
                Your name
              </span>
              <input
                name="name"
                required
                maxLength={120}
                className="mt-2 w-full border border-navy/25 px-4 py-3 text-navy focus:border-bronze focus:outline-none"
              />
              {state.fieldErrors?.name && (
                <span className="mt-1 block text-sm text-navy">{state.fieldErrors.name}</span>
              )}
            </label>
            <label className="block">
              <span className="font-heading text-xs uppercase tracking-wide text-navy/60">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                maxLength={160}
                className="mt-2 w-full border border-navy/25 px-4 py-3 text-navy focus:border-bronze focus:outline-none"
              />
              {state.fieldErrors?.email && (
                <span className="mt-1 block text-sm text-navy">{state.fieldErrors.email}</span>
              )}
            </label>
          </div>

          <p className="mt-5 max-w-[68ch] text-sm leading-relaxed text-navy/60">
            {C.CAPTURE.consent}
          </p>

          <button
            type="submit"
            disabled={pending}
            className="mt-6 bg-navy px-7 py-4 font-heading text-sm uppercase tracking-wide text-linen transition hover:bg-bronze disabled:opacity-60"
          >
            {pending ? C.CAPTURE.sending : C.CAPTURE.button}
          </button>

          <p className="mt-5 text-sm text-navy/60">
            Or call{" "}
            <a href={firm.phoneHref} className="underline underline-offset-4 hover:text-bronze">
              {firm.phone}
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
}
