import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Monitor,
  Shield,
  Server,
  Headset,
  FileKey,
  Wrench,
  Zap,
  Users,
  BookOpen,
  Clock,
  CheckCircle,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { company, services, amcService, processSteps, partners } from "@/lib/content";
import { blurMap } from "@/lib/image-blur-map";

import { EcosystemVisualization } from "@/components/sections/services/ecosystem-visualization";
import { ServicesTrustMetrics } from "@/components/sections/services/trust-metrics";

export const metadata: Metadata = {
  title: "Technology Solutions We Deliver",
  description:
    "Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing — all delivered and supported by one team.",
  alternates: { canonical: "/services" },
};

/* ─── Service showcase data ─── */
const serviceShowcases = [
  {
    service: services[0],
    icon: Phone,
    deployments: ["IP-PBX and KTS systems", "SIP trunk integration", "Unified communications", "Call routing and voicemail"],
    technologies: ["Alcatel-Lucent", "Cisco", "NEC"],
    industries: ["Enterprises", "Hotels", "Call Centers"],
  },
  {
    service: services[1],
    icon: Monitor,
    deployments: ["Boardroom conferencing", "Auditorium AV", "Training room tech", "Video walls", "PA systems"],
    technologies: ["Poly", "Crestron", "Extron", "Biamp", "Shure", "Kramer"],
    industries: ["Enterprises", "Hotels", "Government"],
  },
  {
    service: services[2],
    icon: Server,
    deployments: ["Structured cabling", "Firewall and routing", "Wi-Fi coverage", "Data center builds", "UPS systems"],
    technologies: ["Cisco", "Fortinet", "HP Aruba", "Ruckus", "APC", "Vertiv", "Dell"],
    industries: ["Enterprises", "Hotels", "SOHO"],
  },
  {
    service: services[3],
    icon: Shield,
    deployments: ["CCTV surveillance", "Access control", "Fire alarm systems", "Home automation", "Visitor management"],
    technologies: ["Hikvision", "Axis", "eSSL", "Honeywell", "Notifier", "Morley"],
    industries: ["Enterprises", "Government", "Residential"],
  },
  {
    service: services[4],
    icon: Headset,
    deployments: ["Agent headsets", "GSM/PRI gateways", "CRM dialer integration", "Voice logging", "Performance dashboards"],
    technologies: ["Alcatel-Lucent", "Plantronics", "Cisco"],
    industries: ["Enterprises", "Call Centers", "BPO"],
  },
  {
    service: services[5],
    icon: FileKey,
    deployments: ["Microsoft 365 licensing", "Zoom and Webex", "Adobe suites", "ERP software", "Security software"],
    technologies: ["Microsoft", "Zoom", "Cisco", "Adobe"],
    industries: ["Enterprises", "Hotels", "Government"],
  },
];

/* ─── Connection flow data ─── */
const connectionFlow = [
  { label: "Voice", icon: Phone, desc: "IP telephony rides on the network" },
  { label: "Network", icon: Server, desc: "The backbone connecting every system" },
  { label: "Security", icon: Shield, desc: "Surveillance and access on the same network" },
  { label: "AV", icon: Monitor, desc: "Video conferencing needs voice and data" },
  { label: "Software", icon: FileKey, desc: "Licenses activate every platform" },
  { label: "Support", icon: Wrench, desc: "AMC keeps the entire stack running" },
];

/* ─── Process icons ─── */
const processIcons: Record<string, React.ReactNode> = {
  consultation: <Users className="h-5 w-5" />,
  planning: <BookOpen className="h-5 w-5" />,
  design: <Zap className="h-5 w-5" />,
  engineering: <Server className="h-5 w-5" />,
  installation: <Wrench className="h-5 w-5" />,
  testing: <CheckCircle className="h-5 w-5" />,
  deployment: <Monitor className="h-5 w-5" />,
  maintenance: <Clock className="h-5 w-5" />,
  support: <Headset className="h-5 w-5" />,
};

