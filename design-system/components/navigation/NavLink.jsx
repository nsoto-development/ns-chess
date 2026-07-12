import React from "react";

/**
 * NavLink — top-nav / footer link with animated underline on
 * hover and a persistent brand underline when active.
 */
export function NavLink({ children, href = "#", active = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-sm)",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        textDecoration: "none",
        paddingBottom: "4px",
        transition: "var(--transition-default)",
        ...style,
      }}
    >
      {children}
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1.5px",
          background: "var(--brand)",
          transform: active || hover ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform var(--duration-base) var(--ease-out)",
        }}
      />
    </a>
  );
}
