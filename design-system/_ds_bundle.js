/* @ds-bundle: {"format":4,"namespace":"NsotoDevDesignSystem_0e0c82","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a7b13569b24e","components/core/Badge.jsx":"7557a9330fcb","components/core/Button.jsx":"93f8c310f060","components/core/Card.jsx":"1a6aa0407a3f","components/core/IconButton.jsx":"2d6e83ea6794","components/core/Tag.jsx":"bb02bb8d3d9a","components/feedback/Dialog.jsx":"4cba07ef2115","components/feedback/Toast.jsx":"f031a64230fd","components/feedback/Tooltip.jsx":"6a3f0f33be1c","components/forms/Checkbox.jsx":"80a73317edf0","components/forms/Input.jsx":"bd02c14f9a4b","components/forms/Select.jsx":"9ff8b83f45d4","components/forms/Textarea.jsx":"5459171dbfcc","components/navigation/NavLink.jsx":"0d4094475c1e","components/navigation/Tabs.jsx":"f4b75b9b55f0","ui_kits/portfolio/About.jsx":"5fe614b0d805","ui_kits/portfolio/Contact.jsx":"4f9598283edb","ui_kits/portfolio/Experience.jsx":"7d605b0e0b85","ui_kits/portfolio/Footer.jsx":"3134a5d7a426","ui_kits/portfolio/Hero.jsx":"86fb726615e8","ui_kits/portfolio/Nav.jsx":"a7192eeb9998","ui_kits/portfolio/Skills.jsx":"0b1bd9857a30","ui_kits/portfolio/data.js":"4f5ca1649ad6","ui_kits/portfolio/icons.jsx":"059e22c5af3d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NsotoDevDesignSystem_0e0c82 = window.NsotoDevDesignSystem_0e0c82 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const sizeMap = {
  sm: 32,
  md: 44,
  lg: 72,
  xl: 112
};

/**
 * Avatar — profile image with brand-ring fallback (initials in mono).
 */
function Avatar({
  src,
  alt = "",
  initials = "NS",
  size = "md",
  ring = false,
  style
}) {
  const dim = sizeMap[size] || sizeMap.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: dim,
      height: dim,
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--gradient-brand-subtle)",
      border: ring ? "2px solid var(--brand)" : "1px solid var(--border-default)",
      boxShadow: ring ? "var(--glow-brand-sm)" : "none",
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--brand)",
      fontSize: dim * 0.36
    }
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toneStyle = {
  brand: {
    color: "var(--brand)",
    background: "var(--brand-wash)",
    border: "1px solid rgba(34,211,238,0.3)"
  },
  neutral: {
    color: "var(--text-secondary)",
    background: "var(--bg-surface-raised)",
    border: "1px solid var(--border-default)"
  },
  success: {
    color: "var(--status-success)",
    background: "rgba(34,197,94,0.1)",
    border: "1px solid rgba(34,197,94,0.3)"
  },
  warning: {
    color: "var(--status-warning)",
    background: "rgba(245,158,11,0.1)",
    border: "1px solid rgba(245,158,11,0.3)"
  },
  danger: {
    color: "var(--status-danger)",
    background: "rgba(239,68,68,0.1)",
    border: "1px solid rgba(239,68,68,0.3)"
  }
};

/**
 * Badge — small status/label pill. Mono uppercase, used for
 * project status ("LIVE", "WIP"), roles, or counts.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const t = toneStyle[tone] || toneStyle.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "3px 8px",
      borderRadius: "var(--radius-full)",
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "6px 12px",
    fontSize: "var(--text-xs)",
    gap: "6px"
  },
  md: {
    padding: "10px 18px",
    fontSize: "var(--text-sm)",
    gap: "8px"
  },
  lg: {
    padding: "13px 24px",
    fontSize: "var(--text-md)",
    gap: "10px"
  }
};
function variantStyle(variant, disabled) {
  if (disabled) {
    return {
      background: "var(--gray-850)",
      color: "var(--text-disabled)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none",
      cursor: "not-allowed"
    };
  }
  switch (variant) {
    case "primary":
      return {
        background: "var(--brand)",
        color: "var(--text-on-brand)",
        border: "1px solid var(--brand)",
        boxShadow: "var(--glow-brand-button)"
      };
    case "secondary":
      return {
        background: "var(--bg-surface-raised)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-default)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--text-secondary)",
        border: "1px solid transparent"
      };
    case "danger":
      return {
        background: "rgba(239,68,68,0.12)",
        color: "var(--status-danger)",
        border: "1px solid rgba(239,68,68,0.35)"
      };
    default:
      return {};
  }
}

/**
 * Button — primary interactive control. Mono label, small radius,
 * cyan glow on the primary variant (never a bare drop shadow).
 */
