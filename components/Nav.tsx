'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close mobile menu when clicking a link
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

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/[0.06] border-b border-white/[0.03]'
            : 'bg-transparent'
        }`}
        style={{ fontFamily: "'AveriaSerifLibre', serif" }}
      >
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6 lg:py-8">
          <div className="flex items-center justify-between">
            {/* Left Menu - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
                className="text-white text-sm md:text-base font-medium relative group transition-all duration-300 uppercase"
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
                setIsMobileMenuOpen(false)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              variants={logoVariants}
              className="font-display text-sm md:text-base lg:text-lg xl:text-xl font-medium text-white uppercase relative group transition-all duration-300"
            >
              <span className="relative">
                DREW HOUSE
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </motion.a>

            {/* Right Menu - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-white text-sm md:text-base font-medium relative group transition-all duration-300 uppercase"
              >
                <span className="relative">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-white text-sm md:text-base font-medium relative group transition-all duration-300 uppercase"
              >
                <span className="relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Hamburger Menu Button - Visible only on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50 relative"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-64 bg-black/95 backdrop-blur-md z-40 md:hidden border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <motion.a
                  href="#"
                  custom={0}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-xl font-medium py-4 border-b border-white/10 relative group"
                >
                  <span className="relative">
                    THE ECHO™
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.a>
                <motion.a
                  href="#work"
                  onClick={(e) => handleNavClick(e, 'work')}
                  custom={1}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-xl font-medium py-4 border-b border-white/10 relative group uppercase"
                >
                  <span className="relative">
                    Work
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.a>
                <motion.a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  custom={2}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-xl font-medium py-4 border-b border-white/10 relative group uppercase"
                >
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  custom={3}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-xl font-medium py-4 border-b border-white/10 relative group uppercase"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
