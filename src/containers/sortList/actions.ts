import { SortEnum } from "./../../components/sortList/types";
import { TOGGLE_SORT_BY_NAME, TOGGLE_SORT_BY_PRICE } from "./constants";
export function toggleSortAction(type: SortEnum) {
  return function(dispatch) {
    switch (type) {
      case SortEnum.BY_NAME:
        dispatch({ type: TOGGLE_SORT_BY_NAME });
        break;
      case SortEnum.BY_PRICE:
        dispatch({ type: TOGGLE_SORT_BY_PRICE });
        break;
    }
  };
}
