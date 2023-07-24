import Link from 'next/link'
import React from 'react'

const HeaderBottomItem = ({link, title}) => {
  return (
    <div className=" lg:m-2 lg:px-4 py-0 m-1 lg:py-2 px-2 text-xs hover:bg-white hover:text-orange-600">
        <Link href={link} className=''>{title}</Link>
    </div>
  )
}

export default HeaderBottomItem