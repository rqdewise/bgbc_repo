import React from 'react'
import {getPageSlugs, getPageBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams(){
  const pages = getPageSlugs()

  return pages.map( page =>{
    pageId: page.slug
  })
}

export function generateMetadata({ params } : {params:{ pageId:string }} ){

  const pageReq = params.pageId
  const pages = getPageSlugs()
  const findPage = pages.find(page => page.slug === pageReq )

  if (!findPage) {
    return {
        title: 'Page Not Found'
    }
  }
  return {
      title: findPage.slug
  }


}

export default async function CustomPage({params,}:{params:{pageId:string}}) {

  const pages = getPageSlugs()
  
  if (!pages.find(page => page.slug === params.pageId)) notFound()

  const {meta, content} = await getPageBySlug(params.pageId)


  return (
    <main className="text-slate-800 w-full flex flex-wrap items-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl mt-6 mb-6">{meta.title}</h3>

        <article className="mb-10 prose-ol:list-decimal prose-ol:ml-5 prose-ol:my-4 ">
            <section className="text-xl/7  prose-h3:text-3xl prose-h3:py-5">
              {content}
            </section>
        </article>
      </div>
  </main>
  )
}
