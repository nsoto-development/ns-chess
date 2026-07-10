import React from "react";

/**
 * Tooltip — hover/focus label, mono text on a raised surface.
 */
export function Tooltip({ children, label, side = "top" }) {
  const [visible, setVisible] = React.useState(false);
  const posStyle = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  }[side];

  return (
    <span
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            ...posStyle,
            background: "var(--gray-850)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-default)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            padding: "5px 9px",
            borderRadius: "var(--radius-xs)",
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-md)",
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
