import { HotelEntity } from "../../containers/hotelSearch/types";
export interface SearchResultProps {
  results: HotelEntity[];
  filteredResults: HotelEntity[];
  totalNight:number;
}
