import React from "react";

/**
 * Tabs — segmented control for project-category filters.
 */
export function Tabs({ items, value, onChange, style }) {
  return (
    <div
      style={{
        display: "inline-flex",
        gap: "var(--space-1)",
        background: "var(--bg-surface)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-md)",
        padding: "4px",
        ...style,
      }}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              padding: "7px 14px",
              borderRadius: "var(--radius-sm)",
              border: "none",
              cursor: "pointer",
              color: active ? "var(--text-on-brand)" : "var(--text-secondary)",
              background: active ? "var(--brand)" : "transparent",
              transition: "var(--transition-default)",
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
