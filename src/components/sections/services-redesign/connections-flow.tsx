"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Phone, Monitor, Shield, Headset, FileText, Settings } from "lucide-react";

const flowSteps = [
  { label: "Voice", icon: Phone, desc: "IP-PBX, SIP, UC platforms" },
  { label: "Network", icon: Monitor, desc: "Switching, routing, Wi-Fi" },
  { label: "Security", icon: Shield, desc: "CCTV, access, fire alarm" },
  { label: "AV", icon: Settings, desc: "Conferencing, displays, DSP" },
  { label: "Software", icon: FileText, desc: "Licensing, compliance" },
  { label: "Support", icon: Headset, desc: "AMC, health reports" },
];

export function ConnectionsFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Animated connecting line */}
      <motion.svg
        className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 pointer-events-none hidden md:block"
        viewBox="0 0 1000 16"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0" y1="8" x2="1000" y2="8"
          stroke="var(--border)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 2, ease: EASE_OUT_EXPO as [number, number, number, number] }}
        />
      </motion.svg>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
        {flowSteps.map((step, i) => (
          <motion.div
            key={step.label}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : i * 0.12,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <step.icon className="h-6 w-6 text-deep-blue" strokeWidth={1.5} />
            </div>
            <h4 className="mt-4 text-sm font-semibold text-charcoal font-heading">{step.label}</h4>
            <p className="mt-1.5 text-xs text-steel">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="mt-10 text-center text-sm text-steel max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Every system depends on another. Voice needs network. Security needs network and power.
        AV needs network and power. Software ties them together. Support keeps them all running.
        That interdependency is why one integrated team matters.
      </motion.p>
    </div>
  );
}