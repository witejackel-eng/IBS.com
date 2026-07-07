import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A magnifying glass over a checkmark inside a monitor/screen — Testing. */
export function TestingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-testing" opacity={0.3} />
      {/* Monitor frame */}
      <rect x={26} y={34} width={56} height={40} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Screen inner */}
      <rect x={30} y={38} width={48} height={32} rx={1} fill="none" stroke="var(--steel)" strokeWidth={1} opacity={0.4} />
      {/* Monitor stand */}
      <line x1={54} y1={74} x2={54} y2={82} stroke="var(--steel)" strokeWidth={1.5} />
      <line x1={42} y1={82} x2={66} y2={82} stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      {/* Checkmark on screen */}
      <ConnectionLine d="M42 56 L 50 64 L 66 48" accent delay={0.15} />
      {/* Magnifying glass */}
      <circle cx={86} cy={50} r={14} fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} />
      <line x1={96} y1={60} x2={104} y2={68} stroke="var(--deep-blue)" strokeWidth={2} strokeLinecap="round" />
      {/* Lens glare */}
      <path d="M80 44 Q 82 42 84 44" fill="none" stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
    </svg>
  );
}