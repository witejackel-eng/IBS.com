import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { QualityHeroIllustration } from "@/components/sections/quality-redesign/hero-illustration";
import { SupportPhilosophy } from "@/components/sections/quality-redesign/support-philosophy";
import { AmcCoverage } from "@/components/sections/quality-redesign/amc-coverage";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality Assurance & AMC Support",
  description:
    "Structured service protocols, industry-standard SLAs, and BIS/STQC-aligned compliance behind every IBS deployment.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Quality & Support", path: "/quality" }]} />

      {/* ── HERO ── */}
      <Section bg="ambient" className="bg-background pt-40 pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                Quality &amp; Support
              </span>
              <SplitText
                as="h1"
                text="Reliability isn't an afterthought. It's the service."
                className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
              />
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  {amcService.intro}
                </p>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.15} className="flex justify-center lg:justify-end">
              <QualityHeroIllustration />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── SUPPORT PHILOSOPHY ── */}
      <Section className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="Support philosophy"
            title="How we think about support"
            description="Four principles that shape every service visit, every escalation, and every health report."
            align="left"
            className="mb-12"
          />
          <SupportPhilosophy />
        </Container>
      </Section>

      {/* ── AMC COVERAGE ── */}
      <Section bg="blueprint" className="bg-background">
        <Container>
          <Reveal direction="up" className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
              AMC Coverage
            </span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal">
              Every system. One contract.
            </h2>
          </Reveal>
          <AmcCoverage />
          <Reveal direction="up" delay={0.2} className="mt-10">
            <ButtonLink
              href="/services/annual-maintenance-service"
              variant="outline"
              className="gap-2 rounded-full border-border"
              data-cursor-hover
            >
              See full AMC details <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section bg="ambient" className="bg-background pt-20 pb-24 lg:pt-24 lg:pb-32">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal direction="up" delay={0.05}>
              <h2 className="max-w-3xl text-display-2 font-heading font-semibold tracking-tight leading-[1.1] text-charcoal text-balance">
                Need dependable support after deployment?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="max-w-xl text-lg text-steel">
                Talk to our engineering team about annual maintenance and enterprise support.
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
                Talk to an Engineer <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}