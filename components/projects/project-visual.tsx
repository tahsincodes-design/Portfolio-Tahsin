import { CloudSun, Search, ShoppingBag } from "lucide-react"

import type { ProjectVisualVariant } from "@/lib/projects"
import { cn } from "@/lib/utils"

type ProjectVisualProps = {
  variant: ProjectVisualVariant
  className?: string
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2.5">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/10" />
      </div>
      <span className="font-mono text-[8px] tracking-[0.18em] text-white/35 uppercase">
        {label}
      </span>
      <span className="font-mono text-[8px] tracking-[0.18em] text-white/20 uppercase">
        Preview
      </span>
    </div>
  )
}

function WeatherPreview() {
  return (
    <div className="flex h-full flex-col">
      <WindowBar label="weather / now" />
      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:p-4">
        <div className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">
              <Search className="size-2.5" />
              Selected city
            </div>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl leading-none font-medium tracking-[-0.05em] text-white sm:text-4xl">
                24°
              </span>
              <span className="pb-0.5 text-[10px] text-white/50">
                Partly cloudy
              </span>
            </div>
          </div>
          <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-violet-300 to-violet-600 text-white shadow-lg shadow-violet-900/30">
            <CloudSun className="size-5" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {["Now", "3 PM", "4 PM", "5 PM", "6 PM"].map((time, index) => (
            <div
              key={time}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-1 py-2 text-center"
            >
              <div className="font-mono text-[7px] tracking-[0.1em] text-white/30 uppercase">
                {time}
              </div>
              <div className="mt-1 text-[10px] text-white/75">
                {24 - index}°
              </div>
              <div className="mx-auto mt-1.5 h-5 w-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="w-full rounded-full bg-gradient-to-t from-violet-500/20 to-violet-400/80"
                  style={{ height: `${64 - index * 9}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between font-mono text-[8px] tracking-[0.16em] text-white/25 uppercase">
          <span>Hourly</span>
          <span className="text-violet-300/70">7-day</span>
        </div>
      </div>
    </div>
  )
}

function CommercePreview() {
  return (
    <div className="flex h-full flex-col">
      <WindowBar label="store / catalog" />
      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-1.5">
            <span className="rounded-full bg-white/10 px-2 py-1 font-mono text-[7px] tracking-[0.12em] text-white/70 uppercase">
              All
            </span>
            <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[7px] tracking-[0.12em] text-white/35 uppercase">
              New
            </span>
            <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[7px] tracking-[0.12em] text-white/35 uppercase">
              Sale
            </span>
          </div>
          <div className="relative grid size-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70">
            <ShoppingBag className="size-3.5" />
            <span className="absolute -top-0.5 -right-0.5 grid size-3 place-items-center rounded-full bg-violet-500 font-mono text-[6px] text-white">
              2
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
            >
              <div
                className={cn(
                  "flex-1",
                  item === 0 &&
                    "bg-[radial-gradient(circle_at_30%_20%,#a79bff,#4c3fd0_70%)]",
                  item === 1 &&
                    "bg-[radial-gradient(circle_at_70%_20%,#f0abfc,#7c3aed_72%)]",
                  item === 2 &&
                    "bg-[radial-gradient(circle_at_30%_70%,#67e8f9,#4f46e5_72%)]"
                )}
              />
              <div className="space-y-1 p-2">
                <div className="h-1 w-4/5 rounded-full bg-white/20" />
                <div className="h-1 w-1/2 rounded-full bg-white/10" />
                <div className="pt-1 font-mono text-[8px] text-white/60">
                  $48
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2">
          <span className="font-mono text-[7px] tracking-[0.14em] text-white/35 uppercase">
            Cart total
          </span>
          <span className="font-mono text-[9px] text-white/75">$96.00</span>
        </div>
      </div>
    </div>
  )
}

function NewsPreview() {
  return (
    <div className="flex h-full flex-col">
      <WindowBar label="news / today" />
      <div className="grid flex-1 grid-cols-[1.12fr_0.88fr] gap-2.5 p-3 sm:p-4">
        <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
          <div className="relative flex-1 bg-[linear-gradient(135deg,#312e81_0%,#7867f7_55%,#c4b5fd_100%)]">
            <span className="absolute top-2 left-2 rounded-full bg-black/25 px-2 py-1 font-mono text-[7px] tracking-[0.12em] text-white/80 uppercase backdrop-blur">
              Top story
            </span>
            <div className="absolute inset-x-2 bottom-2 space-y-1">
              <div className="h-1.5 w-11/12 rounded-full bg-white/75" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/45" />
            </div>
          </div>
          <div className="space-y-1 p-2.5">
            <div className="h-1 w-4/5 rounded-full bg-white/25" />
            <div className="h-1 w-2/3 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-1 gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2"
            >
              <div
                className={cn(
                  "w-8 shrink-0 rounded-md",
                  item === 0 && "bg-[linear-gradient(135deg,#f472b6,#7c3aed)]",
                  item === 1 && "bg-[linear-gradient(135deg,#38bdf8,#4f46e5)]",
                  item === 2 && "bg-[linear-gradient(135deg,#fbbf24,#ec4899)]"
                )}
              />
              <div className="min-w-0 flex-1 space-y-1 py-0.5">
                <div className="h-1 w-full rounded-full bg-white/25" />
                <div className="h-1 w-3/4 rounded-full bg-white/10" />
                <div className="h-1 w-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectVisual({ variant, className }: ProjectVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[inherit] bg-[#0b1020] text-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(120,103,247,0.18),transparent_55%)]" />
      <div className="relative h-full">
        {variant === "weather" ? <WeatherPreview /> : null}
        {variant === "commerce" ? <CommercePreview /> : null}
        {variant === "news" ? <NewsPreview /> : null}
      </div>
    </div>
  )
}
