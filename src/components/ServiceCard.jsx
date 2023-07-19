"use client"
import React from 'react'
import MyLink from './MyLink'
import Line from './Line'
import {inView, useInView} from 'react-intersection-observer'

const ServiceCard = ({icon, title, detail}) => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    })
  return (
    <div className='flex items-start justify-between max-w-sm'>
        <div className="">
            <span className='text-4xl text-orange-600'>{icon}</span>
        </div>
        <div className=" max-w-xs relative flex flex-col justify-between items-start min-h-[15rem]">
            <div className="flex flex-col flex-1">
                <h3 className='text-lg capitalize font-serif text-blue-950'>{title}</h3>
                <span ref={ref}>
                    {inView?<Line />:""}
                </span>
                <p className="text-sm text-slate-600 my-4 text-justify">
                {detail}
                </p>
            </div>
            <MyLink linkTitle={'Know More'}  link={'about'}/>
        </div>
    </div>
  )
}

export default ServiceCard