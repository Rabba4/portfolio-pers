"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextShimmerProps {
  children: ReactNode
  className?: string
}

export function TextShimmer({ children, className }: TextShimmerProps) {
  return (
    <motion.div
      className={className}
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.div>
  )
}
