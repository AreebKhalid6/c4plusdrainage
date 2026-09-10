import nodemailer from "nodemailer";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  source?: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function createMailTransport() {
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendLeadEmail(lead: LeadPayload) {
  const transport = createMailTransport();
  const to = process.env.LEAD_TO_EMAIL?.trim() || "info@c4plusdrainage.co.uk";
  const from =
    process.env.LEAD_FROM_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim() ||
    to;

  const source = lead.source?.trim() || "Website form";
  const subject = `New lead — ${lead.service} (${lead.name})`;

  const text = [
    "New website lead",
    "================",
    `Source: ${source}`,
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Location: ${lead.location}`,
    `Service: ${lead.service}`,
    "",
    "Message:",
    lead.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a2b4b;max-width:640px">
      <h2 style="margin:0 0 12px;color:#0090d8">New website lead</h2>
      <p style="margin:0 0 16px;color:#64748b">A customer submitted a form on c4plusdrainage.co.uk</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-weight:700;width:120px">Source</td><td style="padding:8px 0">${escapeHtml(source)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Name</td><td style="padding:8px 0">${escapeHtml(lead.name)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Phone</td><td style="padding:8px 0"><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Location</td><td style="padding:8px 0">${escapeHtml(lead.location)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Service</td><td style="padding:8px 0">${escapeHtml(lead.service)}</td></tr>
      </table>
      <div style="margin-top:16px;padding:14px;background:#f3f6f9;border-radius:10px">
        <p style="margin:0 0 6px;font-weight:700">Message</p>
        <p style="margin:0;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
      </div>
    </div>
  `;

  await transport.sendMail({
    from: `"C4 Plus Drainage Website" <${from}>`,
    to,
    replyTo: lead.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
