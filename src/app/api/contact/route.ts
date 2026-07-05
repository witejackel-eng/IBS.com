import { NextResponse } from "next/server";
import { Resend } from "resend";

import { prisma } from "@/lib/db";
import { contactFormSchema } from "@/lib/validation/contact";
import { company } from "@/lib/content";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, company: companyName, serviceInterest, message } = parsed.data;

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

  if (!savedToDb && !emailed) {
    console.warn(
      "Contact submission could not be persisted or emailed (DATABASE_URL/RESEND_API_KEY unset or unreachable).",
      { name, email }
    );
    return NextResponse.json(
      { error: "Unable to deliver your message right now. Please call or email us directly." },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
