import React from 'react'
import Loader from '@/assets/images/ball.svg'
import Image from 'next/image'
const loading = () => {
  return (
    <div className='flex items-center justify-center'>
        <Image src={Loader} alt="Loading..." width={300} />
    </div>
  )
}

export default loading