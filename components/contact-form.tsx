"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import type { ContactFieldErrors } from "@/lib/contact-schema"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

type FormStatus = "idle" | "submitting" | "success" | "error"

const inputClass =
  "h-11 w-full rounded-xl border border-input bg-background/60 px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-3 focus:ring-ring/20"

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [serverError, setServerError] = useState("")
  const startedAtRef = useRef<number | null>(null)

  useEffect(() => {
    startedAtRef.current = Date.now()
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("submitting")
    setErrors({})
    setServerError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
          website: String(formData.get("website") ?? ""),
          startedAt: startedAtRef.current ?? undefined,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as {
        message?: string
        fieldErrors?: ContactFieldErrors
      }

      if (!response.ok) {
        setErrors(data.fieldErrors ?? {})
        setServerError(
          data.message ?? "Something went wrong. Please try again."
        )
        setStatus("error")
        return
      }

      form.reset()
      setStatus("success")
    } catch {
      setServerError(
        "The message could not be sent. Check your connection and try again."
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start rounded-2xl border border-border bg-card p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="grid size-11 place-items-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="size-5" />
        </div>
        <h3 className="mt-5 text-xl font-medium tracking-[-0.02em]">
          Message sent.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle")
            startedAtRef.current = Date.now()
          }}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-6 h-10 rounded-full px-4 text-sm"
          )}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-medium tracking-[-0.02em]">
          Tell me about it
        </h3>
        <span className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
          {siteConfig.hours}
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClass, "mt-2")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputClass, "mt-2")}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="text-xs font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={2000}
          rows={6}
          placeholder="What are you building, and where could I help?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            inputClass,
            "mt-2 h-auto min-h-36 resize-y py-3 leading-6"
          )}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {serverError ? (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 px-3.5 py-3 text-xs leading-5 text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {serverError}
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[11px] leading-5 text-muted-foreground">
          Your details are only used to reply to this message.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 shrink-0 rounded-full px-5 text-sm disabled:opacity-60"
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
