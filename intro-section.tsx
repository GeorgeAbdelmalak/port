"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function IntroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Software Engineer | Android Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 portfolio-gradient opacity-5"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Portrait placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center shadow-2xl">
            <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center">
              <img
                src="/software-engineer-headshot.png"
                alt="George Abdelmalak Zekry"
                className="w-64 h-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Introduction */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="font-serif font-black text-4xl lg:text-6xl text-foreground">
            GEORGE ABDELMALAK
            <br />
            <span className="text-violet-600">ZEKRY</span>
          </h1>

          <div className="text-xl lg:text-2xl text-muted-foreground min-h-[2rem]">
            <span className="terminal-cursor">{displayText}</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg">
            Motivated Computer Engineer with expertise in C++, Java, and Kotlin. Passionate about building innovative
            Android applications and solving complex problems.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="portfolio-gradient text-white hover:opacity-90"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-violet-600" />
      </div>
    </section>
  )
}
