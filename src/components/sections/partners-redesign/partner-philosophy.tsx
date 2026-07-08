"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Award, Link, RefreshCw, Headphones } from "lucide-react";

const benefits = [
  { icon: Award, title: "Certified products", desc: "Full manufacturer warranty on genuine products sourced through authorized channels." },
  { icon: Link, title: "Compatibility guaranteed", desc: "Hardware chosen to work together across brands, not sourced in isolation." },
  { icon: RefreshCw, title: "Lifecycle support", desc: "From installation through to maintenance — AMC-backed servicing as systems age." },
  { icon: Headphones, title: "Direct manufacturer support", desc: "OEM relationship means manufacturer backing behind every deployment." },
];

export function PartnerPhilosophy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
      {/* Left - editorial text */}
      <div className="lg:col-span-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: EASE_OUT_EXPO as [number, number, number, number] }}
        >
          <span className="text-[10px] font-semibold tracking-[0.14em] text-deep-blue uppercase">
            Partner philosophy
          </span>
          <h2 className="mt-4 text-display-3 font-semibold tracking-tight text-charcoal text-balance">
            Why IBS works only with authorized OEMs.
          </h2>
          <p className="mt-6 text-steel leading-relaxed">
            Every product we install comes through an authorized OEM channel, never a gray-market
            reseller. Working directly with manufacturers means we recommend hardware based on what
            a project actually needs, not what one vendor happens to sell. It also means genuine
            warranties, manufacturer support, and one team responsible for how the different brands
            work together on site.
          </p>
          <p className="mt-4 text-steel leading-relaxed">
            This is not a philosophical position — it is an engineering one. When a SIP trunk
            interoperates with a specific firewall, when a camera system integrates with an access
            control panel, when a DSP processor works with a particular microphone array — those
            combinations are tested and documented by the manufacturers. Gray-market hardware has
            no such guarantee.
          </p>
        </motion.div>
      </div>

      {/* Right - benefits */}
      <div className="lg:col-span-2 space-y-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="flex gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : 0.2 + i * 0.08,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/10 text-deep-blue">
              <b.icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-charcoal font-heading">{b.title}</h3>
              <p className="mt-1 text-sm text-steel leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}