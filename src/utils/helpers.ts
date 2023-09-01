import { ApiResponse, UniqueValuesArray } from "../types";

export const formatPrice = (number:number) => {
  return new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD',
  }).format(number)

}

export const getUniqueValues = (data: ApiResponse[], type: keyof ApiResponse):UniqueValuesArray => {
    const uniqueSet = new Set(data.map((item) => item[type].toString()));
    const uniqueArray = Array.from(uniqueSet);
    uniqueArray.sort(); 
    uniqueArray.unshift('all');     
    return uniqueArray;
  };