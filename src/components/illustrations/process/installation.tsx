import { BlueprintGrid, ConnectionLine, Node } from "@/components/illustrations/primitives";

/** A downward arrow placing a component into a rack/mount — Installation. */
export function InstallationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-installation" opacity={0.3} />
      {/* Server rack frame */}
      <rect x={30} y={48} width={60} height={44} rx={2} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Rack rails */}
      <line x1={34} y1={48} x2={34} y2={92} className="stroke-steel" strokeWidth={1} opacity={0.5} />
      <line x1={86} y1={48} x2={86} y2={92} className="stroke-steel" strokeWidth={1} opacity={0.5} />
      {/* Installed unit (top slot) */}
      <rect x={36} y={52} width={48} height={10} rx={1} fill="none" className="stroke-steel" strokeWidth={1.5} />
      {/* Empty slots */}
      <rect x={36} y={66} width={48} height={10} rx={1} fill="none" className="stroke-steel" strokeWidth={1} opacity={0.4} />
      <rect x={36} y={80} width={48} height={10} rx={1} fill="none" className="stroke-steel" strokeWidth={1} opacity={0.4} />
      {/* LED indicators on installed unit */}
      <circle cx={76} cy={57} r={1.5} className="fill-deep-blue" />
      <circle cx={72} cy={57} r={1.5} className="fill-steel" opacity={0.5} />
      {/* Component being installed (floating down) */}
      <rect x={42} y={30} width={36} height={10} rx={1} fill="none" className="stroke-deep-blue" strokeWidth={1.5} opacity={0.8} />
      <ConnectionLine d="M60 40 L 60 48" accent />
      {/* Down arrow */}
      <path d="M54 44 L 60 48 L 66 44" fill="none" className="stroke-deep-blue" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      {/* Mounting nodes */}
      <Node cx={42} cy={35} r={2} accent filled />
      <Node cx={78} cy={35} r={2} accent filled />
    </svg>
  );
}