'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-12 lg:pb-16 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="font-cabin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white uppercase leading-[1.1] tracking-tight">
            A DESIGN STUDIO FOR BRANDS<br />WHO MOVE CULTURE
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
