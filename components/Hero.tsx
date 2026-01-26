'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroProps {
  headline?: string
  tagline?: string
}

export default function Hero({ 
  headline = 'Video Editing & Color Grading',
  tagline = 'PROFESSIONAL VIDEO POST-PRODUCTION SERVICES'
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-dark pt-32 pb-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        {/* Massive Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 md:mb-12"
        >
          <h1 className="font-display text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black text-white uppercase leading-[0.85] tracking-tighter text-center overflow-hidden">
            DREW HOUSE
          </h1>
        </motion.div>

        {/* Tagline with Vertical Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-6 md:gap-12 mb-16 md:mb-24"
        >
          <div className="w-px h-12 bg-white/30" />
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 font-light">
            {tagline}
          </p>
          <div className="w-px h-12 bg-white/30" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -40 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 max-w-3xl"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
            I specialize in creating compelling visual narratives for commercial
            clients, film productions, and advertising agencies. My work combines
            technical precision with creative vision to deliver content that
            resonates with audiences and drives results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
