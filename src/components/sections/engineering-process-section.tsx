"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealItem, RevealGroup } from "@/components/motion/reveal";
import { MaskReveal } from "@/components/motion/mask-reveal";
import { processIllustrationMap } from "@/components/illustrations/process";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { blurMap } from "@/lib/image-blur-map";
import { processSteps } from "@/lib/content";

/** Horizontal connector between step cards -- desktop only, where steps flow left-to-right. */
function Connector() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className="hidden h-px w-8 shrink-0 origin-left bg-border lg:block xl:w-10"
      initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_EXPO }}
    />
  );
}

/** Vertical connector threaded under the icon -- mobile/tablet only, where steps stack in a timeline. */
function MobileConnector() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className="mt-1 h-8 w-px flex-1 origin-top bg-border lg:hidden"
      initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_EXPO }}
    />
  );
}

export function EngineeringProcessSection() {
  return (
    <Section bg="blueprint" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
          <MaskReveal className="rounded-3xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/process/engineering-process.jpg"
                alt="A field engineer completing a technical installation"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="photo-grade object-cover"
                placeholder="blur"
                blurDataURL={blurMap["/images/process/engineering-process.jpg"]}
              />
            </div>
          </MaskReveal>

          <div>
            <SectionHeading
              eyebrow="Engineering process"
              title="One disciplined process, every deployment"
              description="The same nine-step methodology behind every engagement, regardless of which services it draws on."
              align="left"
              className="mb-10 items-start text-left"
            />

            <RevealGroup
              className="flex flex-col items-start lg:flex-row lg:flex-wrap lg:items-center lg:gap-y-6"
              stagger={0.05}
            >
              {processSteps.map((step, i) => {
                const Illustration = processIllustrationMap[step.slug];
                return (
                  <div key={step.slug} className="flex w-full items-start lg:w-auto lg:items-center lg:contents">
                    <RevealItem className="flex w-full flex-row items-start gap-4 lg:w-24 lg:flex-col lg:items-center lg:gap-2 lg:text-center">
                      <span className="flex shrink-0 flex-col items-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card">
                          {Illustration && <Illustration className="h-7 w-7" />}
                        </span>
                        {i < processSteps.length - 1 && <MobileConnector />}
                      </span>
                      <span className="min-w-0 flex-1 pt-3 text-left text-xs font-medium text-charcoal lg:flex-none lg:pt-0 lg:text-center">
                        {step.title}
                      </span>
                    </RevealItem>
                    {i < processSteps.length - 1 && <Connector />}
                  </div>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
