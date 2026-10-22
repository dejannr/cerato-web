import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map();

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().min(1).max(160),
  website: z.string().trim().max(2048).optional(),
  context: z.array(z.string().trim().min(1).max(100)).max(8).default([]),
  message: z.string().trim().min(1).max(5000),
  companySite: z.string().max(0).optional(),
});

function getClientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const { name, email, company, website, context, message, companySite } = result.data;
  if (companySite) return NextResponse.json({ success: true });

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_SENDER;
  const recipient = process.env.CONTACT_RECIPIENT;

  if (!apiKey || !sender || !recipient) {
    console.error("Contact form delivery is missing Resend environment variables.");
    return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 503 });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Cerato Systems Website <${sender}>`,
        to: [`Andrija Ilic <${recipient}>`],
        reply_to: `${name} <${email}>`,
        subject: `New website inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company}`,
          website ? `Website: ${website}` : null,
          context.length ? `Project context: ${context.join(", ")}` : null,
          "",
          "Message:",
          message,
        ].filter(Boolean).join("\n"),
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      console.error("Contact form delivery failed:", await resendResponse.text());
      return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 500 });
    }
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json({ error: "Unable to send your message right now. Please try again later." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
