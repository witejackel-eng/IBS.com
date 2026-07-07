import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A government building facade with a flagpole node and secure perimeter markers. */
export function GovernmentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-government" />
      {/* Building body */}
      <rect x={30} y={40} width={60} height={46} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Pediment / roof triangle */}
      <path d="M26 40 L 60 24 L 94 40" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinejoin="round" />
      {/* Columns */}
      <line x1={38} y1={40} x2={38} y2={86} stroke="var(--steel)" strokeWidth={1.5} />
      <line x1={60} y1={40} x2={60} y2={86} stroke="var(--steel)" strokeWidth={1.5} />
      <line x1={82} y1={40} x2={82} y2={86} stroke="var(--steel)" strokeWidth={1.5} />
      {/* Steps */}
      <line x1={28} y1={86} x2={92} y2={86} stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <line x1={24} y1={90} x2={96} y2={90} stroke="var(--steel)" strokeWidth={1} strokeLinecap="round" opacity={0.5} />
      {/* Network connections to security nodes */}
      <ConnectionLine d="M30 62 L 16 62" accent />
      <Node cx={14} cy={62} r={3} accent filled />
      <ConnectionLine d="M90 62 L 104 62" delay={0.15} />
      <Node cx={106} cy={62} r={3} accent filled />
      {/* Flagpole node on top */}
      <ConnectionLine d="M60 24 L 60 16" delay={0.2} />
      <Node cx={60} cy={14} r={2.5} filled accent />
    </svg>
  );
}