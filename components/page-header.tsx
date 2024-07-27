'use client'
import React from 'react'

type Props = {
  image: string,
  title: string,
  description?: string,
  icon?: React.ReactNode,
}

export const PageHeader:React.FC<Props> = ({ image, title, description, icon }) => {
  
  return (
    <div className='w-full min-h-[450px] bg-cover bg-no-repeat bg-slate-800/40' style={{backgroundImage:`url(${image})`}}>
      <div className='relative min-h-[450px] w-full flex items-center'>
        <div className='container relative flex items-center justify-center prose z-20'>
          <div className="w-16 h-16">{icon}</div>
          <h3 className="text-5xl text-white tracking-wide">{title}</h3>
          <p className='text-xl tracking-tight'>{description}</p>
        </div>
        <div className="absolute top-0 left-0 bg-slate-800/50 z-0 w-full h-full"></div>
      </div>
    </div>
  )
}
