import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Craft } from "@/components/sections/craft"
import { Education } from "@/components/sections/education"
import { Hero } from "@/components/sections/hero"
import { SelectedWork } from "@/components/sections/selected-work"
import { Stack } from "@/components/sections/stack"

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <SelectedWork />
      <About />
      <Craft />
      <Stack />
      <Education />
      <Contact />
    </main>
  )
}
