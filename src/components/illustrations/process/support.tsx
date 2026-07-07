import { BlueprintGrid, IllustrationPulse, Node } from "@/components/illustrations/primitives";

/** A headset with signal waves and a pulsing center — Support. */
export function SupportIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-support" opacity={0.3} />
      {/* Headband */}
      <path d="M38 62 Q 38 34 60 30 Q 82 34 82 62" fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Left ear cup */}
      <rect x={30} y={56} width={14} height={20} rx={4} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Right ear cup */}
      <rect x={76} y={56} width={14} height={20} rx={4} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Mic boom */}
      <path d="M38 68 Q 32 76 36 84" fill="none" className="stroke-deep-blue" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={36} cy={86} r={3} fill="none" className="stroke-deep-blue" strokeWidth={1.5} />
      {/* Signal waves from right ear */}
      <path d="M94 60 Q 100 66 94 72" fill="none" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" opacity={0.6} />
      <path d="M98 56 Q 106 66 98 76" fill="none" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" opacity={0.4} />
      {/* Pulsing center node */}
      <Node cx={60} cy={50} r={4} filled accent />
      <IllustrationPulse cx={60} cy={50} r={6} delay={0.2} />
    </svg>
  );
}