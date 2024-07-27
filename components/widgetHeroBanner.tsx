'use client'
import React from 'react'
import { Suspense } from 'react'
import { PlayIcon, BookMarked } from 'lucide-react'
import Link from 'next/link'

import { useMediaQuery } from '@/lib/use-media-query'
import { VideoFallback } from './video-skeleton'
import { Video } from './video'

export default function HeroBanner() {
  const isMobile = useMediaQuery("(max-width:728px)")

  return (
    <section className="relative flex overflow-hidden ">
      <div className="text-white/90 w-full container mx-auto items-baseline flex flex-wrap absolute bottom-0 md:bottom-40 left-0 z-10 ">
        <div className="w-full md:w-8/12 px-4">
          <div className="pt-32 sm:pt-0 items-baseline">
            <h2 className="font-semibold hidden md:flex md:text-4xl drop-shadow-md">
              Preaching the GOSPEL – Teaching the WORD – Contending for the FAITH
            </h2>
            <p className="mt-4 text-sm hidden md:block md:text-xl leading-relaxed tracking-wide drop-shadow-md">
              <strong>Bordergate Baptist Church &#40;BGBC&#41;</strong> is an independent, KJV Bible-believing, and Bible-teaching church.
            </p>
            <div className="flex md:mt-12 flex-row gap-2 items-center text-center">
              <Link
                href="./mission-vision"
                className="text-white flex font-bold p-2 md:px-6 md:py-4  rounded outline-none focus:outline-none mx-1 mb-3 bg-gray-600 active:bg-gray-700 hover:bg-gray-700  uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                { isMobile ? <BookMarked /> : "learn more" }
              </Link>
              <a
              href="https://www.facebook.com/bordergatebaptist/videos"
              className="text-center mx-1 text-white font-bold p-2 md:px-6 md:py-4 rounded outline-none focus:outline-none mb-3 bg-sky-500 hover:bg-sky-600 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              target="_blank"
              >
                { isMobile ? <PlayIcon /> : "Watch Live Sermon" }
              </a>
              { isMobile&& <h4>Learn more</h4> }
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<VideoFallback />}>
        <Video 
          videoSrc="https://res.cloudinary.com/dh3h0lhyh/video/upload/f_auto:video,q_auto/v1/bgbc/s2vblzderwgzk33xeest"
        />
      </Suspense>
    </section>
  )
}
