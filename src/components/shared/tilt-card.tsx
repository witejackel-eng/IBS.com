"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPRING_TILT } from "@/lib/motion";

export function TiltCard({
  children,
  className,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const rotateX = useSpring(0, SPRING_TILT);
  const rotateY = useSpring(0, SPRING_TILT);

  const glareBackground = useMotionTemplate`radial-gradient(320px circle at ${glareX}% ${glareY}%, color-mix(in oklch, var(--deep-blue-light) 25%, transparent), transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    glareX.set(px * 100);
    glareY.set(py * 100);
    rotateY.set((px - 0.5) * 12);
    rotateX.set((0.5 - py) * 12);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("group relative will-change-transform", className)}
    >
      {children}
      {glare && !prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
