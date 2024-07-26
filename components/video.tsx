'use client'
import React from 'react'

type Props = {
  videoSrc: string,
}
export const Video:React.FC<Props> = ({videoSrc}) => {
  return (
    <section className="w-full flex items-center">
      <video autoPlay loop muted className='w-full'>
        <source src={videoSrc} type='video/mp4' />
      </video>
    </section>
  )
}
