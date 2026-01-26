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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(`#${sectionId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Left Menu */}
          <div className="flex items-center gap-6 md:gap-8">
            <motion.a
              href="#"
              className="text-white text-sm md:text-base font-light hover:opacity-70 transition-opacity"
            >
              THE ECHO™
            </motion.a>
            <motion.a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className="text-white text-sm md:text-base font-light hover:opacity-70 transition-opacity"
            >
              Work
            </motion.a>
          </div>

          {/* Center Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display text-base md:text-lg lg:text-xl font-medium text-white uppercase hover:opacity-80 transition-opacity duration-300"
          >
            DREW HOUSE
          </motion.a>

          {/* Right Menu */}
          <div className="flex items-center gap-6 md:gap-8">
            <motion.a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-white text-sm md:text-base font-light hover:opacity-70 transition-opacity"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white text-sm md:text-base font-light hover:opacity-70 transition-opacity"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
