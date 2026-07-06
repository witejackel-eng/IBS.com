import { BlueprintGrid, ConnectionLine, IllustrationPulse, Node } from "@/components/illustrations/primitives";

export function RemoteMonitoringIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-remote-monitoring" />
      <rect x={32} y={38} width={56} height={36} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M40 62 L 50 50 L 58 58 L 68 42 L 80 54" accent />
      <path d="M52 74 L 52 82 M68 74 L 68 82 M44 82 L 76 82" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <Node cx={94} cy={40} r={3} accent filled />
      <IllustrationPulse cx={94} cy={40} r={3} />
    </svg>
  );
}
