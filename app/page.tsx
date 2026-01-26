'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="work">
        <ProjectGrid />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
