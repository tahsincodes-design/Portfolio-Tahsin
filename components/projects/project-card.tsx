import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { ProjectVisual } from "./project-visual"

type ProjectCardProps = {
  project: Project
  featured?: boolean
  priority?: boolean
}

export function ProjectCard({
  project,
  featured = false,
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-violet/40 hover:shadow-2xl hover:shadow-violet/10",
        featured && "lg:grid lg:grid-cols-[1.08fr_0.92fr]"
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`View the ${project.title} case study`}
      />

      <div
        className={cn(
          "relative overflow-hidden border-b border-border bg-secondary/30",
          featured && "lg:border-r lg:border-b-0"
        )}
      >
        <div
          className={cn(
            "aspect-[2.1/1] w-full",
            featured && "lg:aspect-auto lg:h-full"
          )}
        >
          <div className="relative h-full overflow-hidden bg-[#f5f5f7]">
            {project.image ? (
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                loading={priority ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.015]"
              />
            ) : (
              <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <ProjectVisual variant={project.visual} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col p-5 sm:p-6",
          featured && "lg:justify-center lg:p-8"
        )}
      >
        <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          <span>{project.year}</span>
          <span>{project.category}</span>
        </div>

        <h3 className="mt-4 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[9px] tracking-[0.12em] text-muted-foreground uppercase"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium">
          <span className="transition-colors group-hover:text-violet">
            View case study
          </span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  )
}
