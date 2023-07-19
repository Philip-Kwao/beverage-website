import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'

const Social = ({linkedinLink, facebookLink, twitterLink}) => {
  return (
    <div className='flex items-center justify-around mx-auto text-lg'>
        <Link href={facebookLink} target="_blank" rel="noopener noreferrer" className='duration-200 ease-in-out hover:text-white hover:bg-blue-600 p-2 rounded-full text-center'>
            <BiLogoFacebook />
        </Link>
        <Link href={twitterLink} target="_blank" rel="noopener noreferrer" className='mx-4 duration-200 ease-in-out hover:text-white hover:bg-cyan-500 p-2 rounded-full text-center'>
            <BsTwitter />
        </Link>
        <Link href={linkedinLink} target="_blank" rel="noopener noreferrer" className='duration-200 ease-in-out hover:text-white hover:bg-cyan-700 p-2 rounded-full text-center'>
            <FaLinkedinIn />
        </Link>
    </div>
  )
}

export default Social