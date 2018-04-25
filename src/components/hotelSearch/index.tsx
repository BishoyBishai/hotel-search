import * as React from "react";
import { Header, Form, Icon } from "semantic-ui-react";
import DatePickerField from "./datePickerField/index";
import { HotelSearchSectionProps } from "./types";
import * as moment from "moment";
import "./style.scss";
const HotelSearchSection = ({
  from,
  to,
  changeStartDateAction,
  changeEndDateAction
}: HotelSearchSectionProps) => (
  <div className="hotel-search">
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <DatePickerField
            onChange={changeStartDateAction}
            value={from}
            placeholder="From"
            min={moment()}
            from={from}
            to={to}
          />
        </Form.Field>

        <Form.Field>
          <DatePickerField
            onChange={changeEndDateAction}
            value={to}
            placeholder="To"
            min={moment()}
            from={from}
            to={to}
          />
        </Form.Field>

        <Form.Button
          width="4"
          className="hotel-search-btn"
          icon
          labelPosition="left"
          color="red"
          disabled={!from}
        >
          <Icon name="search" />Search
        </Form.Button>
      </Form.Group>
    </Form>
  </div>
);

export default HotelSearchSection;
