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
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`py-12 sm:py-16 px-6 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="mx-auto max-w-2xl">
        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Stack
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {techs.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded-md hover:text-foreground hover:border-primary/40 transition-all duration-200 cursor-default select-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: `${index * 25}ms`,
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
