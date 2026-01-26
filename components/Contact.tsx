'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a service like Formspree, SendGrid, etc.
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="min-h-screen py-32 md:py-40 px-8 md:px-12 lg:px-16 bg-dark">
      <div className="max-w-[1920px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-24 md:mb-32 text-white leading-[0.9] tracking-tight uppercase"
          style={{ 
            fontWeight: 700,
            lineHeight: '0.9',
            letterSpacing: '-0.02em'
          }}
        >
          Let's Work
          <br />
          Together
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-8"
        >
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/50 mb-3">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:outline-none focus:border-white/60 transition-colors text-white text-lg font-light placeholder:text-white/30"
              style={{ fontWeight: 300 }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/50 mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:outline-none focus:border-white/60 transition-colors text-white text-lg font-light placeholder:text-white/30"
              style={{ fontWeight: 300 }}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-white/50 mb-3">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:outline-none focus:border-white/60 transition-colors text-white text-lg font-light"
              style={{ fontWeight: 300 }}
            >
              <option value="" className="bg-dark">Select a project type</option>
              <option value="commercial" className="bg-dark">Commercial</option>
              <option value="music-video" className="bg-dark">Music Video</option>
              <option value="film" className="bg-dark">Film</option>
              <option value="documentary" className="bg-dark">Documentary</option>
              <option value="other" className="bg-dark">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/50 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:outline-none focus:border-white/60 transition-colors text-white text-lg font-light resize-none placeholder:text-white/30"
              style={{ fontWeight: 300 }}
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ opacity: 0.7 }}
            className="mt-12 text-white text-lg font-light border-b border-white/30 hover:border-white/60 transition-colors pb-1"
            style={{ fontWeight: 300 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
