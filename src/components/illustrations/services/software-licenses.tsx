import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A license tag with a checkmark, linked to an application window. */
export function SoftwareLicensesIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-software-licenses" />
      <path
        d="M30 50 L 56 50 L 72 66 L 56 82 L 30 82 Z"
        fill="none"
        stroke="var(--steel)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Node cx={44} cy={66} r={3.5} />
      <ConnectionLine d="M56 62 L 63 69 L 76 56" accent delay={0.2} />
      <rect x={82} y={38} width={24} height={30} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M72 66 L 82 53" delay={0.35} />
      <path d="M88 46 L 100 46 M88 54 L 100 54" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}
