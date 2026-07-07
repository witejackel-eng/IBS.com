import type { Metadata } from "next";
import { ArrowRight, FileCheck, ShieldCheck, Clock, Handshake } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ComplianceMarkIcon } from "@/components/illustrations/icons";

import { TrustMetricsSection } from "@/components/sections/quality/trust-metrics";
import { ServiceTimelineSection } from "@/components/sections/quality/service-timeline";
import { AmcCoverageSection } from "@/components/sections/quality/amc-coverage";

export const metadata: Metadata = {
  title: "Quality Assurance & AMC Support",
  description:
    "Structured service protocols, industry-standard SLAs, and BIS/STQC-aligned compliance behind every IBS deployment.",
  alternates: { canonical: "/quality" },
};

/* ─── Support Philosophy Data ─── */
const principles = [
  {
    icon: ShieldCheck,
    title: "Prevent problems",
    description:
      "Scheduled maintenance catches drift before it becomes downtime. Smoke detector cleaning, UPS battery load tests, and firmware updates happen on a calendar, not after an outage.",
  },
  {
    icon: Clock,
    title: "Respond quickly",
    description:
      "A defined escalation matrix and trained response team mean the right engineer is on site fast, with the right parts and the original as-built documentation.",
  },
  {
    icon: FileCheck,
    title: "Document everything",
    description:
      "Every visit produces a service log, a checklist, and a health summary. The paper trail means compliance audits are a one-hour conversation, not a six-week fire drill.",
  },
  {
    icon: Handshake,
    title: "Support long term",
    description:
      "The same engineering team that built the system maintains it. No vendor handoff, no guessing at someone else's wiring, no finger-pointing between installers and maintainers.",
  },
];

/* ─── Why Clients Stay Data ─── */
const stayReasons = [
  {
    number: "01",
    title: "Single engineering team",
    description:
      "The people who installed your system are the people who maintain it. No third-party handoffs, no knowledge gaps between build and support.",
  },
  {
    number: "02",
    title: "Preventive maintenance",
    description:
      "Quarterly, half-yearly, and annual service cadences aligned with OEM recommendations and your site's risk profile — not a one-size-fits-all schedule.",
  },
  {
    number: "03",
    title: "Fast escalation",
    description:
      "A defined escalation matrix with target response times. The right engineer, with the right documentation, dispatched quickly when something needs attention.",
  },
  {
    number: "04",
    title: "Detailed reporting",
    description:
      "Service logs, checklists, and health summaries after every visit. Your compliance audits and internal reviews have the documentation they need.",
  },
  {
    number: "05",
    title: "Original OEM support",
    description:
      "Genuine parts, authorized channels, and manufacturer-backed warranties. No gray-market substitutes that void coverage or introduce compatibility issues.",
  },
  {
    number: "06",
    title: "Long-term relationship",
    description:
      "AMC engagements that span years, not contract cycles. We grow with your infrastructure and keep it running as your operations evolve.",
  },
];

