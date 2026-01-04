"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: Users,
      title: t.about.skills.client,
      description: t.about.skills.clientDesc,
    },
    {
      icon: Lightbulb,
      title: t.about.skills.independent,
      description: t.about.skills.independentDesc,
    },
    {
      icon: Target,
      title: t.about.skills.leadership,
      description: t.about.skills.leadershipDesc,
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.about.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-pretty">{t.about.description1}</p>
              <p className="text-muted-foreground leading-relaxed text-pretty">{t.about.description2}</p>
            </div>

            {/* Skills Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-6">{t.about.skills.title}</h3>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="group hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
