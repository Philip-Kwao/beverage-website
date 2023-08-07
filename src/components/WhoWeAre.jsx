"use client"
import React from 'react'
import MyLink from './MyLink'
import { motion } from "framer-motion"
import Line from './Line'

const WhoWeAre = () => {
  return (
    <motion.div className='w-full bg-stone-200 py-4'
        initial={{opacity: 0 }}
        animate={{opacity:1}}
        transition={{duration:3, type:"spring"}}
    >
        <div className="max-w-[80vw] mx-auto flex-col lg:flex-row flex justify-between items-start py-10">
            <motion.div className="relative flex flex-col max-w-lg items-start mb-6 lg:mb-0"
                initial={{x:-500 }}
                animate={{x:0}}
                transition={{duration:1}}
            >
                <h2 className='capitalize text-2xl font-bold text-blue-950 text-left'>who we are</h2>
                <Line />
                <p className="my-4 text-slate-600 text-sm">JASAKA COMPANY LIMITED is a growing company incorporated in 2022 with the main objective of supplying clients needs accurately according to specs and timeously.</p>
                <p className="text-slate-600 text-sm">With a dedicated, experience and effective human resource blended with   innovation   and technology, JASAKA COMPANY LIMITED is poised to become the leading firm in the supply of products, civil work, oil & gas support services, road & building construction and cleaning services.</p>
                <MyLink linkTitle={'Know More'} link={''} />
            </motion.div>
            <div className="relative flex flex-col max-w-lg items-start">
                <h2 className='capitalize text-2xl font-bold text-blue-950 text-left'>what we stand for</h2>
                <Line />
                <p className="my-4 text-slate-600 text-sm">The motive that spurs us on is our simple yet effective approach of <span className='bg-amber-200'>meeting customer needs in an effective and efficient manner.</span></p>
                <p className="text-slate-600 text-sm">We offer our clients satisfactory service,   viable   and   competitive prices in product delivery yet never compromising on our quality. Meeting our customers needs with the highest quality of products and market-leading services is what makes us unique and the reason you should choose us any day.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default WhoWeAre