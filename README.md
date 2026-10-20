# Tahsin Ahmed — Portfolio

A dark, editorial portfolio for Tahsin Ahmed, a full-stack developer and computer science student at the University of Liberal Arts Bangladesh. The site presents three real projects as case studies, a visual web-development craft section, his education history, and a working email contact form without a database. The palette combines indigo/violet with restrained aqua and gold accents.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, `next-themes`, Zod, and Resend.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site renders without environment variables. The contact form returns a friendly `503` message until Resend is configured.

## Environment

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URLs, Open Graph metadata, sitemap, and robots. |
| `RESEND_API_KEY` | Contact form | Resend API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL` | Contact form | Destination inbox for messages. |
| `RESEND_FROM_EMAIL` | Contact form | Verified sender. Defaults to `Portfolio <onboarding@resend.dev>`. |

`RESEND_FROM_EMAIL` must be a verified sender or domain in Resend. During local testing, the onboarding sender only delivers to the Resend account owner's address.

## Content

- **`lib/site.ts`** — name, role, description, email, phone, location, availability, social links, navigation, stack, principles, tech logo metadata, and education entries. The résumé links point to `public/Tahsin_Ahmed_Developer_CV.docx`.
- **`lib/projects.ts`** — all project content: case study copy, roles, stacks, live/repository links, and image metadata.
- **`public/images/`** — optimized source images used by `next/image`:
  - `profile/tahsin-ahmed.png`
  - `brand/tahsin-mark.png`
  - `projects/*/cover.png`
  - `education/ulab.png`, `education/fbic.jpg`, `education/programming-hero.jpg`
  - `tech/*` (React, Next.js, Tailwind CSS, MongoDB, HeroUI, GitHub, LinkedIn)
  - `craft/*` (three web-development visuals)
- **`assets/`** — the original supplied images. The site serves the copies in `public/images/`.

Education content lives in the `education` array in `lib/site.ts`; the Craft section uses the three images in `public/images/craft/`.

To add or replace a project, add an entry to `projects` in `lib/projects.ts`. Project pages are generated from that array, so a new slug is picked up automatically. Unknown slugs return `404` because `dynamicParams` is `false`.

## Contact flow

`POST /api/contact`:

1. Validates `name`, `email`, and `message` with Zod.
2. Silently accepts honeypot and too-fast submissions.
3. Applies a small in-memory rate limit (5 submissions per IP per 10 minutes).
4. Sends a plain-text + HTML email through Resend.
5. Returns field errors, a configuration message, or a delivery error as appropriate.

There is no database. The rate limiter is per server instance and resets on redeploy or restart.

## Structure

```text
app/
  api/contact/route.ts      Contact endpoint
  projects/                 Archive + dynamic case study pages
  layout.tsx                Fonts, metadata, theme, header, footer, JSON-LD
  page.tsx                  Home page composition
  sitemap.ts, robots.ts     SEO routes
  opengraph-image.tsx       Generated social image
components/
  sections/                 Hero, work, about, craft, stack, education, contact
  projects/                 Cards, filters, case study layout, fallbacks
  site/                     Header, footer, theme toggle, reveal animation
  ui/                       shadcn/base-ui primitives
lib/
  site.ts                   Site-wide content, tech logos, education
  projects.ts               Project + case study content
  contact-schema.ts         Shared Zod schema and field error types
public/images/              Profile, projects, education, tech, and craft images
```

## Design and accessibility

- Dark theme by default; the header toggle or the `d` key switches themes.
- Tailwind v4 tokens live in `app/globals.css`. There is no `tailwind.config.*`.
- Keyboard skip link, visible focus states, reduced-motion handling, semantic section headings, and accessible form labels/errors.
- Project previews use `object-contain` on a light panel so the supplied screenshots are readable inside the dark cards.
- Brand logos sit on white tiles so dark marks such as Next.js and HeroUI remain visible in both themes.
- Aqua and gold are secondary accents; violet remains the primary action color.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

There is no test runner or CI configuration. `npm run format` formats `**/*.{ts,tsx}` with Prettier.

## Deploy

Deploy to Vercel (or any Node-capable host), set the production environment variables, and redeploy. Set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, the sitemap, robots, and Open Graph metadata point to the right place. Verify the Resend sender before sending real contact messages.
