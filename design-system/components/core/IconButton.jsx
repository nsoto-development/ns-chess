import React from "react";

const sizeMap = {
  sm: 28,
  md: 36,
  lg: 44,
};

/**
 * IconButton — square icon-only control for toolbars, cards, nav.
 */
export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = sizeMap[size] || sizeMap.md;

  const base =
    variant === "solid"
      ? { background: "var(--bg-surface-raised)", border: "1px solid var(--border-default)" }
      : { background: "transparent", border: "1px solid transparent" };

  const hoverStyle =
    !disabled && hover
      ? { background: "var(--bg-surface-hover)", borderColor: "var(--border-default)", color: "var(--brand)" }
      : {};

  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim,
        height: dim,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-sm)",
        color: disabled ? "var(--text-disabled)" : "var(--text-secondary)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-default)",
        ...base,
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {icon}
    </button>
  );
}
