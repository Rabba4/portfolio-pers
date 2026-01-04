"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm tracking-wider mb-4 opacity-0 animate-fade-in-up">
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-100 text-balance">
            {t.hero.name}
          </h1>

          {/* Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-200">
            {t.hero.role}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-300 text-pretty">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                {t.hero.cta}
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#about">{t.hero.downloadCV}</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <Link
              href="https://github.com/Rabba4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="www.linkedin.com/in/ruben-borrajo-baa555226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:rbi1957@gmail.com?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Estimado%20profesional%2C%0A%0AMe%20pongo%20en%20contacto%20con%20usted%20para%20explorar%20la%20posibilidad%20de%20colaborar%20en%20un%20proyecto%20de%20desarrollo.%0A%0ADetalles%20del%20proyecto%3A%0A-%20Tipo%20de%20soluci%C3%B3n%3A%20%5BWeb%2FApp%2FSistema%2FOtro%5D%0A-%20Descripci%C3%B3n%20breve%3A%20%0A-%20Plazo%20estimado%3A%20%0A-%20Presupuesto%20aproximado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta%20para%20coordinar%20una%20reuni%C3%B3n%20y%20discutir%20los%20detalles.%0A%0AAtentamente%2C%0A%5BTu%20nombre%5D"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
