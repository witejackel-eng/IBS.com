"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y, prefersReducedMotion]);

  // A custom cursor is a purely cosmetic, continuous animation -- skip it
  // entirely for users who've asked for reduced motion rather than just
  // slowing it down.
  if (prefersReducedMotion) return null;

  return (
    <>
      <motion.div aria-hidden className="cursor-dot" style={{ left: x, top: y }} />
      <motion.div
        aria-hidden
        className="cursor-ring"
        style={{
          left: ringX,
          top: ringY,
          scale: active ? 1.6 : 1,
          opacity: active ? 0.6 : 1,
        }}
      />
    </>
  );
}
