"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export type SegmentSlug = "enterprises" | "hotels" | "government" | "residential" | "soho";

interface BuildingIllustrationProps {
  onHover?: (slug: SegmentSlug | null) => void;
}

/* ═══════════════════════════════════════════════════════════════
   COLOR TOKENS — hardcoded hex for SVG attribute compatibility
   ═══════════════════════════════════════════════════════════════ */
const ORANGE = "#F97316";
const ORANGE_LIGHT = "#FB923C";
const ORANGE_DARK = "#EA580C";
const CHARCOAL = "#1E293B";
const CHARCOAL_MID = "#334155";
const STEEL = "#64748B";
const STEEL_LIGHT = "#94A3B8";
const BORDER = "#CBD5E1";
const BG_CARD = "#F1F5F9";
const WHITE = "#FFFFFF";

/* ═══════════════════════════════════════════════════════════════
   SEGMENT DATA — positions in 800×620 viewBox
   Pentagon layout: top, upper-right, lower-right, lower-left, upper-left
   ═══════════════════════════════════════════════════════════════ */
interface Segment {
  slug: SegmentSlug;
  label: string;
  cx: number;
  cy: number;
}

const SEGMENTS: Segment[] = [
  { slug: "enterprises",      label: "Enterprise",        cx: 400, cy: 72  },
  { slug: "hotels",           label: "Hotels & Hospitals", cx: 648, cy: 278 },
  { slug: "soho",             label: "SOHO",              cx: 560, cy: 520 },
  { slug: "residential",      label: "Residential",        cx: 240, cy: 520 },
  { slug: "government",       label: "Government",         cx: 152, cy: 278 },
];

const CENTER = { cx: 400, cy: 300 };
const CARD_W = 164;
const CARD_H = 116;
const CARD_R = 16;

/* ═══════════════════════════════════════════════════════════════
   TECHNOLOGY ICONS ALONG CONNECTIONS
   Each has a position (midpoint of connection), SVG path, and label
   ═══════════════════════════════════════════════════════════════ */
interface TechIcon {
  cx: number;
  cy: number;
  d: string;
  label: string;
  delay: number;
}

const TECH_ICONS: TechIcon[] = [
  // Between Enterprise and center (network)
  { cx: 420, cy: 178, d: "M-6,-2 h12 v8 h-12z M-3,1 h2 M1,1 h2 M-3,4 h2 M1,4 h2", label: "Network", delay: 0 },
  // Between Government and center (CCTV)
  { cx: 248, cy: 276, d: "M-5,-5 h6 l3,7 h-12z M7,-3 v2 a2,2 0 1,1 0,0", label: "CCTV", delay: 1.2 },
  // Between Hotels and center (WiFi)
  { cx: 552, cy: 276, d: "M-8,-4 a10,10 0 0,1 16,0 M-4,-1 a6,6 0 0,1 8,0 M0,3 a2,2 0 1,0 0,0.01", label: "WiFi", delay: 0.6 },
  // Between Residential and center (access control)
  { cx: 316, cy: 424, d: "M-4,-6 v5 a4,4 0 0,0 8,0 v-5z M-2,-1 h4 M-1,2 h2 M0,6 v2", label: "Access", delay: 1.8 },
  // Between SOHO and center (voice)
  { cx: 496, cy: 418, d: "M-4,-7 a6,3 0 0,1 8,0 v4 a6,3 0 0,1-8,0z M-1,3 v2 a3,2 0 0,0 2,0 v-2", label: "Voice", delay: 0.3 },
  // Between Enterprise and Hotels (AV)
  { cx: 555, cy: 158, d: "M-8,-5 h16 v10 h-16z M0,5 v3 M-3,8 h6", label: "AV", delay: 2.1 },
  // Between Government and Residential (firewall)
  { cx: 168, cy: 410, d: "M0,-7 l7,4 v6 l-7,4 l-7,-4 v-6z M-2,-1 h4 M-2,2 h4", label: "Firewall", delay: 0.9 },
  // Between SOHO and Hotels (server)
  { cx: 628, cy: 408, d: "M-6,-8 h12 v16 h-12z M-4,-5 h8 M-4,-1 h8 M-4,3 h8", label: "Server", delay: 1.5 },
  // Between Enterprise and Government (cloud)
  { cx: 256, cy: 150, d: "M-8,2 a5,5 0 0,1 0.5,-9 a6,4 0 0,1 11,0 a5,5 0 0,1 0.5,9z", label: "Cloud", delay: 2.4 },
];

