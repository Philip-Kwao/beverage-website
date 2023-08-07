"use client"
import { CiUser } from 'react-icons/ci'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Image from 'next/image'

import Logo from '@/assets/images/jcl-logo.png'
import HeaderBottom from './HeaderBottom'
import { useState } from 'react'
import Link from 'next/link'

const HeaderTop = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
            setToggle(!toggle)
    }
    
  return (
    <div className='flex items-center justify-between border-b border-orange-500'>
        {/* Left Side */}
        <div className='flex items-center justify-between flex-1'>
            <Link href={'/'}>
                <Image src={Logo} width={100} alt='jasaka logo' className="logo text-lg font-bold text-white" />
            </Link>
            {/* <div className="hidden lg:block">
                <SearchForm />
            </div> */}
            <span className={`${toggle === true ? 'block': 'hidden'} md:block`}><HeaderBottom /></span>
            <div></div>
        </div>
        {/* Right Side */}
        {/* <div className='flex items-center justify-around mx-4 border-s border-orange-500'>
            <div className='flex flex-col items-center justify-around mx-4 cursor-pointer'>
                <div className="flex flex-col items-center justify-around capitalize mx-4">
                    <span className="">pick up: Here</span>
                    <span className="">open till 8pm</span>
                </div>
            </div>
            <div className="flex justify-around items-center">
            </div>
        </div> */}
        <span className="text-2xl text-white mr-5 cursor-pointer md:hidden" onClick={handleToggle}><HiOutlineMenuAlt3 /></span>
    </div>
  )
}

export default HeaderTop