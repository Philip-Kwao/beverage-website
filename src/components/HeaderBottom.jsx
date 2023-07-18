import React from 'react'
import HeaderBottomItem from './HeaderBottomItem'

const HeaderBottom = () => {
  return (
    <div className='flex text-center items-center justify-center flex-wrap'>
        <HeaderBottomItem link="" title="Home" />
        <HeaderBottomItem link="" title="About Us" />
        <HeaderBottomItem link="" title="Our Services" />
        <HeaderBottomItem link="" title="Our Team" />
        <HeaderBottomItem link="" title="Health & Safety" />
        <HeaderBottomItem link="" title="Project Reference" />
        <HeaderBottomItem link="" title="Contact Us" />
    </div>
  )
}

export default HeaderBottom