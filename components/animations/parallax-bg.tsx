"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ParallaxBg() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
    </div>
  )
}
