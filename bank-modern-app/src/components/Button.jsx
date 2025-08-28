import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`bg-blue-gradient rounded-xl py-4 px-6 cursor-pointer outline-none ${styles}`}>
      <p className='font-poppins font-medium text-[18px] text-primary ' >Get Started</p>
    </button>
  )
}

export default Button
