import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#FFFFFF",
          borderRadius: 7,
        }}
      >
        <span style={{ color: "#E10600", fontWeight: 900, fontSize: 18, fontFamily: "sans-serif", letterSpacing: -1 }}>IJ</span>
        <span style={{ color: "#3F0069", fontWeight: 900, fontSize: 18, fontFamily: "sans-serif" }}>.</span>
      </div>
    ),
    size,
  );
}
