import React from 'react'
import { GoDotFill } from 'react-icons/go'
import MyLink from '../MyLink'
import Image from 'next/image'
import Image1 from '@/assets/images/sc/1.jpg'
import Image2 from '@/assets/images/sc/4.webp'

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between h-[70vh] mb-52 mt-10'>
        <div className="flex basis-full md:basis-1/2 items-start flex-col px-10 justify-start text-left lg:px-32">
            <span className="bg-orange-100 text-orange-600 py-2 px-4 text-sm  rounded-full flex items-center justify-evenly">
                <GoDotFill />
                <span className='ml-2'>Know More About Us</span>
            </span>

            <h1 className='font-semibold text-4xl my-4'> Pioneering Excellence in Product Supply</h1>

            <p className="italic text-sm">With a highly skilled and dedicated workforce, coupled with a strong commitment to innovation and cutting-edge technology, <span className='font-bold'>JASAKA COMPANY LIMITED</span> is primed to assume a dominant position as the industry leader in providing <span className='bg-orange-100'>top-notch products, exceptional civil work, comprehensive oil & gas support services, expert road & building construction, and superior cleaning solutions.</span></p>

            <MyLink linkTitle={'Contact Us'} link={'contact-us'} />
        </div>
        <div className="flex basis-full md:basis-1/2 items-center relative">
            <Image src={Image1} alt=''  className='w-[500px] transform scale-x-[-1] rounded-lg' />
            <Image src={Image2} alt='' width={300} className='hidden lg:block absolute top-10 -left-20 shadow shadow-orange-300 rounded-full' />
        </div>
    </header>
  )
}

export default Header