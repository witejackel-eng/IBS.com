import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { ServiceVisual } from "@/components/shared/service-visual";
import { RevealItem, RevealGroup, Reveal } from "@/components/motion/reveal";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import { services, amcService } from "@/lib/content";

export function ServicesGridSection() {
  const AmcIllustration = serviceIllustrationMap[amcService.slug];

  return (
    <Section bg="grid" className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="One integrator, six technology domains"
          description="From the first dial tone to the last camera on the wall — voice, AV, network, security, contact centers, and licensing, delivered and supported by one team."
          size="lg"
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => {
            const Illustration = serviceIllustrationMap[service.slug];
            return (
              <RevealItem key={service.slug}>
                <TiltCard className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    data-cursor-hover
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]"
                  >
                    <div className="relative">
                      <ServiceVisual service={service} className="h-52 w-full" />
                      {Illustration && service.image && (
                        <span className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm">
                          <Illustration className="h-7 w-7" />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{service.tagline}</span>
                      <h3 className="text-2xl font-semibold text-charcoal font-heading">{service.title}</h3>
                      <p className="flex-1 text-sm text-steel">{service.summary}</p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal direction="up" delay={0.1} className="mt-6">
          <Link
            href={`/services/${amcService.slug}`}
            data-cursor-hover
            className="group flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-deep-blue/20 bg-deep-blue/5 p-8 text-charcoal shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] sm:flex-row sm:items-center sm:justify-between sm:gap-10"
          >
            <div className="flex items-center gap-5">
              {AmcIllustration && (
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card">
                  <AmcIllustration className="h-10 w-10" />
                </span>
              )}
              <div>
                <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{amcService.tagline}</span>
                <h3 className="mt-1 text-2xl font-semibold text-charcoal font-heading">{amcService.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-steel">{amcService.summary}</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-charcoal">
              See how AMC works
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
