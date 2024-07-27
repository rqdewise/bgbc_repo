import React from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

export const VideoFallback = () => {
  return (
    <section className='w-full flex items-start justify-center transition-all'>
      <div className='w-full min-h-[450px] h-full relative flex items-center justify-center overflow-hidden'>
        <Image
          src='/images/herobanner.jpg'
          fill
          alt="video fallback"
          className="object-cover z-0"
        />
        <span className='z-20 text-white flex items-center justify-center'><PlayIcon className='w-14 h-14 animate-bounce text-sky-700'/>
         Loading video...
        </span>
        <div className='w-full h-full bg-slate-700/40 absolute top-0 left-0'></div>
      </div>

    </section>
  )
}
