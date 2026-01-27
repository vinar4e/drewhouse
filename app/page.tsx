'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectCards from '@/components/ProjectCards'
import ProjectShowcase from '@/components/ProjectShowcase'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <div id="work">
        <ProjectCards />
      </div>
      <ProjectShowcase />
    </main>
  )
}
