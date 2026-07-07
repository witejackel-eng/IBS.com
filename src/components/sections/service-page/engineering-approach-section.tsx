"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  FileText,
  Cpu,
  Wrench,
  CheckCircle,
  Headphones,
  Shield,
  Monitor,
  Server,
  Phone,
  Lock,
  Zap,
  Layers,
  GitBranch,
  Activity,
  Users,
  Settings,
  Eye,
  Radio,
  Camera,
  Key,
  Flame,
  Home,
  Building,
  BarChart,
  type LucideProps,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/motion/reveal";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

/* ------------------------------------------------------------------ */
/*  Icon mapping                                                      */
/* ------------------------------------------------------------------ */

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Search,
  FileText,
  Cpu,
  Wrench,
  CheckCircle,
  Headphones,
  Shield,
  Monitor,
  Server,
  Phone,
  Lock,
  Zap,
  Layers,
  GitBranch,
  Activity,
  Users,
  Settings,
  Eye,
  Radio,
  Camera,
  Key,
  Flame,
  Home,
  Building,
  BarChart,
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface EngineeringApproachSectionProps {
  data: ServicePageData;
}

export function EngineeringApproachSection({ data }: EngineeringApproachSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const steps = data.approachSteps;

  if (steps.length === 0) return null;

  return (
    <section
      className="bg-engineering-grid py-24 lg:py-32"
      aria-labelledby="approach-heading"
    >
      <Container>
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.14em] text-deep-blue uppercase">
            Our Approach
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="approach-heading"
            className="text-display-3 font-heading font-semibold tracking-tight text-charcoal text-balance mt-4 mb-16"
          >
            How IBS engineers solve this
          </h2>
        </Reveal>

        {/* ---- Desktop: horizontal flow ---- */}
        <div className="hidden lg:block" role="list" aria-label="Engineering process steps">
          <RevealGroup stagger={0.15} className="relative flex items-start justify-between">
            {/* Connecting lines between steps */}
            {!prefersReducedMotion &&
              steps.slice(0, -1).map((_, i) => (
                <ConnectingLineDesktop key={`line-${i}`} index={i} total={steps.length} />
              ))}

            {steps.map((step, i) => (
              <StepCard
                key={i}
                index={i}
                step={step}
                isHovered={hoveredStep === i}
                onHoverStart={() => setHoveredStep(i)}
                onHoverEnd={() => setHoveredStep(null)}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </RevealGroup>
        </div>

        {/* ---- Mobile: vertical flow ---- */}
        <div className="lg:hidden relative" role="list" aria-label="Engineering process steps">
          {steps.map((step, i) => (
            <RevealItem key={i}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                {/* Vertical connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-border">
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-signal-orange origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: DURATION.reveal,
                          ease: EASE_OUT_EXPO,
                        }}
                      />
                    )}
                  </div>
                )}

                {/* Step circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-signal-orange bg-background flex items-center justify-center"
                >
                  <span className="text-sm font-bold text-signal-orange">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <div className="flex items-center gap-2.5 mb-1">
                    <StepIcon name={step.icon} className="h-4 w-4 text-signal-orange" />
                    <h3 className="text-base font-heading font-semibold text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-steel">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop step card                                                  */
/* ------------------------------------------------------------------ */

function StepCard({
  index,
  step,
  isHovered,
  onHoverStart,
  onHoverEnd,
  prefersReducedMotion,
}: {
  index: number;
  step: ServicePageData["approachSteps"][number];
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  prefersReducedMotion: boolean;
}) {
  const Icon = ICON_MAP[step.icon];

  return (
    <div
      role="listitem"
      className="flex flex-col items-center flex-1 relative z-10 group"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Numbered circle */}
      <motion.div
        className={`
          w-14 h-14 rounded-full border-2 flex items-center justify-center
          transition-colors duration-300
          ${isHovered
            ? "border-signal-orange bg-signal-orange/10"
            : "border-signal-orange/40 bg-background"
          }
        `}
        whileHover={!prefersReducedMotion ? { scale: 1.08 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span
          className={`text-lg font-bold transition-colors duration-300 ${
            isHovered ? "text-signal-orange" : "text-charcoal"
          }`}
        >
          {index + 1}
        </span>
      </motion.div>

      {/* Icon */}
      <div
        className={`mt-4 mb-3 transition-colors duration-300 ${
          isHovered ? "text-signal-orange" : "text-steel"
        }`}
      >
        {Icon ? (
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        ) : (
          <Cpu className="h-5 w-5" strokeWidth={1.8} />
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-sm font-heading font-semibold text-center transition-colors duration-300 ${
          isHovered ? "text-signal-orange" : "text-charcoal"
        }`}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-xs leading-relaxed text-steel text-center mt-2 max-w-[140px]">
        {step.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Connecting line (desktop)                                          */
/* ------------------------------------------------------------------ */

function ConnectingLineDesktop({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  return (
    <div
      className="absolute top-7 z-0"
      style={{
        left: `${((index + 1) / total) * 100}%`,
        width: `${(1 / total) * 100}%`,
        transform: "translateX(0)",
      }}
    >
      <svg
        className="w-full h-px overflow-visible"
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Track */}
        <line
          x1="0"
          y1="2"
          x2="100"
          y2="2"
          className="stroke-border"
          strokeWidth="1"
        />
        {/* Animated stroke */}
        <motion.line
          x1="0"
          y1="2"
          x2="100"
          y2="2"
          className="stroke-signal-orange"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: DURATION.mask,
            ease: EASE_OUT_EXPO,
            delay: 0.2 + index * 0.15,
          }}
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper: icon renderer                                              */
/* ------------------------------------------------------------------ */

function StepIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  if (Icon) return <Icon className={className} strokeWidth={1.8} />;
  return <Cpu className={className} strokeWidth={1.8} />;
}