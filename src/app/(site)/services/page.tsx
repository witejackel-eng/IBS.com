import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { CtaSection } from "@/components/sections/cta-section";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Voice communication, AV & boardroom integration, IT network infrastructure, security, call center solutions, and software licensing -- all delivered and supported by one team.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Section bg="ambient" className="bg-background pt-40 pb-20">
        <Container>
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
