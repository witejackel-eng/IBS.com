import { ConnectionLine } from "@/components/illustrations/primitives";

export function TestingIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x={60} y={38} width={30} height={30} rx={3} fill="none" stroke="var(--steel)" strokeWidth={1.5} transform="rotate(45 75 53)" />
      <ConnectionLine d="M68 53 L 73 58 L 84 47" accent delay={0.15} />
    </svg>
  );
}
