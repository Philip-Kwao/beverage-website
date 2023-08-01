import Contact from '@/components/Contact'
import NeedHelp from '@/components/NeedHelp'
import ServiceRendered from '@/components/ServiceRendered'
import Header from '@/components/services/Header'
import WhyWorkWithUs from '@/components/services/WhyWorkWithUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <ServiceRendered />
      <WhyWorkWithUs />
      <NeedHelp />
    </div>
  )
}

export default page