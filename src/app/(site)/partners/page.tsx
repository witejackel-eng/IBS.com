import type { Metadata } from "next";
import { ArrowRight, Shield, Award, RefreshCw, Cpu, Layers, Zap, FileText, Link2, HeartPulse } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { PartnerLogo } from "@/components/shared/partner-logo";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { partners } from "@/lib/content";

import { PartnersTrustMetrics } from "@/components/sections/partners/trust-metrics";
import { EcosystemSection } from "@/components/sections/partners/ecosystem";

export const metadata: Metadata = {
  title: "Our OEM Technology Partners",
  description:
    "The OEM brands IBS deals in across audio/video integration, communication & IT, and security.",
  alternates: { canonical: "/partners" },
};

/* ─── Process steps data ─── */
const processSteps = [
  { title: "OEM Partners", description: "Authorized sourcing from certified manufacturers" },
  { title: "Engineering", description: "Integration design and specification" },
  { title: "Integration", description: "Multi-vendor system unification" },
  { title: "Testing", description: "End-to-end validation and commissioning" },
  { title: "IBS Deployment", description: "Go-live with documentation and training" },
  { title: "Long-Term Support", description: "AMC coverage and lifecycle management" },
];

/* ─── OEM Benefits data ─── */
const oemBenefits = [
  {
    icon: Shield,
    title: "Full Warranty Coverage",
    description:
      "Genuine products sourced through authorized channels carry the manufacturer's complete warranty — no gray-market gaps that leave you exposed when something fails under normal use.",
  },
  {
    icon: RefreshCw,
    title: "Current Firmware & Updates",
    description:
      "Authorized products receive timely firmware patches, security updates, and feature releases. Gray-market hardware often ships with outdated firmware and no path to upgrade.",
  },
  {
    icon: Cpu,
    title: "Lifecycle Management",
    description:
      "OEM relationships mean advance notice of end-of-life dates, migration paths, and compatibility matrices. You plan upgrades instead of reacting to discontinued products.",
  },
  {
    icon: HeartPulse,
    title: "Manufacturer-Backed Support",
    description:
      "When an issue needs escalation beyond the integrator, the OEM's own support organization is available — with case tracking, RMA processes, and technical resources we can access on your behalf.",
  },
  {
    icon: Layers,
    title: "Guaranteed Compatibility",
    description:
      "Multi-vendor integration is predictable when every product comes from an authorized channel. Compatibility is tested and documented, not discovered on site during installation.",
  },
  {
    icon: Zap,
    title: "Proven Reliability",
    description:
      "Products from authorized channels have been through the manufacturer's quality assurance process. You get the reliability the spec sheet promises, not a unit with uncertain provenance.",
  },
];

/* ─── Featured Category Data ─── */
const featuredCategories = [
  {
    key: "av-integration" as const,
    label: "Audio / Video Integration",
    headline: "Conference rooms, auditoriums, and training spaces fitted with equipment that works the same way every time.",
    description:
      "From Poly and Cisco video conferencing endpoints to Crestron and Extron control systems, Biamp and Shure audio processing, and Barco and Epson display solutions — we specify AV hardware based on room size, platform choice, and how the space is actually used.",
    brands: ["Poly", "Cisco", "Logitech", "Crestron", "Extron", "Biamp", "Shure", "Barco", "Epson", "Kramer", "Samsung", "LG"],
    deployments: ["Boardroom video conferencing", "Auditorium AV systems", "Training room technology", "Digital signage networks", "Public address systems"],
  },
  {
    key: "communication-it" as const,
    label: "Communication & IT Infrastructure",
    headline: "Networks, firewalls, and power systems that keep operations running and data protected.",
    description:
      "Switching and routing from Cisco, HP Aruba, and Ruckus. Security from Fortinet and Sophos. Power protection from APC, Vertiv, and Eaton. Storage from Dell and Synology. Every component sourced through authorized channels with full manufacturer support.",
    brands: ["Alcatel-Lucent", "Cisco", "Fortinet", "Sophos", "Dell", "HP Aruba", "Ruckus", "APC", "Vertiv", "Eaton", "Netgear", "Synology"],
    deployments: ["Structured cabling", "Wi-Fi coverage design", "Firewall and routing", "Server room infrastructure", "UPS and power backup"],
  },
  {
    key: "security" as const,
    label: "Security & Fire Safety",
    headline: "Surveillance, access control, and fire detection planned around how a building is actually used.",
    description:
      "Hikvision, Dahua, and Axis cameras. eSSL and HID access control. Honeywell, Morley, and Edwards fire alarm panels. Each system is designed as part of a whole — camera placement, NVR retention, access control event logs, and fire alarm test schedules all planned together.",
    brands: ["Hikvision", "Dahua", "Axis", "eSSL", "Honeywell", "HID", "Notifier", "Morley", "Pelco", "Edwards"],
    deployments: ["CCTV surveillance systems", "Biometric access control", "Fire alarm integration", "Visitor management", "Building automation"],
  },
];

