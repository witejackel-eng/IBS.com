"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WHATSAPP_NUMBER = "918368561919";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about your services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    if (!visible) return null;
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
      </a>
    );
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0 12px 28px -6px rgba(37, 211, 102, 0.45)" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
          style={{ backgroundColor: "#25D366" }}
        >
          {/* Subtle pulse ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: "#25D366" }}
            aria-hidden
          />
          <WhatsAppIcon className="relative h-7 w-7 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.142-1.962A15.926 15.926 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.314 22.61c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.812-8.064-7.126-.23-.314-1.928-2.568-1.928-4.896s1.222-3.474 1.656-3.95c.434-.474.948-.594 1.264-.594.316 0 .632.004.908.016.29.014.682-.11 1.066.814.39.948 1.33 3.248 1.446 3.482.118.234.196.508.04.822-.158.314-.236.508-.47.784-.236.274-.496.614-.708.822-.236.236-.482.492-.206.964.274.474 1.222 2.014 2.624 3.264 1.802 1.608 3.32 2.106 3.794 2.342.474.234.75.196 1.026-.118.276-.314 1.184-1.38 1.5-1.854.316-.474.632-.394 1.066-.236.434.158 2.748 1.296 3.222 1.532.474.236.79.354.908.55.118.196.118 1.126-.272 2.226z" />
    </svg>
  );
}