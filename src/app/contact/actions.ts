"use server";

import { Resend } from "resend";
import { firm } from "@/lib/site";
import { contactDelivery } from "@/lib/contact-delivery";

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
 * [NEEDS: verified Resend domain] SITE.md launch blocker.
 * [NEEDS: confirmed intake address] firm.email is a placeholder.
 * Set RESEND_API_KEY and CONTACT_FROM_EMAIL to enable delivery.
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

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot. Real users never fill a hidden field.
  if (clean(formData.get("company"), 100)) {
    return { status: "success" };
  }

  const name = clean(formData.get("name"), MAX.name);
  const phone = clean(formData.get("phone"), MAX.phone);
  const email = clean(formData.get("email"), MAX.email);
  const note = clean(formData.get("note"), MAX.note);

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

  const delivery = contactDelivery();

  if (!delivery) {
    // Not an exception. The user gets a usable next step, and the server log
    // says exactly what is missing.
    console.error(
      "[contact] Not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.",
    );
    return {
      status: "error",
      message: `This form is not able to send messages yet. Please call ${firm.phone} and we will take your details over the phone.`,
    };
  }

  try {
    const resend = new Resend(delivery.apiKey);
    const { error } = await resend.emails.send({
      from: delivery.from,
      to: firm.email,
      replyTo: email || undefined,
      subject: `Website enquiry: ${name}`,
      text: [
        `Name:  ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "not given"}`,
        "",
        "Message:",
        note || "(none)",
      ].join("\n"),
    });

    if (error) throw new Error(error.message);

    return {
      status: "success",
      message:
        "Thank you. Your message has been sent and someone will be in touch.",
    };
  } catch (cause) {
    console.error("[contact] Send failed:", cause);
    return {
      status: "error",
      message: `We could not send your message. Please call ${firm.phone}.`,
    };
  }
}
