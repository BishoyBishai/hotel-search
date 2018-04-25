export interface PriceFilterProps {
  customMax: number;
  minPrice: number;
  maxPrice: number;
  onRangeChange: (value:number) => void;
}
