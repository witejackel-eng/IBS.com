import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Stat } from "@/components/shared/stat";
import { IllustrationFrame } from "@/components/illustrations/illustration-frame";
import { PartnersEcosystemIllustration } from "@/components/illustrations/partners-ecosystem";
import { PartnerIntegrationFlowIllustration } from "@/components/illustrations/partner-integration-flow";
import {
  ComplianceMarkIcon,
  MonitoringPulseIcon,
  NetworkNodeIcon,
  PrecisionTargetIcon,
  SecurityLockIcon,
  SupportHeadsetIcon,
} from "@/components/illustrations/icons";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { partners, partnerCategories, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The OEM brands IBS deals in across audio/video integration, communication & IT, and security.",
  alternates: { canonical: "/partners" },
};

const whyThesePartners = [
  {
    icon: PrecisionTargetIcon,
    title: "Engineering-Led Selection",
    description: "Brands are chosen for proven reliability in real deployments, not marketing claims.",
  },
  {
    icon: NetworkNodeIcon,
    title: "Direct OEM Relationships",
    description: "Genuine products sourced through authorized channels, never gray-market substitutes.",
  },
  {
    icon: SupportHeadsetIcon,
    title: "One Team, Full Accountability",
    description: "A single integrator responsible for how every brand works together, not separate vendors to chase.",
  },
  {
    icon: MonitoringPulseIcon,
    title: "Long-Term Support",
    description: "Structured AMC coverage keeps multi-vendor systems running long after installation.",
  },
];

const partnershipBenefits = [
  { icon: ComplianceMarkIcon, title: "Genuine Products", description: "Authorized sourcing, not substitutes." },
  { icon: PrecisionTargetIcon, title: "Latest Technologies", description: "Current-generation OEM hardware and software." },
  { icon: SupportHeadsetIcon, title: "Vendor-Backed Support", description: "Manufacturer support behind every deployment." },
  { icon: SecurityLockIcon, title: "Warranty Assurance", description: "Full manufacturer warranty on genuine products." },
  { icon: NetworkNodeIcon, title: "Single-Vendor Accountability", description: "One integrator across every brand involved." },
  { icon: MonitoringPulseIcon, title: "Lifecycle & Upgrade Path", description: "AMC-backed servicing as systems age and grow." },
];

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }]} />
      <CollectionPageJsonLd
        name="Partners"
        path="/partners"
        description="The OEM brands IBS deals in across audio/video integration, communication & IT, and security."
      />

      <Section bg="ambient" className="bg-background pt-40 pb-20">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Partners (OEM)
          </span>
          <SplitText
            as="h1"
            text="Trusted global brands, one integrator."
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">
              Every product we deliver comes from a genuine, authorized OEM relationship — never a gray-market
              substitute. Partnering directly with global manufacturers gives our engineering team early access to
              new technology and the depth of expertise to integrate each brand correctly the first time. For you,
              that means proven products and dependable long-term support, with one integrator accountable for how
              everything works together.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <Stat value={`${partners.length}+`} label="OEM technology partners" />
              <Stat value={`${services.length}`} label="Solution categories" />
              <Stat value="100%" label="Genuine products" />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.35}>
            <IllustrationFrame className="mx-auto mt-12 aspect-[2/1] w-full max-w-xl">
              <PartnersEcosystemIllustration className="h-3/4 w-3/4" />
            </IllustrationFrame>
          </Reveal>
        </Container>
      </Section>

      <Section bg="grid">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {whyThesePartners.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-charcoal font-heading">{item.title}</h3>
                  <p className="text-sm text-steel">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {partnerCategories.map((category, i) => {
        const items = partners.filter((p) => p.category === category.key);
        return (
          <Section key={category.key} bg={i % 2 === 0 ? "none" : "grid"} className={i % 2 === 0 ? "bg-secondary/30" : ""}>
            <Container>
              <Reveal direction="up" className="mb-10">
                <h2 className="text-display-3 font-semibold tracking-tight text-charcoal">{category.label}</h2>
              </Reveal>
              <RevealGroup
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
                stagger={0.02}
              >
                {items.map((p) => (
                  <RevealItem key={p.slug}>
                    <div className="group flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-4 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-deep-blue/40 hover:shadow-[0_16px_32px_-16px_rgba(234,88,12,0.25)]">
                      <span className="text-sm font-semibold tracking-tight text-charcoal transition-colors duration-300 group-hover:text-deep-blue font-heading">
                        {p.name}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </Section>
        );
      })}

      <Section bg="blueprint">
        <Container className="max-w-4xl">
          <Reveal direction="up" className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              How it comes together
            </span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              One integration ecosystem, built from genuine parts
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <PartnerIntegrationFlowIllustration className="mx-auto w-full max-w-2xl" />
          </Reveal>
        </Container>
      </Section>

      <Section bg="grid">
        <Container>
          <Reveal direction="up" className="mb-14 text-center">
            <h2 className="text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              What working with genuine OEM partners means for you
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {partnershipBenefits.map((item) => (
              <RevealItem key={item.title}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-deep-blue/10 text-deep-blue">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-charcoal font-heading">{item.title}</h3>
                  <p className="text-sm text-steel">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="blueprint" className="bg-background">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SplitText
            as="h2"
            text="Let's build your technology ecosystem."
            className="max-w-2xl text-display-2 font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.15}>
            <p className="max-w-xl text-lg text-steel">
              Tell us which systems you need to bring together, and we&apos;ll design the integration around the
              genuine OEM products your business already runs on.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
              Talk to our experts <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
