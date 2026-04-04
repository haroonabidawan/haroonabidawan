"use client"

import { useEffect, useState } from "react"
import { Terminal, Cpu, Database } from "lucide-react"

const services = [
  {
    icon: Terminal,
    title: "Full Stack Products",
    description: "End-to-end web and mobile applications using modern monorepo architecture",
    code: "build()",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "LLM integrations, n8n pipelines, on-premise AI infrastructure",
    code: "automate()",
  },
  {
    icon: Database,
    title: "SaaS & Platforms",
    description: "Multi-tenant systems, ERP integrations, scalable backend architecture",
    code: "scale()",
  },
]

export function ServicesSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className={`py-16 sm:py-24 px-6 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Services
          </span>
          <div className="h-px flex-1 bg-border max-w-16" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-5 border border-border rounded-lg bg-card card-hover transition-all duration-300 hover:border-primary/30"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Icon row */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-md border border-border bg-background group-hover:border-primary/30 transition-colors">
                  <service.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {service.code}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-foreground mb-2 tracking-[-0.01em]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
