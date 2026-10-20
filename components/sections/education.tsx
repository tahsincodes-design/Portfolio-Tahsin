import Image from "next/image"

import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const tones = {
  aqua: {
    badge: "border-aqua/30 bg-aqua/10 text-aqua",
    glow: "from-aqua/10",
  },
  violet: {
    badge: "border-violet/30 bg-violet/10 text-violet",
    glow: "from-violet/10",
  },
  gold: {
    badge: "border-gold/30 bg-gold/10 text-gold",
    glow: "from-gold/10",
  },
} as const

type EducationItem = (typeof siteConfig.education)[number]

function EducationCard({
  item,
  featured = false,
}: {
  item: EducationItem
  featured?: boolean
}) {
  const tone = tones[item.tone]

  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/10 sm:p-6",
        featured && "lg:flex lg:items-center lg:gap-8 lg:p-8"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-20 -right-16 size-48 rounded-full bg-gradient-to-br to-transparent blur-3xl",
          tone.glow
        )}
      />

      <div
        className={cn(
          "relative shrink-0 overflow-hidden rounded-xl border border-border bg-white p-2",
          featured ? "h-24 w-60" : "size-16"
        )}
      >
        <Image
          src={item.logo.src}
          alt={item.logo.alt}
          fill
          sizes={featured ? "240px" : "64px"}
          className={cn("object-contain", !featured && "p-1")}
        />
      </div>

      <div className={cn("relative mt-5 min-w-0", featured && "lg:mt-0")}>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-2.5 py-1 font-mono text-[8px] tracking-[0.14em] uppercase",
              tone.badge
            )}
          >
            {item.period}
          </span>
        </div>

        <h3
          className={cn(
            "mt-3 font-medium tracking-[-0.03em]",
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          )}
        >
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-foreground/80">{item.institution}</p>
        <p className="mt-3 max-w-xl text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Education() {
  const [featured, ...rest] = siteConfig.education

  return (
    <section id="education" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Education"
            title={
              <>
                A foundation, still{" "}
                <span className="font-serif font-normal text-violet italic">
                  compounding.
                </span>
              </>
            }
            description="Computer science at ULAB, a full-stack bootcamp, and a science background — the base under every build."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <EducationCard item={featured} featured />
          </Reveal>
          <Reveal className="h-full lg:col-span-5" delay={70}>
            <EducationCard item={rest[0]} />
          </Reveal>
          {rest.slice(1).map((item, index) => (
            <Reveal
              key={`${item.title}-${item.period}`}
              className="h-full lg:col-span-6"
              delay={(index + 2) * 70}
            >
              <EducationCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
