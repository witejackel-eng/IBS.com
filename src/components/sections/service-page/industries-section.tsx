"use client";

import { Container } from "@/components/layout/container";
import {
  RevealGroup,
  RevealItem,
} from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { segmentIllustrationMap } from "@/components/illustrations/segments";
import type { ServicePageData } from "@/lib/content/service-page-data";

interface IndustriesSectionProps {
  data: ServicePageData;
}

export function IndustriesSection({ data }: IndustriesSectionProps) {
  const { industries } = data;

  if (industries.length === 0) return null;

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Tailored for every environment"
          align="center"
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {industries.map((industry, idx) => {
            const Illustration = segmentIllustrationMap[industry.segmentSlug];

            return (
              <RevealItem
                key={industry.segmentSlug}
                className={idx === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
              >
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-deep-blue/25 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-deep-blue/5">
                  {/* Icon */}
                  {Illustration && (
                    <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue/8 text-deep-blue">
                      <Illustration className="h-5 w-5" />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-base font-semibold leading-snug text-charcoal">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-steel">
                    {industry.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}