"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ParallaxBg } from "@/components/animations/parallax-bg"
import { FloatingParticles } from "@/components/animations/floating-particles"
import { MagneticButton } from "@/components/animations/magnetic-button"

export function HeroSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxBg />
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-primary font-mono text-sm tracking-wider mb-4">
            {t.hero.greeting}
          </motion.p>

          {/* Name with gradient animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance"
          >
            <motion.span
              className="inline-block bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ["0% center", "200% center", "0% center"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {t.hero.name}
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6"
          >
            {t.hero.role}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed text-pretty"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <MagneticButton>
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  {t.hero.cta}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Mail className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" asChild>
                <Link href="/CV_Ruben_Borrajo.pdf" download>{t.hero.downloadCV}</Link>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Links with stagger animation */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {[
              { href: "https://github.com/Rabba4", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ruben-borrajo-baa555226", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:rbi1957@gmail.com?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Estimado%20profesional%2C%0A%0AMe%20pongo%20en%20contacto%20con%20usted%20para%20explorar%20la%20posibilidad%20de%20colaborar%20en%20un%20proyecto%20de%20desarrollo.%0A%0ADetalles%20del%20proyecto%3A%0A-%20Tipo%20de%20soluci%C3%B3n%3A%20%5BWeb%2FApp%2FSistema%2FOtro%5D%0A-%20Descripci%C3%B3n%20breve%3A%20%0A-%20Plazo%20estimado%3A%20%0A-%20Presupuesto%20aproximado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta%20para%20coordinar%20una%20reuni%C3%B3n%20y%20discutir%20los%20detalles.%0A%0AAtentamente%2C%0A%5BTu%20nombre%5D", icon: Mail, label: "Email" },
            ].map((social, index) => (  
              <motion.div key={social.label} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator with continuous animation */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
