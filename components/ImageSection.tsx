'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function ImageSection() {
  const [bgColor, setBgColor] = useState<string>('rgba(10, 10, 10, 1)')
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const extractBackgroundColor = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = img.naturalWidth || img.width
      canvas.height = img.naturalHeight || img.height
      ctx.drawImage(img, 0, 0)

      // Sample edge pixels (top-left corner)
      const imageData = ctx.getImageData(0, 0, Math.min(50, canvas.width), Math.min(50, canvas.height))
      const data = imageData.data
      
      let r = 0, g = 0, b = 0, count = 0
      for (let i = 0; i < data.length; i += 4) {
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
        count++
      }
      
      if (count > 0) {
        r = Math.round(r / count)
        g = Math.round(g / count)
        b = Math.round(b / count)
        setBgColor(`rgba(${r}, ${g}, ${b}, 1)`)
      }
    }

    if (img.complete) {
      extractBackgroundColor()
    } else {
      img.onload = extractBackgroundColor
    }
  }, [])

  return (
    <section 
      className="relative w-full py-0 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Smooth gradient transition from site background to image background */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(18, 15, 28, 0.72) 0%, ${bgColor} 100%)`,
        }}
      />
      
      {/* Image container */}
      <div className="relative w-full max-w-[1920px] mx-auto z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full"
        >
          <img
            ref={imgRef}
            src="/images/int1.png"
            alt=""
            className="w-full h-auto object-contain"
            style={{
              display: 'block',
            }}
          />
        </motion.div>
      </div>
      
      {/* Smooth gradient transition from image background back to site background */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, rgba(18, 15, 28, 0.72) 100%)`,
        }}
      />
    </section>
  )
}
