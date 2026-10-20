import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { ProjectFilters } from "@/components/projects/project-filters"
import { Reveal } from "@/components/site/reveal"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Tahsin Ahmed — full-stack products, frontend interfaces, and content-driven applications.",
  alternates: {
    canonical: "/projects",
  },
}

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-28 sm:pt-32">
      <div className="container-page pb-20 sm:pb-28">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back home
          </Link>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="font-mono text-[9px] tracking-[0.2em] text-violet uppercase">
                Archive / 01—03
              </p>
              <h1 className="mt-4 text-5xl font-medium tracking-[-0.045em] text-balance sm:text-6xl">
                Selected{" "}
                <span className="font-serif font-normal text-violet italic">
                  projects.
                </span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
              A closer look at the problems, decisions, and trade-offs behind
              each build. Filter by the part of the stack you care about.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          <ProjectFilters projects={projects} />
        </div>
      </div>
    </main>
  )
}
