"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   COLOR PALETTE — matches site design tokens
   ═══════════════════════════════════════════════════════════════ */
const C = {
  dark: "#1E293B",
  mid: "#64748B",
  light: "#94A3B8",
  border: "#CBD5E1",
  pale: "#E2E8F0",
  wash: "#F1F5F9",
  white: "#FFFFFF",
  orange: "#F97316",
  orangeSoft: "#FDBA74",
  orangeFaint: "#FFF7ED",
};

/* ═══════════════════════════════════════════════════════════════
   ISOMETRIC PROJECTION HELPERS
   Standard isometric: 30° from horizontal, 2:1 pixel ratio
   ═══════════════════════════════════════════════════════════════ */
const COS30 = 0.866;
const SIN30 = 0.5;

/** Project world (x, y, z) → screen (px, py), centered in viewBox */
function iso(x: number, y: number, z: number): [number, number] {
  const px = (x - y) * COS30 + 350;
  const py = (x + y) * SIN30 - z + 320;
  return [px, py];
}

/** Draw an isometric box (front face, right face, top face) */
function IsoBox({
  x,
  y,
  z,
  w,
  d,
  h,
  fillFront,
  fillSide,
  fillTop,
  stroke,
}: {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  fillFront: string;
  fillSide: string;
  fillTop: string;
  stroke: string;
}) {
  // 8 corners of the box
  const fbl = iso(x, y, z); // front-bottom-left
  const fbr = iso(x + w, y, z); // front-bottom-right
  const ftl = iso(x, y, z + h); // front-top-left
  const ftr = iso(x + w, y, z + h); // front-top-right
  const bbl = iso(x, y + d, z); // back-bottom-left
  const bbr = iso(x + w, y + d, z); // back-bottom-right
  const btl = iso(x, y + d, z + h); // back-top-left
  const btr = iso(x + w, y + d, z + h); // back-top-right

  const sw = 1.2;
  const j = "round";

  return (
    <g>
      {/* Left face (visible from this angle) */}
      <polygon
        points={`${fbl[0]},${fbl[1]} ${bbl[0]},${bbl[1]} ${btl[0]},${btl[1]} ${ftl[0]},${ftl[1]}`}
        fill={fillSide}
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin={j}
      />
      {/* Right face */}
      <polygon
        points={`${fbr[0]},${fbr[1]} ${bbr[0]},${bbr[1]} ${btr[0]},${btr[1]} ${ftr[0]},${ftr[1]}`}
        fill={fillFront}
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin={j}
      />
      {/* Top face */}
      <polygon
        points={`${ftl[0]},${ftl[1]} ${ftr[0]},${ftr[1]} ${btr[0]},${btr[1]} ${btl[0]},${btl[1]}`}
        fill={fillTop}
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin={j}
      />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BUILDING COMPONENTS
   Each returns an isometric group placed at a world position
   ═══════════════════════════════════════════════════════════════ */

function EnterpriseTower() {
  // Tall tower at world position
  return (
    <g>
      {/* Main tower */}
      <IsoBox x={60} y={40} z={0} w={50} d={50} h={120} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Side wing (lower) */}
      <IsoBox x={110} y={50} z={0} w={30} d={30} h={70} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Windows on front face — 3 columns x 6 rows */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => {
          const wx = 72 + col * 14;
          const wy = 10 + row * 18;
          const wz = 15 + row * 0;
          const [px, py] = iso(wx, 40, wz);
          return (
            <rect
              key={`${row}-${col}`}
              x={px - 4}
              y={py - 5}
              width={8}
              height={6}
              rx={1}
              fill={C.white}
              stroke={C.border}
              strokeWidth={0.6}
              opacity={0.8}
            />
          );
        })
      )}
      {/* Windows on right face — 3 rows x 2 cols */}
      {Array.from({ length: 4 }).map((_, row) =>
        [0, 1].map((col) => {
          const wx = 110 + col * 0;
          const wy = 55 + row * 14;
          const wz = 10 + col * 12;
          const [px, py] = iso(wx, wy, wz);
          return (
            <rect
              key={`r${row}-${col}`}
              x={px - 3}
              y={py - 4}
              width={6}
              height={5}
              rx={0.8}
              fill={C.white}
              stroke={C.border}
              strokeWidth={0.5}
              opacity={0.7}
            />
          );
        })
      )}
      {/* Antenna */}
      {(() => {
        const [bx, by] = iso(85, 65, 120);
        const [tx, ty] = iso(85, 65, 140);
        return (
          <g>
            <line x1={bx} y1={by} x2={tx} y2={ty} stroke={C.mid} strokeWidth={1.2} />
            <circle cx={tx} cy={ty} r={2.5} fill={C.orange} />
            {/* WiFi waves from antenna */}
            <path d={`M${tx - 8},${ty - 3} a10,8 0 0,1 16,0`} fill="none" stroke={C.orange} strokeWidth={0.8} opacity={0.5} />
            <path d={`M${tx - 4},${ty - 1} a6,5 0 0,1 8,0`} fill="none" stroke={C.orange} strokeWidth={0.8} opacity={0.7} />
          </g>
        );
      })()}
      {/* Entrance */}
      {(() => {
        const [px, py] = iso(78, 40, 0);
        return (
          <rect x={px - 6} y={py - 10} width={12} height={10} rx={1.5} fill={C.orangeFaint} stroke={C.orange} strokeWidth={0.8} opacity={0.6} />
        );
      })()}
    </g>
  );
}

