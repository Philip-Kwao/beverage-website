"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

const Card = ({cardImg, title, para, btnTitle}) => {
  return (
    <motion.div className='max-w-md shadow-md'
    initial={{opacity:0, scale:0}}
    animate={{opacity:1, scale:1}}
    whileHover={{scale:1.01}}
    >
        <div className="">
            <Image className='w-full h-72 object-cover' src={cardImg} alt="" width={300} />
        </div>
        <div className="py-2 px-4">
            <h3 className="uppercase">{title}</h3>
            <p className="truncate">{para}</p>
            <Button title={btnTitle} bgColor={'bg-white'} textColor={'text-orange-600'} hoverBgColor={'bg-orange-600'} hoverTextColor={'text-white'} border={'border'} borderColor={'border-orange-600'} />
        </div>
    </motion.div>
  )
}

export default Card