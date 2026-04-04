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
      className={`py-12 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium text-foreground/80 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
