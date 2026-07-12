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

/** Graph API version — pinned to a stable, broadly-available release. */
const GRAPH_API_VERSION = "v21.0";

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
    data.company ? `*Company:* ${data.company}` : "*Company:* Not provided",
    `*Email:* ${data.email}`,
    data.phone ? `*Phone:* ${data.phone}` : "*Phone:* Not provided",
    data.serviceInterest ? `*Service:* ${data.serviceInterest}` : "*Service:* Not provided",
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

/**
 * Safely extract a WhatsApp message ID from a Meta Graph API response.
 * Meta can return HTTP 200 with an error body (e.g. rate-limit, quota),
 * so we only consider it a real success when `messages[0].id` is present.
 */
function extractMessageId(body: unknown): string | null {
  if (body && typeof body === "object" && "messages" in body) {
    const msgs = (body as { messages?: Array<{ id?: string }> }).messages;
    if (Array.isArray(msgs) && msgs.length > 0 && typeof msgs[0].id === "string") {
      return msgs[0].id;
    }
  }
  return null;
}

/** Safely extract Meta error code/message from a non-success response body. */
function extractMetaError(body: unknown): { code: number | null; message: string } {
  if (body && typeof body === "object" && "error" in body) {
    const err = (body as { error?: { code?: number; message?: string; type?: string } }).error;
    return {
      code: typeof err?.code === "number" ? err.code : null,
      message: typeof err?.message === "string" ? err.message.slice(0, 200) : "unknown",
    };
  }
  return { code: null, message: "unknown" };
}

/**
 * Send the enquiry to the IBS WhatsApp number via the Meta WhatsApp Cloud API.
 *
 * Strategy:
 *   1. Try the approved template `website_enquiry_alert` (with 7 positional
 *      parameters) — required for opening business-initiated conversations in
 *      production.
 *   2. If the template send fails OR no template name is configured, fall back
 *      to a plain text message. (Plain text only works if a 24h customer
 *      window is open; in production this is a secondary path.)
 *
 * A send is only considered successful when Meta returns `messages[0].id`.
 * HTTP 200 alone is NOT enough — Meta can return 200 with an error body.
 *
 * Returns `{ ok: true, messageId }` on success or `{ ok: false, reason, ... }` on failure.
 * Never throws — failures are surfaced to the caller so the wa.me fallback can kick in.
 */
async function sendWhatsAppCloudApi(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest?: string;
  message: string;
}): Promise<{ ok: true; messageId: string; usedFallback: boolean } | { ok: false; reason: string; usedFallback: boolean }> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const toNumber = process.env.WHATSAPP_TO_NUMBER ?? WHATSAPP_NUMBER;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME ?? "website_enquiry_alert";
  const templateLanguage =
    process.env.WHATSAPP_TEMPLATE_LANGUAGE ?? "en";

  if (!accessToken || !phoneNumberId) {
    return { ok: false, reason: "missing-env", usedFallback: false };
  }

  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const endpoint = `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`;
  const headers: HeadersInit = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  // --- Attempt 1: approved template (with 7 positional parameters) ----------
  // Template parameters must each be <= 1024 chars and the message text itself
  // is constrained by WhatsApp's overall message-size rules. Our form already
  // caps message at 1000 chars, well within limits.
  const templateParams = [
    data.name,
    data.company || "Not provided",
    data.email,
    data.phone || "Not provided",
    data.serviceInterest || "Not provided",
    data.message,
    now,
  ];

  const templatePayload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: toNumber,
    type: "template",
    template: {
      name: templateName,
      language: { code: templateLanguage },
      components: [
        {
          type: "body",
          parameters: templateParams.map((value) => ({
            type: "text",
            text: value,
          })),
        },
      ],
    },
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(templatePayload),
      // Never cache a credential-bearing request.
      cache: "no-store",
    });

    const resBody = await res.json().catch(() => null);

    if (res.ok && extractMessageId(resBody)) {
      const messageId = extractMessageId(resBody)!;
      console.info("[contact] WhatsApp template send succeeded", { messageId });
      return { ok: true, messageId, usedFallback: false };
    }

    // Template send did not produce a message ID — log details and try text.
    const metaErr = extractMetaError(resBody);
    console.warn("[contact] WhatsApp template send failed — falling back to text", {
      templateName,
      templateLanguage,
      templateStatus: res.status,
      templateErrorCode: metaErr.code,
      templateErrorMessage: metaErr.message,
    });
  } catch (err) {
    console.warn("[contact] WhatsApp template send threw — trying text fallback", {
      err: err instanceof Error ? err.message : String(err),
    });
  }

  // --- Attempt 2: plain text fallback (only works inside the 24h window) ----
  const textPayload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: toNumber,
    type: "text",
    text: {
      preview_url: false,
      body: buildWhatsAppMessage(data),
    },
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(textPayload),
      cache: "no-store",
    });

    const resBody = await res.json().catch(() => null);

    if (res.ok && extractMessageId(resBody)) {
      const messageId = extractMessageId(resBody)!;
      console.info("[contact] WhatsApp text send succeeded (fallback path)", { messageId });
      return { ok: true, messageId, usedFallback: true };
    }

    const metaErr = extractMetaError(resBody);
    console.warn("[contact] WhatsApp text send failed", {
      textStatus: res.status,
      textErrorCode: metaErr.code,
      textErrorMessage: metaErr.message,
    });
    return { ok: false, reason: `whatsapp-api-${res.status}`, usedFallback: true };
  } catch (err) {
    console.warn("[contact] WhatsApp text send threw", {
      err: err instanceof Error ? err.message : String(err),
    });
    return { ok: false, reason: "whatsapp-network", usedFallback: true };
  }
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

  // --- Primary: send via WhatsApp Cloud API -------------------------------
  // This is the main delivery path. If it succeeds, the visitor sees the
  // clean "Your enquiry has been sent" success message. If it fails (or env
  // vars are missing), we fall back to a wa.me link so the visitor can still
  // complete the enquiry in WhatsApp with one tap.
  const whatsappResult = await sendWhatsAppCloudApi({
    name,
    email,
    phone: phone || undefined,
    company: companyName || undefined,
    serviceInterest: serviceInterest || undefined,
    message,
  });

  // Always build the wa.me URL — we return it when Cloud API fails so the
  // frontend can open WhatsApp with the prefilled message as a fallback.
  const whatsappText = buildWhatsAppMessage({
    name,
    email,
    phone: phone || undefined,
    company: companyName || undefined,
    serviceInterest: serviceInterest || undefined,
    message,
  });
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  if (whatsappResult.ok) {
    // Cloud API succeeded — enquiry is delivered. No need to push the visitor
    // into WhatsApp themselves.
    return NextResponse.json({
      ok: true,
      delivered: true,
    });
  }

  // Cloud API failed — provide the wa.me link as a fallback.
  // Log a sanitized breadcrumb (no token, no PII payload) so ops can see why.
  console.warn("[contact] WhatsApp Cloud API did not deliver — returning wa.me fallback", {
    reason: whatsappResult.reason,
    usedFallback: whatsappResult.usedFallback,
    savedToDb,
    emailed,
  });

  return NextResponse.json({
    ok: true,
    delivered: false,
    fallbackUrl: whatsappUrl,
  });
}
