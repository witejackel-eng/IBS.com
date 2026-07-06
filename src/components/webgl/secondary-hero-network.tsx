"use client";

import { useEffect, useState } from "react";

import { HeroCanvas } from "@/components/webgl/hero-canvas";
import type { HeroSceneDensity } from "@/components/webgl/hero-scene";

type Tier = "desktop" | "laptop" | "tablet" | "mobile";

/** Further count reduction per breakpoint, on top of BASE_DENSITY -- protects perf on smaller devices. */
const TIER_SCALE: Record<Tier, number> = {
  desktop: 1,
  laptop: 0.85,
  tablet: 0.55,
  mobile: 0.35,
};

/** ~65% of the homepage hero's node/particle counts and visual intensity -- a quieter echo of the
 * signature network for secondary heroes, not a second design. */
const BASE_DENSITY = {
  nodeCount: 42,
  particleCount: 130,
  radius: 2.3,
  rotationSpeed: 0.7,
  particleSpeed: 0.7,
  lineOpacity: 0.3,
  nodeEmissiveIntensity: 0.32,
  wireframeOpacity: 0.16,
  particleOpacity: 0.26,
} satisfies HeroSceneDensity;

function getTier(): Tier {
  if (typeof window === "undefined") return "desktop";
  if (window.matchMedia("(max-width: 639px)").matches) return "mobile";
  if (window.matchMedia("(max-width: 1023px)").matches) return "tablet";
  if (window.matchMedia("(max-width: 1439px)").matches) return "laptop";
  return "desktop";
}

/** Lighter, secondary-hero variant of the homepage's WebGL network -- reuses the same renderer and
 * shaders via HeroCanvas/HeroScene, just at reduced density, opacity, and speed. */
export function SecondaryHeroNetwork() {
  const [tier, setTier] = useState<Tier>("desktop");

  useEffect(() => {
    const update = () => setTier(getTier());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = TIER_SCALE[tier];
  const density: HeroSceneDensity = {
    ...BASE_DENSITY,
    nodeCount: Math.max(12, Math.round(BASE_DENSITY.nodeCount * scale)),
    particleCount: Math.max(20, Math.round(BASE_DENSITY.particleCount * scale)),
  };

  return <HeroCanvas density={density} maskEdges />;
}
