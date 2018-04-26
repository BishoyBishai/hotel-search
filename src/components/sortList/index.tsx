import * as React from "react";
import { Button } from "semantic-ui-react";
import SortElement from "./sortElement/index";
import { SortEnum, SortListProps } from "./types";
const SortList = ({ byPrice, byName, onClick }: SortListProps) => (
  <div>
    Sort By: {"  "}
    <SortElement
      type={SortEnum.BY_NAME}
      name="By Name"
      state={byName}
      onClick={onClick}
    />
    <SortElement
      type={SortEnum.BY_PRICE}
      name="By Price"
      state={byPrice}
      onClick={onClick}
    />
  </div>
);

export default SortList;
