import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { company, partners } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: company.about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section bg="ambient" className="bg-background pt-40 pb-24">
        <Container>
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
          <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2" stagger={0.06}>
            {company.about.categories.map((cat) => (
              <RevealItem key={cat.title} className="bg-background p-8">
                <h3 className="text-lg font-semibold text-charcoal font-heading">{cat.title}</h3>
                <p className="mt-3 text-sm text-steel">{cat.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="blueprint">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">Industry leadership</span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Built on partnerships with the brands the industry trusts
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
              Comprehensive solutions, under one roof
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
          <ButtonLink href="/contact" size="lg" className="h-12 rounded-full bg-deep-blue px-8 text-base text-warm-white hover:bg-deep-blue-light" data-cursor-hover>
            Talk to us <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
