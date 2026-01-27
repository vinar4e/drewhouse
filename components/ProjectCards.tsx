'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'
import CustomVideoPlayer from './CustomVideoPlayer'

function captureVideoFrameAsPoster(el: HTMLVideoElement) {
  if (!el || el.videoWidth === 0 || el.videoHeight === 0) return
  const canvas = document.createElement('canvas')
  canvas.width = el.videoWidth
  canvas.height = el.videoHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.drawImage(el, 0, 0)
  try {
    el.poster = canvas.toDataURL('image/jpeg', 0.88)
  } catch {
    /* ignore */
  }
  el.currentTime = 0
  el.pause()
}

export default function ProjectCards() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videoCache = '?v=2'
  const cards = [
    { video: '/videos/video1.mp4' + videoCache },
    { video: '/videos/video2.mp4' + videoCache },
    { video: '/videos/video3.mp4' + videoCache },
  ]

  const handleCardClick = (index: number) => {
    setSelectedVideo(cards[index].video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  // Force first frame to paint (many browsers don’t show it until video has played once)

  const onVideoLoaded = useCallback((index: number) => {
    const el = videoRefs.current[index]
    if (!el) return
    el.currentTime = 0
    el.play()
      .then(() => {
        el.pause()
        captureVideoFrameAsPoster(el)
      })
      .catch(() => {})
  }, [])

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.15,
      },
    }),
  }

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="max-w-[1920px] mx-auto relative z-10 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={0}
              variants={cardVariants}
              onClick={() => handleCardClick(0)}
              className="relative bg-gradient-to-br from-purple-950/30 via-pink-950/20 to-blue-950/30 aspect-square cursor-pointer group overflow-hidden rounded-lg"
              style={{
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 0 0 0 rgba(120, 60, 100, 0),
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05)
                `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              whileHover={{
                boxShadow: `
                  0 0 40px rgba(120, 60, 100, 0.3),
                  0 0 80px rgba(80, 50, 120, 0.2),
                  0 8px 32px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <video
                ref={(el) => { videoRefs.current[0] = el }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => onVideoLoaded(0)}
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={cards[0].video} type="video/mp4" />
              </video>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[1]" />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={1}
              variants={cardVariants}
              onClick={() => handleCardClick(1)}
              className="relative bg-gradient-to-br from-pink-950/30 via-purple-950/20 to-blue-950/30 aspect-square cursor-pointer group overflow-hidden rounded-lg"
              style={{
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 0 0 0 rgba(80, 50, 120, 0),
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05)
                `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              whileHover={{
                boxShadow: `
                  0 0 40px rgba(80, 50, 120, 0.3),
                  0 0 80px rgba(120, 60, 100, 0.2),
                  0 8px 32px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <video
                ref={(el) => { videoRefs.current[1] = el }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => onVideoLoaded(1)}
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={cards[1].video} type="video/mp4" />
              </video>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[1]" />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={2}
              variants={cardVariants}
              onClick={() => handleCardClick(2)}
              className="relative bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-pink-950/30 aspect-square cursor-pointer group overflow-hidden rounded-lg"
              style={{
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 0 0 0 rgba(60, 100, 150, 0),
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05)
                `,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              whileHover={{
                boxShadow: `
                  0 0 40px rgba(60, 100, 150, 0.3),
                  0 0 80px rgba(80, 50, 120, 0.2),
                  0 8px 32px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <video
                ref={(el) => { videoRefs.current[2] = el }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => onVideoLoaded(2)}
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={cards[2].video} type="video/mp4" />
              </video>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[1]" />
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video"
            >
              <CustomVideoPlayer src={selectedVideo} onClose={closeVideo} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
