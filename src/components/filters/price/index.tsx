import * as React from "react";
import { Input, Header } from "semantic-ui-react";
import { PriceFilterProps } from "./types";
const PriceFilter = ({
  customMax,
  minPrice,
  maxPrice,
  onRangeChange
}: PriceFilterProps) => {
  return (
    <div>
      <Header as="h4">
        Max Price:{" "}
        <Input
          value={customMax}
          type="number"
          min={minPrice}
          onChange={(e, { value }) => {
            onRangeChange(+value);
          }}
        />
      </Header>
      <Input
        min={minPrice}
        max={maxPrice}
        fluid
        onChange={(e, { value }) => {
          onRangeChange(+value);
        }}
        step={(maxPrice - minPrice) / 10}
        type="range"
        value={customMax}
      />
    </div>
  );
};

export default PriceFilter;
