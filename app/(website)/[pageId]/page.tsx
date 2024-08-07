import React from 'react'
import {getPageSlugs, getPageBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

import { PageHeader } from '@/components/page-header'
import { ArticleHeading } from '@/components/aritcle-heading'


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

export default async function CustomPage({ params, }:{ params:{pageId:string} }) {

  const pages = getPageSlugs()
  
  if (!pages.find(page => page.slug === params.pageId)) notFound()

  const {meta, content} = await getPageBySlug(params.pageId)

  return (
    <main className="text-slate-800 w-full flex flex-wrap items-center">
      <PageHeader title={meta.title} image='/images/herobanner.jpg'/>
      <div className="container mx-auto px-4">
        <article className="mb-10 prose max-w-full prose-ol:list-decimal prose-ol:ml-5 prose-ol:my-4 ">
          <ArticleHeading 
            title={meta.title}
            description={meta.description}
            Icon={<ShieldCheckIcon className='h-full w-full' />}
          />
          <section className="text-xl/7  prose-h3:text-3xl prose-h3:py-5">
            {content}
          </section>
        </article>
      </div>
  </main>
  )
}
