"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { PartnerLogo } from "@/components/shared/partner-logo";
import type { Partner as PartnerType } from "@/lib/content";

interface ClusterProps {
  title: string;
  description: string;
  partners: PartnerType[];
  accent?: "left" | "center";
}

export function TechnologyCluster({ title, description, partners, accent = "center" }: ClusterProps) {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.12)] ${
        accent === "left" ? "lg:col-span-3" : "lg:col-span-2"
      }`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Header */}
      <div>
        <h3 className={`font-heading font-semibold tracking-tight text-charcoal ${accent === "left" ? "text-2xl lg:text-display-3" : "text-xl"}`}>
          {title}
        </h3>
        <p className="mt-3 text-sm text-steel leading-relaxed max-w-md">{description}</p>
      </div>

      {/* Partner count */}
      <div className="mt-6 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-deep-blue/10 text-xs font-bold text-deep-blue">
          {partners.length}
        </span>
        <span className="text-xs text-steel">OEM partners</span>
      </div>

      {/* Logos - animate in on hover/expand */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO as [number, number, number, number] }}
          >
            {partners.map((p, i) => (
              <motion.div
                key={p.slug}
                className="flex h-16 items-center justify-center rounded-xl border border-border bg-background px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <PartnerLogo name={p.name} className="h-8 w-auto max-w-[120px]" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle connection to IBS */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden lg:block">
        <svg width="40" height="2" className="text-deep-blue/20">
          <line x1="0" y1="1" x2="40" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </motion.div>
  );
}