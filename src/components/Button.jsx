import React from 'react'

const Button = ({bgColor, textColor, hoverTextColor, hoverBgColor, borderColor, title, border }) => {
  return (
    <button className={`${bgColor} ${textColor} hover:${hoverTextColor} hover:${hoverBgColor} ${border} ${borderColor} py-2 px-4`}>{title}</button>
  )
}

export default Button