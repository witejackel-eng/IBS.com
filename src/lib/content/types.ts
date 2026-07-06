export interface Capability {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  summary: string;
  intro: string;
  /** Present when a real, freely-licensed photo represents this service well. */
  image?: string;
  /** Fallback visual (icon name from lucide-react) for services without a good photo. */
  icon?: "phone-call" | "headset";
  capabilities: Capability[];
}

export interface Partner {
  name: string;
  slug: string;
  category: "av-integration" | "communication-it" | "security";
}

export interface Segment {
  slug: string;
  title: string;
  summary: string;
  needs: string[];
  relevantServiceSlugs: string[];
}

export interface ProcessStep {
  slug: string;
  title: string;
  description: string;
}

/** A placeholder-flagged slot: rendered with a visible "pending" treatment, never as a real claim. */
export interface QualityPlaceholder {
  title: string;
  description: string;
  placeholder: true;
}

/**
 * A generic, illustrative delivery scenario built from real service
 * capabilities -- not a completed client engagement. Every render site must
 * show the `illustrative` flag as a visible badge, never as a footnote.
 */
export interface ProjectScenario {
  slug: string;
  illustrative: true;
  role: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  technicalHighlights: string[];
  location: string;
  relevantServiceSlugs: string[];
}
