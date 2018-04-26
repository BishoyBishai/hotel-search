import * as React from "react";
import { SearchResultProps } from "./types";
import { Card, Header } from "semantic-ui-react";
import Hotel from "./hotel";
import SortListSection from "./../../containers/sortList";
import "./style.scss";
const SearchResult = ({
  results,
  filteredResults,
  totalNight
}: SearchResultProps) => (
  <div>
    {results.length > 0 && (
      <div>
        <div className="search-result-header">
          <div>
            {!isNaN(totalNight) && (
              <Header
                as="h3"
                content={`${totalNight}  ${
                  totalNight > 1 ? "Nights" : "Night"
                }`}
              />
            )}
          </div>
          <SortListSection />
        </div>
        {filteredResults.length === 0 ? (
          <Header content="No results matched your search" />
        ) : (
          <Card.Group as={Card.Group}>
            {filteredResults.map(hotel => (
              <Hotel key={`${hotel.city}_${hotel.name}`} {...hotel} />
            ))}
          </Card.Group>
        )}
      </div>
    )}
  </div>
);

export default SearchResult;
