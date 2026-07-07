"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";
import type { ServicePageData } from "@/lib/content/service-page-data";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface TechnologyEcosystemSectionProps {
  data: ServicePageData;
  serviceSlug: string;
}

// ---------------------------------------------------------------------------
// Related-service metadata (hardcoded stable list for orbital layout)
// ---------------------------------------------------------------------------

interface OrbitNode {
  slug: string;
  label: string;
  tagline: string;
  /** Angle in degrees — 0 = top, clockwise */
  angle: number;
}

const ALL_ORBIT_NODES: OrbitNode[] = [
  { slug: "voice-communication", label: "Voice", tagline: "Unified Communication", angle: -90 },
  { slug: "audio-video-boardroom-solutions", label: "AV", tagline: "Boardroom Integration", angle: -30 },
  { slug: "it-infrastructure", label: "Network", tagline: "Data Center & Infrastructure", angle: 30 },
  { slug: "security-solutions", label: "Security", tagline: "Surveillance & Access", angle: 90 },
  { slug: "call-center-solutions", label: "Call Center", tagline: "Customer Engagement", angle: 150 },
  { slug: "software-licenses", label: "Software", tagline: "Licensing & Compliance", angle: 210 },
  { slug: "annual-maintenance-service", label: "AMC", tagline: "Maintenance & Support", angle: 270 },
];

/** Cross-connections between orbit nodes (pairs of slugs) */
const CROSS_CONNECTIONS: [string, string][] = [
  ["voice-communication", "it-infrastructure"],
  ["audio-video-boardroom-solutions", "it-infrastructure"],
  ["security-solutions", "it-infrastructure"],
  ["call-center-solutions", "voice-communication"],
  ["software-licenses", "security-solutions"],
  ["annual-maintenance-service", "voice-communication"],
  ["annual-maintenance-service", "audio-video-boardroom-solutions"],
  ["annual-maintenance-service", "security-solutions"],
];

// ---------------------------------------------------------------------------
// SVG Diagram (desktop)
// ---------------------------------------------------------------------------

