"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { EcosystemVisualization } from "@/components/sections/services/ecosystem-visualization";
import { serviceIllustrationMap } from "@/components/illustrations/services";
import { services, amcService } from "@/lib/content";
import { cn } from "@/lib/utils";

interface RelatedServicesSectionProps {
  currentSlug: string;
}

/** Build the combined list of all services + AMC, excluding the current page. */
function getRelatedServices(currentSlug: string) {
  const all = [...services, amcService];
  return all.filter((s) => s.slug !== currentSlug);
}

export function RelatedServicesSection({ currentSlug }: RelatedServicesSectionProps) {
  const related = getRelatedServices(currentSlug);

  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <Container>
        <Reveal direction="up" delay={0.05}>
          <span className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">
            Service Ecosystem
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-3 text-display-3 font-heading font-semibold tracking-tight text-charcoal text-balance">
            How this connects to everything else
          </h2>
        </Reveal>

        {/* Interactive orbital diagram */}
        <Reveal direction="up" delay={0.15}>
          <div className="mt-12">
            <EcosystemVisualization />
          </div>
        </Reveal>

        {/* Editorial service links */}
        <RevealGroup className="mt-16 flex flex-col gap-1" stagger={0.07}>
          {related.map((service) => {
            const Illustration = serviceIllustrationMap[service.slug];
            return (
              <RevealItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex items-center gap-5 rounded-2xl px-5 py-4 transition-colors duration-200",
                    "hover:bg-card/80",
                  )}
                  data-cursor-hover
                >
                  {/* Illustration icon */}
                  {Illustration && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card group-hover:bg-card">
                      <Illustration className="h-5 w-5 text-deep-blue" />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-steel">{service.tagline}</p>
                    <p className="mt-0.5 text-sm font-semibold text-charcoal truncate">
                      {service.title}
                    </p>
                  </div>

                  <ArrowRight
                    className={cn(
                      "h-4 w-4 shrink-0 text-steel transition-transform duration-300",
                      "group-hover:translate-x-1.5 group-hover:text-deep-blue",
                    )}
                  />
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}