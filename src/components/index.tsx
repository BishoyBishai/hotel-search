import * as React from "react";
import { connect } from "react-redux";
import "./style.scss";
import HeaderBar from "./header/index";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HeaderBar />
      </div>
    );
  }
}

export default App;
