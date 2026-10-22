export type ProjectCategory = "Full-stack" | "Frontend" | "Content"

export type ProjectVisualVariant = "weather" | "commerce" | "news"

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  title: string
  tagline: string
  summary: string
  year: string
  role: string
  category: ProjectCategory
  stack: string[]
  links: {
    live?: string
    repo?: string
  }
  image?: ProjectImage
  visual: ProjectVisualVariant
  problem: string
  constraints: string[]
  build: string[]
  decisions: {
    title: string
    body: string
  }[]
  challenge: {
    title: string
    body: string
  }
  outcomes: {
    label: string
    value: string
  }[]
  lesson: string
}

export const projects: Project[] = [
  {
    slug: "bangla-khobor",
    title: "Bangla News 24",
    tagline:
      "A Bangla-first news portal with accounts, search, and a calm read.",
    summary:
      "A full-stack Bangla news portal with a live headline ticker, category desks, full-text search, a most-read rail, and Better Auth accounts — built around Bengali typography instead of translated layouts.",
    year: "2026",
    role: "Full-stack developer",
    category: "Content",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    links: {
      live: "https://bangla-khobor-24.vercel.app/",
      repo: "https://github.com/tahsincodes-design/bangla-khobor-24",
    },
    image: {
      src: "/images/projects/bangla-khobor/cover.png",
      alt: "Bangla News 24 homepage with headline ticker, lead story, latest news, and most-read sidebar",
      width: 1917,
      height: 869,
    },
    visual: "news",
    problem:
      "Bangla readers want the day's news quickly, but most portals greet them with popups, cramped headlines, and sidebars that compete with the story. Bangla News 24's goal was a full newsroom — breaking headlines, category desks, search, saved accounts — that still feels calm and readable on a phone.",
    constraints: [
      "Bangla typography and long headlines",
      "A dense front page with several content zones",
      "Authentication and session management to keep secure",
      "Low-bandwidth mobile connections",
      "An upstream news API that can be unavailable",
    ],
    build: [
      "A breaking-news ticker above a sticky, responsive header with search.",
      "Category desks for national, politics, international, economy, sports, entertainment, and technology.",
      "A lead story with a latest-news rail and a most-read sidebar with view counts.",
      "Dynamic category listings with pagination and article pages with reading progress, share tools, and related news.",
      "Full-text search plus static about, contact, privacy, and terms pages.",
      "Email/password and Google/GitHub sign-in with profile, password, and per-device session management.",
      "Sitemap, robots, article JSON-LD, custom 404, error boundary, and skeleton loading states.",
      "Bundled Bengali fixtures that keep every route working when the upstream news API is unavailable.",
    ],
    decisions: [
      {
        title: "Paper, ink, and crimson",
        body: "The palette uses warm paper surfaces, deep ink text, and crimson accents so the interface feels like an editorial product rather than a generic dashboard. Bengali display type carries the brand and keeps long headlines legible.",
      },
      {
        title: "One lead story, then density",
        body: "The front page opens with a single large story, then relaxes into compact latest and most-read rails. That gives readers a clear entry point without hiding the breadth of the newsroom.",
      },
      {
        title: "Auth built into the product",
        body: "Better Auth powers email, Google, and GitHub sign-in, profile updates, password changes, and device-level session revocation. Accounts belong to the reading experience instead of feeling pinned on afterwards.",
      },
      {
        title: "Fixtures keep the newsroom open",
        body: "News APIs fail. Bundled Bengali fixtures mean the homepage, category pages, search, and article routes still render a complete experience, so a third-party outage never turns into a blank page.",
      },
    ],
    challenge: {
      title: "Keeping a dense newsroom calm",
      body: "A full portal has a ticker, navigation, a lead story, a latest rail, category desks, a most-read list, and account chrome. A strict grid, consistent image ratios, and a limited type scale keep all of that scannable while article pages stay comfortable to read.",
    },
    outcomes: [
      { label: "Sections", value: "7 category desks" },
      { label: "Accounts", value: "Email + Google + GitHub" },
      { label: "Stack", value: "Next.js 16 + Better Auth" },
    ],
    lesson:
      "A news product earns trust through hierarchy and consistency. When every zone has one clear job, readers can move from urgency to depth without the page getting in the way.",
  },
  {
    slug: "bazardor",
    title: "Bazardor",
    tagline: "A daily market price tracker for the essentials.",
    summary:
      "A Bangla-first market dashboard for rice, lentils, oil, vegetables, fish, meat, eggs, and spices — with daily price changes and a clean, scannable layout.",
    year: "2026",
    role: "Full-stack developer",
    category: "Full-stack",
    stack: ["Next.js", "TypeScript", "MongoDB", "HeroUI", "Tailwind CSS"],
    links: {
      live: "https://bazardor-chi.vercel.app/",
      repo: "https://github.com/tahsincodes-design/Bazardor",
    },
    image: {
      src: "/images/projects/bazardor/cover.png",
      alt: "Bazardor homepage showing daily market prices in Bangla",
      width: 1917,
      height: 867,
    },
    visual: "commerce",
    problem:
      "Daily market prices in Dhaka move constantly, and the information is scattered across local shops, conversations, and social posts. Bazardor puts the essentials in one place so shoppers can check today's price and see how it changed without visiting several markets.",
    constraints: [
      "Bangla-first content and typography",
      "Prices change every day",
      "Dense data must stay scannable on mobile",
      "Built and shipped by one developer",
    ],
    build: [
      "Category navigation for eight everyday essentials.",
      "A daily price board with current prices and change indicators.",
      "Bangla-first interface with clear numeric hierarchy.",
      "Responsive price cards that stack cleanly on small screens.",
      "MongoDB-backed price records and a deployable Next.js app.",
    ],
    decisions: [
      {
        title: "Bangla first, not translated later",
        body: "The primary audience reads Bangla. Designing the type scale, labels, and layout around Bangla from the start produced a more natural interface than translating an English dashboard.",
      },
      {
        title: "A price board, not a spreadsheet",
        body: "The data is dense, so each item gets a compact card with the price, unit, and change. The layout keeps the important number visible without turning the page into a table.",
      },
      {
        title: "Categories before search",
        body: "Shoppers usually know what they need — rice, oil, fish. A visible category row is faster than typing on a phone and makes the product feel like a market counter rather than a database.",
      },
    ],
    challenge: {
      title: "Keeping dense price data readable on a phone",
      body: "A full market list can overwhelm a small screen. Grouping items by category, limiting each card to the essentials, and using consistent numeric alignment kept the interface useful without hiding the data.",
    },
    outcomes: [
      { label: "Categories", value: "8 everyday essentials" },
      { label: "Interface", value: "Bangla-first and responsive" },
      { label: "Stack", value: "Next.js + MongoDB" },
    ],
    lesson:
      "When the data is the product, hierarchy matters more than decoration. The fastest interface is the one that shows the right number first.",
  },
  {
    slug: "book-vibe",
    title: "Book Vibe",
    tagline: "A warm, editorial way to discover your next read.",
    summary:
      "A frontend book-discovery experience with a featured collection, curated lists, and a bright visual identity that makes browsing feel inviting.",
    year: "2026",
    role: "Frontend developer",
    category: "Frontend",
    stack: ["Next.js", "TypeScript", "DaisyUI", "Tailwind CSS"],
    links: {
      live: "https://book-vibe-omega-six.vercel.app/",
      repo: "https://github.com/tahsincodes-design/Book-Vibe-",
    },
    image: {
      src: "/images/projects/book-vibe/cover.png",
      alt: "Book Vibe homepage with a featured collection and book stack imagery",
      width: 1917,
      height: 851,
    },
    visual: "commerce",
    problem:
      "Book discovery often feels transactional: a grid of covers, a price, and little context. Book Vibe explores a warmer, editorial approach where browsing a collection feels closer to walking through a bookshop.",
    constraints: [
      "Frontend-only build",
      "Distinct visual identity",
      "Responsive layout for desktop and mobile",
      "Clear navigation between discovery and reading lists",
    ],
    build: [
      "An editorial hero for the featured collection.",
      "A curated book grid with a consistent card system.",
      "Navigation for the home page, listed books, and pages to read.",
      "Sign-in and sign-up screens styled to match the brand.",
      "A responsive layout built with Next.js and Tailwind CSS.",
    ],
    decisions: [
      {
        title: "Editorial type, not a storefront",
        body: "A high-contrast serif display face gives the page a bookish, magazine-like feel. It separates the experience from a generic product grid.",
      },
      {
        title: "Green as the signal",
        body: "The palette uses a fresh green for actions and accents against warm off-white surfaces. It feels optimistic and keeps the interface from looking like every other dark book app.",
      },
      {
        title: "Collections before categories",
        body: "Instead of asking readers to filter by genre immediately, the home page leads with a point of view: a featured collection worth exploring.",
      },
    ],
    challenge: {
      title: "Making a book grid feel editorial",
      body: "Book covers are visually busy. A restrained layout, consistent image treatment, and generous spacing let the covers carry the personality without turning the page into visual noise.",
    },
    outcomes: [
      { label: "Role", value: "Frontend development" },
      { label: "Pages", value: "Discovery + reading lists" },
      { label: "Design", value: "Warm editorial identity" },
    ],
    lesson:
      "A strong point of view is a feature. Curating what appears on the first screen is often more valuable than adding another filter.",
  },
]

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Full-stack",
  "Frontend",
  "Content",
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
