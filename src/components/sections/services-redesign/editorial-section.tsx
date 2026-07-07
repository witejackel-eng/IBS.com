"use client";

import { Users, Zap, Layers, Cpu, Activity, GitBranch } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { IllustrationFrame } from "@/components/illustrations/illustration-frame";

const statements = [
  {
    icon: Users,
    text: "Instead of hiring six vendors, you work with one engineering team that understands every system in your building.",
  },
  {
    icon: Zap,
    text: "Every discipline — voice, AV, networking, security, call center, and software — is planned together, not in isolation.",
  },
  {
    icon: Layers,
    text: "Cross-domain coordination eliminates the finger-pointing that happens when multiple vendors install side by side.",
  },
  {
    icon: Cpu,
    text: "Your network rack, boardroom, and surveillance system share the same documentation, support cadence, and accountability.",
  },
  {
    icon: Activity,
    text: "Problems get one call, one escalation path, and one team that already knows your site — not a three-vendor conference call.",
  },
  {
    icon: GitBranch,
    text: "As your needs grow, new systems plug into the same ecosystem instead of creating a new silo.",
  },
] as const;

export function EditorialSection() {
  return (
    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
      {/* Left: statements */}
      <RevealGroup className="flex flex-col gap-10" stagger={0.08}>
        {statements.map((s) => {
          const Icon = s.icon;
          return (
            <RevealItem key={s.text.slice(0, 16)} className="flex gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
                <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </div>
              <p className="text-base leading-relaxed text-charcoal lg:text-lg">{s.text}</p>
            </RevealItem>
          );
        })}
      </RevealGroup>

      {/* Right: illustration placeholder */}
      <Reveal direction="left" delay={0.2}>
        <IllustrationFrame className="aspect-[4/5] w-full lg:aspect-auto lg:h-full lg:min-h-[480px]">
          <div className="flex h-full w-full flex-col items-center justify-center p-12 text-center">
            {/* Abstract engineering team visual */}
            <svg viewBox="0 0 200 200" className="h-48 w-48 text-deep-blue/20 lg:h-64 lg:w-64" fill="none" aria-hidden="true">
              {/* Stylized interconnected hexagons representing an integrated team */}
              <polygon points="100,20 140,45 140,95 100,120 60,95 60,45" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
              <polygon points="100,80 140,105 140,155 100,180 60,155 60,105" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
              <line x1="100" y1="120" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
              <line x1="60" y1="95" x2="60" y2="105" stroke="currentColor" strokeWidth="1" />
              <line x1="140" y1="95" x2="140" y2="105" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="70" r="6" className="fill-deep-blue" fillOpacity="0.3" />
              <circle cx="100" cy="130" r="6" className="fill-deep-blue" fillOpacity="0.3" />
              <circle cx="65" cy="50" r="4" className="fill-deep-blue" fillOpacity="0.2" />
              <circle cx="135" cy="50" r="4" className="fill-deep-blue" fillOpacity="0.2" />
              <circle cx="65" cy="150" r="4" className="fill-deep-blue" fillOpacity="0.2" />
              <circle cx="135" cy="150" r="4" className="fill-deep-blue" fillOpacity="0.2" />
            </svg>
            <p className="mt-6 text-sm font-medium tracking-wide text-steel uppercase">One Engineering Team</p>
          </div>
        </IllustrationFrame>
      </Reveal>
    </div>
  );
}