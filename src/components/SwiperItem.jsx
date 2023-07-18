import Image from 'next/image'
import React from 'react'
import Button from './Button'
import IMG1 from '@/assets/images/soft.png'

import { motion } from 'framer-motion'

const SwiperItem = ({bgImg}) => {
  return (
    <motion.div className={`${bgImg} lg:h-[50vh] `}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <div className="max-w-[80vw] mx-auto  flex flex-col lg:flex-row justify-between items-center pt-16 ">
        <div className="text-center max-w-md flex flex-col items-center ">
            <div className="relative my-8 font-semibold text-white mb">
               <motion.span className="relative z-10 text-3xl"
                initial={{opacity: 0, transform: "translateX(-100px)"}}
                animate={{opacity:1,transform: "translateX(100px)"}}
                transition={{duration:5}}
               >
                    Make it Zero% <br/>
                    alcohol moment
                </motion.span>
                <p className="font-normal relative z-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                <motion.span className="h-20 w-20 z-[1] bg-orange-600 absolute -top-2 left-20"
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
                title={'Shop Now'}
                bgColor={'bg-orange-600'}
                textColor={'text-white'}
                hoverTextColor={'text-white'}
                hoverBgColor={'bg-orange-400'}
                borderColor={''} 
                border={''} 
            />
        </div>
        <div className="w-96">
            <Image src={IMG1} className="w-full" alt="image" />
        </div>
        </div>
    </motion.div>
  )
}

export default SwiperItem