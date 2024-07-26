'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Video } from './video'

export default function HeroBanner() {
  return (
    <section className="relative flex h-full overflow-hidden ">
      <div className="text-white/90 w-full container mx-auto items-baseline flex flex-wrap absolute bottom-0 md:bottom-32 left-0 z-10 ">
        <div className="w-full md:w-8/12 px-4">
          <div className="pt-32 sm:pt-0 items-baseline">
            <h2 className="font-semibold text-sm md:text-4xl drop-shadow-md">
              Preaching the GOSPEL – Teaching the WORD – Contending for the FAITH
            </h2>
            <p className="mt-4 text-sm hidden md:flex md:text-xl leading-relaxed tracking-wide drop-shadow-md">
              <strong>Bordergate Baptist Church &#40;BGBC&#41;</strong> is an independent, KJV Bible-believing, and Bible-teaching church.
            </p>
            <div className="flex flex-col md:mt-12 md:flex-row gap-2">
              <Link
                href="./mission-vision"
                className="text-white hidden md:flex font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 hover:bg-gray-700  uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Learn more
              </Link>
              <a
              href="https://www.facebook.com/bordergatebaptist/videos"
              className="text-center ml-1 text-white font-bold p-2 md:p-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-sky-500 hover:bg-sky-600 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              target="_blank"
              >
                  Watch Live Sermon 
              </a>
            </div>
          </div>
        </div>
      </div>
      <Video videoSrc="https://res.cloudinary.com/dh3h0lhyh/video/upload/f_auto:video,q_auto/v1/bgbc/s2vblzderwgzk33xeest"/>
    </section>
  )
}
