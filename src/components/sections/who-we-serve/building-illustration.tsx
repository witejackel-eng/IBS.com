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
const LIGHT_BG = "#F8FAFC";

/* ─────────── segment data ─────────── */
interface Segment {
  slug: SegmentSlug;
  label: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  buildingType: "tower" | "hotel" | "government" | "house" | "office";
  iconPaths: string[];
}

const SEGMENTS: Segment[] = [
  {
    slug: "enterprises",
    label: "Enterprise",
    cx: 300, cy: 48,
    w: 140, h: 78,
    buildingType: "tower",
    iconPaths: [
      // server rack
      "M-8,-9 h16 v18 h-16z M-6,-6 h12 M-6,-2 h12 M-6,2 h12 M-6,6 h12",
      // VoIP phone
      "M-4,-8 h8 v12 a2,2 0 0,1-8,0z M-2,4 h4 v3 a1,1 0 0,1-4,0z",
      // meeting display
      "M-9,-6 h18 v11 h-18z M0,5 v4 M-3,9 h6",
    ],
  },
  {
    slug: "government",
    label: "Government",
    cx: 62, cy: 230,
    w: 130, h: 74,
    buildingType: "government",
    iconPaths: [
      // access control reader
      "M-6,-6 v8 a6,6 0 1,0 12,0 v-8z M-2,-2 h4 M-1,2 h2 M0,6 v2 M6,6 h6",
      // CCTV camera
      "M-4,-6 h6 l2,6 h-10z M8,-4 v2 a2,2 0 1,1 0,0",
      // document/shield
      "M-6,-5 h12 v10 h-12z M-3,-2 h6 M-3,1 h6 M-3,4 h4",
    ],
  },
  {
    slug: "hotels",
    label: "Hotels & Hospitals",
    cx: 538, cy: 230,
    w: 130, h: 74,
    buildingType: "hotel",
    iconPaths: [
      // display/TV
      "M-8,-5 h16 v10 h-16z M-2,5 v2 M2,5 v2 M-4,7 h8",
      // WiFi signal
      "M-6,-6 a8,8 0 0,1 12,0 M-3,-3 a4,4 0 0,1 6,0 M0,1 a1.5,1.5 0 1,0 0,0.01",
      // medical cross
      "M0,-7 v14 M-7,0 h14",
    ],
  },
  {
    slug: "residential",
    label: "Residential",
    cx: 128, cy: 420,
    w: 130, h: 74,
    buildingType: "house",
    iconPaths: [
      // WiFi router
      "M-7,-3 h14 v8 h-14z M-2,5 v3 M2,5 v3 M-3,8 h6 M-1,-7 a4,4 0 0,1 0,3 M1,-7 a4,4 0 0,0 0,3",
      // smart home app
      "M-6,-5 a7,5 0 0,1 14,0 v6 h-14z M-2,3 a2,2 0 1,0 4,0 M0,-7 v-2",
      // lock
      "M-4,-2 a4,5 0 0,1 8,0 v6 h-8z M-2,4 a2,2 0 1,0 4,0",
    ],
  },
  {
    slug: "soho",
    label: "SOHO",
    cx: 472, cy: 420,
    w: 120, h: 74,
    buildingType: "office",
    iconPaths: [
      // laptop
      "M-9,-4 h18 v11 h-18z M-11,7 h22 v2 h-22z M-1,-2 h2 v5 h-2z",
      // network switch
      "M-8,-2 h16 v6 h-16z M-5,0 a1,1 0 1,0 0,0.01 M-1,0 a1,1 0 1,0 0,0.01 M3,0 a1,1 0 1,0 0,0.01 M-3,4 v2 M1,4 v2 M5,4 v2",
      // IP phone
      "M-4,-8 h8 v12 a2,2 0 0,1-8,0z M-2,4 h4 v3 a1,1 0 0,1-4,0z M-1,-5 h2 M-1,-3 h2",
    ],
  },
];

const CENTER = { cx: 300, cy: 248 };

