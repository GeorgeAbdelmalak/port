"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Function Generator",
    description: "A circuit which generates three signals (Square Signal, Triangular Signal, Sine Signal)",
    tools: ["Op-Amps", "Resistors", "Diodes", "Capacitors"],
    type: "Hardware",
    image: "/electronic-waveform-generator.png",
  },
  {
    title: "Digital Stopwatch (24 hours)",
    description: "A real-time digital stopwatch implemented in digital electronics",
    tools: ["Digital Logic Circuits", "4026 IC", "Clock Generator", "7-segments display"],
    type: "Embedded",
    image: "/placeholder-9qiye.png",
  },
  {
    title: "Bank Account Application",
    description: "A C++ console application that simulates basic banking operations",
    tools: ["C++", "File Handling", "OOP", "Classes & Inheritance"],
    type: "Software",
    image: "/placeholder-v0wsy.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl lg:text-5xl mb-4">
            FEATURED <span className="text-violet-600">PROJECTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of technical projects spanning hardware design, embedded systems, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-violet-600 text-white">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-serif font-bold">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
