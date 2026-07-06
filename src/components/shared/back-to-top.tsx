"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SCROLL_THRESHOLD = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    if (prefersReducedMotion) {
      window.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // For reduced motion users, show a static button (no enter/exit animations)
  if (prefersReducedMotion) {
    if (!visible) return null;
    return (
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-24 right-6 z-40 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-warm-white shadow-md transition-shadow hover:shadow-lg md:bottom-6"
      >
        <ArrowUp className="h-5 w-5 text-charcoal" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.15)" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-6 z-40 flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-border bg-warm-white shadow-md glass md:bottom-6"
        >
          <ArrowUp className="h-5 w-5 text-charcoal" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}