import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A technical blueprint with overlapping geometric shapes and dimension lines — Design. */
export function DesignIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-design" opacity={0.3} />
      {/* Blueprint rectangle */}
      <rect x={28} y={32} width={52} height={52} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Interior circle (room/layout) */}
      <circle cx={54} cy={58} r={18} fill="none" stroke="var(--steel)" strokeWidth={1} opacity={0.6} />
      {/* Overlapping triangle (zone) */}
      <path d="M54 38 L 70 68 L 38 68 Z" fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} opacity={0.5} />
      {/* Dimension lines — horizontal */}
      <line x1={28} y1={90} x2={80} y2={90} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      <line x1={28} y1={86} x2={28} y2={94} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      <line x1={80} y1={86} x2={80} y2={94} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      {/* Dimension lines — vertical */}
      <line x1={88} y1={32} x2={88} y2={84} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      <line x1={84} y1={32} x2={92} y2={32} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      <line x1={84} y1={84} x2={92} y2={84} stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      {/* Accent node at center */}
      <Node cx={54} cy={58} r={3} accent filled />
      <ConnectionLine d="M54 58 L 54 40" accent delay={0.15} />
    </svg>
  );
}