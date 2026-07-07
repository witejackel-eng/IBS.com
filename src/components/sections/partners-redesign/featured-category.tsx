"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { PartnerLogo } from "@/components/shared/partner-logo";
import type { Partner } from "@/lib/content";

interface FeaturedCategoryProps {
  title: string;
  description: string;
  partners: Partner[];
  deployments: string[];
  reversed?: boolean;
  accent?: boolean;
}

export function FeaturedCategory({ title, description, partners, deployments, reversed = false, accent = false }: FeaturedCategoryProps) {
  const prefersReducedMotion = useReducedMotion();
  const displayPartners = partners.slice(0, 6);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "[&>*:first-child]:lg:order-2" : ""}`}>
      {/* Visual side - brand logos */}
      <motion.div
        className={`relative rounded-3xl border border-border bg-card p-10 lg:p-12 ${accent ? "bg-deep-blue/[0.03] border-deep-blue/20" : ""}`}
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {displayPartners.map((p, i) => (
            <motion.div
              key={p.slug}
              className="flex h-20 items-center justify-center rounded-2xl border border-border bg-background px-6 transition-all duration-300 hover:border-deep-blue/30 hover:shadow-[0_8px_24px_-8px_rgba(234,88,12,0.12)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              whileHover={!prefersReducedMotion ? { y: -4 } : {}}
            >
              <PartnerLogo name={p.name} className="h-8 w-auto max-w-[130px]" />
            </motion.div>
          ))}
        </div>
        {partners.length > 6 && (
          <p className="mt-6 text-center text-xs text-steel">
            +{partners.length - 6} more partners in this category
          </p>
        )}
      </motion.div>

      {/* Content side */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: 0.1, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        {accent && (
          <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
            Featured Category
          </span>
        )}
        <h3 className={`mt-3 font-heading font-semibold tracking-tight text-charcoal text-balance ${accent ? "text-display-3" : "text-2xl lg:text-3xl"}`}>
          {title}
        </h3>
        <p className="mt-5 text-steel leading-relaxed">
          {description}
        </p>

        {/* Common deployments */}
        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.1em] text-steel uppercase mb-3">Common deployments</p>
          <div className="flex flex-wrap gap-2">
            {deployments.map((d) => (
              <span key={d} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-steel">
                {d}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}