"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Service } from "@/lib/content";

interface EcosystemNode {
  slug: string;
  label: string;
  tagline: string;
  x: number;
  y: number;
}

const nodes: EcosystemNode[] = [
  { slug: "voice-communication", label: "Voice", tagline: "Unified Communication", x: 15, y: 20 },
  { slug: "audio-video-boardroom-solutions", label: "AV", tagline: "Boardroom Integration", x: 80, y: 12 },
  { slug: "it-infrastructure", label: "Network", tagline: "Data Center & Infrastructure", x: 85, y: 65 },
  { slug: "security-solutions", label: "Security", tagline: "Surveillance & Access", x: 15, y: 72 },
  { slug: "call-center-solutions", label: "Call Center", tagline: "Customer Engagement", x: 50, y: 5 },
  { slug: "software-licenses", label: "Software", tagline: "Licensing & Compliance", x: 50, y: 88 },
];

export function TechnologyEcosystem({ services }: { services: Service[] }) {
  const [active, setActive] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const activeService = active ? services.find((s) => s.slug === active) : null;

  return (
    <div ref={containerRef} className="relative w-full aspect-[16/10] max-w-4xl mx-auto">
      {/* Center node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-deep-blue text-warm-white shadow-[0_8px_32px_-8px_rgba(234,88,12,0.4)]"
            animate={!prefersReducedMotion ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
          </motion.div>
          <span className="mt-2 text-xs font-bold tracking-widest text-deep-blue uppercase">IBS</span>
        </div>
      </motion.div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node, i) => (
          <motion.line
            key={node.slug}
            x1="50" y1="50" x2={node.x} y2={node.y}
            stroke={active === node.slug ? "var(--deep-blue)" : "var(--border)"}
            strokeWidth={active === node.slug ? "0.5" : "0.25"}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 1,
              delay: prefersReducedMotion ? 0 : 0.3 + i * 0.1,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          />
        ))}
      </svg>

      {/* Orbit nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.slug}
          className="absolute z-10 cursor-pointer"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : 0.5 + i * 0.08,
            ease: EASE_OUT_EXPO as [number, number, number, number],
          }}
          onMouseEnter={() => setActive(node.slug)}
          onMouseLeave={() => setActive(null)}
        >
          <motion.div
            className={`flex flex-col items-center gap-1.5 rounded-2xl border bg-card px-4 py-3 transition-all duration-300 ${
              active === node.slug
                ? "border-deep-blue/40 shadow-[0_12px 32px_-12px_rgba(234,88,12,0.25)] scale-110"
                : "border-border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-deep-blue/20 hover:shadow-[0_8px_24px_-12px_rgba(234,88,12,0.15)]"
            }`}
            whileHover={!prefersReducedMotion ? { y: -4 } : {}}
            transition={{ duration: 0.3 }}
          >
            <span className={`text-sm font-semibold font-heading ${active === node.slug ? "text-deep-blue" : "text-charcoal"}`}>
              {node.label}
            </span>
            <span className="text-[10px] text-steel whitespace-nowrap">{node.tagline}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Tooltip */}
      <AnimatePresence>
        {activeService && active && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-md rounded-2xl border border-border bg-card p-5 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO as [number, number, number, number] }}
          >
            <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">{activeService.tagline}</span>
            <h4 className="mt-1 text-lg font-semibold text-charcoal font-heading">{activeService.title}</h4>
            <p className="mt-2 text-sm text-steel leading-relaxed">{activeService.summary}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}