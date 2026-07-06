"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

import { NetworkMesh } from "@/components/webgl/network-mesh";
import { ParticleField } from "@/components/webgl/particle-field";
import { EnvironmentErrorBoundary } from "@/components/webgl/environment-error-boundary";

export interface HeroSceneDensity {
  nodeCount?: number;
  radius?: number;
  connections?: number;
  rotationSpeed?: number;
  lineOpacity?: number;
  nodeEmissiveIntensity?: number;
  wireframeOpacity?: number;
  particleCount?: number;
  particleOpacity?: number;
  particleSpeed?: number;
}

/** All knobs default to the homepage hero's exact values -- passing a lighter `density` is opt-in. */
export function HeroScene({ active = true, density = {} }: { active?: boolean; density?: HeroSceneDensity }) {
  const mouse = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const {
    nodeCount,
    radius,
    connections,
    rotationSpeed,
    lineOpacity,
    nodeEmissiveIntensity,
    wireframeOpacity,
    particleCount,
    particleOpacity,
    particleSpeed,
  } = density;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
    };
  };

  return (
    <div className="absolute inset-0" onPointerMove={handlePointerMove}>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={active && !prefersReducedMotion ? "always" : "never"}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 3, 4]} intensity={1} />
        <directionalLight position={[-4, -2, -2]} intensity={0.35} color="#F97316" />
        <NetworkMesh
          mouse={mouse}
          count={nodeCount}
          radius={radius}
          connections={connections}
          rotationSpeed={rotationSpeed}
          lineOpacity={lineOpacity}
          nodeEmissiveIntensity={nodeEmissiveIntensity}
          wireframeOpacity={wireframeOpacity}
        />
        <ParticleField count={particleCount} opacity={particleOpacity} speed={particleSpeed} />
        <EnvironmentErrorBoundary>
          <Environment preset="city" environmentIntensity={0.2} />
        </EnvironmentErrorBoundary>
      </Canvas>
    </div>
  );
}
