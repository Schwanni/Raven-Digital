import React from 'react'

const Button = ({title,css}) => {
   return (
    <button type='button' className={`w-[142px] h-[45px] text-[18px] font-normal leading-7 text-white rounded-[30px] bg-[#003ADB] ${css}`}>
      {title}
    </button>
  )
}

export default Button