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
