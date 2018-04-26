import { Reducers } from "./../../common/types/reducer";
import { connect } from "react-redux";
import SearchResult from "../../components/searchResult/index";
import { checkAvailability } from "./helpers/checkAvailability";

const mapStateToProps = (s: Reducers) => ({
  results: s.searchHotel.searchResult.filter(hotel => {
    return (
      checkAvailability(
        hotel.availability,
        s.searchHotel.from,
        s.searchHotel.to
      ) &&
      hotel.price < s.filters.customMax &&
      (!s.filters.hotelName
        ? true
        : hotel.name
            .toLowerCase()
            .indexOf(s.filters.hotelName.toLowerCase()) !== -1)
    );
  })
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
