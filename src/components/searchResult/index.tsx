import * as React from "react";
import { SearchResultProps } from "./types";
import { Card, Header } from "semantic-ui-react";
import Hotel from "./hotel";
import SortListSection from "./../../containers/sortList";
import "./style.scss";
const SearchResult = ({ results, totalNight }: SearchResultProps) => (
  <div>
    <div className="search-result-header">
      <div>
        {!isNaN(totalNight) && (
          <Header
            as="h3"
            content={`${totalNight}  ${totalNight > 1 ? "Nights" : "Night"}`}
          />
        )}
      </div>
      <SortListSection />
    </div>
    <Card.Group as={Card.Group}>
      {results.map(hotel => (
        <Hotel key={`${hotel.city}_${hotel.name}`} {...hotel} />
      ))}
    </Card.Group>
  </div>
);

export default SearchResult;
