import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { HorizontalTimeline } from "@/components/shared/horizontal-timeline";
import { QualityHeroIllustration } from "@/components/sections/quality-redesign/hero-illustration";
import { SupportPhilosophy } from "@/components/sections/quality-redesign/support-philosophy";
import { AmcCoverage } from "@/components/sections/quality-redesign/amc-coverage";
import { ComplianceFlow } from "@/components/sections/quality-redesign/compliance-flow";
import { WhyClientsStay } from "@/components/sections/quality-redesign/why-clients-stay";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { amcService, company } from "@/lib/content";
import {
  Eye, Wrench, FileText, Shield, Zap, BarChart3, Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & AMC Support",
  description:
    "Structured service protocols, industry-standard SLAs, and BIS/STQC-aligned compliance behind every IBS deployment.",
  alternates: { canonical: "/quality" },
};

const journeySteps = [
  { title: "Site Survey", description: "Assess existing systems", icon: <Eye className="h-5 w-5" /> },
  { title: "Installation", description: "Deploy and configure", icon: <Wrench className="h-5 w-5" /> },
  { title: "Documentation", description: "As-built records", icon: <FileText className="h-5 w-5" /> },
  { title: "Preventive\nMaintenance", description: "Scheduled servicing", icon: <Shield className="h-5 w-5" /> },
  { title: "Emergency\nSupport", description: "Rapid response", icon: <Zap className="h-5 w-5" /> },
  { title: "Reporting", description: "Health summaries", icon: <BarChart3 className="h-5 w-5" /> },
  { title: "Continuous\nImprovement", description: "Optimize and update", icon: <Activity className="h-5 w-5" /> },
];

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

      {/* ── SERVICE JOURNEY ── */}
      <Section bg="grid">
        <Container>
          <SectionHeading
            eyebrow="Service journey"
            title="From installation to long-term reliability"
            description="Every engagement follows a structured path — from the first site survey to continuous improvement years after go-live."
            align="center"
            className="mb-14"
          />
          <HorizontalTimeline steps={journeySteps} />
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

      {/* ── COMPLIANCE STANDARDS ── */}
      <Section bg="grid" className="bg-secondary/20">
        <Container>
          <Reveal direction="up" className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
              Compliance
            </span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal">
              Standards are not optional.
            </h2>
          </Reveal>
          <ComplianceFlow />
        </Container>
      </Section>

      {/* ── WHY CLIENTS STAY ── */}
      <Section bg="blueprint" className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="Client retention"
            title="Why clients stay with IBS"
            description="The reasons organizations renew year after year — and why the same clients keep adding systems to their AMC."
            align="left"
            className="mb-14"
          />
          <WhyClientsStay />
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
              <ButtonLink
                href="/services/annual-maintenance-service"
                variant="outline"
                size="xl"
                className="rounded-full"
                data-cursor-hover
              >
                Request AMC Proposal
              </ButtonLink>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-border bg-card/80 px-6 py-4 text-sm text-steel">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {company.contact.phones.join(" / ")}
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {company.contact.email}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Dwarka, New Delhi
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}