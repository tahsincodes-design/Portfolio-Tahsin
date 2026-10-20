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
    slug: "bangla-khobor",
    title: "Bangla Khobor",
    tagline: "A Bangla-first news reader built for fast headline scanning.",
    summary:
      "A full-stack Bangla news platform with category navigation, a breaking-news ticker, a lead story, and a readable article layout.",
    year: "2026",
    role: "Full-stack developer",
    category: "Content",
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "HeroUI",
      "DaisyUI",
      "Tailwind CSS",
    ],
    links: {
      live: "https://bangla-khobor-24.vercel.app/",
      repo: "https://github.com/tahsincodes-design/bangla-khobor-24",
    },
    image: {
      src: "/images/projects/bangla-khobor/cover.png",
      alt: "Bangla Khobor news homepage with lead story and category navigation",
      width: 1917,
      height: 866,
    },
    visual: "news",
    problem:
      "Bangla readers need fast, readable news without popups and cluttered sidebars. The goal was a calm front page that still surfaces breaking stories, multiple categories, and the most important headlines at a glance.",
    constraints: [
      "Bangla typography and long headlines",
      "Dense front page with several content zones",
      "Dynamic article routes",
      "Readable on low-bandwidth mobile connections",
    ],
    build: [
      "A breaking-news ticker above the main navigation.",
      "Category navigation for politics, world, economy, health, sports, technology, and entertainment.",
      "A lead story with a supporting headline column and a most-read sidebar.",
      "Dynamic article pages with a comfortable Bangla reading measure.",
      "MongoDB-backed content and a responsive news grid.",
    ],
    decisions: [
      {
        title: "One lead story, then density",
        body: "The front page needs a clear entry point. A single lead story with a large image anchors the page, while the supporting headlines stay compact enough to scan.",
      },
      {
        title: "A Bangla-specific type scale",
        body: "Bangla headlines need more vertical room than Latin text. Tuning line height and weight for the script made the page feel deliberate instead of cramped.",
      },
      {
        title: "Ticker plus categories",
        body: "Breaking news and evergreen categories are different intents. Keeping the ticker visually separate from the category row lets readers choose between urgency and browsing.",
      },
    ],
    challenge: {
      title: "Balancing a dense front page with reading comfort",
      body: "News homepages carry a lot of information. Using a strict grid, consistent image ratios, and a limited type scale kept the page scannable while preserving a comfortable reading experience on article pages.",
    },
    outcomes: [
      { label: "Categories", value: "8 news sections" },
      { label: "Layout", value: "Lead story + sidebar" },
      { label: "Stack", value: "Full-stack Next.js" },
    ],
    lesson:
      "A news homepage is a hierarchy problem. Readers should never have to guess what matters most.",
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
