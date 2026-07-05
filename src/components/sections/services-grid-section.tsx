import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TiltCard } from "@/components/shared/tilt-card";
import { ServiceVisual } from "@/components/shared/service-visual";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { services, amcService } from "@/lib/content";

export function ServicesGridSection() {
  return (
    <Section bg="grid" className="bg-background">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="One integrator, six technology domains"
          description="From the first dial tone to the last camera on the wall — voice, AV, network, security, contact centers, and licensing, delivered and supported by one team."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => (
            <RevealItem key={service.slug}>
              <TiltCard className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor-hover
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]"
                >
                  <ServiceVisual service={service} className="h-44 w-full" />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{service.tagline}</span>
                    <h3 className="text-xl font-semibold text-charcoal font-heading">{service.title}</h3>
                    <p className="flex-1 text-sm text-steel">{service.summary}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </RevealItem>
          ))}

          <RevealItem>
            <TiltCard className="h-full">
              <Link
                href={`/services/${amcService.slug}`}
                data-cursor-hover
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-deep-blue/20 bg-deep-blue/5 p-6 text-charcoal shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]"
              >
                <div>
                  <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{amcService.tagline}</span>
                  <h3 className="mt-3 text-xl font-semibold text-charcoal font-heading">{amcService.title}</h3>
                  <p className="mt-3 text-sm text-steel">{amcService.summary}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
                  See how AMC works
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </TiltCard>
          </RevealItem>
        </RevealGroup>
      </Container>
    </Section>
  );
}
