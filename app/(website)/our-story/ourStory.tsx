'use client'

import React from 'react'
import { HistoryIcon } from 'lucide-react'

import VideoIframe from '@/components/videoIframe'
import { ArticleHeading } from '@/components/aritcle-heading'

export const OurStory = () => {
  return (
    <div className="container mx-auto">
      <article className="mb-10 prose max-w-full prose-ol:list-decimal prose-ol:ml-5 prose-ol:my-4 0">
        <section className="text-xl/7 prose-h3:text-3xl prose-h3:py-5 pt-4">
          <ArticleHeading 
            title="The Bordergate Baptist Church Story"
            description="Where We Came From"
            Icon={<HistoryIcon className='w-full h-full'/>}
          />

          <VideoIframe url='https://www.youtube.com/embed/YehUYcZLs8U?si=RK2SX5eCbH5qMLHl&amp;controls=0&amp;start=72" '/>
          <p>Bordergate Baptist Church (BGBC) is an independent, KJV Bible-believing, and Bible-teaching church. Its name is derived from Bordergate between China and Macau and has inspired our logo and the Church’s name. In September 1990, when an American missionary established Bordergate Baptist Church in JOSEPH PAUL MANDRINO, who was sent out by Rodgers Baptist Church in Garland, Texas. The Church was dutifully registered as an association with the Macau government as recorded in the 3 De Setembro De 1990-Boletim Oficial De Macau-No.36 “Associação Baptista Independente do Extremo-Oriente” or BORDERGATE BAPTIST CHURCH.</p>
          <p>
            In 1991, the association started the American English Centre to help teach and prepare the foreign community on how to live better lives and better citizens in Macau. The Chinese, too, were introduced to read and write and speak American English that paved the way for them to apply for passports to Australia, New Zealand, and Canada. Though the American English Center ceased operations in 1994, The mission of Bordergate Baptist Church Church is to reach as many people as we can with the Gospel. We firmly believe that we have a church that desires to see people saved and lives changed.
            The rest is now history. In the year 2000, when God called pastor JAMES ENRIQUEZ ESTENILO to take over the pulpit and assume the leadership of Bordergate Baptist Church. It was through the free KJV Bible ministry of BGBC that Bro. James was encouraged first to attend the Church. Through the grace and power of the Holy Spirit given to him, Bordergate Baptist Church and its members withstood the test of time and had to overcome the many challenges most Christian churches are facing today.
          </p>
          <p>
            Our mission verse is in Matthew 28:19-20, “Go ye therefore, and teach all nations, baptizing them in the Name of the Father, and of the Son, and of the Holy Ghost. Teaching them to observe all things whatsoever I have commanded you; and lo, I am with you alway, even unto the end of the world. Amen.” We have a motto that we will have no organization or ministry that does not have for its end the salvation of souls.
          </p>
          <p>
            The Church is working together toward the vision of evangelization and reaching out to our community for Christ. The Lord provided our place of worship in 2010, and the dream of having a Chinese Ministry, a Christian radio program, more mission works in other foreign lands have developed since then.
          </p>
          <p>
            The best days of Bordergate Baptist Church are ahead of us. I pray that we will continue to walk in the light as He is in the light, and we will have fellowship one with another.
          </p>
          <p>Until <strong>Jesus Comes</strong></p>
        </section>
      </article>
    </div>
  )
}
