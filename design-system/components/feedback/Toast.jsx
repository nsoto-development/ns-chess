import React from "react";

const toneColor = {
  info: "var(--brand)",
  success: "var(--status-success)",
  danger: "var(--status-danger)",
};

/**
 * Toast — transient bottom-corner notification, mono timestamp-style
 * accent bar, auto-dismiss handled by consumer (see prompt.md).
 */
export function Toast({ tone = "info", title, message, onDismiss }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--space-3)",
        width: 320,
        background: "var(--bg-surface-raised)",
        border: "1px solid var(--border-default)",
        borderLeft: `3px solid ${toneColor[tone]}`,
        borderRadius: "var(--radius-md)",
        padding: "var(--space-4)",
        boxShadow: "var(--shadow-lg)",
        animation: "dcToastIn var(--duration-base) var(--ease-out)",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-primary)", marginBottom: 2 }}>
          {title}
        </div>
        {message && (
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>{message}</div>
        )}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{ background: "transparent", border: "none", color: "var(--text-tertiary)", cursor: "pointer" }}
        >
          ×
        </button>
      )}
      <style>{`@keyframes dcToastIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </div>
  );
}
