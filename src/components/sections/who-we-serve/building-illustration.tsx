"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

export type SegmentSlug = "enterprises" | "hotels" | "government" | "residential" | "soho";

interface BuildingIllustrationProps {
  onHover?: (slug: SegmentSlug | null) => void;
}

/* ─────────── color tokens (hardcoded hex for SVG attrs) ─────────── */
const ORANGE = "#F97316";
const ORANGE_DARK = "#EA580C";
const CHARCOAL = "#1E293B";
const STEEL = "#64748B";
const BORDER_GRAY = "#E2E8F0";
const WHITE = "#FFFFFF";

/* ─────────── segment data ─────────── */
interface Segment {
  slug: SegmentSlug;
  label: string;
  cx: number;   // center of building card
  cy: number;
  w: number;
  h: number;
  iconPaths: string[]; // tiny SVG path d-strings for tech icons
}

const SEGMENTS: Segment[] = [
  {
    slug: "enterprises",
    label: "Enterprise",
    cx: 300, cy: 52,
    w: 130, h: 68,
    iconPaths: [
      // network rack
      "M-7,-8 h14 v16 h-14z M-5,-5 h10 M-5,-1 h10 M-5,3 h10 M-5,7 h10",
      // VoIP phone
      "M-4,-8 h8 v12 a2,2 0 0,1-8,0z M-2,4 h4 v3 a1,1 0 0,1-4,0z",
      // meeting display
      "M-8,-6 h16 v10 h-16z M0,4 v4 M-3,8 h6",
    ],
  },
  {
    slug: "government",
    label: "Government",
    cx: 72, cy: 240,
    w: 120, h: 68,
    iconPaths: [
      // access control
      "M0,-8 v6 M-6,0 a6,6 0 1,0 12,0 M-4,-2 h8 M-2,0 h4",
      // surveillance
      "M-7,-4 h10 l-3,8 h-4z M7,-4 v2 M7,-2 a2,2 0 1,1 0,0",
      // networking
      "M0,-7 h3 l3,3 l-3,3 h-3z M-3,0 h3 M-6,0 h3",
    ],
  },
  {
    slug: "hotels",
    label: "Hotels",
    cx: 528, cy: 240,
    w: 120, h: 68,
    iconPaths: [
      // TV
      "M-7,-5 h14 v9 h-14z M-2,4 v2 M2,4 v2 M-4,6 h8",
      // WiFi
      "M-6,-6 a8,8 0 0,1 12,0 M-3,-3 a4,4 0 0,1 6,0 M0,1 a1.5,1.5 0 1,0 0,0.01",
      // CCTV
      "M-5,-5 h8 a2,2 0 0,1 2,2 v4 a2,2 0 0,1-2,2 h-8 a2,2 0 0,1-2,-2 v-4 a2,2 0 0,1 2,-2z M3,-2 h3 l1,3",
    ],
  },
  {
    slug: "residential",
    label: "Residential",
    cx: 138, cy: 420,
    w: 120, h: 68,
    iconPaths: [
      // WiFi router
      "M-7,-3 h14 v8 h-14z M-2,5 v3 M2,5 v3 M-3,8 h6 M-1,-7 a4,4 0 0,1 0,3 M1,-7 a4,4 0 0,0 0,3",
      // smart home
      "M-7,-3 a7,5 0 0,1 14,0 v6 h-14z M-2,3 a2,2 0 1,0 4,0 M0,-7 v-2",
      // CCTV
      "M-5,-5 h8 a2,2 0 0,1 2,2 v4 a2,2 0 0,1-2,2 h-8 a2,2 0 0,1-2,-2 v-4 a2,2 0 0,1 2,-2z",
    ],
  },
  {
    slug: "soho",
    label: "SOHO",
    cx: 462, cy: 420,
    w: 110, h: 68,
    iconPaths: [
      // laptop
      "M-8,-4 h16 v10 h-16z M-10,6 h20 v2 h-20z M-1,-2 h2 v4 h-2z",
      // router
      "M-7,-2 h14 v6 h-14z M-2,4 v2 M2,4 v2 M-5,0 a1,1 0 1,0 0,0.01 M-1,0 a1,1 0 1,0 0,0.01 M3,0 a1,1 0 1,0 0,0.01",
      // IP phone
      "M-4,-8 h8 v12 a2,2 0 0,1-8,0z M-2,4 h4 v3 a1,1 0 0,1-4,0z M-1,-5 h2 M-1,-3 h2",
    ],
  },
];

