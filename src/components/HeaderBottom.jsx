import React from 'react'
import HeaderBottomItem from './HeaderBottomItem'

const HeaderBottom = () => {
  return (
    <div className='flex text-center items-center justify-center flex-wrap'>
        <HeaderBottomItem link="" title="New" />
        <HeaderBottomItem link="" title="Wine" />
        <HeaderBottomItem link="" title="Beer & Cider" />
        <HeaderBottomItem link="" title="Soft Drinks" />
        <HeaderBottomItem link="" title="Offers" />
        <HeaderBottomItem link="" title="Occasions" />
    </div>
  )
}

export default HeaderBottom