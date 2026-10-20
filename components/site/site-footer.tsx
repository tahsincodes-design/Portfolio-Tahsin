import Link from "next/link"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"

import { siteConfig, socialLinks } from "@/lib/site"
import { BrandMark } from "./brand-mark"
import { SocialIcon } from "./social-icon"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={`${siteConfig.name} — home`}
            >
              <BrandMark className="h-8 w-12" />
              <span className="text-sm font-medium">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Full-stack developer and computer science student at ULAB,
              building thoughtful, useful products for the web.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Explore
              </p>
              <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5 text-violet" />
                  Email
                </a>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-3.5 text-violet" />
                  Call
                </a>
                <span className="flex w-fit items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-3.5 text-violet" />
                  Dhaka, BD
                </span>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Built with Next.js & Tailwind CSS
            </p>
            <a
              href="#main"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Top
              <ArrowUp className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
