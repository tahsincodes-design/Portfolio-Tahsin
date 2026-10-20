import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[75svh] items-center pt-16">
      <div className="container-page">
        <p className="font-mono text-[10px] tracking-[0.22em] text-violet uppercase">
          404 / Not found
        </p>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.045em] text-balance sm:text-7xl">
          This page took a{" "}
          <span className="font-serif font-normal text-violet italic">
            wrong turn.
          </span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
          The page you are looking for does not exist, or it may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full px-5 text-sm"
            )}
          >
            <ArrowLeft className="size-4" />
            Back home
          </Link>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full px-5 text-sm"
            )}
          >
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  )
}
