import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='bg-amber-300 flex items-center justify-between flex-col lg:flex-row pt-4 lg:py-0'>
        <div className="text-center text-white flex flex-col items-center justify-around max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-between">
            <span className="text-xl">OFF APPOLLO-NTANKOFUL HIGHWAY (N1) STREET</span> 
            <span className="text-lg">
              TAKORADI
            </span>
            <span className="text-lg"> 
              GPS: WS-281-5353
            </span>
            <span className="text-lsg">
            P.O. BOX MC 3672
            </span>
          </div>
          <div className="flex flex-col items-center justify-around my-10">
            <Link href={'to:jasakacompany@gmail.com'} target='_blank' className="my-4 hover:underline hover:text-orange-600">jasakacompany@gmail.com</Link>
            <Link href={'to:kjustice217@gmail.com'} target='_blank' className="hover:underline hover:text-orange-600">Cc: kjustice217@gmail.com</Link>
          </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default Contact