"use client";

import {
  ClipboardCheck,
  PenTool,
  PackageSearch,
  Wrench,
  TestTube2,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

// ---------------------------------------------------------------------------
// Data — the IBS delivery methodology (6 steps)
// ---------------------------------------------------------------------------

const steps = [
  {
    number: "01",
    title: "Site Survey & Consultation",
    description:
      "We walk the site, audit what's already installed, and understand what the business needs the system to do day-to-day.",
    Icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "Network topology, coverage maps, signal paths — the full technical architecture is drawn up before any equipment is ordered.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Product Selection",
    description:
      "Hardware is sourced only from authorized OEM partners we hold agreements with, so warranties and support chain are never in question.",
    Icon: PackageSearch,
  },
  {
    number: "04",
    title: "Installation & Integration",
    description:
      "Certified technicians deploy on-site following the engineered plan. Existing systems are integrated, not discarded.",
    Icon: Wrench,
  },
  {
    number: "05",
    title: "Testing & Handover",
    description:
      "Every circuit, camera, and endpoint is verified against the design spec. Documentation and operator training are delivered before sign-off.",
    Icon: TestTube2,
  },
  {
    number: "06",
    title: "AMC & Long-Term Support",
    description:
      "Scheduled preventive maintenance, fault resolution, and a single point of contact for the life of the system.",
    Icon: ShieldCheck,
  },
] as const;

// ---------------------------------------------------------------------------
// Desktop horizontal connector between step cards
// ---------------------------------------------------------------------------

function Connector() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="hidden h-px flex-1 origin-left bg-border lg:block"
      initial={prefersReducedMotion ? undefined : { scaleX: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_EXPO }}
    />
  );
}

// ---------------------------------------------------------------------------
// Mobile vertical connector
// ---------------------------------------------------------------------------

function MobileConnector() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="absolute left-5 top-14 z-0 h-10 w-px origin-top bg-border lg:hidden"
      initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
      whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: DURATION.reveal, ease: EASE_OUT_EXPO }}
    />
  );
}

// ---------------------------------------------------------------------------
// Individual step card
// ---------------------------------------------------------------------------

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative flex w-full flex-row items-start gap-4 lg:w-auto lg:flex-col lg:items-center lg:gap-0">
      {/* Number badge */}
      <RevealItem className="relative z-10 shrink-0">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-[11px] font-bold tracking-wide text-steel transition-colors duration-500 lg:h-14 lg:w-14 lg:text-xs group-hover:border-signal-orange group-hover:text-signal-orange">
          {step.number}
        </span>
      </RevealItem>

      {/* Text content */}
      <RevealItem className="flex min-w-0 flex-1 flex-col pb-10 pt-0.5 lg:flex-none lg:pb-0 lg:pt-5 lg:text-center">
        <span className="text-sm font-semibold leading-snug text-charcoal">
          {step.title}
        </span>
        <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
          {step.description}
        </p>
      </RevealItem>

      {/* Mobile connector */}
      {!isLast && <MobileConnector />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function AboutProcessSection() {
  return (
    <Section bg="blueprint" className="overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="How We Deliver"
          title="Our Engineering Process"
          description="Six steps. Every project. From the first site walk to the last maintenance visit."
          align="center"
          className="mb-14 lg:mb-20"
        />

        {/* ---- Desktop: horizontal row with connectors ---- */}
        <RevealGroup
          className="hidden items-center lg:flex"
          stagger={0.08}
          amount={0.2}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="group flex items-center">
              <StepCard step={step} index={i} isLast={i === steps.length - 1} />
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </RevealGroup>

        {/* ---- Mobile / tablet: vertical timeline ---- */}
        <div className="flex flex-col lg:hidden">
          {steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </Container>

      {/* ---- Subtle orange accent line at the bottom ---- */}
      <Reveal direction="up" delay={0.3} once>
        <div className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-signal-orange to-transparent lg:mt-20" />
      </Reveal>
    </Section>
  );
}