/* ─── Hero Illustration Component ─── */
function HeroIllustration() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Background grid dots */}
        <defs>
          <pattern id="hero-quality-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--border)" />
          </pattern>
        </defs>
        <rect width="480" height="400" fill="url(#hero-quality-dots)" opacity="0.6" />

        {/* Dashboard frame */}
        <rect x="80" y="60" width="320" height="220" rx="16" stroke="var(--border)" strokeWidth="1.5" fill="var(--card)" />
        <rect x="100" y="80" width="120" height="8" rx="4" fill="var(--steel)" opacity="0.3" />
        <rect x="100" y="100" width="80" height="6" rx="3" fill="var(--steel)" opacity="0.2" />

        {/* Metrics cards inside dashboard */}
        <rect x="100" y="130" width="68" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <rect x="108" y="140" width="24" height="4" rx="2" fill="var(--deep-blue)" opacity="0.8" />
        <rect x="108" y="150" width="16" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />
        <rect x="108" y="158" width="20" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />

        <rect x="178" y="130" width="68" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <rect x="186" y="140" width="20" height="4" rx="2" fill="var(--deep-blue)" opacity="0.6" />
        <rect x="186" y="150" width="16" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />
        <rect x="186" y="158" width="24" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />

        <rect x="256" y="130" width="68" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <rect x="264" y="140" width="28" height="4" rx="2" fill="var(--deep-blue)" opacity="0.7" />
        <rect x="264" y="150" width="20" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />
        <rect x="264" y="158" width="16" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />

        <rect x="334" y="130" width="52" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <rect x="342" y="140" width="16" height="4" rx="2" fill="var(--deep-blue)" opacity="0.5" />
        <rect x="342" y="150" width="20" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />

        {/* Chart area */}
        <rect x="100" y="196" width="200" height="64" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <polyline points="116,240 140,228 164,236 188,220 212,224 236,210 260,218 280,206" stroke="var(--deep-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="116,240 140,228 164,236 188,220 212,224 236,210 260,218 280,206 280,248 116,248" fill="var(--deep-blue)" opacity="0.06" />

        {/* Status panel */}
        <rect x="316" y="196" width="70" height="64" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--background)" />
        <circle cx="336" cy="216" r="5" stroke="#22C55E" strokeWidth="1.5" fill="none" />
        <circle cx="336" cy="216" r="2" fill="#22C55E" />
        <rect x="348" y="213" width="28" height="4" rx="2" fill="var(--steel)" opacity="0.3" />
        <circle cx="336" cy="238" r="5" stroke="#22C55E" strokeWidth="1.5" fill="none" />
        <circle cx="336" cy="238" r="2" fill="#22C55E" />
        <rect x="348" y="235" width="24" height="4" rx="2" fill="var(--steel)" opacity="0.3" />

        {/* Engineer silhouette (simplified) */}
        <circle cx="400" cy="100" r="16" stroke="var(--steel)" strokeWidth="1.5" fill="var(--card)" />
        <rect x="392" y="120" width="16" height="24" rx="4" stroke="var(--steel)" strokeWidth="1.5" fill="var(--card)" />
        <line x1="388" y1="132" x2="378" y2="148" stroke="var(--steel)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="412" y1="132" x2="422" y2="148" stroke="var(--steel)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Connection lines from engineer to dashboard */}
        <line x1="384" y1="110" x2="400" y2="110" stroke="var(--deep-blue)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

        {/* Decorative nodes */}
        <circle cx="60" cy="120" r="4" stroke="var(--deep-blue)" strokeWidth="1.5" fill="var(--background)" />
        <circle cx="60" cy="200" r="3" stroke="var(--steel)" strokeWidth="1" fill="var(--card)" />
        <circle cx="60" cy="280" r="4" stroke="var(--deep-blue)" strokeWidth="1.5" fill="var(--background)" />
        <line x1="60" y1="124" x2="60" y2="196" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="60" y1="204" x2="60" y2="276" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4" />

        {/* Bottom accent */}
        <rect x="180" y="320" width="120" height="4" rx="2" fill="var(--deep-blue)" opacity="0.15" />
        <circle cx="240" cy="360" r="6" fill="var(--deep-blue)" opacity="0.1" />
        <circle cx="200" cy="370" r="3" fill="var(--deep-blue)" opacity="0.08" />
        <circle cx="280" cy="375" r="4" fill="var(--deep-blue)" opacity="0.06" />
      </svg>
    </div>
  );
}

