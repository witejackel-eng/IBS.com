import { ConnectionLine, Node } from "@/components/illustrations/primitives";

export function InstallationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ConnectionLine d="M60 32 L 60 62" accent />
      <path d="M52 54 L 60 62 L 68 54" fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <rect x={40} y={70} width={40} height={14} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <Node cx={60} cy={77} r={2.5} />
    </svg>
  );
}
