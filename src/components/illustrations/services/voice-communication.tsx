import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** Two endpoints joined by a call path, with a ringing signal arc. */
export function VoiceCommunicationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-voice-communication" />
      <ConnectionLine d="M32 66 C 48 44, 72 44, 88 66" />
      <path
        d="M84 40 Q 92 46 92 56"
        fill="none"
        stroke="var(--deep-blue)"
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity={0.6}
      />
      <path
        d="M78 34 Q 92 42 92 60"
        fill="none"
        stroke="var(--deep-blue)"
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity={0.35}
      />
      <Node cx={32} cy={66} r={5} accent filled />
      <Node cx={88} cy={66} r={5} />
      <ConnectionLine d="M32 66 L 32 84" dashed delay={0.2} />
      <ConnectionLine d="M88 66 L 88 84" dashed delay={0.2} />
      <Node cx={32} cy={84} r={2.5} />
      <Node cx={88} cy={84} r={2.5} />
    </svg>
  );
}
