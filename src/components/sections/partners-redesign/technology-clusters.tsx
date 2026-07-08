"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { PartnerLogo } from "@/components/shared/partner-logo";
import type { Partner as PartnerType } from "@/lib/content";
import { ArrowRight } from "lucide-react";

/* ================================================================== */
/*  Types                                                              */
/* ================================================================== */

/** @deprecated Use TechnologyEcosystemGrid instead */
interface ClusterProps {
  title: string;
  description: string;
  partners: PartnerType[];
  accent?: "left" | "center";
}

/* ================================================================== */
/*  Category Icon SVGs (minimal line-art)                               */
/* ================================================================== */

function AudioVideoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="8" width="22" height="16" rx="2" className="stroke-steel" strokeWidth="1.5" />
      <line x1="8" y1="28" x2="22" y2="28" className="stroke-steel" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="24" x2="15" y2="28" className="stroke-steel" strokeWidth="1.5" />
      <rect x="30" y="12" width="6" height="10" rx="1" className="stroke-deep-blue" strokeWidth="1.5" />
      <line x1="26" y1="17" x2="30" y2="17" className="stroke-steel" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="33" cy="17" r="1.5" className="fill-deep-blue" />
    </svg>
  );
}

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="4" className="stroke-deep-blue" strokeWidth="1.5" />
      <circle cx="8" cy="10" r="2.5" className="stroke-steel" strokeWidth="1.5" />
      <circle cx="32" cy="10" r="2.5" className="stroke-steel" strokeWidth="1.5" />
      <circle cx="8" cy="30" r="2.5" className="stroke-steel" strokeWidth="1.5" />
      <circle cx="32" cy="30" r="2.5" className="stroke-steel" strokeWidth="1.5" />
      <line x1="17" y1="17" x2="10" y2="12" className="stroke-steel" strokeWidth="1.2" />
      <line x1="23" y1="17" x2="30" y2="12" className="stroke-steel" strokeWidth="1.2" />
      <line x1="17" y1="23" x2="10" y2="28" className="stroke-steel" strokeWidth="1.2" />
      <line x1="23" y1="23" x2="30" y2="28" className="stroke-steel" strokeWidth="1.2" />
    </svg>
  );
}

function SecurityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 4L8 10v10c0 8 5.2 15.2 12 17 6.8-1.8 12-9 12-17V10L20 4z"
        className="stroke-steel"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20 4L8 10v10c0 8 5.2 15.2 12 17 6.8-1.8 12-9 12-17V10L20 4z"
        className="fill-deep-blue fill-opacity-10"
      />
      <path d="M15 20l3 3 7-7" className="stroke-deep-blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CATEGORY_ICONS = [AudioVideoIcon, NetworkIcon, SecurityIcon];

/* ================================================================== */
/*  Ecosystem Card                                                     */
/* ================================================================== */

