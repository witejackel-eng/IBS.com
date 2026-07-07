import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { PartnerEcosystemHero } from "@/components/sections/partners-redesign/partner-ecosystem-hero";
import { PartnerPhilosophy } from "@/components/sections/partners-redesign/partner-philosophy";
import { TechnologyCluster } from "@/components/sections/partners-redesign/technology-clusters";
import { FeaturedCategory } from "@/components/sections/partners-redesign/featured-category";
import { IntegrationFlow } from "@/components/sections/partners-redesign/integration-flow";
import { WhyGenuineOem } from "@/components/sections/partners-redesign/why-genuine-oem";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { partners, partnerCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our OEM Technology Partners",
  description:
    "The OEM brands IBS deals in across audio/video integration, communication & IT, and security.",
  alternates: { canonical: "/partners" },
};

const categoryDescriptions: Record<string, string> = {
  "av-integration":
    "Boardroom conferencing, video walls, public address systems, and classroom technology — from display manufacturers to DSP and control system brands.",
  "communication-it":
    "Voice platforms, network switching and routing, firewalls, Wi-Fi, UPS systems, and storage — the infrastructure that keeps everything connected.",
  "security":
    "CCTV surveillance, access control, fire detection, and intrusion systems — from camera manufacturers to fire panel specialists.",
};

const categoryDeployments: Record<string, string[]> = {
  "av-integration": ["Boardrooms", "Training rooms", "Auditoriums", "Video walls", "Classrooms"],
  "communication-it": ["Office networks", "Data centers", "Wi-Fi coverage", "Server rooms", "Remote sites"],
  "security": ["Office buildings", "Hotels", "Residential", "Industrial", "Government"],
};

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]} />
      <CollectionPageJsonLd
        name="Partners"
        path="/partners"
        description="The OEM brands IBS deals in across audio/video integration, communication & IT, and security."
      />

      {/* ── HERO ── */}
      <Section bg="ambient" className="bg-background pt-40 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            </div>
            <Reveal direction="right" delay={0.15} className="flex justify-center lg:justify-end">
              <PartnerEcosystemHero />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── PARTNER PHILOSOPHY ── */}
      <Section className="bg-background">
        <Container>
          <PartnerPhilosophy />
        </Container>
      </Section>

      {/* ── TRUST STATISTICS (dark) ── */}
      <Section className="bg-charcoal py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <AnimatedCounter value={partners.length} suffix="+" label="OEM Partners" />
            <AnimatedCounter value={100} suffix="%" label="Genuine Products" />
            <AnimatedCounter value={6} suffix="" label="Technology Categories" />
            <AnimatedCounter value={15} suffix="+" label="Years of Relationships" />
          </div>
        </Container>
      </Section>

      {/* ── TECHNOLOGY ECOSYSTEM (Clusters) ── */}
      <Section bg="grid" className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="Technology ecosystem"
            title="Every brand, one system."
            description="Hover each category to see the OEM partners behind it."
            align="center"
            size="lg"
            className="mb-14"
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {partnerCategories.map((cat, i) => {
              const catPartners = partners.filter((p) => p.category === cat.key);
              return (
                <TechnologyCluster
                  key={cat.key}
                  title={cat.label.replace(" Partners", "")}
                  description={categoryDescriptions[cat.key]}
                  partners={catPartners}
                  accent={i === 0 ? "left" : "center"}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── FEATURED PARTNER CATEGORIES (Alternating Editorial) ── */}
      {partnerCategories.map((cat, i) => {
        const catPartners = partners.filter((p) => p.category === cat.key);
        return (
          <Section
            key={cat.key}
            bg={i === 1 ? "grid" : "none"}
            className={i === 1 ? "bg-secondary/20" : "bg-background"}
          >
            <Container>
              <FeaturedCategory
                title={cat.label}
                description={categoryDescriptions[cat.key]}
                partners={catPartners}
                deployments={categoryDeployments[cat.key]}
                reversed={i % 2 === 1}
                accent={i === 0}
              />
            </Container>
          </Section>
        );
      })}

      {/* ── INTEGRATION FLOW ── */}
      <Section bg="blueprint" className="bg-secondary/20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="How everything comes together"
            description="From OEM sourcing to long-term support — a structured path that turns individual products into one reliable system."
            align="center"
            className="mb-14"
          />
          <IntegrationFlow />
        </Container>
      </Section>

      {/* ── WHY GENUINE OEM ── */}
      <Section bg="grid" className="bg-background">
        <Container>
          <WhyGenuineOem />
        </Container>
      </Section>

      {/* ── CTA ── */}
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
              <ButtonLink
                href="/services"
                variant="outline"
                size="xl"
                className="rounded-full"
                data-cursor-hover
              >
                Explore Solutions
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}