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
import { IllustrationFrame } from "@/components/illustrations/illustration-frame";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
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
  const Illustration = serviceIllustrationMap[service.slug];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd name={service.title} summary={service.summary} slug={service.slug} />
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
            {Illustration && (
              <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
                <IllustrationFrame className="aspect-square w-full">
                  <Illustration className="h-2/3 w-2/3" />
                </IllustrationFrame>
              </Reveal>
            )}

            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
              {service.capabilities.map((cap) => (
                <RevealItem key={cap.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <CapabilityCheckIcon className="h-5 w-5 text-deep-blue" />
                    <h3 className="mt-3 text-lg font-semibold text-charcoal font-heading">{cap.title}</h3>
                    <p className="mt-3 text-sm text-steel">{cap.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal direction="up" className="mt-14 flex justify-center">
            <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
              Ask about {service.title} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
