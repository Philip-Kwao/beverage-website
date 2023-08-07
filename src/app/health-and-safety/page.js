
import NeedHelp from '@/components/NeedHelp'
import Header from '@/components/health/Header'
import Measures from '@/components/health/Measures'
import Precautions from '@/components/health/Precautions'
import React from 'react'

const page = () => {
  return (
    <div className='mt-10 overflow-hidden'>
        <Header />
        <Precautions />
        <Measures />
        <NeedHelp />
    </div>
  )
}

export default page