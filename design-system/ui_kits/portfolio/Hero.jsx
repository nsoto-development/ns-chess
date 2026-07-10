function Hero() {
  const { Button } = window.NsotoDevDesignSystem_0e0c82;
  const { eyebrow, headline, sub } = window.PORTFOLIO_DATA.hero;

  return (
    <div
      id="top"
      style={{
        position: "relative",
        maxWidth: "var(--content-max)",
        margin: "0 auto",
        padding: "var(--space-24) var(--space-6) var(--space-20)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: "max(24px, calc((100% - 1120px) / 2 - 40px))",
          width: 120,
          opacity: 0.9,
          pointerEvents: "none",
        }}
      >
        <img src="../../assets/logo/nsoto-mark-cyan.png" alt="" style={{ width: "100%", height: "auto", filter: "drop-shadow(0 0 32px rgba(34,211,238,0.25))" }} />
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-widest)",
          backgroundImage: "linear-gradient(90deg, var(--cyan-300) 0%, var(--violet-400) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          marginBottom: "var(--space-6)",
        }}
      >
        {eyebrow}
      </div>
      <h1
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-5xl)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--text-primary)",
          maxWidth: "820px",
          margin: "0 0 var(--space-6)",
        }}
      >
        {headline}
        <span className="dc-cursor" style={{ color: "var(--brand)" }}>_</span>
      </h1>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-md)",
          color: "var(--text-secondary)",
          maxWidth: "560px",
          lineHeight: "var(--leading-relaxed)",
          margin: "0 0 var(--space-10)",
        }}
      >
        {sub}
      </p>
      <div style={{ display: "flex", gap: "var(--space-4)" }}>
        <Button variant="primary" size="lg" icon={<window.ArrowUpRightIcon size={16} />} iconPosition="right" onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}>
          View work
        </Button>
        <Button variant="secondary" size="lg" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          Get in touch
        </Button>
      </div>
    </div>
  );
}

window.Hero = Hero;