function HotelHospital() {
  return (
    <g>
      {/* Main building */}
      <IsoBox x={160} y={30} z={0} w={55} d={55} h={95} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Windows on front face — 4 cols x 5 rows */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => {
          const wx = 168 + col * 12;
          const wz = 12 + row * 16;
          const [px, py] = iso(wx, 30, wz);
          return (
            <rect
              key={`h${row}-${col}`}
              x={px - 4}
              y={py - 5}
              width={7}
              height={5.5}
              rx={0.8}
              fill={C.white}
              stroke={C.border}
              strokeWidth={0.5}
              opacity={0.85}
            />
          );
        })
      )}
      {/* Medical cross on roof */}
      {(() => {
        const [cx, cy] = iso(187, 57, 95);
        return (
          <g>
            <rect x={cx - 1.5} y={cy - 8} width={3} height={16} rx={1} fill={C.orange} opacity={0.85} />
            <rect x={cx - 8} y={cy - 1.5} width={16} height={3} rx={1} fill={C.orange} opacity={0.85} />
          </g>
        );
      })()}
      {/* Entrance canopy */}
      {(() => {
        const [lx, ly] = iso(178, 30, 5);
        const [rx, ry] = iso(198, 30, 5);
        const [mx, my] = iso(188, 30, 12);
        return (
          <path d={`M${lx},${ly} Q${mx},${my - 8} ${rx},${ry}`} fill="none" stroke={C.mid} strokeWidth={1} />
        );
      })()}
      {/* Entrance door */}
      {(() => {
        const [px, py] = iso(183, 30, 0);
        return <rect x={px - 5} y={py - 8} width={10} height={8} rx={1.5} fill={C.orangeFaint} stroke={C.orange} strokeWidth={0.7} opacity={0.5} />;
      })()}
    </g>
  );
}

