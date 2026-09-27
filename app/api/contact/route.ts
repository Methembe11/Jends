import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

/**
 * Validates contact enquiries.
 *
 * Delivery note: wire a transactional email provider (Resend, Postmark,
 * SES) into the marked block below to deliver server-side. Until then the
 * client hands the enquiry off to the visitor's mail app, so a submission
 * is never silently discarded.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot: bots fill hidden fields, people do not.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // ---- Delivery hook -------------------------------------------------
  // Forward `message` to your email provider here.
  // -------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}
