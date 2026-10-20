import Image from "next/image"
import { Code2, Database, Server, Wrench } from "lucide-react"

import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { siteConfig, techLogos } from "@/lib/site"

const icons = {
  frontend: Code2,
  backend: Server,
  data: Database,
  tools: Wrench,
}

const groupAccents = ["text-aqua", "text-violet", "text-aqua", "text-gold"]

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Tech stack"
            title={
              <>
                Tools I use to{" "}
                <span className="font-serif font-normal text-violet italic">
                  ship.
                </span>
              </>
            }
            description="A focused stack, chosen for speed of iteration and a clear path from prototype to production."
          />
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-4 text-center transition-colors hover:border-violet/30"
              >
                <span className="grid size-9 place-items-center overflow-hidden rounded-lg border border-border/70 bg-white p-0.5">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    sizes="36px"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="font-mono text-[9px] tracking-[0.1em] text-muted-foreground uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {siteConfig.stackGroups.map((group, index) => {
            const Icon = icons[group.icon]

            return (
              <Reveal key={group.title} className="h-full" delay={index * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-violet/30 hover:shadow-2xl hover:shadow-violet/5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`grid size-10 place-items-center rounded-xl border border-border bg-secondary ${groupAccents[index]}`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-medium">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-muted-foreground uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
              <span className="size-1.5 rounded-full bg-aqua" />
              Currently exploring
            </span>
            <span className="text-sm text-foreground">
              {siteConfig.currentFocus}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
