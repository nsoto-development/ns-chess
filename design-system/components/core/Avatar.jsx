import React from "react";

const sizeMap = { sm: 32, md: 44, lg: 72, xl: 112 };

/**
 * Avatar — profile image with brand-ring fallback (initials in mono).
 */
export function Avatar({ src, alt = "", initials = "NS", size = "md", ring = false, style }) {
  const dim = sizeMap[size] || sizeMap.md;
  return (
    <div
      style={{
        width: dim,
        height: dim,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--gradient-brand-subtle)",
        border: ring ? "2px solid var(--brand)" : "1px solid var(--border-default)",
        boxShadow: ring ? "var(--glow-brand-sm)" : "none",
        flexShrink: 0,
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: "var(--weight-semibold)",
            color: "var(--brand)",
            fontSize: dim * 0.36,
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
