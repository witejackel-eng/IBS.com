"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import { NetworkMesh } from "@/components/webgl/network-mesh";
import { ParticleField } from "@/components/webgl/particle-field";

export function HeroScene({ active = true }: { active?: boolean }) {
  const mouse = useRef({ x: 0, y: 0 });

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
        frameloop={active ? "always" : "never"}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 3, 4]} intensity={1} />
        <directionalLight position={[-4, -2, -2]} intensity={0.35} color="#F97316" />
        <NetworkMesh mouse={mouse} />
        <ParticleField />
        <Environment preset="city" environmentIntensity={0.2} />
      </Canvas>
    </div>
  );
}
