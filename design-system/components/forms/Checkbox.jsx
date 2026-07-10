import React from "react";

/**
 * Checkbox — custom box (native input visually hidden but present
 * for a11y), cyan check + glow when checked.
 */
export function Checkbox({ label, checked, onChange, disabled = false, style, ...rest }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)",
        ...style,
      }}
    >
      <span style={{ position: "relative", width: 18, height: 18, flexShrink: 0 }}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          style={{ position: "absolute", inset: 0, opacity: 0, cursor: "inherit" }}
          {...rest}
        />
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius-xs)",
            border: `1px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
            background: checked ? "var(--brand)" : "var(--bg-inset)",
            boxShadow: checked ? "var(--glow-brand-sm)" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "var(--transition-default)",
          }}
        >
          {checked && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-brand)" strokeWidth="3">
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
      </span>
      {label}
    </label>
  );
}
