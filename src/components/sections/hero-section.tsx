"use client";

import { ArrowRight, Phone } from "lucide-react";

import { HeroCanvas } from "@/components/webgl/hero-canvas";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/shared/button-link";
import { Stat } from "@/components/shared/stat";
import { Container } from "@/components/layout/container";
import { company, services, partners } from "@/lib/content";

export interface HeroContent {
  headline: string;
  subcopy: string;
}

export const defaultHeroContent: HeroContent = {
  headline: "Systems built around how your business runs.",
  subcopy: company.summary,
};

export function HeroSection({ headline, subcopy }: Partial<HeroContent> = {}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background text-charcoal">
      <div className="absolute inset-0 bg-engineering-grid opacity-70" />
      <div className="absolute inset-0 bg-ambient-glow" />

      {/* ── WebGL illustration: anchored upper-right, fades toward bottom-left ── */}
      <div className="absolute inset-0 [mask-image:linear-gradient(215deg,black_10%,black_35%,transparent_65%)]">
        <HeroCanvas />
      </div>

      {/* ── Gradient overlay: ensures text column reads cleanly ── */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <Container className="relative z-10 pt-24 pb-8 sm:pt-28 md:pb-10 lg:pb-12">
        {/* ── Headline ── */}
        <SplitText
          as="h1"
          text={headline ?? defaultHeroContent.headline}
          className="max-w-3xl md:max-w-4xl text-display-1 leading-[1.02] font-semibold tracking-tight text-balance"
        />

        {/* ── Body paragraph (48px gap from headline) ── */}
        <Reveal direction="up" delay={0.2} amount={0.6}>
          <p className="mt-12 max-w-xl text-lg text-steel">{subcopy ?? defaultHeroContent.subcopy}</p>
        </Reveal>

        {/* ── CTA row (48px gap from body) ── */}
        <Reveal direction="up" delay={0.3} amount={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 md:gap-5">
            <Magnetic>
              <ButtonLink
                href="/contact"
                variant="cta"
                size="xl"
                data-cursor-hover
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink
              href="/services"
              variant="outline"
              size="xl"
              className="border-border bg-transparent text-charcoal hover:bg-secondary"
              data-cursor-hover
            >
              Explore services
            </ButtonLink>

            {/* ── Phone number: visually separated with icon circle + divider ── */}
            <span className="mx-1 hidden h-8 w-px bg-border md:block" aria-hidden />
            <a
              href={`tel:${company.contact.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 rounded-full border border-border px-4 py-2 text-sm text-steel transition-colors hover:border-steel-light hover:text-charcoal"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
                <Phone className="h-3.5 w-3.5 text-charcoal" />
              </span>
              {company.contact.phones[0]}
            </a>
          </div>
        </Reveal>

        {/* ── Stats row (48px gap from CTA, generous bottom padding) ── */}
        <Reveal direction="up" delay={0.4} amount={0.6}>
          <div className="mt-10 md:mt-12 grid max-w-2xl grid-cols-3 gap-x-8 gap-y-0 border-t border-border pt-8 md:pt-10 pb-4 lg:gap-x-16">
            <Stat value={`${services.length}`} label="Solution areas" />
            <Stat value={`${partners.length}+`} label="OEM technology partners" />
            <Stat value={`${company.serviceAreas.length}`} label="Locations across India" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}