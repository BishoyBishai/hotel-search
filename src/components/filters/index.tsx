import * as React from "react";
import HotelNameFilter from "./hotelName/index";
import PriceFilter from "./price/index";
import { FiltersProps } from "./types";
import "./style.scss";
const FiltersSection = ({
  hotelName,
  onHotelNameChange,
  customMax,
  minPrice,
  maxPrice,
  onRangeChange
}: FiltersProps) => {
  return (
    <div className="filters">
      <HotelNameFilter
        hotelName={hotelName}
        onHotelNameChange={onHotelNameChange}
      />
      <PriceFilter
        customMax={customMax}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onRangeChange={onRangeChange}
      />
    </div>
  );
};

export default FiltersSection;
