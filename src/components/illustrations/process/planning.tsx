import { ConnectionLine } from "@/components/illustrations/primitives";

export function PlanningIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x={38} y={36} width={44} height={54} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M46 50 L 74 50 M46 62 L 74 62 M46 74 L 64 74" accent />
    </svg>
  );
}
