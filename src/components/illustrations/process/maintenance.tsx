import { Node } from "@/components/illustrations/primitives";

export function MaintenanceIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42 42 L 52 52 M52 42 L 42 52 M68 68 L 78 78 M78 68 L 68 78"
        stroke="var(--steel)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path d="M52 52 L 68 68" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <Node cx={60} cy={60} r={3} accent filled />
    </svg>
  );
}
