'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Seamless Gradient Background - extends full width */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-purple-900/8 to-pink-900/12 pointer-events-none z-0"
           style={{ 
             width: '100vw',
             left: '50%',
             right: '50%',
             marginLeft: '-50vw',
             marginRight: '-50vw'
           }} />
      
      <div className="max-w-[1920px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="font-noto-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white uppercase leading-[1.1] tracking-tight">
            A DESIGN STUDIO FOR BRANDS<br />WHO MOVE CULTURE
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
