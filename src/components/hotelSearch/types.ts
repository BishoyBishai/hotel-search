import * as moment from "moment";
export interface HotelSearchSectionProps {
  from: moment.Moment;
  to: moment.Moment;
  changeStartDateAction:(d)=>void;
  changeEndDateAction:(d)=>void;

}
