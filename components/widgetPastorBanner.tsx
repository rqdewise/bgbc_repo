import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

export default function WidgetPastorBanner() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-sky-500" />
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-widest">From Our Pastor</span>
            <div className="h-px w-12 bg-sky-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            A Word from the Pulpit
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Pastor Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-sky-500/10 rounded-3xl" />
                <Image
                  src="/images/PtrJames.jpg"
                  alt="Pastor James E. Estenilo"
                  width={300}
                  height={380}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  style={{
                    transform: "scale(1) perspective(1040px) rotateY(-8deg) rotateX(2deg) rotate(1.5deg)",
                  }}
                />
              </div>
              <div className="text-center mt-5">
                <p className="font-bold text-slate-800">Pastor James Enriquez Estenilo</p>
                <p className="text-sky-500 text-sm font-medium">Senior Pastor, BGBC</p>
              </div>
            </div>

            {/* Quote */}
            <article className="flex-1">
              <div className="bg-sky-500/10 rounded-full p-3 inline-block mb-5">
                <Quote className="w-7 h-7 text-sky-500" />
              </div>
              <blockquote className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                As Pastor of Bordergate Baptist Church, I invite you to visit any of our services.
                You will be able to participate in singing some of the wonderful old{" "}
                <strong className="font-semibold text-slate-700">Hymns</strong> that have blessed
                the hearts of Christians for many years. You will hear{" "}
                <strong className="font-semibold text-slate-700">Bible-based preaching</strong> from
                the old King James Version of the Bible. Each service makes the wonderful,
                life-giving truths of the Bible practical and relevant to your life.
              </blockquote>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link
                  href="/from-pastor"
                  className="group inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 font-bold px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200"
                >
                  Read Full Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/sermons"
                  className="text-slate-500 hover:text-sky-500 text-sm font-medium underline-offset-4 hover:underline transition-colors"
                >
                  Watch Sermons →
                </Link>
              </div>

              {/* Scripture */}
              <div className="mt-8 border-l-4 border-sky-500 pl-5 py-1">
                <p className="text-slate-500 italic text-sm">
                  "Preach the word; be instant in season, out of season..."
                </p>
                <p className="text-slate-400 text-xs mt-1">— 2 Timothy 4:2 (KJV)</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
