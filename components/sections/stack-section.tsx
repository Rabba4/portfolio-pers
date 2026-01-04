"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"

export function StackSection() {
  const { t } = useLanguage()

  const techStack = {
    backend: [
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎸" },
      { name: "Java", icon: "☕" },
      { name: "PHP", icon: "🐘" },
      { name: "Node.js", icon: "🟢" },
    ],
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
    database: [
      { name: "Oracle", icon: "🔴" },
      { name: "PL/SQL", icon: "📊" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
    ],
    tools: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "REST APIs", icon: "🔗" },
      { name: "SOAP", icon: "🧼" },
      { name: "Oracle Forms", icon: "📋" },
    ],
  }

  const categories = [
    { key: "backend", label: t.stack.categories.backend, items: techStack.backend },
    { key: "frontend", label: t.stack.categories.frontend, items: techStack.frontend },
    { key: "database", label: t.stack.categories.database, items: techStack.database },
    { key: "tools", label: t.stack.categories.tools, items: techStack.tools },
  ]

  return (
    <section id="stack" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.stack.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Tech Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.key}
                className="bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">{category.label}</h3>
                  <ul className="space-y-3">
                    {category.items.map((tech, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform">{tech.icon}</span>
                        <span className="font-mono text-sm">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              {t.locale === "es"
                ? "Además de estas tecnologías, tengo experiencia en metodologías ágiles, integración continua y despliegue automatizado."
                : "In addition to these technologies, I have experience in agile methodologies, continuous integration and automated deployment."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
