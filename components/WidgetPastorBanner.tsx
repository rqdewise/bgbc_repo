import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WidgetPastorBanner() {
  return (
    <section className="w-full">        
        <div className="container mx-auto py-20">
            <h3 className="text-4xl font-semibold mb-20 text-center pt-10">
                    From Our Pastor
            </h3>
            <section className="flex flex-col gap-10 md:flex-row items-center lg:justify-between">
                <article className="w-2/4 lg:w-2/3">
                    <blockquote className="mt-4 text-2xl leading-relaxed text-slate-500">
                        As Pastor of Bordergate Baptist Church, I invite you to visit any of our services. You will be able to participate in singing some of the wonderful old Hymns that have blessed the hearts of Christians for many years. You will hear Bible based preaching from the old King James Version of the Bible. Each service makes the wonderful, life-giving truths of the Bible practical and relevant to your life..
                    </blockquote>

                    <div className="flex items-start my-10 ">
                        <Link 
                                href="/"
                                className="group hover:border-slate-600 border-4 border-slate-500/90 p-2 rounded-sm "
                            >
                                Learn More 
                                <ArrowRight className="group-hover:translate-x-2 ml-2 inline-block"/>
                        </Link>
                   </div>
                </article>
                <div>
                    <Image
                        src="/images/PtrJames.jpg"
                        alt="Pastor James E. Estenilo"
                        width={300}
                        height={300}
                        className="w-full align-middle max-w-full rounded-lg shadow-xl"
                        style={{
                            transform:
                              "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                          }}
                    />
                </div>
            </section>
        </div>
    </section>
  )
}
