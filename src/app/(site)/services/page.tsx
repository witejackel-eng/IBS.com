import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { SecondaryHeroNetwork } from "@/components/webgl/secondary-hero-network";
import { TechnologyEcosystem } from "@/components/sections/services-redesign/technology-ecosystem";
import { ServiceShowcase } from "@/components/sections/services-redesign/service-showcase";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { services, amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology Solutions We Deliver",
  description:
    "Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing — all delivered and supported by one team.",
  alternates: { canonical: "/services" },
};

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
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              Product &amp; Services
            </span>
            <SplitText
              as="h1"
              text="Every technology domain your business runs on."
              className="text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
            />
            <Reveal direction="up" delay={0.2}>
              <p className="mt-8 mx-auto max-w-xl text-lg text-steel leading-relaxed">
                Communication. Networking. Security. AV. Infrastructure. Maintenance.
                Designed as one integrated ecosystem — delivered and supported by one engineering team.
              </p>
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
            <Reveal direction="up" delay={0.25}>
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