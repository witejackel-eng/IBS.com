import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { ServiceVisual } from "@/components/shared/service-visual";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Section className="pt-40 pb-0">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            {service.tagline}
          </span>
          <SplitText
            as="h1"
            text={service.title}
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{service.summary}</p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <ServiceVisual service={service} className="mt-12 h-64 w-full rounded-3xl sm:h-96" />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <p className="text-lg text-steel">{service.intro}</p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="grid" className="pt-0">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {service.capabilities.map((cap) => (
              <RevealItem key={cap.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold text-charcoal font-heading">{cap.title}</h3>
                  <p className="mt-3 text-sm text-steel">{cap.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal direction="up" className="mt-14 flex justify-center">
            <ButtonLink href="/contact" size="lg" className="h-12 gap-2 rounded-full bg-deep-blue px-8 text-base text-warm-white hover:bg-deep-blue-light" data-cursor-hover>
              Ask about {service.title} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
