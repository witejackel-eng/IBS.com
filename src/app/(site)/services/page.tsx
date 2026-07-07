import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Layers, Network, Cpu, FileText, Wrench } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionHeading } from "@/components/shared/section-heading";
import { HorizontalTimeline } from "@/components/shared/horizontal-timeline";
import { SecondaryHeroNetwork } from "@/components/webgl/secondary-hero-network";
import { TechnologyEcosystem } from "@/components/sections/services-redesign/technology-ecosystem";
import { ServiceShowcase } from "@/components/sections/services-redesign/service-showcase";
import { ConnectionsFlow } from "@/components/sections/services-redesign/connections-flow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { services, amcService } from "@/lib/content";
import {
  Eye, PencilRuler, Package, Wrench as WrenchIcon, TestTube2, GraduationCap, Headset,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Solutions We Deliver",
  description:
    "Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing — all delivered and supported by one team.",
  alternates: { canonical: "/services" },
};

const timelineSteps = [
  { title: "Consultation", description: "Understand needs", icon: <Eye className="h-5 w-5" /> },
  { title: "Site Survey", description: "Audit existing systems", icon: <PencilRuler className="h-5 w-5" /> },
  { title: "Design", description: "Technical architecture", icon: <Cpu className="h-5 w-5" /> },
  { title: "Procurement", description: "Source OEM hardware", icon: <Package className="h-5 w-5" /> },
  { title: "Installation", description: "Certified deployment", icon: <WrenchIcon className="h-5 w-5" /> },
  { title: "Testing", description: "Verify to spec", icon: <TestTube2 className="h-5 w-5" /> },
  { title: "Training", description: "Handover & knowledge", icon: <GraduationCap className="h-5 w-5" /> },
  { title: "Support", description: "Ongoing maintenance", icon: <Headset className="h-5 w-5" /> },
];

const whyIbsReasons = [
  { icon: Users, title: "One engineering partner", desc: "A single team across every technology domain — no finger-pointing between vendors." },
  { icon: Layers, title: "Certified OEM ecosystem", desc: "46+ authorized manufacturer relationships, genuine products with full warranty." },
  { icon: Network, title: "Cross-discipline expertise", desc: "Voice, AV, network, security, call center, and software — designed to work together." },
  { icon: Wrench, title: "Long-term support", desc: "AMC coverage that keeps multi-vendor systems running long after installation." },
  { icon: FileText, title: "Enterprise documentation", desc: "As-built docs, service logs, and health reports for every system we deploy." },
  { icon: Cpu, title: "Professional deployment", desc: "Structured engineering process from consultation through to ongoing maintenance." },
];

