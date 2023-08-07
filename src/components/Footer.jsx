import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">Jasaka Company Limited™</Link>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="about" class="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link href="services" class="mr-4 hover:underline md:mr-6">Our Services</Link>
        </li>
        <li>
            <Link href="health-and-safety" class="mr-4 hover:underline md:mr-6">Health and Safety</Link>
        </li>
        <li>
            <Link href="contact-us" class="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer