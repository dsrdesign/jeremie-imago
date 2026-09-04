import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#FFFFFF",
        }}
      >
        <span style={{ color: "#E10600", fontWeight: 900, fontSize: 96, fontFamily: "sans-serif", letterSpacing: -3 }}>IJ</span>
        <span style={{ color: "#3F0069", fontWeight: 900, fontSize: 96, fontFamily: "sans-serif" }}>.</span>
      </div>
    ),
    size,
  );
}
