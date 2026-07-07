import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** Two people silhouettes with a speech arc between them — Consultation. */
export function ConsultationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-consultation" opacity={0.3} />
      {/* Left person */}
      <circle cx={38} cy={44} r={8} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <path d="M26 72 Q 26 60 38 56 Q 50 60 50 72" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Right person */}
      <circle cx={82} cy={44} r={8} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <path d="M70 72 Q 70 60 82 56 Q 94 60 94 72" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {/* Speech arc connecting them */}
      <ConnectionLine d="M48 42 Q 60 28 72 42" accent />
      <ConnectionLine d="M50 48 Q 60 38 70 48" delay={0.1} />
      {/* Discussion nodes */}
      <Node cx={60} cy={34} r={2.5} accent filled />
    </svg>
  );
}