import React,{useState, ChangeEvent} from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { filterByCategory, updateSort } from '../store/feature/productSlice'
import { SortOption } from '../types'
const ProductFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0)
    const { categories, sort} = useAppSelector(state=>state.product)
    const dispatch = useAppDispatch()

    const handleCategoryChange = (category: string, index:number) => {
        setSelectedCategory(index)
        dispatch(filterByCategory(category))
      }
      const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        dispatch(updateSort(value))
      }
  return (<>
    {/* Filter Row */}
    <div className='flex flex-col mt-10 lg:flex-row justify-between'>
    {/* Filter type */}
     <div>
      <p className='font-bold text-gray-700'>Filter Type</p>
      <div className='flex justify-between flex-wrap max-w-[490px] w-full py-5'>
         {categories.map((category,index)=>  (
            <button className={`${selectedCategory === index ? 'bg-blue-600 text-white' : 'bg-white'} capitalize m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300`} key={category} 
            onClick={()=>handleCategoryChange(category,index)}>{category}</button>
            ))}
      </div>
    </div> 

    {/* Filter Price */}
     <div>
     
      <div className='flex gap-2 max-w-[390px] w-full'>
      <label htmlFor="sort" className='font-bold text-gray-700'>Sort by:</label>
      <select id="sort" name="sort" className='focus: outline-none' 
         value={sort} onChange={handleSortChange} 
          >
            <option value={SortOption.PriceLowest}>price (lowest)</option>
            <option value={SortOption.PriceHighest}>price (highest)</option>
            <option value={SortOption.NameA}>name (a-z)</option>
            <option value={SortOption.NameZ}>name (z-a)</option>
        </select>
      </div>
    </div>
  </div>
  </>)

}

export default ProductFilter