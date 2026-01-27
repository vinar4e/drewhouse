'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface CaseStudy {
  id: string
  title: string
  subtitle: string
  client: string
  year: string
  role: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  images: string[]
  video?: string
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null
  onClose: () => void
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [caseStudy])

  if (!caseStudy) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto scrollbar-hide"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-7xl bg-black/90 rounded-b-2xl overflow-hidden my-8"
          style={{ 
            maxHeight: '90vh', 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            outline: 'none', 
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: '90vh' }}>
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[400px] overflow-hidden" style={{ marginTop: '-1px', marginLeft: '-1px', marginRight: '-1px', width: 'calc(100% + 2px)' }}>
              <div className="absolute inset-0">
                <img 
                  src={caseStudy.images[0] || '/images/stock1.jpg'} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="font-noto-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white uppercase leading-tight mb-4">
                    {caseStudy.title}
                  </h1>
                  <p className="text-white/90 text-2xl md:text-3xl font-light mb-6">
                    {caseStudy.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-6 text-white/80 text-sm md:text-base">
                    <div>
                      <span className="font-medium">Client:</span> {caseStudy.client}
                    </div>
                    <div>
                      <span className="font-medium">Year:</span> {caseStudy.year}
                    </div>
                    <div>
                      <span className="font-medium">Role:</span> {caseStudy.role}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Overview */}
              <section className="mb-16">
                <h2 className="font-noto-serif text-3xl md:text-4xl font-normal text-white uppercase mb-6">
                  Overview
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl">
                  {caseStudy.overview}
                </p>
              </section>

              {/* Challenge & Solution Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
                <section>
                  <h2 className="font-noto-serif text-2xl md:text-3xl font-normal text-white uppercase mb-4">
                    Challenge
                  </h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </section>
                <section>
                  <h2 className="font-noto-serif text-2xl md:text-3xl font-normal text-white uppercase mb-4">
                    Solution
                  </h2>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </section>
              </div>

              {/* Image Gallery */}
              {caseStudy.images.length > 1 && (
                <section className="mb-16">
                  <h2 className="font-noto-serif text-3xl md:text-4xl font-normal text-white uppercase mb-8">
                    Gallery
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.images.slice(1).map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-video overflow-hidden rounded-lg"
                      >
                        <img 
                          src={img} 
                          alt={`${caseStudy.title} - Image ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results */}
              <section>
                <h2 className="font-noto-serif text-3xl md:text-4xl font-normal text-white uppercase mb-6">
                  Results
                </h2>
                <ul className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 text-white/80 text-lg md:text-xl"
                    >
                      <span className="text-white mt-1">→</span>
                      <span>{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
