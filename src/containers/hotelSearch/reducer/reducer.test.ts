import { SEARCH_FAILED, STORE_SEARCH_RESULT } from "./../constants";
import { HotelSearchStore } from "./../types";
import { searchHotelReducer } from "./reducer";
import {
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  SEARCH_START_LOADING
} from "../constants";
import * as moment from "moment";
import { DATE_FORMAT } from "../../../common/constants/date";
describe("hotel search reducer", () => {
  let initialState: HotelSearchStore;
  beforeEach(() => {
    initialState = {
      from: null,
      to: null,
      searchResult: [],
      loading: false,
      error: false,
      errorMsg: null
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
  test("should make loading true", () => {
    expect(
      searchHotelReducer(initialState, {
        type: SEARCH_START_LOADING
      })
    ).toMatchObject({ ...initialState, loading: true, error: false });
  });
  test("should make error true", () => {
    expect(
      searchHotelReducer(
        { ...initialState, loading: true },
        {
          type: SEARCH_FAILED
        }
      )
    ).toMatchObject({ ...initialState, loading: false, error: true });
  });
  test("should store data", () => {
    const data = [
      {
        name: "Media One Hotel",
        price: 102.2,
        city: "dubai",
        availability: [
          { from: "10-10-2020", to: "15-10-2020" },
          { from: "25-10-2020", to: "15-11-2020" },
          { from: "10-12-2020", to: "15-12-2020" }
        ]
      }
    ];
    expect(
      searchHotelReducer(
        { ...initialState, loading: true },
        {
          type: STORE_SEARCH_RESULT,
          payload: data
        }
      ).searchResult
    ).toMatchObject(data);
  });
});
