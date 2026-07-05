import { ConnectionLine } from "@/components/illustrations/primitives";

export function QualityAssuranceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx={54} cy={54} r={18} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <line x1={67} y1={67} x2={84} y2={84} stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <ConnectionLine d="M46 54 L 52 60 L 64 46" accent delay={0.15} />
    </svg>
  );
}
