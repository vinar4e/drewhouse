'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectDetail {
  id: string
  title: string
  client: string
  role: string
  software: string[]
  videoId: string
  process: string
}

// HOW TO CHANGE VIDEOS:
// Replace 'dQw4w9WgXcQ' with your YouTube video ID
// Example: If your video URL is https://www.youtube.com/watch?v=ABC123xyz
//          Then use videoId: 'ABC123xyz'

const projectData: Record<string, ProjectDetail> = {
  '1': {
    id: '1',
    title: 'Commercial Campaign',
    client: 'Nike',
    role: 'Editor & Colorist',
    software: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    videoId: 'dQw4w9WgXcQ', // 👈 CHANGE THIS: Replace with your YouTube video ID
    process: 'This project involved creating a high-energy commercial campaign that captured the essence of athleticism and determination. The editing process focused on dynamic pacing, seamless transitions, and a color grade that enhanced the vibrant energy of the footage. Working closely with the creative director, we developed a visual language that resonated with the target audience while maintaining brand consistency.',
  },
  '2': {
    id: '2',
    title: 'Music Video',
    client: 'Universal Music',
    role: 'Editor',
    videoId: 'dQw4w9WgXcQ', // 👈 CHANGE THIS
    software: ['Adobe Premiere Pro', 'After Effects'],
    process: 'A fast-paced music video that required precise timing with the beat and creative transitions. The editing style emphasized the rhythm and energy of the track while maintaining visual coherence throughout multiple location changes.',
  },
  '3': {
    id: '3',
    title: 'Brand Film',
    client: 'Apple',
    role: 'Editor & Colorist',
    videoId: 'dQw4w9WgXcQ', // 👈 CHANGE THIS
    software: ['Final Cut Pro', 'DaVinci Resolve'],
    process: 'A minimalist brand film that showcased product features through elegant storytelling. The editing approach prioritized clean cuts and natural pacing, while the color grade maintained Apple\'s signature aesthetic of clean, vibrant imagery.',
  },
  '4': {
    id: '4',
    title: 'Documentary',
    client: 'Netflix',
    role: 'Editor',
    videoId: 'dQw4w9WgXcQ', // 👈 CHANGE THIS
    software: ['Adobe Premiere Pro'],
    process: 'A feature-length documentary that required careful narrative construction from hundreds of hours of footage. The editing process involved creating emotional arcs, maintaining narrative tension, and ensuring factual accuracy while crafting a compelling story.',
  },
  '5': {
    id: '5',
    title: 'Short Film',
    client: 'Sundance',
    role: 'Editor & Colorist',
    videoId: 'dQw4w9WgXcQ', // 👈 CHANGE THIS
    software: ['Adobe Premiere Pro', 'DaVinci Resolve'],
    process: 'An independent short film that explored complex themes through visual storytelling. The editing focused on character development and emotional resonance, while the color grade established the film\'s distinct mood and atmosphere.',
  },
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projectData[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-white/70 hover:text-white underline">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="mr-2">←</span> Back to Projects
          </Link>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-charcoal">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${project.videoId}?modestbranding=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <h1 className="font-display text-5xl md:text-7xl font-black">
              {project.title}
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                  Process
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  {project.process}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">
                Project Details
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm mb-1">Client</p>
                  <p className="text-white font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Role</p>
                  <p className="text-white font-semibold">{project.role}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Software</p>
                  <ul className="space-y-1">
                    {project.software.map((software) => (
                      <li key={software} className="text-white">
                        {software}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
