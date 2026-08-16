import { ImageResponse } from "next/og";
import { seoConfig } from "@/components/seo";

export const alt = seoConfig.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f7f5",
          color: "#0c0a09",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              width: "92px",
              height: "92px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              background: "#ff9100",
              color: "#ffffff",
              fontSize: "52px",
              fontWeight: 900,
            }}
          >
            F
          </div>
          <div style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "10px", textTransform: "uppercase" }}>
            {seoConfig.siteName}
          </div>
        </div>

        <div>
          <div style={{ color: "#8f4f00", fontSize: "28px", fontWeight: 900, letterSpacing: "12px", textTransform: "uppercase" }}>
            Artificial Intelligence Project
          </div>
          <div style={{ marginTop: "24px", maxWidth: "900px", fontSize: "92px", fontWeight: 900, lineHeight: 0.95 }}>
            {seoConfig.title}
          </div>
          <div style={{ marginTop: "28px", maxWidth: "940px", color: "#44403c", fontSize: "34px", lineHeight: 1.35 }}>
            {seoConfig.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
