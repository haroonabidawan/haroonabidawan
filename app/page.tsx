import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="fixed inset-0 dot-grid opacity-40 dark:opacity-20 pointer-events-none" />
      
      {/* Radial gradient overlay for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)] pointer-events-none" />
      
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
