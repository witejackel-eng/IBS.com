"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

const reasons = [
  { num: "01", title: "Single engineering team", desc: "No finger-pointing between vendors. One team designed it, installed it, and maintains it." },
  { num: "02", title: "Preventive maintenance", desc: "Problems are caught during scheduled visits — not after they cause downtime." },
  { num: "03", title: "Fast escalation", desc: "Defined response times and a clear escalation matrix from first contact to resolution." },
  { num: "04", title: "Detailed reporting", desc: "Service logs, checklists, and health summaries after every visit — full paper trail." },
  { num: "05", title: "Original OEM support", desc: "The same certified engineers who built your system are the ones maintaining it." },
  { num: "06", title: "Long-term relationship", desc: "AMCs designed for years, not months. We stay invested in your systems long after go-live." },
];

export function WhyClientsStay() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-0">
      {reasons.map((reason, i) => (
        <motion.div
          key={reason.num}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-border last:border-b-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : i * 0.08,
            ease: EASE_OUT_EXPO as [number, number, number, number],
          }}
        >
          <div className="md:col-span-2">
            <span className="text-3xl font-bold text-deep-blue/20 font-heading">{reason.num}</span>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold text-charcoal font-heading">{reason.title}</h3>
          </div>
          <div className="md:col-span-6">
            <p className="text-sm text-steel leading-relaxed">{reason.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}