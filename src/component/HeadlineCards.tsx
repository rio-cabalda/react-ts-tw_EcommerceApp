import React from 'react'
import Cards from './Cards'
import { headlineList } from '../utils/constant'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        {headlineList.map((item) => {
          return <Cards key={item.id} {...item}/>
        })}
        
    </div>
  )
}

export default HeadlineCards