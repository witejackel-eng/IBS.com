import { BlueprintGrid, ConnectionLine, IllustrationPulse, Node } from "@/components/illustrations/primitives";

/** A local node reaching out across a network toward a responsive support hub. */
export function ContactNetworkIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-contact-network" />
      <ConnectionLine d="M30 80 C 50 70, 55 50, 60 40" />
      <ConnectionLine d="M60 40 C 65 50, 70 70, 90 78" accent delay={0.15} />
      <Node cx={30} cy={82} r={4} />
      <Node cx={60} cy={38} r={4} />
      <Node cx={92} cy={80} r={5} accent filled />
      <IllustrationPulse cx={92} cy={80} r={5} delay={0.4} />
    </svg>
  );
}