function GovernmentBuilding() {
  return (
    <g>
      {/* Main building body */}
      <IsoBox x={-30} y={50} z={0} w={60} d={50} h={65} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Pediment — triangular roof */}
      {(() => {
        const [fl, fyl] = iso(-30, 50, 65);
        const [fr, fyr] = iso(30, 50, 65);
        const [tl, tly] = iso(0, 50, 88);
        const [bl, bly] = iso(-30, 100, 65);
        const [br, bry] = iso(30, 100, 65);
        const [tbl, tbly] = iso(0, 100, 88);
        return (
          <g>
            {/* Front pediment */}
            <polygon
              points={`${fl},${fyl} ${fr},${fyr} ${tl},${tly}`}
              fill={C.white}
              stroke={C.border}
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
            {/* Right pediment */}
            <polygon
              points={`${fr},${fyr} ${br},${bry} ${tbl},${tbly} ${tl},${tly}`}
              fill={C.wash}
              stroke={C.border}
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          </g>
        );
      })()}
      {/* Columns on front face */}
      {[-15, 0, 15].map((cx) => {
        const [px, py] = iso(cx, 50, 8);
        const [px2, py2] = iso(cx, 50, 60);
        return (
          <line
            key={cx}
            x1={px}
            y1={py}
            x2={px2}
            y2={py2}
            stroke={C.light}
            strokeWidth={2.5}
            strokeLinecap="round"
          />
        );
      })}
      {/* Steps */}
      {(() => {
        const [s1l, s1ly] = iso(-35, 48, 0);
        const [s1r, s1ry] = iso(35, 48, 0);
        const [s1bl, s1bly] = iso(-35, 102, 0);
        const [s1br, s1bry] = iso(35, 102, 0);
        return (
          <polygon
            points={`${s1l},${s1ly} ${s1r},${s1ry} ${s1br},${s1bry} ${s1bl},${s1bly}`}
            fill={C.pale}
            stroke={C.border}
            strokeWidth={0.8}
          />
        );
      })()}
      {/* Flagpole */}
      {(() => {
        const [bx, by] = iso(22, 55, 88);
        const [tx, ty] = iso(22, 55, 108);
        return (
          <g>
            <line x1={bx} y1={by} x2={tx} y2={ty} stroke={C.mid} strokeWidth={1} />
            <rect x={tx} y={ty} width={7} height={4} rx={0.5} fill={C.orange} opacity={0.8} />
          </g>
        );
      })()}
    </g>
  );
}

function ResidentialHouse() {
  return (
    <g>
      {/* House body */}
      <IsoBox x={260} y={55} z={0} w={45} d={45} h={40} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Pitched roof */}
      {(() => {
        const [fl, fyl] = iso(255, 55, 40);
        const [fr, fyr] = iso(305, 55, 40);
        const [peak, peaky] = iso(280, 78, 62);
        const [bl, bly] = iso(255, 100, 40);
        const [br, bry] = iso(305, 100, 40);
        const [bpeak, bpeaky] = iso(280, 100, 62);
        return (
          <g>
            <polygon points={`${fl},${fyl} ${fr},${fyr} ${peak},${peaky}`} fill={C.white} stroke={C.border} strokeWidth={1.2} strokeLinejoin="round" />
            <polygon points={`${fr},${fyr} ${br},${bry} ${bpeak},${bpeaky} ${peak},${peaky}`} fill={C.wash} stroke={C.border} strokeWidth={1.2} strokeLinejoin="round" />
          </g>
        );
      })()}
      {/* Door */}
      {(() => {
        const [px, py] = iso(278, 55, 0);
        return <rect x={px - 4} y={py - 10} width={8} height={10} rx={4} fill={C.orangeFaint} stroke={C.orange} strokeWidth={0.7} opacity={0.6} />;
      })()}
      {/* Windows */}
      {(() => {
        const [w1x, w1y] = iso(268, 55, 20);
        const [w2x, w2y] = iso(290, 55, 20);
        return (
          <g>
            <rect x={w1x - 4} y={w1y - 4} width={8} height={6} rx={1} fill={C.white} stroke={C.border} strokeWidth={0.6} />
            <rect x={w2x - 4} y={w2y - 4} width={8} height={6} rx={1} fill={C.white} stroke={C.border} strokeWidth={0.6} />
          </g>
        );
      })()}
      {/* Chimney */}
      {(() => {
        const [b1, b1y] = iso(295, 60, 40);
        const [t1, t1y] = iso(295, 60, 52);
        const [b2, b2y] = iso(302, 60, 40);
        const [t2, t2y] = iso(302, 60, 52);
        const [b3, b3y] = iso(302, 63, 40);
        const [t3, t3y] = iso(302, 63, 52);
        return (
          <polygon
            points={`${b1},${b1y} ${b2},${b2y} ${t2},${t2y} ${t1},${t1y}`}
            fill={C.pale}
            stroke={C.border}
            strokeWidth={0.8}
          />
        );
      })()}
      {/* WiFi router indicator on roof */}
      {(() => {
        const [cx, cy] = iso(270, 70, 48);
        return (
          <g opacity={0.7}>
            <path d={`M${cx - 5},${cy - 4} a7,5 0 0,1 10,0`} fill="none" stroke={C.orange} strokeWidth={0.8} strokeLinecap="round" />
            <path d={`M${cx - 2},${cy - 2} a4,3 0 0,1 4,0`} fill="none" stroke={C.orange} strokeWidth={0.8} strokeLinecap="round" />
            <circle cx={cx} cy={cy} r={1} fill={C.orange} />
          </g>
        );
      })()}
    </g>
  );
}

