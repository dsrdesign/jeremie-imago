import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAFAFA",
          position: "relative",
        }}
      >
        {/* Cercle décoratif violet */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3F0069 0%, #E10600 100%)",
            opacity: 0.08,
          }}
        />

        {/* Logo IJ. */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#FFFFFF",
              border: "2px solid #E4E4E7",
            }}
          >
            <span style={{ color: "#E10600", fontWeight: 800, fontSize: 28, fontFamily: "sans-serif", letterSpacing: -1 }}>IJ</span>
            <span style={{ color: "#3F0069", fontWeight: 800, fontSize: 28, fontFamily: "sans-serif" }}>.</span>
          </div>
        </div>

        {/* Nom */}
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, color: "#18181B", lineHeight: 1.1 }}>
          {profile.name}
        </div>

        {/* Rôle */}
        <div style={{ display: "flex", marginTop: 16, fontSize: 30, color: "#71717A", fontWeight: 500 }}>
          {profile.role}
        </div>

        {/* Trait rouge */}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 80,
            height: 4,
            borderRadius: 2,
            background: "#E10600",
          }}
        />

        {/* Localisation */}
        <div style={{ display: "flex", marginTop: 20, fontSize: 22, color: "#71717A" }}>
          {profile.location}
        </div>
      </div>
    ),
    size,
  );
}
