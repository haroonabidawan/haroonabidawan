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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById("tech-stack")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" className="py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Tech pills - simple centered wrap */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {techs.map((tech, index) => (
            <span
              key={tech}
              className={`px-4 py-2 text-sm text-muted-foreground border border-border rounded-full hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default select-none ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{
                transitionDelay: visible ? `${index * 40}ms` : "0ms",
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
