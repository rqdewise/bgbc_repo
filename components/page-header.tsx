'use client'
import React from 'react'
import Link from 'next/link'

type Props = {
  image: string,
  title: string,
  description?: string,
  icon?: React.ReactNode,
  showCta?: boolean,
}

export const PageHeader:React.FC<Props> = ({ image, title, description, icon, showCta = true }) => {

  return (
    <div className='w-full min-h-[450px] bg-cover bg-no-repeat bg-slate-800/40' style={{backgroundImage:`url(${image})`}}>
      <div className='relative min-h-[450px] w-full flex items-center'>
        <div className='container relative flex flex-col items-center justify-center text-center z-20 px-4 gap-4'>
          {icon && <div className="w-16 h-16">{icon}</div>}
          <h3 className="text-5xl font-bold text-white tracking-wide m-0">{title}</h3>
          {description && (
            <p className='text-xl text-white/90 tracking-tight m-0'>{description}</p>
          )}
          {showCta && (
            <Link
              href="/how-to-get-saved"
              className="mt-2 inline-block bg-sky-500 hover:bg-sky-400 text-white font-bold px-7 py-3 rounded-full shadow-lg transition-colors text-base no-underline"
            >
              New Here? Start Here →
            </Link>
          )}
        </div>
        <div className="absolute top-0 left-0 bg-slate-800/60 z-0 w-full h-full"></div>
      </div>
    </div>
  )
}
