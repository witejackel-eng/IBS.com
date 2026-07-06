"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, MapPin } from "lucide-react";

interface ViewOnMapProps {
  address?: string;
  className?: string;
}

export function ViewOnMap({
  address = "Plot No. 94, Block B, Pocket 10, Sector 13, Dwarka, New Delhi 110075",
  className = "",
}: ViewOnMapProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (isOpen) setIsMapLoaded(false);
  };

  const springConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`flex w-full flex-col items-center justify-center ${className}`}>
      <div className="relative flex w-full items-center justify-center">
        <AnimatePresence mode="popLayout">
          {!isOpen ? (
            <motion.button
              key="button"
              layoutId="map-container"
              type="button"
              onClick={toggleOpen}
              className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border bg-card shadow-sm transition-colors hover:border-deep-blue/30"
              style={{ width: 180, height: 52 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={springConfig}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="View office location on map"
            >
              <motion.div
                layoutId="map-bg"
                className="absolute inset-0 opacity-10 transition-opacity"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=400&auto=format&fit=crop)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <motion.div className="relative z-10 flex items-center gap-3 px-4 py-4">
                <MapPin className="h-5 w-5 text-deep-blue transition-colors group-hover:text-deep-blue/80" />
                <span className="text-[16px] font-semibold tracking-tight text-charcoal">
                  View on Map
                </span>
              </motion.div>
            </motion.button>
          ) : (
            <motion.div
              key="map"
              layoutId="map-container"
              className="relative aspect-square w-[calc(100vw-64px)] overflow-hidden rounded-3xl border border-border bg-muted shadow-lg sm:w-[380px]"
              transition={springConfig}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="absolute inset-0 h-full w-full"
                style={{ filter: "invert(15%) hue-rotate(180deg)" }}
              >
                <iframe
                  title="IBS office location map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={mapUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                  className={`h-full w-full transition-opacity duration-700 ${isMapLoaded ? "opacity-100" : "opacity-0"}`}
                />
              </motion.div>

              {!isMapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-card">
                  <Loader2 className="h-8 w-8 animate-spin text-steel" />
                </div>
              )}

              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                type="button"
                onClick={toggleOpen}
                aria-label="Close map"
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-warm-white text-steel shadow-lg transition-all hover:bg-secondary active:scale-90 sm:top-5 sm:right-5"
              >
                <X className="h-5 w-5" strokeWidth={3} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}