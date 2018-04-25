import { AnyAction } from "redux";
import { FiltersStore, PriceFilterRange } from "./types";
import {
  CHANGE_FILTER_HOTEL_NAME,
  CHANGE_PRICE_FILTER_LIMITS,
  CHANGE_PRICE_FILTER_VALUES
} from "./constants";
const initialState: FiltersStore = {
  hotelName: null,
  maxPrice: 100,
  minPrice: 10,
  customMax: 10
};
export function filtersReducer(
  state = initialState,
  action: AnyAction
): FiltersStore {
  switch (action.type) {
    case CHANGE_FILTER_HOTEL_NAME: {
      return {
        ...state,
        hotelName: action.payload as string
      };
    }
    case CHANGE_PRICE_FILTER_LIMITS: {
      return {
        ...state,
        ...(action.payload as PriceFilterRange)
      };
    }
    case CHANGE_PRICE_FILTER_VALUES: {
      return {
        ...state,
        customMax: action.payload as number
      };
    }
  }
  return state;
}
