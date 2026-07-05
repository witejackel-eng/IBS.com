import type { SVGProps } from "react";

/**
 * Small line-icon family sharing stroke width, cap/join, and geometry with
 * the illustration system. Used only where the brand is actually felt
 * (capability bullets, eyebrow glyphs, process/quality markers) — functional
 * chrome (nav, forms, footer) stays on lucide-react by design; see the Phase
 * 2 plan for why replacing every UI glyph site-wide isn't in scope here.
 */
type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CapabilityCheckIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.25 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function NetworkNodeIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 8 L7 16.5 M12 8 L17 16.5" />
    </svg>
  );
}

export function ComplianceMarkIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M12 3.5l6.5 3v5.5c0 4.5-2.8 7.3-6.5 8.5-3.7-1.2-6.5-4-6.5-8.5V6.5z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function MonitoringPulseIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

export function PrecisionTargetIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
    </svg>
  );
}

export function DocumentLineIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M7 3.5h7l4 4v13H7z" />
      <path d="M14 3.5v4h4" />
      <path d="M9.5 12.5h6M9.5 16h4" />
    </svg>
  );
}

export function SupportHeadsetIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M5 13.5v-2a7 7 0 0 1 14 0v2" />
      <rect x="3.5" y="13.5" width="3.5" height="5" rx="1" />
      <rect x="17" y="13.5" width="3.5" height="5" rx="1" />
      <path d="M19 18.5v.5a3 3 0 0 1-3 3h-2" />
    </svg>
  );
}

export function SecurityLockIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="5.5" y="11" width="13" height="9.5" rx="1.5" />
      <path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
      <circle cx="12" cy="15.5" r="1.3" />
    </svg>
  );
}
