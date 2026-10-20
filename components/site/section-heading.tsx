import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-violet uppercase">
        <span>{index}</span>
        <span
          className="h-px w-8 bg-gradient-to-r from-violet to-aqua/50"
          aria-hidden="true"
        />
        <span>{eyebrow}</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.035em] text-balance sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
