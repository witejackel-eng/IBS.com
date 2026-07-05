"use client";

import dynamic from "next/dynamic";

import { useInViewport } from "@/hooks/use-in-viewport";

const HeroScene = dynamic(() => import("@/components/webgl/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-deep-blue/25 via-deep-blue-light/15 to-signal-orange/15 blur-3xl" />
    </div>
  ),
});

export function HeroCanvas() {
  const { ref, inView } = useInViewport<HTMLDivElement>();

  return (
    <div ref={ref} className="absolute inset-0">
      <HeroScene active={inView} />
    </div>
  );
}
