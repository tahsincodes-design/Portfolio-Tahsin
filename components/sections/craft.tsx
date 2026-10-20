import Image from "next/image"

import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"

const craftAreas = [
  {
    eyebrow: "Frontend craft",
    title: "Interfaces with intent",
    description:
      "React, Next.js, and Tailwind, shaped into responsive interfaces that stay clear, fast, and accessible on every screen.",
    image: {
      src: "/images/craft/frontend.jpg",
      alt: "Layered interface elements floating above a laptop",
      width: 580,
      height: 344,
    },
  },
  {
    eyebrow: "Full-stack thinking",
    title: "The whole path, connected",
    description:
      "I work across the boundary between browser and database: APIs, validation, data models, and the state that holds a product together.",
    image: {
      src: "/images/craft/full-stack.jpg",
      alt: "Developer working with code across multiple monitors",
      width: 2880,
      height: 1920,
    },
  },
  {
    eyebrow: "Delivery",
    title: "Built to ship",
    description:
      "TypeScript, Git, and a deployment-first workflow keep the work maintainable from the first commit to the live URL.",
    image: {
      src: "/images/craft/systems.jpg",
      alt: "Abstract illustration of connected web development systems",
      width: 642,
      height: 350,
    },
  },
]

export function Craft() {
  return (
    <section id="craft" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Web development"
            title={
              <>
                From interface to{" "}
                <span className="font-serif font-normal text-violet italic">
                  infrastructure.
                </span>
              </>
            }
            description="I like the whole problem: the screen someone uses, the request behind it, and the data that makes the product useful."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
          {craftAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 70} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                  />
                  <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 font-mono text-[8px] tracking-[0.16em] text-white uppercase backdrop-blur">
                    {area.eyebrow}
                  </span>
                  <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.18em] text-white/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-medium tracking-[-0.03em]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
