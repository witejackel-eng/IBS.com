"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const OFFSETS: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.94 },
  none: {},
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = DURATION.hero,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? {} : OFFSETS[direction];

  const variants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0 : duration, delay: prefersReducedMotion ? 0 : delay, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE_OUT_EXPO } },
};

const reducedRevealItemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div className={className} variants={prefersReducedMotion ? reducedRevealItemVariants : revealItemVariants}>
      {children}
    </motion.div>
  );
}
