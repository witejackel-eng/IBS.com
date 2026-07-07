"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function HorizontalTimeline({
  steps,
  className,
}: {
  steps: Step[];
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("w-full overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0", className)}>
      <div className="relative flex min-w-max gap-0">
        {/* Connecting line */}
        <motion.div
          className="absolute top-8 left-0 h-[2px] bg-gradient-to-r from-deep-blue/20 via-deep-blue/40 to-deep-blue/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: EASE_OUT_EXPO as [number, number, number, number] }}
          style={{ transformOrigin: "left", width: `calc(100% - 80px)` }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative flex flex-col items-center w-[160px] md:w-[180px] shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : i * 0.1,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            {/* Node */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <span className="text-deep-blue">{step.icon}</span>
            </div>

            {/* Arrow between nodes */}
            {i < steps.length - 1 && (
              <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] flex items-center justify-end pr-0">
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-deep-blue/40">
                  <path d="M2 6h8M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}

            {/* Content */}
            <h4 className="mt-5 text-sm font-semibold text-charcoal font-heading text-center leading-tight">
              {step.title}
            </h4>
            <p className="mt-2 text-xs text-steel text-center leading-relaxed max-w-[150px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}