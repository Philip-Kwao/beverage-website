import Image from 'next/image'
import React from 'react'
import Button from './Button'

import { motion } from 'framer-motion'

const SwiperItem = ({bgImg, btnTitle, image, title1, title2, subtitle, }) => {
  return (
    <motion.div className={`${bgImg} lg:h-[50vh] `}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <div className="max-w-[80vw] mx-auto  flex flex-col lg:flex-row justify-between items-center pt-16 ">
        <div className="text-center max-w-lg flex flex-col items-center ">
            <div className="relative text-left my-8 font-semibold text-white mb">
               <motion.span className="relative z-10 text-3xl lg:text-4xl"
                initial={{opacity: 0, transform: "translateX(-100px)"}}
                animate={{opacity:1,transform: "translateX(100px)"}}
                transition={{duration:5}}
               >
                    {title1} <br/>
                    {title2}
                </motion.span>
                <p className="font-normal relative z-10">{subtitle}</p> 
                <motion.span className="h-20 w-20 z-[1] bg-orange-600 absolute -top-10 -left-4"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                      transition={{
                        duration: 4,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                ></motion.span>
            </div>
            <Button 
                title={btnTitle}
                bgColor={'bg-orange-600'}
                textColor={'text-white'}
                hoverTextColor={'text-white'}
                hoverBgColor={'bg-orange-400'}
                borderColor={''} 
                border={''} 
            />
        </div>
        <div className="w-96 h-72">
            <Image src={image} className="w-full" alt="image" />
        </div>
        </div>
    </motion.div>
  )
}

export default SwiperItem