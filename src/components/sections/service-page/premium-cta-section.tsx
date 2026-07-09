"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/shared/magnetic";
import { ButtonLink } from "@/components/shared/button-link";
import { company } from "@/lib/content";
import type { ServicePageData } from "@/lib/content/service-page-data";

interface PremiumCtaSectionProps {
  data: ServicePageData;
}

export function PremiumCtaSection({ data }: PremiumCtaSectionProps) {
  return (
    <section className="bg-ambient-glow py-14 sm:py-20 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <Reveal direction="up" delay={0.05}>
            <h2 className="max-w-3xl text-display-2 font-heading font-semibold tracking-tight leading-[1.1] text-charcoal text-balance">
              {data.ctaHeadline}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="max-w-xl text-lg text-steel">
              {data.ctaDescription}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <Magnetic>
              <ButtonLink
                href="/contact"
                variant="cta"
                size="xl"
                data-cursor-hover
              >
                {data.ctaButtonText} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Magnetic>
          </Reveal>

          <Reveal direction="up" delay={0.35}>
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-border bg-card/80 px-5 py-4 text-sm text-steel sm:flex-row sm:gap-x-6 sm:gap-y-3 sm:flex-wrap sm:justify-center">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {company.contact.phones.join(" / ")}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {company.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> PAN India
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}