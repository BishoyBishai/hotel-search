import { initialState, filtersReducer } from "./reducer";
import { FiltersStore } from "./types";
import {
  CHANGE_FILTER_HOTEL_NAME,
  CHANGE_PRICE_FILTER_LIMITS,
  CHANGE_PRICE_FILTER_VALUES
} from "./constants";
describe("filters reducer", () => {
  let testInitialState: FiltersStore;
  beforeEach(() => {
    testInitialState = initialState;
  });
  test("should change name of hotel filter", () => {
    expect(
      filtersReducer(testInitialState, {
        type: CHANGE_FILTER_HOTEL_NAME,
        payload: "test"
      }).hotelName
    ).toBe("test");
  });
  test("should change custom max of search", () => {
    expect(
      filtersReducer(testInitialState, {
        type: CHANGE_PRICE_FILTER_VALUES,
        payload: 10
      }).customMax
    ).toBe(10);
  });
  test("should change limit of range price search", () => {
    expect(
      filtersReducer(testInitialState, {
        type: CHANGE_PRICE_FILTER_LIMITS,
        payload: {
          maxPrice: 10,
          minPrice: 1
        }
      })
    ).toMatchObject({
      ...testInitialState,
      maxPrice: 10,
      minPrice: 1,
      customMax: 10
    });
  });
});
