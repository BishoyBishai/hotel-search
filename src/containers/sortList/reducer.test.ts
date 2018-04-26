import { SortStore } from "./types";
import { sortReducer } from "./reducer";
import { TOGGLE_SORT_BY_NAME, TOGGLE_SORT_BY_PRICE } from "./constants";
describe("sort reducer", () => {
  let initialState: SortStore;
  beforeEach(() => {
    initialState = {
      byName: false,
      byPrice: false
    };
  });

  test("show make sort by name", () => {
    expect(
      sortReducer(initialState, { type: TOGGLE_SORT_BY_NAME })
    ).toMatchObject({ ...initialState, byName: true });
  });
  test("show make sort by price", () => {
    expect(
      sortReducer(initialState, { type: TOGGLE_SORT_BY_PRICE })
    ).toMatchObject({ ...initialState, byPrice: true });
  });
});
