'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.4,
      },
    },
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8">
        <div className="flex items-center justify-between">
          {/* Left Menu */}
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="#"
              className="text-white text-sm md:text-base font-medium relative group transition-all duration-300"
            >
              <span className="relative">
                THE ECHO™
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className="text-white text-sm md:text-base font-medium relative group transition-all duration-300"
            >
              <span className="relative">
                Work
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>

          {/* Center Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
            variants={logoVariants}
            className="font-display text-base md:text-lg lg:text-xl font-medium text-white uppercase relative group transition-all duration-300"
          >
            <span className="relative">
              DREW HOUSE
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </motion.a>

          {/* Right Menu */}
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-white text-sm md:text-base font-medium relative group transition-all duration-300"
            >
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white text-sm md:text-base font-medium relative group transition-all duration-300"
            >
              <span className="relative">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
