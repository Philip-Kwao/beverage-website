import MVV from '@/components/MVV'
import NeedHelp from '@/components/NeedHelp'
import ServiceRendered from '@/components/ServiceRendered'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Header from '@/components/about/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <ServiceRendered />
      <MVV />
      <Testimonial top={''} marginTD={4} />
      <Team />
      <NeedHelp />
    </div>
  )
}

export default page