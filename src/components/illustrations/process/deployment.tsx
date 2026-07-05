import { ConnectionLine, Node } from "@/components/illustrations/primitives";

export function DeploymentIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <Node cx={60} cy={70} r={5} filled accent />
      <ConnectionLine d="M60 65 L 60 36" accent />
      <path d="M52 44 L 60 34 L 68 44" fill="none" stroke="var(--deep-blue)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <ConnectionLine d="M60 65 L 38 82" dashed delay={0.2} />
      <ConnectionLine d="M60 65 L 82 82" dashed delay={0.25} />
    </svg>
  );
}
