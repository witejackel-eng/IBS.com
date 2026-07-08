"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Shield, RefreshCw, Cpu, Headphones, Link, CheckCircle2 } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Warranty", desc: "Full manufacturer warranty on genuine products — no gray-market risk." },
  { icon: RefreshCw, title: "Firmware", desc: "Current-generation hardware and software updates from the manufacturer." },
  { icon: Cpu, title: "Lifecycle", desc: "AMC-backed servicing that covers systems as they age and scale." },
  { icon: Headphones, title: "Support", desc: "Manufacturer support behind every deployment, escalated through IBS." },
  { icon: Link, title: "Compatibility", desc: "Certified to work with other OEM products in a multi-vendor system." },
  { icon: CheckCircle2, title: "Reliability", desc: "Proven in real deployments, not based on marketing specifications." },
];

export function WhyGenuineOem() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
      {/* Left - heading */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: EASE_OUT_EXPO as [number, number, number, number] }}
        >
          <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
            Why it matters
          </span>
          <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            Why genuine OEM products matter.
          </h2>
          <p className="mt-6 text-steel leading-relaxed">
            Gray-market hardware may look the same on the outside. Inside, it lacks manufacturer
            support, firmware updates, warranty coverage, and verified compatibility with the
            rest of the system. When a multi-vendor integration depends on every component
            being genuine, one substitute product can be the weak link that causes intermittent
            failures nobody can diagnose.
          </p>
        </motion.div>
      </div>

      {/* Right - benefits in a creative layout */}
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : 0.1 + i * 0.06,
                ease: EASE_OUT_EXPO as [number, number, number, number],
              }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
                <b.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-charcoal font-heading">{b.title}</h3>
                <p className="mt-1 text-sm text-steel leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}