/* ─── CTA Background Illustration ─── */
function CtaIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full opacity-[0.04] pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--charcoal)" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#cta-dots)" />
      <rect x="120" y="100" width="160" height="100" rx="12" stroke="var(--charcoal)" strokeWidth="1" />
      <line x1="120" y1="140" x2="280" y2="140" stroke="var(--charcoal)" strokeWidth="0.5" />
      <circle cx="200" cy="80" r="20" stroke="var(--charcoal)" strokeWidth="0.8" />
      <line x1="200" y1="60" x2="200" y2="100" stroke="var(--charcoal)" strokeWidth="0.8" />
      <line x1="180" y1="80" x2="220" y2="80" stroke="var(--charcoal)" strokeWidth="0.8" />
    </svg>
  );
}

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Quality & Support", path: "/quality" }]} />

      {/* ─── SECTION 1: HERO ─── */}
      <Section bg="ambient" className="bg-background pt-40 pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  Quality &amp; Support
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h1 className="mt-6 max-w-2xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance">
                  Reliability isn&apos;t an afterthought.
                  <br />
                  <span className="text-deep-blue">It&apos;s the service.</span>
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  A structured service schedule and defined SLAs mean support doesn&apos;t depend
                  on remembering to call someone — problems get caught and logged before they become
                  downtime.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                    Talk to an Engineer <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href="/services/annual-maintenance-service"
                    variant="outline"
                    size="xl"
                    className="gap-2 rounded-full border-border"
                    data-cursor-hover
                  >
                    Explore AMC
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Right — Illustration */}
            <Reveal direction="right" delay={0.2} className="lg:col-span-5">
              <div className="aspect-[6/5] w-full rounded-3xl border border-border bg-card bg-engineering-grid overflow-hidden">
                <HeroIllustration />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 2: SUPPORT PHILOSOPHY ─── */}
      <Section>
        <Container>
          <Reveal direction="up" className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Support Philosophy
            </span>
            <h2 className="mt-4 max-w-xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Four principles behind every service engagement
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} direction="up" delay={i * 0.08} amount={0.5}>
                <div
                  className={`group relative rounded-3xl border border-border bg-card p-8 lg:p-10 transition-all duration-500 hover:border-deep-blue/30 hover:shadow-[0_16px_40px_-16px_rgba(234,88,12,0.15)] ${
                    i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-deep-blue/8 text-deep-blue transition-colors duration-300 group-hover:bg-deep-blue group-hover:text-white">
                      <p.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-charcoal">{p.title}</h3>
                      <p className="mt-3 text-sm text-steel leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 3: TRUST METRICS ─── */}
      <TrustMetricsSection />

      {/* ─── SECTION 4: SERVICE JOURNEY ─── */}
      <ServiceTimelineSection />

      {/* ─── SECTION 5: AMC COVERAGE ─── */}
      <AmcCoverageSection />

      {/* ─── SECTION 6: COMPLIANCE STANDARDS ─── */}
      <Section className="bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — Editorial content */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
                  <ComplianceMarkIcon className="h-4 w-4" /> Compliance Standards
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                  Built around BIS and STQC standards
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <p className="mt-6 text-steel leading-relaxed">
                  Fire alarm systems in Delhi NCR need to meet BIS norms. Surveillance and access
                  control setups that touch employee data fall under STQC-aligned practices where
                  applicable. We align the maintenance schedule with those requirements so the
                  audit does not become a separate exercise.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-4 text-steel leading-relaxed">
                  And because we install the systems in the first place, the AMC is not a
                  third-party vendor guessing at someone else&apos;s wiring — it is the same
                  engineering team that built the system, with the original as-built documentation
                  on hand. Every engagement starts with a full asset inventory and builds a
                  scheduled-service calendar around OEM recommendations and your site&apos;s risk profile.
                </p>
              </Reveal>
            </div>

            {/* Right — Compliance checklist visual */}
            <div className="lg:col-span-5">
              <Reveal direction="right" delay={0.15}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <p className="text-xs font-semibold tracking-[0.14em] text-steel uppercase mb-6">
                    Compliance Checklist
                  </p>
                  <ul className="space-y-4">
                    {[
                      "BIS-aligned fire alarm testing",
                      "STQC-compliant documentation practices",
                      "Asset inventory and as-built records",
                      "Scheduled preventive maintenance logs",
                      "Service-level agreement compliance",
                      "Health summary after every visit",
                      "Emergency response protocol records",
                      "OEM-recommended maintenance cadence",
                    ].map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-deep-blue/10 text-deep-blue">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        <span className="text-sm text-steel leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 7: WHY CLIENTS STAY ─── */}
      <Section>
        <Container>
          <Reveal direction="up" className="mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Client Retention
            </span>
            <h2 className="mt-6 max-w-xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Why clients stay with IBS
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {stayReasons.map((reason, i) => (
              <Reveal key={reason.number} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-300">
                  <span className="text-3xl font-semibold text-deep-blue/20 font-heading">{reason.number}</span>
                  <h3 className="mt-3 text-base font-semibold text-charcoal">{reason.title}</h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 8: CTA ─── */}
      <Section className="relative overflow-hidden">
        <CtaIllustration />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <h2 className="text-display-2 font-semibold tracking-tight text-charcoal text-balance">
                Need dependable support after deployment?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-steel leading-relaxed max-w-xl mx-auto">
                Talk to our engineering team about annual maintenance and enterprise support.
                The same people who built your system will keep it running.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                  Talk to an Engineer <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/services/annual-maintenance-service"
                  variant="outline"
                  size="xl"
                  className="gap-2 rounded-full border-border"
                  data-cursor-hover
                >
                  Request AMC Proposal
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}