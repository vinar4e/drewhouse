'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-wider text-white/70 font-light"
          >
            PROFESSIONAL VIDEO POST-PRODUCTION SERVICES
          </motion.div>

          {/* Right Content - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6 md:gap-8 flex-wrap justify-center md:justify-end"
          >
            <a
              href="mailto:lets@drewhouse.com"
              className="text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors font-light"
            >
              LETS@DREWHOUSE.COM
            </a>
            <a
              href="https://instagram.com/drewhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors font-light"
            >
              @DREWHOUSE
            </a>
            <a
              href="/blog"
              className="text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors font-light"
            >
              BLOG
            </a>
            <a
              href="/faq"
              className="text-xs md:text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors font-light"
            >
              FAQ
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
