import { Reducers } from "./../../common/types/reducer";
import { connect } from "react-redux";
import SortList from "../../components/sortList/index";
import { SortEnum } from "../../components/sortList/types";
import { toggleSortAction } from "./actions";

const mapStateToProps = (s: Reducers) => ({
  ...s.sort
});
const mapDispatchToProps = dispatch => ({
  onClick: (d: SortEnum) => dispatch(toggleSortAction(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
