import * as React from "react";
import { SearchResultProps } from "./types";
import { Card } from "semantic-ui-react";
import Hotel from "./hotel";
const SearchResult = ({ results }: SearchResultProps) => (
  <Card.Group>
    {results.map(hotel => (
      <Hotel key={`${hotel.city}_${hotel.name}`} {...hotel} />
    ))}
  </Card.Group>
);

export default SearchResult;
