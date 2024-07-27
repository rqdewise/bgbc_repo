import React from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'

type Props = {
  title: string,
  description?: string,
  Icon?: JSX.Element ,
}

export const ArticleHeading: React.FC<Props> = ({ title, description, Icon }) => {
  return (
    <header className="w-full flex items-center justify-center">
      <div className='prose flex flex-col items-center justify-center align-center mb-10 pt-10'>
        <div className='bg-sky-500 text-gray-100 w-16 h-16 p-3 rounded-full flex items-center mb-2'>
          { Icon ? Icon : <PhotoIcon className='h-10 w-10 mx-auto' />}
        </div>
        <h4 className='text-3xl font-semibold'>{title}</h4>
        <h4 className="text-2xl font-normal">{description || " "}</h4>
      </div>
    </header>
  )
}
