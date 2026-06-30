import React from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'

export const VideoFallback = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src='/images/herobanner.jpg'
        fill
        alt="video fallback"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-slate-700/40 flex items-center justify-center">
        <span className="text-white flex items-center gap-2">
          <PlayIcon className="w-10 h-10 animate-bounce text-sky-400" />
          <span className="text-sm">Loading video...</span>
        </span>
      </div>
    </div>
  )
}
