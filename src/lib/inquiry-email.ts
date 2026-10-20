/**
 * The inquiry email the firm receives (D140): an HTML version laid out for a
 * quick read, plus the plain-text version as the fallback.
 *
 * Email clients ignore most CSS, so this is the old reliable form: tables,
 * inline styles, web-safe fonts, 600px wide. Every visitor-supplied value is
 * HTML-escaped before it goes in.
 */
import { firm } from "./site.ts";

export type Inquiry = { name: string; phone: string; email: string; note: string; source: string };

const NAVY = "#101933";
const GOLD = "#c5a059";
const MUTED = "#5b6275";
const LINE = "#e3e5ea";
const FONT = "Helvetica, Arial, sans-serif";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const received = () =>
  new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }) + " ET";

export function inquirySubject({ name, source }: Inquiry): string {
  return `New website inquiry from ${name}${source ? ` (${source})` : ""}`;
}

export function inquiryText(i: Inquiry): string {
  return [
    `New inquiry${i.source ? `: ${i.source}` : ""}`,
    "",
    `Name:     ${i.name}`,
    `Phone:    ${i.phone}`,
    `Email:    ${i.email || "not given"}`,
    `Received: ${received()}`,
    "",
    "What happened:",
    i.note || "(no message)",
    "",
    i.email ? "Reply to this email to answer them directly." : "No email given. Call them back.",
  ].join("\n");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-top:1px solid ${LINE};font:13px ${FONT};color:${MUTED};width:110px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-top:1px solid ${LINE};font:15px ${FONT};color:${NAVY};vertical-align:top;">${value}</td>
  </tr>`;
}

function button(href: string, label: string, filled: boolean) {
  const bg = filled ? GOLD : "#ffffff";
  return `<a href="${href}" style="display:inline-block;padding:12px 20px;margin:0 8px 8px 0;background:${bg};border:1px solid ${filled ? GOLD : NAVY};color:${NAVY};font:bold 14px ${FONT};text-decoration:none;">${label}</a>`;
}

export function inquiryHtml(i: Inquiry): string {
  const tel = `tel:${i.phone.replace(/[^\d+]/g, "")}`;
  const note = i.note ? esc(i.note).replace(/\n/g, "<br>") : `<span style="color:${MUTED};">No message.</span>`;
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;">
      <tr><td style="background:${NAVY};padding:20px 28px;border-bottom:3px solid ${GOLD};">
        <div style="font:bold 12px ${FONT};letter-spacing:1px;color:${GOLD};text-transform:uppercase;">New website inquiry</div>
        <div style="font:15px ${FONT};color:#ffffff;margin-top:4px;">${esc(firm.name)}</div>
      </td></tr>
      <tr><td style="padding:28px 28px 8px;">
        ${i.source ? `<div style="font:13px ${FONT};color:${MUTED};">${esc(i.source)}</div>` : ""}
        <div style="font:bold 24px ${FONT};color:${NAVY};margin-top:4px;">${esc(i.name)}</div>
        <div style="margin-top:18px;">
          ${button(tel, `Call ${esc(i.phone)}`, true)}
          ${i.email ? button(`mailto:${esc(i.email)}`, "Email them", false) : ""}
        </div>
      </td></tr>
      <tr><td style="padding:8px 28px 4px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row("Phone", `<a href="${tel}" style="color:${NAVY};">${esc(i.phone)}</a>`)}
          ${row("Email", i.email ? `<a href="mailto:${esc(i.email)}" style="color:${NAVY};">${esc(i.email)}</a>` : `<span style="color:${MUTED};">Not given</span>`)}
          ${row("Page", esc(i.source || "Contact page"))}
          ${row("Received", received())}
        </table>
      </td></tr>
      <tr><td style="padding:16px 28px 28px;">
        <div style="font:bold 13px ${FONT};color:${MUTED};margin-bottom:8px;">What happened</div>
        <div style="background:#f7f7f9;border-left:3px solid ${GOLD};padding:14px 16px;font:15px/1.6 ${FONT};color:${NAVY};">${note}</div>
      </td></tr>
      <tr><td style="padding:16px 28px;border-top:1px solid ${LINE};font:13px ${FONT};color:${MUTED};">
        ${i.email ? "Reply to this email to answer them directly." : "No email was given. Call them back."}
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}
