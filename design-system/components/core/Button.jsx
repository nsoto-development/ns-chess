import React from "react";

const sizes = {
  sm: { padding: "6px 12px", fontSize: "var(--text-xs)", gap: "6px" },
  md: { padding: "10px 18px", fontSize: "var(--text-sm)", gap: "8px" },
  lg: { padding: "13px 24px", fontSize: "var(--text-md)", gap: "10px" },
};

function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: "var(--gray-850)",
      color: "var(--text-disabled)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none",
      cursor: "not-allowed",
    };
  }
  switch (variant) {
    case "primary":
      return {
        background: "var(--brand)",
        color: "var(--text-on-brand)",
        border: "1px solid var(--brand)",
        boxShadow: "var(--glow-brand-button)",
      };
    case "secondary":
      return {
        background: "var(--bg-surface-raised)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-default)",
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--text-secondary)",
        border: "1px solid transparent",
      };
    case "danger":
      return {
        background: "rgba(239,68,68,0.12)",
        color: "var(--status-danger)",
        border: "1px solid rgba(239,68,68,0.35)",
      };
    default:
      return {};
  }
}

/**
 * Button — primary interactive control. Mono label, small radius,
 * cyan glow on the primary variant (never a bare drop shadow).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  iconPosition = "left",
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizeStyle = sizes[size] || sizes.md;
  const vStyle = variantStyle(variant, disabled);

  const hoverAdjust =
    !disabled && hover
      ? variant === "primary"
        ? { background: "var(--brand-strong)", borderColor: "var(--brand-strong)" }
        : variant === "secondary"
        ? { background: "var(--bg-surface-hover)", borderColor: "var(--border-strong)" }
        : variant === "ghost"
        ? { background: "var(--bg-surface-hover)", color: "var(--text-primary)" }
        : variant === "danger"
        ? { background: "rgba(239,68,68,0.2)" }
        : {}
      : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-normal)",
        borderRadius: "var(--radius-sm)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-default)",
        transform: active && !disabled ? "scale(0.97)" : "scale(1)",
        whiteSpace: "nowrap",
        ...sizeStyle,
        ...vStyle,
        ...hoverAdjust,
        ...style,
      }}
      {...rest}
    >
      {icon && iconPosition === "left" && (
        <span style={{ display: "inline-flex", marginRight: sizeStyle.gap }}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span style={{ display: "inline-flex", marginLeft: sizeStyle.gap }}>{icon}</span>
      )}
    </button>
  );
}
