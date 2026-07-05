"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "1.5rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <p style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8622c" }}>
          Something went wrong
        </p>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>The site hit an unexpected error</h1>
        <p style={{ maxWidth: "28rem", color: "#a3a3a3" }}>
          Please try again. If this keeps happening, contact us directly.
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: "0.5rem",
            borderRadius: "9999px",
            padding: "0.75rem 1.75rem",
            background: "#1e3a5f",
            color: "#fafafa",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
