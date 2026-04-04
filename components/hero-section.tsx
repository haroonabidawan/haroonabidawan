"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-6">
      {/* Subtle blue glow - animated */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none animate-glow" />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Available for projects</span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="block">Senior Full Stack &</span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-primary">AI Automation</span> Engineer
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Building scalable systems, LLM-powered products, and cross-platform applications.
        </p>

        {/* Terminal coming soon block */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-block p-4 sm:p-5 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-primary font-medium">$</span>
              <span className="text-foreground">portfolio.init()</span>
              <span className="text-muted-foreground/50 hidden sm:inline">—</span>
              <span className="text-muted-foreground hidden sm:inline">launching soon</span>
              <span className="w-[2px] h-4 bg-primary animate-blink ml-1" />
            </div>

            {/* Progress bar */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-1 bg-border/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-progress rounded-full" />
              </div>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">94%</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="https://linkedin.com/in/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
          >
            View LinkedIn
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:contact@haroonabidawan.com"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-card hover:border-muted-foreground/30 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
