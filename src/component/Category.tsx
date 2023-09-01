import React from 'react'
import { categories } from '../utils/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-blue-600 font-bold text-4xl text-center'>Top Rated Products</h1>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((category)=>(
          <div key={category.id} className='bg-gray-100 rounded-lg p-4 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-center sm:text-xl '>{category.name}</h2>
            <img className='translate-x-3'src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Category