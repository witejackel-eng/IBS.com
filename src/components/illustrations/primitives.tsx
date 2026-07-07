"use client";

import { motion, useReducedMotion, type SVGMotionProps } from "framer-motion";

import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Shared visual grammar for the custom illustration system: every piece is
 * built from these three primitives on a 0 0 120 120 viewBox, stroke-width
 * 1.5, so illustrations read as one design system instead of one-off art.
 */

export function Node({
  cx,
  cy,
  r = 3.5,
  accent = false,
  filled = false,
  className,
}: {
  cx: number;
  cy: number;
  r?: number;
  accent?: boolean;
  filled?: boolean;
  className?: string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      strokeWidth={1.5}
      className={cn(
        /* fill */
        filled
          ? accent
            ? "fill-deep-blue"
            : "fill-charcoal"
          : "fill-card",
        /* stroke */
        accent
          ? "stroke-deep-blue"
          : "stroke-steel",
        className
      )}
    />
  );
}

export function ConnectionLine({
  d,
  accent = false,
  animate = true,
  delay = 0,
  dashed = false,
  ...props
}: {
  d: string;
  accent?: boolean;
  animate?: boolean;
  delay?: number;
  dashed?: boolean;
} & Omit<SVGMotionProps<SVGPathElement>, "d">) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <motion.path
      d={d}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "3 4" : undefined}
      className={cn(
        "fill-none",
        accent ? "stroke-deep-blue" : "stroke-steel"
      )}
      initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : undefined}
      whileInView={shouldAnimate ? { pathLength: 1, opacity: 1 } : undefined}
      viewport={shouldAnimate ? { once: true, amount: 0.6 } : undefined}
      transition={shouldAnimate ? { duration: DURATION.mask, delay, ease: EASE_OUT_EXPO } : undefined}
      {...props}
    />
  );
}

/** Blueprint-dot backdrop reusing the same visual language as .bg-engineering-grid. */
export function BlueprintGrid({ id, opacity = 0.5 }: { id: string; opacity?: number }) {
  return (
    <>
      <defs>
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="fill-border" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill={`url(#${id})`} opacity={opacity} />
    </>
  );
}

export function IllustrationPulse({ cx, cy, r = 3.5, delay = 0 }: { cx: number; cy: number; r?: number; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      className="fill-none stroke-deep-blue"
      strokeWidth={1.5}
      initial={{ r, opacity: 0.6 }}
      whileInView={{ r: r + 10, opacity: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay }}
    />
  );
}