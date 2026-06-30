'use client'
import React from 'react'
import { Suspense } from 'react'
import { PlayCircle, BookMarked, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { useMediaQuery } from '@/lib/use-media-query'
import { VideoFallback } from './video-skeleton'
import { Video } from './video'

export default function HeroBanner() {
  const isMobile = useMediaQuery("(max-width:768px)")

  return (
    <section className="relative flex overflow-hidden min-h-[92vh]">
      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full flex items-end pb-20 lg:pb-32 lg:items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 text-sky-300 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse inline-block" />
              Independent Baptist Church · Macau SAR China
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Preaching the{" "}
              <span className="text-sky-400">Gospel</span>
              <br />
              Teaching the{" "}
              <span className="text-sky-400">Word</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow">
              <strong className="text-white">Bordergate Baptist Church (BGBC)</strong> is an
              independent, KJV Bible-believing, and Bible-teaching church in Macau SAR China.
              You are welcome to join us in worship.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/mission-vision"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-sky-500/30 transition-all duration-200"
              >
                {isMobile ? <BookMarked className="w-5 h-5" /> : (
                  <>Learn More <ArrowRight className="w-4 h-4" /></>
                )}
              </Link>

              <a
                href="https://www.facebook.com/bordergatebaptist/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-200"
              >
                <PlayCircle className="w-5 h-5 text-sky-400" />
                {isMobile ? "Watch" : "Watch Live Sermon"}
              </a>
            </div>

            {/* Service time hint */}
            <div className="mt-10 flex items-center gap-3 text-gray-400 text-sm">
              <div className="w-8 h-px bg-gray-500" />
              <span>Sundays at <strong className="text-white">10:30 AM</strong> &amp; <strong className="text-white">4:00 PM</strong></span>
              <span className="mx-1 text-gray-600">·</span>
              <Link href="/time-location" className="text-sky-400 hover:text-sky-300 transition-colors underline-offset-4 hover:underline">
                See all services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <Suspense fallback={<VideoFallback />}>
        <Video
          videoSrc="https://res.cloudinary.com/dh3h0lhyh/video/upload/f_auto:video,q_auto/v1/bgbc/s2vblzderwgzk33xeest"
        />
      </Suspense>
    </section>
  )
}
