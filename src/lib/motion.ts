/** Shared easing curve used by every scroll/interaction reveal across the site. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Named duration scale (seconds) — pick the closest fit instead of a new magic number. */
export const DURATION = {
  fast: 0.2,
  base: 0.35,
  reveal: 0.7,
  hero: 0.8,
  mask: 0.9,
} as const;

export const SPRING_SNAPPY = { type: "spring", stiffness: 260, damping: 18 } as const;
export const SPRING_MAGNETIC = { type: "spring", stiffness: 150, damping: 12, mass: 0.4 } as const;
export const SPRING_TILT = { type: "spring", stiffness: 220, damping: 22 } as const;
