import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "mattpintoguitar@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        error:
          "Contact form email is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contact form: ${subject}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send the message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