/* ═══════════════════════════════════════════════════════════════
   BUILDING ILLUSTRATIONS — detailed, always-visible at ~0.35 opacity
   ═══════════════════════════════════════════════════════════════ */

function EnterpriseBuilding() {
  return (
    <g>
      {/* Main tower */}
      <rect x={-28} y={-42} width={56} height={48} rx={3} fill={CHARCOAL} />
      {/* Floor separator lines */}
      <line x1={-28} y1={-26} x2={28} y2={-26} stroke={BG_CARD} strokeWidth={0.8} />
      <line x1={-28} y1={-10} x2={28} y2={-10} stroke={BG_CARD} strokeWidth={0.8} />
      {/* Window grid */}
      {[-20, -8, 4, 16].map((wx) =>
        [-38, -32, -20, -16, -4, 2].map((wy) => (
          <rect key={`${wx}-${wy}`} x={wx} y={wy} width={7} height={4.5} rx={1} fill={WHITE} opacity={0.85} />
        ))
      )}
      {/* Entrance */}
      <rect x={-6} y={6} width={12} height={8} rx={2} fill={BG_CARD} opacity={0.6} />
      {/* Antenna */}
      <line x1={0} y1={-42} x2={0} y2={-50} stroke={CHARCOAL} strokeWidth={1.5} />
      <circle cx={0} cy={-51} r={2} fill={ORANGE} />
      {/* Side wing (meeting room) */}
      <rect x={30} y={-20} width={18} height={26} rx={2} fill={CHARCOAL_MID} />
      {[-16, -8].map((wy) => (
        <rect key={wy} x={34} y={wy} width={5} height={4} rx={0.8} fill={WHITE} opacity={0.7} />
      ))}
    </g>
  );
}

function HotelHospitalBuilding() {
  return (
    <g>
      {/* Main building */}
      <rect x={-30} y={-38} width={60} height={46} rx={3} fill={CHARCOAL} />
      {/* Floor separators */}
      <line x1={-30} y1={-22} x2={30} y2={-22} stroke={BG_CARD} strokeWidth={0.8} />
      <line x1={-30} y1={-6} x2={30} y2={-6} stroke={BG_CARD} strokeWidth={0.8} />
      {/* Window grid */}
      {[-22, -10, 2, 14, 22].map((wx) =>
        [-34, -28, -16, -12, 0, -2].map((wy) => (
          <rect key={`${wx}-${wy}`} x={wx} y={wy} width={6} height={4} rx={0.8} fill={WHITE} opacity={0.85} />
        ))
      )}
      {/* Entrance canopy */}
      <path d="M-10,8 L0,2 L10,8" fill="none" stroke={BG_CARD} strokeWidth={1.2} />
      {/* Medical cross (top right) */}
      <rect x={18} y={-48} width={3} height={10} rx={1} fill={ORANGE} />
      <rect x={14.5} y={-45.5} width={10} height={3} rx={1} fill={ORANGE} />
      {/* Rooftop equipment */}
      <rect x={-20} y={-44} width={8} height={6} rx={1} fill={CHARCOAL_MID} />
      <rect x={-18} y={-42} width={4} height={2} rx={0.5} fill={ORANGE} opacity={0.6} />
    </g>
  );
}