/* ─────────── building shape renderers ─────────── */
function BuildingShape({ type, x, y, w, h, isHovered }: { type: Segment["buildingType"]; x: number; y: number; w: number; h: number; isHovered: boolean }) {
  switch (type) {
    case "tower":
      return (
        <g opacity={isHovered ? 0.08 : 0.05} transform={`translate(${x + w / 2}, ${y + h - 8})`}>
          <rect x={-24} y={-30} width={48} height={38} rx={3} fill={CHARCOAL} />
          <rect x={-20} y={-8} width={40} height={3} rx={1.5} fill={CHARCOAL} />
          {/* windows grid */}
          {[-16, -8, 0, 8].map((wx) =>
            [-26, -19, -12].map((wy) => (
              <rect key={`${wx}-${wy}`} x={wx} y={wy} width={5} height={3.5} rx={0.8} fill={WHITE} />
            ))
          )}
          {/* antenna */}
          <line x1={0} y1={-30} x2={0} y2={-36} stroke={CHARCOAL} strokeWidth={1.2} />
          <circle cx={0} cy={-37} r={1.5} fill={CHARCOAL} />
        </g>
      );
    case "government":
      return (
        <g opacity={isHovered ? 0.08 : 0.05} transform={`translate(${x + w / 2}, ${y + h - 6})`}>
          {/* main building body */}
          <rect x={-26} y={-28} width={52} height={34} rx={2} fill={CHARCOAL} />
          {/* pediment/triangle roof */}
          <path d="M-30,-28 L0,-40 L30,-28 Z" fill={CHARCOAL} />
          {/* columns */}
          {[-18, 0, 18].map((cx) => (
            <rect key={cx} x={cx - 2} y={-26} width={4} height={26} rx={1} fill={WHITE} opacity={0.7} />
          ))}
          {/* steps */}
          <rect x={-28} y={6} width={56} height={4} rx={1} fill={CHARCOAL} />
          {/* flagpole */}
          <line x1={24} y1={-40} x2={24} y2={-50} stroke={CHARCOAL} strokeWidth={0.8} />
          <rect x={24} y={-50} width={8} height={5} rx={0.5} fill={ORANGE} opacity={0.6} />
          {/* windows */}
          {[-12, 0, 12].map((wx) =>
            [-22, -14].map((wy) => (
              <rect key={`${wx}-${wy}`} x={wx - 3} y={wy} width={6} height={4} rx={0.8} fill={WHITE} />
            ))
          )}
        </g>
      );
    case "hotel":
      return (
        <g opacity={isHovered ? 0.08 : 0.05} transform={`translate(${x + w / 2}, ${y + h - 6})`}>
          <rect x={-24} y={-30} width={48} height={36} rx={3} fill={CHARCOAL} />
          {/* entrance arch */}
          <path d="M-8,6 Q0,-2 8,6" fill="none" stroke={WHITE} strokeWidth={1.5} opacity={0.6} />
          {/* windows */}
          {[-16, -6, 4, 16].map((wx) =>
            [-26, -18, -10].map((wy) => (
              <rect key={`${wx}-${wy}`} x={wx - 3} y={wy} width={6} height={4} rx={0.8} fill={WHITE} />
            ))
          )}
          {/* rooftop antenna */}
          <line x1={-10} y1={-30} x2={-10} y2={-36} stroke={CHARCOAL} strokeWidth={0.8} />
          <line x1={12} y1={-30} x2={12} y2={-34} stroke={CHARCOAL} strokeWidth={0.8} />
        </g>
      );
    case "house":
      return (
        <g opacity={isHovered ? 0.08 : 0.05} transform={`translate(${x + w / 2}, ${y + h - 6})`}>
          {/* pitched roof */}
          <path d="M-26,-8 L0,-28 L26,-8 Z" fill={CHARCOAL} />
          {/* house body */}
          <rect x={-22} y={-8} width={44} height={22} rx={2} fill={CHARCOAL} />
          {/* door */}
          <rect x={-4} y={-2} width={8} height={14} rx={4} fill={WHITE} opacity={0.5} />
          {/* windows */}
          <rect x={-16} y={-4} width={7} height={5} rx={1} fill={WHITE} />
          <rect x={9} y={-4} width={7} height={5} rx={1} fill={WHITE} />
          {/* chimney */}
          <rect x={14} y={-20} width={5} height={12} rx={1} fill={CHARCOAL} />
        </g>
      );
    case "office":
      return (
        <g opacity={isHovered ? 0.08 : 0.05} transform={`translate(${x + w / 2}, ${y + h - 6})`}>
          <rect x={-20} y={-24} width={40} height={30} rx={2} fill={CHARCOAL} />
          {/* desk */}
          <rect x={-14} y={2} width={28} height={3} rx={1} fill={CHARCOAL} />
          {/* monitor */}
          <rect x={-8} y={-16} width={16} height={10} rx={1.5} fill={WHITE} opacity={0.5} />
          {/* small window grid */}
          {[-10, 2].map((wx) =>
            [-20, -12].map((wy) => (
              <rect key={`${wx}-${wy}`} x={wx - 3} y={wy} width={6} height={3.5} rx={0.8} fill={WHITE} />
            ))
          )}
        </g>
      );
  }
}

