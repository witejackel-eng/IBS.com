"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Partner } from "@/lib/content";
import { BrandLogoCard } from "./brand-logo-card";

/* ================================================================== */
/*  Category config — updated with richer metadata                      */
/* ================================================================== */

const CATEGORY_META: Record<
  string,
  {
    title: string;
    subtitleFn: (count: number) => string;
    countLabelFn: (count: number) => string;
    description: string;
    icon: "av" | "network" | "security";
    sectionId: string;
  }
> = {
  "av-integration": {
    title: "Audio / Video Partners",
    subtitleFn: (n) => `${n} certified integration partners`,
    countLabelFn: (n) => `${n} Brands`,
    description:
      "Boardroom systems, conferencing, displays, DSPs and collaboration hardware.",
    icon: "av",
    sectionId: "av-partners",
  },
  "communication-it": {
    title: "Communication & IT",
    subtitleFn: (n) => `${n} certified OEMs`,
    countLabelFn: (n) => `${n} Brands`,
    description:
      "Enterprise networking, Wi-Fi, routing, switching, infrastructure and power.",
    icon: "network",
    sectionId: "comm-it-partners",
  },
  security: {
    title: "Security Partners",
    subtitleFn: (n) => `${n} certified manufacturers`,
    countLabelFn: (n) => `${n} Brands`,
    description:
      "CCTV, access control, fire detection and perimeter security.",
    icon: "security",
    sectionId: "security-partners",
  },
};

/* ================================================================== */
/*  Minimal category icons                                             */
/* ================================================================== */

function CategoryIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "av":
      return (
        <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
          <rect x="4" y="8" width="22" height="16" rx="2" className="stroke-current" strokeWidth="1.5" />
          <line x1="8" y1="28" x2="22" y2="28" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="15" y1="24" x2="15" y2="28" className="stroke-current" strokeWidth="1.5" />
          <rect x="30" y="12" width="6" height="10" rx="1" className="stroke-current" strokeWidth="1.5" />
          <line x1="26" y1="17" x2="30" y2="17" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
          <circle cx="20" cy="20" r="4" className="stroke-current" strokeWidth="1.5" />
          <circle cx="8" cy="10" r="2.5" className="stroke-current" strokeWidth="1.5" />
          <circle cx="32" cy="10" r="2.5" className="stroke-current" strokeWidth="1.5" />
          <circle cx="8" cy="30" r="2.5" className="stroke-current" strokeWidth="1.5" />
          <circle cx="32" cy="30" r="2.5" className="stroke-current" strokeWidth="1.5" />
          <line x1="17" y1="17" x2="10" y2="12" className="stroke-current" strokeWidth="1.2" />
          <line x1="23" y1="17" x2="30" y2="12" className="stroke-current" strokeWidth="1.2" />
          <line x1="17" y1="23" x2="10" y2="28" className="stroke-current" strokeWidth="1.2" />
          <line x1="23" y1="23" x2="30" y2="28" className="stroke-current" strokeWidth="1.2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
          <path d="M20 4L8 10v10c0 8 5.2 15.2 12 17 6.8-1.8 12-9 12-17V10L20 4z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M15 20l3 3 7-7" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

/* ================================================================== */
/*  EcosystemOverview — 3 category cards                               */
/* ================================================================== */

interface CategoryGroup {
  key: string;
  partners: Partner[];
}

interface EcosystemOverviewProps {
  categories: CategoryGroup[];
  activeCategory: string | null;
  onHoverChange: (key: string | null) => void;
}

export function EcosystemOverview({
  categories,
  activeCategory,
  onHoverChange,
}: EcosystemOverviewProps) {
  const prefersReducedMotion = useReducedMotion();

  function scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {categories.map((cat, i) => {
        const meta = CATEGORY_META[cat.key];
        const isActive = activeCategory === cat.key;
        return (
          <motion.button
            key={cat.key}
            type="button"
            onClick={() => scrollToSection(meta.sectionId)}
            onHoverStart={() => onHoverChange(cat.key)}
            onHoverEnd={() => onHoverChange(null)}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-card p-7 sm:p-8 lg:p-9 text-left transition-all duration-300 cursor-pointer",
              "hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.14)]",
              isActive
                ? "border-tangerine-500 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.14)]"
                : "border-border hover:border-tangerine-500/60"
            )}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              delay: prefersReducedMotion ? 0 : 0.08 + i * 0.08,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
            whileHover={
              !prefersReducedMotion
                ? { y: -5, scale: 1.015, transition: { duration: 0.25 } }
                : undefined
            }
          >
            {/* Icon + Count */}
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-tangerine-600/[0.07] text-tangerine-600">
                <CategoryIcon type={meta.icon} className="h-7 w-7" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-steel tabular-nums">
                {cat.partners.length} Partners
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-[22px] font-heading font-semibold tracking-tight text-charcoal leading-snug">
              {meta.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-[15px] text-steel leading-relaxed flex-1">
              {meta.description}
            </p>

            {/* CTA */}
            <div className="mt-6 pt-5 border-t border-border/50">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-tangerine-600">
                View Partners
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  PartnerLogoWall — full logo grid per category                       */
/* ================================================================== */

interface PartnerLogoWallProps {
  categoryKey: string;
  partners: Partner[];
  activeCategory: string | null;
}

export function PartnerLogoWall({
  categoryKey,
  partners,
  activeCategory,
}: PartnerLogoWallProps) {
  const prefersReducedMotion = useReducedMotion();
  const meta = CATEGORY_META[categoryKey];
  const dimmed = activeCategory !== null && activeCategory !== categoryKey;
  const partnerCount = partners.length;

  return (
    <div
      id={meta.sectionId}
      className={cn(
        "scroll-mt-28 transition-opacity duration-500",
        dimmed && "opacity-40"
      )}
    >
      {/* ── Section Header with hierarchy ── */}
      <motion.div
        className="mb-8 sm:mb-10"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6">
          <div>
            <h2 className="text-display-3 font-heading font-semibold tracking-tight text-charcoal">
              {meta.title}
            </h2>
            <p className="mt-2 max-w-lg text-[15px] text-steel leading-relaxed">
              {meta.description}
            </p>
          </div>

          {/* Metadata badges */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-charcoal tabular-nums">
              <ShieldCheck className="h-3.5 w-3.5 text-tangerine-500" />
              {meta.countLabelFn(partnerCount)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-tangerine-500/20 bg-tangerine-500/[0.04] px-3.5 py-1.5 text-xs font-semibold text-tangerine-600">
              Authorized OEM
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Logo Grid — 5 desktop, 3-4 tablet, 2 mobile ── */}
      <div
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
      >
        {partners.map((partner, i) => (
          <BrandLogoCard
            key={partner.slug}
            name={partner.name}
            index={i}
            dimmed={dimmed}
          />
        ))}
      </div>
    </div>
  );
}