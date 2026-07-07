"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `target` when `inView` becomes true.
 * Uses requestAnimationFrame for a smooth 60fps count.
 */
export function useCountUp(
  target: number,
  inView: boolean,
  { duration = 2000, suffix = "" }: { duration?: number; suffix?: string } = {}
) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, target, duration]);

  return `${display}${suffix}`;
}