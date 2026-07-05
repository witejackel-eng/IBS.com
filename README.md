# IBS Infra — Insight Business Solutions

A from-scratch marketing site redesign for **Insight Business Solutions** (ibsinfra.com), a Delhi-NCR
IT & AV systems integrator. Built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and a
React Three Fiber WebGL hero.

Every factual claim on the site (services, OEM partner brands, contact details, AMC/compliance
language) is sourced directly from the live ibsinfra.com site — see [`src/lib/content`](src/lib/content)
for the single source of truth. Nothing is fabricated: there are no invented projects, certifications,
team bios, or statistics. See [`/credits`](src/app/(site)/credits/page.tsx) for photography attribution.

## Highlights

- Cinematic WebGL hero (React Three Fiber network/particle scene), Lenis smooth scroll, custom
  cursor, mask/split-text reveals, tilt cards, and magnetic buttons
- Working contact form (React Hook Form + Zod) that persists leads to Postgres via Prisma and
  emails via Resend — degrading gracefully to a clear error if neither is configured
- Password-gated `/admin` with a leads dashboard and a live content editor for homepage copy and
  contact info, reading from the database with static-content fallback
- Full SEO: metadata, Open Graph + Twitter cards, a generated OG image, JSON-LD business schema,
  robots.txt, sitemap.xml, and canonical URLs on every page
- Real, freely-licensed photography (Wikimedia Commons) with attribution tracked on `/credits`

## Tech stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP-ready, Lenis smooth scroll, shadcn/ui (Base UI primitives), Lucide icons, Three.js / React Three Fiber / Drei
- **Backend:** Next.js Route Handlers, Prisma 7 (driver adapters) + PostgreSQL, Resend (email), React Hook Form + Zod
- **Deployment:** Vercel

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
  lib/
    content/          # Source-of-truth data: services, partners, segments,
                      # company info -- edit this to change site copy
    db.ts             # Prisma client (gracefully null if DATABASE_URL unset)
    content-overrides.ts  # Admin CMS override read/write with static fallback
    admin-auth.ts     # Password + signed-cookie session for /admin
prisma/
  schema.prisma       # ContactSubmission + ContentOverride models
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

`npm run lint` and `npm run build` both pass cleanly (zero errors/warnings) as of this commit.
All 6 core services, the AMC page, and every static marketing page are statically generated;
`/admin/*` and the API routes are server-rendered on demand.
