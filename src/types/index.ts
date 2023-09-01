export enum SortOption {
    PriceLowest = 'price-lowest',
    PriceHighest = 'price-highest',
    NameA = 'name-a',
    NameZ = 'name-z',
  }

export type MenuItemType = {
    id: number
    title: string;
    icon: React.ReactNode;
 }

 export type HeadlineItemType = {
    id: number;
    title: string;
    description: string;
    image: string;
 }

export type CategoryItemType = {
    id: number;
    name: string;
    image: string;
}

export type UniqueValuesArray = string[];

type RatingType = {
    rate: number;
    count: number;
  }
 export type ApiResponse = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingType;
  }

  type FilterType = {
    filteredData: ApiResponse[]
}

  export type ProductState = {
    isSidebarOpen: boolean;
    products_loading: boolean;
    products_error: null | string;
    products: ApiResponse[],
    filters: FilterType,
    categories: string[],
    sort: string,
}