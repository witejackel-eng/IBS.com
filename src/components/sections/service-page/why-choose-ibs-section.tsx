"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface WhyChooseIbsSectionProps {
  data: ServicePageData;
}

// ---------------------------------------------------------------------------
// Single reason row
// ---------------------------------------------------------------------------

function ReasonRow({
  reason,
  index,
  isLast,
}: {
  reason: ServicePageData["whyIbs"][number];
  index: number;
  isLast: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`flex items-start gap-6 py-7 ${isLast ? "" : "border-b border-border/70"}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: prefersReducedMotion ? 0 : DURATION.reveal,
        ease: EASE_OUT_EXPO,
        delay: prefersReducedMotion ? 0 : index * 0.07,
      }}
    >
      {/* Large index number */}
      <span
        aria-hidden="true"
        className="shrink-0 pt-0.5 font-heading text-3xl font-bold leading-none text-muted-foreground/40 sm:text-4xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div className="min-w-0 flex-1 pt-0.5">
        <h3 className="text-base font-semibold leading-snug text-charcoal sm:text-lg">
          {reason.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-steel sm:text-base">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function WhyChooseIbsSection({ data }: WhyChooseIbsSectionProps) {
  const { whyIbs } = data;

  if (whyIbs.length === 0) return null;

  return (
    <section className="bg-blueprint-lines py-24 lg:py-32">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Why IBS"
          title="What makes clients choose us for this"
          align="left"
          className="mb-12 lg:mb-16"
        />

        <div>
          {whyIbs.map((reason, i) => (
            <ReasonRow
              key={reason.title}
              reason={reason}
              index={i}
              isLast={i === whyIbs.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}