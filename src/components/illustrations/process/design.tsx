import { ConnectionLine, Node } from "@/components/illustrations/primitives";

export function DesignIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx={52} cy={56} r={16} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <rect x={58} y={62} width={26} height={26} fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} opacity={0.7} />
      <ConnectionLine d="M52 40 L 52 32" delay={0.15} />
      <Node cx={52} cy={30} r={2.5} />
    </svg>
  );
}
