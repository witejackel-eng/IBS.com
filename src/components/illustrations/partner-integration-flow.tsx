import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

const stages = [
  { x: 70, label: "OEM Partners" },
  { x: 270, label: "Engineering Integration" },
  { x: 470, label: "Unified Systems" },
  { x: 670, label: "Your Business" },
];

/** How partner products become one deployed system: OEM products -> IBS integration -> one unified system -> the customer. */
export function PartnerIntegrationFlowIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 740 160" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-partner-integration-flow" opacity={0.35} />
      {stages.slice(0, -1).map((s, i) => (
        <ConnectionLine key={s.label} d={`M${s.x + 22} 60 L ${stages[i + 1].x - 22} 60`} delay={i * 0.15} accent={i === 1} />
      ))}
      {stages.map((s, i) => (
        <g key={s.label}>
          <Node cx={s.x} cy={60} r={16} accent={i === 1 || i === 3} filled={i === 3} />
          <text
            x={s.x}
            y={104}
            textAnchor="middle"
            className="font-sans fill-charcoal"
            fontSize="13"
            fontWeight={500}
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
