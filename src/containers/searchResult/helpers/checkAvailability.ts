import { AvailabilityEntity } from "../../hotelSearch/types";
import * as moment from "moment";
import { DATE_FORMAT } from "../../../common/constants/date";
export function convertStringToMoment(str) {
  return moment(moment(str, DATE_FORMAT).toDate());
}
export function checkAvailability(
  availability: AvailabilityEntity[],
  from: moment.Moment,
  to: moment.Moment
) {
  for (let e = 0; e < availability.length; e++) {
    const period = availability[e];
    if (
      convertStringToMoment(period.from) <= moment(from) &&
      convertStringToMoment(period.to) >= moment(to)
    ) {
      return true;
    }
  }
  return false;
}
