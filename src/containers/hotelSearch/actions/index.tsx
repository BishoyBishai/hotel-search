import * as moment from "moment";
import { CHANGE_START_DATE, CHANGE_END_DATE } from "../constants";
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
