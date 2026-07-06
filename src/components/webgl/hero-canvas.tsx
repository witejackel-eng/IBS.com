"use client";

import dynamic from "next/dynamic";

import { useInViewport } from "@/hooks/use-in-viewport";
import { cn } from "@/lib/utils";
import type { HeroSceneDensity } from "@/components/webgl/hero-scene";

const HeroScene = dynamic(() => import("@/components/webgl/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-deep-blue/25 via-deep-blue-light/15 to-signal-orange/15 blur-3xl" />
    </div>
  ),
});

export function HeroCanvas({
  density,
  maskEdges = false,
}: {
  /** Lighter node/particle counts, opacity, and speed for secondary heroes -- omit for the homepage's full-density network. */
  density?: HeroSceneDensity;
  /** Fades the network toward the edges with a soft radial mask, for heroes where the network is a secondary accent. */
  maskEdges?: boolean;
}) {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0", maskEdges && "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,black_35%,transparent_78%)]")}
    >
      <HeroScene active={inView} density={density} />
    </div>
  );
}
