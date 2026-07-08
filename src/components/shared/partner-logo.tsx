/**
 * Partner brand logo component — renders the brand's SVG logo from /public/brands/.
 * Falls back to a styled text wordmark for any brand missing an SVG file.
 */

import Image from "next/image";
import { brandLogoMap } from "@/lib/content/brand-logo-map";

interface PartnerLogoProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function PartnerLogo({ name, className, style }: PartnerLogoProps) {
  const logoSrc = brandLogoMap[name];

  if (logoSrc) {
    return (
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        width={160}
        height={56}
        className={className}
        style={style}
      />
    );
  }

  // Fallback: render as styled text
  return (
    <span
      className={className}
      style={{
        ...style,
        fontWeight: 700,
        letterSpacing: "0.02em",
        color: "#1A1A1A",
        display: "inline-block",
        lineHeight: 1,
      }}
    >
      {name}
    </span>
  );
}