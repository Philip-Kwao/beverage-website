import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

const Header = () => {
  return (
    <div className='bg-orange-600 font-sans text-white'>
        <HeaderTop />
        <HeaderBottom />
    </div>
  )
}

export default Header