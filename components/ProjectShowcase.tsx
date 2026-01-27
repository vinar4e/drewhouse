'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CustomVideoPlayer from './CustomVideoPlayer'
import CaseStudyModal from './CaseStudyModal'

interface ProjectCardProps {
  title: string
  subtitle?: string
  image: string
  video?: string
  projectId?: string
}

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

function ProjectCard({ title, subtitle, image, video, projectId }: ProjectCardProps) {
  const [showQuickView, setShowQuickView] = useState(false)
  const [showCaseStudy, setShowCaseStudy] = useState(false)

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (video) {
      setShowQuickView(true)
    }
  }

  const handleFullProject = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (projectId) {
      setShowCaseStudy(true)
    }
  }

  // Generate case study data based on project
  const getCaseStudy = (): CaseStudy | null => {
    if (!projectId) return null

    const caseStudies: Record<string, CaseStudy> = {
      '1': {
        id: '1',
        title: 'Gilga Farm',
        subtitle: 'for Moncler',
        client: 'Moncler',
        year: '2024',
        role: 'Creative Director & Video Editor',
        overview: 'A groundbreaking campaign that redefined luxury fashion storytelling through cinematic narrative and innovative visual techniques. This project pushed the boundaries of traditional fashion advertising by blending documentary-style authenticity with high-end production values.',
        challenge: 'Moncler needed to connect with a younger, more conscious audience while maintaining their luxury brand identity. The challenge was to create content that felt authentic and meaningful, moving beyond traditional fashion advertising tropes.',
        solution: 'We developed a multi-layered narrative approach that combined real-world storytelling with elevated production. By focusing on the human stories behind the brand and using innovative cinematography techniques, we created a campaign that resonated emotionally while showcasing the product in natural, compelling contexts.',
        results: [
          'Increased brand engagement by 340% across all digital platforms',
          'Generated over 2.5 million organic impressions in the first month',
          'Achieved a 28% increase in brand favorability among target demographics',
          'Won Best Fashion Campaign at the International Advertising Awards 2024'
        ],
        images: [
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg'
        ],
        video: video
      },
      '2': {
        id: '2',
        title: 'Project Two',
        subtitle: 'for Client Name',
        client: 'Premium Brand Co.',
        year: '2024',
        role: 'Lead Video Editor & Motion Designer',
        overview: 'An ambitious digital campaign that transformed how audiences perceive premium lifestyle products. Through a series of interconnected short films, we created an immersive brand experience that elevated product storytelling to an art form.',
        challenge: 'The client wanted to break through the noise in a saturated market while establishing a unique visual language that would set them apart from competitors. The challenge was creating content that felt both aspirational and accessible.',
        solution: 'We developed a signature visual style that combined minimalist aesthetics with dynamic motion design. By focusing on the emotional journey of the product and using innovative editing techniques, we created a cohesive narrative that worked across multiple touchpoints.',
        results: [
          'Drove 450% increase in website traffic during campaign period',
          'Achieved 1.8 million video views across platforms',
          'Generated 65% higher conversion rates compared to previous campaigns',
          'Established brand as category leader in premium segment'
        ],
        images: [
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg'
        ],
        video: video
      },
      '3': {
        id: '3',
        title: 'Project Three',
        subtitle: 'for Client Name',
        client: 'Innovation Labs',
        year: '2024',
        role: 'Creative Director & Post-Production Lead',
        overview: 'A revolutionary campaign that merged cutting-edge technology with human-centered storytelling. This project showcased how innovation can be made accessible and emotionally resonant through powerful visual communication.',
        challenge: 'Making complex technological concepts accessible to a broad audience while maintaining technical credibility. The challenge was balancing educational content with engaging entertainment value.',
        solution: 'We created a hybrid approach that combined documentary-style interviews with dynamic visual effects and motion graphics. By using real user stories and innovative visual metaphors, we made abstract concepts tangible and emotionally engaging.',
        results: [
          'Increased product understanding by 78% among target audience',
          'Achieved 3.2 million total campaign reach',
          'Generated 520 qualified leads in first quarter',
          'Positioned client as thought leader in innovation space'
        ],
        images: [
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg',
          '/images/stock1.jpg'
        ],
        video: video
      }
    }

    return caseStudies[projectId] || null
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] w-full max-w-full min-h-[400px] sm:min-h-[500px]"
        style={{
          boxShadow: `
            0 20px 60px rgba(0,0,0,0.4),
            0 8px 24px rgba(0,0,0,0.3)
          `,
          border: '1.5px solid rgba(180, 170, 190, 0.4)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        whileHover={{
          boxShadow: `
            0 20px 60px rgba(0,0,0,0.4),
            0 8px 24px rgba(0,0,0,0.3),
            0 0 40px rgba(120, 60, 100, 0.3),
            0 0 80px rgba(80, 50, 120, 0.2)
          `,
          borderColor: 'rgba(180, 170, 190, 0.6)',
        }}
      >
        {/* Full card background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't load
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Animated border glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.2) 100%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        
        {/* Outer border highlight */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]"
          style={{
            boxShadow: `
              inset 0 0 0 1px rgba(180, 170, 190, 0.5),
              0 0 20px rgba(180, 170, 190, 0.2)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[3] group-hover:from-black/20 group-hover:via-black/15 group-hover:to-black/30 transition-all duration-300" />

        {/* Title - positioned over the pink background */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 pr-4 sm:pr-6">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-1 drop-shadow-lg break-words">{title}</h3>
          {subtitle && (
            <p className="text-white/95 text-lg sm:text-xl md:text-2xl font-light drop-shadow-md break-words">{subtitle}</p>
          )}
        </div>

        {/* Action Buttons - positioned at bottom left */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex flex-col gap-3 sm:gap-4 pr-4 sm:pr-6">
          {video && (
            <button
              onClick={handleQuickView}
              className="flex items-center gap-2 sm:gap-3 text-white hover:text-white transition-colors group/btn relative"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium drop-shadow-lg relative whitespace-nowrap">
                Quick View
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/btn:w-full"></span>
              </span>
            </button>
          )}
          {projectId && (
            <button
              onClick={handleFullProject}
              className="flex items-center gap-2 sm:gap-3 text-white hover:text-white transition-colors group/btn relative"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium drop-shadow-lg relative whitespace-nowrap">
                Full Project
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/btn:w-full"></span>
              </span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video"
            >
              <CustomVideoPlayer src={video} onClose={() => setShowQuickView(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Study Modal */}
      <CaseStudyModal 
        caseStudy={showCaseStudy ? getCaseStudy() : null}
        onClose={() => setShowCaseStudy(false)}
      />
    </>
  )
}

// Bump this when you replace any video file so the new file loads (matches ProjectCards)
const VIDEO_CACHE = '?v=2'

export default function ProjectShowcase() {
  // Example projects - replace with your actual data
  const projects = [
    {
      id: '1',
      title: 'Gilga Farm',
      subtitle: 'for Moncler',
      image: '/images/stock1.jpg', // Replace with actual image path
      video: '/videos/video1.mp4' + VIDEO_CACHE,
    },
    {
      id: '2',
      title: 'Project Two',
      subtitle: 'for Client Name',
      image: '/images/stock1.jpg',
      video: '/videos/video2.mp4' + VIDEO_CACHE,
    },
    {
      id: '3',
      title: 'Project Three',
      subtitle: 'for Client Name',
      image: '/images/stock1.jpg',
      video: '/videos/video3.mp4' + VIDEO_CACHE,
    },
  ]

  return (
    <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative z-10">
        {/* Cool Text Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-noto-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white uppercase leading-[1.1] tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our latest creative work and collaborations
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              video={project.video}
              projectId={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
