import * as moment from "moment";
export interface DatePickerFieldProps {
  value: moment.Moment;
  to: moment.Moment;
  from: moment.Moment;
  min: moment.Moment;
  placeholder: string;
  onChange: (d) => void;
}
