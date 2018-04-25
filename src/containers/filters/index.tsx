import HotelSearchSection from "../../components/hotelSearch/index";
import { Reducers } from "../../common/types/reducer";
import { connect } from "react-redux";
import FiltersSection from "../../components/filters/index";
import { changePriceFilterValue, changeFilterHotelNameAction } from "./actions";

const mapStateToProps = (s: Reducers) => ({
  hotelName: s.filters.hotelName,
  customMax: s.filters.customMax,
  minPrice: s.filters.minPrice,
  maxPrice: s.filters.maxPrice
});
const mapDispatchToProps = dispatch => ({
  onRangeChange: (value: number) => dispatch(changePriceFilterValue(value)),
  onHotelNameChange: (value: string) =>
    dispatch(changeFilterHotelNameAction(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
