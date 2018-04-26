import { Reducers } from "./../../common/types/reducer";
import { connect } from "react-redux";
import SearchResult from "../../components/searchResult/index";
import { checkAvailability } from "./helpers/checkAvailability";
import * as moment from "moment";

const mapStateToProps = (s: Reducers) => {
  const {
    searchHotel: { searchResult, to, from },
    filters: { hotelName, customMax }
  } = s;
  return {
    totalNight: moment(to).diff(from, "days"),
    results: searchResult.filter(hotel => {
      return (
        checkAvailability(hotel.availability, from, to) &&
        hotel.price < customMax &&
        (!hotelName
          ? true
          : hotel.name.toLowerCase().indexOf(hotelName.toLowerCase()) !== -1)
      );
    })
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