const CENTER = { cx: 300, cy: 248 };

/* ─────────── curved connection paths ─────────── */
function getConnectionPath(to: Segment): string {
  const dx = to.cx - CENTER.cx;
  const dy = to.cy - CENTER.cy;
  const mx = CENTER.cx + dx * 0.5 + dy * 0.15;  // slight curve offset
  const my = CENTER.cy + dy * 0.5 - dx * 0.15;
  return `M ${CENTER.cx} ${CENTER.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`;
}

/* ─────────── pulse dot traveling along a path ─────────── */
function PulseDot({ path, delay, isActive }: { path: string; delay: number; isActive: boolean }) {
  return (
    <motion.circle r={isActive ? 3 : 2} fill={ORANGE}>
      <animateMotion dur={isActive ? "2s" : "4s"} begin={`${delay}s`} repeatCount="indefinite" path={path} />
      <animate
        attributeName="opacity"
        values={isActive ? "1;0.4;1" : "0.3;0.1;0.3"}
        dur={isActive ? "2s" : "4s"}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </motion.circle>
  );
}

/* ─────────── single building card ─────────── */
function BuildingCard({
  segment,
  isHovered,
  onHover,
}: {
  segment: Segment;
  isHovered: boolean;
  onHover: (slug: SegmentSlug | null) => void;
}) {
  const x = segment.cx - segment.w / 2;
  const y = segment.cy - segment.h / 2;

  return (
    <motion.g
      onMouseEnter={() => onHover(segment.slug)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: "pointer" }}
    >
      {/* invisible wider hit area */}
      <rect
        x={x - 12}
        y={y - 12}
        width={segment.w + 24}
        height={segment.h + 24}
        fill="transparent"
      />

      {/* card body with lift on hover */}
      <motion.rect
        x={x}
        y={y}
        width={segment.w}
        height={segment.h}
        rx={12}
        fill={WHITE}
        stroke={BORDER_GRAY}
        strokeWidth={1}
        animate={isHovered
          ? { y: y - 8, stroke: ORANGE, filter: "drop-shadow(0 8px 24px rgba(249,115,22,0.15))" }
          : { y, stroke: BORDER_GRAY, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.04))" }
        }
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />

      {/* orange accent top bar on hover */}
      <motion.rect
        x={x + 16}
        y={y}
        width={segment.w - 32}
        height={2.5}
        rx={1.25}
        fill={ORANGE}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: `${segment.cx}px ${y}px` }}
      />

      {/* building silhouette — simple isometric-ish building outline */}
      <g opacity={isHovered ? 0.06 : 0.04} transform={`translate(${segment.cx}, ${segment.cy + 6})`}>
        <rect x={-20} y={-18} width={40} height={28} rx={3} fill={CHARCOAL} />
        <rect x={-16} y={10} width={32} height={3} rx={1.5} fill={CHARCOAL} />
        {/* tiny windows */}
        {[-12, -4, 4].map((wx) =>
          [-14, -7, 0].map((wy) => (
            <rect key={`${wx}-${wy}`} x={wx} y={wy} width={6} height={4} rx={1} fill={WHITE} />
          ))
        )}
      </g>

      {/* tech icons — appear on hover */}
      <g>
        {segment.iconPaths.map((d, i) => {
          const iconX = segment.cx + (i - 1) * 22;
          const iconY = segment.cy - 2;
          return (
            <motion.g
              key={i}
              transform={`translate(${iconX}, ${iconY})`}
              animate={isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 6 }
              }
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <g
                stroke={ORANGE}
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                transform="scale(0.9)"
              >
                <path d={d} />
              </g>
            </motion.g>
          );
        })}
      </g>

      {/* label */}
      <motion.text
        x={segment.cx}
        y={y - 10}
        textAnchor="middle"
        fill={isHovered ? ORANGE_DARK : STEEL}
        fontSize={11}
        fontWeight={600}
        fontFamily="var(--font-heading, system-ui)"
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: "none" }}
      >
        {segment.label}
      </motion.text>
    </motion.g>
  );
}

/* ─────────── idle floating animation keyframes (applied per-building) ─────────── */
const floatVariants = {
  idle: (i: number) => ({
    y: [0, -3, 0],
    transition: {
      duration: 4 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.3,
    },
  }),
};

