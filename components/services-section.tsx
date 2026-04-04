"use client"

import { useEffect, useState } from "react"
import { Code2, Bot, Layers } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Products",
    description: "End-to-end web and mobile applications using modern monorepo architecture",
    tags: ["Web", "Mobile", "Monorepo"],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "LLM integrations, n8n pipelines, on-premise AI infrastructure",
    tags: ["LLMs", "n8n", "Automation"],
  },
  {
    icon: Layers,
    title: "SaaS & Platforms",
    description: "Multi-tenant systems, ERP integrations, scalable backend architecture",
    tags: ["SaaS", "ERP", "Backend"],
  },
]

export function ServicesSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`py-16 sm:py-24 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">What I Build</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-5 sm:p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 card-glow"
              style={{
                transitionDelay: visible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4 transition-colors duration-300 group-hover:bg-primary/15">
                <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-background border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
