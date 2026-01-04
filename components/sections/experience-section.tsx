"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar, ChevronRight } from "lucide-react"

type ExperiencePosition = {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences: ExperiencePosition[] = [
    {
      ...t.experience.positions.edisa,
    },
    {
      ...t.experience.positions.freelance,
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.experience.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10 mt-6" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div
                          className={`flex items-center gap-2 text-primary mb-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <Building2 className="h-4 w-4" />
                          <span className="font-mono text-sm">{exp.company}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className={index % 2 === 0 ? "md:text-left" : ""}>
                        <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>

            {/* Years indicator */}
            <div className="flex justify-center mt-12">
              <Badge variant="secondary" className="font-mono text-sm px-4 py-2">
                9+ years of experience
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
