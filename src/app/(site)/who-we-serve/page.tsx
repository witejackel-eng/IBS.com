import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { segmentIllustrationMap } from "@/components/illustrations/segments";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { blurMap } from "@/lib/image-blur-map";
import { segments, services, amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries & Spaces We Serve",
  description:
    "Enterprises, hotels, hospitals, government facilities, and residential spaces — IBS delivers technology solutions sized to fit each segment.",
  alternates: { canonical: "/who-we-serve" },
};

function serviceLabel(slug: string) {
  return [...services, amcService].find((s) => s.slug === slug)?.navLabel ?? slug;
}

/* ------------------------------------------------------------------ */
/*  Right-side visual: icon grid of all 5 segment illustrations       */
/* ------------------------------------------------------------------ */
function SegmentIconGrid() {
  return (
    <Reveal direction="right" delay={0.3} className="hidden lg:block">
      <div className="relative mx-auto w-full max-w-sm">
        {/* Faint blueprint grid backdrop */}
        <div className="absolute -inset-4 rounded-3xl bg-engineering-grid opacity-40" />
        <div className="relative grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
          {segments.map((segment) => {
            const Illustration = segmentIllustrationMap[segment.slug];
            return (
              <div
                key={segment.slug}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card">
                  {Illustration && <Illustration className="h-9 w-9" />}
                </span>
                <span className="text-[10px] font-medium leading-tight tracking-wide text-steel">
                  {segment.shortTitle ?? segment.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default function WhoWeServePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Who We Serve", path: "/who-we-serve" }]} />
      <CollectionPageJsonLd
        name="Who We Serve"
        path="/who-we-serve"
        description="Enterprises, hotels, hospitals, government facilities, and residential spaces — IBS delivers technology solutions sized to fit each segment."
      />

      {/* ─── 1. INTRO / HEADER ─────────────────────────────────────── */}
      <Section bg="ambient" className="bg-background pt-40 pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Left: text column — widened from max-w-3xl to use more screen */}
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                Who We Serve
              </span>
              <SplitText
                as="h1"
                text="Sized to fit every space we work in."
                className="max-w-4xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
              />
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-3xl text-lg text-steel">{"Enterprises, hotels, hospitals, government buildings, homes, and small offices each need something different — here's how we approach each one."}</p>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <div className="mt-6 flex max-w-3xl flex-col gap-5 text-base leading-relaxed text-steel">
                  <p>
                    The hardware that goes into a 200-person enterprise office, a 60-room hotel, a government office, a private residence, and a four-person startup is often the same brands — Cisco, Hikvision, Honeywell, APC — but the way it is specified, configured, and supported looks completely different. A hotel needs guest-facing Wi-Fi that resets per stay and banquet AV that any event manager can operate without an engineer on call. A hospital needs nurse-call integration, patient-area access control with audit trails, and reliable coverage that never drops during a shift. A government facility needs compliance-grade surveillance, secure perimeters, and systems that meet public-sector procurement standards. A residence needs the same camera coverage with a fraction of the retention window and an app the homeowner actually wants to open. An enterprise needs the same firewall with a much heavier rule set and a quarterly review cycle. A SOHO needs enterprise-grade hardware sized for a single rack and a support contract that does not assume a 24/7 NOC.
                  </p>
                  <p>
                    We split our work across these segments because the engineering decisions are genuinely different in each, not because the brands change. A boardroom in a hotel has different acoustic, lighting, and usage constraints than a boardroom in a corporate office, even if both end up with a Crestron control system and a Shure mic array. A CCTV deployment in a residence has different privacy and storage constraints than one in an enterprise lobby, even if both use Hikvision cameras. A government building has procurement and compliance requirements that a private-sector client never faces. Below is how we approach each segment — what we typically install, what we typically have to work around, and where the support cadence lands.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: segment icon grid visual */}
            <SegmentIconGrid />
          </div>
        </Container>
      </Section>

      {/* ─── 2. CARD GRID ──────────────────────────────────────────── */}
      <Section bg="grid" className="pt-20 pb-20 lg:pt-24 lg:pb-24">
        <Container>
          <h2 className="sr-only">Segments we serve</h2>
          {/* 3-col on lg (3+2), 2-col on md, 1-col on mobile.
              Last 2 cards (residential, soho) are centered on lg. */}
          <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {segments.map((segment, idx) => {
              const Illustration = segmentIllustrationMap[segment.slug];
              /* Cards 4 & 5 (index 3,4) sit in the second lg row of 2 — center them */
              const isLastRow = idx >= 3;
              return (
              <RevealItem
                key={segment.slug}
                className={isLastRow ? "lg:col-span-1 lg:justify-self-center lg:max-w-[calc(100%-4rem)]" : undefined}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <Image
                      src={`/images/segments/${segment.slug}.jpg`}
                      alt={segment.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="photo-grade object-cover"
                      placeholder="blur"
                      blurDataURL={blurMap[`/images/segments/${segment.slug}.jpg`]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    {Illustration && (
                      <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-lg bg-card/90 backdrop-blur-sm">
                        <Illustration className="h-7 w-7" />
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal font-heading">{segment.title}</h3>
                    <p className="mt-3 text-sm text-steel">{segment.summary}</p>
                  </div>

                  <div>
                  <h4 className="mb-2.5 text-xs font-semibold tracking-[0.1em] text-steel uppercase">Example applications</h4>
                  <ul className="flex flex-col gap-2.5">
                    {segment.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2.5 text-sm text-steel">
                        <CapabilityCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                  </div>

                  <div
                    role="group"
                    aria-label={`Related services for ${segment.title}`}
                    className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5"
                  >
                    {segment.relevantServiceSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-steel transition-colors hover:border-deep-blue/30 hover:text-charcoal"
                      >
                        {serviceLabel(slug)}
                      </Link>
                    ))}
                  </div>
                  </div>
                </article>
              </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      {/* ─── 3. CTA ────────────────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}