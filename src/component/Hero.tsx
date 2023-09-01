import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px bg-black/40 flex gap-5 flex-col justify-center '>
                <h1 className='px-4 text-2xl mobile-400:text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-blue-600'>Quality </span>Dog Essentials</h1>
                <h1 className='px-4 text-2xl mobile-400:text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>and <span className='text-blue-600'>More</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.unsplash.com/photo-1690985210992-3a5f9e1aaaaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt="Pizza" />
        </div>
    </div>
  )
}

export default Hero;