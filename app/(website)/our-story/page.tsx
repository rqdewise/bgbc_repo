import React from 'react'
import { OurStory } from './ourStory'
import { PageHeader } from '@/components/page-header'


export default function Page(){
  return (
    <div>
      <PageHeader title="Our Story" image='/images/herobanner.jpg'/>
      <OurStory />
    </div>
  )
}
