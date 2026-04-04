import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <Footer />
    </main>
  )
}
