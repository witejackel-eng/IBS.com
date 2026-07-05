import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A hospitality facade with an arched entrance and a guest-service node. */
export function HotelsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-hotels" />
      <rect x={32} y={38} width={56} height={48} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <path d="M52 86 L 52 66 Q 60 58 68 66 L 68 86" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <path d="M40 50 L 46 50 M40 58 L 46 58 M74 50 L 80 50 M74 58 L 80 58" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      <ConnectionLine d="M88 62 L 100 62" accent />
      <Node cx={100} cy={62} r={3} accent filled />
      <ConnectionLine d="M60 38 L 60 28" dashed delay={0.2} />
      <Node cx={60} cy={26} r={2.5} />
    </svg>
  );
}
