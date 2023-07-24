import Image from 'next/image'
import React from 'react'
import Image1 from '@/assets/images/sc/14.jpg'
import Image3 from '@/assets/images/sc/13.jpg'
import Image2 from '@/assets/images/sc/16.jpg'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mb-10'>
        <div className="lg:basis-1/2 px-20">
            <h1 className="uppercase font-black text-xl ">Health and Safety</h1>
            <p className="text-gray-400">
            We are committed to ensuring that our operations are conducted with zero harm to all people and the environment. The quality of our products and services are upheld and consistently maintained. 
            </p>
            <p className="my-4 text-gray-400">
            We subscribe to the belief that accidents prevention has much value as quality, morale, production, costs etc. The safety and security of our people, our projects and the public are our top priorities. Our team of certified Project Managers, Electricians and Foremen go through intensive training and field testing to ensure the safety project we undertake.
            </p>
        </div>
        <div className="flex lg:flex-row items-center lg:basis-1/2 relative">
            <div className="flex-col hidden lg:flex">
                <Image src={Image1} alt='' className='w-[300px] h-[300px] object-cover rounded-lg mb-4' />
                <Image src={Image2} alt='' className='w-[300px] h-[300px] object-cover rounded-lg' />
            </div>
            <Image src={Image3} alt='' className='ml-4 w-[400px] h-[616px] object-cover rounded-lg' />
        </div>
    </div>
  )
}

export default Header