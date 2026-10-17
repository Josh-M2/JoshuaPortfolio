import { ImageResponse } from "next/og";
import { profile } from "@/config/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: "100%", height: "100%", display: "flex", flexDirection: "column",
      justifyContent: "space-between", padding: 65, background: "#f3f7f5", color: "#173b3e",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, fontWeight: 700 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 12, background: "#173b3e", color: "white", fontSize: 22 }}>JM</div>
        {profile.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3, maxWidth: 1000 }}>Building the systems behind useful software.</div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", fontSize: 23, color: "#0b5553" }}>
          <span>TypeScript</span><span>→</span><span>Next.js</span><span>→</span><span>AWS</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid #c9dad4", paddingTop: 24, fontSize: 20 }}>
        <span>Projects · Experience · Contact</span><span>{profile.location}</span>
      </div>
    </div>,
    size,
  );
}
