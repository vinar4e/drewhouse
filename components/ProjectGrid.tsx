'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  client: string
  role: string
  videoSrc?: string // Local video file path (e.g., '/videos/project1.mp4')
  videoId?: string // YouTube video ID (fallback)
  thumbnail?: string // Thumbnail image path or YouTube thumbnail
}

// HOW TO ADD VIDEOS:
// OPTION 1: Local Video Files (RECOMMENDED - Best Quality & Aesthetic)
// 1. Export your videos as MP4 (H.264 codec, 1080p recommended)
// 2. Place them in /public/videos/ folder
// 3. Update the projects array below:
//    - videoSrc: '/videos/your-video.mp4'
//    - thumbnail: '/images/thumbnail.jpg' (optional - for preview)
//
// OPTION 2: YouTube (Fallback)
// 1. Get your YouTube video ID from the URL
//    Example: https://www.youtube.com/watch?v=ABC123xyz
//    The video ID is: ABC123xyz (the part after v=)
// 2. Use videoId: 'ABC123xyz' and thumbnail: `https://img.youtube.com/vi/ABC123xyz/maxresdefault.jpg`

const projects: Project[] = [
  {
    id: '1',
    title: 'Commercial Campaign',
    client: 'Nike',
    role: 'Editor & Colorist',
    videoSrc: '/videos/project1.mp4', // 👈 CHANGE THIS: Add your local video file
    thumbnail: '/images/thumbnail1.jpg', // 👈 Optional: Add thumbnail image
  },
  {
    id: '2',
    title: 'Music Video',
    client: 'Universal Music',
    role: 'Editor',
    videoSrc: '/videos/project2.mp4', // 👈 CHANGE THIS
    thumbnail: '/images/thumbnail2.jpg',
  },
  {
    id: '3',
    title: 'Brand Film',
    client: 'Apple',
    role: 'Editor & Colorist',
    videoSrc: '/videos/project3.mp4', // 👈 CHANGE THIS
    thumbnail: '/images/thumbnail3.jpg',
  },
  {
    id: '4',
    title: 'Documentary',
    client: 'Netflix',
    role: 'Editor',
    videoSrc: '/videos/project4.mp4', // 👈 CHANGE THIS
    thumbnail: '/images/thumbnail4.jpg',
  },
  {
    id: '5',
    title: 'Short Film',
    client: 'Sundance',
    role: 'Editor & Colorist',
    videoSrc: '/videos/project5.mp4', // 👈 CHANGE THIS
    thumbnail: '/images/thumbnail5.jpg',
  },
]

export default function ProjectGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="relative bg-black py-20">
      {projects.map((project, index) => {
        const start = index / projects.length
        const end = (index + 1) / projects.length
        
        const cardProgress = useTransform(
          smoothProgress,
          [start, end],
          [0, 1]
        )

        const scale = useTransform(cardProgress, [0, 0.5, 1], [0.96, 0.98, 1])
        const y = useTransform(cardProgress, [0, 1], [100, 0])
        const opacity = useTransform(cardProgress, [0, 0.3, 1], [0.6, 0.9, 1])
        const borderRadius = useTransform(cardProgress, [0, 0.5, 1], [32, 16, 0])

        return (
          <motion.div
            key={project.id}
            style={{
              scale,
              y,
              opacity,
              borderRadius,
              position: 'sticky',
              top: '10vh',
              zIndex: projects.length - index,
            }}
            className="h-[80vh] w-full max-w-[85vw] mx-auto my-10 overflow-hidden rounded-2xl border border-white/50"
          >
            <Link href={`/projects/${project.id}`} className="block h-full w-full">
              <div className="relative h-full w-full">
                {/* Video/Thumbnail */}
                <div className="absolute inset-0">
                  {project.videoSrc ? (
                    // Local video file
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.videoId ? (
                    // YouTube fallback
                    <>
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                        allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ pointerEvents: 'none' }}
                      />
                      {project.thumbnail && (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.thumbnail})` }}
                        />
                      )}
                    </>
                  ) : (
                    // Thumbnail fallback
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-white/5"
                      style={project.thumbnail ? { backgroundImage: `url(${project.thumbnail})` } : {}}
                    />
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 z-10"
                >
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-lg md:text-xl uppercase tracking-wider">
                    {project.client} • {project.role}
                  </p>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </section>
  )
}