function SohoOffice() {
  return (
    <g>
      {/* Small office building */}
      <IsoBox x={-60} y={100} z={0} w={40} d={40} h={55} fillFront={C.wash} fillSide={C.pale} fillTop={C.white} stroke={C.border} />
      {/* Windows — 2 cols x 3 rows */}
      {Array.from({ length: 3 }).map((_, row) =>
        [0, 1].map((col) => {
          const wx = -52 + col * 16;
          const wz = 10 + row * 15;
          const [px, py] = iso(wx, 100, wz);
          return (
            <rect
              key={`s${row}-${col}`}
              x={px - 4}
              y={py - 4.5}
              width={7}
              height={5}
              rx={0.8}
              fill={C.white}
              stroke={C.border}
              strokeWidth={0.5}
              opacity={0.85}
            />
          );
        })
      )}
      {/* Door */}
      {(() => {
        const [px, py] = iso(-40, 100, 0);
        return <rect x={px - 4} y={py - 8} width={8} height={8} rx={1.5} fill={C.orangeFaint} stroke={C.orange} strokeWidth={0.7} opacity={0.5} />;
      })()}
      {/* Signage */}
      {(() => {
        const [px, py] = iso(-55, 100, 50);
        const [px2, py2] = iso(-25, 100, 50);
        const [px3, py3] = iso(-55, 100, 55);
        const [px4, py4] = iso(-25, 100, 55);
        return (
          <polygon
            points={`${px},${py} ${px2},${py2} ${px4},${py4} ${px3},${py3}`}
            fill={C.orange}
            opacity={0.3}
            stroke={C.orange}
            strokeWidth={0.5}
          />
        );
      })()}
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NETWORK CONNECTION LINES
   Thin lines connecting buildings along the "ground"
   ═══════════════════════════════════════════════════════════════ */
function NetworkLines() {
  // Ground-level connection points for each building
  const points: [number, number, number][] = [
    [-20, 120, 0],   // SOHO
    [0, 100, 0],     // Government
    [85, 90, 0],     // Enterprise
    [187, 85, 0],    // Hotel/Hospital
    [282, 100, 0],   // Residential
  ];

  const projected = points.map(([x, y, z]) => iso(x, y, z));

  return (
    <g>
      {/* Main backbone line */}
      <polyline
        points={projected.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke={C.pale}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Orange accent overlay */}
      <polyline
        points={projected.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke={C.orange}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
        strokeDasharray="4 8"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="3s" repeatCount="indefinite" />
      </polyline>
      {/* Connection dots at each building */}
      {projected.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r={2.5} fill={C.orange} opacity={0.6}>
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING TECH ICONS — minimal, placed near relevant buildings
   ═══════════════════════════════════════════════════════════════ */
function TechIcon({ x, y, z, d, delay }: { x: number; y: number; z: number; d: string; delay: number }) {
  const [px, py] = iso(x, y, z);
  return (
    <g opacity={0.55}>
      <circle cx={px} cy={py} r={9} fill={C.white} stroke={C.border} strokeWidth={0.7} />
      <g transform={`translate(${px},${py})`} stroke={C.orange} strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d={d} transform="scale(0.55)" />
      </g>
      <animate
        attributeName="opacity"
        values="0.55;0.3;0.55"
        dur="4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </g>
  );
}

function TechIcons() {
  return (
    <g>
      {/* WiFi near Enterprise antenna */}
      <TechIcon x={95} y={50} z={132} d="M-8,-4 a10,10 0 0,1 16,0 M-4,-1 a6,6 0 0,1 8,0 M0,3 a2,2 0 1,0 0,0.01" delay={0} />
      {/* CCTV near Government */}
      <TechIcon x={-10} y={60} z={40} d="M-5,-5 h6 l3,7 h-12z M7,-3 v2 a2,2 0 1,1 0,0" delay={1.5} />
      {/* Server near SOHO */}
      <TechIcon x={-55} y={95} z={30} d="M-6,-8 h12 v16 h-12z M-4,-5 h8 M-4,-1 h8 M-4,3 h8" delay={0.8} />
      {/* Cloud above center */}
      <TechIcon x={130} y={30} z={115} d="M-8,2 a5,5 0 0,1 0.5,-9 a6,4 0 0,1 11,0 a5,5 0 0,1 0.5,9z" delay={2.2} />
      {/* Voice/phone near Hotel */}
      <TechIcon x={210} y={40} z={50} d="M-4,-7 a6,3 0 0,1 8,0 v4 a6,3 0 0,1-8,0z M-1,3 v2 a3,2 0 0,0 2,0 v-2" delay={0.4} />
      {/* AV display near Enterprise */}
      <TechIcon x={145} y={55} z={45} d="M-8,-5 h16 v10 h-16z M0,5 v3 M-3,8 h6" delay={1.8} />
      {/* Access control near Residential */}
      <TechIcon x={310} y={70} z={25} d="M-4,-6 v5 a4,4 0 0,0 8,0 v-5z M-2,-1 h4 M-1,2 h2" delay={3.0} />
      {/* Network switch near SOHO/Enterprise connection */}
      <TechIcon x={20} y={85} z={8} d="M-6,-2 h12 v8 h-12z M-3,1 a1,1 0 1,0 0,0.01 M1,1 a1,1 0 1,0 0,0.01 M-1,5 a1,1 0 1,0 0,0.01" delay={1.1} />
    </g>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GROUND PLANE — subtle isometric ground surface
   ═══════════════════════════════════════════════════════════════ */
function GroundPlane() {
  const tl = iso(-100, 130, -2);
  const tr = iso(350, 130, -2);
  const br = iso(350, -30, -2);
  const bl = iso(-100, -30, -2);

  return (
    <polygon
      points={`${tl[0]},${tl[1]} ${tr[0]},${tr[1]} ${br[0]},${br[1]} ${bl[0]},${bl[1]}`}
      fill={C.wash}
      opacity={0.4}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN ILLUSTRATION
   ═══════════════════════════════════════════════════════════════ */
export function CityscapeIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReduced = useReducedMotion();
  const reduced = prefersReduced === true;

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 700 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      role="img"
      aria-label="Premium illustration showing an integrated technology cityscape with enterprise offices, hotels, hospitals, government buildings, residential homes, and small offices connected by network infrastructure"
    >
      <defs>
        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.white} stopOpacity={0} />
          <stop offset="100%" stopColor={C.wash} stopOpacity={0.3} />
        </linearGradient>
      </defs>

      {/* Background gradient */}
      <rect width="700" height="480" fill="url(#skyFade)" />

      {/* Floating container — subtle vertical drift */}
      <motion.g
        animate={reduced ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        {/* Ground plane */}
        <GroundPlane />

        {/* Network backbone */}
        {!reduced && <NetworkLines />}

        {/* Buildings — rendered back to front for proper overlap */}
        <GovernmentBuilding />
        <SohoOffice />
        <EnterpriseTower />
        <HotelHospital />
        <ResidentialHouse />

        {/* Tech icons */}
        {!reduced && <TechIcons />}
      </motion.g>
    </motion.svg>
  );
}