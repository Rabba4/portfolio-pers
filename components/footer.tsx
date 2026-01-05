"use client"

import { useLanguage } from "@/components/language-provider"
import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { t, locale } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear}{" "}
              <Link href="/" className="hover:text-foreground transition-colors">
                {"<RB/>"}
              </Link>
              . {t.footer.rights}.
            </p>

            {/* Made with */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              {t.footer.madeWith} <Heart className="h-4 w-4 text-primary fill-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