function EcosystemDiagram({
  centerLabel,
  orbitNodes,
  hovered,
  onHover,
  onLeave,
  reduced,
  visible,
}: {
  centerLabel: string;
  orbitNodes: OrbitNode[];
  hovered: string | null;
  onHover: (slug: string | null) => void;
  onLeave: () => void;
  reduced: boolean;
  visible: boolean;
}) {
  const size = 400;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 150;

  return (
    <div className="relative mx-auto w-full max-w-lg aspect-square">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full"
        aria-label="Technology ecosystem diagram"
        role="img"
      >
        {/* Subtle dot grid */}
        <defs>
          <pattern id="eco-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.6" className="fill-border" />
          </pattern>
        </defs>
        <rect width={size} height={size} fill="url(#eco-grid)" opacity={0.4} />

        {/* Radial connection lines — center to orbit nodes */}
        {orbitNodes.map((node) => {
          const nx = cx + Math.cos(((node.angle - 90) * Math.PI) / 180) * radius;
          const ny = cy + Math.sin(((node.angle - 90) * Math.PI) / 180) * radius;
          const isHighlighted = hovered === node.slug || hovered === "center";
          return (
            <motion.line
              key={`radial-${node.slug}`}
              x1={cx}
              y1={cy}
              x2={nx}
              y2={ny}
              className="stroke-deep-blue"
              strokeWidth={isHighlighted ? 2 : 1}
              strokeDasharray={isHighlighted ? "none" : "4 4"}
              initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
              animate={
                visible
                  ? { pathLength: 1, opacity: hovered ? (isHighlighted ? 0.5 : 0.08) : 0.2 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: reduced ? 0 : 1, ease: EASE_OUT_EXPO as [number, number, number, number] }}
              style={{ pointerEvents: "none" }}
            />
          );
        })}

        {/* Cross-connections between related nodes */}
        {CROSS_CONNECTIONS.filter(
          ([a, b]) => orbitNodes.some((n) => n.slug === a) && orbitNodes.some((n) => n.slug === b)
        ).map(([a, b]) => {
          const da = orbitNodes.find((n) => n.slug === a)!;
          const db = orbitNodes.find((n) => n.slug === b)!;
          const x1 = cx + Math.cos(((da.angle - 90) * Math.PI) / 180) * radius;
          const y1 = cy + Math.sin(((da.angle - 90) * Math.PI) / 180) * radius;
          const x2 = cx + Math.cos(((db.angle - 90) * Math.PI) / 180) * radius;
          const y2 = cy + Math.sin(((db.angle - 90) * Math.PI) / 180) * radius;
          const isHighlighted = hovered === a || hovered === b;
          return (
            <motion.line
              key={`cross-${a}-${b}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="stroke-signal-orange"
              strokeWidth={isHighlighted ? 1.2 : 0.5}
              initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
              animate={
                visible
                  ? {
                      pathLength: 1,
                      opacity: hovered ? (isHighlighted ? 0.35 : 0.03) : 0.07,
                    }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: reduced ? 0 : 1.2,
                delay: reduced ? 0 : 0.4,
                ease: EASE_OUT_EXPO as [number, number, number, number],
              }}
              style={{ pointerEvents: "none" }}
            />
          );
        })}

        {/* Center node */}
        <motion.g
          onMouseEnter={() => onHover("center")}
          onMouseLeave={onLeave}
          className="cursor-pointer"
        >
          {/* Pulsing ring */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={38}
            className="fill-transparent stroke-deep-blue"
            strokeWidth={1}
            initial={{ opacity: reduced ? 0.2 : 0, r: 38 }}
            animate={
              visible
                ? {
                    opacity: hovered === "center" ? 0.35 : 0.15,
                    r: reduced ? 42 : [38, 48, 38],
                  }
                : { opacity: 0, r: 38 }
            }
            transition={
              !reduced
                ? { opacity: { duration: DURATION.base }, r: { duration: 3, repeat: Infinity, ease: "easeInOut" } }
                : { duration: 0 }
            }
            style={{ pointerEvents: "none" }}
          />
          <motion.circle
            cx={cx}
            cy={cy}
            r={30}
            className="fill-deep-blue"
            initial={{ scale: reduced ? 1 : 0 }}
            animate={visible ? { scale: hovered === "center" ? 1.08 : 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
          <text
            x={cx}
            y={cy + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fontWeight={700}
            fill="white"
            style={{ fontFamily: "var(--font-heading)", pointerEvents: "none" }}
          >
            {centerLabel}
          </text>
        </motion.g>

        {/* Orbit nodes */}
        {orbitNodes.map((node, i) => {
          const nx = cx + Math.cos(((node.angle - 90) * Math.PI) / 180) * radius;
          const ny = cy + Math.sin(((node.angle - 90) * Math.PI) / 180) * radius;
          const isHovered = hovered === node.slug;
          return (
            <motion.g
              key={node.slug}
              onMouseEnter={() => onHover(node.slug)}
              onMouseLeave={onLeave}
              className="cursor-pointer"
            >
              {/* Wider invisible hit area */}
              <circle cx={nx} cy={ny} r={30} className="fill-transparent" />
              <motion.circle
                cx={nx}
                cy={ny}
                r={isHovered ? 24 : 20}
                className={`fill-card ${isHovered ? "stroke-deep-blue" : "stroke-border"}`}
                strokeWidth={isHovered ? 2 : 1}
                initial={{ scale: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
                animate={
                  visible
                    ? { scale: isHovered ? 1.1 : 1, opacity: 1, r: isHovered ? 24 : 20 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  scale: { type: "spring", stiffness: 300, damping: 20, delay: reduced ? 0 : 0.3 + i * 0.07 },
                  opacity: { duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.3 + i * 0.07 },
                  r: { type: "spring", stiffness: 300, damping: 20 },
                }}
              />
              <text
                x={nx}
                y={ny + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight={600}
                className={isHovered ? "fill-deep-blue" : "fill-charcoal"}
                style={{ fontFamily: "var(--font-heading)", pointerEvents: "none" }}
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile vertical list
// ---------------------------------------------------------------------------

function EcosystemList({
  centerLabel,
  orbitNodes,
  oemPartners,
  onHover,
  onLeave,
  reduced,
  visible,
}: {
  centerLabel: string;
  orbitNodes: OrbitNode[];
  oemPartners: ServicePageData["oemPartners"];
  hovered: string | null;
  onHover: (slug: string | null) => void;
  onLeave: () => void;
  reduced: boolean;
  visible: boolean;
}) {
  return (
    <div className="relative flex flex-col gap-0">
      {/* Center header node */}
      <motion.div
        className="flex flex-col items-center pb-6"
        initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: reduced ? 0 : DURATION.hero, ease: EASE_OUT_EXPO as [number, number, number, number] }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-blue text-warm-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="mt-2 text-sm font-semibold font-heading text-charcoal">{centerLabel}</span>
      </motion.div>

      {/* Vertical connector */}
      <div className="mx-auto h-8 w-px bg-border" />

      {/* Orbit nodes stacked vertically with connectors */}
      <div className="flex flex-col gap-0">
        {orbitNodes.map((node, i) => (
          <motion.div
            key={node.slug}
            className="flex flex-col items-center"
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{
              duration: reduced ? 0 : DURATION.base,
              delay: reduced ? 0 : 0.1 + i * 0.06,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            {/* Connector line */}
            <div className="h-6 w-px bg-border" />

            {/* Node */}
            <button
              type="button"
              className="w-full rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-deep-blue/30 focus-visible:outline-2 focus-visible:outline-deep-blue focus-visible:outline-offset-2"
              onMouseEnter={() => onHover(node.slug)}
              onMouseLeave={onLeave}
              onFocus={() => onHover(node.slug)}
              onBlur={onLeave}
            >
              <span className="text-sm font-semibold font-heading text-charcoal">{node.label}</span>
              <span className="ml-2 text-xs text-steel">{node.tagline}</span>
            </button>
          </motion.div>
        ))}

        {/* OEM partners at the bottom */}
        {oemPartners.length > 0 && (
          <>
            <div className="mx-auto h-6 w-px bg-border" />
            <motion.div
              className="pt-2"
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: reduced ? 0 : DURATION.base,
                delay: reduced ? 0 : 0.1 + orbitNodes.length * 0.06,
                ease: EASE_OUT_EXPO as [number, number, number, number],
              }}
            >
              <p className="mb-3 text-center text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                OEM Partners
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {oemPartners.map((p) => (
                  <span
                    key={p.name}
                    className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-charcoal"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tooltip (desktop, positioned below diagram)
// ---------------------------------------------------------------------------

function Tooltip({
  data,
  oemPartners,
  hovered,
  reduced,
}: {
  data: ServicePageData;
  oemPartners: ServicePageData["oemPartners"];
  hovered: string | null;
  reduced: boolean;
}) {
  // Build a map of orbit node labels to expertise descriptions
  // If hovered matches an OEM partner name, show that expertise.
  // Otherwise find it in oemPartners by name.
  const activePartner = hovered ? oemPartners.find((p) => {
    const h = hovered.toLowerCase();
    return p.name.toLowerCase() === h || p.name.toLowerCase().replace(/\s+/g, "-") === h;
  }) : null;

  return (
    <AnimatePresence>
      {hovered && hovered !== "center" && (
        <motion.div
          key={hovered}
          className="absolute bottom-0 left-1/2 z-30 w-[90%] -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-lg lg:w-full lg:max-w-sm"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO as [number, number, number, number] }}
        >
          {activePartner ? (
            <>
              <p className="text-[10px] font-semibold tracking-[0.1em] text-deep-blue uppercase">
                {activePartner.category}
              </p>
              <p className="mt-1 text-sm font-semibold text-charcoal font-heading">
                {activePartner.name}
              </p>
              <p className="mt-1.5 text-sm text-steel leading-relaxed">
                {activePartner.expertise}
              </p>
            </>
          ) : (
            <>
              <p className="text-[10px] font-semibold tracking-[0.1em] text-deep-blue uppercase">
                Related Capability
              </p>
              <p className="mt-1.5 text-sm text-steel leading-relaxed">
                Connects to the {data.slug.replace(/-/g, " ")} stack via shared OEM
                platforms and infrastructure integration.
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export function TechnologyEcosystemSection({ data, serviceSlug }: TechnologyEcosystemSectionProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  // Derive orbit nodes — exclude the current service so it stays as the center
  const orbitNodes = useMemo(
    () => ALL_ORBIT_NODES.filter((n) => n.slug !== serviceSlug),
    [serviceSlug]
  );

  // Build a flat list of unique OEM brand names from solutions for display
  const oemBrandNames = useMemo(() => {
    const seen = new Set<string>();
    const brands: { name: string; expertise: string; category: string }[] = [];
    for (const p of data.oemPartners) {
      if (!seen.has(p.name)) {
        seen.add(p.name);
        brands.push(p);
      }
    }
    return brands;
  }, [data.oemPartners]);

  return (
    <section className="bg-muted/30 py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <motion.div
          className="mb-12 max-w-2xl lg:mb-16"
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReducedMotion ? 0 : DURATION.hero, ease: EASE_OUT_EXPO }}
        >
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            Technology Ecosystem
          </span>
          <h2 className="text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            How the systems connect
          </h2>
        </motion.div>

        {/* Diagram area */}
        <motion.div
          className="relative"
          onViewportEnter={() => setVisible(true)}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Desktop: SVG orbital diagram */}
          <div className="hidden lg:block">
            <EcosystemDiagram
              centerLabel={data.slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
                .split(" ")
                .slice(0, 2)
                .join(" ")}
              orbitNodes={orbitNodes}
              hovered={hovered}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
              reduced={!!prefersReducedMotion}
              visible={visible}
            />

            {/* OEM brand pills below diagram */}
            {oemBrandNames.length > 0 && (
              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-2"
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : DURATION.base,
                  delay: prefersReducedMotion ? 0 : 1,
                  ease: EASE_OUT_EXPO as [number, number, number, number],
                }}
              >
                <span className="mr-1 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
                  OEM Partners
                </span>
                {oemBrandNames.map((p) => (
                  <span
                    key={p.name}
                    className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-charcoal"
                  >
                    {p.name}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Tooltip overlay */}
            <Tooltip
              data={data}
              oemPartners={oemBrandNames}
              hovered={hovered}
              reduced={!!prefersReducedMotion}
            />
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden">
            <EcosystemList
              centerLabel={data.slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
                .split(" ")
                .slice(0, 2)
                .join(" ")}
              orbitNodes={orbitNodes}
              oemPartners={oemBrandNames}
              hovered={hovered}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
              reduced={!!prefersReducedMotion}
              visible={visible}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}