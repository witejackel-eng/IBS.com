import { ConnectionLine } from "@/components/illustrations/primitives";

export function EngineeringIllustration({ className }: { className?: string }) {
  const round = (n: number) => Math.round(n * 100) / 100;
  const ticks = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    return {
      x1: round(60 + Math.cos(angle) * 16),
      y1: round(60 + Math.sin(angle) * 16),
      x2: round(60 + Math.cos(angle) * 21),
      y2: round(60 + Math.sin(angle) * 21),
    };
  });

  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx={60} cy={60} r={12} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
      ))}
      <ConnectionLine d="M55 60 L 59 64 L 67 52" accent delay={0.2} />
    </svg>
  );
}
