"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import { Section } from "@/components/layout/section";

const metrics = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Projects Supported" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 98, suffix: "%", label: "Customer Retention" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
  delay = 0,
}: {
  value: number;
  suffix: string;
  inView: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      if (prefersReducedMotion) setDisplay(value);
      return;
    }
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, value, delay, prefersReducedMotion]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function TrustMetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Section>
      <div ref={ref} className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: DURATION.reveal,
                delay: i * 0.12,
                ease: EASE_OUT_EXPO,
              }}
            >
              <p className="text-5xl lg:text-6xl font-semibold text-charcoal font-heading tracking-tight">
                <AnimatedCounter value={m.value} suffix={m.suffix} inView={inView} delay={i * 0.12} />
              </p>
              <p className="mt-3 text-sm font-medium text-steel tracking-wide uppercase">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}