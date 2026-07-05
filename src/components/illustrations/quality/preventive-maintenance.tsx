import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

export function PreventiveMaintenanceIllustration({ className }: { className?: string }) {
  const cells = Array.from({ length: 9 }, (_, i) => ({ x: 40 + (i % 3) * 14, y: 44 + Math.floor(i / 3) * 14 }));

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-preventive" />
      <rect x={36} y={34} width={48} height={54} rx={2} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <path d="M36 44 L 84 44" stroke="var(--steel)" strokeWidth={1.5} />
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width={8} height={8} fill="none" stroke="var(--steel)" strokeWidth={1} opacity={0.5} />
      ))}
      <Node cx={68} cy={62} r={7} accent filled />
      <ConnectionLine d="M64 62 L 67 65 L 73 58" delay={0.2} />
    </svg>
  );
}
