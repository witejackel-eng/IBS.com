"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface OemPartnersSectionProps {
  data: ServicePageData;
}

// ---------------------------------------------------------------------------
// Single partner card
// ---------------------------------------------------------------------------

function PartnerCard({
  partner,
  isExpanded,
  onToggle,
}: {
  partner: ServicePageData["oemPartners"][number];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-4 text-left transition-colors duration-300 hover:border-deep-blue/40 hover:shadow-lg hover:shadow-deep-blue/5 focus-visible:outline-2 focus-visible:outline-deep-blue focus-visible:outline-offset-2"
      aria-expanded={isExpanded}
    >
      {/* Category label */}
      <span className="mb-2 text-[11px] font-medium tracking-wide text-steel/60 uppercase">
        {partner.category}
      </span>

      {/* Partner name */}
      <span className="text-sm font-semibold leading-snug text-charcoal transition-colors duration-300 group-hover:text-deep-blue">
        {partner.name}
      </span>

      {/* Expanded expertise description */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expertise"
            initial={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : DURATION.base,
              ease: EASE_OUT_EXPO,
            }}
            className="overflow-hidden"
          >
            <p className="mt-2.5 border-t border-border pt-2.5 text-xs leading-relaxed text-steel">
              {partner.expertise}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover indicator chevron */}
      <motion.span
        aria-hidden="true"
        className="absolute right-3 top-4 text-steel/40 transition-colors duration-300 group-hover:text-deep-blue"
        animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: DURATION.fast }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function OemPartnersSection({ data }: OemPartnersSectionProps) {
  const { oemPartners } = data;

  // Track which partner is currently expanded (slug or null)
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  if (oemPartners.length === 0) return null;

  const handleToggle = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="OEM Partners"
          title="Technology from the brands that lead each category"
          align="center"
          className="mb-14 lg:mb-20"
        />

        <RevealGroup
          className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          stagger={0.06}
        >
          {oemPartners.map((partner) => (
            <RevealItem key={partner.name}>
              <PartnerCard
                partner={partner}
                isExpanded={expandedSlug === partner.name}
                onToggle={() => handleToggle(partner.name)}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}