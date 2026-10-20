import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ProjectCard } from "@/components/projects/project-card"
import { Reveal } from "@/components/site/reveal"
import { SectionHeading } from "@/components/site/section-heading"
import { projects } from "@/lib/projects"

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border/60">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title={
              <>
                Three builds.{" "}
                <span className="font-serif font-normal text-violet italic">
                  Real decisions.
                </span>
              </>
            }
            description="Case studies that show the problem, the trade-offs, and what I would do differently."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 70}
              className={index === 0 ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
