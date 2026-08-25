"use server";

import { Resend } from "resend";
import { firm } from "@/lib/site";
import { CONDITIONS, QUESTIONS, evaluate, type Answers } from "@/lib/tools/seal-expunge/engine";

/**
 * Emails the reader their summary, and notifies the firm.
 *
 * TWO EMAILS, ONE SUBMISSION. The reader gets their summary with a reply-to
 * pointing at the firm so replying reaches an attorney. The firm gets the lead
 * with the same summary, so whoever picks it up already knows what the person
 * answered and does not have to ask again.
 *
 * WHAT IS NEVER SENT. The facts of anyone's case, because the form has no field
 * for them. What travels is the ANSWER SET: seven multiple-choice answers about
 * the status of a record. That is deliberate and it is the Rule 4-1.18 line.
 * Detailed case facts from a prospective client can impose confidentiality
 * duties and conflict the firm out of the other side of a matter it has not
 * taken, so the tool is built not to receive them rather than trusted not to
 * look at them.
 *
 * NOTHING IS STORED. There is no database write here and no logging of answers.
 * The submission becomes two emails and then it is gone.
 *
 * FAILS LOUDLY WHEN UNCONFIGURED, matching the contact form: someone who wants
 * their summary must never get a success message for an email nobody sent.
 *
 * [NEEDS: verified Resend domain] SITE.md launch blocker.
 * [NEEDS: confirmed intake address] firm.email is a placeholder.
 */

export type CheckerState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email", string>>;
};

const MAX = { name: 120, email: 160 } as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, cap: number) {
  return typeof value === "string" ? value.trim().slice(0, cap) : "";
}

/**
 * Rebuild the answer set from the posted form, accepting only ids the engine
 * defines. An unknown question id or an unknown choice id is dropped rather
 * than trusted, so nothing arbitrary reaches the summary or the inbox.
 */
function parseAnswers(formData: FormData): Answers {
  const out: Answers = {};
  for (const q of QUESTIONS) {
    const raw = clean(formData.get(`q_${q.id}`), 40);
    if (raw && q.choices.some((c) => c.id === raw)) out[q.id] = raw;
  }
  return out;
}

function summaryLines(answers: Answers): string[] {
  const result = evaluate(answers);
  const lines: string[] = [];

  lines.push("YOUR ANSWERS");
  for (const q of QUESTIONS) {
    const a = answers[q.id];
    if (!a) continue;
    const choice = q.choices.find((c) => c.id === a);
    lines.push(`- ${q.prompt}`);
    lines.push(`  ${choice ? choice.label : a}`);
  }

  lines.push("");
  lines.push("WHAT THE STATUTE SAYS");
  lines.push(result.headline);
  lines.push("");
  lines.push(result.summary);
  lines.push("");

  for (const c of result.conditions) {
    const mark =
      c.verdict === "met" ? "MET" : c.verdict === "failed" ? "NOT MET" : "NEEDS CHECKING";
    lines.push(`[${mark}] ${c.condition.cite}`);
    lines.push(`  ${c.condition.plain}`);
    lines.push(`  ${c.because}`);
    lines.push("");
  }

  if (result.route) {
    lines.push(`A different route may apply: ${result.route.label} (${result.route.cite}).`);
    lines.push(`  ${result.route.note}`);
    lines.push("");
  }

  lines.push(
    "This is information about how Statute 943.059 reads, not legal advice, and not a decision about your record. Using this page does not create an attorney-client relationship.",
  );
  return lines;
}

export async function submitChecker(
  _prev: CheckerState,
  formData: FormData,
): Promise<CheckerState> {
  // Honeypot. Real users never fill a hidden field.
  if (clean(formData.get("company"), 100)) {
    return { status: "success" };
  }

  const name = clean(formData.get("name"), MAX.name);
  const email = clean(formData.get("email"), MAX.email);

  const fieldErrors: CheckerState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter an email address so we can send it.";
  else if (!EMAIL.test(email)) fieldErrors.email = "Please check this email address.";

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please correct the fields below.", fieldErrors };
  }

  const answers = parseAnswers(formData);
  // Server-side validation of the substance, not just the contact fields: a
  // summary built from no answers is not a summary.
  if (Object.keys(answers).length < 3) {
    return {
      status: "error",
      message: "Please answer the questions before asking for a copy.",
    };
  }

  const result = evaluate(answers);
  const body = summaryLines(answers).join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error(
      "[seal-expunge] Not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    );
    return {
      status: "error",
      message: `We are not able to send email from this page yet. Please call ${firm.phone} and we will go through it with you.`,
    };
  }

  try {
    const resend = new Resend(apiKey);

    // 1. The reader's copy. replyTo is the firm, so a reply reaches an attorney.
    const toReader = await resend.emails.send({
      from,
      to: email,
      replyTo: firm.email,
      subject: "Your Florida record sealing summary",
      text: [
        `${name},`,
        "",
        "Here is the summary you asked for from the record sealing checker.",
        "",
        body,
        "",
        "If you want an attorney to look at this, reply to this email and one will get back to you.",
        "",
        firm.legalName,
        firm.phone,
      ].join("\n"),
    });
    if (toReader.error) throw new Error(toReader.error.message);

    // 2. The firm's copy. Sent second and NOT allowed to fail the submission:
    // the reader has already been served, and a notification problem is the
    // firm's to fix rather than something to show them an error about.
    const toFirm = await resend.emails.send({
      from,
      to: firm.email,
      replyTo: email,
      subject: `Sealing checker: ${name} (${result.outcome})`,
      text: [
        `${name} used the record sealing checker and asked for a copy.`,
        "",
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Outcome: ${result.headline}`,
        "",
        body,
        "",
        "Reply to this email to reach them directly.",
      ].join("\n"),
    });
    if (toFirm.error) {
      console.error("[seal-expunge] Firm notification failed:", toFirm.error.message);
    }

    return { status: "success" };
  } catch (cause) {
    console.error("[seal-expunge] Send failed:", cause);
    return {
      status: "error",
      message: `We could not send that. Please call ${firm.phone} and we will go through it with you.`,
    };
  }
}

/** Exported for the gate, which asserts the summary names every condition. */
export async function summaryForTest(answers: Answers): Promise<string> {
  return summaryLines(answers).join("\n");
}

// Referenced so the conditions map is part of this module's contract.
export const CONDITION_COUNT = Object.keys(CONDITIONS).length;
