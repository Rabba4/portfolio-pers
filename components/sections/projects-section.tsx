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

const statusConfig = {
  production: { label: "En producción", dot: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400" },
  demo: { label: "Demo", dot: "bg-blue-500", text: "text-blue-600 dark:text-blue-400" },
  archived: { label: "Archivado", dot: "bg-gray-400", text: "text-gray-500" },
}

const categoryBorder = {
  backend: "border-l-primary/60",
  frontend: "border-l-blue-400/60",
  fullstack: "border-l-purple-400/60",
}

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      ...t.projects.items.erp,
      icon: Database,
      image: "/imagen-erp.webp",
      status: "production" as const,
      category: "backend" as const,
    },
    {
      ...t.projects.items.ecommerce,
      icon: ShoppingCart,
      image: "/ecommerce-moda.webp",
      status: "production" as const,
      category: "frontend" as const,
    },
    {
      ...t.projects.items.hrPortal,
      icon: Users,
      image: "/hr-resources-management.webp",
      status: "demo" as const,
      category: "fullstack" as const,
    },
    {
      ...t.projects.items.integrations,
      icon: Link2,
      image: "/api-integration-diagram.webp",
      status: "demo" as const,
      category: "backend" as const,
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
                    <Card className={`group overflow-hidden border-l-4 ${categoryBorder[project.category]} hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-xl hover:shadow-primary/5 h-full`}>
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
                        >
                          {/* Tags in overlay */}
                          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs font-mono bg-background/80 backdrop-blur-sm">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>

                        {/* Icon Badge with rotation animation */}
                        <motion.div
                          className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <project.icon className="h-5 w-5 text-primary" />
                        </motion.div>

                        {/* Status badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium">
                          <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[project.status].dot}`} />
                          <span className={statusConfig[project.status].text}>{statusConfig[project.status].label}</span>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-pretty">{project.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
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
