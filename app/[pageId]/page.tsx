import React from 'react'
import { pages } from "@/data/pages"
import { notFound } from 'next/navigation'

export default function CustomPage({params,}:{params:{pageId:string}}) {
  const reqPage = params.pageId
  const resPage = pages? pages : notFound()

  return (
    <div><h3>{reqPage}</h3></div>
  )
}
