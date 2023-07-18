"use client"
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const MyLink = ({link, blank, linkTitle, linkBg, linkHoverBg, linkBorder,linkHoverTextColor, linkTextColor}) => {
  return (
    <div className="flex items-center group hover:text-orange-600">
        <Link className={`py-4 px-2 mx-1 ease-in-out duration-200 hover:rounded-lg ${linkTextColor} ${linkBorder} hover:${linkHoverTextColor} hover:${linkHoverBg} ${linkBg}`} href={link} blank={blank}>
            {linkTitle}
        </Link>
        <span className="group-hover:ml-4 ease-in-out duration-200"><BsArrowRight /></span>
    </div>
  )
}

export default MyLink