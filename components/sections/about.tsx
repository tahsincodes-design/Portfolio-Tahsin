import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { siteConfig } from "@/lib/site"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="About"
              title={
                <>
                  A developer with a{" "}
                  <span className="font-serif font-normal text-violet italic">
                    product mindset.
                  </span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={90}>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              <p>
                I&apos;m Tahsin, a full-stack developer and computer science
                student at the University of Liberal Arts Bangladesh. I enjoy
                the whole shape of a product: the interface someone touches, the
                API that supports it, and the data model underneath. I build
                with React, Next.js, TypeScript, Node.js, and MongoDB.
              </p>
              <p>
                I&apos;ve shipped a full-stack Bangla news portal, a daily
                market price tracker, and a book discovery experience. My
                favourite projects are the ones where the constraints are real —
                limited time, imperfect data, and a clear user who needs
                something to work. I care about readable code, accessible
                defaults, and interfaces that explain themselves without a
                tutorial.
              </p>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {siteConfig.principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <span className="font-mono text-[9px] tracking-[0.16em] text-violet uppercase">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-sm font-medium">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-[#e9e7f5]">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  sizes="48px"
                  className="object-cover object-top mix-blend-multiply"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{siteConfig.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {siteConfig.role} · {siteConfig.location}
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:ml-auto"
              >
                Get in touch
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
