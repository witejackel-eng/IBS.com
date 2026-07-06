import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A ring of independent nodes interoperating through one central hub — no brand marks. */
export function PartnersEcosystemIllustration({ className }: { className?: string }) {
  const round = (n: number) => Math.round(n * 100) / 100;
  const ring = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return { x: round(60 + Math.cos(angle) * 38), y: round(60 + Math.sin(angle) * 38) };
  });

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-partners-ecosystem" />
      {ring.map((p, i) => (
        <ConnectionLine key={i} d={`M60 60 L ${p.x} ${p.y}`} delay={i * 0.05} accent={i % 4 === 0} />
      ))}
      <circle cx={60} cy={60} r={38} fill="none" stroke="var(--border)" strokeWidth={1} strokeDasharray="2 4" />
      <Node cx={60} cy={60} r={6} filled accent />
      {ring.map((p, i) => (
        <Node key={i} cx={p.x} cy={p.y} r={3} />
      ))}
    </svg>
  );
}
