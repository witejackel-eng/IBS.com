"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { processSteps } from "@/lib/content";

// ---------------------------------------------------------------------------
// Animated timeline line — draws itself top-to-bottom as the container
// scrolls into view. Sits at 24px from left on mobile, 50% on desktop.
// ---------------------------------------------------------------------------

function TimelineLine() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-[23px] top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-px"
      style={{ originY: 0 }}
      initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: prefersReducedMotion ? 0 : DURATION.mask,
        ease: EASE_OUT_EXPO,
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Single step
// ---------------------------------------------------------------------------

function ProcessStepItem({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[number];
  index: number;
  isLast: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-start gap-4 pb-10 last:pb-0 lg:pb-14"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: prefersReducedMotion ? 0 : DURATION.reveal,
        ease: EASE_OUT_EXPO,
        delay: prefersReducedMotion ? 0 : index * 0.04,
      }}
    >
      {/* ---- Desktop: left-side content (even steps) ---- */}
      <div
        className="hidden w-1/2 lg:block"
        aria-hidden={!isLeft || undefined}
      >
        {isLeft && (
          <div className="max-w-xs pr-12 text-right">
            <span className="text-sm font-semibold text-charcoal">{step.title}</span>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.description}</p>
          </div>
        )}
      </div>

      {/* ---- Center dot ---- */}
      <div className="relative z-10 shrink-0">
        <motion.span
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-xs font-bold tracking-wide text-steel"
          whileInView={
            prefersReducedMotion
              ? undefined
              : {
                  borderColor: "var(--deep-blue)",
                  color: "var(--deep-blue-light)",
                  scale: 1.08,
                }
          }
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0 : DURATION.base,
            ease: EASE_OUT_EXPO,
            delay: prefersReducedMotion ? 0 : 0.12,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Mobile-only connector between dots */}
        {!isLast && (
          <motion.span
            aria-hidden="true"
            className="absolute left-1/2 top-12 mt-1 h-6 w-px -translate-x-px origin-top bg-border lg:hidden"
            initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: prefersReducedMotion ? 0 : DURATION.reveal,
              ease: EASE_OUT_EXPO,
            }}
          />
        )}
      </div>

      {/* ---- Mobile content (always right of dot) ---- */}
      <div className="flex-1 pt-1 lg:hidden">
        <span className="text-sm font-semibold text-charcoal">{step.title}</span>
        <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.description}</p>
      </div>

      {/* ---- Desktop: right-side content (odd steps) ---- */}
      <div
        className="hidden w-1/2 lg:block"
        aria-hidden={isLeft || undefined}
      >
        {!isLeft && (
          <div className="max-w-xs pl-12 text-left">
            <span className="text-sm font-semibold text-charcoal">{step.title}</span>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function EngineeringProcessSection() {
  return (
    <section className="bg-muted/20 py-14 sm:py-20 md:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From consultation to long-term support"
          align="center"
          className="mb-16 lg:mb-24"
        />

        <div className="relative">
          <TimelineLine />

          <div className="flex flex-col">
            {processSteps.map((step, i) => (
              <ProcessStepItem
                key={step.slug}
                step={step}
                index={i}
                isLast={i === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}