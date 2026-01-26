'use client'

import { motion } from 'framer-motion'

const bigNames = [
  'Nike',
  'Apple',
  'Netflix',
  'Universal Music',
  'Sundance Film Festival',
  'BMW',
  'Adidas',
  'Sony Pictures',
]

export default function About() {
  return (
    <section className="min-h-screen py-32 md:py-40 px-8 md:px-12 lg:px-16 bg-dark">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full"
          >
            <div className="relative w-full h-full overflow-hidden bg-white/5 rounded-2xl border border-white/10">
              {/* Placeholder for headshot - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl">
                Headshot
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <h2 
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] tracking-tight uppercase"
              style={{ 
                fontWeight: 700,
                lineHeight: '0.9',
                letterSpacing: '-0.02em'
              }}
            >
              About
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              With over a decade of experience in video editing and color grading,
              I specialize in creating compelling visual narratives for commercial
              clients, film productions, and advertising agencies. My work combines
              technical precision with creative vision to deliver content that
              resonates with audiences and drives results.
            </p>

            {/* Big Names */}
            <div className="pt-8">
              <h3 className="text-xs uppercase tracking-wider text-white/50 mb-8">
                Worked With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {bigNames.map((name, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="text-white/80 font-light text-base md:text-lg"
                    style={{ fontWeight: 300 }}
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ opacity: 0.7 }}
              className="inline-block text-white text-base md:text-lg font-light border-b border-white/30 hover:border-white/60 transition-colors pb-1"
              style={{ fontWeight: 300 }}
            >
              Download Resume (PDF)
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
