import * as React from "react";
import { SearchResultProps } from "./types";
import { Card, Header } from "semantic-ui-react";
import Hotel from "./hotel";
const SearchResult = ({ results }: SearchResultProps) => (
  <div>
    {results.length > 0 && (
      <Header
        as="h3"
        content={`${results.length}  ${
          results.length > 1 ? "Hotels" : "Hotel"
        }`}
      />
    )}
    <Card.Group as={Card.Group}>
      {results.map(hotel => (
        <Hotel key={`${hotel.city}_${hotel.name}`} {...hotel} />
      ))}
    </Card.Group>
  </div>
);

export default SearchResult;
