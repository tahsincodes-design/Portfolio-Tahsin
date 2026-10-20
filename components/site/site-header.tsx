"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, Mail, Menu, Phone, X } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig, socialLinks } from "@/lib/site"
import { cn } from "@/lib/utils"
import { BrandMark } from "./brand-mark"
import { SocialIcon } from "./social-icon"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} — home`}
          onClick={() => setOpen(false)}
        >
          <BrandMark className="h-8 w-12 group-hover:border-violet/40" />
          <span className="hidden text-sm font-medium whitespace-nowrap sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {siteConfig.resumeUrl ? (
            <a
              href={siteConfig.resumeUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "hidden h-9 rounded-full px-3.5 sm:inline-flex"
              )}
            >
              <Download className="size-3.5" />
              CV
            </a>
          ) : null}
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-9 rounded-full px-4 sm:inline-flex"
            )}
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            className="container-page flex flex-col py-6"
            aria-label="Mobile navigation"
          >
            {siteConfig.nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border/70 py-4 text-lg font-medium text-foreground"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <Mail className="size-4 text-violet" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <Phone className="size-4 text-violet" />
                {siteConfig.phone}
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <SocialIcon name={link.icon} className="size-4 text-violet" />
                  {link.label}
                </a>
              ))}
            </div>

            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "mt-8 h-11 w-full rounded-full"
                )}
              >
                <Download className="size-4" />
                Download CV
              </a>
            ) : null}

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 w-full rounded-full",
                siteConfig.resumeUrl ? "mt-3" : "mt-8"
              )}
            >
              Start a conversation
              <ArrowUpRight className="size-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
