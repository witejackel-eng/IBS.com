import { NextResponse } from "next/server";
import { Resend } from "resend";

import { prisma } from "@/lib/db";
import { careerFormSchema } from "@/lib/validation/career";
import { company } from "@/lib/content";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

/**
 * Career application endpoint. Mirrors the contact endpoint's shape — same
 * honeypot pattern, same rate-limit window, same DB-then-email fallback —
 * but writes to a separate CareerApplication table and notifies the
 * recruiting inbox (set via CAREERS_TO_EMAIL) instead of the sales inbox.
 */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const { success, resetAt } = rateLimit(`careers:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!success) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": Math.ceil((resetAt - Date.now()) / 1000).toString() } }
    );
  }

  const body = await request.json().catch(() => null);

  // Honeypot: bots that fill every hidden field get a fake success.
  if (body && typeof body === "object" && "hp" in body && typeof body.hp === "string" && body.hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = careerFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, role, experience, location, resumeLink, message } = parsed.data;

  let savedToDb = false;
  if (prisma) {
    try {
      await prisma.careerApplication.create({
        data: { name, email, phone, role, experience, location, resumeLink, message },
      });
      savedToDb = true;
    } catch (err) {
      console.error("Failed to save career application to the database:", err);
    }
  }

  let emailed = false;
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "IBS Careers <onboarding@resend.dev>",
        to: process.env.CAREERS_TO_EMAIL ?? company.contact.email,
        replyTo: email,
        subject: `New application: ${name} → ${role}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          `Role: ${role}`,
          experience ? `Experience: ${experience}` : null,
          location ? `Current location: ${location}` : null,
          resumeLink ? `Resume: ${resumeLink}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      emailed = true;
    } catch (err) {
      console.error("Failed to send career application notification email:", err);
    }
  }

  if (!savedToDb && !emailed) {
    console.warn(
      "Career application could not be persisted or emailed (DATABASE_URL/RESEND_API_KEY unset or unreachable).",
      { name, email, role }
    );
    return NextResponse.json(
      { error: "Unable to deliver your application right now. Please email us directly at " + company.contact.email + "." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
