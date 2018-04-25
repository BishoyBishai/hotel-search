export interface FiltersStore extends PriceFilterRange {
  hotelName: string;
  customMax: number;
}
export interface PriceFilterRange {
  minPrice: number;
  maxPrice: number;
}
