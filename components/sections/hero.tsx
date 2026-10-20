import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react"

import { SocialIcon } from "@/components/site/social-icon"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig, socialLinks } from "@/lib/site"
import { cn } from "@/lib/utils"

function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_35%_20%,rgba(120,103,247,0.28),transparent_62%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl shadow-black/20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[#e9e7f5]">
          <Image
            src={siteConfig.profileImage}
            alt={`${siteConfig.name}, ${siteConfig.role}`}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-top mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,32,0.16),transparent_42%)]"
          />

          <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-background/75 px-2.5 py-1 font-mono text-[8px] tracking-[0.16em] text-foreground uppercase backdrop-blur">
            <span className="size-1.5 rounded-full bg-success" />
            {siteConfig.availability}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
          <div>
            <p className="text-sm font-medium">{siteConfig.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] tracking-[0.14em] text-muted-foreground uppercase">
            <MapPin className="size-3 text-violet" />
            Dhaka, BD
          </span>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-3 hidden rounded-xl border border-border bg-background/90 px-3 py-2 font-mono text-[9px] tracking-[0.14em] text-muted-foreground uppercase shadow-lg shadow-black/10 backdrop-blur sm:block">
        Next.js · TypeScript · MongoDB
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full"
      />

      <div className="container-page relative pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <div>
            <div className="animate-fade-up flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-success" />
                {siteConfig.availability}
              </span>
              <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                Portfolio / 2026
              </span>
            </div>

            <h1 className="animate-fade-up mt-7 text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-medium tracking-[-0.05em] text-balance">
              I build digital products that solve{" "}
              <span className="font-serif font-normal text-violet italic">
                real problems.
              </span>
            </h1>

            <p className="animate-fade-up-delayed mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Full-stack developer and computer science student at the
              University of Liberal Arts Bangladesh, building modern, responsive
              web applications with Next.js, TypeScript, and MongoDB.
            </p>

            <div className="animate-fade-up-delayed mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#work"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 rounded-full px-5 text-sm"
                )}
              >
                Explore projects
                <ArrowDownRight className="size-4" />
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 rounded-full px-5 text-sm"
                )}
              >
                Let&apos;s talk
                <ArrowUpRight className="size-4" />
              </Link>
              {siteConfig.resumeUrl ? (
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-11 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Download className="size-4" />
                  Résumé
                </a>
              ) : null}
            </div>

            <div className="animate-fade-up-delayed mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5 text-violet" />
                {siteConfig.email}
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <SocialIcon
                    name={link.icon}
                    className="size-3.5 text-violet"
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delayed">
            <HeroPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
