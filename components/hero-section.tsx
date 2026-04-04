"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block text-foreground">Senior Full Stack &</span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-primary">AI Automation</span>
            <span className="text-foreground"> Engineer</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-8 sm:mt-10 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 delay-100 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Building scalable systems, LLM-powered products, and cross-platform applications.
        </p>

        {/* Coming soon indicator */}
        <div
          className={`mt-12 sm:mt-14 transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-4 px-4 py-3 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-primary">$</span>
              <span className="font-mono text-sm text-foreground">portfolio.init()</span>
              <span className="w-[2px] h-4 bg-primary animate-blink" />
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="w-24 h-1 rounded-full bg-border overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-progress" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">launching</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`mt-12 sm:mt-14 flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://linkedin.com/in/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
          >
            View LinkedIn
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:contact@haroonabidawan.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-card hover:border-muted-foreground transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
