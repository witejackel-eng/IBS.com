"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";

export function SplitText({
  text,
  className,
  as: Tag = "h2",
  splitBy = "word",
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "char";
  delay?: number;
  stagger?: number;
}) {
  const parts = splitBy === "word" ? text.split(" ") : text.split("");
  const prefersReducedMotion = useReducedMotion();

  return (
    <Tag className={cn("block overflow-hidden", className)} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {parts.map((part, i) => (
          <span key={i} className="inline-block overflow-hidden align-top">
            <motion.span
              className="inline-block"
              variants={
                prefersReducedMotion
                  ? { hidden: { y: "0%", opacity: 1 }, visible: { y: "0%", opacity: 1, transition: { duration: 0 } } }
                  : {
                      hidden: { y: "110%", opacity: 0 },
                      visible: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: DURATION.reveal, ease: EASE_OUT_EXPO },
                      },
                    }
              }
            >
              {part}
              {splitBy === "word" && i !== parts.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
