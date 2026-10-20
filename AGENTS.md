<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# portfolio-tahsin

Personal portfolio for Tahsin Ahmed: Next.js 16.4 App Router, React 19.3, TypeScript strict, Tailwind CSS v4, shadcn/ui. The site has a home page, `/projects`, and three statically generated case studies (Bazardor, Bangla Khobor, Book Vibe). Contact submissions go through `/api/contact` and Resend; there is no database.

## Commands

- `npm run dev` / `npm run build` — Next.js with Turbopack (the default in v16).
- `npm run lint` — ESLint flat config (`core-web-vitals` + TypeScript). The script takes no path; for one file run `npx eslint app/page.tsx`.
- `npm run typecheck` — `tsc --noEmit`.
- `npm run format` — Prettier for `**/*.{ts,tsx}` only; CSS and JSON are not included.
- No test runner or CI exists. Verify with `npm run lint && npm run typecheck && npm run build`.

## Layout

- App Router is at the repo root (`app/`, not `src/app/`). `@/*` maps to the repo root, e.g. `@/components/ui/button`.
- `app/layout.tsx` owns the Geist/Instrument Serif fonts, metadata, JSON-LD, `<html>` classes, and the `ThemeProvider` wrapper.
- `app/page.tsx` composes the home sections; `components/sections/` holds hero, selected work, about, craft, stack, education, and contact.
- `components/ui/` holds shadcn-generated components. `lib/utils.ts` only re-exports `cn`; `hooks/` is empty.
- `lib/site.ts` is the site-wide content source (identity, contact details, socials, availability, stack, tech logos, education). `lib/projects.ts` holds project cards and case study copy plus image metadata.
- Images are in `public/images/profile`, `projects`, `education`, `tech`, and `craft`; the original supplied files are in `assets/`.
- The contact endpoint is `app/api/contact/route.ts` with a shared Zod schema in `lib/contact-schema.ts`. It needs `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; `.env.example` documents all variables.

## Gotchas

- Tailwind v4 is CSS-first: there is no `tailwind.config.*`. Edit tokens in `app/globals.css` (`@theme inline`, `:root`, `.dark`, oklch values).
- shadcn is configured for the `base-nova` style built on `@base-ui/react`, not Radix. Add components with `npx shadcn@latest add <name>`; don't paste Radix-based snippets.
- `cn` is the `cn` npm package (drop-in for `clsx` + `tailwind-merge`); don't add those two.
- Dark mode is class-based via `next-themes`. `components/theme-provider.tsx` also binds `d` to toggle the theme globally (ignoring form fields); keep `suppressHydrationWarning` on `<html>`.
- Prettier: no semicolons, double quotes, LF, 80 columns, Tailwind class sorting (`cn`/`cva` recognized). Some existing files still contain semicolons; follow `.prettierrc`.
- Next.js 16: `params`/`searchParams` are Promises and `middleware` is renamed to `proxy`. Check the bundled docs above instead of relying on remembered APIs.
- `/projects/[slug]` uses `generateStaticParams` and `dynamicParams = false`; add new projects to `lib/projects.ts` or they will 404.
- Project cards use `object-contain` over a light panel so screenshots stay legible. Keep `next/image` dimensions in `lib/projects.ts` in sync with replacement images.
- Brand logos are placed on white tiles so black/white marks (Next.js, HeroUI, GitHub) stay visible in both themes. The tech logo rail is driven by `techLogos` in `lib/site.ts`.
- Education cards are driven by the `education` array in `lib/site.ts`; each entry includes logo metadata and a `tone` (`aqua`, `violet`, or `gold`).
- Contact form failures are intentional when Resend env vars are missing (503 with a direct-email fallback). The rate limiter is in-memory and per instance.
- Git default branch is `master`; there are no pre-commit hooks or deployment configs in the repo.