function Button({
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
  const hoverAdjust = !disabled && hover ? variant === "primary" ? {
    background: "var(--brand-strong)",
    borderColor: "var(--brand-strong)"
  } : variant === "secondary" ? {
    background: "var(--bg-surface-hover)",
    borderColor: "var(--border-strong)"
  } : variant === "ghost" ? {
    background: "var(--bg-surface-hover)",
    color: "var(--text-primary)"
  } : variant === "danger" ? {
    background: "rgba(239,68,68,0.2)"
  } : {} : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
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
      ...style
    }
  }, rest), icon && iconPosition === "left" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginRight: sizeStyle.gap
    }
  }, icon), children, icon && iconPosition === "right" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      marginLeft: sizeStyle.gap
    }
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base surface container. Hairline border, subtle inset
 * highlight, optional hover-lift for clickable cards (project tiles).
 */
function Card({
  children,
  interactive = false,
  padding = "var(--space-6)",
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--bg-surface)",
      border: `1px solid ${hover && interactive ? "var(--border-brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: hover && interactive ? "var(--shadow-lg), var(--glow-brand-sm)" : "var(--shadow-card)",
      transform: hover && interactive ? "translateY(-2px)" : "translateY(0)",
      transition: "var(--transition-default)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: 28,
  md: 36,
  lg: 44
};

/**
 * IconButton — square icon-only control for toolbars, cards, nav.
 */
function IconButton({
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
  const base = variant === "solid" ? {
    background: "var(--bg-surface-raised)",
    border: "1px solid var(--border-default)"
  } : {
    background: "transparent",
    border: "1px solid transparent"
  };
  const hoverStyle = !disabled && hover ? {
    background: "var(--bg-surface-hover)",
    borderColor: "var(--border-default)",
    color: "var(--brand)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — clickable/removable chip, e.g. tech-stack labels or
 * project-filter controls. Distinct from Badge (static status).
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      opacity: 0.7,
      fontWeight: "var(--weight-bold)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — centered modal for project detail / confirmations.
 * Dims backdrop with blur, panel slides up + fades in.
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(var(--blur-panel))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      animation: "dcFadeIn var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(480px, 90vw)",
      maxHeight: "85vh",
      overflowY: "auto",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      animation: "dcSlideUp var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5) var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--text-tertiary)",
      cursor: "pointer",
      fontSize: "var(--text-lg)",
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      color: "var(--text-secondary)",
      fontSize: "var(--text-sm)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-6)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)"
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `
        @keyframes dcFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes dcSlideUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneColor = {
  info: "var(--brand)",
  success: "var(--status-success)",
  danger: "var(--status-danger)"
};

/**
 * Toast — transient bottom-corner notification, mono timestamp-style
 * accent bar, auto-dismiss handled by consumer (see prompt.md).
 */
function Toast({
  tone = "info",
  title,
  message,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      width: 320,
      background: "var(--bg-surface-raised)",
      border: "1px solid var(--border-default)",
      borderLeft: `3px solid ${toneColor[tone]}`,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      boxShadow: "var(--shadow-lg)",
      animation: "dcToastIn var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-primary)",
      marginBottom: 2
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-tertiary)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--text-tertiary)",
      cursor: "pointer"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("style", null, `@keyframes dcToastIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — hover/focus label, mono text on a raised surface.
 */
function Tooltip({
  children,
  label,
  side = "top"
}) {
  const [visible, setVisible] = React.useState(false);
  const posStyle = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    onFocus: () => setVisible(true),
    onBlur: () => setVisible(false)
  }, children, visible && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...posStyle,
      background: "var(--gray-850)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      padding: "5px 9px",
      borderRadius: "var(--radius-xs)",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      zIndex: 50,
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — custom box (native input visually hidden but present
 * for a11y), cyan check + glow when checked.
 */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
      background: checked ? "var(--brand)" : "var(--bg-inset)",
      boxShadow: checked ? "var(--glow-brand-sm)" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-default)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-on-brand)",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  })))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Focus ring is a cyan glow, not a
 * color-only change, so it reads clearly against the dark surface.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      display: "flex",
      color: "var(--text-tertiary)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      opacity: disabled ? 0.5 : 1
    }
  }, rest))), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--status-danger)"
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native-backed dropdown, styled to match Input.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      cursor: "pointer"
    }
  }, rest), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)"
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field, e.g. project inquiry / message body.
 */
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    placeholder: placeholder,
    value: value,
    rows: rows,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      opacity: disabled ? 0.5 : 1
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--status-danger)"
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
/**
 * NavLink — top-nav / footer link with animated underline on
 * hover and a persistent brand underline when active.
 */
function NavLink({
  children,
  href = "#",
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: active ? "var(--text-primary)" : "var(--text-secondary)",
      textDecoration: "none",
      paddingBottom: "4px",
      transition: "var(--transition-default)",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1.5px",
      background: "var(--brand)",
      transform: active || hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — segmented control for project-category filters.
 */
function Tabs({
  items,
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: "var(--space-1)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "4px",
      ...style
    }
  }, items.map(item => {
    const active = item.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => onChange(item.value),
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        padding: "7px 14px",
        borderRadius: "var(--radius-sm)",
        border: "none",
        cursor: "pointer",
        color: active ? "var(--text-on-brand)" : "var(--text-secondary)",
        background: active ? "var(--brand)" : "transparent",
        transition: "var(--transition-default)"
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
function About() {
  const {
    paragraph
  } = window.PORTFOLIO_DATA.about;
  return /*#__PURE__*/React.createElement("div", {
    id: "about",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-10)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 112,
      height: 112,
      borderRadius: "50%",
      border: "2px solid var(--brand)",
      boxShadow: "var(--glow-brand-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      background: "var(--gradient-brand-subtle)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/nsoto-mark-cyan.png",
    alt: "nsoto.dev",
    style: {
      width: "62%",
      height: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-5)"
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "640px",
      margin: 0
    }
  }, paragraph))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
function Contact() {
  const {
    Input,
    Textarea,
    Button,
    Toast
  } = window.NsotoDevDesignSystem_0e0c82;
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = React.useState(false);
  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({
      name: "",
      email: "",
      message: ""
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    style: {
      maxWidth: "var(--content-narrow)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-3)"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--text-tertiary)",
      margin: "0 0 var(--space-8)"
    }
  }, "Have a project in mind, or just want to say hi? I read everything myself \u2014 or reach me directly at", " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + window.PORTFOLIO_DATA.links.email
  }, window.PORTFOLIO_DATA.links.email), "."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@domain.com",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 5,
    placeholder: "Tell me about your project...",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary"
  }, "Send message"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      right: 24,
      zIndex: 60
    }
  }, sent && /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Message sent",
    message: "I'll get back to you within 24h.",
    onDismiss: () => setSent(false)
  })));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Experience.jsx
try { (() => {
function ExperienceCard({
  job
}) {
  const {
    Card,
    Badge,
    Tag
  } = window.NsotoDevDesignSystem_0e0c82;
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)"
    }
  }, job.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--brand)"
    }
  }, job.company)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: job.status === "Current" ? "success" : "neutral",
    dot: job.status === "Current"
  }, job.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-tertiary)"
    }
  }, job.dates))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-normal)",
      margin: 0
    }
  }, job.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, job.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s))));
}
function Experience() {
  const {
    Tabs
  } = window.NsotoDevDesignSystem_0e0c82;
  const [filter, setFilter] = React.useState("all");
  const jobs = window.PORTFOLIO_DATA.experience.filter(j => filter === "all" || j.category === filter);
  return /*#__PURE__*/React.createElement("div", {
    id: "work",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-8)",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-primary)",
      margin: 0
    }
  }, "Experience"), /*#__PURE__*/React.createElement(Tabs, {
    value: filter,
    onChange: setFilter,
    items: [{
      label: "All",
      value: "all"
    }, {
      label: "Cloud",
      value: "cloud"
    }, {
      label: "Integration",
      value: "integration"
    }, {
      label: "Data",
      value: "data"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, jobs.map(j => /*#__PURE__*/React.createElement(ExperienceCard, {
    key: j.id,
    job: j
  }))));
}
window.Experience = Experience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
function Footer() {
  const {
    IconButton
  } = window.NsotoDevDesignSystem_0e0c82;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "var(--space-6) max(24px, calc((100% - 1120px) / 2))",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/nsoto-mark-cyan.png",
    alt: "",
    style: {
      height: 16,
      width: "auto"
    }
  }), window.PORTFOLIO_DATA.footer.copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: window.PORTFOLIO_DATA.links.github,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(window.GithubIcon, {
      size: 16
    }),
    label: "GitHub"
  })), /*#__PURE__*/React.createElement("a", {
    href: window.PORTFOLIO_DATA.links.linkedin,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(window.LinkedinIcon, {
      size: 16
    }),
    label: "LinkedIn"
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + window.PORTFOLIO_DATA.links.email,
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(window.MailIcon, {
      size: 16
    }),
    label: "Email"
  }))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button
  } = window.NsotoDevDesignSystem_0e0c82;
  const {
    eyebrow,
    headline,
    sub
  } = window.PORTFOLIO_DATA.hero;
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--space-24) var(--space-6) var(--space-20)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      right: "max(24px, calc((100% - 1120px) / 2 - 40px))",
      width: 120,
      opacity: 0.9,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/nsoto-mark-cyan.png",
    alt: "",
    style: {
      width: "100%",
      height: "auto",
      filter: "drop-shadow(0 0 32px rgba(34,211,238,0.25))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-widest)",
      backgroundImage: "linear-gradient(90deg, var(--cyan-300) 0%, var(--violet-400) 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      marginBottom: "var(--space-6)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-5xl)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)",
      maxWidth: "820px",
      margin: "0 0 var(--space-6)"
    }
  }, headline, /*#__PURE__*/React.createElement("span", {
    className: "dc-cursor",
    style: {
      color: "var(--brand)"
    }
  }, "_")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-secondary)",
      maxWidth: "560px",
      lineHeight: "var(--leading-relaxed)",
      margin: "0 0 var(--space-10)"
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(window.ArrowUpRightIcon, {
      size: 16
    }),
    iconPosition: "right",
    onClick: () => document.getElementById("work").scrollIntoView({
      behavior: "smooth"
    })
  }, "View work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    })
  }, "Get in touch")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
function Nav() {
  const {
    NavLink,
    IconButton
  } = window.NsotoDevDesignSystem_0e0c82;
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px max(24px, calc((100% - 1120px) / 2))",
      background: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      transition: "var(--transition-default)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/nsoto-mark-cyan.png",
    alt: "",
    style: {
      height: 26,
      width: "auto"
    }
  }), "nsoto", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, ".dev")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, window.PORTFOLIO_DATA.nav.map(item => /*#__PURE__*/React.createElement(NavLink, {
    key: item.href,
    href: item.href,
    active: active === item.href,
    onClick: () => setActive(item.href)
  }, item.label)), /*#__PURE__*/React.createElement("a", {
    href: window.PORTFOLIO_DATA.links.github,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(window.GithubIcon, {
      size: 18
    }),
    label: "GitHub"
  }))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Skills.jsx
try { (() => {
function Skills() {
  const {
    Tag
  } = window.NsotoDevDesignSystem_0e0c82;
  const {
    groups
  } = window.PORTFOLIO_DATA.skills;
  return /*#__PURE__*/React.createElement("div", {
    id: "skills",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xl)",
      color: "var(--text-primary)",
      margin: "0 0 var(--space-8)"
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "var(--space-8)"
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)",
      marginBottom: "var(--space-3)"
    }
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, g.items.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))))));
}
window.Skills = Skills;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Skills.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Portfolio content — sourced from Nelson Soto's resume (July 2026) + provided
// profile links. Kept separate from layout so copy is easy to spot/edit.
window.PORTFOLIO_DATA = {
  nav: [{
    label: "Work",
    href: "#work"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  links: {
    github: "https://github.com/nsoto-development",
    linkedin: "https://linkedin.com/in/nsoto-development",
    email: "nsoto.development@gmail.com"
  },
  hero: {
    eyebrow: "</ COMING SOON. STAY TUNED >",
    headline: "20 years of full-stack engineering.",
    sub: "Senior software engineer based in Jacksonville, FL. Cloud migrations, legacy modernization, and enterprise integrations across C#, JavaScript, and SQL."
  },
  experience: [{
    id: "sedgwick",
    company: "Sedgwick Repair Solutions",
    role: "Senior IT Application Specialist",
    dates: "Feb 2026 – Current",
    location: "Jacksonville, FL",
    detail: "Maintain .NET data ingestion pipelines between XactAnalysis, Cotality, and Salesforce over HTTP/SFTP. Configured a Cursor workspace against legacy Visual SourceSafe repos to preserve system knowledge after the original architect's retirement, and authored a phased VSS-to-Git migration plan.",
    stack: ["C#", ".NET", "Salesforce", "SFTP", "Cursor / AI-assisted dev"],
    status: "Current",
    category: "integration"
  }, {
    id: "southeastern",
    company: "Southeastern Aluminum Products",
    role: "Systems Software Engineer",
    dates: "Sept 2024 – Aug 2025",
    location: "Jacksonville, FL",
    detail: "Led an Azure migration from legacy server hosting — 15–20% lower hosting cost, ~10% better performance. Reverse-engineered Syspro ERP integrations, directed a WordPress redesign, and built ETL processes against the ERP schema.",
    stack: ["Azure", "Syspro ERP", "C#", "VB6", "SQL Server"],
    status: "Cloud",
    category: "cloud"
  }, {
    id: "caci",
    company: "CACI Federal",
    role: "Software Engineer (Remote)",
    dates: "Sept 2022 – Jun 2024",
    location: "Rome, NY",
    detail: "Built WebCV, a no/low-code data visualization platform for the Air Force Research Laboratory. Integrated Cytoscape.js for network graph visualization and implemented a custom graph-traversal algorithm; built the ETL back end on Node-RED with custom nodes.",
    stack: ["JavaScript", "Node-RED", "Cytoscape.js", "GIS"],
    status: "Federal",
    category: "data"
  }, {
    id: "proverde",
    company: "ProVerde Laboratories",
    role: "Lead Application Developer",
    dates: "Nov 2013 – Jul 2019",
    location: "Milford, MA",
    detail: "Designed the architecture for ProVerde's centralized cloud platform: an ASP.NET Web API over an in-house MySQL sample-tracking database (Amazon RDS), a customer ordering portal in AngularJS, and integrated BlueSnap, USAePay, FedEx Ship API, and Sage 50.",
    stack: ["ASP.NET", "AngularJS", "MySQL", "AWS RDS"],
    status: "Architecture",
    category: "cloud"
  }],
  skills: {
    groups: [{
      label: "Languages / Frameworks",
      items: ["C#", ".NET 8", "ASP.NET", "JavaScript", "Node.js", "React", "Vue / Quasar", "Angular"]
    }, {
      label: "Databases",
      items: ["SQL Server", "MySQL", "Postgres", "MongoDB", "CosmosDB"]
    }, {
      label: "Cloud / DevOps",
      items: ["Azure", "AWS", "Google Cloud", "Docker"]
    }, {
      label: "Integration & Data",
      items: ["Node-RED", "Salesforce", "Cytoscape.js", "Syspro ERP"]
    }, {
      label: "GIS",
      items: ["ESRI ArcGIS Server", "ThinkGeo", "OpenLayers"]
    }]
  },
  about: {
    paragraph: "Senior software engineer with 20 years of full-stack development, systems integration, and cloud infrastructure experience. I've led an Azure migration that cut hosting costs, modernized legacy .NET systems, and built Node.js/Node-RED data pipelines and enterprise integrations across ERP, CRM, and GIS systems — with a growing focus on applying AI-assisted workflows to modernize legacy systems and preserve institutional knowledge."
  },
  footer: {
    copyright: "© " + new Date().getFullYear() + " nsoto.dev"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.jsx
try { (() => {
// Small inline icon set (Lucide-style: 2px stroke, round caps).
// Assigned to window since this file isn't part of the compiled bundle.
function Icon({
  children,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children);
}
const GithubIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
}));
const MailIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m3 7 9 6 9-6"
}));
const ArrowUpRightIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7M8 7h9v9"
}));
const ExternalLinkIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"
}));
const XIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const LinkedinIcon = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"
}), /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "12"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));
Object.assign(window, {
  GithubIcon,
  MailIcon,
  ArrowUpRightIcon,
  ExternalLinkIcon,
  XIcon,
  LinkedinIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
