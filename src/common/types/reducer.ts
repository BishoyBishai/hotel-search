import { HotelSearchStore } from "../../containers/hotelSearch/types";
import { FiltersStore } from "../../containers/filters/types";
import { SortStore } from "../../containers/sortList/types";
export interface Reducers {
  router;
  searchHotel: HotelSearchStore;
  filters: FiltersStore;
  sort: SortStore;
}

export interface LoadingProps {
  loading: boolean;
  error?: boolean;
  errorMsg?: string;
}
