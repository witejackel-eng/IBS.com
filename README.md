# IBS Infra — Insight Business Solutions

[![Live Site](https://img.shields.io/badge/live-ibsinfra.com-brightgreen?style=flat-square)](https://ibsinfra.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)


A from-scratch marketing site redesign for **Insight Business Solutions** (ibsinfra.com), a Delhi-NCR
IT & AV systems integrator. Built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and a
React Three Fiber WebGL hero.

Every factual claim on the site (services, OEM partner brands, contact details, AMC/compliance
language) is sourced directly from the live ibsinfra.com site — see [`src/lib/content`](src/lib/content)
for the single source of truth. Nothing is fabricated: there are no invented projects, certifications,
team bios, or statistics. See [`/credits`](src/app/(site)/credits/page.tsx) for photography attribution.

## Highlights

- Cinematic WebGL hero (React Three Fiber network/particle scene), Lenis smooth scroll, custom
  cursor, mask/split-text reveals, tilt cards, and magnetic buttons — every continuous animation
  (hero render loop, cursor, tilt, magnetic, smooth scroll) pauses for `prefers-reduced-motion`
- Working contact form (React Hook Form + Zod) with a honeypot field, rate limiting, and persistence
  to Postgres via Prisma plus email via Resend — degrading gracefully if neither is configured
- Password-gated `/admin` (rate-limited login) with a leads dashboard and a live content editor for
  homepage copy and contact info, reading from the database with static-content fallback
- Full SEO: metadata, Open Graph + Twitter cards, a generated OG image, JSON-LD (Organization/
  LocalBusiness, BreadcrumbList, Service, ContactPage), robots.txt, sitemap.xml, and canonical URLs
- Security headers and a Content-Security-Policy, plus custom 404/error/global-error pages and
  loading states for the dynamic admin routes
- Vercel Analytics + Speed Insights, and real blur placeholders for every image (see
  [Image optimization](#image-optimization) below)
- Real, freely-licensed photography (Wikimedia Commons) with attribution tracked on `/credits`

## Tech stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lenis smooth scroll, shadcn/ui (Base UI primitives), Lucide icons, Three.js / React Three Fiber / Drei
- **Backend:** Next.js Route Handlers, Prisma 7 (driver adapters) + PostgreSQL, Resend (email), React Hook Form + Zod
- **Deployment:** Vercel (Analytics + Speed Insights included)

## Project structure

```
src/
  app/
    (site)/          # Public marketing site — has its own layout with the
                      # nav, footer, Lenis smooth scroll, and custom cursor
    admin/            # Password-gated CMS (separate layout, no site chrome)
    api/              # Route handlers: contact form, admin auth
  components/
    layout/           # Navbar, Footer, Section/Container primitives
    sections/         # Page-level composed sections (hero, CTA, grids...)
    shared/           # Reusable UI: TiltCard, Magnetic, ServiceVisual, etc.
    motion/           # Framer Motion primitives: Reveal, SplitText
    webgl/            # React Three Fiber hero scene
    ui/               # shadcn/ui primitives
    admin/            # Admin-only components (content editor, logout button)
    seo/              # JSON-LD components: Organization, Breadcrumb, Service, ContactPage
  lib/
    content/          # Source-of-truth data: services, partners, segments,
                      # company info -- edit this to change site copy
    db.ts             # Prisma client (gracefully null if DATABASE_URL unset)
    content-overrides.ts  # Admin CMS override read/write with static fallback
    admin-auth.ts     # Password + signed-cookie session for /admin
    rate-limit.ts     # In-memory sliding-window limiter for /api/contact and admin login
    image-blur-map.ts # Generated blurDataURL map, see `npm run generate:blur`
prisma/
  schema.prisma       # ContactSubmission + ContentOverride models
scripts/
  generate-blur-placeholders.mjs  # Regenerates src/lib/image-blur-map.ts from public/images
```

## Local development

```bash
npm install
npm run dev
```

The site runs fully on static content with no environment variables set. Optional features degrade
gracefully rather than crashing:

| Feature | Requires | Behavior when unset |
|---|---|---|
| Contact form persistence | `DATABASE_URL` | Submission is still emailed (if configured) or logged server-side |
| Contact form email | `RESEND_API_KEY` | Submission is still saved to DB (if configured) |
| Admin CMS (`/admin`) | `ADMIN_PASSWORD` + `ADMIN_SESSION_SECRET` | Login returns a clear "not configured" error |
| Admin content editing | `DATABASE_URL` | Editor shows current values read-only with a note to configure the DB |

Copy `.env.example` to `.env` and fill in what you need. See that file for details on each variable.

### Database setup

```bash
# after setting DATABASE_URL in .env
npm run db:push      # sync the Prisma schema to your database
npm run db:studio     # browse data locally
```

Any managed Postgres works (Neon, Supabase, Railway, RDS...). Prisma 7 uses driver adapters
(`@prisma/adapter-pg`), so no extra binary engine download is required.

## Editing site content

Real, verified facts live in `src/lib/content/*.ts` as plain TypeScript objects — services,
OEM partners, client segments, company/contact info. Edit those files to update copy across
the whole site; there's nothing else to keep in sync.

Two things are additionally editable at runtime through `/admin` (once `DATABASE_URL` is set):
the homepage hero (headline/subcopy) and the contact info block on the Contact page. Both fall
back to the static content above when no override exists. The pattern in
`src/lib/content-overrides.ts` can be extended to more fields the same way.

## Image optimization

All images are served through `next/image` with descriptive `alt` text, per-breakpoint `sizes`,
and `priority` only on above-the-fold hero images. Images referenced by a dynamic path (services,
industry segments) can't use Next's automatic blur-on-import, so `scripts/generate-blur-placeholders.mjs`
pre-generates a tiny base64 `blurDataURL` for every file in `public/images` into
`src/lib/image-blur-map.ts`. Re-run it after adding, removing, or replacing an image:

```bash
npm run generate:blur
```

## Production hardening

- **Security headers & CSP** — set in `next.config.ts`: X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy, HSTS, and a Content-Security-Policy locked to `'self'`
  (plus Vercel Analytics' domains and `raw.githack.com`, which the WebGL hero's
  `<Environment preset="city" />` fetches an HDRI from at runtime).
- **Rate limiting** — `/api/contact` (5 / 10 min per IP) and `/api/admin/login` (5 / 15 min per IP)
  via `src/lib/rate-limit.ts`, an in-memory limiter suitable for a single-region, low-traffic
  deployment. For multi-instance/high-traffic deployments, swap it for a durable store (e.g.
  Upstash Redis) behind the same function signature.
- **Spam protection** — the contact form includes a honeypot field; submissions that fill it
  return a fake success without touching the database or sending an email.
- **Error handling** — `not-found.tsx` (root + in-tree), `error.tsx`, and `global-error.tsx` match
  the site's design language; `loading.tsx` covers the dynamic `/admin/leads` and `/admin/content`
  routes.
- **Accessibility** — keyboard-operable mega menu and mobile menu (arrow keys, Escape, focus
  return), a skip-to-content link, and `prefers-reduced-motion` support on every continuous
  animation (WebGL hero, custom cursor, tilt cards, magnetic buttons, Lenis smooth scroll).

## Deployment (Vercel)

1. Push this repo to GitHub/GitLab/Bitbucket and import it in Vercel.
2. Set environment variables in the Vercel project settings (see `.env.example`):
   - `DATABASE_URL` — required for the contact form to persist leads and for `/admin` to work
   - `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` — for contact form email notifications
   - `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET` — to enable `/admin`
   - `NEXT_PUBLIC_SITE_URL` — your production URL, used in metadata/sitemap/JSON-LD
3. Deploy. `npm run build` runs `prisma generate` automatically via the `build` script, so no
   extra build step configuration is needed.
4. After the first deploy with `DATABASE_URL` set, run `npx prisma db push` once (locally, pointed
   at the production database, or via a one-off Vercel deployment hook) to create the tables.

## Verification

`npm run lint`, `npx tsc --noEmit`, and `npm run build` all pass cleanly (zero errors/warnings) as
of this commit. All 6 core services, the AMC page, and every static marketing page are statically
generated; `/admin/*` and the API routes are server-rendered on demand. A production build
(`npm run build && npm run start`) was smoke-tested: security headers, sitemap.xml, robots.txt,
the 404 page, and contact-form rate limiting all behave as expected.
