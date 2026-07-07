import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A hospitality / healthcare building with an arched entrance, cross marker, and connected network nodes. */
export function HotelsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-hotels" />
      {/* Main building */}
      <rect x={32} y={34} width={56} height={52} rx={2} className="fill-none stroke-steel" strokeWidth={1.5} />
      {/* Arched entrance */}
      <path d="M48 86 L 48 66 Q 60 54 72 66 L 72 86" className="fill-none stroke-steel" strokeWidth={1.5} />
      {/* Windows — left block */}
      <rect x={38} y={42} width={6} height={6} rx={0.5} className="fill-none stroke-steel" strokeWidth={1} opacity={0.7} />
      <rect x={38} y={52} width={6} height={6} rx={0.5} className="fill-none stroke-steel" strokeWidth={1} opacity={0.7} />
      {/* Windows — right block */}
      <rect x={76} y={42} width={6} height={6} rx={0.5} className="fill-none stroke-steel" strokeWidth={1} opacity={0.7} />
      <rect x={76} y={52} width={6} height={6} rx={0.5} className="fill-none stroke-steel" strokeWidth={1} opacity={0.7} />
      {/* Healthcare cross */}
      <path d="M57 38 L 63 38 M60 35 L 60 41" className="stroke-deep-blue" strokeWidth={1.5} strokeLinecap="round" />
      {/* Network connections */}
      <ConnectionLine d="M88 60 L 100 54" accent />
      <Node cx={102} cy={52} r={3} accent filled />
      <ConnectionLine d="M88 72 L 100 78" delay={0.15} />
      <Node cx={102} cy={80} r={3} />
      {/* Antenna / connectivity node */}
      <ConnectionLine d="M60 34 L 60 24" dashed delay={0.2} />
      <Node cx={60} cy={22} r={2.5} />
    </svg>
  );
}