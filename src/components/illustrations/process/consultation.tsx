import { ConnectionLine, Node } from "@/components/illustrations/primitives";

export function ConsultationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <ConnectionLine d="M42 60 C 50 48, 70 48, 78 60" accent />
      <Node cx={42} cy={60} r={5} />
      <Node cx={78} cy={60} r={5} accent filled />
      <path d="M56 74 L 64 74" stroke="var(--steel)" strokeWidth={1.5} strokeLinecap="round" opacity={0.6} />
    </svg>
  );
}
