import * as React from "react";
import { Input } from "semantic-ui-react";
import { HotelNameFilterProps } from "./types";
const HotelNameFilter = ({
  hotelName,
  onHotelNameChange
}: HotelNameFilterProps) => (
  <Input
    icon="search"
    value={hotelName||""}
    fluid
    onChange={(e, { value }) => {
      onHotelNameChange(value);
    }}
    placeholder="Hotel Name..."
  />
);

export default HotelNameFilter;
