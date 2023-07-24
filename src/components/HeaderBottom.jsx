import React from 'react'
import HeaderBottomItem from './HeaderBottomItem'

const HeaderBottom = () => {
  return (
    <div className='flex text-center items-center justify-center flex-wrap'>
        <HeaderBottomItem link="/" title="Home" />
        <HeaderBottomItem link="about" title="About Us" />
        <HeaderBottomItem link="services" title="Our Services" />
        <HeaderBottomItem link="our-team" title="Our Team" />
        <HeaderBottomItem link="health-and-safety" title="Health & Safety" />
        <HeaderBottomItem link="project-reference" title="Project Reference" />
        <HeaderBottomItem link="contact-us" title="Contact Us" />
    </div>
  )
}
export default HeaderBottom