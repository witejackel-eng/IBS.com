import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Without this, tailwind-merge doesn't recognize the project's custom
// text-display-1/2/3 font-size scale (defined in globals.css) as font-size
// utilities -- it lumps them in with text-color classes, so a class list
// like "text-display-2 ... text-charcoal" silently drops text-display-2.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-1", "display-2", "display-3"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
