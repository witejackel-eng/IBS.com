import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SplitText } from "@/components/motion/split-text";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up" amount={0.8}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-steel uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <SplitText
        text={title}
        as="h2"
        className={cn(
          "text-display-3 font-semibold tracking-tight text-charcoal text-balance",
          align === "center" ? "text-center" : "text-left"
        )}
      />
      {description && (
        <Reveal direction="up" delay={0.15} amount={0.8}>
          <p className={cn("max-w-2xl text-lg text-steel", align === "center" ? "text-center" : "text-left")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
