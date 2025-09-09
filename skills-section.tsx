"use client"

import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Kotlin", "SQL"],
    color: "from-violet-600 to-purple-600",
  },
  {
    title: "Mobile Development",
    skills: ["Android Studio", "Android SDK", "Mobile UI/UX"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Database & Backend",
    skills: ["MySQL", "Database Design", "File Handling"],
    color: "from-green-600 to-emerald-600",
  },
  {
    title: "Engineering & Hardware",
    skills: ["Digital Electronics", "Circuit Design", "Embedded Systems"],
    color: "from-orange-600 to-red-600",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl lg:text-5xl mb-4">
            TECHNICAL <span className="text-violet-600">EXPERTISE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning software development, mobile applications, and embedded systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 skill-node hover:border-violet-600/50 transition-all duration-300">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}
              >
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>

              <h3 className="font-serif font-bold text-lg mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
