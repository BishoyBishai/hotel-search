import { HotelSearchStore } from "../../containers/hotelSearch/types";
import { FiltersStore } from '../../containers/filters/types';
export interface Reducers {
  router;
  searchHotel: HotelSearchStore;
  filters:FiltersStore
}

export interface LoadingProps {
  loading: boolean;
  error: boolean;
  errorMsg: string;
}
