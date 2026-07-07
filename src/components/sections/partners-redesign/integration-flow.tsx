"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Package, Wrench, FlaskConical, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Package, title: "OEM Partners", desc: "Genuine products sourced through authorized manufacturer channels" },
  { icon: Wrench, title: "Engineering", desc: "Certified engineers design the integration architecture" },
  { icon: FlaskConical, title: "Integration", desc: "Multi-vendor systems configured to work as one platform" },
  { icon: Rocket, title: "Testing", desc: "Every system verified to spec before handover" },
  { icon: Headphones, title: "Long-Term Support", desc: "AMC coverage keeps everything running after deployment" },
];

export function IntegrationFlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative max-w-2xl mx-auto">
      <svg className="absolute left-6 top-0 w-0.5 h-full hidden md:block" viewBox="0 0 2 600" preserveAspectRatio="none">
        <motion.line
          x1="1" y1="0" x2="1" y2="600"
          stroke="var(--border)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 2.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="space-y-12 md:pl-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative flex gap-6 items-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : i * 0.1,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            {/* Step number */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <step.icon className="h-5 w-5 text-deep-blue" strokeWidth={1.5} />
            </div>

            <div className="pb-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-deep-blue/40">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="text-lg font-semibold text-charcoal font-heading">{step.title}</h4>
              </div>
              <p className="mt-2 text-sm text-steel leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}