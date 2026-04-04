"use client"

import { useEffect, useState } from "react"
import { Code2, Bot, Layers } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Products",
    description: "End-to-end web and mobile applications using modern monorepo architecture",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "LLM integrations, n8n pipelines, on-premise AI infrastructure",
  },
  {
    icon: Layers,
    title: "SaaS & Platforms",
    description: "Multi-tenant systems, ERP integrations, scalable backend architecture",
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
      className={`py-16 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          What I Build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
