import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site"

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0B1020",
        color: "#F3F4F6",
        padding: "72px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -120,
          width: 720,
          height: 720,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(120,103,247,0.35), rgba(120,103,247,0))",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 20,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#98A2B8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "1px solid #263149",
              background: "#121A2B",
              color: "#A79BFF",
              fontSize: 18,
            }}
          >
            {siteConfig.shortName}
          </div>
          {siteConfig.name}
        </div>
        <div>{siteConfig.role}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            maxWidth: 940,
          }}
        >
          <span>I build digital products that solve</span>
          <span
            style={{
              color: "#A79BFF",
              fontStyle: "italic",
              marginLeft: 18,
            }}
          >
            real problems.
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #263149",
          paddingTop: 24,
          fontSize: 20,
          color: "#98A2B8",
        }}
      >
        <div>Next.js · TypeScript · MongoDB</div>
        <div style={{ color: "#4ADE80" }}>Open to opportunities</div>
      </div>
    </div>,
    {
      ...size,
    }
  )
}
