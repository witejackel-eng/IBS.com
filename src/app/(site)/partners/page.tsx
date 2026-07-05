import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { partners, partnerCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The OEM brands IBS deals in across audio/video integration, communication & IT, and security.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
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
              Our OEM partners ensure top-quality products and reliable solutions, enhancing our
              service excellence across {partners.length}+ brands.
            </p>
          </Reveal>
        </Container>
      </Section>

      {partnerCategories.map((category, i) => {
        const items = partners.filter((p) => p.category === category.key);
        return (
          <Section key={category.key} bg={i % 2 === 0 ? "grid" : "none"}>
            <Container>
              <Reveal direction="up" className="mb-10">
                <h2 className="text-display-3 font-semibold tracking-tight text-charcoal">{category.label}</h2>
              </Reveal>
              <RevealGroup className="flex flex-wrap gap-3" stagger={0.02}>
                {items.map((p) => (
                  <RevealItem key={p.slug}>
                    <span className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-charcoal">
                      {p.name}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </Section>
        );
      })}

      <CtaSection />
    </>
  );
}
