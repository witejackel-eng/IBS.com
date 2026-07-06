import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A geometric shield with a watching lens node at its center. */
export function SecuritySolutionsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-security-solutions" />
      <ConnectionLine d="M60 28 L 88 40 L 88 66 C 88 84, 76 94, 60 100 C 44 94, 32 84, 32 66 L 32 40 Z" />
      <Node cx={60} cy={62} r={9} />
      <Node cx={60} cy={62} r={3.5} filled accent />
      <ConnectionLine d="M60 53 L 60 47" delay={0.3} accent />
      <ConnectionLine d="M74 92 C 82 88, 90 82, 92 74" dashed delay={0.4} />
      <Node cx={92} cy={72} r={2.5} />
    </svg>
  );
}
