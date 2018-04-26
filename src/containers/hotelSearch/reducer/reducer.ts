import { HotelSearchStore } from "../types";
import {
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  SEARCH_START_LOADING,
  SEARCH_END_LOADING,
  SEARCH_FAILED,
  STORE_SEARCH_RESULT
} from "../constants";
import { DATE_FORMAT } from "./../../../common/constants/date";
import { AnyAction } from "redux";
import * as moment from "moment";
const initialState: HotelSearchStore = {
  from: null,
  to: null,
  searchResult: [],
  loading: false,
  error: false,
  errorMsg: null
};
export function searchHotelReducer(
  state = initialState,
  action: AnyAction
): HotelSearchStore {
  switch (action.type) {
    case CHANGE_START_DATE: {
      const from: moment.Moment = action.payload;
      return {
        ...state,
        from,
        to: moment(from, DATE_FORMAT).add(1, "days")
      };
    }
    case CHANGE_END_DATE: {
      const to: moment.Moment = action.payload;
      const from = state.from
        ? state.from
        : moment(to, DATE_FORMAT).subtract(1, "days");
      return {
        ...state,
        from,
        to
      };
    }
    case SEARCH_START_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case SEARCH_END_LOADING: {
      return {
        ...state,
        loading: false
      };
    }
    case SEARCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload
      };
    }
    case STORE_SEARCH_RESULT: {
      return {
        ...state,
        loading: false,
        searchResult: action.payload
      };
    }
  }
  return state;
}
