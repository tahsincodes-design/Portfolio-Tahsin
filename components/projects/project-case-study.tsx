import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Mail,
} from "lucide-react"

import { ProjectVisual } from "@/components/projects/project-visual"
import { Reveal } from "@/components/site/reveal"
import { SocialIcon } from "@/components/site/social-icon"
import type { Project } from "@/lib/projects"
import { getNextProject } from "@/lib/projects"
import { siteConfig } from "@/lib/site"

type CaseSectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

function CaseSection({ id, index, title, children }: CaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] text-violet uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span>{title}</span>
      </div>
      <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  const hasLinks = Boolean(project.links.live || project.links.repo)

  if (!hasLinks) {
    return (
      <div className="space-y-2">
        <p className="text-xs leading-5 text-muted-foreground">
          Walkthrough available on request.
        </p>
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
            `${project.title} walkthrough`
          )}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-violet"
        >
          <Mail className="size-3.5" />
          Ask for a walkthrough
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {project.links.live ? (
        <a
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-violet"
        >
          <ExternalLink className="size-3.5" />
          Live demo
          <ArrowUpRight className="size-3" />
        </a>
      ) : null}
      {project.links.repo ? (
        <a
          href={project.links.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-violet"
        >
          <SocialIcon name="github" className="size-3.5" />
          Source code
          <ArrowUpRight className="size-3" />
        </a>
      ) : null}
    </div>
  )
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const nextProject = getNextProject(project.slug)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: project.stack.join(", "),
    dateCreated: project.year,
  }

  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-border/60 pt-28 sm:pt-32">
          <div
            aria-hidden="true"
            className="grid-backdrop pointer-events-none absolute inset-0"
          />
          <div className="container-page relative pb-12 sm:pb-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              All projects
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-16">
              <Reveal>
                <p className="font-mono text-[9px] tracking-[0.2em] text-violet uppercase">
                  {project.year} / {project.category}
                </p>
                <h1 className="mt-4 text-5xl font-medium tracking-[-0.045em] text-balance sm:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {project.tagline}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <dl className="grid gap-5 rounded-2xl border border-border bg-card p-5">
                  <div>
                    <dt className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                      Role
                    </dt>
                    <dd className="mt-1.5 text-sm">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                      Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background/50 px-2 py-1 font-mono text-[8px] tracking-[0.1em] text-muted-foreground uppercase"
                        >
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                      Links
                    </dt>
                    <dd className="mt-2">
                      <ProjectLinks project={project} />
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card sm:mt-12 sm:aspect-[16/7]">
                {project.image ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1200px) 1136px, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <ProjectVisual variant={project.visual} />
                )}
              </div>
            </Reveal>
          </div>
        </header>

        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[190px_1fr] lg:gap-20">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                  On this page
                </p>
                <nav
                  className="mt-4 flex flex-col gap-2.5"
                  aria-label="Case study sections"
                >
                  {[
                    ["problem", "01 Problem"],
                    ["build", "02 Build"],
                    ["decisions", "03 Decisions"],
                    ["challenge", "04 Challenge"],
                    ["outcome", "05 Outcome"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="max-w-3xl space-y-14 sm:space-y-16">
              <CaseSection id="problem" index="01" title="The problem">
                <p>{project.problem}</p>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                    Constraints
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.constraints.map((constraint) => (
                      <li
                        key={constraint}
                        className="flex items-start gap-2.5 text-sm leading-6"
                      >
                        <Check className="mt-1 size-3.5 shrink-0 text-violet" />
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              </CaseSection>

              <CaseSection id="build" index="02" title="What I built">
                <ul className="grid gap-3">
                  {project.build.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-violet"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection id="decisions" index="03" title="Key decisions">
                <div className="grid gap-3">
                  {project.decisions.map((decision, index) => (
                    <div
                      key={decision.title}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-[9px] tracking-[0.16em] text-violet uppercase">
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-sm font-medium text-foreground">
                            {decision.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {decision.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseSection>

              <CaseSection id="challenge" index="04" title="Hardest challenge">
                <div className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                  <h3 className="text-base font-medium text-foreground">
                    {project.challenge.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {project.challenge.body}
                  </p>
                </div>
              </CaseSection>

              <CaseSection id="outcome" index="05" title="Outcome & reflection">
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={outcome.label}
                      className="rounded-2xl border border-border bg-card p-4"
                    >
                      <p className="font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase">
                        {outcome.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground">
                        {outcome.value}
                      </p>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-violet pl-5 text-base leading-8 text-foreground italic sm:text-lg">
                  {project.lesson}
                </blockquote>
              </CaseSection>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border/60">
        <div className="section-shell">
          <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
            Next project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                {nextProject.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {nextProject.tagline}
              </p>
            </div>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 group-hover:border-violet/40 group-hover:text-violet">
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
