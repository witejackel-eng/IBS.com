"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  // Eased/inertial scrolling can trigger vestibular discomfort, so fall back
  // to native scroll behavior when the user has asked for reduced motion.
  if (prefersReducedMotion) return children;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