function EcosystemCard({
  title,
  description,
  partners,
  index,
  categoryKey,
  isHovered,
  onHover,
}: {
  title: string;
  description: string;
  partners: PartnerType[];
  index: number;
  categoryKey: string;
  isHovered: boolean;
  onHover: (key: string | null) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = CATEGORY_ICONS[index] ?? NetworkIcon;
  const hoverEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      className="relative flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8 will-change-transform"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : 0.1 + index * 0.08,
        ease: EASE_OUT_EXPO as [number, number, number, number],
      }}
      whileHover={
        !prefersReducedMotion
          ? { y: -4, boxShadow: "0 20px 50px -16px rgba(0,0,0,0.12)" }
          : undefined
      }
      onHoverStart={() => onHover(categoryKey)}
      onHoverEnd={() => onHover(null)}
    >
      {/* ── Top: Icon + Partner Count ── */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-blue/[0.07]">
          <IconComponent className="h-5 w-5" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-steel tabular-nums">
          {partners.length} Partners
        </span>
      </div>

      {/* ── Title ── */}
      <h3 className="mt-5 text-xl font-heading font-semibold tracking-tight text-charcoal leading-snug">
        {title}
      </h3>

      {/* ── Middle: Description / Logo Reveal (same slot, cross-fade) ── */}
      <div className="relative mt-2 sm:mt-2.5 min-h-[56px] sm:min-h-[60px]">
        {/* Description — visible by default, fades on hover */}
        <motion.p
          className="text-sm text-steel leading-relaxed"
          animate={!prefersReducedMotion ? { opacity: isHovered ? 0 : 1 } : undefined}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>

        {/* Logo grid — hidden by default, fades in on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex flex-wrap content-start gap-2"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25, ease: hoverEase }}
            >
              {partners.slice(0, 6).map((p, i) => (
                <motion.div
                  key={p.slug}
                  className="flex h-8 items-center justify-center rounded-lg border border-border bg-background px-2.5"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15, delay: i * 0.03 }}
                >
                  <PartnerLogo name={p.name} className="h-3.5 w-auto max-w-[70px]" />
                </motion.div>
              ))}
              {partners.length > 6 && (
                <span className="flex h-8 items-center px-1.5 text-xs font-medium text-steel">
                  +{partners.length - 6}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom: CTA (always pinned to bottom) ── */}
      <div className="mt-auto pt-4 sm:pt-5 border-t border-border/60">
        <motion.span
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep-blue"
          animate={!prefersReducedMotion ? { x: isHovered ? 3 : 0 } : undefined}
          transition={{ duration: 0.25 }}
        >
          View Partners
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ================================================================== */
/*  Interactive Network Diagram                                         */
/* ================================================================== */

const ECOSYSTEM_NODES = [
  { key: "av-integration", label: "Audio / Video", angle: -90 },
  { key: "communication-it", label: "Comm & IT", angle: 150 },
  { key: "security", label: "Security", angle: 30 },
] as const;

/** Pre-computed satellite offsets relative to each parent node */
const SATELLITES = [
  /* AV satellites */
  { parent: 0, offsetAngle: -20, dist: 22 },
  { parent: 0, offsetAngle: 20, dist: 20 },
  { parent: 0, offsetAngle: -50, dist: 18 },
  /* Comm & IT satellites */
  { parent: 1, offsetAngle: -20, dist: 22 },
  { parent: 1, offsetAngle: 20, dist: 20 },
  { parent: 1, offsetAngle: 50, dist: 18 },
  /* Security satellites */
  { parent: 2, offsetAngle: -25, dist: 22 },
  { parent: 2, offsetAngle: 25, dist: 20 },
  { parent: 2, offsetAngle: 0, dist: 25 },
];

function polarToCart(cx: number, cy: number, angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function NetworkDiagram({ activeCategory }: { activeCategory: string | null }) {
  const prefersReducedMotion = useReducedMotion();
  const CX = 200;
  const CY = 115;
  const RADIUS = 68;
  const ease = EASE_OUT_EXPO as [number, number, number, number];

  return (
    <svg viewBox="0 0 400 230" className="w-full h-auto" aria-hidden="true">
      {/* ── Dot-grid background ── */}
      <defs>
        <pattern id="eco-dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" className="fill-border" />
        </pattern>
      </defs>
      <rect width="400" height="230" fill="url(#eco-dot-grid)" />

      {/* ── Connection lines: center → category nodes ── */}
      {ECOSYSTEM_NODES.map((node, i) => {
        const pos = polarToCart(CX, CY, node.angle, RADIUS);
        const isActive = activeCategory === node.key;
        return (
          <motion.line
            key={node.key}
            x1={CX}
            y1={CY}
            x2={pos.x}
            y2={pos.y}
            className={isActive ? "stroke-deep-blue" : "stroke-steel"}
            strokeWidth={isActive ? 1.5 : 0.7}
            strokeOpacity={isActive ? 1 : 0.25}
            strokeLinecap="round"
            initial={prefersReducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 + i * 0.1, ease }}
          />
        );
      })}

      {/* ── Satellite branches ── */}
      {SATELLITES.map((sat, i) => {
        const parent = ECOSYSTEM_NODES[sat.parent];
        const parentPos = polarToCart(CX, CY, parent.angle, RADIUS);
        const satAngle = parent.angle + sat.offsetAngle;
        const satPos = polarToCart(parentPos.x, parentPos.y, satAngle, sat.dist);
        const isActive = activeCategory === parent.key;

        return (
          <g key={`sat-${i}`}>
            <line
              x1={parentPos.x}
              y1={parentPos.y}
              x2={satPos.x}
              y2={satPos.y}
              className={isActive ? "stroke-deep-blue" : "stroke-steel"}
              strokeWidth={isActive ? 0.8 : 0.4}
              strokeOpacity={isActive ? 0.5 : 0.15}
              strokeLinecap="round"
            />
            <circle
              cx={satPos.x}
              cy={satPos.y}
              r={isActive ? 2.2 : 1.4}
              className={isActive ? "fill-deep-blue" : "fill-steel"}
              fillOpacity={isActive ? 0.5 : 0.2}
            />
          </g>
        );
      })}

      {/* ── Center IBS node ── */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={16}
        className="fill-card stroke-deep-blue"
        strokeWidth={1.5}
        initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
        whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease }}
      />
      <motion.text
        x={CX}
        y={CY}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-deep-blue"
        fontSize="9"
        fontWeight="700"
        fontFamily="var(--font-heading)"
        letterSpacing="0.1em"
        initial={prefersReducedMotion ? undefined : { opacity: 0 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        IBS
      </motion.text>

      {/* Pulse ring on hover */}
      <AnimatePresence>
        {activeCategory && !prefersReducedMotion && (
          <motion.circle
            cx={CX}
            cy={CY}
            className="fill-none stroke-deep-blue"
            strokeWidth={0.8}
            initial={{ r: 16, opacity: 0.5 }}
            animate={{ r: 30, opacity: 0 }}
            exit={{ r: 16, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── Category endpoint nodes ── */}
      {ECOSYSTEM_NODES.map((node, i) => {
        const pos = polarToCart(CX, CY, node.angle, RADIUS);
        const isActive = activeCategory === node.key;
        const labelY = node.angle === -90 ? pos.y - 14 : node.angle > 90 ? pos.y - 14 : pos.y + 16;

        return (
          <motion.g
            key={node.key}
            initial={prefersReducedMotion ? undefined : { scale: 0, opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.5 + i * 0.08, ease }}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 7 : 5.5}
              className={isActive ? "fill-card stroke-deep-blue" : "fill-card stroke-steel"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <text
              x={pos.x}
              y={labelY}
              textAnchor="middle"
              className={isActive ? "fill-charcoal" : "fill-steel"}
              fontSize="6"
              fontWeight="600"
              fontFamily="var(--font-heading)"
              letterSpacing="0.05em"
            >
              {node.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ================================================================== */
/*  Main Export: TechnologyEcosystemGrid                                */
/* ================================================================== */

/** @deprecated Legacy export kept for backward-compat; renders nothing. */
export function TechnologyCluster(_props: ClusterProps) {
  return null;
}

interface EcosystemGridProps {
  categories: {
    key: string;
    label: string;
    description: string;
    partners: PartnerType[];
  }[];
}

export function TechnologyEcosystemGrid({ categories }: EcosystemGridProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const ease = EASE_OUT_EXPO as [number, number, number, number];

  const handleHover = useCallback(
    (key: string | null) => {
      if (prefersReducedMotion) return;
      setActiveCategory(key);
    },
    [prefersReducedMotion],
  );

  return (
    <div className="w-full">
      {/* ── Network Diagram ── */}
      <motion.div
        className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-xl sm:max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease }}
      >
        <NetworkDiagram activeCategory={activeCategory} />
      </motion.div>

      {/* ── Three Equal Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {categories.map((cat, i) => (
          <EcosystemCard
            key={cat.key}
            title={cat.label}
            description={cat.description}
            partners={cat.partners}
            index={i}
            categoryKey={cat.key}
            isHovered={activeCategory === cat.key}
            onHover={handleHover}
          />
        ))}
      </div>
    </div>
  );
}