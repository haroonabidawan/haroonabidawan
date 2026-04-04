"use client"

import { useEffect, useState } from "react"
import { Code2, Bot, Layers } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Products",
    description: "End-to-end web and mobile applications using modern monorepo architecture.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "LLM integrations, n8n pipelines, on-premise AI infrastructure.",
  },
  {
    icon: Layers,
    title: "SaaS & Platforms",
    description: "Multi-tenant systems, ERP integrations, scalable backend architecture.",
  },
]

export function ServicesSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 sm:py-28 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section label */}
        <p
          className={`text-sm text-muted-foreground mb-10 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What I Build
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${index * 100 + 100}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center mb-5 group-hover:border-primary/30 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
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
