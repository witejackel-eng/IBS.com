import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon -- same brand mark as icon.tsx/opengraph-image.tsx, scaled up. iOS applies
 * its own corner rounding, so this stays a full-bleed square. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EA580C",
          color: "#FBFAF7",
          fontFamily: "sans-serif",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        IBS
      </div>
    ),
    { ...size }
  );
}
