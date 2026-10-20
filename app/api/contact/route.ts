import { NextResponse } from "next/server"
import { Resend } from "resend"

import { contactSchema } from "@/lib/contact-schema"

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimit = new Map<string, RateLimitEntry>()

function isRateLimited(key: string) {
  const now = Date.now()
  const entry = rateLimit.get(key)

  if (!entry || entry.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true
  }

  entry.count += 1
  return false
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    )
  }

  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    const { name, email, message } = parsed.error.flatten().fieldErrors

    return NextResponse.json(
      {
        message: "Please fix the highlighted fields.",
        fieldErrors: {
          name: name?.[0],
          email: email?.[0],
          message: message?.[0],
        },
      },
      { status: 400 }
    )
  }

  const { name, email, message, website, startedAt } = parsed.data

  // Honeypot and time trap: accept silently so bots do not learn anything.
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (startedAt && Date.now() - startedAt < 1500) {
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>"

  if (!apiKey || !to) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL.")

    return NextResponse.json(
      {
        message:
          "The contact form is not configured yet. Please email me directly in the meantime.",
      },
      { status: 503 }
    )
  }

  const forwardedFor = request.headers.get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many messages. Please try again in a few minutes." },
      { status: 429 }
    )
  }

  const safeName = name.replace(/[\r\n]+/g, " ")
  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio inquiry — ${safeName}`,
    text: [
      "New portfolio inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 20px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <div style="padding: 16px; border-radius: 12px; background: #f5f3ff; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `,
  })

  if (error) {
    console.error("Resend error:", error)

    return NextResponse.json(
      { message: "The message could not be sent. Please try again." },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
