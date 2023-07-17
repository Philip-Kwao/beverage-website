import Link from 'next/link'
import React from 'react'

const HeaderBottomItem = ({link, title}) => {
  return (
    <div className="font-semibold lg:m-2 px-4 py-2 text-lg hover:bg-white hover:text-green-800">
        <Link href={link} className=''>{title}</Link>
    </div>
  )
}

export default HeaderBottomItem