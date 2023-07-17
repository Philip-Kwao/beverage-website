import { GoSearch } from 'react-icons/go'
import { CiUser } from 'react-icons/ci'
import { BsCart } from 'react-icons/bs'
import SearchForm from './SearchForm'
const HeaderTop = () => {
    
  return (
    <div className='flex items-center justify-between h-20 border-b border-green-800'>
        {/* Left Side */}
        <div className='flex items-center justify-between flex-1'>
            <span className="logo text-lg font-bold text-white">Beverage Business</span>
            <div className="hidden lg:block">
                <SearchForm />
            </div>
            <div></div>
        </div>
        {/* Right Side */}
        <div className='flex items-center justify-around mx-4 border-s border-green-800'>
            <div className='flex flex-col items-center justify-around mx-4 cursor-pointer'>
                <span className='text-lg'><CiUser /></span>
                <span className=''>Login</span>
            </div>
            <div className="flex justify-around items-center border-s border-green-800">
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