function Nav() {
  const { NavLink, IconButton } = window.NsotoDevDesignSystem_0e0c82;
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
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
        transition: "var(--transition-default)",
      }}
    >
      <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)", textDecoration: "none" }}>
        <img src="../../assets/logo/nsoto-mark-cyan.png" alt="" style={{ height: 26, width: "auto" }} />
        nsoto<span style={{ color: "var(--brand)" }}>.dev</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
        {window.PORTFOLIO_DATA.nav.map((item) => (
          <NavLink key={item.href} href={item.href} active={active === item.href} onClick={() => setActive(item.href)}>
            {item.label}
          </NavLink>
        ))}
        <a href={window.PORTFOLIO_DATA.links.github} target="_blank" rel="noreferrer" style={{ display: "inline-flex" }}>
          <IconButton icon={<window.GithubIcon size={18} />} label="GitHub" />
        </a>
      </div>
    </div>
  );
}

window.Nav = Nav;
