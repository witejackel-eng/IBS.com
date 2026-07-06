"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

/** Clip-path mask reveal, used for large editorial headings and hero photography. */
export function MaskReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 100% 0)", y: 40 }}
        whileInView={prefersReducedMotion ? undefined : { clipPath: "inset(0 0 0% 0)", y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: DURATION.mask, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  );
}
