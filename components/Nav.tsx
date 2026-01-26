'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display text-lg md:text-xl font-medium text-white hover:opacity-70 transition-opacity"
          >
            Drew House
          </motion.a>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            onClick={handleContactClick}
            className="text-white text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
