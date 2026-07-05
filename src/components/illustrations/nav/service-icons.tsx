import { ConnectionLine, Node } from "@/components/illustrations/primitives";

/**
 * Miniature (24x24) nav-scale icons built from the same Node/ConnectionLine
 * primitives as the full-size service illustrations, so the Services mega
 * menu reads as part of one illustration system rather than an icon library.
 * All connections render statically (animate={false}) since these live in
 * an interactive dropdown, not a scroll-reveal context.
 */

type IconProps = { className?: string };

export function VoiceNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <ConnectionLine d="M6 17 Q12 8 18 17" animate={false} />
      <ConnectionLine d="M15.5 8.5 Q18.5 8.5 18.5 11.5" accent animate={false} />
      <Node cx={6} cy={17} r={2} accent filled />
      <Node cx={18} cy={17} r={2} />
    </svg>
  );
}

export function AvNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5.5" width="16" height="10" rx="1.5" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <Node cx={12} cy={10.5} r={3} accent />
      <ConnectionLine d="M10.7 9 L14 10.5 L10.7 12 Z" accent animate={false} />
      <ConnectionLine d="M9 18.5 H15" animate={false} />
    </svg>
  );
}

export function NetworkNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <ConnectionLine d="M12 12 L5 6" animate={false} />
      <ConnectionLine d="M12 12 L19 6" animate={false} />
      <ConnectionLine d="M12 12 L5 18" animate={false} />
      <ConnectionLine d="M12 12 L19 18" animate={false} />
      <Node cx={12} cy={12} r={2.2} accent filled />
      <Node cx={5} cy={6} r={1.8} />
      <Node cx={19} cy={6} r={1.8} />
      <Node cx={5} cy={18} r={1.8} />
      <Node cx={19} cy={18} r={1.8} />
    </svg>
  );
}

export function SecurityNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3.8 L18.5 6.3 V11.3 C18.5 15.6 15.8 18.5 12 19.8 C8.2 18.5 5.5 15.6 5.5 11.3 V6.3 Z"
        fill="none"
        stroke="var(--steel)"
        strokeWidth={1.5}
      />
      <Node cx={12} cy={11.5} r={2.4} accent filled />
    </svg>
  );
}

export function CallCenterNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <ConnectionLine d="M5 14 V12.5 A7 7 0 0 1 19 12.5 V14" animate={false} />
      <rect x="3.2" y="13" width="3" height="5.4" rx="1.4" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <rect x="17.8" y="13" width="3" height="5.4" rx="1.4" fill="none" stroke="var(--steel)" strokeWidth={1.5} />
      <ConnectionLine d="M19.3 18.4 v0.6 a2.1 2.1 0 0 1 -2.1 2.1 h-1.8" accent animate={false} />
      <Node cx={15} cy={21.1} r={1} accent filled />
    </svg>
  );
}

export function LicenseNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <Node cx={7} cy={12} r={3.2} />
      <ConnectionLine d="M10 12 H18.5" animate={false} />
      <ConnectionLine d="M15.5 12 V14.2" animate={false} />
      <ConnectionLine d="M18.5 12 V14.2" animate={false} />
      <Node cx={7} cy={12} r={1} accent filled />
    </svg>
  );
}

export function MaintenanceNavIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2 4.2 L17.8 5.7 V8.7 L15.2 10.2 L12.6 8.7 V5.7 Z"
        fill="none"
        stroke="var(--steel)"
        strokeWidth={1.5}
      />
      <ConnectionLine d="M13.5 9.5 L7 16" accent animate={false} />
      <Node cx={6} cy={17} r={2} accent filled />
    </svg>
  );
}

export const serviceNavIconMap: Record<string, React.ComponentType<IconProps>> = {
  "voice-communication": VoiceNavIcon,
  "audio-video-boardroom-solutions": AvNavIcon,
  "it-infrastructure": NetworkNavIcon,
  "security-solutions": SecurityNavIcon,
  "call-center-solutions": CallCenterNavIcon,
  "software-licenses": LicenseNavIcon,
  "annual-maintenance-service": MaintenanceNavIcon,
};