/* ─────────── main illustration ─────────── */
export function BuildingIllustration({ onHover }: BuildingIllustrationProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hovered, setHovered] = useState<SegmentSlug | null>(null);

  const handleHover = useCallback(
    (slug: SegmentSlug | null) => {
      setHovered(slug);
      onHover?.(slug);
    },
    [onHover]
  );

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Interactive illustration showing IBS connecting technology ecosystems across five industry segments"
      role="img"
    >
      <defs>
        {/* subtle radial glow behind center */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity={0.06} />
          <stop offset="100%" stopColor={ORANGE} stopOpacity={0} />
        </radialGradient>
        {/* orange glow filter for hovered connections */}
        <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={3} />
        </filter>
      </defs>

      {/* subtle background dot grid */}
      <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="0.6" fill={BORDER_GRAY} />
      </pattern>
      <rect width="600" height="500" fill="url(#dotGrid)" opacity={0.5} />

      {/* center glow */}
      <circle cx={CENTER.cx} cy={CENTER.cy} r={120} fill="url(#centerGlow)" />

      {/* ── connection lines ── */}
      {SEGMENTS.map((seg, i) => {
        const path = getConnectionPath(seg);
        const isActive = hovered === seg.slug;
        return (
          <g key={`conn-${seg.slug}`}>
            {/* base line */}
            <path
              d={path}
              fill="none"
              stroke={isActive ? ORANGE : BORDER_GRAY}
              strokeWidth={isActive ? 1.5 : 1}
              strokeDasharray={isActive ? "none" : "4 4"}
              opacity={isActive ? 1 : 0.6}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s, opacity 0.3s" }}
            />
            {/* glow line on hover */}
            <motion.path
              d={path}
              fill="none"
              stroke={ORANGE}
              strokeWidth={4}
              filter="url(#orangeGlow)"
              animate={{ opacity: isActive ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* pulse dot */}
            <PulseDot path={path} delay={i * 0.8} isActive={isActive} />
          </g>
        );
      })}

      {/* ── center IBS node ── */}
      <motion.g
        animate={
          hovered
            ? { scale: 1.05 }
            : { scale: [1, 1.02, 1] }
        }
        transition={
          hovered
            ? { type: "spring", stiffness: 300, damping: 20 }
            : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
        style={{ transformOrigin: `${CENTER.cx}px ${CENTER.cy}px` }}
      >
        {/* outer ring */}
        <circle
          cx={CENTER.cx}
          cy={CENTER.cy}
          r={42}
          fill="none"
          stroke={hovered ? ORANGE : BORDER_GRAY}
          strokeWidth={1.5}
          strokeDasharray={hovered ? "none" : "3 3"}
          style={{ transition: "stroke 0.3s" }}
        />
        {/* inner circle */}
        <circle
          cx={CENTER.cx}
          cy={CENTER.cy}
          r={36}
          fill={WHITE}
          stroke={hovered ? ORANGE : BORDER_GRAY}
          strokeWidth={1}
          style={{ transition: "stroke 0.3s" }}
        />
        {/* IBS text */}
        <text
          x={CENTER.cx}
          y={CENTER.cy - 4}
          textAnchor="middle"
          dominantBaseline="central"
          fill={CHARCOAL}
          fontSize={22}
          fontWeight={700}
          fontFamily="var(--font-heading, system-ui)"
          letterSpacing="0.08em"
        >
          IBS
        </text>
        {/* small tagline */}
        <text
          x={CENTER.cx}
          y={CENTER.cy + 14}
          textAnchor="middle"
          fill={STEEL}
          fontSize={6.5}
          fontWeight={500}
          fontFamily="var(--font-heading, system-ui)"
          letterSpacing="0.12em"
        >
          INTEGRATED SYSTEMS
        </text>
      </motion.g>

      {/* ── building cards ── */}
      {SEGMENTS.map((seg, i) => (
        <motion.g
          key={seg.slug}
          custom={i}
          animate={hovered === seg.slug ? {} : floatVariants.idle(i)}
        >
          <BuildingCard
            segment={seg}
            isHovered={hovered === seg.slug}
            onHover={handleHover}
          />
        </motion.g>
      ))}

      {/* ── decorative orbit rings (very subtle) ── */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={95}
        fill="none"
        stroke={BORDER_GRAY}
        strokeWidth={0.5}
        strokeDasharray="2 6"
        opacity={0.4}
      />
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={190}
        fill="none"
        stroke={BORDER_GRAY}
        strokeWidth={0.5}
        strokeDasharray="2 8"
        opacity={0.25}
      />
    </motion.svg>
  );
}