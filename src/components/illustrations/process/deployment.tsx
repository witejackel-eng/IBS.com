import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A rocket / upward launch with spread lines to multiple end-points — Deployment. */
export function DeploymentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-deployment" opacity={0.3} />
      {/* Launch pad */}
      <rect x={48} y={88} width={24} height={6} rx={1} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Rocket body */}
      <path d="M60 82 L 52 62 L 54 50 Q 60 32 66 50 L 68 62 Z" fill="none" className="stroke-steel" strokeWidth={1.5} strokeLinejoin="round" />
      {/* Rocket nose accent */}
      <Node cx={60} cy={34} r={2.5} accent filled />
      {/* Fins */}
      <path d="M52 62 L 44 76" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      <path d="M68 62 L 76 76" className="stroke-steel" strokeWidth={1.5} strokeLinecap="round" />
      {/* Thrust / exhaust lines */}
      <ConnectionLine d="M56 82 L 52 92" accent delay={0.1} />
      <ConnectionLine d="M60 82 L 60 94" accent delay={0.15} />
      <ConnectionLine d="M64 82 L 68 92" accent delay={0.2} />
      {/* Deployment spread to end-points */}
      <ConnectionLine d="M60 34 L 34 22" dashed delay={0.25} />
      <Node cx={32} cy={20} r={2.5} accent filled />
      <ConnectionLine d="M60 34 L 86 22" dashed delay={0.3} />
      <Node cx={88} cy={20} r={2.5} accent filled />
      <ConnectionLine d="M60 34 L 60 18" dashed delay={0.2} />
      <Node cx={60} cy={16} r={2.5} />
    </svg>
  );
}