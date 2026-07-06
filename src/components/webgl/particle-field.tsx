"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ParticleField({
  count = 200,
  opacity = 0.4,
  speed = 1,
}: {
  count?: number;
  opacity?: number;
  /** Multiplier on the base drift speed -- 1 matches the homepage hero. */
  speed?: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7 - 2;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012 * speed;
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.12 * speed) * 0.12;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#FB923C" transparent opacity={opacity} sizeAttenuation depthWrite={false} />
    </points>
  );
}
