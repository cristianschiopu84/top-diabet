import { ImageResponse } from "next/og";

export const alt = "Dr. Mihaela Vladu — Top Diabet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0E7490 0%, #14B8A6 55%, #22C55E 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, letterSpacing: 4, textTransform: "uppercase" }}>
          Dr. Mihaela Vladu
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Top Diabet
        </div>
        <div style={{ fontSize: 32, marginTop: 24, maxWidth: 800, opacity: 0.95 }}>
          Grijă personalizată pentru controlul diabetului.
        </div>
      </div>
    ),
    { ...size }
  );
}
