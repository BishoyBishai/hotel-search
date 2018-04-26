import { TOGGLE_SORT_BY_NAME, TOGGLE_SORT_BY_PRICE } from "./constants";
import { AnyAction } from "redux";
import { SortStore } from "./types";

const initialState: SortStore = {
  byPrice: false,
  byName: false
};
export function sortReducer(
  state = initialState,
  action: AnyAction
): SortStore {
  switch (action.type) {
    case TOGGLE_SORT_BY_NAME: {
      return {
        ...state,
        byName: !state.byName
      };
    }
    case TOGGLE_SORT_BY_PRICE: {
      return {
        ...state,
        byPrice: !state.byPrice
      };
    }
  }
  return state;
}
