import { ImageResponse } from "next/og";
import { company } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#FBFAF7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#EA580C",
              color: "#FBFAF7",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            IBS
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 26, fontWeight: 600, color: "#1a1a1a" }}>
            <span>Insight Business</span>
            <span>Solutions</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1, maxWidth: 980 }}>
            {company.positioning}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#5a5a5a", maxWidth: 900 }}>
            Voice · AV & Boardroom · IT Infrastructure · Security · Call Center · Software Licensing
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
