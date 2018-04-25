import HotelSearchSection from "../../components/hotelSearch/index";
import { Reducers } from "../../common/types/reducer";
import { changeEndDateAction } from "./actions/index";
import { connect } from "react-redux";

const mapStateToProps = (s: Reducers) => ({
  from: s.searchHotel.from,
  to: s.searchHotel.to
});
const mapDispatchToProps = dispatch => ({
  changeStartDateAction: id => dispatch(changeEndDateAction(id)),
  changeEndDateAction: id => dispatch(changeEndDateAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchSection);
