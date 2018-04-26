import * as React from "react";
import { HotelProps } from "./types";
import { Card } from "semantic-ui-react";
import { CURRENCY } from "../../../common/constants/date";
const Hotel = ({ name, price, city }: HotelProps) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{city}</Card.Meta>
      <Card.Description>
        {price} {CURRENCY}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Hotel;
