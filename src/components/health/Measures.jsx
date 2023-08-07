'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Measures = () => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true,
    }) 
  return (
    <div className='flex flex-col items-start justify-between my-10 text-4xl lg:mx-20 mx-4' ref={ref}>
        <div className="flex items-start justify-between w-full my-20">
            <motion.div className="basis-3/4 hover:text-orange-600 duration-200 ease-in-out"
                initial={{scale:0, opacity:0}}
                animate={inView ?{scale:1, opacity:1}:{scale:0, opacity:0}}
                transition={inView ? {duration:2, type:'spring', stiffness:100}:{duration:0, type:'', stiffness:0}}
            >
                <span className="">1.</span>
                <span className="ml-4 font-extrabold text-slate-500">Promotes a culture of health and safety</span>
            </motion.div>
            <div className="basis-1/4 hidden lg:block"></div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-1/4 hidden lg:block"></div>
            <motion.div className="basis-3/4 hover:text-orange-600 duration-200 ease-in-out"
                    initial={{scale:0, opacity:0}}
                    animate={inView ?{scale:1, opacity:1}:{scale:0, opacity:0}}
                    transition={inView ? {duration:2, type:'spring', stiffness:100}:{duration:0, type:'', stiffness:0}}
                >
                <span className="basis-3/4">2.</span>
                <span className="ml-4 font-extrabold text-slate-500">Complies with regulatory standards</span>
            </motion.div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <motion.div className="basis-3/4 hover:text-orange-600 duration-200 ease-in-out"
                initial={{scale:0, opacity:0}}
                animate={inView ?{scale:1, opacity:1}:{scale:0, opacity:0}}
                transition={inView ? {duration:2, type:'spring', stiffness:100}:{duration:0, type:'', stiffness:0}}
            >
                <span className="">3.</span>
                <span className="ml-4 font-extrabold text-slate-500">Continually enforces health and safety measures</span>
            </motion.div>
            <div className="basis-1/4 hidden lg:block"></div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-1/4 hidden lg:block"></div>
            <motion.div className="basis-3/4 hover:text-orange-600 duration-200 ease-in-out"
                initial={{scale:0, opacity:0}}
                animate={inView ?{scale:1, opacity:1}:{scale:0, opacity:0}}
                transition={inView ? {duration:2, type:'spring', stiffness:100}:{duration:0, type:'', stiffness:0}}
            >
                <span className="">4.</span>
                <span className="ml-4 font-extrabold text-slate-500">Entrench the right to refuse to work in hazardous condition</span>
            </motion.div>
        </div>
    </div>
  )
}

export default Measures