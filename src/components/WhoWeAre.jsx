"use client"
import React from 'react'
import MyLink from './MyLink'
import { motion } from "framer-motion"

const WhoWeAre = () => {
  return (
    <motion.div className='w-full bg-stone-200'
        initial={{opacity: 0 }}
        animate={{opacity:1}}
        transition={{duration:3, type:"spring"}}
    >
        <div className="max-w-[80vw] mx-auto flex justify-between items-center py-10">
            <motion.div className="relative flex flex-col max-w-lg items-start"
                initial={{x:-500 }}
                animate={{x:0}}
                transition={{duration:1}}
            >
                <h2 className='capitalize text-2xl font-bold text-blue-950 text-left'>who we are</h2>
                <motion.span className="h-1 w-14 absolute bg-orange-600 top-7 left-0"
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{duration: 4, type:"spring"}}
                    onViewportEnter={{x:500}}
                ></motion.span>
                <p className="my-4 text-slate-600">JASAKA COMPANY LIMITED is a growing company incorporated in 2022 with the main objective of supplying clients’ needs accurately according to specs and timeously.</p>
                <p className="text-slate-600">With a dedicated, experience and effective human resource blended with   innovation   and technology, JASAKA COMPANY LIMITED is poised to become the leading firm in the supply of products, civil work, oil & gas support services, road & building construction and cleaning services.</p>
                <MyLink linkTitle={'Know More'} link={''} />
            </motion.div>
            <div className="relative flex flex-col max-w-lg items-start">
                <h2 className='capitalize text-2xl font-bold text-blue-950 text-left'>who we are</h2>
                <motion.span className="h-1 w-14 absolute bg-orange-600 top-7 left-0"
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{duration: 4, type:"spring"}}
                ></motion.span>
                <p className="my-4 text-slate-600">JASAKA COMPANY LIMITED is a growing company incorporated in 2022 with the main objective of supplying clients’ needs accurately according to specs and timeously.</p>
                <p className="text-slate-600">With a dedicated, experience and effective human resource blended with   innovation   and technology, JASAKA COMPANY LIMITED is poised to become the leading firm in the supply of products, civil work, oil & gas support services, road & building construction and cleaning services.</p>
                <MyLink linkTitle={'Know More'} link={''} />
            </div>
        </div>
    </motion.div>
  )
}

export default WhoWeAre