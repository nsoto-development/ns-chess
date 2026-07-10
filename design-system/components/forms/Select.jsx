import React from "react";

/**
 * Select — native-backed dropdown, styled to match Input.
 */
export function Select({ label, value, onChange, options = [], disabled = false, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            appearance: "none",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--text-primary)",
            background: "var(--bg-inset)",
            border: `1px solid ${focused ? "var(--brand)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-sm)",
            padding: "10px 36px 10px 12px",
            outline: "none",
            boxShadow: focused ? "var(--glow-brand-sm)" : "none",
            transition: "var(--transition-default)",
            opacity: disabled ? 0.5 : 1,
            cursor: "pointer",
          }}
          {...rest}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--text-tertiary)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
          }}
        >
          ▾
        </span>
      </div>
    </div>
  );
}
