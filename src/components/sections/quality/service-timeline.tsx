"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";

const steps = [
  {
    title: "Site Survey",
    description: "Full system audit and asset inventory before any work begins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      </svg>
    ),
  },
  {
    title: "Installation",
    description: "Engineered deployment with testing at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    description: "As-built records, patch panel labels, and configuration logs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8m8 4H8m2-8H8" />
      </svg>
    ),
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled servicing before problems become outages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    title: "Emergency Support",
    description: "Defined escalation matrix with rapid response times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M5 13.5v-2a7 7 0 0 1 14 0v2" />
        <rect x="3.5" y="13.5" width="3.5" height="5" rx="1" />
        <rect x="17" y="13.5" width="3.5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    description: "Service logs, health summaries, and compliance records.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-10" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description: "Firmware updates, capacity reviews, and lifecycle planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export function ServiceTimelineSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section className="overflow-hidden">
      <Container>
        <Reveal direction="up" className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            The Service Journey
          </span>
          <h2 className="mt-6 max-w-xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            From the first site survey to years of continuous improvement
          </h2>
        </Reveal>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-border" />
          <motion.div
            className="absolute top-8 left-0 h-px bg-deep-blue origin-left"
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2, ease: EASE_OUT_EXPO }}
          />

          <div className="relative grid grid-cols-7 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: DURATION.reveal,
                  delay: i * 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Node */}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    hoveredIndex === i
                      ? "border-deep-blue bg-deep-blue text-white shadow-[0_8px_24px_-8px_rgba(234,88,12,0.4)] scale-110"
                      : "border-border bg-card text-steel"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute top-8 -right-2 z-10 text-border">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Label */}
                <p className={`mt-4 text-center text-sm font-medium transition-colors duration-300 ${hoveredIndex === i ? "text-charcoal" : "text-steel"}`}>
                  {step.title}
                </p>

                {/* Hover description */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: DURATION.fast }}
                      className="mt-2 max-w-[180px] text-center text-xs text-steel"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: DURATION.reveal, delay: i * 0.08, ease: EASE_OUT_EXPO }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-steel">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
              </div>
              <div className="pb-10">
                <p className="text-sm font-semibold text-charcoal">{step.title}</p>
                <p className="mt-1 text-sm text-steel leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}