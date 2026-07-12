import React from "react";

/**
 * Tag — clickable/removable chip, e.g. tech-stack labels or
 * project-filter controls. Distinct from Badge (static status).
 */
export function Tag({ children, selected = false, onClick, onRemove, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;

  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        padding: "5px 10px",
        borderRadius: "var(--radius-sm)",
        cursor: clickable ? "pointer" : "default",
        transition: "var(--transition-default)",
        color: selected ? "var(--text-on-brand)" : "var(--text-secondary)",
        background: selected ? "var(--brand)" : hover && clickable ? "var(--bg-surface-hover)" : "var(--bg-surface-raised)",
        border: `1px solid ${selected ? "var(--brand)" : "var(--border-default)"}`,
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={{ opacity: 0.7, fontWeight: "var(--weight-bold)" }}
        >
          ×
        </span>
      )}
    </span>
  );
}
