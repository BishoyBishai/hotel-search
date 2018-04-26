import * as moment from "moment";
import { LoadingProps } from '../../common/types/reducer';
export interface HotelSearchStore extends LoadingProps {
  from: moment.Moment;
  to: moment.Moment;
  searchResult: HotelEntity[];
}

export interface HotelsListResponse {
  hotels: HotelEntity[];
}
export interface HotelEntity {
  name: string;
  price: number;
  city: string;
  availability?: (AvailabilityEntity)[] | null;
}
export interface AvailabilityEntity {
  from: string;
  to: string;
}
