"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="font-mono text-xs uppercase tracking-wider"
    >
      {locale === "es" ? "EN" : "ES"}
    </Button>
  )
}
