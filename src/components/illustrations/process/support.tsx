import { IllustrationPulse, Node } from "@/components/illustrations/primitives";

export function SupportIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx={60} cy={60} r={14} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <Node cx={60} cy={60} r={4} filled accent />
      <IllustrationPulse cx={60} cy={60} r={14} />
    </svg>
  );
}
