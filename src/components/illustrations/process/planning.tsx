import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A clipboard with checklist items and a timeline marker — Planning. */
export function PlanningIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-planning" opacity={0.3} />
      {/* Clipboard body */}
      <rect x={34} y={28} width={52} height={64} rx={3} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Clipboard clip at top */}
      <rect x={46} y={24} width={28} height={8} rx={2} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Checklist rows */}
      <ConnectionLine d="M44 46 L 54 46" accent />
      <path d="M40 46 L 42 46" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      <ConnectionLine d="M44 58 L 64 58" delay={0.1} />
      <path d="M40 58 L 42 58" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      <ConnectionLine d="M44 70 L 58 70" delay={0.15} />
      <path d="M40 70 L 42 70" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      {/* Progress indicator */}
      <Node cx={72} cy={46} r={2.5} accent filled />
      <ConnectionLine d="M74 46 L 78 46" dashed delay={0.2} />
      {/* Timeline marker on right */}
      <line x1={80} y1={36} x2={80} y2={84} className="stroke-steel" strokeWidth={1} opacity={0.4} />
      <Node cx={80} cy={46} r={2} filled />
      <Node cx={80} cy={58} r={2} filled />
      <Node cx={80} cy={70} r={2} accent filled />
    </svg>
  );
}