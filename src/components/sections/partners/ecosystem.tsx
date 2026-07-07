"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { partners, partnerCategories } from "@/lib/content";
import { PartnerLogo } from "@/components/shared/partner-logo";

const clusterMeta: Record<string, { icon: React.ReactNode; description: string }> = {
  "av-integration": {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
    description: "Video conferencing, presentation systems, digital signage, audio processing, and control automation from Poly, Cisco, Crestron, and more.",
  },
  "communication-it": {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 3.5l6.5 3v5.5c0 4.5-2.8 7.3-6.5 8.5-3.7-1.2-6.5-4-6.5-8.5V6.5z" />
      </svg>
    ),
    description: "Networking, switching, routing, firewalls, UPS systems, and storage infrastructure from Cisco, Fortinet, APC, Dell, and Synology.",
  },
  security: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="5.5" y="11" width="13" height="9.5" rx="1.5" />
        <path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
        <circle cx="12" cy="15.5" r="1.3" />
      </svg>
    ),
    description: "CCTV surveillance, fire detection, access control, and intrusion systems from Hikvision, Axis, Honeywell, Notifier, and eSSL.",
  },
};

export function EcosystemSection() {
  const [expandedCluster, setExpandedCluster] = useState<string | null>("av-integration");
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section className="overflow-hidden">
      <Container>
        <Reveal direction="up" className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Technology Ecosystem
          </span>
          <h2 className="mt-6 max-w-2xl text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            Six categories. One integrated system.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-steel">
            Select a category to see the OEM brands IBS deploys across that technology domain.
          </p>
        </Reveal>

        {/* Cluster buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {partnerCategories.map((cat, i) => {
            const meta = clusterMeta[cat.key];
            const isExpanded = expandedCluster === cat.key;
            const count = partners.filter((p) => p.category === cat.key).length;
            return (
              <motion.button
                key={cat.key}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: DURATION.base, delay: i * 0.08, ease: EASE_OUT_EXPO }}
                className={`group flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left transition-all duration-300 ${
                  isExpanded
                    ? "border-deep-blue/40 bg-card shadow-[0_12px_32px_-12px_rgba(234,88,12,0.2)]"
                    : "border-border bg-card/50 hover:border-deep-blue/20"
                }`}
                onClick={() => setExpandedCluster(isExpanded ? null : cat.key)}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    isExpanded ? "bg-deep-blue text-white" : "bg-muted text-steel group-hover:text-charcoal"
                  }`}
                >
                  {meta?.icon}
                </div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${isExpanded ? "text-charcoal" : "text-charcoal"}`}>
                    {cat.label.replace(" Partners", "")}
                  </p>
                  <p className="text-xs text-steel">{count} brands</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded cluster content */}
        <AnimatePresence mode="wait">
          {expandedCluster && (
            <motion.div
              key={expandedCluster}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, height: 0 }}
              transition={{ duration: DURATION.reveal, ease: EASE_OUT_EXPO }}
              className="overflow-hidden"
            >
              {(() => {
                const cat = partnerCategories.find((c) => c.key === expandedCluster);
                const items = partners.filter((p) => p.category === expandedCluster);
                const meta = clusterMeta[expandedCluster];
                if (!cat || !meta) return null;
                return (
                  <div className="rounded-3xl border border-border bg-card p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                      <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-charcoal">{cat.label}</h3>
                        <p className="mt-3 text-sm text-steel leading-relaxed">{meta.description}</p>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                          {items.map((p, i) => (
                            <motion.div
                              key={p.slug}
                              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: DURATION.base, delay: i * 0.03, ease: EASE_OUT_EXPO }}
                              className="flex h-24 items-center justify-center rounded-xl border border-border bg-background p-3 transition-all duration-300 hover:-translate-y-1 hover:border-deep-blue/30 hover:shadow-[0_8px_20px_-8px_rgba(234,88,12,0.2)]"
                            >
                              <PartnerLogo name={p.name} className="h-full w-full max-w-[140px]" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}