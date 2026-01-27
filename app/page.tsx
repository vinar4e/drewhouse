'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCards from '@/components/ProjectCards'
import ProjectShowcase from '@/components/ProjectShowcase'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="work">
        <ProjectCards />
      </div>
      <ProjectShowcase />
      <About />
    </main>
  )
}
