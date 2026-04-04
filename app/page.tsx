import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Noise texture for depth */}
      <div className="noise-overlay" />
      
      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-30 dark:opacity-[0.08] pointer-events-none" />
      
      {/* Animated scan line */}
      <div className="grid-scan-line" />
      
      {/* Radial vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)] pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TechStack />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  )
}
