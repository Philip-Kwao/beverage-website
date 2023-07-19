import React from 'react'
import { motion } from 'framer-motion'

const Line = ({topPosition, leftPosition}) => {
  return (
                <motion.span className={`h-1 w-14 absolute bg-orange-600 ${!topPosition ? 'top-7': topPosition} ${!leftPosition ?'left-0':leftPosition}`}
                    initial={{x:-500}}
                    animate={{x:0}}
                    transition={{duration: 4, type:"spring"}}
                    onViewportEnter={{x:500}}
                ></motion.span>
  )
}

export default Line