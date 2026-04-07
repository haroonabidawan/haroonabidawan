export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col bg-background text-foreground"
      style={{ backgroundColor: "#0C0C0C", color: "#E8E0D0" }}
    >
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10 px-6 py-20 md:px-12">
        <div className="space-y-5">
          <p className="type-eyebrow font-wordmark text-accent" style={{ color: "#90C0A0" }}>
            Carbon Trail
          </p>
          <h1 className="type-h1 max-w-4xl text-text-primary md:type-display" style={{ color: "#E8E0D0" }}>
            Sustainable digital systems, crafted with precision.
          </h1>
          <p className="type-body max-w-2xl text-text-secondary" style={{ color: "#A8A090" }}>
            Fresh Next.js + TypeScript foundation now uses your Carbon Trail
            palette, typography, and semantic Tailwind tokens.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <section
            className="rounded-2xl border border-border bg-card p-6"
            style={{ borderColor: "#2E2E2E", backgroundColor: "#1A1A1A" }}
          >
            <h2 className="type-h3 text-text-primary" style={{ color: "#E8E0D0" }}>
              Design Tokens
            </h2>
            <p className="mt-2 type-body text-text-secondary" style={{ color: "#A8A090" }}>
              Color roles are centralized in CSS variables and exposed in
              Tailwind (`bg-background`, `text-foreground`, `border-border`,
              `bg-primary`).
            </p>
          </section>

          <section
            className="rounded-2xl border border-border bg-secondary p-6"
            style={{ borderColor: "#2E2E2E", backgroundColor: "#252525" }}
          >
            <h2 className="type-h3 text-text-primary" style={{ color: "#E8E0D0" }}>
              Typography System
            </h2>
            <p className="mt-2 type-body text-text-secondary" style={{ color: "#A8A090" }}>
              Inter powers UI and headings. JetBrains Mono powers wordmark,
              code, and labels with the defined display-to-eyebrow scale.
            </p>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-(--accent-hover) px-6 text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_var(--accent)] transition-colors hover:bg-primary"
            href="#"
            style={{ backgroundColor: "#4E7A56", color: "#0C0C0C" }}
          >
            Primary Action
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-6 text-sm text-text-secondary transition-colors hover:bg-secondary hover:text-text-primary"
            href="#"
            style={{ borderColor: "#2E2E2E", backgroundColor: "#1A1A1A", color: "#A8A090" }}
          >
            Secondary Action
          </a>
        </div>
      </main>
    </div>
  );
}
