import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/shared/button-link";
import { Stat } from "@/components/shared/stat";
import { SplitText } from "@/components/motion/split-text";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Reveal } from "@/components/motion/reveal";
import { DisciplinesSection } from "@/components/sections/disciplines-section";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { AboutPageJsonLd } from "@/components/seo/about-page-jsonld";
import { blurMap } from "@/lib/image-blur-map";
import { company, partners, services, segments } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Our Integration Team",
  description: company.about.intro,
  keywords: [
    "about IBS",
    "systems integrator India",
    "infrastructure engineering team",
    "company overview",
    "technology partner Delhi",
    "OEM partnerships",
    "integration services India",
    "IT solutions company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Our Integration Team — Insight Business Solutions",
    description: company.about.intro,
  },
  twitter: {
    title: "About IBS — Communication & Security Engineers",
    description: company.about.intro,
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <AboutPageJsonLd />
      <Section bg="ambient" className="bg-background pt-28 sm:pt-32 md:pt-32 lg:pt-40 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
        <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              About Us
            </span>
            <SplitText
              as="h1"
              text={company.positioning}
              className="max-w-2xl md:max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
            />
            <Reveal direction="up" delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg text-steel">{company.about.intro}</p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-5 border-t border-border pt-7 sm:grid-cols-2 md:grid-cols-4">
                <Stat value={`${services.length}`} label="Solution areas" />
                <Stat value={`${partners.length}+`} label="OEM technology partners" />
                <Stat value={`${segments.length}`} label="Industries served" />
                <Stat value={`${company.serviceAreas.length}`} label="Locations across India" />
              </div>
            </Reveal>
          </div>
          <MaskReveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-[3/4]">
              <Image
                src="/images/about/who-we-are.jpg"
                alt="An IBS engineer monitoring infrastructure in a data center"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="photo-grade object-cover"
                placeholder="blur"
                blurDataURL={blurMap["/images/about/who-we-are.jpg"]}
                priority
              />
            </div>
          </MaskReveal>
        </Container>
      </Section>

      <DisciplinesSection />

      <Section bg="blueprint">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <span className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Our partners</span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              The OEM brands our installations run on
            </h2>
            <p className="mt-6 text-steel">{company.about.partnershipsNote}</p>
            <ButtonLink
              href="/partners"
              variant="outline"
              className="mt-8 gap-2 rounded-full border-border"
              data-cursor-hover
            >
              See all {partners.length}+ partner brands <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <span className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Who we serve</span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Not every site needs the same setup
            </h2>
            <p className="mt-6 text-steel">{company.about.servesNote}</p>
            <ButtonLink
              href="/who-we-serve"
              variant="outline"
              className="mt-8 gap-2 rounded-full border-border"
              data-cursor-hover
            >
              Explore who we serve <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      <Section bg="blueprint" className="bg-background">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SplitText
            as="h2"
            text="Have a project in mind?"
            className="text-display-3 font-semibold tracking-tight text-charcoal"
          />
          <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
            Talk to us <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
