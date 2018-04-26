import { Reducers } from "./../../common/types/reducer";
import { connect } from "react-redux";
import SearchResult from "../../components/searchResult/index";
import { checkAvailability } from "./helpers/checkAvailability";
import * as moment from "moment";

const mapStateToProps = (s: Reducers) => {
  const {
    searchHotel: { searchResult, to, from },
    filters: { hotelName, customMax },
    sort: { byName, byPrice }
  } = s;
  let filteredResults = searchResult.filter(hotel => {
    return (
      checkAvailability(hotel.availability, from, to) &&
      hotel.price < customMax &&
      (!hotelName
        ? true
        : hotel.name.toLowerCase().indexOf(hotelName.toLowerCase()) !== -1)
    );
  });
  filteredResults = byName
    ? filteredResults.sort((r1, r2) => (r1.name < r2.name ? -1 : 1))
    : filteredResults;
  filteredResults = byPrice
    ? filteredResults.sort((r1, r2) => (r1.price < r2.price ? -1 : 1))
    : filteredResults;
  return {
    totalNight: moment(to).diff(from, "days"),
    filteredResults,
    results: searchResult
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
