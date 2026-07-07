import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A detailed gear with inner mechanism and spec nodes — Engineering. */
export function EngineeringIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-engineering" opacity={0.3} />
      {/* Outer gear teeth */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 60 + Math.cos(angle) * 22;
        const y1 = 60 + Math.sin(angle) * 22;
        const x2 = 60 + Math.cos(angle) * 28;
        const y2 = 60 + Math.sin(angle) * 28;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="var(--steel)" strokeWidth={2} strokeLinecap="round"
          />
        );
      })}
      {/* Main gear circle */}
      <circle cx={60} cy={60} r={22} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Inner ring */}
      <circle cx={60} cy={60} r={12} fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} opacity={0.6} />
      {/* Center hub */}
      <circle cx={60} cy={60} r={5} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Spec nodes around gear */}
      <ConnectionLine d="M88 60 L 100 52" accent />
      <Node cx={102} cy={50} r={2.5} accent filled />
      <ConnectionLine d="M88 60 L 100 68" delay={0.1} />
      <Node cx={102} cy={70} r={2.5} />
      {/* Accent center node */}
      <Node cx={60} cy={60} r={3} accent filled />
    </svg>
  );
}