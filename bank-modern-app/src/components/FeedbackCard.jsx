import React from 'react'
import {quotes} from '../assets';

const FeedbackCard = ({content, img, name, title}) =>  (
  <div className={`flex flex-col justify-between rounded-[20px] px-10 py-12 feedback-card max-w-[370px] max-h-[395px] md:mr-10 sm:mr-5 mr-0 my-5  `}> 
    <img src={quotes} alt='double_quotes' className=' w-[42px] h-[28px] object-contain'/>
    <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
    <div className={`flex flex-row items-center`}>
        <img src={img} alt={name} className='w-[48px] h-[48px]'/>
      <div className='flex flex-col ml-4'>
        <h4 className='text-white font-poppins text-[20px] font-semibold leading-[32px]'>{name}</h4>
        <p className='font-poppins font-normal leading-[24px] text-dimWhite text-[16px]'>{title}</p>
      </div>      
    </div>
  </div>
)


export default FeedbackCard
