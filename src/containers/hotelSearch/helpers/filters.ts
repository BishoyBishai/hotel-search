import { PriceFilterRange } from "./../../filters/types";
import { HotelEntity } from "../types";
export function getMaxMinSearchResult(hotels: HotelEntity[]): PriceFilterRange {
  const result: PriceFilterRange = {
    maxPrice: null,
    minPrice: null
  };
  hotels.map(hotel => {
    if (!result.minPrice || result.minPrice > hotel.price)
      result.minPrice = hotel.price;
    if (!result.maxPrice || result.maxPrice < hotel.price)
      result.maxPrice = hotel.price;
  });
  return result;
}
