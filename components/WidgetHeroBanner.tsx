import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="hero relative pt-16 items-center flex h-screen max-h-860-px">

        <div className="text-white/90 container mx-auto items-center flex flex-wrap z-10">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                <div className="pt-32 sm:pt-0">
                    <h2 className="font-semibold text-4xl text-blueGray-600">
                    Preaching the GOSPEL – Teaching the WORD – Contending for the FAITH
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    <strong>Bordergate Baptist Church (BGBC)</strong> is an independent, KJV Bible-believing, and Bible-teaching church.
                    </p>
                    <div className="mt-12">
                        <Link
                            href="./about"
                            className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                            >
                            
                        </Link>
                        <a
                        href="https://www.facebook.com/bordergatebaptist/videos"
                        className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-sky-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                        target="_blank"
                        >
                            Watch Live Sermon 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="video-container absolute top-0 left-0 z-0 w-full h-full bg-gray-500/90 ">
            <Image 
                src="/images/herobanner.jpg"
                alt='bgbc congregation'
                fill
                objectFit = "cover"     
            />
        </div>
    </section>
  )
}
