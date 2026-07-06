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
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { FaqItem } from "@/components/shared/faq-item";
import { services, company } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/**
 * SEO-optimised page titles per service — longer/shorter than the display title
 * so the rendered <title> lands in the 50–60 character sweet spot.
 * The H1 on the page itself still uses the original service.title from content data.
 */
const serviceMetaTitles: Record<string, string> = {
  "voice-communication": "Unified Voice Communication",
  "audio-video-boardroom-solutions": "AV & Boardroom Integration",
  "it-infrastructure": "IT Network & Infrastructure",
  "security-solutions": "Security & Surveillance Systems",
  "call-center-solutions": "Call Center Solutions",
  "software-licenses": "Software Licensing & Compliance",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: serviceMetaTitles[service.slug] ?? service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { url: `/services/${service.slug}` },
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
      <ServiceJsonLd service={service} />
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
          <h2 className="sr-only">{service.title} capabilities</h2>
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
                  <article className="h-full rounded-2xl border border-border bg-card p-6">
                    <CapabilityCheckIcon className="h-5 w-5 text-deep-blue" />
                    <h3 className="mt-3 text-lg font-semibold text-charcoal font-heading">{cap.title}</h3>
                    <p className="mt-3 text-sm text-steel">{cap.description}</p>
                  </article>
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

      <Section bg="grid">
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <h2 className="mb-8 text-2xl font-semibold text-charcoal font-heading">Frequently asked questions</h2>
            <div className="flex flex-col gap-6">
              <FaqItem
                question="What areas does IBS serve?"
                answer={`We design, install, and support systems across ${company.serviceAreas.join(", ")} and the broader Delhi NCR region. For projects outside this area, reach out to discuss availability.`}
              />
              <FaqItem
                question="Do you offer maintenance contracts?"
                answer="Yes, we offer comprehensive Annual Maintenance Contracts (AMCs) that cover preventive maintenance, emergency response, and compliance checks. Our AMCs include certified technicians and clearly defined service-level agreements to keep your systems running reliably."
              />
              <FaqItem
                question="How do I get a quote?"
                answer="Contact us through our website form, call us directly, or send us an email. We typically schedule a site visit to understand your requirements before providing a detailed proposal with transparent pricing."
              />
              <FaqItem
                question="Do you work with existing systems or only new installations?"
                answer="We handle both. Whether you need a completely new deployment, an upgrade to existing infrastructure, or integration of new technology with legacy systems, our engineering team evaluates your current setup and recommends the most practical approach."
              />
            </div>
          </Reveal>
        </Container>
      </Section>
      <FaqJsonLd faqs={[
        { question: "What areas does IBS serve?", answer: `We serve ${company.serviceAreas.join(", ")} and the broader Delhi NCR region.` },
        { question: "Do you offer maintenance contracts?", answer: "Yes, we offer comprehensive Annual Maintenance Contracts (AMCs) covering preventive maintenance, emergency response, and compliance checks." },
        { question: "How do I get a quote?", answer: "Contact us through our website form, call us directly, or send us an email. We schedule a site visit before providing a detailed proposal." },
        { question: "Do you work with existing systems or only new installations?", answer: "We handle both new deployments and upgrades to existing infrastructure, including integration of new technology with legacy systems." },
      ]} />
      <CtaSection />
    </>
  );
}
