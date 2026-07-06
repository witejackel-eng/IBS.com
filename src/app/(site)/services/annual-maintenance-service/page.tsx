import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SplitText } from "@/components/motion/split-text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { ServiceVisual } from "@/components/shared/service-visual";
import { IllustrationFrame } from "@/components/illustrations/illustration-frame";
import { AnnualMaintenanceIllustration } from "@/components/illustrations/services";
import { CapabilityCheckIcon } from "@/components/illustrations/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ServiceJsonLd } from "@/components/seo/service-jsonld";
import { amcService } from "@/lib/content";

export const metadata: Metadata = {
  title: amcService.title,
  description: amcService.summary,
  alternates: { canonical: `/services/${amcService.slug}` },
  openGraph: { url: `/services/${amcService.slug}` },
};

export default function AmcPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: amcService.title, path: `/services/${amcService.slug}` },
        ]}
      />
      <ServiceJsonLd service={{ title: amcService.title, summary: amcService.summary, slug: amcService.slug, tagline: amcService.tagline, image: amcService.image } as any} />
      <Section bg="ambient" className="bg-background pt-40 pb-20">
        <Container>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            {amcService.tagline}
          </span>
          <SplitText
            as="h1"
            text={amcService.title}
            className="max-w-3xl text-display-2 leading-[1.05] font-semibold tracking-tight text-charcoal text-balance"
          />
          <Reveal direction="up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-steel">{amcService.intro}</p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <ServiceVisual service={amcService} className="mt-12 h-64 w-full rounded-3xl sm:h-96" />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Reveal direction="up">
            <h2 className="mb-2 text-sm font-semibold tracking-[0.1em] text-deep-blue uppercase">
              What&apos;s covered
            </h2>
          </Reveal>
          <Accordion defaultValue={[amcService.categories[0].title]}>
            {amcService.categories.map((cat) => (
              <AccordionItem key={cat.title} value={cat.title} className="border-border py-2">
                <AccordionTrigger className="py-4 text-base font-semibold text-charcoal font-heading">
                  {cat.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-steel">
                        <CapabilityCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-deep-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      <Section bg="grid">
        <Container>
          <Reveal direction="up" className="mb-14 text-center">
            <h2 className="text-display-3 font-semibold tracking-tight text-charcoal">Why choose our AMC</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
            <Reveal direction="left" className="lg:sticky lg:top-28 lg:self-start">
              <IllustrationFrame className="aspect-square w-full">
                <AnnualMaintenanceIllustration className="h-2/3 w-2/3" />
              </IllustrationFrame>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
              {amcService.whyUs.map((item) => (
                <RevealItem key={item.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <CapabilityCheckIcon className="h-5 w-5 text-deep-blue" />
                    <h3 className="mt-3 text-base font-semibold text-charcoal font-heading">{item.title}</h3>
                    <p className="mt-3 text-sm text-steel">{item.description}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal direction="up" className="mt-14 flex justify-center">
            <ButtonLink href="/contact" variant="cta" size="xl" data-cursor-hover>
              Get an AMC quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
