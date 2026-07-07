"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export type SegmentSlug = "enterprises" | "hotels" | "government" | "residential" | "soho";

interface BuildingIllustrationProps {
  onHover?: (slug: SegmentSlug | null) => void;
}

const BUILDINGS: {
  slug: SegmentSlug;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  colorClass: string;
}[] = [
  { slug: "soho", label: "SOHO", x: 60, y: 155, width: 60, height: 50, colorClass: "fill-steel" },
  { slug: "residential", label: "Residential", x: 135, y: 130, width: 70, height: 75, colorClass: "fill-graphite" },
  { slug: "government", label: "Government", x: 220, y: 100, width: 90, height: 105, colorClass: "fill-charcoal" },
  { slug: "hotels", label: "Hotels", x: 330, y: 85, width: 80, height: 120, colorClass: "fill-graphite" },
  { slug: "enterprises", label: "Enterprises", x: 430, y: 55, width: 100, height: 150, colorClass: "fill-charcoal" },
];

function Windows({ x, y, w, h, cols, rows, gap = 8 }: { x: number; y: number; w: number; h: number; cols: number; rows: number; gap?: number }) {
  const cellW = (w - (cols - 1) * gap) / cols;
  const cellH = (h - (rows - 1) * gap) / rows;
  return (
    <>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={x + c * (cellW + gap)}
            y={y + r * (cellH + gap)}
            width={cellW}
            height={cellH}
            rx={1.5}
            className="fill-white/[0.08] transition-all duration-300 group-hover/Building:fill-white/[0.18]"
          />
        ))
      )}
    </>
  );
}

function Building({
  building,
  isHovered,
  onHover,
}: {
  building: (typeof BUILDINGS)[number];
  isHovered: boolean;
  onHover?: (slug: SegmentSlug | null) => void;
}) {
  return (
    <g
      className="group/Building cursor-pointer"
      data-cursor-hover
      onMouseEnter={() => onHover?.(building.slug)}
      onMouseLeave={() => onHover?.(null)}
    >
      {/* Invisible wider hit area to prevent flicker at edges */}
      <rect
        x={building.x - 6}
        y={building.y - 20}
        width={building.width + 12}
        height={building.height + 28}
        className="fill-transparent"
      />
      {/* Building body — state-driven animation instead of whileHover */}
      <motion.rect
        x={building.x}
        y={building.y}
        width={building.width}
        height={building.height}
        rx={4}
        className={`${building.colorClass} transition-colors duration-300 group-hover/Building:fill-deep-blue`}
        animate={isHovered ? { y: building.y - 6, scale: 1.02 } : { y: building.y, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      {/* Roof accent line */}
      <rect
        x={building.x}
        y={building.y}
        width={building.width}
        height={3}
        rx={1.5}
        className="fill-white/[0.12] transition-colors duration-300 group-hover/Building:fill-signal-orange"
      />
      {/* Windows */}
      <Windows
        x={building.x + 10}
        y={building.y + 14}
        w={building.width - 20}
        h={building.height - 28}
        cols={building.slug === "enterprises" ? 4 : building.slug === "soho" ? 2 : 3}
        rows={building.slug === "enterprises" ? 6 : building.slug === "soho" ? 2 : building.height > 100 ? 5 : 3}
      />
      {/* Entrance */}
      <rect
        x={building.x + building.width / 2 - 8}
        y={building.y + building.height - 16}
        width={16}
        height={16}
        rx={2}
        className="fill-white/[0.06] transition-colors duration-300 group-hover/Building:fill-signal-orange/30"
      />
      {/* Label on hover — pointer-events-none to avoid hit-test interference */}
      <text
        x={building.x + building.width / 2}
        y={building.y - 14}
        textAnchor="middle"
        className="fill-steel text-[11px] font-medium opacity-0 transition-opacity duration-300 group-hover/Building:opacity-100"
        style={{ fontFamily: "var(--font-heading)", pointerEvents: "none" }}
      >
        {building.label}
      </text>
      {/* Glow border — state-driven instead of whileHover */}
      <motion.rect
        x={building.x - 4}
        y={building.y - 4}
        width={building.width + 8}
        height={building.height + 8}
        rx={8}
        className="fill-transparent stroke-signal-orange"
        strokeWidth={1.5}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </g>
  );
}

export function BuildingIllustration({ onHover }: BuildingIllustrationProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hovered, setHovered] = useState<SegmentSlug | null>(null);

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Interactive illustration showing five building types representing the industries IBS serves"
      role="img"
    >
      {/* Ground plane */}
      <rect x={30} y={208} width={540} height={2} rx={1} className="fill-border" />
      {/* Subtle grid on ground */}
      {[100, 200, 300, 400, 500].map((gx) => (
        <line key={gx} x1={gx} y1={208} x2={gx} y2={214} className="stroke-border" strokeWidth={0.5} />
      ))}

      {BUILDINGS.map((b) => (
        <Building
          key={b.slug}
          building={b}
          isHovered={hovered === b.slug}
          onHover={(slug) => {
            setHovered(slug);
            onHover?.(slug);
          }}
        />
      ))}

      {/* Orange glow under hovered building — always mounted, pointer-events-none */}
      {BUILDINGS.map((b) => (
        <ellipse
          key={`glow-${b.slug}`}
          cx={b.x + b.width / 2}
          cy={212}
          rx={40}
          ry={4}
          className="fill-signal-orange"
          style={{ pointerEvents: "none", opacity: hovered === b.slug ? 0.35 : 0, transition: "opacity 0.3s" }}
        />
      ))}
    </motion.svg>
  );
}