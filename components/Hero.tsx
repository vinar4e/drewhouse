'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="font-short-stack text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white uppercase leading-[1.1] tracking-tight">
            A DESIGN STUDIO FOR BRANDS<br />WHO MOVE CULTURE
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
