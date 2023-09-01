import React from 'react'
import { HeadlineItemType } from '../types'

const Cards:React.FC<HeadlineItemType> = ({title,description, image}) => {
  return (
    <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='text-blue-300 font-bold text-2xl px-2 pt-4 '>{title}</p>
            <p className='text-gray-100 px-2 py-1 lg:py-4 lg:text-xl lg: max-w-[80%]'>{description}</p>
            <button className='bg-white border-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl' src={image} alt="order" />
    </div>
  )
}

export default Cards