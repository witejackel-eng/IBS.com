import {
  Headset,
  KeyRound,
  MonitorPlay,
  Network,
  PhoneCall,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Slug -> icon map for the Services mega menu. Distinct from `Service.icon`
 * (a photo fallback used by ServiceVisual) since most services here have a
 * real `image` instead, but the mega menu wants an icon for every item.
 */
export const navIconMap: Record<string, LucideIcon> = {
  "voice-communication": PhoneCall,
  "audio-video-boardroom-solutions": MonitorPlay,
  "it-infrastructure": Network,
  "security-solutions": ShieldCheck,
  "call-center-solutions": Headset,
  "software-licenses": KeyRound,
  "annual-maintenance-service": Wrench,
};
