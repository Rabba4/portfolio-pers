"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

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
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 relative">
              <span className="absolute -top-6 -left-2 text-8xl font-black text-primary/6 select-none leading-none pointer-events-none">
                01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground relative z-10">{t.about.title}</h2>
              <motion.div
                className="flex-1 h-px bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content with scroll reveal */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground leading-relaxed text-pretty">{t.about.description1}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-muted-foreground leading-relaxed text-pretty">{t.about.description2}</p>
              </ScrollReveal>
            </div>

            {/* Skills Cards with stagger animation */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <h3 className="text-lg font-semibold text-foreground mb-6">{t.about.skills.title}</h3>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.15}>
                {skills.map((skill, index) => (
                  <StaggerItem key={index}>
                    <motion.div whileHover={{ scale: 1.02, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="group hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5">
                        <CardContent className="p-4 flex items-start gap-4">
                          <motion.div
                            className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <skill.icon className="h-5 w-5" />
                          </motion.div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">{skill.title}</h4>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
