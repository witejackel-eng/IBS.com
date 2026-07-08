"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  ClipboardCheck,
  PenTool,
  Wrench,
  TestTube,
  Headset,
} from "lucide-react";

import { Container } from "@/components/layout/container";

const STEPS = [
  { icon: Search, label: "Discovery", short: "Understand the space" },
  { icon: ClipboardCheck, label: "Site Survey", short: "Audit existing systems" },
  { icon: PenTool, label: "Design", short: "Architecture & topology" },
  { icon: Wrench, label: "Installation", short: "Certified deployment" },
  { icon: TestTube, label: "Testing", short: "Verify every system" },
  { icon: Headset, label: "Support", short: "Ongoing maintenance" },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-background py-14 sm:py-20 md:py-24 lg:py-32">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-20 max-w-xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            How We Deliver
          </span>
          <h2 className="text-2xl font-heading font-semibold tracking-tight text-charcoal lg:text-3xl">
            A disciplined process, not a checklist.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-0 hidden h-14 -translate-x-1/2 lg:block"
          >
            <div className="h-full w-px bg-border" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <span className="mb-3 text-[10px] font-semibold tabular-nums text-steel/40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon circle */}
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-deep-blue/30 group-hover:bg-deep-blue/[0.04] group-hover:shadow-lg group-hover:shadow-deep-blue/[0.06]">
                  <step.icon className="h-6 w-6 text-steel transition-colors duration-300 group-hover:text-deep-blue" />
                </span>

                {/* Arrow (not on last) */}
                {i < STEPS.length - 1 && (
                  <span className="mt-3 hidden text-steel/25 lg:block">&darr;</span>
                )}

                <h4 className="mt-4 text-sm font-semibold text-charcoal">
                  {step.label}
                </h4>
                <p className="mt-1 text-xs text-steel">{step.short}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}