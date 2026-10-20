export const siteConfig = {
  name: "Tahsin Ahmed",
  shortName: "TA",
  role: "Full-stack developer",
  description:
    "Full-stack developer and computer science student at the University of Liberal Arts Bangladesh, building modern web applications with Next.js, TypeScript, and MongoDB.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "ahmed.tahsin.1155@gmail.com",
  phone: "01838710235",
  phoneHref: "+8801838710235",
  location: "Bosila, Dhaka, Bangladesh",
  hours: "8 AM – 10 PM (Dhaka)",
  availability: "Open to internships & freelance",
  profileImage: "/images/profile/tahsin-ahmed.png",
  resumeUrl: "/Tahsin_Ahmed_Developer_CV.docx",
  socials: {
    github: "https://github.com/tahsincodes-design",
    linkedin: "https://www.linkedin.com/in/ahmed-tahsin/",
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Craft", href: "/#craft" },
    { label: "Stack", href: "/#stack" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
  ],
  currentFocus:
    "Building full-stack products with Next.js, TypeScript, MongoDB, and HeroUI.",
  principles: [
    {
      title: "Clarity over cleverness",
      description:
        "Interfaces should explain themselves. I optimise for the shortest path between intent and outcome.",
    },
    {
      title: "Accessible by default",
      description:
        "Keyboard navigation, contrast, and reduced-motion support are part of the build, not a cleanup pass.",
    },
    {
      title: "Ship, then refine",
      description:
        "A working version teaches more than a perfect plan. I iterate with real feedback and measurable constraints.",
    },
  ],
  stackGroups: [
    {
      title: "Frontend",
      icon: "frontend" as const,
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HeroUI",
        "DaisyUI",
      ],
    },
    {
      title: "Backend",
      icon: "backend" as const,
      items: ["Node.js", "Next.js Route Handlers", "REST APIs", "Zod"],
    },
    {
      title: "Data",
      icon: "data" as const,
      items: ["MongoDB", "MongoDB Driver", "Data modelling"],
    },
    {
      title: "Tools",
      icon: "tools" as const,
      items: ["Git", "GitHub", "Vercel", "ESLint", "Prettier"],
    },
  ],
  education: [
    {
      period: "Expected March 2029",
      title: "BSc in Computer Science & Engineering",
      institution: "University of Liberal Arts Bangladesh",
      description:
        "Building a foundation in algorithms, databases, and software engineering while shipping full-stack projects.",
      tags: ["CSE", "CGPA 3.5", "Expected 2029"],
      logo: {
        src: "/images/education/ulab.png",
        alt: "University of Liberal Arts Bangladesh logo",
        width: 980,
        height: 363,
      },
      tone: "aqua",
    },
    {
      period: "2026",
      title: "Full-stack Web Development Bootcamp",
      institution: "Programming Hero",
      description:
        "An intensive, project-led bootcamp covering frontend fundamentals, React, Node.js, MongoDB, and deployment.",
      tags: ["Full-stack", "Bootcamp", "2026"],
      logo: {
        src: "/images/education/programming-hero.jpg",
        alt: "Programming Hero logo",
        width: 400,
        height: 400,
      },
      tone: "violet",
    },
    {
      period: "2022 — 2024",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Firoza Bashar Ideal College",
      description: "Science group. Completed with a GPA of 4.92.",
      tags: ["Science", "GPA 4.92", "2022—2024"],
      logo: {
        src: "/images/education/fbic.jpg",
        alt: "Firoza Bashar Ideal College logo",
        width: 433,
        height: 461,
      },
      tone: "aqua",
    },
    {
      period: "2020 — 2022",
      title: "Secondary School Certificate (SSC)",
      institution: "Firoza Bashar Ideal College",
      description: "Science group. Completed with a GPA of 5.00.",
      tags: ["Science", "GPA 5.00", "2020—2022"],
      logo: {
        src: "/images/education/fbic.jpg",
        alt: "Firoza Bashar Ideal College logo",
        width: 433,
        height: 461,
      },
      tone: "gold",
    },
  ],
} as const

export const techLogos = [
  {
    name: "React",
    src: "/images/tech/react.png",
    width: 473,
    height: 422,
  },
  {
    name: "Next.js",
    src: "/images/tech/nextjs.png",
    width: 512,
    height: 512,
  },
  {
    name: "Tailwind CSS",
    src: "/images/tech/tailwindcss.jpg",
    width: 554,
    height: 554,
  },
  {
    name: "MongoDB",
    src: "/images/tech/mongodb.png",
    width: 320,
    height: 320,
  },
  {
    name: "HeroUI",
    src: "/images/tech/heroui.png",
    width: 200,
    height: 200,
  },
  {
    name: "GitHub",
    src: "/images/tech/github.png",
    width: 512,
    height: 512,
  },
] as const

export const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: "github" as const,
    logoSrc: "/images/tech/github.png",
    logoAlt: "GitHub logo",
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: "linkedin" as const,
    logoSrc: "/images/tech/linkedin.jpg",
    logoAlt: "LinkedIn logo",
  },
].filter((link) => link.href.length > 0)
