import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** Central hub radiating to peripheral nodes, plus a rack silhouette. */
export function ItInfrastructureIllustration({ className }: { className?: string }) {
  const spokes = [
    { x: 60, y: 30 },
    { x: 88, y: 48 },
    { x: 88, y: 78 },
    { x: 60, y: 96 },
    { x: 32, y: 78 },
    { x: 32, y: 48 },
  ];

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-it-infrastructure" />
      {spokes.map((p, i) => (
        <ConnectionLine key={i} d={`M60 63 L ${p.x} ${p.y}`} delay={i * 0.06} accent={i === 0} />
      ))}
      <Node cx={60} cy={63} r={6} filled accent />
      {spokes.map((p, i) => (
        <Node key={i} cx={p.x} cy={p.y} r={3} />
      ))}
    </svg>
  );
}
