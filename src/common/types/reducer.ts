import { HotelSearchStore } from "../../containers/hotelSearch/types";
export interface Reducers {
  router;
  searchHotel: HotelSearchStore;
}

export interface LoadingProps {
  loading: boolean;
  error: boolean;
  errorMsg: string;
}
