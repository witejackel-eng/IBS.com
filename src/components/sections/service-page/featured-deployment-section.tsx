"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import type { ServicePageData } from "@/lib/content/service-page-data";

interface FeaturedDeploymentSectionProps {
  data: ServicePageData;
  serviceImage?: string;
}

export function FeaturedDeploymentSection({
  data,
}: FeaturedDeploymentSectionProps) {
  const { deployment } = data;

  return (
    <section className="bg-engineering-grid py-24 lg:py-32">
      <Container>
        {/* Badge */}
        <Reveal direction="up" amount={0.8}>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-tangerine-400/50 bg-tangerine-500/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-tangerine-600">
            Illustrative Deployment
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal direction="up" delay={0.08} amount={0.8}>
          <h2 className="mt-5 max-w-3xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            {deployment.headline}
          </h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ── Left: dark visual panel ── */}
          <Reveal direction="left" delay={0.12} amount={0.2}>
            <div className="rounded-3xl bg-charcoal p-8 lg:p-12 text-warm-white">
              {/* Deployment size */}
              <div className="mb-8">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50">
                  Deployment Scale
                </span>
                <p className="text-3xl font-bold tracking-tight lg:text-4xl">
                  {deployment.deploymentSize}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {deployment.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex rounded-full border border-warm-white/12 bg-warm-white/6 px-3 py-1 text-xs font-medium text-warm-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50">
                  Timeline
                </span>
                <p className="text-lg font-semibold text-warm-white/90">
                  {deployment.timeline}
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Right: deployment details ── */}
          <div className="flex flex-col gap-8">
            <Reveal direction="right" delay={0.16} amount={0.2}>
              <div>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Client Type
                </span>
                <p className="text-xl font-semibold text-charcoal">
                  {deployment.clientType}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2} amount={0.2}>
              <div>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Deployment Size
                </span>
                <p className="text-lg text-charcoal/80">
                  {deployment.deploymentSize}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.24} amount={0.2}>
              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {deployment.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-charcoal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.28} amount={0.2}>
              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Overview
                </span>
                <p className="text-base leading-relaxed text-charcoal/80">
                  {deployment.overview}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.32} amount={0.2}>
              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Outcome
                </span>
                <p className="text-base leading-relaxed text-charcoal/80">
                  {deployment.outcome}
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.36} amount={0.2}>
              <div>
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">
                  Timeline
                </span>
                <p className="text-lg font-medium text-charcoal">
                  {deployment.timeline}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}