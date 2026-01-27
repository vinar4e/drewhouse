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

const clients = [
  'Nike',
  'Apple',
  'Netflix',
  'Moncler',
  'Universal Music',
  'Sundance Film Festival',
  'BMW',
  'Adidas',
  'Sony Pictures',
]

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '50+', label: 'Global Clients' },
  { number: '15+', label: 'Awards Won' },
]

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Seamless Gradient Background - extends full width */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-pink-900/15 pointer-events-none z-0"
           style={{ 
             width: '100vw',
             left: '50%',
             right: '50%',
             marginLeft: '-50vw',
             marginRight: '-50vw'
           }} />
      
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
            className="space-y-6"
          >
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Our Story
            </h3>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              With over a decade of experience in video editing, color grading, and creative direction,
              we specialize in creating compelling visual narratives for commercial clients, film productions,
              and advertising agencies. Our work combines technical precision with creative vision to deliver
              content that resonates with audiences and drives results.
            </p>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
              We believe that great design isn't just about aesthetics—it's about creating meaningful connections
              between brands and their audiences. Every project we take on is an opportunity to push boundaries,
              tell stories, and shape culture.
            </p>
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
                className="relative bg-gradient-to-br from-purple-950/20 via-pink-950/15 to-blue-950/20 rounded-lg p-6 md:p-8 border border-white/10 backdrop-blur-sm"
                style={{
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm md:text-base font-light">
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
                className="relative bg-gradient-to-br from-purple-950/20 via-pink-950/15 to-blue-950/20 rounded-lg p-6 md:p-8 border border-white/10 backdrop-blur-sm group"
                style={{
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05)
                  `,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                whileHover={{
                  boxShadow: `
                    0 0 40px rgba(120, 60, 100, 0.3),
                    0 0 80px rgba(80, 50, 120, 0.2),
                    0 8px 32px rgba(0, 0, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <h4 className="text-white text-xl md:text-2xl font-semibold mb-3">
                  {value.title}
                </h4>
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-12 text-center">
            Trusted By Leading Brands
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-white/70 hover:text-white/90 text-center text-base md:text-lg font-light transition-colors duration-300 py-4 px-6 rounded-lg border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
