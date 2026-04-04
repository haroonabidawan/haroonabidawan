"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 94) {
            clearInterval(interval)
            return 94
          }
          return prev + 1
        })
      }, 40)
      return () => clearInterval(interval)
    }
  }, [visible])

  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-6">
      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none animate-glow" />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Main headline - two lines */}
        <h1
          className={`text-[2.5rem] sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.1] mb-6 transition-all duration-700 delay-75 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block text-foreground">Senior Full Stack &</span>
          <span className="block">
            <span className="text-primary">AI Automation</span>
            <span className="text-foreground"> Engineer</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground font-light max-w-md mx-auto mb-14 leading-relaxed transition-all duration-700 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building scalable systems, <span className="text-foreground">LLM-powered</span> products, and cross-platform applications.
        </p>

        {/* Terminal block */}
        <div
          className={`mb-14 transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block">
            {/* Terminal header */}
            <div className="flex items-center gap-1.5 px-4 py-2 border border-b-0 border-border rounded-t-lg bg-card">
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="ml-3 font-mono text-[10px] text-muted-foreground">terminal</span>
            </div>
            
            {/* Terminal body */}
            <div className="px-5 py-4 border border-border rounded-b-lg bg-card">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-primary select-none">$</span>
                <span className="text-foreground">portfolio.init</span>
                <span className="text-muted-foreground">()</span>
                <span className="w-[2px] h-4 bg-primary animate-blink ml-1" />
              </div>
              
              <div className="mt-3 flex items-center gap-3">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">Loading</span>
                <div className="flex-1 h-px bg-border relative overflow-hidden rounded-full">
                  <div 
                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-100 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-muted-foreground tabular-nums w-8 text-right">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://linkedin.com/in/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:contact@haroonabidawan.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-lg hover:border-muted-foreground hover:bg-card transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
