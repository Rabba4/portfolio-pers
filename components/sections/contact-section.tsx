"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"

export function ContactSection() {
  const { t, locale } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Guardar referencia al formulario antes de la operación asíncrona
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setSubmitStatus("success")
      // Limpiar el formulario usando la referencia guardada
      form.reset()

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus("error")
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.contact.title}</h2>
              <motion.div
                className="flex-1 h-px bg-border"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-muted-foreground mb-12 max-w-xl">{t.contact.subtitle}</p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="name">{t.contact.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                        className="bg-background"
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="email">{t.contact.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={locale === "es" ? "tu@email.com" : "you@email.com"}
                        className="bg-background"
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="message">{t.contact.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={
                          locale === "es" ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."
                        }
                        className="bg-background resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Button type="submit" className="w-full group" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            {locale === "es" ? "Enviando..." : "Sending..."}
                          </span>
                        ) : submitStatus === "success" ? (
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            {t.contact.success}
                          </span>
                        ) : submitStatus === "error" ? (
                          <span className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            {t.contact.error}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {t.contact.send}
                            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    {locale === "es" ? "Información de contacto" : "Contact Information"}
                  </h3>

                  <div className="space-y-4">
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Link
                        href="mailto:rbi1957@gmail.com?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Estimado%20profesional%2C%0A%0AMe%20pongo%20en%20contacto%20con%20usted%20para%20explorar%20la%20posibilidad%20de%20colaborar%20en%20un%20proyecto%20de%20desarrollo.%0A%0ADetalles%20del%20proyecto%3A%0A-%20Tipo%20de%20soluci%C3%B3n%3A%20%5BWeb%2FApp%2FSistema%2FOtro%5D%0A-%20Descripci%C3%B3n%20breve%3A%20%0A-%20Plazo%20estimado%3A%20%0A-%20Presupuesto%20aproximado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta%20para%20coordinar%20una%20reuni%C3%B3n%20y%20discutir%20los%20detalles.%0A%0AAtentamente%2C%0A%5BTu%20nombre%5D"
                        className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <motion.div
                          className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="h-5 w-5" />
                        </motion.div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm">rbi1957@gmail.com</p>
                        </div>
                      </Link>
                    </motion.div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="p-3 rounded-lg bg-muted">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{locale === "es" ? "Ubicación" : "Location"}</p>
                        <p className="text-sm">{locale === "es" ? "Vigo, España" : "Vigo, Spain"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {locale === "es" ? "Redes sociales" : "Social Media"}
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { href: "https://github.com/Rabba4", icon: Github, label: "GitHub" },
                      { href: "https://www.linkedin.com/in/ruben-borrajo-baa555226", icon: Linkedin, label: "LinkedIn" },
                    ].map((social) => (
                      <motion.div key={social.label} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors inline-block"
                        >
                          <social.icon className="h-5 w-5" />
                          <span className="sr-only">{social.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <p className="text-sm text-foreground">
                      {locale === "es"
                        ? "Actualmente disponible para nuevos proyectos"
                        : "Currently available for new projects"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
