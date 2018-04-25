import { HotelSearchStore } from "./../types";
import { searchHotelReducer } from "./reducer";
import { CHANGE_START_DATE, CHANGE_END_DATE } from "../constants";
import * as moment from "moment";
import { DATE_FORMAT } from "../../../common/constants/date";
describe("hotel search reducer", () => {
  let initialState: HotelSearchStore;
  beforeEach(() => {
    initialState = {
      from: null,
      to: null
    };
  });
  test("should return initial state", () => {
    expect(searchHotelReducer(initialState, { type: "" })).toMatchObject(
      initialState
    );
  });
  test("should return From date less than To date one day", () => {
    expect(
      searchHotelReducer(initialState, {
        type: CHANGE_END_DATE,
        payload: moment()
      }).from.format(DATE_FORMAT)
    ).toBe(
      moment()
        .subtract(1, "days")
        .format(DATE_FORMAT)
    );
  });
  test("should return To date more than From date one day", () => {
    expect(
      searchHotelReducer(initialState, {
        type: CHANGE_START_DATE,
        payload: moment()
      }).to.format(DATE_FORMAT)
    ).toBe(
      moment()
        .add(1, "days")
        .format(DATE_FORMAT)
    );
  });
});
