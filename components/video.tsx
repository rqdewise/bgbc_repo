'use client'
import React from 'react'

type Props = {
  videoSrc: string,
}

export const Video:React.FC<Props> = ({videoSrc}) => {
  return (
    <section className="flex items-center">
      <video autoPlay loop muted >
        <source src={videoSrc} type='video/mp4' className='h-screen md:h-auto' />
      </video>
    </section>
  )
}