/* ─── Why IBS data ─── */
const whyIbsReasons = [
  { title: "One engineering partner", description: "One team designs, installs, and supports every technology layer — no finger-pointing between vendors." },
  { title: "Certified OEM ecosystem", description: "46+ technology partners sourced through authorized channels with genuine warranties and manufacturer support." },
  { title: "Cross-discipline expertise", description: "Voice, AV, network, security, and contact center engineers working together on the same site, on the same day." },
  { title: "Long-term support", description: "AMC contracts that keep systems running long after handover, with the same team that built them." },
  { title: "Enterprise documentation", description: "As-built records, patch panel labels, configuration logs, and health summaries for every system we install." },
  { title: "Professional deployment", description: "Structured process from consultation through testing, with site surveys, design documents, and sign-off protocols." },
];

/* ─── Hero Illustration ─── */
function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="svc-hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="var(--border)" />
        </pattern>
      </defs>
      <rect width="480" height="400" fill="url(#svc-hero-dots)" opacity="0.4" />
      {/* Central server */}
      <rect x="200" y="120" width="80" height="120" rx="6" stroke="var(--deep-blue)" strokeWidth="1.5" fill="var(--card)" />
      <rect x="212" y="132" width="56" height="6" rx="3" fill="var(--deep-blue)" opacity="0.4" />
      <rect x="212" y="146" width="40" height="4" rx="2" fill="var(--steel)" opacity="0.3" />
      {[164, 182, 200].map((y) => (
        <circle key={y} cx="220" cy={y} r={3} fill="var(--border)" />
      ))}
      <circle cx="220" cy="164" r={3} fill="#22C55E" opacity="0.7" />
      <rect x="212" y="214" width="20" height="3" rx="1.5" fill="var(--deep-blue)" opacity="0.5" />
      <rect x="236" y="214" width="20" height="3" rx="1.5" fill="var(--steel)" opacity="0.3" />
      {/* Left cluster — Voice/Comm */}
      <rect x="40" y="80" width="64" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--card)" />
      <circle cx="56" cy="104" r="8" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
      <path d="M52 104l3 3 5-5" stroke="var(--deep-blue)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="72" y="107" fontSize="7" fill="var(--steel)">Voice</text>
      {/* Left cluster — Security */}
      <rect x="40" y="180" width="64" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--card)" />
      <rect x="52" y="196" width="16" height="16" rx="3" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
      <circle cx="60" cy="204" r="2.5" fill="var(--deep-blue)" />
      <text x="56" y="222" fontSize="7" fill="var(--steel)">Security</text>
      {/* Right cluster — AV */}
      <rect x="376" y="80" width="64" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--card)" />
      <rect x="388" y="96" width="24" height="14" rx="2" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
      <text x="400" y="107" textAnchor="middle" fontSize="6" fill="var(--steel)">AV</text>
      {/* Right cluster — Software */}
      <rect x="376" y="180" width="64" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--card)" />
      <rect x="390" y="196" width="10" height="14" rx="2" stroke="var(--deep-blue)" strokeWidth="1" fill="var(--deep-blue)" opacity="0.3" />
      <rect x="404" y="196" width="10" height="14" rx="2" stroke="var(--deep-blue)" strokeWidth="1" fill="var(--deep-blue)" opacity="0.3" />
      <text x="408" y="222" textAnchor="middle" fontSize="7" fill="var(--steel)">Software</text>
      {/* Bottom cluster — Call Center */}
      <rect x="200" y="300" width="64" height="48" rx="8" stroke="var(--border)" strokeWidth="1" fill="var(--card)" />
      <circle cx="220" cy="320" r="8" stroke="var(--deep-blue)" strokeWidth="1" fill="none" />
      <path d="M215 320h10" stroke="var(--deep-blue)" strokeWidth="1" strokeLinecap="round" />
      <text x="232" y="323" fontSize="6" fill="var(--steel)">CC</text>
      {/* Connection lines */}
      {[
        { x1: 104, y1: 104, x2: 200, y2: 160 },
        { x1: 104, y1: 204, x2: 200, y2: 200 },
        { x1: 376, y1: 104, x2: 280, y2: 160 },
        { x1: 376, y1: 204, x2: 280, y2: 200 },
        { x1: 232, y1: 300, x2: 232, y2: 240 },
      ].map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="var(--deep-blue)" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
      ))}
      {/* Decorative pulses */}
      <circle cx="240" cy="180" r="4" fill="var(--deep-blue)" opacity="0.1" />
      <circle cx="150" cy="140" r="3" fill="var(--deep-blue)" opacity="0.06" />
      <circle cx="330" cy="140" r="3" fill="var(--deep-blue)" opacity="0.06" />
      <circle cx="300" cy="260" r="2" fill="var(--signal-orange)" opacity="0.15" />
      <circle cx="160" cy="260" r="2" fill="var(--signal-orange)" opacity="0.1" />
    </svg>
  );
}

