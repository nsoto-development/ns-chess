import React from "react";

/**
 * Input — single-line text field. Focus ring is a cyan glow, not a
 * color-only change, so it reads clearly against the dark surface.
 */
export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  disabled = false,
  icon = null,
  style,
  ...rest
}) {
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
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && (
          <span style={{ position: "absolute", left: 12, display: "flex", color: "var(--text-tertiary)" }}>
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            color: "var(--text-primary)",
            background: "var(--bg-inset)",
            border: `1px solid ${error ? "var(--status-danger)" : focused ? "var(--brand)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-sm)",
            padding: icon ? "10px 12px 10px 36px" : "10px 12px",
            outline: "none",
            boxShadow: focused ? "var(--glow-brand-sm)" : "none",
            transition: "var(--transition-default)",
            opacity: disabled ? 0.5 : 1,
          }}
          {...rest}
        />
      </div>
      {error && (
        <span style={{ fontSize: "var(--text-xs)", color: "var(--status-danger)" }}>{error}</span>
      )}
    </div>
  );
}
