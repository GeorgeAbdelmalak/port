"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "HR Recruiter",
    company: "Career Core",
    location: "Remote",
    period: "Jul 2025 - Present",
    type: "Full-time",
    responsibilities: [
      "Responsible for sourcing, screening, and shortlisting candidates for various technical and non-technical roles",
      "Coordinated with hiring managers to understand job requirements and ensure a smooth recruitment process",
      "Successfully hired multiple qualified candidates through online platforms and interviews, improving team efficiency and talent quality",
    ],
  },
  {
    title: "Android Mobile App Developer",
    company: "DEPI Summer Internship Program",
    location: "Egypt",
    period: "Jun 2025 - Present",
    type: "Internship",
    responsibilities: [
      "Developing Android applications using modern development practices",
      "Learning industry-standard mobile development workflows",
      "Collaborating with team members on mobile app projects",
    ],
  },
]

const education = {
  degree: "Bachelor degree in Communications and Information Engineering",
  school: "Helwan University",
  period: "2023 - 2027",
  grade: "Very Good",
  status: "In Progress",
}

const courses = [
  {
    title: "C++ Language and Object-Oriented Programming",
    provider: "Osama El Zero Channel on YouTube",
    period: "Aug 2024 - May 2025",
    topics: ["Introduction to C++", "Fundamentals of Computer Science", "Object-Oriented Programming", "C++ Projects"],
  },
]

export function ResumeSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-3xl lg:text-5xl mb-4">
            PROFESSIONAL <span className="text-violet-600">JOURNEY</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional experience in software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-violet-600" />
              Education
            </h3>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-serif font-bold">{education.degree}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {education.school}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {education.period}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {education.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">Grade: {education.grade}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-violet-600" />
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-serif font-bold">{exp.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span>{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-serif font-bold text-2xl mb-6">Additional Learning</h3>

            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-serif font-bold text-lg">{course.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span>{course.provider}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {course.period}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