function GovernmentBuilding() {
  return (
    <g>
      {/* Pediment / triangle roof */}
      <path d="M-34,-18 L0,-34 L34,-18 Z" fill={CHARCOAL} />
      {/* Main building body */}
      <rect x={-30} y={-18} width={60} height={30} rx={2} fill={CHARCOAL} />
      {/* Columns */}
      {[-18, -6, 6, 18].map((cx) => (
        <rect key={cx} x={cx - 2.5} y={-16} width={5} height={28} rx={1.2} fill={BG_CARD} opacity={0.5} />
      ))}
      {/* Steps */}
      <rect x={-34} y={12} width={68} height={4} rx={1} fill={CHARCOAL} />
      <rect x={-30} y={8} width={60} height={4} rx={1} fill={CHARCOAL_MID} />
      {/* Windows between columns */}
      {[-12, 0, 12].map((wx) =>
        [-12, -4].map((wy) => (
          <rect key={`${wx}-${wy}`} x={wx - 3} y={wy} width={6} height={4} rx={0.8} fill={WHITE} opacity={0.7} />
        ))
      )}
      {/* Flagpole */}
      <line x1={26} y1={-34} x2={26} y2={-46} stroke={CHARCOAL} strokeWidth={1} />
      <rect x={26} y={-46} width={8} height={5} rx={0.5} fill={ORANGE} opacity={0.8} />
      {/* Security gate indicator */}
      <rect x={-8} y={14} width={16} height={3} rx={1} fill={ORANGE} opacity={0.5} />
    </g>
  );
}

function ResidentialBuilding() {
  return (
    <g>
      {/* Pitched roof */}
      <path d="M-30,-4 L0,-28 L30,-4 Z" fill={CHARCOAL} />
      {/* Chimney */}
      <rect x={16} y={-24} width={6} height={14} rx={1} fill={CHARCOAL_MID} />
      {/* House body */}
      <rect x={-26} y={-4} width={52} height={24} rx={2} fill={CHARCOAL} />
      {/* Door */}
      <rect x={-5} y={4} width={10} height={16} rx={5} fill={BG_CARD} opacity={0.5} />
      <circle cx={3} cy={12} r={1.2} fill={ORANGE} opacity={0.7} />
      {/* Windows */}
      <rect x={-20} y={0} width={10} height={8} rx={1.5} fill={WHITE} opacity={0.8} />
      <rect x={10} y={0} width={10} height={8} rx={1.5} fill={WHITE} opacity={0.8} />
      {/* WiFi indicator */}
      <path d="M22,-14 a5,5 0 0,1 0,4" fill="none" stroke={ORANGE} strokeWidth={1.2} strokeLinecap="round" />
      <path d="M22,-10 a3,3 0 0,1 0,2.5" fill="none" stroke={ORANGE} strokeWidth={1.2} strokeLinecap="round" />
      <circle cx={22} cy={-7} r={1.2} fill={ORANGE} />
      {/* CCTV camera (garage) */}
      <rect x={-28} y={14} width={14} height={6} rx={1} fill={CHARCOAL_MID} />
    </g>
  );
}

function SohoBuilding() {
  return (
    <g>
      {/* Small office building */}
      <rect x={-24} y={-30} width={48} height={36} rx={3} fill={CHARCOAL} />
      {/* Window grid */}
      {[-16, -4, 8].map((wx) =>
        [-26, -18, -10].map((wy) => (
          <rect key={`${wx}-${wy}`} x={wx} y={wy} width={7} height={4.5} rx={0.8} fill={WHITE} opacity={0.85} />
        ))
      )}
      {/* Entrance */}
      <rect x={-5} y={6} width={10} height={6} rx={1.5} fill={BG_CARD} opacity={0.5} />
      {/* Signage bar */}
      <rect x={-20} y={-34} width={40} height={4} rx={1} fill={CHARCOAL_MID} />
      {/* Laptop on desk */}
      <rect x={-10} y={-22} width={14} height={9} rx={1} fill={WHITE} opacity={0.4} />
      <rect x={-12} y={-13} width={18} height={2} rx={0.5} fill={CHARCOAL_MID} />
      {/* Printer */}
      <rect x={8} y={-22} width={10} height={6} rx={1} fill={CHARCOAL_MID} />
      <rect x={10} y={-20} width={6} height={2} rx={0.5} fill={WHITE} opacity={0.3} />
      {/* Router */}
      <rect x={-18} y={-8} width={8} height={4} rx={1} fill={ORANGE} opacity={0.4} />
    </g>
  );
}

