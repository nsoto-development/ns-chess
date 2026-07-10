function Footer() {
  const { IconButton } = window.NsotoDevDesignSystem_0e0c82;
  return (
    <div
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-6) max(24px, calc((100% - 1120px) / 2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-xs)",
        color: "var(--text-tertiary)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <img src="../../assets/logo/nsoto-mark-cyan.png" alt="" style={{ height: 16, width: "auto" }} />
        {window.PORTFOLIO_DATA.footer.copyright}
      </span>
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <a href={window.PORTFOLIO_DATA.links.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex" }}>
          <IconButton icon={<window.GithubIcon size={16} />} label="GitHub" />
        </a>
        <a href={window.PORTFOLIO_DATA.links.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex" }}>
          <IconButton icon={<window.LinkedinIcon size={16} />} label="LinkedIn" />
        </a>
        <a href={"mailto:" + window.PORTFOLIO_DATA.links.email} style={{ display: "inline-flex" }}>
          <IconButton icon={<window.MailIcon size={16} />} label="Email" />
        </a>
      </div>
    </div>
  );
}

window.Footer = Footer;
