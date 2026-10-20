"use client"

import { useMemo, useState } from "react"

import { ProjectCard } from "@/components/projects/project-card"
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects"
import { cn } from "@/lib/utils"

type ProjectFiltersProps = {
  projects: Project[]
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [category, setCategory] = useState<"All" | ProjectCategory>("All")

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category, projects]
  )

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((item) => {
          const count =
            item === "All"
              ? projects.length
              : projects.filter((project) => project.category === item).length

          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {item}
              <span
                className={cn(
                  "font-mono text-[9px]",
                  category === item
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground/70"
                )}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          )
        })}
      </div>

      <p
        className="mt-4 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase"
        aria-live="polite"
      >
        Showing {String(filtered.length).padStart(2, "0")} project
        {filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        </div>
      )}
    </div>
  )
}
