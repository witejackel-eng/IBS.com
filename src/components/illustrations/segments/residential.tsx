import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A simple house silhouette with a protective coverage arc. */
export function ResidentialIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-residential" />
      <path d="M36 66 L 60 44 L 84 66" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinejoin="round" />
      <rect x={42} y={66} width={36} height={26} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <rect x={56} y={76} width={8} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M60 44 Q 60 26 88 30" dashed delay={0.15} />
      <Node cx={88} cy={30} r={3.5} accent filled />
      <path d="M78 30 A 10 10 0 0 1 88 20" fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} opacity={0.5} />
    </svg>
  );
}
