"use client";

import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { OemNetworkHero } from "./oem-network-hero";
import { EcosystemOverview, PartnerLogoWall } from "./partner-logo-wall";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Partner } from "@/lib/content";

/* ================================================================== */
/*  Category group type                                                */
/* ================================================================== */

interface CategoryGroup {
  key: string;
  partners: Partner[];
}

/* ================================================================== */
/*  Category descriptions                                             */
/* ================================================================== */

const categoryDescriptions: Record<string, string> = {
  "av-integration":
    "Boardroom conferencing, video walls, public address systems, and classroom technology — from display manufacturers to DSP and control system brands.",
  "communication-it":
    "Voice platforms, network switching and routing, firewalls, Wi-Fi, UPS systems, and storage — the infrastructure that keeps everything connected.",
  security:
    "CCTV surveillance, access control, fire detection, and intrusion systems — from camera manufacturers to fire panel specialists.",
};

/* ================================================================== */
/*  PartnersPageClient                                                */
/* ================================================================== */

export function PartnersPageClient({
  categories,
}: {
  categories: CategoryGroup[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleHoverChange = useCallback(
    (key: string | null) => {
      if (prefersReducedMotion) return;
      setActiveCategory(key);
    },
    [prefersReducedMotion],
  );

  const totalPartners = categories.reduce((sum, c) => sum + c.partners.length, 0);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <Section bg="ambient" className="bg-background pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-14 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                Partners (OEM)
              </span>
              <SplitText
                as="h1"
                text="The technology partners behind every deployment."
                className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
              />
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  Every product we install comes through an authorized OEM channel. Working directly
                  with manufacturers means we recommend hardware based on what a project needs — not
                  what one vendor happens to sell. Genuine warranties, manufacturer support, and one
                  team responsible for how different brands work together on site.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-3xl font-heading font-bold text-charcoal tabular-nums">
                    {totalPartners}+
                  </span>
                  <span className="text-sm text-steel">OEM brands across 3 technology ecosystems</span>
                </div>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.15} className="flex justify-center lg:justify-end">
              <OemNetworkHero />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/*  SECTION 2 — OEM ECOSYSTEM OVERVIEW                           */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <Section bg="grid" className="bg-background py-20 sm:py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="OEM Ecosystem"
            title="Every Brand. One Engineering Partner."
            description="Three technology ecosystems, integrated by a single team. Hover any category to explore."
            align="center"
            size="lg"
            className="mb-10 sm:mb-14"
          />
          <EcosystemOverview
            categories={categories}
            activeCategory={activeCategory}
            onHoverChange={handleHoverChange}
          />
        </Container>
      </Section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/*  SECTIONS 3-5 — PARTNER LOGO WALLS                           */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {categories.map((cat, i) => (
        <Section
          key={cat.key}
          className={i % 2 === 1 ? "bg-secondary/15" : "bg-background py-20 sm:py-24 lg:py-32"}
        >
          <Container>
            <PartnerLogoWall
              categoryKey={cat.key}
              partners={cat.partners}
              activeCategory={activeCategory}
            />
          </Container>
        </Section>
      ))}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/*  CTA                                                           */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <Section bg="ambient" className="bg-background pt-20 pb-24 lg:pt-24 lg:pb-32">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal direction="up" delay={0.05}>
              <h2 className="max-w-3xl text-display-2 font-heading font-semibold tracking-tight leading-[1.1] text-charcoal text-balance">
                Building a new technology infrastructure?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="max-w-xl text-lg text-steel">
                We&apos;ll recommend the right OEM partners, integrate everything into one system,
                and support it long after installation.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.25} className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink
                href="/contact"
                variant="cta"
                size="xl"
                className="rounded-full"
                data-cursor-hover
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}