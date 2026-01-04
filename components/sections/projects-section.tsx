"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Database, ShoppingCart, Users, Link2 } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      ...t.projects.items.erp,
      icon: Database,
      image: "/enterprise-erp-dashboard-software-dark-theme.jpg",
    },
    {
      ...t.projects.items.ecommerce,
      icon: ShoppingCart,
      image: "/modern-ecommerce-website-product-page.jpg",
    },
    {
      ...t.projects.items.hrPortal,
      icon: Users,
      image: "/hr-management-dashboard-employee-portal.jpg",
    },
    {
      ...t.projects.items.integrations,
      icon: Link2,
      image: "/api-integration-diagram-connecting-systems.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.projects.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:border-primary/50 transition-all duration-300 bg-card"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-pretty">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <Link href="#">
                        <Github className="h-4 w-4 mr-2" />
                        {t.projects.viewCode}
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <Link href="#">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.viewProject}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
