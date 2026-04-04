"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add("dark")
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-md overflow-hidden border border-border">
            <Image
              src="/logo.jpg"
              alt="Haroon Abid Awan"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
              Haroon Abid Awan
            </span>
            <span className="w-[2px] h-[14px] bg-primary ml-0.5 animate-blink" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-0.5">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-2 mr-4 px-2.5 py-1 rounded-full border border-border text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-status" />
            <span>Online</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/haroonabidawan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-border opacity-50" />
    </nav>
  )
}
