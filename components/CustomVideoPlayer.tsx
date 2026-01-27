'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CustomVideoPlayerProps {
  src: string
  onClose: () => void
}

export default function CustomVideoPlayer({ src, onClose }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const [showSpeedMenu, setShowSpeedMenu] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    // Auto play
    video.play()

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [src])

  useEffect(() => {
    if (showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
      }, 3000)
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [showControls, isPlaying])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    video.currentTime = pos * duration
  }

  const skip = (seconds: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds))
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const newVolume = parseFloat(e.target.value)
    video.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = rate
    setPlaybackRate(rate)
    setShowSpeedMenu(false)
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!video) return
    if (!document.fullscreenElement) {
      video.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div
      className="relative w-full h-full bg-black"
      onMouseMove={() => {
        setShowControls(true)
      }}
      onMouseLeave={() => {
        if (isPlaying) {
          setTimeout(() => setShowControls(false), 2000)
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        onClick={togglePlay}
      />

      {/* Progress Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 cursor-pointer z-30 group/progress"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-white transition-all duration-150 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg" />
        </div>
      </div>

      {/* Controls Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        {/* Control Bar */}
        <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 md:w-14 md:h-14 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_0_2px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.7),0_0_0_3px_rgba(255,255,255,0.4)] hover:scale-110 active:scale-95"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 md:w-7 md:h-7 text-black ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </button>

          {/* Time Display */}
          <div className="text-white text-sm md:text-base font-medium px-3 py-1.5 min-w-[100px] md:min-w-[120px] bg-black/70 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)]">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 md:gap-3 ml-auto">
            <button
              onClick={toggleMute}
              className="w-10 h-10 md:w-11 md:h-11 bg-black/70 hover:bg-black/85 text-white hover:text-white transition-all duration-200 flex items-center justify-center rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.3)]"
              aria-label={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
            <div className="relative flex items-center bg-black/50 rounded-lg px-2 py-1.5">
              <div className="relative w-20 md:w-24 h-2 flex items-center justify-center">
                {/* Filled track background */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-white rounded-full transition-all duration-150"
                  style={{ width: `${volume * 100}%` }}
                />
                {/* Slider track background (unfilled portion) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/30 rounded-full" />
                {/* Range input */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="video-player-range w-full h-2 cursor-pointer relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Captions */}
          <button
            className="w-10 h-10 md:w-11 md:h-11 bg-black/70 hover:bg-black/85 text-white hover:text-white transition-all duration-200 flex items-center justify-center rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.3)]"
            title="Captions"
            aria-label="Toggle captions"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </button>

          {/* Playback Speed */}
          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="w-10 h-10 md:w-11 md:h-11 bg-black/70 hover:bg-black/85 text-white hover:text-white transition-all duration-200 flex items-center justify-center rounded-lg text-sm md:text-base font-medium shadow-[0_2px_12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.3)]"
              aria-label="Playback speed"
            >
              {playbackRate}x
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-full mb-2 right-0 bg-black/95 backdrop-blur-md rounded-lg shadow-xl py-2 min-w-[90px] border border-white/10">
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => changePlaybackRate(rate)}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${
                      playbackRate === rate ? 'text-white font-semibold bg-white/10' : 'text-white/70'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="w-10 h-10 md:w-11 md:h-11 bg-black/70 hover:bg-black/85 text-white hover:text-white transition-all duration-200 flex items-center justify-center rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.3)]"
            title="Fullscreen"
            aria-label="Toggle fullscreen"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-black/80 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl hover:scale-110 z-30"
        aria-label="Close video"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
