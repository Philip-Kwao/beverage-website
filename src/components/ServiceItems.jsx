import React from 'react'
import Card from './Card'
import { cardDetails } from '@/data/SlideData'

const ServiceItems = () => {
  return (
    <div className='flex items-center justify-around my-6 flex-wrap'>
      {
        cardDetails.map((card)=>(
          <Card title={card.title} cardImg={card.image} para={card.para} btnTitle={card.btnTitle} />
        ))
      }
    </div>
  )
}

export default ServiceItems