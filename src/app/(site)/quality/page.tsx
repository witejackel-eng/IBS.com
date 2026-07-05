import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality & Support",
  description:
    "Structured service protocols, industry-standard SLAs, and BIS/STQC-aligned compliance behind every IBS deployment.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <Section bg="ambient" className="bg-background pt-40 pb-20">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Quality &amp; Support
          </span>
          <SplitText
            as="h1"
            text="Reliability isn't an afterthought -- it's the service."
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{amcService.intro}</p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="grid">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {amcService.whyUs.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-base font-semibold text-charcoal font-heading">{item.title}</h3>
                  <p className="mt-3 text-sm text-steel">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section bg="blueprint">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
              <ShieldCheck className="h-4 w-4" /> Compliance Ready
            </span>
            <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
              Maintenance aligned with BIS and STQC regulatory norms
            </h2>
            <p className="mt-6 text-steel">
              Every AMC engagement is backed by certified technicians and structured service
              protocols -- covering communication systems, AV setups, fire alarm panels, CCTV
              surveillance, and access control -- with documentation and health summaries at every
              step.
            </p>
            <ButtonLink
              href="/services/annual-maintenance-service"
              variant="outline"
              className="mt-8 gap-2 rounded-full border-border"
              data-cursor-hover
            >
              See full AMC coverage <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <ul className="flex flex-col gap-4">
              {amcService.categories.map((cat) => (
                <li key={cat.title} className="rounded-2xl border border-border bg-card p-5">
                  <p className="font-medium text-charcoal">{cat.title}</p>
                  <p className="mt-1 text-sm text-steel">{cat.items[0]}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section bg="blueprint" className="bg-background">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SplitText
            as="h2"
            text="Ready for reliable, compliant support?"
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
