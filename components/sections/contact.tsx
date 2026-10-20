import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { siteConfig, socialLinks } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="font-serif font-normal text-violet italic">
                    useful.
                  </span>
                </>
              }
              description="Have a project, an internship, or a problem worth solving? Tell me what you have in mind."
            />

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-violet">
                  <Mail className="size-4" />
                </span>
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-aqua">
                  <Phone className="size-4" />
                </span>
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-gold">
                  <MapPin className="size-4" />
                </span>
                {siteConfig.location}
              </div>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="grid size-9 place-items-center overflow-hidden rounded-full border border-border bg-white p-2">
                    <Image
                      src={link.logoSrc}
                      alt={link.logoAlt}
                      width={18}
                      height={18}
                      sizes="18px"
                      className="size-full object-contain"
                    />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-4">
              <p className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-success" />
                Availability
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground">
                Open to internships, freelance work, and collaborations.
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-aqua" />
                {siteConfig.hours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
