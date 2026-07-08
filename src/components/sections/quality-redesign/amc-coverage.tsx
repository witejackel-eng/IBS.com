"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Phone, Monitor, Flame, Shield, Lock, Network } from "lucide-react";

const amcCategories = [
  { title: "Communication Technologies", icon: Phone, desc: "SIP, analog, and hybrid voice platforms — firmware updates, call-flow optimization, connectivity troubleshooting." },
  { title: "Audio / Video Solutions", icon: Monitor, desc: "AV setups in conference rooms, classrooms, and auditoriums — DSP calibration, cable checks, conferencing support." },
  { title: "Fire Alarm Systems", icon: Flame, desc: "Conventional and addressable panels — smoke detector cleaning, alarm verification, battery checks, audit support." },
  { title: "CCTV Surveillance", icon: Shield, desc: "IP and analog cameras — NVR/DVR integration, lens cleaning, angle verification, storage health checks." },
  { title: "Access Control", icon: Lock, desc: "Biometric, RFID, and keypad modules — configuration updates, event log monitoring, door controller diagnostics." },
  { title: "Networking Infrastructure", icon: Network, desc: "Switches, firewalls, Wi-Fi APs, UPS — firmware updates, capacity reviews, power backup testing." },
];

export function AmcCoverage() {
  const [active, setActive] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Left: Explanation */}
      <div>
        <h3 className="text-display-3 font-semibold tracking-tight text-charcoal text-balance">
          Comprehensive coverage across every system we install.
        </h3>
        <p className="mt-6 text-steel leading-relaxed">
          An IBS AMC is not a generic support contract. It is built around the specific
          equipment on your site, the manufacturer&apos;s recommended service intervals, and your
          own operational risk profile. Every visit produces a service log and health summary
          so there is a paper trail of what was inspected and what was found.
        </p>
        <p className="mt-4 text-steel leading-relaxed">
          From voice platforms and boardroom AV to fire alarm panels and access control
          controllers, the same certified engineers who installed your systems stay
          responsible for keeping them running.
        </p>
      </div>

      {/* Right: Interactive list */}
      <div className="space-y-2">
        {amcCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className={`rounded-2xl border p-5 cursor-pointer transition-all duration-300 ${
              active === i
                ? "border-deep-blue/40 bg-deep-blue/5 shadow-[0_8px_24px_-8px_rgba(234,88,12,0.15)]"
                : "border-border bg-card hover:border-deep-blue/20"
            }`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : i * 0.06,
              ease: EASE_OUT_EXPO as [number, number, number, number],
            }}
          >
            <div className="flex items-center gap-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                active === i ? "bg-deep-blue text-warm-white" : "bg-deep-blue/10 text-deep-blue"
              }`}>
                <cat.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h4 className="text-sm font-semibold text-charcoal font-heading">{cat.title}</h4>
            </div>
            <AnimatePresence>
              {active === i && (
                <motion.p
                  className="mt-3 pl-14 text-sm text-steel leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT_EXPO as [number, number, number, number] }}
                >
                  {cat.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}