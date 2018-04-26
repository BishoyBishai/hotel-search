import * as moment from "moment";
import {
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  SEARCH_START_LOADING,
  STORE_SEARCH_RESULT,
  SEARCH_FAILED
} from "../constants";
import { getAllHotels } from "../apis";
import { HotelsListResponse } from "../types";
export function changeStartDateAction(from: moment.Moment) {
  return function(dispatch) {
    dispatch({ type: CHANGE_START_DATE, payload: from });
  };
}
export function changeEndDateAction(to: moment.Moment) {
  return function(dispatch) {
    dispatch({ type: CHANGE_END_DATE, payload: to });
  };
}

export function startSearchAction() {
  return function(dispatch) {
    dispatch({ type: SEARCH_START_LOADING });
    getAllHotels()
      .then((hotels: HotelsListResponse) => {
        dispatch({ type: STORE_SEARCH_RESULT, payload: hotels.hotels });
      })
      .catch(err => {
        dispatch({ type: SEARCH_FAILED, payload: err });
      });
  };
}
