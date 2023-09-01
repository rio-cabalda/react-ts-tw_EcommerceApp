import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { getProductItems } from '../store/feature/productSlice'
import { formatPrice } from '../utils/helpers'
import ProductFilter from './ProductFilter'


const Food = () => {
  
  const dispatch = useAppDispatch()
  const {products_loading, products_error} = useAppSelector(state=>state.product)
  const showProducts = useAppSelector(state=>state.product.filters.filteredData)
 
  useEffect(()=>{
    dispatch(getProductItems())
    // eslint-disable-next-line
  },[])

 
  if(products_loading){
    return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
    )
    }
    if(products_error){
      return (
      <div className="flex items-center justify-center my-20">
        <h1 className='text-3xl font-bold text-blue-500 text-center'>Unable to load products</h1>
      </div>
      )
      }

  return (
   
     <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-blue-600 font-bold text-4xl text-center'>Top Rated Dog Products</h1>

      <ProductFilter />

      {/* Display Food products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
              {showProducts.map((item)=>
              (
                <div key={item.id} className='shadow-lg rounded-lg hover:scale-105  duration-300 will-change-backface-visibility'>
                  <div className=' h-[400px] p-4 w-full rounded-t-lg flex justify-center items-center'>
                    <img src={item.image} alt={item.title} className='max-h-[300px] object-fit '/>
                  </div>
                  <div className='flex justify-between px-2 py-4 gap-5 '>
                    <p className='font-bold'>{item.title}</p>
                    <p>
                      <span className='bg-blue-500 text-white p-1 rounded-full'>{formatPrice(item.price)}</span>
                    </p>
                  </div>
                </div>
              )
            )}

            
      </div> 

    </div> 
  )
}

export default Food