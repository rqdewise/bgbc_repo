'use client'
import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'

import { ArticleHeading } from './aritcle-heading'

const locationInfo = {
  gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14777.076893450594!2d113.52597676317392!3d22.191872676232755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34017b714315a539%3A0x9c177caf5966f1e0!2sBordergate%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1721876887940!5m2!1sen!2sph',

}
type Props = {
  churchname: string,
}

export const GoogleMap:React.FC<Props> = ({churchname}) => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center align-center mb-10'>
        <ArticleHeading 
          title="Location" 
          description={`How to get to ${churchname}`}
          Icon={<MapPinIcon className='h-10 w-10 mx-auto' />}
        />
      </div>
      <iframe 
        src={locationInfo.gmap}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-72'
      >
      </iframe>
    </section>
  )
}