function BuildingScene({ slug, isHovered }: { slug: SegmentSlug; isHovered: boolean }) {
  const opacity = isHovered ? 0.5 : 0.35;
  return (
    <motion.g
      animate={{ opacity }}
      transition={{ duration: 0.4 }}
      style={{ willChange: "opacity" }}
    >
      {slug === "enterprises" && <EnterpriseBuilding />}
      {slug === "hotels" && <HotelHospitalBuilding />}
      {slug === "government" && <GovernmentBuilding />}
      {slug === "residential" && <ResidentialBuilding />}
      {slug === "soho" && <SohoBuilding />}
    </motion.g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONNECTION PATH — smooth quadratic bezier from center to card
   ═══════════════════════════════════════════════════════════════ */
function getConnectionPath(to: Segment): string {
  const dx = to.cx - CENTER.cx;
  const dy = to.cy - CENTER.cy;
  const mx = CENTER.cx + dx * 0.45 + dy * 0.12;
  const my = CENTER.cy + dy * 0.45 - dx * 0.12;
  return `M ${CENTER.cx} ${CENTER.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`;
}

/* ═══════════════════════════════════════════════════════════════
   PULSE DOT — travels along a connection path
   ═══════════════════════════════════════════════════════════════ */
function PulseDot({ path, delay, isActive }: { path: string; delay: number; isActive: boolean }) {
  return (
    <circle r={isActive ? 3.5 : 2.5} fill={ORANGE} opacity={isActive ? 1 : 0.6}>
      <animateMotion
        dur={isActive ? "2s" : "3.5s"}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
      />
      <animate
        attributeName="opacity"
        values={isActive ? "1;0.3;1" : "0.6;0.15;0.6"}
        dur={isActive ? "2s" : "3.5s"}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TECH ICON — floating icon along connection, gentle pulse
   ═══════════════════════════════════════════════════════════════ */
function TechIconPill({ icon, reduced }: { icon: TechIcon; reduced: boolean }) {
  if (reduced) return null;

  return (
    <g>
      <motion.circle
        cx={icon.cx}
        cy={icon.cy}
        r={16}
        fill={WHITE}
        stroke={BORDER}
        strokeWidth={1}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: icon.delay,
        }}
        style={{ willChange: "opacity" }}
      />
      <motion.g
        transform={`translate(${icon.cx}, ${icon.cy})`}
        stroke={ORANGE}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: icon.delay,
        }}
        style={{ willChange: "opacity" }}
      >
        <path d={icon.d} transform="scale(0.85)" />
      </motion.g>
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ENVIRONMENT CARD — white card with building, label, accent
   ═══════════════════════════════════════════════════════════════ */
function EnvironmentCard({
  segment,
  isHovered,
  onHover,
  index,
  reduced,
}: {
  segment: Segment;
  isHovered: boolean;
  onHover: (slug: SegmentSlug | null) => void;
  index: number;
  reduced: boolean;
}) {
  const x = segment.cx - CARD_W / 2;
  const y = segment.cy - CARD_H / 2;

  return (
    <motion.g
      onMouseEnter={() => onHover(segment.slug)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: "pointer" }}
    >
      {/* Wider invisible hit area for easier interaction */}
      <rect
        x={x - 16}
        y={y - 20}
        width={CARD_W + 32}
        height={CARD_H + 36}
        fill="transparent"
      />

      {/* Card shadow (offset) */}
      <rect
        x={x + 2}
        y={y + 3}
        width={CARD_W}
        height={CARD_H}
        rx={CARD_R}
        fill="#94A3B8"
        opacity={isHovered ? 0.12 : 0.06}
        style={{ transition: "opacity 0.3s" }}
      />

      {/* Card body — lifts on hover */}
      <motion.rect
        x={x}
        y={y}
        width={CARD_W}
        height={CARD_H}
        rx={CARD_R}
        fill={WHITE}
        stroke={isHovered ? ORANGE : BORDER}
        strokeWidth={isHovered ? 1.8 : 1}
        animate={isHovered ? { y: Number(y) - 8 } : { y: Number(y) }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ willChange: "transform" }}
      />

      {/* Orange accent top bar — always visible */}
      <rect
        x={x + 28}
        y={y}
        width={CARD_W - 56}
        height={3}
        rx={1.5}
        fill={ORANGE}
        opacity={isHovered ? 1 : 0.7}
        style={{ transition: "opacity 0.3s" }}
      />

      {/* Building illustration — centered in upper card area */}
      <g transform={`translate(${segment.cx}, ${segment.cy - 10})`}>
        <BuildingScene slug={segment.slug} isHovered={isHovered} />
      </g>

      {/* Label — always visible below building */}
      <text
        x={segment.cx}
        y={y + CARD_H - 14}
        textAnchor="middle"
        fill={isHovered ? ORANGE_DARK : CHARCOAL}
        fontSize={12}
        fontWeight={700}
        fontFamily="var(--font-heading, system-ui)"
        letterSpacing="0.02em"
        style={{ transition: "fill 0.3s", pointerEvents: "none" }}
      >
        {segment.label}
      </text>

      {/* Small tech dot indicators — always visible at bottom of card */}
      <g transform={`translate(${segment.cx - 12}, ${y + CARD_H - 6})`}>
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx={i * 12}
            cy={0}
            r={2.5}
            fill={isHovered ? ORANGE : BORDER}
            style={{ transition: "fill 0.3s" }}
          />
        ))}
      </g>

      {/* Floating animation when not hovered */}
      {!reduced && !isHovered && (
        <motion.g
          custom={index}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 5 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
          style={{ willChange: "transform" }}
        >
          {/* Invisible spacer — parent motion.g handles the float */}
        </motion.g>
      )}
    </motion.g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CENTER IBS HUB — the engineering hub node
   ═══════════════════════════════════════════════════════════════ */
