import React from 'react'
import Image1 from '@/assets/images/sc/15.jpg'
import Image2 from '@/assets/images/sc/16.jpg'
import Image3 from '@/assets/images/sc/18.jpg'
import Image4 from '@/assets/images/sc/19.jpg'
import Image5 from '@/assets/images/sc/21.jpg'
import Image from 'next/image'

const Precautions = () => {
  return (
    <div className="">
        <h2 className="capitalize font-bold text-xl text-center my-4">We take our precautions very seriously</h2>
        <div className='w-screen flex flex-col lg:flex-row items-center justify-center'>
            <div className="">
                
                    <Image src={Image3} alt={Image3} className='w-[500px] shadow-inner object-cover rounded-xl' />
                
            </div>
            <div className="grid lg:grid-rows-2 lg:grid-cols-2">
                <Image src={Image1} alt={Image1} className='m-3 w-screen  lg:w-[350px] h-[350px] object-cover rounded-xl' />
                
                
                <Image src={Image2} alt={Image2} className='m-3 w-screen  lg:w-[350px] h-[350px] object-cover rounded-xl' />
                
                
                <Image src={Image4} alt={Image4} className='m-3 w-screen  lg:w-[350px] h-[350px] object-cover rounded-xl' />
                
                
                <Image src={Image5} alt={Image5} className='m-3 w-screen  lg:w-[350px] h-[350px] object-cover rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default Precautions