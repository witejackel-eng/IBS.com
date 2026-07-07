import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A wrench turning a bolt with circular service arcs — Maintenance. */
export function MaintenanceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-maintenance" opacity={0.3} />
      {/* Central bolt */}
      <circle cx={60} cy={60} r={10} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <circle cx={60} cy={60} r={4} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Bolt hex points */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = 60 + Math.cos(angle) * 10;
        const y = 60 + Math.sin(angle) * 10;
        return <circle key={i} cx={x} cy={y} r={1.5} fill="var(--steel)" opacity={0.6} />;
      })}
      {/* Wrench */}
      <path d="M82 38 L 72 48" stroke="var(--deep-blue)" strokeWidth={2.5} strokeLinecap="round" />
      <path d="M82 38 L 90 30 Q 96 26 98 32 L 94 36 Z" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinejoin="round" />
      {/* Service rotation arcs */}
      <ConnectionLine d="M60 46 A 14 14 0 0 1 74 60" accent delay={0.1} />
      <ConnectionLine d="M74 60 A 14 14 0 0 1 60 74" delay={0.2} />
      <ConnectionLine d="M60 74 A 14 14 0 0 1 46 60" dashed delay={0.3} />
      {/* Status node */}
      <Node cx={60} cy={60} r={2.5} accent filled />
    </svg>
  );
}