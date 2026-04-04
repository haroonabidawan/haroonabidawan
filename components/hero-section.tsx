"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-6">
      {/* Subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="block">Senior Full Stack &</span>
          <span className="block">
            <span className="text-primary">AI Automation</span> Engineer
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Building scalable systems, LLM-powered products, and cross-platform applications.
        </p>

        {/* Terminal coming soon */}
        <div
          className={`mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span>
            <span>portfolio.init()</span>
            <span className="text-foreground/50">—</span>
            <span>launching soon</span>
            <span className="w-[2px] h-4 bg-primary animate-blink" />
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-xs h-1 bg-card rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-progress rounded-full" />
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="https://linkedin.com/in/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="mailto:contact@haroonabidawan.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
