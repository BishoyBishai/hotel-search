import { PriceFilterRange } from "./types";
import {
  CHANGE_FILTER_HOTEL_NAME,
  CHANGE_PRICE_FILTER_LIMITS,
  CHANGE_PRICE_FILTER_VALUES
} from "./constants";

export function changeFilterHotelNameAction(name: string) {
  return function(dispatch) {
    dispatch({ type: CHANGE_FILTER_HOTEL_NAME, payload: name });
  };
}
export function changePriceFilterLimits(range: PriceFilterRange) {
  return function(dispatch) {
    dispatch({ type: CHANGE_PRICE_FILTER_LIMITS, payload: range });
  };
}
export function changePriceFilterValue(value: number) {
  return function(dispatch) {
    dispatch({ type: CHANGE_PRICE_FILTER_VALUES, payload: value });
  };
}
