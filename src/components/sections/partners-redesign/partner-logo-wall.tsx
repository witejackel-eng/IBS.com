"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Partner } from "@/lib/content";
import { BrandLogoCard } from "./brand-logo-card";
import { EASE_OUT_EXPO } from "@/lib/motion";

/* ================================================================== */
/*  Category config                                                    */
/* ================================================================== */

const CATEGORY_META: Record<
  string,
  {
    title: string;
    description: string;
    icon: "av" | "network" | "security";
    sectionId: string;
  }
> = {
  "av-integration": {
    title: "Audio & Video",
    description:
      "Boardroom conferencing, video walls, public address systems, and classroom technology — from display manufacturers to DSP and control system brands.",
    icon: "av",
    sectionId: "av-partners",
  },
  "communication-it": {
    title: "Communication & IT",
    description:
      "Voice platforms, network switching and routing, firewalls, Wi-Fi, UPS systems, and storage — the infrastructure that keeps everything connected.",
    icon: "network",
    sectionId: "comm-it-partners",
  },
  security: {
    title: "Security",
    description:
      "CCTV surveillance, access control, fire detection, and intrusion systems — from camera manufacturers to fire panel specialists.",
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
                ? "border-deep-blue shadow-[0_16px_40px_-12px_rgba(0,0,0,0.14)]"
                : "border-border hover:border-deep-blue/60"
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-deep-blue/[0.07] text-deep-blue">
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
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-deep-blue">
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

  return (
    <div
      id={meta.sectionId}
      className={cn(
        "scroll-mt-28 transition-opacity duration-500",
        dimmed && "opacity-40"
      )}
    >
      {/* Heading */}
      <motion.div
        className="mb-12 sm:mb-16"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <h2 className="text-display-3 font-heading font-semibold tracking-tight text-charcoal">
          {meta.title} Partners
        </h2>
        <p className="mt-4 max-w-xl text-[17px] text-steel leading-relaxed">
          {meta.description}
        </p>
      </motion.div>

      {/* Logo Grid — 6-8 desktop, 4 tablet, 2-3 mobile */}
      <div role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-5">
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

/* ================================================================== */
/*  Utility                                                            */
/* ================================================================== */

import { cn } from "@/lib/utils";