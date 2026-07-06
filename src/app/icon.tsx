import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon -- reuses the exact brand mark (orange badge, "IBS" wordmark) from opengraph-image.tsx. */
export default function Icon() {
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
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        IBS
      </div>
    ),
    { ...size }
  );
}
