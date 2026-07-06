"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight > 0) {
      setProgress(Math.min(scrollTop / docHeight, 1));
    }
  }, []);

  useEffect(() => {
    // For reduced motion users we still show the bar but skip any CSS transitions
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Set initial value
    updateProgress();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 h-[3px] w-full"
      style={{
        backgroundColor: "transparent",
      }}
      aria-hidden="true"
    >
      <div
        className="h-full"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: "var(--tangerine-500, #F97316)",
          opacity: progress > 0 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
}