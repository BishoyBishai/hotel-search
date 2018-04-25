import * as React from "react";
import { connect } from "react-redux";
import "./style.scss";
import HeaderBar from "./header/index";
import HotelSearchSection from "./../containers/hotelSearch";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HeaderBar />
        <HotelSearchSection />
      </div>
    );
  }
}

export default App;
