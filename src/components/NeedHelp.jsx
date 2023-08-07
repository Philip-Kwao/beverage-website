import Link from 'next/link'
import React from 'react'

const NeedHelp = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-32 my-20 overflow-x-hidden'>
        <div className="flex flex-col items-center justify-evenly relative lg:basis-1/2">
            <div className="font-bold text-orange-600 text-5xl shadow-white shadow-2xl shadow__direction z-10 p-6 flex flex-col items-start justify-center">
                <span>Need Any Help?</span>
                <span>Say Hello</span>
            </div>
                <span className="uppercase absolute text-8xl -top-8 opacity-5 font-black -z-10">support</span>
            <p className="italic text-gray-400 z-10">Send us a message of what you wish to talk to us about. We are always opened to our customers and willing to serve them to excellence.</p>
        </div>
        <div className="relative flex lg:basis-1/2 items-center justify-evenly">
            <span className="h-1 w-32 rounded-full bg-gray-600 hidden lg:block"></span>
            <Link href="contact-us" className='text-4xl font-extrabold text-black hover:text-yellow-500 duration-200 ease-in-out'>Contact Us</Link>
        </div>
    </div>
  )
}

export default NeedHelp