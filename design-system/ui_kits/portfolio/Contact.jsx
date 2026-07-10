function Contact() {
  const { Input, Textarea, Button, Toast } = window.NsotoDevDesignSystem_0e0c82;
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div id="contact" style={{ maxWidth: "var(--content-narrow)", margin: "0 auto", padding: "var(--space-16) var(--space-6) var(--space-24)" }}>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xl)", color: "var(--text-primary)", margin: "0 0 var(--space-3)" }}>
        Get in touch
      </h2>
      <p style={{ fontFamily: "var(--font-sans)", color: "var(--text-tertiary)", margin: "0 0 var(--space-8)" }}>
        Have a project in mind, or just want to say hi? I read everything myself — or reach me directly at{" "}
        <a href={"mailto:" + window.PORTFOLIO_DATA.links.email}>{window.PORTFOLIO_DATA.links.email}</a>.
      </p>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
          <Input label="Name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Email" type="email" placeholder="you@domain.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <Textarea label="Message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <div>
          <Button type="submit" variant="primary">Send message</Button>
        </div>
      </form>
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 60 }}>
        {sent && <Toast tone="success" title="Message sent" message="I'll get back to you within 24h." onDismiss={() => setSent(false)} />}
      </div>
    </div>
  );
}

window.Contact = Contact;
