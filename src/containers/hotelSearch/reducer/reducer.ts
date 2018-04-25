import { HotelSearchStore } from "../types";
import { CHANGE_START_DATE, CHANGE_END_DATE } from "../constants";
import { DATE_FORMAT } from "./../../../common/constants/date";
import { AnyAction } from "redux";
import * as moment from "moment";
const initialState: HotelSearchStore = {
  from: null,
  to: null
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
  }
  return state;
}
