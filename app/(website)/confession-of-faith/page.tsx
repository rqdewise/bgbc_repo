import React from 'react'

import { PageHeader } from '@/components/page-header'
import { ConfessionOfFaith } from './confession'
import Container from '@/components/container'

export default function Page() {
  return (
    <div>
      <PageHeader title="What We Believe" image='/images/herobanner.jpg'/>
      <Container>
        <ConfessionOfFaith />
      </Container>
    </div>
  )
}
