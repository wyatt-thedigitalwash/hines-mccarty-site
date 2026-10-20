"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { firm } from "@/lib/site";
import { contactDelivery } from "@/lib/contact-delivery";
import { checkBotId } from "botid/server";
import { isRepeat, remember, spamReason } from "@/lib/spam";
import { inquiryHtml, inquirySubject, inquiryText } from "@/lib/inquiry-email";

/**
 * Contact form submission.
 *
 * Server-side validation per CLAUDE.md, and the API key never leaves this file.
 *
 * FAILS LOUDLY WHEN UNCONFIGURED. The worst outcome for this page is not a
 * validation bug, it is someone in a crisis submitting a form that silently
 * goes nowhere. If Resend is not configured, this returns an explicit error
 * telling them to call, rather than a success message for a message nobody
 * received.
 *
 * WHETHER IT IS CONFIGURED IS NOT DECIDED HERE. It comes from
 * src/lib/contact-delivery.ts, which the page's metadata and the sitemap read
 * too, so "is the form live" has one answer rather than three that can drift.
 *
 * Set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL to enable
 * delivery (.env.example). D83.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "email" | "note", string>>;
};

const MAX = { name: 120, phone: 40, email: 160, note: 2000 } as const;

// Deliberately permissive. A regex that rejects a real address is a lost
// client; the address gets verified by someone replying to it anyway.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, cap: number) {
  return typeof value === "string" ? value.trim().slice(0, cap) : "";
}

/*
  SPAM, beyond the honeypot (D83). Two cheap checks that need no outside
  service:
  - TOO FAST. The form stamps the time it was shown; a submission under three
    seconds later was not typed by a person. It gets the same quiet "success"
    as the honeypot, so a bot learns nothing.
  - TOO MANY. At most five submissions per visitor (by IP) in ten minutes.
    Kept in memory, so on serverless it is per instance and resets on a cold
    start: a brake on a flood, not a guarantee. A person who hits it is told
    to call, never silently dropped.
*/
const SENT = "Thank you. Your message has been sent and someone will be in touch.";
const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const PER_WINDOW = 3;
const recent = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > PER_WINDOW;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot. Real users never fill a hidden field.
  if (clean(formData.get("company"), 100)) {
    return { status: "success", message: SENT };
  }

  const name = clean(formData.get("name"), MAX.name);
  const phone = clean(formData.get("phone"), MAX.phone);
  const email = clean(formData.get("email"), MAX.email);
  const note = clean(formData.get("note"), MAX.note);
  // D132: the page a hero form was sent from, so the firm knows the matter.
  const source = clean(formData.get("source"), 120);

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!phone) {
    fieldErrors.phone = "Please enter a phone number we can reach you on.";
  } else if (phone.replace(/\D/g, "").length < 10) {
    fieldErrors.phone = "Please enter a complete phone number.";
  }
  if (email && !EMAIL.test(email)) {
    fieldErrors.email = "Please check this email address.";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Please correct the fields below.",
      fieldErrors,
    };
  }

  // D139: the speed and rate checks run after field validation, so a person
  // who submits an incomplete form sees what is missing, never a false
  // "sent".
  const shownAt = Number(clean(formData.get("shown_at"), 20));
  if (shownAt && Date.now() - shownAt < MIN_FILL_MS) {
    return { status: "success", message: SENT };
  }
  const ip = ((await headers()).get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) {
    return {
      status: "error",
      message: `We have received several messages from you in the last few minutes. Please call ${firm.phone} and we will help you right away.`,
    };
  }

  /*
    D139. Bots and mass-produced spam get the same quiet "success" as the
    honeypot, so nothing tells them what tripped. Real people are never
    silently dropped by the bot check on an error: if Vercel BotID cannot be
    reached, the message goes through.
  */
  try {
    const verdict = await checkBotId({
      // BotID only works on Vercel; locally every visitor passes.
      developmentOptions: { isDevelopment: !process.env.VERCEL },
    });
    if (verdict.isBot && !verdict.isVerifiedBot) {
      console.warn("[contact] Dropped: BotID flagged the submission.");
      return { status: "success", message: SENT };
    }
  } catch (cause) {
    console.error("[contact] BotID check failed, sending anyway:", cause);
  }
  const input = { name, email, phone, note };
  const reason = spamReason(input);
  if (reason) {
    console.warn(`[contact] Dropped as spam: ${reason}.`);
    return { status: "success", message: SENT };
  }
  if (isRepeat(input)) {
    console.warn("[contact] Dropped: an exact repeat of a message already sent.");
    return { status: "success", message: SENT };
  }

  const delivery = contactDelivery();

  if (!delivery) {
    // Not an exception. The user gets a usable next step, and the server log
    // says exactly what is missing.
    console.error(
      "[contact] Not configured: set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL.",
    );
    return {
      status: "error",
      message: `This form is not able to send messages yet. Please call ${firm.phone} and we will take your details over the phone.`,
    };
  }

  try {
    const resend = new Resend(delivery.apiKey);
    const inquiry = { name, phone, email, note, source };
    // D139: from the verified sending domain, to every inbox on the list,
    // with Reply-To set to the visitor so "Reply" reaches them directly.
    const { error } = await resend.emails.send({
      from: delivery.from,
      to: delivery.to,
      replyTo: email || undefined,
      subject: inquirySubject(inquiry),
      html: inquiryHtml(inquiry),
      text: inquiryText(inquiry),
    });

    if (error) throw new Error(error.message);
    remember(input);

    return { status: "success", message: SENT };
  } catch (cause) {
    console.error("[contact] Send failed:", cause);
    return {
      status: "error",
      message: `We could not send your message. Please call ${firm.phone}.`,
    };
  }
}
