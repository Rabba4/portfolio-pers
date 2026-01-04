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

export function ContactSection() {
  const { t, locale } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t.contact.title}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-muted-foreground mb-12 max-w-xl">{t.contact.subtitle}</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={locale === "es" ? "Rubén Borrajo" : "Rubén Borrajo"}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={locale === "es" ? "tu@email.com" : "you@email.com"}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={locale === "es" ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."}
                      className="bg-background resize-none"
                    />
                  </div>

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
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {locale === "es" ? "Información de contacto" : "Contact Information"}
                </h3>

                <div className="space-y-4">
                  <Link
                    href="mailto:rbi1957@gmail.com?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Estimado%20profesional%2C%0A%0AMe%20pongo%20en%20contacto%20con%20usted%20para%20explorar%20la%20posibilidad%20de%20colaborar%20en%20un%20proyecto%20de%20desarrollo.%0A%0ADetalles%20del%20proyecto%3A%0A-%20Tipo%20de%20soluci%C3%B3n%3A%20%5BWeb%2FApp%2FSistema%2FOtro%5D%0A-%20Descripci%C3%B3n%20breve%3A%20%0A-%20Plazo%20estimado%3A%20%0A-%20Presupuesto%20aproximado%3A%20%0A%0AQuedo%20a%20la%20espera%20de%20su%20respuesta%20para%20coordinar%20una%20reuni%C3%B3n%20y%20discutir%20los%20detalles.%0A%0AAtentamente%2C%0A%5BTu%20nombre%5D"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm">rbi1957@gmail.com</p>
                    </div>
                  </Link>

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
                  <Link
                    href="https://github.com/Rabba4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/ruben-borrajo-baa555226"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
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
          </div>
        </div>
      </div>
    </section>
  )
}
