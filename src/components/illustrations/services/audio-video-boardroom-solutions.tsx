import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A display panel with a waveform and a camera node above, for AV + boardroom. */
export function AudioVideoBoardroomIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-av-boardroom" />
      <rect x={28} y={44} width={64} height={40} rx={4} fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M38 68 L 46 58 L 54 66 L 64 50 L 74 62 L 82 56" accent />
      <ConnectionLine d="M60 44 L 60 32" delay={0.15} />
      <Node cx={60} cy={30} r={4} accent filled />
      <ConnectionLine d="M28 92 L 92 92" dashed delay={0.3} />
      <Node cx={28} cy={92} r={2} />
      <Node cx={92} cy={92} r={2} />
    </svg>
  );
}
