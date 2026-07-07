import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A single desk setup, right-sized: one screen, one connection out. */
export function SohoIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-soho" />
      <rect x={40} y={40} width={40} height={26} rx={2} className="fill-none stroke-steel" strokeWidth={1.5} />
      <path d="M56 66 L 56 74 M64 66 L 64 74 M48 78 L 72 78" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      <ConnectionLine d="M80 52 L 96 52" accent />
      <Node cx={96} cy={52} r={3} accent filled />
      <ConnectionLine d="M40 52 L 26 52" dashed delay={0.15} />
      <Node cx={26} cy={52} r={2.5} />
    </svg>
  );
}