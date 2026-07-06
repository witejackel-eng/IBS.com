"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { RefObject } from "react";

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

function buildEdges(points: THREE.Vector3[], neighbors: number) {
  const positions: number[] = [];
  for (let i = 0; i < points.length; i++) {
    const distances = points
      .map((p, j) => ({ j, d: i === j ? Infinity : points[i].distanceTo(p) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighbors);

    for (const { j } of distances) {
      positions.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z);
    }
  }
  return new Float32Array(positions);
}

export function NetworkMesh({
  mouse,
  count = 64,
  radius = 2.4,
  connections = 2,
  rotationSpeed = 1,
  lineOpacity = 0.45,
  nodeEmissiveIntensity = 0.5,
  wireframeOpacity = 0.25,
}: {
  mouse: RefObject<{ x: number; y: number }>;
  count?: number;
  radius?: number;
  /** Nearest-neighbor connections drawn per node -- lower means fewer connection lines. */
  connections?: number;
  /** Multiplier on the base rotation/tilt speed -- 1 matches the homepage hero. */
  rotationSpeed?: number;
  lineOpacity?: number;
  nodeEmissiveIntensity?: number;
  wireframeOpacity?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);

  const points = useMemo(() => fibonacciSphere(count, radius), [count, radius]);
  const edgePositions = useMemo(() => buildEdges(points, connections), [points, connections]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.06 * rotationSpeed;
    const targetX = mouse.current.y * 0.25;
    const targetY = mouse.current.x * 0.35;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetY * 0.15, 0.04);

    if (nodesRef.current) {
      const t = state.clock.elapsedTime * rotationSpeed;
      points.forEach((p, i) => {
        const scale = 1 + Math.sin(t * 1.4 + i) * 0.15;
        dummy.position.copy(p);
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        nodesRef.current!.setMatrixAt(i, dummy.matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#FDBA74" transparent opacity={lineOpacity} />
      </lineSegments>

      <instancedMesh ref={nodesRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshStandardMaterial color="#F97316" emissive="#EA580C" emissiveIntensity={nodeEmissiveIntensity} roughness={0.4} />
      </instancedMesh>

      <mesh>
        <icosahedronGeometry args={[radius * 1.35, 1]} />
        <meshBasicMaterial color="#FED7AA" wireframe transparent opacity={wireframeOpacity} />
      </mesh>
    </group>
  );
}
