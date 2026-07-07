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
  /**
   * Optional long-form prose shown on the service detail page between the
   * hero and the capabilities grid. Each entry is one paragraph (rendered
   * inside a <p>). Used to give the page genuine, specific body copy
   * rather than only card labels — improves text-to-HTML ratio and gives
   * search engines and prospects something substantive to read.
   *
   * Content rule: every sentence must be traceable to a fact already on
   * ibsinfra.com or to the service's own capabilities list. No invented
   * stats, client names, or certifications.
   */
  body?: string[];
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
  /** Short label for compact contexts (icon grids, teasers). Falls back to title. */
  shortTitle?: string;
  summary: string;
  needs: string[];
  relevantServiceSlugs: string[];
  /**
   * Descriptive alt text for the segment's hero photo. Required because
   * the segment `title` alone (e.g. "Hotels") is too generic for screen
   * readers or image search — alt should describe what the photo actually
   * shows in the context of the segment.
   */
  imageAlt: string;
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
