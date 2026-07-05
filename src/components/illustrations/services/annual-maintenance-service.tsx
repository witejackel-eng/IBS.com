import { BlueprintGrid, ConnectionLine } from "@/components/illustrations/primitives";

/** A service cycle: gear-like ticks around a hub with a checkmark. */
export function AnnualMaintenanceIllustration({ className }: { className?: string }) {
  const round = (n: number) => Math.round(n * 100) / 100;
  const ticks = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const inner = 26;
    const outer = 33;
    return {
      x1: round(60 + Math.cos(angle) * inner),
      y1: round(62 + Math.sin(angle) * inner),
      x2: round(60 + Math.cos(angle) * outer),
      y2: round(62 + Math.sin(angle) * outer),
    };
  });

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-amc" />
      <circle cx={60} cy={62} r={18} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      ))}
      <ConnectionLine d="M52 62 L 58 68 L 70 54" accent delay={0.2} />
    </svg>
  );
}
