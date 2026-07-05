"use client";

import { ArrowRight, Phone } from "lucide-react";

import { HeroCanvas } from "@/components/webgl/hero-canvas";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/shared/button-link";
import { Container } from "@/components/layout/container";
import { company, services, partners } from "@/lib/content";

export interface HeroContent {
  headline: string;
  subcopy: string;
}

export const defaultHeroContent: HeroContent = {
  headline: "Integrated technology, engineered for how your business runs.",
  subcopy: company.summary,
};

export function HeroSection({ headline, subcopy }: Partial<HeroContent> = {}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background text-charcoal">
      <div className="absolute inset-0 bg-engineering-grid opacity-70" />
      <div className="absolute inset-0 bg-ambient-glow" />
      <HeroCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <Container className="relative z-10 pt-24 pb-16">
        <Reveal direction="up" amount={0.6}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            {company.positioning}
          </span>
        </Reveal>

        <SplitText
          as="h1"
          text={headline ?? defaultHeroContent.headline}
          className="max-w-4xl text-display-1 leading-[1.02] font-semibold tracking-tight text-balance"
        />

        <Reveal direction="up" delay={0.2} amount={0.6}>
          <p className="mt-8 max-w-xl text-lg text-steel">{subcopy ?? defaultHeroContent.subcopy}</p>
        </Reveal>

        <Reveal direction="up" delay={0.3} amount={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <ButtonLink
                href="/contact"
                size="lg"
                className="h-12 rounded-full bg-deep-blue px-7 text-base text-warm-white hover:bg-deep-blue-light"
                data-cursor-hover
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink
              href="/services"
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border bg-transparent px-7 text-base text-charcoal hover:bg-secondary"
              data-cursor-hover
            >
              Explore services
            </ButtonLink>
            <a
              href={`tel:${company.contact.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-2 text-sm text-steel transition-colors hover:text-charcoal"
            >
              <Phone className="h-4 w-4" />
              {company.contact.phones[0]}
            </a>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.4} amount={0.6}>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
            <Stat value={`${services.length}`} label="Solution areas" />
            <Stat value={`${partners.length}+`} label="OEM technology partners" />
            <Stat value={`${company.serviceAreas.length}`} label="Delhi NCR locations served" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-charcoal font-heading">{value}</p>
      <p className="mt-1 text-sm text-steel">{label}</p>
    </div>
  );
}