export default function ServicesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
      <CollectionPageJsonLd
        name="Services"
        path="/services"
        description="Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing."
        items={[...services, amcService].map((s) => ({ name: s.title, path: `/services/${s.slug}` }))}
      />

      {/* ── HERO ── */}
      <Section bg="ambient" className="relative overflow-hidden bg-background pt-40 pb-24">
        <SecondaryHeroNetwork />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                Product &amp; Services
              </span>
              <SplitText
                as="h1"
                text="Every technology domain your business runs on."
                className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
              />
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  Communication. Networking. Security. AV. Infrastructure. Maintenance.
                  Designed as one integrated ecosystem — delivered and supported by one engineering team.
                </p>
              </Reveal>
            </div>

            {/* Hero illustration: Connected infrastructure */}
            <Reveal direction="right" delay={0.15}>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  {/* Connection lines */}
                  <line x1="200" y1="200" x2="80" y2="80" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="320" y2="80" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="340" y2="200" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="320" y2="320" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="80" y2="320" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="200" y1="200" x2="60" y2="200" stroke="var(--border)" strokeWidth="1.5" />

                  {/* Center hub */}
                  <rect x="168" y="168" width="64" height="64" rx="16" fill="var(--deep-blue)" fillOpacity="0.12" stroke="var(--deep-blue)" strokeWidth="1.5" />
                  <text x="200" y="196" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--deep-blue)" fontFamily="var(--font-heading)">IBS</text>
                  <text x="200" y="212" textAnchor="middle" fontSize="7" fill="var(--steel)">Hub</text>

                  {/* Outer nodes */}
                  <rect x="48" y="48" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="80" y="76" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">Voice</text>
                  <text x="80" y="92" textAnchor="middle" fontSize="6" fill="var(--steel)">UC / SIP</text>

                  <rect x="288" y="48" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="320" y="76" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">AV</text>
                  <text x="320" y="92" textAnchor="middle" fontSize="6" fill="var(--steel)">Boardrooms</text>

                  <rect x="308" y="168" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="340" y="196" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">Net</text>
                  <text x="340" y="212" textAnchor="middle" fontSize="6" fill="var(--steel)">Infrastructure</text>

                  <rect x="288" y="288" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="320" y="316" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">Security</text>
                  <text x="320" y="332" textAnchor="middle" fontSize="6" fill="var(--steel)">CCTV / Access</text>

                  <rect x="48" y="288" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="80" y="316" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">Call Ctr</text>
                  <text x="80" y="332" textAnchor="middle" fontSize="6" fill="var(--steel)">CRM / Dialer</text>

                  <rect x="28" y="168" width="64" height="64" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
                  <text x="60" y="196" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--charcoal)" fontFamily="var(--font-heading)">Software</text>
                  <text x="60" y="212" textAnchor="middle" fontSize="6" fill="var(--steel)">Licensing</text>

                  {/* Pulse dots on connections */}
                  <circle cx="140" cy="140" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="260" cy="140" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy="200" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="260" cy="260" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="260" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="130" cy="200" r="3" fill="var(--deep-blue)" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── TECHNOLOGY ECOSYSTEM ── */}
      <Section className="bg-background py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Integrated approach"
            title="One team. Six disciplines."
            description="Instead of hiring multiple vendors, clients work with one engineering team that handles every technology layer. Hover any node to see what it covers."
            align="center"
            size="lg"
            className="mb-16"
          />
          <TechnologyEcosystem services={services} />
        </Container>
      </Section>

      {/* ── ONE TEAM. SIX DISCIPLINES. ── */}
      <Section bg="grid" className="bg-secondary/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal direction="left">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
                  Why one integrator
                </span>
                <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                  Systems thinking, not siloed vendors.
                </h2>
                <p className="mt-6 text-steel leading-relaxed">
                  Most organizations end up with voice from one vendor, networking from another,
                  security from a third — and nobody responsible for how they interact. IBS delivers
                  every technology layer through one integrated engineering team, so the dial plan
                  works with the network, the cameras record to the right storage, and the fire
                  alarm talks to the access control system.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Layers className="h-5 w-5" />, title: "Shared infrastructure knowledge", desc: "The team designing your network knows exactly what the voice and AV systems need." },
                { icon: <Network className="h-5 w-5" />, title: "Single point of accountability", desc: "One escalation path, one service log, one team that understands the full picture." },
                { icon: <Cpu className="h-5 w-5" />, title: "Cross-system compatibility", desc: "Hardware and software chosen to work together, not sourced in isolation." },
                { icon: <Wrench className="h-5 w-5" />, title: "Unified maintenance", desc: "One AMC covers voice, AV, network, security, and fire — no gaps between vendors." },
              ].map((item, i) => (
                <Reveal key={item.title} direction="right" delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal font-heading">{item.title}</h3>
                      <p className="mt-1 text-sm text-steel leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FEATURED SERVICE SHOWCASES ── */}
      {services.map((service, i) => (
        <Section
          key={service.slug}
          bg={i % 3 === 0 ? "none" : i % 3 === 1 ? "grid" : "blueprint"}
          className={i % 2 === 1 ? "bg-secondary/20" : "bg-background"}
        >
          <Container>
            <ServiceShowcase service={service} index={i} />
          </Container>
        </Section>
      ))}

      {/* ── HOW EVERYTHING CONNECTS ── */}
      <Section bg="ambient" className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="System interdependency"
            title="How everything connects"
            description="No technology system operates in isolation. Understanding those connections is what makes integration work."
            align="center"
            className="mb-16"
          />
          <ConnectionsFlow />
        </Container>
      </Section>

      {/* ── ENGINEERING PROCESS ── */}
      <Section bg="grid">
        <Container>
          <SectionHeading
            eyebrow="Delivery process"
            title="How we deliver"
            description="A structured engineering methodology that takes every project from first conversation to long-term support."
            align="center"
            className="mb-14"
          />
          <HorizontalTimeline steps={timelineSteps} />
        </Container>
      </Section>

      {/* ── ANNUAL MAINTENANCE ── */}
      <Section className="bg-secondary/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
                  Annual Maintenance
                </span>
                <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                  Systems that keep running.
                </h2>
                <p className="mt-6 text-steel leading-relaxed">
                  Most integration projects end at handover. Our AMC exists because the gap between
                  installation and ongoing maintenance is where most preventable downtime comes from.
                  A smoke detector not cleaned, a UPS battery not tested, a SIP trunk not updated —
                  these fail silently until they become outages.
                </p>
                <ul className="mt-8 space-y-3">
                  {["Certified technicians on every visit", "Scheduled preventive maintenance", "Defined SLA and escalation matrix", "Health reports after every service call"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-steel">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink
                    href="/services/annual-maintenance-service"
                    variant="cta"
                    size="xl"
                    className="rounded-full"
                    data-cursor-hover
                  >
                    Explore AMC Services <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-muted">
                {amcService.image && (
                  <Image
                    src={amcService.image}
                    alt="Annual maintenance service: technicians maintaining enterprise infrastructure systems"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── WHY IBS ── */}
      <Section bg="blueprint" className="bg-background">
        <Container>
          <SectionHeading
            eyebrow="Why IBS"
            title="Engineering-first. Vendor-independent."
            description="We recommend hardware based on what the project needs, not what one vendor happens to sell."
            align="center"
            size="lg"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {whyIbsReasons.map((reason, i) => (
              <Reveal key={reason.title} direction="up" delay={i * 0.06}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
                    <reason.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal font-heading">{reason.title}</h3>
                    <p className="mt-1.5 text-sm text-steel leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── TRUST METRICS ── */}
      <Section className="bg-charcoal py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <AnimatedCounter value={500} suffix="+" label="Projects" />
            <AnimatedCounter value={46} suffix="+" label="OEM Partners" />
            <AnimatedCounter value={15} suffix="+" label="Years" />
            <AnimatedCounter value={24} suffix="/7" label="Support" />
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section bg="ambient" className="bg-background pt-20 pb-24 lg:pt-24 lg:pb-32">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal direction="up" delay={0.05}>
              <h2 className="max-w-3xl text-display-2 font-heading font-semibold tracking-tight leading-[1.1] text-charcoal text-balance">
                Let&apos;s build your technology ecosystem together.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="max-w-xl text-lg text-steel">
                Whether you&apos;re designing a new office, upgrading your network, securing a facility or
                building modern collaboration spaces, IBS delivers every technology layer through one
                integrated engineering team.
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
                href="/contact"
                variant="outline"
                size="xl"
                className="rounded-full"
                data-cursor-hover
              >
                Request a Consultation
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}