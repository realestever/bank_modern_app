import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`bg-blue-gradient py-4 px-6 cursor-pointer outline-none ${styles} rounded-[10px]`}>
      <p className='font-poppins font-medium text-[18px] text-primary ' >Get Started</p>
    </button>
  )
}

export default Button
