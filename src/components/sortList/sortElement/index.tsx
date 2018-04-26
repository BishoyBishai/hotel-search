import * as React from "react";
import { Button } from "semantic-ui-react";
import { SortElementProps } from "./types";
const SortElement = ({ name, state, onClick, type }: SortElementProps) => (
  <Button
    color={state ? "green" : null}
    size="mini"
    onClick={() => {
      onClick(type);
    }}
  >
    {name}
  </Button>
);

export default SortElement;
