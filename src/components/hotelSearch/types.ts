import { LoadingProps } from './../../common/types/reducer';
import * as moment from "moment";
export interface HotelSearchSectionProps extends LoadingProps {
  from: moment.Moment;
  to: moment.Moment;
  changeStartDateAction: (d) => void;
  changeEndDateAction: (d) => void;
  startSearchAction: () => void;
}
