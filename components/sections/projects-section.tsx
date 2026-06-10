"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Database, ShoppingCart, Users, Link2 } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      ...t.projects.items.erp,
      icon: Database,
      image: "/imagen-erp.webp",
    },
    {
      ...t.projects.items.ecommerce,
      icon: ShoppingCart,
      image: "/ecommerce-moda.webp",
    },
    {
      ...t.projects.items.hrPortal,
      icon: Users,
      image: "/hr-resources-management.webp",
    },
    {
      ...t.projects.items.integrations,
      icon: Link2,
      image: "/api-integration-diagram.webp",
    },
  ]

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12 relative">
              <span className="absolute -top-6 -left-2 text-8xl font-black text-primary/6 select-none leading-none pointer-events-none">
                03
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground relative z-10">{t.projects.title}</h2>
              <motion.div
                className="flex-1 h-px bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </ScrollReveal>

          {/* Projects Grid with stagger animation */}
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-xl hover:shadow-primary/5 h-full">
                      {/* Project Image with parallax effect */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Icon Badge with rotation animation */}
                        <motion.div
                          className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-pretty">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <motion.div
                              key={i}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Badge variant="secondary" className="text-xs font-mono">
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                              <Link href="#">
                                <Github className="h-4 w-4 mr-2" />
                                {t.projects.viewCode}
                              </Link>
                            </Button>
                          </motion.div>
                          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" asChild className="w-full">
                              <Link href="#">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {t.projects.viewProject}
                              </Link>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
