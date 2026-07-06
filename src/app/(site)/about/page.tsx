import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { Stat } from "@/components/shared/stat";
import { SplitText } from "@/components/motion/split-text";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { AboutPageJsonLd } from "@/components/seo/about-page-jsonld";
import { blurMap } from "@/lib/image-blur-map";
import { company, partners, services, segments } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: company.about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <AboutPageJsonLd />
      <Section bg="ambient" className="bg-background pt-40 pb-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
              About Us
            </span>
            <SplitText
              as="h1"
              text={company.positioning}
              className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
            />
            <Reveal direction="up" delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg text-steel">{company.about.intro}</p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                <Stat value={`${services.length}`} label="Solution areas" />
                <Stat value={`${partners.length}+`} label="OEM technology partners" />
                <Stat value={`${segments.length}`} label="Industries served" />
                <Stat value={`${company.serviceAreas.length}`} label="Delhi NCR locations" />
              </div>
            </Reveal>
          </div>
          <MaskReveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
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

      <Section bg="grid">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Five disciplines, one integrated delivery team"
            align="left"
            className="mb-14 items-start text-left"
          />
          <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {company.about.categories.map((cat) => (
              <RevealItem key={cat.title} className="bg-background p-8">
                <CapabilityCheckIcon className="h-5 w-5 text-deep-blue" />
                <h3 className="mt-3 text-lg font-semibold text-charcoal font-heading">{cat.title}</h3>
                <p className="mt-3 text-sm text-steel">{cat.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="blueprint">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
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
