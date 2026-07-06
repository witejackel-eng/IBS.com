"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Touch/drag to scroll support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    if (trackRef.current) {
      scrollLeft.current = trackRef.current.scrollLeft;
    }
    setIsPaused(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    setIsPaused(false);
  }, []);

  // Keyboard navigation support
  const childArray = Array.isArray(children) ? children : [children];

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let newIndex = focusedIndex;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        newIndex = (focusedIndex + 1) % childArray.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        newIndex = (focusedIndex - 1 + childArray.length) % childArray.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        newIndex = childArray.length - 1;
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        // Focus the partner element
        const container = containerRef.current;
        if (container) {
          const items = container.querySelectorAll<HTMLElement>("[data-marquee-item]");
          items[newIndex]?.focus();
        }
      }
    },
    [focusedIndex, childArray.length]
  );

  // Auto-pause when an item is focused
  useEffect(() => {
    if (focusedIndex >= 0) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  }, [focusedIndex]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      role="region"
      aria-label="Partner brands"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      {/* Scrollable track for touch devices */}
      <div
        ref={trackRef}
        className={cn(
          "flex cursor-grab items-center gap-20 overflow-x-auto scroll-smooth px-5 md:cursor-default md:overflow-visible md:px-0",
          "scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "md:animate-marquee",
          reverse && "md:[animation-direction:reverse]",
          (pauseOnHover || isPaused) && "group-hover:[animation-play-state:paused]",
          isPaused && "md:[animation-play-state:paused]"
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* First set */}
        {childArray.map((child, index) => (
          <div
            key={`a-${index}`}
            data-marquee-item
            tabIndex={0}
            role="group"
            aria-roledescription="slide"
            aria-label={`Partner ${index + 1} of ${childArray.length}`}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(-1)}
            className="shrink-0 outline-none"
          >
            {child}
          </div>
        ))}
        {/* Duplicate set for CSS animation (visible on desktop only) */}
        {childArray.map((child, index) => (
          <div
            key={`b-${index}`}
            aria-hidden
            className="shrink-0 md:block hidden"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}