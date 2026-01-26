'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

export default function ProjectCards() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Local video paths - update these with your actual video file paths
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
  ]

  const handleCardClick = (index: number) => {
    setSelectedVideo(videos[index])
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    // Pause all videos when closing
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
  }

  return (
    <>
      <section className="relative w-full px-0">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => handleCardClick(0)}
              className="relative bg-black aspect-square cursor-pointer group overflow-hidden border-2 border-white/40"
            >
              <video
                ref={(el) => {
                  videoRefs.current[0] = el
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  e.currentTarget.play()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={videos[0]} type="video/mp4" />
              </video>
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => handleCardClick(1)}
              className="bg-black aspect-square cursor-pointer group overflow-hidden relative border-2 border-white/40"
            >
              <video
                ref={(el) => {
                  videoRefs.current[1] = el
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  e.currentTarget.play()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={videos[1]} type="video/mp4" />
              </video>
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => handleCardClick(2)}
              className="bg-black aspect-square cursor-pointer group overflow-hidden relative border-2 border-white/40"
            >
              <video
                ref={(el) => {
                  videoRefs.current[2] = el
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => {
                  e.currentTarget.play()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause()
                  e.currentTarget.currentTime = 0
                }}
              >
                <source src={videos[2]} type="video/mp4" />
              </video>
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
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
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={selectedVideo}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
