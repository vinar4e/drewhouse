'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries and exploring new creative territories to deliver groundbreaking visual experiences.',
  },
  {
    title: 'Precision',
    description: 'Every frame, every cut, every color carefully crafted to perfection.',
  },
  {
    title: 'Storytelling',
    description: 'Transforming ideas into compelling narratives that resonate and inspire.',
  },
]

const stats = [
  { 
    number: '10+', 
    label: 'Years Experience',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    number: '200+', 
    label: 'Projects Delivered',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  { 
    number: '50+', 
    label: 'Global Clients',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    number: '15+', 
    label: 'Awards Won',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
]

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-noto-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white uppercase leading-[1.1] tracking-tight mb-6">
            About Us
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto">
            A design studio for brands who move culture
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-20 md:mb-28">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl p-6 md:p-8"
            style={{
              background: 'rgba(28, 24, 42, 0.85)',
              border: '1px solid rgba(120, 90, 160, 0.25)',
              boxShadow: `
                0 0 0 1px rgba(100, 70, 140, 0.1),
                0 4px 24px rgba(0, 0, 0, 0.4),
                0 0 40px rgba(80, 60, 120, 0.08)
              `,
            }}
          >
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Our Story
            </h3>
            <div className="space-y-4">
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                With over a decade of experience in video editing, color grading, and creative direction,
                we specialize in creating compelling visual narratives for commercial clients, film productions,
                and advertising agencies. Our work combines technical precision with creative vision to deliver
                content that resonates with audiences and drives results.
              </p>
              <p className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                We believe that great design isn't just about aesthetics—it's about creating meaningful connections
                between brands and their audiences. Every project we take on is an opportunity to push boundaries,
                tell stories, and shape culture.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl p-6 md:p-8"
                style={{
                  background: 'rgba(28, 24, 42, 0.85)',
                  border: '1px solid rgba(120, 90, 160, 0.25)',
                  boxShadow: `
                    0 0 0 1px rgba(100, 70, 140, 0.1),
                    0 4px 24px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(80, 60, 120, 0.08)
                  `,
                }}
              >
                {/* Icon at top-left */}
                <div className="text-violet-400 mb-4">
                  {stat.icon}
                </div>
                
                {/* Number and label below icon */}
                <div className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-12 text-center">
            What We Stand For
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative rounded-xl p-6 md:p-8"
                style={{
                  background: 'rgba(28, 24, 42, 0.85)',
                  border: '1px solid rgba(120, 90, 160, 0.25)',
                  boxShadow: `
                    0 0 0 1px rgba(100, 70, 140, 0.1),
                    0 4px 24px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(80, 60, 120, 0.08)
                  `,
                }}
              >
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-3">
                  {value.title}
                </h4>
                <p className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
