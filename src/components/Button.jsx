import Link from 'next/link'
import React from 'react'

const Button = ({bgColor, textColor, hoverTextColor, hoverBgColor, borderColor, title, border, link}) => {
  return (
    <Link href={link} className={`${bgColor} ${textColor} hover:${hoverTextColor} hover:${hoverBgColor} ${border} ${borderColor} py-2 px-4 duration-200 ease-in-out`} type='submit'>{title}</Link>
  )
}

export default Button