import { BlueprintGrid, ConnectionLine } from "@/components/illustrations/primitives";

export function ComplianceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-compliance" />
      <path
        d="M60 30 L 84 42 L 84 66 C 84 82, 74 90, 60 96 C 46 90, 36 82, 36 66 L 36 42 Z"
        fill="none"
        stroke="var(--steel)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <ConnectionLine d="M48 62 L 56 70 L 74 50" accent delay={0.15} />
    </svg>
  );
}
