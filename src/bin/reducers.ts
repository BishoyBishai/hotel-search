import { combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";
import { searchHotelReducer as searchHotel } from "../containers/hotelSearch/reducer/reducer";
import { filtersReducer as filters } from "../containers/filters/reducer";

export const reducers = combineReducers({
  router,
  searchHotel,
  filters
});
