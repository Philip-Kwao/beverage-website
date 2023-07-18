"use client"
import React, { useRef } from 'react'
import MyLink from './MyLink'
import Image from 'next/image'
import CTAImage from '@/assets/images/corp2.png'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';


const CTA = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
  return (
    <div ref={ref} className='ctaBg lg:h-72 w-full pt-6 my-4'>
        <motion.div className=" max-w-[80vw] mx-auto flex items-center justify-around flex-wrap"
            initial={{opacity: 0, x:-500}}
            animate= {inView ? {opacity:1, x:0}:{opacity:0}}
            transition={inView ? {duration: 3, type:"spring"} : {duration: 0}}
            
        >
            <motion.div className="my-6 text-center lg:text-left py-6"
                initial={{ x:-1000}}
                animate= {{opacity: 1, x:0}}
                transition={{ delay:1, type: "spring", stiffness:100}}
                whileInView={{opacity: 1}}
            >
                <h3 className='font-black uppercase text-2xl text-orange-600'>Call now for more enquiries</h3>
                <p className="font-bold capitalize">customer satisfaction is our priority</p>
                <h1>{inView ? 'Element is in view' : 'Element is not in view'} </h1>
                <div className="mt-1">
                    <MyLink link={''} blank={''} linkTitle={'Call Us'} />
                </div>
            </motion.div>
            <motion.div className="py-4 lg:py-0"
                initial={{ x:1000}}
                animate= {{opacity: 1, x:0}}
                transition={{ delay:1, type: "spring", stiffness:100}}
                whileInView={{opacity: 1}}
            >
                <Image src={CTAImage} alt='' width={300} />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default CTA