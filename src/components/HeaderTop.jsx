import { GoSearch } from 'react-icons/go'
import { CiUser } from 'react-icons/ci'
import { BsCart } from 'react-icons/bs'
import SearchForm from './SearchForm'
import Image from 'next/image'

import Logo from '@/assets/images/logo.png'
import HeaderBottom from './HeaderBottom'

const HeaderTop = () => {
    
  return (
    <div className='flex items-center justify-between h-20 border-b border-orange-500'>
        {/* Left Side */}
        <div className='flex items-center justify-between flex-1'>
            <Image src={Logo} width={100} alt='jasaka logo' className="logo text-lg font-bold text-white" />
            {/* <div className="hidden lg:block">
                <SearchForm />
            </div> */}
            <HeaderBottom />
            <div></div>
        </div>
        {/* Right Side */}
        <div className='flex items-center justify-around mx-4 border-s border-orange-500'>
            <div className='flex flex-col items-center justify-around mx-4 cursor-pointer'>
                <span className='text-lg'><CiUser /></span>
                <span className=''>Login</span>
            </div>
            <div className="flex justify-around items-center border-s border-orange-500">
                <div className="flex flex-col items-center justify-around capitalize mx-4">
                    <span className="">pick up: Here</span>
                    <span className="">open till 8pm</span>
                </div>
                <div className="flex flex-col items-center justify-around mx-4 cursor-pointer">
                    <span className=""><BsCart /></span>
                    <span className="">Cart</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop