function ExperienceCard({ job }) {
  const { Card, Badge, Tag } = window.NsotoDevDesignSystem_0e0c82;
  return (
    <Card style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-md)", color: "var(--text-primary)" }}>{job.role}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--brand)" }}>{job.company}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "var(--space-2)" }}>
          <Badge tone={job.status === "Current" ? "success" : "neutral"} dot={job.status === "Current"}>{job.status}</Badge>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-tertiary)" }}>{job.dates}</span>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: "var(--leading-normal)", margin: 0 }}>
        {job.detail}
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {job.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Card>
  );
}

function Experience() {
  const { Tabs } = window.NsotoDevDesignSystem_0e0c82;
  const [filter, setFilter] = React.useState("all");
  const jobs = window.PORTFOLIO_DATA.experience.filter((j) => filter === "all" || j.category === filter);

  return (
    <div id="work" style={{ maxWidth: "var(--content-max)", margin: "0 auto", padding: "var(--space-16) var(--space-6)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-8)", flexWrap: "wrap", gap: "var(--space-4)" }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", color: "var(--text-primary)", margin: 0 }}>
          Experience
        </h2>
        <Tabs
          value={filter}
          onChange={setFilter}
          items={[
            { label: "All", value: "all" },
            { label: "Cloud", value: "cloud" },
            { label: "Integration", value: "integration" },
            { label: "Data", value: "data" },
          ]}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        {jobs.map((j) => (
          <ExperienceCard key={j.id} job={j} />
        ))}
      </div>
    </div>
  );
}

window.Experience = Experience;