function IbsHub({ hovered, reduced }: { hovered: boolean; reduced: boolean }) {
  return (
    <motion.g
      animate={
        hovered
          ? { scale: 1.06 }
          : reduced
            ? {}
            : { scale: [1, 1.015, 1] }
      }
      transition={
        hovered
          ? { type: "spring", stiffness: 350, damping: 22 }
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
      style={{ transformOrigin: `${CENTER.cx}px ${CENTER.cy}px`, willChange: "transform" }}
    >
      {/* Outer glow ring */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={62}
        fill="none"
        stroke={hovered ? ORANGE : BORDER}
        strokeWidth={1.2}
        strokeDasharray={hovered ? "none" : "4 4"}
        opacity={hovered ? 0.8 : 0.4}
        style={{ transition: "stroke 0.3s, opacity 0.3s" }}
      />

      {/* Background circle fill */}
      <circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={52}
        fill={WHITE}
        stroke={hovered ? ORANGE : CHARCOAL}
        strokeWidth={hovered ? 2 : 1.5}
        style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
      />

      {/* Orange ring on hover */}
      <motion.circle
        cx={CENTER.cx}
        cy={CENTER.cy}
        r={52}
        fill="none"
        stroke={ORANGE}
        strokeWidth={2.5}
        animate={{ opacity: hovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* IBS text */}
      <text
        x={CENTER.cx}
        y={CENTER.cy - 6}
        textAnchor="middle"
        dominantBaseline="central"
        fill={CHARCOAL}
        fontSize={28}
        fontWeight={800}
        fontFamily="var(--font-heading, system-ui)"
        letterSpacing="0.06em"
      >
        IBS
      </text>

      {/* Subtitle */}
      <text
        x={CENTER.cx}
        y={CENTER.cy + 16}
        textAnchor="middle"
        fill={STEEL}
        fontSize={7.5}
        fontWeight={600}
        fontFamily="var(--font-heading, system-ui)"
        letterSpacing="0.16em"
      >
        ENGINEERING HUB
      </text>
    </motion.g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN ILLUSTRATION COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function BuildingIllustration({ onHover }: BuildingIllustrationProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [hovered, setHovered] = useState<SegmentSlug | null>(null);
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

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
      viewBox="0 0 800 620"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-3xl lg:max-w-4xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Interactive diagram showing IBS as the central engineering hub connecting technology solutions across Enterprise, Hotels and Hospitals, Government, Residential, and SOHO environments"
      role="img"
    >
      <defs>
        {/* Radial glow behind center */}
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity={0.08} />
          <stop offset="60%" stopColor={ORANGE} stopOpacity={0.02} />
          <stop offset="100%" stopColor={ORANGE} stopOpacity={0} />
        </radialGradient>

        {/* Glow filter for active connections */}
        <filter id="connGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={4} />
        </filter>

        {/* Subtle card shadow */}
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx={0} dy={2} stdDeviation={6} floodColor="#94A3B8" floodOpacity={0.1} />
        </filter>
      </defs>

      {/* ── Background: soft radial gradient ── */}
      <circle cx={CENTER.cx} cy={CENTER.cy} r={280} fill="url(#hubGlow)" />

      {/* ── Subtle orbit arcs (decorative) ── */}
      {!reduced && (
        <g opacity={0.2}>
          <circle
            cx={CENTER.cx}
            cy={CENTER.cy}
            r={120}
            fill="none"
            stroke={BORDER}
            strokeWidth={0.6}
            strokeDasharray="3 8"
          />
          <circle
            cx={CENTER.cx}
            cy={CENTER.cy}
            r={220}
            fill="none"
            stroke={BORDER}
            strokeWidth={0.5}
            strokeDasharray="2 10"
          />
        </g>
      )}

      {/* ── Connection lines ── */}
      {SEGMENTS.map((seg, i) => {
        const path = getConnectionPath(seg);
        const isActive = hovered === seg.slug;

        return (
          <g key={`conn-${seg.slug}`}>
            {/* Base line — always visible, subtle */}
            <path
              d={path}
              fill="none"
              stroke={isActive ? ORANGE : STEEL_LIGHT}
              strokeWidth={isActive ? 1.8 : 1}
              opacity={isActive ? 0.9 : 0.35}
              style={{ transition: "stroke 0.35s, stroke-width 0.35s, opacity 0.35s" }}
            />

            {/* Glow layer on active */}
            {!reduced && (
              <path
                d={path}
                fill="none"
                stroke={ORANGE}
                strokeWidth={5}
                filter="url(#connGlow)"
                opacity={isActive ? 0.25 : 0}
                style={{ transition: "opacity 0.35s" }}
              />
            )}

            {/* Animated dash for visual interest */}
            {!reduced && (
              <path
                d={path}
                fill="none"
                stroke={ORANGE}
                strokeWidth={isActive ? 1.5 : 0.8}
                strokeDasharray={isActive ? "none" : "6 10"}
                opacity={isActive ? 0 : 0.2}
                style={{ transition: "opacity 0.35s" }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-32"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </path>
            )}

            {/* Pulse dot traveling along path */}
            {!reduced && (
              <PulseDot path={path} delay={i * 0.7} isActive={isActive} />
            )}
          </g>
        );
      })}

      {/* ── Tech icons along connections ── */}
      {TECH_ICONS.map((icon) => (
        <TechIconPill key={icon.label} icon={icon} reduced={reduced} />
      ))}

      {/* ── Center IBS hub ── */}
      <IbsHub hovered={!!hovered} reduced={reduced} />

      {/* ── Environment cards ── */}
      {SEGMENTS.map((seg, i) => (
        <EnvironmentCard
          key={seg.slug}
          segment={seg}
          isHovered={hovered === seg.slug}
          onHover={handleHover}
          index={i}
          reduced={reduced}
        />
      ))}
    </motion.svg>
  );
}