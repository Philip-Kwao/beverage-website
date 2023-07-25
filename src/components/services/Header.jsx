import React from 'react'
import Image1 from '@/assets/images/sc/2.webp'
import Image2 from '@/assets/images/sc/9.webp'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='lg:h-screen bg-amber-500 flex flex-col py-4 lg:py-0 lg:flex-row items-center justify-between px-10'>
      <div className="flex lg:basis-1/2 flex-col px-10">
        <h1 className="font-black text-3xl my-4 text-white uppercase">Empowering industries through <span class="text-orange-600 underline underline-offset-2">top-notch</span> and varied solutions.</h1>
        <span className="text-white italic text-sm">JASAKA COMPANY LIMITED is on the path to emerge as the premier firm, offering a comprehensive range of services including product supply, civil works, oil & gas support services, road & building construction, and top-tier cleaning solutions. Our aim is to lead the industry with excellence and innovation.</span>
      </div>
      <div className="lg:basis-1/2 grid grid-cols-2 gap-0 px-10">
        <Image src={Image1} alt={Image1} className='w-[300px] 2xl:w-[500px] h-[300px] 2xl:h-[300px] object-cover' />
        <Image src={Image2} alt={Image1} className='w-[300px] 2xl:w-[500px] h-[300px] 2xl:h-[300px] object-cover' />
        <Image src={Image1} alt={Image1} className='w-[300px] 2xl:w-[500px] h-[300px] 2xl:h-[300px] object-cover' />
        <Image src={Image2} alt={Image1} className='w-[300px] 2xl:w-[500px] h-[300px] 2xl:h-[300px] object-cover' />
      </div>
    </div>
  )
}

export default Header