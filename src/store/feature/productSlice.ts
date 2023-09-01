import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, ProductState } from "../../types";
import { getUniqueValues } from "../../utils/helpers";
import axios, {AxiosResponse} from 'axios'
import { SortOption } from "../../types";
const url = 'https://fakestoreapi.com/products'

const initialState: ProductState={
    isSidebarOpen: false,
    products_loading: false,
    products_error: null,
    products: [],
    filters: {
        filteredData: [],
    },
    categories: [],
    sort: SortOption.PriceLowest
}


export const getProductItems = createAsyncThunk(
  'product/getProductItems',
  async () => {
    const resp: AxiosResponse<ApiResponse[]>  = await axios.get<ApiResponse[]>(url);
      return resp.data
  }
)

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        toggleSidebar: (state:ProductState) => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        filterByCategory: (state:ProductState, action) => {
            const category = action.payload;
            let newProducts = [...state.products]
            let filter_data = newProducts

            if (category === 'all') {
              filter_data =  state.products;
                // Reset to original data if category is 'all'
              } else {
                filter_data = newProducts.filter(product => product.category === category);
               }
               switch (state.sort) {
                case SortOption.PriceLowest:
                  state.filters.filteredData = filter_data.sort((a, b) => a.price - b.price);
                  break;
  
                case SortOption.PriceHighest:
                  state.filters.filteredData = filter_data.sort((a, b) => b.price - a.price);
                  break;  
  
                case SortOption.NameA:
                  state.filters.filteredData = filter_data.sort((a, b) => a.title.localeCompare(b.title));
                  break;
  
                case SortOption.NameZ:
                  state.filters.filteredData = filter_data.sort((a, b) => b.title.localeCompare(a.title));
                  break;
              
                default:
                  state.filters.filteredData = newProducts
                  break;
              } 

          },
        updateSort: (state:ProductState, action) => {
            const selected_sort = action.payload;
            let newProducts = [...state.filters.filteredData]
            
           state.sort = selected_sort
            switch (state.sort) {
              case SortOption.PriceLowest:
                state.filters.filteredData = newProducts.sort((a, b) => a.price - b.price);
                break;

              case SortOption.PriceHighest:
                state.filters.filteredData = newProducts.sort((a, b) => b.price - a.price);
                break;  

              case SortOption.NameA:
                state.filters.filteredData = newProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;

              case SortOption.NameZ:
                state.filters.filteredData = newProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            
              default:
                state.filters.filteredData = newProducts
                break;
            }    
              
          },
    },
    extraReducers: (builder) => {
      builder
      .addCase(getProductItems.pending, (state)=>{
        state.products_loading = true
        //console.log('PENDING...',state.products_loading);
      })
      .addCase(getProductItems.fulfilled, (state,action)=>{
        state.products_loading = false;
        state.products = action.payload
        state.filters.filteredData = action.payload.sort((a, b) => a.price - b.price)
        state.categories = getUniqueValues(action.payload, 'category')
        //console.log('Fulfill...');
      })
      .addCase(getProductItems.rejected, (state, action)=>{
        state.products_loading = false;
        state.products_error = action.error.message as string
        console.log('REJECTED...',action);
      })
    }
})


export default ProductSlice.reducer;
export const { toggleSidebar, filterByCategory, updateSort} = ProductSlice.actions

