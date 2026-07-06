import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { CollectionPageJsonLd } from "@/components/seo/collection-page-jsonld";
import { SecondaryHeroNetwork } from "@/components/webgl/secondary-hero-network";
import { company, services, amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology Solutions We Deliver",
  description:
    "Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing -- all delivered and supported by one team.",
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
      <Section bg="ambient" className="relative overflow-hidden bg-background pt-40 pb-20">
        <SecondaryHeroNetwork />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <Container className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Product &amp; Services
          </span>
          <SplitText
            as="h1"
            text="Every technology domain your business runs on."
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{company.summary}</p>
          </Reveal>
        </Container>
      </Section>

      <ServicesGridSection />
      <CtaSection />
    </>
  );
}
