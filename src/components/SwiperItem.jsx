import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SwiperItem = ({bgImg}) => {
  return (
    <div className={`${bgImg}`}>
        <div className="">
            <div className="">
               <span className="">
                    Make it Zero% 
                    alcohol moment
                </span>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
            </div>
            <Button 
                title={'Shop Now'}
                bgColor={'bg-pink-800'}
                textColor={'text-white'}
                hoverTextColor={'text-green-800'}
                borderColor={''} 
                border={''} 
            />
        </div>
        <div className="">
            <Image src={''} className="" width={500} alt="image" />
        </div>
    </div>
  )
}

export default SwiperItem