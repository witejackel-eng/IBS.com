import { BlueprintGrid, ConnectionLine } from "@/components/illustrations/primitives";

export function DocumentationIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <BlueprintGrid id="grid-documentation" />
      <path d="M40 32 L 70 32 L 80 42 L 80 90 L 40 90 Z" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M70 32 L 70 42 L 80 42" fill="none" stroke="var(--steel)" strokeWidth={1.5} strokeLinejoin="round" />
      <ConnectionLine d="M48 54 L 72 54 M48 64 L 72 64 M48 74 L 62 74" accent />
    </svg>
  );
}
