import Image from 'next/image'
import React from 'react'
import Social from './socials/Social'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TeamCard = ({teamQualification, teamImage, teamLink, teamName, teamPosition, linkedIn, facebook, twitter, timeDuration}) => {
    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true
    }) 
  return (
    <div className="group" ref={ref}>
        <motion.div className='text-center flex flex-col items-center justify-between w-80 '
            initial={{opacity: 0, scale:0}}
            animate={inView ?{opacity:1, scale:1}:{opacity:0,scale:0}}
            transition={inView ? {duration:timeDuration, stiffness:100}:{duration:0, stiffness:0}}
        >
            <Image alt='' src={teamImage} className='w-60 h-60 rounded-full object-cover group-hover:shadow-xl'/>
            <div className="flex flex-col items-center justify-between">
                <span className='font-bold text-lg tracking-wider uppercase mt-2 group-hover:text-orange-500 duration-200 ease-in-out'>{teamName}</span>
                <span className='text-slate-400 font-semibold text-sm tracking-wide'>{teamPosition}</span>
                <p className="text-slate-400 text-sm font-light my-4 leading-6">{teamQualification}</p>
            </div>
            {/* <MyLink linkTitle={'View More'} link={teamLink} blank={"_blank"} /> */}
            <Social linkedinLink={!linkedIn ? "": linkedIn} facebookLink={!facebook ? "": facebook} twitterLink={!twitter?"":twitter} />
        </motion.div>
    </div>
  )
}

export default TeamCard
