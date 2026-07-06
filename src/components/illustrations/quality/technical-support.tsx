import { ConnectionLine, Node } from "@/components/illustrations/primitives";

export function TechnicalSupportIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M42 52 C 42 36, 78 36, 78 52" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <rect x={36} y={52} width={10} height={16} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <rect x={74} y={52} width={10} height={16} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M60 68 L 60 82" accent />
      <Node cx={60} cy={86} r={4} accent filled />
    </svg>
  );
}
