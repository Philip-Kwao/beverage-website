import MVV from '@/components/MVV'
import NeedHelp from '@/components/NeedHelp'
import ServiceRendered from '@/components/ServiceRendered'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Header from '@/components/about/Header'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ServiceRendered />
      <MVV/>
      <Testimonial />
      <Team />
      <NeedHelp />
    </div>
  )
}

export default page