/* ─── CTA Background ─── */
function CtaBackground() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full opacity-[0.03] pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id="svc-cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--charcoal)" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#svc-cta-dots)" />
      <circle cx="200" cy="150" r="80" stroke="var(--charcoal)" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="120" stroke="var(--charcoal)" strokeWidth="0.3" strokeDasharray="4 6" />
      <circle cx="200" cy="150" r="8" fill="var(--charcoal)" opacity="0.05" />
    </svg>
  );
}

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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════ */}
      <Section bg="ambient" className="bg-background pt-40 pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  Technology Solutions
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h1 className="mt-6 max-w-2xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance">
                  Every technology domain
                  <br />
                  <span className="text-deep-blue">your business runs on.</span>
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  Communication. Networking. Security. AV. Infrastructure. Maintenance.
                  Designed as one integrated ecosystem — not six separate vendor contracts.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                    Talk to an Engineer <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/who-we-serve" variant="outline" size="xl" className="gap-2 rounded-full border-border" data-cursor-hover>
                    See Who We Serve
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.15} className="lg:col-span-5">
              <div className="aspect-[6/5] w-full rounded-3xl border border-border bg-card bg-engineering-grid overflow-hidden">
                <HeroIllustration />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: TECHNOLOGY ECOSYSTEM
          ═══════════════════════════════════════════════════════════ */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  Integrated Ecosystem
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="mt-6 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                  Six disciplines. One system.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <p className="mt-5 text-steel leading-relaxed">
                  Voice depends on the network. Video conferencing needs both voice and data. Surveillance
                  and access control share the same infrastructure. When one system drifts out of
                  calibration, it affects the others. That&apos;s why IBS delivers every technology layer
                  through one engineering team.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-4 text-steel leading-relaxed">
                  Hover the diagram to see how each discipline connects to the others.
                </p>
              </Reveal>
            </div>
            <Reveal direction="right" delay={0.1}>
              <EcosystemVisualization />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: ONE TEAM. SIX DISCIPLINES.
          ═══════════════════════════════════════════════════════════ */}
      <Section className="bg-secondary/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                One Team
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="mt-6 text-display-2 font-semibold tracking-tight text-charcoal text-balance">
                One engineering team.
                <br />
                Six technology disciplines.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="mt-6 text-lg text-steel leading-relaxed max-w-xl mx-auto">
                Instead of hiring separate vendors for voice, AV, networking, security, contact centers,
                and software — clients work with one engineering team that handles every technology layer,
                understands how the systems interact, and takes full accountability for the result.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {serviceShowcases.map((s, i) => (
              <Reveal key={s.service.slug} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-blue/8 text-deep-blue transition-colors duration-300 group-hover:bg-deep-blue group-hover:text-white">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-charcoal">{s.service.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed line-clamp-2">{s.service.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: FEATURED SERVICE SHOWCASES (alternating)
          ═══════════════════════════════════════════════════════════ */}
      {serviceShowcases.map((showcase, idx) => {
        const isReversed = idx % 2 === 1;
        return (
          <Section key={showcase.service.slug} className={idx % 2 === 0 ? "" : "bg-secondary/30"}>
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                {/* Image */}
                <Reveal direction={isReversed ? "right" : "left"} className={`lg:col-span-5 ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-border">
                    {showcase.service.image ? (
                      <>
                        <Image
                          src={showcase.service.image}
                          alt={showcase.service.title}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="photo-grade object-cover"
                          placeholder={blurMap[showcase.service.image] ? "blur" : "empty"}
                          blurDataURL={blurMap[showcase.service.image]}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white tracking-wider uppercase">
                            {showcase.service.tagline}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-engineering-grid">
                        <showcase.icon className="h-16 w-16 text-deep-blue/20" strokeWidth={1} />
                      </div>
                    )}
                  </div>
                </Reveal>

                {/* Content */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                  <Reveal direction={isReversed ? "left" : "right"} delay={0.1}>
                    <span className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
                      {showcase.service.tagline}
                    </span>
                  </Reveal>
                  <Reveal direction={isReversed ? "left" : "right"} delay={0.15}>
                    <h2 className="mt-3 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                      {showcase.service.title}
                    </h2>
                  </Reveal>
                  <Reveal direction={isReversed ? "left" : "right"} delay={0.2}>
                    <p className="mt-4 text-steel leading-relaxed">{showcase.service.intro}</p>
                  </Reveal>

                  <Reveal direction={isReversed ? "left" : "right"} delay={0.25}>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-steel uppercase mb-3">Typical Deployments</p>
                        <ul className="space-y-1.5">
                          {showcase.deployments.slice(0, 4).map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-charcoal">
                              <span className="h-1 w-1 rounded-full bg-deep-blue shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-steel uppercase mb-3">Key Technologies</p>
                        <p className="text-sm text-steel leading-relaxed">{showcase.technologies.join(" · ")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.14em] text-steel uppercase mb-3">Industries Served</p>
                        <p className="text-sm text-steel leading-relaxed">{showcase.industries.join(" · ")}</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction={isReversed ? "left" : "right"} delay={0.3}>
                    <div className="mt-8">
                      <ButtonLink
                        href={`/services/${showcase.service.slug}`}
                        variant="outline"
                        className="gap-2 rounded-full border-border"
                        data-cursor-hover
                      >
                        Explore {showcase.service.navLabel} <ArrowRight className="h-4 w-4" />
                      </ButtonLink>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: HOW EVERYTHING CONNECTS
          ═══════════════════════════════════════════════════════════ */}
      <Section bg="grid">
        <Container>
          <Reveal direction="up" className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              System Dependencies
            </span>
            <h2 className="mt-6 max-w-2xl mx-auto text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              How every service depends on another
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-steel">
              No technology system operates in isolation. Understanding these
              dependencies is what turns a collection of products into a reliable
              infrastructure.
            </p>
          </Reveal>

          {/* Horizontal dependency flow */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              <div className="absolute top-8 left-[6%] right-[6%] h-px bg-border" />
              <div className="absolute top-8 left-[6%] right-[6%] h-px bg-deep-blue origin-left" />
              {connectionFlow.map((step, i) => (
                <Reveal key={step.label} direction="up" delay={i * 0.08} amount={0.4}>
                  <div className="relative flex flex-col items-center" style={{ width: `${100 / connectionFlow.length}%` }}>
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-deep-blue bg-card text-deep-blue shadow-[0_4px_16px_-4px_rgba(234,88,12,0.3)]">
                      <step.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <p className="mt-4 text-center text-sm font-semibold text-charcoal max-w-[130px]">
                      {step.label}
                    </p>
                    <p className="mt-1.5 text-center text-xs text-steel max-w-[130px] leading-relaxed">
                      {step.desc}
                    </p>
                    {i < connectionFlow.length - 1 && (
                      <svg className="absolute top-7 -right-3 z-10 text-deep-blue opacity-40" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-0">
            {connectionFlow.map((step, i) => (
              <Reveal key={step.label} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-deep-blue bg-card text-deep-blue">
                      <step.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    {i < connectionFlow.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-charcoal">{step.label}</p>
                    <p className="mt-1 text-sm text-steel leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: ENGINEERING PROCESS
          ═══════════════════════════════════════════════════════════ */}
      <Section>
        <Container>
          <Reveal direction="up" className="mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Engineering Process
            </span>
            <h2 className="mt-6 max-w-xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              From consultation to long-term support
            </h2>
          </Reveal>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-px bg-border" />
              <div className="grid grid-cols-9 gap-2">
                {processSteps.map((step, i) => (
                  <Reveal key={step.slug} direction="up" delay={i * 0.06} amount={0.4}>
                    <div className="relative flex flex-col items-center">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-steel">
                        {processIcons[step.slug]}
                      </div>
                      <p className="mt-3 text-center text-xs font-semibold text-charcoal leading-tight">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-center text-[11px] text-steel leading-relaxed max-w-[120px]">
                        {step.description}
                      </p>
                      {i < processSteps.length - 1 && (
                        <svg className="absolute top-7 -right-1.5 z-10 text-border" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 6h6m0 0l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.slug} direction="up" delay={i * 0.05} amount={0.3}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-steel">
                      {processIcons[step.slug]}
                    </div>
                    {i < processSteps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-charcoal">{step.title}</p>
                    <p className="mt-1 text-sm text-steel leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: ANNUAL MAINTENANCE
          ═══════════════════════════════════════════════════════════ */}
      <Section bg="blueprint" className="bg-secondary/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
                Annual Maintenance
              </span>
              <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                Systems that keep running, long after installation
              </h2>
              <div className="mt-6 space-y-4 text-steel leading-relaxed">
                <p>
                  Most systems integration projects end at handover. The install team packs up,
                  the project closes, and the customer inherits a network rack, a boardroom
                  touchscreen, a CCTV NVR, and a fire alarm panel — with no plan for what happens
                  when any of them drifts out of calibration six months later.
                </p>
                <p>
                  Our AMC exists because that gap is where most preventable downtime comes from.
                  Certified technicians, a defined service-level agreement, scheduled preventive
                  maintenance, and a paper trail of every visit — these are the things that turn
                  a one-time install into a system that keeps running.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Preventive maintenance", desc: "Scheduled before problems become outages" },
                  { label: "Health reports", desc: "Checklists and summaries after every visit" },
                  { label: "Rapid response", desc: "Defined escalation matrix and target times" },
                  { label: "Certified engineers", desc: "Same team that built the system" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-sm font-semibold text-charcoal">{item.label}</p>
                    <p className="mt-1 text-xs text-steel">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ButtonLink
                  href="/services/annual-maintenance-service"
                  variant="cta"
                  className="gap-2"
                  data-cursor-hover
                >
                  Explore AMC Services <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border">
                {amcService.image ? (
                  <>
                    <Image
                      src={amcService.image}
                      alt="IT technician maintaining server infrastructure"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="photo-grade object-cover"
                      placeholder={blurMap[amcService.image] ? "blur" : "empty"}
                      blurDataURL={blurMap[amcService.image]}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-engineering-grid">
                    <Wrench className="h-16 w-16 text-deep-blue/20" strokeWidth={1} />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: WHY IBS
          ═══════════════════════════════════════════════════════════ */}
      <Section>
        <Container>
          <Reveal direction="up" className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Why IBS
            </span>
            <h2 className="mt-6 max-w-xl mx-auto text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              What makes this approach different
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whyIbsReasons.map((reason, i) => (
              <Reveal key={reason.title} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-deep-blue/30 hover:shadow-[0_16px_40px_-16px_rgba(234,88,12,0.12)]">
                  <span className="text-2xl font-semibold text-deep-blue/15 font-heading">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-charcoal">{reason.title}</h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: TRUST METRICS
          ═══════════════════════════════════════════════════════════ */}
      <Section>
        <Container>
          <ServicesTrustMetrics />
        </Container>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10: CTA
          ═══════════════════════════════════════════════════════════ */}
      <Section className="relative overflow-hidden">
        <CtaBackground />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal direction="up">
              <h2 className="text-display-2 font-semibold tracking-tight text-charcoal text-balance">
                Let&apos;s build your technology ecosystem together.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-steel leading-relaxed max-w-xl mx-auto">
                Whether you&apos;re designing a new office, upgrading your network,
                securing a facility, or building modern collaboration spaces, IBS
                delivers every technology layer through one integrated engineering team.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                  Talk to an Engineer <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/contact"
                  variant="outline"
                  size="xl"
                  className="gap-2 rounded-full border-border"
                  data-cursor-hover
                >
                  Request a Consultation
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}