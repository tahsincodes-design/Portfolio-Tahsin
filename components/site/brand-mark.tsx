import Image from "next/image"

import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden rounded-lg border border-border/80 bg-[#020615] transition-colors",
        className
      )}
    >
      <Image
        src="/images/brand/tahsin-mark.png"
        alt=""
        fill
        sizes="64px"
        className="object-contain"
      />
    </span>
  )
}
