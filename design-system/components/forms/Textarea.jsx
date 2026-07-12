import React from "react";

/**
 * Textarea — multi-line field, e.g. project inquiry / message body.
 */
export function Textarea({ label, placeholder, value, onChange, rows = 4, error, disabled = false, style, ...rest }) {
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
      <textarea
        placeholder={placeholder}
        value={value}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          resize: "vertical",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-normal)",
          color: "var(--text-primary)",
          background: "var(--bg-inset)",
          border: `1px solid ${error ? "var(--status-danger)" : focused ? "var(--brand)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-sm)",
          padding: "10px 12px",
          outline: "none",
          boxShadow: focused ? "var(--glow-brand-sm)" : "none",
          transition: "var(--transition-default)",
          opacity: disabled ? 0.5 : 1,
        }}
        {...rest}
      />
      {error && <span style={{ fontSize: "var(--text-xs)", color: "var(--status-danger)" }}>{error}</span>}
    </div>
  );
}
