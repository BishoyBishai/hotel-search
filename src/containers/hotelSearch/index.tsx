import HotelSearchSection from "../../components/hotelSearch/index";
import { Reducers } from "../../common/types/reducer";
import { changeEndDateAction, startSearchAction, changeStartDateAction } from './actions/index';
import { connect } from "react-redux";

const mapStateToProps = (s: Reducers) => ({
  ...s.searchHotel
});
const mapDispatchToProps = dispatch => ({
  changeStartDateAction: id => dispatch(changeStartDateAction(id)),
  changeEndDateAction: id => dispatch(changeEndDateAction(id)),
  startSearchAction: () => dispatch(startSearchAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchSection);
