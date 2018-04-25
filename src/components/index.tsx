import * as React from "react";
import { connect } from "react-redux";
import "./style.scss";
import HeaderBar from "./header/index";
import HotelSearchSection from "./../containers/hotelSearch";
import FiltersSection from "./../containers/filters";
import { Grid, Header } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HeaderBar />
        <HotelSearchSection />
        <Grid>
          <Grid.Row columns="equal" className="filters-section">
            <Grid.Column width={4}>
              <Header as="h3" content="Show results for" />
              <FiltersSection />
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
