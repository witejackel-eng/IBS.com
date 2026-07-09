import { NextResponse } from "next/server";
import { Resend } from "resend";

import { prisma } from "@/lib/db";
import { contactFormSchema } from "@/lib/validation/contact";
import { company } from "@/lib/content";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

/** WhatsApp number for IBS enquiries (without + or spaces). */
const WHATSAPP_NUMBER = "918368561919";

/**
 * Build a clean, human-readable WhatsApp message from the form data.
 * Server-side to keep the phone number and message format out of the frontend bundle.
 */
function buildWhatsAppMessage(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  message: string;
}): string {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const lines = [
    "🌐 *NEW WEBSITE ENQUIRY*",
    "",
    "A client submitted an enquiry from the IBS website.",
    "",
    `*Name:* ${data.name}`,
    data.company ? `*Company:* ${data.company}` : null,
    `*Email:* ${data.email}`,
    data.phone ? `*Phone:* ${data.phone}` : null,
    data.serviceInterest ? `*Service:* ${data.serviceInterest}` : null,
    "",
    `*Message:* ${data.message}`,
    "",
    "━━━━━━━━━━━━━━━━━━",
    `Source: IBS Website Contact Form`,
    `Website: ibsinfra.com`,
    `Submitted At: ${now}`,
  ];

  return lines.filter((l) => l !== null).join("\n");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { success, resetAt } = rateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!success) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": Math.ceil((resetAt - Date.now()) / 1000).toString() } }
    );
  }

  const body = await request.json().catch(() => null);

  // Honeypot: a hidden field real users never fill in. Bots that populate
  // every input trip it, so we pretend success without doing any real work.
  if (body && typeof body === "object" && "hp" in body && typeof body.hp === "string" && body.hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, company: companyName, serviceInterest, message } = parsed.data;

  // --- Best-effort: save to database ---
  let savedToDb = false;
  if (prisma) {
    try {
      await prisma.contactSubmission.create({
        data: { name, email, phone, company: companyName, serviceInterest, message },
      });
      savedToDb = true;
    } catch (err) {
      console.error("Failed to save contact submission to the database:", err);
    }
  }

  // --- Best-effort: send notification email ---
  let emailed = false;
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "IBS Website <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL ?? company.contact.email,
        replyTo: email,
        subject: `New enquiry from ${name}${companyName ? ` (${companyName})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          companyName ? `Company: ${companyName}` : null,
          serviceInterest ? `Interested in: ${serviceInterest}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      emailed = true;
    } catch (err) {
      console.error("Failed to send contact notification email:", err);
    }
  }

  // --- Always build WhatsApp URL (minimum viable delivery path) ---
  const whatsappText = buildWhatsAppMessage({ name, email, phone: phone || undefined, company: companyName || undefined, serviceInterest: serviceInterest || undefined, message });
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  // Log if neither persistence channel worked — but still return the
  // WhatsApp URL so the user can always send their enquiry.
  if (!savedToDb && !emailed) {
    console.warn(
      "Contact submission could not be persisted or emailed (DATABASE_URL/RESEND_API_KEY unset or unreachable). WhatsApp URL provided as fallback.",
      { name, email }
    );
  }

  return NextResponse.json({ ok: true, whatsappUrl });
}