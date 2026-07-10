import React from "react";

const toneStyle = {
  brand: { color: "var(--brand)", background: "var(--brand-wash)", border: "1px solid rgba(34,211,238,0.3)" },
  neutral: { color: "var(--text-secondary)", background: "var(--bg-surface-raised)", border: "1px solid var(--border-default)" },
  success: { color: "var(--status-success)", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" },
  warning: { color: "var(--status-warning)", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" },
  danger: { color: "var(--status-danger)", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" },
};

/**
 * Badge — small status/label pill. Mono uppercase, used for
 * project status ("LIVE", "WIP"), roles, or counts.
 */
export function Badge({ children, tone = "neutral", dot = false, style, ...rest }) {
  const t = toneStyle[tone] || toneStyle.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        padding: "3px 8px",
        borderRadius: "var(--radius-full)",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "currentColor",
          }}
        />
      )}
      {children}
    </span>
  );
}
