import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A headset arc over a hub node fanning out to multiple agent lines. */
export function CallCenterSolutionsIllustration({ className }: { className?: string }) {
  const fan = [
    { x: 30, y: 42 },
    { x: 26, y: 62 },
    { x: 32, y: 82 },
  ];

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-call-center" />
      <path
        d="M52 46 C 52 34, 68 34, 68 46"
        fill="none"
        stroke="var(--steel)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <rect x={48} y={46} width={8} height={14} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <rect x={64} y={46} width={8} height={14} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <Node cx={60} cy={70} r={5} filled accent />
      {fan.map((p, i) => (
        <ConnectionLine key={i} d={`M60 70 L ${p.x} ${p.y}`} delay={0.15 * i} />
      ))}
      {fan.map((p, i) => (
        <Node key={i} cx={p.x} cy={p.y} r={2.5} />
      ))}
      <ConnectionLine d="M60 70 L 90 88" dashed delay={0.4} />
      <Node cx={90} cy={88} r={2.5} />
    </svg>
  );
}
