'use client'
import React from 'react'

type Props = {
  videoSrc: string,
}

export const Video:React.FC<Props> = ({videoSrc}) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}
