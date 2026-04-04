import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Single subtle glow - only decoration */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.07] rounded-full blur-[150px] pointer-events-none animate-glow" />
      
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