/* ─────────── curved connection paths ─────────── */
function getConnectionPath(to: Segment): string {
  const dx = to.cx - CENTER.cx;
  const dy = to.cy - CENTER.cy;
  const mx = CENTER.cx + dx * 0.5 + dy * 0.15;
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

/* ─────────── floating tech icon (between segments) ─────────── */
function FloatingIcon({ cx, cy, path, delay }: { cx: number; cy: number; path: string; delay: number }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3, y: [0, -3, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 4 + delay * 0.3, repeat: Infinity, ease: "easeInOut" as const, delay },
      }}
    >
      <circle cx={cx} cy={cy} r={12} fill={LIGHT_BG} stroke={BORDER_GRAY} strokeWidth={0.8} />
      <g transform={`translate(${cx}, ${cy})`} stroke={STEEL} strokeWidth={0.9} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d={path} transform="scale(0.7)" />
      </g>
    </motion.g>
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
        rx={14}
        fill={WHITE}
        stroke={BORDER_GRAY}
        strokeWidth={1}
        animate={isHovered ? { y: Number(y) - 8, stroke: ORANGE } : { y: Number(y), stroke: BORDER_GRAY }}
        transition={{ stiffness: 300, damping: 24 }}
      />

      {/* orange accent top bar on hover */}
      <motion.rect
        x={x + 18}
        y={y}
        width={segment.w - 36}
        height={2.5}
        rx={1.25}
        fill={ORANGE}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: `${segment.cx}px ${y}px` }}
      />

      {/* building silhouette */}
      <BuildingShape
        type={segment.buildingType}
        x={x}
        y={y}
        w={segment.w}
        h={segment.h}
        isHovered={isHovered}
      />

      {/* tech icons — appear on hover */}
      <g>
        {segment.iconPaths.map((d, i) => {
          const iconX = segment.cx + (i - 1) * 24;
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
                transform="scale(0.95)"
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

/* ─────────── idle floating animation keyframes ─────────── */
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
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity={0.07} />
          <stop offset="100%" stopColor={ORANGE} stopOpacity={0} />
        </radialGradient>
        <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={3} />
        </filter>
      </defs>

      {/* background dot grid */}
      <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="0.6" fill={BORDER_GRAY} />
      </pattern>
      <rect width="600" height="500" fill="url(#dotGrid)" opacity={0.5} />

      {/* center glow */}
      <circle cx={CENTER.cx} cy={CENTER.cy} r={130} fill="url(#centerGlow)" />

      {/* ── floating tech icons between segments ── */}
      <FloatingIcon cx={185} cy={140} path="M-5,-5 h10 v10 h-10z M-1,-2 v4" delay={0} />
      <FloatingIcon cx={415} cy={140} path="M-6,-6 a8,8 0 0,1 12,0 M-3,-3 a4,4 0 0,1 6,0 M0,1 a1.5,1.5 0 1,0 0,0.01" delay={1} />
      <FloatingIcon cx={95} cy={340} path="M-4,-6 h8 l2,8 h-12z M6,-2 v2 a2,2 0 1,1 0,0" delay={2} />
      <FloatingIcon cx={505} cy={340} path="M-8,-4 h16 v10 h-16z M-2,6 v2 M2,6 v2 M-4,8 h8" delay={3} />
      <FloatingIcon cx={300} cy={380} path="M-6,-2 h12 v6 h-12z M-2,4 v2 M2,4 v2" delay={4} />

      {/* ── connection lines ── */}
      {SEGMENTS.map((seg, i) => {
        const path = getConnectionPath(seg);
        const isActive = hovered === seg.slug;
        return (
          <g key={`conn-${seg.slug}`}>
            <path
              d={path}
              fill="none"
              stroke={isActive ? ORANGE : BORDER_GRAY}
              strokeWidth={isActive ? 1.5 : 0.8}
              strokeDasharray={isActive ? "none" : "4 4"}
              opacity={isActive ? 1 : 0.5}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s, opacity 0.3s" }}
            />
            <motion.path
              d={path}
              fill="none"
              stroke={ORANGE}
              strokeWidth={4}
              filter="url(#orangeGlow)"
              animate={{ opacity: isActive ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />
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
        <circle
          cx={CENTER.cx}
          cy={CENTER.cy}
          r={44}
          fill="none"
          stroke={hovered ? ORANGE : BORDER_GRAY}
          strokeWidth={1.5}
          strokeDasharray={hovered ? "none" : "3 3"}
          style={{ transition: "stroke 0.3s" }}
        />
        <circle
          cx={CENTER.cx}
          cy={CENTER.cy}
          r={38}
          fill={WHITE}
          stroke={hovered ? ORANGE : BORDER_GRAY}
          strokeWidth={1}
          style={{ transition: "stroke 0.3s" }}
        />
        <text
          x={CENTER.cx}
          y={CENTER.cy - 4}
          textAnchor="middle"
          dominantBaseline="central"
          fill={CHARCOAL}
          fontSize={24}
          fontWeight={700}
          fontFamily="var(--font-heading, system-ui)"
          letterSpacing="0.08em"
        >
          IBS
        </text>
        <text
          x={CENTER.cx}
          y={CENTER.cy + 15}
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

      {/* ── decorative orbit rings ── */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={100}
        fill="none"
        stroke={BORDER_GRAY}
        strokeWidth={0.5}
        strokeDasharray="2 6"
        opacity={0.4}
      />
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={195}
        fill="none"
        stroke={BORDER_GRAY}
        strokeWidth={0.5}
        strokeDasharray="2 8"
        opacity={0.25}
      />
    </motion.svg>
  );
}