/* ─── Hero Ecosystem Illustration ─── */
function HeroEcosystemIllustration() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="partner-hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--border)" />
          </pattern>
        </defs>
        <rect width="480" height="400" fill="url(#partner-hero-dots)" opacity="0.5" />

        {/* Center IBS node */}
        <circle cx="240" cy="200" r="32" fill="var(--deep-blue)" opacity="0.1" />
        <circle cx="240" cy="200" r="24" fill="var(--deep-blue)" opacity="0.15" />
        <circle cx="240" cy="200" r="16" fill="var(--deep-blue)" />
        <text x="240" y="204" textAnchor="middle" fontSize="11" fontWeight={700} fill="white" fontFamily="var(--font-heading)">IBS</text>

        {/* Ring of partner nodes */}
        {[
          { x: 140, y: 100, label: "Poly" },
          { x: 340, y: 100, label: "Cisco" },
          { x: 400, y: 200, label: "Axis" },
          { x: 340, y: 300, label: "Honeywell" },
          { x: 140, y: 300, label: "eSSL" },
          { x: 80, y: 200, label: "Logitech" },
          { x: 180, y: 60, label: "Crestron" },
          { x: 300, y: 60, label: "HP Aruba" },
          { x: 400, y: 300, label: "Hikvision" },
          { x: 80, y: 300, label: "Dahua" },
          { x: 100, y: 60, label: "Samsung" },
          { x: 380, y: 60, label: "Fortinet" },
        ].map((node) => {
          const angle = Math.atan2(node.y - 200, node.x - 240);
          return (
            <g key={node.label}>
              <line
                x1={240 + Math.cos(angle) * 18}
                y1={200 + Math.sin(angle) * 18}
                x2={node.x - Math.cos(angle) * 10}
                y2={node.y - Math.sin(angle) * 10}
                stroke="var(--deep-blue)"
                strokeWidth="0.8"
                opacity="0.2"
                strokeDasharray="3 3"
              />
              <circle cx={node.x} cy={node.y} r={10} fill="var(--card)" stroke="var(--border)" strokeWidth="1" />
              <text
                x={node.x}
                y={node.y + 24}
                textAnchor="middle"
                fontSize="8"
                fontWeight={500}
                fill="var(--steel)"
                fontFamily="var(--font-sans)"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Outer ring */}
        <circle cx="240" cy="200" r="160" fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 6" />

        {/* Category labels */}
        <text x="140" y="140" textAnchor="middle" fontSize="9" fontWeight={600} fill="var(--deep-blue)" opacity="0.5" fontFamily="var(--font-heading)">AV</text>
        <text x="360" y="140" textAnchor="middle" fontSize="9" fontWeight={600} fill="var(--deep-blue)" opacity="0.5" fontFamily="var(--font-heading)">IT</text>
        <text x="360" y="260" textAnchor="middle" fontSize="9" fontWeight={600} fill="var(--deep-blue)" opacity="0.5" fontFamily="var(--font-heading)">SEC</text>
        <text x="120" y="260" textAnchor="middle" fontSize="9" fontWeight={600} fill="var(--deep-blue)" opacity="0.5" fontFamily="var(--font-heading)">COMMS</text>
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
        <pattern id="partner-cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="var(--charcoal)" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#partner-cta-dots)" />
      {/* Connected nodes */}
      <circle cx="100" cy="100" r="8" stroke="var(--charcoal)" strokeWidth="0.8" />
      <circle cx="200" cy="150" r="10" stroke="var(--charcoal)" strokeWidth="0.8" />
      <circle cx="300" cy="100" r="8" stroke="var(--charcoal)" strokeWidth="0.8" />
      <circle cx="150" cy="220" r="6" stroke="var(--charcoal)" strokeWidth="0.8" />
      <circle cx="280" cy="230" r="6" stroke="var(--charcoal)" strokeWidth="0.8" />
      <line x1="108" y1="104" x2="190" y2="146" stroke="var(--charcoal)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="210" y1="146" x2="292" y2="104" stroke="var(--charcoal)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="106" y1="106" x2="148" y2="216" stroke="var(--charcoal)" strokeWidth="0.5" strokeDasharray="3 3" />
      <line x1="208" y1="156" x2="276" y2="226" stroke="var(--charcoal)" strokeWidth="0.5" strokeDasharray="3 3" />
    </svg>
  );
}

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]} />
      <CollectionPageJsonLd
        name="Partners"
        path="/partners"
        description="The OEM brands IBS deals in across audio/video integration, communication & IT, and security."
      />

      {/* ─── SECTION 1: HERO ─── */}
      <Section bg="ambient" className="bg-background pt-40 pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  Technology Partners
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h1 className="mt-6 max-w-2xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance">
                  The technology partners behind every deployment
                </h1>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="mt-8 max-w-xl text-lg text-steel leading-relaxed">
                  Every product we install comes through an authorized OEM channel, never a
                  gray-market reseller. Working directly with manufacturers means we recommend
                  hardware based on what a project needs, not what one vendor happens to sell.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                    Talk to Our Team <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href="/services"
                    variant="outline"
                    size="xl"
                    className="gap-2 rounded-full border-border"
                    data-cursor-hover
                  >
                    Explore Solutions
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.2} className="lg:col-span-5">
              <div className="aspect-[6/5] w-full rounded-3xl border border-border bg-card bg-engineering-grid overflow-hidden">
                <HeroEcosystemIllustration />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 2: PARTNER PHILOSOPHY ─── */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  Partner Philosophy
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                  Why IBS works only with authorized OEMs
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.15}>
                <div className="mt-8 space-y-5 text-steel leading-relaxed">
                  <p>
                    Gray-market products look identical on the outside, but they arrive without
                    manufacturer support, with uncertain firmware, and with warranty coverage
                    that may not apply in your region. When a system fails at 2 AM and the
                    integrator discovers the part was sourced outside authorized channels, the
                    troubleshooting path narrows dramatically.
                  </p>
                  <p>
                    We work with authorized OEM channels for a straightforward reason: it removes
                    a class of risk that has no upside. Genuine products carry full warranty
                    coverage, receive timely firmware and security updates, and can be escalated
                    to the manufacturer&apos;s own support organization when needed. The same
                    brand, sourced properly, is a different asset than the same brand bought
                    through a gray-market distributor.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="right" delay={0.15}>
                <div className="space-y-4">
                  {[
                    { label: "Genuine, certified products", icon: Award },
                    { label: "Full manufacturer warranty", icon: Shield },
                    { label: "Firmware and security updates", icon: RefreshCw },
                    { label: "Compatibility across vendors", icon: Link2 },
                    { label: "Lifecycle and upgrade paths", icon: FileText },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-deep-blue/20 hover:shadow-[0_8px_24px_-12px_rgba(234,88,12,0.12)]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/8 text-deep-blue">
                        <item.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <p className="text-sm font-medium text-charcoal">{item.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 3: TRUST STATISTICS ─── */}
      <PartnersTrustMetrics />

      {/* ─── SECTION 4: TECHNOLOGY ECOSYSTEM ─── */}
      <EcosystemSection />

      {/* ─── SECTION 5: FEATURED PARTNER CATEGORIES ─── */}
      {featuredCategories.map((cat, catIndex) => {
        const isReversed = catIndex % 2 === 1;
        return (
          <Section key={cat.key} className={catIndex % 2 === 0 ? "bg-secondary/30" : ""}>
            <Container>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${isReversed ? "lg:[direction:rtl]" : ""}`}>
                {/* Content */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                  <Reveal direction={isReversed ? "right" : "left"}>
                    <span className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
                      {cat.label}
                    </span>
                  </Reveal>
                  <Reveal direction={isReversed ? "right" : "left"} delay={0.1}>
                    <h2 className="mt-3 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
                      {cat.headline}
                    </h2>
                  </Reveal>
                  <Reveal direction={isReversed ? "right" : "left"} delay={0.15}>
                    <p className="mt-5 text-steel leading-relaxed">{cat.description}</p>
                  </Reveal>
                  <Reveal direction={isReversed ? "right" : "left"} delay={0.2}>
                    <div className="mt-8">
                      <p className="text-xs font-semibold tracking-[0.14em] text-steel uppercase mb-4">
                        Common Deployments
                      </p>
                      <ul className="space-y-2">
                        {cat.deployments.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-steel">
                            <span className="h-1 w-1 rounded-full bg-deep-blue" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>

                {/* Brand logos */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:[direction:ltr]" : ""}`}>
                  <Reveal direction={isReversed ? "left" : "right"} delay={0.1}>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {cat.brands.map((brandName, i) => (
                        <div
                          key={brandName}
                          className="flex h-20 items-center justify-center rounded-2xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-deep-blue/30 hover:shadow-[0_12px_28px_-12px_rgba(234,88,12,0.2)]"
                        >
                          <PartnerLogo name={brandName} className="h-full w-full max-w-[140px]" />
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* ─── SECTION 6: HOW EVERYTHING CONNECTS ─── */}
      <Section bg="grid">
        <Container>
          <Reveal direction="up" className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Integration Process
            </span>
            <h2 className="mt-6 max-w-2xl mx-auto text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              How everything works together
            </h2>
          </Reveal>

          {/* Horizontal process */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute top-8 left-[8%] right-[8%] h-px bg-border" />

              {processSteps.map((step, i) => (
                <Reveal key={step.title} direction="up" delay={i * 0.1} amount={0.5}>
                  <div className="relative flex flex-col items-center" style={{ width: `${100 / processSteps.length}%` }}>
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-deep-blue bg-card text-deep-blue shadow-[0_4px_16px_-4px_rgba(234,88,12,0.3)]">
                      <span className="text-sm font-bold font-heading">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="mt-4 text-center text-sm font-semibold text-charcoal max-w-[140px]">
                      {step.title}
                    </p>
                    <p className="mt-2 text-center text-xs text-steel max-w-[140px] leading-relaxed">
                      {step.description}
                    </p>
                    {i < processSteps.length - 1 && (
                      <svg className="absolute top-7 -right-3 z-10 text-deep-blue opacity-40" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile process */}
          <div className="lg:hidden space-y-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-deep-blue bg-card text-deep-blue">
                      <span className="text-sm font-bold font-heading">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    {i < processSteps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                  </div>
                  <div className="pb-10">
                    <p className="text-sm font-semibold text-charcoal">{step.title}</p>
                    <p className="mt-1 text-sm text-steel leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── SECTION 7: WHY GENUINE OEM MATTERS ─── */}
      <Section>
        <Container>
          <Reveal direction="up" className="mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Why It Matters
            </span>
            <h2 className="mt-6 max-w-2xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Why genuine OEM products matter
            </h2>
            <p className="mt-4 max-w-xl text-lg text-steel">
              The difference between authorized and gray-market isn&apos;t visible on the
              product — it shows up when something goes wrong.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {oemBenefits.map((benefit, i) => (
              <Reveal key={benefit.title} direction="up" delay={i * 0.06} amount={0.3}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-deep-blue/30 hover:shadow-[0_16px_40px_-16px_rgba(234,88,12,0.15)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep-blue/8 text-deep-blue transition-colors duration-300 group-hover:bg-deep-blue group-hover:text-white">
                    <benefit.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-charcoal">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-steel leading-relaxed">{benefit.description}</p>
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
                Building a new technology infrastructure?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-steel leading-relaxed max-w-xl mx-auto">
                We&apos;ll recommend the right OEM partners, integrate everything into one
                system, and support it long after installation. Tell us what you&apos;re
                building and we&apos;ll start with the hardware recommendation.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
                  Talk to Our Team <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  variant="outline"
                  size="xl"
                  className="gap-2 rounded-full border-border"
                  data-cursor-hover
                >
                  Explore Solutions
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}