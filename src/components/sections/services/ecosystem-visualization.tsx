"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO, DURATION } from "@/lib/motion";

const disciplines = [
  {
    slug: "voice",
    label: "Voice",
    fullLabel: "Voice Communication",
    description: "IP-PBX, SIP trunks, unified communications, and call routing across every desk.",
    angle: -90,
    color: "var(--deep-blue)",
  },
  {
    slug: "av",
    label: "AV",
    fullLabel: "Audio Video & Boardrooms",
    description: "Conference rooms, auditoriums, training spaces, and video walls that run without troubleshooting.",
    angle: -30,
    color: "var(--deep-blue-light)",
  },
  {
    slug: "networking",
    label: "Networking",
    fullLabel: "IT Networks & Infrastructure",
    description: "Structured cabling, firewalls, Wi-Fi, servers, and UPS systems that keep operations running.",
    angle: 30,
    color: "var(--deep-blue)",
  },
  {
    slug: "security",
    label: "Security",
    fullLabel: "Security Systems",
    description: "CCTV surveillance, access control, fire alarms, and home automation under one installation.",
    angle: 90,
    color: "var(--deep-blue-light)",
  },
  {
    slug: "callcenter",
    label: "Call Center",
    fullLabel: "Call Center Solutions",
    description: "Headsets, dialers, CRM integration, and voice logging for contact center operations.",
    angle: 150,
    color: "var(--deep-blue)",
  },
  {
    slug: "software",
    label: "Software",
    fullLabel: "Software Licensing & AMC",
    description: "Genuine licenses for Zoom, Webex, Microsoft 365, and security software — plus long-term maintenance.",
    angle: 210,
    color: "var(--deep-blue-light)",
  },
];

export function EcosystemVisualization() {
  const [hovered, setHovered] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const radius = 140;
  const cx = 200;
  const cy = 200;

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-label="Interactive technology ecosystem diagram" role="img">
        <defs>
          <pattern id="eco-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="var(--border)" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#eco-dots)" opacity="0.5" />

        {/* Connection lines */}
        {disciplines.map((d) => {
          const x2 = cx + Math.cos((d.angle * Math.PI) / 180) * radius;
          const y2 = cy + Math.sin((d.angle * Math.PI) / 180) * radius;
          const isHighlighted = hovered === d.slug || hovered === "center";
          return (
            <motion.line
              key={`line-${d.slug}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="var(--deep-blue)"
              strokeWidth={isHighlighted ? 2 : 1}
              strokeDasharray={isHighlighted ? "none" : "4 4"}
              opacity={hovered ? (isHighlighted ? 0.6 : 0.1) : 0.25}
              animate={hovered ? { opacity: isHighlighted ? 0.6 : 0.1 } : { opacity: 0.25 }}
              transition={{ duration: DURATION.base }}
              style={{ pointerEvents: "none" }}
            />
          );
        })}

        {/* Cross-connections between disciplines */}
        {[
          ["voice", "networking"],
          ["av", "networking"],
          ["security", "networking"],
          ["callcenter", "voice"],
          ["software", "security"],
        ].map(([a, b]) => {
          const da = disciplines.find((d) => d.slug === a)!;
          const db = disciplines.find((d) => d.slug === b)!;
          const x1 = cx + Math.cos((da.angle * Math.PI) / 180) * radius;
          const y1 = cy + Math.sin((da.angle * Math.PI) / 180) * radius;
          const x2 = cx + Math.cos((db.angle * Math.PI) / 180) * radius;
          const y2 = cy + Math.sin((db.angle * Math.PI) / 180) * radius;
          const isHighlighted = hovered === a || hovered === b;
          return (
            <motion.line
              key={`cross-${a}-${b}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--signal-orange)"
              strokeWidth={isHighlighted ? 1.5 : 0.5}
              opacity={hovered ? (isHighlighted ? 0.4 : 0.03) : 0.08}
              animate={hovered ? { opacity: isHighlighted ? 0.4 : 0.03 } : { opacity: 0.08 }}
              transition={{ duration: DURATION.base }}
              style={{ pointerEvents: "none" }}
            />
          );
        })}

        {/* Center IBS node */}
        <motion.g
          onMouseEnter={() => setHovered("center")}
          onMouseLeave={() => setHovered(null)}
          className="cursor-pointer"
          data-cursor-hover
        >
          <motion.circle
            cx={cx}
            cy={cy}
            r={hovered === "center" ? 36 : 32}
            fill="var(--deep-blue)"
            animate={{ r: hovered === "center" ? 36 : 32 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight={700} fill="white" style={{ fontFamily: "var(--font-heading)", pointerEvents: "none" }}>
            IBS
          </text>
          <motion.circle
            cx={cx}
            cy={cy}
            r={40}
            fill="none"
            stroke="var(--deep-blue)"
            strokeWidth={1}
            opacity={0.2}
            animate={{ r: hovered === "center" ? 52 : 44, opacity: hovered === "center" ? 0.3 : 0.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ pointerEvents: "none" }}
          />
        </motion.g>

        {/* Discipline nodes */}
        {disciplines.map((d) => {
          const nx = cx + Math.cos((d.angle * Math.PI) / 180) * radius;
          const ny = cy + Math.sin((d.angle * Math.PI) / 180) * radius;
          const isHovered = hovered === d.slug;
          return (
            <motion.g
              key={d.slug}
              onMouseEnter={() => setHovered(d.slug)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
              data-cursor-hover
            >
              {/* Invisible wider hit area */}
              <circle cx={nx} cy={ny} r={28} fill="transparent" />
              <motion.circle
                cx={nx}
                cy={ny}
                r={isHovered ? 24 : 20}
                fill="var(--card)"
                stroke={isHovered ? "var(--deep-blue)" : "var(--border)"}
                strokeWidth={isHovered ? 2 : 1}
                animate={{ r: isHovered ? 24 : 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <text
                x={nx}
                y={ny + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight={600}
                fill={isHovered ? "var(--deep-blue)" : "var(--charcoal)"}
                style={{ fontFamily: "var(--font-heading)", pointerEvents: "none" }}
              >
                {d.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Hover info panel */}
      <AnimatePresence>
        {hovered && hovered !== "center" && (() => {
          const d = disciplines.find((disc) => disc.slug === hovered);
          if (!d) return null;
          return (
            <motion.div
              key={d.slug}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: DURATION.base, ease: EASE_OUT_EXPO }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs rounded-2xl border border-border bg-card p-4 shadow-lg lg:hidden"
            >
              <p className="text-xs font-semibold tracking-[0.1em] text-deep-blue uppercase">{d.fullLabel}</p>
              <p className="mt-1.5 text-sm text-steel leading-relaxed">{d.description}</p>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}