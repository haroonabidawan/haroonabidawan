"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          <span className="text-primary">&copy;</span> 2026 Haroon Abid Awan — Full portfolio coming soon.
        </p>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/haroonabidawan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
