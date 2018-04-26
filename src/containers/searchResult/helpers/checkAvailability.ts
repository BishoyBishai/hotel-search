import { AvailabilityEntity } from "../../hotelSearch/types";
import * as moment from "moment";
export function checkAvailability(
  availability: AvailabilityEntity[],
  from: moment.Moment,
  to: moment.Moment
) {
  for (let e = 0; e < availability.length; e++) {
    const period = availability[e];
    if (moment(period.from) < moment(from) && moment(period.to) > moment(to)) {
      return true;
    }
  }
}
