"use client"

import { useEffect, useState } from "react"

const techs = [
  "Next.js",
  "React",
  "React Native",
  "Laravel",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "AWS",
  "n8n",
  "Ollama",
  "LLMs",
  "Turbo Repos",
]

export function TechStack() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`py-12 sm:py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Stack</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {techs.map((tech, index) => (
            <span
              key={tech}
              className="group px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-muted-foreground bg-card border border-border rounded-md hover:border-primary/50 hover:text-foreground transition-all duration-200 cursor-default"
              style={{
                transitionDelay: visible ? `${index * 30}ms` : '0ms',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
