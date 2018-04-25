import * as React from "react";
import { Header } from "semantic-ui-react";
import DatePicker from "react-datepicker";

import * as moment from "moment";

import { DatePickerFieldProps } from "./type";
import { DATE_FORMAT } from "../../../common/constants/date";
import CustomDatePicker from "../../common/customDatePicker/index";
const DatePickerField = ({
  value,
  to,
  from,
  min,
  placeholder,
  onChange
}: DatePickerFieldProps) => (
  <div>
    <Header content="To" as="h5" />
    <DatePicker
      customInput={<CustomDatePicker value={value} placeholder="To" />}
      selected={value}
      selectsStart
      startDate={from}
      endDate={to}
      minDate={min}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat={DATE_FORMAT}
    />
  </div>
);

export default DatePickerField;
