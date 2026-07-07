import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A multi-storey tower grid linked out to a small network cluster. */
export function EnterprisesIllustration({ className }: { className?: string }) {
  const windows = [0, 1, 2].flatMap((row) =>
    [0, 1, 2].map((col) => ({ x: 42 + col * 10, y: 40 + row * 12 }))
  );

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-enterprises" />
      <rect x={38} y={32} width={34} height={58} rx={2} className="fill-none stroke-steel" strokeWidth={1.5} />
      {windows.map((w, i) => (
        <rect key={i} x={w.x} y={w.y} width={4} height={4} className="fill-none stroke-steel" strokeWidth={1} opacity={0.7} />
      ))}
      <ConnectionLine d="M72 58 L 92 48" accent />
      <ConnectionLine d="M72 70 L 92 72" delay={0.15} />
      <Node cx={92} cy={48} r={3} accent filled />
      <Node cx={92} cy={72} r={3} />
    </svg>
  );
}