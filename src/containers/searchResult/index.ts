import { Reducers } from "./../../common/types/reducer";
import { connect } from "react-redux";
import SearchResult from "../../components/searchResult/index";

const mapStateToProps = (s: Reducers) => ({
  results: s.searchHotel.searchResult
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
